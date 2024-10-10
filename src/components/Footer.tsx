import sigUrl from '../assets/sig.svg'

export const Footer = () => {
	return (
		<div className="flex flex-col items-center gap-2">
			{/* eslint-disable-next-line react/jsx-no-target-blank */}
			<a
				href="https://beto.codes/"
				target="_blank"
			>
				<img
					className="w-12"
					src={sigUrl}
					alt="Beto's logo"
				/>
			</a>

			<span className="text-xs">© 2024 beto carlos</span>
		</div>
	)
}
