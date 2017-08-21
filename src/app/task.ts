export class Task {
    constructor(
        public taskId: number,
        public name: string,
        public date: string,
        public goal: string,
        public deliverable: string,
        public priority: string,
        public startTime: string,
        public endTime: string,
        public reminder: string,
        public process: string
    ) { }
}