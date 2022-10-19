import FontSizeRule from "../rules/font-size-rule.js";

export default class ErrorFinder {
    
    #rules;

    constructor () {
        this.#rules = [
            new FontSizeRule()
        ]
    }

    searchForErrors (element) {
        for (let rule of this.#rules)
            rule.check(element);
    }
}