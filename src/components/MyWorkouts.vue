<template>
  <v-container>
    <h1 align="center">My Workouts</h1>
    <div
      v-for="workout of workouts"
      :key="workout.id"
      class="my-2"
      style="width: 100%; height: 80px"
    >
      <v-text-field
        dark
        outlined
        block
        height="90px"
        v-model="workout.x"
        :label="workout.x"
        class="my-10"
      />
    </div>
    <v-btn class="mt-16" color="accent" rounded block @click="addWorkout()"
      >+</v-btn
    >
  </v-container>
</template>
<script>
export default {
  data: () => ({
    workouts: [],
  }),
  methods: {
    addWorkout() {
      this.workouts.push({
        id: "#" + this.workouts.length,
        x: "Workout-" + this.workouts.length,
      });
    },
  },
};
</script>
