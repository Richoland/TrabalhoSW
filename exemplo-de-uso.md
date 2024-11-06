## API de Séries

Esta API permite a interação com uma lista de séries, oferecendo endpoints para consultar, adicionar, atualizar e excluir séries.

# Endpoints

1. Obter todas as séries
   Método: GET
   URL: /series
   Recupere a lista completa de séries.

Exemplo de requisição no Postman:

Método: GET
URL: http://localhost:3002/series
Cabeçalhos:
Content-Type: application/json
Corpo: Não é necessário.
Exemplo de resposta:

```json
[
  {
    "codigo": 1,
    "nome": "Breaking Bad",
    "descricao": "Um professor de química que se torna um traficante de metanfetamina.",
    "episodio": 62,
    "temporada": 5
  },
  {
    "codigo": 2,
    "nome": "Stranger Things",
    "descricao": "Um grupo de crianças tenta desvendar mistérios em uma pequena cidade.",
    "episodio": 34,
    "temporada": 4
  }
]
```

2. Adicionar uma nova série
   Método: POST
   URL: /series
   Crie uma nova série.

Exemplo de requisição no Postman:

Método: POST
URL: http://localhost:3002/series
Cabeçalhos:
Content-Type: application/json
Corpo:

```json
{
  "nome": "Breaking Bad",
  "descricao": "Um professor de química que se torna um traficante de metanfetamina.",
  "episodio": 62,
  "temporada": 5
}
```

Exemplo de resposta:

```json
{
  "codigo": 1,
  "nome": "Breaking Bad",
  "descricao": "Um professor de química que se torna um traficante de metanfetamina.",
  "episodio": 62,
  "temporada": 5
}
```

3. Obter uma série pelo código
   Método: GET
   URL: /series/{codigo}
   Substitua {codigo} pelo código da série que deseja recuperar.
   Exemplo de requisição no Postman:

Método: GET
URL: http://localhost:3002/series/1 (substitua 1 pelo código da série)
Cabeçalhos:
Content-Type: application/json
Corpo: Não é necessário.
Exemplo de resposta:

```json
{
  "codigo": 1,
  "nome": "Breaking Bad",
  "descricao": "Um professor de química que se torna um traficante de metanfetamina.",
  "episodio": 62,
  "temporada": 5
}
```

4. Atualizar uma série
   Método: PUT
   URL: /series/{codigo}
   Substitua {codigo} pelo código da série que deseja atualizar.
   Exemplo de requisição no Postman:

Método: PUT
URL: http://localhost:3002/series/1 (substitua 1 pelo código da série)
Cabeçalhos:
Content-Type: application/json
Corpo:

```json
{
  "nome": "Breaking Bad",
  "descricao": "Um professor de química que se torna um traficante de metanfetamina.",
  "episodio": 62,
  "temporada": 5
}
```

Exemplo de resposta:

```json
{
  "codigo": 1,
  "nome": "Breaking Bad",
  "descricao": "Um professor de química que se torna um traficante de metanfetamina.",
  "episodio": 62,
  "temporada": 5
}
```

5. Excluir uma série
   Método: DELETE
   URL: /series/{codigo}
   Substitua {codigo} pelo código da série que deseja excluir.
   Exemplo de requisição no Postman:

Método: DELETE
URL: http://localhost:3002/series/1 (substitua 1 pelo código da série)
Cabeçalhos:
Content-Type: application/json
Corpo: Não é necessário.
Exemplo de resposta:

```json
{
  "message": "Série excluída com sucesso."
}
```
