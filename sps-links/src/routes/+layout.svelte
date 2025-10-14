<script>
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>

	<title>SPS Links</title>

	<link
		rel="icon"
		href="https://www.stpaulsschool.org.uk/wp-content/uploads/2019/05/St-Pauls-Logo-150x150.png"
		sizes="32x32"
	/>
	<link
		rel="icon"
		href="https://www.stpaulsschool.org.uk/wp-content/uploads/2019/05/St-Pauls-Logo-300x300.png"
		sizes="192x192"
	/>
	<link
		rel="apple-touch-icon"
		href="https://www.stpaulsschool.org.uk/wp-content/uploads/2019/05/St-Pauls-Logo-300x300.png"
	/>
</svelte:head>

{@render children?.()}

<style>
	:global(body),
	:global(html) {
		margin: 0;
		padding: 0;

		height: 100vh;
		width: 100vw;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>
