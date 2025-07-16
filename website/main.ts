import type { BestPrograms } from "../types/best_programs"

import escapeStringRegexp from "escape-string-regexp"
import sgoasbf from "simple-generic-object-array-search-bar-filter"
import queryString from "query-string"

import { autocompleteTextInput } from "./src/autocompleteTextInput"
import { createProgramList } from "./src/createProgramList"
import { elementFilter } from "./src/filterProgram"

try {
    const response = await fetch("./best_programs.json")
    if (!response.ok) {
        throw `File (${response.url}) could not be fetched (${response.status}=${response.statusText})`
    }
    const jsonData = await response.json() as BestPrograms
    console.log(jsonData)

    const programList = document.getElementById("program-list")
    const programListElement = createProgramList(jsonData.programs)
    programList.removeChild(programList.querySelector("div.loading"))
    programList.appendChild(programListElement)
    const filterList = (filter?: string) => {
        const parsedFilter = sgoasbf.parseFilter(filter)
        const filteredPrograms = jsonData.programs.filter(program => sgoasbf.filterElement(
            program,
            elementFilter,
            parsedFilter
        ).match)
        const programListList = document.getElementById("program-list-list")
        for (const childNode of programListList.childNodes) {
            const element = childNode as HTMLElement
            const elementName = element?.dataset?.name.toLocaleLowerCase()
            if (elementName && childNode.nodeType === Node.ELEMENT_NODE) {
                if (filteredPrograms.some(a => a.name.toLocaleLowerCase() === elementName)) {
                    element?.classList.remove("hide")
                    element?.classList.add("show")
                } else {
                    element?.classList.remove("show")
                    element?.classList.add("hide")
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
            window.history.replaceState(null, null, `?${stringifiedQueryArgs}`)
            filterList(filterInput.value)
        })
    }

    autocompleteTextInput(filterInput, [...new Set(jsonData.programs.reduce(
        (keywords, program) => {
            return keywords.concat(
                elementFilter(program).reduce(
                    (_keywords, _program) => {
                        if (_program.propertyName) {
                            _keywords.push(
                                `${_program.propertyName}=`,
                            )
                            if (
                                _program.type === "number" ||
                                _program.type === "number-array" ||
                                ((_program.type === "string" ||
                                    _program.type ===
                                        "string-array") &&
                                    _program.stringValueToNumberValueMapper !==
                                        undefined)
                            ) {
                                _keywords.push(
                                    `${_program.propertyName}>=`,
                                )
                                _keywords.push(
                                    `${_program.propertyName}<=`,
                                )
                                _keywords.push(
                                    `${_program.propertyName}>`,
                                )
                                _keywords.push(
                                    `${_program.propertyName}<`,
                                )
                                _keywords.push(
                                    `${_program.propertyName}<=>`,
                                )
                            }
                        }
                        if (_program.stringValue) {
                            _keywords.push(
                                _program.stringValue.replace(
                                    / /g,
                                    "+",
                                ),
                            )
                            _keywords.push(
                                ..._program.stringValue.split(/ /g),
                            )
                        }
                        if (_program.stringArrayValue) {
                            _keywords.push(
                                ..._program.stringArrayValue.map(
                                    (a) => a.replace(/ /g, "+"),
                                ),
                            )
                            _keywords.push(
                                ..._program.stringArrayValue.reduce(
                                    (prev, curr) =>
                                        prev.concat(
                                            curr.split(/ /g),
                                        ),
                                    [],
                                ),
                            )
                        }
                        // Integrating numbers as auto completion doesn't add any value
                        //if (_beatmap.numberValue) {
                        //    _keywords.push(`${_beatmap.numberValue}`)
                        //}
                        return _keywords
                    },
                    [] as string[],
                ),
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

    document.querySelectorAll("li.program-tag").forEach(element => {
        element.addEventListener("click", (event) => {
            // If the clicked element is an <a> or inside an <a>, do nothing
            if ((event.target as HTMLElement).closest('a')) return

            const currentContent = filterInput.value.trim()
            const newContent = (element as HTMLElement).dataset?.filter?.trim().split(";").filter(a => a.trim() !== "").join("+") ?? element.textContent.trim()
            filterInput.value = currentContent === "" ? newContent :
                currentContent.includes(newContent) ? `${currentContent
                        .replace(`+${newContent}`, "")
                        .replace(`-${newContent}`, "")
                        .replace(`${newContent}+`, "")
                        .replace(`${newContent}-`, "")
                        .replace(newContent, "")
                    }` :
                    `${currentContent}+${newContent}`
            filterInput.dispatchEvent(new Event('change', {}));
        })

        // Check if the first child is a <code> tag and the second is an <a> tag
        if (element.children.length > 0 && element.children[0].tagName === 'CODE') {
            const copyBtn = document.createElement('a');
            copyBtn.href = '#';
            copyBtn.className = 'copy-button';

            copyBtn.addEventListener('click', (event) => {
                event.preventDefault();
                const codeText = element.children[0].textContent.trim();
                navigator.clipboard.writeText(codeText);
            });

            element.append(copyBtn);
        }
    })

} catch (err) {
    console.error(err)
}
