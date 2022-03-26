import React from 'react';
import { FC, useState } from 'react'
import logo from './logo.svg';
import './App.css';


/**                                      Задание
* Сделать так, чтобы в поле ResultInput отображалась сумма значений из двух SourceInput-ов.
* Также пользователь должен иметь возможность вручную ввести значение в ResultInput.
* Если пользователь ввел значение вручную, связь между SourceInput-ми и ResultInput-ом разрывается,
* а поле ResultInput окрашивается в желтый цвет.
* Пользователь может восстановить связь, нажав на кнопку с надписью "link". 
*/
function App() {

  return (
    <div className="App" style={{ display: "flex" }}>
      <SourceInput />
      <SourceInput />
      <ResultInput />
    </div>
  );
}

const SourceInput: FC<{}> = ({ }) => {
  return (
    <input
      type="number"
    />
  )
}

const ResultInput: FC<{}> = ({ }) => {
  return (
    <div>
      <input
        type="number"
      />
      <input
        type="button"
        value="link"
      />
    </div>
  )
}

export default App;
