const startScript = () => {
    // TODO Find a better solution
    setTimeout(() => {
        if (document.getElementById('editor')) {
            console.log(document.querySelector('div[class="edit-post-header"]'));
        } else {
            startScript();
        }
    }, 1);
};


window.addEventListener('load', (e) => {
    e.preventDefault();
    startScript();
});
