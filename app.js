
var checked = document.querySelector('#light-darks')
var checkedMobile = document.querySelector('#light-darks-mobile')
var blogtitle = document.querySelectorAll('.blog-box-title-h3')
var next = document.querySelectorAll('.carousel-control-next')
var prev = document.querySelectorAll('.carousel-control-prev')
checked.addEventListener('click',function(){
    document.body.classList.toggle('dark')
   blogtitle.forEach(function(item){
     item.classList.toggle('lights')
   })
   next.forEach(function(item){
     item.classList.toggle('darks')
   })
   prev.forEach(function(item){
     item.classList.toggle('darks')
   })
   document.querySelector('.footer').classList.toggle('darks-footer')
})
checkedMobile.addEventListener('click',function(){
    document.body.classList.toggle('dark')
   blogtitle.forEach(function(item){
     item.classList.toggle('lights')
   })
   next.forEach(function(item){
     item.classList.toggle('darks')
   })
   prev.forEach(function(item){
     item.classList.toggle('darks')
   })
   document.querySelector('.footer').classList.toggle('darks-footer')
})
var bar = document.querySelector('.navbar-bar')
var containersTablet = document.querySelector('.containers-tablet')
var close = document.querySelector('.icon-close')
var overPlay= document.querySelector('.overplay')

if(containersTablet)
{
 
    bar.addEventListener('click',function(){
     if(containersTablet)
     {
      containersTablet.classList.add('show')
     }
     if(overPlay)
     {
     overPlay.classList.add('show')
     }
  })
  overPlay.addEventListener('click',function()
  {
    containersTablet.classList.remove('show')
    if(overPlay)
     {
     overPlay.classList.remove('show')
     }
  })
  close.addEventListener('click', function()
  {
    containersTablet.classList.remove('show')
    if(overPlay)
    {
    overPlay.classList.remove('show')
    }
  })
}
var iconsearch = document.querySelector('.search-icon')
var navbarsearch = document.querySelector('.searchs-icon')
iconsearch.addEventListener('click',function(){
   navbarsearch.classList.toggle('show')
})
var creatDow = document.querySelector('.creatdow')
var navbarMobnile = document.querySelector('.navbars-icon-mobile')
creatDow.addEventListener('click', function(){
  navbarMobnile.classList.toggle('show')
});
//Scroll-return
var btnScroll = document.querySelector('.return')
var docEL = document.documentElement
 document.addEventListener('scroll', function(){
  var scrollToTal = docEL.scrollHeight - docEL.clientHeight
  if((docEL.scrollTop / scrollToTal) >= 0.4)
  {
    btnScroll.style.opacity = 1
  }
  else
  {
    btnScroll.style.opacity = 0
  }
  btnScroll.addEventListener('click', function(){
   docEL.scrollTo({
    top: 0,
    behavior: 'smooth'
   })
  })
 })