<template>
    <q-img
    :src="spriteURL"
    spinner-color="white"
    />
</template>

<script>
export default {
  props: {
    spriteURL: {
      type: String,
      required: false,
      default: '001'
    }
  }
}
</script>
