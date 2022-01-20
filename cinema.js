// function processar(listaDeSites,funcao){
//    for(let i = 0;i < listaDeSites.length;i ++){
//    let array = []
// array.push(funcao(listaDeSites))
//    console.log(array)
// }
// }

const idade = [18,10,15]

let maiorIdade = idade.filter((value)=>value=>18)

const leigos =[
    {
        nome : "bruno",
        idade : 18
    },
    {
        nome : "konrad",
        idade : 13
    },
    {
        nome : "leila",
        idade : 41
    }
]

let objetoIdade = leigos.map((leigos)=>leigos.idade + 2)
console.log(objetoIdade)