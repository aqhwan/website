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
      // Set the container height to enable scrolling
      const container =
        node
          .parentElement
          ?.parentElement
      if (
        container
      ) {
        container.style.height = `${(node.children[0].children.length - 1) * 100}vh`
      }

      // Set up the horizontal scroll animation
      scroll(
        animate(
          node
            .children[0],
          {
            transform:
              [
                'none',
                `translateX(-${node.children[0].children.length}00vw)`,
              ],
          },
        ),
        {
          target:
            node.parentElement!,
        },
      )

      return {
        destroy() {},
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
