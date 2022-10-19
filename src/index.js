import DOMHandler from "./classes/dom-handler.js";

const main = () => {
    new DOMHandler().scanPageForErrors();
}

// TODO Find a better solution
const waitingForScriptsToLoad = () => {
    setTimeout(() => {
        if (document.getElementById('editor')) {
            main();
        } else {
            waitingForScriptsToLoad();
        }
    }, 1);
};


window.addEventListener('load', (e) => {
    waitingForScriptsToLoad();
});