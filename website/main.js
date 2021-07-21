const createTable = (thead, tbody) => {
    const table = document.createElement("table")
    const tableHead = document.createElement("thead")
    const tableBody = document.createElement("tbody")

    const tableHeadRow = document.createElement("tr")
    for (const theadColumn of thead) {
        const theadColumnElement = document.createElement("th")
        theadColumnElement.innerText = theadColumn
        tableHeadRow.appendChild(theadColumnElement)
    }
    tableHead.appendChild(tableHeadRow)
    table.appendChild(tableHead)

    for (const tbodyColumns of tbody) {
        const tableBodyRow = document.createElement("tr")
        for (const tbodyColumn of tbodyColumns) {
            const tbodyColumnElement = document.createElement("th")
            tbodyColumnElement.innerText = tbodyColumn
            tableBodyRow.appendChild(tbodyColumnElement)
        }
        tableBody.appendChild(tableBodyRow)
    }
    table.appendChild(tableBody)
    return table
}

fetch("./best_programs.json")
    .then(response => response.json())
    .then(jsonResponse => {
        console.log(jsonResponse)
        const contentDiv = document.getElementById("content")
        contentDiv.innerText = JSON.stringify(jsonResponse, undefined, 4)

        const jsonData = jsonResponse
        const tableDiv = document.getElementById("table")

        const renderTable = (filter) => {
            for (const childNode of tableDiv.childNodes) {
                tableDiv.removeChild(childNode)
            }
            tableDiv.appendChild(createTable([
                "name", "category", "description", "website"
            ], jsonData.programs.filter(program => {
                const programFilter = filter?.toLowerCase().trim()
                return programFilter === "" || programFilter === undefined
                    || program?.name.toLowerCase().includes(programFilter)
                    || program?.category.toLowerCase().includes(programFilter)
                    || program?.description.toLowerCase().includes(programFilter)
                    || program?.website.toLowerCase().includes(programFilter)
            }).map(program => {
                return [ program.name, program.category, program.description, program.website ]
            })))
        }

        renderTable()

        const filterInput = document.getElementById("filter")
        filterInput.addEventListener("keypress", () => {
            renderTable(filterInput.value)
        })


    })
    .catch(err => console.error)
