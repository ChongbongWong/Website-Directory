$(document).ready(function() {
	$(".panel_web").css("display","block");
	$(".tab").children().click(function(){
		$(".tab").children().removeClass();
		$(this).addClass("search_active");
		$('.panel_open_menu').css("display","none");
		$(".open_button").css("background-position","3px -23px");
		switch($(this).index()){
			case(1):
				$(".panel").children().css("display","none");
				$(".panel_web").css("display","block");
				$(".showing_logo a").removeClass();
				$(".showing_logo a").addClass("baidu");
				$(".showing_logo a").text("baidu");
				$(".showing_logo a").attr("href","http://www.baidu.com");
				$(".panel_form").attr("action","http://www.baidu.com/s");
				$(".search_text").attr("name","wd");
			break;
			case(2):
				$(".panel").children().css("display","none");
				$(".panel_video").css("display","block");
				$(".showing_logo a").removeClass();
				$(".showing_logo a").addClass("bilibili");
				$(".showing_logo a").text("bilibili");
				$(".showing_logo a").attr("href","http://www.bilibili.com/");
				$(".panel_form").attr("action","http://www.bilibili.com/search");
				$(".search_text").attr("name","keyword");
			break;
			case(3):
				$(".panel").children().css("display","none");
				$(".panel_community").css("display","block");
				$(".showing_logo a").removeClass();
				$(".showing_logo a").addClass("baidutieba");
				$(".showing_logo a").text("baidutieba");
				$(".showing_logo a").attr("href","http://tieba.baidu.com/");
				$(".panel_form").attr("action","http://tieba.baidu.com/f");
				$(".search_text").attr("name","query");
			break;
			case(4):
				$(".panel").children().css("display","none");
				$(".panel_image").css("display","block");
				$(".showing_logo a").removeClass();
				$(".showing_logo a").addClass("sogouimg");
				$(".showing_logo a").text("sogouimg");
				$(".showing_logo a").attr("href","http://pic.sogou.com/");
				$(".panel_form").attr("action","http://pic.sogou.com/pics");
				$(".search_text").attr("name","query");
			break;
			case(5):
				$(".panel").children().css("display","none");
				$(".panel_music").css("display","block");
				$(".showing_logo a").removeClass();
				$(".showing_logo a").addClass("xiami");
				$(".showing_logo a").text("xiami");
				$(".showing_logo a").attr("href","http://www.xiami.com/");
				$(".panel_form").attr("action","http://www.xiami.com/search");
				$(".search_text").attr("name","key");
			break;
			case(6):
				$(".panel").children().css("display","none");
				$(".panel_wiki").css("display","block");
				$(".showing_logo a").removeClass();
				$(".showing_logo a").addClass("baidubaike");
				$(".showing_logo a").text("baidubaike");
				$(".showing_logo a").attr("href","http://baike.baidu.com/");
				$(".panel_form").attr("action","http://baike.baidu.com/search/word");
				$(".search_text").attr("name","word");
			break;
			case(7):
				$(".panel").children().css("display","none");
				$(".panel_translate").css("display","block");
				$(".showing_logo a").removeClass();
				$(".showing_logo a").addClass("youdao");
				$(".showing_logo a").text("youdao");
				$(".showing_logo a").attr("href","http://dict.youdao.com/");
				$(".panel_form").attr("action","http://dict.youdao.com/search");
				$(".search_text").attr("name","q");
			break;
			default:
				$(".panel").children().css("display","none");
				$(".panel_web").css("display","block");
			break;
		}
	});



	$(".open_button").click(function(){
		var show = $(".panel_open_menu").css("display");
		if (show == "block") {
			$('.panel_open_menu').css("display","none");
			$(".open_button").css("background-position","3px -23px");
		}
		if (show == "none") {
			$(".panel_open_menu").css("display","block");
			$(".open_button").css("background-position","3px -44px");
		}
	});

	$(".panel_open_menu").children().click(function(){
		var $whose = $(this).attr("class");
		$('.panel_open_menu').css("display","none");
		$(".open_button").css("background-position","3px -23px");
		$(".showing_logo a").removeClass();
		$(".showing_logo a").addClass($whose);
		$(".showing_logo a").text($whose);
		switch($whose){
			case("baidu"):
				$(".showing_logo a").attr("href","http://www.baidu.com");
				$(".panel_form").attr("action","http://www.baidu.com/s");
				$(".search_text").attr("name","wd");
			break;
			case("google"):
				$(".showing_logo a").attr("href","http://www.google.com/hk");
				$(".panel_form").attr("action","https://www.google.com.hk/search");
				$(".search_text").attr("name","q");
			break;
			case("bing"):
				$(".showing_logo a").attr("href","http://cn.bing.com/");
				$(".panel_form").attr("action","http://cn.bing.com/search");
				$(".search_text").attr("name","q");
			break;
			case("sogou"):
				$(".showing_logo a").attr("href","http://www.sogou.com");
				$(".panel_form").attr("action","http://www.sogou.com/web");
				$(".search_text").attr("name","query");
			break;
			case("qihoo360"):
				$(".showing_logo a").attr("href","http://www.so.com/");
				$(".panel_form").attr("action","http://www.so.com/s");
				$(".search_text").attr("name","q");
			break;
			case("bilibili"):
				$(".showing_logo a").attr("href","http://www.bilibili.com/");
				$(".panel_form").attr("action","http://www.bilibili.com/search");
				$(".search_text").attr("name","keyword");
			break;
			case("acfun"):
				$(".showing_logo a").attr("href","http://www.acfun.cn/");
				$(".panel_form").attr("action","http://www.acfun.cn/search");
				$(".search_text").attr("name","query");
			break;
			case("soku"):
				$(".showing_logo a").attr("href","http://www.soku.com/");
				$(".panel_form").attr("action","http://www.soku.com/v");
				$(".search_text").attr("name","keyword");
			break;
			case("nico"):
				$(".showing_logo a").attr("href","http://www.nicovideo.jp/");
				$(".panel_form").attr("action","http://www.nicovideo.jp/search/");
				$(".search_text").attr("name","s");
			break;
			case("baidutieba"):
				$(".showing_logo a").attr("href","http://tieba.baidu.com/");
				$(".panel_form").attr("action","http://tieba.baidu.com/f");
				$(".search_text").attr("name","kw");
			break;
			case("sogouimg"):
				$(".showing_logo a").attr("href","http://pic.sogou.com/");
				$(".panel_form").attr("action","http://pic.sogou.com/pics");
				$(".search_text").attr("name","query");
			break;
			case("googleimg"):
				$(".showing_logo a").attr("href","http://cn.bing.com/");
				$(".panel_form").attr("action","http://images.google.com.hk/images");
				$(".search_text").attr("name","q");
			break;
			case("bingimg"):
				$(".showing_logo a").attr("href","http://image.baidu.com/");
				$(".panel_form").attr("action","http://cn.bing.com/images/search");
				$(".search_text").attr("name","q");
			break;
			case("qihoo360img"):
				$(".showing_logo a").attr("href","http://image.so.com/");
				$(".panel_form").attr("action","http://image.so.com/i");
				$(".search_text").attr("name","q");
			break;
			case("xiami"):
				$(".showing_logo a").attr("href","http://www.xiami.com/");
				$(".panel_form").attr("action","http://www.xiami.com/search");
				$(".search_text").attr("name","key");
			break;
			case("baidumusic"):
				$(".showing_logo a").attr("href","http://music.baidu.com/");
				$(".panel_form").attr("action","http://music.baidu.com/search");
				$(".search_text").attr("name","key");
			break;
			case("baidubaike"):
				$(".showing_logo a").attr("href","http://baike.baidu.com/");
				$(".panel_form").attr("action","http://baike.baidu.com/search/word");
				$(".search_text").attr("name","word");
			break;
			case("youdao"):
				$(".showing_logo a").attr("href","http://dict.youdao.com/");
				$(".panel_form").attr("action","http://dict.youdao.com/search");
				$(".search_text").attr("name","q");
			break;
			case("googlefanyi"):
				$(".showing_logo a").attr("href","http://translate.google.cn/");
				$(".panel_form").attr("action","http://fanyi.baidu.com/#en/zh/");
				$(".search_text").attr("name","text");
			break;
			case("baidufanyi"):
				$(".showing_logo a").attr("href","http://fanyi.baidu.com/");
				$(".panel_form").attr("action","http://translate.google.cn/?hl=en");
				$(".search_text").attr("name","text");
			break;
			default:
			break;
		}
	});



});