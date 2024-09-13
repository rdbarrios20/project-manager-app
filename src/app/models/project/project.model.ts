export class Project {
    id: number;
    name: string;
    description: string;
    value: string;
    zone: string;
    type: string;
    startDate: Date;
    endingDate: Date;
    cardId: number;
    goalId: number;
    stateId: number;
    userId: number
    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.value = '';
        this.zone = '';
        this.type = '';
        this.startDate = new Date();
        this.endingDate = new Date();
        this.cardId = 0;
        this.goalId = 0;
        this.stateId = 0;
        this.userId = 0;
    }
}
