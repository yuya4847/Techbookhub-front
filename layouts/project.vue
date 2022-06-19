<template>
  <v-app>
    <logged-in-app-bar
      #navigation-toggle-button
      clipped-left
    >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      />
    </logged-in-app-bar>
    <project-navigation-drawer
      :drawer.sync="drawer"
    />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: 'get-project-current',
  data () {
    return {
      drawer: null
    }
  }
}
</script>