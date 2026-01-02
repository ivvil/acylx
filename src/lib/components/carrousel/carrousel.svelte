<script lang="ts">
	import type { ImageInfo } from '$lib/types/ImageInfo.type';
	import Carrouselpreview from './carrouselpreview.svelte';

	interface Props {
		images: ImageInfo[];
	}

	let { images }: Props = $props();

	let selectedIdx = $state(0);
	const imageMap = $derived(new Map(images.map((i) => [i.position, i])));
	let selectedImage = $derived(imageMap.get(selectedIdx));
</script>

<div class="container">
	<div class="main-image">
		<img src={selectedImage?.src} />
	</div>
	<div class="data">
		<div class="image-picker">
			{#each images as image}
				<button
					onclick={() => {
						selectedIdx = image.position;
					}}
				>
					<Carrouselpreview src={image.src} alt={image.alt} index={image.position} />
				</button>
			{/each}
		</div>
		<div class="image-info">
			<h2>{selectedImage?.title}</h2>
		</div>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-auto-columns: 1fr;
		grid-template-columns: 1fr 30%;
		grid-template-rows: 1fr;
		gap: 0 0;
		grid-template-areas: 'image data';
	}

	.main-image {
		grid-area: image;
	}

	.data {
		grid-area: data;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 0 0;
		grid-template-areas:
			'picker'
			'info';
	}

	.image-picker {
		grid-area: picker;
	}

	.image-info {
		grid-area: info;
	}
</style>
