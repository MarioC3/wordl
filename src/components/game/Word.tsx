import { twMerge } from 'tailwind-merge'
import { type Result } from '../../schema'

interface Props {
	result: string | Result
}

export const Word = ({ result }: Props) => {
	let word = ''
	let statusClass = ''

	if (typeof result !== 'string') {
		word = result.letter
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
			{word}
		</span>
	)
}
