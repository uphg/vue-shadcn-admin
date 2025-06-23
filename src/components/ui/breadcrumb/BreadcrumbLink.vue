<script lang="ts" setup>
import type { AnchorHTMLAttributes, HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class']
  href?: AnchorHTMLAttributes['href']
  target?: AnchorHTMLAttributes['target']
  rel?: AnchorHTMLAttributes['rel']
  download?: AnchorHTMLAttributes['download']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'a',
})
</script>

<template>
  <Primitive
    data-slot="breadcrumb-link"
    v-bind="props"
    :class="cn('hover:text-foreground transition-colors', props.class)"
  >
    <slot />
  </Primitive>
</template>
