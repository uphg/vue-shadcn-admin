# Vue-Best-Admin

[English](README.md) | **中文**

使用 Vite 快速创建基于 Vue 的 Web 应用。

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [esbuild](https://github.com/evanw/esbuild) 带来极速体验。
- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)
- 🎨 [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - 用于快速构建 Web 应用的 CSS 框架。
- 🌈 [shadcn-vue](https://github.com/unovue/shadcn-vue) - 一个由社区主导的 [shadcn/ui](https://ui.shadcn.com/) 的 Vue 版本。
- 🌍 [I18n 国际化开箱即用](./locales)
- 📥 [API 自动加载](https://github.com/unplugin/unplugin-auto-import) - 直接使用 Composition API 无需引入
- 🦾 TypeScript

## 预设

### UI 库

- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - 用于快速构建 Web 应用的 CSS 框架。
- [shadcn-vue](https://github.com/unovue/shadcn-vue) - 一个由社区主导的 [shadcn/ui](https://ui.shadcn.com/) 的 Vue 版本。

### 插件

- [Vue Router](https://github.com/vuejs/router) - 为 Vue.js 量身打造的声明式、配置灵活且便捷的路由方案。
- [Pinia](https://pinia.vuejs.org) - 类型安全、可扩展性以及模块化设计, 使用 Composition API 的 Vue 状态管理。
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - 国际化
  - [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - Vue I18n 的 Vite 插件

### 编码风格

- 使用 Composition API 的 tsx 组件
- 使用 `-` 分割的文件命名风格，例如 `home-page.tsx`、`use-foo.tsx` 等

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - 基于 Vite 的单元测试框架
- [VS Code 扩展](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - 自动启动 Vite 服务器
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE 支持
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示和自动补全
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - 多合一的 I18n 支持
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
