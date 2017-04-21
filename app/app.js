
var app=angular.module("myapp",['ngRoute']);
function routeConfig($routeProvider){
	$routeProvider
	.when('/index',{
		controller:'IndexController',
		templateUrl:'index.html'
	})
	.when('/resume',{
		controller:'ResumeController',
		templateUrl:'resume.html'
	})
	.when('/news',{
		controller:'NewsController',
		templateUrl:'news.html'
	})
	.otherwise({
		redirectTo:'/index'
	})
}
app.config(routeConfig); 

var news = {
	id:1,
	name:'别无所求',
	content:'这世界上的很多事，有时候和我们眼睛看到的不一样。很多时候要我们慢慢地体会才会知道。我们不能急着看结果，就像种下一棵小花，你要耐心地等它破土发芽，慢慢长大，才能看到它开出美丽的花。尘世间的事也一样，要在时间里发酵，岁月里沉香，人生那些百思不得其解的事情，到后来时间会一一给你答案。岁月有时候特别用心良苦，它时常会给你很多磨难，其实它是想让你变得更好。'
}

app.controller("IndexController",function($scope,$location){
	$scope.news = news;
	$scope.addcon ='';
	$scope.add = function(){
		var div = document.createElement("div");
		var h = document.createElement("h4");
		var hr = document.createElement("hr");
		div.innerHTML = $scope.addcon;
		h.innerHTML = "丢失的蒲公英";
		document.getElementById("con").append(hr);
		document.getElementById("con").append(h);
		document.getElementById("con").append(div);
        $location.path('index');
	}

});

app.controller("ResumeController",function($scope){
	
});

var peoples = [
{
	id:1,
	name:'小丑鱼',
	content:'今天是天气非常好，非常适合去旅游。'
},
{
	id:2,
	name:'薰衣草',
	content:'我是一棵薰衣草。'
},
{
	id:3,
	name:'大风刮过',
	content:'这是一场龙卷风。'
},
]
app.controller("NewsController",function($scope){
	$scope.peoples = peoples;
});

app.controller("topCtrl",function($scope){
	$scope.fans = [
	{
		id:1,
		name:'小王',
		job:'设计师，博客'
	},
	{
		id:2,
		name:'小李',
		job:'设计师，博客'
	},
	{
		id:3,
		name:'张琳',
		job:'作家，杂志编辑'
	},
	{
		id:4,
		name:'赵大城',
		job:'作家，杂志编辑'
	},
	]
})