import { UserResponse } from './UserResponse';

export class Response {

    constructor(public Id: number, public Label: string, public QuestionId: number, public UserResponses: Array<UserResponse>) {
    }
}
