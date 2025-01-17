(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"introduccion_atlas_1", frames: [[803,1202,255,452],[1060,1202,254,450],[514,1202,287,451],[0,0,1600,1200],[0,1202,512,512]]}
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



(lib.BMP_2a72ac4b_db42_4a14_b3b8_86da4bc01655 = function() {
	this.initialize(ss["introduccion_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BMP_70eb4ccf_b0b6_41b2_8eec_0954428fdbf0 = function() {
	this.initialize(ss["introduccion_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BMP_96565420_5b41_4735_9c21_6e7c5199eabd = function() {
	this.initialize(ss["introduccion_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.initialize(ss["introduccion_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.initialize(ss["introduccion_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WarpedAsset_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BMP_70eb4ccf_b0b6_41b2_8eec_0954428fdbf0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254,450);


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

	// Capa_1
	this.text = new cjs.Text("Ubicación", "bold 65px 'Century Schoolbook'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 79;
	this.text.lineWidth = 386;
	this.text.parent = this;
	this.text.setTransform(0,-36.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(1,1,1).p("AeIAAQAAGso1EuQo0EusfAAQseAAo1kuQo0kuAAmsQAAmrI0kuQI1kuMeAAQMfAAI0EuQI1EuAAGrg");
	this.shape.setTransform(2.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("A1TLaQo0kvAAmrQAAmrI0kuQI1kuMeAAQMeAAI1EuQI1EuAAGrQAAGro1EvQo1EuseAAQseAAo1kug");
	this.shape_1.setTransform(2.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#323232").ss(1,1,1).p("AeIAAQAAGso1EuQo0EusfAAQseAAo1kuQo0kuAAmsQAAmrI0kuQI1kuMeAAQMfAAI0EuQI1EuAAGrg");
	this.shape_2.setTransform(2.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("A1TLaQo0kvAAmrQAAmrI0kuQI1kuMeAAQMeAAI1EuQI1EuAAGrQAAGro1EvQo1EuseAAQseAAo1kug");
	this.shape_3.setTransform(2.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:-36.8}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{y:-39.25}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.8,-104.2,390.70000000000005,208.4);


(lib.historia = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Historia", "bold 65px 'Century Schoolbook'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 79;
	this.text.lineWidth = 386;
	this.text.parent = this;
	this.text.setTransform(0,-46.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(1,1,1).p("AeIAAQAAGso1EuQo0EusfAAQseAAo1kuQo0kuAAmsQAAmrI0kuQI1kuMeAAQMfAAI0EuQI1EuAAGrg");
	this.shape.setTransform(2.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("A1TLaQo0kvAAmrQAAmrI0kuQI1kuMeAAQMeAAI1EuQI1EuAAGrQAAGro1EvQo1EuseAAQseAAo1kug");
	this.shape_1.setTransform(2.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0033CC").ss(1,1,1).p("AeIAAQAAGso1EuQo0EusfAAQseAAo1kuQo0kuAAmsQAAmrI0kuQI1kuMeAAQMfAAI0EuQI1EuAAGrg");
	this.shape_2.setTransform(2.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000797").s().p("A1TLaQo0kvAAmrQAAmrI0kuQI1kuMeAAQMeAAI1EuQI1EuAAGrQAAGro1EvQo1EuseAAQseAAo1kug");
	this.shape_3.setTransform(2.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{y:-46.8}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{y:-45.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.8,-104.2,390.70000000000005,208.4);


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


(lib.PuppetShape_2copia = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_96565420_5b41_4735_9c21_6e7c5199eabd();
	this.instance_1.setTransform(-34.05,-0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-0.1,288,451);


(lib.PuppetShape_1copia = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_2a72ac4b_db42_4a14_b3b8_86da4bc01655();
	this.instance_1.setTransform(-0.95,-0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,255,452);


(lib.Interpolación2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PuppetShape_2copia("synched",1,false);
	this.instance.setTransform(293.15,8.8,1.6753,1.6753,0,0,0,127,225);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("EBzWBGdMAAAiM4IDVAAMAAACM4gEh2qBGcMAAAiM4IDVAAMAAACM4g");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("EB2rBIXIAAh6MAAAiM4IAAg+IHLAAMAAACPwgEh91BHaMAAAiPwIHLAAIAAB6MAAACM4IAAA+g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-805.3,-463.1,1610.6999999999998,926.2);


(lib.Interpolación1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PuppetShape_1copia("synched",1,false);
	this.instance.setTransform(293.15,8.8,1.6753,1.6753,0,0,0,127,225);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("EBzWBGdMAAAiM4IDVAAMAAACM4gEh2qBGcMAAAiM4IDVAAMAAACM4g");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("EB2rBIXIAAh6MAAAiM4IAAg+IHLAAMAAACPwgEh91BHaMAAAiPwIHLAAIAAB6MAAACM4IAAA+g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-805.3,-463.1,1610.6999999999998,926.2);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-805.3,-463.1,1610.6999999999998,926.2), null);


// stage content:
(lib.introduccion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,13];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btn1.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(1);
		});
		this.stop();
	}
	this.frame_1 = function() {
		
		var _this = this;
		
		/* 
		Evento para el botón btn2 
		*/
		_this.btn2.on('click', function() {
		    // Moverse al fotograma 0 y detenerse
		    _this.gotoAndStop(0);
		});
		
		/* 
		Evento para el botón btn2_1 
		*/
		_this.btn2_1.on('click', function() {
		    // Cargar el proyecto "cuestionario" en la misma ventana
		    window.open('cuestionario.html', '_self'); // Asegúrate de que esta ruta sea correcta
		});
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.ubicacion.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('ubicacion.html', '_self');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.historia.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('historia.html', '_self');
		});
		this.play();
	}
	this.frame_13 = function() {
		var _this = this;
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y continúa la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndPlay(3);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(12).call(this.frame_13).wait(1));

	// botones
	this.btn1 = new lib.btn2();
	this.btn1.name = "btn1";
	this.btn1.setTransform(1420.15,817.15);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.btn2_1 = new lib.btn2();
	this.btn2_1.name = "btn2_1";
	this.btn2_1.setTransform(1413.45,809.05);
	new cjs.ButtonHelper(this.btn2_1, 0, 1, 1);

	this.btn2 = new lib.btn2();
	this.btn2.name = "btn2";
	this.btn2.setTransform(211.8,809.05,1,1,180);
	new cjs.ButtonHelper(this.btn2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1}]}).to({state:[{t:this.btn2},{t:this.btn2_1}]},1).wait(13));

	// menu
	this.historia = new lib.historia();
	this.historia.name = "historia";
	this.historia.setTransform(493.05,599.4,1,1,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.historia, 0, 1, 1);

	this.ubicacion = new lib.ubicacion();
	this.ubicacion.name = "ubicacion";
	this.ubicacion.setTransform(493.05,282.55,1,1,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.ubicacion, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ubicacion},{t:this.historia}]},1).wait(13));

	// Capa_1
	this.instance = new lib.Mapadebits4();
	this.instance.setTransform(891,250,0.385,0.406);

	this.text = new cjs.Text("En el corazón de Chiclayo se levanta un paseo peatonal adornado con estatuas, monumentos y jardines. Es el Paseo de las Musas, que se ha convertido en una importante atracción para los visitantes y para los locales.\nEn la entrada del parque hay un portal sostenido por cinco cariátides. En el frontis se  lee “Chiclayo Ciudad Heroica”, un título \nque se le dio a la ciudad por la defensa que hizo la población sobre la guerra del Pacífico. Se trata de un sitio único que también apunta a la cultura, por la mitología que rodea a cada una de las esculturas. ", "bold 40px 'Script MT Bold'");
	this.text.textAlign = "center";
	this.text.lineHeight = 50;
	this.text.lineWidth = 832;
	this.text.parent = this;
	this.text.setTransform(482.15,190.65,0.9308,0.9687);

	this.text_1 = new cjs.Text("INTRODUCCION", "bold 77px 'Century Schoolbook'", "#990000");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 93;
	this.text_1.lineWidth = 949;
	this.text_1.parent = this;
	this.text_1.setTransform(800,49.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("EBzWBGdMAAAiM4IDVAAMAAACM4gEh2qBGcMAAAiM4IDVAAMAAACM4g");
	this.shape.setTransform(794.625,452.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("Eh91BHgMAAAiO+IHLAAIAABIMAAACM4IAAA+gEB2rBGpIAAgGMAAAiM4IAAg/IHLAAMAAACN9g");
	this.shape_1.setTransform(794.625,451.6);

	this.movieClip_1 = new lib.Símbolo1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(794.6,452.15);
	this.movieClip_1._off = true;

	this.instance_1 = new lib.Interpolación2("synched",0);
	this.instance_1.setTransform(794.6,452.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.instance}]}).to({state:[{t:this.movieClip_1}]},1).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1).to({_off:false},0).to({_off:true,mode:"synched",startPosition:0},6).wait(7));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(789.3,439.1,810.7,476.19999999999993);
// library properties:
lib.properties = {
	id: '4C7F662B9F695E4DA12F3D3A4B2D2DE7',
	width: 1600,
	height: 900,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/introduccion_atlas_1.png?1736512453863", id:"introduccion_atlas_1"}
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
an.compositions['4C7F662B9F695E4DA12F3D3A4B2D2DE7'] = {
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