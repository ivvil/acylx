
export class ErrorMsg {
	public static toString(msg: number): string {
		switch (msg) {
			case 404:
				return "The page you were looking for is not found or not yet built."
			default:
				return "Unknown Error"
		}
	}
}
