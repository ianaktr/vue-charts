<template>
  <div class="collpase-block">
    <div>
      <button
        @click="triggerContent"
        class="collapse-btn btn"
        :class="{open: isOpen}"
      >
        {{ collapseTitle }}
        <span class="icon-angle-right"></span>
      </button>
    </div>

    <transition name="expand">
      <div class="collapse-wrapper" v-show="isOpen">
        <div class="collapse-content">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    collapseTitle: String
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    triggerContent() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss">
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s;
  height: 500px;
}
.expand-enter,
.expand-leave-to {
  height: 0px;
}

.collapse-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 17px;
  border-radius: 0px;
  border: 4px solid #f6f6f6;

  span {
    font-size: 20px;
    transition: transform 0.5s;
  }

  &.open {
    span {
      transform: rotate(90deg);
    }
  }
}
.collapse-wrapper {
  overflow: hidden;
}

.collapse-content {
  overflow: auto;
  height: 500px;
  padding: 10px 15px;
  background: #f6f6f6;
}
</style>
