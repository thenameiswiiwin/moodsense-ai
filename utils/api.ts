const createURL = (path: string) => window.location.origin + path

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL('/api/journal'), {
      method: 'POST',
      body: JSON.stringify({ content: 'new entry' }),
    }),
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  } else {
    throw new Error(
      'Failed to create a new entry. The API request returned an error.',
    )
  }
}

export const updateEntry = async (id: string, content: string) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: 'PATCH',
      body: JSON.stringify({ content }),
    }),
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  } else {
    throw new Error(
      'Failed to update the entry. The API request returned an error.',
    )
  }
}

export const askQuestion = async (question: string) => {
  const res = await fetch(
    new Request(createURL('/api/question'), {
      method: 'POST',
      body: JSON.stringify({ question }),
    }),
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  } else {
    throw new Error('Failed to fetch the answer.')
  }
}
