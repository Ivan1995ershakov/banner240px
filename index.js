(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Hole = function() {
	this.initialize(img.Hole);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,533,400);


(lib.Street = function() {
	this.initialize(img.Street);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,533,400);// helper functions:

// (lib.Street3 = function() {
// 	this.initialize(img.Street3);
// }).prototype = p = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,533,400);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1uVuQo/pAAAsuQAAstI/pBQJBo/MtAAQMuAAJAI/QJAJBAAMtQAAMupAJAQpAJAsuAAQstAApBpAg");

	// Слой_1
	this.instance = new lib.Hole();
	this.instance.parent = this;
	this.instance.setTransform(-240,-200);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-196.6,-196.6,393.2,393.2), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	// this.shape = new cjs.Shape();
	// this.shape.graphics.f("#FF9900").s().p("AgUAXQgKgKAAgNQAAgNAKgJQALgKAMAAQAGAAAEABIAIADIAGAEIADADIABACIgNAOIgBgCIgFgEQgDgCgEAAQgFABgEADQgDAEAAAFQAAAGADAEQAEADAFAAQAEAAADgBQAEgCABgCIABgCIANAOIgBACIgDACIgGAFIgIACQgEACgGAAQgMAAgLgKg");
	// this.shape.setTransform(57.9,0.55);

	// this.shape_1 = new cjs.Shape();
	// this.shape_1.graphics.f("#FF9900").s().p("AgXAcQgGgGAAgIQAAgHAGgFQAFgEAJgDIARgDQAAgBAAAAQAAgBgBgBQAAAAAAgBQgBAAAAgBQgDgBgDAAIgHABIgFADIgCACIgLgMIABgBIADgDIAGgEIAHgDQAFgBAEAAQAMAAAJAIQAIAHAAAKIAAAmIgWAAIAAgHIgCADIgGADQgDADgFAAQgJAAgGgFgAgBAFIgEACQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAFAGAAQADAAADgDQADgDAAgFIAAgCg");
	// this.shape_1.setTransform(50.575,0.55);

	// this.shape_2 = new cjs.Shape();
	// this.shape_2.graphics.f("#FF9900").s().p("AAIAgIAAgTQgGADgHAAQgLAAgGgHQgHgGABgLIAAgXIAVAAIAAAUQABAEABACQACACADAAIAEAAIADgCIABAAIAAgaIAVAAIAAA/g");
	// this.shape_2.setTransform(43.5,0.525);

	// this.shape_3 = new cjs.Shape();
	// this.shape_3.graphics.f("#FF9900").s().p("AAKAuIAAgeIgWAeIgTAAIAAg/IAWAAIAAAdIAWgdIATAAIAAA/gAgPgeQgGgGAAgJIAQAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAQAAAAAAAAQADAAACgBQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIAQAAQAAAJgGAGQgGAGgKAAQgJAAgGgGg");
	// this.shape_3.setTransform(35.925,-0.875);

	// this.shape_4 = new cjs.Shape();
	// this.shape_4.graphics.f("#FF9900").s().p("AgWAXQgKgKAAgNQAAgMAJgLQAKgJANAAQAOAAAKAJQAJAJAAANIAAAGIgrAAQABAFAEACQAEADAFAAQAEAAAEgBIAFgDIABgCIAKAOIgBABIgDADIgGADIgHACIgKABQgNAAgKgKgAgGgNQgDADgBAEIAVAAQgBgEgDgDQgCgCgFAAQgDgBgDADg");
	// this.shape_4.setTransform(28.325,0.55);
	//
	// this.shape_5 = new cjs.Shape();
	// this.shape_5.graphics.f("#FF9900").s().p("AgUAXQgKgKAAgNQAAgNAKgJQAKgKANAAQAGAAAEABIAIADIAGAEIADADIABACIgNAOIgBgCIgFgEQgDgCgEAAQgFABgEADQgEAEAAAFQAAAGAEAEQAEADAFAAQAEAAADgBQAEgCABgCIABgCIANAOIgBACIgDACIgGAFIgIACQgEACgGAAQgNAAgKgKg");
	// this.shape_5.setTransform(21.1,0.55);
	//
	// this.shape_6 = new cjs.Shape();
	// this.shape_6.graphics.f("#FF9900").s().p("AAKAuIAAgeIgWAeIgTAAIAAg/IAWAAIAAAdIAWgdIATAAIAAA/gAgPgeQgGgGAAgJIAQAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAQAAAAAAAAQADAAACgBQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIAQAAQAAAJgGAGQgGAGgKAAQgJAAgGgGg");
	// this.shape_6.setTransform(10.875,-0.875);
	//
	// this.shape_7 = new cjs.Shape();
	// this.shape_7.graphics.f("#FF9900").s().p("AgWAtIgFgBIgBgBIAAgTIAGABQAHAAADgFIABgDIgXg9IAXAAIALAlIAMglIAXAAIgYA+QgFAOgGAHQgHAGgJAAIgGAAg");
	// this.shape_7.setTransform(3.425,1.875);
	//
	// this.shape_8 = new cjs.Shape();
	// this.shape_8.graphics.f("#FF9900").s().p("AgiAuIAAhaIAXAAIAAAIIABgBIABgCIAEgDIAFgCIAGgBQAMAAAIAKQAJAJAAAOQAAANgJAKQgIAJgMAAQgGAAgDgCQgFgCgBgDIgCgCIAAAjgAgIgWQgDAEAAAGQAAAGADAEQAEADAEAAQAFAAADgDQAEgEAAgGQAAgGgEgEQgDgDgFAAQgEAAgEADg");
	// this.shape_8.setTransform(-4,1.825);
	//
	// this.shape_9 = new cjs.Shape();
	// this.shape_9.graphics.f("#FF9900").s().p("AAKAgIAAgeIgWAeIgTAAIAAg/IAWAAIAAAeIAWgeIATAAIAAA/g");
	// this.shape_9.setTransform(-12.125,0.525);
	//
	// this.shape_10 = new cjs.Shape();
	// this.shape_10.graphics.f("#FF9900").s().p("AAKAgIAAgWIgSAAIAAAWIgXAAIAAg/IAXAAIAAAWIASAAIAAgWIAVAAIAAA/g");
	// this.shape_10.setTransform(-19.95,0.525);
	//
	// this.shape_11 = new cjs.Shape();
	// this.shape_11.graphics.f("#FF9900").s().p("AgYAXQgKgKAAgNQAAgNAKgJQALgKANAAQAOAAALAKQAKAJAAANQAAANgKAKQgLAKgOAAQgNAAgLgKgAgIgJQgDAEAAAFQAAAGADAEQAEADAEAAQAFAAAEgDQADgEAAgGQAAgFgDgEQgEgDgFgBQgEABgEADg");
	// this.shape_11.setTransform(-27.825,0.55);
	//
	// this.shape_12 = new cjs.Shape();
	// this.shape_12.graphics.f("#FF9900").s().p("AgiAuIAAhaIAWAAIAAAIIACgBIACgCIADgDIAFgCIAFgBQANAAAIAKQAJAJAAAOQAAANgJAKQgIAJgNAAQgEAAgFgCQgEgCgBgDIgDgCIAAAjgAgHgWQgEAEgBAGQABAGAEAEQADADAEAAQAEAAAFgDQADgEAAgGQAAgGgDgEQgFgDgEAAQgEAAgDADg");
	// this.shape_12.setTransform(-35.7,1.825);
	//
	// this.shape_13 = new cjs.Shape();
	// this.shape_13.graphics.f("#FF9900").s().p("AgXAmQgKgLAAgUQAAgVAIgMQAIgLAQgDIALgEIAJgDIACgBIAKARQgGAEgTAEQgGACgFAFQgGAFgBAGIACgCIAGgDQAEgDAFAAQAMAAAIAKQAJAIAAANQAAANgJAJQgJAJgPAAQgPAAgJgLgAgGAJQgDAEAAAFQAAAEADAEQADADAEAAQAEAAADgDQAEgEAAgEQAAgFgEgEQgDgDgEAAQgEAAgDADg");
	// this.shape_13.setTransform(-43.775,-1.025);
	//
	// this.shape_14 = new cjs.Shape();
	// this.shape_14.graphics.f("#FF9900").s().p("AgXAcQgGgGAAgIQAAgHAGgFQAFgEAJgDIARgDQAAgBAAAAQAAgBgBgBQAAAAAAgBQgBAAAAgBQgDgBgDAAIgHABIgFADIgCACIgLgMIABgBIADgDIAGgEIAHgDQAFgBAEAAQAMAAAJAIQAIAHAAAKIAAAmIgWAAIAAgHIgCADIgGADQgDADgFAAQgJAAgGgFgAgBAFIgEACQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAFAGAAQADAAADgDQADgDAAgFIAAgCg");
	// this.shape_14.setTransform(-51.475,0.55);
	//
	// this.shape_15 = new cjs.Shape();
	// this.shape_15.graphics.f("#FF9900").s().p("AgMAuIgLgEIgHgEIgFgEIgBgCIAOgPIADADIAGAEQAGACAFAAQAGAAADgDQADgDAAgDQABgIgLAAIgNAAIAAgUIALAAQAFAAADgCQACgCAAgDQAAgDgDgCQgCgCgFAAQgFAAgEACIgGADIgCACIgOgPIABgCIAFgDIAGgEIAKgDIALgCQAQAAAJAIQAKAIAAAKQgBAHgDAFQgDAFgDABIgEABIABABIAFABIAEAFIAFAGQABAEAAAFQAAAMgKAIQgJAIgSAAIgMgCg");
	// this.shape_15.setTransform(-59,-0.825);

	// this.shape_16 = new cjs.Shape();
	// this.shape_16.graphics.f("#FFFFFF").s().p("Ar2B8Qg0AAgkglQgkgjAAg0QAAgzAkgkQAkgkA0AAIXtAAQAzAAAlAkQAkAkAAAzQAAA0gkAjQglAlgzAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-88.3,-12.4,176.6,24.8), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzENeIAMxtMAl8gJOIABa7g");
  this.shape.setTransform(0,-40);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-122.1,-86.2,244.2,172.4), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#246463").s().p("AzEQwIAM4RMAl8gJOMAABAhfg");
	this.shape.setTransform(0,-19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-122.1,-86.2,244.2,214.39999999999998), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAdIAAgMIAcghIgbAAIAAgMIAqAAIAAAMIgcAhIAcAAIAAAMg");
	this.shape.setTransform(48.325,4.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAdIgPgZIgIAJIAAAQIgMAAIAAg5IAMAAIAAAZIAWgZIANAAIgUAYIAWAhg");
	this.shape_1.setTransform(43.2,4.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBg");
	this.shape_2.setTransform(38.9,7.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAdIgGgDIgEgDIgCgBIgCgBIAIgIIABACIAFACIAHACQAEAAACgCQACgCABgDQAAgDgEgCQgCgCgDAAIgIgDQgFgCgCgDQgDgDAAgGQgBgHAGgEQAFgGAJAAIAGABIAFACIAEADIADACIAAAAIgHAIIgBgBIgEgCIgGgCQgCAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQAAADADACIAGADIAIACQAFACADADQACAEAAAFQABAIgGAEQgGAGgKAAIgHgBg");
	this.shape_3.setTransform(35.4,4.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAdIgGgDIgFgDIgDgBIAAgBIAHgIIABACIAFACIAHACQADAAADgCQACgCAAgDQAAgDgDgCQgCgCgEAAIgIgDQgDgCgDgDQgEgDAAgGQABgHAFgEQAGgGAHAAIAHABIAGACIADADIACACIABAAIgHAIIgBgBIgEgCIgFgCQgDAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAADACACIAHADIAIACQAEACACADQAEAEAAAFQgBAIgFAEQgGAGgKAAIgGgBg");
	this.shape_4.setTransform(30.5,4.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAdIAAg5IAoAAIAAAMIgcAAIAAALIAWAAIAAAKIgWAAIAAAMIAdAAIAAAMg");
	this.shape_5.setTransform(25.675,4.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKAdIgKgVIgKAAIAAAVIgMAAIAAg5IAYAAQAIAAAGAGQAFAGAAAHIgBAGIgCAFIgDADIgDABIgBABIAMAWgAgKgCIALAAQAEAAACgCQACgBAAgEQAAgDgCgCQgCgCgEAAIgLAAg");
	this.shape_6.setTransform(20.075,4.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAVQgJgIAAgNQAAgLAJgJQAJgJAMAAIAJABIAGAEIAFADIADACIABACIgIAHIgBgBIgCgCIgDgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgGgCQgHAAgFAGQgGAFAAAHQAAAIAGAFQAFAGAHAAIAHgCIAEgCIACgBIAAgIIgKAAIAAgIIAWAAIAAAVIgBABIgDACIgFAEIgHADIgJABQgMAAgJgJg");
	this.shape_7.setTransform(13.625,4.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPAdIgbgjIAAAjIgMAAIAAg5IAKAAIAbAkIAAgkIAMAAIAAA5g");
	this.shape_8.setTransform(7.175,4.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAVQgJgIAAgNQAAgLAJgJQAJgJAMAAQANAAAJAJQAJAJAAALQAAANgJAIQgJAJgNAAQgMAAgJgJgAgMgMQgFAFAAAHQAAAIAFAFQAGAGAGAAQAIAAAFgGQAFgFAAgIQAAgHgFgFQgFgGgIAAQgGAAgGAGg");
	this.shape_9.setTransform(0.425,4.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSAVQgIgIgBgNQABgLAIgJQAKgJAMAAIAIABIAGAEIAFADIADACIABACIgIAHIgBgBIgCgCIgCgBQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgFgCQgIAAgFAGQgGAFABAHQgBAIAGAFQAFAGAIAAIAFgBIAFgCIADgDIACgBIABgBIAHAIIgBABIgCACIgGAEIgGADIgIABQgMAAgKgJg");
	this.shape_10.setTransform(-6.05,4.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAVQgJgIAAgNQAAgLAJgJQAJgJAMAAQANAAAJAJQAJAJAAALQAAANgJAIQgJAJgNAAQgMAAgJgJgAgMgMQgFAFAAAHQAAAIAFAFQAGAGAGAAQAIAAAFgGQAFgFAAgIQAAgHgFgFQgFgGgIAAQgGAAgGAGg");
	this.shape_11.setTransform(-12.675,4.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAdIAAg5IAXAAQAJAAAGAGQAFAFAAAJQAAAIgFAFQgGAFgJAAIgLAAIAAATgAgJAAIALAAQADAAADgDQACgCAAgDQAAgDgCgDQgDgCgDAAIgLAAg");
	this.shape_12.setTransform(-18.7,4.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAOAdIgOgVIgNAVIgOAAIAUgdIgSgcIAOAAIALATIAMgTIAOAAIgTAcIAUAdg");
	this.shape_13.setTransform(-24.5,4.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAdIAAg5IAoAAIAAAMIgcAAIAAALIAWAAIAAAKIgWAAIAAAMIAdAAIAAAMg");
	this.shape_14.setTransform(-29.875,4.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAdIAAgMIAcghIgbAAIAAgMIAqAAIAAAMIgcAhIAcAAIAAAMg");
	this.shape_15.setTransform(-35.375,4.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQAdIgFgOIgVAAIgFAOIgNAAIAWg5IAMAAIAXA5gAgGAFIANAAIgHgSg");
	this.shape_16.setTransform(-40.975,4.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAcAjIgJAAIgGgDIgFgFIgDgCIgBgBIgEAAQgMAAgJgJQgJgIAAgMQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMIgCAJQgBAEgDADIgEAFIgFADIgBABIAAAAIACACIADACIAEABIAGAAIABAAIAAAKgAgMgSQgFAFgBAIQABAHAFAFQAGAGAGAAQAHAAAGgGQAFgFAAgHQAAgIgFgFQgGgGgHAAQgGAAgGAGg");
	this.shape_17.setTransform(-47.45,5.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOAZQgHgFAAgIIABgFIADgFIACgCIADgBIAAgBIAAAAIgCgCIgCgCIgCgDIAAgFQAAgGAFgFQAGgFAHAAQAJAAAFAFQAGAFAAAGQAAAEgCADIgDAEIgCABIABABIACABIADADIACAEIABAFQAAAIgGAFQgGAGgKAAQgIAAgGgGgAgGAGQgDADAAADQAAADADADQADACADAAQAEAAADgCQADgDAAgDQAAgDgDgDQgDgDgEAAQgDAAgDADgAgEgSQgCACAAADQAAADACACQACACACAAQAEAAACgCQACgCAAgDQAAgDgCgCQgCgCgEAAQgCAAgCACg");
	this.shape_18.setTransform(30.325,-4.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAEAeIAAgLIgbAAIAAgNIAZgjIAPAAIAAAlIAHAAIAAALIgHAAIAAALgAgLAIIAPAAIAAgWg");
	this.shape_19.setTransform(25.2,-4.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAYQgGgGgBgIIABgIIADgEIACgCIAQgaIAMAAIgMAUIACgBQAIAAAGAHQAHAFgBAJQAAAIgGAGQgGAHgKgBQgJABgGgHgAgGACQgDADAAAFQAAADADAEQADACADAAQAEAAADgCQADgEAAgDQAAgFgDgDQgDgCgEAAQgDAAgDACg");
	this.shape_20.setTransform(19.9,-4.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAWQgIgIAAgOQAAgNAIgJQAHgIAKAAQALAAAHAIQAIAJAAANQAAAOgIAIQgHAJgLAAQgKAAgHgJgAgIgOQgEAGAAAIQAAAJAEAFQAEAGAEAAQAFAAAEgGQAEgFAAgJQAAgIgEgGQgEgFgFAAQgEAAgEAFg");
	this.shape_21.setTransform(14.275,-4.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAeQAAgGACgGQACgEAEgEIAHgFIAFgFIAGgEQACgDAAgDQAAgEgCgCQgDgCgDAAQgDAAgCACQgBABAAAAQgBABAAAAQgBABAAAAQAAAAAAABIgBACIgLgGIABgBIACgDIAEgFIAGgDQADgBAEAAQAJgBAGAGQAGAFAAAJQAAAEgCAEIgFAFIgHAFIgGAFIgFAFIAZAAIAAAMg");
	this.shape_22.setTransform(6.925,-4.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHAdIgGgCIgFgDIgCgCIgBgBIAIgIIABABIAEADQAFACADAAQAEAAADgDQACgCAAgEQAAgFgCgDQgDgCgEAAIgGABIgDACIgBABIgJgBIACghIAjAAIAAAMIgXAAIgBALQADgCAFAAQAJgBAGAGQAGAFAAAJQgBAIgGAGQgGAHgKgBIgHgBg");
	this.shape_23.setTransform(1.95,-4.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMAeIANgTIgCAAQgIABgHgHQgFgFgBgJQABgJAFgGQAHgFAJAAQAKAAAGAFQAHAGgBAJIgBAIIgCAEIgBACIgRAZgAgHgQQgCADAAAEQAAAFACADQADABAEAAQAEAAAEgBQACgDAAgFQAAgEgCgDQgEgCgEAAQgEAAgDACg");
	this.shape_24.setTransform(-3.3,-4.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHAdIgHgCIgEgDIgCgCIgBgBIAHgIIACABIAEADQAEACAEAAQAEAAADgDQACgCAAgEQAAgFgCgDQgDgCgEAAIgGABIgDACIAAABIgJgBIABghIAjAAIAAAMIgXAAIgBALQAEgCAEAAQAJgBAGAGQAGAFAAAJQgBAIgFAGQgHAHgKgBIgHgBg");
	this.shape_25.setTransform(-10.3,-4.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAeIAWgvIgaAAIAAgMIAnAAIAAAKIgWAxg");
	this.shape_26.setTransform(-15.25,-4.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPAeIAWgvIgbAAIAAgMIApAAIAAAKIgXAxg");
	this.shape_27.setTransform(-19.8,-4.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAeIAWgvIgbAAIAAgMIApAAIAAAKIgXAxg");
	this.shape_28.setTransform(-26.1,-4.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEAUIAAgPIgPAAIAAgKIAPAAIAAgOIAJAAIAAAOIAPAAIAAAKIgPAAIAAAPg");
	this.shape_29.setTransform(-30.6,-3.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-51.7,-10.4,103.5,20.8), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	// this.shape.graphics.f("#FFFFFF").s().p("AAlBDIAAhOIglAuIglguIAABOIgkAAIAAiGIAhAAIAoA1IAqg1IAgAAIAACGg");
	// this.shape.setTransform(28.95,0.4);

	this.shape_1 = new cjs.Shape();
	// this.shape_1.graphics.f("#FFFFFF").s().p("AAgBDIgKgdIgrAAIgKAdIgnAAIAziGIAnAAIAzCGgAgMAKIAYAAIgMgmg");
	// this.shape_1.setTransform(12.875,0.4);

	this.shape_2 = new cjs.Shape();
	// this.shape_2.graphics.f("#FFFFFF").s().p("AAYBDIAAgzIgvAAIAAAzIglAAIAAiGIAlAAIAAAzIAvAAIAAgzIAlAAIAACGg");
	// this.shape_2.setTransform(-1.9,0.4);

	this.shape_3 = new cjs.Shape();
	// this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BDIAAiGIBnAAIAAAgIhCAAIAAAUIAzAAIAAAcIgzAAIAAAXIBEAAIAAAfg");
	// this.shape_3.setTransform(-15.575,0.4);

	this.shape_4 = new cjs.Shape();
	// this.shape_4.graphics.f("#FFFFFF").s().p("AAeBRIAAgbIhgAAIAAiGIAlAAIAABlIAsAAIAAhlIAkAAIAABlIAQAAIAAA8g");
	// this.shape_4.setTransform(-29.575,1.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-39.7,-13.1,79.5,26.299999999999997), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	// this.shape.graphics.f("#FFFFFF").s().p("AAlBDIAAhOIglAuIglguIAABOIgkAAIAAiGIAhAAIAoA1IAqg1IAgAAIAACGg");
	// this.shape.setTransform(77.55,0.4);

	this.shape_1 = new cjs.Shape();
	// this.shape_1.graphics.f("#FFFFFF").s().p("AArBDIAAiGIAkAAIAACGgAhOBDIAAiGIAkAAIAAApIAWAAQAVAAAOANQAOANAAAUQAAAVgOANQgOANgVAAgAgqAjIAUAAQAHAAAEgFQAFgEAAgGQAAgGgFgEQgEgEgHAAIgUAAg");
	// this.shape_1.setTransform(59.075,0.4);
	//
	this.shape_2 = new cjs.Shape();
	// this.shape_2.graphics.f("#FFFFFF").s().p("AAYBDIAAgzIgvAAIAAAzIglAAIAAiGIAlAAIAAAzIAvAAIAAgzIAlAAIAACGg");
	// this.shape_2.setTransform(41.95,0.4);
	//
	this.shape_3 = new cjs.Shape();
	// this.shape_3.graphics.f("#FFFFFF").s().p("AAXBDIAAhlIguAAIAABlIgkAAIAAiGIB3AAIAACGg");
	// this.shape_3.setTransform(26.75,0.4);
	//
	this.shape_4 = new cjs.Shape();
	// this.shape_4.graphics.f("#FFFFFF").s().p("AgoBEIgHgCIgCgBIAAgfQAFABAGAAQAIAAAGgDQAEgDACgFIADgEIgwhYIAoAAIAZA4IAWg4IAoAAIgwBkQgIAQgLALQgMAJgQABIgJgBg");
	// this.shape_4.setTransform(13.05,0.5);
	//
	this.shape_5 = new cjs.Shape();
	// this.shape_5.graphics.f("#FFFFFF").s().p("AgRBDIAAhlIgmAAIAAghIBvAAIAAAhIgmAAIAABlg");
	// this.shape_5.setTransform(0.725,0.4);
	//
	this.shape_6 = new cjs.Shape();
	// this.shape_6.graphics.f("#FFFFFF").s().p("AgsAyQgVgVgBgdQABgcAVgVQAXgVAeAAQALAAAKACQAJADAGAEIAMAIIAGAHIADADIgXAXIgBgCIgEgEIgHgGIgKgEQgGgCgGAAQgQAAgLALQgKALgBAQQABAQAKALQALALAQAAQAKAAAJgEQAKgEADgFIAEgEIAWAXIgCADIgHAHIgMAIQgGADgKADQgLADgKAAQgeAAgXgVg");
	// this.shape_6.setTransform(-12.25,0.425);
	//
	this.shape_7 = new cjs.Shape();
	// this.shape_7.graphics.f("#FFFFFF").s().p("Ag0AyQgWgVAAgdQAAgcAWgVQAWgVAeAAQAfAAAWAVQAWAVAAAcQAAAdgWAVQgWAVgfAAQgeAAgWgVgAgagbQgLALAAAQQAAAQALALQALALAPAAQAQAAALgLQALgLAAgQQAAgQgLgLQgLgLgQAAQgPAAgLALg");
	// this.shape_7.setTransform(-27.925,0.425);
	//
	this.shape_8 = new cjs.Shape();
	// this.shape_8.graphics.f("#FFFFFF").s().p("AAjBRIAAgbIhFAAIAAAbIgkAAIAAg8IAHAAIADgCIAEgHIAGgLIAFgQQACgKAAgMIAAgrIBjAAIAABlIAPAAIAAA8gAgHglQAAAMgCAKQgCAKgDAGIgFALQgDAGgCABIgCACIAtAAIAAhEIgaAAg");
	// this.shape_8.setTransform(-43.725,1.75);
	//
	this.shape_9 = new cjs.Shape();
	// this.shape_9.graphics.f("#FFFFFF").s().p("Ag0AyQgWgVAAgdQAAgcAWgVQAWgVAeAAQAfAAAWAVQAWAVAAAcQAAAdgWAVQgWAVgfAAQgeAAgWgVgAgagbQgLALAAAQQAAAQALALQALALAPAAQAQAAALgLQALgLAAgQQAAgQgLgLQgLgLgQAAQgPAAgLALg");
	// this.shape_9.setTransform(-63.125,0.425);
	//
	this.shape_10 = new cjs.Shape();
	// this.shape_10.graphics.f("#FFFFFF").s().p("AAXBDIAAhlIguAAIAABlIgkAAIAAiGIB3AAIAACGg");
	// this.shape_10.setTransform(-79,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-88.4,-13.1,176.8,26.299999999999997), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	// this.shape.graphics.f("#FFFFFF").s().p("AgFAjIAYgjIgYgiIAfAAIAZAiIgZAjgAgyAjIAZgjIgZgiIAfAAIAYAiIgYAjg");
	// this.shape.setTransform(58.1,2.525);
	//
	this.shape_1 = new cjs.Shape();
	// this.shape_1.graphics.f("#FFFFFF").s().p("AAgBDIgKgdIgrAAIgKAdIgnAAIAziGIAnAAIAzCGgAgMAKIAYAAIgMgmg");
	// this.shape_1.setTransform(45.225,0.4);
	//
	this.shape_2 = new cjs.Shape();
	// this.shape_2.graphics.f("#FFFFFF").s().p("AAUAjIgYgjIAYgiIAeAAIgZAiIAZAjgAgYAjIgZgjIAZgiIAdAAIgYAiIAYAjg");
	// this.shape_2.setTransform(32.4,2.525);
	//
	this.shape_3 = new cjs.Shape();
	// this.shape_3.graphics.f("#FFFFFF").s().p("AAgBDIgKgdIgrAAIgKAdIgnAAIAziGIAnAAIAzCGgAgMAKIAYAAIgMgmg");
	// this.shape_3.setTransform(15.475,0.4);
	//
	this.shape_4 = new cjs.Shape();
	// this.shape_4.graphics.f("#FFFFFF").s().p("AgrAyQgXgVAAgdQAAgcAXgVQAVgVAfAAQALAAAKACQAJADAHAEIALAIIAHAHIACADIgXAXIgBgCIgEgEIgHgGIgKgEQgGgCgGAAQgQAAgLALQgKALgBAQQABAQAKALQALALAQAAQAKAAAJgEQAKgEADgFIAFgEIAVAXIgCADIgHAHIgMAIQgGADgKADQgKADgLAAQgfAAgVgVg");
	// this.shape_4.setTransform(1.35,0.425);
	//
	this.shape_5 = new cjs.Shape();
	// this.shape_5.graphics.f("#FFFFFF").s().p("AgsAyQgWgVABgdQgBgcAWgVQAXgVAeAAQAKAAAKACQAKADAGAEIALAIIAHAHIACADIgVAXIgCgCIgFgEIgHgGIgJgEQgGgCgGAAQgQAAgKALQgLALAAAQQAAAQALALQAKALAQAAQAKAAAJgEQAJgEAFgFIADgEIAVAXIgCADIgHAHIgLAIQgGADgKADQgLADgKAAQgeAAgXgVg");
	// this.shape_5.setTransform(-13.1,0.425);
	//
	this.shape_6 = new cjs.Shape();
	// this.shape_6.graphics.f("#FFFFFF").s().p("AAgBDIgKgdIgrAAIgKAdIgnAAIAziGIAnAAIAzCGgAgMAKIAYAAIgMgmg");
	// this.shape_6.setTransform(-27.625,0.4);
	//
	this.shape_7 = new cjs.Shape();
	// this.shape_7.graphics.f("#FFFFFF").s().p("Ag5BFIgHgCIgCgCIAAghIAIACQAGAAADgCQADgDAEgGQADgHACgMQABgLAAgTIAAgrIBoAAIAACGIglAAIAAhlIgfAAIAAAKQAAAWgBARQgDAQgEALQgEAKgHAIQgFAGgHADQgIADgIAAIgKgBg");
	// this.shape_7.setTransform(-43.05,0.6);
	//
	this.shape_8 = new cjs.Shape();
	// this.shape_8.graphics.f("#FFFFFF").s().p("AAVBDIghgyIgOAQIAAAiIgkAAIAAiGIAkAAIAAA0IArg0IAqAAIgwA5IA1BNg");
	// this.shape_8.setTransform(-55.95,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-65.7,-13.1,131.5,26.299999999999997), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	// this.shape.graphics.f("#FFFFFF").s().p("AArBDIAAiGIAkAAIAACGgAhOBDIAAiGIAkAAIAAApIAWAAQAVAAAOANQAOANAAAUQAAAVgOANQgOANgVAAgAgqAjIAUAAQAHAAAEgFQAFgEAAgGQAAgGgFgEQgEgEgHAAIgUAAg");
	// this.shape.setTransform(31.975,0.4);

	this.shape_1 = new cjs.Shape();
	// this.shape_1.graphics.f("#FFFFFF").s().p("AgsAyQgVgVAAgdQAAgcAVgVQAWgVAfAAQAKAAAKACQAKADAGAEIALAIIAHAHIACADIgWAXIgBgCIgFgEIgGgGIgKgEQgGgCgGAAQgQAAgLALQgLALABAQQgBAQALALQALALAQAAQAKAAAJgEQAJgEAFgFIADgEIAWAXIgDADIgGAHIgMAIQgGADgKADQgLADgKAAQgfAAgWgVg");
	// this.shape_1.setTransform(15.45,0.425);

	this.shape_2 = new cjs.Shape();
	// this.shape_2.graphics.f("#FFFFFF").s().p("AAaBDIAAhKIg4BKIggAAIAAiGIAkAAIAABLIA5hLIAgAAIAACGg");
	// this.shape_2.setTransform(0.25,0.4);

	this.shape_3 = new cjs.Shape();
	// this.shape_3.graphics.f("#FFFFFF").s().p("AgRBIIAAgSQgbAAgSgRQgRgQAAgWQAAgWARgQQASgRAbAAIAAgPIAjAAIAAAPQAbAAARARQASAQAAAWQAAAWgSAQQgRAQgbABIAAASgAASAXQAMAAAGgHQAHgHAAgKQAAgKgHgHQgGgHgMgBgAgkgSQgGAHAAAKQAAAKAGAHQAHAHAMAAIAAgxQgMABgHAHg");
	// this.shape_3.setTransform(-16.275,0.375);

	this.shape_4 = new cjs.Shape();
	// this.shape_4.graphics.f("#FFFFFF").s().p("Ag0AyQgWgVAAgdQAAgcAWgVQAWgVAeAAQAfAAAWAVQAWAVAAAcQAAAdgWAVQgWAVgfAAQgeAAgWgVgAgagbQgLALAAAQQAAAQALALQALALAPAAQAQAAALgLQALgLAAgQQAAgQgLgLQgLgLgQAAQgPAAgLALg");
	// this.shape_4.setTransform(-33.225,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-43.4,-13.1,86.8,26.299999999999997), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	// this.shape.graphics.f("#FFFFFF").s().p("AiFCGQg4g4AAhOQAAhNA4g4QA3g5BOAAQBPAAA3A5QA4A4AABNQAABOg4A4Qg3A5hPAAQhOAAg3g5gAhDhJQgbAeAAArQAAAsAbAeQAcAdAnAAQApAAAbgdQAbgeAAgsQAAgrgbgeQgbgdgpAAQgnAAgcAdg");
	// this.shape.setTransform(50.4,1.025);

	this.shape_1 = new cjs.Shape();
	// this.shape_1.graphics.f("#FFFFFF").s().p("AiLC0IAAlnICYAAQA4AAAkAkQAjAjAAA3QAAA1gjAkQgkAkg4AAIg7AAIAABsgAgugOIA2AAQARAAALgMQALgMAAgPQAAgQgLgLQgLgMgRAAIg2AAg");
	// this.shape_1.setTransform(13.575,1.025);

	this.shape_2 = new cjs.Shape();
	// this.shape_2.graphics.f("#FFFFFF").s().p("ABEC0IhEh5IhDB5IhmAAIBvi7IhmisIBmAAIA6BpIA6hpIBmAAIhmCsIBwC7g");
	// this.shape_2.setTransform(-21.525,1.025);

	this.shape_3 = new cjs.Shape();
	// this.shape_3.graphics.f("#FFFFFF").s().p("AiFC0IAAlnIEGAAIAABSIipAAIAAA5ICCAAIAABMIiCAAIAAA+ICuAAIAABSg");
	// this.shape_3.setTransform(-54.075,1.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-76.2,-35.2,152.4,70.5), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	// this.shape.graphics.f("#FFFFFF").s().p("AguA5IAAhxIAyAAQATAAAMALQAMAMAAARQAAAQgMAMQgMALgTAAIgTAAIAAAigAgPgEIASAAQAGAAADgDQAEgEAAgFQAAgFgEgEQgDgDgGAAIgSAAg");
	// this.shape.setTransform(62.95,0.275);

	this.shape_1 = new cjs.Shape();
	// this.shape_1.graphics.f("#FFFFFF").s().p("AgPA5IAAhVIgfAAIAAgcIBdAAIAAAcIggAAIAABVg");
	// this.shape_1.setTransform(51.925,0.275);

	this.shape_2 = new cjs.Shape();
	// this.shape_2.graphics.f("#FFFFFF").s().p("AAVA5IAAgsIgpAAIAAAsIgfAAIAAhxIAfAAIAAAqIApAAIAAgqIAfAAIAABxg");
	// this.shape_2.setTransform(40.35,0.275);

	this.shape_3 = new cjs.Shape();
	// this.shape_3.graphics.f("#FFFFFF").s().p("AgsA5IAAhxIBYAAIAAAaIg5AAIAAASIArAAIAAAYIgrAAIAAATIA6AAIAAAag");
	// this.shape_3.setTransform(28.75,0.275);

	this.shape_4 = new cjs.Shape();
	// this.shape_4.graphics.f("#FFFFFF").s().p("AAaBFIAAgXIhSAAIAAhyIAfAAIAABWIAmAAIAAhWIAfAAIAABWIANAAIAAAzg");
	// this.shape_4.setTransform(16.825,1.425);

	this.shape_5 = new cjs.Shape();
	// this.shape_5.graphics.f("#FFFFFF").s().p("AgdAMIAAgXIA7AAIAAAXg");
	// this.shape_5.setTransform(6.3,1.175);

	this.shape_6 = new cjs.Shape();
	// this.shape_6.graphics.f("#FFFFFF").s().p("AglArQgSgTAAgYQAAgYASgSQATgSAaAAQAIAAAJACQAIADAFADIAKAHIAGAGIABACIgTAUIAAgBIgFgFIgFgDIgIgEQgFgCgFAAQgOAAgJAJQgKAKAAANQAAAOAKAJQAJAKAOgBQAIAAAIgDQAHgEAEgEIADgDIASATIgCADIgGAGIgJAHQgGADgIACQgJADgIAAQgaAAgTgSg");
	// this.shape_6.setTransform(-3.2,0.3);

	this.shape_7 = new cjs.Shape();
	// this.shape_7.graphics.f("#FFFFFF").s().p("AgsA5IAAhxIBYAAIAAAaIg5AAIAAASIArAAIAAAYIgrAAIAAATIA6AAIAAAag");
	// this.shape_7.setTransform(-14.65,0.275);

	this.shape_8 = new cjs.Shape();
	// this.shape_8.graphics.f("#FFFFFF").s().p("AAVA5IAAgsIgpAAIAAAsIgfAAIAAhxIAfAAIAAAqIApAAIAAgqIAfAAIAABxg");
	// this.shape_8.setTransform(-26.95,0.275);

	this.shape_9 = new cjs.Shape();
	// this.shape_9.graphics.f("#FFFFFF").s().p("AgPA6IgOgEIgJgHIgGgEIgCgDIASgSIAEADIAIAEQAHADAGAAQAIAAAEgDQAEgEABgEQAAgKgPAAIgOAAIAAgZIAMAAQAGAAAEgCQAEgDAAgEQgBgEgEgDQgDgCgGAAQgGAAgFACQgFACgCADIgDABIgSgTIACgBIAFgFIAIgEQAFgDAIgCQAIgBAGgBQAUAAAMAKQAMAKAAANQAAAIgEAHQgFAGgEACIgFABIADACIAEACQAEABADADIAFAJQACAFAAAGQAAAPgNAKQgMALgWAAQgHgBgIgCg");
	// this.shape_9.setTransform(-38.8,0.3);

	this.shape_10 = new cjs.Shape();
	// this.shape_10.graphics.f("#FFFFFF").s().p("AAWA5IAAg+IgvA+IgbAAIAAhxIAeAAIAAA/IAxg/IAbAAIAABxg");
	// this.shape_10.setTransform(-50.3,0.275);

	this.shape_11 = new cjs.Shape();
	// this.shape_11.graphics.f("#FFFFFF").s().p("AguA5IAAhxIBTAAIAAAaIg0AAIAAAPIAVAAQASAAAMAKQALAKAAAQQAAAPgLALQgMAKgSAAgAgPAfIATAAQAFAAADgDQAEgDAAgFQAAgEgEgDQgCgDgGAAIgTAAg");
	// this.shape_11.setTransform(-62.35,0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-69.9,-11.2,139.9,22.4), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	// this.shape.graphics.lf(["rgba(0,0,0,0.8)","rgba(0,0,0,0)"],[0,1],0,-59.7,0,59.8).s().p("AyvJ9IAAz5MAlfAAAIAAT5g");
	//
	// this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-120,-63.7,240,127.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	// mask._off = true;
	// mask.graphics.p("A57Z8QqvqwAAvMQAAvLKvqwQKwqvPLAAQPMAAKwKvQKvKwAAPLQAAPMqvKwQqwKvvMAAQvLAAqwqvg");

	// Слой_1
	this.instance = new lib.Street();
	this.instance.parent = this;
	this.instance.setTransform(-300, -200);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-234.7,-200,469.4,400), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1 - копия: 2
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(0.05,0,0.0322,0.0322);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1.2289,scaleY:1.2289,x:0},29,cjs.Ease.backOut).to({_off:true},1).wait(11));

	// Слой_1 - копия: 2
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.05,0,0.0322,0.0322);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:1.2289,scaleY:1.2289,x:0},29,cjs.Ease.backOut).to({_off:true},1).wait(14));

	// Слой_1 - копия
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.05,0,0.0322,0.0322);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({scaleX:1.2289,scaleY:1.2289,x:0},29,cjs.Ease.backOut).to({_off:true},1).wait(17));

	// Слой_1
	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.05,0,0.0322,0.0322);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0.1,scaleX:1.1134,scaleY:1.1134,x:0.15},29,cjs.Ease.backOut).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-327.5,-288.4,655,576.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1 - копия: 2
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.0615,0.0615);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1.2062,scaleY:1.2062,alpha:0.6094},32,cjs.Ease.backOut).to({_off:true},1).wait(36));

	// Слой_1 - копия: 2
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.0615,0.0615);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:1.2062,scaleY:1.2062,alpha:0.6094},32,cjs.Ease.backOut).to({_off:true},1).wait(39));

	// Слой_1 - копия
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.0615,0.0615);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({scaleX:1.2062,scaleY:1.2062,alpha:0.6094},32,cjs.Ease.backOut).to({_off:true},1).wait(42));

	// Слой_1
	this.instance_3 = new lib.Символ16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.0615,0.0615);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.2062,scaleY:1.2062},32,cjs.Ease.backOut).to({regX:0.1,scaleX:1.2594,scaleY:1.2594,x:0.2},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335.6,-259.5,671.3,519.1);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9366,scaleY:0.9366},10,cjs.Ease.backOut).to({scaleX:1,scaleY:1},11,cjs.Ease.backOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.8,-12.4,177.7,24.9);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArYCeIAAk7IWxAAIAAE7g");
	mask.setTransform(3.275,-32.975);

	// БИЗНЕС-ЦЕНТР
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(0.3,-10.85);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-25.8},17,cjs.Ease.backOut).wait(13));

	// Слой_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ArYEDIAAoFIWxAAIAAIFg");
	mask_1.setTransform(3.275,8.6);

	// EXPO
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-36.55);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({y:1.8},18,cjs.Ease.backOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.6,-38.5,145.8,73);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-0.05,97.75);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({y:76.7,alpha:1},13,cjs.Ease.backOut).wait(68).to({y:134.2,alpha:0},13,cjs.Ease.backIn).to({_off:true},1).wait(6));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.6,68.55);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({y:47.5,alpha:1},13,cjs.Ease.backOut).wait(73).to({y:105,alpha:0},13,cjs.Ease.backIn).to({_off:true},1).wait(4));

	// Символ 10
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90.95,17.85);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({x:73.5,alpha:1},16,cjs.Ease.backOut).wait(69).to({x:119.5,alpha:0},13,cjs.Ease.backIn).to({_off:true},1).wait(8));

	// Символ 9
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(42.35,-0.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({x:24.9,alpha:1},16,cjs.Ease.backOut).wait(74).to({x:70.9,alpha:0},13,cjs.Ease.backIn).to({_off:true},1).wait(6));

	// Символ 8
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(65,-19.45);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({x:47.55,alpha:1},16,cjs.Ease.backOut).wait(79).to({x:93.55,alpha:0},13,cjs.Ease.backIn).to({_off:true},1).wait(4));

	// Символ 7
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(87.35,-38.75);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:69.9,alpha:1},16,cjs.Ease.backOut).wait(84).to({x:115.9,alpha:0},13,cjs.Ease.backIn).to({_off:true},1).wait(2));

	// Символ 12
	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,187.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({y:4.5},15,cjs.Ease.backOut).wait(86).to({y:181.6},17,cjs.Ease.backIn).to({_off:true},1).wait(2));

	// Символ 13
	this.instance_7 = new lib.Символ13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,178.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-4.5},19,cjs.Ease.backOut).wait(88).to({y:172.6},17,cjs.Ease.backIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.1,-109,281.4,424.9);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.Символ3("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(77.25,39.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(156));

	// Слой_4
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,63.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(156));

	// Слой_5
	this.instance_2 = new lib.Символ14("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(120.3,310.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).wait(135));

	// Слой_7
	this.instance_3 = new lib.Символ18("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(119.8,204.25,2.9659,2.9659,0,0,0,0.1,0.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120).to({_off:false},0).to({regX:0,regY:0.1,scaleX:0.81,scaleY:0.81,x:119.5,y:200.2,startPosition:38},35,cjs.Ease.cubicOut).wait(1));

	// Слой_6
	this.instance_4 = new lib.Символ17("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(119.95,198.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).wait(114));

	// Слой_1
	this.instance_5 = new lib.Символ1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(119.5,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.2289,scaleY:1.2289,y:203},107).to({_off:true},1).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.7,52.4,698.9000000000001,574.2);
// library properties:
lib.properties = {
	id: '08BA17FD75025F42892F647BA85D67D6',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Hole.jpg", id:"Hole"},
		{src:"images/Street.jpg", id:"Street"}
		// {src:"images/Street3.jpg", id:"Street3"}
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
an.compositions['08BA17FD75025F42892F647BA85D67D6'] = {
	getStage: function() { return exportRoot.getStage(); },
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
