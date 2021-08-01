import type { Program } from "../../types/best_programs"

const filterProgram2 = (program: Program, filter?: string) => {
    return filter === "" || filter === undefined
            || program.name.toLowerCase().includes(filter)
            || program.category.toLowerCase().includes(filter)
            || program.description.toLowerCase().includes(filter)
            || program.website.toLowerCase().includes(filter)
            || program?.tags.some(tag => tag.toLowerCase().includes(filter))
            || (program?.openSource ? (
                Array.isArray(program.openSource.license)
                    ? program.openSource.license.map(a => a.toString().toLowerCase()).includes(filter)
                    : program.openSource.license.toString().toLowerCase().includes(filter)
                ) : false)
            || program?.openSource?.url.toLowerCase().includes(filter)
            || (program?.platformInfo.linux ? "linux".includes(filter) : false)
            || (program?.platformInfo.windows ? "windows".includes(filter) : false)
            || (program?.gui ? "gui".includes(filter) : false)
            || (program?.cli ? "cli".includes(filter) : false)
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

export const filterProgram = (program: Program, filter?: string) => {
    // Initially only find all the filter words split by a space
    const programFilters: (string|string[])[] = filter === undefined
        ? [] : filter.toLowerCase().split(" ").map(a => a.trim()).filter(b => b !== "")
    // Find words that should be combined
    for (const programFilter of programFilters) {
        if (typeof programFilter === "string") {
            const andFilter = programFilter.split("+").map(a => a.trim()).filter(b => b !== "")
            programFilters.splice(programFilters.indexOf(programFilter), 1)
            if (andFilter.length > 1) {
                programFilters.push(andFilter)
            } else {
                programFilters.push(andFilter[0])
            }
        }
    }

    return programFilters.length === 0 || programFilters.some(programFilter => {
        if (typeof programFilter === "string") {
            return filterProgram2(program, programFilter)
        } else {
            return programFilter.every(a => filterProgram2(program, a))
        }
    })
}
