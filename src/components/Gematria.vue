<script setup>
import {ref, computed, watch} from 'vue';
let onlyHebrew = ref(false);
let typedInput = ref('');
let result = ref('');
const mod = ref([]);
let total = ref(0);
const hebrewRegex = /[\u0590-\u05FF]/;

let whatWasTyped = computed(()=>{let newValue = '';
            for (let i = 0; i < typedInput.value.length; i++) {
              if (hebrewRegex.test(typedInput.value[i])) {
      newValue += typedInput.value[i]}}
return newValue
})
// this watch is for in case the user unchecks the onlyHebrew checkbox
// when there is non-hebrew characters in the input 
watch(onlyHebrew,()=>{
  if (onlyHebrew.value === false){
    let newValue = '';
            for (let i = 0; i < typedInput.value.length; i++) {
              if (hebrewRegex.test(typedInput.value[i])) {
      newValue += typedInput.value[i]}}
typedInput.value = newValue
  }
})
// this watch will get the gamatria and also filter
// out non hebrew characters when the checkbox is unchecked
watch(typedInput,(e)=>{
    mod.value = e.split('').map(getNumbers);
    total = mod.value.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
if (onlyHebrew.value === false){
    let newValue = '';
            for (let i = 0; i < typedInput.value.length; i++) {
              if (hebrewRegex.test(typedInput.value[i])) {
      newValue += typedInput.value[i]}}
typedInput.value = newValue
  }
})
function getNumbers(letter) {
        
        const findInput = gematriaList[letter];
        if (findInput)  {
          return findInput;}
          //   else
          return null ;
        }
const gematriaList = {
        א:1, ב:2, ג:3, ד:4, ה:5, ו:6 ,ז:7, ח:8, ט:9, י:10, כ:20, ך:20, ל:30, מ:40, ם:40, נ:50, ן:50, ס:60, ע:70, פ:80, ף:80, צ:90, ץ:90, ק:100, ר:200, ש:300, ת:400,
    }
</script>
<template><div class="w-full text-center pb-2"><div class="gematriaDiv bg-blue p-4 m-4 border-2 border-black block rounded-lg">
    <h1 class="mx-auto uppercase font-bold text-xl">Gematria:</h1>
    <h1>Put Hebrew Text Here To Find Its Gematria!</h1>
    <div class="checkbox mb-2">
        <input type="checkbox" id="coloredcheckbox"  v-model="onlyHebrew" class="w-4 h-4 cursor-pointer bg-green-500 text-green-600  border-gray-300 rounded focus:ring-green-500   focus:ring-2 ">
        <label for="coloredcheckbox" class="ml-2 text-sm">Allow Non-Hebrew Characters</label></div>
    <input type="text" v-model="typedInput" class="rounded-md bg-slate-200 p-1 border border-gray-600 sm:w-72 w-4/5" placeholder="Type Something....."><br>
    <span v-if="total" class="text-red-700 text-lg">The Gematria of {{whatWasTyped}} is: <strong>{{ total }}</strong></span>
    <span v-else class="text-lg">No Gematria Found</span>
    </div></div></template>






