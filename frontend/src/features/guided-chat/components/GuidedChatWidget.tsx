import { AnimatePresence, motion } from 'framer-motion'
import { useGuidedChat } from '@/features/guided-chat/hooks/useGuidedChat'
import { Button } from '@/shared/ui/Button'

export function GuidedChatWidget() {
  const { currentNode, isOpen, restart, selectOption, setIsOpen } = useGuidedChat()

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-end justify-end">
      <AnimatePresence>
        {isOpen ? (
          <motion.section
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="glass-panel mb-4 w-[min(92vw,24rem)] rounded-[2rem] p-5"
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">Chat guiado</p>
                <h3 className="mt-2 text-2xl font-semibold">{currentNode.title}</h3>
              </div>
              <button className="text-sm font-semibold text-[var(--color-muted)]" onClick={() => setIsOpen(false)} type="button">
                Cerrar
              </button>
            </div>

            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{currentNode.message}</p>

            <div className="mt-5 flex flex-col gap-3">
              {currentNode.options.map((option) => (
                <button
                  key={option.id}
                  className="rounded-3xl border border-[var(--color-border)] bg-white/70 px-4 py-3 text-left text-sm font-medium transition hover:bg-white"
                  onClick={() => selectOption(option.id)}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <button className="text-sm font-semibold text-[var(--color-muted)]" onClick={restart} type="button">
                Reiniciar
              </button>
              <Button href="/reservas" variant="secondary">
                Ir a reservas
              </Button>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <Button className="shadow-xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Ocultar asistente' : 'Chat guiado'}
      </Button>
    </div>
  )
}
