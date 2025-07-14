import * as BestPrograms from "./types/best_programs"

export const renderBestProgramsSection = (data: BestPrograms.BestPrograms) => {
    const allCategoriesSet = new Set()
    for (const program of data.programs) {
        allCategoriesSet.add(program.category)
    }

    return Array.from(allCategoriesSet).sort().map(category => {
        const allProgramsOfCategory = data.programs.filter(a => a.category === category).sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1
            }
            return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0
        })
        return `- ${category}\n` + allProgramsOfCategory.map(program => {

            let nameString = program.name
            if (program.website) {
                nameString = `[${nameString}](${program.website})`
            }

            const tags = []
            if (program.platformInfo) {
                if (program.platformInfo.linux) {
                    tags.push("`Linux`")
                    if (program.platformInfo.linuxSudoRightsNecessary) {
                        tags.push("`sudo-rights-necessary`")
                    }
                }
                if (program.platformInfo.windows) {
                    tags.push("`Windows`")
                    if (program.platformInfo.windowsAdminRightsNecessary) {
                        tags.push("`admin-rights-necessary`")
                    }
                }
            }
            if (program.openSource) {
                const openSourceString = `OpenSource-${Array.isArray(program.openSource.license) ? program.openSource.license.join("+") : program.openSource.license}`
                tags.push(`[\`${openSourceString}\`](${program.openSource.url})`)
            } else {
                tags.push("`ClosedSource`")
            }

            if (program.gui) {
                tags.push("`GUI`")
            }
            if (program.cli) {
                tags.push("`CLI`")
            }
            if (program.tags) {
                tags.push(...program.tags.sort().map(a => `\`${a}\``))
            }

            let setupString = ""
            if (program.setup) {
                setupString += `\n    - Setup: ${program.setup}`
            }

            let bugString = ""
            if (program.bugs) {
                bugString += `\n    - Bugs: ${program.bugs}`
            }

            let packageManagerString = ""
            if (program.packageManagerInfo) {
                if (program.packageManagerInfo.pacman) {
                    packageManagerString += `\n    - Pacman: [\`${program.packageManagerInfo.pacman}\`](https://www.archlinux.org/packages/?q=${program.packageManagerInfo.pacman}) (\`sudo pacman -S ${program.packageManagerInfo.pacman}\`)`
                }
                if (program.packageManagerInfo.pacmanGroup) {
                    packageManagerString += `\n    - Pacman [GROUP]: [\`${program.packageManagerInfo.pacmanGroup}\`](https://www.archlinux.org/groups/x86_64/${program.packageManagerInfo.pacmanGroup}) (\`sudo pacman -S ${program.packageManagerInfo.pacmanGroup}\`)`
                }
                if (program.packageManagerInfo.pacmanAur) {
                    packageManagerString += `\n    - Pacman [AUR]: [\`${program.packageManagerInfo.pacmanAur}\`](https://aur.archlinux.org/packages/?K=${program.packageManagerInfo.pacmanAur}) (\`yay -S ${program.packageManagerInfo.pacmanAur}\`)`
                }
                if (program.packageManagerInfo.pacmanAurNightly) {
                    packageManagerString += `\n    - Pacman [AUR NIGHTLY]: [\`${program.packageManagerInfo.pacmanAurNightly}\`](https://aur.archlinux.org/packages/?K=${program.packageManagerInfo.pacmanAurNightly}) (\`yay -S ${program.packageManagerInfo.pacmanAurNightly}\`)`
                }
                if (program.packageManagerInfo.pacmanAurGit) {
                    packageManagerString += `\n    - Pacman [AUR GIT]: [\`${program.packageManagerInfo.pacmanAurGit}\`](https://aur.archlinux.org/packages/?K=${program.packageManagerInfo.pacmanAurGit}) (\`yay -S ${program.packageManagerInfo.pacmanAurGit}\`)`
                }
                if (program.packageManagerInfo.winget) {
                    packageManagerString += `\n    - Winget: [\`${program.packageManagerInfo.winget}\`](https://winget.run/pkg/${program.packageManagerInfo.winget.replace(".", "/")}) (\`winget install -e --id  ${program.packageManagerInfo.winget}\`)`
                }
            }

            return `  - ${nameString}: ${program.description}\n\n    ${tags.join(", ")}${setupString}${bugString}${packageManagerString}`
        }).join("\n")
    }).join("\n")
}
