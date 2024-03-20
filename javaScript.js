$(window).scroll(function(e){
  if($(window).scrollTop()<=0){
    $(".explore, .navbar").addClass("at_top");
  }else{
    $(".explore, .navbar").removeClass("at_top");
  }
});

$(document).on('click','a',function(event){
  event.preventDefault();
  var target=$(this).attr("href");
  
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500);
});

function detect(name,x){
  var place = $(name).offset().left+$(name).width()/2;
  if(Math.abs(x-place)<80){
    $(name).css("bottom","0px");
  } else{
    $(name).css("bottom","-100px");
  }
}

//滑鼠移動事件
$(window).mousemove(function(evt){
  var pagex = evt.pageX;
  var pagey = evt.pageY;
  
  $(".boat").css("transform","translateX("+(pagex/-20+30)+"px) scale(1.2)");
  
  detect(".chi",pagex);
  detect(".roro",pagex);
});


var worksdata = [{url: "https://lh3.googleusercontent.com/nV0pHicfJlteL2u0nxE9CNAvt05BpqEZoR0zP9mw7E-f5tCJJfuzrdlDD9GKWqysHb-xQeTV2Qen22AFJwCH5mnhGZvgwg2zeDGRAkIgoVG7mo6YKj-8QAsg294VjKL9czPJVBhEDA=w1800",
text: "繃出新滋味，一起吃嗎？"},
{url: "https://lh3.googleusercontent.com/RyB3Ab5amoEQOACtqQ08oHN7ETuhPJOKr-GMHIwBoIdaIuzPqtPhMQAyoTMDOAVpikI07UjxCqwX1it2bUywVg3LkT7UoBqpEj5TFIWXuu40NIDN8G5AeJLdHHBz1UB_rcIvFxIeUg=w1800",
text: "如果世界上真的存在翻譯年糕，那我想吃草莓口味的"},
{url: "https://lh3.googleusercontent.com/OgR8fJaJe8BHnoVGEBX1QiiLOMAwwEw1rKEykhdFlJNzQAWCjyc0Aan0Q_BYm32gwndSe2k5la4VM-6GSkFKdXe0gmJVHNggewyiDNJ3-fQ9lywcwGSFgNso5WuD9M187FrHo073Xw=w1800",
text: "中秋節快到了～提早祝福大家中秋節(增肥)快樂!!"},
{url: "https://lh3.googleusercontent.com/Z5-_t6NJXI3d-afF_h85oYvQZQjDEqUb2BuV_PmhBaaXnE9503aGqlnH3Xw6me590HIygsx6yXINcjsR6xsLS-w0zQZoislzLPe5AllGJ2aQ4ovSU2KN7B6YFasklIX_1Zg75JdNtA=w1800",
text: "偷偷的滾雪球"},
{url: "https://lh3.googleusercontent.com/w5jSRUaoCu6m05oJpHUTNapThYikMSf9fA70zf-zj6ztrZ0qq2Yhn5X2xeZ4m5RomvvUbo6S7v3MNYX32wHQcFIprJHKRJ4Qbhq9bcw6owp0KM4pUQe7-qua-JY1ebBb7TSvE_O7vg=w1800",
text: "聯展畫作 - <長夜的陪伴>"},
{url: "https://lh3.googleusercontent.com/J814BExAS_v8ke-wxKfOLtWtTUAT8Y4Wlu5Q50g77iU4sAdI-tJLragz6UDKXPZ_uiwQB4xQgBtro7hc7qEALLWH8_iBV49OZj07QX3FU_pBx9Ai4f2x14UygtuF7UCkzS1iRvfzAA=w1800",
text: "五花肉你別來亂啦！放開你手中的石虎兒！阿捏母湯！！！"},
{url: "https://lh3.googleusercontent.com/o_50B-VyuG8tvnUHp39VqilO3ohcrgFG9Qo0VZl00VYGciCMiuIMo0egHcwELDP_TxOD6St-UXoZ83UWG4GynVCxfkuN1dVs9acDDXv3s_gPBTXMGIjgOFs1AoUr0IvOzn7dVpGa_A=w1800",
text: "The Chinese Ghost Month"},
{url: "https://lh3.googleusercontent.com/ZH41OPgPlsS5Hr_OAu8HX97h5eN9m6jmcyUVcqxLr863U9v2bIMTE-DfazfCGTIsmjAUZZ4pFO44U1LTQLpRuai5Qmc0H65gd_GDAW2sNUhGrLBtlmX5odJUttbBDMb8bpt-g9FU8Q=w1800",
text: "五花肉是個內向的角色，害怕被看見，所以偷偷摸摸地生活著"}
];

var vm = new Vue({
  el: '#works',
  data: {
    works: worksdata
  }
});