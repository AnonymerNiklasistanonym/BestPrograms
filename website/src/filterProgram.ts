import type { Program } from "../../types/best_programs"

const filterProgram2 = (program: Program, filter?: string) => {
    return filter === "" || filter === undefined
        || program.name.toLowerCase().includes(filter)
        || program.category.toLowerCase().includes(filter)
        || program.description.toLowerCase().includes(filter)
        || program.website.toLowerCase().includes(filter)
        || program.tags?.some(tag => tag.toLowerCase().includes(filter))
        || (program.openSource ? (
            Array.isArray(program.openSource.license)
                ? program.openSource.license.some(license => license.toLowerCase().includes(filter))
                : program.openSource.license.toString().toLowerCase().includes(filter)
        ) : false)
        || program.openSource?.url.toLowerCase().includes(filter)
        || (program.platformInfo?.linux ? "linux".includes(filter) : false)
        || (program.platformInfo?.linuxSudoRightsNecessary ? ["admin","sudo"].some(a => a.toLowerCase().includes(filter)) : false)
        || (program.platformInfo?.windows ? "windows".includes(filter) : false)
        || (program.platformInfo?.windowsAdminRightsNecessary ? "admin".includes(filter) : false)
        || (program.gui ? "gui".includes(filter) : false)
        || (program.cli ? "cli".includes(filter) : false)
        || (program.packageManagerInfo?.pacman ? "pacman".includes(filter) : false)
        || (program.packageManagerInfo?.pacmanAur ? (
            "pacman".includes(filter) || "aur".includes(filter)) : false)
        || (program.packageManagerInfo?.pacmanAurGit ? (
            "pacman".includes(filter) || "aur".includes(filter)) : false)
        || (program.packageManagerInfo?.pacmanAurNightly ? (
            "pacman".includes(filter) || "aur".includes(filter)) : false)
        || program.packageManagerInfo?.pacman?.includes(filter)
        || program.packageManagerInfo?.pacmanAur?.includes(filter)
        || program.packageManagerInfo?.pacmanAurGit?.includes(filter)
        || program.packageManagerInfo?.pacmanAurNightly?.includes(filter)
}

export interface ParseFilterOutput {
    /**
     * Any hits with these filters should be added to the results
     * (all hits should be OR but an array element is AND)
     */
    programFilters: (string | string[])[]
    /**
     * Any hits with these filters should be excluded from the results
     * (all hits should be OR but an array element is AND)
     */
    programFiltersExclude: (string | string[])[]
}

export const parseFilter = (filter?: string): ParseFilterOutput => {
    // Initially only find all the filter words split by a space
    const programFilters: (string | string[])[] = filter === undefined
        ? [] : filter.toLowerCase().split(" ").map(a => a.trim()).filter(b => b !== "")
    const programFiltersFinal: (string | string[])[] = []
    const programFiltersExclude: (string | string[])[] = []
    // Find words that should be combined
    for (const programFilter of programFilters) {
        if (typeof programFilter === "string") {
            const andFilter = programFilter.split("+").map(a => a.trim()).filter(b => b !== "")
            // If the filter starts with a "-" add it to the exclude list
            if (andFilter.length > 1) {
                if (andFilter[0]?.startsWith("-")) {
                    andFilter[0] = andFilter[0].substring(1)
                    programFiltersExclude.push(andFilter.filter(a => a !== ""))
                } else {
                    programFiltersFinal.push(andFilter)
                }
            } else if (andFilter.length === 1) {
                if (andFilter[0]?.length > 1 && andFilter[0]?.startsWith("-")) {
                    programFiltersExclude.push(andFilter[0].substring(1))
                } else {
                    programFiltersFinal.push(andFilter[0])
                }
            }
        }
    }

    return {
        programFilters: programFiltersFinal,
        programFiltersExclude
    }
}

export const filterProgram = (program: Program, filter?: string) => {

    const parsedFilter = parseFilter(filter)

    return (
        parsedFilter.programFilters.length === 0
        || parsedFilter.programFilters.some(programFilter => {
            if (typeof programFilter === "string") {
                return filterProgram2(program, programFilter)
            } else {
                return programFilter.every(a => filterProgram2(program, a))
            }
        })) && !parsedFilter.programFiltersExclude.some(programFilter => {
            if (typeof programFilter === "string") {
                return filterProgram2(program, programFilter)
            } else {
                return programFilter.every(a => filterProgram2(program, a))
            }
        })
}
