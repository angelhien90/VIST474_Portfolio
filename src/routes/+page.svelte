<script> // this is homepage
	
	import Greeting from '../Greeting.svelte';
	import Header from '../Header.svelte';
    import Footer from '../Footer.svelte';
	import '../app.css';
	import tagBox from '../tagBox.svelte';
	import WorkGrid from '../workGrid.svelte';
	import TagBox from '../tagBox.svelte';

</script>

<Greeting></Greeting>

<main class="app_02">

	<!-- left -->
	<TagBox></TagBox>

	<!-- right -->
	<WorkGrid></WorkGrid>

</main>