export const obtenerUsuario = async () => {
    const res = await fetch('http://localhost:8080/api/usu/usuarios',{
        method: "GET",
    });
    if (!res.ok) throw new Error("Usuario no existente en exisitir");

    return await res.json();
}