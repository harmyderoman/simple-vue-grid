<template>
  <div :style="gridStyles">
    <slot></slot>
  </div>
</template>

<script>
  import BaseSimpleContainer from "../mixins/BaseSimpleContainer"

  export default {
    mixins: [BaseSimpleContainer],
    props: {
      columnWidth: {
        type: String,
        required: true
      },
      elasticColumns: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    computed: {
      gridStyles() {
        let columnWidth = ""
        if (this.elasticColumns) {
          columnWidth = `minmax(${this.columnWidth}, 1fr)`
        } else {
          columnWidth = this.columnWidth
        }

        return {
          "grid-template-columns": `repeat(auto-fit, ${columnWidth})`,
          ...this.basicStyles
        }
      }
    }
  }
</script>

<style scoped></style>
