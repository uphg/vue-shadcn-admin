export type Navs = Array<NavItem>
export type Teams = Array<TeamItem>
export type Projects = Array<ProjectItem>

export type NavItem = {
  title: string
  url: string
  icon?: any
  items?: NavItem[]
}

export type TeamItem = {
  logo: any
  name: string
  id: string
  plan?: string
}

export type ProjectItem = {
  name: string
  url: string
  icon: any
}