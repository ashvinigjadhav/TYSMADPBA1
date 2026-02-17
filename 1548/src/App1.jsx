import React from 'react'
import DemoProps from './assets/components/DemoProps'
import DemoProps1 from './assets/components/DemoProps1'
import DemoProps2 from './assets/components/DemoProps2'

export default function App1() {
    const users=[
        {name:"riya", age:20,city:"pune"},
        {name:"deepak", age:21,city:"vapi"},
        {name:"gayatri", age:22,city:"surat"}
    ]
  return (
    <>
        <h1> Demo Props</h1>
        <p>calling the properties fromthe child</p>
        <DemoProps name="riya gandhi"></DemoProps>
        <DemoProps1 name="riya" age="20" city="vapi"></DemoProps1>
        <div>
            {users.map((user,index)=>(
                <DemoProps2
                    key={index}
                    name={user.name}
                    age={user.age}
                    city={user.city}
                />
            ))}
        </div>


    </>
  )
}
