from flask import Flask
from flask_cors import CORS
from routes.livro_routes import livro_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(livro_bp)

@app.route("/")
def home():
    return "API da Livraria funcionando"

if __name__ == "__main__":
    app.run(debug=True)