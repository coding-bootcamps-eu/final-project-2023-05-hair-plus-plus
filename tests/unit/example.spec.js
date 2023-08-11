import { mount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";
import router from "@/router";

const localVue = createLocalVue();
localVue.use(VueRouter);

test("App should render default route", () => {
  const wrapper = mount(App, {
    localVue,
    router,
  });
  expect(wrapper.text()).toMatch(`Welcome to Your Vue.js App`);
});
