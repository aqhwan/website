<script module>
	import { waitLocale } from 'svelte-i18n';
	import '../i18n';

	export async function preload() {
		return waitLocale();
	}
</script>

<script lang="ts">
	import '../app.css';

	import Nav from './Nav.svelte';
	import BgBlur from '$lib/components/BgBlur.svelte';
	import { blurs } from '$lib/states/bgBlur.svelte';

	let { children } = $props();
</script>

<section class="relative h-screen w-full overflow-x-hidden">
	{#each $blurs as { position, size, color, animation }}
		<BgBlur {position} {size} {color} {animation} />
	{/each}

	<main class="relative mx-auto w-(--port-view-width)">
		<Nav />
		{@render children()}
	</main>
</section>
