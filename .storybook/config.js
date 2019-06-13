import { configure, addDecorator, addParameters } from "@storybook/vue";
import { themes } from "@storybook/theming";
import { withInfo, setDefaults } from "storybook-addon-vue-info";

import Vue from "vue";

import "scss/global.scss";

setDefaults({
  header: false
});

addDecorator(withInfo);

addParameters({
  options: {
    name: "Foo",
    theme: themes.light
  },
  backgrounds: [
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
    { name: "white", value: "#ffffff", default: true },
    { name: "snow", value: "#fffafa" },
    { name: "white ice", value: "#e1e7e4" },
    { name: "dark gray", value: "#C0C0C0" },
    { name: "search", value: "#f7f7f7" },
    { name: "footer gray", value: "#4d5357" },
    { name: "etable search gray", value: "#ebebeb" }
  ]
});

// Require all the .stories.js files from all components
const req = require.context("../src/components", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filePath => {
    return Vue.component(req(filePath));
  });
}

configure(loadStories, module);
