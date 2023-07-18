<template>
    <div class="kjkj bg-slate-700 h-auto w-full flex justify-center">
        <div class="inner p-5 w-full md:w-[900px] md:flex md:h-auto">
           <SlideIn left> <img class="image h-64 mx-auto" src="/photo-5.webp"></SlideIn>
            <div class="text md:px-5 h-full md:flex p-4">
                <div class="my-auto"><SlideIn>
                    <h1 class="text-white font-bold text-xl m-auto">Website Design</h1>
                    <p class="text-white mb-3">Designing a website to make it look aesthetically pleasing and user friendly.</p>
                    <a href="#contact" class="p-2 bg-indigo-500 rounded-xl text-white hover:bg-indigo-400 hover:text-white transition ease-in-out duration-200">Drop Me A Line</a></SlideIn></div></div>
                </div>
    </div>
</template>
<script setup>
import SlideIn from './SlideIn.vue';
</script>