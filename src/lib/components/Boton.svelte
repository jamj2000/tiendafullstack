<script>
    export let accion = () => {}      // insertar, modificar, eliminar

    let tipo="modificar"
    let estilo = ""

    switch (tipo) {
      case "insertar":
         estilo = "btn btn-insertar";
        break;
      case "modificar":
         estilo = "btn btn-modificar";
        break;
      case "eliminar":
        estilo = "btn btn-eliminar";
        break;
      default:
    }

    
</script>

<button class={estilo} on:click={accion} />

<style>
    .btn {
      font-weight: bold;
      padding-left: 20px;
      padding-right: 20px;
      cursor: pointer;
      border-radius: 3px;
      font-size: 1em;
      transition: all 0.3s ease-in-out;
    }
  
    .btn:hover {
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    }
  
    /* Botón para insertar */
    .btn-insertar {
      border: 1px solid #13a600;
      color: #13a600;
      background-color: lightgreen;
    }
    .btn-insertar::before {
      content: "✏️";
    }
    .btn-insertar::after {
      content: " Insertar";
    }
    .btn-insertar:hover {
      background: #c1ffc9;
    }
  
    /* Botón para modificar */
    .btn-modificar {
      border: 1px solid #0085a6;
      color: #0085a6;
      background-color: lightblue;
    }
    .btn-modificar::before {
      content: "📝";
    }
    .btn-modificar::after {
      content: " Modificar";
    }
    .btn-modificar:hover {
      background: #a8e7f5;
    }
  
    /* Botón para eliminar */
    .btn-eliminar {
      border: 1px solid #ec0115;
      color: #ec0115;
      background-color: lightsalmon;
    }
    .btn-eliminar::before {
      content: "❌";
    }
    .btn-eliminar::after {
      content: " Eliminar";
    }
    .btn-eliminar:hover {
      background: #ffc1bf;
    }
  
    @media (max-width: 500px) {
      .btn-insertar::after,
      .btn-modificar::after,
      .btn-eliminar::after {
        content: none;
      }
    }
  </style>