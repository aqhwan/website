<script
  lang="ts">
  import FullScreenTitleFly from '$lib/components/FullScreenTitleFly.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import Li from '$lib/components/Li.svelte'

  import rp from '$lib/utils/responsivePass.svelte'

  import {_} from 'svelte-i18n'

  // declare that _() can return any type (array in this case)
  const t: any =
    _

  let windowWidth: number =
    $state(
      0,
    )
</script>

<svelte:window
  bind:innerWidth={
    windowWidth
  } />

{#snippet title()}
  {$_(
    'home.features.title',
  )}
{/snippet}

<FullScreenTitleFly
  {title} />

<section
  class="flex h-[80vh] w-full flex-row items-center justify-between not-md:h-fit not-md:flex-col-reverse not-md:gap-10">
  <div
    id="left"
    class="flex h-full flex-col justify-start not-md:mb-50 not-md:w-full not-md:items-center md:w-1/2 md:items-start">
    <span>
      <h2
        class="inline-block">
        {$_(
          'home.features.left.title.first_part',
        )}
      </h2>
      <mark
        class="pallet-colored-font! inline-block">
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
        children={featureText} />
    {/each}

    <span
      class="relative flex h-1/3 flex-col items-center justify-center not-md:w-full md:w-fit">
      <span
        class="relative h-15 w-full not-md:h-7">
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
          style="absolute right-[0%] animate-pulse" />
      </span>
      <strong
        class="text-center text-wrap">
        {$_(
          'home.features.left.clean_app',
        )}
      </strong>
      <span
        class="relative h-fit w-full">
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
          style="absolute left-[20%]" />
      </span>
    </span>
  </div>

  <div
    id="right"
    class="relative flex h-full flex-col items-center justify-center gap-5 not-md:w-full md:w-1/2">
    <!-- @ts-ignore -->
    {#each $t('home.features.right.features_list') as { body, direction, image }, index}
      <div
        class="a-feature relative flex h-1/3 w-full items-center justify-between gap-10 {direction
        == 'right'
          ? 'flex-row-reverse'
          : 'flex-row'}">
        <span
          class="flex h-full w-2/3! flex-row items-start justify-between gap-2">
          <mark
            class="pallet-colored-font! -translate-y-6"
            >{index
              + 1}</mark>
          <span
            class="h-full overflow-scroll">
            {body}
          </span>
        </span>
        <img
          src={image}
          alt=""
          class="mx-2 w-auto max-w-1/3" />
      </div>
    {/each}
  </div>
</section>
