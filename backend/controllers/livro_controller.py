from flask import request, jsonify
from services.livro_service import listar_livros, buscar_por_id

def get_livros():
    query = request.args.get("q")
    preco_min = request.args.get("preco_min")

    livros = listar_livros(query, preco_min)
    return jsonify(livros)

def get_livro(id):
    livro = buscar_por_id(id)

    if livro:
        return jsonify(livro)
    return jsonify({"erro": "Livro não encontrado"}), 404