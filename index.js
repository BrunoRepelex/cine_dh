var nomeEmpresa = "Cine DH";
let catalogo = require("./database/catalogo.json");

console.log(nomeEmpresa);

let adicionarFilme = (
    codigo,
    titulo,
    duracao,
    atores,
    anoDeLancamento,
    emCartaz
    ) => {
    let adFilme = {
        codigo,
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz,
    }
    catalogo.push(adFilme)
}
const buscaFilme = (codigoBuscado) => {
   let filmeExiste = false;
     catalogo.forEach((filme,index)=>{
        if (filme.codigo == codigoBuscado){
            filmeExiste = true
            console.log("filme: " + filme.titulo);
            console.log("anoDeLancamento: " + filme.anoDeLancamento);
            console.log("Está em Cartaz?: " + filme.emCartaz);
        
            console.log("===============================");
        }
    
    })
    if(!filmeExiste){
        console.log("filme Não encontrado");
    }

}


const alterarStatusEmCartaz = (codigoFilme, novoStatus) => {
    let filmeExiste = false;
  ​
    for (let i = 0; i < catalogo.length; i++) {
      if (catalogo[i].codigo == codigoFilme) {
        let filme = catalogo[i];
        filmeExiste = true;
  ​
        catalogo[i].emCartaz = novoStatus;
        // catalogo[i].emCartaz = catalogo[i].emCartaz ? false : true;
        // catalogo[i].emCartaz = !!catalogo[i].emCartaz;
        console.log("Filme alterado");
      }
    }
  ​
    if (!filmeExiste) {
      console.log("Filme Não encontrado");
    }
};


const listarTodosOsFilmes = () =>{ 

    catalogo.forEach((filme, index)=>{
        console.log("========================");

        console.log("Filme: " + filme.titulo);
        console.log("Duração: " + filme.duracao);
        console.log("Ano de Lançamento: " + filme.anoDeLancamento);
        console.log("Em cartaz: " + filme.emCartaz);

        console.log("========================");
    })
}



const listarTodosEmCartaz = () =>{ 

    catalogo.forEach((filme,index) =>{

        if (filme.emCartaz){

        console.log("========================");

        console.log("Filme: " + filme.titulo);
        console.log("Duração: " + filme.duracao);
        console.log("Ano de Lançamento: " + filme.anoDeLancamento);

        console.log("========================");
        }
    })
}


