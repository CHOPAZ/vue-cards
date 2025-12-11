async function getWords() {
  const res = await fetch('http://localhost:8080/api/random-words')

  if (res.status != 200) {
    return new Error(res.statusText)
  }
  return res.json()
}

export default getWords
