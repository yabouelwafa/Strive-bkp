<template>
  <v-container>
    <h1 align="center">Workouts</h1>

    <v-expansion-panels focusable>
      <Exercise
        v-for="exercise in exercises"
        :key="exercise.name"
        :exercise="exercise"
      />
    </v-expansion-panels>
  </v-container>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

import Exercise from "./Exercise.vue";
export default {
  data: () => ({
    exercises: [],
  }),
  methods: {
    async getExercises() {
      const querySnapshot = await getDocs(collection(db, "exercises"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.exercises.push(doc.data());
      });
    },
  },
  components: {
    Exercise,
  },
  mounted() {
    this.getExercises();
  },
};
</script>
