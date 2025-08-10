<script
  lang="ts"
>
  import Hr from '$lib/components/Hr.svelte'

  // TODO: add the links
  const socialMediaLinks =
    [
      {
        name: 'github',
        href: 'https://github.com/aqhwan',
      },
      {
        name: 'telegram',
        href: 'toPass',
      },
      {
        name: 'discord',
        href: 'toPass',
      },
    ]

  const websitePages =
    [
      'about',
      'products',
    ]
</script>

<footer
  class="flex h-fit w-full flex-col items-center justify-center"
>
  <section
    id="footer-links"
    class="flex h-fit w-full items-center not-md:flex-col not-md:justify-center not-md:gap-20 md:flex-row md:justify-around"
  >
    <ul
      id="footer-social-media-links"
      class="flex flex-col flex-wrap items-center gap-4"
    >
      {#each socialMediaLinks as { name, href }}
        <li
          id="footer-social-media-link-{name}"
        >
          <a
            {href}
            >{name}</a
          >
        </li>
      {/each}
    </ul>

    <img
      src="/images/logo/bothBlackAndWhiteFill.svg"
      alt="footer logo"
      class="object-cover not-md:order-3 not-lg:max-h-100 md:order-2"
    />

    <ul
      id="footer-pages-links"
      class="flex flex-col flex-wrap items-center gap-4 not-md:order-2 md:order-3"
    >
      {#each websitePages as page}
        <li
          id="footer-page-link-{page}"
        >
          <a
            href="/{page}"
            >{page}</a
          >
        </li>
      {/each}
    </ul>
  </section>

  <Hr
  />

  <section
    id="footer-copyright-and-notes"
    class="flex h-fit w-full items-center py-10 not-md:flex-col not-md:justify-center not-md:gap-3 md:flex-row md:justify-between"
  >
    <small
      >Copyright
      ©
      2025
      Aqhwan</small
    >
    <!-- TODO: use local -->
    <small
      >Copyright
      ©
      2025
      Aqhwan</small
    >
  </section>
</footer>
