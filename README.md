# 🍕 Pizza Shop

Projeto desenvolvido durante o curso da [Rocketseat](https://app.rocketseat.com.br/) utilizando **ReactJS**, com foco em conceitos modernos de desenvolvimento frontend como **componentização**, **estados**, **hooks**, testes automatizados e boas práticas com **JavaScript/TypeScript**.

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- ⚛️ ReactJS
- 📦 Vite
- 💅 Styled Components / TailwindCSS
- 🧠 Context API (ou Redux, se aplicável)
- 📁 React Router Dom
- ✅ TypeScript (se aplicável)
- 🧪 Vitest / Jest + Testing Library (testes unitários)
- 🧼 Cypress / Playwright (testes E2E)

## 📸 Preview

![preview do projeto](https://user-images.githubusercontent.com/placeholder-image.png)

## 📂 Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/juliocsilvestre/pizza-shop.git
cd .\pizzashop-web\
```

Instale as dependências:

```bash
npm install
# ou
yarn install
```

Abra http://localhost:3000 para ver no navegador.

🧪 Testes Unitários
Os testes unitários cobrem componentes e funções de negócio da aplicação.
Rodar os testes unitários:

```bash
npm run test
# ou
yarn test
```

Caso esteja utilizando o Vitest com watch:

```bash
npm run test:watch
```

🧼 Testes End-to-End (E2E)
Os testes E2E simulam o uso real da aplicação no navegador.
Rodar os testes com o Cypress:

```bash
npm run cypress:open
# ou
yarn cypress:open
```

Para executar em modo headless (CI, por exemplo):

```bash
npm run cypress:run
```

✨ Funcionalidades

- Visualização de cardápio de pizzas
- Adicionar e remover pizzas do carrinho
- Checkout de pedidos (simulado)
- Responsividade para dispositivos móveis

📚 Aprendizados

- Durante o desenvolvimento, foram colocados em prática os seguintes conceitos:
- Estruturação de componentes com React
- Utilização de estado local e global
- Trabalhar com rotas
- Estilização de componentes
- Organização de pastas e boas práticas com React

Escrita e manutenção de testes automatizados (unitários e E2E)

🧑‍💻 Autor
Feito por [Julio Silvestre](https://github.com/juliocsilvestre)

📝 Licença
Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## atualizar develop - main

# Vá para a branch develop

git checkout develop

# Atualize a branch local com os dados mais recentes do repositório remoto

git fetch origin

# Faça o merge da main na develop

git merge origin/main
