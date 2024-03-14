let chamadaDeAlunos = [
    {
        nomes: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/23",
        numeroChamada: 1221
    },
    {
        nomes: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        matriculadoEm: "2024/04/23",
        numeroChamada: 1222
    },
    {
        nomes: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        matriculadoEm: "2024/02/25",
        numeroChamada: 1223
    },
    {
        nomes: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/29",
        numeroChamada: 1224
    },
    {
        nomes: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        matriculadoEm: "2024/12/23",
        numeroChamada: 1225
    },
]

// listar todos os aluno, apenas RA nome

function mostrar(alunos) {
    alunos.forEach(aluno => {
        console.log('aluno: '+ aluno.nomes);
        console.log('Ra do aluno: '+ aluno.numeroChamada);
    });
}
mostrar(chamadaDeAlunos);


//chamar pelo dia 2

 function listarAluno(chamadaDeAlunos){
    chamadaDeAlunos.forEach(chamadaDeAlunos => {
        chamadaDeAlunos.matriculadoEm = chamadaDeAlunos.matriculadoEm.split("_")

        console.log(chamadaDeAlunos.matriculadoEm[1])
        if(chamadaDeAlunos.matriculadoEm[1] === "02"){
            console.log("Aluno:" + chamadaDeAlunos.nome)
            return
        }
    })
}


// Função para mostrar apenas os alunos aprovados nas matérias
function mostrarAprovados(alunos) {
    alunos.forEach(alunos => {
        alunos.materias.forEach(materias => {
            if (materias.nota >= 6 && materias.presenca >= 75) {
                console.log('Aprovado - Aluno:' + alunos.nomes);
            }else{
                console.log('Reprovado - Aluno:' + alunos.nomes)
            }

        });
    });
}
mostrarAprovados(chamadaDeAlunos);
















/*--------------------------------------------------------
let aluno1 = {
    nome:"Vitor Ferraz",
    idade: 17,
    ra: "1234567",
    cursando:["PDM", "TIA"],
    presença:["2022-03-03", "2022-08-04", "2022-05-03"],
}

function validaCasdastro(){

    if(aluno1.nome.lenght<10){
        return "cadastro inválido";  
    } 
    if(aluno1.idade.toString()<14){
        return "cadastro inválido";
    }
    if(cursando<3){
        return "cadastro inválido";
    }
    if(presença<2){
        return "cadastro inválido";
    }
    if(ra<7){
        return "RA inválido";
    }
    else{
        return"Seu cadastro foi um sucesso";
    }  
}
console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.ra);
console.log(aluno1.cursando);
console.log(aluno1.presença);
*/




