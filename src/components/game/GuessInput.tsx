import { useEffect, useRef, useState } from 'react'

export const GuessInput = () => {
	const guessInputRef = useRef<HTMLInputElement>(null)
	const [guess, setGuess] = useState('')

	const handleSubmit = () => {
		console.log({ guess })
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
				className="flex flex-col gap-1"
			>
				<span className="text-slate-700">Enter Guess:</span>
				<input
					required
					minLength={5}
					maxLength={5}
					title="Input only accepts 5 letters."
					pattern="[a-zA-z]{5}"
					ref={guessInputRef}
					className="block w-full rounded-md border-transparent bg-slate-100 text-2xl focus:border-slate-300 focus:ring-0"
					type="text"
					id="guess-input"
					value={guess}
					onChange={(e) => {
						const nextGuess = e.target.value.toUpperCase()
						setGuess(nextGuess)
					}}
				/>
			</label>
		</form>
	)
}
