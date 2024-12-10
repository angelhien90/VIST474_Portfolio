<script>
	
	let name = 'Footer';
    import blueCircle from '../src/lib/images/FooterCircle_Blue.png';
    import linkedin from '../src/lib/images/LinkedIn_WhiteLogo.png';
    import artstation from '../src/lib/images/ArtStation_WhiteLogo.png';
    import gmail from '../src/lib/images/Gmail_WhiteLogo.png';

</script>

<header>
    <p id="callToAction">testingtesting. hi wade :]</p>
    <div class="footer">
        <h3 id="callToAction">this is anywhere else to reach me!</h3>
    </div>

    <div class="footer">
        <!-- havent gotten the social icons to overlay yet  -->
        <div class="item_img"><a href="https://www.linkedin.com/in/angelhle/" ><img src={blueCircle} width=60% alt="blue circle"></a></div>

        <div class="item_img"><a href="https://www.artstation.com/angelle7" ><img src={blueCircle} width=60% alt="blue circle"></a></div>

        <div class="item_img"><a href="mailto:angelhien90@gmail.com" ><img src={blueCircle} width=60% alt="blue circle"></a></div>

    </div>
</header>

<style>
    .footer {
        background-color: var(--blueD);
        min-height: 12vh;
        width: 100vw;
        display: flex;
        justify-content: center;   
        padding: 0px 15px 15px 15px;
    }
    #callToAction {
        display: flex;
        justify-content: center;
        padding-bottom: 0px;
        color: var(--light);
    }

	/* #homepage{
		font-family: "jost", sans-serif;
		font-weight: 800;
		font-size: 36pt;
		color: var(--light);
		padding: 20px;
		margin-left: 20px;

		&:hover,
		&:focus {
			color: var(--blueM);}
	} */

    /* .horizAlign_Footer {
        display: flex;
        /* vertical-align: middle; 
        width: 95%;
        height: auto;
        /* padding: 0px 10px 0px 10px;
        margin: 0% 2% 0% 2%;
        border: 1px solid transparent; 

        &.two .item,
        &.three .item,
        &.four .item {
            width: auto;
        }
        background-color: red;

        .item {
            display: inline-block;
            vertical-align: middle; 
            min-height: 100px;
            width: auto;
            padding-right: 20px;
            box-sizing: border-box;
            background: transparent;

            font-size: 72px;
            font-weight: 800;
            line-height: auto;
            opacity: 90%;
        }

        .item_img {
            min-height: 100px;
            width: auto;
            padding-right: 20px;
            box-sizing: border-box;
            background: transparent;

            font-size: 72px;
            font-weight: 800;
            line-height: auto;
            opacity: 90%;

            &:hover,
            &:focus {
                opacity: 60%;
                scale: 1.2;
            }
        }
    } */
</style>
