<template lang="pug">
  q-card
    q-img(:src="field.image" style="height: 150;")
    q-card-section(horizontal)
      q-card-section
        .text-h6 {{ field.title }}
        .text-subtitle2 {{ field.crop }}
      q-card-section.absolute-right
        q-btn(v-ripple outline  :to="'/farmer/field/' + field.id") View
</template>

<script>
export default {
  name: 'FieldCard',
  props: ['field']
}
</script>
