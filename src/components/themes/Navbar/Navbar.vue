<script setup lang="ts">
import menu from "./menu";
import NavbarNavList from "./NavbarNavList.vue";
</script>
<template>
  <Nav class="main-Navbar Navbar-dark-primary elevation-4">
   
    <div class="Navbar">
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-Navbar "
          data-widget="treeview"
          data-accordion="false"
        >
          <NavbarNavList v-for="item in menu" :data="item" />
        </ul>
      </nav>
    </div>
  </Nav>
</template>


<style>

</style>