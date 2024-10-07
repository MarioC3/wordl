import { range } from 'lodash-es'
import { Guess } from '../../schema'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from '../../utils/game-helpers'

interface Props {
	guesses: Guess[]
}

export const GuessGrid = ({ guesses }: Props) => {
	const gridGuesses = guesses.map((guess) => guess.word.split(''))

	return (
		<div className="space-y-2">
			{range(NUM_OF_GUESSES_ALLOWED).map((row) => (
				<div
					key={row}
					className="group grid grid-cols-5 gap-2"
				>
					{range(5).map((col) => (
						<span
							key={col}
							className="flex aspect-square items-center justify-center rounded-sm border-2 border-slate-200 text-lg font-bold group-first:first:rounded-tl-xl group-first:last:rounded-tr-xl group-last:first:rounded-bl-xl group-last:last:rounded-br-xl"
						>
							{gridGuesses[row] ? gridGuesses[row][col] : ''}
						</span>
					))}
				</div>
			))}
		</div>
	)
}
