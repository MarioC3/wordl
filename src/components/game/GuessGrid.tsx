import { memo } from 'react'
import { range } from 'lodash-es'
import { GuessWord } from './GuessWord'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

export const GuessGrid = memo(() => {
	return (
		<div className="space-y-2">
			{range(NUM_OF_GUESSES_ALLOWED).map((row) => (
				<div
					key={row}
					className="group grid grid-cols-5 gap-2"
				>
					<GuessWord row={row} />
				</div>
			))}
		</div>
	)
})

GuessGrid.displayName = 'GuessGrid'
