<script lang="ts">
	import { _ } from 'svelte-i18n';

	let filters = $state('');
	let random = $state({ blur: 0, saturate: 0, hue: 0 });

	const handleScroll = () => {
		random.blur = Math.random() % 2;
		random.saturate = Math.random() % 2;
		random.hue = Math.random() % 2;

		filters = `blur(${10 + random.blur * 5}px) saturate(${140 + random.saturate * 80}%) hue-rotate(${random.hue * 5}deg)`;
	};
</script>

<svelte:document onscroll={handleScroll} />

<nav
	style:backdrop-filter={filters}
	style:-webkit-backdrop-filter={filters}
	class="sticky inset-0 mt-4 h-30 w-full rounded-[3.4rem] bg-radial-[at_150%_400%] from-white to-transparent transition-all duration-150 ease-in-out before:absolute before:inset-0 before:z-0 before:rounded-[inherit]"
></nav>

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

<style>
	@import '../app.css';
	nav::before {
		content: '';
		-webkit-box-shadow:
			inset 2px 2px 0px -2px var(--color-white-1),
			inset 0 0 3px 1px var(--color-white-2);
		box-shadow:
			inset 6px 6px 0px -6px var(--color-white-1),
			inset 0 0 8px 1px var(--color-white-2);
		backdrop-filter: brightness(1.1) blur(2px) url(#displacementFilter);
	}
</style>
