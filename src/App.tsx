import React from 'react';
import { FC, useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [m, setM] = useState<number | undefined>(undefined)
  const [color, setColor] = useState("white")

  return (
    <div className="App">
      <SourceInput
        value={x}
        onChange={v => {
          setX(v)
        }}
      />
      <SourceInput
        value={y}
        onChange={v => {
          setY(v)
        }}
      />
      <ResultInput
        value={m == undefined ? x + y : m}
        onChange={v => {
          setM(v)
          setColor("yellow")
        }}
        onReset={() => {
          setM(undefined)
          setColor("white")
        }}
        color={color}
      />
    </div>
  );
}

const SourceInput: FC<{ value: number, onChange: (value: number) => void }> = ({ value, onChange }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={e => onChange(+e.target.value)}
    />
  )
}

const ResultInput: FC<{
  value: number,
  onChange: (value: number) => void
  onReset: () => void,
  color: string
}> = ({ value, onChange, onReset, color }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={e => onChange(+e.target.value)}
      onDoubleClick={onReset}
      style={{ backgroundColor: color }}
    />
  )
}

export default App;
