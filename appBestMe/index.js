//process.stdout.write("Algo \n\n\n") //é o processo que vai escrever algo de saída 

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? O que eu poderia fazer para melhorar",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n" + questions[index] + " > ")
}

ask()

const answers = [];

//esse ON é para ficar ouvindo eventos.
process.stdin.on("data", data =>{
    answers.push(data.toString().trim())
    if(answers.length<questions.length){
        
        ask(answers.length) //pois vai verificar quantas respostas já tem no array answers e pega a pergunta seguinte do array questions 
    } else{
        console.log(answers)
        process.exit() //desliga o processo
    }
    //process.stdout.write( data.toString().trim() + '\n') //transforma em string e remove qualquer espaço fazio no começo ou no fim   
}) 

process.on('exit', () =>{
    console.log(`
    Bacana Rodrigo!
    
    O que você aprendeu hoje foi:  
    ${answers[0]}

    O que me deixou aborrecido? O que eu poderia fazer para melhorar:
    ${answers[1]}

    O que me deixou feliz hoje:
    ${answers[2]}
    
    Você ajudou ${answers[0]} pessoas hoje!!

    Volte amanhã para novas reflexões!    
    `)
})