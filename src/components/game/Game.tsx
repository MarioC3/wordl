import { type PropsWithChildren, useContext } from 'react'
import { GameContext } from '../../providers/GameProvider'
import { GuessProvider } from '../../providers/GuessProvider'
import { GuessInput } from './GuessInput'
import { GuessGrid } from './GuessGrid'
import { twMerge } from 'tailwind-merge'
import { WordsContext } from '../../providers/WordsProvider'

export const Game = () => {
	const { gameStatus, tries } = useContext(GameContext)
	return (
		<GuessProvider>
			<div className="space-y-6">
				<GuessGrid />
				{gameStatus === 'playing' ? (
					<GuessInput />
				) : (
					<EndGameBanner
						status={gameStatus}
						tries={tries}
					/>
				)}
			</div>
		</GuessProvider>
	)
}

interface EndGameBannerProps {
	status: 'win' | 'lose'
	tries: number
}
export const EndGameBanner = ({ status, tries }: PropsWithChildren<EndGameBannerProps>) => {
	const { answer } = useContext(WordsContext)

	const text = {
		win: {
			title: 'You win!',
			text: `Got it in ${tries.toString()} guesses.`,
		},
		lose: {
			title: 'Sorry!',
			text: `The correct answer is ${answer}.`,
		},
	}

	const statusClass = status === 'win' ? 'bg-teal-800' : 'bg-rose-600'

	return (
		<div className={twMerge('rounded-md p-4 text-center text-white', statusClass)}>
			<span className="text-xl font-bold">{text[status].title}</span>
			<p>{text[status].text}</p>
		</div>
	)
}
