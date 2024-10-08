import { useEffect, useRef, useState, useContext, memo } from 'react'
import { GuessContext } from '../../providers/GuessProvider'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

export const GuessInput = memo(() => {
	const { guesses, setGuesses } = useContext(GuessContext)
	const [guess, setGuess] = useState('')

	const guessInputRef = useRef<HTMLInputElement>(null)

	const handleSubmit = () => {
		const newGuess = { id: crypto.randomUUID(), word: guess }
		const nextGuesses = [...guesses, newGuess]
		setGuesses(nextGuesses)
		setGuess('')
	}

	useEffect(() => {
		const focusInput = () => {
			guessInputRef.current?.focus()
		}
		focusInput()
		window.addEventListener('focus', focusInput)

		return () => {
			window.removeEventListener('focus', focusInput)
		}
	}, [])

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				handleSubmit()
			}}
		>
			<label
				htmlFor="guess-input"
				className="flex flex-col-reverse gap-1"
			>
				<input
					disabled={guesses.length >= NUM_OF_GUESSES_ALLOWED}
					required
					minLength={5}
					maxLength={5}
					title="Input only accepts 5 letters."
					pattern="[a-zA-z]{5}"
					ref={guessInputRef}
					className="peer block w-full rounded-md border border-slate-300 bg-slate-100 text-2xl font-medium focus:border-slate-300 focus:outline-slate-300 focus:ring-0 disabled:border-transparent disabled:bg-slate-50"
					type="text"
					id="guess-input"
					value={guess}
					onChange={(e) => {
						const nextGuess = e.target.value.toUpperCase()
						setGuess(nextGuess)
					}}
				/>
				<span className="text-sm text-slate-700 peer-disabled:text-slate-300">Enter Guess:</span>
			</label>
		</form>
	)
})

GuessInput.displayName = 'GuessInput'
