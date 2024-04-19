import './App.css'

import Counter from './components/Counter'

function App() {
  const counterInitialValue = 0

  return (
    <>
      <h1>Counter App with TS</h1>
      <Counter initialValue={counterInitialValue} />
    </>
  )
}

export default App
