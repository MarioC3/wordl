import { Header } from './components/Header'
import { Game } from './components/game/Game'
import { Footer } from './components/Footer'
import { WordsProvider } from './providers/WordsProvider'
import { GameProvider } from './providers/GameProvider'
import { LazyMotion } from 'framer-motion'

const loadMotionFeatures = () => import('./lib/motionFeatures').then((res) => res.default)

function App() {
	return (
		<LazyMotion
			features={loadMotionFeatures}
			strict
		>
			<div className="mx-auto flex min-h-screen max-w-[400px] flex-col items-center gap-6 px-4 py-8 tracking-tight text-slate-900 selection:bg-slate-900 selection:text-white md:gap-10">
				<Header />
				<main className="w-full flex-1">
					<WordsProvider>
						<GameProvider>
							<Game />
						</GameProvider>
					</WordsProvider>
				</main>
				<Footer />
			</div>
		</LazyMotion>
	)
}

export default App
