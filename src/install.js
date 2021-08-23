import SimpleGridContainer from "./components/SimpleGridContainer"
import SimpleLayoutContainer from "./components/SimpleLayoutContainer"
import SimpleGridItem from "./components/SimpleGridItem"

const defaultBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

const SimpleVueGrid = {
  /**
   * @param app
   * @param options
   */
  install: (app, options = { breakpoints: defaultBreakpoints }) => {
    /**
     * Configuration object of SimpleVueGrid plugin
     * @property { Object } $SimpleVueGrid
     */
    app.config.globalProperties.$SimpleVueGrid = {
      breakpoints: {}
    }
    let breakpointsConfig =
      app.config.globalProperties.$SimpleVueGrid.breakpoints

    for (const point in defaultBreakpoints) {
      if (Object.prototype.hasOwnProperty.call(options.breakpoints, point)) {
        breakpointsConfig[point] = parseInt(options.breakpoints[point], 10)
      } else {
        breakpointsConfig[point] = defaultBreakpoints[point]
      }
    }
    // config for old Vue version, it wiil change
    // to false by default in future
    app.config.unwrapInjectedRef = true

    app.component("simple-grid-container", SimpleGridContainer)
    app.component("simple-layout-container", SimpleLayoutContainer)
    app.component("simple-grid-item", SimpleGridItem)
  }
}

export default SimpleVueGrid
