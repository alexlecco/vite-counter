import { useState, useContext } from 'react'
import {CounterContext} from './CounterList.tsx'

export default function Counter({id, initialValue}: {id: number, initialValue: number}) {
  const [currentNumber, setCurrentNumber] = useState<number>(initialValue)
  const context: {ListOnIncrement: (function: number)} = useContext(CounterContext)

  const onIncrement = (): void => {
    setCurrentNumber(current => current + 1)
    context.ListOnIncrement(id, currentNumber)
  }

  const onDecrement = (): void => {
    setCurrentNumber(current => current - 1)
    context.ListOnIncrement(id, currentNumber)
  }

  return (
    <section>
      <div>{`valor actual: ${currentNumber}`}</div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </section>
  )
}
