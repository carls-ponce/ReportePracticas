function hacerclic() {

    lista=document.querySelectorAll("#principal p");
    lista[0].onclick=mostraralerta;
    lista[1].onclick=mostraralerta;

}

function changeColor(x) {
    if (x==1)
        lista[0].style.color="red";
    else
        lista[1].style.color="blue";
    return false;
}

function mostraralerta() {
    alert('hizo clic!');
}
window.onload=hacerclic;