import { Header } from './components/Header'
import { Game } from './components/game/Game'
import { Footer } from './components/Footer'
import { GuessProvider } from './providers/GuessProvider'

function App() {
	return (
		<div className="mx-auto flex h-full max-w-[400px] flex-col items-center gap-8 p-8 tracking-tight text-slate-900">
			<Header />
			<main className="flex-1">
				<GuessProvider>
					<Game />
				</GuessProvider>
			</main>
			<Footer />
		</div>
	)
}

export default App
