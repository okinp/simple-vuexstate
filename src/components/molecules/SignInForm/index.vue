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
form {
  width: 400px;
  height: 400px;
  padding: 40px;
  margin: 50px;
  border-radius: 5px;
  box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  > h3 {
    margin-bottom: 30px;
    font-weight: 700;
    color: $gunmetal;
  }
  .input:nth-of-type(2) {
    margin-bottom: 40px;
  }
}
</style>
