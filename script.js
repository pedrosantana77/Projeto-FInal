const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('dataNascimento').value; // Correto ID

    console.log('Nome:', username);
    console.log('Endereço:', endereco);
    console.log('Telefone:', telefone);
    console.log('Data de Nascimento:', dataNascimento);


    // const displayData = document.getElementById('display-data');
    // displayData.innerHTML = `
    //     <p class="nome">Nome: ${username}</p>
    //     <p>Endereço: ${endereco}</p>
    //     <p>Telefone: ${telefone}</p>
    //     <p>Data de Nascimento: ${dataNascimento}</p>
    // `;
    alert("Usuario " + username + " cadastrado")
    localStorage.setItem("usuario", username)
});
const formComentario = document.querySelector('#comentario');

formComentario.addEventListener('submit', function (e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const texto = document.getElementById('texto').value;

    console.log('Título:', titulo);
    console.log('Texto:', texto);

    // localStorage.setItem("usuario", username)
    const displayData = document.getElementById('display-data');
    displayData.innerHTML = `
        <p class="comentario-titulo">Título: ${titulo}</p>
        <p class="comentario-texto">Comentário: ${texto}</p>
    `;
    // alert("Usuario " + username + " cadastrado")

});

const menu = document.querySelector("#menu")
const ul = document.querySelector("#ul")

menu.addEventListener("click", ()=>{
    ul.classList.toggle("active")
})

AOS.init();