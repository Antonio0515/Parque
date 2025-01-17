(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ubicacion_atlas_1", frames: [[0,0,512,512]]}
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



(lib.Mapadebits6 = function() {
	this.initialize(ss["ubicacion_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btn2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mapadebits6();
	this.instance.setTransform(-52.15,-52.15,0.2037,0.2037);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,-52.1,104.30000000000001,104.30000000000001);


// stage content:
(lib.ubicacion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btn2.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('introduccion.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_2
	this.btn2 = new lib.btn2();
	this.btn2.name = "btn2";
	this.btn2.setTransform(211.8,119.6,1,1,180);
	new cjs.ButtonHelper(this.btn2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(1));

	// Capa_1
	this.text = new cjs.Text("En auto particular. Si conduces desde el parque Principal de Chiclayo, debes tomar la calle Elías Aguirre y cruzar en la avenida José Balta hacia el sur. La reconocerás porque en la esquina está la sede de la Reniec. Encontrarás la entrada del paseo luego de recorrer ocho cuadras, diagonal al grifo Primax. Podrás encontrar playas de estacionamiento privadas en los alrededores.\n\nEn transporte público. La mejor forma de llegar desde cualquier punto de Chiclayo al Paseo de las Musas es en taxi. Desde cualquier punto de la ciudad te cobrarán un máximo de 10 soles por el recorrido. También puedes caminar desde el parque Principal de Chiclayo, un recorrido que te servirá para hacer ejercicio.\n\nEn tour privado. El paseo de las Musas no se incluye como parte de ningún recorrido turístico de Chiclayo, salvo algunas excepciones. Algunos paseos de vista general de la ciudad pasan por el parque y permiten bajar para tomar algunas fotografías. ", "bold 35px 'Script MT Bold'");
	this.text.lineHeight = 44;
	this.text.lineWidth = 1375;
	this.text.parent = this;
	this.text.setTransform(182.2359,296.8,0.9308,0.9687);

	this.text_1 = new cjs.Text("¿Cómo llegar al Paseo de las Musas?", "italic 77px 'Sitka Text'", "#990000");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 113;
	this.text_1.lineWidth = 949;
	this.text_1.parent = this;
	this.text_1.setTransform(810.75,31);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("EBzWBGdMAAAiM4IDVAAMAAACM4gEh2qBGcMAAAiM4IDVAAMAAACM4gEhmlAr6IC/C/Ii/C/gEhmlAKGIC/C/Ii/DAgEhmlgXcIC/C/Ii/C/g");
	this.shape.setTransform(805.375,449.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("EB2rBIXIAAh6MAAAiM4IAAg+IHLAAMAAACPwgEh91BHaMAAAiPwIHLAAIAAB6MAAACM4IAAA+g");
	this.shape_1.setTransform(805.375,449.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(800,436.8,810.8,476.2);
// library properties:
lib.properties = {
	id: '4D82A8A1D3B8F246AC8BA9028598A482',
	width: 1600,
	height: 900,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ubicacion_atlas_1.png?1736298085142", id:"ubicacion_atlas_1"}
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
an.compositions['4D82A8A1D3B8F246AC8BA9028598A482'] = {
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