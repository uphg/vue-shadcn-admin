<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { AvatarImageProps } from 'reka-ui'
import { AvatarImage } from 'reka-ui'
import type { HTMLAttributes, ImgHTMLAttributes } from 'vue'

interface Props extends AvatarImageProps {
  class?: HTMLAttributes['class']
  alt?: ImgHTMLAttributes['alt']
}

const props = defineProps<Props>()
</script>

<template>
  <AvatarImage
    data-slot="avatar-image"
    v-bind="props"
    :class="cn('aspect-square size-full', props.class)"
  >
    <slot />
  </AvatarImage>
</template>
