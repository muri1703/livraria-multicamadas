class LivroRepository:
    def __init__(self):
        self.livros = [
            {
                "id": 1,
                "titulo": "Harry Potter e a Pedra Filosofal",
                "autor": "J.K. Rowling",
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
                "autor": "J.R.R. Tolkien",
                "preco": 45,
                "genero": "Fantasia",
                "imagem": "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
            },

            {
                "id": 4,
                "titulo": "Berserk",
                "autor": "Kentaro Miura",
                "preco": 60,
                "genero": "Mangá",
                "imagem": "https://m.media-amazon.com/images/I/71Rizr1DczL._AC_UF1000,1000_QL80_.jpg"
            },
            {
                "id": 5,
                "titulo": "Jujutsu Kaisen",
                "autor": "Gege Akutami",
                "preco": 40,
                "genero": "Mangá",
                "imagem": "https://m.media-amazon.com/images/I/71RJPPBHNGL._AC_UF1000,1000_QL80_.jpg"
            },
            {
                "id": 6,
                "titulo": "Chainsaw Man",
                "autor": "Tatsuki Fujimoto",
                "preco": 42,
                "genero": "Mangá",
                "imagem": "https://wafuu.com/cdn/shop/files/chainsaw-man-vol122-complete-set-japanese-ver-1809804_540x.jpg?v=1762581660"
            },

            {
                "id": 7,
                "titulo": "1984",
                "autor": "George Orwell",
                "preco": 35,
                "genero": "Distopia",
                "imagem": "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
            },
            {
                "id": 8,
                "titulo": "Orgulho e Preconceito",
                "autor": "Jane Austen",
                "preco": 32,
                "genero": "Romance",
                "imagem": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSkHxZ3h4Fa2lgQNdueDzR457pqVc3fyLraLMw4cuhF_oKzN1SdhCk8JUUt55bG4S1vlmlSbzXW5R9WNdew8Y_yLJ2e2jZuXMzO4ad-ZzED&usqp=CAc"
            },
            {
                "id": 9,
                "titulo": "O Grande Gatsby",
                "autor": "F. Scott Fitzgerald",
                "preco": 38,
                "genero": "Clássico",
                "imagem": "https://m.media-amazon.com/images/I/81af+MCATTL.jpg"
            },

            {
                "id": 10,
                "titulo": "Memórias Póstumas de Brás Cubas",
                "autor": "Machado de Assis",
                "preco": 28,
                "genero": "Clássico",
                "imagem": "https://m.media-amazon.com/images/I/71OL9RU2tJL._AC_UF1000,1000_QL80_.jpg"
            },
            {
                "id": 11,
                "titulo": "Capitães da Areia",
                "autor": "Jorge Amado",
                "preco": 34,
                "genero": "Romance",
                "imagem": "https://m.media-amazon.com/images/I/518UWo1qbVL._AC_UF1000,1000_QL80_.jpg"
            },

            {
                "id": 12,
                "titulo": "Duna",
                "autor": "Frank Herbert",
                "preco": 55,
                "genero": "Ficção Científica",
                "imagem": "https://m.media-amazon.com/images/I/81zN7udGRUL.jpg"
            },
            {
                "id": 13,
                "titulo": "Neuromancer",
                "autor": "William Gibson",
                "preco": 47,
                "genero": "Cyberpunk",
                "imagem": "https://m.media-amazon.com/images/I/91Bx5ilP+EL.jpg"
            },
            {
                "id": 14,
                "titulo": "O Senhor dos Anéis",
                "autor": "J.R.R. Tolkien",
                "preco": 80,
                "genero": "Fantasia",
                "imagem": "https://m.media-amazon.com/images/I/71ZLavBjpRL._AC_UF1000,1000_QL80_.jpg"
            }
        ]

    def listar(self, query=None, preco_min=None):
        resultado = self.livros

        # 🔍 FILTRO POR TEXTO
        if query:
            query = query.lower()
            resultado = [
                l for l in resultado
                if query in l["titulo"].lower()
                or query in l["autor"].lower()
                or query in l["genero"].lower()
            ]

        # 💰 FILTRO POR PREÇO
        if preco_min:
            try:
                preco_min = float(preco_min)
                resultado = [l for l in resultado if l["preco"] >= preco_min]
            except:
                pass

        return resultado

    def buscar_por_id(self, id):
        for livro in self.livros:
            if livro["id"] == id:
                return livro
        return None