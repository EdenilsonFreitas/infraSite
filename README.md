# 🛡️ INFRAKNIGHT — Infraestrutura de Redes e TI Corporativa

Site institucional e landing page de captação de leads desenvolvida para a **INFRAKNIGHT**, empresa especializada em engenharia de redes de computadores, cabeamento estruturado, Wi-Fi corporativo, cibersegurança e monitoramento proativo.

🔗 **Acesse o projeto online:** [www.infraknight.com.br](https://www.infraknight.com.br/)

---

## 📋 Sobre o Projeto

O objetivo da aplicação é apresentar o catálogo de soluções técnicas da INFRAKNIGHT de forma moderna, rápida e responsiva, facilitando o contato direto de empresas que enfrentam lentidão, quedas de conexão ou vulnerabilidades em suas redes através de um formulário de **Diagnóstico Rápido**.

---

## ✨ Funcionalidades

- **Design Responsivo (Mobile-First):** Adaptação fluida para dispositivos móveis, tablets e desktops, incluindo menu hambúrguer dedicado.
- **Modo Escuro / Claro (Dark Mode):** Alternância de tema com salvamento automático da preferência do usuário via `localStorage`, detecção de preferência do sistema operacional e prevenção de *FOUC* (piscada de tela ao carregar).
- **Carrossel Interativo de Serviços:** Exibição dos 6 pilares de atuação da empresa utilizando **Swiper.js**, com suporte a navegação por toque, setas e autoplay inteligente.
- **Formulário de Diagnóstico Assíncrono:** Envio de solicitações sem recarregar a página (`Fetch API` + `FormData`) integrado ao **Web3Forms**, com feedback visual de carregamento (*spinner*) e notificações dinâmicas de sucesso/erro.
- **SEO Técnico Completo:** Implementação de meta tags Open Graph (WhatsApp/LinkedIn), Twitter Cards, dados estruturados **Schema.org (`ProfessionalService`)**, `robots.txt` e `sitemap.xml` com indexação de imagens.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**
- **CSS3 & Tailwind CSS** (estilização utilitária, gradientes, animações e responsividade)
- **JavaScript (ES6+)** (manipulação do DOM, `async/await`, `localStorage`)
- **[Swiper.js (v11)](https://swiperjs.com/)** (carrossel responsivo)
- **[Web3Forms](https://web3forms.com/)** (API serverless para disparo de e-mails do formulário)

---

## 📁 Estrutura de Pastas

```text
infraknight/
├── image/
│   └── cavalo.png       # Identidade visual / Logotipo
├── index.html           # Estrutura principal e meta tags de SEO
├── style.css            # Estilos customizados e ajustes do Swiper
├── script.js            # Lógica de tema, menu mobile, carrossel e formulário
├── robots.txt           # Diretrizes de rastreamento para buscadores
├── sitemap.xml          # Mapa do site para o Google Search Console
└── README.md            # Documentação do projeto
```

---

## 🚀 Como Executar Localmente

1. Clone este repositório ou baixe os arquivos:
   ```bash
   git clone [https://github.com/seu-usuario/infraknight.git](https://github.com/seu-usuario/infraknight.git)
   ```
2. Abra a pasta do projeto no **VS Code**.
3. Utilize a extensão **Live Server** (clique com o botão direito no `index.html` > *Open with Live Server*) ou abra o arquivo `index.html` diretamente no navegador.

---

## 📄 Licença

Este projeto foi desenvolvido para uso institucional da **INFRAKNIGHT**. Todos os direitos reservados.
