const MOBILE_WIDTH = 480

const responsivePass =
  (
    innerWidth: number,
    onLargeScreen: any,
    onSmallScreen: any,
  ) => {
    if (
      innerWidth
      >= MOBILE_WIDTH
    ) {
      return onLargeScreen
    } else {
      return onSmallScreen
    }
  }

export default responsivePass
