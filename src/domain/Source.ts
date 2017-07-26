
export class Source {

	public label : string;
	
	constructor (
		public _id:		string,
		public type:	any,
		public place: 	any,
		public title:	string,
		public repoId:	any
	){}
	
	static fromData(data: any, ref: any) {
		let source = new this(data._id, data.typeid, data.place, data.title, data.repo);
		source.setLabel(ref);
		return source;
	}
	
	public setLabel(ref: any) {
		let t = ref.getSourceType(this.type);
		this.label = t ? t.name : "rien";
	}

}