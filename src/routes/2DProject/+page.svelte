<script lang="ts">  // using ts for the image gallery T.T

	import taggedSigns_art from '../../lib/images/TaggedSigns_ConceptArt.jpg'

</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="2DProject" />
</svelte:head>

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



<style>
	.app {
		border: 1px solid transparent;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.img {
		width: 70vw;
		height: auto;
	}

	.info {
		background-color: var(--gray);
		color: var(--dark);
		border-radius: 10px;
		padding: 40px;
		margin: 40px;
		width: 60vw;
	}

	.infoText {
		font-size: 18px;
		font-weight: 500;
		margin: 5px 0px 10px 0px;
	}

	.tag {
		border-radius: 5px;
		padding: 5px 30px 5px 30px;
		margin: 10px;
		
		font-size: 9px;
		font-weight: 600;
	}
	
	#pu {
		background-color: var(--purpleL);
		color: var(--purpleD);
	}

	/* #y {
		background-color: var(--yellowM);
		color: var(--yellowD);
	}
	#pi {
		background-color: var(--pinkL);
		color: var(--pinkD); 
	}*/

	#b {
		background-color: var(--blueM);
		color: var(--blueD);
	}

    .horizAlign {
        display: inline-block;
        vertical-align: middle;
        width: 95%;
        height: auto;
        padding: 5px;
        margin: 5px;
        border: 1px solid transparent;
        
        &.two .item, 
        &.four .item {width: auto;}

        .item {
            display: inline-block;
            vertical-align: middle;
            min-height: fit-content;
            box-sizing: border-box;			
            background: transparent;
			
            font-size: inherit;
            font-weight: 800;
            opacity: 90%;
        }
    }

	.workBrief {
		font-weight: 700;
		font-size: 22px;
		margin: 5px;
	}

	.workTitle {
		font-family: 'Jost', serif;
		font-size: 40px;
		font-weight: 600;

	}

.container {
		display: grid;
		place-items: center;
		grid-template-columns: var(--max-width-full);
		min-height: 100vh;
		width: var(--max-width-full);
		padding-top: var(--spacing-12);
	}
 
	.wrapper {
		display: grid;
		grid-template-columns: var(--max-width-full);
		grid-template-areas: 'preview' 'thumbnails' 'heading';
		grid-template-rows: auto auto auto;
		width: calc(var(--max-width-full) - var(--spacing-12));
		padding: var(--spacing-6) var(--spacing-outer) var(--spacing-24);
		max-width: var(--max-width-full);
	}
  
	@media (width > 48rem) {
		.wrapper {
			padding: var(--spacing-6) auto var(--spacing-24);
			width: min(var(--max-width-full), var(--_max-width-wrapper));
		}
	}
 
	.preview-container {
		grid-area: preview;
		aspect-ratio: 16 / 10;
		border-radius: var(--spacing-px-2);
		margin-bottom: var(--spacing-6);
		max-width: 100%;
	}
 
	.thumbnails-wrapper {
		grid-area: thumbnails;
		position: relative;
		min-height: var(--spacing-28);
 
		@media (width > 80rem) {
			min-height: var(--spacing-36);
		}
	}
 
	h1 {
		grid-area: heading;
		color: var(--colour-light);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-bold);
		text-align: right;
		width: var(--max-width-full);
 
		@media (width > 42rem) {
			font-size: var(--font-size-4);
		}
 
		@media (width > 64rem) {
			font-size: var(--font-size-5);
		}
	}

</style>