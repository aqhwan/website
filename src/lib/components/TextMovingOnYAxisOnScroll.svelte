<script
  lang="ts">
  import {
    animate,
    scroll,
  } from 'motion'
  import type {Action} from 'svelte/action'

  let {
    children,
    style,
  }: {
    children: any
    style?: string
  } =
    $props()

  const goLeftOnScroll: Action =
    (
      node: HTMLElement,
    ) => {
      const container =
        node
          .parentElement
          ?.parentElement
      const track =
        node
          .children[0] as HTMLElement

      let stopScroll:
        | (() => void)
        | undefined

      const setup =
        () => {
          // tear down the previous scroll-linked animation before re-initializing,
          // otherwise switching language stacks a second competing listener
          stopScroll?.()

          if (
            container
          ) {
            container.style.height = `${(track.children.length - 1) * 100}vh`
          }

          const isRtl =
            document.documentElement.dir.toLowerCase()
            === 'rtl'
          const distance = `${track.children.length}00vw`

          stopScroll =
            scroll(
              animate(
                track,
                {
                  transform:
                    [
                      'none',
                      `translateX(${isRtl ? '' : '-'}${distance})`,
                    ],
                },
              ),
              {
                target:
                  node.parentElement!,
              },
            )
        }

      setup()

      // dir changes live when the user switches language (no page reload),
      // so re-run setup() whenever it does
      const observer =
        new MutationObserver(
          setup,
        )
      observer.observe(
        document.documentElement,
        {
          attributes: true,
          attributeFilter:
            [
              'dir',
            ],
        },
      )

      return {
        destroy() {
          stopScroll?.()
          observer.disconnect()
        },
      }
    }
</script>

<div
  id="horizontal-scroll-gallery"
  class="relative w-full {style} mt-40 not-md:mt-20">
  <div
    class="relative! h-full">
    <div
      use:goLeftOnScroll
      class="sticky top-1/2 h-fit overflow-hidden">
      <div
        class="flex items-center gap-40 text-nowrap">
        {@render children()}
      </div>
    </div>
  </div>
</div>
