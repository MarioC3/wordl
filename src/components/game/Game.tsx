import { type PropsWithChildren, useContext } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { GuessProvider } from '../../providers/GuessProvider'
import { GameContext } from '../../providers/GameProvider'
import { WordsContext } from '../../providers/WordsProvider'
import { GuessInput } from './GuessInput'
import { GuessGrid } from './GuessGrid'

const variants = {
	initial: { opacity: 0, y: -15 },
	visible: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 15 },
}

export const Game = () => {
	const { gameStatus, tries } = useContext(GameContext)
	return (
		<GuessProvider>
			<div className="space-y-6">
				<GuessGrid />
				<div className="">
					<AnimatePresence
						initial={false}
						mode="popLayout"
					>
						{gameStatus === 'playing' ? (
							<m.div
								key={gameStatus}
								variants={variants}
								initial="initial"
								animate="visible"
								exit="exit"
								transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
							>
								<GuessInput />
							</m.div>
						) : (
							<m.div
								key={gameStatus}
								variants={variants}
								initial="initial"
								animate="visible"
								exit="exit"
								transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
							>
								<EndGameBanner
									status={gameStatus}
									tries={tries}
								/>
							</m.div>
						)}
					</AnimatePresence>
				</div>
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
