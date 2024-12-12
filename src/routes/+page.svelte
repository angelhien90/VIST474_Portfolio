<script> // this is homepage
	
	import Greeting from '../greeting.svelte';
	import Header from '../header.svelte';
    import Footer from '../footer.svelte';
	import WorkGrid from '../workGrid.svelte';
	import TagBox from '../tagBox.svelte';
	import '../app.css';

</script>

<Greeting></Greeting>

<main class="app_02">

	<!-- left -->
	<TagBox></TagBox>

	<!-- right -->
	<WorkGrid></WorkGrid>

</main>