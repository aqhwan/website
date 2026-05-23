<script
  lang="ts">
  import Icon from './Icon.svelte'

  let {
    href,
    newTab = true,
    attributes,
    children,
  }: {
    href: string
    newTab?: boolean
    attributes?: any
    children?: any
  } =
    $props()
</script>

<a
  target={newTab ? '_blank' : undefined}
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
