import { memo, useContext } from 'react'
import { GuessContext } from '../../providers/GuessProvider'
import { checkGuess } from '../../utils/game-helpers'
import { range } from 'lodash-es'
import { twMerge } from 'tailwind-merge'
import { type Result } from '../../schema'

interface Props {
	row: number
}

export const GuessWord = memo(({ row }: Props) => {
	const { guesses } = useContext(GuessContext)

	const result = checkGuess(guesses[row]?.word, 'LEARN') as Result | null

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
		<>
			{range(5).map((col) => (
				<span
					key={col}
					className={twMerge(
						'flex aspect-square items-center justify-center rounded-sm border-2 border-slate-200 text-lg font-bold group-first:first:rounded-tl-xl group-first:last:rounded-tr-xl group-last:first:rounded-bl-xl group-last:last:rounded-br-xl',
						statusClass
					)}
				>
					{result ? result.letter : undefined}
				</span>
			))}
		</>
	)
})

GuessWord.displayName = 'GuessWord'
