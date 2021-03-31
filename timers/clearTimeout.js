//clearTimeout cancelar um timeOut

const timeOut = 3000
const finished = () => console.log("done!")

//setTimeout(finished, timeOut) //finished é passado como referência e não como função (finished()) pois senão era rodaria imediatamente

let timer = setTimeout(finished, timeOut)

clearTimeout(timer)