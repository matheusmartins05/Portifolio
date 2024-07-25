import axios from "axios";

export const api = axios.create({
  baseURL: 'https://projetosserver.onrender.com/',
  headers: {'X-Requested-With': 'XMLHttpRequest'}
 });
