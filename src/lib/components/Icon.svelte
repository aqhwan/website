<script
  lang="ts"
>
  let {
    icon,
    size,
    style,
  }: {
    icon: string
    size: {
      h: number
      w: number
    }
    style?: string
  } =
    $props()
</script>

<img
  src={'/icons/'
    + icon}
  alt="logo"
  class="inline-block {style}"
  style:width={`${size.w}rem`}
  style:height={`${size.h}rem`}
/>
