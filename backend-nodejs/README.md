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

