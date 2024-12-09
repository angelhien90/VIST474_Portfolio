<script>
	// import { page } from '$app/stores';
	let name = 'Header';
</script>

<header>
	<div class="navBar">
        <nav>
			<a id="homepage" href="/">angel le</a>
		</nav>

        <nav> 
            <a class="button" href="#aboutSection">about</a>
        </nav>
    </div>
</header>

<style>
	#homepage{
		font-family: "jost", sans-serif;
		font-weight: 800;
		font-size: 36pt;
		color: var(--light);
		padding: 20px;
		margin-left: 20px;

		&:hover,
		&:focus {
			color: var(--blueM);}
	}
</style>
