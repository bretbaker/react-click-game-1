(this["webpackJsonpreact-click-game-1"]=this["webpackJsonpreact-click-game-1"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var c=i(0),a=i.n(c),r=i(7),o=i.n(r),n=i(1),s=i(2),l=i(4),d=i(3),m=i(5),p=function(e){function t(){var e,i;Object(n.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(i=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).clicked=function(){!1===i.props.image.clicked?(i.props.image.clicked=!0,console.log(i.props.image)):i.props.image.clicked&&i.props.gameOver()},i}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("img",{style:{width:"150px"},src:this.props.image.url,alt:"image-"+this.props.image.id,value:this.props.image.id,key:this.props.image.id,onClick:this.clicked})}}]),t}(c.Component),u=(i(13),function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.images),this.props.images.map((function(t){return a.a.createElement("div",{className:"image-div",onClick:e.props.randomize,key:-t.id},a.a.createElement(p,{image:t,key:t.id,gameOver:e.props.gameOver}))}))}}]),t}(c.Component)),h=(i(14),function(e){function t(){var e,i;Object(n.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(i=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={images:[{id:1,url:"https://picsum.photos/id/0/200/200",clicked:!1},{id:2,url:"https://picsum.photos/id/1/200/200",clicked:!1},{id:3,url:"https://picsum.photos/id/2/200/200",clicked:!1},{id:4,url:"https://picsum.photos/id/3/200/200",clicked:!1},{id:5,url:"https://picsum.photos/id/4/200/200",clicked:!1},{id:6,url:"https://picsum.photos/id/5/200/200",clicked:!1},{id:7,url:"https://picsum.photos/id/6/200/200",clicked:!1},{id:8,url:"https://picsum.photos/id/7/200/200",clicked:!1},{id:9,url:"https://picsum.photos/id/8/200/200",clicked:!1},{id:10,url:"https://picsum.photos/id/9/200/200",clicked:!1},{id:11,url:"https://picsum.photos/id/10/200/200",clicked:!1},{id:12,url:"https://picsum.photos/id/11/200/200",clicked:!1}],topScore:0},i.renderRandom=function(){var e=i.state.images,t=i.state.topScore;e.sort((function(e,t){return.5-Math.random()})),i.setState({images:e});for(var c=document.getElementById("scoreboard"),a=0,r=0;r<e.length;r++)e[r].clicked&&a++,a<t?t+=0:a>=t&&(t=a);i.setState({topScore:t}),c.innerHTML="Score: "+a+" | Top Score: "+t;var o=document.getElementById("directive");if(0===a){o.innerHTML="You guessed incorrectly!",o.setAttribute("style","color: red;");setTimeout((function(){o.setAttribute("style","color: white;")}),300)}else if(a>0){o.innerHTML="You guessed correctly!",o.setAttribute("style","color: green;");setTimeout((function(){o.setAttribute("style","color: white;")}),300)}},i.gameOver=function(){for(var e=i.state.images,t=0;t<e.length;t++)e[t].clicked=!1;i.setState({images:e});var c=document.getElementById("scoreboard"),a=i.state.topScore;c.innerHTML="Score: 0 | Top Score: "+a},i.refresh=function(){window.location.reload()},i}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.state.images),a.a.createElement("div",{className:"App"},a.a.createElement("nav",{className:"nav-div"},a.a.createElement("h1",{id:"game-title",onClick:this.refresh},"React Click Game"),a.a.createElement("h1",{id:"directive"},"Click an Image to begin!"),a.a.createElement("h1",{id:"scoreboard"},"Score: 0 | Top Score: 0")),a.a.createElement("header",{className:"head-section"},a.a.createElement("h1",{id:"main-header"},"React Click Game!"),a.a.createElement("h4",{id:"secondary-header"},"Click on an image to earn points, but don't click on any more than once!")),a.a.createElement("div",{className:"image-container"},a.a.createElement(u,{images:this.state.images,key:this.state.images.id,randomize:this.renderRandom,gameOver:this.gameOver})),a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{id:"empty-purple-div"}),a.a.createElement("p",{id:"foot-text"},"React Click Game \xa9")))}}]),t}(c.Component));o.a.render(a.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,i){e.exports=i(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1b1bab76.chunk.js.map