import { useState } from 'react'

export const RandomColorize = ( {onStateChange} ) => {
    const [color, changeColor] = useState([0, 0, 0]) 
    const  RED   = 0
         , GREEN = 1
         , BLUE  = 2 ; // indexes of the rgb colors in color array

    // return random from 0 to 1000
  const random = (n) => {
    return Math.floor(Math.random() * n + 1);
  }

  const colorChanger = () => {
    changeColor([random(255), random(255), random(255)]);
    onStateChange();
  }
  
  return (
    <div>
        <h2>Завдання 3. Увага! на базі компонента ;)</h2>
        <p style={{color: `rgb(${color[RED]}, ${color[GREEN]}, ${color[BLUE]})`}}>
            Створити параграф тексту. В якості inline-стилю для цього параграфу застосувати стейт, який буде 
            змінювати колір тексту при натисканні на кнопку.
        </p>
        <button onClick={colorChanger}>click me for colorize!</button>
    </div>
  )
}

/* Завдання 3
Створити параграф тексту. В якості inline-стилю для цього параграфу застосувати стейт, який буде 
змінювати колір тексту при натисканні на кнопку.
Порада: для створення випадкового кольору 
використовуйте rgb() з трьома значеннями від 0 до 255. 
*/ 