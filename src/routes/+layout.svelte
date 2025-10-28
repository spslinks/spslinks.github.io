<script>
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

	<link
		rel="preload"
		as="style"
		href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		onload={() => {
			this.onload = null;
			this.rel = 'stylesheet';
		}}
	/>
	<noscript>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		/>
	</noscript>
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
