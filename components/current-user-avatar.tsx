'use client'

import Link from 'next/link'
import { useCurrentUserImage } from '@/hooks/use-current-user-image'
import { useCurrentUserName } from '@/hooks/use-current-user-name'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { LogoutButton } from '@/components/logout-button'
import { Settings, LogOut, Image as ImageIcon } from 'lucide-react'

export const CurrentUserAvatar = () => {
  const profileImage = useCurrentUserImage()
  const name = useCurrentUserName()
  const initials = name
    ?.split(' ')
    ?.map((word) => word[0])
    ?.join('')
    ?.toUpperCase()

  return (
    <HoverCard openDelay={200} closeDelay={200}>
      <HoverCardTrigger asChild>
        <button className="rounded-full outline-none transition-all hover:opacity-80">
          <Avatar className="cursor-pointer h-10 w-10 hover:shadow-md transition-shadow">
            {profileImage && <AvatarImage src={profileImage} alt={initials} />}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </button>
      </HoverCardTrigger>
      <HoverCardContent align="end" className="w-64 p-4">
        {/* 用户信息 */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-12 w-12">
            {profileImage && <AvatarImage src={profileImage} alt={initials} />}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm truncate">{name}</p>
            <p className="text-xs text-muted-foreground">摄影作品集</p>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="h-px bg-border mb-3" />

        {/* 菜单选项 */}
        <div className="space-y-1">
          <Link href="/protected" className="block">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-left text-sm">
              <ImageIcon className="w-4 h-4 text-muted-foreground" />
              <span>我的作品</span>
            </button>
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-left text-sm">
            <Settings className="w-4 h-4 text-muted-foreground" />
            <span>个人设置</span>
          </button>
        </div>

        {/* 分隔线 */}
        <div className="h-px bg-border my-3" />

        {/* 登出按钮 */}
        <LogoutButton
          variant="ghost"
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-destructive/10 transition-colors text-left text-sm hover:text-destructive h-auto justify-start"
        >
          <LogOut className="w-4 h-4" />
          <span>退出登录</span>
        </LogoutButton>
      </HoverCardContent>
    </HoverCard>
  )
}
