export class Comment {
    constructor(
		public thename: string,
		public message: string,
		public idmovie: string,
	){}

	reset(){
		this.thename = "";
		this.message = "";
	}
}
