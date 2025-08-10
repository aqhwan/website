import {
  animate,
  scroll,
} from 'motion'

import type { Action } from 'svelte/action'

const goUpOnScroll: Action =
  (
    node: HTMLElement,
  ) => {
    scroll(
      animate(
        node,
        {
          transform:
            [
              'translateY(-300%)',
            ],
        },
        {
          ease: 'easeInOut',
        },
      ),
    )

    return {
      destroy() {},
    }
  }

export default goUpOnScroll
