<script setup lang="ts">

interface ExtendedWindow extends Window {
  notification: unknown;
}
// import { ref } from 'vue';
// import type { Todo, Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';

// const todos = ref<Todo[]>([
//   {
//     id: 1,
//     content: 'ct1'
//   },
//   {
//     id: 2,
//     content: 'ct2'
//   },
//   {
//     id: 3,
//     content: 'ct3'
//   },
//   {
//     id: 4,
//     content: 'ct4'
//   },
//   {
//     id: 5,
//     content: 'ct5'
//   }
// ]);

// const meta = ref<Meta>({
//   totalCount: 1200
// });
// = {
//   show: (msg: string) => {
//     console.log(msg);
//   }
// };

(
  (window as unknown as ExtendedWindow).notification as
  {
    show: (title: string, message: string) => void
  }
).show('Hello', 'World');

</script>
<template>
  <q-page class="row items-center justify-evenly">
    <!-- <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component> -->
    <!-- <div class="grid grid-cols-12 gap-4">
      <div v-for="i in 12" :key="i">
        {{ i }}
      </div>
    </div> -->
  </q-page>
</template>
