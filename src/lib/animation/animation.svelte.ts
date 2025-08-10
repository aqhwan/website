import {
  animate,
  scroll,
} from 'motion'
import type { Action } from 'svelte/action'

const goUpOnScroll: Action =
  (
    node: HTMLElement,
  ) => {
    $effect(
      () => {
        const animation =
          animate(
            node,
            {
              y: '-50%',
            },
            {
              duration: 0.5,
            },
          )

        // scroll(animation); //FIXME: not working

        return () => {}
      },
    )
  }

export { goUpOnScroll }
