import { Outlet, Link } from "react-router";
import { BookOpen, MapPin, Bookmark, LayoutGrid, Library } from "lucide-react";

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex gap-[2px] text-[#ff5722]">
                <div className="w-1 h-5 bg-current rounded-full" />
                <div className="w-1 h-6 bg-current rounded-full" />
                <div className="w-1 h-4 bg-current rounded-full" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Leia<span className="text-[#ff5722]">+</span> Bookstore
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/search" className="flex items-center gap-2 text-sm font-medium text-[#ff5722] bg-orange-50 px-4 py-2 rounded-full hover:bg-orange-100 transition-colors">
                <BookOpen size={16} />
                Catálogo
              </Link>
              <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                <MapPin size={16} />
                Livrarias
              </Link>
              <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                <Bookmark size={16} />
                Minhas Reservas
              </Link>
              <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                <LayoutGrid size={16} />
                Estratégia MVP
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}