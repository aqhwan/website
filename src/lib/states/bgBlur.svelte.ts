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
    time: number
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
    [],
  )
