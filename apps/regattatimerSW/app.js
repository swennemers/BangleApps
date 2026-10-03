/**
 * Regatta Timer
 */
const Layout = require("Layout");
const locale = require("locale").name == "system" ? "en" : require("locale").name.substring(0, 2);

// "Anton" bold font
Graphics.prototype.setFontAnton = function(scale) {
  // Actual height 69 (68 - 0)
  g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAA/gAAAAAAAAAAP/gAAAAAAAAAH//gAAAAAAAAB///gAAAAAAAAf///gAAAAAAAP////gAAAAAAD/////gAAAAAA//////gAAAAAP//////gAAAAH///////gAAAB////////gAAAf////////gAAP/////////gAD//////////AA//////////gAA/////////4AAA////////+AAAA////////gAAAA///////wAAAAA//////8AAAAAA//////AAAAAAA/////gAAAAAAA////4AAAAAAAA///+AAAAAAAAA///gAAAAAAAAA//wAAAAAAAAAA/8AAAAAAAAAAA/AAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////AAAAAB///////8AAAAH////////AAAAf////////wAAA/////////4AAB/////////8AAD/////////+AAH//////////AAP//////////gAP//////////gAP//////////gAf//////////wAf//////////wAf//////////wAf//////////wA//8AAAAAB//4A//wAAAAAAf/4A//gAAAAAAP/4A//gAAAAAAP/4A//gAAAAAAP/4A//wAAAAAAf/4A///////////4Af//////////wAf//////////wAf//////////wAf//////////wAP//////////gAP//////////gAH//////////AAH//////////AAD/////////+AAB/////////8AAA/////////4AAAP////////gAAAD///////+AAAAAf//////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAAAP/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/AAAAAAAAAAA//AAAAAAAAAAA/+AAAAAAAAAAB/8AAAAAAAAAAD//////////gAH//////////gAP//////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/4AAAAB/gAAD//4AAAAf/gAAP//4AAAB//gAA///4AAAH//gAB///4AAAf//gAD///4AAA///gAH///4AAD///gAP///4AAH///gAP///4AAP///gAf///4AAf///gAf///4AB////gAf///4AD////gA////4AH////gA////4Af////gA////4A/////gA//wAAB/////gA//gAAH/////gA//gAAP/////gA//gAA///8//gA//gAD///w//gA//wA////g//gA////////A//gA///////8A//gA///////4A//gAf//////wA//gAf//////gA//gAf/////+AA//gAP/////8AA//gAP/////4AA//gAH/////gAA//gAD/////AAA//gAB////8AAA//gAA////wAAA//gAAP///AAAA//gAAD//8AAAA//gAAAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/+AAAAAD/wAAB//8AAAAP/wAAB///AAAA//wAAB///wAAB//wAAB///4AAD//wAAB///8AAH//wAAB///+AAP//wAAB///+AAP//wAAB////AAf//wAAB////AAf//wAAB////gAf//wAAB////gA///wAAB////gA///wAAB////gA///w//AAf//wA//4A//AAA//wA//gA//AAAf/wA//gB//gAAf/wA//gB//gAAf/wA//gD//wAA//wA//wH//8AB//wA///////////gA///////////gA///////////gA///////////gAf//////////AAf//////////AAP//////////AAP/////////+AAH/////////8AAH///+/////4AAD///+f////wAAA///8P////gAAAf//4H///+AAAAH//gB///wAAAAAP4AAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAAAAAAA//wAAAAAAAAAP//wAAAAAAAAB///wAAAAAAAAf///wAAAAAAAH////wAAAAAAA/////wAAAAAAP/////wAAAAAB//////wAAAAAf//////wAAAAH///////wAAAA////////wAAAP////////wAAA///////H/wAAA//////wH/wAAA/////8AH/wAAA/////AAH/wAAA////gAAH/wAAA///4AAAH/wAAA//+AAAAH/wAAA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gAAAAAAAAH/4AAAAAAAAAAH/wAAAAAAAAAAH/wAAAAAAAAAAH/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8AAA/////+B///AAA/////+B///wAA/////+B///4AA/////+B///8AA/////+B///8AA/////+B///+AA/////+B////AA/////+B////AA/////+B////AA/////+B////gA/////+B////gA/////+B////gA/////+A////gA//gP/gAAB//wA//gf/AAAA//wA//gf/AAAAf/wA//g//AAAAf/wA//g//AAAA//wA//g//gAAA//wA//g//+AAP//wA//g////////gA//g////////gA//g////////gA//g////////gA//g////////AA//gf///////AA//gf//////+AA//gP//////+AA//gH//////8AA//gD//////4AA//gB//////wAA//gA//////AAAAAAAH////8AAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////gAAAAB///////+AAAAH////////gAAAf////////4AAB/////////8AAD/////////+AAH//////////AAH//////////gAP//////////gAP//////////gAf//////////wAf//////////wAf//////////wAf//////////wAf//////////4A//wAD/4AAf/4A//gAH/wAAP/4A//gAH/wAAP/4A//gAP/wAAP/4A//gAP/4AAf/4A//wAP/+AD//4A///wP//////4Af//4P//////wAf//4P//////wAf//4P//////wAf//4P//////wAP//4P//////gAP//4H//////gAH//4H//////AAH//4D/////+AAD//4D/////8AAB//4B/////4AAA//4A/////wAAAP/4AP////AAAAB/4AD///4AAAAAAAAAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAAAAAAAAA//gAAAAAAAAAA//gAAAAAAAAAA//gAAAAAAADgA//gAAAAAAP/gA//gAAAAAH//gA//gAAAAB///gA//gAAAAP///gA//gAAAD////gA//gAAAf////gA//gAAB/////gA//gAAP/////gA//gAB//////gA//gAH//////gA//gA///////gA//gD///////gA//gf///////gA//h////////gA//n////////gA//////////gAA/////////AAAA////////wAAAA///////4AAAAA///////AAAAAA//////4AAAAAA//////AAAAAAA/////4AAAAAAA/////AAAAAAAA////8AAAAAAAA////gAAAAAAAA///+AAAAAAAAA///4AAAAAAAAA///AAAAAAAAAA//4AAAAAAAAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//gB///wAAAAP//4H///+AAAA///8P////gAAB///+f////4AAD///+/////8AAH/////////+AAH//////////AAP//////////gAP//////////gAf//////////gAf//////////wAf//////////wAf//////////wA///////////wA//4D//wAB//4A//wB//gAA//4A//gA//gAAf/4A//gA//AAAf/4A//gA//gAAf/4A//wB//gAA//4A///P//8AH//4Af//////////wAf//////////wAf//////////wAf//////////wAf//////////gAP//////////gAP//////////AAH//////////AAD/////////+AAD///+/////8AAB///8f////wAAAf//4P////AAAAH//wD///8AAAAA/+AAf//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//gAAAAAAAAB///+AA/+AAAAP////gA//wAAAf////wA//4AAB/////4A//8AAD/////8A//+AAD/////+A///AAH/////+A///AAP//////A///gAP//////A///gAf//////A///wAf//////A///wAf//////A///wAf//////A///wA///////AB//4A//4AD//AAP/4A//gAB//AAP/4A//gAA//AAP/4A//gAA/+AAP/4A//gAB/8AAP/4A//wAB/8AAf/4Af//////////wAf//////////wAf//////////wAf//////////wAf//////////wAP//////////gAP//////////gAH//////////AAH/////////+AAD/////////8AAB/////////4AAAf////////wAAAP////////AAAAB///////4AAAAAD/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/AAB/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="), 46, atob("EiAnGicnJycnJycnEw=="), 78 + (scale << 8) + (1 << 16));
};
// BEGIN FORK

