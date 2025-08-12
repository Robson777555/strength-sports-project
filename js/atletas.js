// Catálogo de atletas com aliases para busca por nomes parecidos
const catalogoAtletas = [
  {
    nome: "John Brzenk",
    peso: 110,
    categoria: "Arm Wrestling",
    aliases: ["john", "brzenk", "john brzenk", "johnny", "brzenk john", "lenda do arm wrestling"],
  },
  {
    nome: "Brian Shaw",
    peso: 195,
    categoria: "Strongman",
    aliases: ["brian", "shaw", "brian shaw", "shaw brian", "homem mais forte", "strongman brian"],
  },
  {
    nome: "Devon Larratt",
    peso: 125,
    categoria: "Arm Wrestling",
    aliases: ["devon", "larratt", "devon larratt", "larratt devon", "devon canada", "lutador canadense"],
  },
  {
    nome: "Eddie Hall",
    peso: 180,
    categoria: "Strongman",
    aliases: ["eddie", "hall", "eddie hall", "hall eddie", "edward hall", "edward stephen hall", "britânico"],
  },
  {
    nome: "Hafþór Júlíus Björnsson",
    peso: 175,
    categoria: "Strongman",
    aliases: ["hafthor", "bjornsson", "thor", "mountain", "the mountain", "hafthor julius", "julius bjornsson", "islandês", "icelandic"],
  },
  {
    nome: "Levan Saginashvili",
    peso: 175,
    categoria: "Strongman",
    aliases: ["levan", "saginashvili", "levan saginashvili", "georgiano", "georgia", "strongman georgiano"],
  },
];

// Função para normalizar texto (remover acentos e converter para minúsculas)
function normalizar(texto) {
  return (texto || "")
    .toString()
    .normalize("NFD")
    .replace(/\p{Diacritic}+/gu, "")
    .toLowerCase()
    .trim();
}

// Função para alternar entre tipos de pesquisa
function alternarTipoPesquisa() {
    const tipoPeso = document.querySelector('input[value="peso"]');
    const tipoNome = document.querySelector('input[value="nome"]');
    const inputPeso = document.getElementById('pesquisaPeso');
    const inputNome = document.getElementById('pesquisaNome');
    
    if (tipoPeso.checked) {
        inputPeso.style.display = 'block';
        inputNome.style.display = 'none';
        inputNome.value = '';
    } else {
        inputPeso.style.display = 'none';
        inputNome.style.display = 'block';
        inputPeso.value = '';
    }
}

// Função para detectar se é dispositivo móvel
function isMobileDevice() {
    return window.innerWidth <= 768;
}

// Função para detectar se é tablet
function isTabletDevice() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
}

// Função para detectar se é dispositivo touch
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Função para aplicar destaque visual no atleta encontrado
function destacarAtleta(card) {
    // Remover destaque anterior
    const cardsAnteriores = document.querySelectorAll('.atleta-card.destaque');
    cardsAnteriores.forEach(cardAnterior => {
        cardAnterior.classList.remove('destaque');
    });
    
    // Remover mensagem de feedback anterior
    const feedbackAnterior = document.querySelector('.feedback-destaque');
    if (feedbackAnterior) {
        feedbackAnterior.remove();
    }
    
    // Aplicar destaque no card atual
    card.classList.add('destaque');
    
    // Criar mensagem de feedback
    const nomeAtleta = card.querySelector('h3').textContent;
    const feedback = document.createElement('div');
    feedback.className = 'feedback-destaque';
    feedback.setAttribute('role', 'alert');
    feedback.setAttribute('aria-live', 'polite');
    feedback.innerHTML = `
        <div class="feedback-content">
            <span class="feedback-icon" aria-hidden="true">🎯</span>
            <span class="feedback-text">Atleta encontrado: <strong>${nomeAtleta}</strong></span>
        </div>
    `;
    
    // Inserir feedback antes da lista de atletas
    const listaAtletas = document.getElementById('listaAtletas');
    listaAtletas.parentNode.insertBefore(feedback, listaAtletas);
    
    // Ajustar timing do scroll baseado no dispositivo
    let scrollDelay = 300;
    let scrollBlock = 'center';
    
    if (isMobileDevice()) {
        scrollDelay = 200;
        scrollBlock = 'start';
    } else if (isTabletDevice()) {
        scrollDelay = 250;
        scrollBlock = 'center';
    }
    
    // Scroll suave para o atleta
    setTimeout(() => {
        card.scrollIntoView({ 
            behavior: 'smooth',
            block: scrollBlock
        });
        
        // Adicionar foco para acessibilidade
        if (!isTouchDevice()) {
            card.setAttribute('tabindex', '-1');
            card.focus();
        }
    }, scrollDelay);
    
    // Ajustar duração do destaque baseado no dispositivo
    let destaqueDuration = 6000;
    if (isMobileDevice()) {
        destaqueDuration = 4000; // Menor duração em mobile para melhor performance
    }
    
    // Remover destaque e feedback após o tempo definido
    setTimeout(() => {
        card.classList.remove('destaque');
        if (feedback.parentNode) {
            feedback.remove();
        }
        // Remover tabindex após o destaque
        card.removeAttribute('tabindex');
    }, destaqueDuration);
}

// Função para pesquisar atletas (por peso ou nome)
function pesquisarAtletas() {
    const tipoPeso = document.querySelector('input[value="peso"]');
    const resultadoDiv = document.getElementById('resultadoPesquisa');
    const atletasCards = document.querySelectorAll('.atleta-card');
    
    // Limpar resultado anterior
    resultadoDiv.innerHTML = '';
    
    if (tipoPeso.checked) {
        pesquisarPorPeso();
    } else {
        pesquisarPorNome();
    }
}

