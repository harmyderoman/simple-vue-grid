<template>
  <div :style="gridStyles">
    <slot></slot>
  </div>
</template>

<script>
  import BaseSimpleContainer from "../mixins/BaseSimpleContainer"
  import { ref, provide, computed, onMounted, getCurrentInstance } from "vue"

  export default {
    mixins: [BaseSimpleContainer],
    props: {
      cols: String,
      rows: String,
      xsCols: String,
      xsRows: String,
      smCols: String,
      smRows: String,
      mdCols: String,
      mdRows: String,
      lgCols: String,
      lgRows: String,
      xlCols: String,
      xlRows: String,
      xxlCols: String,
      xxlRows: String
    },
    setup() {
      const app = getCurrentInstance()
      const breakpoints =
        app.appContext.config.globalProperties.$vueGrid.breakpoints

      const windowWidth = ref(window.innerWidth)
      onMounted(() => {
        window.onresize = () => {
          windowWidth.value = window.innerWidth
        }
      })
      const breakpoint = computed(() => {
        let result
        const Points = breakpoints
        for (let point in Points) {
          if (Points[point] <= windowWidth.value) {
            result = point
          }
        }

        return result
      })
      provide("currentBreakpoint", breakpoint)

      return {
        breakpoint
      }
    },
    computed: {
      gridStyles() {
        return {
          ...this.basicStyles,
          "grid-template-columns": this.colsSchema,
          "grid-template-rows": this.rowsSchema
        }
      },
      colsSchema() {
        const SizeSchema = eval(`this.${this.breakpoint}Cols`)
        if (SizeSchema) {
          return SizeSchema
        } else if (this.cols) {
          return this.cols
        } else {
          return "auto"
        }
      },
      rowsSchema() {
        const RowsSchema = eval(`this.${this.breakpoint}Rows`)
        if (RowsSchema) {
          return RowsSchema
        } else if (this.cols) {
          return this.cols
        } else {
          return "auto"
        }
      }
    }
  }
</script>

<style scoped></style>
