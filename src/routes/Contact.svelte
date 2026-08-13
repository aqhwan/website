<script>
  import A from '$lib/components/A.svelte'
  import TextMovingOnYAxisOnScroll from '$lib/components/TextMovingOnYAxisOnScroll.svelte'

  import {_} from 'svelte-i18n'

  const contactOptions =
    [
      {
        name: 'email',
        value:
          $_(
            'home.contact.email',
          ),
        protocol:
          'mailto:',
      },
      {
        name: 'discord',
        value:
          $_(
            'home.contact.discord',
          ),
        protocol:
          'https://',
      },
      {
        name: 'telegram',
        value:
          $_(
            'home.contact.telegram',
          ),
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
