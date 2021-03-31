//setTimeout vai rodar uma função depois de X milisegundos

const timeOut = 3000
const finished = () => console.log("done!")

setTimeout(finished, timeOut) //finished é passado como referência e não como função (finished()) pois senão era rodaria imediatamente

console.log("Mostrar")