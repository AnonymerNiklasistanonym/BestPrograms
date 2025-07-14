import type { Program } from "../../types/best_programs"

// See also: https://github.com/handlebars-lang/handlebars.js/issues/1528#issue-449727984
import * as Handlebars from 'handlebars/runtime'
import "../handlebars/precompiled"

Handlebars.registerHelper('isString', function (arg, options) {
    return (typeof arg === "string") ? options.fn(this) : options.inverse(this)
})
Handlebars.registerHelper('isArray', function (arg, options) {
    return Array.isArray(arg) ? options.fn(this) : options.inverse(this)
})
Handlebars.registerHelper('replaceWinget', function (text, search, replace) {
  return text.split(search).join(replace);
});

export const createProgramList = (programs: Program[]) => {
    const div = document.createElement("div")
    div.innerHTML = Handlebars.templates["program_list"]({
        programs,
    })
    return div.firstChild
}
