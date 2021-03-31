//lista de argumentos
//console.log(process.argv)
//process se refere a todas as informações do processo que está sendo rodado no Nodejs

//console.log("seu nome é", process.argv[2] + " " + process.argv[3]);

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Seu nome é ${firstName} ${lastName}`)