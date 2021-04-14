let tablink = document.querySelectorAll("#tabs1 .d-tabs-list > li");
let tabItem = document.querySelectorAll("#tabs1 .b-tab__item");

let tablink2 = document.querySelectorAll("#tabs2 .d-tabs-list > li");
let tabItem2 = document.querySelectorAll("#tabs2 .b-tab__item");



tablink.forEach(tabsActive);
tablink2.forEach(tabsActive2);

function tabsActive(item) {
    item.addEventListener("click", function () {


        let tabId = item.getAttribute("data-tabs");


        if (!item.classList.contains("active")) {

            tablink.forEach(function (item) {
                item.classList.remove("active");
            });

            tabItem.forEach(function (item) {
                item.classList.remove("active");
            });


            item.classList.add("active");
            document.querySelector(tabId).classList.add("active");
        }

    })
}


function tabsActive2(item) {
    item.addEventListener("click", function () {


        let tabId = item.getAttribute("data-tabs");


        if (!item.classList.contains("active")) {

            tablink2.forEach(function (item) {
                item.classList.remove("active");
            });

            tabItem2.forEach(function (item) {
                item.classList.remove("active");
            });


            item.classList.add("active");
            document.querySelector(tabId).classList.add("active");
        }

    })
}

document.querySelector("#tabs1 .d-tabs-list > li").click();
document.querySelector("#tabs2 .d-tabs-list > li").click();




function slider() {



    let bSlide = document.querySelectorAll(".b-slide");
    let screenWidth = screen.width;
    document.querySelector(".b-slider").style.width = screenWidth * bSlide.length + "px";
    let offset = 0;





    for (let i = 0; i < bSlide.length; i++) {
        bSlide[i].style.width = screenWidth + "px";
        let x = i + 1;
        var li = document.createElement('li');
        li.innerHTML = "0" + x;
        document.querySelector(".b-slide__dott").append(li);


    }


    let dottList = document.querySelectorAll(".b-slide__dott > li");

    for (let i = 0; i < dottList.length; i++) {

        dottList[0].classList.add('active');
        dottList[0].click();
        dottList[i].addEventListener("click", function () {
            offset = [i] * screenWidth;

            for (let y = 0; y < dottList.length; y++) {
                dottList[y].classList.remove('active');
            }

            dottList[i].classList.add('active');
            document.querySelector(".b-slider").style.left = -offset + "px";

        });

    }
    let ofset2 = 0;


    document.querySelector(".b-slide__prev").addEventListener("click", function () {


        ofset2 = ofset2 + 71;
        if (ofset2 > 71 * (dottList.length - 3)) {
            ofset2 = 0;
        }
        document.querySelector(".b-slide__dott").style.top = -ofset2 + "px";

    });


    document.querySelector(".b-slide__next").addEventListener("click", function () {

        ofset2 = ofset2 - 71;
        if (ofset2 < 0) {

            ofset2 = 71 * (dottList.length - 3);
        }

        document.querySelector(".b-slide__dott").style.top = -ofset2 + "px";

    });






}

slider();