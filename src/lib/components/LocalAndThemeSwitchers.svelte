<script
>
  import Icon from './Icon.svelte'

  let {
    style,
  } =
    $props()

  const changeLanguage =
    () => {
      todo()
    }
  const changeTheme =
    () => {
      todo()
    }
</script>

<span
  class={style}
>
  <button
    onclick={changeLanguage}
  >
    <Icon
      icon={'languages.svg'}
      size={{
        h: 1,
        w: 1,
      }}
    />
  </button>
  <button
    onclick={changeTheme}
  >
    <Icon
      icon={'moon.svg'}
      size={{
        h: 1,
        w: 1,
      }}
    />
  </button>
</span>
