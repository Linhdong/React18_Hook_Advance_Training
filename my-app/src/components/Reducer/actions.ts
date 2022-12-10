export type ActionType = IncreacseAge | DecreaseAge | IncreaseXAge

type IncreacseAge = { type: 'increase_age' }
type DecreaseAge = { type: 'decrease_age' }
type IncreaseXAge = { type: 'increase_Xage'; payload: number }

export const increaseAgeAction = () => {
  return { type: 'increase_age' } as IncreacseAge
}

export const decreaseAgeAction = () => {
  return { type: 'decrease_age' } as DecreaseAge
}

export const increaseXAgeAction = (payload: number) => {
  return { type: 'increase_Xage', payload } as IncreaseXAge
}
