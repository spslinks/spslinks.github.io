<script>
	import { LINKS, MOBILE_LAYOUT, DESKTOP_LAYOUT } from '$lib/links.js';
	import { onMount } from 'svelte';
	let width = $state(0);
	let isMobile = $derived(width < 768);
	let layout = $derived(isMobile ? MOBILE_LAYOUT : DESKTOP_LAYOUT);
	let linkContainerStyle = $derived(
		`grid-template-columns: repeat(${layout[0]}, 1fr); grid-template-rows: repeat(${layout[1]}, 1fr);`
	);
</script>

<svelte:window bind:innerWidth={width} />

<div class="background"></div>

<div class="link-container" style={linkContainerStyle}>
	{#each LINKS as link}
		<a
			class="item"
			href={link.link}
			target="_blank"
			style={link.background ? `background: ${link.background}` : ''}
		>
			{#if link.logo}
				<img src={link.logo} alt={link.name} />
			{/if}
			{#if link.name}
				<p>{link.name}</p>
			{/if}
		</a>
	{/each}
</div>

<style>
	@keyframes pan {
		0% {
			background-position: 0px 0%;
		}

		100% {
			background-position: 2000px 0%;
		}
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		background: rgb(114, 9, 183);
		background: linear-gradient(
			90deg,
			rgba(114, 9, 183, 1) 0%,
			rgba(42, 13, 174, 1) 50%,
			rgba(114, 9, 183, 1) 100%
		);
		background-size: 2000px 2000px;
		width: 100vw;
		height: 100vh;
		animation: pan 30s linear infinite;
	}

	div.link-container {
		padding: 0.5em;

		width: 100%;
		height: 100%;
		z-index: 10;
		display: grid;
		gap: 0.5em;

		.item {
			justify-content: center;
			align-items: center;
			display: flex;
			flex-direction: column;
			position: relative;
			border-radius: 20px;
			padding: 2px;

			background: rgba(0, 0, 0, 0.05);

			transition: 0.4s linear;

			img {
				height: 50px;
			}

			p {
				font-family: 'Nunito', 'Courier New', Courier, monospace;
				color: hsl(0, 0%, 80%);
				font-size: 20px;
				font-weight: bold;
				margin: 5px;
				box-sizing: border-box;
				text-decoration: none !important;
			}
		}

		/* .item:has(img) p {
        bottom: 10px;
    } */

		.item:hover {
			background: rgba(0, 0, 0, 0.2);
			transform: scale(1.05, 1.05);

			p {
				text-decoration: none;
			}
		}
	}
</style>
