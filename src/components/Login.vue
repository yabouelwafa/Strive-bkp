<template>
  <v-container fill-height>
    <v-card width="800px" height="455px" class="ma-auto">
      <v-card-title>Login</v-card-title>
      <v-card-subtitle>Please enter your information</v-card-subtitle>
      <v-card-text>
        <v-text-field class="mb-" label="Username" outlined></v-text-field>
        <v-text-field class="mb-" label="Password" outlined></v-text-field>
      </v-card-text>
      <v-card-actions class="d-flex flex-column px-4">
        <v-btn block rounded color="primary" dark> Login </v-btn>
        <div class="d-flex flex-row my-13" style="width: 100%">
          <div>
            <v-checkbox v-model="rememberMe" label="Remember me"></v-checkbox>
          </div>
          <v-spacer />
          <div class="mt-4"><v-btn plain>forgot Password</v-btn></div>
        </div>
      </v-card-actions>
      <v-card-subtitle align="center" class=""
        >Don't have an account?
        <v-btn to="/signUp" text color="primary" width="25px" plain
          >Sign up</v-btn
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
