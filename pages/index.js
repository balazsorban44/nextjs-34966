export default function Home() {
  return (
    <div>
      <button
        onClick={async () => {
          const response = await fetch("/api/hello", { method: "POST" })
          const data = await response.json()
          console.log(data)
        }}
      >
        POST
      </button>
      <button
        onClick={async () => {
          const response = await fetch("/api/hello")
          const data = await response.json()
          console.log(data)
        }}
      >
        GET
      </button>
    </div>
  )
}
