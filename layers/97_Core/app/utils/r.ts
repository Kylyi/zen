type AsyncFunction<T> = (abortController: () => AbortController) => Promise<T>

function getAbortController() {
  return new AbortController()
}

export async function r<T>(
  fn: AsyncFunction<T>,
  options?: {
    onError?: (error: Record<string, any>) => Promise<any> | any
  },
): Promise<T | undefined> {
  const { onError } = options ?? {}

  try {
    const res = await fn(getAbortController)

    return res
  }
  catch (error) {
    if (onError) {
      return onError(error as Record<string, any>)
    }
  }
}
