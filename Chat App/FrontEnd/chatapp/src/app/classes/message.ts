export class Message {
    constructor(
        public to: string,
        public from: string,
        public message:string,
        public image:string,
        public room:string,
        public date?:string       
    ) {}
}
