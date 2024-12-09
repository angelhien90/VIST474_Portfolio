<script lang="ts">
    
	import soulBarbershop from '../../lib/images/SoulBarbershop_Shot_01.png';
	
    // image gallery imports ***
	// import Image from '$lib/components/Image.svelte';
	// import Thumbnails from '$lib/components/Thumbnails.svelte';
	// import type { PageData } from '../about/$types';
 
	// export let data: PageData;
 
	// let { image, images } = data;
	// $: ({ image, images } = { ...data });
 
	// let currentSlug = image.slug;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="3DProject" />

	<!-- <title>{image.title} | Svelte CSS Image Slider</title>
	<meta
		name="description"
		content="Svelte CSS image slider"/> -->

</svelte:head>

<div class="app">
	<h1 class="workTitle">Soul Barbershop</h1>
	<img class="img" src={soulBarbershop} alt="soul barbershop recreation">


	<div class="info">
		<h3 class="workBrief">(Blender, Substance Painter, Unreal Engine, Spring 2024)</h3>

		<div class="horizAlign two">
			<p class="tag item" id="pu">3D work</p>
			<p class="tag item" id="b">stylized</p>
		</div> 
		
		<p class="infoText">Myself and Finnegan Hein worked to recreate the barbershop from Soul, from modeling, surfacing, to rendering a short clip.</p>
		<p class="infoText">I am responsible for all parts.</p>
	</div>

</div>

<!-- img gallery frontend *** -->
<!-- <main class="container">
	<div class="wrapper">
		<h1 class="heading">Svelte CSS Image Slider</h1>
		<section class="preview-container">
			<Image {image} />
		</section>
		<div class="thumbnails-wrapper">
			<Thumbnails {currentSlug} {images} />
		</div>
	</div>
</main> -->

<!-- large img component -->
<!-- <picture> 
  <source
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 672px, (max-width: 1280px) 768px, 1024px"
    srcset="
      /assets/36a9348086/palenque.jpg?w=2048&amp;format=avif 2048w,
      /assets/36a9348086/palenque.jpg?w=1536&amp;format=avif 1536w,
      /assets/36a9348086/palenque.jpg?w=1344&amp;format=avif 1344w,
      /assets/36a9348086/palenque.jpg?w=1024&amp;format=avif 1024w,
      /assets/36a9348086/palenque.jpg?w=768&amp;format=avif   768w,
      /assets/36a9348086/palenque.jpg?w=748&amp;format=avif   748w,
      /assets/36a9348086/palenque.jpg?w=672&amp;format=avif   672w,
      /assets/36a9348086/palenque.jpg?w=560&amp;format=avif   560w,
      /assets/36a9348086/palenque.jpg?w=374&amp;format=avif   374w,
      /assets/36a9348086/palenque.jpg?w=280&amp;format=avif   280w
    "
    type="image/avif"
    width="1024"
    height="576" />
  <source
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 672px, (max-width: 1280px) 768px, 1024px"
    srcset="
      /assets/36a9348086/palenque.jpg?w=2048&amp;format=webp 2048w,
			...TRUNCATED...
      /assets/36a9348086/palenque.jpg?w=280&amp;format=webp   280w"
    type="image/webp"
    width="1024"
    height="576" />
  <source
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 672px, (max-width: 1280px) 768px, 1024px"
    srcset="
      /assets/36a9348086/palenque.jpg?w=2048&amp;format=jpeg 2048w,
			...TRUNCATED...
      /assets/36a9348086/palenque.jpg?w=280&amp;format=jpeg   280w"
    type="image/jpeg"
    width="1024"
    height="576"
    class="s-wHckl4XSACcy" />
  <img class="preview s-wHckl4XSACcy" alt="Palenque Mayan temple dwarfs visitors
  amid green grass strong Méxican sunlight"
  src="/assets/36a9348086/palenque.jpg?w=1024" width="1024" height="576"
  fetchpriority="high" style="background:
  url(&quot;data:image/jpeg;base64,/9j/...TRUNCATED&quot;) 0% 0% / cover;">
</picture> -->

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