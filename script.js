const firebaseConfig = {
    apiKey: "AIzaSyAp_1W6psauquYkrZENUBgnEOGqHY-he10",
    authDomain: "clickagua-d2d47.firebaseapp.com",
    projectId: "clickagua-d2d47",
    storageBucket: "clickagua-d2d47.firebasestorage.app",
    messagingSenderId: "599259759315",
    appId: "1:599259759315:web:c5a24f8a20d58a8b840a26"
};

try {
    firebase.initializeApp(firebaseConfig);
    window.db = firebase.firestore();
    console.log("✅ Firebase e Firestore inicializados!");
} catch(e) {
    console.error("❌ Erro ao inicializar o Firebase:", e);
}

document.addEventListener('DOMContentLoaded', () => {

    const gameData = {
        phase1: {
            title: "Gotas de História",
            description: "Conheça a história da CEDAE desde sua fundação",
            flashcards: [
                { title: "Primeiro Grande Sistema", subtitle: "1908", text: "Foi inaugurado o 'Grande Sistema de abastecimento', hoje conhecido como Sistema Acari, levando água de Nova Iguaçu e Duque de Caxias até o Centro do Rio." },
                { title: "Sistema Ribeirão das Lajes", subtitle: "1940", text: "Para suprir o crescimento da capital, foi construído o sistema de Ribeirão das Lajes. A primeira adutora ficou pronta em 1940." },
                { title: "ETA Laranjal", subtitle: "1954", text: "Para atender ao Leste Metropolitano (Niterói e São Gonçalo), é inaugurada a ETA do Laranjal, interligada ao sistema de captação de água bruta no Canal de Imunana." },
                { title: "ETA Guandu", subtitle: "1955", text: "A transposição das águas dos rios Paraíba do Sul e Piraí possibilita a inauguração da primeira etapa da ETA do Guandu, que viria a ser uma das maiores do mundo." },
                { title: "Elevatória do Lameirão", subtitle: "1966", text: "Entrou em operação como a maior estação subterrânea do mundo, com as estruturas hidráulicas a 64 metros abaixo do nível do terreno." },
                { title: "Fundação da CEDAE", subtitle: "1975", text: "A CEDAE foi criada em 1975, ano da fusão entre os estados da Guanabara e do Rio de Janeiro. Nasceu da união de três empresas: Cedag, Esag e Sanerj." },
                { title: "Programa Replantando Vida", subtitle: "2001", text: "A Cedae lança o programa unindo preservação ambiental e ressocialização de apenados do sistema prisional estadual." },
                { title: "Recorde Mundial", subtitle: "2007", text: "A ETA Guandu entra no Guinness Book (O Livro dos Recordes) como a maior estação de tratamento de água do mundo em produção contínua." },
                { title: "Novo Foco", subtitle: "2021", text: "Após a concessão dos serviços de distribuição, a CEDAE passou a concentrar investimentos e esforços na produção e fornecimento de água de alta qualidade para as concessionárias." },
                { title: "Inovação e Futuro", subtitle: "2023", text: "Inaugurado o Libra, novo laboratório da ETA Guandu com 'sommeliers de água', e iniciada a obra da ETA Xerém, a maior com sistema de ultrafiltração do Brasil." }
            ],
            quiz: [
                { question: "Em que ano a CEDAE foi criada?", options: ["1955", "1975", "2001", "1966"], answer: 1, feedback: "A CEDAE foi criada em 1975, com a fusão dos estados da Guanabara e do Rio de Janeiro." },
                { question: "A CEDAE nasceu da fusão de quantas empresas?", options: ["Duas", "Três", "Quatro", "Cinco"], answer: 1, feedback: "A companhia nasceu da fusão de três empresas: CEDAG, ESAG e SANERJ." },
                { question: "Qual o nome da elevatória subterrânea inaugurada em 1966?", options: ["Elevatória Guandu", "Elevatória Acari", "Elevatória Lameirão", "Elevatória Lajes"], answer: 2, feedback: "A Elevatória do Lameirão foi inaugurada em 1966 e é a maior estação subterrânea do mundo." },
                { question: "Em que ano a ETA Guandu entrou para o Guinness Book?", options: ["1955", "1975", "2007", "2021"], answer: 2, feedback: "A ETA Guandu entrou para o Guinness Book em 2007 como a maior estação de tratamento de água em operação contínua." },
                { question: "Qual o nome do programa de ressocialização e preservação ambiental criado em 2001?", options: ["Água Limpa", "Replantando Vida", "Guandu 2022", "Pacto Global"], answer: 1, feedback: "O programa Replantando Vida une preservação ambiental e ressocialização de apenados." },
                { question: "Após a concessão de 2021, qual passou a ser o foco principal da CEDAE?", options: ["Coleta de esgoto", "Distribuição de contas", "Produção e fornecimento de água", "Venda de caminhão-pipa"], answer: 2, feedback: "Desde 2021, a CEDAE concentra seus esforços na produção e fornecimento de água tratada." },
                { question: "Qual o nome do novo laboratório da ETA Guandu, inaugurado em 2023?", options: ["Laboratório Libra", "Laboratório Guandu", "Laboratório Aqua", "Centro de Controle (CCO)"], answer: 0, feedback: "O novo laboratório da ETA Guandu chama-se Libra e conta com 'sommeliers de água'." },
                { question: "Qual sistema de abastecimento, hoje conhecido como Acari, foi inaugurado em 1908?", options: ["Sistema Laranjal", "Sistema Lajes", "O Grande Sistema de abastecimento", "Sistema Imunana"], answer: 2, feedback: "O 'Grande Sistema de Abastecimento' foi inaugurado em 1908 e hoje é conhecido como Sistema Acari." },
                { question: "A ETA Xerém, iniciada em 2023, usará qual tecnologia de tratamento?", options: ["Osmose Reversa", "Filtração de Carvão", "Ultrafiltração", "Raios UV"], answer: 2, feedback: "A ETA Xerém utilizará o sistema de ultrafiltração, o mais moderno do Brasil." },
                { question: "A ETA Laranjal (1954) foi criada para atender qual região?", options: ["Zona Oeste", "Baixada Fluminense", "Zona Sul", "Leste Metropolitano (Niterói e São Gonçalo)"], answer: 3, feedback: "A ETA Laranjal foi inaugurada para atender o Leste Metropolitano — Niterói e São Gonçalo." }
            ]
        },
        phase2: {
            title: "O Saber Está no Cano",
            description: "O percurso da água do Guandu até a sua casa",
            flashcards: [
                { title: "Captação no Rio Guandu", subtitle: "Origem", text: "A captação de água para tratamento na ETA Guandu é feita no Rio Guandu, em Nova Iguaçu, após 43 quilômetros de percurso do rio." },
                { title: "Etapa 1: Coagulação", subtitle: "Tratamento", text: "Ao chegar na ETA, a água bruta recebe coagulantes químicos (como sulfato de alumínio) para agrupar as impurezas." },
                { title: "Etapa 2: Floculação", subtitle: "Tratamento", text: "Com uma agitação controlada, as impurezas agrupadas (flocos) ganham peso e tamanho, preparando-se para a próxima etapa." },
                { title: "Etapa 3: Decantação", subtitle: "Tratamento", text: "A água passa por grandes tanques (decantadores), onde a velocidade é reduzida. Os flocos pesados de sujeira vão para o fundo." },
                { title: "Etapa 4: Filtração", subtitle: "Tratamento", text: "A água clarificada (já sem a maior parte da sujeira) passa por filtros compostos por camadas de areia, que retêm as partículas mais finas." },
                { title: "Etapa 5: Desinfecção", subtitle: "Qualidade", text: "Esta é a etapa crucial. É adicionado Cloro à água para eliminar micro-organismos patogênicos (que causam doenças) e garantir que a água seja segura." },
                { title: "Etapa 6: Fluoretação", subtitle: "Saúde Pública", text: "Por determinação do Ministério da Saúde, é adicionado Flúor na água tratada como um agente auxiliar importante no combate à cárie dentária." },
                { title: "Etapa 7: Correção de pH", subtitle: "Qualidade", text: "Por fim, adiciona-se Cal Virgem para a correção do pH da água, evitando que ela fique ácida e cause corrosão nos encanamentos." },
                { title: "Laboratórios", subtitle: "Monitoramento 24h", text: "A ETA Guandu possui laboratórios que analisam parâmetros como cor, turbidez, pH e cloro 24 horas por dia, realizando cerca de 30 mil análises por mês." },
                { title: "Destino: Lameirão", subtitle: "Distribuição", text: "Metade da água tratada no Guandu é destinada à Elevatória do Lameirão (a maior subterrânea do mundo) através de um túnel de 11km." }
            ],
            quiz: [
                { question: "De qual rio é feita a captação principal para a ETA Guandu?", options: ["Rio Paraíba do Sul", "Rio Macacu", "Rio Guandu", "Rio Acari"], answer: 2, feedback: "A captação principal da ETA Guandu é feita no Rio Guandu, em Nova Iguaçu." },
                { question: "Qual a primeira etapa do tratamento ao chegar na ETA?", options: ["Filtração", "Coagulação química", "Decantação", "Fluoretação"], answer: 1, feedback: "A primeira etapa é a coagulação, quando se adicionam produtos químicos para agrupar impurezas." },
                { question: "Na etapa de Floculação, o que acontece com as impurezas?", options: ["Elas se dissolvem", "Elas evaporam", "Elas se agrupam formando flocos", "Elas são filtradas"], answer: 2, feedback: "Na floculação, as impurezas se juntam formando flocos maiores e mais pesados." },
                { question: "Qual produto é adicionado para a Desinfecção?", options: ["Flúor", "Cal", "Areia", "Cloro"], answer: 3, feedback: "O cloro é utilizado para eliminar micro-organismos patogênicos e garantir a segurança da água." },
                { question: "Por que o Flúor é adicionado à água?", options: ["Para dar cor", "Para auxiliar no combate à cárie", "Para corrigir o pH", "Para formar flocos"], answer: 1, feedback: "O flúor é adicionado para prevenir cáries dentárias, por exigência do Ministério da Saúde." },
                { question: "Qual produto é usado para a Correção do pH?", options: ["Cal virgem", "Cloro", "Sulfato de alumínio", "Polieletrólito"], answer: 0, feedback: "A cal virgem é usada para corrigir o pH, evitando corrosão nas tubulações." },
                { question: "Quantos litros por segundo a ETA Guandu trata?", options: ["1.000 l/s", "12.000 l/s", "45.000 l/s", "100.000 l/s"], answer: 2, feedback: "A ETA Guandu trata cerca de 45 mil litros de água por segundo, sendo uma das maiores do mundo." },
                { question: "Qual o nome da elevatória subterrânea que recebe metade da água tratada do Guandu?", options: ["ETA Laranjal", "Elevatória do Lameirão", "Reservatório Marapicu", "Sistema Acari"], answer: 1, feedback: "A Elevatória do Lameirão recebe metade da água tratada, por um túnel de 11 km." },
                { question: "O que acontece na etapa de Decantação?", options: ["A água é fervida", "O cloro é adicionado", "Os flocos de sujeira vão para o fundo", "A água passa pela areia"], answer: 2, feedback: "Na decantação, os flocos de sujeira mais pesados se depositam no fundo dos tanques." },
                { question: "Quantas análises em média o laboratório da ETA Guandu realiza por mês?", options: ["100", "1.000", "5.000", "30.000"], answer: 3, feedback: "Os laboratórios da ETA Guandu realizam cerca de 30 mil análises mensais para controle de qualidade." }
            ]
        },
        phase3: {
            title: "Você sabe cuidar da sua água?",
            description: "Dicas práticas para economizar e preservar",
            flashcards: [
                { title: "De Onde Vem?", subtitle: "Origem da Água", text: "A água potável que chega à sua casa é um recurso tratado em estações complexas como a ETA Guandu e outras, operadas pela CEDAE e concessionárias." },
                { title: "Evite a Evaporação", subtitle: "Uso Inteligente", text: "A melhor hora para regar plantas ou lavar o carro é à noite ou no início da manhã. Evitar o sol forte reduz a evaporação e o desperdício." },
                { title: "Economia no Banho", subtitle: "Hábito Consciente", text: "Fechar o chuveiro enquanto se ensaboa é uma das ações que mais economiza. Isso pode poupar até 150 litros de água em um único banho." },
                { title: "Reuso da Água", subtitle: "Sustentabilidade", text: "Reuso significa aproveitar águas alternativas (como da chuva ou da máquina de lavar) para tarefas que não exigem água potável, como lavar pisos ou regar plantas." },
                { title: "Torneira Fechada", subtitle: "Evite o Desperdício", text: "Fechar a torneira enquanto escova os dentes é um gesto simples que impede um grande desperdício. Cada minuto de torneira aberta gasta cerca de 12 litros." },
                { title: "Para Onde Vai?", subtitle: "Saneamento", text: "A água usada (esgoto) segue por redes de coleta, é tratada em Estações de Tratamento de Esgoto (ETEs) e só então é devolvida limpa à natureza." },
                { title: "Óleo Não é Esgoto!", subtitle: "Descarte Correto", text: "Nunca jogue óleo de cozinha na pia. Ele entope as tubulações da sua casa e da rede pública, além de contaminar milhares de litros de água nos rios." },
                { title: "O Papel da CEDAE", subtitle: "Produção", text: "Hoje, o papel principal da CEDAE é a produção e o tratamento da água em larga escala, garantindo a segurança hídrica e fornecendo água potável para as concessionárias." },
                { title: "Proteja os Mananciais", subtitle: "Meio Ambiente", text: "Plantar árvores nas margens dos rios (mata ciliar) e evitar o desmatamento são as melhores formas de proteger as nascentes e mananciais que fornecem nossa água." },
                { title: "Cuidado com Vazamentos", subtitle: "Gota a Gota", text: "Cada gota conta! Um pequeno vazamento, como uma torneira pingando, pode desperdiçar até 46 litros por dia. Conserte rapidamente!" }
            ],
            quiz: [
                { question: "De onde vem a água que chega até a sua casa?", options: ["Do poço da vizinhança", "Do Sistema Guandu e outras estações de tratamento", "Diretamente do mar", "Do encanamento da prefeitura"], answer: 1, feedback: "A água potável é tratada em estações como a ETA Guandu, operadas pela CEDAE e concessionárias, e chega às residências através de adutoras e redes de distribuição." },
                { question: "Qual é a melhor hora para lavar o carro ou regar plantas sem desperdiçar água?", options: ["No sol forte do meio-dia", "À noite ou no início da manhã", "Em qualquer horário", "Quando a torneira estiver com pressão máxima"], answer: 1, feedback: "Evitar o calor forte reduz a evapaoração da água e o desperdício." },
                { question: "Qual dessas ações economiza mais água no banho?", options: ["Deixar o chuveiro ligado enquanto se ensaboa", "Tomar banhos longos e relaxantes", "Fechar o chuveiro enquanto se ensaboa", "Usar o chuveiro elétrico no máximo"], answer: 2, feedback: "Fechar o chuveiro pode economizar até 150 litros de água em um único banho." },
                { question: "O que significa 'reuso da água'?", options: ["Usar água mineral mais de uma vez", "Aproveitar a água de chuva ou da máquina de lavar para outras tarefas", "Beber a mesma água várias vezes", "Misturar água limpa e suja"], answer: 1, feedback: "Reutilizar água de fontes alternativas ajuda a reduzir o consumo potável, por exemplo, para lavar pisos ou regar plantas." },
                { question: "Qual dessas atitudes ajuda a evitar o desperdício?", options: ["Deixar a torneira pingando", "Lavar calçada com mangueira", "Fechar a torneira enquanto escova os dentes", "Tomar banho de 15 minutos"], answer: 2, feedback: "Cada minuto de torneira aberta gasta cerca de 12 litros de água." },
                { question: "O que acontece com a água que vai pelo ralo da pia ou do chuveiro?", options: ["Some naturalmente", "É tratada e devolvida limpa ao meio ambiente", "Vai direto para o mar", "Fica parada nos canos"], answer: 1, feedback: "A água usada segue para as redes de esgoto, é tratada e só depois devolvida à natureza — um processo essencial para o saneamento." },
                { question: "Qual produto NÃO deve ser jogado na pia ou vaso sanitário?", options: ["Água com sabão", "Restos de comida", "Óleo de cozinha", "Nenhum dos anteriores"], answer: 2, feedback: "O óleo entope tubulações e contamina rios. O correto é armazenar e encaminhar para pontos de coleta." },
                { question: "Qual é o papel da CEDAE nesse processo?", options: ["Cuidar apenas das represas", "Produzir, tratar e fornecer água potável", "Vender água engarrafada", "Fazer propaganda do governo"], answer: 1, feedback: "A CEDAE é responsável pela produção e tratamento da água no Estado do Rio, garantindo qualidade e segurança hídrica." },
                { question: "Qual atitude ajuda a preservar os mananciais (rios e nascentes)?", options: ["Jogar lixo nas margens", "Plantar árvores e evitar desmatamento", "Lavar o carro dentro do rio", "Descartar produtos químicos na terra"], answer: 1, feedback: "A vegetação protege o solo e evita a contaminação das fontes de água." },
                { question: "O que fazer quando perceber um vazamento?", options: ["Deixar para depois", "Consertar o mais rápido possível", "Colocar um balde embaixo", "Ignorar"], answer: 0, feedback: "Cada gota conta! Um pequeno vazamento pode desperdiçar até 46 litros por dia. Observe, conserte e economize!" }
            ]
        }
    };


    let state = {
        currentPhaseIndex: 0,
        currentView: 'welcome',
        currentItem: 0,
        score: 0,
        answered: false,
        phaseKeys: ['phase1', 'phase2', 'phase3'],
        phaseNames: ['1.Gotas de História 💧', '2. O Saber Está no Cano 🚰', '3. Você Sabe Cuidar? 💚']
    };

    const appElement = document.getElementById('app');

    appElement.addEventListener('click', (e) => {
        const target = e.target;

        if (target.id === 'start-btn') {
            startPhase(0);
        }
        if (target.id === 'exit-btn' || target.closest('.logo')) {
            e.preventDefault();
            resetGame();
        }
        if (target.id === 'restart-btn') {
            resetGame();
        }
        if (target.id === 'next-card-btn') {
            nextFlashcard();
        }
        if (target.id === 'prev-card-btn') {
            prevFlashcard();
        }
        if (target.classList.contains('option') && !state.answered) {
            checkAnswer(parseInt(target.dataset.index));
        }
        if (target.id === 'next-question-btn') {
            nextQuestionOrPhase();
        }
    });


    function resetGame() {
        state.currentPhaseIndex = 0;
        state.currentView = 'welcome';
        state.currentItem = 0;
        state.score = 0;
        render();
    }

    function startPhase(phaseIndex) {
        state.currentPhaseIndex = phaseIndex;
        state.currentItem = 0;
        const phaseKey = state.phaseKeys[phaseIndex];
        
        // Se a fase tem flashcards, mostra. Se não, vai pro quiz.
        if (gameData[phaseKey].flashcards.length > 0) {
            state.currentView = 'flashcards';
        } else {
            state.currentView = 'quiz';
        }
        render();
    }

    function nextFlashcard() {
        const phaseKey = state.phaseKeys[state.currentPhaseIndex];
        const phase = gameData[phaseKey];
        
        if (state.currentItem < phase.flashcards.length - 1) {
            state.currentItem++;
            render();
        } else {
            state.currentView = 'quiz';
            state.currentItem = 0;
            render();
        }
    }

    function prevFlashcard() {
        if (state.currentItem > 0) {
            state.currentItem--;
            render();
        }
    }

    function checkAnswer(selectedIndex) {
        state.answered = true;
        const phaseKey = state.phaseKeys[state.currentPhaseIndex];
        const question = gameData[phaseKey].quiz[state.currentItem];
        
        const isCorrect = (selectedIndex === question.answer);
        if (isCorrect) {
            state.score++;
        }
        
        const options = document.querySelectorAll('.option');
        options[selectedIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
        if (!isCorrect) {
            options[question.answer].classList.add('correct');
        }

        if (question.feedback) {
            const feedbackEl = document.getElementById('feedback-text');
            feedbackEl.innerText = question.feedback;
            feedbackEl.classList.add('feedback-visible');
        }

        document.getElementById('next-question-btn').style.display = 'inline-block';
    }

    function nextQuestionOrPhase() {
        state.answered = false;

        const feedbackEl = document.getElementById('feedback-text');
        if (feedbackEl) {
            feedbackEl.classList.remove('feedback-visible');
        }

        const phaseKey = state.phaseKeys[state.currentPhaseIndex];
        const phase = gameData[phaseKey];
        const isLastQuestion = (state.currentItem === phase.quiz.length - 1);
        const isLastPhase = (state.currentPhaseIndex === state.phaseKeys.length - 1);

        if (!isLastQuestion) {
            state.currentItem++;
            render();
        } else {
            if (!isLastPhase) {
                startPhase(state.currentPhaseIndex + 1);
            } else {
                state.currentView = 'results';
                render();
            }
        }
    }

    function render() {
        const view = state.currentView;

        if (view === 'welcome') {
            renderWelcome();
        } else if (view === 'results') {
            renderResults();
        } else if (view === 'flashcards' || view === 'quiz') {
            renderGameLayout();
        }
    }

    function getHeaderHtml() {
        const view = state.currentView;
        let navContent = '';

        if (view === 'welcome' || view === 'results') {
            navContent = `<span>Bem-vindo!</span>`;
        } else {
            navContent = `
                <span>Fase ${state.currentPhaseIndex + 1} de ${state.phaseKeys.length}</span>
                <button class="btn-exit" id="exit-btn">Sair</button>
            `;
        }

        return `
            <header class="app-header">
                <a href="#" class="logo" id="logo-btn">
                    <span class="material-symbols-outlined">water_drop</span>
                    ClickÁgua
                </a>
                <nav class="header-nav">
                    ${navContent}
                </nav>
            </header>
        `;
    }

    function getSidebarHtml() {
        const phaseKey = state.phaseKeys[state.currentPhaseIndex];
        const phase = gameData[phaseKey];
        let progressLabel = '';
        let currentProgress = 0;
        let totalItems = 0;

        if (state.currentView === 'flashcards') {
            progressLabel = 'Progresso dos Flashcards';
            totalItems = phase.flashcards.length;
            currentProgress = state.currentItem + 1;
        } else {
            progressLabel = 'Progresso do Quiz';
            totalItems = phase.quiz.length;
            currentProgress = state.currentItem + 1;
        }
        const progressPercent = (currentProgress / totalItems) * 100;

        const phasesListHtml = state.phaseNames.map((name, index) => {
            if (index < state.currentPhaseIndex) {
                return `<li class="completed">${name}</li>`;
            } else if (index === state.currentPhaseIndex) {
                return `<li class="active">${name}</li>`;
            } else {
                return `<li>${name}</li>`;
            }
        }).join('');

        const phaseClass = `phase-${state.currentPhaseIndex + 1}`;

        return `
            <aside class="sidebar-card">
                <div class="sidebar-section progress-section">
                    <h3>Progresso</h3>
                    <div class="progress-group">
                        <label>${progressLabel} (${currentProgress}/${totalItems})</label>
                        <div class="progress-bar-container ${phaseClass}">
                            <div class="progress-bar-inner" style="width: ${progressPercent}%;"></div>
                        </div>
                    </div>
                </div>

                <div class="sidebar-section phases-section">
                    <h3>Fases</h3>
                    <ul class="phase-list">
                        ${phasesListHtml}
                    </ul>
                </div>
            </aside>
        `;
    }

    function renderWelcome() {
        const headerHtml = getHeaderHtml();
        appElement.innerHTML = `
            ${headerHtml}
            <div class="welcome-layout">
                <div class="welcome-card">
                    <h2>Bem-Vindo ao QlikÁgua</h2>
                    <p>Explore a história da Companhia de Águas e Esgostos do Estado do Rio de Janeiro e teste seus conhecimentos sobre água</p>
                    
                    <div class="learn-box">
                        <h3>O que você vai aprender:</h3>
                        <ul>
                            <li>A história da CEDAE desde sua fundação</li>
                            <li>Os principais sistemas de tratamento de água do Rio de Janeiro</li>
                            <li>Dicas práticas para economizar água no dia a dia</li>
                            <li>Como preservar os mananciais e cuidar do meio ambiente</li>
                        </ul>
                    </div>
                    
                    <button class="btn-primary green" id="start-btn">Iniciar</button>
                </div>
            </div>
        `;
    }
    
    function renderGameLayout() {
        const headerHtml = getHeaderHtml();
        const sidebarHtml = getSidebarHtml();
        let mainContentHtml = '';

        const phaseKey = state.phaseKeys[state.currentPhaseIndex];
        const phase = gameData[phaseKey];

        const titleCardHtml = `
            <div class="content-title-card">
                <h2>${phase.title}</h2>
                <p>${phase.description}</p>
            </div>
        `;

        if (state.currentView === 'flashcards') {
            const card = phase.flashcards[state.currentItem];
            const progressPercent = ((state.currentItem + 1) / phase.flashcards.length) * 100;
            mainContentHtml = `
                ${titleCardHtml}
                <div class="main-content-card"> 
                    <div class="flashcard-header">
                        <h3 class="flashcard-title">${card.title}</h3>
                        <p class="flashcard-subtitle">${card.subtitle}</p>
                    </div>
                    <div class="flashcard-body">
                        <p>${card.text}</p>
                    </div>
                    <div class="card-progress-footer">
                        <div class="progress-bar-container">
                            <div class="progress-bar-inner" style="width: ${progressPercent}%;"></div>
                        </div>
                        <span class="progress-text">Flashcard ${state.currentItem + 1} de ${phase.flashcards.length}</span>
                        <div class="card-navigation">
                            <button class="btn-secondary" id="prev-card-btn" ${state.currentItem === 0 ? 'disabled' : ''}>Anterior</button>
                            <button class="btn-primary" id="next-card-btn">
                                ${state.currentItem === phase.flashcards.length - 1 ? 'Iniciar Quiz!' : 'Próximo'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } 
        else if (state.currentView === 'quiz') {
            const question = phase.quiz[state.currentItem];
            const optionsHtml = question.options.map((option, index) => {
                return `<div class="option" data-index="${index}">${option}</div>`;
            }).join('');
            
            const isLastQuestion = (state.currentItem === phase.quiz.length - 1);
            const isLastPhase = (state.currentPhaseIndex === state.phaseKeys.length - 1);
            let nextBtnText = 'Próxima Pergunta';
            if(isLastQuestion && !isLastPhase) nextBtnText = 'Próxima Fase';
            if(isLastQuestion && isLastPhase) nextBtnText = 'Ver Resultado Final';

            mainContentHtml = `
                ${titleCardHtml}
                <div class="main-content-card quiz-view">
                    <div class="quiz-container">
                        <p>${phase.title} - Pergunta ${state.currentItem + 1} de ${phase.quiz.length}</p>
                        <div class="question">${question.question}</div>
                        <div class="options" id="options-list">
                            ${optionsHtml}
                        </div>
                        <div class="quiz-feedback" id="feedback-text"></div>
                        <div class="quiz-nav">
                            <button class="btn-primary green" id="next-question-btn" style="display: none;">
                                ${nextBtnText}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        appElement.innerHTML = `
            ${headerHtml}
            <main class="app-container">
                <div class="game-layout">
                    <div class="game-main-col">
                        ${mainContentHtml}
                    </div>
                    <aside class="game-sidebar-col">
                        ${sidebarHtml}
                    </aside>
                </div>
            </main>
        `;
    }

    function renderResults() {
        const headerHtml = getHeaderHtml();
        let level = '';
        let message = '';
        let iconHtml = '';
        const totalQuestions = gameData.phase1.quiz.length + gameData.phase2.quiz.length + gameData.phase3.quiz.length;
        const score = state.score;

        sendScoreToFirebase(score, totalQuestions);

        if (score <= 10) {
            level = 'Aprendiz da Água';
            message = 'Você está começando sua jornada! Que tal rever seus hábitos e aprender mais com o ClickÁgua?';
            iconHtml = '<span class="material-symbols-outlined result-icon aprendiz">water_drop</span>';
        } else if (score <= 25) {
            level = 'Protetor dos Rios';
            message = 'Muito bem! Suas atitudes já ajudam a cuidar desse recurso tão valioso. Continue assim!';
            iconHtml = '<span class="material-symbols-outlined result-icon protetor">waves</span>';
        } else {
            level = 'Guardião da Água';
            message = 'Parabéns! Você é exemplo de consciência e sustentabilidade. Continue inspirando outras pessoas!';
            iconHtml = '<span class="material-symbols-outlined result-icon guardiao">tsunami</span>';
        }

        appElement.innerHTML = `
            ${headerHtml}
            <div class="results-layout">
                <div class="results-card">
                    <h2>Jogo Concluído!</h2>
                    ${iconHtml}
                    <h3 class="feedback-title">${level}</h3>
                    <p class="score">Sua pontuação final: <strong>${score}</strong> de ${totalQuestions} acertos.</p>
                    <p class="feedback-message">${message}</p>
                    <button class="btn-primary" id="restart-btn">Jogar Novamente</button>
                </div>
            </div>
        `;
    }

    function sendScoreToFirebase(score, total) {
        if (typeof firebase === 'undefined' || typeof db === 'undefined') {
            console.log("Firebase não está disponível. Pontuação não foi salva.");
            return;
        }

        const now = new Date();
        const id_teste = `clickagua-${now.getTime()}`;

        const data = {
            id_teste: id_teste,
            data: now.toLocaleDateString('pt-BR'),
            hora: now.toLocaleTimeString('pt-BR'),
            pontuacao: score,
            total_perguntas: total,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        };

        db.collection('resultados_quiz').doc(id_teste).set(data)
            .then(() => {
                console.log('Dados do quiz salvos no Firebase com sucesso!');
            })
            .catch((error) => {
                console.error('Erro ao salvar dados no Firebase:', error);
            });
    }

    render();
});

