export function headerSlider() {
    const headersliderPage = document.querySelector(".header__slider-block");
    const headerSlideDot = document.querySelector(".header__slider-dots");
    const headerSlide = JSON.parse(localStorage.getItem("data"));

    let headerSliderIndex = 1;

    headerSlide.forEach((item) => {
        let headerSlideItem = document.createElement("div");
        headerSlideItem.classList.add("header__slider-page");

        headerSlideItem.innerHTML = `<img src="${item.image}" alt="" class="header__slider-image">`;

        headersliderPage.append(headerSlideItem);
    });

    const headerSlideImage = document.querySelectorAll(".header__slider-page");

    function headerShowSlider(index) {
        if (index > headerSlideImage.length) {
            headerSliderIndex = 1;
        }

        if (index < 1) {
            headerSliderIndex = headerSlideImage.length;
        }

        headerSlideImage.forEach((img) => (img.style.display = "none"));
        headerSlideImage[headerSliderIndex - 1].style.display = "block";
    }
    headerShowSlider(headerSliderIndex);

    function headerPlusSlider(index) {
        headerShowSlider((headerSliderIndex += index));
    }

    setInterval(() => {
        headerPlusSlider(1);
        headerDotsShow();
    }, 3200);

    for (let i = 1; i <= headerSlideImage.length; i++) {
        const li = document.createElement("li");
        li.classList.add("header__slider-list");
        li.textContent = i;

        headerSlideDot.append(li);
    }

    const headerDots = document.querySelectorAll(".header__slider-list");

    function headerDotsShow() {
        headerDots.forEach((dots) => dots.classList.remove("active"));
        headerDots[headerSliderIndex - 1].classList.add("active");
    }
    headerDotsShow();
}
