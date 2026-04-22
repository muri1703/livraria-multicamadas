from repositories.livro_repository import get_all, get_by_id

def listar_livros(query=None, preco_min=None):
    livros = get_all()

    # filtro por busca (titulo, autor, genero)
    if query:
        query = query.lower()
        livros = [
            l for l in livros
            if query in l["titulo"].lower()
            or query in l["autor"].lower()
            or query in l["genero"].lower()
        ]

    # 🔥 NOVA FEATURE: filtro por preço mínimo
    if preco_min:
        try:
            preco_min = float(preco_min)
            livros = [l for l in livros if l["preco"] >= preco_min]
        except:
            pass

    return livros


def buscar_por_id(id):
    return get_by_id(id)