
  $("#about").show(2000)
  let sidebarinnerwidth=$(".sidbar-inner").innerWidth()
  $(".sidebar").animate({left:-sidebarinnerwidth})
  $(".sidebar-icon").click(function(){
   
  let sidebarinnervalue=$(".sidebar").css("left")
    if(sidebarinnervalue=="0px"){
    $(".sidebar").animate({left:-sidebarinnerwidth},1000)
  }else{
    $(".sidebar").animate({left:0},1000)
  }
  })
