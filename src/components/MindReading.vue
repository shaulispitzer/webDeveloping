<script setup>
import {ref, watch} from 'vue';
import Result from './Result.vue'
import ErrorMessage from './ErrorMessage.vue'
let inputValue = ref('')
let asking = ref(false);
let questions = [{question: 'Divide the number by 3, and type the remainder below. If the remainder is 0, type 0 instead.', max:2, multiplyBy: 70, position: 'first'},
{question: 'Divide the original number by 5, and type the resulting quotient here.', max:4, multiplyBy: 21, position:'second'},
{question: 'Divide the original number by 7, and write down the remainder.', max: 6, multiplyBy:15, position:'third'}];
let displayQuestion = ref('think of a number between 7 &  105');
let maxAnswer = ref(0);
let correctAnswer = ref(false);
let showAnswer = ref(false);
let theAnswer = ref('');
let questionNumber = ref('');

const vFocus = {
  mounted: (el) => el.focus()
}
watch(inputValue, (e)=>{
    inputValue.value = inputValue.value.replace(/[^0-9]/g, '');
    if(/[0-9]|Numpad[0-9]/.test(e)){
        if(e<=maxAnswer && e>=0){
    correctAnswer.value =true;
}
else {
correctAnswer.value = false}
    }
    else{
    correctAnswer.value = false};
})
 function ask(sheila){
    displayQuestion.value = sheila.question;
    questionNumber.value = sheila.position;
    return new Promise(async(resolve, reject)=>{
        window.addEventListener('click', (e)=>{
            if(e.target.matches('.next') && correctAnswer.value === true){
                resolve(inputValue.value);
            }
        });
        
    window.addEventListener('keydown', (e)=>{
        if(e.code === 'Enter' && correctAnswer.value === true){
            resolve(inputValue.value)
        }
    });
    window.removeEventListener('keydown', (e)=>{
        if(e.code === 'Enter' && correctAnswer.value === true){
            resolve(inputValue.value)
        }
    })

}
    ) 
}
   
async function askingFunction(array, callback){
const results = [];
for (const qu of array){
    maxAnswer = qu.max;
 results.push(await callback(qu) * +qu.multiplyBy)
 inputValue.value = '';
}
let total = results.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0)
if(total <= 105 && total >=7){
     total = total;
}
else if(total>=105 && total<=210){
     total -= 105;
}
else if(total<=7 && total>= -98){
     total += 105;
}
else if(total<-98 && total > -203){
     total +=210;
}
else if(total>=210 && total<315){
    total -= 210;
}
else if(total >= 315 ){
    total -= 315;
}
if (total<= 105 && total >=7){
return total}
else{
return 'wrong'}
}
async function startTrick() {
    asking.value = true;
    showAnswer.value = false;
    const answer = await(askingFunction(questions, ask));
    theAnswer.value = answer;
    showAnswer.value = true;
    asking.value = false
}

</script>
<template>
    <div class="bg-blue h-80 text-center p-4 border-2 border-black mx-4 my-3 relative">
        <h1 class="font-bold text-xl">MIND READING TRICK:</h1>
        <Transition><div v-if="asking">
            <p class="transition-all md:text-2xl text-base sm:text-xl xsm:text-lg my-3">{{displayQuestion}} </p>
        <div class="outer absolute  bottom-15 w-full"><div class="inputAndButton relative inline-block">  
         <span v-if="!correctAnswer" class=" text-red-700 text-sm md:text-base sm:text-sm absolute md:w-max sm:top-[5px] top-12 sm:right-[105%] sm:w-48">The Number May Only Be Between 0 and {{ maxAnswer }}</span>
         <input type="text"  v-model="inputValue" v-focus maxlength="1" class="mr-2 p-2 rounded-md w-10 border border-gray-600">
         <button :class="{next: correctAnswer, '!text-lg': questionNumber === 'third'}" class="px-2 border-solid border-2 border-purple-700 disabled:border-purple-400 py-1 text-xl my-auto disabled:bg-slate-300 disabled:text-slate-400 disabled:opacity-70 transition-all" :disabled="!correctAnswer">{{questionNumber === 'third'? 'Show Answer': 'next'}}</button>
        </div></div>
    </div></Transition>
        <div v-if="showAnswer">
            <ErrorMessage v-if="theAnswer === 'wrong'"></ErrorMessage>
            <Result v-if="theAnswer !== 'wrong'">{{ theAnswer }}</Result>
        </div>
        <div class="mt-5" v-if="!asking">
            <p class="text-base pb-1 md:text-xl">Think of a number between 7 and 105, Then click the start button to {{ showAnswer ? 'restart the game' : 'begin' }}!</p>
    <button @click="startTrick" class="transition-all hover:-translate-y-0.5 bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-1 py-1 px-2  md:px-4 border border-gray-400 rounded shadow">start {{ showAnswer ? 'again': "" }}</button></div></div>
</template>
<style>
.v-enter-active
 {
  transition: opacity 0.5s ease;
}

.v-enter-from
 {
  opacity: 0;
}
</style>
