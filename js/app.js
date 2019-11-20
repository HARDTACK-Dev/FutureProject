$('#twitch_page').css('opacity', '0');
setTimeout(function(){
  $('.firstPage').hide();
  $('#wrap').animate({
    opacity:1
  }, 2500)
$('html').css('height', "165%").css('overflow-y', 'scroll');
var sw = 0;
var tw_sw = 0;

// $('#netflix').click(function(){
//   if(sw == 1){
//     $('#netflix').animate({
//       width:120,
//       padding: 0
//     });
//     $('.slide_icon').animate({
//       left:130
//     });
//     $('#whtcha').animate({
//       width:85,
//       'padding-top' : 40,
//       'padding-left' : 30
//     });
//     sw = 0;
//     $('html').css({"background-image":"url(./images/background.jpg)"});
//   }
// }); 

// $('#whtcha').click(function(){
//   if(sw == 0){
//     $('#netflix').animate({
//       width:65,
//       'padding-top': 35,
//       'padding-right' : 30
//     });
//     $('.slide_icon').animate({
//       left: 0
//     });
//     $('#whtcha').animate({
//       width:190,
//       'padding' : 0
//     });
//     $('html').css({"background-image":"url(./images/background_.jpg)"});
//     sw = 1;
//   }
// }); 
//터치슬라이드
let map = setInterval(function(){
  let netflix = $('#netflix').offset();
  // console.log(netflix.left);
  console.log(netflix.left);
  if((netflix.left < 40  && sw == 1) && (netflix.left > -100 && sw == 1)){
    $('#netflix_text').clearQueue().animate({
      opacity:0
    });
    $('#whtcha_text').clearQueue().animate({
      opacity:1
    });
    $('#twitch_text').clearQueue().animate({
      opacity:0
    });
    $('html').css({"background-image":"url(./images/background_.jpg)"});
    $('#netflix').clearQueue().animate({
      width:55,
      'padding-top': 30,
      'padding-right' : 30
    });
    $('#whtcha').clearQueue().animate({
      width:126,
      'padding-top': 40,
      'padding-left' : -10,
    });
    $('#twitch').clearQueue().animate({
      width:55,
      'padding-top': 30,
      'padding-right' : 30
    });
    $('.icon_text').clearQueue().animate({
      height: 40,
    });
    $('#visual').clearQueue().animate({
      height: 190
    });
    $('#content_netflix').clearQueue().animate({
      'opacity' : 0
    });
    $('#content_netflix').clearQueue().hide();
    $('#content_whtcha').clearQueue().animate({
      'opacity' : 1
    });
    $('#content_whtcha').clearQueue().show();
    $('#content_twitch').animate({
      'opacity' : 0
    })
    $('#content_twitch').hide();
    sw = 0;
  }
  if(netflix.left >= 60 && sw == 0){
    sw = 1;
    $('#netflix_text').clearQueue().animate({
      opacity:1
    });
    $('#whtcha_text').clearQueue().animate({
      opacity:0
    });
    $('#twitch_text').clearQueue().animate({
      opacity:0
    });
    $('.icon_text').clearQueue().animate({
      height: 60
    });
    $('#visual').clearQueue().animate({
      height: 210
    });
    $('html').css({"background-image":"url(./images/background.jpg)"});
    $('#netflix').clearQueue().animate({
      width:115,
      'padding-top': 0,
      'padding-right': 0
    });
    $('#whtcha').clearQueue().animate({
      width:86,
      'padding-top': 45,
      'padding-left' : 40
    });
    $('#twitch').clearQueue().animate({
      width:55,
      'padding-top': 30,
      'padding-right' : 30
    }); 
    $('#content_netflix').clearQueue().animate({
      'opacity' : 1
    });
    $('#content_netflix').clearQueue().show();
    $('#content_whtcha').clearQueue().animate({
      'opacity' : 0
    });
    $('#content_whtcha').clearQueue().hide();
    $('#content_twitch').hide();
  }
  if(netflix.left <= -100 && sw == 0){
    if(tw_sw == 1){
      $('#twitch').clearQueue().animate({
        width:115,
        'padding-top': 0,
        'padding-right': 0
      });
      $('#whtcha_text').clearQueue().animate({
        opacity:0
      });
      $('#twitch_text').clearQueue().animate({
        opacity:1
      });
      $('.icon_text').clearQueue().animate({
        height: 60
      });
      $('#visual').clearQueue().animate({
        height: 210
      });
      $('#whtcha').clearQueue().animate({
        width:86,
        'padding-top': 45,
        'padding-left' : 40
      });
      $('#content_whtcha').clearQueue().animate({
        opacity : 0
      });
      $('#content_whtcha').clearQueue().hide();
      $('#content_twitch').clearQueue().show();
      $('#content_twitch').animate({
        opacity : 1
      })
      $('html').css({"background-image":"url(./images/background__.jpg)"});
      sw = 1;
    }
  }
  if(tw_sw == 0){
    $('#money').text("14400");
  }
  if(tw_sw == 1){
    $('#money').text("20200");
  }
}, 0);

var on = 0;
$('#menuicon').click(function(){
  if(on == 0){
    $('.sub_manu').clearQueue().animate({
      'left' : 0,
      'opacity' : 1,
    })
    $('.sub_wrap').clearQueue().animate({
      'right' : 0,
      'opacity' : .6,
      'zIndex' : 140
    }, 10)
    on = 1;
  }

  else{
    $('.sub_manu').clearQueue().animate({
      'left' : -250,
    })
    $('.sub_wrap').clearQueue().animate({
      'opacity' : 0,
      'zIndex' : 90
    }, 10)
    $('#add_page').clearQueue().hide();
    on = 0;
  }
});

$('.sub_wrap').click(function(){
  if(on == 1){
    $("#menuicon").clearQueue().trigger("click");
    $('.sub_manu').clearQueue().animate({
      'left' : -250,
    })
    $('.sub_wrap').clearQueue().animate({
      'opacity' : 0,
      'zIndex' : 90
    }, 10)
    on = 0;
  }
})

$('#op_btn').click(function(){
  $('.opction').clearQueue().css('zIndex', '210');
  $('.opction').clearQueue().show();
  $('html, body').scrollTop(0);
  $('#wrap').hide();
})

$('#add').click(function(){
  $('#add_page').clearQueue().show();
})

$('#x').click(function(){
  // $("#menuicon").clearQueue().trigger("click");
  $('.opction').clearQueue().css('zIndex', '50');
  $('.opction').clearQueue().hide();
  $('#wrap').show();
})

$('#checkbox1').click(function(){
  $('#checkbox1').trigger("click");
})

$('#checkbox2').click(function(){
  $('#checkbox2').trigger("click");
})
$('#add_twitch').click(function(){
  $('#checkbox3').trigger("click");
  if(tw_sw == 0){
    $('#twitch').hide();
    $('#twitch_text').hide();
    $('#content_twitch').hide();
  }
  else{
    $('#twitch').show();
    $('#twitch_text').show();
    $('#content_twitch').show();
    $('#twitch_page').css('opacity', '1');
  }
})

$('#checkbox3').click(function(){
  if(tw_sw == 0){
    $('#twitch').show();
    $('#twitch_text').show();
    $('#content_twitch').show();
    $('#twitch_page').css('opacity', '1');
    tw_sw = 1;
  }
  else{
    $('#twitch').hide();
    $('#twitch_text').hide();
    $('#content_twitch').hide();
    tw_sw = 0;
  }
})

}, 3000)
