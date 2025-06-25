import type { Navs, Projects, Teams } from "@/types/app-sidebar"
import { defineStore } from "pinia"
import { ref, type Component } from 'vue'
import { useI18n } from "vue-i18n"

export const useAppSidebar = defineStore('app-sidebar', () => {
  // const { t } = useI18n()

  const isMobile = ref(false)
  const visible = ref(false)
  const isCollapsed = ref(false)
  const navs = ref<Navs>([])
  const teams = ref<Teams>([])
  const projects = ref<Projects>([])

  function toggle() {
    visible.value = !visible.value
  }

  function close() {
    visible.value = false
  }

  function open() {
    visible.value = true
  }

  function collapse() {
    isCollapsed.value = !isCollapsed.value
  }

  function setNavs(newNavs: Navs) {
    navs.value = newNavs
  }

  function setTeams(newTeams: Teams) {
    teams.value = newTeams
  }

  function setProjects(newProjects: Projects) {
    projects.value = newProjects
  }

  return {
    isMobile,
    visible,
    isCollapsed,
    toggle,
    close,
    open,
    collapse,
    setNavs,
    setTeams,
    setProjects,
  }
})