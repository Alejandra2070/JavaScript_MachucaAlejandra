
function recursive(n, k){
    if (n.length == 1){
        return parseInt(n);
    }
    let suma = 0;
    for (let i = 0; i < n.length; i++){
        suma += parseInt(n[i]);
    }
    suma *= k;
    console.log(suma)
    return recursive(suma.toString(), 1)
}
let n=String(prompt("Ingresa los números: "))
let k=parseInt(prompt("Ingresa la cantidad de veces que se va a repetir el número: "))
console.log("")
console.log(recursive(n,k));
