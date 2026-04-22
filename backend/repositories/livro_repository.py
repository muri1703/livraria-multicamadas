livros = [
    {
        "id": 1,
        "titulo": "Harry Potter",
        "autor": "J.K Rowling",
        "preco": 50,
        "genero": "Fantasia",
        "imagem": "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg"
    },
    {
        "id": 2,
        "titulo": "Dom Casmurro",
        "autor": "Machado de Assis",
        "preco": 30,
        "genero": "Clássico",
        "imagem": "https://images.tcdn.com.br/img/img_prod/1271663/dom_casmurro_edicao_de_luxo_almofadada_89_1_038fb70c564eb50f71ea49f6027e827a.jpg"
    },
    {
        "id": 3,
        "titulo": "O Hobbit",
        "autor": "Tolkien",
        "preco": 45,
        "genero": "Fantasia",
        "imagem": "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
    }
]

def get_all():
    return livros

def get_by_id(id):
    return next((l for l in livros if l["id"] == id), None)