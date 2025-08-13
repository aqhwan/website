<script
  lang="ts">
  import Icon from './Icon.svelte'
  import OverlayMenu from './OverlayMenu.svelte'

  import {locale} from 'svelte-i18n'

  const SUPPORTED_LANGUAGES =
    [
      'English',
      'Arabic',
    ]

  let {
    style,
  } =
    $props()

  let items: string[] =
    $state(
      [],
    )

  let show =
    $state(
      false,
    )

  let selectedValue: string =
    $state(
      '',
    )

  let menuRole:
    | string
    | null =
    $state(
      null,
    )

  let body: HTMLBodyElement

  let theme =
    'light'

  const changeLanguage =
    () => {
      items =
        SUPPORTED_LANGUAGES

      selectedValue =
        ''

      menuRole =
        'lang'

      show = true
    }

  const changeTheme =
    () => {
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

  $effect(
    () => {
      if (
        menuRole
          === 'lang'
        && selectedValue
      ) {
        const lang: string =
          selectedValue
            .substring(
              0,
              2,
            )
            .toLowerCase()

        window.localStorage.setItem(
          'lang',
          lang,
        )

        locale.set(
          lang,
        )
      }
    },
  )

  const setLocale =
    (
      window: Window,
    ) => {
      menuRole =
        'lang'

      selectedValue =
        window.localStorage.getItem(
          'lang',
        )
        || ''
    }
</script>

<svelte:window
  use:setLocale />

<!-- i think i just over engineered this lol -->
<OverlayMenu
  {items}
  bind:selectedValue
  bind:show />

<svelte:body
  bind:this={
    body
  } />

<span
  class={style}>
  <button
    onclick={changeLanguage}
    class="cursor-pointer">
    <Icon
      icon={'languages.svg'}
      size={{
        h: 1,
        w: 1,
      }} />
  </button>
  <button
    onclick={changeTheme}
    class="cursor-pointer">
    <Icon
      icon={'moon.svg'}
      size={{
        h: 1,
        w: 1,
      }} />
  </button>
</span>
