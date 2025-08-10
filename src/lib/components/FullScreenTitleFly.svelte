<script
  lang="ts"
>
  let {
    title,
  } =
    $props()

  import goUpOnScroll from '$lib/animation/goUpOnScroll.svelte'
</script>

<div
  id="title-fly"
  class="flex h-[70vh] w-full items-center justify-center overflow-hidden"
>
  <h1
    use:goUpOnScroll
    class="h-[200vh] translate-y-[100%] text-center"
  >
    {@render title()}
  </h1>
</div>
