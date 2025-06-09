# Backend - Gerenciador de Tarefas 📝

API RESTful desenvolvida em Node.js e Express para gerenciar um aplicativo de lista de tarefas (To-Do list). Esta API é o coração do sistema, permitindo operações de CRUD (Criar, Ler, Atualizar e Deletar) para as tarefas, que são armazenadas em um banco de dados MongoDB.

## ✨ Funcionalidades

* **Listar** todas as tarefas cadastradas.
* **Criar** uma nova tarefa.
* **Atualizar** uma tarefa existente (título, descrição, status de conclusão).
* **Deletar** uma tarefa específica.

## 🚀 Tecnologias Utilizadas

* [Node.js](https://nodejs.org/en/) - Ambiente de execução JavaScript no servidor.
* [Express.js](https://expressjs.com/pt-br/) - Framework minimalista para construção da API.
* [MongoDB](https://www.mongodb.com/pt-br) - Banco de dados NoSQL orientado a documentos.
* [Mongoose](https://mongoosejs.com/) - Biblioteca para modelagem de objetos do MongoDB, facilitando a interação com o banco de dados.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Para gerenciar variáveis de ambiente de forma segura.
* [CORS](https://www.npmjs.com/package/cors) - Middleware para permitir requisições de diferentes origens (essencial para a comunicação com o frontend).
* [Nodemon](https://www.npmjs.com/package/nodemon) - Ferramenta que reinicia o servidor automaticamente durante o desenvolvimento a cada alteração de arquivo.

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
* [npm](https://www.npmjs.com/) (geralmente já vem instalado com o Node.js)
* Uma conta gratuita no [MongoDB Atlas](https://www.mongodb.com/atlas/database) para o banco de dados na nuvem.

## ⚙️ Instalação e Execução

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/tarefas-backend.git](https://github.com/seu-usuario/tarefas-backend.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd tarefas-backend
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    -   Crie um arquivo chamado `.env` na pasta raiz do projeto (`tarefas-backend/.env`).
    -   Copie o conteúdo abaixo e cole no seu arquivo `.env`:
    ```env
    # Porta em que o servidor irá rodar
    PORT=3001
    
    # Sua string de conexão do MongoDB Atlas
    # Substitua <user>, <password> e o nome do cluster pelos seus dados
    MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/taskdb?retryWrites=true&w=majority
    ```
    -   **Importante:** Substitua a `MONGO_URI` pela sua própria string de conexão obtida no MongoDB Atlas. Certifique-se de inserir seu usuário e senha corretamente e de que seu IP está liberado para acesso no painel do Atlas.

5.  **Inicie o servidor em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```
Após esses passos, o servidor estará em execução em `http://localhost:3001` e pronto para receber requisições da sua aplicação frontend ou de ferramentas como o Postman.

## Endpoints da API ↔️

A API expõe os seguintes endpoints para manipulação das tarefas:

| Método HTTP | Endpoint         | Descrição                       | Corpo da Requisição (Exemplo)                             | Resposta de Sucesso (Exemplo)        |
| :---------- | :--------------- | :------------------------------ | :-------------------------------------------------------- | :----------------------------------- |
| `GET`       | `/api/tasks`     | Lista todas as tarefas.         | *N/A* | `200 OK` com um array de tarefas.    |
| `POST`      | `/api/tasks`     | Cria uma nova tarefa.           | `{"title": "Comprar pão", "description": "Na padaria."}`   | `201 Created` com a tarefa criada.   |
| `PUT`       | `/api/tasks/:id` | Atualiza uma tarefa existente.  | `{"completed": true}`                                     | `200 OK` com a tarefa atualizada.    |
| `DELETE`    | `/api/tasks/:id` | Deleta uma tarefa específica.   | *N/A* | `200 OK` com uma mensagem de sucesso. |
