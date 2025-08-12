<script
  lang="ts">
  import Icon from './Icon.svelte'

  let {
    children,
    style,
  }: {
    children: any
    style?: string
  } =
    $props()
</script>

<span
  class={style}>
  <Icon
    icon="listDot.svg"
    size={{
      h: 1,
      w: 1,
    }} />

  {@render children()}
</span>
