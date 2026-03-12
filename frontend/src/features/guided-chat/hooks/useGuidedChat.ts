import { useEffect, useRef, useState } from 'react'
import { chatTree } from '@/features/guided-chat/model/chatTree'
import { GuidedChatFlow } from '@/features/guided-chat/model/GuidedChatFlow'

const STORAGE_KEY = 'foto-tomas-guided-chat'

export function useGuidedChat() {
  const flowRef = useRef(new GuidedChatFlow(chatTree))
  const [isOpen, setIsOpen] = useState(false)
  const [currentNodeId, setCurrentNodeId] = useState('welcome')

  useEffect(() => {
    const savedNodeId = window.localStorage.getItem(STORAGE_KEY)

    if (savedNodeId && flowRef.current.getNode(savedNodeId)) {
      setCurrentNodeId(savedNodeId)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, currentNodeId)
  }, [currentNodeId])

  const currentNode = flowRef.current.getNode(currentNodeId) ?? flowRef.current.getInitialNode()

  function selectOption(optionId: string) {
    const option = currentNode.options.find((entry) => entry.id === optionId)

    if (option?.externalHref) {
      if (option.externalHref.startsWith('/')) {
        window.location.href = option.externalHref
        return
      }

      window.open(option.externalHref, '_blank', 'noopener,noreferrer')
      return
    }

    const nextNode = flowRef.current.resolveNextNode(currentNodeId, optionId)
    setCurrentNodeId(nextNode.id)
  }

  function restart() {
    setCurrentNodeId('welcome')
  }

  return {
    currentNode,
    isOpen,
    restart,
    selectOption,
    setIsOpen,
  }
}
