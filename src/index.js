import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './components/calculator'

document.body.style = 'background-image: radial-gradient(circle at 50% 50%, #503f66 0, #3b2f60 25%, #1f1f59 50%, #001253 75%, #00004d 100%);'
const App = () => (
  <Calculator> </Calculator>

)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
