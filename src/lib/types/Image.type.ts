export type ImageFile = {
	filename: string;
	datum: any;
}

export type ImageInfo = {
	title: string;
	alt: string;
	id: number;
	date?: string;
}

export type Image = {
	file: ImageFile;
	info: ImageInfo;
	comment: any;
}
