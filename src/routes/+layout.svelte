<script>
	// import rttw_featured from '../lib/images/RTTW_FeaturedShot.png';
	// import stopSign from '../lib/images/Stop_Frame_16.png';
	// import zen from '../lib/images/Zen_shot_01.png'
	
	import Header from '../Header.svelte';
	import '../app.css';

	// @type {{children: import('svelte').Snippet}} 

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>

	</footer>
</div>

<style>

</style>
