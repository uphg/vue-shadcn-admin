<script lang="ts" setup>
import { useAttrs, mergeProps } from 'vue'
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
const attrs = useAttrs()
const mergedProps = mergeProps(props, attrs)
</script>

<template>
  <Primitive
    data-slot="breadcrumb-link"
    :as="as"
    :as-child="asChild"
    :class="cn('hover:text-foreground transition-colors', props.class)"
    v-bind="mergedProps"
  >
    <slot />
  </Primitive>
</template>
