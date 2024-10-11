import { type PropsWithChildren, useContext } from 'react'
import { twMerge } from 'tailwind-merge'
import { WordsContext } from '../../providers/WordsProvider'
import { GuessContext } from '../../providers/GuessProvider'
import { GameContext } from '../../providers/GameProvider'

interface EndGameBannerProps {
	status: 'win' | 'lose'
	tries: number
}
export const EndGameBanner = ({ status, tries }: PropsWithChildren<EndGameBannerProps>) => {
	const { answer, handleSetAnswer } = useContext(WordsContext)
	const { setGuesses } = useContext(GuessContext)
	const { setGameStatus, setTries } = useContext(GameContext)

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

	const handlePlayAgain = () => {
		setGuesses([])
		handleSetAnswer()
		setTries(0)
		setGameStatus('playing')
	}

	return (
		<div className="space-y-4">
			<div className={twMerge('rounded-md p-4 text-center text-white', statusClass)}>
				<span className="text-xl font-bold">{text[status].title}</span>
				<p>{text[status].text}</p>
			</div>

			<button
				onClick={handlePlayAgain}
				className="w-full rounded-md bg-slate-100 p-4 transition-colors hover:bg-slate-900 hover:text-white"
			>
				Play again!
			</button>
		</div>
	)
}
