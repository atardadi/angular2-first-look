import {Component, OnInit} from 'angular2/core';
import {Character, CharacterService} from './character.service';
import {CharacterComponent} from './character.component';


@Component({
	selector: 'my-character-list',
	templateUrl: 'app/character-list.template.html',
	directives: [CharacterComponent],
	providers: [CharacterService]
})
export class CharacterListComponent implements OnInit{
	private selectedCharacter: Character;
	private characters: Character[] = [];
	private messages: string[] = [];

	constructor(private _characterService: CharacterService) { }

	ngOnInit() {
		this.characters = this._characterService.getCharaters();
	}

	clear() {
		this.selectedCharacter = null; 
	}

	log(msg: string) {
		this.messages.splice(0, 0, msg);
		console.log(msg);
	}

	private selectCharacter(toSelect: Character) {
		this.selectedCharacter = toSelect;
	}
}