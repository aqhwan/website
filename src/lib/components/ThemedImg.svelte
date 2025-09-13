<script
  lang="ts">
  import {theme} from '$lib/states/theme.svelte'

  let {
    name,
    alt,
    reversed = false,
    style,
  }: {
    name: string
    alt: string
    reversed?: boolean
    style?: string
  } = $props()

  let getTheme =
    (): string =>
      $theme
      == 'light'
        ? (reversed
            && 'dark')
          || 'light'
        : (reversed
            && 'light')
          || 'dark'

  let dirName: string =
    $state(
      getTheme(),
    )

  $effect(
    () => {
      dirName =
        getTheme()
    },
  )
</script>

<img
  src={'/images/themed/'
    + dirName
    + '/'
    + name}
  {alt}
  class={style} />
