import ErrorFinder from "./error-finder.js";

export default class DOMHandler {
    
    #errorFinder;

    constructor () {
        this.#errorFinder = new ErrorFinder();
        return this;
    }

    scanPageForErrors() {
        const selector = 'div[class="is-root-container block-editor-block-list__layout"]';
        const pageContainer = document.querySelector(selector);

        for (let node of pageContainer.childNodes)
            this.#errorFinder.searchForErrors(node);
    }
}