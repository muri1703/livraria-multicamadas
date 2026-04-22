export async function getLivros(query?: string, preco?: string) {
  let url = "http://127.0.0.1:5000/livros";

  const params = [];

  if (query) params.push(`q=${encodeURIComponent(query)}`);
  if (preco) params.push(`preco_min=${preco}`);

  if (params.length > 0) {
    url += "?" + params.join("&");
  }

  const res = await fetch(url);
  return res.json();
}