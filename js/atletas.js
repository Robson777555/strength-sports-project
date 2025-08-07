// Função para pesquisar atletas por peso
function pesquisarPorPeso() {
    const pesoDigitado = document.getElementById('pesquisaPeso').value;
    const resultadoDiv = document.getElementById('resultadoPesquisa');
    const atletasCards = document.querySelectorAll('.atleta-card');
    
    // Limpar resultado anterior
    resultadoDiv.innerHTML = '';
    
    if (!pesoDigitado) {
        resultadoDiv.innerHTML = '<p class="aviso">Por favor, digite um peso para pesquisar.</p>';
        return;
    }
    
    const pesoNumerico = parseFloat(pesoDigitado);
    let atletasEncontrados = [];
    
    // Buscar atletas com peso exato ou próximo (tolerância de ±10kg)
    atletasCards.forEach(card => {
        const pesoAtleta = parseFloat(card.getAttribute('data-peso'));
        const diferenca = Math.abs(pesoAtleta - pesoNumerico);
        
        if (diferenca <= 10) {
            const nomeAtleta = card.querySelector('h3').textContent;
            const categoriaAtleta = card.querySelector('.categoria').textContent;
            const pesoAtletaTexto = card.querySelector('.peso').textContent;
            
            atletasEncontrados.push({
                nome: nomeAtleta,
                categoria: categoriaAtleta,
                peso: pesoAtletaTexto,
                diferenca: diferenca,
                card: card
            });
        }
    });
    
    // Ordenar por diferença de peso (mais próximo primeiro)
    atletasEncontrados.sort((a, b) => a.diferenca - b.diferenca);
    
    // Ocultar todos os cards primeiro
    atletasCards.forEach(card => {
        card.style.display = 'none';
    });
    
    if (atletasEncontrados.length > 0) {
        let resultadoHTML = `<h3>Atletas encontrados para o peso ${pesoDigitado}kg:</h3><ul>`;
        
        atletasEncontrados.forEach(atleta => {
            resultadoHTML += `<li>${atleta.nome} - ${atleta.categoria} - ${atleta.peso}</li>`;
            // Mostrar o card do atleta encontrado
            atleta.card.style.display = 'block';
        });
        
        resultadoHTML += '</ul>';
        resultadoDiv.innerHTML = resultadoHTML;
        
        // Scroll suave para os resultados
        document.getElementById('listaAtletas').scrollIntoView({ 
            behavior: 'smooth' 
        });
        
    } else {
        resultadoDiv.innerHTML = `<p class="aviso">Nenhum atleta encontrado com peso próximo a ${pesoDigitado}kg. Tente um peso entre 110kg e 195kg.</p>`;
    }
}

// Função para mostrar todos os atletas
function mostrarTodos() {
    const atletasCards = document.querySelectorAll('.atleta-card');
    const resultadoDiv = document.getElementById('resultadoPesquisa');
    const pesquisaInput = document.getElementById('pesquisaPeso');
    
    // Limpar campo de pesquisa e resultado
    pesquisaInput.value = '';
    resultadoDiv.innerHTML = '';
    
    // Mostrar todos os cards
    atletasCards.forEach(card => {
        card.style.display = 'block';
    });
}

// Permitir pesquisa ao pressionar Enter
document.getElementById('pesquisaPeso').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        pesquisarPorPeso();
    }
});

// Inicializar mostrando todos os atletas
document.addEventListener('DOMContentLoaded', function() {
    mostrarTodos();
});

