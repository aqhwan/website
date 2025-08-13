<script
  lang="ts">
  import {_} from 'svelte-i18n'

  const t: any =
    _

  import type {Attachment} from 'svelte/attachments'

  import {blurs} from '$lib/states/bgBlur.svelte'

  const chnageBgBlur: Attachment =
    () => {
      $blurs =
        [
          {
            position:
              {
                top: 10,
                left: 70,
              },
            time: 60,
            size: {
              height: 30,
              width: 30,
            },
            color:
              '--color-helper-green',
            animation:
              'down-up',
          },
          {
            position:
              {
                top: 80,
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
          []
      }
    }
</script>

<section
  id="about-container"
  class="mb-40 flex min-h-screen w-full flex-col"
  {@attach chnageBgBlur}>
  <section
    id="about-header"
    class="relative mt-10 flex flex-col items-center justify-center gap-4 md:flex-row-reverse">
    <div
      class="not-md:w-full md:w-1/2">
      <img
        src="/images/logo/subLogo.svg"
        alt="logo"
        class="w-full" />
    </div>
    <div
      class="not-md:w-full md:w-1/2">
      <p>
        <strong
          class="inline"
          >{$_(
            `about.header.title`,
          )}</strong
        >{$_(
          'about.header.body',
        )}
      </p>
    </div>
  </section>
  <section
    class="flex flex-col gap-4">
    {#each $t('about.sections') as section}
      <div>
        <h2
          class="inline">
          {section.title}
        </h2>
        <p
          class="inline">
          {section.body}
        </p>
      </div>
    {/each}
  </section>
</section>
