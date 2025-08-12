<script
  lang="ts"
>
  import rp from '$lib/utils/responsivePass.svelte'

  let {
    position,
    size,
    color,
    animation = 'up-down',
    time = 0,
  }: {
    position: {
      top: number
      left: number
    }
    size: {
      height: number
      width: number
    }
    color: string
    animation:
      | string
      | undefined
      | null
    time: number
  } = $props()

  time =
    time
    || (Math.random()
      * 100)
      % 2
      === 0
      ? 20
      : 60

  let windowWidth: number =
    $state(
      0,
    )
</script>

<svelte:window
  bind:innerWidth={
    windowWidth
  }
/>

<div
  id="blur"
  class="absolute -z-1 rounded-full bg-radial to-transparent blur-3xl dark:hidden"
  style:animation="{animation}
  {time}s
  ease-in-out
  infinite"
  style:background={`radial-gradient(circle, var(${color}) 0%, transparent 80%)`}
  style:width={`${rp(windowWidth, size.width, size.width / 2)}rem`}
  style:height={`${rp(windowWidth, size.height, size.height / 2)}rem`}
  style:top={`${position.top}%`}
  style:left={`${rp(windowWidth, position.left, position.left * 0.8)}%`}
></div>
