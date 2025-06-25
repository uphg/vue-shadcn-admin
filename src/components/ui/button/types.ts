import type { ButtonHTMLAttributes } from 'vue'

export interface ButtonProps extends ButtonHTMLAttributes {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  class?: string
}

declare module 'vue' {
  interface GlobalComponents {
    Button: {
      $props: ButtonProps
    }
  }
}