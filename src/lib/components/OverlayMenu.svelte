<script
  lang="ts">
  let {
    items = [],
    selectedValue = $bindable(),
    show = $bindable(
      false,
    ),
  } = $props()

  function handleItemClick(
    item: any,
  ) {
    selectedValue =
      item
    show = false
  }

  function handleBackdropClick(
    event: Event,
  ) {
    if (
      event.target
      === event.currentTarget
    ) {
      show = false
    }
  }

  // Added keyboard handler for backdrop accessibility
  function handleBackdropKeydown(
    event: KeyboardEvent,
  ) {
    if (
      event.key
      === 'Escape'
    ) {
      show = false
    }
  }

  function handleKeydown(
    event: KeyboardEvent,
  ) {
    if (
      event.key
      === 'Escape'
    ) {
      show = false
    }
  }
</script>

<svelte:window
  onkeydown={handleKeydown} />

{#if show}
  <!-- Portal to body to ensure it's always relative to viewport -->
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    onclick={handleBackdropClick}
    onkeydown={handleBackdropKeydown}
    role="presentation"
    tabindex="-1">
    <!-- Simplified transparent menu container -->
    <div
      class="flex max-h-[80vh] w-full max-w-sm flex-col gap-2 overflow-y-auto"
      role="dialog"
      tabindex="0">
      <!-- Simple menu items with transparent background -->
      {#each items as item}
        <button
          onclick={() =>
            handleItemClick(
              item,
            )}
          class="main-font-m cursor-pointer rounded-full p-6 text-center transition-all duration-200 hover:bg-white/20"
          tabindex="0">
          {item}
        </button>
      {/each}
    </div>
  </div>
{/if}
