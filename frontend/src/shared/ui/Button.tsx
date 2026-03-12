import type { MouseEventHandler, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/shared/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = PropsWithChildren<{
  className?: string
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  variant?: Variant
}>

function getVariantClasses(variant: Variant) {
  switch (variant) {
    case 'secondary':
      return 'border border-[var(--color-border)] bg-white/60 text-[var(--color-ink)] hover:bg-white'
    case 'ghost':
      return 'border border-transparent bg-transparent text-[var(--color-accent-strong)] hover:border-[var(--color-border)] hover:bg-white/50'
    default:
      return 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-strong)]'
  }
}

const sharedClasses =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200'

export function Button({ children, className, href, variant = 'primary', ...props }: ButtonProps) {
  const classes = cn(sharedClasses, getVariantClasses(variant), className)

  if (href) {
    return (
      <Link className={classes} to={href}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} type={props.type ?? 'button'} onClick={props.onClick}>
      {children}
    </button>
  )
}
