import React from 'react'

export function Label({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block mb-1 text-sm font-medium text-gray-700">
      {children}
    </label>
  )
}
