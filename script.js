// El objetivo del reto es crear un simulador compuesto por (1) Un algoritmo de condicional (2) utilizando un ciclo (3) interactivo.
// Crearemos un carrito para un grupo musical, habrá un pequeño catalogo con multiples productos los cuales el usuario puede decidir si agregar al carrito o no.
// Adicional crearemos el concepto de "Membresía Premium" lo cual le da acceso a distintos descuentos en cada producto. 
// Finalmente le daremos una cantidad de puntos aleatorios al usuario, los cuales en su total del carrito le permitiremos que use para pagar menos si así lo desea.
// Cada selector (Si/No) viene acompañado con una validación 'validacionSiNo' que asegura el input del usuario.

// FUNCIONES
    // validacionSiNo = La funcion principal es la de validacion del input del usuario el cual nos permite garantizar que el usuario seguira dentro de un esquema. 
    let savedvalidacionSiNo;
    function validacionSiNo (respuesta, mensaje) {
        while (respuesta !== "Si" && respuesta !== "No" )
        {
            respuesta = prompt(mensaje + " con 'Si' o 'No'"); 
            console.log("la respuesta de funcion fue = " + respuesta);
        }
        savedvalidacionSiNo = respuesta;
    }

    // varObj & present = De manera que pudiera debuggear mas facilmente coloque multiples console.logs a lo largo del codigo, para poder especificar de que valor estaba hablando use un arrow function el cual transforma a un string el nombre de la variable con "varObj" y luego presentarlo con "present".

    const varToString = varObj => Object.keys(varObj)[0]
    let displayName;

    function present (valor) {
        console.log("El valor de " + displayName + " es = " + valor);
    }


// CATALOGO DE PRODUCTOS 
    //Abajo encontrarás multiples variables con precios adjuntons a cada uno de ellos y un array con los nombres para selección del usuario.
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
    // El codigo SuperFan lo unico que hará es cambiar la variable 'descuentoSuperFan' para que pueda ser utilizada en darle un 30% de descuento a los precios mencionados arriba en el caso de que el usuario haya dicho que SI.

    let respuestaSuperFan = prompt("Antes de iniciar, queremos preguntarte, tienes un codigo Super Fan para mejores descuentos? (Si/No)");

    // VALIDATION STEP
    validacionSiNo (respuestaSuperFan, "Por favor indique si tiene un codigo Super Fan")
    respuestaSuperFan = savedvalidacionSiNo;
    displayName = varToString({ respuestaSuperFan });
    present(respuestaSuperFan);
    
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
    displayName = varToString({ descuentoSuperFan });
    present(descuentoSuperFan);
    displayName = varToString({ codigoSuperFan });
    present(codigoSuperFan);



// PREGUNTA SOBRE ADICIÓN DE PRODUCTOS A CARRITO - MENU
// El codigo de esta parte esta dividido en 3 secciones: Selector, Validation de input del usuario, Verificación de repetición

    // Selector:
    // Establece las reglas del bucle 'for' y le da a escoger al usuario los productos a comprar, estos ademas varian en precio segun la respuesta sobre SuperFan. Finalmente altera el valor de carritoSubTotal que guarda la adición de los productos al carrito.
    //      Encontrarás un secureCarritoSubTotal, el cual guarda el valor del subcarrito porque en caso de que el usuario ingrese un NaN o un numero distinto a las opciones del array, cambiaria el    carritoSubTotal y lo vuelve inutilizable. 
    let carritoSubTotal = 0;
    for (let i = 0; i < 1; i++) {
        let productSelection = prompt(
            "Selecciona de la lista de productos cual quisieras agregar a vuestro carrito! \n \n Escribe el numero que corresponda, por ejemplo: Pase Anual a conciertos = 4"
             + "\n - (1) Camiseta $" + (productsArray[0] - (productsArray[0]*descuentoSuperFan))
              + "\n - (2) Gorra $" + (productsArray[1] - (productsArray[1]*descuentoSuperFan)) 
               + "\n - (3) Disco Vinil $" + (productsArray[2] - (productsArray[2]*descuentoSuperFan))
                + "\n - (4) Pase Anual a conciertos $" + (productsArray[3] - (productsArray[3]*descuentoSuperFan))
                 + "\n - (5) Disco de Greates Hits firmado $" + (productsArray[4] - (productsArray[4]*descuentoSuperFan)) 
                  + "\n - (6) Chamarra roja de la banda $" + (productsArray[5] - (productsArray[5]*descuentoSuperFan)));

        console.log("El usuario escogió " + productSelection + " lo cual es igual a " + productsArray[productSelection - 1]);      

        secureCarritoSubTotal = carritoSubTotal 
        carritoSubTotal = carritoSubTotal + (productsArray[productSelection - 1] - (productsArray[productSelection - 1]*descuentoSuperFan));

        displayName = varToString({ carritoSubTotal });
        present(carritoSubTotal);

        // Validation de input del usuario:
        // Usa un switch para usar el default como cualquier otro escenario fuera de los deseados del usuario. En el caso de que este cause que carritoSubTotal sea NaN lo reestablece usando secureCarritoSubTotal y luego reinicia el bucle for.
        switch(productSelection){
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;
            case "4":
                break;  
            case "5":
                break;
            case "6":
                break;

            default:    
                i--;
                carritoSubTotal = secureCarritoSubTotal
                console.log("El carrito ha sido salvado con un costo de = " + carritoSubTotal);
                continue;   
        }
  

        // Verificación de repetición: 
        // Utiliza una validación sencilla que produce que el bucle se repita si el usuario escoge Si.
        let continuarPregunta = prompt("Os gustaria seguir añadiendo productos? (Si/No)");

        //VALIDATION STEP
        validacionSiNo(continuarPregunta, "Por favor indique si vos queres seguir añadiendo productos");
        continuarPregunta = savedvalidacionSiNo;
        displayName = varToString({ continuarPregunta });
        present(continuarPregunta);

        if (continuarPregunta == "Si") {
            i--;
        }

        displayName = varToString({ i });
        present(i);

    }
    

// CALCULO SUBTOTAL Y OFRECIMIENTO DE PUNTOS (EN CASO DE SER SUPER FAN)
    // Genera un numero random que luego multiplico para que cree un supuesto descuento equivalente a unos puntos acumulados del usuario para la simulación. El usuario puede luego decidir si aplicarlos o no a su Subtotal. El descuentoDePuntos es del 20% de los puntos, por arbitrariedad, solo porque noto que es una practica comun de retail que los puntos no representen 1:1 el descuento.
    let puntosAcumulados = Math.random() * 1000;
    let descuentoDePuntos = puntosAcumulados*.2;
    let preguntaPuntos = prompt("Tu total hasta ahora es de: $" + carritoSubTotal + " os gustaria aplicar vuestros puntos de descuento?" + "\n \nHasta ahora tienes " + puntosAcumulados + " puntos" + "\nSi los aplicas te ahorrarias: $" + descuentoDePuntos + "\n(Si/No)");

    // VALIDATION STEP
    validacionSiNo(preguntaPuntos, "Por favor indique si vos queres aplicar los puntos");
    preguntaPuntos = savedvalidacionSiNo;
    displayName = varToString({ preguntaPuntos });
    present(preguntaPuntos);
    displayName = varToString({ descuentoDePuntos });
    present(descuentoDePuntos);

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
    displayName = varToString({ total });
    present(total);

// JOKE
// Chascarrillo for the lolz.

    prompt("Por favor ponga su tarjeta de credito, fecha de expiración y CVV");
    alert("Es bromi :D - aquí termina el simulador");