import { memo, useContext, useEffect } from 'react'
import { GuessContext } from '../../providers/GuessProvider'
import { WordsContext } from '../../providers/WordsProvider'
import { GameContext } from '../../providers/GameProvider'
import { GuessChars } from './GuessChars'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from 'lodash-es'

export const GuessGrid = memo(() => {
	const { answer } = useContext(WordsContext)
	const { guesses } = useContext(GuessContext)
	const { setGameStatus, setTries } = useContext(GameContext)

	useEffect(() => {
		const guessesLength = guesses.length
		const lastGuess = guesses.at(-1)

		if (lastGuess === answer) {
			setGameStatus('win')
			setTries(guessesLength)
		} else {
			if (guessesLength >= NUM_OF_GUESSES_ALLOWED) {
				setGameStatus('lose')
			}
		}
	}, [guesses, answer, setGameStatus, setTries])

	return (
		<div className="space-y-2">
			{range(NUM_OF_GUESSES_ALLOWED).map((row) => (
				<div
					key={row}
					className="group grid grid-cols-5 gap-2"
				>
					<GuessChars word={guesses[row]} />
				</div>
			))}
		</div>
	)
})

GuessGrid.displayName = 'GuessGrid'
