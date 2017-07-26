
export class Repo {
	
	public label : string;
	
	constructor(
		public _id : 		string,
		public type: 		any,
		public place:		any,
		public date: 		any,
		public repoId:		any,
		public contents:	any
	) {}
	
	static fromData(data: any, ref: any) {
		let repo = new this(data._id, data.typeid, data.place, data.date, data.repo, [] );
		repo.setLabel(ref);
		return repo;
	}
	
	public setLabel(ref: any) {
		let t = ref.getRepoType(this.type);
		this.label = t ? t.name : "rien";
		if(this.place) {
			this.label = this.label + ` (${this.place.name})`;
		}
	}
}