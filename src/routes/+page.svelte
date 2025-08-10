<script
  lang="ts"
>
  import Hero from './Hero.svelte'

  import {
    fade,
    fly,
  } from 'svelte/transition'

  let visible =
    $state(
      false,
    )

  const onSomeThingHappened =
    (
      someEvent: any,
      ...args: any
    ) => {
      visible =
        !visible
    }

  import { blurs } from '$lib/states/bgBlur.svelte'
  import type { Attachment } from 'svelte/attachments'

  const chnageBgBlur: Attachment =
    () => {
      $blurs =
        [
          {
            position:
              {
                top: -10,
                left: -20,
              },
            size: {
              height: 40,
              width: 40,
            },
            color:
              '--color-helper-yellow',
            animation:
              'up-down',
          },
          {
            position:
              {
                top: 40,
                left: 70,
              },
            size: {
              height: 40,
              width: 40,
            },
            color:
              '--color-helper-green',
            animation:
              'down-up',
          },
          {
            position:
              {
                top: 90,
                left: -20,
              },
            size: {
              height: 40,
              width: 40,
            },
            color:
              '--color-helper-purple',
            animation:
              'up-down',
          },
        ]

      return () => {
        $blurs =
          []
      }
    }
</script>

<span
  style:display="none"
  {@attach chnageBgBlur}
>
</span>
<Hero
/>

<span
  class="block h-screen w-full bg-pink-300"
  {onSomeThingHappened}
>
  {#if visible}
    <h1
      in:fly={{
        y: 200,
      }}
      out:fade
    >
      hi
    </h1>
  {/if}
</span>
