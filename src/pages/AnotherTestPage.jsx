import React, { useState } from 'react'

const accessibleClick = onClick => e => {
  if (e.key === 'Enter') {
    onClick(e)
  }
}

const Bröther = () => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([
    {
      text: 'Share hööks with the bretheren',
      isComplete: false,
    },
    {
      text: 'Ask bröther if you may have höök',
      isComplete: false,
    },
  ])

  const addTodo = text => {
    const newTodos = [{ text }, ...todos]
    setTodos(newTodos)
  }

  const handleInputChange = e => {
    setInputValue(e.currentTarget.value)
  }

  const handleComplete = e => {
    const index = e.currentTarget.getAttribute('data-index')
    const newTodos = [...todos]
    newTodos[index].isComplete = !newTodos[index].isComplete
    setTodos(newTodos)
  }

  const handleRemove = e => {
    e.stopPropagation()
    const index = e.currentTarget.getAttribute('data-index')
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!inputValue) return
    addTodo(inputValue)
    setInputValue('')
  }

  return (
    <div className="contain">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
      <ul>
        {todos.map(({ text, isComplete }, i) => (
          <li
            aria-role="button"
            className={isComplete ? 'complete' : null}
            data-index={i}
            onClick={handleComplete}
            onKeyPress={accessibleClick(handleComplete)}
            tabIndex="0"
          >
            <div>{text}</div>
            <button
              aria-label={`remove todo ${i}`}
              className="remove"
              data-index={i}
              onClick={handleRemove}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Bröther
