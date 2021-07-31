import type { BestPrograms } from "../types/best_programs"

import { autocompleteTextInput } from "./src/autocompleteTextInput"
import { createTable } from "./src/createTable"
import { filterProgram } from "./src/filterProgram"

try {
    const response = await fetch("./best_programs.json")
    if (!response.ok) {
        throw `File (${response.url}) could not be fetched (${response.status}=${response.statusText})`
    }
    const jsonData = await response.json() as BestPrograms;
    console.log(jsonData)

    const contentDiv = document.getElementById("content")
    contentDiv.innerText = JSON.stringify(jsonData, undefined, 4)

    const tableDiv = document.getElementById("table")
    const renderTable = (filter?: string) => {
        for (const childNode of tableDiv.childNodes) {
            tableDiv.removeChild(childNode)
        }
        tableDiv.appendChild(createTable([
            "name", "category", "description", "website"
        ], jsonData.programs
            .filter(program => filterProgram(program, filter))
            .map(program => [program.name, program.category, program.description, program.website]
        )))
    }

    const filterInput = document.getElementById("filter") as HTMLInputElement
    renderTable(filterInput.value)
    for (const eventName of ["keyup", "input", "propertychange", "paste", "change"]) {
        filterInput.addEventListener(eventName, () => {
            renderTable(filterInput.value)
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
            return textInput.replace(searchedValue, "") + clickedKeyword.replace(" ", "+")
        }
    })

} catch (err) {
    console.error(err)
}
