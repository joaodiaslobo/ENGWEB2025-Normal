# Teste de Engenharia Web 2025 (Época Normal) 

# Persistência de dados 📦

Para preparar o dataset utilizado, primeiro comecei por alterar todos os campos de `id` para `_id`, de forma a facilitar o processo de importação para a base de dados em MongoDB.
Todos os outros campos foram cuidadosamente mantidos, renomeados ou normalizados para garantir a consistência e a compatibilidade com o esquema.

# Instruções de execução das aplicações desenvolvidas 🏃‍♂️

## Rodar a base de dados

Para a base de dados, rodar o docker container através de:

```
$ docker compose up -d
```

## Rodar o backend ⚙️

Entrar na diretoria com a aplicação:
```
$ cd ex1
```

Instalar as dependências:
```
$ npm i
```

E iniciar a aplicação:
```
$ npm start
```

O serviço estará disponível na porta `25000` (`localhost:25000`).

## Rodar o frontend 🖼️

Entrar na diretoria com a aplicação:
```
$ cd ex2
```

Instalar as dependências:
```
$ npm i
```

E iniciar a aplicação:
```
$ npm start
```

O serviço estará disponível na porta `25001` (`localhost:25001`).