<svelte:head>
	<title>Tienda Fullstack - API REST</title>
	<meta name="description" content="Tienda Fullstack - API REST" />
</svelte:head>

<section>
<h1>Tienda Fullstack - API REST</h1>
<div class="bloque">
  <h4>ARTÍCULOS</h4>
  <div class="resumen metodo get">
      <span class="metodo-verbo http-get">GET</span>
      <span class="metodo-ruta"><a href="/api/articulos" target="popup">/api/articulos</a></span>
      <span class="metodo-descripcion">Obtener todos los artículos.</span>
  </div>
  <div class="resumen metodo post">
      <span class="metodo-verbo http-post">POST</span>
      <span class="metodo-ruta">/api/articulos</span>
      <span class="metodo-descripcion">Añadir un artículo.</span>
  </div>
  <div class="resumen metodo get">
      <span class="metodo-verbo http-get">GET</span>
      <span class="metodo-ruta">/api/articulos/[id]</span>
      <span class="metodo-descripcion">Obtener un artículo.</span>
  </div>
  <div class="resumen metodo update">
      <span class="metodo-verbo http-update">UPDATE</span>
      <span class="metodo-ruta">/api/articulos/[id]</span>
      <span class="metodo-descripcion">Modificar un artículo.</span>
  </div>
  <div class="resumen metodo delete">
      <span class="metodo-verbo http-delete">DELETE</span>
      <span class="metodo-ruta">/api/articulos/[id]</span>
      <span class="metodo-descripcion">Eliminar un artículo.</span>
  </div>
</div>

<div class="bloque">
  <h4>CLIENTES</h4>
  <div class="resumen metodo get">
      <span class="metodo-verbo http-get">GET</span>
      <span class="metodo-ruta"><a href="/api/clientes" target="popup">/api/clientes</a></span>
      <span class="metodo-descripcion">Obtener todos los clientes.</span>
  </div>
  <div class="resumen metodo post">
      <span class="metodo-verbo http-post">POST</span>
      <span class="metodo-ruta">/api/clientes</span>
      <span class="metodo-descripcion">Añadir un cliente.</span>
  </div>
  <div class="resumen metodo get">
      <span class="metodo-verbo http-get">GET</span>
      <span class="metodo-ruta">/api/clientes/[id]</span>
      <span class="metodo-descripcion">Obtener un cliente.</span>
  </div>
  <div class="resumen metodo update">
      <span class="metodo-verbo http-update">UPDATE</span>
      <span class="metodo-ruta">/api/clientes/[id]</span>
      <span class="metodo-descripcion">Modificar un cliente.</span>
  </div>
  <div class="resumen metodo delete">
      <span class="metodo-verbo http-delete">DELETE</span>
      <span class="metodo-ruta">/api/clientes/[id]</span>
      <span class="metodo-descripcion">Eliminar un cliente.</span>
  </div>
</div>
</section>

<style>
  a {
      text-decoration: none;
  }

  h1,
  div,
  img,
  p {
      padding: 10px;
  }

  div {
      padding-left: 30px;
  }


  .bloque {
      display: flex;
      flex-direction: column;
  }

  .metodo {
      margin: 0 0 15px;
      border: 1px solid #000;
      border-radius: 4px;
      box-shadow: 0 0 3px rgba(0, 0, 0, .19);
  }

  .get {
      border-color: #61affe;
      background: rgba(97, 175, 254, .1);
  }

  .post {
      border-color: #49cc90;
      background: rgba(73, 204, 144, .1);
  }

  .delete {
      border-color: #f93e3e;
      background: rgba(249, 62, 62, .1);
  }

  .update {
      border-color: #fca130;
      background: rgba(252, 161, 48, .1);
  }

  .http-get {
      background: #61affe;
  }

  .http-post {
      background: #49cc90;
  }

  .http-delete {
      background: #f93e3e;
  }

  .http-update {
      background: #fca130;
  }

  .resumen {
      display: flex;
      flex-wrap: wrap; 
      align-items: center;
      padding: 5px;
  }

  .cabecera {
      display: flex;
      align-items: center;
      padding: 1px;
      background: #fdebc9;;
  }

  .metodo-verbo {
      font-size: 14px;
      font-weight: 700;
      min-width: 80px;
      padding: 6px 15px;
      text-align: center;
      border-radius: 3px;
      text-shadow: 0 1px 0 rgba(0, 0, 0, .1);
      font-family: sans-serif;
      color: #fff;
  }

  .metodo-ruta {
      display: flex;
      align-items: center;
      word-break: break-word;
      padding: 0 10px 0 10px;
      font-family: monospace;
      font-weight: 600;
      color: #3b4151;
  }

  .metodo-descripcion {
      padding-top: 10px;
      font-size: 13px;
      flex: 1 1 auto;
      word-break: break-word;
      font-family: sans-serif;
      color: #3b4151;
  }

  h4 {
      border-bottom: 5px rgb(102, 100, 99);
      margin-bottom: 5px;
  }
</style>