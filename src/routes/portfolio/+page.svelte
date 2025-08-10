<script>
	import { Canvas, T } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { PerspectiveCamera } from 'three';
</script>

<div class="content" id="title-page">
	<b class="title">SHFT.dev</b>
	<div class="title-grid">
		<div
			style:grid-area="name"
			style:justify-self="start"
			style:align-self="end"
			style:width="100%"
		>
			<h2>Iván Villagrasa</h2>
			<hr />
		</div>
		<div style:grid-area="extra" style:justify-self="start" style:align-self="start">
			<p>Web developer</p>
		</div>
		<div style:grid-area="fun" style:justify-self="start" style:align-self="start">
			<div class="bg-box">
				<Canvas>
					<T.PerspectiveCamera
						makeDefault
						position={[5, 5, 5]}
						oncreate={(ref) => {
							ref.lookAt(-3, 3, 0);
						}}
					/>
					<T.DirectionalLight position={[0, 10, 10]} />
					{#await useGltf('/assets/models/canti.glb') then gltf}
						<T is={gltf.scene}  />
					{/await}
				</Canvas>
			</div>
		</div>
	</div>
</div>

<style>
	.content {
		margin: 2%;
		padding: 2%;
		background-color: var(--color-orange-700);
		width: 90%;
		height: 90%;
		border-radius: 15px;
		border-bottom-right-radius: 0;
	}

	.title-grid {
		padding-left: 10%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 5% 5%;
		grid-template-areas:
			'name photo'
			'extra fun';
		height: 100%;
	}

	.title {
		font-family: 'Corporation Games';
		font-size: 1em;
	}

	hr {
		border-color: var(--color-neutral-800);
		width: 100%;
	}

	h2 {
		font-size: 4em;
		margin: 0;
	}

	.bg-box {
		background-color: white;
		border-radius: 15px;
		border-top-left-radius: 0;
	}
</style>
