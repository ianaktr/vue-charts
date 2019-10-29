<template>
  <div>
    <Highlight :language="language">{{ text }}</Highlight>
  </div>
</template>

<script>
import Highlight from 'vue-highlight-component'

export default {
  props: {
    language: {
      type: String,
      default: 'html'
    },
    text: String
  },
  components: {
    Highlight
  }
}
</script>
