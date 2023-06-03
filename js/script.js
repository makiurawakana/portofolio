// 筑紫ゴシック
(function(d) {
  var config = {
    kitId: 'lli8swa',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);


// ハンバーガーメニュー
$(function () {
  $('.sp_btn, .sp_nav li').on('click', function () {
      $('.sp_nav').fadeToggle();
      $('.sp_btn').toggleClass('open');
  });
});


// topへのボタン追従
$(function() {
  var btn = $('.to_top_arrow');
  
  //スクロールしてページトップから800pxに達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 800) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });
});

// // google form
//     let submitted = false;
// <iframe
//     name="hidden_iframe"
//     id="hidden_iframe"
//     style="display: none"
//     onload="if(submitted){window.location='thankyoupage.index.html';}"
// ></iframe>