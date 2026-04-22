const API = "http://127.0.0.1:5000";

// LISTA / BUSCA (AGORA COM DOIS FILTROS)
export async function getLivros(query?: string, preco?: string) {
  let url = `${API}/livros`;

  const params = [];

  if (query && query.trim() !== "") {
    params.push(`q=${encodeURIComponent(query)}`);
  }

  if (preco && preco.trim() !== "") {
    params.push(`preco_min=${preco}`);
  }

  if (params.length > 0) {
    url += "?" + params.join("&");
  }

  console.log("URL FINAL:", url); // DEBUG

  const res = await fetch(url);
  return res.json();
}

// DETALHE
export async function getLivroById(id: number) {
  const res = await fetch(`${API}/livros/${id}`);
  return res.json();
}