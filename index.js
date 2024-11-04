import { request } from "./js/request.js";
import { moreProducts } from "./js/showMoreProduct.js";
import { search } from "./js/search.js";
import { sort } from "./js/sort.js";
import { bascet } from "./js/bascet.js";
import { accordion } from "./js/accordion.js";
import { slider } from "./js/slider.js";
import { login } from "./js/login.js";
import { headerSlider } from "./js/header.js";

let firstIndex = 0,
    lastIndex = 6;

request("https://fakestoreapi.com/products");

if (localStorage.getItem("data")) {
    const data = JSON.parse(localStorage.getItem("data"));

    moreProducts(data, firstIndex, lastIndex);
}

search();
sort();
bascet();
accordion();
slider();
login();
headerSlider();

const anchors = document.querySelectorAll('a[href *= "#"]');

anchors.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const id = item.getAttribute("href");

        document.querySelector("" + id).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});
