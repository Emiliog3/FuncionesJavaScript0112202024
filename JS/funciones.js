// Validación de entrada para evitar letras
function validarNumero(valor) {
    if (isNaN(valor) || valor === "") {
        alert("Por favor, ingresa un número válido.");
        return false;
    }
    return true;
}

// Función para permutar dos números
function permuta() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (!validarNumero(num1) || !validarNumero(num2)) return;

    [num1, num2] = [num2, num1];
    const resultado = `Los números permutados son: ${num1} y ${num2}`;
    mostrarResultado("permutaResultado", resultado);
}

// Función para contar hasta un número
function cuenta() {
    let limite = document.getElementById("cuentaNumero").value;

    if (!validarNumero(limite)) return;

    let resultado = "";
    for (let i = 0; i <= limite; i++) {
        resultado += i + " ";
    }
    mostrarResultado("cuentaResultado", `Cuenta: ${resultado.trim()}`);
}

// Función para determinar si un número es positivo, negativo o nulo
function determinarSigno() {
    let numero = document.getElementById("signoNumero").value;

    if (!validarNumero(numero)) return;

    numero = parseFloat(numero);
    let resultado = "";

    if (numero > 0) {
        resultado = "El número es positivo.";
    } else if (numero < 0) {
        resultado = "El número es negativo.";
    } else {
        resultado = "El número es nulo.";
    }
    mostrarResultado("signoResultado", resultado);
}

// Función para mostrar los resultados de forma llamativa
function mostrarResultado(elementoId, mensaje) {
    const elemento = document.getElementById(elementoId);
    elemento.innerText = mensaje;
    elemento.classList.remove("d-none");
}
