import { useGlobalContext } from "../context/GlobalContext"

function Balance() {
  const data = useGlobalContext()

  return (
    <div>Balance

      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  )
}

export default Balance