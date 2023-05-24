import { useEffect, useState } from "react";

export default function CrearBlog() {
  const [formulario, setFormulario] = useState({ titulo: "", contenido: "" });

  useEffect(() => {
    setFormulario({ titulo: "", contenido: "" });
  }, []); // Este efecto se ejecutará solo una vez al cargar el componente en el lado del cliente

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formulario);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          name="titulo"
          value={formulario.titulo}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Escribe tu blog"
          name="contenido"
          value={formulario.contenido}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
