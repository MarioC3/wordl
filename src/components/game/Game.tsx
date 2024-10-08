import { useContext } from 'react'
import { Guess } from '../../schema'
import { GuessInput } from './GuessInput'
import { GuessGrid } from './GuessGrid'
import { GuessContext } from '../../providers/GuessProvider'

export const Game = () => {
	const { guesses, setGuesses } = useContext(GuessContext)

	const handleSubmitGuess = (newGuess: Guess) => {
		const nextGuesses = [...guesses, newGuess]
		setGuesses(nextGuesses)
	}
	return (
		<div className="space-y-4">
			<GuessGrid />
			<GuessInput handleSubmitGuess={handleSubmitGuess} />
		</div>
	)
}