const BANGLEJS2 = process.env.HWVERSION==2;
const screenH  = g.getHeight();
const screenH_Half        = screenH / 2;
const screenH_Third       = screenH / 3;
const screenH_TwoThirds   = screenH * 2 / 3;
const screenW  = g.getWidth();
const screenW_Half        = screenW / 2;
const fontFactorB2 = 2/3;

/*kalmanjs, Wouter Bulten, MIT, https://github.com/wouterbulten/kalmanjs */
var KalmanFilter = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
  * KalmanFilter
  * @class
  * @author Wouter Bulten
  * @see {@link http://github.com/wouterbulten/kalmanjs}
  * @version Version: 1.0.0-beta
  * @copyright Copyright 2015-2018 Wouter Bulten
  * @license MIT License
  * @preserve
  */
  var KalmanFilter =
  /*#__PURE__*/
  function () {
    /**
    * Create 1-dimensional kalman filter
    * @param  {Number} options.R Process noise
    * @param  {Number} options.Q Measurement noise
    * @param  {Number} options.A State vector
    * @param  {Number} options.B Control vector
    * @param  {Number} options.C Measurement vector
    * @return {KalmanFilter}
    */
    function KalmanFilter() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$R = _ref.R,
          R = _ref$R === void 0 ? 1 : _ref$R,
          _ref$Q = _ref.Q,
          Q = _ref$Q === void 0 ? 1 : _ref$Q,
          _ref$A = _ref.A,
          A = _ref$A === void 0 ? 1 : _ref$A,
          _ref$B = _ref.B,
          B = _ref$B === void 0 ? 0 : _ref$B,
          _ref$C = _ref.C,
          C = _ref$C === void 0 ? 1 : _ref$C;

      _classCallCheck(this, KalmanFilter);

      this.R = R; // noise power desirable

      this.Q = Q; // noise power estimated

      this.A = A;
      this.C = C;
      this.B = B;
      this.cov = NaN;
      this.x = NaN; // estimated signal without noise
    }
    /**
    * Filter a new value
    * @param  {Number} z Measurement
    * @param  {Number} u Control
    * @return {Number}
    */


    _createClass(KalmanFilter, [{
      key: "filter",
      value: function filter(z) {
        var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (isNaN(this.x)) {
          this.x = 1 / this.C * z;
          this.cov = 1 / this.C * this.Q * (1 / this.C);
        } else {
          // Compute prediction
          var predX = this.predict(u);
          var predCov = this.uncertainty(); // Kalman gain

          var K = predCov * this.C * (1 / (this.C * predCov * this.C + this.Q)); // Correction

          this.x = predX + K * (z - this.C * predX);
          this.cov = predCov - K * this.C * predCov;
        }

        return this.x;
      }
      /**
      * Predict next value
      * @param  {Number} [u] Control
      * @return {Number}
      */

    }, {
      key: "predict",
      value: function predict() {
        var u = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return this.A * this.x + this.B * u;
      }
      /**
      * Return uncertainty of filter
      * @return {Number}
      */

    }, {
      key: "uncertainty",
      value: function uncertainty() {
        return this.A * this.cov * this.A + this.R;
      }
      /**
      * Return the last filtered measurement
      * @return {Number}
      */

    }, {
      key: "lastMeasurement",
      value: function lastMeasurement() {
        return this.x;
      }
      /**
      * Set measurement noise Q
      * @param {Number} noise
      */

    }, {
      key: "setMeasurementNoise",
      value: function setMeasurementNoise(noise) {
        this.Q = noise;
      }
      /**
      * Set the process noise R
      * @param {Number} noise
      */

    }, {
      key: "setProcessNoise",
      value: function setProcessNoise(noise) {
        this.R = noise;
      }
    }]);

    return KalmanFilter;
  }();

  return KalmanFilter;

}());




