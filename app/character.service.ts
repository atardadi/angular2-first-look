import {Injectable} from 'angular2/core'

@Injectable()
export class Character {
	
	constructor(
		public id: number, 
		public name: string,
		public side: string = 'light'
	) {}
}

@Injectable()
export class CharacterService{
	public getCharaters(){
		return [
			new Character(1,'Dadi'),
			new Character(2,'Dadi2'),
			new Character(3,'Dadi3'),
			new Character(4, 'Dadi4')
		];
	} 	
}