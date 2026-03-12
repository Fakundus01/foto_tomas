import { cn } from '@/shared/lib/cn'

type BrandLogoImageProps = {
  alt?: string
  className?: string
}

export function BrandLogoImage({ alt = 'Logo Foto Tomas Video', className }: BrandLogoImageProps) {
  return (
    <div className={cn('overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 p-2', className)}>
      <img alt={alt} className="h-full w-full object-contain" src="/imgs/logo-f7v.png" />
    </div>
  )
}
