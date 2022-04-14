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

// MEMBRESIA PREMIUM




// ALGORTIMO
alert("Hola! Bienvenido a la tienda de mercancía oficial del grupo musical Kay Vs the Moon!");
alert("Contamos con los siguientes productos: \n - Camiseta $" + camiseta + "\n - Gorra $" + gorra + "\n - Disco Vinil $" + vinil + "\n - Pase Anual a conciertos $" + paseAnual + "\n - Disco de Greates Hits firmado $" + greatestHits + "\n - Chamarra roja de la banda $" + chamarra);

let respuestaSuperFan = prompt("Antes de iniciar, queremos preguntarte, tienes un codigo Super Fan para mejores descuentos? (Si/No)");

if (respuestaSuperFan == "Si") {
    let codigoSuperFan = prompt("Por favor ingresa tus 5 digitos de tu codigo super fan");
}


