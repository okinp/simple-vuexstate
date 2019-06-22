<template>
  <form class="sign-in-form">
    <h3>Please fill-in your details</h3>
    <Input :placeholder="'Enter your email'"/>
    <Input :placeholder="'Enter your password'" password class="has-error"/>
    <Button>Join</Button>
  </form>
</template>

<script>
import Button from "atoms/Button";
import Input from "atoms/Input";
export default {
  name: "SignInForm",
  components: {
    Button,
    Input
  }
};
</script>

<style lang="scss" scoped>
@import "~scss/variables";
@import "~scss/global";
$border-height: 0.4rem;
$border-radius: 0.4rem;
form {
  width: 40rem;
  height: 40rem;
  padding: 4rem;
  margin: 5rem;
  border-radius: $border-radius;
  box-shadow: rgba(0, 0, 0, 0.13) 0 0.2rem 0.4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  > h3 {
    margin-bottom: 3rem;
    font-weight: 700;
    color: $battleship-gray;
    text-align: center;
  }
  .input:nth-of-type(2) {
    margin-bottom: 4rem;
  }
  &::after,
  &::before {
    content: "";
    background-color: $blue;
    position: absolute;
    width: 100%;
    height: $border-height;
  }
  &::before {
    left: 0;
    top: 0;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }
  &::after {
    left: 0;
    bottom: 0;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
}
</style>
