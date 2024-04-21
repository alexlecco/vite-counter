import Counter from './Counter'
import { createContext } from 'react'

export const CounterContext: React.Context<null> = createContext(defaultValue: {id: 0, value: 0}: void => {})

export default function CounterList({counters}: {counters: {id: number, value: number}[]}) {
  const onIncrement = (id: number, value: number): void => {
    console.log('onIncrement id: '+id+' value:'+value)
  }

  const onDecrement = (id: number, value: number): void => {
    console.log('onDecrement id: '+id+' value:'+value)
  }

  return (
    <section>
      <h2>CounterList</h2>
      <CounterContext.Provider value={{ListOnIncrement: onIncrement, ListOnDecrement: onDecrement}}>
        {counters.map((counter: {id: number, value: number}) => (
          <Counter key={Counter.id} id={counter.id} initialValue={counter.value} />
        ))}
      </CounterContext.Provider>
    </section >
  )
}