// END FORK


function Regattatimer() {
  return {
    layout: undefined,
    /*
    layouts: {
      idle: function() {
        switch(settings.dial) {
          case "Discs":
            break;
          case "Numeric":
          default:
            break;
        }
      },
      start: function(phase) {
        switch(settings.dial) {
          case "Discs":
            break;
          case "Numeric":
          default:
            break;
        }
      },
      race: function() {
      }
    },
    */
    mode: "idle", // idle, start, race"
    countdown: 300, // 5 minutes
    counter: undefined,
    interval: undefined,
    theme: null,
    themes: {
      Light: {
        fgColor: "#000000",
        bgColor: "#FFFF00",
      },
      Dark: {
        fgColor: "#FFFF00",
        bgColor: "#000000",
      },
    },
    icons: {
      battery: function () {
        return Graphics.createImage(`
 XXXX
X    X
X XX X
X    X
X XX X
X    X
X XX X
X    X
X XX X
X    X
XXXXXX`);
      },
      satellites: function () {
        return Graphics.createImage(`
      X
     XoX
    XoX
   XoX
  XoX o   X
 XoX o o XoX
XoX o o XoX
 X   o XoX
      XoX
     XoX
    XoX
     X`);
      },
    },
    settings: Object.assign(
      {
        debug: false,
        buzzer: true,
        dial: "Numeric",
        gps: true,
        record: false,
        theme: "Dark",
        //BEGIN FORK

        spd : 0,   // Multiplier for speed unit conversions. 0 = use the locale values for speed
        spd_unit : 'km/h',  // Displayed speed unit
        alt : 1,// Multiplier for altitude unit conversions. (feet:'0.3048')
        alt_unit : 'meter',  // Displayed altitude units ('feet')
        dist : 1000,// Multiplier for distnce unit conversions.
        dist_unit : 'km',  // Displayed altitude units
        colour : 0,          // Colour scheme.
        wp : 0,        // Last selected waypoint for dist
        modeA : 1,    // 0 = [D]ist, 1 = [A]ltitude, 2 = [C]lock
        primSpd : 1,    // 1 = Spd in primary, 0 = Spd in secondary

        spdFilt : true,
        altFilt : true,
        //END FORK
      },
      require("Storage").readJSON("regattatimerSW.json", true) || {},
    ),

    translations: Object.assign(
      {
        de: {
          speed: "FüG", // Fahrt über Grund
          speed_unit: "kn",
        },
        en: {
          speed: "SOA", // SOA speed of advance
          speed_unit: "kn",
        },
      },
      require("Storage").readJSON("translations.json", true) || {},
    ),

    // BEGIN FORK

    BANGLEJS2: process.env.HWVERSION == 2,
    screenH: g.getHeight(),
    screenH_Half: screenH / 2,
    screenH_Third: screenH / 3,
    screenH_TwoThirds: (screenH * 2) / 3,
    screenW: g.getWidth(),
    screenW_Half: screenW / 2,
    fontFactorB2: 2 / 3,
    buf: Graphics.createArrayBuffer(screenW, screenH_TwoThirds, 2, {
      msb: true,
    }),
    lf: { fix: 0, satellites: 0 },
    showMax: 0, // 1 = display the max values. 0 = display the cur fix
    pwrSav: 1, // 1 = default power saving with watch screen off and GPS to PMOO mode. 0 = screen kept on.
    canDraw: 1,
    time: "", // Last time string displayed. Re displayed in background colour to remove before drawing new time.
    tmrLP: null, // Timer for delay in switching to low power after screen turns off

    max: {
      spd: 0,
      alt: 0,
      n: 0, // counter. Only start comparing for max after a certain number of fixes to allow kalman filter to have smoohed the data.
    },

    emulator:
      process.env.BOARD == "EMSCRIPTEN" || process.env.BOARD == "EMSCRIPTEN2"
        ? 1
        : 0, // 1 = running in emulator. Supplies test values;

    wp: {}, // Waypoint to use for distance from cur position.
    //var SATinView = 0;

    nxtWp: function (inc) {
      this.settings.wp += inc;
      this.loadWp();
    },
    savSettings: function() {
        require("Storage").write('regattaTimerSW.json',this.settings);
      },
    loadWp: function () {
      var w = require("waypoints").load();
      if (this.settings.wp >= w.length) this.settings.wp = 0;
      if (this.settings.wp < 0) this.settings.wp = w.length - 1;
      this.saveSettings();
      this.wp = w[this.settings.wp];
    },

    radians: function (a) {
      return (a * Math.PI) / 180;
    },

    distance: function (a, b) {
      var x = this.radians(a.lon - b.lon) * Math.cos(this.radians((a.lat + b.lat) / 2));
      var y = this.radians(b.lat - a.lat);

      // Distance in selected units
      var d = Math.sqrt(x * x + y * y) * 6371000;
      d = (d / parseFloat(this.settings.dist)).toFixed(2);
      if (d >= 100) d = parseFloat(d).toFixed(1);
      if (d >= 1000) d = parseFloat(d).toFixed(0);

      return d;
    },

    drawFix: function (dat) {
      if (!this.canDraw) return;

      this.buf.clear();

      var v = "";
      var u = "";

      // Primary Display
      v = this.settings.primSpd ? dat.speed.toString() : dat.alt.toString();

      // Primary Units
      u = this.settings.primSpd ? this.settings.spd_unit : dat.alt_units;

      this.drawPrimary(v, u);

      // Secondary Display
      v = this.settings.primSpd ? dat.alt.toString() : dat.speed.toString();

      // Secondary Units
      u = this.settings.primSpd ? dat.alt_units : this.settings.spd_unit;

      this.drawSecondary(v, u);

      // Time
      this.drawTime();

      // Waypoint name
      this.drawWP();

      //Sats
      if (dat.age > 10) {
        if (dat.age > 90) dat.age = ">90";
        this.drawSats("Age:" + dat.age);
      } else this.drawSats("Sats:" + dat.sats);

      /*  else if (!BANGLEJS2) {
    drawSats('Sats:'+dat.sats);
  } else {
    if (this.lf.fix) {
      if(emulator)console.log("fix "+lf.fix);
      drawSats('Sats:'+dat.sats);
    } else {
      if(emulator)console.log("inView: "+SATinView);
      drawSats('View:' + SATinView);
    }
  }
*/
      g.reset();
      g.drawImage(this.img, 0, 40);
    },

    drawClock: function () {
      if (!this.canDraw) return;
      this.buf.clear();
      this.drawTime();
      this.drawWP();
      g.reset();
      g.drawImage(this.img, 0, 40);
    },

    drawPrimary: function (n, u) {
      if (this.emulator) console.log("drawPrimary: " + n + " " + u);
      // Primary Display

      var s = 40; // Font size
      var l = n.length;

      if (l <= 7) s = 48;
      if (l <= 6) s = 55;
      if (l <= 5) s = 66;
      if (l <= 4) s = 85;
      if (l <= 3) s = 110;

      this.buf.setFontAlign(0, -1); //Centre
      this.buf.setColor(1);
      if (BANGLEJS2) s *= fontFactorB2;
      this.buf.setFontVector(s);
      this.buf.drawString(n, screenW_Half - 10, 0);

      // Primary Units
      s = 35; // Font size
      this.buf.setFontAlign(1, -1, 3); //right
      this.buf.setColor(2);
      if (BANGLEJS2) s = 20;
      this.buf.setFontVector(s);
      this.buf.drawString(u, screenW - 30, 0);
    },

    drawSecondary: function (n, u) {
      if (this.emulator) console.log("drawSecondary: " + n + " " + u);
      var xu = 180; // units X position
      var l = n.length;
      if (l <= 5) xu = 155;
      if (l <= 4) xu = 125;
      if (l <= 3) xu = 100;
      if (l <= 2) xu = 65;
      if (l <= 1) xu = 35;

      this.buf.setFontAlign(-1, 1); //left, bottom
      this.buf.setColor(1);
      var s = 45; // Font size
      if (BANGLEJS2) s *= fontFactorB2;
      this.buf.setFontVector(s);
      this.buf.drawString(n, 5, screenH_TwoThirds - 20);

      // Secondary Units
      this.buf.setFontAlign(-1, 1); //left, bottom

      this.buf.setColor(2);
      s = 30; // Font size
      if (BANGLEJS2) s *= fontFactorB2;
      this.buf.setFontVector(s);
      this.buf.drawString(u, xu - (BANGLEJS2 * xu) / 5, screenH_TwoThirds - 25);
    },

    drawTime: function () {
      var x, y;

      if (this.settings.modeA == 2) {
        x = screenW_Half;
        y = 0;
        this.buf.setFontAlign(0, -1);
        this.buf.setFontVector(screenH_Third);
      } else {
        x = 0;
        y = screenH_TwoThirds;
        this.buf.setFontAlign(-1, 1);
        if (!BANGLEJS2) this.buf.setFont("7x11Numeric7Seg", 2);
        else this.buf.setFont("6x8", 2);
      }

      this.buf.setColor(0);
      this.buf.drawString(this.time, x, y);
      this.time = require("locale").time(new Date(), 1);
      this.buf.setColor(3);
      this.buf.drawString(this.time, x, y);
    },

    drawWP: function () {
      // from  waypoints.json - see README.md
      var nm = this.wp.name;
      if (nm == undefined || nm == "NONE" || this.settings.modeA == 1) nm = "";
      if (this.emulator) nm = "waypoint";
      this.buf.setColor(2);
      var s = 20; // Font size

      if (this.settings.modeA == 0) {
        // dist mode
        if (this.emulator) console.log("drawWP() 0: " + nm);
        this.buf.setFontAlign(-1, 1); //left, bottom
        if (BANGLEJS2) s *= fontFactorB2;
        this.buf.setFontVector(s);
        this.buf.drawString(
          nm.substring(0, 6),
          72,
          screenH_TwoThirds - BANGLEJS2 * 15,
        );
      }

      if (this.settings.modeA == 2) {
        // clock/large mode
        if (this.emulator) console.log("drawWP() 2: " + nm);
        s = 55; // Font size
        this.buf.setFontAlign(0, 1); //left, bottom
        if (BANGLEJS2) s *= fontFactorB2;
        this.buf.setFontVector(s);
        this.buf.drawString(
          nm.substring(0, 6),
          screenW_Half,
          screenH_TwoThirds - BANGLEJS2 * 20,
        );
      }
    },

    drawSats: function (sats) {
      this.buf.setColor(3);
      this.buf.setFont("6x8", 2);
      this.buf.setFontAlign(1, 1); //right, bottom
      this.buf.drawString(sats, screenW, screenH_TwoThirds);

      this.s = 30; // Font size
      if (BANGLEJS2) this.s = 18;
      this.buf.setFontVector(this.s);
      this.buf.setColor(2);

      if (this.settings.modeA == 1) {
        this.buf.drawString("A", screenW, 140 - BANGLEJS2 * 40);
        if (this.showMax) {
          this.buf.setFontAlign(0, 1); //centre, bottom
          this.buf.drawString("MAX", screenW_Half, screenH_TwoThirds + 4);
        }
      }
      if (this.settings.modeA == 0) this.buf.drawString("D", screenW, 140 - BANGLEJS2 * 40);
    },

    // END FORK
    init: function () {
      if (this.settings.debug) {
        this.countdown = 1;
      }

      this.theme = this.themes[this.settings.theme];

      Bangle.setLCDPower(1);
      Bangle.setLCDTimeout(0);

      // in "idle", "start" or "stoped" mode, a button click (re)starts the countdown
      // in "race" mode, a button click stops the counter
      var onButtonClick = function (ev) {
        switch (this.mode) {
          case "idle":
            this.resetCounter();
            this.mode = "start";
            this.setLayoutStartMinSec();
            this.startCounter();
            this.interval = setInterval(
              function () {
                this.startCounter();
              }.bind(this),
              1000,
            );
            break;
          case "stoped":
          case "start":
            this.resetCounter();
            this.setLayoutIdle();
            break;
          case "race":
            this.raceCounterStop();
            break;
        }
      }.bind(this);

      setWatch(onButtonClick, BTN1, true);

      this.setLayoutIdle();
    },

    onGPS: function (fix) {
      if (this.mode == "race") {
        // BEGIN FORK
        // comment regattatimer code
        // if(fix.fix && isFinite(fix.speed)) {
        //   this.layout.clear(layout.speed);
        //   this.layout.speed.label = fix.speed.toFixed(2);
        //   this.layout.render(this.layout.speed);
        // }
        // this.layout.satellites.label = fix.satellites;
        // adding speedalt code:

        if (this.emulator) {
          fix.fix = 1;
          fix.speed = 10 + Math.random() * 5;
          fix.alt = 354 + Math.random() * 50;
          fix.lat = -38.92;
          fix.lon = 175.761335;
          fix.course = 245;
          fix.satellites = 12;
          fix.time = new Date();
          fix.smoothed = 0;
        }

        var m;

        var sp = "---";
        var al = "---";
        var di = "---";
        var age = "---";

        if (fix.fix) this.lf = fix;

        if (this.lf.fix) {
          //    if (BANGLEJS2 && !this.emulator) Bangle.removeListener('GPS-raw', onGPSraw);

          // Smooth data
          if (this.lf.smoothed !== 1) {
            if (this.settings.spdFilt) this.lf.speed = this.spdFilter.filter(this.lf.speed);
            if (this.settings.altFilt) this.lf.alt = this.altFilter.filter(this.lf.alt);
            this.lf.smoothed = 1;
            if (this.max.n <= 15) this.max.n++;
          }

          // Speed
          if (this.settings.spd == 0) {
            m = require("locale")
              .speed(this.lf.speed)
              .match(/([0-9,\.]+)(.*)/); // regex splits numbers from units
            sp = parseFloat(m[1]);
            this.settings.spd_unit = m[2];
          } else sp = parseFloat(this.lf.speed) / parseFloat(this.settings.spd); // Calculate for selected units

          if (sp < 10) sp = sp.toFixed(1);
          else sp = Math.round(sp);
          if (parseFloat(sp) > parseFloat(this.max.spd) && this.max.n > 15)
            this.max.spd = parseFloat(sp);

          // Altitude
          al = this.lf.alt;
          al = Math.round(parseFloat(al) / parseFloat(this.settings.alt));
          if (parseFloat(al) > parseFloat(this.max.alt) && this.max.n > 15)
            this.max.alt = parseFloat(al);

          // Distance to waypoint
          di = this.distance(this.lf, this.wp);
          if (isNaN(di)) di = 0;

          // Age of last fix (secs)
          age = Math.max(0, Math.round(getTime()) - this.lf.time.getTime() / 1000);
        }

        if (this.settings.modeA == 1) {
          if (this.showMax)
            this.drawFix({
              speed: this.max.spd,
              sats: this.lf.satellites,
              alt: this.max.alt,
              alt_units: this.settings.alt_unit,
              age: age,
              fix: this.lf.fix,
            });
          // Speed and alt maximums
          else
            this.drawFix({
              speed: sp,
              sats: this.lf.satellites,
              alt: al,
              alt_units: this.settings.alt_unit,
              age: age,
              fix: this.lf.fix,
            }); // Show speed/altitude
        }
        if (this.settings.modeA == 0) {
          // Show speed/distance
          if (di <= 0)
            this.drawFix({
              speed: sp,
              sats: this.lf.satellites,
              alt: "",
              alt_units: "",
              age: age,
              fix: this.lf.fix,
            });
          // No WP selected
          else
            this.drawFix({
              speed: sp,
              sats: this.lf.satellites,
              alt: di,
              alt_units: this.settings.dist_unit,
              age: age,
              fix: this.lf.fix,
            });
        }
        if (this.settings.modeA == 2) {
          // Large clock
          this.drawClock();
        }
      }
    },

    translate: function (slug) {
      return this.translations[locale][slug];
    },
    // during the start phase, the clock counts down 5 4 1 0 minutes
    // a button click restarts the countdown
    startCounter: function () {
      this.counter--;

      if (this.counter >= 0) {
        var counterMinutes = parseInt(this.counter / 60);

        if (counterMinutes > 0) {
          this.layout.minutes.label = counterMinutes;
          // this.layout.seconds.label = "0".concat(this.counter - counterMinutes * 60).toString().slice(-2);
          this.layout.seconds.label = this.padZeroLeft(
            this.counter - counterMinutes * 60,
          );
          this.layout.render();
        } else {
          this.setLayoutStartSec();
          this.layout.seconds.label = this.counter.toString();
          this.layout.render();
        }
        // this keeps the watch LCD lit up
        g.flip();
      }
      // time is up
      else {
        this.raceCounterStart();
      }
    },
    padZeroLeft: function (str) {
      return str.toString().padStart(2, "0");
    },
    formatTime: function (time) {
      var minutes = parseInt(time / 60),
        seconds = time - minutes * 60;

      return (
        this.padZeroLeft(parseInt(time / 3600)) +
        ":" +
        this.padZeroLeft(minutes) +
        ":" +
        this.padZeroLeft(seconds)
      );
    },
    raceCounter: function () {
      if (this.counter % 60 == 0) {
        this.layout.clear(this.layout.battery);
        this.layout.battery.label = E.getBattery() + "%";
        this.layout.render(this.layout.battery);
      }

      this.counter++;

      this.layout.racetime.label = this.formatTime(this.counter);
      this.layout.daytime.label = require("locale").time(new Date(), 1);
      this.layout.render();

      // keeps the watch screen lit up
      g.flip();
    },
    raceCounterStop: function () {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = undefined;
      }
      this.mode = "stoped";
    },
    raceCounterStart: function () {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = undefined;
      }

      if (this.settings.buzzer) {
        Bangle.buzz();
      }

      this.counter = 0;
      // switch to race mode
      this.mode = "race";
      this.setLayoutRace();
      this.raceCounter();
      this.interval = setInterval(
        function () {
          this.raceCounter();
        }.bind(this),
        1000,
      );
    },

    resetCounter: function () {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = undefined;
      }
      this.counter = this.countdown;
    },

    setLayoutIdle: function () {
      g.clear();

      this.mode = "idle";

      this.layout = new Layout(
        {
          type: "v",
          bgCol: this.theme.bgColor,
          c: [
            {
              type: "v",
              c: [
                {
                  type: "txt",
                  font: "Anton",
                  label: "5",
                  col: this.theme.fgColor,
                  id: "minutes",
                  fillx: 1,
                  filly: 1,
                },
                {
                  type: "txt",
                  font: "20%",
                  label: "--:--",
                  col: this.theme.fgColor,
                  id: "daytime",
                  fillx: 1,
                  filly: 1,
                },
              ],
            },
          ],
        },
        { lazy: true },
      );

      this.interval = setInterval(
        function () {
          this.layout.daytime.label = require("locale").time(new Date(), 1);
          this.layout.render();

          // keeps the watch screen lit up
          g.flip();
        }.bind(this),
        1000,
      );
    },
    setLayoutStartMinSec: function () {
      g.clear();

      this.layout = new Layout(
        {
          type: "v",
          bgCol: this.theme.bgColor,
          c: [
            {
              type: "h",
              c: [
                {
                  type: "txt",
                  font: "Anton",
                  label: "4",
                  col: this.theme.fgColor,
                  id: "minutes",
                  fillx: 1,
                  filly: 1,
                },
                {
                  type: "txt",
                  font: "Anton",
                  label: "59",
                  col: this.theme.fgColor,
                  id: "seconds",
                  fillx: 1,
                  filly: 1,
                },
              ],
            },
          ],
        },
        { lazy: true },
      );
    },
    setLayoutStartSec: function () {
      g.clear();

      this.layout = new Layout(
        {
          type: "v",
          bgCol: this.theme.bgColor,
          c: [
            {
              type: "txt",
              font: "Anton",
              label: "",
              fillx: true,
              filly: true,
              col: this.theme.fgColor,
              id: "seconds",
            },
          ],
        },
        { lazy: true },
      );
    },
    setLayoutRace: function () {
      //BEGIN FORK
      function updateClock() {
        if (!this.canDraw) return;
        this.drawTime();
        g.reset();
        g.drawImage(img, 0, 40);
        if (this.emulator) {
          this.max.spd++;
          this.max.alt++;
        }
      }

      function startDraw() {
        this.canDraw = true;
        this.setLpMode("SuperE"); // off
        g.clear();
        Bangle.drawWidgets();
        this.onGPS(this.lf); // draw app screen
      }

      function stopDraw() {
        this.canDraw = false;
        if (!this.tmrLP)
          this.tmrLP = setInterval(function () {
            if (this.lf.fix) this.setLpMode("PSMOO");
          }, 10000); //Drop to low power in 10 secs. Keep lp mode off until we have a  first fix.
      }


      function btn1press(longpress) {
        if (this.emulator) console.log("Btn1, long=" + longpress);
        if (this.settings.modeA == 1) {
          // Spd+Alt mode - Switch between fix and MAX
          if (!longpress)
            this.showMax = !this.showMax; // Short press toggle fix/max display
          else {
            this.max.spd = 0;
            this.max.alt = 0;
          } // Long press resets max values.
        } else this.nxtWp(1); // Spd+Dist or Clock mode - Select next waypoint
        this.onGPS(this.lf);
      }
      function btn2press() {
        if (this.emulator) console.log("Btn2");
        this.pwrSav = !this.pwrSav;
        if (this.pwrSav) {
          LED1.reset();
          //var storage = require("Storage").readJSON("setting.json", 1) || {};
          var t = this.s.timeout || 10;
          Bangle.setLCDTimeout(t);
        } else {
          Bangle.setLCDTimeout(0);
          Bangle.setLCDPower(1);
          LED1.set();
        }
      }
      function btn3press() {
        if (this.emulator) console.log("Btn3");
        this.settings.modeA = this.settings.modeA + 1;
        if (this.settings.modeA > 2) this.settings.modeA = 0;
        if (this.emulator) console.log("this.settings.modeA=" + this.settings.modeA);
        this.saveSettings();
        this.onGPS(this.lf);
      }
      function btn4press() {
        if (this.emulator) console.log("Btn4");
        this.settings.primSpd = !this.settings.primSpd;
        this.saveSettings();
        this.onGPS(this.lf); // Update display
      }

      function setButtons() {
        if (!BANGLEJS2) {
          // Buttons for Bangle.js 1
          setWatch(
            function (e) {
              btn1press(e.time - e.lastTime > 2); // > 2 sec. is long press
            },
            BTN1,
            { edge: "falling", repeat: true },
          );

          // Power saving on/off (red dot visible if off)
          setWatch(btn2press, BTN2, { repeat: true, edge: "falling" });

          // Toggle between alt or dist
          setWatch(btn3press, BTN3, { repeat: true, edge: "falling" });

          // Touch left screen to toggle display
          setWatch(btn4press, BTN4, { repeat: true, edge: "falling" });
        } else {
          // Buttons for Bangle.js 2
          setWatch(
            function (e) {
              btn1press(e.time - e.lastTime > 0.4); // > 0.4 sec. is long press
            },
            BTN1,
            { edge: "falling", repeat: true },
          );

          Bangle.on("touch", function (btn_l_r, e) {
            if (e.x < screenW_Half) btn4press();
            else if (e.y < screenH_Half) btn2press();
            else btn3press();
          });
        }
      }

      this.settings.spdFilt = this.settings.spdFilt == undefined ? true : this.settings.spdFilt;
      this.settings.altFilt = this.settings.altFilt == undefined ? true : this.settings.altFilt;

      if (this.settings.spdFilt) this.spdFilter = new KalmanFilter({ R: 0.1, Q: 1 });
      if (this.settings.altFilt) this.altFilter = new KalmanFilter({ R: 0.01, Q: 2 });

      this.loadWp();

      /*
      Colour Pallet Idx
      0 : Background (black)
      1 : Speed/Alt
      2 : Units
      3 : Sats
      */
      const background = 0; // g.theme.bg = 0xFFFF = gelb!?
      var img = {
        width: this.buf.getWidth(),
        height: this.buf.getHeight(),
        bpp: 2,
        buffer: this.buf.buffer,
        palette: new Uint16Array([background, 0x4fe0, 0xefe0, 0x07db]), // "Default"
      };

      if (this.settings.colour == 1)
        img.palette = new Uint16Array([background, 0xffff, 0xfff6, 0xdfff]); // "Hi contrast"
      if (this.settings.colour == 2)
        img.palette = new Uint16Array([background, 0xff800, 0xfae0, 0xf813]); // "Night"

      var SCREENACCESS = {
        withApp: true,
        request: function () {
          this.withApp = false;
          stopDraw();
        },
        release: function () {
          this.withApp = true;
          startDraw();
        },
      };

      Bangle.on("lcdPower", function (on) {
        if (!SCREENACCESS.withApp) return;
        if (on) startDraw();
        else stopDraw();
      });

      var gpssetup;
      try {
        gpssetup = require("gpssetup");
      } catch (e) {
        gpssetup = false;
      }

      // All set up. Lets go.
      g.clear();
      this.onGPS(this.lf);
      Bangle.setGPSPower(1);

      if (gpssetup) {
        gpssetup.setPowerMode({ power_mode: "SuperE" }).then(function () {
          Bangle.setGPSPower(1);
        });
      } else {
        Bangle.setGPSPower(1);
      }

      Bangle.on("GPS", this.onGPS);

      setButtons();
      setInterval(updateClock, 10000);
      Bangle.loadWidgets();
      Bangle.drawWidgets();
    },
    setLayoutRaceOriginal: function () {
      //END FORK
      g.clear();

      this.layout = new Layout(
        {
          type: "v",
          bgCol: this.theme.bgColor,
          c: [
            {
              type: "txt",
              font: "20%",
              label: "00:00:00",
              col: this.theme.fgColor,
              pad: 4,
              filly: 1,
              fillx: 1,
              id: "racetime",
            },
            {
              type: "txt",
              font: "15%",
              label: "-",
              col: this.theme.fgColor,
              pad: 4,
              filly: 1,
              fillx: 1,
              id: "daytime",
            },
            // horizontal
            {
              type: "h",
              c: [
                {
                  type: "txt",
                  font: "10%",
                  label: this.translate("speed"),
                  col: this.theme.fgColor,
                  pad: 4,
                  fillx: 1,
                  filly: 1,
                },
                {
                  type: "txt",
                  font: "20%",
                  label: "0",
                  col: this.theme.fgColor,
                  pad: 4,
                  fillx: 1,
                  filly: 1,
                  id: "speed",
                },
                {
                  type: "txt",
                  font: "10%",
                  label: this.translate("speed_unit"),
                  col: this.theme.fgColor,
                  pad: 4,
                  fillx: 1,
                  filly: 1,
                },
              ],
            },
            {
              type: "h",
              c: [
                {
                  type: "img",
                  pad: 2,
                  col: this.theme.fgColor,
                  bgCol: this.theme.bgColor,
                  src: this.icons.satellites(),
                },
                {
                  type: "txt",
                  font: "10%",
                  label: "0",
                  col: this.theme.fgColor,
                  pad: 2,
                  filly: 1,
                  id: "satellites",
                },
                // hacky, use empty element with fillx to push the other elments to the left an right side
                { type: undefined, pad: 2, fillx: 1 },
                {
                  type: "img",
                  pad: 2,
                  col: this.theme.fgColor,
                  bgCol: this.theme.bgColor,
                  src: this.icons.battery(),
                },
                {
                  type: "txt",
                  font: "10%",
                  label: "-",
                  col: this.theme.fgColor,
                  pad: 2,
                  filly: 1,
                  id: "battery",
                },
              ],
            },
          ],
        },
        { lazy: true },
      );
    },
  };
}

var regattatimer = Regattatimer();
regattatimer.init();

// FORK
// if(regattatimer.settings.gps) {
//   Bangle.setGPSPower(1);
//   Bangle.on('GPS', regattatimer.onGPS.bind(regattatimer));
// }

Bangle.on('kill', function() {
  Bangle.setLCDPower(0);
  Bangle.setLCDTimeout(10);
  /*
  if(regattatimer.settings.gps) {
    Bangle.setGPSPower(0);
  }
  */
});
