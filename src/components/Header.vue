<template lang="pug">
  .header.no-margin.z-depth-1.green.darken-2
    .container.padded-top-compact
      h3.green-text.text-lighten-4 {{ title }}

</template>

<script>
export default {
	name: 'Header',
	props: ['title']
}
</script>
