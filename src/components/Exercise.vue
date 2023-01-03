<template>
  <v-container>
    <v-expansion-panel class="">
      <v-expansion-panel-header>{{ exercise.name }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card-subtitle class="pl-4 desc-sub">Descreption</v-card-subtitle>
        <p class="ml-6 descreption" align="left">
          {{ exercise.description }}
        </p>
        <div class="d-flex flex-row">
          <div>
            <v-card-subtitle class="pl-4 desc-sub">Type</v-card-subtitle>
            <p class="ml-6 type" align="left">
              {{ exercise.type }}
            </p>
          </div>
          <div class="ml-8">
            <v-card-subtitle class="pl-4 desc-sub">Muscle</v-card-subtitle>
            <p class="ml-6 type" align="left">
              {{ exercise.mucsle }}
            </p>
          </div>
        </div>
        <v-btn width="80%" color="primary" class="ml-16 mb-5 mt-5"
          >Add to workout</v-btn
        >
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>
<script>
export default {
  props: {
    exercise: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    expanded: false,
  }),
  methods: {
    expand() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style scoped>
.descreption {
  font-size: small;
  font-family: monospace;
  width: 45ex;
}
.desc-sub {
  font-size: large;
  font-weight: bold;
}
.type {
  font-size: large;
}
</style>
