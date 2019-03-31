import { State } from '../enums/state.enum';
import { Question } from './Question';

export class Form {
// tslint:disable-next-line: no-shadowed-variable
    constructor(public Id: number, public State: State, public Title: string, public Question: Array<Question> ) { }
}
