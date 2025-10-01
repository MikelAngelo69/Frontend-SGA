const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/usu";

export const obtenerUsuario = async () => {
    const res = await fetch(`${BASE_URL}/ConsultarUsuarios`,{
        method: "GET",
    });
    if (!res.ok) throw new Error("Usuario no existente en exisitir");
    return await res.json();
}

export const crearUsuario = async () => {
    const res = await fetch (`${BASE_URL}/ConsultarUsuarios`,{
        method: "POST",
        headers: {"content-Type":"application/json"},
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("No se puede crear el usuario creado");
    return await res.json();
}