<script>
    import Articulo from '$lib/components/Articulo.svelte'
    export let data = {};
    data = Object.values(data);
</script>

<svelte:head>
	<title>Artículos</title>
	<meta name="description" content="Artículos" />
</svelte:head>

<h1>Artículos</h1>
{#each data as articulo}
    <Articulo {articulo} />
{/each}

