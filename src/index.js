import React from 'react';
import ReactDOM from 'react-dom';

const name ='Abisinia'


const user = {
  firstName : 'Abisinia', 
  secondName : 'Bautista<3', 
  url : 'https://w7.pngwing.com/pngs/694/291/png-transparent-gun-piolin-tweety-criminal-crime-looney-tunes-melodies-warner-bros-bugs-bunny-thumbnail.png'
}

function getName(user){

  return `${user.firstName} ${user.secondName}`

}

function condicion(user){
  if (user) {
    return <h1>Hello React con {getName(user)}</h1>
  } else {
    return <h1>Hello React con Stranger</h1>
  }


}

const element = (
  <div>
    {/* {(condicion(user))} */}
    <h1>Hello React con {getName(user)}</h1>
    <img src={user.url} />
  </div>

)

// const element =<img src={user.url} />

// const element =<div>{(condicion())}</div>
// const element =<h1>Hello React con {getName(user)}</h1>
const container = document.getElementById('root')


ReactDOM.render(element, container)






/*
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

/*
//etiqueta donde estara
const element = document.createElement('h1')
//texto que va a contener la etiqueta
element.innerText = 'Hello React'
//en que id, en donde estara, en que parte del html
const container = document.getElementById('root')
//aqui se agrega
container.appendChild(element)
*/