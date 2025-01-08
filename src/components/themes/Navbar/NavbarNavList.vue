<script setup lang="ts">
import { ref } from "vue";
import { Menu } from "./menu";
import NavbarNavList from "./NavbarNavList.vue";

interface Props {
  data: Menu;
  submenu?: any;
  clicked?: any;
  active?: any;
  handleExpand?: any;
  expand?: any;
  navheader?: any;
}

defineProps<Props>();

const isMenuExtended = ref(false);
const isExpandable = ref(true);

const handleMainMenuAction = () => {
  if (isExpandable.value) {
    toggleMenu();
    return;
  }
};

const toggleMenu = () => {
  isMenuExtended.value = !isMenuExtended.value;
};
</script>

<template>
  
    <ul className="nav nav-treeview" v-if="data.children?.length">
      <NavbarNavList
        v-for="item in data.children"
        :data="item"
        submenu="active"
      />
    </ul>

</template>
