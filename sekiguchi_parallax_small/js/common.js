$("html,body").animate({scrollTop:$('.conti').offset().top});

$.parallax({
    direction: 'x',
});



//for(var i = 0 ; i < 10;i++){
//    $('.kumos').append('<div class="kumo"><img src="img/kumo.png" alt=""></div>')
//    $('.kumo').eq(i).css({
//        top: Math.random() * 1000 + 'px',
//        left: Math.random() * 1000 + 'px',
//    })
//}



//背景系------------------------
$('.kumos').parallaxSpeed({
    style: 'backgroundPosition',
    speed: 1.1,
    min: [[undefined, 0]],
    max: [[undefined, 0]],
})
$('.yama').parallaxSpeed({
    style: 'backgroundPosition',
    speed: 1.6,
    min: [[undefined, 0]],
    max: [[undefined, 0]],
})

$('.kusa5').parallaxSpeed({
    style: 'backgroundPosition',
    speed: -0.8,
    min: [[undefined, 0]],
    max: [[undefined, 0]],
})

$('.kusa6').parallaxSpeed({
    style: 'backgroundPosition',
    speed: -0.2,
    min: [[undefined, 0]],
    max: [[undefined, 0]],
})
//-----------------------------

//move-------------------------
$('.mario').parallaxFit({
    start: 2000,
    end: 3300,
    toStyle: {
        left: '800px',
    },
    easing: 'linear',
    
    
    motion1Start: 3300,
    motion1End: 3500,
    motion1ToStyle: {
        top: '198px',
        left: '850px',
    },
    motion1Easing: 'linear',
    
    motion2Start: 3500,
    motion2End: 3700,
    motion2ToStyle: {
        top: '388px',
        left: '900px',
    },
    motion2Easing: 'linear',
    
    motion3Start: 3800,
    motion3End: 4800,
    motion3ToStyle: {
        left: '200px',
    },
    motion3Easing: 'linear',
    
    
    motion4Start: 5600,
    motion4End: 7000,
    motion4ToStyle: {
        left: '1000px',
    },
    motion4Easing: 'linear',
    
    motion5Start: 6300,
    motion5End: 6500,
    motion5ToStyle: {
        top: '198px',
    },
    motion5Easing: 'linear',
    
    motion6Start: 6500,
    motion6End: 6700,
    motion6ToStyle: {
        top: '388px',
    },
    motion6Easing: 'linear',
    
    motion7Start: 6700,
    motion7End: 6900,
    motion7ToStyle: {
        top: '198px',
    },
    motion7Easing: 'linear',
    
    motion8Start: 6900,
    motion8End: 7100,
    motion8ToStyle: {
        top: '388px',
    },
    motion8Easing: 'linear',
    
    motion9Start: 7100,
    motion9End: 7900,
    motion9ToStyle: {
        top: '-100px',
    },
    motion9Easing: 'easeOutCirc',
    
    motion10Start: 7900,
    motion10End: 8200,
    motion10ToStyle: {
        top: '237px',
    },
    motion10Easing: 'easeInCirc',
    
    motion11Start: 8200,
    motion11End: 9500,
    motion11ToStyle: {
        left: '600px',
    },
    motion11Easing: 'linear',
    
    motion12Start: 8200,
    motion12End: 9200,
    motion12ToStyle: {
        top: '-160px',
    },
    motion12Easing: 'easeOutCirc',
    
    motion13Start: 9200,
    motion13End: 9500,
    motion13ToStyle: {
        top: '388px',
    },
    motion13Easing: 'easeInCirc',
    
    motion14Start: 9500,
    motion14End: 9501,
    motion14ToStyle: {
        opacity: '0',
    },
    motion14Easing: 'linear',
    
//    motion14Start: 9500,
//    motion14End: 9800,
//    motion14ToStyle: {
//        top: '88px',
//    },
//    motion14Easing: 'linear',
//    
//    motion15Start: 9800,
//    motion15End: 10400,
//    motion15ToStyle: {
//        top: '1088px',
//    },
//    motion15Easing: 'linear',
//    
//    motion16Start: 10400,
//    motion16End: 10401,
//    motion16ToStyle: {
//        opacity: '0',
//    },
//    motion16Easing: 'linear',
})
$('.mario2').parallaxFit({
    start: 9500,
    end: 9501,
    toStyle: {
        opacity: '1',
    },
    easing: 'linear',
    
    motion1Start: 9500,
    motion1End: 9800,
    motion1ToStyle: {
        top: '-188px',
    },
    motion1Easing: 'linear',
    
    motion2Start: 9800,
    motion2End: 10400,
    motion2ToStyle: {
        top: '888px',
    },
    motion2Easing: 'linear',
    
    motion3Start: 10400,
    motion3End: 10401,
    motion3ToStyle: {
        opacity: '0',
    },
    motion3Easing: 'linear',
})

//-----------------------------


//move1-block------------------
$('.kane').parallaxFit({
    start: 3500,
    end: 3700,
    fromStyle: {
        opacity: '0'
    },
    toStyle: {
        opacity: '1',
        top: '-340px'
    },
    easing: 'easeOutCubic',
    
    
    motion1Start: 3700,
    motion1End: 3900,
    motion1FromStyle: {
        opacity: '1'
    },
    motion1ToStyle: {
        opacity: '0',
        top: '-340px'
    },
    motion1Easing: 'linear',
    
})
$('.bloke').parallaxFit({
    start: 3500,
    end: 3501,
    fromStyle: {
    },
    toStyle: {
        opacity: '0',
    },
    easing: 'linear',
})
//------------------------------


