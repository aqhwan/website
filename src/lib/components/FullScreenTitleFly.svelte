<script
  lang="ts"
>
  let {
    title,
  } =
    $props()
</script>

<div
  id="title-fly"
  class="flex h-screen w-full items-center justify-center overflow-hidden"
>
  <h1
    class="text-center"
  >
    {@render title()}
  </h1>
</div>
