<script
  lang="ts">
  import {onMount} from 'svelte'
  import {fly} from 'svelte/transition'

  let {
    words,
    duration = 1000,
    style = '',
  } = $props()

  let index =
    $state(
      0,
    )
  let chnageIndex =
    () => {
      index =
        (index
          + 1)
        % words.length
    }
  onMount(
    () => {
      let interval =
        setInterval(
          chnageIndex,
          duration,
        )
      return () =>
        clearInterval(
          interval,
        )
    },
  )
</script>

<span
  class="overflow-hidden py-2">
  {#key index}
    <span
      in:fly={{
        y: -50,
        delay: 200,
      }}
      out:fly={{
        y: 40,
        duration: 200,
      }}
      class={style}>
      {words[
        index
      ]}
    </span>
  {/key}
</span>
