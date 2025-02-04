import { Home, LayoutGrid, Ticket, Wine, Users, Fish, Waves, Trophy, UserCircle } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../../components/ui/sidebar"

const sidebarItems = [
  { icon: LayoutGrid, label: "Browse", href: "#" },
  { icon: Ticket, label: "Tickets", href: "#" },
  { icon: Wine, label: "Experiences", href: "#" },
  { icon: Users, label: "Groups", href: "#" },
  { icon: Fish, label: "Activities", href: "#" },
  { icon: Waves, label: "Beach", href: "#" },
  { icon: Trophy, label: "Sports", href: "#" },
  { icon: Home, label: "Stays", href: "#" },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b px-2 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <a href="#" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">P</span>
                </div>
                <span className="font-semibold text-xl">Plutus</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton asChild tooltip={item.label}>
                <a href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <div className="mt-auto pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Profile">
              <a href="#">
                <UserCircle className="h-5 w-5" />
                <span>Profile</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>
      <SidebarRail />
    </Sidebar>
  )
}

