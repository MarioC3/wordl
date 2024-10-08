import { memo, useContext } from 'react'
import { GuessContext } from '../../providers/GuessProvider'
import { GuessChars } from './GuessChars'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from 'lodash-es'

export const GuessGrid = memo(() => {
	const { guesses } = useContext(GuessContext)

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
