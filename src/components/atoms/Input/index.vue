<template>
  <div class="input">
    <input :placeholder="placeholder" :type="password ? 'password' : ''">
    <span>{{ errorMsg }}</span>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    errorMsg: {
      type: String,
      default: "Please fix the error"
    },
    placeholder: {
      type: String,
      default: ""
    },
    password: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~scss/variables";
@import "~scss/global";
.input {
  display: flex;
  flex-direction: column;
  height: 5rem;
  margin-bottom: 1.5rem;
  > input {
    height: 100%;
    width: 100%;
    padding: 1.5rem;
    font-size: 1.5rem;
    border-radius: 0.4rem;
    border-color: $battleship-gray-opacity;
    border-width: 0.1rem;
    border-style: solid;
    &:focus {
      border-color: $blue;
    }
  }
  > span {
    font-size: 1.2rem;
    line-height: 1;
    font-weight: 500;
    margin-top: 0.3rem;
    color: $battleship-gray-opacity;
    display: none;
    margin-left: 0.4rem;
  }
}

.has-error {
  > input:not(:focus) {
    border-color: $red-error-opacity;
  }
  > input:not(:focus) + span {
    color: $red-error-opacity;
  }
  span {
    display: initial;
  }
}
</style>