//move2-block-------------------
$('.block2_1').parallaxFit({
    start: 6500,
    end: 6800,
    toStyle: {
//        margin: '-100px 0px 0px -100px',
        top: '-100px',
        left: '-100px',
    },
    easing: 'linear',
    
    motion1Start: 6800,
    motion1End: 6801,
    motion1ToStyle: {
        opacity: '0',
    },
    motion1Easing: 'linear',
})
$('.block2_2').parallaxFit({
    start: 6500,
    end: 6800,
    toStyle: {
        top: '-100px',
        left: '100px',
    },
    easing: 'linear',
    
    motion1Start: 6800,
    motion1End: 6801,
    motion1ToStyle: {
        opacity: '0',
    },
    motion1Easing: 'linear',
})
$('.block2_3').parallaxFit({
    start: 6500,
    end: 6800,
    toStyle: {
        top: '100px',
        left: '-100px',
    },
    easing: 'linear',
    
    motion1Start: 6800,
    motion1End: 6801,
    motion1ToStyle: {
        opacity: '0',
    },
    motion1Easing: 'linear',
})
$('.block2_4').parallaxFit({
    start: 6500,
    end: 6800,
    toStyle: {
        top: '100px',
        left: '100px',
    },
    easing: 'linear',
    
    motion1Start: 6800,
    motion1End: 6801,
    motion1ToStyle: {
        opacity: '0',
    },
    motion1Easing: 'linear',
})

$('.kane2').parallaxFit({
    start: 6900,
    end: 7100,
    fromStyle: {
        opacity: '0'
    },
    toStyle: {
        opacity: '1',
        top: '-340px'
    },
    easing: 'easeOutCubic',
    
    
    motion1Start: 7100,
    motion1End: 7300,
    motion1FromStyle: {
        opacity: '1'
    },
    motion1ToStyle: {
        opacity: '0',
        top: '-340px'
    },
    motion1Easing: 'linear',
    
})
$('.hako2').parallaxFit({
    start: 6900,
    end: 6901,
    fromStyle: {
    },
    toStyle: {
        opacity: '0',
    },
    easing: 'linear',
})
//-----------------------------

//sonota-----------------------
$('.teki1').parallaxFit({
    start: 3100,
    end: 4400,
    toStyle: {
        left: '4000px',
    },
    easing: 'linear',
})

$('.teki2').parallaxFit({
    start: 7400,
    end: 9300,
    toStyle: {
        opacity: '1',
        left: '8000px',
    },
    easing: 'linear',
    
    motion1Start: 8200,
    motion1End: 8201,
    motion1ToStyle: {
        opacity: '0'
    },
    motion1Easing: 'linear',
})
$('.teki2_1').parallaxFit({
    start: 7400,
    end: 9300,
    toStyle: {
        left: '8000px',
    },
    easing: 'linear',
    
    motion1Start: 8200,
    motion1End: 8201,
    motion1ToStyle: {
        opacity: '1',
        height: '50px'
    },
    motion1Easing: 'linear',
    
    motion2Start: 8400,
    motion2End: 8401,
    motion2ToStyle: {
        opacity: '0'
    },
    motion2Easing: 'linear',
})

$('.teki3').parallaxFit({
    start: 9000,
    end: 11000,
    toStyle: {
        left: '7500px',
    },
    easing: 'linear',
})


$('.game').parallaxFit({
    start: 11500,
    end: 11501,
    toStyle: {
        opacity: '1',
        zIndex: '50',
    },
    easing: 'linear',
})
$('.conti').parallaxFit({
    start: 12500,
    end: 12501,
    toStyle: {
        opacity: '1',
        zIndex: '51',
    },
    easing: 'linear',
})
$('.btn').parallaxFit({
    start: 300,
    end: 301,
    toStyle: {
        opacity: '0',
        zIndex: '-10',
        display: 'none',
    },
    easing: 'linear',
})

//$('.all').parallaxFit({
//    start: 11300,
//    end: 11301,
//    toStyle: {
//        zoom: '-5%',
//    },
//    easing: 'linear',
//})


//-----------------------------


//$('.kumo').parallaxFit({
//    start: 0,
//    end: 5000,
//    fromStyle: {
//        marginLeft: '0px'
//    },
//    toStyle: {
//        marginLeft: '4900px'
//    },
//    easing: 'linear',
//    
//})
//$('.yama').parallaxFit({
//    start: 0,
//    end: 5000,
//    fromStyle: {
//        marginLeft: '0px'
//    },
//    toStyle: {
//        marginLeft: '4000px'
//    },
//    easing: 'linear',
//    
//})
//
//$('.kusa5').parallaxFit({
//    start: 0,
//    end: 5000,
//    fromStyle: {
//        marginLeft: '0px'
//    },
//    toStyle: {
//        marginLeft: '-3000px'
//    },
//    easing: 'linear',
//    
//})
//$('.kusa6').parallaxFit({
//    start: 0,
//    end: 5000,
//    fromStyle: {
//        marginLeft: '0px'
//    },
//    toStyle: {
//        marginLeft: '-8000px'
//    },
//    easing: 'linear',
//    
//})
//
$(function() {
    $('html,body').animate({ scrollLeft: 0 }, '1');
});
$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
});
