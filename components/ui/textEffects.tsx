import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface Props {
  children: ReactNode,
  className?: string
}

interface GradientTextProps extends Props { }

export const GradientText = ({ children, className }: GradientTextProps) =>
  <span className={cn(` bg-[linear-gradient(180deg,#FFFFFF_-16.31%,#4C8ED9_264.89%)] bg-clip-text text-transparent `, className)}>{children}</span>


interface AccentUnderlineProps extends Props {
  underline?: boolean
}

export const AccentUnderline = ({ children, underline, className }: AccentUnderlineProps) => {
  return (
    <span className={cn(`text-accent ${underline ? "underline underline-offset-4" : ""} caveat-600`, className)}>
      {children}
    </span>
  )
}

export const PrimeText = ({ children, className }: Props) => <span className={cn(`text-primary`, className)}>{children}</span>

