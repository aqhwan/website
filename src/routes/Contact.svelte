<script>
  import A from '$lib/components/A.svelte'
  import TextMovingOnYAxisOnScroll from '$lib/components/TextMovingOnYAxisOnScroll.svelte'

  import {_} from 'svelte-i18n'

  const contactOptions =
    [
      {
        name: 'email',
        value:
          'some@mail.thing',
        protocol:
          'mailto:',
      },
      {
        name: 'discord',
        value:
          'discord.gg/acountNoExistYet',
        protocol:
          'https://',
      },
      {
        name: 'telegram',
        value:
          't.me/acountNoExistYet',
        protocol:
          'https://',
      },
    ]
</script>

{#snippet title()}
  <h1>
    {$_(
      'home.contact.title',
    )}
  </h1>
  {#each contactOptions as { name, value, protocol }}
    <h2>
      <A
        href={protocol
          + value}>
        {value}
      </A>
    </h2>
  {/each}
{/snippet}

<TextMovingOnYAxisOnScroll
  children={title} />
