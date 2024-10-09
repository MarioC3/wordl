import { type Dispatch, type PropsWithChildren, type SetStateAction, createContext, useMemo, useState } from 'react'

interface GameContext {
	gameStatus: 'playing' | 'win' | 'lose'
	setGameStatus: Dispatch<SetStateAction<'playing' | 'win' | 'lose'>>
	tries: number
	setTries: Dispatch<SetStateAction<number>>
}
export const GameContext = createContext<GameContext>({} as GameContext)

export const GameProvider = ({ children }: PropsWithChildren) => {
	const [gameStatus, setGameStatus] = useState<'playing' | 'win' | 'lose'>('playing')
	const [tries, setTries] = useState(0)

	const value = useMemo(
		() => ({
			gameStatus,
			setGameStatus,
			tries,
			setTries,
		}),
		[gameStatus, tries]
	)

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
