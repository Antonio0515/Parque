(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1024,678]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.principal = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.btn_comenzar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("LEST go", "italic bold 60px 'Tw Cen MT'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 67;
	this.text.lineWidth = 528;
	this.text.parent = this;
	this.text.setTransform(4.3,-28.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AwnHnQjKAAiPiPQiOiOAAjKIAAAAQAAjJCOiPQCPiODKAAMAhPAAAQDKAACOCOQCPCPAADJIAAAAQAADKiPCOQiOCPjKAAg");
	this.shape.setTransform(0.0374,0.0485,2.0366,1.3787);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF2000").s().p("AwnHnQjKAAiPiPQiOiOAAjKIAAAAQAAjJCOiPQCPiODKAAMAhPAAAQDKAACOCOQCPCPAADJIAAAAQAADKiPCOQiOCPjKAAg");
	this.shape_1.setTransform(0.0374,0.0485,2.0366,1.3787);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AwnHnQjKAAiPiPQiOiOAAjKIAAAAQAAjJCOiPQCPiODKAAMAhPAAAQDKAACOCOQCPCPAADJIAAAAQAADKiPCOQiOCPjKAAg");
	this.shape_2.setTransform(0.0374,0.0485,2.0366,1.3787);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{text:"LEST go"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{text:"COMENZAR"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{text:"COMENZAR"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315.9,-67.1,631.9,134.3);


(lib.btn_acceder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Acceder", "bold 68px 'Script MT Bold'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 84;
	this.text.lineWidth = 264;
	this.text.parent = this;
	this.text.setTransform(-7.75,-30.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("EglVAJYQj5ABiwiwQiwiwAAj5QAAj4CwiwQCwivD5AAMBKrAAAQD5AACwCvQCwCwAAD4QAAD5iwCwQiwCwj5gBg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333399").s().p("EglVAJYQj5ABiwiwQiwixAAj4QAAj3CwixQCwiwD5ABMBKrAAAQD5gBCwCwQCwCxAAD3QAAD4iwCxQiwCwj5gBg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_1},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299,-60,598.1,120.1);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btn_comenzar.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(1);
		});
	}
	this.frame_1 = function() {
		this.on("tick", function () {
		    var input_password = document.getElementById("contra");
		    if (input_password && input_password.getAttribute("type") !== "password") {
		        input_password.setAttribute("type", "password");
		    }
		});
		
		var _this = this;
		_this.btn_acceder.on('click', function(){
			var user_input = document.getElementById("usuario");
			var contraseña_input = document.getElementById("contra");
			if( user_input.value == "ANTONIO" && contraseña_input.value =="1234"){
				window.open('introduccion.html', '_self');
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EA6PAj2QrKnCAAp9QAAp+LKnDQLKnBPyAAQPyAALJHBQLKHDAAJ+QAAJ9rKHCQrJHDvyAAQvyAArKnDg");
	mask.setTransform(788.825,274.5);

	// Capa_1
	this.instance = new lib.principal();
	this.instance.setTransform(992,400,0.5547,0.5546);

	this.btn_comenzar = new lib.btn_comenzar();
	this.btn_comenzar.name = "btn_comenzar";
	this.btn_comenzar.setTransform(508.9,771.15);
	new cjs.ButtonHelper(this.btn_comenzar, 0, 1, 2);

	this.text = new cjs.Text("     Parque principal de Chiclayo", "bold 18px 'Script MT Bold'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 149;
	this.text.parent = this;
	this.text.setTransform(553.2598,76.1555,6.564,9.7082);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eh+PBGxIAAjVIATAAMAAAiG2IgTAAIAAjWIAWAAMBaLAAAMCh+AAAIAADWMj42AAAMAAACG2IAVAAMAm/AAAIDVAAIdoAAIAAARIAADEg");
	this.shape.setTransform(805.9,453.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EAPNBFQIAAgRI9nAAMAAAhr9IjWAAMAAABr9Mgm+AAAMAAAiGlMB1GAAAIAATWIhpAAMAABA5TMgykAsyICNCfMAwXgq0MAAAA1wgEg8XhFNIAAgCMBaKAAAIAAACg");
	this.shape_1.setTransform(386.45,443.225);

	this.btn_acceder = new lib.btn_acceder();
	this.btn_acceder.name = "btn_acceder";
	this.btn_acceder.setTransform(792.35,789.2);
	new cjs.ButtonHelper(this.btn_acceder, 0, 1, 2, false, new lib.btn_acceder(), 3);

	this.text_1 = new cjs.Text("Usuario:", "bold 83px 'Script MT Bold'", "#990000");
	this.text_1.lineHeight = 102;
	this.text_1.lineWidth = 321;
	this.text_1.parent = this;
	this.text_1.setTransform(268.4,297.25);

	this.contra = new lib.an_TextInput({'id': 'contra', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.contra.name = "contra";
	this.contra.setTransform(800,657.55,10.672,3.5105,0,0,0,50,11);

	this.usuario = new lib.an_TextInput({'id': 'usuario', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.usuario.name = "usuario";
	this.usuario.setTransform(800,440.45,10.672,3.5105,0,0,0,50,11);

	this.text_2 = new cjs.Text("Paseo \"Las Musas\"", "bold 18px 'Script MT Bold'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 202;
	this.text_2.parent = this;
	this.text_2.setTransform(816.6046,32.05,6.946,9.7082);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("Eh2xBG7MAAAiM4IDVAAMAAACM4gEBzdBF+MAAAiM4IDVAAMAAACM4g");
	this.shape_2.setTransform(793.9,447.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("Eh98BH5MAAAiPwIHLAAIAAB6MAAACM4IAAA+gEB2yBH4IAAh6MAAAiM4IAAg+IHLAAMAAACPwg");
	this.shape_3.setTransform(793.9,447.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{scaleX:6.564,scaleY:9.7082,x:553.2598,y:76.1555,text:"     Parque principal de Chiclayo",font:"bold 18px 'Script MT Bold'",color:"#000000",textAlign:"center",lineHeight:23.7,lineWidth:149}},{t:this.btn_comenzar},{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text_2},{t:this.usuario},{t:this.contra},{t:this.text_1},{t:this.text,p:{scaleX:1,scaleY:1,x:268.4,y:517,text:"Contraseña:",font:"bold 83px 'Script MT Bold'",color:"#990000",textAlign:"",lineHeight:101.95,lineWidth:416}},{t:this.btn_acceder}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(787.8,437.8,826.1000000000001,503.40000000000003);
// library properties:
lib.properties = {
	id: 'F5F4C1AEA26A2B46867D3F10B176D32A',
	width: 1600,
	height: 900,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1737119778238", id:"index_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1737119778252", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1737119778252", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1737119778252", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F5F4C1AEA26A2B46867D3F10B176D32A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;