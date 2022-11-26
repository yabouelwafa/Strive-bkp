<template>
  <v-container fill-height>
    <v-card width="800px" height="600px" class="ma-auto">
      <v-card-title>Sign Up</v-card-title>
      <v-card-subtitle>Please enter your information</v-card-subtitle>
      <v-card-text>
        <v-text-field
          class="mb-"
          label="Name (First - Last)"
          outlined
        ></v-text-field>
        <v-text-field class="mb-" label="Email" outlined></v-text-field>
        <v-text-field class="mb-" label="Username" outlined></v-text-field>
        <v-text-field class="mb-" label="Password" outlined></v-text-field>
      </v-card-text>
      <v-card-actions class="d-flex flex-column px-4">
        <v-btn block rounded color="primary" dark> Sign Up </v-btn>
      </v-card-actions>
      <v-card-subtitle align="center" class=""
        >Already have an account?
        <v-btn to="/login" text color="primary" width="25px" plain
          >Log in</v-btn
        ></v-card-subtitle
      >
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    rememberMe: true,
  }),
};
</script>
