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

	<title>SPS Links</title>
	<meta property="og:title" content="SPS Links">
	<meta name="title" content="SPS Links">

	<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48 64x64 128x128" />
	<link rel="apple-touch-icon" href="/favicon.ico" />

	<meta
		name="description"
		content="Service for St. Paul's School to have easy access to links such as Classroom, Intranet, Lunch Menu and more."
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
