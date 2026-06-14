export class Path {
	public readonly fileName: string;

	/**
	 * File extension just contains everything following the last dot ("file.ext1.ext2.ext3" => "ext3")
	 */
	public readonly fileExtension?: string;
	public readonly location: Array<string>;

	private constructor(location: Array<string>, fileName: string, fileExtension?: string) {
		this.fileName = fileName;
		this.fileExtension = fileExtension;
		this.location = location;
	}

	public static fromString(path: string): Path | null {
		let locationParts = path.split("/");
		let fileWithExtension = locationParts.pop();

		if (fileWithExtension == null) {
			return null;
		}

		let fileDotPos = fileWithExtension.lastIndexOf(".")

		return new Path(locationParts, fileWithExtension.slice(0, fileDotPos), fileWithExtension.slice(fileDotPos + 1));
	}

	public getLocationString(): String {
		return this.location.reduce((p, c) => p + c, "");
	}
}
