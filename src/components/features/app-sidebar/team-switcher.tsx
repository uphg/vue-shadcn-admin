import { ChevronsUpDown, Plus } from 'lucide-vue-next'
import { ref, type Component } from 'vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'

type Team = {
  logo: Component
  name: string
  id: string
  plan?: string
}

const TeamSwitcher = defineComponent({
  name: 'TeamSwitcher',
  props: {
    teams: {
      type: Array as PropType<Team[]>,
      required: true,
    },
  },
  setup(props) {
    const { isMobile } = useSidebar()

    const activeTeam = ref(props.teams[0])
    console.log('Active team:', activeTeam.value)

    return () => {
      const { teams } = props
      return (
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <SidebarMenuButton
                  size="lg"
                  class="cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    {h(activeTeam.value.logo, { class: 'size-4' })}
                  </div>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">
                      {activeTeam.value.name}
                    </span>
                    <span class="truncate text-xs">{activeTeam.value.plan}</span>
                  </div>
                  <ChevronsUpDown class="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                align="start"
                side={isMobile ? 'bottom' : 'right'}
                side-offset={4}
              >
                <DropdownMenuLabel class="text-xs text-muted-foreground">
                  Teams
                </DropdownMenuLabel>
                {teams.map((team, index) => (
                  <DropdownMenuItem
                    key={team.name}
                    class="gap-2 p-2"
                    onClick={() => activeTeam.value = team}
                  >
                    <div class="flex size-6 items-center justify-center rounded-sm border">
                      {h(team.logo, { class: 'size-4 shrink-0' })}
                    </div>
                    {team.name}
                    <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator />
                <DropdownMenuItem class="gap-2 p-2">
                  <div class="flex size-6 items-center justify-center rounded-md border bg-background">
                    <Plus class="size-4" />
                  </div>
                  <div class="font-medium text-muted-foreground">
                    Add team
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      )
    }
  },
})

export default TeamSwitcher