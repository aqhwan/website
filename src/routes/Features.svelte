<script
  lang="ts"
>
  import FullScreenTitleFly from '$lib/components/FullScreenTitleFly.svelte'

  import { _ } from 'svelte-i18n'
</script>

{#snippet title()}
  {$_(
    'home.features.title',
  )}
{/snippet}

<FullScreenTitleFly
  {title}
/>

<section
  class="flex h-screen w-full flex-row items-center justify-between bg-pink-300"
>
  <div
    id="left"
  >
    <h2
    >
      some
      features
    </h2>
    <ui
    >
      <li
      ></li>
      <li
      ></li>
      <li
      ></li>
      <li
      ></li>
      <li
      ></li>
    </ui>
  </div>

  <div
    id="right"
  >
    <span
      class="feature"

    ></span>
    <span
      class="feature"

    ></span>
    <span
      class="feature"

    ></span>
  </div>
</section>
