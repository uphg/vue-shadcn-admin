import { ChevronRight, type LucideIcon } from 'lucide-vue-next'
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from '@/components/ui/collapsible'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, } from '@/components/ui/sidebar'

type NavItem = {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}
const NavMain = defineComponent({
  name: 'NavMain',
  props: {
    items: {
      type: Array as PropType<NavItem[]>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <SidebarGroup>
        <SidebarGroupLabel>Platform</SidebarGroupLabel>
        <SidebarMenu>
          {props.items.map((item) => (
            <Collapsible
              key={item.title}
              as-child
              default-open={item.isActive}
              class="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger as-child>
                  <SidebarMenuButton tooltip={item.title}>
                    {h(item.icon!)}
                    <span>{item.title}</span>
                    <ChevronRight class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map(subItem => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton as-child>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}

        </SidebarMenu>
      </SidebarGroup>
    );
  },
});

export default NavMain;