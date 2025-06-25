import type { HTMLAttributes, InputHTMLAttributes } from 'vue'

export interface InputProps extends InputHTMLAttributes, HTMLAttributes {
  modelValue?: string | number
  defaultValue?: string | number
  class?: string
}

declare module 'vue' {
  interface GlobalComponents {
    Input: {
      $props: InputProps
    }
  }
}