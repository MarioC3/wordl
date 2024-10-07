import { Header } from './components/Header'
import { Game } from './components/game/Game'

function App() {
	return (
		<div className="mx-auto flex max-w-[400px] flex-col justify-center gap-6 p-8 text-slate-900">
			<Header />
			<Game />
		</div>
	)
}

export default App
