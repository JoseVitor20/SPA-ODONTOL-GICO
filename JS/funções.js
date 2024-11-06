$('nav a').hover(function(){
    $('nav li').removeClass('selected');
    $(this).parent().addClass('selected')
})

document.getElementById('anburg').addEventListener('click',function(){
    document.getElementById('menu').style.display='block';
})

document.getElementById('fechar').addEventListener('click',function(){
    document.getElementById('menu').style.display='none';
})

window.addEventListener('scroll',function(){
    const maxScroll = document.body.scrollHeight - window.innerHeight
    const porcentagem = (window.scrollY / maxScroll) * 100
    document.getElementById('scroll').style.width= `${porcentagem}%`

    console.log(document.body.scrollHeight)
    console.log(window.innerHeight)
    console.log(window.scrollY)
    
})


// document.getElementById('scroll')