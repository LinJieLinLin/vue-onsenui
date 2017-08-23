<template id="home">
  <v-ons-page>
    <p style="text-align: center">
      Welcome home.<br><br>{{ myProp }}
      <i class="fa fa-address-book-o fa-2x" aria-hidden="true"></i>
    </p>
  </v-ons-page>
</template>
<script>
export default {
  template: '#home',
  props: ['myProp']
}
</script>