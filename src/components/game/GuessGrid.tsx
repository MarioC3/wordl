import { useContext } from 'react'
import { range } from 'lodash-es'
import { Word } from './Word'
import { GuessContext } from '../../providers/GuessProvider'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from '../../utils/game-helpers'
import { type Result } from '../../schema'

export const GuessGrid = () => {
	const { guesses } = useContext(GuessContext)

	const gridGuesses = range(NUM_OF_GUESSES_ALLOWED).map((row) => {
		if (!guesses[row]) return range(5).map(() => ' ')
		return checkGuess(guesses[row].word, 'LEARN') // -> Change second parameter
	})

	return (
		<div className="space-y-2">
			{gridGuesses.map((row, i) => (
				<div
					key={i}
					className="group grid grid-cols-5 gap-2"
				>
					{row?.map((result, i) => (
						<Word
							key={i}
							result={result as string | Result}
						/>
					))}
				</div>
			))}
		</div>
	)
}
