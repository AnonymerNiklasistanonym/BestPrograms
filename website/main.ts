import type { BestPrograms, Program } from "../types/best_programs"

import * as Handlebars from 'handlebars/runtime'
import "./handlebars/precompiled"


const createTable = (thead: string[], tbody: string[][]) => {
    const div = document.createElement("div")
    div.innerHTML = Handlebars.templates["simple_table"]({
        theadColumns: thead,
        tbodyColumns: tbody,
    })
    return div.firstChild
}

const filterProgram2 = (program: Program, openSourceStrings: string[], filter?: string) => {
    return filter === "" || filter === undefined
            || program.name.toLowerCase().includes(filter)
            || program.category.toLowerCase().includes(filter)
            || program.description.toLowerCase().includes(filter)
            || program.website.toLowerCase().includes(filter)
            || program?.tags.some(tag => tag.toLowerCase().includes(filter))
            || openSourceStrings.some(openSourceString => openSourceString.toLowerCase().includes(filter))
            || (program?.platformInfo.linux ? "linux".includes(filter) : false)
            || (program?.platformInfo.windows ? "windows".includes(filter) : false)
            || (program?.gui ? "gui".includes(filter) : false)
            || (program?.packageManagerInfo?.pacman ? "pacman".includes(filter) : false)
            || (program?.packageManagerInfo?.pacmanAur ? (
                "pacman".includes(filter) || "aur".includes(filter)) : false)
            || (program?.packageManagerInfo?.pacmanAurGit ? (
                "pacman".includes(filter) || "aur".includes(filter)) : false)
            || (program?.packageManagerInfo?.pacmanAurNightly ? (
                "pacman".includes(filter) || "aur".includes(filter)) : false)
            || program?.packageManagerInfo?.pacman?.includes(filter)
            || program?.packageManagerInfo?.pacmanAur?.includes(filter)
            || program?.packageManagerInfo?.pacmanAurGit?.includes(filter)
            || program?.packageManagerInfo?.pacmanAurNightly?.includes(filter)
}

const filterProgram = (program: Program, filter?: string) => {
    // Initially only find all the filter words split by a space
    const programFilters: (string|string[])[] = filter === undefined
        ? [] : filter.toLowerCase().split(" ").map(a => a.trim()).filter(b => b !== "")
    // Find words that should be combined
    for (const programFilter of programFilters) {
        if (typeof programFilter === "string") {
            const andFilter = programFilter.split("+").map(a => a.trim()).filter(b => b !== "")
            if (andFilter.length > 1) {
                programFilters.splice(programFilters.indexOf(programFilter), 1)
                programFilters.push(andFilter)
            }
        }
    }

    const openSourceStrings = ["ClosedSource"]
    if (typeof program?.openSource === "string") {
        openSourceStrings.pop()
        openSourceStrings.push(program.openSource)
    }
    if (Array.isArray(program?.openSource)) {
        openSourceStrings.pop()
        openSourceStrings.push(...program?.openSource)
    }

    return programFilters.length === 0 || programFilters.some(programFilter => {
        if (typeof programFilter === "string") {
            return filterProgram2(program, openSourceStrings, programFilter)
        } else {
            return programFilter.every(a => filterProgram2(program, openSourceStrings, a))
        }
    })
}

fetch("./best_programs.json")
    .then(response => response.json())
    .then(jsonResponse => {
        console.log(jsonResponse)
        const contentDiv = document.getElementById("content")
        contentDiv.innerText = JSON.stringify(jsonResponse, undefined, 4)

        const jsonData = jsonResponse as BestPrograms;
        const tableDiv = document.getElementById("table")

        const renderTable = (filter?: string) => {
            for (const childNode of tableDiv.childNodes) {
                tableDiv.removeChild(childNode)
            }
            tableDiv.appendChild(createTable([
                "name", "category", "description", "website"
            ], jsonData.programs.filter(program => {
                return filterProgram(program, filter)
            }).map(program => {
                return [ program.name, program.category, program.description, program.website ]
            })))
        }

        const filterInput = document.getElementById("filter") as HTMLInputElement

        renderTable(filterInput.value)

        for (const eventName of ["keyup", "input", "propertychange", "paste", "change"]) {
            filterInput.addEventListener(eventName, () => {
                renderTable(filterInput.value)
            })
        }
    })
    .catch(console.error)
