import { useSearchParams, Link } from "react-router";
import { BOOKS } from "../data/mockData";
import { Compass, Search as SearchIcon } from "lucide-react";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = BOOKS.filter((book) => {
    const term = query.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term) ||
      book.category.toLowerCase().includes(term)
    );
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get("q") as string;
    if (q.trim()) {
      setSearchParams({ q });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center">
        <Compass size={48} className="text-[#ff5722] mb-6" />
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Busque seu próximo livro
        </h1>
        <form onSubmit={handleSearch} className="w-full max-w-2xl relative flex items-center bg-gray-50 rounded-full border border-gray-200 p-1 focus-within:ring-2 focus-within:ring-[#ff5722]/50 transition-all">
          <div className="pl-5 pr-3 text-gray-400">
            <SearchIcon size={24} />
          </div>
          <input
            name="q"
            type="text"
            defaultValue={query}
            placeholder="Buscar título, autor ou gênero..."
            className="flex-1 bg-transparent border-none text-gray-900 placeholder:text-gray-400 focus:ring-0 outline-none text-lg py-4"
          />
          <button
            type="submit"
            className="bg-[#ff5722] text-white font-bold px-10 py-4 rounded-full hover:bg-[#e64a19] transition-colors shadow-sm"
          >
            Buscar
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {query && (
          <h2 className="text-xl font-medium text-gray-700">
            Resultados para <span className="font-bold text-gray-900">"{query}"</span>
          </h2>
        )}

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((book) => (
              <Link key={book.id} to={`/book/${book.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 relative">
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
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl font-medium text-gray-400 mb-4">Nenhum livro encontrado.</p>
            <p className="text-gray-500">Tente buscar por outro termo.</p>
          </div>
        )}
      </div>
    </div>
  );
}