let objButton = {  
    class: "button",
    width: "100px",
    height: "70px",
    backgroundColor: "navy",
    color: "red",
};
let objLink = {
    class: "link",
    size: "20px",
    font: "Arial",
    color: "green",
};
let objElement = {
    class: "element",
    backgroundColor: "yellow"
};

let buttons = document.querySelectorAll("." + objButton["class"]); // получаем все кнопки
let links = document.querySelectorAll("." + objLink["class"]);
let elements = document.querySelectorAll("." + objElement["class"]);

for (let i = 0; i < buttons.length; i++) { // перебираем все кнопки
    // buttons[i].style.width = objButton["width"] + "px";
    // buttons[i].style.height = objButton["height"] + "px";
    // buttons[i].style.backgroundColor = objButton["backgroundColor"];
    // buttons[i].style.color = objButton["color"];

    Object.assign(buttons[i].style, objButton);
}
for (let i = 0; i < links.length; i++) {
    // links[i].style.fontSize = objLink["size"] + "px";
    // links[i].style.fontFamily = objLink["font"];
    // links[i].style.color = objLink["color"];

    Object.assign(links[i].style, objLink);
}
for (let i = 0; i < elements.length; i++) {
    // elements[i].style.backgroundColor = objElement["backgroundColor"];

    Object.assign(elements[i].style, objElement);
}