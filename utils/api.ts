const createURL = (path) => window.location.origin + path

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL('/api/journal'), {
      method: 'POST',
      body: JSON.stringify({ content: 'new entry' }),
    }),
  )

  if (res.ok) {
    return res.json()
  } else {
    throw new Error(
      'Failed to create a new entry. The API request returned an error.',
    )
  }
}
