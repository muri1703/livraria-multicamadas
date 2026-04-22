import { useState } from "react";
import { getLivros } from "../services/api";
import { BookCard } from "../components/BookCard";

type Livro = {
  id: number;
  titulo: string;
  autor: string;
  preco: number;
  genero: string;
  imagem: string;
};

export function Search() {
  const [query, setQuery] = useState("");
  const [livros, setLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(false);
  const [preco, setPreco] = useState("");

  const handleSearch = async () => {
    setLoading(true);

    try {
      const data = await getLivros(query, preco);
      setLivros(data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }

    setLoading(false);
  };

  return (
    <div className="space-y-10">

      {/* SEARCH BOX */}
      <div className="bg-zinc-900 p-8 rounded-3xl shadow-md border border-zinc-800">
        <h1 className="text-2xl font-bold mb-4 text-white">Buscar livros</h1>

        <div className="flex gap-4">
          <input
            placeholder="Preço mínimo"
            className="border p-4 rounded-xl"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="bg-orange-500 text-white px-6 rounded-xl hover:bg-orange-600 transition"
          >
            Buscar
          </button>
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-gray-400">Carregando...</p>
      )}

      {/* RESULTADOS */}
      {!loading && (
        <>
          {livros.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {livros.map((l) => (
                <BookCard key={l.id} book={l} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              Nenhum livro encontrado.
            </p>
          )}
        </>
      )}

    </div>
  );
}