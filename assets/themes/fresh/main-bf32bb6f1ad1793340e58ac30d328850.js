/*
 * iosSlider - http://iosscripts.com/iosslider/
 *
 * Touch Enabled, Responsive jQuery Horizontal Content Slider/Carousel/Image Gallery Plugin
 *
 * A jQuery plugin which allows you to integrate a customizable, cross-browser
 * content slider into your web presence. Designed for use as a content slider, carousel,
 * scrolling website banner, or image gallery.
 *
 * Copyright (c) 2013 Marc Whitbread
 *
 * Version: v1.3.41 (04/16/2014)
 * Minimum requirements: jQuery v1.4+
 *
 * Advanced requirements:
 * 1) jQuery bind() click event override on slide requires jQuery v1.6+
 *
 * Terms of use:
 *
 * 1) iosSlider is licensed under the Creative Commons – Attribution-NonCommercial 3.0 License.
 * 2) You may use iosSlider free for personal or non-profit purposes, without restriction.
 *    Attribution is not required but always appreciated. For commercial projects, you
 *    must purchase a license. You may download and play with the script before deciding to
 *    fully implement it in your project. Making sure you are satisfied, and knowing iosSlider
 *    is the right script for your project is paramount.
 * 3) You are not permitted to make the resources found on iosscripts.com available for
 *    distribution elsewhere "as is" without prior consent. If you would like to feature
 *    iosSlider on your site, please do not link directly to the resource zip files. Please
 *    link to the appropriate page on iosscripts.com where users can find the download.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 */
