<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		index: number;
	}

	let { src, alt, index }: Props = $props();
</script>

<div>
  	<div class="badge">
		{index}
	</div>
	<img {src} {alt} />
</div>

<style>
	div {
		background-color: white;
		padding: 2%;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.badge {
	  text-align: right;
	}
</style>
