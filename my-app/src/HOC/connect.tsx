import React from 'react'
import { debug, log } from '../constant'

export interface ExtraInforType {
  debug: boolean
  log: (value: any) => void
}

export interface InjectedType {
  user: any
}

// export default function connect<T>(Component: React.ComponentType<T & ExtraInforType>) {
//   return function (props: Omit<T, keyof ExtraInforType>) {
//     const _props = props as T
//     return <Component {..._props} debug={debug} log={log} />
//   }
// }

export default function connect<P>(injectedProps: P) {
  return function <T>(Component: React.ComponentType<T & P>) {
    return function (props: Omit<T, keyof P>) {
      const _props = props as T & {}
      return <Component {..._props} {...injectedProps} />
    }
  }
}
