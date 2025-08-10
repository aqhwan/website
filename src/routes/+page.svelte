<script
  lang="ts"
>
  import Hero from './Hero.svelte'

  import type { Attachment } from 'svelte/attachments'
  import Features from './Features.svelte'

  import { blurs } from '$lib/states/bgBlur.svelte'

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
            time: 20,
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
            time: 60,
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
            time: 20,
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
          {}
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
<Features
/>
