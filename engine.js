window.onload = function () {

    document.querySelector('.box-img').classList.add('active');
    document.querySelector('.box-titulo').classList.add('active');
    document.querySelector('.servicos-box').classList.add('active');
};

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}