import Image from 'next/image'
import { useTheme } from 'next-themes'

type Props = { alt: string; lightSrc: string; darkSrc: string; width: number; height: number; className?: string }

export default function ThemedImage({ alt, lightSrc, darkSrc, width, height, className }: Props) {
  const { resolvedTheme } = useTheme()
  const src = resolvedTheme === 'dark' ? darkSrc : lightSrc
  return <Image src={src} alt={alt} width={width} height={height} className={className} priority />
}
