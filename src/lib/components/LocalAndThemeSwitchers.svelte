<script
  lang="ts">
  import Icon from './Icon.svelte'

  let {
    style,
  } =
    $props()

  let body: HTMLBodyElement

  let theme =
    'light'

  const changeLanguage =
    () => {
      todo()
    }
  const changeTheme =
    (
      event: Event,
    ) => {
      theme =
        theme
        === 'light'
          ? 'dark'
          : 'light'

      body.classList.toggle(
        'dark',
        theme
          === 'dark',
      )

      body.classList.toggle(
        'light',
        theme
          === 'light',
      )
    }
</script>

<svelte:body
  bind:this={
    body
  } />

<span
  class={style}>
  <button
    onclick={changeLanguage}>
    <Icon
      icon={'languages.svg'}
      size={{
        h: 1,
        w: 1,
      }} />
  </button>
  <button
    onclick={changeTheme}>
    <Icon
      icon={'moon.svg'}
      size={{
        h: 1,
        w: 1,
      }} />
  </button>
</span>
