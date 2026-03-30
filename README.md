# Livraria---Eng-de-software

## Descrição

Este projeto implementa um sistema de filtro de livros utilizando a abordagem de Test-Driven Development (TDD).

O objetivo é permitir que usuários filtrem livros com base em critérios específicos antes de se deslocarem até a livraria.

---

## Problema

Clientes de livrarias físicas frequentemente enfrentam o problema de se deslocar até uma loja sem saber se o livro desejado está disponível ou se vale a pena a compra.

Este sistema busca resolver esse problema permitindo a filtragem prévia de livros.

---

## Objetivo

Implementar um método que retorne uma lista de livros filtrada por critérios fornecidos pelo usuário.

---

## Funcionalidades

* Filtrar livros por gênero
* Filtrar livros por preço máximo
* Combinar múltiplos critérios
* Retornar lista de livros filtrados

---

## Processo TDD

O desenvolvimento foi realizado seguindo os princípios de Test-Driven Development:

1. Criação dos testes automatizados
2. Execução dos testes (falha inicial)
3. Implementação do código mínimo para passar nos testes
4. Refatoração do código

---

## Testes implementados

* Filtrar livros por gênero
* Filtrar livros por preço máximo
* Filtrar por múltiplos critérios
* Teste sem filtros
* Teste com lista vazia

---

## Exemplo de uso

```python
from livro import Livro
from livro_service import filtrar_livros

livros = [
    Livro("Livro A", "Autor 1", 50.0, "Fantasia"),
    Livro("Livro B", "Autor 2", 30.0, "Romance")
]

resultado = filtrar_livros(livros, genero="Fantasia")

for livro in resultado:
    print(livro.titulo)
```

---

## Como executar os testes

No terminal, execute:

```bash
python -m unittest test_livro_service.py
```

---

## Estrutura do projeto

```
livraria-tdd/
├── livro.py
├── livro_service.py
├── test_livro_service.py
└── README.md
```

---

## Autor

Murilo Rocha

---
