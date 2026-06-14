import type { Album, AlbumInfo } from "$lib/types/Album.type";
import type { Image, ImageFile, ImageInfo } from "$lib/types/Image.type";
import type { MdImport } from "$lib/types/MdImport.type";
import { Path } from '$lib/services/path'

export class Photos {
	public static async getAlbums(): Promise<Array<Album>> {
		const albumPaths = import.meta.glob('/src/photos/*', { eager: false });
		const albumEntries = Object.entries(albumPaths)

		const albumPromisses = albumEntries.map(([path]) => this.buildAlbum(path));
		const albums = (await Promise.all(albumPromisses)).filter((item): item is Album => item != null);

		return albums;

	}

	static async buildAlbum(path: string): Promise<Album | null> {
		let indexMd: MdImport;
		try {
			indexMd = await import(`${path}/index.md`);
		} catch (err) {
			return null;
		}

		const photoPromises = (await this.getValidPhotosForAlbum(path)).map(p => this.buildImageFromFile(p));

		const photos = (await Promise.all(photoPromises)).filter((item): item is Image => item != null);


		return {
			info: indexMd.meta as AlbumInfo,
			description: indexMd.default,
			photos
		};
	}

	static async getValidPhotosForAlbum(albumDirectory: string): Promise<Array<ImageFile>> {
		// NOTE Here we whitelist image types and blacklist files starting with and '_' (we can use them for album thumbnails without including them in an album)
		const images = import.meta.glob([
			`/src/photos/${albumDirectory}/*.{avif, webp, jpg, jxl}`,
			`!/src/photos/${albumDirectory}/_*.*`]);

		return Promise.all(
			Object.entries(images).map(async ([filename, importfn]) => ({
				filename,
				datum: (await importfn()).default
			}))
		);
	}

	static async buildImageFromFile(imageFile: ImageFile): Promise<Image | null> {
		let imagePath = Path.fromString(imageFile.filename);

		if (imagePath == null) {
			return null
		}

		let mdImport: MdImport;

		try {
			mdImport = await import(`${imagePath.getLocationString()}/${imagePath.fileName}.md`);
		} catch (err) {
			return null;
		}


		return {
			file: imageFile,
			info: mdImport.meta as ImageInfo,
			comment: mdImport.default
		}
	}
}
