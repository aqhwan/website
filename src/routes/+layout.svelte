<script module>
	import { waitLocale } from 'svelte-i18n';
	import '../i18n';

	export async function preload() {
		return waitLocale();
	}
</script>

<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}
