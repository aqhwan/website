<script>
  import {_} from 'svelte-i18n'
  const content =
    [
      'contact',
      'team',
      'faq',
      'privacy',
    ]
</script>

<header
  class="flex min-h-screen flex-col p-8">
  <section
    class="flex flex-col items-center justify-center gap-4 p-8 md:flex-row-reverse">
    <div>
      <img
        src="./static/icons/arrowDown.svg"
        alt="logo"
        class="h-32 w-32" />
    </div>
    <div>
      <p>
        <strong
          class="inline"
          >{$_(
            `about.title`,
          )}</strong
        >{$_(
          'about.description',
        )}
      </p>
    </div>
  </section>
  <section
    class="flex flex-col gap-4">
    <div>
      {#each content as item}
        <p
          class="gap-4 p-8">
          <strong
            class="inline"
            >{$_(
              `${item}.title`,
            )}</strong
          >{$_(
            `${item}.description`,
          )}
        </p>
      {/each}
    </div>
  </section>
</header>
