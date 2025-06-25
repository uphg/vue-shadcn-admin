# UI 组件类型修复

1. 让组件支持标签原生属性和功能
2. 避免 `[@vue/compiler-sfc] Failed to resolve extends base type` 类型错误提示，Vue Props 不支持复杂类型。

修复后示例代码：

```ts
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

```