<script setup lang="ts">
import type { InputHTMLAttributes, HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

interface Props extends PrimitiveProps {
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  type?: InputHTMLAttributes['type']
  placeholder?: InputHTMLAttributes['placeholder']
  disabled?: InputHTMLAttributes['disabled']
  readonly?: InputHTMLAttributes['readonly']
  required?: InputHTMLAttributes['required']
  autocomplete?: InputHTMLAttributes['autocomplete']
  autofocus?: InputHTMLAttributes['autofocus']
  form?: InputHTMLAttributes['form']
  list?: InputHTMLAttributes['list']
  max?: InputHTMLAttributes['max']
  maxlength?: InputHTMLAttributes['maxlength']
  min?: InputHTMLAttributes['min']
  minlength?: InputHTMLAttributes['minlength']
  multiple?: InputHTMLAttributes['multiple']
  name?: InputHTMLAttributes['name']
  pattern?: InputHTMLAttributes['pattern']
  step?: InputHTMLAttributes['step']
  value?: InputHTMLAttributes['value']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'input',
})

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <Primitive
    data-slot="input"
    v-bind="props"
    v-model="modelValue"
    :class="cn(
      'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
      props.class,
    )"
  />
</template>
