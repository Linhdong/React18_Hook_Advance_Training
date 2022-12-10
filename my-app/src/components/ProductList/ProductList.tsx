import React, { useState, useEffect, useDeferredValue, startTransition, useTransition } from 'react'

const ProductCards = ({ name }: { name: string }) => {
  const [products, setProducts] = useState<string[]>([])
  useEffect(() => {
    console.log(name)
    const SIZE = 9999
    const result = []
    for (let i = 0; i < SIZE; i++) {
      result.push(name)
    }
    setProducts(result)
  }, [name])

  // Render một danh sách lớn => tốn thời gian
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>{product}</div>
      ))}
    </div>
  )
}

export default function ProductList() {
  const [name, setName] = useState<string>('')
  const [defferdName, setDefferdName] = useState<string>('')
  const [pending, setTransition] = useTransition()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setName(value)
    setTransition(() => {
      setDefferdName(value)
    })
  }
  //   const defferdName = useDeferredValue(name)
  console.log('pending: ', pending)
  return (
    <div>
      <h1>Product List</h1>
      <input value={name} onChange={handleChange} type='text' placeholder='type to render' autoFocus />
      {pending && <div>......Loading</div>}
      {!pending && <ProductCards name={defferdName} />}
    </div>
  )
}
