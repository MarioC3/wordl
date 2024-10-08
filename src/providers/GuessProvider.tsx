import { type Dispatch, type PropsWithChildren, type SetStateAction, createContext, useState } from 'react'
import { type Guess } from '../schema'

interface GuessContext {
	guesses: Guess[]
	setGuesses: Dispatch<SetStateAction<Guess[]>>
}
export const GuessContext = createContext<GuessContext>({} as GuessContext)

export const GuessProvider = ({ children }: PropsWithChildren) => {
	const [guesses, setGuesses] = useState<Guess[]>([])

	return <GuessContext.Provider value={{ guesses, setGuesses }}>{children}</GuessContext.Provider>
}
