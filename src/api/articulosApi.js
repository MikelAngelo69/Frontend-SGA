import { data } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/articulos";

export const obtenerArticulo = async () => {
    const res = await fetch(`${BASE_URL}`,{
        method: "GET",
    });
    if (!res.ok) throw new Error ("Este articulo no existe");
    return await res.json();
};

export const crearArticulo = async (data) => {
    const res = await fetch(`${BASE_URL}/Crear`,{
        method: "POST",
        headers: {"content-Type":"application/json"},
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("no se articula el articulo");
    return await res.json();
};

export const actualizarArticulo = async (id, data) => {
    console.log(id, data);
    console.log(`${BASE_URL}/Actualizar/${id}`);
    const res = await fetch(`${BASE_URL}/Actualizar/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al actualizar el articulo");
    return res.json();
};


export const obtenerArticuloporId = async (id) => {
    const res = await fetch(`${BASE_URL}/ConsultarById/${id}`,{
        method: "GET",
    });
    if (!res.ok) throw new Error("Articulo no encontrado");
    return res.json();
};