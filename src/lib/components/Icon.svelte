<script
  lang="ts">
  import {theme} from '$lib/states/theme.svelte'

  let dirName =
    $state(
      $theme
        == 'light'
        ? 'dark'
        : 'light',
    )

  $effect(
    () => {
      dirName =
        $theme
        == 'light'
          ? 'dark'
          : 'light'
    },
  )

  let {
    icon,
    size,
    style,
  }: {
    icon: string
    size: {
      h: number
      w: number
    }
    style?: string
  } =
    $props()
</script>

<img
  src={'/icons/'
    + dirName
    + '/'
    + icon}
  alt="logo"
  class="inline-block {style}"
  style:width={`${size.w}rem`}
  style:height={`${size.h}rem`} />
