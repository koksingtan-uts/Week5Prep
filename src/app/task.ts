export class Task {
    constructor(
        public id: number,
        public name: string,
        public date: string,
        public goal: string,
        public deliverable: string,
        public priority: string,
        public starttime: string,
        public endtime: string,
        public reminder: string,
        public process: string
    ) { }
}