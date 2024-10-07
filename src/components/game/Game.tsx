import { useState } from 'react'
import { Guess } from '../../schema'
import { GuessInput } from './GuessInput'
import { GuessGrid } from './GuessGrid'

export const Game = () => {
	const [guesses, setGuesses] = useState<Guess[]>([])

	const handleSubmitGuess = (newGuess: Guess) => {
		const nextGuesses = [...guesses, newGuess]
		setGuesses(nextGuesses)
	}
	return (
		<div className="space-y-4">
			<GuessGrid guesses={guesses} />
			<GuessInput handleSubmitGuess={handleSubmitGuess} />
		</div>
	)
}
