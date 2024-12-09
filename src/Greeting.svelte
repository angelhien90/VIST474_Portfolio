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
        min-height: 100vh;
        width: 80vw;
    }

    .horizAlign {
        display: inline-block;
        vertical-align: middle;
        width: 95%;
        height: auto;
        padding: 0px 10px 0px 10px;
        margin: 0% 2% 0% 2%;
        border: 1px solid transparent;
        
        &.two .item, 
        &.four .item {width: auto;}

        .item {
            display: inline-block;
            vertical-align: middle;
            height: auto;
            min-height: 100px;
            padding-right: 20px;
            box-sizing: border-box;			
            background: transparent;

            font-size: 72px;
            font-weight: 800;
            line-height: auto;
            opacity: 90%;
        }
        .item_img {
            display: inline-block;
            vertical-align: middle;
            height: auto;
            min-height: 100px;
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
 