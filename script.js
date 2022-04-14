// El objetivo del reto es crear un simulador compuesto por (1) Un algoritmo de condicional (2) utilizando un ciclo (3) interactivo.
// Crearemos un carrito para un grupo musical, habrá un pequeño catalogo con multiples productos los cuales el usuario puede decidir si agregar al carrito o no.
// Adicional crearemos el concepto de "Membresía Premium" lo cual le da acceso a distintos descuentos en cada producto. 
// Finalmente le daremos una cantidad de puntos aleatorios al usuario, los cuales en su total del carrito le permitiremos que use para pagar menos si así lo desea.

// CATALOGO DE PRODUCTOS #####
    let camiseta = 300;
    let gorra = 210;
    let vinil = 310;
    let paseAnual = 100;
    let greatestHits = 500;
    let chamarra = 700;
    let productsArray = [camiseta, gorra, vinil, paseAnual, greatestHits, chamarra]


// INICIO DE ALGORITMO
    alert("Hola! Bienvenido a la tienda de mercancía oficial del grupo musical Kay Vs the Moon!");
    alert("Contamos con los siguientes productos: \n - Camiseta $" + productsArray[0] + "\n - Gorra $" + productsArray[1] + "\n - Disco Vinil $" + productsArray[2] + "\n - Pase Anual a conciertos $" + productsArray[3] + "\n - Disco de Greates Hits firmado $" + productsArray[4] + "\n - Chamarra roja de la banda $" + productsArray[5]);

// VALIDACIÓN INICIAL CODIGO SUPERFAN
    let respuestaSuperFan = prompt("Antes de iniciar, queremos preguntarte, tienes un codigo Super Fan para mejores descuentos? (Si/No)");
    while (respuestaSuperFan !== "Si" && respuestaSuperFan !== "No" ){
        respuestaSuperFan = prompt("Por favor indique si tiene un codigo Super Fan con 'Si' o 'No'");  
    }
    console.log("respuestaSuperFan = " + respuestaSuperFan);

    let descuentoSuperFan
    let codigoSuperFan
    switch(respuestaSuperFan){
        case "Si":
            descuentoSuperFan = .3;
            codigoSuperFan = prompt("Por favor ingrese su codigo SuperFan");
            break;
        
        case "No":
            descuentoSuperFan = 0;
            break;
    }
    console.log("descuentoSuperFan = " + descuentoSuperFan);
    console.log("codigoSuperFan = " + codigoSuperFan);


// PREGUNTA SOBRE ADICIÓN DE PRODUCTOS A CARRITO - MENU
    
    let carritoSubTotal = 0;
    for (let i = 0; i < 1; i++) {
        let productSelection = prompt(
            "Selecciona de la lista de productos cual quisieras agregar a vuestro carrito! \n \n Escribe el numero que corresponda, por ejemplo: Pase Anual a conciertos = 4"
             + "\n - Camiseta $" + (productsArray[0] - (productsArray[0]*descuentoSuperFan)) + " 1"
              + "\n - Gorra $" + (productsArray[1] - (productsArray[1]*descuentoSuperFan)) + " 2"
               + "\n - Disco Vinil $" + (productsArray[2] - (productsArray[2]*descuentoSuperFan)) + " 3"
                + "\n - Pase Anual a conciertos $" + (productsArray[3] - (productsArray[3]*descuentoSuperFan)) + " 4"
                 + "\n - Disco de Greates Hits firmado $" + (productsArray[4] - (productsArray[4]*descuentoSuperFan)) + " 5"
                  + "\n - Chamarra roja de la banda $" + (productsArray[5] - (productsArray[5]*descuentoSuperFan)) + " 6");

        console.log("El usuario escogió " + productSelection + " lo cual es igual a " + productsArray[productSelection]);

        carritoSubTotal = carritoSubTotal + (productsArray[productSelection - 1] - (productsArray[productSelection - 1]*descuentoSuperFan));
        console.log("carritoSubTotal = $" + carritoSubTotal);

        // Falta validación en caso de que el usuario ingrese un dato no valido

        let continuarPregunta = prompt("Os gustaria seguir comprando? (Si/No)");
        while (continuarPregunta !== "Si" && continuarPregunta !== "No" ){
            continuarPregunta = prompt("Por favor indique si vos queres seguir comprando con un 'Si' o un 'No'");  
        }
        console.log("continuarPregunta = " + continuarPregunta);

        if (continuarPregunta == "Si") {
            i--;
        }
        console.log("El valor de 'i' es = " + i)
    }
    

// CALCULO SUBTOTAL Y OFRECIMIENTO DE PUNTOS (EN CASO DE SER SUPER FAN)

    let puntosAcumulados = Math.random() * 1000;
    let descuentoDePuntos = puntosAcumulados*.2;
    let preguntaPuntos = prompt("Tu total hasta ahora es de: $" + carritoSubTotal + " te gustaria aplicar tus puntos acumulados? \n \nHasta ahora tienes " + puntosAcumulados + " puntos" + "\nSi los aplicas te ahorrarias: $" + descuentoDePuntos + "\n(Si/No)");
    while (preguntaPuntos !== "Si" && preguntaPuntos !== "No" ) {
        preguntaPuntos = prompt("Por favor indique si vos queres aplicar los puntos con un 'Si' o un 'No'");  
    }
    console.log("preguntaPuntos =" + preguntaPuntos);
    console.log("descuentoDePuntos = " + descuentoDePuntos);

    let total = 0;
    switch(preguntaPuntos){
        case "Si":
            alert("Vuestro total sería: $" + (carritoSubTotal - descuentoDePuntos));
            total = carritoSubTotal - descuentoDePuntos;
            break;
        
        case "No":
            alert("Vuestro total sería: $" + carritoSubTotal);
            total = carritoSubTotal;
            break;
    }
    console.log("El total de la orden es = " + total);

    // JOKE

    prompt("Por favor ponga su tarjeta de credito, fecha de expiración y CVV");
    alert("Es bromi :D - aquí termina el simulador");