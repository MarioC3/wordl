import { memo, useContext, useMemo } from 'react'
import { checkGuess } from '../../utils/game-helpers'
import { range } from 'lodash-es'
import { twMerge } from 'tailwind-merge'
import { type Result } from '../../schema'
import { WordsContext } from '../../providers/WordsProvider'
interface GuessCharsProps {
	word: string
}
export const GuessChars = memo(({ word }: GuessCharsProps) => {
	const { answer } = useContext(WordsContext) 
	const result = useMemo(() => checkGuess(word, answer) as Result[] | null, [word, answer])

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
GuessChars.displayName = 'GuessChars'

interface CharProps {
	result: Result | undefined
}
const Char = ({ result }: CharProps) => {
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
				'flex aspect-square items-center justify-center rounded-sm border border-slate-300 text-xl font-bold group-first:first:rounded-tl-xl group-first:last:rounded-tr-xl group-last:first:rounded-bl-xl group-last:last:rounded-br-xl',
				statusClass
			)}
		>
			{result ? result.letter : undefined}
		</span>
	)
}
