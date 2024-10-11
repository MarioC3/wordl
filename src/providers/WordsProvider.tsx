import { type PropsWithChildren, createContext, useMemo, useState } from 'react'
import { WORDS } from '../data'
import { sample } from 'lodash-es'

interface WordsContext {
	answer: string
	handleSetAnswer: () => void
}
export const WordsContext = createContext<WordsContext>({} as WordsContext)

export const WordsProvider = ({ children }: PropsWithChildren) => {
	const [answer, setAnswer] = useState(sample(WORDS) ?? '')

	const handleSetAnswer = () => {
		setAnswer(sample(WORDS) ?? '')
	}
	const value = useMemo(() => ({ answer, handleSetAnswer }), [answer])

	return <WordsContext.Provider value={value}>{children}</WordsContext.Provider>
}
