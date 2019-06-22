<template>
  <button>
    <slot>Press Me</slot>
  </button>
</template>
<script>
export default {
  name: "Button"
};
</script>

<style lang="scss" scoped>
@import "~scss/variables";
@import "~scss/global";
button {
  cursor: pointer;
  background-color: $blue;
  color: white;
  font-size: 1.8rem;
  line-height: 1;
  font-weight: bold;
  height: 5rem;
  padding: 1.6rem 1.5rem;
  border: none;
  border-radius: 0.4rem;
  &:hover {
    background-color: darken($blue, 4%);
  }

  &[disabled] {
    background-color: rgba($blue, 0.6);
  }
  &[round] {
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
    padding: 0;
    font-size: 1.6rem;
    line-height: 1;
  }
}
</style>
