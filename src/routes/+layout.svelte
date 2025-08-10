<script
  module
>
  import { waitLocale } from 'svelte-i18n'
  import '../i18n'

  export async function preload() {
    return waitLocale()
  }
</script>

<script
  lang="ts"
>
  import '../app.css'

  import Nav from './Nav.svelte'
  import Footer from './Footer.svelte'

  let {
    children,
  } =
    $props()
</script>

<main
  class="mx-auto w-(--port-view-width)"
>
  <Nav
  />
  {@render children()}
  <Footer
  />
</main>
