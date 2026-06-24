import type { ReactNode } from "react"
import { createPortal } from "react-dom"

type PortalProps = {
  children: ReactNode

  containerId?: string
}

export const Portal = ({
  children,

  containerId = "portal-root",
}: PortalProps): React.JSX.Element | null => {
  const container = document.getElementById(containerId)

  if (!container) {
    return null
  }

  return createPortal(children, container)
}
