function sayHello(name) {
    const hola = 'Hello'
    console.log(hola + ' ' + name);
}

sayHello('Fernando');

function calculateSquareArea(lado) {
    console.log(lado * lado);
}

calculateSquareArea(4);

function calculateTriangleArea(base, altura) {
    console.log(base * altura / 2);
}

calculateTriangleArea(10, 5);

function calculateCircleArea(radio) {
    console.log(radio * radio * 3.1416);
}

calculateCircleArea(15);

function celsiusToFahrenheit(celsius) {
    console.log(celsius * 1.8 + 32);
}

celsiusToFahrenheit(25);

function fahrenheitToCelsius(farenheit) {
    console.log((farenheit - 32) / 1.8);
}

fahrenheitToCelsius(77);

function totalPrice(precio) {
    console.log(precio * 1.21 + "€");
}

totalPrice(10);

function writeMessage(name, material, size, note) {
    console.log(name + ' ha pedido una caja de ' + material + ' de tamaño ' + size + '. ' + note + '.');
}

writeMessage('Fernando', 'PVC', 'XL', 'Gracias');
