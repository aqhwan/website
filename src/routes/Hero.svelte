<script
  lang="ts"
>
  import Icon from '$lib/components/Icon.svelte'
  import WordRotate from '$lib/components/WordRotate.svelte'

  import { _ } from 'svelte-i18n'

  import BgBlur from '$lib/components/BgBlur.svelte'

  let blurs =
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
    ]
</script>

<div
  class="absolute inset-0 h-[200vh] w-full overflow-hidden"
>
  {#each blurs as blur}
    <BgBlur
      {...blur}
    />
  {/each}
</div>

<main
  id="hero"
  class="relative flex h-screen w-full flex-col items-center justify-center"
>
  <figure
    class="flex w-full flex-col items-center justify-end text-center md:flex-row md:justify-between"
  >
    <div
      id="left"
      class="not-sm:w-full sm:w-1/2"
    >
      <img
        src="/images/logo/both.png"
        alt="logo"
      />
      <!-- FIXME: use svg -->
    </div>
    <div
      id="right"
      class="not-sm:w-full sm:w-1/2"
    >
      <span
        class="text-clip sm:text-nowrap md:text-wrap lg:text-wrap"
      >
        <h2
        >
          {$_(
            'home.hero.title.we_do',
          )}
        </h2>
        <mark
          >{$_(
            'home.hero.title.highlight',
          )}</mark
        >
      </span>
      <br
      />
      <span
        class="text-clip not-sm:text-nowrap md:text-wrap lg:text-nowrap"
      >
        <h2
        >
          {$_(
            'home.hero.title.our_apps_are',
          )}
        </h2>
        <strong
          class="underline"
        >
          <WordRotate
            words={$_(
              'home.hero.title.features',
            )}
            duration={2000}
          />
        </strong>
      </span>
    </div>
  </figure>

  <span
    class="animate-fast-down-up-1 my-10"
  >
    <small
    >
      {$_(
        'home.hero.note.scroll_down',
      )}
      <Icon
        icon={'arrowDown.svg'}
        size={{
          h: 1,
          w: 1,
        }}
      />
    </small>
  </span>
</main>
