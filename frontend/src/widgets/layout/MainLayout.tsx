import { Outlet } from 'react-router-dom'
import { GuidedChatWidget } from '@/features/guided-chat/components/GuidedChatWidget'
import { SiteFooter } from '@/widgets/footer/SiteFooter'
import { SiteHeader } from '@/widgets/header/SiteHeader'

export function MainLayout() {
  return (
    <div className="relative overflow-hidden">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <GuidedChatWidget />
    </div>
  )
}
