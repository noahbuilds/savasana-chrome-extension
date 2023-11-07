import { useState } from "react"

function IndexPopup() {
  const [word, setWord] = useState("")
  const [translation, setTranslation] = useState("")
  const [language, setLanguage] = useState("")

  const translateWord = async () => {
    try {
      const response = await fetch(
        `${process.env.PLASMO_PUBLIC_API_BASE_URL}/translate/${word}?lang=${language}`
      )
      if (response.ok) {
        const data = await response.json()

        setTranslation(data.translation)
      } else {
        setTranslation("Translation not found")
      }
    } catch (error) {
      setTranslation("error fetching translation")
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: 300
      }}>
      <h2>Welcome to Savasana Translator Extension</h2>
      <input
        onChange={(e) => {
          setWord(e.target.value), setTranslation("")
        }}
        value={word}
        placeholder="word"
        style={{ padding: 8 }}
      />
      <div style={{ marginTop: 10 }}>
        <label style={{ marginRight: 3 }}>Language</label>
        <select
          name=""
          id=""
          onChange={(e) => {
            setLanguage(e.target.value), setTranslation("")
          }}>
          <option defaultValue={"select language"} value="" disabled>
            Select language
          </option>
          <option value="eng">ENG</option>
          <option value="fr">FR</option>
          <option value="sp">SP</option>
        </select>
      </div>

      <div style={{ marginTop: 12 }}>Translation: {translation}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 9,
          marginTop: 12
        }}>
        <button disabled={!word || !language} onClick={translateWord}>
          Get Translation
        </button>
      </div>

      <a
        href="https://docs.plasmo.com"
        target="_blank"
        style={{ marginTop: 10 }}>
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
