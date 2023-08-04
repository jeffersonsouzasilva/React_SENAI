// Mostrar menu no layout responsivo
let menu = document.getElementById("menu_links"); // Obtém o elemento do menu pelo ID
let sombra = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
let menu_barras = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID

let body = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)

function mostrarMenu() {
    if (window.getComputedStyle(menu).left != "10px") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
        menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
        sombra.style.right = "-10vw"; // Move a sombra para a direita
        menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
        menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
        body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
    } else {
        menu.style.left = "-300px"; // Esconde o menu deslocando-o para esquerda
        sombra.style.right = "110vw"; // Move a sombra para a esquerda para ocultá-la
        menu_barras.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
        menu_barras.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
        body.style.overflow = "auto"; // Restaura o overflow do body para o valor padrão (auto)
    }
    menu_barras.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
}





//Funçao para colocar mascara no input de CEP
function mascaraCep(event) {
    let valorDigitado = event.target.value; // Obtém o valor do elemento que acionou o evento, neste caso o valor digitado no input

    if (!valorDigitado) return ""; // Se o valor for vazio, retorna uma string vazia

    valorDigitado = valorDigitado.replace(/\D/g, ''); // Remove todos os caracteres não numéricos do valor (deixa apenas os dígitos)
    valorDigitado = valorDigitado.replace(/(\d{5})(\d)/, '$1-$2'); // Aplica a máscara de CEP (formato XXXXX-XXX) ao valor

    event.target.value = valorDigitado; // Atualiza o valor do input com o valor mascarado
}





//Colocar a mascara de valor em Real
function mascaraValor(event) {
    let valorDigitado = event.target.value; // Obtém o valor do elemento que acionou o evento, neste caso o valor digitado no input

    valorDigitado = valorDigitado.replace(/\D/g, ''); // Remove todos os caracteres não numéricos do valor (deixa apenas os dígitos)
    valorDigitado = (valorDigitado / 100).toFixed(2) + ""; // Divide o valorDigitado por 100, arredonda para duas casas decimais e converte em string
    valorDigitado = valorDigitado.replace(".", ","); // Substitui o ponto decimal por vírgula
    valorDigitado = valorDigitado.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,"); // Adiciona separadores de milhar e vírgula para valores acima de 1000
    valorDigitado = valorDigitado.replace(/(\d)(\d{3}),/g, "$1.$2,"); // Adiciona separadores de milhar e vírgula para valores abaixo de 1000
    event.target.value = `R$ ${valorDigitado}`; // Define o valor do elemento que disparou o evento como "R$ " seguido do valor formatado
}





// Gera as opções do select com base no array
let listaOpcoes = ["HTML", "CSS", "JavaScript"]; // Array contendo as opções para o select
let select = document.getElementById("cad_select_skill"); // Obtém o elemento select pelo seu ID

listaOpcoes.forEach(item => { // Lê o array de opções
    let option = document.createElement("option"); // Cria um elemento HTML option

    option.text = item; // Define o texto da opção como o valor atual do array
    option.value = item; // Define o valor da opção como o valor atual do array

    select.appendChild(option); // Adiciona a opção ao elemento select
});






// Pegar a opção selecionada no select e salva no array
let skillsSelecionadas = []; // Array para armazenar as skills selecionadas
let botaoInserir = document.getElementById("cad_btn_inserir"); // Obtém o botão "Inserir" pelo ID

botaoInserir.addEventListener("click", function () {
    let valorSelecionado = select.value; // Obtém o valor selecionado do elemento "select"

    let skillEncontrada = skillsSelecionadas.find(skill => skill == valorSelecionado); // Verifica se a skill já foi selecionada anteriormente

    if (skillEncontrada == undefined) { // Verifica se a skill não foi encontrada no array de skills selecionadas
        if (valorSelecionado != "") { // Verifica se a opção selecionada é diferente de vazio 
            skillsSelecionadas.push(valorSelecionado); // Adiciona a skill selecionada ao array de skills selecionadas
            select.value = ""; // Limpa o valor selecionado no elemento "select"
            renderizarItens(); // Renderiza novamente as skills na página
        } else {
            alert("Selecione uma skill para adicionar"); // Exibe um alerta solicitando a seleção de alguma skill
        }
    }
    else {
        alert("Essa skill já foi selecionada"); // Exibe um alerta informando que a skill já foi selecionada anteriormente
    }
});





// Mostrar os itens do array na tela
function renderizarItens() {
    let divListaSkills = document.getElementById("cad_lista_skills"); // Obtém a div que irá conter as skills selecionadas

    let template = ""; // Variável para armazenar o template HTML das skills

    if (skillsSelecionadas.length > 0) { // Verifica se existem skills no array
        skillsSelecionadas.forEach(skill => { // Lê item à item dentro do array
            // Acrescenta um template para cada item do array
            template += `
            <div class="cad_item_skill">
                <span class="cad_span_skill">${skill}</span>
                <button type="submit" id="cad_item_excluir" onclick="excluirSkill('${skill}')" class="cad_item_excluir"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
            </div>
            `;
        });
    } else { //Se não houver itens no array
        // Acrecenta uma mensagem ao template
        template = `
        <span class="cad_span_skill">Nenhuma skill cadastrada</span>
        `;
    }

    divListaSkills.innerHTML = template; // Renderiza o template dentro da div

}
renderizarItens(); // Chama a função para renderizar as skills inicialmente na página





// Excluir itens do array
function excluirSkill(skill) {

    let indiceItem = skillsSelecionadas.indexOf(skill); // Encontrar o índice do item no array

    skillsSelecionadas.splice(indiceItem, 1); // Remove o item do array pelo índice

    renderizarItens(); // Renderizar novamente os itens
};
