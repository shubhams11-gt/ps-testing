function revealToSpan(){
    document.querySelectorAll('.reveal')
    .forEach(function(elem){
        // Element create kiya 
        let parent = document.createElement('span');
        let child = document.createElement('span');
        // usko class di 
        parent.classList.add('parent');
        child.classList.add('child'); 
        // uss class ko appen kiya
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
        elem.innerHTML = ""; 
        elem.appendChild(parent);
    })
}

revealToSpan();

let tl = gsap.timeline();

tl
.from(".loader .child span",{
    x: 100,
    dealy:1,
    stagger:.2,
    duration:1.4,
    ease: Power3.easeInOut
})
.to(".loader .reveal .parent .child",{
    y:'-100%',
    duration:1,
    dealy:1,
    ease: Circ.easeInOut,
    onComplete:()=>{
        document.querySelectorAll("#Visual>g>g>path, #Visual>g>g>polyline ").forEach(function(e){
            var character = e
        
            character.style.strokeDasharray = character.getTotalLength() + 'px';
            character.style.strokeDashoffset = character.getTotalLength() + 'px';
        })
    
        gsap.to('#Visual>g>g>path , #Visual>g>g>polyline',{
            strokeDashoffset:0,
            duration:2,
            ease:Expo.easeInOut,
            delay:2
        })
    }
})
.to(".loader",{
    height: 0,
    duration:1,
    ease: Circ.easeInOut
})
.to(".green",{
    height: "100%",
    duration:.8,
    top:0,
    delay: -.5,
    ease: Expo.easeInOut,onComplete: () => {
        let reveal2 = document.querySelector('.reveal-2')
        gsap.to('.char-2',{
            y: 0,
            stagger: 0.1,
            delay: 0.3,
            duration: .1
        })
    }
})
.to(".green",{
    height: 0,
    duration:1,
    delay:-.3,
    ease: Circ.easeInOut,onComplete: () => {
        let reveal2 = document.querySelector('.reveal-2')
        gsap.to('.char', {
            y: 0,
            stagger: 0.02,
            delay: 0.1,
            duration: .01
        }).to('.char-2',{
            y: 0,
            stagger: 0.1,
            delay: 0.3,
            duration: .1
        })
    }
})

// -------------------


function cardHoverEffect(){
    document.querySelectorAll('.images .cnt')
    .forEach(function(cnt){
        cnt.addEventListener('mousemove',function(dets){
            document.querySelector('.cursor').children[dets.target.dataset.index].style.opacity=1;
            showingImage = dets.target
            document.querySelector('.cursor').children[dets.target.dataset.index].style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
            showingImage.style.filter="grayscale(1)";
            document.querySelector('.work ').style.backgroundColor = '#' + dets.target.dataset.color;
        })
        cnt.addEventListener('mouseleave',function(dets){
            document.querySelector('.cursor').children[showingImage.dataset.index].style.opacity=0;
            showingImage.style.filter="grayscale(0)";
            document.querySelector('.work ').style.backgroundColor = '#f0f0f0';
        })
    })
}

cardHoverEffect();

// -------------------

// function animateSvg(){
    
// }
// animateSvg();


function locoInitialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.hero'),
        smooth: true
    });    
}

locoInitialize();


