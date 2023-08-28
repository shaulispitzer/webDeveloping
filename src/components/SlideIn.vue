<template>
  <div
    ref="componentRef"
    :class="['transition duration-1000 delay-100', translateClass]"
  >
    <slot />
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
const props = defineProps({
  left: Boolean,
});
const showing = ref(false);
const componentRef = ref(null);
const hasBeenShown = ref(false);

const observer = new IntersectionObserver((entries) => {
  const entry = entries[0];
  if (!hasBeenShown.value && entry.isIntersecting) {
    showing.value = true;
    hasBeenShown.value = true; // Mark the component as shown once
    observer.unobserve(componentRef.value); // Unobserve to prevent future triggers
  }
});

onMounted(() => {
  if (componentRef.value) {
    observer.observe(componentRef.value);
  }
});

const translateClass = computed(() => {
  if (!showing.value) {
    if (props.left) {
      return "-translate-x-52 opacity-0";
    }
    return "translate-x-52 opacity-0";
  }
});
</script>
