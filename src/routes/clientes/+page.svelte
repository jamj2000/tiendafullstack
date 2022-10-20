<script>
    import Cliente from '$lib/components/Cliente.svelte'
    import Boton from '$lib/components/Boton.svelte'  
    export let data = {};
    data = Object.values(data);


    function insertar() {}

    function modificar() {}
    
    function eliminar() {}

</script>

<svelte:head>
	<title>Clientes</title>
	<meta name="description" content="Clientes" />
</svelte:head>

<h1>Clientes</h1>
{#each data as cliente}
    <Cliente {cliente}>
        <!-- <div style="text-align: right">
            <Boton accion={modificar} documento={cliente} />
            <Boton accion={eliminar}  documento={cliente} />
        </div> -->
    </Cliente>
{/each}
