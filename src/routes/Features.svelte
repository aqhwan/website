<script
  lang="ts"
>
  import FullScreenTitleFly from '$lib/components/FullScreenTitleFly.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import Li from '$lib/components/Li.svelte'

  import rp from '$lib/utils/responsivePass.svelte'

  import { _ } from 'svelte-i18n'

  let windowWidth: number =
    $state(
      0,
    )
</script>

<svelte:window
  bind:innerWidth={
    windowWidth
  }
/>

{#snippet title()}
  {$_(
    'home.features.title',
  )}
{/snippet}

<FullScreenTitleFly
  {title}
/>

<section
  class="flex h-screen w-full flex-row items-center justify-between not-md:h-fit not-md:flex-col-reverse"
>
  <div
    id="left"
    class="flex h-full flex-col items-center justify-start not-md:mb-50 not-md:w-full md:w-1/2"
  >
    <span
    >
      <h2
        class="inline-block"
      >
        {$_(
          'home.features.left.title.first_part',
        )}
      </h2>
      <mark
        class="pallet-colored-font! inline-block"
      >
        {$_(
          'home.features.left.title.highlight',
        )}
      </mark>
    </span>
    {#each $_('home.features.left.features_list') as feature}
      {#snippet featureText()}
        {feature}
      {/snippet}
      <Li
        children={featureText}
      />
    {/each}

    <span
      class="relative flex h-1/3 w-full flex-col items-center justify-center"
    >
      <span
        class="relative h-15 w-full not-md:h-7"
      >
        <Icon
          icon="lightLines.svg"
          size={{
            h: rp(
              windowWidth,
              4,
              2,
            ),
            w: rp(
              windowWidth,
              4,
              2,
            ),
          }}
          style="absolute right-[30%]"
        />
      </span>
      <strong
        class="text-center text-wrap"
      >
        {$_(
          'home.features.left.clean_app',
        )}
      </strong>
      <span
        class="relative h-fit w-full"
      >
        <Icon
          icon="stars.svg"
          size={{
            h: rp(
              windowWidth,
              4,
              2,
            ),
            w: rp(
              windowWidth,
              4,
              2,
            ),
          }}
          style="absolute left-[30%]"
        />
      </span>
    </span>
  </div>

  <div
    id="right"
    class="flex h-full w-1/2 flex-col items-center justify-center"
  ></div>
</section>
