<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	let menu = ['products', 'about'];
</script>

<div id="menu-container z-1">
	<div id="desctop" class="flex h-full items-center justify-around gap-10 not-sm:hidden">
		{#each menu as item}
			<a href="/{item}"> {item} </a>
		{/each}
	</div>
	<div id="mobile" class="sm:hidden">
		<Icon icon={'menu.svg'} size={{ h: 3, w: 3 }} />
	</div>
</div>
