// let $li_list = document.querySelectorAll('li')
// for (let i = 0;i <= $li_list.length;i++){
//     $li_list[i].addEventListener('click', ()=>{
//         console.log('click')
//     })
// }


// let $button = document.querySelector('form>button'),
//     $input = document.querySelector('form>input'),
//     $a = document.querySelector('a')
// $button.addEventListener('click',(event)=>{
//     if ($input.value.trim() == ''){
//     event.preventDefault()
// } else {
//     alert('send data')
// }
// })
// $a.addEventListener('click',(event)=>{
//     event.preventDefault()
// })
// let small = document.querySelector('.small'),
//     medium = document.querySelector('.medium')
//     big =  document.querySelector('.big') 
// small.addEventListener('click',(event)=>{
//     console.log('small')
//     event.stopPropagation()
// })
// medium.addEventListener('click',(event)=>{
//     console.log('medium')
//     event.stopPropagation()
// })
// big.addEventListener('click',(event)=>{
//     console.log('big')
// })

 

let $nav_li = document.querySelectorAll('.nav>li'),
    $subnav = document.querySelectorAll('.subnav'),
    $subnav_li = document.querySelectorAll('.subnav>li'),
    $overlay = document.querySelector('.overlay'),
    $article = document.querySelectorAll('article'),
    $chevron = document.querySelectorAll('.chevron'),
    $close = document.querySelectorAll('.close'),
    index = -1,
    ind = -1

for(let i = 0; i < $nav_li.length;i++){
    $nav_li[i].addEventListener('click',(event)=>{
        $subnav[i].style.display = 'block'
        
        if (index >= 0){
           $subnav[index].style.display = 'none'
        }
        index = i
    })
    $chevron[i].addEventListener('mousemove', ()=>{
        $chevron[i].style.transformOrigin = 'center'
        $chevron[i].style.transform = 'rotate(180deg)'
        $chevron[i].style.transition = '1s'
    })
    $chevron[i].addEventListener('mouseout', ()=>{
      $chevron[i].style.transform = 'rotate(0deg)'
    }) 
}
for(let i = 0; i < $subnav_li.length;i++){
    $subnav_li[i].addEventListener('mousemove',(event)=>{
        $subnav_li[i].classList.add('hovered')
    })
    $subnav_li[i].addEventListener('mouseout',(event)=>{
        $subnav_li[i].classList.remove('hovered')
    })
    $subnav_li[i].addEventListener('click',(event)=>{
        event.stopPropagation()
        $overlay.classList.add('d-flex')
        if($subnav_li[i].hasAttribute('data-message-id')){
            ind = +$subnav_li[i].getAttribute('data-message-id')
            $article[ind].classList.add('display')
        }        
    })
}
$overlay.addEventListener('click' , (event)=>{
    $overlay.classList.remove('d-flex')
    


})
for(let i = 0;i < $close.length;i++){
$close[i].addEventListener('click',()=>{
    $overlay.classList.remove('d-flex')
})
}
for (let i = 0;i < $article.length;i++){
    $article[i].addEventListener('click',(event)=>{
        event.stopPropagation()
    })

}
