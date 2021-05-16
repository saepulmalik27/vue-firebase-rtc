<template>
  <label>{{ label }} </label>
<input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" class="base-input" />
 
</template>

<script>
export default {
  props: {
    label: { type: String, default: "" },
    modelValue: { type: [String, Number], default: "" },
  },
};
</script>

<style scoped>
.base-input{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>