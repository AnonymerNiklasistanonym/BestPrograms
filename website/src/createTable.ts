// See also: https://github.com/handlebars-lang/handlebars.js/issues/1528#issue-449727984
import * as Handlebars from 'handlebars/runtime'
import "../handlebars/precompiled"

export const createTable = (thead: string[], tbody: string[][]) => {
    const div = document.createElement("div")
    div.innerHTML = Handlebars.templates["simple_table"]({
        theadColumns: thead,
        tbodyColumns: tbody,
    })
    return div.firstChild
}
