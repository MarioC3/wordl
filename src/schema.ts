export interface Guess {
	id: string
	word: string
}

export interface Result {
	letter: string
	status: 'incorrect' | 'correct' | 'misplaced'
}
