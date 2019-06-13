import { storiesOf } from "@storybook/vue";

import SignInForm from ".";

storiesOf("Molecules/SignInForm", module).add("SignInForm", () => ({
  components: { SignInForm },
  template: "<SignInForm />"
}));
