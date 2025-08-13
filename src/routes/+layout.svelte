<script
  module>
  import {waitLocale} from 'svelte-i18n'
  import '../i18n'

  export async function preload() {
    return waitLocale()
  }
</script>

<script
  lang="ts">
  import '../app.css'

  import Nav from './Something.svelte'
  import Footer from './Footer.svelte'
  import BgBlur from '$lib/components/BgBlur.svelte'

  import {blurs} from '$lib/states/bgBlur.svelte'

  let websiteOffset: number =
    $state(
      0,
    )

  let {
    children,
  } =
    $props()
</script>

<svelte:body
  bind:offsetHeight={
    websiteOffset
  } />

<div
  class="absolute inset-0 -z-1 block w-full overflow-x-hidden overflow-y-visible"
  style:height={websiteOffset
    + 'px'}>
  {#each $blurs as { position, time, size, color, animation }}
    <BgBlur
      {position}
      {time}
      {size}
      {color}
      {animation} />
  {/each}
</div>

<main
  class="mx-auto w-(--port-view-width)">
  <Nav />
  {@render children()}
  <Footer />
</main>
