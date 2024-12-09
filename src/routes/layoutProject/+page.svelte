<script lang="ts">
	import rttw_featured from '../../lib/images/RTTW_FeaturedShot.png';
	import stopSign from '../../lib/images/Stop_Frame_12.png';
	import zen from '../../lib/images/Zen_Shot_01.png';
	
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="2DProject"/>
</svelte:head>

<div class="app">
	<h1 class="workTitle">Zen Animation</h1>
	<img class="img" src={zen} alt="zen shot 01">

	<div class="info">
		<h3 class="workBrief">(Blender, Substance Painter, Unreal Engine, Winter 2023)</h3>

		<div class="horizAlign two">
			<p class="tag item" id="pu">layout</p>
			<p class="tag item" id="b">realistic</p>
		</div> 
		
		<p class="infoText">In 'Zen', a team animation depicting a mechanical samurai jamming out to hip-hop-infused music, I was the environment lead and layout artist. Using a mix of Quixel assets and peer-made assets, I made all iterations of the landscape based on concept art provided.</p>
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

	#y {
		background-color: var(--yellowM);
		color: var(--yellowD);
	}

	#pi {
		background-color: var(--pinkL);
		color: var(--pinkD); 
	}

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

/* image gallery */
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
