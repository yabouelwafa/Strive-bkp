<template>
  <v-container>
    <h1 class="title" align="center">My Workouts</h1>

    <!-- Workouts list -->
    <div
      v-for="workout of workouts"
      :key="workout.id"
      class="my-2"
      style="width: 100%; height: 80px"
    >
      <v-sheet outlined color="primary" rounded class="my-6">
        <v-card height="90px" block outlined color="" class="pa-6">
          <div class="d-flex flex-row">
            <h1>{{ workout.name }}</h1>
          </div>
        </v-card>
      </v-sheet>
    </div>

    <!-- Add new -->
    <v-card :loading="loading" v-if="showAdd" class="my-7" width="100%">
      <v-card-title>Add new workout</v-card-title>
      <v-card-text class="d-flex flex-row justify-center">
        <v-text-field label="Workout name" v-model="name" />
        <v-btn class="ml-7 mr-1 mt-4" @click="saveWorkout()">Save</v-btn>
      </v-card-text>
    </v-card>
    <v-btn
      v-else
      class="mt-16"
      color="accent"
      rounded
      block
      @click="addWorkout()"
      >+</v-btn
    >

    <v-snackbar
      width="750px"
      color="primary"
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  data: () => ({
    loading: false,
    showAdd: false,

    //Snackbar
    snackbar: false,

    text: "Workout added",
    timeout: 1500,

    name: "",
    workouts: [],
  }),
  computed: {
    workoutsCollectionName() {
      let email = this.$store.getters.getEmail;
      let collectionName = "Users/" + email + "/Workouts";
      return collectionName;
    },
  },
  mounted() {
    this.getWorkouts();
  },
  methods: {
    addWorkout() {
      this.showAdd = true;
    },
    async saveWorkout() {
      this.loading = true;
      if (this.name == "") {
        this.name = "Workout - " + this.workouts.length;
      }

      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, this.workoutsCollectionName), {
        name: this.name,
      });
      console.log("Document written with ID: ", docRef.id);

      this.workouts.push({
        id: docRef.id,
        name: this.name,
      });
      this.snackbar = true;
      this.loading = false;
      this.showAdd = false;
    },

    async getWorkouts() {
      const querySnapshot = await getDocs(
        collection(db, this.workoutsCollectionName)
      );
      this.workouts = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.workouts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    },
  },
};
</script>

<style scoped>
.title {
  font-style: italic;
}
</style>
