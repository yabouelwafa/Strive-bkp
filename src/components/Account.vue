<template>
  <v-container fill-height>
    <v-card class="ma-auto" width="600px" height="312px" outlined>
      <v-list-item three-line>
        <v-list-item-avatar size="200" color="red"
          ><v-img src="@/assets/yusuf.jpg"></v-img
        ></v-list-item-avatar>
        <v-list-item-content fill-width>
          <h2 class="ml-1 pb-3 pt-5 font-weight-light">
            {{ userInfo.name.toUpperCase() }}
          </h2>
          <h2 class="ml-1 mb-7 font-weight-light">
            {{ userInfo.age }} YEARS OLD
          </h2>
          <h4 class="ml-2 pb-6 font-weight-light">MEMBER SINCE NOV 12 2022</h4>
        </v-list-item-content>
      </v-list-item>
      <div
        class="d-flex flex-row mx-auto mt-4 mb"
        justify="center"
        fill-width
        style="width: 100%"
      >
        <v-spacer />
        <v-spacer />
      </div>
      <v-card-actions>
        <v-btn block>Edit profile</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({}),
  methods: {},
  computed: {
    userInfo() {
      return this.$store.getters.getUserInfo;
    },
  },
};
</script>
