import { Header } from './components/Header'
import { Game } from './components/game/Game'
import { Footer } from './components/Footer'

function App() {
	return (
		<div className="mx-auto flex h-full max-w-[400px] flex-col items-center gap-6 p-8 tracking-tight text-slate-900">
			<Header />
			<main className="flex-1">
				<Game />
			</main>
			<Footer />
		</div>
	)
}

export default App
