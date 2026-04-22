from flask import Blueprint
from controllers.livro_controller import get_livros, get_livro

livro_bp = Blueprint("livro", __name__)

@livro_bp.route("/livros", methods=["GET"])
def livros():
    return get_livros()

@livro_bp.route("/livros/<int:id>", methods=["GET"])
def livro(id):
    return get_livro(id)