import { useState } from 'react'

export default function Counter({initialValue}: {initialValue: number}) {
  const [currentNumber, setCurrentNumber] = useState<number>(initialValue)

  const onIncrement = (): void => {
    setCurrentNumber(current => current + 1)
  }

  const onDecrement = (): void => {
    setCurrentNumber(current => current - 1)
  }

  return (
    <section>
      <div>{`valor actual: ${currentNumber}`}</div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </section>
  )
}
