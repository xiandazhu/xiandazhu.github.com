var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameInfoUI=(function(_super){
		function GameInfoUI(){
			
		    this.pauseBtn=null;
		    this.hpLabel=null;
		    this.levelLabel=null;
		    this.scoreLabel=null;
		    this.infoLabel=null;

			GameInfoUI.__super.call(this);
		}

		CLASS$(GameInfoUI,'ui.GameInfoUI',_super);
		var __proto__=GameInfoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameInfoUI.uiView);
		}
		GameInfoUI.uiView={"type":"View","props":{"width":480,"height":852},"child":[{"type":"Button","props":{"y":10,"x":411,"var":"pauseBtn","stateNum":"1","skin":"war/btn_pause.png"}},{"type":"Label","props":{"y":15,"x":27,"width":107,"var":"hpLabel","text":"HP:10","height":31,"fontSize":24,"color":"#2eb529","align":"center"}},{"type":"Label","props":{"y":13,"x":152,"width":104,"var":"levelLabel","text":"Level:10","height":41,"fontSize":24,"color":"#fdfbfb","align":"center"}},{"type":"Label","props":{"y":13,"x":277,"width":119,"var":"scoreLabel","text":"Score:50","height":37,"fontSize":24,"color":"#f6d908","align":"center"}},{"type":"Label","props":{"y":374,"x":33,"width":419,"var":"infoLabel","text":"战斗结束","height":161,"fontSize":24,"color":"#fdf8f8","align":"center"}}]};
		return GameInfoUI;
	})(View);