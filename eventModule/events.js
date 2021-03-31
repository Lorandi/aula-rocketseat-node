const { EventEmitter } = require("events")

const ev = new EventEmitter()

//ev.on("saySomething",(mensagem) => console.log("EU OUVI VOCÊ", mensagem))
ev.once("saySomething",(mensagem) => console.log("EU OUVI VOCÊ", mensagem)) //onde dispara só uma vez e ignora os outros


ev.emit("saySomething", "Rodrigo")

