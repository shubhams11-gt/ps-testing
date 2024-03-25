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
    ease: Circ.easeInOut
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
    ease: Expo.easeInOut
})
.to(".green",{
    height: 0,
    duration:1,
    delay:-.3,
    ease: Circ.easeInOut,
})
// .to('.hero .row .parent .child',{
//     y:0,
//     stagger:.1,
//     duration:2,
//     ease: Expo.easeInOut
// })


// function valueSetters(){
//     gsap.set('.nav a',{y:'-100%',opacity:0});
//     gsap.set('.home span .child',{y:'100%'});
// }
// valueSetters();

// function animateHomepage(){
//     let tl = gsap.timeline();

//     tl.to('.hero .parent .child',{
//         y:0,
//         stagger:.1,
//         duration:2,
//         ease: Expo.easeInOut
//     })
// }

// animateHomepage();



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


function locoInitialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.hero'),
        smooth: true
    });    
}

locoInitialize();

