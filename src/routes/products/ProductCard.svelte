<script>
  let {
    title,
    description,
    image,
    link,
    open_source,
    price,
    platforms,
    ready,
  } =
    $props()
</script>

<div
  class="pallet-highlight-bg border-green-1 dark:border-gray-1 relative flex max-w-lg rounded-[60px] border-2 p-8 shadow-lg">
  {#if !ready}
    <div
      id="overlay"
      class="bg-black-1 pallet-light-font absolute inset-0 z-1 flex items-center justify-center rounded-[inherit] text-center opacity-80">
      <strong>
        soon
        in
        Chaa'Allah
      </strong>
    </div>
  {/if}
  <div
    class="flex flex-1 flex-col items-center justify-center gap-6">
    <div
      class="relative flex h-[55%] w-[50%] items-center justify-center rounded-3xl p-2"
      style="background-color: var(--color-helper-green);">
      <img
        src={image}
        alt={title
          + 'Logo'}
        class="h-full w-full rounded-2xl object-contain" />
    </div>

    <div
      class="flex flex-col items-start gap-4">
      <span
        class="main-font-s font-bold"
        style="color: var(--color-gray-1);">
        {price
        === 0
          ? 'Free'
          : `$${price}`}
      </span>

      <a
        href={link}
        class="pallet-colored-bg sub-font-s rounded-xl px-6 py-3 transition-all hover:opacity-80">
        Download
      </a>
    </div>
  </div>

  <div
    class="flex flex-1 flex-col justify-around">
    <div
      class="mb-6">
      <sub
        class="mb-6 block!">
        {title}
      </sub>
      <desc
        class="line-clamp-4 block!">
        {description}
      </desc>
    </div>

    <div
      class="flex flex-wrap gap-2">
      {#each platforms as platform}
        <span
          class="bg-yellow-1 main-font-s text-gray-1! rounded-full px-2 py-1">
          {platform}
        </span>
      {/each}
      {#if open_source}
        <span
          class="bg-helper-purple main-font-s text-gray-1! rounded-full px-2 py-1">
          open
          source
        </span>
      {/if}
    </div>
  </div>
</div>
