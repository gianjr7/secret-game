let amigos = [];

window.adicionarAmigo = function () {
    const input = document.getElementById("nome");
    const nome = input.value.trim();

    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome);
        input.value = "";
        atualizarLista();
    }
};

function atualizarLista() {
    const lista = document.getElementById("lista-amigos");
    lista.innerHTML = ""; 

    amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

window.sortearAmigo = function () {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para o sorteio!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Escolhe um aleatório

    exibirSorteio(sorteado);
};

function exibirSorteio(sorteado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h3>Amigo Sorteado:</h3><p>${sorteado}</p>`;
}
