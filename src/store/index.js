import { ref, onMounted, computed } from "vue"

const windowWidth = ref(window.innerWidth)

let breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

export const useWindowWidth = function() {
  onMounted(() => {
    window.onresize = () => {
      windowWidth.value = window.innerWidth
    }
  })
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
    breakpoints = newBreakpoints
  }

  return { windowWidth, breakpoint, setBreakpoints }
}
