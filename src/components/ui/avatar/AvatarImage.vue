<script setup lang="ts">
import type { IntrinsicProps } from '@/types/intrinsic';
import type { AvatarImageProps } from 'reka-ui'
import { AvatarImage } from 'reka-ui'

interface Props extends AvatarImageProps, IntrinsicProps {
  /**
   * The alternative text for the image.
   */
  alt?: string
}

const props = defineProps<Props>()
</script>

<template>
  <AvatarImage
    data-slot="avatar-image"
    v-bind="props"
    class="aspect-square size-full"
  >
    <slot />
  </AvatarImage>
</template>
