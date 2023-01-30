const textArea = document.querySelector('#textarea');
const tagsEl = document.querySelector('#tags');

textArea.focus();

textArea.addEventListener("keyup", (e) => {
    createTags(e.target.value);

    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = "";
        }, 10);
        randomSelect();
    }
});

function createTags(input) {
    // console.log(imput);
    const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
    console.log(tags);

    tagsEl.innerHTML = ''
    tags.forEach((tag) => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerHTML = tag;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    // console.log(attempt);
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add("highlight");
}

function unHighlightTag(tag) {
    tag.classList.remove("highlight");
}