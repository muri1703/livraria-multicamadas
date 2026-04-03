import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, Compass } from "lucide-react";
import { BOOKS } from "../data/mockData";
import { Link } from "react-router";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Hero Section */}
      <section className="bg-[#ff4d00] rounded-[2rem] p-10 md:p-16 text-white shadow-lg overflow-hidden relative">
        <div className="relative z-10 max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            A sua próxima aventura<br />espera por você.
          </h1>
          <p className="text-lg md:text-xl font-medium text-orange-50 max-w-xl">
            Encontre o livro ideal, verifique a disponibilidade nas nossas lojas físicas e reserve online para retirar hoje mesmo.
          </p>
          
          <form onSubmit={handleSearch} className="mt-8 relative max-w-lg flex items-center bg-white/20 backdrop-blur-md rounded-full border border-white/30 p-1">
            <div className="pl-4 pr-3 text-white">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Buscar título, autor ou gênero..."
              className="flex-1 bg-transparent border-none text-white placeholder:text-white/80 focus:ring-0 outline-none text-lg py-3"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-white text-[#ff4d00] font-bold px-8 py-3 rounded-full hover:bg-orange-50 transition-colors shadow-sm"
            >
              Buscar
            </button>
          </form>
        </div>
      </section>

      {/* Destaques da Semana */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-[#ff4d00]">
          <Compass size={24} className="fill-current" />
          <h2 className="text-2xl font-bold text-gray-900">Destaques da Semana</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOOKS.map((book) => (
            <Link key={book.id} to={`/book/${book.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm tracking-wide">
                    {book.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 line-clamp-1 mb-1">{book.title}</h3>
                <p className="text-gray-500 text-sm">{book.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}