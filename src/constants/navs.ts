import { AudioWaveform, BookOpen, Bot, Command, Frame, GalleryVerticalEnd, Map, PieChart, Settings2, SquareTerminal } from 'lucide-vue-next'

export const navs = [
  {
    title: 'Home',
    url: '/',
    icon: AudioWaveform,
    component: () => import('@/pages/home/home-page'),
  },
  {
    title: 'Icons',
    url: '/icon',
    icon: BookOpen,
    component: () => import('@/pages/icon/icon-page'),
  },
  {
    title: 'Demo',
    url: '/demo',
    icon: Bot,
    component: () => import('@/pages/demo/demo-page'),
  },
  {
    title: 'About',
    url: '/about',
    icon: Command,
    component: () => import('@/pages/about/about-page'),
  },
  {
    title: 'External Link',
    url: 'https://example.com',
    icon: Frame,
    isExternal: true,
  },
]