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
button {
  cursor: pointer;
  background-color: $blue;
  color: white;
  font-size: 18px;
  font-weight: bold;
  height: 54px;
  padding: 5px 40px;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: darken($blue, 8%);
  }

  &[disabled] {
    background-color: $disabled-gray;
  }
  &[round] {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    padding: 0;
    font-size: 26px;
  }
}
</style>
