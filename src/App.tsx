import { Header } from './components/Header'
import { Game } from './components/game/Game'
import { Footer } from './components/Footer'
import { WordsProvider } from './providers/WordsProvider'
import { LazyMotion } from 'framer-motion'

const loadMotionFeatures = () => import('./lib/motionFeatures').then((res) => res.default)

function App() {
	return (
		<LazyMotion
			features={loadMotionFeatures}
			strict
		>
			<div className="mx-auto flex h-full max-w-[400px] flex-col items-center gap-8 p-8 tracking-tight text-slate-900">
				<Header />
				<main className="flex-1">
					<WordsProvider>
						<Game />
					</WordsProvider>
				</main>
				<Footer />
			</div>
		</LazyMotion>
	)
}

export default App
