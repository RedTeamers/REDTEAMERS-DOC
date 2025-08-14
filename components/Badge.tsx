import React from 'react'
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      padding: '2px 8px',
      borderRadius: 999,
      border: '1px solid currentColor',
      fontSize: 12
    }}>{children}</span>
  )
}