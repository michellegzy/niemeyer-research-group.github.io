type Person = {
	id: string;
	name: string;
	active: boolean;
	advised: boolean;
	level: "undergrad" | "masters" | "phd" | "postdoc" | "faculty" | "researcher" | "director";
	dept: string;
	coadvisor ?: string | null;
	bio: string;
	url: string;
	dissertation?: string;
	msthesis?: string;
	honorsthesis?: string;
	startdate: number;
	enddate: number | null;
	achievements ?: string[];
	orcid?: string;
};
export default Person;