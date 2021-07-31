var menuIcon = document.querySelector('.menu-icon')
var sideBar =  document.querySelector('.sidebar')
var conTainer = document.querySelector('.container')

menuIcon.onclick = function() {
    sideBar.classList.toggle('small-menu')
    conTainer.classList.toggle('large-container')
}