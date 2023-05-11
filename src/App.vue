<script setup>
import WebsiteDesign from './components/WebsiteDesign.vue';
import Education from './components/Education.vue';
import Fluency from './components/Fluency.vue';
import projects from './components/projects.vue';
import contactAndPhoto from './components/contactAndPhoto.vue';
</script>

<template>
  <div class="w-full bg-blue py-4">
    <p class="font-semibold md:text-4xl text-3xl text-center pb-2">Shauli Spitzer </p>
    <p class="font-semibold md:text-3xl text-2xl text-center">Front-End Web Developer</p>
  </div>
  <WebsiteDesign></WebsiteDesign>
  <Education></Education>
  <Fluency></Fluency>
  <projects></projects>
  <contactAndPhoto></contactAndPhoto>
</template>

<style scoped>

</style>
