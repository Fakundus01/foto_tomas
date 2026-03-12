import type { GuidedChatNode } from '@/features/guided-chat/model/types'

export class GuidedChatFlow {
  private readonly nodes: Record<string, GuidedChatNode>

  constructor(nodes: Record<string, GuidedChatNode>) {
    this.nodes = nodes
  }

  getNode(nodeId: string) {
    return this.nodes[nodeId]
  }

  getInitialNode() {
    return this.nodes.welcome
  }

  resolveNextNode(currentNodeId: string, optionId: string) {
    const currentNode = this.nodes[currentNodeId]
    const option = currentNode.options.find((entry) => entry.id === optionId)

    if (!option?.targetId) {
      return currentNode
    }

    return this.nodes[option.targetId] ?? currentNode
  }
}
