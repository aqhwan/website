<script
  lang="ts">
  import Icon from '$lib/components/Icon.svelte'
  import OverlayMenu from '$lib/components/OverlayMenu.svelte'

  let menu =
    // FIXME: use local
    [
      'products',
      'about',
    ]

  let selectedValue: string =
    $state(
      '',
    )

  let show: boolean =
    $state(
      false,
    )

  $effect(
    () => {
      if (
        selectedValue
      ) {
        if (
          selectedValue
          === 'home'
        ) {
          selectedValue =
            ''
        }

        window.location.href =
          window
            .location
            .origin
          + `/${selectedValue}`
      }
    },
  )
</script>

<OverlayMenu
  items={[
    'home',
    ...menu,
  ]}
  bind:selectedValue
  bind:show />

<div
  id="menu-container z-1">
  <div
    id="desctop"
    class="flex h-full items-center justify-around gap-10 not-sm:hidden">
    {#each menu as item}
      <a
        href="/{item}">
        {item}
      </a>
    {/each}
  </div>
  <div
    id="mobile"
    class="sm:hidden">
    <button
      onclick={() => {
        show = true
      }}
      class="cursor-pointer">
      <Icon
        icon={'menu.svg'}
        size={{
          h: 3,
          w: 3,
        }} />
    </button>
  </div>
</div>
