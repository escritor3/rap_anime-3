// Extensão "Rap de Anime e Mangá - Parte 3" para FreeBeat
const PLAYLIST_URL = 'https://raw.githubusercontent.com/escritor3/rap_anime-3/main/rap_anime/playlist.json';

module.exports = {
  id: 'rap_anime_repo_3',
  name: 'Rap de Anime & Mangá - Parte 3',
  version: '1.0.0',
  hasCatalog: true,

  async getCatalog(api) {
    const data = await api.httpGetJson(PLAYLIST_URL);
    return api.normalizeSongs(data);
  },

  async search(query, api) {
    const data = await api.httpGetJson(PLAYLIST_URL);
    const songs = api.normalizeSongs(data);
    const q = query.toLowerCase();
    return songs.filter(
      (s) =>
        s.titulo.toLowerCase().includes(q) ||
        (s.artista && s.artista.toLowerCase().includes(q)) ||
        (s.genero && s.genero.toLowerCase().includes(q))
    );
  },
};