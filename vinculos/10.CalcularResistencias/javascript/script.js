
/**ACTIVA O DESACTIVA MENUÉS DESPLEGABLES, ESTO VA A DEPENDER DEL NÚMERO DE BANDAS QUE SE ELIJA*/

function check(){
    if(document.getElementById("cuatro").checked){
        document.getElementById("sel5").disabled=true;
        document.getElementById("sel6").disabled=true;
    }

    if(document.getElementById("cinco").checked)
        document.getElementById("sel5").disabled=false;
        document.getElementById("sel6").disabled=true;

    if(document.getElementById("seis").checked){
        document.getElementById("sel6").disabled=false;
        document.getElementById("sel5").disabled=false;}
} 

/*PINTA EL COLOR DE FONDO DE LOS MENUÉS DESPLEGABLES*/

function cambia_color1(select) {
    document.getElementById("sel1").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function cambia_color2(select) {
    document.getElementById("sel2").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function cambia_color3(select) {
    document.getElementById("sel3").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function cambia_color4(select) {
    document.getElementById("sel4").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function cambia_color5(select) {
    document.getElementById("sel5").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function cambia_color6(select) {
    document.getElementById("sel6").style.backgroundColor=select.options[select.selectedIndex].textContent;
}


/**AQUI EMPIEZA LA PARTE DEL CALCULO DE LAS RESISTENCIAS*/

function calcular(){

    var num,tol;
    /*Cuando la opción 4 bandas es elegido */
    if(document.getElementById("cuatro").checked)
        num=parseInt(document.getElementById("sel1").value.toString()+document.getElementById("sel2").value.toString());
    /*---------------------------------------------------------------------------------- */
    /*Cuando la opción 5 bandas es elegido */
    if(document.getElementById("cinco").checked)
        num=parseInt(document.getElementById("sel1").value.toString()+document.getElementById("sel2").value.toString()+document.getElementById("sel5").value.toString());
    var mul=Math.pow(10,parseInt(document.getElementById("sel3").value));
    
    if(document.getElementById("sel4").value=="10")
        tol=10;
    if(document.getElementById("sel4").value=="11")
        tol=5;
    /*---------------------------------------------------------------------------------- */
    /*Cuando la opción 6 bandas es elegido */
    if(document.getElementById("seis").checked)
        num=parseInt(document.getElementById("sel1").value.toString()+document.getElementById("sel2").value.toString()+document.getElementById("sel5").value.toString()+document.getElementById("sel6").value.toString());
    
    /*Extracción del valor del multiplicador*/
    var mul=Math.pow(10,parseInt(document.getElementById("sel3").value));

   /*Tolerancia del oro o plata, de acuerdo a cual eliga el usuario*/
    if(document.getElementById("sel4").value=="10")
        tol=10;
    if(document.getElementById("sel4").value=="11")
        tol=5;
    //console.log(num*mul*(1+tol/100)); 
    //Cálculo respectivo de la resistencia y tolerancia
    document.getElementById("respuesta").innerHTML="Valor de la resistencia: <b> <br>"+num*mul.toString()+" ohms = "+abbrNum(num*mul,2).toString()+" ohms</b>.<br><br>Considerando la tolerancia los valores pueden variar entre "+Math.round(num*mul*(1-tol/100))+" - "+Math.round(num*mul*(1+tol/100))+" ohms.";   
}

/*Esta función abrevia el número Ej 10,000 -> 10k, 1,000,000 -> 1M... etc*/
/*REFERENCIA: https://stackoverflow.com/questions/2692323/code-golf-friendly-number-abbreviator */

function abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);

    // Enumerate number abbreviations
    var abbrev = [ "K", "M", "B", "T" ];

    // Go through the array backwards, so we do the largest first
    for (var i=abbrev.length-1; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
            // Here, we multiply by decPlaces, round, and then divide by decPlaces.
            // This gives us nice rounding to a particular decimal place.
            number = Math.round(number*decPlaces/size)/decPlaces;

            // Add the letter for the abbreviation
            number += abbrev[i];

            // We are done... stop
            break;
        }
    }

    return number;
}

/*RESETEA O LIMPIA TODOS LOS CAMPOS, confirm desplegará una alerta con dos opciones (aceptar y cancelar)*/

function reset(){
    if(confirm("¿Estás seguro de limpiar los campos?")==true){
        document.getElementById("cuatro").checked=true;
        document.getElementById("cinco").checked=false;
        document.getElementById("sel1").value="--";
        document.getElementById("sel1").style.backgroundColor='white';
        document.getElementById("sel2").value="--";
        document.getElementById("sel2").style.backgroundColor='white';
        document.getElementById("sel3").value="--";
        document.getElementById("sel3").style.backgroundColor='white';
        document.getElementById("sel4").value="--";
        document.getElementById("sel4").style.backgroundColor='white';
        document.getElementById("sel5").value="--";
        document.getElementById("sel5").disabled="true";
        document.getElementById("sel5").style.backgroundColor='white';
        document.getElementById("sel6").value="--";
        document.getElementById("sel6").disabled="true";
        document.getElementById("sel6").style.backgroundColor='white';
        document.getElementById("respuesta").innerHTML="";   
    }
    
}