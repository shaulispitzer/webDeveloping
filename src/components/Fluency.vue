<template>
  <div class="bg-slate-700 h-auto p-7 flex justify-center">
    <div class="h-full md:flex p-4">
      <SlideIn left>
        <div class="my-auto md:px-5 px-3">
          <p class="text-white italic text-xl mb-2">
            Fluent in HTML, CSS, JavaScript, Laravel, Vue.js and Tailwind CSS
          </p>
          <hr />
          <p class="text-white mb:p-0 py-2">
            Proficient in creating responsive and dynamic user interfaces using
            modern web development technologies
          </p>
        </div>
      </SlideIn>
      <SlideIn><img src="/photo-2.webp" alt="" class="h-64 mx-auto" /></SlideIn>
    </div>
  </div>
</template>
<script setup>
import SlideIn from "./SlideIn.vue";
</script>
