<template>
  <component :is="tag" :style="itemStyles">
    <slot></slot>
  </component>
</template>

<script>
  import { useWindowWidth } from "@/store"

  export default {
    props: {
      tag: {
        type: String,
        required: false,
        default: "div"
      },
      startColumn: {
        type: String,
        required: false
      },
      columnSpan: {
        type: String,
        required: false
      },
      startRow: {
        type: String,
        required: false
      },
      rowSpan: {
        type: String,
        required: false
      },
      xsCol: String,
      xsRow: String,
      smCol: String,
      smRow: String,
      mdCol: String,
      mdRow: String,
      lgCol: String,
      lgRow: String,
      xlCol: String,
      xlRow: String,
      xxlCol: String,
      xxlRow: String
    },
    setup() {
      const { breakpoint } = useWindowWidth()

      return {
        breakpoint
      }
    },
    // inject: ["currentBreakpoint"],
    computed: {
      col() {
        const col = eval(`this.${this.breakpoint}Col`)

        return col ? col : false
      },
      row() {
        const row = eval(`this.${this.breakpoint}Row`)

        return row ? row : false
      },
      columnStyles() {
        if (this.col) {
          return {
            "grid-column": `${this.col} / span ${this.columnSpan}`
          }
        } else if (this.startColumn) {
          return {
            "grid-column": `${this.startColumn} / span ${this.columnSpan}`
          }
        }
        return ""
      },
      rowStyles() {
        if (this.row) {
          return {
            "grid-row": `${this.row} / span ${this.rowSpan}`
          }
        }
        if (this.startRow) {
          return {
            "grid-row": `${this.startRow} / span ${this.rowSpan}`
          }
        }
        return ""
      },
      itemStyles() {
        return {
          ...this.columnStyles,
          ...this.rowStyles
        }
      }
    }
  }
</script>
