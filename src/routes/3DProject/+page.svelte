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

<main class="appProject">

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

</main>



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
	
</style>