<script lang="ts">
	let {
		position,
		size,
		color,
		animation = null
	}: {
		position: { top: number; left: number };
		size: { height: number; width: number };
		color: string;
		animation?: string | null;
	} = $props();

	const isMobile = (): boolean => (windowWidth < 480 ? true : false);

	let windowWidth = $state(1000);

	let animaition =
		animation || (Math.random() * 100) % 2 === 0 ? 'animate-down-up-1' : 'animate-up-down-2';

	size.width = isMobile() ? size.width / 5 : size.width;
	size.height = isMobile() ? size.height / 5 : size.height;

	position.left = isMobile() ? position.left + position.left / 10 : position.left;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
	id="blur"
	class="{animaition} absolute -z-1 rounded-full bg-radial to-transparent blur-3xl dark:hidden"
	style:background={`radial-gradient(circle, var(${color}) 0%, transparent 80%)`}
	style:width={`${size.width}rem`}
	style:height={`${size.height}rem`}
	style:top={`${position.top}%`}
	style:left={`${position.left}%`}
></div>
