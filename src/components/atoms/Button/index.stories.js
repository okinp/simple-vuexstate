import { storiesOf } from "@storybook/vue";

import Button from ".";

storiesOf("Atoms/Buttons", module)
  .add("Button", () => ({
    components: { Button },
    template: "<Button />"
  }))
  .add("Button Disabled", () => ({
    components: { Button },
    template: "<Button disabled />"
  }))
  .add("Button Round", () => ({
    components: { Button },
    template: `<Button round> + </Button>`
  }))
  .add("Button Round Disabled", () => ({
    components: { Button },
    template: `<Button round disabled> + </Button>`
  }));
