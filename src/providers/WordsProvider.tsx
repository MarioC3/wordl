import { type PropsWithChildren, createContext } from 'react'
import { WORDS } from '../data'
import { sample } from 'lodash-es'

export const WordsContext = createContext<{ answer: string }>({ answer: '' })

export const WordsProvider = ({ children }: PropsWithChildren) => {
	const value = { answer: sample(WORDS) ?? '' }
	console.log(value)

	return <WordsContext.Provider value={value}>{children}</WordsContext.Provider>
}
