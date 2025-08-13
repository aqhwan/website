<script
  lang="ts">
  import Icon from './Icon.svelte'

  let {
    href,
    attributes,
    children,
  }: {
    href: string
    attributes?: any
    children?: any
  } =
    $props()
</script>

<a
  {...attributes}
  {href}>
  {@render children()}
  <Icon
    icon={'externalLink.svg'}
    size={{
      h: 1,
      w: 1,
    }} />
</a>
