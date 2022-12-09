import React, { useEffect, useRef, useState } from 'react'

function WatchTimer() {
  const [second, setSecond] = useState<number>(0)
  const intervalRef = useRef<any>(null)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecond((prev) => prev + 1)
      console.log('setInterval dang chay ')
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
      console.log('WatchTimer unmount')
    }
  }, [])
  return <div>Watch :{second}</div>
}

export default function Watch() {
  const [visible, setVisible] = useState<boolean>(true)
  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}>Set Visible WatchTimer</button>
      {visible && <WatchTimer />}
    </div>
  )
}
