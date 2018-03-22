
export interface IProject {
    name: string
}

export class Project implements IProject {
    name: string;

    constructor(config: IProject) {
        this.name = config.name;
    }
}