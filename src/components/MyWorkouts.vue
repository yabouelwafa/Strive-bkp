<template>
  <v-container>
    <v-card-title class="" align="center">My Workouts</v-card-title>
    <div
      v-for="workout of workouts"
      :key="workout.id"
      class="my-2"
      style="width: 100%; height: 80px"
    >
      <v-sheet outlined color="primary" rounded class="my-6">
        <v-card height="90px" block outlined color="">
          <h3 class="pl-6 pt-7">{{ workout.x }}</h3>
        </v-card>
      </v-sheet>
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
