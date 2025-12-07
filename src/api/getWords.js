async function getWords() {
  const res = await fetch('http://localhost:8080/api/random-words')
  return res.json()
}

export default getWords
