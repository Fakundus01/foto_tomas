import { useEffect, useState } from 'react'

type ApiResourceState<T> = {
  data: T | null
  error: string | null
  loading: boolean
}

export function useApiResource<T>(loader: () => Promise<T>, deps: readonly unknown[]) {
  const [state, setState] = useState<ApiResourceState<T>>({
    data: null,
    error: null,
    loading: true,
  })

  useEffect(() => {
    let isActive = true

    setState((current) => ({
      data: current.data,
      error: null,
      loading: true,
    }))

    loader()
      .then((data) => {
        if (!isActive) {
          return
        }

        setState({
          data,
          error: null,
          loading: false,
        })
      })
      .catch((error: unknown) => {
        if (!isActive) {
          return
        }

        const message = error instanceof Error ? error.message : 'No se pudieron cargar los datos.'
        setState({
          data: null,
          error: message,
          loading: false,
        })
      })

    return () => {
      isActive = false
    }
  }, deps)

  return state
}
