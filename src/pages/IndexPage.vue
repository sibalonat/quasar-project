<script setup lang="ts">

interface ExtendedWindow extends Window {
  notification: {
    show: (title: string, message: string) => void;
  };
}
(window as unknown as ExtendedWindow).notification.show('Hello', 'World');

</script>
<template>
  <q-page class="row items-center justify-evenly">
  </q-page>
</template>
