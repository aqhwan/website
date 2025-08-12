<script
>
  import TextMovingOnYAxisOnScroll from '$lib/components/TextMovingOnYAxisOnScroll.svelte'

  import { _ } from 'svelte-i18n'
</script>

{#snippet title()}
  <h1
  >
    {$_(
      'home.contact.title',
    )}
  </h1>
  <h2
  >
    <a
      href={'mailto:'
        + $_(
          'home.contact.email',
        )}
    >
      {$_(
        'home.contact.email',
      )}
    </a>
  </h2>
  <h2
  >
    <a
      href={'https://'
        + $_(
          'home.contact.discord',
        )}
    >
      {$_(
        'home.contact.discord',
      )}
    </a>
  </h2>
  <h2
  >
    <a
      href={'https://'
        + $_(
          'home.contact.telegram',
        )}
    >
      {$_(
        'home.contact.telegram',
      )}
    </a>
  </h2>
{/snippet}

<TextMovingOnYAxisOnScroll
  children={title}
/>
