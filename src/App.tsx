import './App.css'

import Counter from './components/Counter'
import CounterList from './components/CounterList'

function App() {
  const counterInitialValue = 0
  const counters: { id:number, value: number }[] = [
    {id: 0, value: 0},
    {id: 1, value: 24},
    {id: 2, value: 12},
  ]

  return (
    <>
      <h1>Counter App with TS</h1>
      <Counter id={0} initialValue={counterInitialValue} />
      <CounterList counters={counters}/>
    </>
  )
}

export default App
