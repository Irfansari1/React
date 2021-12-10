import React, { useState } from 'react'
const FunctionalComponent = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)
  const [user, setUser] = useState({ name: 'Felix', age: 25, email: 'felix@gmail.com' })
  // const increase = () => {
  //   setCount(count + 1)
  // }
  const increase = () => setCount(count + 1)
  const increaseAge = () => setAge(age + 1)
  const updateUser = () => {
    setUser({ ...user, name: 'John' })
  }
  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count: {count}</p>
      {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
      <button onClick={increase}>Increase</button>
      <p>Age : {age}</p>
      <button onClick={increaseAge}>Increase Age</button>
      <p>Name: {user.name} </p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={updateUser}>UpdateUser</button>
    </div>
  )
}
export default FunctionalComponent
