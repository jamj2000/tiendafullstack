<script>
    export let data = {};
    data = Object.values(data);
</script>

<h1>Artículos</h1>
{#each data as doc}
    {doc._id}
    {doc.nombre}
    {doc.apellidos}
    <hr>
{/each}
