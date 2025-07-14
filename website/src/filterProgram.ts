import type { Program } from "../../types/best_programs"
import type { ElementFilterInformation } from "simple-generic-object-array-search-bar-filter/lib/filterElement"

export const elementFilter = (element: Program): ElementFilterInformation[] => {
    const information: ElementFilterInformation[] = [
        {
            propertyName: "category",
            stringValue: element.category,
            type: "string",
        },
        {
            propertyName: "description",
            stringValue: element.description,
            type: "string",
        },
        {
            propertyName: "name",
            stringValue: element.name,
            type: "string",
        },
        {
            propertyName: "website",
            stringValue: element.website,
            type: "string",
        },
    ]
    if (element.bugs) {
        information.push({
            propertyName: "bugs",
            stringValue: element.bugs,
            type: "string",
        })
    }
    if (element.cli) {
        information.push({
            stringValue: "cli",
            type: "string",
        })
    }
    if (element.gui) {
        information.push({
            stringValue: "gui",
            type: "string",
        })
    }
    if (element.openSource) {
        information.push({
            stringValue: "openSource",
            type: "string",
        })
        if (element.openSource.license) {
            if (Array.isArray(element.openSource.license)) {
                information.push({
                    propertyName: "openSourceLicense",
                    stringArrayValue: element.openSource.license,
                    type: "string-array",
                })
            } else {
                information.push({
                    propertyName: "openSourceLicense",
                    stringValue: element.openSource.license,
                    type: "string",
                })
            }
        }
    } else {
        information.push({
            stringValue: "closedSource",
            type: "string",
        })
    }
    if (element.packageManagerInfo) {
        if (element.packageManagerInfo.pacman) {
            information.push({
                stringValue: "pacman",
                type: "string",
            }, {
                propertyName: "pacman",
                stringValue: element.packageManagerInfo.pacman,
                type: "string",
            })
        }
        if (element.packageManagerInfo.pacmanAur) {
            information.push({
                stringValue: "pacmanAur",
                type: "string",
            }, {
                propertyName: "pacmanAur",
                stringValue: element.packageManagerInfo.pacmanAur,
                type: "string",
            })
        }
        if (element.packageManagerInfo.pacmanAurGit) {
            information.push({
                stringValue: "pacmanAurGit",
                type: "string",
            }, {
                propertyName: "pacmanAurGit",
                stringValue: element.packageManagerInfo.pacmanAurGit,
                type: "string",
            })
        }
        if (element.packageManagerInfo.pacmanAurNightly) {
            information.push({
                stringValue: "pacmanAurNightly",
                type: "string",
            }, {
                propertyName: "pacmanAurNightly",
                stringValue: element.packageManagerInfo.pacmanAurNightly,
                type: "string",
            })
        }
        if (element.packageManagerInfo.winget) {
            information.push({
                stringValue: "winget",
                type: "string",
            }, {
                propertyName: "winget",
                stringValue: element.packageManagerInfo.winget,
                type: "string",
            })
        }
    }
    if (element.platformInfo) {
        if (element.platformInfo.linux) {
            information.push({
                stringValue: "linux",
                type: "string",
            })
        }
        if (element.platformInfo.linuxSudoRightsNecessary) {
            information.push({
                stringValue: "sudo",
                type: "string",
            })
        }
        if (element.platformInfo.windows) {
            information.push({
                stringValue: "windows",
                type: "string",
            })
        }
        if (element.platformInfo.windowsAdminRightsNecessary) {
            information.push({
                stringValue: "admin",
                type: "string",
            })
        }
    }
    if (element.price) {
        information.push({
            propertyName: "price",
            stringValue: element.price,
            type: "string",
        })
    }
    if (element.setup) {
        information.push({
            propertyName: "setup",
            stringValue: element.setup,
            type: "string",
        })
    }
    if (element.tags) {
        information.push({
            propertyName: "tags",
            stringArrayValue: element.tags,
            type: "string-array",
        })
    }
    return information
}
