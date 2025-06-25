<script setup lang="ts">
import type { ButtonHTMLAttributes, HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { type ButtonVariants, buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  type?: ButtonHTMLAttributes['type']
  disabled?: ButtonHTMLAttributes['disabled']
  autofocus?: ButtonHTMLAttributes['autofocus']
  form?: ButtonHTMLAttributes['form']
  formaction?: ButtonHTMLAttributes['formaction']
  formenctype?: ButtonHTMLAttributes['formenctype']
  formmethod?: ButtonHTMLAttributes['formmethod']
  formnovalidate?: ButtonHTMLAttributes['formnovalidate']
  formtarget?: ButtonHTMLAttributes['formtarget']
  name?: ButtonHTMLAttributes['name']
  value?: ButtonHTMLAttributes['value']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})

defineOptions({
  inheritAttrs: false
})

export type ButtonElement = HTMLButtonElement
</script>

<template>
  <Primitive
    data-slot="button"
    v-bind="props"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
