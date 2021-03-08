let a = $('.res');

let c = $('.container');

let b = () => {
    a.css("display", "none");
    c.css("display", "inline-block");
};

setTimeout(b, 5 * 1000);

const contentElements = document.getElementsByClassName("container-item");

[...contentElements].forEach((element) => {
    element.addEventListener("click", () => {
    const [ el1, el2] = element.childNodes;

    el1.style.display = (el1.style.display == "block") ? "none" : "block";
    el2.style.display = (el2.style.display == "none") ? "block" : "none";
    });
});

