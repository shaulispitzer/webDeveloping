<template>
    
       <div class="errorMessage bg-pink-200 border-2 border-red-600 rounded-md w-52 mx-auto my-2"> 
        <h1 class="underline font-bold">ERROR</h1>
        <p class="text-sm">You've Done Something Wrong! Try Again</p></div>
</template>
<style>
.errorMessage{
    
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
 

</style>