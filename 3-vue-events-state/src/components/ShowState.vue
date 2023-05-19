<script setup lang="ts">
import { reactive, ref } from "vue";

interface IPerson {
  name: string;
  age: number;
}

// let state: IPerson = reactive({ name: "Sebastian", age: 43 });

// const changeName = () => {
//   state.name = "Hanna";
// };

// let state2 = ref<IPerson>({ name: "Hanna", age: 43 });
// const changePersonWithRef = () => {
//   state2.value.name = "Alvar";
// };

// interface IListOfPersons {
//   persons: IPerson[];
// }

// let listOfPersons: IListOfPersons = reactive({
//   persons: [
//     { name: "Sebastian", age: 43 },
//     { name: "Hanna", age: 43 },
//   ],
// });

let listOfPersons = ref<IPerson[]>([
  { name: "Sebastian", age: 43 },
  { name: "Hanna", age: 43 },
]);

const remove = (name: string) => {
  listOfPersons.value = listOfPersons.value.filter(
    (person) => person.name !== name
  );
};

const userInput = ref("");

const handleInput = (e: Event) => {
  const theInput = e.target as HTMLInputElement;
  userInput.value = theInput.value;
};

const handleSubmit = () => {
  console.log(userInput.value);
};
</script>

<template>
  <div>
    <!-- <p @click="changeName">{{ state.name }}</p>
    <p @click="changePersonWithRef">{{ state2.name }}</p> -->

    <div v-for="person in listOfPersons">
      <p>{{ person.name }}</p>
      <button @click="() => remove(person.name)">Ta bort</button>
    </div>

    <form @submit.prevent="handleSubmit">
      <input type="text" :value="userInput" @input="handleInput" />
      <p>{{ userInput }}</p>
    </form>
  </div>
</template>

<style scoped></style>
