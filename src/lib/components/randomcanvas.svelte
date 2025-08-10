<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
	  width: number,
	  height: number,
	  draw: boolean,
	  rate: number,
	}

  let { width = 100, height = 100, draw = $bindable(true), rate = $bindeable() }: Props = $props();

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	onMount(() => {
		ctx = canvas.getContext('2d');
	});

  
</script>

<canvas bind:this={canvas} {width} {height}></canvas>
