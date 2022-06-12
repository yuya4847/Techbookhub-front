<template>
  <v-toolvar-title>
    {{ appName }}
  </v-toolvar-title>
</template>

<script>
export default {
  data ({ $config: { appName } }) {
    return {
      appName
    }
  }
}
</script>
