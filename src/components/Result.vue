
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