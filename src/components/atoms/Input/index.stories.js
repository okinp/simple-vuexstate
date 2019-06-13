import { storiesOf } from "@storybook/vue";

import Input from ".";

storiesOf("Atoms/Inputs", module)
  .add("Input", () => ({
    components: { Input },
    template: "<Input />"
  }))
  .add("Input with error", () => ({
    components: { Input },
    template: "<Input class='has-error' />"
  }));
