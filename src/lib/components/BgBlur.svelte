<script
  lang="ts"
>
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

  const isMobile =
    (): boolean =>
      windowWidth
      < 480
        ? true
        : false

  let windowWidth =
    $state(
      1000,
    )

  time =
    time
    || (Math.random()
      * 100)
      % 2
      === 0
      ? 20
      : 60

  size.width =
    isMobile()
      ? size.width
        / 5
      : size.width
  size.height =
    isMobile()
      ? size.height
        / 5
      : size.height

  position.left =
    isMobile() // is it on mobile?
      ? position.left
        < 50 // yes?, so is it on the left side?
        ? position.left
          - Math.abs(
            position.left
              / 10,
          ) // yes?, so push it more to left
        : position.left
          + Math.abs(
            position.left
              / 10,
          ) // no?, so push it more to right
      : position.left // no?, so keep it as it is
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
  style:width={`${size.width}rem`}
  style:height={`${size.height}rem`}
  style:top={`${position.top}%`}
  style:left={`${position.left}%`}
></div>
