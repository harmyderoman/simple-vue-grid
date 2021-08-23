/**
 * contain basic props and computed properties
 * that contain all containers in vue-grid plugin
 * @mixin BaseContainer
 * @param { boolean } inline prop that add css rule { display: inline-grid } to container.
 * @default false
 * @param { any } gap prop add gap between grid items. Could be one or two parameters.
 * @default none don't add this rule to styles
 */
export default {
  props: {
    gap: {
      type: String || Number,
      required: false
    },
    inline: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    /**
     * @property computed property that returns object of basic styles of grid container
     */
    basicStyles() {
      const gapStyle = {}
      if (this.gap) {
        gapStyle.gap = this.gap
      }

      return {
        display: this.inline ? "inline-grid" : "grid",
        ...gapStyle
      }
    },
    gridStyles() {
      return {
        ...this.basicStyles
      }
    }
  }
}
