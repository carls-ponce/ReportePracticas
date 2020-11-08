function zodiaco() {
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value;
    var resultado = "(Ingresa una fecha válida)"

    if (mes == 1 && dia >= 20 || mes == 2 && dia <= 180) {
        resultado = ("Acuario");
        document.getElementById("foto").innerHTML = "<img src='img/aquarius.svg' width=20%>";
        document.getElementById("caracteristicas").innerHTML = "<p>Los acuarios tienen una personalidad fuerte y atractiva. Un Acuario es simpático y humanitario. Es honesto y totalmente leal, original y brillante. Un acuario es independiente e intelectual. Les gusta luchar por causas buenas, soñar y planificar para un futuro feliz, aprender del pasado, los buenos amigos y divertirse.</p>"
    }
    if (mes == 2 && dia >= 19 || mes == 3 && dia <= 20) {
        resultado = ("Piscis");
        document.getElementById("foto").innerHTML = "<img src = 'img/pisces.svg' width=20%>";
        document.getElementById("caracteristicas").innerHTML = "<p>Los Piscis son personas tranquilas, pacientes y amables. Son sensibles a los sentimientos de los demás y responden con simpatía y tacto al sufrimiento de las personas que los rodean. Son muy queridos por los demás porque tienen un carácter afable, cariñoso y amable.</p>"
    }
    if (mes == 3 && dia >= 21 || mes == 4 && dia <= 19) {
        resultado = ("Aries");
        document.getElementById("foto").innerHTML = "<img src = 'img/aries.svg' width=20%>";
        document.getElementById("caracteristicas").innerHTML = "<p>Un Aries es una persona llena de energía y entusiasmo. Pionero y aventurero, le encantan los retos, la libertad y las nuevas ideas. A los Aries les gusta liderar y prefieren dar instrucciones a recibirlas. Son independientes y preocupados por su propia ambición y objetivos.</p>"
    }
    if (mes == 4 && dia >= 20 || mes == 5 && dia <= 20) {
        resultado = ("Tauro");
        document.getElementById("foto").innerHTML = "<img src='img/taurus.svg'width=20%>";
        document.getElementById("caracteristicas").innerHTML = "Un Tauro suele ser práctico,decidido y tener una gran fuerza de voluntad. Les encanta la paz y tranquilidad y son muy respetuosos con las leyes y las reglas. Son un poco reacios al cambio. Los Tauro son prudentes,estables y tienen un gran sentido de la justicia.";
    }
    if (mes == 5 && dia >= 21 || mes == 6 && dia <= 20) {
        resultado = ("Geminis");
        document.getElementById("foto").innerHTML = "<img src='img/gemini.svg'width=20%>";
        document.getElementById("caracteristicas").innerHTML = "Géminis es el signo de los gemelos y como tal su carácter es doble y bastante complejo y contradictorio. Por un lado es versátil, pero por el otro puede ser insincero. Suelen tener elegancia y caer en los errores de los jóvenes. Tienen la felicidad, el egocentrismo, la imaginación y la inquietud de los niños.";
    }
    if (mes == 6 && dia >= 21 || mes == 7 && dia <= 22) {
        resultado = ("Cancer");
        document.getElementById("foto").innerHTML = "<img src='img/cancer.svg'width=20%>";
        document.getElementById("caracteristicas").innerHTML = "Cáncer, cuarto signo del Zodíaco, cardinal, y primero del elemento Agua, representa lo femenino, lo fecundo y está regido por las emociones de la Luna. Es el signo del hogar, de las raíces, la madre. Sus nativos poseen una gran sensibilidad emocional y una profunda fe.";

    }
    if (mes == 7 && dia >= 23 || mes == 8 && dia <= 22) {
        resultado = ("Leo");
        document.getElementById("foto").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>";
        document.getElementById("caracteristicas").innerHTML = "Leo pertenece al elemento Fuego y está caracterizado por su coraje, convicción y capacidad de liderazgo. Independiente e inconformista, su mente activa es siempre generadora de empresas brillantes y lucrativas. Suelen ser muy orgullosos por lo cual no les gusta pedir ayuda, ellos se bastan para lo que sea.";
    }
    if (mes == 8 && dia >= 23 || mes == 9 && dia <= 22) {
        resultado = ("Virgo");
        document.getElementById("foto").innerHTML = "<img src='img/virgo.svg'width=20%>";
        document.getElementById("caracteristicas").innerHTML = "Virgo nunca pisa un suelo que no conoce, es honesto y muy inteligente. Precisos y exactos, aunque pueden también ser minuciosos e irritables. Generalmente se preocupan por ser meticulosos y limpios. Virgo es un buen amigo que siempre está dispuesto a ayudar.";
    }
    if (mes == 9 && dia >= 23 || mes == 10 && dia <= 22) {
        resultado = ("Libra");
        document.getElementById("foto").innerHTML = "<img src='img/libra.svg'width=20%>";
        document.getElementById("caracteristicas").innerHTML = "Los libra se encuentran entre los signos más civilizados del zodiaco. Tienen encanto, elegancia y buen gusto, son amables y pacíficos. Les gusta la belleza y la armonía y son capaces de ser imparciales ante conflictos. No obstante, una vez que han llegado a una opinión sobre algo, no les gusta que se les contradiga.";
    }
    if (mes == 10 && dia >= 23 || mes == 11 && dia <= 21) {
        resultado = ("Escorpión");
        document.getElementById("foto").innerHTML = "<img src='img/scorpion.svg'width=20%>";
        document.getElementById("caracteristicas").innerHTML = "El Escorpio es un signo intenso con una energía emocional única en todo el zodiaco. Aunque puedan aparecer tranquilos, los Escorpio tienen una agresión y magnetismo interno escondidos dentro. El Escorpio es tremendamente poderoso y su carácter puede causar enormes beneficios o grandes riesgos para los demás.";
    }
    if (mes == 11 && dia >= 22 || mes == 12 && dia <= 21) {
        resultado = ("Sagitario");
        document.getElementById("foto").innerHTML = "<img src='img/sagittarius.svg'width=20%>";
        document.getElementById("caracteristicas").innerHTML = "Los sagitario son almas libres que les agrada tomar riesgos y disfrutar de nuevas experiencias, ellos parecen tener una visión positiva de estar en el lugar correcto en el momento adecuado. También son adaptables y capaces hacer varias cosas a la vez.";
    }
    if (mes == 12 && dia >= 22 || mes == 1 && dia <= 19) {

        resultado = ("Capricornio");
        document.getElementById("foto").innerHTML = "<img src='img/capricorn.svg'width=20%>";
        document.getElementById("caracteristicas").innerHTML = "Capricornio es uno de los signos del zodiaco más estables, seguros y tranquilos. Pues son trabajadores, responsables y muy persistentes cuando se trata de alcanzar una meta. Jamás abandonarán un proyecto, por el contrario, suelen concluir lo que inician los pioneros.";
    } else if (mes > 12 || dia > 31) {
        alert("Por favor ingresa una fecha válida");
    }
    document.getElementById("salida").innerHTML = resultado;

}
