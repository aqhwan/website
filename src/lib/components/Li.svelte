<script
  lang="ts"
>
  import Icon from './Icon.svelte'

  let {
    children,
  } =
    $props()
</script>

<span
>
  <Icon
    icon="listDot.svg"
    size={{
      h: 1,
      w: 1,
    }}
  />

  {@render children()}
</span>
