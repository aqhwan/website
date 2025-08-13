<script
  lang="ts">
  import ProductCard from './ProductCard.svelte'

  import {_} from 'svelte-i18n'

  import {blurs} from '$lib/states/bgBlur.svelte'

  import type {Attachment} from 'svelte/attachments'
  const chnageBgBlur: Attachment =
    () => {
      $blurs =
        [
          {
            position:
              {
                top: 30,
                left: 70,
              },
            time: 60,
            size: {
              height: 30,
              width: 30,
            },
            color:
              '--color-helper-yellow',
            animation:
              'down-up',
          },
          {
            position:
              {
                top: 80,
                left: 50,
              },
            time: 20,
            size: {
              height: 40,
              width: 40,
            },
            color:
              '--color-helper-green',
            animation:
              'up-down',
          },
        ]

      return () => {
        $blurs =
          []
      }
    }

  const t: any =
    _
</script>

<section
  class="mt-10 flex min-h-screen w-full flex-row flex-wrap items-start justify-start gap-8"
  {@attach chnageBgBlur}>
  {#each $t('products') as product}
    <ProductCard
      {...product} />
  {/each}
</section>
