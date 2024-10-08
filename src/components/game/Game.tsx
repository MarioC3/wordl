import { memo } from 'react'

import { GuessInput } from './GuessInput'
import { GuessGrid } from './GuessGrid'

export const Game = memo(() => {
	return (
		<div className="space-y-4">
			<GuessGrid />
			<GuessInput />
		</div>
	)
})

Game.displayName = 'Game'
