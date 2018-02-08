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

	$.getJSON('https://f123.herokuapp.com/api/v1.0/movies/coming_soon',function(coming_soon){
		for (var i =0; i <8; i++) {
			var $coming_soon_Info = coming_soon.subjects[i];
			var $coming_img_url =$coming_soon_Info.image;
			var $coming_name = $coming_soon_Info.name;
			var $coming_collect =$coming_soon_Info.collect_count;
			var $coming_douban_id = $coming_soon_Info.douban_id;
			var $coming_update = $coming_soon_Info.update;
			$("#sort_movie_left_ul li:eq("+i+") a").attr("href","https://movie.douban.com/subject/"+$coming_douban_id);
			$("#sort_movie_left_ul li:eq("+i+") img").attr("src",$coming_img_url);
			$("#sort_movie_left_ul li:eq("+i+") div:eq(0) p").html($coming_name);
			$("#sort_movie_left_ul li:eq("+i+") div:eq(1) p").html($coming_collect+"人收藏<br/>"+$coming_update);
		}
	});
	$.getJSON('https://f123.herokuapp.com/api/v1.0/movies/in_theaters',function(in_theaters){
		for (var i =0; i <8; i++) {
			var $in_theaters_Info = in_theaters.subjects[i];
			var $in_theaters_img_url =$in_theaters_Info.image;
			var $in_theaters_name = $in_theaters_Info.name;
			var $in_theaters_score =$in_theaters_Info.score;
			var $in_theaters_douban_id = $in_theaters_Info.douban_id;
			var $in_theaters_update = $in_theaters_Info.update;
			$("#sort_movie_right_ul li:eq("+i+") a").attr("href","https://movie.douban.com/subject/"+$in_theaters_douban_id);
			$("#sort_movie_right_ul li:eq("+i+") img").attr("src",$in_theaters_img_url);
			$("#sort_movie_right_ul li:eq("+i+") div:eq(0) p").html($in_theaters_name);
			if ($in_theaters_score==0) {
				$("#sort_movie_right_ul li:eq("+i+") div:eq(1) p").html("暂无评分");	
			}else{
				$("#sort_movie_right_ul li:eq("+i+") div:eq(1) p").html("评分 "+$in_theaters_score+"分<br/>"+$in_theaters_update);
			}
		}
	});
	
	$.getJSON('https://f123.herokuapp.com/api/v1.0/movies/time',function(time){
		for (var i =0; i <10; i++) {
			var $time_Info = time.subjects[i];
			var $time_img_url =$time_Info.image;
			var $time_douban_id = $time_Info.douban_id;
			$("#sort_movie_main_ul li:eq("+i+") a").attr("href","https://movie.douban.com/subject/"+$time_douban_id);
			$("#sort_movie_main_ul li:eq("+i+") img").attr("src",$time_img_url);
		}
	});

	$.getJSON('https://f123.herokuapp.com/api/v1.0/tvs/recommend',function(recommend){
		for (var i =0; i <8; i++) {
			var $recommend_Info = recommend.subjects[i];
			var $recommend_img_url =$recommend_Info.image;
			var $recommend_name = $recommend_Info.name;
			var $recommend_score =$recommend_Info.score;
			var $recommend_douban_id = $recommend_Info.douban_id;
			var $recommend_update = $recommend_Info.update;
			$("#sort_tv_left_ul li:eq("+i+") a").attr("href","https://movie.douban.com/subject/"+$recommend_douban_id);
			$("#sort_tv_left_ul li:eq("+i+") img").attr("src",$recommend_img_url);
			$("#sort_tv_left_ul li:eq("+i+") div:eq(0) p").html($recommend_name);
			/*$("#sort_tv_left_ul li:eq("+i+") div:eq(1) p").html("评分 "+$recommend_score+"分<br/>"+$recommend_update);*/
		}
	});

	$.getJSON('https://f123.herokuapp.com/api/v1.0/tvs/rank',function(rank){
		for (var i =0; i <8; i++) {
			var $rank_Info = rank.subjects[i];
			var $rank_img_url =$rank_Info.image;
			var $rank_name = $rank_Info.name;
			var $rank_score =$rank_Info.score;
			var $rank_douban_id = $rank_Info.douban_id;
			var $rank_update = $rank_Info.update;
			$("#sort_tv_right_ul li:eq("+i+") a").attr("href","https://movie.douban.com/subject/"+$rank_douban_id);
			$("#sort_tv_right_ul li:eq("+i+") img").attr("src",$rank_img_url);
			$("#sort_tv_right_ul li:eq("+i+") div:eq(0) p").html($rank_name);
			/*$("#sort_tv_right_ul li:eq("+i+") div:eq(1) p").html("评分 "+$rank_score+"分<br/>"+$rank_update);*/
		}
	});

	$.getJSON('https://f123.herokuapp.com/api/v1.0/tvs/time',function(time){
		for (var i =0; i <10; i++) {
			var $time_Info = time.subjects[i];
			var $time_img_url =$time_Info.image;
			var $time_douban_id = $time_Info.douban_id;
			$("#sort_tv_main_ul li:eq("+i+") a").attr("href","https://movie.douban.com/subject/"+$time_douban_id);
			$("#sort_tv_main_ul li:eq("+i+") img").attr("src",$time_img_url);
		}
	});

	$.getJSON('https://f123.herokuapp.com/api/v1.0/news/getZhihuNews',function(zhihu){
		for (var i =0; i <5; i++) {
			var $zhihu_Info = zhihu[i];
			var $zhihu_img_url = $zhihu_Info.image;
			var $zhihu_title = $zhihu_Info.title;
			var $zhihu_url = $zhihu_Info.url;
			$("#sort_normal_left_ul li:eq("+i+") a").attr("href",$zhihu_url);
			$("#sort_normal_left_ul li:eq("+i+") img").attr("src",$zhihu_img_url);
			$("#sort_normal_left_ul li:eq("+i+") div:eq(0) p").html($zhihu_title);
		}
	});

	$.getJSON('https://f123.herokuapp.com/api/v1.0/news/getIfengPicNews',function(ifeng){
		for (var i =0; i <4; i++) {
			var $ifeng_Info = ifeng[i];
			var $ifeng_img_url = $ifeng_Info.image;
			var $ifeng_title = $ifeng_Info.title;
			var $ifeng_url = $ifeng_Info.url;
			$("#sort_normal_right_ul li:eq("+i+") a").attr("href",$ifeng_url);
			$("#sort_normal_right_ul li:eq("+i+") img").attr("src",$ifeng_img_url);
			$("#sort_normal_right_ul li:eq("+i+") div:eq(0) p").html($ifeng_title);
		}
	});

	/*
	$.getJSON('https://f123.herokuapp.com/api/v1.0/movies/top250',function(top250){
		for (var i =0; i <8; i++) {
			var $top250_soonInfo = top250.subjects[i];
			var $top250_name = $top250_soonInfo.name;
			$("#sort_movie_left_ul li:eq("+i+") div:eq(1) p").html($top250_name);
		}
	});
	*/
	$(".sort_left li").mouseenter(function(){
		$(".sort_left li").removeClass();
		$(this).addClass("sort_left_focus");
	});
	$(".sort_right li").mouseenter(function(){
		$(".sort_right li").removeClass();
		$(this).addClass("sort_right_focus");
	});
	
	$(".sort_left_normal li").mouseenter(function(){
		$(".sort_left_normal li").removeClass();
		$(this).addClass("sort_left_normal_focus");
	});
	$(".sort_right_normal li").mouseenter(function(){
		$(".sort_right_normal li").removeClass();
		$(this).addClass("sort_right_normal_focus");
	});
});