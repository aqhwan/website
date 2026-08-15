<script>
  import A from '$lib/components/A.svelte'
  import {_} from 'svelte-i18n'
</script>

<main
  class="mt-10 mb-10 h-auto overflow-hidden">
  <h2>
    Products
    Privacy
    Police:
  </h2>
  <ul>
    {#each $_('products') as product}
      <li
        class="ellipsis w-full truncate text-nowrap text-ellipsis">
        <A
          href={'/privacy/'
            + product.title.toLowerCase()}>
          {product.title}
          -
          {product.description}
          -
          this
          si
          even
          more
          text
        </A>
      </li>
    {/each}
  </ul>
</main>
