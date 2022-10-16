<script>
    export let data = {};
    data = Object.values(data);
</script>

<h1>Artículos</h1>
{#each data as doc}
    {doc.nombre}
    {doc.precio}
    <hr>
{/each}
