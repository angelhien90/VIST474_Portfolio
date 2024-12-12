<script lang="ts">  // using ts for the image gallery T.T

	import taggedSigns_art from '../../lib/images/TaggedSigns_ConceptArt.jpg'

</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="2DProject" />
</svelte:head>

<main class="appProject">

	<div class="app">
		<h1 class="workTitle">Tagged Road Signs</h1>
		<img class="img" src={taggedSigns_art} alt="tagged signs concept art with annotations">

		<div class="info">
		<h3 class="workBrief">(Procreate, Spring 2024)</h3>
		
		<div class="horizAlign two">
			<p class="tag item" id="pu">2D work</p>
			<p class="tag item" id="b">stylized</p>
		</div> 
		
		<p class="infoText">These are road sign props with grime and decals as personal practice in surfacing. Concept art was done in Procreate. Illustrator was used to create the decals, which were then brought into Substance Painter as alphas and textures to complete surfacing. I used Unreal Engine's VDevRig to render the turntable.</p>
		<p class="infoText">I am responsible for all parts.</p>
		</div>
	</div>

</main>



<style>

/* n/a */

</style>