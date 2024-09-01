## API EXPRESS DA CHANPIONS LEAGUE

Este projeto é uma API desenvolvida utilizando Node.js, Express e TypeScript. A API gerencia informações sobre jogadores de futebol e clubes, oferecendo endpoints para criação, leitura, atualização e exclusão de registros.

### Funcionalidades

- **Gerenciamento de Jogadores**: CRUD completo (Create, Read, Update, Delete) para jogadores.
- **Gerenciamento de Clubes**: Leitura de informações sobre clubes.
- **CORS**: Configuração de CORS para permitir comunicação com o frontend.

### Estrutura do Projeto

- **src/controllers**: Contém os controladores responsáveis por lidar com as requisições HTTP.
- **src/models**: Define os modelos de dados utilizados na aplicação.
- **src/repositories**: Repositórios que acessam os dados armazenados localmente.
- **src/services**: Contém a lógica de negócios, organizando e manipulando os dados.
- **src/utils**: Funções auxiliares, como formatação de respostas HTTP.
- **src/routes.ts**: Define as rotas da aplicação.
- **src/app.ts**: Configuração principal do aplicativo Express.
- **src/server.ts**: Ponto de entrada da aplicação, inicializa o servidor.

### Endpoints

#### Jogadores

- `GET /api/v1/players`: Retorna todos os jogadores.
- `GET /api/v1/players/:id`: Retorna um jogador específico pelo ID.
- `POST /api/v1/players`: Cria um novo jogador.
- `PATCH /api/v1/players/:id`: Atualiza as informações de um jogador.
- `DELETE /api/v1/players/:id`: Remove um jogador.

#### Clubes

- `GET /api/v1/clubs`: Retorna todos os clubes.

### Modelos de Dados

- **PlayerModel**: Representa um jogador com atributos como nome, clube, nacionalidade, posição e estatísticas.
- **ClubModel**: Representa um clube com atributos como ID e nome.
- **StatisticsModel**: Representa as estatísticas de um jogador, como ritmo, chute, passe, drible, defesa e físico.
- **HttpResponse**: Modelo para padronizar as respostas HTTP.

### Configuração e Execução

1. **Clonar o projeto**:

```bash
git clone https://github.com/devmatheuscosta/dio-project-api-express-champions-league.git
```

2. **Instalação de Dependências**:

```bash
npm install
```

3. **Execução em Ambiente de Desenvolvimento**:

```bash
npm run start:dev
```

4. **Execução com Watcher**:

```bash
npm run start:watch
```

5. **Construção e Execução em Produção**:

```bash
npm run start:dist
```

### Configuração de Compilação TypeScript

O arquivo `tsconfig.json` está configurado para compilar o código TypeScript para o diretório `dist` usando o padrão ES6 e o módulo CommonJS.

### Dependências

- **Express**: Framework web para Node.js.
- **Cors**: Middleware para habilitar CORS.
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática ao código.
- **Tsup**: Ferramenta para empacotar o código TypeScript.
- **Tsx**: Ferramenta para rodar e compilar o código TypeScript.

### Arquivo .env

O projeto utiliza variáveis de ambiente configuradas no arquivo `.env`:

```env
PORT=3000
PATH_DATA=../data/clubs.json
```

### Autor

Matheus Costa

### Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
