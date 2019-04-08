import { InputType } from '../enums/inputType.enum';
import { Response } from './Response';

export class Question {
// tslint:disable-next-line: no-shadowed-variable
    constructor(public Id: number, public Rang: number, public Type: InputType, public Label: string,
                public Responses: Array<Response>, public FormId: number) {
    }
}
