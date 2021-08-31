import SimpleGridContainer from "./components/SimpleGridContainer"
import SimpleLayoutContainer from "./components/SimpleLayoutContainer"
import SimpleGridItem from "./components/SimpleGridItem"
import { useWindowWidth } from "@/store"

const SimpleVueGrid = {
  /**
   * @param app
   * @param options options could contain breakpoints property, for changing default breakpoints
   */
  install: (app, options) => {
    const { setBreakpoints } = useWindowWidth(true)
    setBreakpoints(options.breakpoints)

    app.component("simple-grid-container", SimpleGridContainer)
    app.component("simple-layout-container", SimpleLayoutContainer)
    app.component("simple-grid-item", SimpleGridItem)
  }
}

export default SimpleVueGrid
