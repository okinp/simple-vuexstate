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
.input {
  display: flex;
  flex-direction: column;
  height: 75px;
  > input {
    height: 54px;
    width: 100%;
    padding: 15px;
    font-size: 19px;
    border-radius: 10px;
    border-color: $battleship-gray-opacity;
    border-style: solid;
  }
  > span {
    font-size: 0.8rem;
    margin-top: 5px;
    color: $red-error;
    display: none;
    margin-left: 10px;
  }
}

.has-error {
  > input {
    border-color: $red-error-opacity;
  }
  span {
    display: initial;
  }
}
</style>
