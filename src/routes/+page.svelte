<script>
	import { LINKS } from '$lib/links.js';
	import { onMount } from 'svelte';

	let width = $state(1000);
	let isMobile = $derived(width < 768);

	// const images = import.meta.glob('$lib/assets/menus/*.png', { eager: true, import: 'default' });

	// const today = new Date();

	// const dateRangeRegex = /(\d{2})-(\d{2})-(\d{2})_(\d{2})-(\d{2})-(\d{2})/;

	// const activeImage = Object.entries(images)
	// 	.map(([path, src]) => {
	// 		const match = path.match(dateRangeRegex);
	// 		if (!match) return null;
	// 		const [_, d1, m1, y1, d2, m2, y2] = match;
	// 		const start = new Date(`20${y1}-${m1}-${d1}`); // prepend 20 for YY
	// 		const end = new Date(`20${y2}-${m2}-${d2}`);
	// 		return { src, start, end };
	// 	})
	// 	.filter(Boolean)
	// 	.find(({ start, end }) => today >= start && today < end)?.src;

	// let menuOpen = $state(false); //change to false

	const DESKTOP_ROWS = 5;

	onMount(() => {
		const items = document.querySelectorAll('.item');
		let step = 0;

		function index(row, col) {
			return row * DESKTOP_ROWS + col;
		}

		const rows = Math.ceil(items.length / DESKTOP_ROWS);
		const maxDiag = rows + DESKTOP_ROWS - 1;

		for (let d = 0; d < maxDiag; d++) {
			for (let row = 0; row < rows; row++) {
				const col = d - row;
				const i = index(row, col);
				if (col >= 0 && col < DESKTOP_ROWS && i < items.length) {
					setTimeout(() => {
						items[i].classList.add('shown');
					}, step * 10);
					step++;
				}
			}
		}
	});
</script>

<svelte:window bind:innerWidth={width} />

<div class="background"></div>

<div class="link-container">
	{#each LINKS as link}
		<div class="container">
			<a class="item" href={link.link} target="_blank">
				<div class="front" style={link.background ? `background: ${link.background}` : ''}>
					{#if link.logo}
						<img src={link.logo} alt={`${link.name} logo`} />
					{/if}
					{#if link.name}
						<p>{link.name}</p>
					{/if}
					{#if link.tag}
						<p class="tag">{link.tag}</p>
					{/if}
				</div>
				<div class="back"></div>
			</a>
		</div>
	{/each}
</div>

<!-- {#if menuOpen && activeImage && !isMobile}
	<button
		class="popout-container"
		onclick={() => {
			menuOpen = false;
		}}
		onkeydown={(e) => {
			if (e.key === 'Escape') {
				menuOpen = false;
			}
		}}
	>
		<div class="popout menu">
			<img src={activeImage} alt="today's lunch menu" />
			<p>click anywhere to exit</p>
		</div>
	</button>
{/if} -->

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
		position: fixed;
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
		height: 100%;
		animation: pan 30s linear infinite;
	}

	/* .unbuttonize {
		border: none;
		margin: 0;
		padding: 0;
		text-align: inherit;
		font: inherit;
		border-radius: 0;
	} */

	div.link-container {
		--mobile-cols: 3;
		--mobile-rows: 7;
		--desktop-cols: 5;
		--desktop-rows: 4;

		padding: 0.5em;

		width: 100%;
		height: 100%;
		z-index: 10;
		display: grid;
		gap: 0.5em;

		grid-template-columns: repeat(var(--desktop-cols), 1fr);
		grid-template-rows: repeat(var(--desktop-rows), 1fr);

		text-decoration: none !important;
		border-bottom: none !important;

		.item:visited {
			text-decoration: none !important;
			border-bottom: none !important;
		}

		.item:has(img) p {
			bottom: 10px;
		}

		.item:not(.hidden):hover {
			background: rgba(0, 0, 0, 0.2);
			transform: scale(1.05, 1.05);
		}
	}

	.container {
		-webkit-perspective: 1000;
		-moz-perspective: 1000;
		perspective: 1000;
		width: 100%;
		height: 100%;
	}

	.item {
		width: 100%;
		height: 100%;

		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		position: relative;
		border-radius: 20px;

		transition: 0.4s linear;

		text-decoration: none !important;
		border-bottom: none !important;

		background-color: transparent;
	}

	.front,
	.back {
		-webkit-transition: all 0.5s ease;
		-moz-transition: all 0.5s ease;
		transition: all 0.5s ease;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.front {
		z-index: 3;

		width: 100%;
		height: 100%;

		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		position: absolute;
		border-radius: 20px;
		padding: 2px;

		background: rgba(0, 0, 0, 0.05);

		img {
			height: 50px;
			border-radius: 5px;
		}

		p {
			font-family: 'Nunito', 'Arial Rounded MT', 'Helvetica', monospace;
			color: hsl(0, 0%, 80%);
			font-size: 20px;
			font-weight: bold;
			margin: 5px;
			box-sizing: border-box;
			text-decoration: none !important;
			outline: none !important;
			border-bottom: none !important;
		}

		.tag {
			padding: 3px 30px;
			background: rgb(143, 14, 14);
			border-radius: 5px;

			position: absolute;
			bottom: 5px;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	@media (min-width: 767px) {
		.item:not(.shown) .front {
			-webkit-transform: rotateY(180deg) rotateZ(135deg);
			-moz-transform: rotateY(180deg) rotateZ(135deg);
			transform: rotateY(180deg) rotateZ(135deg);
		}

		.back {
			width: 100%;
			height: 100%;
			position: absolute;
			background: rgba(0, 0, 0, 0.05);
			-webkit-transform: rotateY(180deg);
			-moz-transform: rotateY(180deg);
			transform: rotateY(180deg);
		}
	}

	/* .item:not(.shown) .back {
		-webkit-transform: rotateY(0deg);
		-moz-transform: rotateY(0deg);
		transform: rotateY(0deg);
	} */

	@media (max-width: 767px) {
		div.link-container .item p {
			font-size: 15px !important; /* why did i do this */
		}
	}

	@media (max-width: 767px) {
		div.link-container {
			grid-template-columns: repeat(var(--mobile-cols), 1fr);
			grid-template-rows: repeat(var(--mobile-rows), 1fr);
		}
	}

	/* .popout-container {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
		padding: 3em;

		height: 100vh;
		height: 100dvh;

		width: 100vw;
		width: 100dvw;

		display: flex;
		justify-content: center;
		align-items: center;

		background-color: rgba(0, 0, 0, 0.65);

		border: none;
		margin: 0;
		text-align: inherit;
		font: inherit;
		border-radius: 0;
	}

	div.menu {
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		flex-direction: column;
	}

	div.menu img {
		width: auto;
		height: 100%;
		border-radius: 20px;

		opacity: 0.9;
	}

	div.menu p {
		font-family: 'Nunito', 'Arial Rounded MT', 'Helvetica', monospace;
		color: hsl(0, 0%, 80%);
		font-size: 30px;
		font-weight: bold;
		margin: 5px;
		box-sizing: border-box;
	} */
</style>
