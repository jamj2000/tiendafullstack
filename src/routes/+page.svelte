<svelte:head>
	<title>Tienda Fullstack</title>
	<meta name="description" content="Tienda Fullstack" />
</svelte:head>

<section>
<h1>Tienda Fullstack</h1>
<p>Esta aplicación ofrece 3 opciones:</p>
<div class="bloque">

    <div class="resumen">
      <span class="opcion">🛒 Inicio</span>
      <span class="descripcion">Esta página de información.</span>
    </div>


  <a href="/articulos">
    <div class="resumen">
      <span class="opcion">🎁 Artículos</span>
      <span class="descripcion">
        Operaciones CRUD de artículos en una BD.
      </span>
    </div>
  </a>

  <a href="/clientes">
    <div class="resumen">
      <span class="opcion">👥 Clientes</span>
      <span class="descripcion">
        Operaciones CRUD de clientes en una BD.
      </span>
    </div>
</a>
</div>
<p>
	<small>
	  Backend en en formato API REST en <a href="/api">/api</a>
	</small>
</p>

</section>

<style>
  h1,
  div,
  p {
    padding: 3px;
  }
  div {
    padding: 30px;
  }

  .bloque {
    display: flex;
    flex-direction: column;
  }
  .resumen {
    display: flex;
    flex-wrap: wrap;    
    padding: 5px;
    margin: 0 0 15px;
    border: 1px solid #000;
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.19);
    border: 1px solid rgb(245, 177, 31);
    border-radius: 4px;
  }

  .opcion {
    display: flex;   
    word-break: break-word;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 700;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    font-family: sans-serif;
    color: #3b4151;
    border-radius: 4px;
    background: #fdebc9;
    min-width: 140px;
    padding: 10px;
  }

  .descripcion {
    font-size: 14px;
    flex: 1 1 auto;
    word-break: break-word;
    font-family: sans-serif;
    color: #3b4151;
    padding-top: 10px;
    padding-left: 10px;
  }
</style>