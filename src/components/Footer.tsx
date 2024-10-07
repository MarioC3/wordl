import sigUrl from '../assets/sig.svg'

export const Footer = () => {
	return (
		<div className="flex flex-col items-center gap-2">
			<img
				className="w-12"
				src={sigUrl}
				alt="Beto's logo"
			/>
			<span className="text-xs">© 2024 beto carlos</span>
		</div>
	)
}
