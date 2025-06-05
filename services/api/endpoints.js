import api from "./api";

export async function ReadUser() {
  const { data } = await api.get("/usuarios");
  return data;
}

export async function CreateUser(body) {
  const { data } = await api.post("/usuarios", body);
  return data;
}

export async function UpdateUser() {
  const { data } = await api.put(`/usuarios/${id}`, body);
  return data;
}

export async function DeleteUser() {
  const { data } = await api.delete(`/usuarios/${id}`, body);
  return data;
}

/////////////////

export async function ReadSession() {
  const { data } = await api.get("/sessoes");
  return data;
}

export async function CreateSession(body) {
  const { data } = await api.post("/sessoes", body);
  return data;
}

export async function UpdateSession() {
  const { data } = await api.put(`/sessoes/${id}`, body);
  return data;
}

export async function DeleteSession() {
  const { data } = await api.delete(`/sessoes/${id}`, body);
  return data;
}
