var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };
}();
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function Wb(id) {
    if (window === this) {
        return new Wb(id);
    }
    var cs = {
        "explBtn": function() {
            function Woobly(_t_, params) {
                _classCallCheck(this, Woobly);
                var _sr_ = _t_.attachShadow({
                    mode: 'open'
                });
                var __b = document.createElement('button');
                __b.setAttribute('class', 'button');
                _sr_.appendChild(__b);
                this.document = _sr_;
                var __s = document.createElement('style');
                __s.innerHTML = '.button {  font-family: \'Helvetica\', \'Arial\', sans-serif;  display: inline-block;  font-size: 1em;  padding: 1em 2em;  -webkit-appearance: none;  appearance: none;  background-color: #ff0081;  border-radius: 4px;  border: none;  cursor: pointer;  position: relative;  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;}.button:focus {  outline: 0;}.button:before, .button:after {  position: absolute;  content: \'\';  display: block;  width: 140%;  height: 100%;  left: -20%;  z-index: -1000;  transition: all ease-in-out 0.5s;  background-repeat: no-repeat;}.button:before {  display: none;  top: -75%;  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;}.button:after {  display: none;  bottom: -75%;  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;}.button:active {  transform: scale(0.9);}.button.animate:before {  display: block;  animation: topBubbles ease-in-out 0.75s forwards;}.button.animate:after {  display: block;  animation: bottomBubbles ease-in-out 0.75s forwards;}@keyframes topBubbles {  0% {    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;  }  50% {    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;  }  100% {    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;    background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;  }}@keyframes bottomBubbles {  0% {    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;  }  50% {    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;  }  100% {    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;    background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;  }}';
                this.document.appendChild(__s);;
                this.callback = params.action;
                this.coloringStyle = document.createElement("style");
                this.document.appendChild(this.coloringStyle);
                this.btn = this.document.querySelector(".button");
                this.btn.addEventListener("click", this.animateButton.bind(this), false);
                this.setText(params.text);
                this.setColor(params.color, params.textColor)
            }
            _createClass(Woobly, [{
                key: "animateButton",
                value: function animateButton(e) {
                    e.preventDefault;
                    this.btn.setAttribute("class", "button animate");
                    e.target.classList.add("animate");
                    setTimeout(function() {
                        this.btn.setAttribute("class", "button")
                    }.bind(this), 700);
                    this.callback()
                }
            }, {
                key: "setText",
                value: function setText(text) {
                    this.btn.innerHTML = text
                }
            }, {
                key: "setColor",
                value: function setColor(color, textColor) {
                    this.btn.style.backgroundColor = color;
                    this.btn.style.color = textColor;
                    this.coloringStyle.innerHTML = "\n\t\t.button {\n\t\t\tbox-shadow: 0 2px 25px ".concat(this._colorToRgba(color, 0.5), ";\n\t\t}\n\t\t.button:active {\n\t\t\tbox-shadow: 0 2px 25px ").concat(this._colorToRgba(color, 0.2), ";\n\t\t}\n\t\t.button:before {\n\t\t\tbackground-image: radial-gradient(circle, ").concat(color, " 20%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle, rgba(0, 0, 0, 0) 20%, ").concat(color, " 20%, rgba(0, 0, 0, 0) 30%), radial-gradient(circle, ").concat(color, " 20%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle, ").concat(color, " 20%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle, rgba(0, 0, 0, 0) 10%, ").concat(color, " 15%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle, ").concat(color, " 20%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle, ").concat(color, " 20%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle, ").concat(color, " 20%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle, ").concat(color, " 20%, rgba(0, 0, 0, 0) 20%);\n\t\t}\n\t\t.button:after {\n\t\t\tbackground-image: radial-gradient(circle, ").concat(color, " 20%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle, ").concat(color, " 20%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle, rgba(0, 0, 0, 0) 10%, ").concat(color, " 15%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle, ").concat(color, " 20%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle, ").concat(color, " 20%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle, ").concat(color, " 20%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle, ").concat(color, " 20%, rgba(0, 0, 0, 0) 20%);\n\t\t}\n\t\t")
                }
            }, {
                key: "_colorToRgba",
                value: function _colorToRgba(hex, alpha) {
                    var c = hex.substring(1).split("");
                    if (c.length == 3) {
                        c = [c[0], c[0], c[1], c[1], c[2], c[2]]
                    }
                    c = "0x" + c.join("");
                    return "rgba(" + [c >> 16 & 255, c >> 8 & 255, c & 255].join(",") + ",".concat(alpha, ")")
                }
            }]);
            return Woobly
        }(),
        "__explBtn": {
            "text": 'Hello',
            "action": function() {
                console.log('Do something when click')
            },
            "color": '#9910fe',
            "textColor": '#ffeeff'
        },
        "fillSwitch": function() {
            function Woobly(_t_, params) {
                var _this = this;
                _classCallCheck(this, Woobly);
                var _sr_ = _t_.attachShadow({
                    mode: 'open'
                });
                var __b = document.createElement('button');
                __b.setAttribute('class', 'btn');
                __b.setAttribute('id', 'btn');
                _sr_.appendChild(__b);
                var __c = document.createElement('div');
                __c.setAttribute('class', 'ripple ripple--dark');
                __b.appendChild(__c);
                var __d = document.createElement('div');
                __d.setAttribute('class', 'ripple ripple--light');
                __b.appendChild(__d);
                var __e = document.createElement('div');
                __e.setAttribute('class', 'toggle toggle--dark');
                __b.appendChild(__e);
                var __f = document.createElement('div');
                __f.setAttribute('class', 'toggle toggle--light');
                __b.appendChild(__f);
                this.document = _sr_;
                var __s = document.createElement('style');
                __s.innerHTML = '.btn, .ripple, .toggle, .btn:before, .btn:after {  position: relative;  -webkit-box-sizing: border-box;          box-sizing: border-box;}button {  background-color: transparent;  border: none;  margin: 0;  padding: 0;}button:focus, button:active {  outline: none;  border: none;}.btn {  width: 125px;  height: 62.5px;  background-color: #FFFFFF;  border-radius: calc(126px / 2);  overflow: hidden;}.btn .ripple.ripple--dark {  z-index: 1;  -webkit-transform: scale(4.8);          transform: scale(4.8);  -webkit-transition: .6s ease;  transition: .6s ease;}.btn .ripple.ripple--light {  z-index: 2;  -webkit-transform: scale(1);          transform: scale(1);  -webkit-transition: z-index 0s .6s ease, -webkit-transform 0s ease;  transition: z-index 0s .6s ease, -webkit-transform 0s ease;  transition: z-index 0s .6s ease, transform 0s ease;  transition: z-index 0s .6s ease, transform 0s ease, -webkit-transform 0s ease;}.btn.btn--checked {  background-color: white;  -webkit-animation: changeColor .6s ease forwards;          animation: changeColor .6s ease forwards;}@-webkit-keyframes changeColor {  80% {    background-color: white;  }  80.01% {    background-color: #FFFFFF;  }  100% {    background-color: #FFFFFF;  }}@keyframes changeColor {  80% {    background-color: white;  }  80.01% {    background-color: #FFFFFF;  }  100% {    background-color: #FFFFFF;  }}.btn.btn--checked .ripple.ripple--dark {  z-index: 2;  -webkit-transform: scale(1);          transform: scale(1);  -webkit-transition: z-index 0s .6s ease, -webkit-transform 0s ease;  transition: z-index 0s .6s ease, -webkit-transform 0s ease;  transition: z-index 0s .6s ease, transform 0s ease;  transition: z-index 0s .6s ease, transform 0s ease, -webkit-transform 0s ease;}.btn.btn--checked .ripple.ripple--light {  z-index: 1;  -webkit-transform: scale(4.8);          transform: scale(4.8);  -webkit-transition: .6s ease;  transition: .6s ease;}.toggle {  width: 40px;  height: 40px;  position: absolute;  top: 11px;  border-radius: 50%;  z-index: 5;}.toggle.toggle--dark {  background-color: #333333;  left: 16px;}.toggle.toggle--light {  background-color: white;  right: 16px;}.ripple {  width: 40px;  height: 40px;  position: absolute;  top: 11px;  border-radius: 50%;}.ripple.ripple--dark {  background-color: #333333;  left: 16px;}.ripple.ripple--light {  background-color: white;  right: 16px;}';
                this.document.appendChild(__s);;
                this.btn = this.document.querySelector("#btn");
                this._value = false;
                this.btn.addEventListener("click", function() {
                    _this.btn.classList.toggle("btn--checked");
                    _this._value = !_this._value;
                    params.switchCallback(_this._value)
                });
                this.setBoxColorOn(params.boxColorOn);
                this.setBoxColorOff(params.boxColorOff)
            }
            _createClass(Woobly, [{
                key: "setBoxColorOn",
                value: function setBoxColorOn(color) {
                    var ripple = this.document.querySelector(".ripple--dark");
                    var toggle = this.document.querySelector(".toggle--dark");
                    ripple.style.backgroundColor = color;
                    toggle.style.backgroundColor = color
                }
            }, {
                key: "setBoxColorOff",
                value: function setBoxColorOff(color) {
                    var ripple = this.document.querySelector(".ripple--light");
                    var toggle = this.document.querySelector(".toggle--light");
                    ripple.style.backgroundColor = color;
                    toggle.style.backgroundColor = color
                }
            }]);
            return Woobly
        }(),
        "__fillSwitch": {
            "switchCallback": function(val) {
                console.log(val)
            },
            "boxColorOn": '#002B4F',
            "boxColorOff": '#4092D7'
        },
        "paintSpin": function() {
            function Woobly(_t_, params) {
                _classCallCheck(this, Woobly);
                var _sr_ = _t_.attachShadow({
                    mode: 'open'
                });
                var __b = document.createElement('div');
                __b.setAttribute('class', 'main');
                _sr_.appendChild(__b);
                var __c = document.createElement('div');
                __c.setAttribute('class', 'circle');
                __b.appendChild(__c);
                var __d = document.createElement('div');
                __d.setAttribute('class', 'inner');
                __c.appendChild(__d);
                var __e = document.createElement('div');
                __e.setAttribute('class', 'circle');
                __b.appendChild(__e);
                var __f = document.createElement('div');
                __f.setAttribute('class', 'inner');
                __e.appendChild(__f);
                var __g = document.createElement('div');
                __g.setAttribute('class', 'circle');
                __b.appendChild(__g);
                var __h = document.createElement('div');
                __h.setAttribute('class', 'inner');
                __g.appendChild(__h);
                var __i = document.createElement('div');
                __i.setAttribute('class', 'circle');
                __b.appendChild(__i);
                var __j = document.createElement('div');
                __j.setAttribute('class', 'inner');
                __i.appendChild(__j);
                var __k = document.createElement('div');
                __k.setAttribute('class', 'circle');
                __b.appendChild(__k);
                var __l = document.createElement('div');
                __l.setAttribute('class', 'inner');
                __k.appendChild(__l);
                this.document = _sr_;
                var __s = document.createElement('style');
                __s.innerHTML = '.main {  width: 100px;  height: 102px;  border-radius: 100%;}.circle {  width: 100%;  height: 100%;  position: absolute;}.circle .inner {  width: 100%;  height: 100%;  border-radius: 100%;  border: 5px solid rgba(0, 255, 170, 0.7);  border-right: none;  border-top: none;  backgroudn-clip: padding;  -webkit-box-shadow: inset 0px 0px 10px rgba(0, 255, 170, 0.15);          box-shadow: inset 0px 0px 10px rgba(0, 255, 170, 0.15);}@-webkit-keyframes spin {  from {    -webkit-transform: rotate(0deg);            transform: rotate(0deg);  }  to {    -webkit-transform: rotate(360deg);            transform: rotate(360deg);  }}@keyframes spin {  from {    -webkit-transform: rotate(0deg);            transform: rotate(0deg);  }  to {    -webkit-transform: rotate(360deg);            transform: rotate(360deg);  }}';
                this.document.appendChild(__s);;
                this.main = this.document.querySelector(".main");
                this.setSize(params.size);
                this.setColor(params.color);
                this.setSpeed(params.speeds[0], params.speeds[1])
            }
            _createClass(Woobly, [{
                key: "setSize",
                value: function setSize(size) {
                    this.main.style.width = size + "px";
                    this.main.style.height = size + "px"
                }
            }, {
                key: "setColor",
                value: function setColor(color) {
                    var circles = this.document.querySelectorAll(".inner");
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    try {
                        for (var _iterator = circles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var c = _step.value;
                            c.style.borderColor = this._colorToRgba(color, 0.7);
                            c.style.boxShadow = this._colorToRgba(color, 0.15)
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return()
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError
                            }
                        }
                    }
                }
            }, {
                key: "setSpeed",
                value: function setSpeed(speed1, speed2) {
                    var s = document.createElement("style");
                    s.innerHTML = "\n\t\t\t.circle:nth-of-type(0) {\n\t\t\t\t-webkit-transform: rotate(0deg);\n\t\t\t\t\t\t\t\ttransform: rotate(0deg);\n\t\t\t}\n\t\t\t.circle:nth-of-type(0) .inner {\n\t\t\t\t-webkit-animation: spin ".concat(speed1, "s infinite linear;\n\t\t\t\t\t\t\t\tanimation: spin ").concat(speed1, "s infinite linear;\n\t\t\t}\n\n\t\t\t.circle:nth-of-type(1) {\n\t\t\t\t-webkit-transform: rotate(70deg);\n\t\t\t\t\t\t\t\ttransform: rotate(70deg);\n\t\t\t}\n\t\t\t.circle:nth-of-type(1) .inner {\n\t\t\t\t-webkit-animation: spin ").concat(speed1, "s infinite linear;\n\t\t\t\t\t\t\t\tanimation: spin ").concat(speed1, "s infinite linear;\n\t\t\t}\n\n\t\t\t.circle:nth-of-type(2) {\n\t\t\t\t-webkit-transform: rotate(140deg);\n\t\t\t\t\t\t\t\ttransform: rotate(140deg);\n\t\t\t}\n\t\t\t.circle:nth-of-type(2) .inner {\n\t\t\t\t-webkit-animation: spin ").concat(speed1, "s infinite linear;\n\t\t\t\t\t\t\t\tanimation: spin ").concat(speed1, "s infinite linear;\n\t\t\t}\n\n\t\t\t.main {\n\t\t\t\t-webkit-animation: spin ").concat(speed2, "s infinite linear;\n\t\t\t\t\t\t\t\tanimation: spin ").concat(speed2, "s infinite linear;\n\t\t\t}\n\t\t");
                    this.document.appendChild(s)
                }
            }, {
                key: "_colorToRgba",
                value: function _colorToRgba(hex, alpha) {
                    var c = hex.substring(1).split("");
                    if (c.length == 3) {
                        c = [c[0], c[0], c[1], c[1], c[2], c[2]]
                    }
                    c = "0x" + c.join("");
                    return "rgba(" + [c >> 16 & 255, c >> 8 & 255, c & 255].join(",") + ",".concat(alpha, ")")
                }
            }]);
            return Woobly
        }(),
        "__paintSpin": {
            "size": 150,
            "color": '#2512ee',
            "speeds": [1, 3]
        },
        "timeline": function() {
            function Woobly(_t_, params) {
                _classCallCheck(this, Woobly);
                var _sr_ = _t_.attachShadow({
                    mode: 'open'
                });
                var __b = document.createElement('div');
                __b.setAttribute('class', 'container');
                _sr_.appendChild(__b);
                var __c = document.createElement('div');
                __c.setAttribute('class', 'left-content');
                __b.appendChild(__c);
                var __d = document.createElement('div');
                __d.setAttribute('class', 'right-content');
                __b.appendChild(__d);
                this.document = _sr_;
                var __s = document.createElement('style');
                __s.innerHTML = '.content {position: relative;}h2, p {font-family:Verdana, Geneva, sans-serif}h2 {font-size: 1.1em;margin-bottom: 0;font-weight: 400;}p {font-size: 0.8em;margin-top: 5px;}.content .bullet {position: absolute;background-color: black;border-radius: 50%;border: 1px solid black;width: 25px;height: 25px;transform: scale(1);transition: transform 0.21s ease-out;transition-delay: 0.11s;}.content .bullet.hidden {transform: scale(0);}.right-content, .left-content {float:left;display:block;width:40%;padding:5px;}.left-content {border-right:5px dotted #666;text-align:right;}.left-content .content {margin: 150px 0 0;padding-right: 20px;}.left-content .content .bullet {right: -20px;}.right-content .content .bullet {left: -20px;}.right-content .content {margin: 40px 0 150px 0;padding-left: 20px;}.container .content {-webkit-transition: all 0.7s ease-in-out;-moz-transition: all 0.7 ease-in-out;-ms-transition: all 0.7s ease-in-out;-o-transition: all 0.7s ease-in-out;transition: all 0.7s ease-in-out;}.left-content .more-padding {  padding-right:100px;}.right-content .more-padding {  padding-left:100px;}';
                this.document.appendChild(__s);;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;
                try {
                    for (var _iterator = params.items.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _step$value = _slicedToArray(_step.value, 2),
                            key = _step$value[0],
                            item = _step$value[1];
                        this.addItem(item, params.colorBase, params.colorHigh, key % 2 != 0)
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return()
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError
                        }
                    }
                }
                var that = this;
                window.addEventListener('scroll', function(scroll) {
                    var containers = that.document.querySelectorAll('.container .content');
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;
                    try {
                        for (var _iterator2 = containers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var cont = _step2.value;
                            var scrollTop = window.scrollY,
                                winRect = document.body.getBoundingClientRect(),
                                eltRect = cont.getBoundingClientRect(),
                                elementOffset = eltRect.top - winRect.top,
                                distance = elementOffset - scrollTop,
                                windowHeight = window.innerHeight,
                                breakPoint = windowHeight * 0.9;
                            var bullet = cont.querySelector('.bullet');
                            if (distance > breakPoint) {
                                cont.setAttribute('class', 'content more-padding');
                                bullet.setAttribute('class', 'bullet hidden')
                            } else if (distance < breakPoint) {
                                cont.setAttribute('class', 'content');
                                bullet.setAttribute('class', 'bullet')
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return()
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2
                            }
                        }
                    }
                })
            }
            _createClass(Woobly, [{
                key: 'addItem',
                value: function addItem(item, colorBase, colorHigh, toLeft) {
                    var content = document.createElement('div');
                    var title = document.createElement('h2');
                    var desc = document.createElement('p');
                    var bullet = document.createElement('div');
                    content.setAttribute('class', 'content');
                    bullet.setAttribute('class', 'bullet');
                    title.innerHTML = item.title;
                    desc.innerHTML = item.description;
                    this.document.querySelector('.left-content').style.borderRightColor = colorBase;
                    bullet.style.backgroundColor = colorHigh;
                    bullet.style.borderColor = colorBase;
                    title.style.color = colorBase;
                    desc.style.color = colorBase;
                    content.appendChild(bullet);
                    content.appendChild(title);
                    content.appendChild(desc);
                    if (toLeft) {
                        this.document.querySelector('.left-content').appendChild(content)
                    } else {
                        this.document.querySelector('.right-content').appendChild(content)
                    }
                }
            }]);
            return Woobly
        }(),
        "__timeline": {
            "items": [{
                'title': '10 Sept 2017',
                'description': 'Awesome'
            }, {
                'title': '25 Dec 2017',
                'description': 'Christmas!'
            }, {
                'title': '1 Jan 2018',
                'description': 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'
            }, {
                'title': '10 Jan 2018',
                'description': 'Finish timeline creation'
            }],
            "colorBase": '#CF0069',
            "colorHigh": '#FFE419'
        }
    }
    var c = cs[id];
    if (typeof c == 'undefined') {
        console.log("Wooble error : creation", id, "not found");
        return undefined;
    }
    this.init = function(tar, p) {
        if (document.querySelector(tar) == null) {
            console.log("Wooble error : Element", tar, "not found in the document");
            return;
        }
        if (p) {
            var _ = cs['__' + id];
            for (prop in p) {
                if (_.hasOwnProperty(prop)) _[prop] = p[prop];
            }
            p = _;
        } else p = cs['__' + id];
        var t = this;
        var _cs = [];
        return new Promise(function(r, e) {
            if (!document.head.attachShadow) {
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.src = 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.14/webcomponents-sd-ce.js';
                document.getElementsByTagName('head')[0].appendChild(s);
                s.onload = function() {
                    var __ds = document.querySelectorAll(tar);
                    for (var i = 0; i < __ds.length; i++) _cs.push(new c(__ds[i], p));
                    r(_cs);
                }
            } else {
                var __ds = document.querySelectorAll(tar);
                for (var i = 0; i < __ds.length; i++) _cs.push(new c(__ds[i], p));
                r(_cs);
            }
        });
    }
    return this;
}
