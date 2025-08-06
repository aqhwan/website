<script lang="ts">
	/**
	 * @type {{ position: { top: number; left: number }, size: { height: number; width: number }, color: string }} -- test
	 */
	let {
		position,
		size,
		color
	}: {
		position: { top: number; left: number };
		size: { height: number; width: number };
		color: string;
	} = $props();
</script>

<div
	id="blur"
	class="-z-1 rounded-full bg-radial to-transparent"
	style:background={`radial-gradient(circle, var(${color}) 0%, transparent 100%)`}
	style:width={`${size.width}rem`}
	style:height={`${size.height}rem`}
	style:top={`${position.top}%`}
	style:left={`${position.left}%`}
></div>
