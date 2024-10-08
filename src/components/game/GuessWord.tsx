import { memo, useContext } from 'react'
import { GuessContext } from '../../providers/GuessProvider'
import { checkGuess } from '../../utils/game-helpers'
import { range } from 'lodash-es'
import { twMerge } from 'tailwind-merge'
import { type Result } from '../../schema'

interface GuessWordProps {
	row: number
}

export const GuessWord = memo(({ row }: GuessWordProps) => {
	const { guesses } = useContext(GuessContext)

	const result = checkGuess(guesses[row]?.word, 'LEARN') as Result[] | null

	return (
		<>
			{range(5).map((col) => (
				<Char
					key={col}
					result={result?.[col]}
				/>
			))}
		</>
	)
})

GuessWord.displayName = 'GuessWord'

interface CharProps {
	result: Result | undefined
}
const Char = memo(({ result }: CharProps) => {
	console.log('Rendering Char')
	let statusClass = ''
	if (result) {
		switch (result.status) {
			case 'incorrect':
				statusClass = 'bg-slate-600 border-slate-600 text-white'
				break
			case 'correct':
				statusClass = 'bg-emerald-600 border-emerald-600 text-white'
				break
			case 'misplaced':
				statusClass = 'bg-amber-600 border-amber-600 text-white'
				break
		}
	}

	return (
		<span
			className={twMerge(
				'flex aspect-square items-center justify-center rounded-sm border-2 border-slate-200 text-lg font-bold group-first:first:rounded-tl-xl group-first:last:rounded-tr-xl group-last:first:rounded-bl-xl group-last:last:rounded-br-xl',
				statusClass
			)}
		>
			{result ? result.letter : undefined}
		</span>
	)
})

Char.displayName = 'Char'
