import {
  writable,
  type Writable,
} from 'svelte/store'

export let blurs: Writable<
  {
    position: {
      top: number
      left: number
    }
    size: {
      height: number
      width: number
    }
    color: string
    animation?:
      | string
      | null
  }[]
> =
  writable(
    [
      {
        position:
          {
            top: 0,
            left: 0,
          },
        size: {
          height: 40,
          width: 40,
        },
        color:
          '--color-helper-yellow',
        animation:
          'animate-up-down-2',
      },
    ],
  )
