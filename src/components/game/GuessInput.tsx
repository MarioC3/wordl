import { useState, useContext, memo, useRef } from 'react'
import { GuessContext } from '../../providers/GuessProvider'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { ArrowRight } from 'lucide-react'

export const GuessInput = memo(() => {
	const { guesses, setGuesses } = useContext(GuessContext)
	const [guess, setGuess] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)

	const handleSubmit = () => {
		const nextGuesses = [...guesses, guess]
		setGuesses(nextGuesses)
		setGuess('')
		inputRef.current?.focus()
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				handleSubmit()
			}}
		>
			<label
				htmlFor="guess-input"
				className="flex flex-col gap-1"
			>
				<span className="text-sm text-slate-700">Enter Guess:</span>
				<div className="grid grid-cols-[1fr_auto] gap-2 rounded-md border border-slate-300 p-1 focus-within:border-slate-400">
					<input
						ref={inputRef}
						disabled={guesses.length >= NUM_OF_GUESSES_ALLOWED}
						required
						minLength={5}
						maxLength={5}
						title="Input only accepts 5 letters."
						pattern="[a-zA-z]{5}"
						className="block w-full border-transparent bg-transparent text-xl focus:border-transparent focus:ring-0 focus-visible:border-transparent focus-visible:ring-0"
						type="text"
						id="guess-input"
						value={guess}
						onChange={(e) => {
							const nextGuess = e.target.value.toUpperCase()
							setGuess(nextGuess)
						}}
					/>
					<button className="flex aspect-square items-center justify-center rounded-md bg-slate-100 text-slate-900 transition-colors hover:bg-slate-900 hover:text-white">
						<ArrowRight />
					</button>
				</div>
			</label>
		</form>
	)
})

GuessInput.displayName = 'GuessInput'
