import React from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
  handleClickTitle: (value: any) => void
}

function Title(props: TitleProps) {
  return (
    <div>
      <h1 className={styles.title} onClick={() => props.handleClickTitle(100)}>
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
