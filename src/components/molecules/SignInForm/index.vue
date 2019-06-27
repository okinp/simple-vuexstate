<template>
  <form class="sign-in-form">
    <h3>Please fill-in your details</h3>
    <Input :placeholder="'Enter your email'" ref="email"/>
    <Input :placeholder="'Enter your password'" password class="has-error" ref="password"/>
    <Button ref="button" :state="renderSubmitBtnTxt()"></Button>
  </form>
</template>

<script>
import { Machine, interpret } from "xstate";
import machineConfig from "src/machineConfig";
import machineOptions from "src/machineOptions";

import Button from "atoms/Button";
import Input from "atoms/Input";

const handleAuthentication = () => {
  console.log("user authenticated");
};

export default {
  name: "SignInForm",
  components: {
    Button,
    Input
  },
  data() {
    return {
      service: null
    };
  },
  methods: {
    init() {
      const emailInputRef = this.$refs.email.$el.firstChild;
      const passwordInputRef = this.$refs.password.$el.firstChild;
      const submitBtnRef = this.$refs.button.$el;
      const signInMachine = Machine(
        machineConfig,
        machineOptions(
          emailInputRef,
          passwordInputRef,
          submitBtnRef,
          handleAuthentication
        )
      );
      this.service = interpret(signInMachine).onTransition(state => {
        console.log(state.value);
      });
    },
    start() {
      try {
        this.service.start();
      } catch (e) {
        console.error("No service to start");
      }
    },
    send(action) {
      this.service.send(action);
    },
    renderSubmitBtnTxt() {
      if (!this.current) return;
      if (this.current.matches("dataEntry")) {
        return "submit info";
      }
      if (this.current.matches("awaitingResponse")) {
        return "cancel";
      }
      if (this.current.matches(`authService.error.communication`)) {
        return "retry";
      }
      return "sign in";
    }
  },
  computed: {
    current() {
      return (this.service || {}).state;
    }
  },
  mounted() {
    this.init();
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
  background-color: white;
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
