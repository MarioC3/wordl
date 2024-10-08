import { type Dispatch, type PropsWithChildren, type SetStateAction, createContext, useState, useMemo } from 'react'

interface GuessContext {
	guesses: string[]
	setGuesses: Dispatch<SetStateAction<string[]>>
}
export const GuessContext = createContext<GuessContext>({} as GuessContext)

export const GuessProvider = ({ children }: PropsWithChildren) => {
	const [guesses, setGuesses] = useState<string[]>([])

	const value = useMemo(() => ({ guesses, setGuesses }), [guesses])

	return <GuessContext.Provider value={value}>{children}</GuessContext.Provider>
}
