import { UserResponse } from './UserResponse';

export class Response {

    // private userResponsesByResponseID: Array<UserResponse>;
// tslint:disable-next-line: variable-name
    private _numberUserResponse: number;

    get numberUserResponse() {
        this._numberUserResponse = this.UserResponses.filter(r => r.ResponseId === this.Id).length;
        return this._numberUserResponse;
    }

    constructor(public Id: number, public Label: string, public QuestionId: number, public UserResponses: Array<UserResponse>) {
    }

    // getNumberUserResponse(id: number): number {
    //     this.userResponsesByResponseID = this.UserResponses.filter(r => r.ResponseId = id);
    //     console.log(this.userResponsesByResponseID);
    //     return this.userResponsesByResponseID.filter(r => r.ResponseId === id).length;
    // }
}
