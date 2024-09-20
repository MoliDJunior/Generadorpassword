let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");
let texto = "Hola mundo";
const CADENADECARACTERES = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

    let password = ""

function limpiar()
{
    password = ""
    contrasena.value = password
}

function generar()
{
    let numdigitado = parseInt(cantidad.value);
    if(numdigitado < 8)
    {
        alert("La cantidad de caracteres tiene que ser myor que 8");
    }


    for(let i = 0; i < numdigitado; i++)
    {
        let caracterrandom = CADENADECARACTERES[Math.floor(Math.random() * CADENADECARACTERES.length)];
        password += caracterrandom;

    }
    contrasena.value = password

    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*()]/.test(password);

    if (!(tieneMayuscula && tieneNumero && tieneCaracterEspecial))
    {
        alert("La contraseña no es segura. Para que sea segura utiliza numeros, mayusculas o caracteres especiales.");
    }
}





