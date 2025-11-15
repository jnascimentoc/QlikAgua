# 💧 ClickÁgua - O Jogo da CEDAE

`ClickÁgua` é um jogo educativo interativo (gamification) focado na conscientização sobre o uso da água e na história da da maior Estação de Tratamento de Água (ETA) do mundo em produção contínua

O projeto combina flashcards informativos e um quiz dinâmico para testar o conhecimento do usuário, tudo apresentado em um layout moderno, fluido e responsivo.

---

## 🚀 Funcionalidades

* **Aprendizagem em 3 Fases:** O jogo é dividido em três módulos temáticos:
  
    °  **Gotas de História:** Uma timeline interativa sobre a história da CEDAE e do saneamento do Rio de Janeiro.
  
    °  **O Saber Está no Cano:** Flashcards detalhando o processo de tratamento de água na ETA Guandu.
  
    °  **Você Sabe Cuidar?:** Dicas práticas e quiz sobre conservação e uso consciente da água.
  
* **Flashcards Interativos:** Um sistema de cartões de estudo com uma timeline visual para apresentar o conteúdo.
* **Quiz Dinâmico:** Perguntas de múltipla escolha com feedback instantâneo para reforçar o aprendizado.
* **Sistema de Pontuação:** O jogo calcula os acertos do usuário e exibe um resultado final com um "título" a depender da pontuação.
* **Integração com Firebase:** As pontuações finais são enviadas e armazenadas no Google Firestore.
* **Design Moderno e Fluido:**
    * Interface com efeito "glassmorphism" (vidro fosco).
    * Fundo animado com ondas suaves.
    * Ícones e fontes modernas (Google Fonts).
* **Totalmente Responsivo:** O layout se adapta a desktops, tablets e celulares.

---

## 💻 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **Frontend:**
    * HTML5 (Semântico)
    * CSS3 (Variáveis CSS, Flexbox, Grid, Animações `@keyframes`)
    * JavaScript (ES6+ Vanilla JS)
* **Backend & Database:**
    * **Firebase (v9 Compat):** Utilizado para autenticação e armazenamento das pontuações no Firestore.
* **Recursos:**
    * **Google Fonts:** (Poppins e Material Symbols)
    * **SVG (Embutido):** Usado para a animação das ondas no `body::after`.

---

## 📂 Estrutura do Projeto

O projeto é organizado de forma simples, com três arquivos principais:

* index.html

* style.css

* script.js
