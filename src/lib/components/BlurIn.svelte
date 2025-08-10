<script
  lang="ts"
>
  //FIXME: just replace svelte-motion with motion import { Motion, AnimatePresence, useAnimation } from "svelte-motion";
  import { inview } from 'svelte-inview'

  const {
    duration = 0.4,
    delay = 0,
    yOffset = 6,
    inViewMargin = '-50px',
    blur = '6px',
    id = crypto
      .randomUUID()
      .slice(
        0,
        8,
      ),
    once = false,
    className:
      style = '',
    children,
  } = $props()

  let defaultVariants =
    {
      hidden:
        {
          opacity: 0,
          y: yOffset,
          filter: `blur(${blur})`,
        },
      visible:
        {
          opacity: 1,
          y: 0,
          filter: `blur(0px)`,
        },
    }

  let isInView =
    $state(
      'hidden',
    )
</script>

<AnimatePresence
  let:item
  list={[
    {
      key: id,
    },
  ]}
>
  <Motion
    initial="hidden"
    animate={isInView}
    exit="hidden"
    variants={defaultVariants}
    transition={{
      delay:
        0.04
        + delay,
      duration,
      ease: 'easeOut',
    }}
    let:motion
  >
    <div
      use:inview={{
        rootMargin:
          inViewMargin,
        unobserveOnEnter:
          once,
      }}
      use:motion
      oninview_change={({
        detail,
      }: any) => {
        isInView =
          detail.inView
            ? 'visible'
            : 'hidden'
      }}
      class={style}
    >
      {@render children()}
    </div>
  </Motion>
</AnimatePresence>
