console.log("Estou funcionando!");

// const url = "https://reqres.in/api/users?page=2";

// const options = {
//     method: 'GET',
//     mode: 'cors',
//     cache: 'default'
// }

// fetch(url, options)
// .then(response => {
//     response.json()
//     .then(dados => {
//         console.log(dados, "Aqui é Dados");
//         const usuarios = dados.data; // Array com todos os usuários e seus atributos!
//         console.log(usuarios, "Aqui é o Arrray usuários!");

//         //EXIBIR OS USUÁRIOS NO DOM
//         for(i=0; i<usuarios.length; i++){
//             // console.log(usuarios[i])

//             //Exibindo o avatar em uma img
//             let imagemUsuario = document.createElement('img');
//             imagemUsuario.setAttribute('src', usuarios[i].avatar);
//             document.getElementById('divTodosUsuarios').append(imagemUsuario);

//             //Exibindo Nome e Sobrenome em um H3
//             let nomeUsuario = document.createElement('h3');
//             nomeUsuario.innerText = `${usuarios[i].first_name} ${usuarios[i].last_name}`;
//             document.getElementById('divTodosUsuarios').append(nomeUsuario);

//             //Exibindo o Email em um p
//             let emailUsuario = document.createElement('p');
//             emailUsuario.innerText = usuarios[i].email;
//             document.getElementById('divTodosUsuarios').append(emailUsuario);

//         }



//     })
// })
// .catch(err => {
//     console.log(err, "Erro!")
// })



// NASA API KEY = OZ31A8UJqwh8iTxs964qtWptWUSkpKQcVEqqUpkT
const nasaAPIKey = "OZ31A8UJqwh8iTxs964qtWptWUSkpKQcVEqqUpkT";

let dataInicial = "2022-01-01";
let dataFinal = "2022-05-05";

//parametros na URL = ?parametro1=valor1&parametro2=valor2&parametro3=valor3

const url = `https://api.nasa.gov/planetary/apod?api_key=${nasaAPIKey}&start_date=${dataInicial}&end_date=${dataFinal}`;




console.log(url, "URL da Request")

fetch(url)
.then(response => {
    response.json()
    .then(dados => {
        console.log(dados);

        // let imagemAPOD = document.createElement('img');
        // imagemAPOD.setAttribute('src', dados.url);
        // document.getElementById('divTodosUsuarios').append(imagemAPOD);

    })
})





