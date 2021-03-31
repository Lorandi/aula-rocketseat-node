#NPM

Glossário: Dependencies, Packages, Modules__

- Verificar se temos o npm instalado `npm -v`

- Criar nosso próprio pacote 
    `npm init`- com perguntas
    `npm init -y` - sem perguntas

- O que é o arquivo package.json    

- Utilizar módulos de terceiros `npm install ...` 
    `npm install cfonts`

    poderia ser apens `i` no lugar de `install`

    `-D` gera um `devDependecies` no package.json, somente usado em um ambiente de
    desenvolvimento

    -npm install tb permite que instale vários de uma vez:
    `npm i cfonts inquirer opn`

    -Pode manipular o package.json (por exemplo tirando algo do devDependecies)
    `npm update`


- O que é o diretório node_modules
    Não mandar para o git. Posso deletar o node_modules/ e recuperar com 
    `npm install`. Sera reinstalado todos que estiverem no `package.json`

- O que é o arquivo package-lock.json
    É um arquivo .json como outro mas não deve ser manipulado pois ele serve
    para fazer o mapeamento de todas as dependências do projeto.

- Criar scripts para rodar com o npm
    `"scripts": {"start": "node index.js"}`
    `npm run start`  - o start pode tira o run que antecede. mas só ele

- Instalar pacote de maneira global
    `-g` , ou seja, vai instalar para toda a maquina, não só em um projeto
    
    `npm root -g` para saber onde está instalado na máquina
        C:\Users\rodri\AppData\Roaming\npm\node_modules
    
- Desinstalar pacotes
    `npm uninstall ... -g` para desinstalar global
    `npm uninstall ... `para desinstalar local

- Mudar versão dos pacotes
    major.minor.patch
    `npm outdated` mostra as versões desatualizadas
    `npm upgrade` para atualizar 
    `npm i moment@latest` para pegar a ultima versão do moment


