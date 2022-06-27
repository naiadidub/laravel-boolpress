<template>
<<<<<<< HEAD
<div>
  <header-component-vue/>
   
  <main-component-vue/>
  
  <footer-component-vue/>
</div>
  
</template>

<script>
import FooterComponentVue from '../components/Footer.component.vue'
import MainComponentVue from '../components/MainComponent.vue'
import HeaderComponentVue from '../components/HeaderComponent.vue'
export default {
    name: "App",
    components: {
        HeaderComponentVue,
        MainComponentVue,
        FooterComponentVue
=======
  <div>
   <header-component />
   <main-component />
   <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import MainComponent from '../components/MainComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
export default {
    name: "App",
    components: {
        HeaderComponent,
        MainComponent,
        FooterComponent

>>>>>>> bd40c8494d5523d878896ee4cc6a516674313ce0
    }


}
</script>
