<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { AnchorProps } from '@/types/intrinsic';

interface Props extends PrimitiveProps, AnchorProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'a',
})
</script>

<template>
  <Primitive
    data-slot="breadcrumb-link"
    :as="as"
    :as-child="asChild"
    :class="cn('hover:text-foreground transition-colors', props.class)"
  >
    <slot />
  </Primitive>
</template>
