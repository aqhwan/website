<script lang="ts">
	import LocalAndThemeSwitchers from '$lib/components/LocalAndThemeSwitchers.svelte';
	import { _ } from 'svelte-i18n';
	import NavMenu from './NavMenu.svelte';

	let filters = $state('');
	let random = $state({ blur: 0, saturate: 0, hue: 0 });

	const handleScroll = () => {
		random.blur = Math.random() % 2;
		random.saturate = Math.random() % 2;
		random.hue = Math.random() % 2;

		filters = `blur(${10 + random.blur * 5}px) saturate(${140 + random.saturate * 80}%) hue-rotate(${random.hue * 5}deg)`;
	};

	let navMenu = ['products', 'about'];
</script>

<svelte:document onscroll={handleScroll} />

<nav
	style:backdrop-filter={filters}
	style:-webkit-backdrop-filter={filters}
	class="sticky inset-0 top-5 mx-auto h-30 w-full overflow-hidden rounded-[3.4rem] bg-radial-[at_150%_400%] from-white to-transparent transition-all duration-150 ease-in-out not-sm:h-20 before:absolute before:inset-0 before:z-0 before:rounded-[inherit] dark:from-black"
>
	<div id="nav" class="flex h-full w-full items-center justify-between not-sm:px-10 sm:px-20">
		<div id="logo" class="z-1 flex h-full w-50 items-center justify-center not-sm:hidden">
			<a href="/">
				<img
					class="fill-gray-1 stroke-gray-1 dark:stroke-yellow-1 dark:fill-yellow-1"
					src="/images/logo/bothBlackAndWhite.svg"
					alt="logo"
				/>
			</a>
		</div>
		<LocalAndThemeSwitchers style="sm:hidden" />

		<NavMenu />
	</div>
</nav>

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
