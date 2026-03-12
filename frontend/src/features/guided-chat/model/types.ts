export interface GuidedChatOption {
  id: string
  label: string
  targetId?: string
  externalHref?: string
}

export interface GuidedChatNode {
  id: string
  title: string
  message: string
  options: GuidedChatOption[]
}
