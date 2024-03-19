document.addEventListener("DOMContentLoaded", function() {
    const content = "Hello, I’m GiHoon!";
    const text = document.querySelector(".introduce-article h1");
    let textIdx = 0;

    function typing() {
        let txt = content[textIdx++];
        text.innerHTML += txt;

        if (textIdx > content.length) {
            text.textContent = "";
            textIdx = 0;
        }
    }
    setInterval(typing, 300);

});
