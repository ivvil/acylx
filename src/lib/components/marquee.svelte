<script lang="ts">
	export const MarqueeDirection = {
		Up: 0,
		Down: 1
	};

	interface Props {
		text: string;
		speed?: number;
		direction?: MarqueeDirection;
		height?: string;
		pauseOnHover?: boolean;
	}

	let {
		text = '',
		speed = 50,
		direction = MarqueeDirection.Up,
		height = '100px',
		pauseOnHover = false
	}: Props = $props();

	let isPaused = false;
	let content: HTMLDivElement | null = null;

	let duration = $derived(
		content ? Math.max(1, (content as HTMLDivElement).clientHeight / speed) : 1
	);

	let animationStyle = $derived(
		direction == MarqueeDirection.Up ? `scroll-up linear infinite` : `scroll-down linear infinite`
	);

	console.log(animationStyle);
</script>

<div class="marquee-container">
	<div class="marquee-content">
		{#each text as letter}
			{$inspect(letter)}
			<div>{letter}</div>
			<br />
		{/each}
	</div>
</div>

<style>
	.marquee-container {
		overflow: hidden;
		width: 100%;
	}

	.marquee-content {
		white-space: normal;
		line-height: 8px;
		height: 100%;
		text-align: center;
		animation: scroll-up 80s linear infinite;
	}

	.marquee-content.paused {
		animation-play-state: paused;
	}

	@keyframes scroll-up {
		0% {
			transform: translateY(0%);
		}

		100% {
			transform: translateY(-100%);
		}
	}
</style>
