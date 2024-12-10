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
        max-width: 100vw;
        display: flex;
        justify-content: center;   
        padding: 0px 15px 15px 15px;
    }
    
    #callToAction {
        display: flex;
        margin-top: 3%;
        padding-bottom: 0px;
        color: var(--light);
    }
</style>
