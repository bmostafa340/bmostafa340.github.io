/*
function clearBox(box) {
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
}

function addTitle(box, text) {
    const title = document.createElement("box-title");
    title.innerHTML += text;
    box.appendChild(title);
}

function addBigDescription(box, text) {
    const description = document.createElement("big-description");
    description.innerHTML += text;
    box.appendChild(description);
}

function addSmallDescription(box, text) {
    const description = document.createElement("small-description");
    description.innerHTML += text;
    box.appendChild(description);
}

function addIcon(box, path) {
    const description = document.createElement("box-icon");
    description.innerHTML += `<img src="${path}">`;
    box.appendChild(description);
}

function addButton(box, link) {
    const button = document.createElement("button");
    button.innerHTML = "View";
    box.appendChild(button);
    button.addEventListener("click", function () {
        location.href = link;
    });
}

function enterSkill(box, title, description) {
    clearBox(box);
    addTitle(box, title);
    addSmallDescription(box, description);
}

function enterProject(box, title, description, link) {
    enterSkill(box, title, description);
    addButton(box, link);
}

function exitElement(box, title, description, path) {
    clearBox(box);
    addTitle(box, title);
    addBigDescription(box, description);
    addIcon(box, path);
}

function hoverResumeBox() {
    const resume_box = document.getElementById("resume-box");
    enterProject(resume_box, "Resume", "I have many more skills in addition to those mentioned here, including but not limited to game development, mechanical design, and leadership. See my resume for more.", "www.google.com");
}

function exitResumeBox() {
    const resume_box = document.getElementById("resume-box");
    exitElement(resume_box, "Selected Skills", "Hover over this icon to see more", "../icons/github.svg");
}

function f1() {
    const resume_box = document.getElementById("resume-box");
    addTitle(resume_box, "hi");
}

function f2() {

}
*/
/*
var resume_box = document.getElementById("resume-box");
resume_box.addEventListener("mouseover", hoverResumeBox);
resume_box.addEventListener("mouseout", exitResumeBox);
*/
// exitElement(resume_box, "Selected Skills", "Hover over this icon to see more", "../icons/github.svg"));
// resume_box.onmousedown = f1(); // enterProject(resume_box, "Resume", "I have many more skills in addition to those mentioned here, including but not limited to game development, mechanical design, and leadership. See my resume for more.", "www.google.com"));
