<script> // +layout.svelte is SIBLING to +page.svelte and applies to all child route files,, so universal styles
	
	import Footer from '../Footer.svelte';
	import Greeting from '../Greeting.svelte';
	import Header from '../Header.svelte';
	import '../app.css';

	let { children } = $props();

</script>

<!-- add navbar from sv component yayayay -->
<Header></Header> 

<main class="app">
	{@render children()}
</main>

<Footer></Footer>

<style>
	/* n/a */
</style>
