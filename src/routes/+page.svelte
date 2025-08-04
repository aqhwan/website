<script lang="ts">
	let blurModifier = $state(0);
	let saturateModifier = $state(0);
	let hueModifier = $state(0);

	const handleScroll = () => {
		blurModifier = Math.random() % 2;
		saturateModifier = Math.random() % 2;
		hueModifier = Math.random() % 2;
	};
</script>

<svelte:document onscroll={handleScroll} />
<div
	style:backdrop-filter={`blur(${10 + blurModifier * 5}px) saturate(${140 + saturateModifier * 80}%) hue-rotate(${hueModifier * 5}deg)`}
	class="card"
></div>

<svg style="display:none;">
	<filter id="displacementFilter">
		<feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />

		<feDisplacementMap
			in="SourceGraphic"
			in2="turbulence"
			scale="200"
			xChannelSelector="R"
			yChannelSelector="G"
		/>
	</filter>
</svg>

<h1 class="text-center text-4xl font-bold">hi how are you</h1>
<img
	src="https://images.pexels.com/photos/4058530/pexels-photo-4058530.jpeg"
	alt="logo"
	class="h-2xl w-2xl"
/>

<div class="bg-blur bg-yellow-blur"></div>
<div class="bg-blur bg-green-blur"></div>

<style>
	:root {
		--white-0: #ffffffe3;
		--white-1: #f2f2f2e3;
		--white-2: #c6c6c6e7;
		--gray-1: #a9a9a9;
		--gray-2: #777777;
		--gray-3: #333333;
		--opacity-1: 0.6;
		--blur-1: 5px;
	}
	.card {
		position: sticky;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: all 0.5s ease-in-out;
		width: 80vw;
		height: 130px;
		border-radius: 60px;
		background: radial-gradient(circle at 150% 400%, var(--white-1) 0%, transparent 100%);
		backdrop-filter: blur(var(--blur-1)) saturate(180%);
		-webkit-backdrop-filter: blur(var(--blur-1)) saturate(180%) hue-rotate(5deg);
		box-sizing: border-box;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			z-index: 0;
			overflow: hidden;
			border-radius: inherit;
			-webkit-box-shadow:
				inset 2px 2px 0px -2px var(--white-0),
				inset 0 0 3px 1px var(--white-0);
			box-shadow:
				inset 6px 6px 0px -6px var(--white-0),
				inset 0 0 8px 1px var(--white-0);

			filter: fade(red, 40%);

			backdrop-filter: brightness(1.1) blur(2px) url(#displacementFilter);
		}
	}

	.bg-blur {
		position: fixed;
		pointer-events: none;
		filter: blur(65px);
		opacity: 0.9;
		z-index: -1;
	}

	.bg-yellow-blur {
		height: 600px;
		width: 1000px;
		inset: -20% -25%;
		background: radial-gradient(circle, #ffe7c5 30%, transparent 80%);
	}

	.bg-green-blur {
		height: 400px;
		width: 900px;
		inset: 40% 70%;
		background: radial-gradient(circle, #e1e6b7 30%, transparent 80%);
	}
</style>
