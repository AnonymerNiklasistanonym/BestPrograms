// See also: https://github.com/handlebars-lang/handlebars.js/issues/1528#issue-449727984
import * as Handlebars from 'handlebars/runtime'
import "../handlebars/precompiled"

export interface AutocompleteTextOptions {
    customValueToSearch?: (textInput: string) => string,
    customValueToSetAfterClick?: (textInput: string, searchedValue: string, clickedKeyword: string) => string
}

/**
 * Based on https://www.w3schools.com/howto/howto_js_autocomplete.asp
 */
export const autocompleteTextInput = (
    textInput: HTMLInputElement, keywords: string[], options: AutocompleteTextOptions = {}
) => {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    let currentFocus: number
    /*execute a function when someone writes in the text field:*/
    textInput.addEventListener("input", () => {
        const fullInput = textInput.value
        const currentKeyword = options.customValueToSearch !== undefined
            ? options.customValueToSearch(fullInput)
            : fullInput
        closeAutocompleteList()
        if (currentKeyword === undefined || currentKeyword === "") {
            return false
        }
        currentFocus = -1
        /*create a DIV element that will contain the items (values):*/
        const a = document.createElement("div")
        a.setAttribute("id", textInput.id + "-autocomplete-list")
        a.setAttribute("class", "autocomplete-items")
        /*append the DIV element as a child of the autocomplete container:*/
        textInput.parentNode.appendChild(a)
        /*for each item in the array...*/
        for (const keyword of keywords) {
            /*check if the item starts with the same letters as the text field value:*/
            if (keyword.substr(0, currentKeyword.length).toUpperCase() == currentKeyword.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                const b = document.createElement("div")
                /*make the matching letters bold:*/
                b.innerHTML = Handlebars.templates["text_input_autocomplete_div"]({
                    keyword,
                    typedKeyword: keyword.substr(0, currentKeyword.length),
                    autocompletedKeyword: keyword.substr(currentKeyword.length),
                })
                //b.innerHTML = "<strong>" + keyword.substr(0, currentKeyword.length) + "</strong>"
                //b.innerHTML += keyword.substr(currentKeyword.length)
                ///*insert a input field that will hold the current array item's value:*/
                //b.innerHTML += "<input type='hidden' value='" + keyword + "'>"
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", e => {
                    /*insert the value for the autocomplete text field:*/
                    const clickedKeyword = b.getElementsByTagName("input")[0].value
                    textInput.value = options.customValueToSetAfterClick !== undefined
                        ? options.customValueToSetAfterClick(fullInput, currentKeyword, clickedKeyword)
                        : clickedKeyword
                    textInput.dispatchEvent(new Event('change'))
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAutocompleteList()
                })
                a.appendChild(b)
            }
        }
    })
    /*execute a function presses a key on the keyboard:*/
    textInput.addEventListener("keydown", e => {
        const currentAutoCompleteList = document.getElementById(textInput.id + "-autocomplete-list")
        let x = [currentAutoCompleteList]
        if (x[0]) {
            x = [].slice.call(x[0].getElementsByTagName("div"))
            x = x.filter(a => a.parentElement === currentAutoCompleteList)
        }
        if (e.key == "ArrowDown") {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++
            /*and and make the current item more visible:*/
            addActive(x)
        } else if (e.key == "ArrowUp") { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--
            /*and and make the current item more visible:*/
            addActive(x)
        } else if (e.key == "Enter") {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault()
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) {
                    x[currentFocus].click()
                }
            }
        } else if (e.key == "Escape") {
            closeAutocompleteList(e.target)
        }
    })
    function addActive(x: HTMLElement[]) {
        /*a function to classify an item as "active":*/
        if (!x) {
            return false
        }
        /*start by removing the "active" class on all items:*/
        removeActive(x)
        if (currentFocus >= x.length) currentFocus = 0
        if (currentFocus < 0) currentFocus = (x.length - 1)
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active")
    }
    function removeActive(x: HTMLElement[]) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active")
        }
    }
    function closeAutocompleteList(elmnt?: EventTarget) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        for (const autoCompleteElement of document.getElementsByClassName("autocomplete-items")) {
            if (elmnt != autoCompleteElement && elmnt != textInput) {
                autoCompleteElement.parentNode.removeChild(autoCompleteElement)
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", e => {
        closeAutocompleteList(e.target)
    })
}
