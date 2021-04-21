# Projeto backend

## Configurações e dependencias adicionadas na criação do projeto:

* Instalando o nodeJS
```bash
yarn init -y
```

* Instalando o expressJS
```bash
yarn add express
```

* Instalando os tipos(typescript) do expressJS
```bash
yarn add @types/express -D
```

* Instalando o typescript
```bash
yarn add typescript -D
```

* Instalando o arquivo de confirguração typescript
```bash
yarn tsc --init
```
* Em tsconfig.json definir o strict como false

* Instalar lib para ajudar o node a entender o import e from para não usar precisar usar const require()
```bash
yarn add ts-node-dev -D
```

* No package.json adicionar em baixo de license o script de startar servidor:
```json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
},
```

* Criar uma pasta src com arquivo server.ts

* Instalando o TypeORM:
```bash
yarn add typeorm reflect-metadata sqlite3
```

* Dentro de src criar o diretório database/index.ts, no index:
```ts
import { createConnection } from 'typeorm';
createConnection();
```

* Em server.ts chamar o database:
```ts
import express from 'express';
import './database';
const app = express();

app.listen(3333, () => console.log('Serve is runing 3333'));
```

* Dentro de database criar o diretório migrations

* Em package.json no objeto scripts recém criado, criar tb o atributo typeorm com a configuração para criar a migrations nesse diretório:
```json
"scripts": {
    "dev": "ts-node-dev src/server.ts",
    "typeorm": "ts-node-dev node_modules/typeorm/cli.js"
},
```

* Criar um arquivo ormconfig.json na raiz e colocar a configuração, onde ficará a configuração do bd configurações das migrations e entidades:
```json
{
    "type": "sqlite",
    "database": "./src/database/nlw5.sqlite",
    "migrations": ["./src/database/migrations/**.ts"],
    "entities": ["./src/entities/**.ts"],
    "cli": {
        "migrationsDir": "./src/databse/migrations"
    }
}
```

* Dentro de tsconfig.json:
descomentar as linhas:
```json
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
```

* Adicionar a biblioteca uuid e os tipos:
```bash
yarn add uuid
yarn add @types/uuid -D
```

## Criando Migrations

```bash
yarn typeorm migration:create -n nomeMigration
```

## Rodando migration

```bash
yarn typeorm migration:run
```

## Caso necessário reverter a última migration

```bash
yarn typeorm migration:revert
```