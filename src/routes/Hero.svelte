<script
  lang="ts"
>
  import Icon from '$lib/components/Icon.svelte'
  import WordRotate from '$lib/components/WordRotate.svelte'

  import { _ } from 'svelte-i18n'
</script>

<main
  id="hero"
  class="relative flex h-full w-full flex-col items-center justify-center"
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
