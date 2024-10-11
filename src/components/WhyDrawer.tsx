import { useEffect, useState } from 'react'
import { Drawer } from 'vaul'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { twMerge } from 'tailwind-merge'
import sigUrl from '../assets/sig.svg'

export const WhyDrawer = () => {
	const greyBoxClass = 'rounded-sm bg-slate-100 px-1 py-0.5'
	const [direction, setDirection] = useState<'top' | 'right' | 'bottom' | 'left'>('bottom')
	const [directionClass, setDirectionClass] = useState('')

	useEffect(() => {
		const isMobileClass = 'inset-x-0 bottom-0'
		const isNotMobileClass = 'inset-y-0 right-0'
		const isMobile = window.matchMedia('(max-width: 768px)')
		if (isMobile.matches) {
			setDirection('bottom')
			setDirectionClass(isMobileClass)
		} else {
			setDirection('right')
			setDirectionClass(isNotMobileClass)
		}

		isMobile.onchange = (e) => {
			if (e.matches) {
				setDirection('bottom')
				setDirectionClass(isMobileClass)
			} else {
				setDirection('right')
				setDirectionClass(isNotMobileClass)
			}
		}

		return () => {
			isMobile.onchange = null
		}
	}, [])

	return (
		<Drawer.Root direction={direction}>
			<Drawer.Trigger className="hover:text-bold text-slate-600 underline transition-colors duration-200 hover:font-bold hover:text-slate-950">
				but, why?
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-black/40" />
				<Drawer.Content
					className={twMerge(
						'fixed z-10 flex h-full max-h-[97%] w-full rounded-t-lg bg-white outline-none md:h-full md:max-h-full md:w-[450px] md:rounded-l-lg md:rounded-tr-none',
						directionClass
					)}
				>
					<VisuallyHidden.Root>
						<Drawer.Description>
							A simple drawer explaining my motivations for this project.
						</Drawer.Description>
					</VisuallyHidden.Root>

					<div className="space-y-6 overflow-y-auto text-pretty px-4 pb-8 pt-6">
						<Drawer.Handle className="md:hidden" />
						<Drawer.Title className="font-serif text-3xl md:!mt-0">The why.</Drawer.Title>
						<div className="space-y-4">
							<p>
								This is my take on the famous {/* eslint-disable-next-line react/jsx-no-target-blank */}
								<a
									href="https://www.nytimes.com/games/wordle/index.html"
									target="_blank"
									className="text-slate-600 underline transition-colors duration-200 hover:font-bold hover:text-slate-950"
								>
									Wordle Game
								</a>
								, based on {/* eslint-disable-next-line react/jsx-no-target-blank */}
								<a
									href="https://www.joyofreact.com/"
									target="_blank"
									className="text-slate-600 underline transition-colors duration-200 hover:font-bold hover:text-slate-950"
								>
									Josh Comeau&apos;s Joy of React course
								</a>
								.
							</p>
							<p>
								During this project, I delved deeper into React concepts such as memoization (
								<span className={greyBoxClass}>useMemo</span>,{' '}
								<span className={greyBoxClass}>memo</span>) and data management with{' '}
								<span className={greyBoxClass}>context</span> without relying on third-party libraries
								like zustand or redux.
							</p>
							<p>
								I understand that applying these concepts to a small project like this may seem
								unnecessary, but I wanted to push myself and expand my knowledge.
							</p>
						</div>
						<hr className="border-dashed" />

						<div className="flex flex-col items-end gap-2">
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
							<p className="w-[320px] text-right text-xs">
								Built with Vite, React, Typescript, Tailwind, and a sprinkle of Framer Motion.
							</p>
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	)
}
