<script>
  import A from '$lib/components/A.svelte'
  import {_} from 'svelte-i18n'
</script>

<main
  class="mt-10 mb-10 h-auto overflow-hidden">
  <h2>
    {$_(
      'privacy.title',
    )}
  </h2>
  <ul>
    {#each $_('products') as product}
      <li
        class="ellipsis w-full truncate text-nowrap text-ellipsis">
        <A
          href={'/privacy/'
            + product.id.toLowerCase()}>
          {product.title}
          -
          {product.description}
        </A>
      </li>
    {/each}
  </ul>
</main>
