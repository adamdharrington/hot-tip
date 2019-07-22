import {createContext} from 'react'

export const HotTipContext = createContext([{}, e => e])
export const HotTipConsumer = HotTipContext.Consumer
