import { useParams, Link } from "react-router";
import { ArrowLeft, Store, MapPin, CheckCircle, XCircle, ShoppingBag } from "lucide-react";
import { BOOKS } from "../data/mockData";
import { useState } from "react";

export function BookDetails() {
  const { id } = useParams();
  const book = BOOKS.find(b => b.id === id);
  const [reserved, setReserved] = useState<string | null>(null);

  if (!book) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Livro não encontrado</h2>
        <Link to="/" className="text-[#ff5722] hover:underline flex items-center justify-center gap-2">
          <ArrowLeft size={20} /> Voltar para Home
        </Link>
      </div>
    );
  }

  const handleReserve = (storeId: string) => {
    setReserved(storeId);
    alert('Livro reservado com sucesso para retirada hoje!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#ff5722] mb-8 font-medium transition-colors">
        <ArrowLeft size={20} /> Voltar
      </Link>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Book Cover */}
        <div className="w-full md:w-1/3 max-w-sm mx-auto md:mx-0 shrink-0">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
            <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md tracking-wide">
                {book.category}
              </span>
            </div>
          </div>
        </div>

        {/* Book Info */}
        <div className="flex-1 space-y-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
              {book.title}
            </h1>
            <p className="text-xl text-gray-600 font-medium">{book.author}</p>
          </div>

          <div className="inline-block bg-[#ff5722]/10 text-[#ff5722] px-4 py-2 rounded-xl border border-[#ff5722]/20">
            <span className="text-sm font-medium uppercase tracking-wider block mb-1">Preço na loja</span>
            <span className="text-3xl font-black">R$ {book.price.toFixed(2).replace('.', ',')}</span>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-6">
              <Store className="text-[#ff5722]" /> Disponibilidade nas Lojas
            </h3>

            <div className="grid gap-4">
              {book.stores.map(store => (
                <div key={store.id} className={`p-5 rounded-2xl border-2 transition-colors ${store.available ? 'border-green-100 bg-green-50/50' : 'border-gray-100 bg-gray-50'} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className={`mt-1 ${store.available ? 'text-green-600' : 'text-gray-400'}`} size={24} />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{store.name}</h4>
                      <p className="text-sm text-gray-500 font-medium">{store.distance} de distância</p>
                      
                      <div className="mt-2 flex items-center gap-1.5">
                        {store.available ? (
                          <><CheckCircle size={16} className="text-green-600" /><span className="text-sm font-bold text-green-700">Disponível</span><span className="text-xs text-green-600 ml-1">({store.stock} unid.)</span></>
                        ) : (
                          <><XCircle size={16} className="text-gray-400" /><span className="text-sm font-medium text-gray-500">Indisponível no momento</span></>
                        )}
                      </div>
                    </div>
                  </div>

                  {store.available && (
                    <button 
                      onClick={() => handleReserve(store.id)}
                      disabled={reserved === store.id}
                      className={`shrink-0 w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm ${reserved === store.id ? 'bg-green-600 text-white' : 'bg-white border-2 border-[#ff5722] text-[#ff5722] hover:bg-[#ff5722] hover:text-white'}`}
                    >
                      {reserved === store.id ? (
                        <>Reservado para hoje <CheckCircle size={18} /></>
                      ) : (
                        <>Reservar na Loja <ShoppingBag size={18} /></>
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}