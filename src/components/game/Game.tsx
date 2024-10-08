import { GuessProvider } from '../../providers/GuessProvider'
import { GuessInput } from './GuessInput'
import { GuessGrid } from './GuessGrid'

export const Game = () => {
	return (
		<GuessProvider>
			<div className="space-y-4">
				<GuessGrid />
				<GuessInput />
			</div>
		</GuessProvider>
	)
}
