import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Hello(){
  return(
    <div>
      <h2>custom React!</h2>
    </div>
  )
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com/",
//     target: "_blank",
//   },
//   children: "Visit google",
// };

const anotherElement = (
  <a href='https://www.google.com/' target='_blank'>visit google</a>
)

const anotherUser = 'Shrii';

const reactElement = React.createElement(
  'a',
  {href: 'https://goggle.com', target: '_blank'},
  'visit google!!!',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement

)
