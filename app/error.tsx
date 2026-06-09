"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to the console
    console.error("APP_ERROR_BOUNDARY:", error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-red-50 text-red-900">
      <h2 className="text-2xl font-bold mb-4">Algo deu errado!</h2>
      <pre className="bg-red-100 p-4 rounded text-left overflow-auto max-w-full text-sm">
        {error.message}
        {"\n"}
        {error.stack}
      </pre>
      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Tentar novamente
      </button>
    </div>
  )
}
