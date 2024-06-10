import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './form.component.html',
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;
    // tener cuidado porque puede ser que no funcione si no se poner con ({...this.character})
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };
  }
}
