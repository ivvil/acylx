<script>
	import { page } from '$app/state';

	import { Content, Title } from '$lib/components';
	import { ErrorMsg } from '$lib/services/errormsg';

	let formattedMsg = page.error?.message.replaceAll(' ', ':');
</script>

<!-- TODO Fix styling- needs some gaps -->

<section>
	<Content>
		<div>
			<Title><h2>::{page.status}:{formattedMsg}</h2></Title>

			<div class="msg">
				{ErrorMsg.toString(page.status)}
			</div>

			<div class="txt">
				Progress, that elusive wisp of an idea that dances on the edge of our collective
				consciousness. It's this relentless march forward, a perpetual journey into the unknown,
				fueled by the ceaseless engine of human curiosity. I often find myself caught in the
				currents of progress, a river that flows with the currents of innovation, ingenuity, and the
				undying human spirit. In the grand tapestry of progress, each thread is woven with the
				stories of countless dreamers and thinkers, each contributing their unique hue to the
				ever-expanding mosaic of human achievement. It's a symphony of chaos and order, a cacophony
				of trial and error that somehow, against all odds, forges a path into the uncharted realms
				of tomorrow. I think about the relentless pursuit of knowledge, the insatiable thirst for
				understanding that propels us forward. It's a beacon that beckons us to explore the cosmos,
				to dive into the microscopic realms that elude the naked eye. We are like cosmic detectives,
				deciphering the secrets of the universe, one equation, one discovery at a time. Yet,
				progress is a double-edged sword. As we ascend the peaks of innovation, we also descend into
				the valleys of unintended consequences. The very technologies that promise to liberate us
				can also ensnare us in their intricate webs. There's a paradoxical dance between liberation
				and entanglement, as we navigate the digital landscapes that sprawl like a labyrinth before
				us. The concept of progress is entwined with time, an inexorable force that propels us
				forward. We are like passengers on a train hurtling into the future, unable to look back or
				pause the relentless march of seconds and minutes. And in this temporal voyage, we redefine
				what it means to be human, discarding obsolete ideologies and embracing the ever-evolving
				ethos of the now. Yet, amidst the headlong rush, there's a yearning for balance. A plea to
				not lose sight of the essential, the human touch that gives meaning to our existence.
				Progress shouldn't be a heartless automaton, but a benevolent guide, enhancing our lives
				rather than dictating them. In the end, progress is a mirror reflecting our collective
				aspirations and fears. It's a dance of contradictions, a journey into the unknown where each
				step forward is a leap of faith. As we navigate the uncharted waters of tomorrow, let us not
				forget the essence of our humanity, for in the grand tapestry of progress, the threads of
				compassion, empathy, and connection are the true fabric of our evolution.
			</div>
		</div>
	</Content>
</section>

<style>
	.msg {
		background-color: var(--color-blue-500);
		padding: 2%;
		font-weight: bold;
	}

	.txt {
		color: var(--color-orange-700);
	}
</style>
