import { WhyDrawer } from './WhyDrawer'
import sigUrl from '../assets/sig.svg'
import { SiGithub } from '@icons-pack/react-simple-icons'

export const Footer = () => {
	return (
		<footer className="flex flex-col items-center gap-3">
			{/* eslint-disable-next-line react/jsx-no-target-blank */}
			<a
				href="https://beto.codes/"
				target="_blank"
			>
				<img
					className="w-14"
					src={sigUrl}
					alt="Beto's logo"
				/>
			</a>

			<div className="flex flex-col justify-center gap-0.5 text-xs">
				<span>a project by beto carlos.</span>
				<WhyDrawer />
			</div>

			{/* eslint-disable-next-line react/jsx-no-target-blank */}
			<a
				href="https://github.com/MarioC3/wordl"
				target="_blank"
				className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 p-2 text-white transition-colors hover:bg-slate-100 hover:text-slate-900"
			>
				<SiGithub size={16} />
				<span className="text-xs">Github Repo</span>
			</a>
		</footer>
	)
}
