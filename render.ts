import * as BestPrograms from "./types/best_programs";

export const renderBestProgramsSection = (data: BestPrograms.BestPrograms) => {
    const allCategoriesSet = new Set();
    for (const program of data.programs) {
        allCategoriesSet.add(program.category)
    }

    return Array.from(allCategoriesSet).sort().map(category => {
        const allProgramsOfCategory = data.programs.filter(a => a.category === category).sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            return a.name > b.name ? 1 : 0
        });
        return `- ${category}\n` + allProgramsOfCategory.map(program => {

            let nameString = program.name;
            if (program.website) {
                nameString = `[${nameString}](${program.website})`;
            }

            const tags = [];
            if (program.platformInfo) {
                if (program.platformInfo.linux) {
                    tags.push("Linux");
                    if (program.platformInfo.linuxSudoRightsNecessary) {
                        tags.push("sudo-rights-necessary");
                    }
                }
                if (program.platformInfo.windows) {
                    tags.push("Windows");
                    if (program.platformInfo.windowsAdminRightsNecessary) {
                        tags.push("admin-rights-necessary");
                    }
                }
            }
            if (program.openSource) {
                tags.push("OpenSource");
            }
            if (program.gui) {
                tags.push("GUI");
            }
            if (program.tags) {
                tags.push(...program.tags);
            }

            let bugString = "";
            if (program.bugs) {
                bugString += `\n    - Bugs: ${program.bugs}`
            }

            let packageManagerString = "";
            if (program.packageManagerInfo) {
                if (program.packageManagerInfo.pacman) {
                    packageManagerString += `\n    - Pacman: [\`${program.packageManagerInfo.pacman}\`](https://www.archlinux.org/packages/?sort=&q=${program.packageManagerInfo.pacman})`;
                }
                if (program.packageManagerInfo.pacmanAur) {
                    packageManagerString += `\n    - Pacman [AUR]: [\`${program.packageManagerInfo.pacmanAur}\`](https://aur.archlinux.org/packages/?O=0&K=${program.packageManagerInfo.pacmanAur})`;
                }
            }

            return `  - ${nameString} (${tags.map(a => '`' + a + '`').join(", ")}): ${program.description}${bugString}${packageManagerString}`;
        }).join("\n")
    }).join("\n")
}
