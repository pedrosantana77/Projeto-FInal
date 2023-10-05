
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


    const displayData = document.getElementById('display-data');
    console.log(displayData)
    displayData.innerHTML = `
        <p>Nome: ${username}</p>
        <p>Endereço: ${endereco}</p>
        <p>Telefone: ${telefone}</p>
        <p>Data de Nascimento: ${dataNascimento}</p>
    `;
});

AOS.init();