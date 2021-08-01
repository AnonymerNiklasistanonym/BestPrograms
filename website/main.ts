import type { BestPrograms } from "../types/best_programs"

import escapeStringRegexp from "escape-string-regexp"
import * as queryString from "query-string"

import { autocompleteTextInput } from "./src/autocompleteTextInput"
import { createProgramList } from "./src/createProgramList"
import { filterProgram } from "./src/filterProgram"

try {
    const response = await fetch("./best_programs.json")
    if (!response.ok) {
        throw `File (${response.url}) could not be fetched (${response.status}=${response.statusText})`
    }
    const jsonData = await response.json() as BestPrograms;
    console.log(jsonData)

    const programList = document.getElementById("program-list")
    programList.appendChild(createProgramList(jsonData.programs))
    const filterList = (filter?: string) => {
        const filteredPrograms = jsonData.programs.filter(program => filterProgram(program, filter))
        const programListList = document.getElementById("program-list-list")
        for (const childNode of programListList.childNodes) {
            const element = childNode as HTMLElement;
            const elementName = element?.dataset?.name.toLocaleLowerCase()
            if (elementName && childNode.nodeType === Node.ELEMENT_NODE) {
                if (filteredPrograms.some(a => a.name.toLocaleLowerCase() === elementName)) {
                    element?.classList.remove("hide");
                    element?.classList.add("show");
                } else {
                    element?.classList.remove("show");
                    element?.classList.add("hide");
                }
            }
        }
    }

    const filterInput = document.getElementById("filter-text-input") as HTMLInputElement

    const parsedQueryArgs = queryString.parse(location.search)
    if (typeof parsedQueryArgs.q === "string") {
        filterInput.value = parsedQueryArgs.q
    }

    filterList(filterInput.value)
    for (const eventName of ["keyup", "input", "propertychange", "paste", "change"]) {
        filterInput.addEventListener(eventName, () => {
            const stringifiedQueryArgs = queryString.stringify({ q: filterInput.value })
            window.history.replaceState(null, null, stringifiedQueryArgs);
            filterList(filterInput.value)
        })
    }

    autocompleteTextInput(filterInput, [...new Set(jsonData.programs.reduce(
        (keywords, program) => {
            return keywords.concat(
                program.name,
                program.category,
                typeof program?.openSource === "string" ? program.openSource : [],
                program?.packageManagerInfo?.pacman ? program.packageManagerInfo.pacman : [],
                program?.packageManagerInfo?.pacmanAur ? program.packageManagerInfo.pacmanAur : [],
                program?.packageManagerInfo?.pacmanAurGit ? program.packageManagerInfo.pacmanAurGit : [],
                program?.packageManagerInfo?.pacmanAurNightly ? program.packageManagerInfo.pacmanAurNightly : [],
                program?.platformInfo && program?.platformInfo?.linux ? "linux" : [],
                program?.platformInfo && program?.platformInfo?.windows ? "windows" : [],
                program?.tags ? program.tags : []
            )
        }, [] as string[]
    ).map(keyword => keyword.trim().toLowerCase()))], {
        customValueToSearch: textInput => textInput.split(/\+| /).slice(-1).pop(),
        customValueToSetAfterClick: (textInput, searchedValue, clickedKeyword) => {
            return textInput.toLowerCase().replace(
                new RegExp(escapeStringRegexp(searchedValue) + "\s*$"),
                clickedKeyword.replace(" ", "+")
            )
        }
    })

} catch (err) {
    console.error(err)
}
