<script
  lang="ts">
  import type {PageProps} from './$types'

  let {
    data,
  }: PageProps =
    $props()

  const toTitleCase =
    (
      word: string,
    ) => {
      if (
        word.length
        == 0
      )
        return
      return (
        word[0].toUpperCase()
        + word
          .substring(
            1,
          )
          .toLowerCase()
      )
    }
</script>

<main
  style:direction="ltr"
  class="mt-10 mb-10">
  <h2>
    {toTitleCase(
      data.appName,
    )}'s
    Privacy
    Polity:
  </h2>
  <h3>
    In
    The
    Name
    Of
    Allah
  </h3>
  <br />
  {@html data.content}
</main>
