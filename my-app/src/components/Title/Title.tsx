import React, { useRef } from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
  handleClickTitle: (value: any) => void
}

function Title(props: TitleProps) {
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const clickH1 = () => {
    if (h1Ref.current) {
      h1Ref.current.style.color = 'red'
    }
  }
  return (
    <div>
      <h1 className={styles.title} ref={h1Ref} onClick={clickH1}>
        To do list typescript
      </h1>
    </div>
  )
}

// function equal(prevProp: TitleProps, nextProps: TitleProps) {
//   if (prevProp.address.street === nextProps.address.street) {
//     return true
//   }
//   return false
// }

export default React.memo(Title)
