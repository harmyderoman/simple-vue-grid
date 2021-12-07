import { ref, onMounted, onUnmounted, computed } from "vue"

const windowWidth = ref(window.innerWidth)
const defaultBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}
const breakpoints = {}

export const useWindowWidth = function(outsideSetup = false) {
  function getWindowWidth() {
    windowWidth.value = window.innerWidth
  }
  if (!outsideSetup) {
    onMounted(() => {
      window.onresize = getWindowWidth
    })

    onUnmounted(() => {
      window.removeEventListener("onresize", getWindowWidth)
    })
  }
  const breakpoint = computed(() => {
    let result
    for (let point in breakpoints) {
      if (breakpoints[point] <= windowWidth.value) {
        result = point
      }
    }

    return result
  })
  const setBreakpoints = function(newBreakpoints) {
    for (const point in defaultBreakpoints) {
      if (Object.prototype.hasOwnProperty.call(newBreakpoints, point)) {
        breakpoints[point] = parseInt(newBreakpoints[point], 10)
      } else {
        breakpoints[point] = defaultBreakpoints[point]
      }
    }
  }

  return { windowWidth, breakpoint, setBreakpoints }
}
