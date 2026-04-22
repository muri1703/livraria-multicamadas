from repositories.livro_repository import LivroRepository

repo = LivroRepository()

def listar_livros(query=None, preco_min=None):
    return repo.listar(query, preco_min)

def buscar_por_id(id):
    return repo.buscar_por_id(id)