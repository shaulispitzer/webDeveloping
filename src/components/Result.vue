<script setup>
import { onMounted } from 'vue';
import Confetti from 'canvas-confetti';
onMounted(()=>{
    const end = Date.now() + 3 * 1000

    // go Buckeyes!
    const colors = ["#d61f69", "#ff99ff","#bada55","#00c1ff"]

    ;(function frame() {
        Confetti({
            particleCount: 20,
            angle: 100,
            spread: 100,
            startVelocity: 50,
            colors: colors,
            drift:1,
            scalar: 1
        })

        if(Date.now() <end){
            requestAnimationFrame(frame)
        }
    })()
})
</script>
<template>
        <div class="resultMessage p-4 my-3 mx-auto sm:w-80 w-[90%] min-w-max border-2 border-green-700 rounded-lg bg-green-300">
    <p class="text-lg font-bold uppercase">your number is:</p>
    <span class="font-extrabold text-3xl"><slot></slot></span>
    </div>
</template>
<style>
.resultMessage{
    
    animation: shake11 .8s;
    transform: scale(1,1);
  }
  
  @keyframes shake11 {
    0%{
        transform: scale(0,0);
    }
    100%{
      transform: scale(1,1);
    }
  }
</style>