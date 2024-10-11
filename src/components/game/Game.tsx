import { useContext } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { GuessProvider } from '../../providers/GuessProvider'
import { GameContext } from '../../providers/GameProvider'
import { GuessInput } from './GuessInput'
import { GuessGrid } from './GuessGrid'
import { EndGameBanner } from './EndGameBanner'

const variants = {
	initial: { opacity: 0, x: -15 },
	visible: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 15 },
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
								transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
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
								transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
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
