import { useEffect } from 'react'
import { useState } from 'react'

export const Counter = () => {
  const [counter, setCounter] = useState(17)

  useEffect(() => {
    let countdown = setInterval(() => {
        setCounter((prevCount)=>{
            if (prevCount + 1 === 25) {
              clearInterval(countdown)
            }
            return prevCount + 1;
        })
    }, 1000)

    return () => {
        clearInterval(countdown);
    } 
  },[])

  return <div className='counte'>Counter: {counter}</div>
}

