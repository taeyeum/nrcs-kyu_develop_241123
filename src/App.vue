<script setup lang="ts">
// import { onMounted } from "vue";
import {
  Header,
  Navbar,
  Footer,
  Content,
  removeWindowClass,
  calculateWindowSize,
  addWindowClass
} from "./components";
import { ModalsContainer } from 'vue-final-modal'
import { useTheme } from "./stores";
import { watch } from "vue";

const store = useTheme();

let screenSize = calculateWindowSize(window.innerWidth);
watch([() => store.getTheme().menuNavbarCollapsed, () => screenSize], () => {
  removeWindowClass("Navbar-closed");
  removeWindowClass("Navbar-collapse");
  removeWindowClass("Navbar-open");
  if (store.getTheme().menuNavbarCollapsed && screenSize === "lg") {
    addWindowClass("Navbar-collapse");
  } else if (store.getTheme().menuNavbarCollapsed && screenSize === "xs") {
    addWindowClass("Navbar-open");
  } else if (!store.getTheme().menuNavbarCollapsed && screenSize !== "lg") {
    addWindowClass("Navbar-closed");
    addWindowClass("Navbar-collapse");
  }
});
</script>

<template>
  <Header v-if="store.getTheme().handleHeader" />
  <Navbar v-if="store.getTheme().handleNavbar" />
  <Content v-if="store.getTheme().handleContent" />
  <Footer v-if="store.getTheme().handleFooter" />
  <ModalsContainer />
  
</template>
