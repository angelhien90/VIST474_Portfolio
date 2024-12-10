<script>
    let name = 'Greeting';
    
	import pinkCircle from '../src/lib/images/GreetingCircle_Pink.png'
    import yellowCircle from '../src/lib/images/GreetingCircle_Yellow.png'
    import purpleCircle from '../src/lib/images/GreetingCircle_Purple.png'
</script>

<app id="greeting">
    <div class="horizAlign two">
        <div class="item">howdy!</div>
        <div class="item">i'm angel le.</div>
    </div>

    <div class="horizAlign four">
        <div class="item">i'm a 2D</div>
        <div class="item_img"><a href="/2DProject" ><img src={purpleCircle} width=45% alt="purple circle"></a></div>
        <div class="item">, 3D</div>
        <div class="item_img"><a href="/3DProject" ><img src={yellowCircle} width=45% alt="yellow circle"></a>,</div>
    </div>

    <div class="horizAlign four">
        <div class="item">and layout</div>
        <div class="item_img"><a href="/layoutProject" ><img src={pinkCircle} width=45% alt="pink circle"></a></div>
        <div class="item">artist from</div>
        <div class="item">texas a&m uni.</div>
    </div>
    
    <div class="horizAlign two">
        <div class="item" id="smallText">check out my work below!</div>
    </div>

</app>

<style>
    #greeting {
        background-color: var(--light);
        display: flex;
        align-items: center;
        flex-direction: column;
        height: fit-content; /*so the next section on homepage (app_02, tagBox, workGrid) start where greeting/hero section ends*/
        max-height: 80vh;
        width: 80vw;
    }

    #smallText {
        font-family: "jost", sans-serif;
        font-weight: 500;
        font-size: 24pt;
        text-align: left;
        padding: 0px 40px 40px 40px;
        color: var(--dark);
        opacity: 60%;
    }

</style>
 