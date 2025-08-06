<script>
	import BgBlur from '$lib/components/BgBlur.svelte';

	let blur = {
		position: { top: 10, left: 10 },
		size: { height: 5, width: 5 },
		color: '--color-green-1'
	};
</script>

<BgBlur {...blur} />
