import { product } from "./renderProduct.js";

const search = function () {
    const searchInput = document.querySelector(".search__input");

    searchInput.addEventListener("input", () => {
        let seacrhArray = [];
        const productItemSearch = Array.from(document.querySelectorAll(".product__item"));

        productItemSearch.forEach((item) => {
            if (!item.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
                item.style.display = "none";
            } else {
                item.style.display = "grid";
                seacrhArray.push(item);
            }
        });

        if (seacrhArray.length === 0) {
            product.innerHTML = "Товар не найден";
        } else {
            console.log(seacrhArray);
        }
    });
};
export { search };
