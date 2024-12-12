<script>

	let name = 'Header';

</script>

<header>
	<div class="navBar">
        <nav>
			<a id="homepage" href="/">angel le</a>
		</nav>

        <nav> 
            <a class="button" href="#aboutSection">about</a> 
			<!-- not developing an 'about me' page, just button for final project submission -->
        </nav>
    </div>
</header>

<style>

	/* homepage title for navbar (my name) */

	#homepage{ 
		height: 6vh;
		margin-bottom: 20px;
		font-family: "jost", sans-serif;
		font-weight: 800;
		font-size: auto;
		color: var(--light);
		margin-left: 20px;

		&:hover,
		&:focus {
			color: var(--blueM)};
			transition: 0.3s all;
	
		@media (min-width: 440px) { 
			height: 12vh;
			margin-bottom: 20px;
			font-size: 56pt;
		}
	}
</style>