// Função para pesquisar atletas por peso
function pesquisarPorPeso() {
    const pesoDigitado = document.getElementById('pesquisaPeso').value;
    const resultadoDiv = document.getElementById('resultadoPesquisa');
    const atletasCards = document.querySelectorAll('.atleta-card');
    
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
        
        atletasEncontrados.forEach((atleta, index) => {
            resultadoHTML += `<li>${atleta.nome} - ${atleta.categoria} - ${atleta.peso}</li>`;
            // Mostrar o card do atleta encontrado
            atleta.card.style.display = 'block';
            
            // Destacar o primeiro atleta encontrado (mais próximo do peso)
            if (index === 0) {
                destacarAtleta(atleta.card);
            }
        });
        
        resultadoHTML += '</ul>';
        resultadoDiv.innerHTML = resultadoHTML;
        
    } else {
        resultadoDiv.innerHTML = `<p class="aviso">Nenhum atleta encontrado com peso próximo a ${pesoDigitado}kg. Tente um peso entre 110kg e 195kg.</p>`;
    }
}

// Função para pesquisar atletas por nome (com aliases)
function pesquisarPorNome() {
    const nomeDigitado = document.getElementById('pesquisaNome').value;
    const resultadoDiv = document.getElementById('resultadoPesquisa');
    const atletasCards = document.querySelectorAll('.atleta-card');
    
    if (!nomeDigitado.trim()) {
        resultadoDiv.innerHTML = '<p class="aviso">Por favor, digite um nome para pesquisar.</p>';
        return;
    }
    
    const termoBusca = normalizar(nomeDigitado);
    let atletasEncontrados = [];
    
    // Buscar atletas por nome usando o catálogo com aliases
    catalogoAtletas.forEach(atleta => {
        const nomeNormalizado = normalizar(atleta.nome);
        
        // Verificar se o termo de busca está no nome principal
        if (nomeNormalizado.includes(termoBusca) || termoBusca.includes(nomeNormalizado)) {
            atletasEncontrados.push(atleta);
        } else {
            // Verificar aliases
            if (atleta.aliases && atleta.aliases.some(alias => 
                normalizar(alias).includes(termoBusca) || termoBusca.includes(normalizar(alias))
            )) {
                atletasEncontrados.push(atleta);
            }
        }
    });
    
    // Ocultar todos os cards primeiro
    atletasCards.forEach(card => {
        card.style.display = 'none';
    });
    
    if (atletasEncontrados.length > 0) {
        let resultadoHTML = `<h3>Atletas encontrados para "${nomeDigitado}":</h3><ul>`;
        
        atletasEncontrados.forEach((atleta, index) => {
            resultadoHTML += `<li>${atleta.nome} - ${atleta.categoria} - Peso: ${atleta.peso} kg</li>`;
            
            // Encontrar e mostrar o card correspondente
            atletasCards.forEach(card => {
                const nomeCard = card.querySelector('h3').textContent;
                if (nomeCard === atleta.nome) {
                    card.style.display = 'block';
                    
                    // Destacar o primeiro atleta encontrado
                    if (index === 0) {
                        destacarAtleta(card);
                    }
                }
            });
        });
        
        resultadoHTML += '</ul>';
        resultadoDiv.innerHTML = resultadoHTML;
        
    } else {
        resultadoDiv.innerHTML = `<p class="aviso">Nenhum atleta encontrado com o nome "${nomeDigitado}".</p>`;
    }
}

// Função para mostrar todos os atletas
function mostrarTodos() {
    const atletasCards = document.querySelectorAll('.atleta-card');
    const resultadoDiv = document.getElementById('resultadoPesquisa');
    const pesquisaInputPeso = document.getElementById('pesquisaPeso');
    const pesquisaInputNome = document.getElementById('pesquisaNome');
    
    // Limpar campos de pesquisa e resultado
    pesquisaInputPeso.value = '';
    pesquisaInputNome.value = '';
    resultadoDiv.innerHTML = '';
    
    // Remover destaque de todos os cards
    atletasCards.forEach(card => {
        card.classList.remove('destaque');
    });
    
    // Mostrar todos os cards
    atletasCards.forEach(card => {
        card.style.display = 'block';
    });
}

// Permitir pesquisa ao pressionar Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputPeso = document.getElementById('pesquisaPeso');
    const inputNome = document.getElementById('pesquisaNome');
    
    inputPeso.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            pesquisarAtletas();
        }
    });
    
    inputNome.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            pesquisarAtletas();
        }
    });
    
    // Adicionar listeners para os radio buttons
    const radioButtons = document.querySelectorAll('input[name="tipoPesquisa"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', alternarTipoPesquisa);
    });
    
    // Listener para redimensionamento da janela
    window.addEventListener('resize', function() {
        // Remover destaque se a tela for redimensionada
        const cardsDestacados = document.querySelectorAll('.atleta-card.destaque');
        const feedback = document.querySelector('.feedback-destaque');
        
        if (cardsDestacados.length > 0 || feedback) {
            cardsDestacados.forEach(card => {
                card.classList.remove('destaque');
            });
            if (feedback) {
                feedback.remove();
            }
        }
    });
    
    // Inicializar mostrando todos os atletas
    mostrarTodos();
});

