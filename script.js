window.onscroll = () => {

    document.querySelector(".mountains").style.marginTop = scrollY / 2 + "px";

    document.querySelector(".stars").style.marginBottom = scrollY / 2.5 + "px";

    document.querySelector(".stars").style.marginLeft = -scrollY / 2 + "px";

    document.querySelector(".cave").style.transform = "scale(" + (scrollY / 5000 + 1) + ")";

    document.querySelector(".moon").style.transform = "rotate(-" + (scrollY / 5.5) + "deg)";

    document.querySelector(".Home h1").style.marginTop = scrollY / 1.3 + "px";

    document.querySelector(".Home h1").style.opacity = (200 - scrollY) / 200;

}