!function(e) {
var t = 0, o = 0, n = 0, i = 10, r = 0, a = "ontouchstart" in window || navigator.msMaxTouchPoints > 0, s = "onorientationchange" in window, l = !1, c = !1, u = !1, d = !1, g = !1, p = !1, h = !1, m = "pointer", f = "pointer", w = new Array(), v = new Array(), b = new Array(), y = new Array(), _ = new Array(), k = new Array(), x = new Array(), S = new Array(), $ = new Array(), C = new Array(), E = new Array(), T = new Array(), I = new Array(), B = {
showScrollbar:function(t, o) {
t.scrollbarHide && e("." + o).css({
opacity:t.scrollbarOpacity,
filter:"alpha(opacity:" + 100 * t.scrollbarOpacity + ")"
});
},
hideScrollbar:function(e, t, o, n, r, a, s, l, c, u) {
if (e.scrollbar && e.scrollbarHide) for (var d = o; o + 25 > d; d++) t[t.length] = B.hideScrollbarIntervalTimer(i * d, n[o], (o + 24 - d) / 24, r, a, s, l, c, u, e);
},
hideScrollbarInterval:function(t, o, n, i, a, s, l, c, u) {
r = -1 * t / E[c] * (a - s - l - i), B.setSliderOffset("." + n, r), e("." + n).css({
opacity:u.scrollbarOpacity * o,
filter:"alpha(opacity:" + u.scrollbarOpacity * o * 100 + ")"
});
},
slowScrollHorizontalInterval:function(t, o, n, i, a, s, l, c, u, d, g, p, h, m, f, w, v, b, y) {
if (y.infiniteSlider) {
if (n <= -1 * E[w] || n <= -1 * T[w]) {
var _ = e(t).width();
if (n <= -1 * T[w]) {
var k = -1 * g[0];
e(o).each(function(t) {
B.setSliderOffset(e(o)[t], k + v), t < p.length && (p[t] = -1 * k), k += f[t];
}), n += -1 * p[0], C[w] = -1 * p[0] + v, E[w] = C[w] + _ - s, $[w] = 0;
}
for (;n <= -1 * E[w]; ) {
var I = 0, O = B.getSliderOffset(e(o[0]), "x");
e(o).each(function(e) {
B.getSliderOffset(this, "x") < O && (O = B.getSliderOffset(this, "x"), I = e);
});
var A = C[w] + _;
B.setSliderOffset(e(o)[I], A), C[w] = -1 * p[1] + v, E[w] = C[w] + _ - s, p.splice(0, 1), 
p.splice(p.length, 0, -1 * A + v), $[w]++;
}
}
if (n >= -1 * C[w] || n >= 0) {
var _ = e(t).width();
if (n > 0) {
var k = -1 * g[0];
for (e(o).each(function(t) {
B.setSliderOffset(e(o)[t], k + v), t < p.length && (p[t] = -1 * k), k += f[t];
}), n -= -1 * p[0], C[w] = -1 * p[0] + v, E[w] = C[w] + _ - s, $[w] = m; -1 * p[0] - _ + v > 0; ) {
var D = 0, N = B.getSliderOffset(e(o[0]), "x");
e(o).each(function(e) {
B.getSliderOffset(this, "x") > N && (N = B.getSliderOffset(this, "x"), D = e);
});
var A = C[w] - f[D];
B.setSliderOffset(e(o)[D], A), p.splice(0, 0, -1 * A + v), p.splice(p.length - 1, 1), 
C[w] = -1 * p[0] + v, E[w] = C[w] + _ - s, $[w]--, x[w]++;
}
}
for (;n > -1 * C[w]; ) {
var D = 0, N = B.getSliderOffset(e(o[0]), "x");
e(o).each(function(e) {
B.getSliderOffset(this, "x") > N && (N = B.getSliderOffset(this, "x"), D = e);
});
var A = C[w] - f[D];
B.setSliderOffset(e(o)[D], A), p.splice(0, 0, -1 * A + v), p.splice(p.length - 1, 1), 
C[w] = -1 * p[0] + v, E[w] = C[w] + _ - s, $[w]--;
}
}
}
var H = !1, M = B.calcActiveOffset(y, n, p, s, $[w], m, d, w), A = (M + $[w] + m) % m;
if (y.infiniteSlider ? A != S[w] && (H = !0) :M != x[w] && (H = !0), H) {
var j = new B.args("change", y, t, e(t).children(":eq(" + A + ")"), A, b);
e(t).parent().data("args", j), "" != y.onSlideChange && y.onSlideChange(j);
}
if (x[w] = M, S[w] = A, n = Math.floor(n), B.setSliderOffset(t, n), y.scrollbar) {
r = Math.floor((-1 * n - C[w] + v) / (E[w] - C[w] + v) * (l - c - a));
var P = a - u;
n >= -1 * C[w] + v ? (P = a - u - -1 * r, B.setSliderOffset(e("." + i), 0), e("." + i).css({
width:P + "px"
})) :n <= -1 * E[w] + 1 ? (P = l - c - u - r, B.setSliderOffset(e("." + i), r), 
e("." + i).css({
width:P + "px"
})) :(B.setSliderOffset(e("." + i), r), e("." + i).css({
width:P + "px"
}));
}
},
slowScrollHorizontal:function(t, o, n, r, a, s, l, c, u, d, g, p, h, m, f, w, v, b, y, _, T) {
var I = B.getSliderOffset(t, "x"), O = new Array(), A = new Array(), D = 0, N = 25 / 1024 * c;
frictionCoefficient = T.frictionCoefficient, elasticFrictionCoefficient = T.elasticFrictionCoefficient, 
snapFrictionCoefficient = T.snapFrictionCoefficient, a > T.snapVelocityThreshold && T.snapToChildren && !y ? D = 1 :a < -1 * T.snapVelocityThreshold && T.snapToChildren && !y && (D = -1), 
-1 * N > a ? a = -1 * N :a > N && (a = N), e(t)[0] !== e(b)[0] && (D = -1 * D, a = -2 * a);
var H = $[f];
if (T.infiniteSlider) var M = C[f], j = E[f];
for (var P = new Array(), L = new Array(), z = 0; z < h.length; z++) P[z] = h[z], 
z < o.length && (L[z] = B.getSliderOffset(e(o[z]), "x"));
for (;a > 1 || -1 > a; ) {
if (a *= frictionCoefficient, I += a, (I > -1 * C[f] || I < -1 * E[f]) && !T.infiniteSlider && (a *= elasticFrictionCoefficient, 
I += a), T.infiniteSlider) {
if (-1 * j >= I) {
for (var F = e(t).width(), R = 0, q = L[0], z = 0; z < L.length; z++) L[z] < q && (q = L[z], 
R = z);
var U = M + F;
L[R] = U, M = -1 * P[1] + _, j = M + F - c, P.splice(0, 1), P.splice(P.length, 0, -1 * U + _), 
H++;
}
if (I >= -1 * M) {
for (var F = e(t).width(), V = 0, W = L[0], z = 0; z < L.length; z++) L[z] > W && (W = L[z], 
V = z);
var U = M - m[V];
L[V] = U, P.splice(0, 0, -1 * U + _), P.splice(P.length - 1, 1), M = -1 * P[0] + _, 
j = M + F - c, H--;
}
}
O[O.length] = I, A[A.length] = a;
}
var G = !1, Q = B.calcActiveOffset(T, I, P, c, H, v, x[f], f), J = (Q + H + v) % v;
if (T.snapToChildren && (T.infiniteSlider ? J != S[f] && (G = !0) :Q != x[f] && (G = !0), 
0 > D && !G ? (Q++, Q >= h.length && !T.infiniteSlider && (Q = h.length - 1)) :D > 0 && !G && (Q--, 
0 > Q && !T.infiniteSlider && (Q = 0))), T.snapToChildren || (I > -1 * C[f] || I < -1 * E[f]) && !T.infiniteSlider) {
for ((I > -1 * C[f] || I < -1 * E[f]) && !T.infiniteSlider ? O.splice(0, O.length) :(O.splice(.1 * O.length, O.length), 
I = O.length > 0 ? O[O.length - 1] :I); I < P[Q] - .5 || I > P[Q] + .5; ) I = (I - P[Q]) * snapFrictionCoefficient + P[Q], 
O[O.length] = I;
O[O.length] = P[Q];
}
var Y = 1;
O.length % 2 != 0 && (Y = 0);
for (var K = 0; K < n.length; K++) clearTimeout(n[K]);
for (var X = (Q + H + v) % v, Z = 0, K = Y; K < O.length; K += 2) (K == Y || Math.abs(O[K] - Z) > 1 || K >= O.length - 2) && (Z = O[K], 
n[n.length] = B.slowScrollHorizontalIntervalTimer(i * K, t, o, O[K], r, l, c, u, d, g, Q, p, h, w, v, m, f, _, X, T));
var G = !1, J = (Q + $[f] + v) % v;
T.infiniteSlider ? J != S[f] && (G = !0) :Q != x[f] && (G = !0), "" != T.onSlideComplete && O.length > 1 && (n[n.length] = B.onSlideCompleteTimer(i * (K + 1), T, t, e(t).children(":eq(" + J + ")"), X, f)), 
n[n.length] = B.updateBackfaceVisibilityTimer(i * (K + 1), o, f, v, T), k[f] = n, 
B.hideScrollbar(T, n, K, O, r, l, c, d, g, f);
},
onSlideComplete:function(t, o, n, i, r) {
var a = (w[r] != i ? !0 :!1, new B.args("complete", t, e(o), n, i, i));
e(o).parent().data("args", a), "" != t.onSlideComplete && t.onSlideComplete(a), 
w[r] = i;
},
getSliderOffset:function(t, o) {
var n = 0;
if (o = "x" == o ? 4 :5, !c || u || d) n = parseInt(e(t).css("left"), 10); else {
for (var i, r = new Array("-webkit-transform", "-moz-transform", "transform"), a = 0; a < r.length; a++) if (void 0 != e(t).css(r[a]) && e(t).css(r[a]).length > 0) {
i = e(t).css(r[a]).split(",");
break;
}
n = void 0 == i[o] ? 0 :parseInt(i[o], 10);
}
return n;
},
setSliderOffset:function(t, o) {
o = parseInt(o, 10), !c || u || d ? e(t).css({
left:o + "px"
}) :e(t).css({
msTransform:"matrix(1,0,0,1," + o + ",0)",
webkitTransform:"matrix(1,0,0,1," + o + ",0)",
MozTransform:"matrix(1,0,0,1," + o + ",0)",
transform:"matrix(1,0,0,1," + o + ",0)"
});
},
setBrowserInfo:function() {
null != navigator.userAgent.match("WebKit") ? (l = !0, m = "-webkit-grab", f = "-webkit-grabbing") :null != navigator.userAgent.match("Gecko") ? (h = !0, 
m = "move", f = "-moz-grabbing") :null != navigator.userAgent.match("MSIE 7") ? (u = !0, 
p = !0) :null != navigator.userAgent.match("MSIE 8") ? (d = !0, p = !0) :null != navigator.userAgent.match("MSIE 9") && (g = !0, 
p = !0);
},
has3DTransform:function() {
var t = !1, o = e("<div />").css({
msTransform:"matrix(1,1,1,1,1,1)",
webkitTransform:"matrix(1,1,1,1,1,1)",
MozTransform:"matrix(1,1,1,1,1,1)",
transform:"matrix(1,1,1,1,1,1)"
});
return "" == o.attr("style") ? t = !1 :h && parseInt(navigator.userAgent.split("/")[3], 10) >= 21 ? t = !1 :void 0 != o.attr("style") && (t = !0), 
t;
},
getSlideNumber:function(e, t, o) {
return (e - $[t] + o) % o;
},
calcActiveOffset:function(e, t, o, n, i, r) {
var a, s = !1, l = new Array();
t > o[0] && (a = 0), t < o[o.length - 1] && (a = r - 1);
for (var c = 0; c < o.length; c++) o[c] <= t && o[c] > t - n && (s || o[c] == t || (l[l.length] = o[c - 1]), 
l[l.length] = o[c], s = !0);
0 == l.length && (l[0] = o[o.length - 1]);
for (var u = n, d = 0, c = 0; c < l.length; c++) {
var g = Math.abs(t - l[c]);
u > g && (d = l[c], u = g);
}
for (var c = 0; c < o.length; c++) d == o[c] && (a = c);
return a;
},
changeSlide:function(t, o, n, r, a, s, l, c, u, d, g, p, h, m, f, w, v, b) {
B.autoSlidePause(m);
for (var y = 0; y < r.length; y++) clearTimeout(r[y]);
var _ = Math.ceil(b.autoSlideTransTimer / 10) + 1, C = B.getSliderOffset(o, "x"), E = p[t], T = E - C, I = t - (x[m] + $[m] + w) % w;
if (b.infiniteSlider) {
t = (t - $[m] + 2 * w) % w;
var O = !1;
0 == t && 2 == w && (t = w, p[t] = p[t - 1] - e(n).eq(0).outerWidth(!0), O = !0), 
E = p[t], T = E - C;
var A = new Array(p[t] - e(o).width(), p[t] + e(o).width());
O && p.splice(p.length - 1, 1);
for (var D = 0; D < A.length; D++) Math.abs(A[D] - C) < Math.abs(T) && (T = A[D] - C);
}
0 > T && -1 == I ? T += e(o).width() :T > 0 && 1 == I && (T -= e(o).width());
var N, H, M = new Array();
B.showScrollbar(b, a);
for (var D = 0; _ >= D; D++) N = D, N /= _, N--, H = C + T * (Math.pow(N, 5) + 1), 
M[M.length] = H;
for (var j = (t + $[m] + w) % w, P = 0, D = 0; D < M.length; D++) if ((0 == D || Math.abs(M[D] - P) > 1 || D >= M.length - 2) && (P = M[D], 
r[D] = B.slowScrollHorizontalIntervalTimer(i * (D + 1), o, n, M[D], a, s, l, c, u, d, t, g, p, f, w, h, m, v, j, b)), 
0 == D && "" != b.onSlideStart) {
var L = (x[m] + $[m] + w) % w;
b.onSlideStart(new B.args("start", b, o, e(o).children(":eq(" + L + ")"), L, t));
}
var z = !1;
b.infiniteSlider ? j != S[m] && (z = !0) :t != x[m] && (z = !0), z && "" != b.onSlideComplete && (r[r.length] = B.onSlideCompleteTimer(i * (D + 1), b, o, e(o).children(":eq(" + j + ")"), j, m)), 
k[m] = r, B.hideScrollbar(b, r, D, M, a, s, l, u, d, m), B.autoSlide(o, n, r, a, s, l, c, u, d, g, p, h, m, f, w, v, b);
},
changeOffset:function(t, o, n, r, a, s, l, c, u, d, g, p, h, m, f, w, v, b) {
B.autoSlidePause(m);
for (var y = 0; y < r.length; y++) clearTimeout(r[y]);
b.infiniteSlider || (t = t > -1 * C[m] + v ? -1 * C[m] + v :t, t = t < -1 * E[m] ? -1 * E[m] :t);
var _ = Math.ceil(b.autoSlideTransTimer / 10) + 1, T = B.getSliderOffset(o, "x"), I = (B.calcActiveOffset(b, t, p, l, $, w, x[m], m) + $[m] + w) % w, O = p.slice();
if (b.snapToChildren && !b.infiniteSlider) t = p[I]; else if (b.infiniteSlider && b.snapToChildren) {
for (;t >= O[0]; ) O.splice(0, 0, O[w - 1] + e(o).width()), O.splice(w, 1);
for (;t <= O[w - 1]; ) O.splice(w, 0, O[0] - e(o).width()), O.splice(0, 1);
I = B.calcActiveOffset(b, t, O, l, $, w, x[m], m), t = O[I];
}
var A, D, N = t - T, H = new Array();
B.showScrollbar(b, a);
for (var M = 0; _ >= M; M++) A = M, A /= _, A--, D = T + N * (Math.pow(A, 5) + 1), 
H[H.length] = D;
for (var j = (I + $[m] + w) % w, P = 0, M = 0; M < H.length; M++) if ((0 == M || Math.abs(H[M] - P) > 1 || M >= H.length - 2) && (P = H[M], 
r[M] = B.slowScrollHorizontalIntervalTimer(i * (M + 1), o, n, H[M], a, s, l, c, u, d, I, g, p, f, w, h, m, v, j, b)), 
0 == M && "" != b.onSlideStart) {
var j = (x[m] + $[m] + w) % w;
b.onSlideStart(new B.args("start", b, o, e(o).children(":eq(" + j + ")"), j, I));
}
var L = !1;
b.infiniteSlider ? j != S[m] && (L = !0) :I != x[m] && (L = !0), L && "" != b.onSlideComplete && (r[r.length] = B.onSlideCompleteTimer(i * (M + 1), b, o, e(o).children(":eq(" + j + ")"), j, m)), 
k[m] = r, B.hideScrollbar(b, r, M, H, a, s, l, u, d, m), B.autoSlide(o, n, r, a, s, l, c, u, d, g, p, h, m, f, w, v, b);
},
autoSlide:function(e, t, o, n, i, r, a, s, l, c, u, d, g, p, h, m, f) {
return y[g].autoSlide ? (B.autoSlidePause(g), v[g] = setTimeout(function() {
!f.infiniteSlider && x[g] > u.length - 1 && (x[g] = x[g] - h);
var w = x[g] + $[g] + 1;
B.changeSlide(w, e, t, o, n, i, r, a, s, l, c, u, d, g, p, h, m, f), B.autoSlide(e, t, o, n, i, r, a, s, l, c, u, d, g, p, h, m, f);
}, f.autoSlideTimer + f.autoSlideTransTimer), void 0) :!1;
},
autoSlidePause:function(e) {
clearTimeout(v[e]);
},
isUnselectable:function(t, o) {
return "" != o.unselectableSelector && 1 == e(t).closest(o.unselectableSelector).length ? !0 :!1;
},
slowScrollHorizontalIntervalTimer:function(e, t, o, n, i, r, a, s, l, c, u, d, g, p, h, m, f, w, v, b) {
var y = setTimeout(function() {
B.slowScrollHorizontalInterval(t, o, n, i, r, a, s, l, c, u, d, g, p, h, m, f, w, v, b);
}, e);
return y;
},
onSlideCompleteTimer:function(e, t, o, n, i, r) {
var a = setTimeout(function() {
B.onSlideComplete(t, o, n, i, r);
}, e);
return a;
},
hideScrollbarIntervalTimer:function(e, t, o, n, i, r, a, s, l, c) {
var u = setTimeout(function() {
B.hideScrollbarInterval(t, o, n, i, r, a, s, l, c);
}, e);
return u;
},
updateBackfaceVisibilityTimer:function(e, t, o, n, i) {
var r = setTimeout(function() {
B.updateBackfaceVisibility(t, o, n, i);
}, e);
return r;
},
updateBackfaceVisibility:function(t, o, n, i) {
for (var r = (x[o] + $[o] + n) % n, a = Array(), s = 0; s < 2 * i.hardwareAccelBuffer; s++) {
var l = B.mod(r + s - i.hardwareAccelBuffer, n);
if ("visible" == e(t).eq(l).css("-webkit-backface-visibility")) {
a[a.length] = l;
var c = B.mod(l + 2 * i.hardwareAccelBuffer, n), u = B.mod(l - 2 * i.hardwareAccelBuffer, n);
e(t).eq(l).css("-webkit-backface-visibility", "hidden"), -1 == a.indexOf(u) && e(t).eq(u).css("-webkit-backface-visibility", ""), 
-1 == a.indexOf(c) && e(t).eq(c).css("-webkit-backface-visibility", "");
}
}
},
mod:function(e, t) {
var o = e % t;
return 0 > o ? o + t :o;
},
args:function(t, o, n, i, r, a) {
this.prevSlideNumber = void 0 == e(n).parent().data("args") ? void 0 :e(n).parent().data("args").prevSlideNumber, 
this.prevSlideObject = void 0 == e(n).parent().data("args") ? void 0 :e(n).parent().data("args").prevSlideObject, 
this.targetSlideNumber = a + 1, this.targetSlideObject = e(n).children(":eq(" + a + ")"), 
this.slideChanged = !1, "load" == t ? (this.targetSlideNumber = void 0, this.targetSlideObject = void 0) :"start" == t ? (this.targetSlideNumber = void 0, 
this.targetSlideObject = void 0) :"change" == t ? (this.slideChanged = !0, this.prevSlideNumber = void 0 == e(n).parent().data("args") ? o.startAtSlide :e(n).parent().data("args").currentSlideNumber, 
this.prevSlideObject = e(n).children(":eq(" + this.prevSlideNumber + ")")) :"complete" == t && (this.slideChanged = e(n).parent().data("args").slideChanged), 
this.settings = o, this.data = e(n).parent().data("iosslider"), this.sliderObject = n, 
this.sliderContainerObject = e(n).parent(), this.currentSlideObject = i, this.currentSlideNumber = r + 1, 
this.currentSliderOffset = -1 * B.getSliderOffset(n, "x");
},
preventDrag:function(e) {
e.preventDefault();
},
preventClick:function(e) {
return e.stopImmediatePropagation(), !1;
},
enableClick:function() {
return !0;
}
};
B.setBrowserInfo();
var O = {
init:function(i, l) {
c = B.has3DTransform();
var g = e.extend(!0, {
elasticPullResistance:.6,
frictionCoefficient:.92,
elasticFrictionCoefficient:.6,
snapFrictionCoefficient:.92,
snapToChildren:!1,
snapSlideCenter:!1,
startAtSlide:1,
scrollbar:!1,
scrollbarDrag:!1,
scrollbarHide:!0,
scrollbarPaging:!1,
scrollbarLocation:"top",
scrollbarContainer:"",
scrollbarOpacity:.4,
scrollbarHeight:"4px",
scrollbarBorder:"0",
scrollbarMargin:"5px",
scrollbarBackground:"#000",
scrollbarBorderRadius:"100px",
scrollbarShadow:"0 0 0 #000",
scrollbarElasticPullResistance:.9,
desktopClickDrag:!1,
keyboardControls:!1,
tabToAdvance:!1,
responsiveSlideContainer:!0,
responsiveSlides:!0,
navSlideSelector:"",
navPrevSelector:"",
navNextSelector:"",
autoSlideToggleSelector:"",
autoSlide:!1,
autoSlideTimer:5e3,
autoSlideTransTimer:750,
autoSlideHoverPause:!0,
infiniteSlider:!1,
snapVelocityThreshold:5,
slideStartVelocityThreshold:0,
horizontalSlideLockThreshold:5,
verticalSlideLockThreshold:3,
hardwareAccelBuffer:5,
stageCSS:{
position:"relative",
top:"0",
left:"0",
overflow:"hidden",
zIndex:1
},
unselectableSelector:"",
onSliderLoaded:"",
onSliderUpdate:"",
onSliderResize:"",
onSlideStart:"",
onSlideChange:"",
onSlideComplete:""
}, i);
return void 0 == l && (l = this), e(l).each(function(i) {
function l() {
B.autoSlidePause(c), ft = e(at).find("a"), wt = e(at).find("[onclick]"), vt = e(at).find("*"), 
e(X).css("width", ""), e(X).css("height", ""), e(at).css("width", ""), q = e(at).children().not("script").get(), 
U = new Array(), V = new Array(), g.responsiveSlides && e(q).css("width", ""), E[c] = 0, 
R = new Array(), H = e(X).parent().width(), j = e(X).outerWidth(!0), g.responsiveSlideContainer && (j = e(X).outerWidth(!0) > H ? H :e(X).width()), 
e(X).css({
position:g.stageCSS.position,
top:g.stageCSS.top,
left:g.stageCSS.left,
overflow:g.stageCSS.overflow,
zIndex:g.stageCSS.zIndex,
webkitPerspective:1e3,
webkitBackfaceVisibility:"hidden",
msTouchAction:"pan-y",
width:j
}), e(g.unselectableSelector).css({
cursor:"default"
});
for (var t = 0; t < q.length; t++) {
U[t] = e(q[t]).width(), V[t] = e(q[t]).outerWidth(!0);
var o = V[t];
g.responsiveSlides && (V[t] > j ? (o = j + -1 * (V[t] - U[t]), U[t] = o, V[t] = j) :o = U[t], 
e(q[t]).css({
width:o
})), e(q[t]).css({
overflow:"hidden",
position:"absolute"
}), R[t] = -1 * E[c], E[c] = E[c] + o + (V[t] - U[t]);
}
g.snapSlideCenter && (K = .5 * (j - V[0]), g.responsiveSlides && V[0] > j && (K = 0)), 
T[c] = 2 * E[c];
for (var t = 0; t < q.length; t++) B.setSliderOffset(e(q[t]), -1 * R[t] + E[c] + K), 
R[t] = R[t] - E[c];
if (!g.infiniteSlider && !g.snapSlideCenter) {
for (var n = 0; n < R.length && !(R[n] <= -1 * (2 * E[c] - j)); n++) ct = n;
R.splice(ct + 1, R.length), R[R.length] = -1 * (2 * E[c] - j);
}
for (var n = 0; n < R.length; n++) tt[n] = R[n];
if (Z && (y[c].startAtSlide = y[c].startAtSlide > R.length ? R.length :y[c].startAtSlide, 
g.infiniteSlider ? (y[c].startAtSlide = (y[c].startAtSlide - 1 + st) % st, x[c] = y[c].startAtSlide) :(y[c].startAtSlide = y[c].startAtSlide - 1 < 0 ? R.length - 1 :y[c].startAtSlide, 
x[c] = y[c].startAtSlide - 1), S[c] = x[c]), C[c] = E[c] + K, e(at).css({
position:"relative",
cursor:m,
webkitPerspective:"0",
webkitBackfaceVisibility:"hidden",
width:E[c] + "px"
}), mt = E[c], E[c] = 2 * E[c] - j + 2 * K, gt = j > mt + K || 0 == j ? !0 :!1, 
gt && e(at).css({
cursor:"default"
}), M = e(X).parent().outerHeight(!0), P = e(X).height(), g.responsiveSlideContainer && (P = P > M ? M :P), 
e(X).css({
height:P
}), B.setSliderOffset(at, R[x[c]]), g.infiniteSlider && !gt) {
for (var i = B.getSliderOffset(e(at), "x"), r = ($[c] + st) % st * -1; 0 > r; ) {
var a = 0, s = B.getSliderOffset(e(q[0]), "x");
e(q).each(function(e) {
B.getSliderOffset(this, "x") < s && (s = B.getSliderOffset(this, "x"), a = e);
});
var l = C[c] + mt;
B.setSliderOffset(e(q)[a], l), C[c] = -1 * R[1] + K, E[c] = C[c] + mt - j, R.splice(0, 1), 
R.splice(R.length, 0, -1 * l + K), r++;
}
for (;-1 * R[0] - mt + K > 0 && g.snapSlideCenter && Z; ) {
var u = 0, d = B.getSliderOffset(e(q[0]), "x");
e(q).each(function(e) {
B.getSliderOffset(this, "x") > d && (d = B.getSliderOffset(this, "x"), u = e);
});
var l = C[c] - V[u];
B.setSliderOffset(e(q)[u], l), R.splice(0, 0, -1 * l + K), R.splice(R.length - 1, 1), 
C[c] = -1 * R[0] + K, E[c] = C[c] + mt - j, $[c]--, x[c]++;
}
for (;i <= -1 * E[c]; ) {
var a = 0, s = B.getSliderOffset(e(q[0]), "x");
e(q).each(function(e) {
B.getSliderOffset(this, "x") < s && (s = B.getSliderOffset(this, "x"), a = e);
});
var l = C[c] + mt;
B.setSliderOffset(e(q)[a], l), C[c] = -1 * R[1] + K, E[c] = C[c] + mt - j, R.splice(0, 1), 
R.splice(R.length, 0, -1 * l + K), $[c]++, x[c]--;
}
}
return B.setSliderOffset(at, R[x[c]]), B.updateBackfaceVisibility(q, c, st, g), 
g.desktopClickDrag || e(at).css({
cursor:"default"
}), g.scrollbar && (e("." + J).css({
margin:g.scrollbarMargin,
overflow:"hidden",
display:"none"
}), e("." + J + " ." + Y).css({
border:g.scrollbarBorder
}), L = parseInt(e("." + J).css("marginLeft")) + parseInt(e("." + J).css("marginRight")), 
z = parseInt(e("." + J + " ." + Y).css("borderLeftWidth"), 10) + parseInt(e("." + J + " ." + Y).css("borderRightWidth"), 10), 
D = "" != g.scrollbarContainer ? e(g.scrollbarContainer).width() :j, N = j / mt * (D - L), 
g.scrollbarHide || (ot = g.scrollbarOpacity), e("." + J).css({
position:"absolute",
left:0,
width:D - L + "px",
margin:g.scrollbarMargin
}), "top" == g.scrollbarLocation ? e("." + J).css("top", "0") :e("." + J).css("bottom", "0"), 
e("." + J + " ." + Y).css({
borderRadius:g.scrollbarBorderRadius,
background:g.scrollbarBackground,
height:g.scrollbarHeight,
width:N - z + "px",
minWidth:g.scrollbarHeight,
border:g.scrollbarBorder,
webkitPerspective:1e3,
webkitBackfaceVisibility:"hidden",
position:"relative",
opacity:ot,
filter:"alpha(opacity:" + 100 * ot + ")",
boxShadow:g.scrollbarShadow
}), B.setSliderOffset(e("." + J + " ." + Y), Math.floor((-1 * R[x[c]] - C[c] + K) / (E[c] - C[c] + K) * (D - L - N))), 
e("." + J).css({
display:"block"
}), v = e("." + J + " ." + Y), A = e("." + J)), g.scrollbarDrag && !gt && e("." + J + " ." + Y).css({
cursor:m
}), g.infiniteSlider && (W = (E[c] + j) / 3), "" != g.navSlideSelector && e(g.navSlideSelector).each(function(t) {
e(this).css({
cursor:"pointer"
}), e(this).unbind(_t).bind(_t, function(o) {
"touchstart" == o.type ? e(this).unbind("click.iosSliderEvent") :e(this).unbind("touchstart.iosSliderEvent"), 
_t = o.type + ".iosSliderEvent", B.changeSlide(t, at, q, h, Y, N, j, D, L, z, tt, R, V, c, W, st, K, g);
});
}), "" != g.navPrevSelector && (e(g.navPrevSelector).css({
cursor:"pointer"
}), e(g.navPrevSelector).unbind(_t).bind(_t, function(t) {
"touchstart" == t.type ? e(this).unbind("click.iosSliderEvent") :e(this).unbind("touchstart.iosSliderEvent"), 
_t = t.type + ".iosSliderEvent";
var o = (x[c] + $[c] + st) % st;
(o > 0 || g.infiniteSlider) && B.changeSlide(o - 1, at, q, h, Y, N, j, D, L, z, tt, R, V, c, W, st, K, g);
})), "" != g.navNextSelector && (e(g.navNextSelector).css({
cursor:"pointer"
}), e(g.navNextSelector).unbind(_t).bind(_t, function(t) {
"touchstart" == t.type ? e(this).unbind("click.iosSliderEvent") :e(this).unbind("touchstart.iosSliderEvent"), 
_t = t.type + ".iosSliderEvent";
var o = (x[c] + $[c] + st) % st;
(o < R.length - 1 || g.infiniteSlider) && B.changeSlide(o + 1, at, q, h, Y, N, j, D, L, z, tt, R, V, c, W, st, K, g);
})), g.autoSlide && !gt && "" != g.autoSlideToggleSelector && (e(g.autoSlideToggleSelector).css({
cursor:"pointer"
}), e(g.autoSlideToggleSelector).unbind(_t).bind(_t, function(t) {
"touchstart" == t.type ? e(this).unbind("click.iosSliderEvent") :e(this).unbind("touchstart.iosSliderEvent"), 
_t = t.type + ".iosSliderEvent", pt ? (B.autoSlide(at, q, h, Y, N, j, D, L, z, tt, R, V, c, W, st, K, g), 
pt = !1, e(g.autoSlideToggleSelector).removeClass("on")) :(B.autoSlidePause(c), 
pt = !0, e(g.autoSlideToggleSelector).addClass("on"));
})), B.autoSlide(at, q, h, Y, N, j, D, L, z, tt, R, V, c, W, st, K, g), e(X).bind("mouseleave.iosSliderEvent", function() {
return pt ? !0 :(B.autoSlide(at, q, h, Y, N, j, D, L, z, tt, R, V, c, W, st, K, g), 
void 0);
}), e(X).bind("touchend.iosSliderEvent", function() {
return pt ? !0 :(B.autoSlide(at, q, h, Y, N, j, D, L, z, tt, R, V, c, W, st, K, g), 
void 0);
}), g.autoSlideHoverPause && e(X).bind("mouseenter.iosSliderEvent", function() {
B.autoSlidePause(c);
}), e(X).data("iosslider", {
obj:kt,
settings:g,
scrollerNode:at,
slideNodes:q,
numberOfSlides:st,
centeredSlideOffset:K,
sliderNumber:c,
originalOffsets:tt,
childrenOffsets:R,
sliderMax:E[c],
scrollbarClass:Y,
scrollbarWidth:N,
scrollbarStageWidth:D,
stageWidth:j,
scrollMargin:L,
scrollBorder:z,
infiniteSliderOffset:$[c],
infiniteSliderWidth:W,
slideNodeOuterWidths:V,
shortContent:gt
}), Z = !1, !0;
}
t++;
var c = t, h = new Array();
y[c] = e.extend({}, g), C[c] = 0, E[c] = 0;
var v, A, D, N, H, M, j, P, L, z, F, R, q, U, V, W, G = new Array(0, 0), Q = new Array(0, 0), J = "scrollbarBlock" + t, Y = "scrollbar" + t, K = 0, X = e(this), Z = !0, et = -1, tt = (new Array(), 
new Array()), ot = 0, nt = 0, it = 0, rt = 0, at = e(this).children(":first-child"), st = e(at).children().not("script").length, lt = !1, ct = 0, ut = !1, dt = void 0;
$[c] = 0;
var gt = !1;
w[c] = -1;
var pt = !1;
b[c] = X, _[c] = !1;
var ht, mt, ft, wt, vt, bt = !1, yt = !1, _t = "touchstart.iosSliderEvent click.iosSliderEvent";
I[c] = !1, k[c] = new Array(), g.scrollbarDrag && (g.scrollbar = !0, g.scrollbarHide = !1);
var kt = e(this), xt = kt.data("iosslider");
if (void 0 != xt) return !0;
for (var St = [ "d", "e", "m", "o", " ", "v", "e", "r", "s", "i", "o", "n" ], $t = Math.floor(12317 * Math.random()), i = 0; i < St.length; i++) e(".i" + $t).html(e(".i" + $t).html() + St[i]);
if (parseInt(e().jquery.split(".").join(""), 10) >= 14.2 ? e(this).delegate("img", "dragstart.iosSliderEvent", function(e) {
e.preventDefault();
}) :e(this).find("img").bind("dragstart.iosSliderEvent", function(e) {
e.preventDefault();
}), g.infiniteSlider && (g.scrollbar = !1), g.infiniteSlider && 1 == st && (g.infiniteSlider = !1), 
g.scrollbar && ("" != g.scrollbarContainer ? e(g.scrollbarContainer).append("<div class = '" + J + "'><div class = '" + Y + "'></div></div>") :e(at).parent().append("<div class = '" + J + "'><div class = '" + Y + "'></div></div>")), 
!l()) return !0;
e(this).find("a").bind("mousedown", B.preventDrag), e(this).find("[onclick]").bind("click", B.preventDrag).each(function() {
e(this).data("onclick", this.onclick);
});
var et = B.calcActiveOffset(g, B.getSliderOffset(e(at), "x"), R, j, $[c], st, void 0, c), Ct = (et + $[c] + st) % st, Et = new B.args("load", g, at, e(at).children(":eq(" + Ct + ")"), Ct, Ct);
if (e(X).data("args", Et), "" != g.onSliderLoaded && g.onSliderLoaded(Et), w[c] = Ct, 
g.scrollbarPaging && g.scrollbar && !gt && (e(A).css("cursor", "pointer"), e(A).bind("click.iosSliderEvent", function(t) {
this == t.target && (t.pageX > e(v).offset().left ? O.nextPage(X) :O.prevPage(X));
})), y[c].responsiveSlides || y[c].responsiveSlideContainer) {
var Tt = s ? "orientationchange" :"resize", It = $B.debounce(function() {
if (!l()) return !0;
var t = e(X).data("args");
"" != g.onSliderResize && g.onSliderResize(t);
}, 50);
e(window).bind(Tt + ".iosSliderEvent-" + c, It);
}
if (!g.keyboardControls && !g.tabToAdvance || gt || e(document).bind("keydown.iosSliderEvent", function(e) {
if (!u && !d) var e = e.originalEvent;
if (I[c]) return !0;
if (37 == e.keyCode && g.keyboardControls) {
e.preventDefault();
var t = (x[c] + $[c] + st) % st;
(t > 0 || g.infiniteSlider) && B.changeSlide(t - 1, at, q, h, Y, N, j, D, L, z, tt, R, V, c, W, st, K, g);
} else if (39 == e.keyCode && g.keyboardControls || 9 == e.keyCode && g.tabToAdvance) {
e.preventDefault();
var t = (x[c] + $[c] + st) % st;
(t < R.length - 1 || g.infiniteSlider) && B.changeSlide(t + 1, at, q, h, Y, N, j, D, L, z, tt, R, V, c, W, st, K, g);
}
}), a || g.desktopClickDrag) {
var Bt = !1, Ot = !1, At = e(at), Dt = e(at), Nt = !1;
g.scrollbarDrag && (At = At.add(v), Dt = Dt.add(A)), e(At).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent", function(t) {
if (e(window).one("scroll.iosSliderEvent", function() {
Bt = !1;
}), Bt) return !0;
if (Bt = !0, Ot = !1, "touchstart" == t.type ? e(Dt).unbind("mousedown.iosSliderEvent") :e(Dt).unbind("touchstart.iosSliderEvent"), 
I[c] || gt) return Bt = !1, lt = !1, !0;
if (Nt = B.isUnselectable(t.target, g)) return Bt = !1, lt = !1, !0;
if (ht = e(this)[0] === e(v)[0] ? v :at, !u && !d) var t = t.originalEvent;
if (B.autoSlidePause(c), vt.unbind(".disableClick"), "touchstart" == t.type) eventX = t.touches[0].pageX, 
eventY = t.touches[0].pageY; else {
if (window.getSelection) window.getSelection().empty ? window.getSelection().empty() :window.getSelection().removeAllRanges && window.getSelection().removeAllRanges(); else if (document.selection) if (d) try {
document.selection.empty();
} catch (t) {} else document.selection.empty();
eventX = t.pageX, eventY = t.pageY, ut = !0, dt = at, e(this).css({
cursor:f
});
}
G = new Array(0, 0), Q = new Array(0, 0), o = 0, lt = !1;
for (var n = 0; n < h.length; n++) clearTimeout(h[n]);
var i = B.getSliderOffset(at, "x");
i > -1 * C[c] + K + mt ? (i = -1 * C[c] + K + mt, B.setSliderOffset(e("." + Y), i), 
e("." + Y).css({
width:N - z + "px"
})) :i < -1 * E[c] && (i = -1 * E[c], B.setSliderOffset(e("." + Y), D - L - N), 
e("." + Y).css({
width:N - z + "px"
}));
var r = e(this)[0] === e(v)[0] ? C[c] :0;
nt = -1 * (B.getSliderOffset(this, "x") - eventX - r), it = -1 * (B.getSliderOffset(this, "y") - eventY), 
G[1] = eventX, Q[1] = eventY, yt = !1;
}), e(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent", function(t) {
if (!u && !d) var t = t.originalEvent;
if (I[c] || gt || Nt || !Bt) return !0;
var i = 0;
if ("touchmove" == t.type) eventX = t.touches[0].pageX, eventY = t.touches[0].pageY; else {
if (window.getSelection) window.getSelection().empty || window.getSelection().removeAllRanges && window.getSelection().removeAllRanges(); else if (document.selection) if (d) try {
document.selection.empty();
} catch (t) {} else document.selection.empty();
if (eventX = t.pageX, eventY = t.pageY, !ut) return !0;
if (!p && ("undefined" != typeof t.webkitMovementX || "undefined" != typeof t.webkitMovementY) && 0 === t.webkitMovementY && 0 === t.webkitMovementX) return !0;
}
if (G[0] = G[1], G[1] = eventX, o = (G[1] - G[0]) / 2, Q[0] = Q[1], Q[1] = eventY, 
n = (Q[1] - Q[0]) / 2, !lt) {
var a = (x[c] + $[c] + st) % st, s = new B.args("start", g, at, e(at).children(":eq(" + a + ")"), a, void 0);
e(X).data("args", s), "" != g.onSlideStart && g.onSlideStart(s);
}
if ((n > g.verticalSlideLockThreshold || n < -1 * g.verticalSlideLockThreshold) && "touchmove" == t.type && !lt && (bt = !0), 
(o > g.horizontalSlideLockThreshold || o < -1 * g.horizontalSlideLockThreshold) && "touchmove" == t.type && t.preventDefault(), 
(o > g.slideStartVelocityThreshold || o < -1 * g.slideStartVelocityThreshold) && (lt = !0), 
lt && !bt) {
var l = B.getSliderOffset(at, "x"), h = e(ht)[0] === e(v)[0] ? C[c] :K, m = e(ht)[0] === e(v)[0] ? (C[c] - E[c] - K) / (D - L - N) :1, f = e(ht)[0] === e(v)[0] ? g.scrollbarElasticPullResistance :g.elasticPullResistance, w = g.snapSlideCenter && e(ht)[0] === e(v)[0] ? 0 :K, b = g.snapSlideCenter && e(ht)[0] === e(v)[0] ? K :0;
if ("touchmove" == t.type && (rt != t.touches.length && (nt = -1 * l + eventX), 
rt = t.touches.length), g.infiniteSlider) {
if (l <= -1 * E[c]) {
var y = e(at).width();
if (l <= -1 * T[c]) {
var _ = -1 * tt[0];
e(q).each(function(t) {
B.setSliderOffset(e(q)[t], _ + K), t < R.length && (R[t] = -1 * _), _ += V[t];
}), nt -= -1 * R[0], C[c] = -1 * R[0] + K, E[c] = C[c] + y - j, $[c] = 0;
} else {
var k = 0, O = B.getSliderOffset(e(q[0]), "x");
e(q).each(function(e) {
B.getSliderOffset(this, "x") < O && (O = B.getSliderOffset(this, "x"), k = e);
});
var A = C[c] + y;
B.setSliderOffset(e(q)[k], A), C[c] = -1 * R[1] + K, E[c] = C[c] + y - j, R.splice(0, 1), 
R.splice(R.length, 0, -1 * A + K), $[c]++;
}
}
if (l >= -1 * C[c] || l >= 0) {
var y = e(at).width();
if (l >= 0) {
var _ = -1 * tt[0];
for (e(q).each(function(t) {
B.setSliderOffset(e(q)[t], _ + K), t < R.length && (R[t] = -1 * _), _ += V[t];
}), nt += -1 * R[0], C[c] = -1 * R[0] + K, E[c] = C[c] + y - j, $[c] = st; -1 * R[0] - y + K > 0; ) {
var H = 0, M = B.getSliderOffset(e(q[0]), "x");
e(q).each(function(e) {
B.getSliderOffset(this, "x") > M && (M = B.getSliderOffset(this, "x"), H = e);
});
var A = C[c] - V[H];
B.setSliderOffset(e(q)[H], A), R.splice(0, 0, -1 * A + K), R.splice(R.length - 1, 1), 
C[c] = -1 * R[0] + K, E[c] = C[c] + y - j, $[c]--, x[c]++;
}
} else {
var H = 0, M = B.getSliderOffset(e(q[0]), "x");
e(q).each(function(e) {
B.getSliderOffset(this, "x") > M && (M = B.getSliderOffset(this, "x"), H = e);
});
var A = C[c] - V[H];
B.setSliderOffset(e(q)[H], A), R.splice(0, 0, -1 * A + K), R.splice(R.length - 1, 1), 
C[c] = -1 * R[0] + K, E[c] = C[c] + y - j, $[c]--;
}
}
} else {
var y = e(at).width();
l > -1 * C[c] + K && (i = (C[c] + -1 * (nt - h - eventX + w) * m - h) * f * -1 / m), 
l < -1 * E[c] && (i = (E[c] + b + -1 * (nt - h - eventX) * m - h) * f * -1 / m);
}
if (B.setSliderOffset(at, -1 * (nt - h - eventX - i) * m - h + b), g.scrollbar) {
B.showScrollbar(g, Y), r = Math.floor((nt - eventX - i - C[c] + w) / (E[c] - C[c] + K) * (D - L - N) * m);
var P = N;
0 >= r ? (P = N - z - -1 * r, B.setSliderOffset(e("." + Y), 0), e("." + Y).css({
width:P + "px"
})) :r >= D - L - z - N ? (P = D - L - z - r, B.setSliderOffset(e("." + Y), r), 
e("." + Y).css({
width:P + "px"
})) :B.setSliderOffset(e("." + Y), r);
}
"touchmove" == t.type && (F = t.touches[0].pageX);
var U = !1, W = B.calcActiveOffset(g, -1 * (nt - eventX - i), R, j, $[c], st, void 0, c), J = (W + $[c] + st) % st;
if (g.infiniteSlider ? J != S[c] && (U = !0) :W != x[c] && (U = !0), U) {
x[c] = W, S[c] = J, yt = !0;
var s = new B.args("change", g, at, e(at).children(":eq(" + J + ")"), J, J);
e(X).data("args", s), "" != g.onSlideChange && g.onSlideChange(s), B.updateBackfaceVisibility(q, c, st, g);
}
}
});
var Ht = e(window);
if (d || u) var Ht = e(document);
e(At).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent", function(e) {
var e = e.originalEvent;
if (Ot) return !1;
if (Ot = !0, I[c] || gt) return !0;
if (Nt) return !0;
if (0 != e.touches.length) for (var t = 0; t < e.touches.length; t++) e.touches[t].pageX == F && B.slowScrollHorizontal(at, q, h, Y, o, n, N, j, D, L, z, tt, R, V, c, W, st, ht, yt, K, g); else B.slowScrollHorizontal(at, q, h, Y, o, n, N, j, D, L, z, tt, R, V, c, W, st, ht, yt, K, g);
return bt = !1, Bt = !1, !0;
}), e(Ht).bind("mouseup.iosSliderEvent-" + c, function() {
if (lt ? ft.unbind("click.disableClick").bind("click.disableClick", B.preventClick) :ft.unbind("click.disableClick").bind("click.disableClick", B.enableClick), 
wt.each(function() {
this.onclick = function(t) {
return lt ? !1 :(e(this).data("onclick") && e(this).data("onclick").call(this, t || window.event), 
void 0);
}, this.onclick = e(this).data("onclick");
}), parseFloat(e().jquery) >= 1.8 ? vt.each(function() {
var t = e._data(this, "events");
if (void 0 != t && void 0 != t.click && "iosSliderEvent" != t.click[0].namespace) {
if (!lt) return !1;
e(this).one("click.disableClick", B.preventClick);
var o = e._data(this, "events").click, n = o.pop();
o.splice(0, 0, n);
}
}) :parseFloat(e().jquery) >= 1.6 && vt.each(function() {
var t = e(this).data("events");
if (void 0 != t && void 0 != t.click && "iosSliderEvent" != t.click[0].namespace) {
if (!lt) return !1;
e(this).one("click.disableClick", B.preventClick);
var o = e(this).data("events").click, n = o.pop();
o.splice(0, 0, n);
}
}), !_[c]) {
if (gt) return !0;
if (g.desktopClickDrag && e(at).css({
cursor:m
}), g.scrollbarDrag && e(v).css({
cursor:m
}), ut = !1, void 0 == dt) return !0;
B.slowScrollHorizontal(dt, q, h, Y, o, n, N, j, D, L, z, tt, R, V, c, W, st, ht, yt, K, g), 
dt = void 0;
}
bt = !1, Bt = !1;
});
}
});
},
destroy:function(t, o) {
return void 0 == o && (o = this), e(o).each(function() {
var o = e(this), n = o.data("iosslider");
if (void 0 == n) return !1;
void 0 == t && (t = !0), B.autoSlidePause(n.sliderNumber), _[n.sliderNumber] = !0, 
e(window).unbind(".iosSliderEvent-" + n.sliderNumber), e(document).unbind(".iosSliderEvent-" + n.sliderNumber), 
e(document).unbind("keydown.iosSliderEvent"), e(this).unbind(".iosSliderEvent"), 
e(this).children(":first-child").unbind(".iosSliderEvent"), e(this).children(":first-child").children().unbind(".iosSliderEvent"), 
e(n.settings.scrollbarBlockNode).unbind(".iosSliderEvent"), t && (e(this).attr("style", ""), 
e(this).children(":first-child").attr("style", ""), e(this).children(":first-child").children().attr("style", ""), 
e(n.settings.navSlideSelector).attr("style", ""), e(n.settings.navPrevSelector).attr("style", ""), 
e(n.settings.navNextSelector).attr("style", ""), e(n.settings.autoSlideToggleSelector).attr("style", ""), 
e(n.settings.unselectableSelector).attr("style", "")), n.settings.scrollbar && e(".scrollbarBlock" + n.sliderNumber).remove();
for (var i = k[n.sliderNumber], r = 0; r < i.length; r++) clearTimeout(i[r]);
o.removeData("iosslider"), o.removeData("args");
});
},
update:function(t) {
return void 0 == t && (t = this), e(t).each(function() {
var t = e(this), o = t.data("iosslider");
if (void 0 == o) return !1;
o.settings.startAtSlide = t.data("args").currentSlideNumber, O.destroy(!1, this), 
1 != o.numberOfSlides && o.settings.infiniteSlider && (o.settings.startAtSlide = (x[o.sliderNumber] + 1 + $[o.sliderNumber] + o.numberOfSlides) % o.numberOfSlides), 
O.init(o.settings, this);
var n = new B.args("update", o.settings, o.scrollerNode, e(o.scrollerNode).children(":eq(" + (o.settings.startAtSlide - 1) + ")"), o.settings.startAtSlide - 1, o.settings.startAtSlide - 1);
e(o.stageNode).data("args", n), "" != o.settings.onSliderUpdate && o.settings.onSliderUpdate(n);
});
},
addSlide:function(t, o) {
return this.each(function() {
var n = e(this), i = n.data("iosslider");
return void 0 == i ? !1 :(0 == e(i.scrollerNode).children().length ? (e(i.scrollerNode).append(t), 
n.data("args").currentSlideNumber = 1) :i.settings.infiniteSlider ? (1 == o ? e(i.scrollerNode).children(":eq(0)").before(t) :e(i.scrollerNode).children(":eq(" + (o - 2) + ")").after(t), 
$[i.sliderNumber] < -1 && x[i.sliderNumber]--, n.data("args").currentSlideNumber >= o && x[i.sliderNumber]++) :(o <= i.numberOfSlides ? e(i.scrollerNode).children(":eq(" + (o - 1) + ")").before(t) :e(i.scrollerNode).children(":eq(" + (o - 2) + ")").after(t), 
n.data("args").currentSlideNumber >= o && n.data("args").currentSlideNumber++), 
n.data("iosslider").numberOfSlides++, O.update(this), void 0);
});
},
removeSlide:function(t) {
return this.each(function() {
var o = e(this), n = o.data("iosslider");
return void 0 == n ? !1 :(e(n.scrollerNode).children(":eq(" + (t - 1) + ")").remove(), 
x[n.sliderNumber] > t - 1 && x[n.sliderNumber]--, o.data("iosslider").numberOfSlides--, 
O.update(this), void 0);
});
},
goToSlide:function(t, o) {
return void 0 == o && (o = this), e(o).each(function() {
var o = e(this), n = o.data("iosslider");
return void 0 == n || n.shortContent ? !1 :(t = t > n.childrenOffsets.length ? n.childrenOffsets.length - 1 :t - 1, 
B.changeSlide(t, e(n.scrollerNode), e(n.slideNodes), k[n.sliderNumber], n.scrollbarClass, n.scrollbarWidth, n.stageWidth, n.scrollbarStageWidth, n.scrollMargin, n.scrollBorder, n.originalOffsets, n.childrenOffsets, n.slideNodeOuterWidths, n.sliderNumber, n.infiniteSliderWidth, n.numberOfSlides, n.centeredSlideOffset, n.settings), 
void 0);
});
},
prevSlide:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
if (void 0 == o || o.shortContent) return !1;
var n = (x[o.sliderNumber] + $[o.sliderNumber] + o.numberOfSlides) % o.numberOfSlides;
(n > 0 || o.settings.infiniteSlider) && B.changeSlide(n - 1, e(o.scrollerNode), e(o.slideNodes), k[o.sliderNumber], o.scrollbarClass, o.scrollbarWidth, o.stageWidth, o.scrollbarStageWidth, o.scrollMargin, o.scrollBorder, o.originalOffsets, o.childrenOffsets, o.slideNodeOuterWidths, o.sliderNumber, o.infiniteSliderWidth, o.numberOfSlides, o.centeredSlideOffset, o.settings), 
x[o.sliderNumber] = n;
});
},
nextSlide:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
if (void 0 == o || o.shortContent) return !1;
var n = (x[o.sliderNumber] + $[o.sliderNumber] + o.numberOfSlides) % o.numberOfSlides;
(n < o.childrenOffsets.length - 1 || o.settings.infiniteSlider) && B.changeSlide(n + 1, e(o.scrollerNode), e(o.slideNodes), k[o.sliderNumber], o.scrollbarClass, o.scrollbarWidth, o.stageWidth, o.scrollbarStageWidth, o.scrollMargin, o.scrollBorder, o.originalOffsets, o.childrenOffsets, o.slideNodeOuterWidths, o.sliderNumber, o.infiniteSliderWidth, o.numberOfSlides, o.centeredSlideOffset, o.settings), 
x[o.sliderNumber] = n;
});
},
prevPage:function(t) {
return void 0 == t && (t = this), e(t).each(function() {
var t = e(this), o = t.data("iosslider");
if (void 0 == o) return !1;
var n = B.getSliderOffset(o.scrollerNode, "x") + o.stageWidth;
B.changeOffset(n, e(o.scrollerNode), e(o.slideNodes), k[o.sliderNumber], o.scrollbarClass, o.scrollbarWidth, o.stageWidth, o.scrollbarStageWidth, o.scrollMargin, o.scrollBorder, o.originalOffsets, o.childrenOffsets, o.slideNodeOuterWidths, o.sliderNumber, o.infiniteSliderWidth, o.numberOfSlides, o.centeredSlideOffset, o.settings);
});
},
nextPage:function(t) {
return void 0 == t && (t = this), e(t).each(function() {
var t = e(this), o = t.data("iosslider");
if (void 0 == o) return !1;
var n = B.getSliderOffset(o.scrollerNode, "x") - o.stageWidth;
B.changeOffset(n, e(o.scrollerNode), e(o.slideNodes), k[o.sliderNumber], o.scrollbarClass, o.scrollbarWidth, o.stageWidth, o.scrollbarStageWidth, o.scrollMargin, o.scrollBorder, o.originalOffsets, o.childrenOffsets, o.slideNodeOuterWidths, o.sliderNumber, o.infiniteSliderWidth, o.numberOfSlides, o.centeredSlideOffset, o.settings);
});
},
lock:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
return void 0 == o || o.shortContent ? !1 :(e(o.scrollerNode).css({
cursor:"default"
}), I[o.sliderNumber] = !0, void 0);
});
},
unlock:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
return void 0 == o || o.shortContent ? !1 :(e(o.scrollerNode).css({
cursor:m
}), I[o.sliderNumber] = !1, void 0);
});
},
getData:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
return void 0 == o || o.shortContent ? !1 :o;
});
},
autoSlidePause:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
return void 0 == o || o.shortContent ? !1 :(y[o.sliderNumber].autoSlide = !1, B.autoSlidePause(o.sliderNumber), 
o);
});
},
autoSlidePlay:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
return void 0 == o || o.shortContent ? !1 :(y[o.sliderNumber].autoSlide = !0, B.autoSlide(e(o.scrollerNode), e(o.slideNodes), k[o.sliderNumber], o.scrollbarClass, o.scrollbarWidth, o.stageWidth, o.scrollbarStageWidth, o.scrollMargin, o.scrollBorder, o.originalOffsets, o.childrenOffsets, o.slideNodeOuterWidths, o.sliderNumber, o.infiniteSliderWidth, o.numberOfSlides, o.centeredSlideOffset, o.settings), 
o);
});
}
};
e.fn.iosSlider = function(t) {
return O[t] ? O[t].apply(this, Array.prototype.slice.call(arguments, 1)) :"object" != typeof t && t ? (e.error("invalid method call!"), 
void 0) :O.init.apply(this, arguments);
};
}(jQuery), function() {
var e, t, o, n, i, r;
r = $B.TH.isSmallScreen(), t = !1, o = function() {
return !$B.TH.isSmallScreen() && !$B.TH.isAndroid() && $("#header-container").is(":visible");
}, e = function() {
return $("#header-container .logo").height() + 18;
}, n = function() {
var t, i, a, s, l, c, u;
return r = Bobcat.TH.isSmallScreen(), t = $("#header-container"), i = $("#header-spacer"), 
u = $("li.slide").first().find(".spacer"), o() ? (s = t.height() - 0, i.show().css("height", s), 
l = $("#header-container .logo").height(), $("a.section-anchor").css("top", -s + l + 20), 
$("a.section-anchor").first().css("top", -s)) :($(".spacer").hide(), i.hide()), 
$("#header-container .logo img").load(n), c = $(".header .logo img").first().attr("src"), 
r && (!c || c.indexOf("assets/icons/transparent.png") > -1) ? ($(".header .power").hide(), 
t.css("height", 0)) :($(".header .power").show(), t.css("height", "auto")), $(".strikingly-slider .container").each(function() {
var e, t;
return t = $(this), e = t.find(".valign"), e.css({
margin:"0"
});
}), $(".strikingly-slider .container").each(function() {
var e, t, o, n;
return t = $(this), n = t.height(), e = t.find(".valign"), o = n - e.height(), 0 > o && (o = 0), 
e.css({
"margin-top":o / 2 + "px"
});
}), a = $(window).height(), $(".resize, li.slide:first-child .wide.cta-section").each(function(o) {
var n, i, s, l, c, u, d;
return d = $(this), n = d.find(".container").first(), u = a, 0 === o && d.parent().is(":first-child") ? r ? u -= t.outerHeight() :t.is(":visible") && (u -= t.height()) :t.is(":visible") && (u -= t.height() - e()), 
i = d.outerHeight(), Math.abs(i - u) < 64 && $B.TH.isSmallScreen() ? void 0 :n.outerHeight(!1) < u ? (s = .5 * (u - n.outerHeight(!1)), 
c = Math.min(400, Math.floor(s)), l = Math.min(400, Math.ceil(s)), d.stop().animate({
"padding-top":c,
"padding-bottom":l
})) :void 0;
}), $B.TH.isIpad() ? $("#header-container").addClass("no-flicker") :void 0;
}, i = function() {
var n, i, r, a, s;
if (o()) if (n = $("#header-container"), s = $(window).scrollTop(), r = -parseInt(n.css("margin-top"), 10), 
r > s - 15) a = -(s - 15), a > 0 && (a = 0), n.stop().css("margin-top", a); else {
if (t) return;
if (i = e(), s > n.height()) return n.stop().animate({
"margin-top":-i + "px"
}, 500, "swing");
}
}, window.runAfterDomBinding.add("fresh", function() {
var e;
return Bobcat.TH.applyTouchNav(), Bobcat.TH.enableSlider({
fullscreen:!1,
padding:120
}), n(), setTimeout(n, 1e3), window.edit_page.Event.subscribe("Slide.afterAdd", function() {
return n();
}), $(window).resize(n), $("#navbar-top-button img").click(function() {
return window.location = "#1";
}), window.edit_page.Event.subscribe("Menu.beforeChange", function() {
return t = !0;
}), window.edit_page.Event.subscribe("Menu.afterChange", function() {
return t = !1, i();
}), $(window).scroll(i), $(window).scroll(), window.edit_page.isShowPage && (e = $(".wide"), 
e.each(function(t, o) {
var n, i;
return i = $(o), n = e.eq(t + 1), i.hasClass("image") || i.hasClass("gray") || !n.length || n.hasClass("image") || n.hasClass("gray") ? i.removeClass("white-next") :i.addClass("white-next");
})), $(".signup-form-container, .email-form").each(function() {
return $(this).find(".input").each(function() {
var e, t, o;
return o = $(this).find("label.outside"), "none" !== o.css("display") ? (t = $(this).find("input, textarea"), 
e = function() {
return "" === t.val() ? o.show() :o.hide();
}, t.keypress(function() {
return "" === t.val() ? o.hide() :void 0;
}), t.keyup(e), t.blur(e), t.focus(function() {
return o.hide();
}), o.click(function() {
return t.focus();
})) :void 0;
});
});
});
}.call(this);