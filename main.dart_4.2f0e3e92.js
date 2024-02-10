x(s.a,a.a),Math.max(s.b,a.b),Math.min(s.c,a.c),Math.min(s.d,a.d))},
lk(a){var s=this
return new A.D(Math.min(s.a,a.a),Math.min(s.b,a.b),Math.max(s.c,a.c),Math.max(s.d,a.d))},
Cj(a){var s=this
if(s.c<=a.a||a.c<=s.a)return!1
if(s.d<=a.b||a.d<=s.b)return!1
return!0},
ghc(){var s=this
return Math.min(Math.abs(s.c-s.a),Math.abs(s.d-s.b))},
gaP(){var s=this,r=s.a,q=s.b
return new A.r(r+(s.c-r)/2,q+(s.d-q)/2)},
u(a,b){var s=this,r=b.a
if(r>=s.a)if(r<s.c){r=b.b
r=r>=s.b&&r<s.d}else r=!1
else r=!1
return r},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(A.t(s)!==J.T(b))return!1
return b instanceof A.D&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"Rect.fromLTRB("+B.c.N(s.a,1)+", "+B.c.N(s.b,1)+", "+B.c.N(s.c,1)+", "+B.c.N(s.d,1)+")"}}
A.aV.prototype={
fI(a,b){return new A.aV(A.Q(this.a,b.a,1/0),A.Q(this.b,b.b,1/0))},
a5(a,b){return new A.aV(this.a-b.a,this.b-b.b)},
X(a,b){return new A.aV(this.a+b.a,this.b+b.b)},
a4(a,b){return new A.aV(this.a*b,this.b*b)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(A.t(s)!==J.T(b))return!1
return b instanceof A.aV&&b.a===s.a&&b.b===s.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this.a,r=this.b
return s===r?"Radius.circular("+B.c.N(s,1)+")":"Radius.elliptical("+B.c.N(s,1)+", "+B.c.N(r,1)+")"}}
A.hL.prototype={
cN(a){var s=this,r=a.a,q=a.b
return new A.hL(s.a+r,s.b+q,s.c+r,s.d+q,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,!1)},
eg(a){var s=this,r=Math.max(0,s.e+a),q=Math.max(0,s.f+a),p=Math.max(0,s.r+a),o=Math.max(0,s.w+a),n=Math.max(0,s.z+a),m=Math.max(0,s.Q+a)
return new A.hL(s.a-a,s.b-a,s.c+a,s.d+a,r,q,p,o,Math.max(0,s.x+a),Math.max(0,s.y+a),n,m,!1)},
t5(a,b,c,d){var s=b+c
if(s>d&&s!==0)return Math.min(a,d/s)
return a},
rn(){var s=this,r=s.c,q=s.a,p=Math.abs(r-q),o=s.d,n=s.b,m=Math.abs(o-n),l=s.Q,k=s.f,j=s.e,i=s.r,h=s.w,g=s.y,f=s.x,e=s.z,d=s.t5(s.t5(s.t5(s.t5(1,l,k,m),j,i,p),h,g,m),f,e,p)
if(d<1)return new A.hL(q,n,r,o,j*d,k*d,i*d,h*d,f*d,g*d,e*d,l*d,!1)
return new A.hL(q,n,r,o,j,k,i,h,f,g,e,l,!1)},
u(a,b){var s,r,q,p,o,n,m=this,l=b.a,k=m.a
if(!(l<k))if(!(l>=m.c)){s=b.b
s=s<m.b||s>=m.d}else s=!0
else s=!0
if(s)return!1
r=m.rn()
q=r.e
if(l<k+q&&b.b<m.b+r.f){p=l-k-q
o=r.f
n=b.b-m.b-o}else{s=m.c
q=r.r
if(l>s-q&&b.b<m.b+r.w){p=l-s+q
o=r.w
n=b.b-m.b-o}else{q=r.x
if(l>s-q&&b.b>m.d-r.y){p=l-s+q
o=r.y
n=b.b-m.d+o}else{q=r.z
if(l<k+q&&b.b>m.d-r.Q){p=l-k-q
o=r.Q
n=b.b-m.d+o}else return!0}}}p/=q
n/=o
if(p*p+n*n>1)return!1
return!0},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(A.t(s)!==J.T(b))return!1
return b instanceof A.hL&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.z===s.z&&b.Q===s.Q&&b.x===s.x&&b.y===s.y},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.z,s.Q,s.x,s.y,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r,q=this,p=B.c.N(q.a,1)+", "+B.c.N(q.b,1)+", "+B.c.N(q.c,1)+", "+B.c.N(q.d,1),o=q.e,n=q.f,m=q.r,l=q.w
if(new A.aV(o,n).k(0,new A.aV(m,l))){s=q.x
r=q.y
s=new A.aV(m,l).k(0,new A.aV(s,r))&&new A.aV(s,r).k(0,new A.aV(q.z,q.Q))}else s=!1
if(s){if(o===n)return"RRect.fromLTRBR("+p+", "+B.c.N(o,1)+")"
return"RRect.fromLTRBXY("+p+", "+B.c.N(o,1)+", "+B.c.N(n,1)+")"}return"RRect.fromLTRBAndCorners("+p+", topLeft: "+new A.aV(o,n).i(0)+", topRight: "+new A.aV(m,l).i(0)+", bottomRight: "+new A.aV(q.x,q.y).i(0)+", bottomLeft: "+new A.aV(q.z,q.Q).i(0)+")"}}
A.w3.prototype={
F(){return"KeyEventType."+this.b}}
A.eQ.prototype={
ZX(){var s=this.d
return"0x"+B.f.hF(s,16)+new A.a1i(B.c.dV(s/4294967296)).$0()},
WY(){var s=this.e
if(s==null)return"<none>"
switch(s){case"\n":return'"\\n"'
case"\t":return'"\\t"'
case"\r":return'"\\r"'
case"\b":return'"\\b"'
case"\f":return'"\\f"'
default:return'"'+s+'"'}},
a0H(){var s=this.e
if(s==null)return""
return" (0x"+new A.ae(new A.l_(s),new A.a1j(),t.sU.h("ae<P.E,l>")).bd(0," ")+")"},
i(a){var s=this,r=A.aA8(s.b),q=B.f.hF(s.c,16),p=s.ZX(),o=s.WY(),n=s.a0H(),m=s.f?", synthesized":""
return"KeyData(type: "+r+", physical: 0x"+q+", logical: "+p+", character: "+o+n+m+")"}}
A.a1i.prototype={
$0(){switch(this.a){case 0:return" (Unicode)"
case 1:return" (Unprintable)"
case 2:return" (Flutter)"
case 23:return" (Web)"}return""},
$S:2}
A.a1j.prototype={
$1(a){return B.d.lC(B.f.hF(a,16),2,"0")},
$S:65}
A.I.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.t(s))return!1
return b instanceof A.I&&b.gq(b)===s.gq(s)},
gt(a){return B.f.gt(this.gq(this))},
i(a){return"Color(0x"+B.d.lC(B.f.hF(this.gq(this),16),8,"0")+")"},
gq(a){return this.a}}
A.LL.prototype={
F(){return"StrokeCap."+this.b}}
A.LM.prototype={
F(){return"StrokeJoin."+this.b}}
A.JA.prototype={
F(){return"PaintingStyle."+this.b}}
A.kV.prototype={
F(){return"BlendMode."+this.b}}
A.pd.prototype={
F(){return"Clip."+this.b}}
A.W1.prototype={
F(){return"BlurStyle."+this.b}}
A.wo.prototype={
k(a,b){if(b==null)return!1
return b instanceof A.wo&&b.a===this.a&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"MaskFilter.blur("+this.a.i(0)+", "+B.c.N(this.b,1)+")"}}
A.n4.prototype={
F(){return"FilterQuality."+this.b}}
A.akB.prototype={}
A.iz.prototype={
gn(a){return this.b}}
A.a4a.prototype={}
A.lb.prototype={
i(a){var s,r=A.t(this).i(0),q=this.a,p=A.cl(q[2],0,0),o=q[1],n=A.cl(o,0,0),m=q[4],l=A.cl(m,0,0),k=A.cl(q[3],0,0)
o=A.cl(o,0,0)
s=q[0]
return r+"(buildDuration: "+(A.h((p.a-n.a)*0.001)+"ms")+", rasterDuration: "+(A.h((l.a-k.a)*0.001)+"ms")+", vsyncOverhead: "+(A.h((o.a-A.cl(s,0,0).a)*0.001)+"ms")+", totalSpan: "+(A.h((A.cl(m,0,0).a-A.cl(s,0,0).a)*0.001)+"ms")+", layerCacheCount: "+q[6]+", layerCacheBytes: "+q[7]+", pictureCacheCount: "+q[8]+", pictureCacheBytes: "+q[9]+", frameNumber: "+B.b.gO(q)+")"}}
A.ie.prototype={
F(){return"AppLifecycleState."+this.b}}
A.tM.prototype={
F(){return"AppExitResponse."+this.b}}
A.fn.prototype={
gcL(a){var s=this.a,r=B.bj.j(0,s)
return r==null?s:r},
ghj(){var s=this.c,r=B.bt.j(0,s)
return r==null?s:r},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.fn)if(b.gcL(b)===r.gcL(r))s=b.ghj()==r.ghj()
else s=!1
else s=!1
return s},
gt(a){return A.S(this.gcL(this),null,this.ghj(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return this.I3("_")},
I3(a){var s=this,r=s.gcL(s)
if(s.c!=null)r+=a+A.h(s.ghj())
return r.charCodeAt(0)==0?r:r}}
A.XF.prototype={
F(){return"DartPerformanceMode."+this.b}}
A.qM.prototype={}
A.k0.prototype={
F(){return"PointerChange."+this.b}}
A.iM.prototype={
F(){return"PointerDeviceKind."+this.b}}
A.qn.prototype={
F(){return"PointerSignalKind."+this.b}}
A.iL.prototype={
i(a){return"PointerData(x: "+A.h(this.x)+", y: "+A.h(this.y)+")"}}
A.xo.prototype={}
A.cj.prototype={
i(a){return"SemanticsAction."+this.b}}
A.c6.prototype={
i(a){return"SemanticsFlag."+this.b}}
A.a7O.prototype={}
A.pL.prototype={
F(){return"FontStyle."+this.b}}
A.lA.prototype={
F(){return"PlaceholderAlignment."+this.b}}
A.er.prototype={
i(a){var s=B.TU.j(0,this.a)
s.toString
return s}}
A.hU.prototype={
F(){return"TextAlign."+this.b}}
A.of.prototype={
F(){return"TextBaseline."+this.b}}
A.og.prototype={
k(a,b){if(b==null)return!1
return b instanceof A.og&&b.a===this.a},
gt(a){return B.f.gt(this.a)},
i(a){var s,r=this.a
if(r===0)return"TextDecoration.none"
s=A.a([],t.s)
if((r&1)!==0)s.push("underline")
if((r&2)!==0)s.push("overline")
if((r&4)!==0)s.push("lineThrough")
if(s.length===1)return"TextDecoration."+s[0]
return"TextDecoration.combine(["+B.b.bd(s,", ")+"])"}}
A.z0.prototype={
F(){return"TextDecorationStyle."+this.b}}
A.LV.prototype={
F(){return"TextLeadingDistribution."+this.b}}
A.j2.prototype={
F(){return"TextDirection."+this.b}}
A.e0.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.t(s))return!1
return b instanceof A.e0&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"TextBox.fromLTRBD("+B.c.N(s.a,1)+", "+B.c.N(s.b,1)+", "+B.c.N(s.c,1)+", "+B.c.N(s.d,1)+", "+s.e.i(0)+")"}}
A.yY.prototype={
F(){return"TextAffinity."+this.b}}
A.bK.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.t(this))return!1
return b instanceof A.bK&&b.a===this.a&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return A.t(this).i(0)+"(offset: "+this.a+", affinity: "+this.b.i(0)+")"}}
A.d7.prototype={
glu(){return this.a>=0&&this.b>=0},
k(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.d7&&b.a===this.a&&b.b===this.b},
gt(a){return A.S(B.f.gt(this.a),B.f.gt(this.b),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"TextRange(start: "+this.a+", end: "+this.b+")"}}
A.lz.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.t(this))return!1
return b instanceof A.lz&&b.a===this.a},
gt(a){return B.c.gt(this.a)},
i(a){return A.t(this).i(0)+"(width: "+A.h(this.a)+")"}}
A.DK.prototype={
F(){return"BoxHeightStyle."+this.b}}
A.W6.prototype={
F(){return"BoxWidthStyle."+this.b}}
A.M4.prototype={
F(){return"TileMode."+this.b}}
A.Yc.prototype={}
A.pI.prototype={}
A.Lm.prototype={}
A.DO.prototype={
F(){return"Brightness."+this.b}}
A.FP.prototype={
k(a,b){var s
if(b==null)return!1
if(J.T(b)!==A.t(this))return!1
if(b instanceof A.FP)s=!0
else s=!1
return s},
gt(a){return A.S(null,null,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"GestureSettings(physicalTouchSlop: null, physicalDoubleTapSlop: null)"}}
A.Vu.prototype={
r9(a){var s,r,q
if(A.ef(a,0,null).gMD())return A.To(B.iQ,a,B.a0,!1)
s=this.b
if(s==null){s=self.window.document.querySelector("meta[name=assetBase]")
r=s==null?null:s.content
s=r==null
if(!s)self.window.console.warn("The `assetBase` meta tag is now deprecated.\nUse engineInitializer.initializeEngine(config) instead.\nSee: https://docs.flutter.dev/development/platform-integration/web/initialization")
q=this.b=s?"":r
s=q}return A.To(B.iQ,s+"assets/"+a,B.a0,!1)}}
A.ahY.prototype={
$1(a){return this.Pk(a)},
$0(){return this.$1(null)},
$C:"$1",
$R:0,
$D(){return[null]},
Pk(a){var s=0,r=A.M(t.H)
var $async$$1=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)switch(s){case 0:s=2
return A.E(A.ait(a),$async$$1)
case 2:return A.K(null,r)}})
return A.L($async$$1,r)},
$S:122}
A.ahZ.prototype={
$0(){var s=0,r=A.M(t.P),q=this
var $async$$0=A.H(function(a,b){if(a===1)return A.J(b,r)
while(true)switch(s){case 0:q.a.$0()
s=2
return A.E(A.amy(),$async$$0)
case 2:q.b.$0()
return A.K(null,r)}})
return A.L($async$$0,r)},
$S:49}
A.We.prototype={
Dp(a){return $.asQ.br(0,a,new A.Wf(a))}}
A.Wf.prototype={
$0(){return t.e.a(A.b6(this.a))},
$S:48}
A.FW.prototype={
zA(a){var s=new A.a_X(a)
A.bW(self.window,"popstate",this.a.Dp(s),null)
return new A.a_W(this,s)},
Dq(){var s=self.window.location.hash
if(s.length===0||s==="#")return"/"
return B.d.bX(s,1)},
Du(a){return A.aov(self.window.history)},
Cs(a){var s,r=a.length===0||a==="/"?"":"#"+a,q=A.aow(self.window.location)
q.toString
s=A.aox(self.window.location)
s.toString
return q+s+r},
O1(a,b,c,d){var s=this.Cs(d),r=self.window.history,q=A.af(b)
if(q==null)q=t.K.a(q)
r.pushState(q,c,s)},
lL(a,b,c,d){var s,r=this.Cs(d),q=self.window.history
if(b==null)s=null
else{s=A.af(b)
if(s==null)s=t.K.a(s)}q.replaceState(s,c,r)},
rj(a,b){var s=self.window.history
s.go(b)
return this.a33()},
a33(){var s=new A.a5($.ab,t.U),r=A.b1("unsubscribe")
r.b=this.zA(new A.a_V(r,new A.aY(s,t.Y)))
return s}}
A.a_X.prototype={
$1(a){var s=t.e.a(a).state
if(s==null)s=null
else{s=A.amn(s)
s.toString}this.a.$1(s)},
$S:123}
A.a_W.prototype={
$0(){var s=this.b
A.dH(self.window,"popstate",this.a.a.Dp(s),null)
$.asQ.v(0,s)
return null},
$S:0}
A.a_V.prototype={
$1(a){this.a.aq().$0()
this.b.f6(0)},
$S:6}
A.a4h.prototype={}
A.Dt.prototype={
gn(a){return a.length}}
A.Du.prototype={
a1(a,b){return A.hl(a.get(b))!=null},
j(a,b){return A.hl(a.get(b))},
U(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,A.hl(s.value[1]))}},
gbl(a){var s=A.a([],t.s)
this.U(a,new A.Vz(s))
return s},
gaF(a){var s=A.a([],t.vp)
this.U(a,new A.VA(s))
return s},
gn(a){var s=a.size
s.toString
return s},
gS(a){var s=a.size
s.toString
return s===0},
gbk(a){var s=a.size
s.toString
return s!==0},
m(a,b,c){throw A.c(A.a2("Not supported"))},
br(a,b,c){throw A.c(A.a2("Not supported"))},
v(a,b){throw A.c(A.a2("Not supported"))},
$iap:1}
A.Vz.prototype={
$2(a,b){return this.a.push(a)},
$S:14}
A.VA.prototype={
$2(a,b){return this.a.push(b)},
$S:14}
A.Dv.prototype={
gn(a){return a.length}}
A.kT.prototype={}
A.J9.prototype={
gn(a){return a.length}}
A.MX.prototype={}
A.FX.prototype={
rX(a){var s=this.b[a]
if(s==null){this.$ti.c.a(null)
s=null}return s},
gn(a){return this.c},
i(a){var s=this.b
return A.ape(A.eA(s,0,A.dF(this.c,"count",t.S),A.a6(s).c),"(",")")},
Vb(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=b*2+2
for(s=j.a,r=j.$ti.c;q=j.c,i<q;b=l){p=i-1
q=j.b
o=q[p]
if(o==null){r.a(null)
o=null}n=q[i]
if(n==null){r.a(null)
n=null}if(s.$2(o,n)<0){m=o
l=p}else{m=n
l=i}if(s.$2(a,m)<=0){j.b[b]=a
return}j.b[b]=m
i=l*2+2}p=i-1
if(p<q){k=j.rX(p)
if(s.$2(a,k)>0){j.b[b]=k
b=p}}j.b[b]=a}}
A.xd.prototype={
aa(a,b){return this.ku(b)},
ku(a){throw A.c(A.co(null))},
i(a){return"ParametricCurve"}}
A.dT.prototype={
aa(a,b){if(b===0||b===1)return b
return this.RO(0,b)}}
A.ea.prototype={
Gj(a,b,c){var s=1-c
return 3*a*s*s*c+3*b*s*c*c+c*c*c},
ku(a){var s,r,q,p,o,n,m=this
for(s=m.a,r=m.c,q=0,p=1;!0;){o=(q+p)/2
n=m.Gj(s,r,o)
if(Math.abs(a-n)<0.001)return m.Gj(m.b,m.d,o)
if(n<a)q=o
else p=o}},
i(a){var s=this
return"Cubic("+B.c.N(s.a,2)+", "+B.c.N(s.b,2)+", "+B.c.N(s.c,2)+", "+B.c.N(s.d,2)+")"}}
A.pG.prototype={
ku(a){return 1-this.a.aa(0,1-a)},
i(a){return"FlippedCurve("+this.a.i(0)+")"}}
A.ahR.prototype={
$0(){return null},
$S:124}
A.agS.prototype={
$0(){var s=self,r=s.window.navigator.platform.toLowerCase()
if(B.d.bf(r,"mac"))return B.hv
if(B.d.bf(r,"win"))return B.k2
if(B.d.u(r,"iphone")||B.d.u(r,"ipad")||B.d.u(r,"ipod"))return B.co
if(B.d.u(r,"android"))return B.d_
if(s.window.matchMedia("only screen and (pointer: fine)").matches)return B.k1
return B.d_},
$S:125}
A.m8.prototype={
qY(a,b){var s=A.fT.prototype.gq.call(this,this)
s.toString
return J.anz(s)},
i(a){return this.qY(a,B.ar)}}
A.pB.prototype={}
A.Fi.prototype={}
A.Fh.prototype={}
A.bq.prototype={
a5W(){var s,r,q,p,o,n,m,l=this.a
if(t.hK.b(l)){s=l.gNq(l)
r=l.i(0)
if(typeof s=="string"&&s!==r){q=r.length
p=J.ay(s)
if(q>p.gn(s)){o=B.d.vh(r,s)
if(o===q-p.gn(s)&&o>2&&B.d.a_(r,o-2,o)===": "){n=B.d.a_(r,0,o-2)
m=B.d.ht(n," Failed assertion:")
if(m>=0)n=B.d.a_(n,0,m)+"\n"+B.d.bX(n,m+1)
l=p.CZ(s)+"\n"+n}else l=null}else l=null}else l=null
if(l==null)l=r}else if(!(typeof l=="string"))l=t.yt.b(l)||t.A2.b(l)?J.e7(l):"  "+A.h(l)
l=B.d.CZ(l)
return l.length===0?"  <no message available>":l},
gQE(){return A.ayG(new A.ZJ(this).$0(),!0,B.m6)},
c7(){return"Exception caught by "+this.c},
i(a){A.aDH(null,B.Ho,this)
return""}}
A.ZJ.prototype={
$0(){return J.axq(this.a.a5W().split("\n")[0])},
$S:2}
A.n5.prototype={
gNq(a){return this.i(0)},
c7(){return"FlutterError"},
i(a){var s,r,q=new A.eD(this.a,t.dw)
if(!q.gS(q)){s=q.gI(q)
r=J.e5(s)
s=A.fT.prototype.gq.call(r,s)
s.toString
s=J.anz(s)}else s="FlutterError"
return s},
$imC:1}
A.ZK.prototype={
$1(a){return A.b7(a)},
$S:126}
A.ZL.prototype={
$1(a){return a+1},
$S:60}
A.ZM.prototype={
$1(a){return a+1},
$S:60}
A.ai9.prototype={
$1(a){return B.d.u(a,"StackTrace.current")||B.d.u(a,"dart-sdk/lib/_internal")||B.d.u(a,"dart:sdk_internal")},
$S:25}
A.Ot.prototype={}
A.Ov.prototype={}
A.Ou.prototype={}
A.DF.prototype={
eh(){},
lp(){},
a8F(a){var s;++this.c
s=a.$0()
s.h5(new A.VV(this))
return s},
D1(){},
i(a){return"<BindingBase>"}}
A.VV.prototype={
$0(){var s,r,q,p=this.a
if(--p.c<=0)try{p.TO()
if(p.p1$.c!==0)p.Gh()}catch(q){s=A.a7(q)
r=A.ar(q)
p=A.b7("while handling pending events")
A.cE(new A.bq(s,r,"foundation",p,null,!1))}},
$S:26}
A.ak.prototype={}
A.en.prototype={
a0(a,b){var s,r,q,p,o=this
if(o.gc9(o)===o.gbG().length){s=t.xR
if(o.gc9(o)===0)o.sbG(A.ba(1,null,!1,s))
else{r=A.ba(o.gbG().length*2,null,!1,s)
for(q=0;q<o.gc9(o);++q)r[q]=o.gbG()[q]
o.sbG(r)}}s=o.gbG()
p=o.gc9(o)
o.sc9(0,p+1)
s[p]=b},
tB(a){var s,r,q,p=this
p.sc9(0,p.gc9(p)-1)
if(p.gc9(p)*2<=p.gbG().length){s=A.ba(p.gc9(p),null,!1,t.xR)
for(r=0;r<a;++r)s[r]=p.gbG()[r]
for(r=a;r<p.gc9(p);r=q){q=r+1
s[r]=p.gbG()[q]}p.sbG(s)}else{for(r=a;r<p.gc9(p);r=q){q=r+1
p.gbG()[r]=p.gbG()[q]}p.gbG()[p.gc9(p)]=null}},
L(a,b){var s,r=this
for(s=0;s<r.gc9(r);++s)if(J.e(r.gbG()[s],b)){if(r.geZ()>0){r.gbG()[s]=null
r.sfz(r.gfz()+1)}else r.tB(s)
break}},
l(){this.sbG($.aU())
this.sc9(0,0)},
am(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(f.gc9(f)===0)return
f.seZ(f.geZ()+1)
p=f.gc9(f)
for(s=0;s<p;++s)try{o=f.gbG()[s]
if(o!=null)o.$0()}catch(n){r=A.a7(n)
q=A.ar(n)
o=A.b7("while dispatching notifications for "+A.t(f).i(0))
m=$.hp()
if(m!=null)m.$1(new A.bq(r,q,"foundation library",o,new A.WN(f),!1))}f.seZ(f.geZ()-1)
if(f.geZ()===0&&f.gfz()>0){l=f.gc9(f)-f.gfz()
if(l*2<=f.gbG().length){k=A.ba(l,null,!1,t.xR)
for(j=0,s=0;s<f.gc9(f);++s){i=f.gbG()[s]
if(i!=null){h=j+1
k[j]=i
j=h}}f.sbG(k)}else for(s=0;s<l;++s)if(f.gbG()[s]==null){g=s+1
for(;f.gbG()[g]==null;)++g
f.gbG()[s]=f.gbG()[g]
f.gbG()[g]=null}f.sfz(0)
f.sc9(0,l)}},
$iak:1,
gc9(a){return this.fx$},
gbG(){return this.fy$},
geZ(){return this.go$},
gfz(){return this.id$},
sc9(a,b){return this.fx$=b},
sbG(a){return this.fy$=a},
seZ(a){return this.go$=a},
sfz(a){return this.id$=a}}
A.WN.prototype={
$0(){var s=null,r=this.a
return A.a([A.ip("The "+A.t(r).i(0)+" sending notification was",r,!0,B.aU,s,!1,s,s,B.ar,s,!1,!0,!0,B.b8,s,t.ig)],t.p)},
$S:11}
A.dP.prototype={
gq(a){return this.a},
sq(a,b){var s=this.a
if(s==null?b==null:s===b)return
this.a=b
this.am()},
i(a){return"<optimized out>#"+A.bd(this)+"("+A.h(this.a)+")"}}
A.uN.prototype={
F(){return"DiagnosticLevel."+this.b}}
A.jw.prototype={
F(){return"DiagnosticsTreeStyle."+this.b}}
A.aeH.prototype={}
A.de.prototype={
qY(a,b){return this.bw(0)},
i(a){return this.qY(a,B.ar)}}
A.fT.prototype={
gq(a){this.a_8()
return this.at},
a_8(){return}}
A.mR.prototype={}
A.EQ.prototype={}
A.aa.prototype={
c7(){return"<optimized out>#"+A.bd(this)},
qY(a,b){var s=this.c7()
return s},
i(a){return this.qY(a,B.ar)}}
A.uO.prototype={
c7(){return"<optimized out>#"+A.bd(this)}}
A.hv.prototype={
i(a){return this.OG(B.m6).bw(0)},
c7(){return"<optimized out>#"+A.bd(this)},
OH(a,b){return A.ak4(a,b,this)},
OG(a){return this.OH(null,a)},
w0(a){return this.OH(a,null)}}
A.NX.prototype={}
A.dX.prototype={}
A.wh.prototype={}
A.zh.prototype={
i(a){return"[#"+A.bd(this)+"]"}}
A.h1.prototype={}
A.w9.prototype={}
A.vC.prototype={
v(a,b){var s=this.a,r=s.j(0,b)
if(r==null)return!1
if(r===1)s.v(0,b)
else s.m(0,b,r-1)
return!0},
u(a,b){return this.a.a1(0,b)},
gR(a){var s=this.a
return A.iF(s,s.r,A.n(s).c)},
gS(a){return this.a.a===0},
gbk(a){return this.a.a!==0}}
A.qm.prototype={
a9r(a,b,c){var s=this.a,r=s==null?$.D2():s,q=r.ik(0,0,b,A.eU(b),c)
if(q===s)return this
s=this.$ti
return new A.qm(q,s.h("@<1>").P(s.z[1]).h("qm<1,2>"))},
j(a,b){var s=this.a
if(s==null)return null
return s.nY(0,0,b,J.q(b))}}
A.agl.prototype={}
A.OD.prototype={
ik(a,b,c,d,e){var s,r,q,p,o=B.f.mE(d,b)&31,n=this.a,m=n[o]
if(m==null)m=$.D2()
s=m.ik(0,b+5,c,d,e)
if(s===m)n=this
else{r=n.length
q=A.ba(r,null,!1,t.X)
for(p=0;p<r;++p)q[p]=n[p]
q[o]=s
n=new A.OD(q)}return n},
nY(a,b,c,d){var s=this.a[B.f.mE(d,b)&31]
return s==null?null:s.nY(0,b+5,c,d)}}
A.m6.prototype={
ik(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=B.f.mE(a7,a5)&31,a0=1<<a>>>0,a1=c.a,a2=(a1&a0-1)>>>0,a3=a2-(a2>>>1&1431655765)
a3=(a3&858993459)+(a3>>>2&858993459)
a3=a3+(a3>>>4)&252645135
a3+=a3>>>8
s=a3+(a3>>>16)&63
if((a1&a0)>>>0!==0){a=c.b
a2=2*s
r=a[a2]
q=a2+1
p=a[q]
if(r==null){o=J.axd(p,a5+5,a6,a7,a8)
if(o===p)return c
a2=a.length
n=A.ba(a2,b,!1,t.X)
for(m=0;m<a2;++m)n[m]=a[m]
n[q]=o
return new A.m6(a1,n)}if(J.e(a6,r)){if(a8==null?p==null:a8===p)a=c
else{a2=a.length
n=A.ba(a2,b,!1,t.X)
for(m=0;m<a2;++m)n[m]=a[m]
n[q]=a8
a=new A.m6(a1,n)}return a}l=a5+5
k=J.q(r)
if(k===a7){j=A.ba(4,b,!1,t.X)
j[0]=r
j[1]=p
j[2]=a6
j[3]=a8
o=new A.Ah(a7,j)}else o=$.D2().ik(0,l,r,k,p).ik(0,l,a6,a7,a8)
l=a.length
n=A.ba(l,b,!1,t.X)
for(m=0;m<l;++m)n[m]=a[m]
n[a2]=null
n[q]=o
return new A.m6(a1,n)}else{a3=a1-(a1>>>1&1431655765)
a3=(a3&858993459)+(a3>>>2&858993459)
a3=a3+(a3>>>4)&252645135
a3+=a3>>>8
i=a3+(a3>>>16)&63
if(i>=16){a1=c.Zn(a5)
a1.a[a]=$.D2().ik(0,a5+5,a6,a7,a8)
return a1}else{h=2*s
g=2*i
f=A.ba(g+2,b,!1,t.X)
for(a=c.b,e=0;e<h;++e)f[e]=a[e]
f[h]=a6
f[h+1]=a8
for(d=h+2,e=h;e<g;++e,++d)f[d]=a[e]
return new A.m6((a1|a0)>>>0,f)}}},
nY(a,b,c,d){var s,r,q,p,o=1<<(B.f.mE(d,b)&31)>>>0,n=this.a
if((n&o)>>>0===0)return null
n=(n&o-1)>>>0
s=n-(n>>>1&1431655765)
s=(s&858993459)+(s>>>2&858993459)
s=s+(s>>>4)&252645135
s+=s>>>8
n=this.b
r=2*(s+(s>>>16)&63)
q=n[r]
p=n[r+1]
if(q==null)return p.nY(0,b+5,c,d)
if(J.e(c,q))return p
return null},
Zn(a){var s,r,q,p,o,n,m,l=A.ba(32,null,!1,t.X)
for(s=this.a,r=a+5,q=this.b,p=0,o=0;o<32;++o)if((B.f.mE(s,o)&1)!==0){n=q[p]
m=p+1
if(n==null)l[o]=q[m]
else l[o]=$.D2().ik(0,r,n,J.q(n),q[m])
p+=2}return new A.OD(l)}}
A.Ah.prototype={
ik(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(d===i){s=j.H2(c)
if(s!==-1){i=j.b
r=s+1
q=i[r]
if(q==null?e==null:q===e)i=j
else{q=i.length
p=A.ba(q,null,!1,t.X)
for(o=0;o<q;++o)p[o]=i[o]
p[r]=e
i=new A.Ah(d,p)}return i}i=j.b
n=i.length
m=A.ba(n+2,null,!1,t.X)
for(l=0;l<n;++l)m[l]=i[l]
m[n]=c
m[n+1]=e
return new A.Ah(d,m)}i=B.f.mE(i,b)
k=A.ba(2,null,!1,t.X)
k[1]=j
return new A.m6(1<<(i&31)>>>0,k).ik(0,b,c,d,e)},
nY(a,b,c,d){var s=this.H2(c)
return s<0?null:this.b[s+1]},
H2(a){var s,r,q=this.b,p=q.length
for(s=J.hn(a),r=0;r<p;r+=2)if(s.k(a,q[r]))return r
return-1}}
A.dy.prototype={
F(){return"TargetPlatform."+this.b}}
A.aay.prototype={
dA(a,b){var s,r,q=this
if(q.b===q.a.length)q.a11()
s=q.a
r=q.b
s[r]=b
q.b=r+1},
kK(a){var s=this,r=a.length,q=s.b+r
if(q>=s.a.length)s.yS(q)
B.G.co(s.a,s.b,q,a)
s.b+=r},
oZ(a,b,c){var s=this,r=c==null?s.e.length:c,q=s.b+(r-b)
if(q>=s.a.length)s.yS(q)
B.G.co(s.a,s.b,q,a)
s.b=q},
a1F(a){return this.oZ(a,0,null)},
yS(a){var s=this.a,r=s.length,q=a==null?0:a,p=Math.max(q,r*2),o=new Uint8Array(p)
B.G.co(o,0,r,s)
this.a=o},
a11(){return this.yS(null)},
hR(a){var s=B.f.cG(this.b,a)
if(s!==0)this.oZ($.avp(),0,a-s)},
jO(){var s,r=this
if(r.c)throw A.c(A.a_("done() must not be called more than once on the same "+A.t(r).i(0)+"."))
s=A.iH(r.a.buffer,0,r.b)
r.a=new Uint8Array(0)
r.c=!0
return s}}
A.xy.prototype={
lQ(a){return this.a.getUint8(this.b++)},
we(a){var s=this.b,r=$.cV()
B.h2.Dk(this.a,s,r)},
lR(a){var s=this.a,r=A.d5(s.buffer,s.byteOffset+this.b,a)
this.b+=a
return r},
wf(a){var s
this.hR(8)
s=this.a
B.yo.Kw(s.buffer,s.byteOffset+this.b,a)},
hR(a){var s=this.b,r=B.f.cG(s,a)
if(r!==0)this.b=s+(a-r)}}
A.hT.prototype={
gt(a){var s=this
return A.S(s.b,s.d,s.f,s.r,s.w,s.x,s.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.t(s))return!1
return b instanceof A.hT&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.a===s.a},
i(a){var s=this
return"StackFrame(#"+s.b+", "+s.c+":"+s.d+"/"+s.e+":"+s.f+":"+s.r+", className: "+s.w+", method: "+s.x+")"}}
A.a8r.prototype={
$1(a){return a.length!==0},
$S:25}
A.by.prototype={
mQ(a,b){return new A.a5($.ab,this.$ti.h("a5<1>"))},
jI(a){return this.mQ(a,null)},
dK(a,b,c){var s=a.$1(this.a)
if(c.h("a4<0>").b(s))return s
return new A.by(s,c.h("by<0>"))},
aH(a,b){return this.dK(a,null,b)},
h5(a){var s,r,q,p,o,n=this
try{s=a.$0()
if(t._.b(s)){p=s.aH(new A.a8W(n),n.$ti.c)
return p}return n}catch(o){r=A.a7(o)
q=A.ar(o)
p=A.aku(r,q,n.$ti.c)
return p}},
$ia4:1}
A.a8W.prototype={
$1(a){return this.a.a},
$S(){return this.a.$ti.h("1(@)")}}
A.FO.prototype={
F(){return"GestureDisposition."+this.b}}
A.FN.prototype={}
A.rB.prototype={
i(a){var s=this,r=s.a
r=r.length===0?""+"<empty>":""+new A.ae(r,new A.ad2(s),A.a6(r).h("ae<1,l>")).bd(0,", ")
if(s.b)r+=" [open]"
if(s.c)r+=" [held]"
if(s.d)r+=" [hasPendingSweep]"
return r.charCodeAt(0)==0?r:r}}
A.ad2.prototype={
$1(a){if(a===this.a.e)return a.i(0)+" (eager winner)"
return a.i(0)},
$S:130}
A.a_m.prototype={
Ka(a,b,c){this.a.br(0,b,new A.a_o(this,b)).a.push(c)
return new A.FN(this,b,c)},
a4o(a,b){var s=this.a.j(0,b)
if(s==null)return
s.b=!1
this.Ju(b,s)},
EI(a){var s,r=this.a,q=r.j(0,a)
if(q==null)return
if(q.c){q.d=!0
return}r.v(0,a)
r=q.a
if(r.length!==0){B.b.gI(r).hU(a)
for(s=1;s<r.length;++s)r[s].j9(a)}},
a7w(a){var s=this.a.j(0,a)
if(s==null)return
s.c=!0},
a9G(a,b){var s=this.a.j(0,b)
if(s==null)return
s.c=!1
if(s.d)this.EI(b)},
oY(a,b,c){var s=this.a.j(0,a)
if(s==null)return
if(c===B.ak){B.b.v(s.a,b)
b.j9(a)
if(!s.b)this.Ju(a,s)}else if(s.b){if(s.e==null)s.e=b}else this.Ip(a,s,b)},
Ju(a,b){var s=b.a.length
if(s===1)A.da(new A.a_n(this,a,b))
else if(s===0)this.a.v(0,a)
else{s=b.e
if(s!=null)this.Ip(a,b,s)}},
a13(a,b){var s=this.a
if(!s.a1(0,a))return
s.v(0,a)
B.b.gI(b.a).hU(a)},
Ip(a,b,c){var s,r,q,p
this.a.v(0,a)
for(s=b.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.O)(s),++q){p=s[q]
if(p!==c)p.j9(a)}c.hU(a)}}
A.a_o.prototype={
$0(){return new A.rB(A.a([],t.ia))},
$S:131}
A.a_n.prototype={
$0(){return this.a.a13(this.b,this.c)},
$S:0}
A.afm.prototype={
fo(a){var s,r,q,p,o,n=this
for(s=n.a,r=s.gaF(s),q=A.n(r),q=q.h("@<1>").P(q.z[1]),r=new A.bG(J.aj(r.a),r.b,q.h("bG<1,2>")),p=n.r,q=q.z[1];r.p();){o=r.a;(o==null?q.a(o):o).aaV(0,p)}s.M(0)
n.c=B.w
s=n.y
if(s!=null)s.aA(0)}}
A.pO.prototype={
YM(a){var s,r,q,p,o=this
try{o.bq$.K(0,A.aBd(a.a,o.gWu()))
if(o.c<=0)o.xW()}catch(q){s=A.a7(q)
r=A.ar(q)
p=A.b7("while handling a pointer data packet")
A.cE(new A.bq(s,r,"gestures library",p,null,!1))}},
Wv(a){var s
if($.aP().e.j(0,a)==null)s=null
else{s=$.bz().d
if(s==null){s=self.window.devicePixelRatio
if(s===0)s=1}}return s},
a47(a){var s=this.bq$
if(s.b===s.c&&this.c<=0)A.da(this.gXm())
s.u_(A.aq1(0,0,0,0,0,B.e3,!1,0,a,B.j,1,1,0,0,0,0,0,0,B.w,0))},
xW(){for(var s=this.bq$;!s.gS(s);)this.B6(s.nN())},
B6(a){this.gIj().fo(0)
this.GV(a)},
GV(a){var s,r,q=this,p=!t.qi.b(a)
if(!p||t.zs.b(a)||t.hV.b(a)||t.EL.b(a)){s=A.akw()
q.v2(s,a.gbF(a),a.gnX())
if(!p||t.EL.b(a))q.ck$.m(0,a.gbR(),s)
p=s}else if(t.Cs.b(a)||t.AJ.b(a)||t.zv.b(a)){s=q.ck$.v(0,a.gbR())
p=s}else p=a.guE()||t.eB.b(a)?q.ck$.j(0,a.gbR()):null
if(p!=null||t.ye.b(a)||t.x.b(a)){r=q.ay$
r.toString
r.aav(a,t.f2.b(a)?null:p)
q.Ra(0,a,p)}},
v2(a,b,c){a.B(0,new A.fY(this,t.Cq))},
a5D(a,b,c){var s,r,q,p,o,n,m,l,k,j,i="gesture library"
if(c==null){try{this.bj$.Oz(b)}catch(p){s=A.a7(p)
r=A.ar(p)
A.cE(A.azG(A.b7("while dispatching a non-hit-tested pointer event"),b,s,null,new A.a_p(b),i,r))}return}for(n=c.a,m=n.length,l=0;l<n.length;n.length===m||(0,A.O)(n),++l){q=n[l]
try{q.a.iU(b.aI(q.b),q)}catch(s){p=A.a7(s)
o=A.ar(s)
k=A.b7("while dispatching a pointer event")
j=$.hp()
if(j!=null)j.$1(new A.vp(p,o,i,k,new A.a_q(b,q),!1))}}},
iU(a,b){var s=this
s.bj$.Oz(a)
if(t.qi.b(a)||t.EL.b(a))s.ca$.a4o(0,a.gbR())
else if(t.Cs.b(a)||t.zv.b(a))s.ca$.EI(a.gbR())
else if(t.zs.b(a))s.c5$.Z(a)},
Z1(){if(this.c<=0)this.gIj().fo(0)},
gIj(){var s=this,r=s.dF$
if(r===$){$.jh()
r!==$&&A.aK()
r=s.dF$=new A.afm(A.C(t.S,t.d0),B.w,new A.iY(),B.w,B.w,s.gYP(),s.gZ0(),B.Hw)}return r},
$iao:1}
A.a_p.prototype={
$0(){var s=null
return A.a([A.ip("Event",this.a,!0,B.aU,s,!1,s,s,B.ar,s,!1,!0,!0,B.b8,s,t.cL)],t.p)},
$S:11}
A.a_q.prototype={
$0(){var s=null
return A.a([A.ip("Event",this.a,!0,B.aU,s,!1,s,s,B.ar,s,!1,!0,!0,B.b8,s,t.cL),A.ip("Target",this.b.a,!0,B.aU,s,!1,s,s,B.ar,s,!1,!0,!0,B.b8,s,t.kZ)],t.p)},
$S:11}
A.vp.prototype={}
A.a4m.prototype={
$1(a){return a.f!==B.Xh},
$S:135}
A.a4n.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a.$1(0)
if(j==null)return null
s=new A.r(a.x,a.y).eQ(0,j)
r=new A.r(a.z,a.Q).eQ(0,j)
q=a.dy/j
p=a.dx/j
o=a.fr/j
n=a.fx/j
m=a.c
l=a.e
k=a.f
switch((k==null?B.cV:k).a){case 0:switch(a.d.a){case 1:return A.aBa(a.r,a.cx,a.cy,0,l,!1,a.fy,s,a.CW,a.ch,n,o,a.go,m,0)
case 3:return A.aBf(a.as,r,a.r,a.cx,a.cy,0,l,!1,a.fy,s,a.CW,a.ch,p,n,o,q,a.db,a.ax,a.go,m,0)
case 4:return A.aBb(A.at5(a.as,l),a.r,a.cy,0,l,!1,a.fy,a.w,s,a.ay,a.CW,a.ch,p,n,o,q,a.db,a.go,m,0)
case 5:return A.aBg(A.at5(a.as,l),r,a.r,a.cy,0,l,!1,a.fy,a.id,a.w,s,a.ay,a.CW,a.ch,p,n,o,q,a.db,a.ax,a.go,m,0)
case 6:return A.aBo(a.as,a.r,a.cx,a.cy,0,l,!1,a.fy,a.w,s,a.ay,a.CW,a.ch,p,n,o,q,a.db,a.go,m,0)
case 0:return A.aq1(a.as,a.r,a.cx,a.cy,0,l,!1,a.fy,a.w,s,a.CW,a.ch,p,n,o,q,a.db,a.go,m,0)
case 2:return A.aBk(a.r,a.cy,0,l,!1,s,a.CW,a.ch,n,o,m,0)
case 7:return A.aBi(a.r,0,a.w,s,a.ax,m,0)
case 8:return A.aBj(a.r,0,new A.r(0,0).eQ(0,j),new A.r(0,0).eQ(0,j),a.w,s,0,a.p2,a.ax,m,0)
case 9:return A.aBh(a.r,0,a.w,s,a.ax,m,0)}break
case 1:k=a.k1
if(!isFinite(k)||!isFinite(a.k2)||j<=0)return null
return A.aBm(a.r,0,l,s,new A.r(k,a.k2).eQ(0,j),m,0)
case 2:return A.aBn(a.r,0,l,s,m,0)
case 3:return A.aBl(a.r,0,l,s,a.p2,m,0)
case 4:throw A.c(A.a_("Unreachable"))}},
$S:136}
A.aR.prototype={
gdn(){return this.r},
gNd(){return this.w},
gnX(){return this.a},
ghE(a){return this.c},
gbR(){return this.d},
gcf(a){return this.e},
giK(a){return this.f},
gbF(a){return this.r},
gpJ(){return this.w},
gd0(a){return this.x},
guE(){return this.y},
gqC(){return this.z},
gNP(a){return this.Q},
gvO(){return this.as},
gqL(){return this.at},
gcR(){return this.ax},
gAA(){return this.ay},
gA(a){return this.ch},
gCw(){return this.CW},
gCz(){return this.cx},
gCy(){return this.cy},
gCx(){return this.db},
gnF(a){return this.dx},
gCT(){return this.dy},
gon(){return this.fx},
gbv(a){return this.fy}}
A.d8.prototype={$iaR:1}
A.MD.prototype={$iaR:1}
A.T5.prototype={
ghE(a){return this.gbe().c},
gbR(){return this.gbe().d},
gcf(a){return this.gbe().e},
giK(a){return this.gbe().f},
gbF(a){return this.gbe().r},
gpJ(){return this.gbe().w},
gd0(a){return this.gbe().x},
guE(){return this.gbe().y},
gqC(){this.gbe()
return!1},
gNP(a){return this.gbe().Q},
gvO(){return this.gbe().as},
gqL(){return this.gbe().at},
gcR(){return this.gbe().ax},
gAA(){return this.gbe().ay},
gA(a){return this.gbe().ch},
gCw(){return this.gbe().CW},
gCz(){return this.gbe().cx},
gCy(){return this.gbe().cy},
gCx(){return this.gbe().db},
gnF(a){return this.gbe().dx},
gCT(){return this.gbe().dy},
gon(){return this.gbe().fx},
gdn(){var s,r=this,q=r.a
if(q===$){s=A.a4p(r.gbv(r),r.gbe().r)
r.a!==$&&A.aK()
r.a=s
q=s}return q},
gNd(){var s,r,q,p,o=this,n=o.b
if(n===$){s=o.gbv(o)
r=o.gbe()
q=o.gbe()
p=A.a4o(s,o.gdn(),r.w,q.r)
o.b!==$&&A.aK()
o.b=p
n=p}return n},
gnX(){return this.gbe().a}}
A.Nl.prototype={}
A.nG.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.T1(this,a)}}
A.T1.prototype={
aI(a){return this.c.aI(a)},
$inG:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.Nv.prototype={}
A.nH.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.Tc(this,a)}}
A.Tc.prototype={
aI(a){return this.c.aI(a)},
$inH:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.Nq.prototype={}
A.iP.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.T7(this,a)}}
A.T7.prototype={
aI(a){return this.c.aI(a)},
$iiP:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.No.prototype={}
A.lC.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.T4(this,a)}}
A.T4.prototype={
aI(a){return this.c.aI(a)},
$ilC:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.Np.prototype={}
A.iO.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.T6(this,a)}}
A.T6.prototype={
aI(a){return this.c.aI(a)},
$iiO:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.Nn.prototype={}
A.iN.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.T3(this,a)}}
A.T3.prototype={
aI(a){return this.c.aI(a)},
$iiN:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.Nr.prototype={}
A.lD.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.T8(this,a)}}
A.T8.prototype={
aI(a){return this.c.aI(a)},
$ilD:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.Nz.prototype={}
A.lG.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.Tg(this,a)}}
A.Tg.prototype={
aI(a){return this.c.aI(a)},
$ilG:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.dZ.prototype={}
A.Nx.prototype={}
A.nI.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.Te(this,a)},
gkE(){return this.H}}
A.Te.prototype={
gkE(){return this.c.H},
aI(a){return this.c.aI(a)},
$idZ:1,
$inI:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.Ny.prototype={}
A.nJ.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.Tf(this,a)}}
A.Tf.prototype={
aI(a){return this.c.aI(a)},
$idZ:1,
$inJ:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.Nw.prototype={}
A.JS.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.Td(this,a)}}
A.Td.prototype={
aI(a){return this.c.aI(a)},
$idZ:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.Nt.prototype={}
A.iQ.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.Ta(this,a)}}
A.Ta.prototype={
aI(a){return this.c.aI(a)},
$iiQ:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.Nu.prototype={}
A.lF.prototype={
gBC(){return this.id},
gNe(){return this.k1},
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.Tb(this,a)},
gCn(a){return this.id},
gNM(){return this.k1}}
A.Tb.prototype={
gCn(a){return this.e.id},
gBC(){var s,r=this,q=r.c
if(q===$){s=A.a4p(r.f,r.e.id)
r.c!==$&&A.aK()
r.c=s
q=s}return q},
gNM(){return this.e.k1},
gNe(){var s,r,q=this,p=q.d
if(p===$){s=q.e
r=A.a4o(q.f,q.gBC(),s.k1,s.id)
q.d!==$&&A.aK()
q.d=r
p=r}return p},
aI(a){return this.e.aI(a)},
$ilF:1,
gbe(){return this.e},
gbv(a){return this.f}}
A.Ns.prototype={}
A.lE.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.T9(this,a)}}
A.T9.prototype={
aI(a){return this.c.aI(a)},
$ilE:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.Nm.prototype={}
A.lB.prototype={
aI(a){if(a==null||a.k(0,this.fy))return this
return new A.T2(this,a)}}
A.T2.prototype={
aI(a){return this.c.aI(a)},
$ilB:1,
gbe(){return this.c},
gbv(a){return this.d}}
A.Qh.prototype={}
A.Qi.prototype={}
A.Qj.prototype={}
A.Qk.prototype={}
A.Ql.prototype={}
A.Qm.prototype={}
A.Qn.prototype={}
A.Qo.prototype={}
A.Qp.prototype={}
A.Qq.prototype={}
A.Qr.prototype={}
A.Qs.prototype={}
A.Qt.prototype={}
A.Qu.prototype={}
A.Qv.prototype={}
A.Qw.prototype={}
A.Qx.prototype={}
A.Qy.prototype={}
A.Qz.prototype={}
A.QA.prototype={}
A.QB.prototype={}
A.QC.prototype={}
A.QD.prototype={}
A.QE.prototype={}
A.QF.prototype={}
A.QG.prototype={}
A.QH.prototype={}
A.QI.prototype={}
A.QJ.prototype={}
A.QK.prototype={}
A.QL.prototype={}
A.Uf.prototype={}
A.Ug.prototype={}
A.Uh.prototype={}
A.Ui.prototype={}
A.Uj.prototype={}
A.Uk.prototype={}
A.Ul.prototype={}
A.Um.prototype={}
A.Un.prototype={}
A.Uo.prototype={}
A.Up.prototype={}
A.Uq.prototype={}
A.Ur.prototype={}
A.Us.prototype={}
A.Ut.prototype={}
A.Uu.prototype={}
A.Uv.prototype={}
A.EP.prototype={
gt(a){return A.S(this.a,23,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.t(this))return!1
return b instanceof A.EP&&b.a==this.a},
i(a){return"DeviceGestureSettings(touchSlop: "+A.h(this.a)+")"}}
A.fY.prototype={
i(a){return"<optimized out>#"+A.bd(this)+"("+this.a.i(0)+")"}}
A.td.prototype={}
A.AI.prototype={
cM(a,b){return this.a.vw(b)}}
A.rR.prototype={
cM(a,b){var s,r,q,p,o=new Float64Array(16),n=new A.bw(o)
n.b6(b)
s=this.a
r=s.a
q=s.b
s=o[0]
p=o[3]
o[0]=s+r*p
o[1]=o[1]+q*p
o[2]=o[2]+0*p
o[3]=p
p=o[4]
s=o[7]
o[4]=p+r*s
o[5]=o[5]+q*s
o[6]=o[6]+0*s
o[7]=s
s=o[8]
p=o[11]
o[8]=s+r*p
o[9]=o[9]+q*p
o[10]=o[10]+0*p
o[11]=p
p=o[12]
s=o[15]
o[12]=p+r*s
o[13]=o[13]+q*s
o[14]=o[14]+0*s
o[15]=s
return n}}
A.iy.prototype={
XG(){var s,r,q,p,o=this.c
if(o.length===0)return
s=this.b
r=B.b.gO(s)
for(q=o.length,p=0;p<o.length;o.length===q||(0,A.O)(o),++p){r=o[p].cM(0,r)
s.push(r)}B.b.M(o)},
B(a,b){this.XG()
b.b=B.b.gO(this.b)
this.a.push(b)},
vM(){var s=this.c
if(s.length!==0)s.pop()
else this.b.pop()},
i(a){var s=this.a
return"HitTestResult("+(s.length===0?"<empty path>":B.b.bd(s,", "))+")"}}
A.a4q.prototype={
Kh(a,b,c){J.fL(this.a.br(0,a,new A.a4s()),b,c)},
Oh(a,b){var s,r=this.a,q=r.j(0,a)
q.toString
s=J.bR(q)
s.v(q,b)
if(s.gS(q))r.v(0,a)},
Wz(a,b,c){var s,r,q,p
try{b.$1(a.aI(c))}catch(q){s=A.a7(q)
r=A.ar(q)
p=A.b7("while routing a pointer event")
A.cE(new A.bq(s,r,"gesture library",p,null,!1))}},
Oz(a){var s=this,r=s.a.j(0,a.gbR()),q=s.b,p=t.yd,o=t.rY,n=A.q6(q,p,o)
if(r!=null)s.G2(a,r,A.q6(r,p,o))
s.G2(a,q,n)},
G2(a,b,c){c.U(0,new A.a4r(this,b,a))}}
A.a4s.prototype={
$0(){return A.C(t.yd,t.rY)},
$S:137}
A.a4r.prototype={
$2(a,b){if(J.mx(this.b,a))this.a.Wz(this.c,a,b)},
$S:138}
A.a4t.prototype={
Oa(a,b,c){if(this.a!=null)return
this.b=b
this.a=c},
Z(a){var s,r,q,p,o=this,n=o.a
if(n==null)return
try{q=o.b
q.toString
n.$1(q)}catch(p){s=A.a7(p)
r=A.ar(p)
n=A.b7("while resolving a PointerSignalEvent")
A.cE(new A.bq(s,r,"gesture library",n,null,!1))}o.b=o.a=null}}
A.Dz.prototype={
F(){return"Axis."+this.b}}
A.xb.prototype={
MT(a,b,c,d){var s=$.am(),r=a.a
r.toString
return s.iW(r,!1,c,d)},
a7Q(a){return this.MT(a,!1,null,null)},
MU(a,b){return A.UQ(a,b)},
a7T(a){return this.MU(a,null)},
$idN:1}
A.SA.prototype={
am(){var s,r,q
for(s=this.a,s=A.e3(s,s.r,A.n(s).c),r=s.$ti.c;s.p();){q=s.d;(q==null?r.a(q):q).$0()}},
a0(a,b){this.a.B(0,b)},
L(a,b){this.a.v(0,b)}}
A.X0.prototype={
xp(a,b,c,d){var s=this
s.gbL(s).c1(0)
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gbL(s).fl(c,$.am().b9())
break}d.$0()
if(b===B.cy)s.gbL(s).bu(0)
s.gbL(s).bu(0)},
a4j(a,b,c,d){this.xp(new A.X1(this,a),b,c,d)},
a4l(a,b,c,d){this.xp(new A.X2(this,a),b,c,d)},
a4n(a,b,c,d){this.xp(new A.X3(this,a),b,c,d)}}
A.X1.prototype={
$1(a){var s=this.a
return s.gbL(s).ua(0,this.b,a)},
$S:27}
A.X2.prototype={
$1(a){var s=this.a
return s.gbL(s).uc(this.b,a)},
$S:27}
A.X3.prototype={
$1(a){var s=this.a
return s.gbL(s).KV(this.b,a)},
$S:27}
A.cD.prototype={
gcK(){var s=this
return s.gdw(s)+s.gdz(s)+s.geA(s)+s.gex()},
a3y(a){var s=this
switch(a.a){case 0:return s.gcK()
case 1:return s.gbm(s)+s.gbo(s)}},
B(a,b){var s=this
return new A.mb(s.gdw(s)+b.gdw(b),s.gdz(s)+b.gdz(b),s.geA(s)+b.geA(b),s.gex()+b.gex(),s.gbm(s)+b.gbm(b),s.gbo(s)+b.gbo(b))},
iD(a,b,c){var s=this
return new A.mb(A.Q(s.gdw(s),b.a,c.a),A.Q(s.gdz(s),b.c,c.b),A.Q(s.geA(s),0,c.c),A.Q(s.gex(),0,c.d),A.Q(s.gbm(s),b.b,c.e),A.Q(s.gbo(s),b.d,c.f))},
i(a){var s=this
if(s.geA(s)===0&&s.gex()===0){if(s.gdw(s)===0&&s.gdz(s)===0&&s.gbm(s)===0&&s.gbo(s)===0)return"EdgeInsets.zero"
if(s.gdw(s)===s.gdz(s)&&s.gdz(s)===s.gbm(s)&&s.gbm(s)===s.gbo(s))return"EdgeInsets.all("+B.c.N(s.gdw(s),1)+")"
return"EdgeInsets("+B.c.N(s.gdw(s),1)+", "+B.c.N(s.gbm(s),1)+", "+B.c.N(s.gdz(s),1)+", "+B.c.N(s.gbo(s),1)+")"}if(s.gdw(s)===0&&s.gdz(s)===0)return"EdgeInsetsDirectional("+B.c.N(s.geA(s),1)+", "+B.c.N(s.gbm(s),1)+", "+B.c.N(s.gex(),1)+", "+B.c.N(s.gbo(s),1)+")"
return"EdgeInsets("+B.c.N(s.gdw(s),1)+", "+B.c.N(s.gbm(s),1)+", "+B.c.N(s.gdz(s),1)+", "+B.c.N(s.gbo(s),1)+") + EdgeInsetsDirectional("+B.c.N(s.geA(s),1)+", 0.0, "+B.c.N(s.gex(),1)+", 0.0)"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.cD&&b.gdw(b)===s.gdw(s)&&b.gdz(b)===s.gdz(s)&&b.geA(b)===s.geA(s)&&b.gex()===s.gex()&&b.gbm(b)===s.gbm(s)&&b.gbo(b)===s.gbo(s)},
gt(a){var s=this
return A.S(s.gdw(s),s.gdz(s),s.geA(s),s.gex(),s.gbm(s),s.gbo(s),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.aX.prototype={
gdw(a){return this.a},
gbm(a){return this.b},
gdz(a){return this.c},
gbo(a){return this.d},
geA(a){return 0},
gex(){return 0},
B(a,b){if(b instanceof A.aX)return this.X(0,b)
return this.Ea(0,b)},
iD(a,b,c){var s=this
return new A.aX(A.Q(s.a,b.a,c.a),A.Q(s.b,b.b,c.e),A.Q(s.c,b.c,c.b),A.Q(s.d,b.d,c.f))},
a5(a,b){var s=this
return new A.aX(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
X(a,b){var s=this
return new A.aX(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a4(a,b){var s=this
return new A.aX(s.a*b,s.b*b,s.c*b,s.d*b)},
Z(a){return this},
jL(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.aX(r,q,p,a==null?s.d:a)},
A4(a){return this.jL(a,null,null,null)},
a4Z(a,b){return this.jL(a,null,null,b)},
a51(a,b){return this.jL(null,a,b,null)}}
A.mb.prototype={
a4(a,b){var s=this
return new A.mb(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
Z(a){var s=this
switch(a.a){case 0:return new A.aX(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.aX(s.c+s.a,s.e,s.d+s.b,s.f)}},
gdw(a){return this.a},
gdz(a){return this.b},
geA(a){return this.c},
gex(){return this.d},
gbm(a){return this.e},
gbo(a){return this.f}}
A.a0v.prototype={
M(a){var s,r,q,p
for(s=this.b,r=s.gaF(s),q=A.n(r),q=q.h("@<1>").P(q.z[1]),r=new A.bG(J.aj(r.a),r.b,q.h("bG<1,2>")),q=q.z[1];r.p();){p=r.a;(p==null?q.a(p):p).l()}s.M(0)
for(s=this.a,r=s.gaF(s),q=A.n(r),q=q.h("@<1>").P(q.z[1]),r=new A.bG(J.aj(r.a),r.b,q.h("bG<1,2>")),q=q.z[1];r.p();){p=r.a
if(p==null)p=q.a(p)
p.a.L(0,p.b)}s.M(0)
this.f=0},
na(a){var s,r,q,p=this,o=p.c.v(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
s.Of(r)
o.EF()}q=p.a.v(0,a)
if(q!=null){q.a.L(0,q.b)
return!0}o=p.b.v(0,a)
if(o!=null){s=p.f
r=o.b
r.toString
p.f=s-r
o.l()
return!0}return!1},
Jr(a,b,c){var s,r=this,q=b.b
if(q!=null&&q<=104857600&&!0){s=r.f
q.toString
r.f=s+q
r.b.m(0,a,b)
r.Vr(c)}else b.l()},
za(a,b,c){var s=this.c.br(0,a,new A.a0y(this,b,a))
if(s.b==null)s.b=c},
O3(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=null,j={},i=l.a,h=i.j(0,b),g=h==null?k:h.a
j.a=g
if(g!=null)return g
h=l.b
q=h.v(0,b)
if(q!=null){j=q.a
l.za(b,j,q.b)
h.m(0,b,q)
return j}p=l.c.j(0,b)
if(p!=null){j=p.a
l.Jr(b,new A.zB(j,p.b,j.nx()),k)
return j}try{g=j.a=c.$0()
l.za(b,g,k)
h=g}catch(o){s=A.a7(o)
r=A.ar(o)
d.$2(s,r)
return k}j.b=!1
n=A.b1("pendingImage")
m=new A.es(new A.a0z(j,l,b,!0,k,n),k,k)
n.b=new A.Qa(h,m)
i.m(0,b,n.aq())
j.a.a0(0,m)
return j.a},
a1(a,b){return this.a.j(0,b)!=null||this.b.j(0,b)!=null},
Vr(a){var s,r,q,p,o,n=this,m=n.b,l=A.n(m).h("b0<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.b0(m,l)
r=s.gR(s)
if(!r.p())A.Y(A.bF())
q=r.gD(r)
p=m.j(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.l()
m.v(0,q)}}}
A.a0y.prototype={
$0(){return A.aDR(this.b,new A.a0x(this.a,this.c))},
$S:141}
A.a0x.prototype={
$0(){this.a.c.v(0,this.b)},
$S:0}
A.a0z.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.gQr()
a.l()}else s=null
r=n.a
q=r.a
p=new A.zB(q,s,q.nx())
q=n.b
o=n.c
q.za(o,r.a,s)
if(n.d)q.Jr(o,p,n.e)
else p.l()
q.a.v(0,o)
if(!r.b){q=n.f.aq()
q.a.L(0,q.b)}r.b=!0},
$S:142}
A.Nd.prototype={
l(){$.bE.rx$.push(new A.abK(this))}}
A.abK.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.l()
s.c=null},
$S:4}
A.zB.prototype={}
A.rL.prototype={
UC(a,b,c){var s=new A.ae_(this,b)
this.d=s
a.a3n(s)},
i(a){return"<optimized out>#"+A.bd(this)}}
A.ae_.prototype={
$0(){var s,r
this.b.$0()
s=this.a
r=s.d
r===$&&A.b()
s.a.Of(r)
s.EF()},
$S:0}
A.Qa.prototype={}
A.es.prototype={
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.t(s))return!1
return b instanceof A.es&&J.e(b.a,s.a)&&J.e(b.b,s.b)&&J.e(b.c,s.c)},
a93(a,b){return this.a.$2(a,b)}}
A.j8.prototype={
aQ(a,b){return b*this.a},
k(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.j8&&b.a===this.a},
gt(a){return B.c.gt(this.a)},
i(a){var s=this.a
return s===1?"no scaling":"linear ("+A.h(s)+"x)"},
$iz3:1}
A.qC.prototype={
gvJ(){var s,r=this,q=r.ch$
if(q===$){s=A.aB5(new A.a69(r),new A.a6a(r),new A.a6b(r))
q!==$&&A.aK()
r.ch$=s
q=s}return q},
a5f(a){var s,r=$.bz().d
if(r==null){s=self.window.devicePixelRatio
r=s===0?1:s}return new A.zj(a.go.gii().eQ(0,r),r)},
B3(){var s,r,q,p,o,n,m
for(s=this.cy$,s=s.gaF(s),r=A.n(s),r=r.h("@<1>").P(r.z[1]),s=new A.bG(J.aj(s.a),s.b,r.h("bG<1,2>")),r=r.z[1],q=!1;s.p();){p=s.a
if(p==null)p=r.a(p)
q=q||p.fr$!=null
o=p.go
n=$.bz().d
if(n==null){m=self.window.devicePixelRatio
n=m===0?1:m}m=o.x
if(m==null){m=o.r
m===$&&A.b()
m=o.x=m.la()}p.suf(new A.zj(new A.W(m.a/n,m.b/n),n))}if(q)this.Q_()},
Ba(){},
B5(){},
a7F(){var s,r=this.ay$
if(r!=null){r.fy$=$.aU()
r.fx$=0}r=t.S
s=$.aU()
this.ay$=new A.IM(new A.a68(this),new A.a2E(B.hu,A.C(r,t.Df)),A.C(r,t.eg),s)},
Zi(a){B.VP.kR("first-frame",null,!1,t.H)},
YI(a){this.AE()
this.a1n()},
a1n(){$.bE.rx$.push(new A.a67(this))},
Km(){--this.dx$
if(!this.dy$)this.DC()},
AE(){var s,r,q=this,p=q.cx$
p===$&&A.b()
p.Mb()
q.cx$.Ma()
q.cx$.Mc()
if(q.dy$||q.dx$===0){for(p=q.cy$,p=p.gaF(p),s=A.n(p),s=s.h("@<1>").P(s.z[1]),p=new A.bG(J.aj(p.a),p.b,s.h("bG<1,2>")),s=s.z[1];p.p();){r=p.a;(r==null?s.a(r):r).a4A()}q.cx$.Md()
q.dy$=!0}},
$iao:1,
$idN:1}
A.a69.prototype={
$0(){var s=this.a.gvJ().e
if(s!=null)s.rr()},
$S:0}
A.a6b.prototype={
$1(a){var s
if(this.a.gvJ().e!=null){s=$.dr;(s==null?$.dr=A.jA():s).aau(a)}},
$S:66}
A.a6a.prototype={
$0(){var s=this.a.gvJ().e
if(s!=null)s.l6()},
$S:0}
A.a68.prototype={
$2(a,b){var s=A.akw()
this.a.v2(s,a,b)
return s},
$S:145}
A.a67.prototype={
$1(a){this.a.ay$.aaq()},
$S:4}
A.N2.prototype={}
A.NR.prototype={}
A.Rs.prototype={
Ct(){if(this.H)return
this.Sb()
this.H=!0},
rr(){this.l6()
this.S4()},
l(){this.saX(null)}}
A.aJ.prototype={
A7(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aJ(r,q,p,a==null?s.d:a)},
a53(a,b){return this.A7(null,a,null,b)},
a52(a,b){return this.A7(a,null,b,null)},
a54(a,b){return this.A7(null,null,a,b)},
Lt(a){var s=this,r=a.gcK(),q=a.gbm(a)+a.gbo(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aJ(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
pW(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aJ(A.Q(s.a,r,q),A.Q(s.b,r,q),A.Q(s.c,p,o),A.Q(s.d,p,o))},
CS(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.Q(b,o,q.b),m=q.b
p=p?m:A.Q(b,o,m)
o=a==null
m=q.c
s=o?m:A.Q(a,m,q.d)
r=q.d
return new A.aJ(n,p,s,o?r:A.Q(a,m,r))},
CR(a){return this.CS(null,a)},
OC(a){return this.CS(a,null)},
bx(a){var s=this
return new A.W(A.Q(a.a,s.a,s.b),A.Q(a.b,s.c,s.d))},
a4E(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
if(m>=l&&n.c>=n.d)return new A.W(A.Q(0,m,l),A.Q(0,n.c,n.d))
s=a.a
r=a.b
q=s/r
if(s>l){r=l/q
s=l}p=n.d
if(r>p){s=p*q
r=p}if(s<m){r=m/q
s=m}o=n.c
if(r<o){s=o*q
r=o}return new A.W(A.Q(s,m,l),A.Q(r,o,p))},
gN7(){var s=this
return s.a>=s.b&&s.c>=s.d},
a4(a,b){var s=this
return new A.aJ(s.a*b,s.b*b,s.c*b,s.d*b)},
ga89(){var s=this,r=s.a
if(r>=0)if(r<=s.b){r=s.c
r=r>=0&&r<=s.d}else r=!1
else r=!1
return r},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.t(s))return!1
return b instanceof A.aJ&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r=this,q=r.ga89()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.W5()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.W5.prototype={
$3(a,b,c){if(a===b)return c+"="+B.c.N(a,1)
return B.c.N(a,1)+"<="+c+"<="+B.c.N(b,1)},
$S:146}
A.jn.prototype={
a3v(a,b,c){if(c!=null){c=A.IA(A.al_(c))
if(c==null)return!1}return this.zC(a,b,c)},
mL(a,b,c){var s,r=b==null,q=r?c:c.a5(0,b)
r=!r
if(r)this.c.push(new A.rR(new A.r(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.vM()
return s},
zC(a,b,c){var s,r=c==null,q=r?b:A.cH(c,b)
r=!r
if(r)this.c.push(new A.AI(c))
s=a.$2(this,q)
if(r)this.vM()
return s},
Kj(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.rR(new A.r(-b.a,-b.b)))
else{c.toString
c=A.IA(A.al_(c))
c.toString
r.c.push(new A.AI(c))}s=a.$1(r)
r.vM()
return s},
a3u(a,b){return this.Kj(a,null,b)},
a3t(a,b){return this.Kj(a,b,null)}}
A.p5.prototype={
i(a){return"<optimized out>#"+A.bd(this.a)+"@"+this.c.i(0)}}
A.e9.prototype={
i(a){return"offset="+this.a.i(0)}}
A.rI.prototype={
F(){return"_IntrinsicDimension."+this.b}}
A.Aq.prototype={
k(a,b){if(b==null)return!1
return b instanceof A.Aq&&b.a===this.a&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.G.prototype={
dL(a){if(!(a.b instanceof A.e9))a.b=new A.e9(B.j)},
aL(a,b,c){var s=this.fx
if(s==null)s=this.fx=A.C(t.oc,t.pR)
return s.br(0,new A.Aq(a,b),new A.a5f(c,b))},
b3(a){return 0},
b1(a){return 0},
b2(a){return 0},
b0(a){return 0},
kz(a){var s=this.fy
if(s==null)s=this.fy=A.C(t.np,t.DB)
return s.br(0,a,new A.a5h(this,a))},
cj(a){return B.Y},
gA(a){var s=this.id
return s==null?A.Y(A.a_("RenderBox was not laid out: "+A.t(this).i(0)+"#"+A.bd(this))):s},
gkF(){var s=this.gA(this)
return new A.D(0,0,0+s.a,0+s.b)},
Di(a,b){var s=null
try{s=this.ky(a)}finally{}if(s==null&&!b)return this.gA(this).b
return s},
ky(a){var s=this.k1
if(s==null)s=this.k1=A.C(t.g0,t.u6)
return s.br(0,a,new A.a5g(this,a))},
fL(a){return null},
ga2(){return t.np.a(A.A.prototype.ga2.call(this))},
VJ(){var s,r=this,q=r.k1,p=q==null
if(!(!p&&q.a!==0)){s=r.fx
if(!(s!=null&&s.a!==0)){s=r.fy
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.M(0)
q=r.fx
if(q!=null)q.M(0)
q=r.fy
if(q!=null)q.M(0)
return!0}return!1},
a6(){var s=this
if(s.VJ()&&s.d instanceof A.A){s.vp()
return}s.S3()},
cB(a,b){var s,r=this
if(r.id!=null)if(!a.k(0,t.np.a(A.A.prototype.ga2.call(r)))){s=r.k1
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k1
if(s!=null)s.M(0)}r.S2(a,b)},
i9(a){return this.cB(a,!1)},
qG(){this.id=this.cj(t.np.a(A.A.prototype.ga2.call(this)))},
bQ(){},
c6(a,b){var s=this
if(s.id.u(0,b))if(s.cU(a,b)||s.kd(b)){a.B(0,new A.p5(b,s))
return!0}return!1},
kd(a){return!1},
cU(a,b){return!1},
cP(a,b){var s,r=a.b
r.toString
s=t.Ch.a(r).a
b.aj(0,s.a,s.b)},
lT(a){var s,r,q,p,o,n=this.bz(0,null)
if(n.f8(n)===0)return B.j
s=new A.fC(new Float64Array(3))
s.lZ(0,0,1)
r=new A.fC(new Float64Array(3))
r.lZ(0,0,0)
q=n.vI(r)
r=new A.fC(new Float64Array(3))
r.lZ(0,0,1)
p=n.vI(r).a5(0,q)
r=new A.fC(new Float64Array(3))
r.lZ(a.a,a.b,0)
o=n.vI(r)
r=o.a5(0,p.PY(s.LI(o)/s.LI(p))).a
return new A.r(r[0],r[1])},
gig(){var s=this.gA(this)
return new A.D(0,0,0+s.a,0+s.b)},
iU(a,b){this.S1(a,b)}}
A.a5f.prototype={
$0(){return this.a.$1(this.b)},
$S:30}
A.a5h.prototype={
$0(){return this.a.cj(this.b)},
$S:149}
A.a5g.prototype={
$0(){return this.a.fL(this.b)},
$S:68}
A.xK.prototype={
Uv(a){var s,r,q,p,o=this
try{r=o.H
if(r!==""){q=$.auV()
s=$.am().um(q)
s.vS($.auW())
s.pj(r)
r=s.aO()
o.J!==$&&A.cq()
o.J=r}else{o.J!==$&&A.cq()
o.J=null}}catch(p){}},
b1(a){return 1e5},
b0(a){return 1e5},
gm3(){return!0},
kd(a){return!0},
cj(a){return a.bx(B.Z0)},
ao(a,b){var s,r,q,p,o,n,m,l,k,j=this
try{p=a.gbL(a)
o=j.gA(j)
n=b.a
m=b.b
l=$.am().b9()
l.sai(0,$.auU())
p.cz(new A.D(n,m,n+o.a,m+o.b),l)
p=j.J
p===$&&A.b()
if(p!=null){s=j.gA(j).a
r=0
q=0
if(s>328){s-=128
r+=64}p.i9(new A.lz(s))
o=j.gA(j)
if(o.b>96+p.gaS(p)+12)q+=96
o=a.gbL(a)
o.jP(p,b.X(0,new A.r(r,q)))}}catch(k){}}}
A.Zz.prototype={
F(){return"FlexFit."+this.b}}
A.qb.prototype={
F(){return"MainAxisAlignment."+this.b}}
A.mP.prototype={
F(){return"CrossAxisAlignment."+this.b}}
A.Di.prototype={}
A.q4.prototype={
zm(a){var s
this.b+=a
s=this.r
if(s!=null)s.zm(a)},
oB(a){var s,r,q=this.a
if(q.a===0)return
for(q=A.ad(q.gaF(q),!0,t.O),s=q.length,r=0;r<s;++r)q[r].$0()},
l(){var s=this.x
if(s!=null)s.l()
this.x=null},
ej(){if(this.w)return
this.w=!0},
si0(a){var s=this.x
if(s!=null)s.l()
this.x=a
s=this.r
if(s!=null&&!0)s.ej()},
w5(){this.w=this.w||!1},
ag(a){this.y=a},
a9(a){this.y=null},
hB(){},
hC(a){var s,r,q=this,p=q.r
if(p!=null){s=q.as
r=q.Q
if(s==null)p.ax=r
else s.Q=r
r=q.Q
if(r==null)p.ay=s
else r.as=s
q.Q=q.as=null
p.Gc(q)
q.e.saZ(0,null)}},
dG(a,b,c){return!1},
iT(a,b,c){return this.dG(a,b,c,t.K)},
M5(a,b,c){var s=A.a([],c.h("u<aJ_<0>>"))
this.iT(new A.Di(s,c.h("Di<0>")),b,!0)
return s.length===0?null:B.b.gI(s).gab0()},
UT(a){var s,r=this
if(!r.w&&r.x!=null){s=r.x
s.toString
a.Kg(s)
return}r.hW(a)
r.w=!1},
c7(){var s=this.R5()
return s+(this.y==null?" DETACHED":"")}}
A.Gr.prototype={
saZ(a,b){var s=this.a
if(b==s)return
if(s!=null)if(--s.f===0)s.l()
this.a=b
if(b!=null)++b.f},
i(a){var s=this.a
return"LayerHandle("+(s!=null?s.i(0):"DISPOSED")+")"}}
A.a3Y.prototype={
sNN(a){var s
this.ej()
s=this.ay
if(s!=null)s.l()
this.ay=a},
l(){this.sNN(null)
this.Eh()},
hW(a){var s=this.ay
s.toString
a.Ke(B.j,s,this.ch,this.CW)},
dG(a,b,c){return!1},
iT(a,b,c){return this.dG(a,b,c,t.K)}}
A.pj.prototype={
oB(a){var s
this.Ro(a)
if(!a)return
s=this.ax
for(;s!=null;){s.oB(!0)
s=s.Q}},
a3Z(a){var s=this
s.w5()
s.hW(a)
if(s.b>0)s.oB(!0)
s.w=!1
return a.aO()},
l(){this.CF()
this.a.M(0)
this.Eh()},
w5(){var s,r=this
r.Rr()
s=r.ax
for(;s!=null;){s.w5()
r.w=r.w||s.w
s=s.Q}},
dG(a,b,c){var s,r,q
for(s=this.ay,r=a.a;s!=null;s=s.as){if(s.iT(a,b,!0))return!0
q=r.length
if(q!==0)return!1}return!1},
iT(a,b,c){return this.dG(a,b,c,t.K)},
ag(a){var s
this.Rp(a)
s=this.ax
for(;s!=null;){s.ag(a)
s=s.Q}},
a9(a){var s
this.Rq(0)
s=this.ax
for(;s!=null;){s.a9(0)
s=s.Q}this.oB(!1)},
Kr(a,b){var s,r=this
r.ej()
s=b.b
if(s!==0)r.zm(s)
b.r=r
s=r.y
if(s!=null)b.ag(s)
r.qP(b)
s=b.as=r.ay
if(s!=null)s.Q=b
r.ay=b
if(r.ax==null)r.ax=b
b.e.saZ(0,b)},
hB(){var s,r,q=this.ax
for(;q!=null;){s=q.z
r=this.z
if(s<=r){q.z=r+1
q.hB()}q=q.Q}},
qP(a){var s=a.z,r=this.z
if(s<=r){a.z=r+1
a.hB()}},
Gc(a){var s
this.ej()
s=a.b
if(s!==0)this.zm(-s)
a.r=null
if(this.y!=null)a.a9(0)},
CF(){var s,r=this,q=r.ax
for(;q!=null;q=s){s=q.Q
q.Q=q.as=null
r.Gc(q)
q.e.saZ(0,null)}r.ay=r.ax=null},
hW(a){this.jF(a)},
jF(a){var s=this.ax
for(;s!=null;){s.UT(a)
s=s.Q}}}
A.hH.prototype={
slA(a,b){if(!b.k(0,this.k3))this.ej()
this.k3=b},
dG(a,b,c){return this.rF(a,b.a5(0,this.k3),!0)},
iT(a,b,c){return this.dG(a,b,c,t.K)},
hW(a){var s=this,r=s.k3
s.si0(a.Cu(r.a,r.b,t.cV.a(s.x)))
s.jF(a)
a.fi()}}
A.un.prototype={
dG(a,b,c){if(!this.k3.u(0,b))return!1
return this.rF(a,b,!0)},
iT(a,b,c){return this.dG(a,b,c,t.K)},
hW(a){var s=this,r=s.k3
r.toString
s.si0(a.NX(r,s.k4,t.CW.a(s.x)))
s.jF(a)
a.fi()}}
A.Eh.prototype={
dG(a,b,c){if(!this.k3.u(0,b))return!1
return this.rF(a,b,!0)},
iT(a,b,c){return this.dG(a,b,c,t.K)},
hW(a){var s=this,r=s.k3
r.toString
s.si0(a.NW(r,s.k4,t.cB.a(s.x)))
s.jF(a)
a.fi()}}
A.Ef.prototype={
dG(a,b,c){if(!this.k3.u(0,b))return!1
return this.rF(a,b,!0)},
iT(a,b,c){return this.dG(a,b,c,t.K)},
hW(a){var s=this,r=s.k3
r.toString
s.si0(a.NU(r,s.k4,t.xS.a(s.x)))
s.jF(a)
a.fi()}}
A.rc.prototype={
sbv(a,b){var s=this
if(b.k(0,s.av))return
s.av=b
s.an=!0
s.ej()},
hW(a){var s,r,q=this
q.by=q.av
if(!q.k3.k(0,B.j)){s=q.k3
s=A.wB(s.a,s.b,0)
r=q.by
r.toString
s.cM(0,r)
q.by=s}q.si0(a.O2(q.by.a,t.EA.a(q.x)))
q.jF(a)
a.fi()},
a2k(a){var s,r=this
if(r.an){s=r.av
s.toString
r.aB=A.IA(A.al_(s))
r.an=!1}s=r.aB
if(s==null)return null
return A.cH(s,a)},
dG(a,b,c){var s=this.a2k(b)
if(s==null)return!1
return this.RI(a,s,!0)},
iT(a,b,c){return this.dG(a,b,c,t.K)}}
A.x3.prototype={
sKo(a,b){var s=this,r=s.av
if(b!=r){if(b===255||r===255)s.si0(null)
s.av=b
s.ej()}},
hW(a){var s,r,q,p=this
if(p.ax==null){p.si0(null)
return}s=p.av
s.toString
r=p.k3
q=p.x
if(s<255)p.si0(a.O_(s,r,t.i6.a(q)))
else p.si0(a.Cu(r.a,r.b,t.cV.a(q)))
p.jF(a)
a.fi()}}
A.Pg.prototype={}
A.PM.prototype={
a9P(a){var s=this.a
this.a=a
return s},
i(a){var s="<optimized out>#",r=A.bd(this.b),q=this.a.a
return s+A.bd(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.PN.prototype={
giK(a){var s=this.c
return s.giK(s)}}
A.IM.prototype={
H0(a){var s,r,q,p,o,n,m=t.mC,l=A.lq(null,null,m,t.rA)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.O)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.m(0,o,n)}}return l},
Xc(a){var s,r,q=a.b,p=q.gbF(q)
q=a.b
s=q.giK(q)
r=a.b.gnX()
if(!this.c.a1(0,s))return A.lq(null,null,t.mC,t.rA)
return this.H0(this.a.$2(p,r))},
GR(a){var s,r
A.aAM(a)
s=a.b
r=A.n(s).h("b0<1>")
this.b.a6n(a.giK(a),a.d,A.wn(new A.b0(s,r),new A.a2I(),r.h("k.E"),t.oR))},
aav(a,b){var s,r,q,p,o,n=this,m={}
if(a.gcf(a)!==B.ci)return
if(t.zs.b(a))return
m.a=null
if(t.x.b(a))m.a=A.akw()
else{s=a.gnX()
m.a=b==null?n.a.$2(a.gbF(a),s):b}r=a.giK(a)
q=n.c
p=q.j(0,r)
if(!A.aAN(p,a))return
o=q.a
new A.a2L(m,n,p,a,r).$0()
if(o!==0!==(q.a!==0))n.am()},
aaq(){new A.a2J(this).$0()}}
A.a2I.prototype={
$1(a){return a.gLr(a)},
$S:151}
A.a2L.prototype={
$0(){var s=this
new A.a2K(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.a2K.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.c
if(l==null){s=n.d
if(t.x.b(s))return
n.b.c.m(0,n.e,new A.PM(A.lq(m,m,t.mC,t.rA),s))}else{s=n.d
if(t.x.b(s))n.b.c.v(0,s.giK(s))}r=n.b
q=r.c.j(0,n.e)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.x.b(s)?A.lq(m,m,t.mC,t.rA):r.H0(n.a.a)
r.GR(new A.PN(q.a9P(o),o,p,s))},
$S:0}
A.a2J.prototype={
$0(){var s,r,q,p,o,n,m
for(s=this.a,r=s.c,r=r.gaF(r),q=A.n(r),q=q.h("@<1>").P(q.z[1]),r=new A.bG(J.aj(r.a),r.b,q.h("bG<1,2>")),q=q.z[1];r.p();){p=r.a
if(p==null)p=q.a(p)
o=p.b
n=s.Xc(p)
m=p.a
p.a=n
s.GR(new A.PN(m,n,o,null))}},
$S:0}
A.a2G.prototype={
$2(a,b){var s
if(!this.a.a1(0,a))if(a.gDc()&&a.gC2(a)!=null){s=a.gC2(a)
s.toString
s.$1(this.b.aI(this.c.j(0,a)))}},
$S:152}
A.a2H.prototype={
$1(a){return!this.a.a1(0,a)},
$S:153}
A.TR.prototype={}
A.bX.prototype={
a9(a){},
i(a){return"<none>"}}
A.ly.prototype={
el(a,b){var s,r=this
if(a.gdW()){r.rD()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.apX(a,null,!0)
else if(a.db)A.aB1(a)
s=a.ch.a
s.toString
t.cY.a(s)
s.slA(0,b)
r.Ks(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saZ(0,null)
a.yI(r,b)}else a.yI(r,b)}},
Ks(a){a.hC(0)
this.a.Kr(0,a)},
gbL(a){var s
if(this.e==null)this.J9()
s=this.e
s.toString
return s},
J9(){var s,r,q=this
q.c=A.aB4(q.b)
s=$.am()
r=s.Lk()
q.d=r
q.e=s.Le(r,null)
r=q.c
r.toString
q.a.Kr(0,r)},
rD(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sNN(r.d.pU())
r.e=r.d=r.c=null},
DP(){if(this.c==null)this.J9()
var s=this.c
if(!s.ch){s.ch=!0
s.ej()}},
qM(a,b,c,d){var s,r=this
if(a.ax!=null)a.CF()
r.rD()
r.Ks(a)
s=r.a5b(a,d==null?r.b:d)
b.$2(s,c)
s.rD()},
NZ(a,b,c){return this.qM(a,b,c,null)},
a5b(a,b){return new A.ly(a,b)},
nL(a,b,c,d,e,f){var s,r,q=this
if(e===B.a4){d.$2(q,b)
return null}s=c.cN(b)
if(a){r=f==null?new A.un(B.aJ,A.C(t.S,t.O),A.aE(t.h)):f
if(!s.k(0,r.k3)){r.k3=s
r.ej()}if(e!==r.k4){r.k4=e
r.ej()}q.qM(r,d,b,s)
return r}else{q.a4n(s,e,s,new A.a3M(q,d,b))
return null}},
a9p(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.a4){e.$2(p,b)
return null}s=c.cN(b)
r=d.cN(b)
if(a){q=g==null?new A.Eh(B.lz,A.C(t.S,t.O),A.aE(t.h)):g
if(!r.k(0,q.k3)){q.k3=r
q.ej()}if(f!==q.k4){q.k4=f
q.ej()}p.qM(q,e,b,s)
return q}else{p.a4l(r,f,s,new A.a3L(p,e,b))
return null}},
NV(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.a4){e.$2(p,b)
return null}s=c.cN(b)
r=d.cN(b)
if(a){q=g==null?new A.Ef(B.lz,A.C(t.S,t.O),A.aE(t.h)):g
if(r!==q.k3){q.k3=r
q.ej()}if(f!==q.k4){q.k4=f
q.ej()}p.qM(q,e,b,s)
return q}else{p.a4j(r,f,s,new A.a3K(p,e,b))
return null}},
Cv(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.wB(q,p,0)
o.cM(0,c)
o.aj(0,-q,-p)
if(a){s=e==null?A.ar2(null):e
s.sbv(0,o)
r.qM(s,d,b,A.apB(o,r.b))
return s}else{q=r.gbL(r)
q.c1(0)
q.aa(0,o.a)
d.$2(r,b)
r.gbL(r).bu(0)
return null}},
O0(a,b,c,d){var s=d==null?A.apS():d
s.sKo(0,b)
s.slA(0,a)
this.NZ(s,c,B.j)
return s},
i(a){return"PaintingContext#"+A.eU(this)+"(layer: "+this.a.i(0)+", canvas bounds: "+this.b.i(0)+")"}}
A.a3M.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a3L.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a3K.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.En.prototype={}
A.k_.prototype={
nQ(){var s=this.cx
if(s!=null)s.a.AL()},
sCL(a){var s=this.e
if(s==a)return
if(s!=null)s.a9(0)
this.e=a
if(a!=null)a.ag(this)},
Mb(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(o=t.C;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
J.anC(s,new A.a4_())
for(r=0;r<J.b2(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.b2(s)
A.cv(l,k,J.b2(m),null,null)
j=A.bg(m)
i=new A.ez(m,l,k,j.h("ez<1>"))
i.oq(m,l,k,j.c)
B.b.K(n,i)
break}}q=J.be(s,r)
if(q.z&&q.y===h)q.ZH()}h.f=!1}for(o=h.CW,o=A.e3(o,o.r,A.n(o).c),n=o.$ti.c;o.p();){m=o.d
p=m==null?n.a(m):m
p.Mb()}}finally{h.f=!1}},
WQ(a){try{a.$0()}finally{this.f=!0}},
Ma(){var s,r,q,p,o=this.z
B.b.ds(o,new A.a3Z())
for(s=o.length,r=0;r<o.length;o.length===s||(0,A.O)(o),++r){q=o[r]
if(q.CW&&q.y===this)q.JD()}B.b.M(o)
for(o=this.CW,o=A.e3(o,o.r,A.n(o).c),s=o.$ti.c;o.p();){p=o.d;(p==null?s.a(p):p).Ma()}},
Mc(){var s,r,q,p,o,n,m,l,k,j=this
try{s=j.Q
j.Q=A.a([],t.C)
for(p=s,J.anC(p,new A.a40()),o=p.length,n=t.cY,m=0;m<p.length;p.length===o||(0,A.O)(p),++m){r=p[m]
if((r.cy||r.db)&&r.y===j)if(r.ch.a.y!=null)if(r.cy)A.apX(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.r_(n.a(k))
l.db=!1}else r.a1X()}for(p=j.CW,p=A.e3(p,p.r,A.n(p).c),o=p.$ti.c;p.p();){n=p.d
q=n==null?o.a(n):n
q.Mc()}}finally{}},
JV(){var s=this,r=s.cx
r=r==null?null:r.a.gtJ().a
if(r===!0||s.ax>0){if(s.at==null){r=t.ju
s.at=new A.Ld(s.c,A.aF(r),A.C(t.S,r),A.aF(r),$.aU())
r=s.b
if(r!=null)r.$0()}}else{r=s.at
if(r!=null){r.l()
s.at=null
r=s.d
if(r!=null)r.$0()}}},
Md(){var s,r,q,p,o,n,m,l,k=this
if(k.at==null)return
try{p=k.ch
o=A.ad(p,!0,A.n(p).c)
B.b.ds(o,new A.a41())
s=o
p.M(0)
for(p=s,n=p.length,m=0;m<p.length;p.length===n||(0,A.O)(p),++m){r=p[m]
if(r.dy&&r.y===k)r.a2P()}k.at.Qc()
for(p=k.CW,p=A.e3(p,p.r,A.n(p).c),n=p.$ti.c;p.p();){l=p.d
q=l==null?n.a(l):l
q.Md()}}finally{}},
ag(a){var s,r,q,p=this
p.cx=a
a.a0(0,p.gJU())
p.JV()
for(s=p.CW,s=A.e3(s,s.r,A.n(s).c),r=s.$ti.c;s.p();){q=s.d;(q==null?r.a(q):q).ag(a)}},
a9(a){var s,r,q,p=this
p.cx.L(0,p.gJU())
p.cx=null
for(s=p.CW,s=A.e3(s,s.r,A.n(s).c),r=s.$ti.c;s.p();){q=s.d;(q==null?r.a(q):q).a9(0)}}}
A.a4_.prototype={
$2(a,b){return a.c-b.c},
$S:35}
A.a3Z.prototype={
$2(a,b){return a.c-b.c},
$S:35}
A.a40.prototype={
$2(a,b){return b.c-a.c},
$S:35}
A.a41.prototype={
$2(a,b){return a.c-b.c},
$S:35}
A.A.prototype={
aJ(){var s=this
s.cx=s.gdW()||s.gu5()
s.ay=s.gdW()},
l(){this.ch.saZ(0,null)},
dL(a){if(!(a.b instanceof A.bX))a.b=new A.bX()},
qP(a){var s=a.c,r=this.c
if(s<=r){a.c=r+1
a.hB()}},
hB(){},
jH(a){var s,r=this
r.dL(a)
r.a6()
r.lw()
r.bb()
a.d=r
s=r.y
if(s!=null)a.ag(s)
r.qP(a)},
n5(a){var s=this
a.Fv()
a.b.a9(0)
a.d=a.b=null
if(s.y!=null)a.a9(0)
s.a6()
s.lw()
s.bb()},
aT(a){},
tE(a,b,c){A.cE(new A.bq(b,c,"rendering library",A.b7("during "+a+"()"),new A.a5G(this),!1))},
ag(a){var s=this
s.y=a
if(s.z&&s.Q!=null){s.z=!1
s.a6()}if(s.CW){s.CW=!1
s.lw()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.aD()}if(s.dy&&s.gtI().a){s.dy=!1
s.bb()}},
a9(a){this.y=null},
ga2(){var s=this.at
if(s==null)throw A.c(A.a_("A RenderObject does not have any constraints before it has been laid out."))
return s},
a6(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.d!=null)r.vp()
return}if(s!==r)r.vp()
else{r.z=!0
s=r.y
if(s!=null){s.r.push(r)
r.y.nQ()}}},
vp(){this.z=!0
var s=this.d
s.toString
if(!this.as)s.a6()},
Fv(){var s=this
if(s.Q!==s){s.Q=null
s.aT(A.au5())}},
a0E(){var s,r,q=this,p=q.Q
if(p===q)return
s=q.d
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aT(A.au6())}},
ZH(){var s,r,q,p=this
try{p.bQ()
p.bb()}catch(q){s=A.a7(q)
r=A.ar(q)
p.tE("performLayout",s,r)}p.z=!1
p.aD()},
cB(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gm3()||a.gN7()||!(l.d instanceof A.A))o=l
else{n=l.d.Q
n.toString
o=n}if(!l.z&&a.k(0,l.at)){if(o!==l.Q){l.Q=o
l.aT(A.au6())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aT(A.au5())
l.Q=o
if(l.gm3())try{l.qG()}catch(m){s=A.a7(m)
r=A.ar(m)
l.tE("performResize",s,r)}try{l.bQ()
l.bb()}catch(m){q=A.a7(m)
p=A.ar(m)
l.tE("performLayout",q,p)}l.z=!1
l.aD()},
gm3(){return!1},
Bk(a,b){var s=this
s.as=!0
try{s.y.WQ(new A.a5J(s,a,b))}finally{s.as=!1}},
gdW(){return!1},
gu5(){return!1},
r_(a){return a==null?A.aB_(B.j):a},
lw(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.d
if(r instanceof A.A){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gdW():s)&&!r.gdW()){r.lw()
return}}s=p.y
if(s!=null)s.z.push(p)},
JD(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aT(new A.a5H(q))
if(q.gdW()||q.gu5())q.cx=!0
if(!q.gdW()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=q.y
if(s!=null)B.b.v(s.Q,q)
q.CW=!1
q.aD()}else if(s!==q.cx){q.CW=!1
q.aD()}else q.CW=!1},
aD(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gdW()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=r.y
if(s!=null){s.Q.push(r)
r.y.nQ()}}else{s=r.d
if(s instanceof A.A)s.aD()
else{s=r.y
if(s!=null)s.nQ()}}},
a8J(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gdW()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=r.y
if(s!=null){s.Q.push(r)
r.y.nQ()}}else r.aD()},
a1X(){var s,r=this.d
for(;r instanceof A.A;){if(r.gdW()){s=r.ch.a
if(s==null)break
if(s.y!=null)break
r.cy=!0}r=r.d}},
yI(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gdW()
try{p.ao(a,b)}catch(q){s=A.a7(q)
r=A.ar(q)
p.tE("paint",s,r)}},
ao(a,b){},
cP(a,b){},
nG(a){return!0},
bz(a,b){var s,r,q,p,o,n,m,l=b==null
if(l){s=this.y.e
if(s instanceof A.A)b=s}r=A.a([],t.C)
q=this
while(q!==b){r.push(q)
p=q.d
p.toString
q=p}if(!l){b.toString
r.push(b)}o=new A.bw(new Float64Array(16))
o.fm()
for(n=r.length-1;n>0;n=m){m=n-1
r[n].cP(r[m],o)}return o},
jN(a){return null},
Am(a){return null},
rr(){this.y.ch.B(0,this)
this.y.nQ()},
dS(a){},
DG(a){var s
if(this.y.at==null)return
s=this.fr
if(s!=null&&!s.y)s.Qa(a)
else{s=this.d
if(s!=null)s.DG(a)}},
gtI(){var s,r=this
if(r.dx==null){s=A.k6()
r.dx=s
r.dS(s)}s=r.dx
s.toString
return s},
l6(){this.dy=!0
this.fr=null
this.aT(new A.a5I())},
bb(){var s,r,q,p,o,n=this,m=n.y
if(m==null||m.at==null){n.dx=null
return}if(n.fr!=null){m=n.dx
m=m==null?null:m.a
s=m===!0}else s=!1
m=n.dx
r=(m==null?null:m.k1)!=null||n.gtI().k1!=null
n.dx=null
q=n.gtI().a&&s
p=n
while(!0){o=p.d
if(o instanceof A.A)m=r||!q
else m=!1
if(!m)break
if(p!==n&&p.dy)break
p.dy=!0
if(q)r=!1
if(o.dx==null){m=A.k6()
o.dx=m
o.dS(m)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==n&&n.fr!=null&&n.dy)n.y.ch.v(0,n)
if(!p.dy){p.dy=!0
m=n.y
if(m!=null){m.ch.B(0,p)
n.y.nQ()}}},
a2P(){var s,r,q,p,o,n,m,l=this,k=null
if(l.z)return
s=l.fr
r=s==null
if(r)q=k
else{q=s.ch
if(q==null)q=k
else q=q.Q||q.y}s=r?k:s.z
p=t.dK.a(l.GH(s===!0,q===!0))
s=t.Q
o=A.a([],s)
n=A.a([],s)
s=l.fr
r=s==null
q=r?k:s.f
m=r?k:s.r
s=r?k:s.w
p.mS(s==null?0:s,m,q,o,n)},
GH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={},d=f.gtI()
e.a=d.d
e.b=!d.e&&!d.a
s=a||d.b
r=b||d.p4
q=A.a([],t.xm)
p=d.c||!(f.d instanceof A.A)
o=d.k1!=null
n=t.dK
m=A.C(t.oX,n)
l=t.yj
k=A.a([],l)
j=A.a([],t.zd)
i=d.c3
i=i==null?null:i.a!==0
f.fk(new A.a5D(e,f,r,s,q,k,j,d,i===!0,o,m))
if(p)for(n=k.length,h=0;h<k.length;k.length===n||(0,A.O)(k),++h)k[h].vn()
else if(o){g=d.k1.$1(q)
i=g.a
B.b.K(k,new A.ae(i,new A.a5E(e,f,m),A.a6(i).h("ae<1,eF>")))
for(i=g.b,h=0;!1;++h)j.push(i[h].ia(0,new A.a5F(f,m),n).dZ(0))}n=f.dy=!1
if(!(f.d instanceof A.A)){f.tn(k,!0)
B.b.U(j,f.gHu())
n=e.a
g=new A.Rv(A.a([],l),A.a([f],t.C),n)}else if(e.b){n=e.a
g=new A.Nk(j,A.a([],l),n)}else{f.tn(k,!0)
B.b.U(j,f.gHu())
i=e.a
g=new A.oG(b,d,j,A.a([],l),A.a([f],t.C),i)
if(a?!d.b:n){g.rY()
g.f.b=!0}if(d.a)g.z=!0}g.K(0,k)
return g},
tn(a,b){var s,r,q,p,o,n,m,l=this,k=A.aF(t.dK)
for(s=J.ay(a),r=0;r<s.gn(a);++r){q=s.j(a,r)
if(q.gf7()==null)continue
if(b){if(l.dx==null){p=A.k6()
l.dx=p
l.dS(p)}p=l.dx
p.toString
p=!p.N2(q.gf7())}else p=!1
if(p)k.B(0,q)
for(o=0;o<r;++o){n=s.j(a,o)
p=q.gf7()
p.toString
if(!p.N2(n.gf7())){k.B(0,q)
k.B(0,n)}}}for(s=A.e3(k,k.r,k.$ti.c),p=s.$ti.c;s.p();){m=s.d;(m==null?p.a(m):m).vn()}},
a_3(a){return this.tn(a,!1)},
fk(a){this.aT(a)},
pq(a,b,c){a.kv(0,t.d1.a(c),b)},
iU(a,b){},
c7(){return"<optimized out>#"+A.bd(this)},
i(a){return this.c7()},
eT(a,b,c,d){var s=this.d
if(s instanceof A.A)s.eT(a,b==null?this:b,c,d)},
o7(){return this.eT(B.ax,null,B.w,null)},
m0(a,b){return this.eT(B.ax,a,B.w,b)},
$iao:1}
A.a5G.prototype={
$0(){var s=A.a([],t.p),r=this.a
s.push(A.ak4("The following RenderObject was being processed when the exception was fired",B.Hm,r))
s.push(A.ak4("RenderObject",B.Hn,r))
return s},
$S:11}
A.a5J.prototype={
$0(){this.b.$1(this.c.a(this.a.ga2()))},
$S:0}
A.a5H.prototype={
$1(a){var s
a.JD()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:24}
A.a5I.prototype={
$1(a){a.l6()},
$S:24}
A.a5D.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.GH(f.d,f.c)
if(e.a){B.b.M(f.e)
B.b.M(f.f)
B.b.M(f.r)
if(!f.w.a)f.a.a=!0}for(s=e.gNp(),r=s.length,q=f.f,p=f.y,o=f.x,n=f.b,m=f.w,l=f.e,k=f.z,j=0;j<s.length;s.length===r||(0,A.O)(s),++j){i=s[j]
i.b.push(n)
if(o){h=m.c3
h.toString
i.u2(h)}if(p&&i.gf7()!=null){h=i.gf7()
h.toString
l.push(h)
h=i.gf7()
h.toString
k.m(0,h,i)}else q.push(i)}if(e instanceof A.Nk)for(s=e.b,r=s.length,q=f.r,j=0;j<s.length;s.length===r||(0,A.O)(s),++j){g=s[j]
for(p=J.aj(g);p.p();){l=p.gD(p)
l.b.push(n)
if(o){k=m.c3
k.toString
l.u2(k)}}q.push(g)}},
$S:24}
A.a5E.prototype={
$1(a){var s=this.c.j(0,a)
if(s==null){this.a.b=!1
return new A.Ak(a,A.a([this.b],t.C),!1)}return s},
$S:71}
A.a5F.prototype={
$1(a){var s=this.b.j(0,a)
return s==null?new A.Ak(a,A.a([this.a],t.C),!1):s},
$S:71}
A.aT.prototype={
saX(a){var s=this,r=s.fr$
if(r!=null)s.n5(r)
s.fr$=a
if(a!=null)s.jH(a)},
hB(){var s=this.fr$
if(s!=null)this.qP(s)},
aT(a){var s=this.fr$
if(s!=null)a.$1(s)}}
A.afQ.prototype={}
A.Nk.prototype={
K(a,b){B.b.K(this.c,b)},
gNp(){return this.c}}
A.eF.prototype={
gNp(){return A.a([this],t.yj)},
u2(a){var s=this.c;(s==null?this.c=A.aF(t.l):s).K(0,a)}}
A.Rv.prototype={
mS(a,b,c,d,e){var s,r,q,p,o,n=this.b,m=B.b.gI(n)
if(m.fr==null){s=B.b.gI(n).gm_()
r=B.b.gI(n).y.at
r.toString
q=$.ajp()
q=new A.bP(null,0,s,B.E,q.p4,q.f,q.R8,q.r,q.b4,q.RG,q.rx,q.ry,q.to,q.x1,q.x2,q.y1,q.y2,q.av)
q.ag(r)
m.fr=q}m=B.b.gI(n).fr
m.toString
m.saw(0,B.b.gI(n).gkF())
p=A.a([],t.Q)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.O)(n),++o)n[o].mS(0,b,c,p,e)
m.kv(0,p,null)
d.push(m)},
gf7(){return null},
vn(){},
K(a,b){B.b.K(this.e,b)}}
A.Ak.prototype={
mS(a,b,c,d,e){},
vn(){},
gf7(){return this.e}}
A.oG.prototype={
Hz(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null
for(s=this.x,r=s.length,q=t.tM,p=t.l,o=this.b,n=0;n<s.length;s.length===r||(0,A.O)(s),++n){m=s[n]
l=A.aF(p)
for(k=J.bR(m),j=k.gR(m),i=a2,h=i,g=h,f=g,e=f;j.p();){d=j.gD(j)
if(d.gf7()!=null){q.a(d)
d.w=!0
if(i==null)i=B.b.gI(d.b).fr
if(h==null)h=A.k6()
c=d.z?a2:d.f
c.toString
h.mJ(c)
c=d.b
if(c.length>1){b=new A.RO()
b.FM(a3,a4,c)}else b=a2
c=b.c
c===$&&A.b()
a=b.d
a===$&&A.b()
a0=A.ev(c,a)
e=e==null?a0:e.lk(a0)
c=b.b
if(c!=null){a1=A.ev(b.c,c)
f=f==null?a1:f.dl(a1)}c=b.a
if(c!=null){a1=A.ev(b.c,c)
g=g==null?a1:g.dl(a1)}d=d.c
if(d!=null)l.K(0,d)}}if(h!=null)j=!(e.a>=e.c||e.b>=e.d)
else j=!1
if(j){if(i==null||a6.u(0,i.b))i=A.Lb(a2,B.b.gI(o).gm_())
a6.B(0,i.b)
i.dy=l
if(!i.e.k(0,e)){i.e=e
i.fA()}if(!A.akO(i.d,a2)){i.d=null
i.fA()}i.f=f
i.r=g
for(k=k.gR(m);k.p();){j=k.gD(k)
if(j.gf7()!=null)B.b.gI(j.b).fr=i}i.P_(0,h)
a5.push(i)}}},
mS(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=A.aF(t.S),c=f.y
for(s=f.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.O)(s),++q)c=J.awY(c,s[q])
if(!f.z){if(!f.w)B.b.gI(f.b).fr=null
f.Hz(a0,b,a2,d)
for(s=J.aj(c),r=f.b,p=A.a6(r),o=p.c,p=p.h("ez<1>");s.p();){n=s.gD(s)
if(n instanceof A.oG){if(n.z){m=n.b
m=B.b.gI(m).fr!=null&&d.u(0,B.b.gI(m).fr.b)}else m=!1
if(m)B.b.gI(n.b).fr=null}m=n.b
l=new A.ez(r,1,e,p)
l.oq(r,1,e,o)
B.b.K(m,l)
n.mS(a+f.f.y1,b,a0,a1,a2)}return}k=f.VW(b,a0)
s=f.e
r=!s
if(r){if(k==null)p=e
else{p=k.d
p===$&&A.b()
if(!p.gS(p)){p=k.c
p===$&&A.b()
p=p.Na()}else p=!0}p=p===!0}else p=!1
if(p)return
p=f.b
o=B.b.gI(p)
if(o.fr==null)o.fr=A.Lb(e,B.b.gI(p).gm_())
j=B.b.gI(p).fr
j.sBq(s)
j.dy=f.c
j.w=a
if(a!==0){f.rY()
s=f.f
s.shm(0,s.y1+a)}if(k!=null){s=k.d
s===$&&A.b()
j.saw(0,s)
s=k.c
s===$&&A.b()
j.sbv(0,s)
j.f=k.b
j.r=k.a
if(r&&k.e){f.rY()
f.f.bg(B.jR,!0)}}s=t.Q
i=A.a([],s)
f.Hz(j.f,j.r,a2,d)
for(r=J.aj(c);r.p();){o=r.gD(r)
if(o instanceof A.oG){if(o.z){n=o.b
n=B.b.gI(n).fr!=null&&d.u(0,B.b.gI(n).fr.b)}else n=!1
if(n)B.b.gI(o.b).fr=null}h=A.a([],s)
n=j.f
o.mS(0,j.r,n,i,h)
B.b.K(a2,h)}s=f.f
if(s.a)B.b.gI(p).pq(j,f.f,i)
else j.kv(0,i,s)
a1.push(j)
for(s=a2.length,r=t.l,q=0;q<a2.length;a2.length===s||(0,A.O)(a2),++q){g=a2[q]
p=j.d
if(!A.akO(g.d,p)){g.d=p==null||A.IC(p)?e:p
g.fA()}g.sBq(j.y)
p=f.c
if(p!=null){o=g.dy;(o==null?g.dy=A.aF(r):o).K(0,p)}}B.b.K(a1,a2)
B.b.M(a2)},
VW(a,b){var s,r=this.b
if(r.length>1){s=new A.RO()
s.FM(b,a,r)
r=s}else r=null
return r},
gf7(){return this.z?null:this.f},
K(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.y,q=0;q<b.length;b.length===s||(0,A.O)(b),++q){p=b[q]
r.push(p)
if(p.gf7()==null)continue
if(!m.r){m.f=m.f.a4P()
m.r=!0}o=m.f
n=p.gf7()
n.toString
o.mJ(n)}},
u2(a){this.T3(a)
if(a.a!==0){this.rY()
a.U(0,this.f.ga3s())}},
rY(){var s,r,q=this
if(!q.r){s=q.f
r=A.k6()
r.a=s.a
r.c=s.c
r.d=s.d
r.e=s.e
r.p4=s.p4
r.av=s.av
r.k2=s.k2
r.RG=s.RG
r.ry=s.ry
r.rx=s.rx
r.to=s.to
r.x1=s.x1
r.xr=s.xr
r.x2=s.x2
r.y1=s.y1
r.y2=s.y2
r.b4=s.b4
r.c3=s.c3
r.by=s.by
r.aB=s.aB
r.an=s.an
r.bi=s.bi
r.r=s.r
r.k3=s.k3
r.ok=s.ok
r.k4=s.k4
r.p1=s.p1
r.p2=s.p2
r.p3=s.p3
r.f.K(0,s.f)
r.R8.K(0,s.R8)
r.b=s.b
q.f=r
q.r=!0}},
vn(){this.z=!0}}
A.RO.prototype={
FM(a,b,c){var s,r,q,p,o,n,m=this,l=new A.bw(new Float64Array(16))
l.fm()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.Am(q)
if(a!=null){m.b=a
m.a=A.arG(m.a,r.jN(q))}else m.b=A.arG(m.b,r.jN(q))
l=$.avz()
l.fm()
A.aE6(r,q,m.c,l)
m.b=A.arH(m.b,l)
m.a=A.arH(m.a,l)}p=B.b.gI(c)
l=m.b
l=l==null?p.gkF():l.dl(p.gkF())
m.d=l
o=m.a
if(o!=null){n=o.dl(l)
if(n.gS(n)){l=m.d
l=!l.gS(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.Qd.prototype={}
A.Rc.prototype={}
A.zj.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.t(this))return!1
return b instanceof A.zj&&b.a.k(0,this.a)&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return this.a.i(0)+" at "+A.i8(this.b)+"x"}}
A.nR.prototype={
suf(a){var s,r,q,p=this
if(J.e(p.fy,a))return
s=p.fy
p.fy=a
if(p.k1==null)return
if(s==null)r=null
else{r=s.b
r=A.Iz(r,r,1)}q=p.fy.b
if(!J.e(r,A.Iz(q,q,1))){r=p.JM()
q=p.ch
q.a.a9(0)
q.saZ(0,r)
p.aD()}p.a6()},
Ct(){var s=this
s.Q=s
s.y.r.push(s)
s.ch.saZ(0,s.JM())
s.y.Q.push(s)},
JM(){var s,r=this.fy.b
r=A.Iz(r,r,1)
this.k1=r
s=A.ar2(r)
s.ag(this)
return s},
qG(){},
bQ(){var s,r=this.fy.a
this.fx=r
s=this.fr$
if(s!=null)s.i9(A.u2(r))},
gdW(){return!0},
ao(a,b){var s=this.fr$
if(s!=null)a.el(s,b)},
cP(a,b){var s=this.k1
s.toString
b.cM(0,s)
this.S_(a,b)},
a4A(){var s,r,q
try{q=$.am()
s=q.Ll()
r=this.ch.a.a3Z(s)
this.a2U()
q.Oj(r)
r.l()}finally{}},
a2U(){var s,r,q=this.gig(),p=q.gaP(),o=this.go
o.gl0()
s=q.gaP()
o.gl0()
o=this.ch
r=t.g9
o.a.M5(0,new A.r(p.a,0),r)
switch(A.tr().a){case 0:o.a.M5(0,new A.r(s.a,q.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:break}return},
gig(){var s=this.fx.a4(0,this.fy.b)
return new A.D(0,0,0+s.a,0+s.b)},
gkF(){var s,r=this.k1
r.toString
s=this.fx
return A.ev(r,new A.D(0,0,0+s.a,0+s.b))}}
A.Rn.prototype={
ag(a){var s
this.e3(a)
s=this.fr$
if(s!=null)s.ag(a)},
a9(a){var s
this.e4(0)
s=this.fr$
if(s!=null)s.a9(0)}}
A.rz.prototype={}
A.nX.prototype={
F(){return"SchedulerPhase."+this.b}}
A.a3T.prototype={}
A.dN.prototype={
Oi(a){var s=this.k3$
B.b.v(s,a)
if(s.length===0){s=$.aP()
s.ch=null
s.CW=$.ab}},
X1(a){var s,r,q,p,o,n,m,l,k=this.k3$,j=A.ad(k,!0,t.wX)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.b.u(k,s))s.$1(a)}catch(n){r=A.a7(n)
q=A.ar(n)
m=A.b7("while executing callbacks for FrameTiming")
l=$.hp()
if(l!=null)l.$1(new A.bq(r,q,"Flutter framework",m,null,!1))}}},
B_(a){var s=this
if(s.k4$===a)return
s.k4$=a
switch(a.a){case 1:case 2:s.IQ(!0)
break
case 3:case 4:case 0:s.IQ(!1)
break}},
Gh(){if(this.p2$)return
this.p2$=!0
A.cn(B.w,this.ga1h())},
a1i(){this.p2$=!1
if(this.a6q())this.Gh()},
a6q(){var s,r,q,p,o,n,m=this,l="No element",k=m.p1$,j=k.c===0
if(j||m.c>0)return!1
if(j)A.Y(A.a_(l))
s=k.rX(0)
j=s.gNQ()
if(m.ok$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.Y(A.a_(l));++k.d
k.rX(0)
p=k.c-1
o=k.rX(p)
k.b[p]=null
k.c=p
if(p>0)k.Vb(o,0)
s.abs()}catch(n){r=A.a7(n)
q=A.ar(n)
j=A.b7("during a task callback")
A.cE(new A.bq(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
rq(a,b){var s,r=this
r.iq()
s=++r.p3$
r.p4$.m(0,s,new A.rz(a))
return r.p3$},
rp(a){return this.rq(a,!1)},
gn8(){var s=this
if(s.ry$==null){if(s.x1$===B.cX)s.iq()
s.ry$=new A.aY(new A.a5($.ab,t.U),t.Y)
s.rx$.push(new A.a6S(s))}return s.ry$.a},
gMl(){return this.x2$},
IQ(a){if(this.x2$===a)return
this.x2$=a
if(a)this.iq()},
LV(){var s=$.aP()
if(s.x==null){s.x=this.gXR()
s.y=$.ab}if(s.z==null){s.z=this.gYj()
s.Q=$.ab}},
AL(){switch(this.x1$.a){case 0:case 4:this.iq()
return
case 1:case 2:case 3:return}},
iq(){var s,r=this
if(!r.to$)s=!(A.dN.prototype.gMl.call(r)&&r.bN$)
else s=!0
if(s)return
r.LV()
$.aP().iq()
r.to$=!0},
Q_(){if(this.to$)return
this.LV()
$.aP().iq()
this.to$=!0},
DC(){var s,r=this
if(r.xr$||r.x1$!==B.cX)return
r.xr$=!0
s=r.to$
A.cn(B.w,new A.a6U(r))
A.cn(B.w,new A.a6V(r,s))
r.a8F(new A.a6W(r))},
EY(a){var s=this.y1$
return A.cl(B.c.bn((s==null?B.w:new A.aB(a.a-s.a)).a/1)+this.y2$.a,0,0)},
XS(a){if(this.xr$){this.bi$=!0
return}this.Mq(a)},
Yk(){var s=this
if(s.bi$){s.bi$=!1
s.rx$.push(new A.a6R(s))
return}s.Ms()},
Mq(a){var s,r,q=this
if(q.y1$==null)q.y1$=a
r=a==null
q.by$=q.EY(r?q.av$:a)
if(!r)q.av$=a
q.to$=!1
try{q.x1$=B.XD
s=q.p4$
q.p4$=A.C(t.S,t.b1)
J.tB(s,new A.a6T(q))
q.R8$.M(0)}finally{q.x1$=B.XE}},
a9S(a){var s=this,r=s.b4$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.H$
else if(q){s.b4$=a
s.H$=1}return new A.a3T(s.gWF())},
WG(){if(--this.H$===0){this.b4$=null
$.aP()}},
Ms(){var s,r,q,p,o,n,m,l,k=this
try{k.x1$=B.jH
for(p=t.qP,o=A.ad(k.RG$,!0,p),n=o.length,m=0;m<n;++m){s=o[m]
l=k.by$
l.toString
k.Hc(s,l)}k.x1$=B.Ck
o=k.rx$
r=A.ad(o,!0,p)
B.b.M(o)
for(p=r,o=p.length,m=0;m<p.length;p.length===o||(0,A.O)(p),++m){q=p[m]
n=k.by$
n.toString
k.Hc(q,n)}}finally{k.x1$=B.cX
k.by$=null}},
Hd(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.a7(q)
r=A.ar(q)
p=A.b7("during a scheduler callback")
A.cE(new A.bq(s,r,"scheduler library",p,null,!1))}},
Hc(a,b){return this.Hd(a,b,null)}}
A.a6S.prototype={
$1(a){var s=this.a
s.ry$.f6(0)
s.ry$=null},
$S:4}
A.a6U.prototype={
$0(){this.a.Mq(null)},
$S:0}
A.a6V.prototype={
$0(){var s=this.a
s.Ms()
s.y2$=s.EY(s.av$)
s.y1$=null
s.xr$=!1
if(this.b)s.iq()},
$S:0}
A.a6W.prototype={
$0(){var s=0,r=A.M(t.H),q=this
var $async$$0=A.H(function(a,b){if(a===1)return A.J(b,r)
while(true)switch(s){case 0:s=2
return A.E(q.a.gn8(),$async$$0)
case 2:return A.K(null,r)}})
return A.L($async$$0,r)},
$S:29}
A.a6R.prototype={
$1(a){var s=this.a
s.to$=!1
s.iq()},
$S:4}
A.a6T.prototype={
$2(a,b){var s,r=this.a
if(!r.R8$.u(0,a)){s=r.by$
s.toString
r.Hd(b.a,s,b.b)}},
$S:160}
A.L8.prototype={
gtJ(){var s,r,q=this.LZ$
if(q===$){s=$.aP().a
r=$.aU()
q!==$&&A.aK()
q=this.LZ$=new A.dP(s.c,r,t.vC)}return q},
Wx(){--this.cs$
this.gtJ().sq(0,this.cs$>0)},
GX(){var s,r=this
if($.aP().a.c){if(r.dh$==null){++r.cs$
r.gtJ().sq(0,!0)
r.dh$=new A.a7B(r.gWw())}}else{s=r.dh$
if(s!=null)s.a.$0()
r.dh$=null}},
Z7(a){var s,r,q=a.d
if(t.yp.b(q)){s=B.ab.eb(q)
if(J.e(s,B.i8))s=q
r=new A.qM(a.a,a.b,a.c,s)}else r=a
s=this.cy$.j(0,r.b)
if(s!=null){s=s.y
if(s!=null){s=s.at
if(s!=null)s.a9h(r.c,r.a,r.d)}}}}
A.a7B.prototype={}
A.cy.prototype={
X(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.ad(this.b,!0,t.p1)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.O)(q),++o){n=q[o]
m=n.a
r.push(n.L7(new A.d7(m.a+k,m.b+k)))}return new A.cy(l+s,r)},
k(a,b){if(b==null)return!1
return J.T(b)===A.t(this)&&b instanceof A.cy&&b.a===this.a&&A.dG(b.b,this.b)},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.La.prototype={
c7(){return"SemanticsData"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.La&&b.a===s.a&&b.b===s.b&&b.c.k(0,s.c)&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.k(0,s.cx)&&A.amM(b.cy,s.cy)&&b.z==s.z&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.e(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.aCl(b.fr,s.fr)},
gt(a){var s=this,r=A.cg(s.fr)
return A.S(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.S(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.RN.prototype={}
A.bP.prototype={
sbv(a,b){if(!A.akO(this.d,b)){this.d=b==null||A.IC(b)?null:b
this.fA()}},
saw(a,b){if(!this.e.k(0,b)){this.e=b
this.fA()}},
sBq(a){if(this.y===a)return
this.y=a
this.fA()},
a0V(a){var s,r,q,p,o,n,m=this,l=m.as
if(l!=null)for(s=l.length,r=0;r<s;++r)l[r].ax=!0
for(l=a.length,r=0;r<l;++r)a[r].ax=!1
l=m.as
if(l!=null)for(s=l.length,q=!1,r=0;r<l.length;l.length===s||(0,A.O)(l),++r){p=l[r]
if(p.ax){if(p.ch===m){p.ch=null
if(m.ay!=null)p.a9(0)}q=!0}}else q=!1
for(l=a.length,r=0;r<a.length;a.length===l||(0,A.O)(a),++r){p=a[r]
s=p.ch
if(s!==m){if(s!=null){p.ch=null
if(s.ay!=null)p.a9(0)}p.ch=m
s=m.ay
if(s!=null)p.ag(s)
s=p.CW
o=m.CW
if(s<=o){p.CW=o+1
s=p.as
if(s!=null)B.b.U(s,p.gI9())}q=!0}}if(!q&&m.as!=null)for(l=m.as,s=l.length,n=0;n<s;++n)if(l[n].b!==a[n].b){q=!0
break}m.as=a
if(q)m.fA()},
ga7h(){var s=this.as
s=s==null?null:s.length!==0
return s===!0},
zr(a){var s,r,q,p=this.as
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.O)(p),++r){q=p[r]
if(!a.$1(q)||!q.zr(a))return!1}return!0},
a0M(a){var s=a.CW,r=this.CW
if(s<=r){a.CW=r+1
s=a.as
if(s!=null)B.b.U(s,a.gI9())}},
ag(a){var s,r,q,p=this
p.ay=a
for(s=a.c;s.a1(0,p.b);)p.b=$.a7E=($.a7E+1)%65535
s.m(0,p.b,p)
a.d.v(0,p)
if(p.cx){p.cx=!1
p.fA()}s=p.as
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.O)(s),++q)s[q].ag(a)},
a9(a){var s,r,q,p,o=this
o.ay.c.v(0,o.b)
o.ay.d.B(0,o)
o.ay=null
s=o.as
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.O)(s),++q){p=s[q]
if(p.ch===o)J.awU(p)}o.fA()},
fA(){var s,r=this
if(r.cx)return
r.cx=!0
s=r.ay
if(s!=null)s.b.B(0,r)},
kv(a,b,c){var s=this
if(c==null)c=$.ajp()
if(!s.fx.k(0,c.RG)||!s.k1.k(0,c.x1)||s.k3!==c.y1||s.k4!==c.y2||!s.fy.k(0,c.rx)||!s.go.k(0,c.ry)||!s.id.k(0,c.to)||s.k2!==c.x2||s.fr!==c.b4||s.p1!=c.av||s.p2!=c.k2||s.rx!=c.aB||s.ry!=c.an||s.to!=c.bi||s.dx!==c.r||s.x!=c.k3||s.Q!==c.p4||s.z!==c.b)s.fA()
s.fx=c.RG
s.fy=c.rx
s.go=c.ry
s.id=c.to
s.k1=c.x1
s.k2=c.x2
s.ok=c.xr
s.k3=c.y1
s.k4=c.y2
s.fr=c.b4
s.p1=c.av
s.p2=c.k2
s.cy=A.q6(c.f,t.nS,t.mP)
s.db=A.q6(c.R8,t.zN,t.O)
s.dx=c.r
s.p3=c.by
s.rx=c.aB
s.ry=c.an
s.to=c.bi
s.Q=c.p4
s.R8=c.k4
s.RG=c.ok
s.x=c.k3
s.x1=c.p1
s.x2=c.p2
s.xr=c.p3
s.z=c.b
s.a0V(b==null?B.iV:b)},
P_(a,b){return this.kv(a,null,b)},
PP(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
a7.a=a6.fr
a7.b=a6.dx
a7.c=a6.fx
a7.d=a6.fy
a7.e=a6.go
a7.f=a6.id
a7.r=a6.k1
a7.w=a6.k2
a7.x=a6.p1
s=a6.dy
a7.y=s==null?null:A.h2(s,t.l)
a7.z=a6.p3
a7.Q=a6.R8
a7.as=a6.RG
a7.at=a6.rx
a7.ax=a6.ry
a7.ay=a6.to
a7.ch=a6.x1
a7.CW=a6.x2
a7.cx=a6.xr
r=a6.k3
a7.cy=a6.k4
q=A.aF(t.S)
for(s=a6.db,s=A.iF(s,s.r,A.n(s).c);s.p();)q.B(0,A.ao8(s.d))
a6.ok!=null
if(a6.Q)a6.zr(new A.a7F(a7,a6,q))
s=a7.a
p=a6.z
o=a7.b
p=p?o&$.UZ():o
o=a7.c
n=a7.d
m=a7.e
l=a7.f
k=a7.r
j=a7.w
i=a7.x
h=a6.e
g=a6.d
f=a7.cy
e=a7.y
d=a7.z
c=a7.Q
b=a7.as
a=a7.at
a0=a7.ax
a1=a7.ay
a2=a7.ch
a3=a7.CW
a4=a7.cx
a5=A.ad(q,!0,q.$ti.c)
B.b.fn(a5)
return new A.La(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
UU(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.PP()
if(!a0.ga7h()||a0.Q){s=$.av_()
r=s}else{q=a0.as.length
p=a0.VE()
s=new Int32Array(q)
for(o=0;o<q;++o)s[o]=p[o].b
r=new Int32Array(q)
for(o=q-1,n=a0.as;o>=0;--o)r[o]=n[q-o-1].b}n=a1.fr
m=n.length
if(m!==0){l=new Int32Array(m)
for(o=0;o<n.length;++o){m=n[o]
l[o]=m
a3.B(0,m)}}else l=null
n=a0.b
m=a1.c
k=a1.d
j=a1.e
i=a1.f
h=a1.r
g=a1.z
if(g==null)g=0
f=a1.Q
if(f==null)f=0
e=a1.as
if(e==null)e=0/0
d=a1.at
if(d==null)d=0/0
c=a1.ax
if(c==null)c=0/0
b=a1.db
b=b==null?null:b.a
if(b==null)b=$.av1()
a=l==null?$.av0():l
a2.a.push(new A.Lc(n,a1.a,a1.b,-1,-1,-1,g,f,e,d,c,a1.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a1.w,a1.x,A.CZ(b),s,r,a,a1.dy))
a0.cx=!1},
VE(){var s,r,q,p,o,n,m,l,k,j=this.p1,i=this.ch
while(!0){s=j==null
if(!(s&&i!=null))break
j=i.p1
i=i.ch}r=this.as
if(!s){r.toString
r=A.aEM(r,j)}s=t.uB
q=A.a([],s)
p=A.a([],s)
for(o=null,n=0;n<r.length;++n){m=r[n]
l=m.p2
o=n>0?r[n-1].p2:null
if(n!==0)if(J.T(l)===J.T(o)){if(l!=null)o.toString
k=!0}else k=!1
else k=!0
if(!k&&p.length!==0){if(o!=null)B.b.fn(p)
B.b.K(q,p)
B.b.M(p)}p.push(new A.kx(m,l,n))}if(o!=null)B.b.fn(p)
B.b.K(q,p)
s=t.wg
return A.ad(new A.ae(q,new A.a7D(),s),!0,s.h("ax.E"))},
Qa(a){if(this.ay==null)return
B.Ec.hb(0,a.aae(this.b))},
c7(){return"SemanticsNode#"+this.b},
aaa(a,b,c){return new A.RN(a,this,b,!0,!0,null,c)},
OG(a){return this.aaa(B.Hg,null,a)}}
A.a7F.prototype={
$1(a){var s,r,q,p=this.a
p.a=p.a|a.fr
s=p.b
r=a.z
q=a.dx
p.b=s|(r?q&$.UZ():q)
if(p.x==null)p.x=a.p1
p.z=a.p3
if(p.Q==null)p.Q=a.R8
if(p.as==null)p.as=a.RG
if(p.at==null)p.at=a.rx
if(p.ax==null)p.ax=a.ry
if(p.ay==null)p.ay=a.to
p.ch=a.x1
p.CW=a.x2
p.cx=a.xr
if(p.d.a==="")p.d=a.fy
if(p.e.a==="")p.e=a.go
if(p.f.a==="")p.f=a.id
if(p.w==="")p.w=a.k2
s=a.dy
if(s!=null){r=p.y;(r==null?p.y=A.aF(t.l):r).K(0,s)}for(s=this.b.db,s=A.iF(s,s.r,A.n(s).c),r=this.c;s.p();)r.B(0,A.ao8(s.d))
a.ok!=null
s=p.c
r=p.x
p.c=A.ah3(a.fx,a.p1,s,r)
r=p.r
s=p.x
p.r=A.ah3(a.k1,a.p1,r,s)
p.cy=Math.max(p.cy,a.k4+a.k3)
return!0},
$S:43}
A.a7D.prototype={
$1(a){return a.a},
$S:164}
A.kj.prototype={
aY(a,b){return B.c.aY(this.b,b.b)},
$icb:1}
A.i4.prototype={
aY(a,b){return B.c.aY(this.a,b.a)},
Qx(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.iV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.O)(s),++q){p=s[q]
o=p.e
j.push(new A.kj(!0,A.oK(p,new A.r(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.kj(!1,A.oK(p,new A.r(o.c+-0.1,o.d+-0.1)).a,p))}B.b.fn(j)
n=A.a([],t.sN)
for(s=j.length,r=this.b,o=t.Q,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.O)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.i4(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.b.fn(n)
if(r===B.Z){s=t.FF
n=A.ad(new A.cJ(n,s),!0,s.h("ax.E"))}s=A.a6(n).h("fe<1,bP>")
return A.ad(new A.fe(n,new A.afV(),s),!0,s.h("k.E"))},
Qw(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.C(s,t.ju)
q=A.C(s,s)
for(p=this.b,o=p===B.Z,p=p===B.r,n=a4,m=0;m<n;g===a4||(0,A.O)(a3),++m,n=g){l=a3[m]
r.m(0,l.b,l)
n=l.e
k=n.a
j=n.b
i=A.oK(l,new A.r(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.O)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.j(0,f.b)===l.b)continue
g=f.e
e=g.a
d=g.b
c=A.oK(f,new A.r(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.m(0,l.b,f.b)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.a6(a3))
B.b.ds(a2,new A.afR())
new A.ae(a2,new A.afS(),A.a6(a2).h("ae<1,i>")).U(0,new A.afU(A.aF(s),q,a1))
a3=t.k2
a3=A.ad(new A.ae(a1,new A.afT(r),a3),!0,a3.h("ax.E"))
a4=A.a6(a3).h("cJ<1>")
return A.ad(new A.cJ(a3,a4),!0,a4.h("ax.E"))},
$icb:1}
A.afV.prototype={
$1(a){return a.Qw()},
$S:74}
A.afR.prototype={
$2(a,b){var s,r,q=a.e,p=A.oK(a,new A.r(q.a,q.b))
q=b.e
s=A.oK(b,new A.r(q.a,q.b))
r=B.c.aY(p.b,s.b)
if(r!==0)return-r
return-B.c.aY(p.a,s.a)},
$S:47}
A.afU.prototype={
$1(a){var s=this,r=s.a
if(r.u(0,a))return
r.B(0,a)
r=s.b
if(r.a1(0,a)){r=r.j(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:33}
A.afS.prototype={
$1(a){return a.b},
$S:167}
A.afT.prototype={
$1(a){var s=this.a.j(0,a)
s.toString
return s},
$S:168}
A.agW.prototype={
$1(a){return a.Qx()},
$S:74}
A.kx.prototype={
aY(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.aY(0,s)},
$icb:1}
A.Ld.prototype={
l(){var s=this
s.b.M(0)
s.c.M(0)
s.d.M(0)
s.e2()},
Qc(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b
if(f.a===0)return
s=A.aF(t.S)
r=A.a([],t.Q)
for(q=A.n(f).h("b_<1>"),p=q.h("k.E"),o=g.d;f.a!==0;){n=A.ad(new A.b_(f,new A.a7J(g),q),!0,p)
f.M(0)
o.M(0)
B.b.ds(n,new A.a7K())
B.b.K(r,n)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.O)(n),++l){k=n[l]
if(k.Q||k.y){j=k.ch
if(j!=null)i=j.Q||j.y
else i=!1
if(i){j.fA()
k.cx=!1}}}}B.b.ds(r,new A.a7L())
$.L9.toString
h=new A.a7O(A.a([],t.fr))
for(q=r.length,l=0;l<r.length;r.length===q||(0,A.O)(r),++l){k=r[l]
if(k.cx&&k.ay!=null)k.UU(h,s)}f.M(0)
for(f=A.e3(s,s.r,s.$ti.c),q=f.$ti.c;f.p();){p=f.d
$.ao5.j(0,p==null?q.a(p):p).toString}g.a.$1(new A.Le(h.a))
g.am()},
XD(a,b){var s,r={},q=r.a=this.c.j(0,a)
if(q!=null)s=(q.Q||q.y)&&!q.cy.a1(0,b)
else s=!1
if(s)q.zr(new A.a7I(r,b))
s=r.a
if(s==null||!s.cy.a1(0,b))return null
return r.a.cy.j(0,b)},
a9h(a,b,c){var s,r=this.XD(a,b)
if(r!=null){r.$1(c)
return}if(b===B.Y0){s=this.c.j(0,a)
s=(s==null?null:s.c)!=null}else s=!1
if(s)this.c.j(0,a).c.$0()},
i(a){return"<optimized out>#"+A.bd(this)}}
A.a7J.prototype={
$1(a){return!this.a.d.u(0,a)},
$S:43}
A.a7K.prototype={
$2(a,b){return a.CW-b.CW},
$S:47}
A.a7L.prototype={
$2(a,b){return a.CW-b.CW},
$S:47}
A.a7I.prototype={
$1(a){if(a.cy.a1(0,this.b)){this.a.a=a
return!1}return!0},
$S:43}
A.h9.prototype={
kI(a,b){var s=this
s.f.m(0,a,b)
s.r=s.r|a.a
s.e=!0},
es(a,b){this.kI(a,new A.a7q(b))},
skm(a){a.toString
this.es(B.hi,a)},
skl(a){a.toString
this.es(B.Cq,a)},
svB(a){this.es(B.ec,a)},
svz(a){this.es(B.Y1,a)},
svC(a){this.es(B.ed,a)},
svD(a){this.es(B.ea,a)},
svA(a){this.es(B.eb,a)},
sC3(a){this.es(B.Cr,a)},
sBV(a){this.es(B.Cp,a)},
sBS(a,b){this.es(B.Y2,b)},
sBT(a,b){this.es(B.Y5,b)},
sCa(a,b){this.es(B.XY,b)},
sC8(a){this.kI(B.Y3,new A.a7u(a))},
sC6(a){this.kI(B.Y6,new A.a7s(a))},
sC9(a){this.kI(B.Y4,new A.a7v(a))},
sC7(a){this.kI(B.XX,new A.a7t(a))},
sCe(a){this.kI(B.XZ,new A.a7w(a))},
sCf(a){this.kI(B.Y_,new A.a7x(a))},
sBW(a){this.es(B.jP,a)},
sBX(a){this.es(B.jQ,a)},
sQ2(a){if(a==this.k4)return
this.k4=a
this.e=!0},
sQ3(a){if(a==this.ok)return
this.ok=a
this.e=!0},
sBH(a){return},
sAe(a){return},
shm(a,b){if(b===this.y1)return
this.y1=b
this.e=!0},
zB(a){var s=this.c3;(s==null?this.c3=A.aF(t.l):s).B(0,a)},
bg(a,b){var s=this,r=s.b4,q=a.a
if(b)s.b4=r|q
else s.b4=r&~q
s.e=!0},
N2(a){var s=this
if(a==null||!a.e||!s.e)return!0
if((s.r&a.r)!==0)return!1
if((s.b4&a.b4)!==0)return!1
if(s.rx.a.length!==0&&a.rx.a.length!==0)return!1
return!0},
mJ(a){var s,r,q,p=this
if(!a.e)return
s=a.f
if(a.b)s.U(0,new A.a7r(p))
else p.f.K(0,s)
s=p.r
r=a.b
q=a.r
p.r=s|(r?q&$.UZ():q)
p.R8.K(0,a.R8)
p.b4=p.b4|a.b4
p.by=a.by
if(p.aB==null)p.aB=a.aB
if(p.an==null)p.an=a.an
if(p.bi==null)p.bi=a.bi
if(p.xr==null)p.xr=a.xr
if(p.k3==null)p.k3=a.k3
if(p.ok==null)p.ok=a.ok
if(p.k4==null)p.k4=a.k4
p.p1=a.p1
p.p2=a.p2
p.p3=a.p3
s=p.av
if(s==null){s=p.av=a.av
p.e=!0}if(p.k2==null)p.k2=a.k2
r=p.RG
p.RG=A.ah3(a.RG,a.av,r,s)
if(p.rx.a==="")p.rx=a.rx
if(p.ry.a==="")p.ry=a.ry
if(p.to.a==="")p.to=a.to
s=p.x1
r=p.av
p.x1=A.ah3(a.x1,a.av,s,r)
if(p.x2==="")p.x2=a.x2
p.y2=Math.max(p.y2,a.y2+a.y1)
p.e=p.e||a.e},
a4P(){var s=this,r=A.k6()
r.a=s.a
r.c=s.c
r.d=s.d
r.e=s.e
r.p4=s.p4
r.av=s.av
r.k2=s.k2
r.RG=s.RG
r.ry=s.ry
r.rx=s.rx
r.to=s.to
r.x1=s.x1
r.xr=s.xr
r.x2=s.x2
r.y1=s.y1
r.y2=s.y2
r.b4=s.b4
r.c3=s.c3
r.by=s.by
r.aB=s.aB
r.an=s.an
r.bi=s.bi
r.r=s.r
r.k3=s.k3
r.ok=s.ok
r.k4=s.k4
r.p1=s.p1
r.p2=s.p2
r.p3=s.p3
r.f.K(0,s.f)
r.R8.K(0,s.R8)
r.b=s.b
return r}}
A.a7q.prototype={
$1(a){this.a.$0()},
$S:6}
A.a7u.prototype={
$1(a){a.toString
this.a.$1(A.mm(a))},
$S:6}
A.a7s.prototype={
$1(a){a.toString
this.a.$1(A.mm(a))},
$S:6}
A.a7v.prototype={
$1(a){a.toString
this.a.$1(A.mm(a))},
$S:6}
A.a7t.prototype={
$1(a){a.toString
this.a.$1(A.mm(a))},
$S:6}
A.a7w.prototype={
$1(a){var s,r,q
a.toString
s=J.anv(t.f.a(a),t.N,t.S)
r=s.j(0,"base")
r.toString
q=s.j(0,"extent")
q.toString
this.a.$1(A.LY(B.J,r,q,!1))},
$S:6}
A.a7x.prototype={
$1(a){a.toString
this.a.$1(A.bc(a))},
$S:6}
A.a7r.prototype={
$2(a,b){if(($.UZ()&a.a)>0)this.a.f.m(0,a,b)},
$S:170}
A.XH.prototype={
F(){return"DebugSemanticsDumpOrder."+this.b}}
A.RM.prototype={}
A.RP.prototype={}
A.Dq.prototype={
j2(a,b){return this.a8D(a,!0)},
a8D(a,b){var s=0,r=A.M(t.N),q,p=this,o,n
var $async$j2=A.H(function(c,d){if(c===1)return A.J(d,r)
while(true)switch(s){case 0:s=3
return A.E(p.fY(0,a),$async$j2)
case 3:n=d
n.byteLength
o=B.a0.ea(0,A.aa8(n,0,null))
q=o
s=1
break
case 1:return A.K(q,r)}})
return A.L($async$j2,r)},
i(a){return"<optimized out>#"+A.bd(this)+"()"}}
A.WA.prototype={
j2(a,b){if(b)return this.a.br(0,a,new A.WB(this,a))
return this.E6(a,!0)},
a8C(a){return this.j2(a,!0)},
a8E(a,b,c){var s,r=this,q={},p=r.b
if(p.a1(0,a)){q=p.j(0,a)
q.toString
return c.h("a4<0>").a(q)}q.a=q.b=null
r.j2(a,!1).aH(b,c).dK(new A.WC(q,r,a,c),new A.WD(q,r,a),t.H)
s=q.a
if(s!=null)return s
s=new A.a5($.ab,c.h("a5<0>"))
q.b=new A.aY(s,c.h("aY<0>"))
p.m(0,a,s)
return q.b.a},
na(a){this.a.v(0,a)
this.b.v(0,a)
this.c.v(0,a)}}
A.WB.prototype={
$0(){return this.a.E6(this.b,!0)},
$S:171}
A.WC.prototype={
$1(a){var s=this,r=new A.by(a,s.d.h("by<0>")),q=s.a
q.a=r
s.b.b.m(0,s.c,r)
q=q.b
if(q!=null)q.cc(0,a)},
$S(){return this.d.h("aH(0)")}}
A.WD.prototype={
$2(a,b){this.b.b.v(0,this.c)
this.a.b.fK(a,b)},
$S:12}
A.a48.prototype={
fY(a,b){var s,r=B.bY.dE(A.Tn(null,A.To(B.iQ,b,B.a0,!1),null).e),q=$.hS.fb$
q===$&&A.b()
s=q.rs(0,"flutter/assets",A.Wl(r)).aH(new A.a49(b),t.yp)
return s},
vk(a){return this.a8w(a)},
a8w(a){var s=0,r=A.M(t.gG),q,p=this,o,n
var $async$vk=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)switch(s){case 0:o=A
n=A
s=3
return A.E(p.fY(0,a),$async$vk)
case 3:q=o.vM(n.aa8(c,0,null))
s=1
break
case 1:return A.K(q,r)}})
return A.L($async$vk,r)}}
A.a49.prototype={
$1(a){if(a==null)throw A.c(A.Fx(A.a([A.aFh(this.a),A.b7("The asset does not exist or has empty data.")],t.p)))
return a},
$S:172}
A.VU.prototype={}
A.qN.prototype={
Zo(){var s,r,q=this,p=t.m,o=new A.a_S(A.C(p,t.lT),A.aF(t.vQ),A.a([],t.AV))
q.fR$!==$&&A.cq()
q.fR$=o
s=$.ajo()
r=A.a([],t.DG)
q.eK$!==$&&A.cq()
q.eK$=new A.Go(o,s,r,A.aF(p))
p=q.fR$
p===$&&A.b()
p.rN().aH(new A.a7S(q),t.P)},
qc(){var s=$.mw()
s.a.M(0)
s.b.M(0)
s.c.M(0)},
ka(a){return this.a75(a)},
a75(a){var s=0,r=A.M(t.H),q,p=this
var $async$ka=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)switch(s){case 0:switch(A.bc(J.be(t.a.a(a),"type"))){case"memoryPressure":p.qc()
break}s=1
break
case 1:return A.K(q,r)}})
return A.L($async$ka,r)},
UO(){var s=A.b1("controller")
s.sbO(A.lZ(null,new A.a7R(s),null,!1,t.xe))
return J.ax4(s.aq())},
a9w(){if(this.k4$==null)$.aP()
return},
yc(a){return this.YC(a)},
YC(a){var s=0,r=A.M(t.dR),q,p=this,o,n
var $async$yc=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)switch(s){case 0:a.toString
o=A.aCo(a)
n=p.k4$
o.toString
B.b.U(p.Xq(n,o),p.ga6k())
q=null
s=1
break
case 1:return A.K(q,r)}})
return A.L($async$yc,r)},
Xq(a,b){var s,r,q,p
if(a===b)return B.PD
if(a===B.eo&&b===B.d9)return B.Lu
s=A.a([],t.sP)
if(a==null)s.push(b)
else{r=B.b.ht(B.fb,a)
q=B.b.ht(B.fb,b)
if(r>q)for(p=q;p<r;++p)B.b.lq(s,0,B.fb[p])
else for(p=r+1;p<=q;++p)s.push(B.fb[p])}return s},
t9(a){return this.YK(a)},
YK(a){var s=0,r=A.M(t.z),q,p=this,o
var $async$t9=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)switch(s){case 0:case 3:switch(a.a){case"SystemChrome.systemUIChange":s=5
break
case"System.requestAppExit":s=6
break
default:s=4
break}break
case 5:t.j.a(a.b)
s=4
break
case 6:o=A
s=7
return A.E(p.uW(),$async$t9)
case 7:q=o.aQ(["response",c.b],t.N,t.z)
s=1
break
case 4:case 1:return A.K(q,r)}})
return A.L($async$t9,r)},
v7(){var s=0,r=A.M(t.H)
var $async$v7=A.H(function(a,b){if(a===1)return A.J(b,r)
while(true)switch(s){case 0:s=2
return A.E(B.cO.v9("System.initializationComplete",t.z),$async$v7)
case 2:return A.K(null,r)}})
return A.L($async$v7,r)},
$idN:1}
A.a7S.prototype={
$1(a){var s=$.aP(),r=this.a.eK$
r===$&&A.b()
s.ax=r.ga6x()
s.ay=$.ab
B.Ed.wr(r.ga6U())},
$S:15}
A.a7R.prototype={
$0(){var s=0,r=A.M(t.H),q=this,p,o,n
var $async$$0=A.H(function(a,b){if(a===1)return A.J(b,r)
while(true)switch(s){case 0:o=A.b1("rawLicenses")
n=o
s=2
return A.E($.mw().j2("NOTICES",!1),$async$$0)
case 2:n.sbO(b)
p=q.a
n=J
s=3
return A.E(A.aGL(A.aGw(),o.aq(),"parseLicenses",t.N,t.rh),$async$$0)
case 3:n.tB(b,J.awZ(p.aq()))
s=4
return A.E(J.anw(p.aq()),$async$$0)
case 4:return A.K(null,r)}})
return A.L($async$$0,r)},
$S:29}
A.ac4.prototype={
rs(a,b,c){var s=new A.a5($.ab,t.sB)
$.aP().IM(b,c,A.aoP(new A.ac5(new A.aY(s,t.BB))))
return s},
ws(a,b){if(b==null){a=$.D3().a.j(0,a)
if(a!=null)a.e=null}else $.D3().Qg(a,new A.ac6(b))}}
A.ac5.prototype={
$1(a){var s,r,q,p
try{this.a.cc(0,a)}catch(q){s=A.a7(q)
r=A.ar(q)
p=A.b7("during a platform message response callback")
A.cE(new A.bq(s,r,"services library",p,null,!1))}},
$S:13}
A.ac6.prototype={
$2(a,b){return this.Pj(a,b)},
Pj(a,b){var s=0,r=A.M(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
var $async$$2=A.H(function(c,d){if(c===1){p=d
s=q}while(true)switch(s){case 0:i=null
q=3
k=n.a.$1(a)
s=6
return A.E(t.C8.b(k)?k:A.fE(k,t.o),$async$$2)
case 6:i=d
o.push(5)
s=4
break
case 3:q=2
h=p
m=A.a7(h)
l=A.ar(h)
k=A.b7("during a platform message callback")
A.cE(new A.bq(m,l,"services library",k,null,!1))
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
b.$1(i)
s=o.pop()
break
case 5:return A.K(null,r)
case 1:return A.J(p,r)}})
return A.L($async$$2,r)},
$S:176}
A.q3.prototype={
F(){return"KeyboardLockMode."+this.b}}
A.ll.prototype={}
A.nn.prototype={}
A.lm.prototype={}
A.w5.prototype={}
A.a_S.prototype={
rN(){var s=0,r=A.M(t.H),q=this,p,o,n,m,l,k
var $async$rN=A.H(function(a,b){if(a===1)return A.J(b,r)
while(true)switch(s){case 0:l=t.S
s=2
return A.E(B.Wq.v8("getKeyboardState",l,l),$async$rN)
case 2:k=b
if(k!=null)for(l=J.e4(k),p=J.aj(l.gbl(k)),o=q.a;p.p();){n=p.gD(p)
m=l.j(k,n)
m.toString
o.m(0,new A.m(n),new A.f(m))}return A.K(null,r)}})
return A.L($async$rN,r)},
WA(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.a7(l)
o=A.ar(l)
k=A.b7("while processing a key handler")
j=$.hp()
if(j!=null)j.$1(new A.bq(p,o,"services library",k,null,!1))}}this.d=!1
return s},
Mu(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.nn){q.a.m(0,p,o)
s=$.auQ().j(0,o.a)
if(s!=null){r=q.b
if(r.u(0,s))r.v(0,s)
else r.B(0,s)}}else if(a instanceof A.lm)q.a.v(0,p)
return q.WA(a)}}
A.Gn.prototype={
F(){return"KeyDataTransitMode."+this.b}}
A.w4.prototype={
i(a){return"KeyMessage("+A.h(this.a)+")"}}
A.Go.prototype={
a6y(a){var s,r=this,q=r.d
switch((q==null?r.d=B.J_:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.aA9(a)
if(a.f&&r.e.length===0){r.b.Mu(s)
r.G3(A.a([s],t.DG),null)}else r.e.push(s)
return!1}},
G3(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.w4(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.a7(p)
q=A.ar(p)
o=A.b7("while processing the key message handler")
A.cE(new A.bq(r,q,"services library",o,null,!1))}}return!1},
B7(a){var s=0,r=A.M(t.a),q,p=this,o,n,m,l,k,j,i
var $async$B7=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.IZ
p.c.a.push(p.gW2())}o=A.aBP(t.a.a(a))
if(o instanceof A.iR){p.f.v(0,o.c.ghz())
n=!0}else if(o instanceof A.qw){m=p.f
l=o.c
if(m.u(0,l.ghz())){m.v(0,l.ghz())
n=!1}else n=!0}else n=!0
if(n){p.c.a6T(o)
for(m=p.e,l=m.length,k=p.b,j=!1,i=0;i<m.length;m.length===l||(0,A.O)(m),++i)j=k.Mu(m[i])||j
j=p.G3(m,o)||j
B.b.M(m)}else j=!0
q=A.aQ(["handled",j],t.N,t.z)
s=1
break
case 1:return A.K(q,r)}})
return A.L($async$B7,r)},
W3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.ghz(),c=e.gqs()
e=this.b.a
s=A.n(e).h("b0<1>")
r=A.h2(new A.b0(e,s),s.h("k.E"))
q=A.a([],t.DG)
p=e.j(0,d)
o=$.hS.av$
n=a.a
if(n==="")n=f
if(a instanceof A.iR)if(p==null){m=new A.nn(d,c,n,o,!1)
r.B(0,d)}else m=new A.w5(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.lm(d,p,f,o,!1)
r.v(0,d)}for(s=this.c.d,l=A.n(s).h("b0<1>"),k=l.h("k.E"),j=r.lg(A.h2(new A.b0(s,l),k)),j=j.gR(j),i=this.e;j.p();){h=j.gD(j)
if(h.k(0,d))q.push(new A.lm(h,c,f,o,!0))
else{g=e.j(0,h)
g.toString
i.push(new A.lm(h,g,f,o,!0))}}for(e=A.h2(new A.b0(s,l),k).lg(r),e=e.gR(e);e.p();){l=e.gD(e)
k=s.j(0,l)
k.toString
i.push(new A.nn(l,k,f,o,!0))}if(m!=null)i.push(m)
B.b.K(i,q)}}
A.P7.prototype={}
A.a1A.prototype={}
A.f.prototype={
gt(a){return B.f.gt(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.t(this))return!1
return b instanceof A.f&&b.a===this.a}}
A.m.prototype={
gt(a){return B.f.gt(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.t(this))return!1
return b instanceof A.m&&b.a===this.a}}
A.P8.prototype={}
A.iG.prototype={
i(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.xn.prototype={
i(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$ibv:1}
A.wH.prototype={
i(a){return"MissingPluginException("+A.h(this.a)+")"},
$ibv:1}
A.a8K.prototype={
eb(a){if(a==null)return null
return B.a0.ea(0,A.aa8(a,0,null))},
bs(a){if(a==null)return null
return A.Wl(B.bY.dE(a))}}
A.a1a.prototype={
bs(a){if(a==null)return null
return B.ia.bs(B.bW.uG(a))},
eb(a){var s
if(a==null)return a
s=B.ia.eb(a)
s.toString
return B.bW.ea(0,s)}}
A.a1c.prototype={
hn(a){var s=B.bV.bs(A.aQ(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
fN(a){var s,r,q,p=null,o=B.bV.eb(a)
if(!t.f.b(o))throw A.c(A.bs("Expected method call Map, got "+A.h(o),p,p))
s=J.ay(o)
r=s.j(o,"method")
q=s.j(o,"args")
if(typeof r=="string")return new A.iG(r,q)
throw A.c(A.bs("Invalid method call: "+A.h(o),p,p))},
Ls(a){var s,r,q,p=null,o=B.bV.eb(a)
if(!t.j.b(o))throw A.c(A.bs("Expected envelope List, got "+A.h(o),p,p))
s=J.ay(o)
if(s.gn(o)===1)return s.j(o,0)
if(s.gn(o)===3)if(typeof s.j(o,0)=="string")r=s.j(o,1)==null||typeof s.j(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.bc(s.j(o,0))
q=A.bH(s.j(o,1))
throw A.c(A.a4b(r,s.j(o,2),q,p))}if(s.gn(o)===4)if(typeof s.j(o,0)=="string")if(s.j(o,1)==null||typeof s.j(o,1)=="string")r=s.j(o,3)==null||typeof s.j(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.bc(s.j(o,0))
q=A.bH(s.j(o,1))
throw A.c(A.a4b(r,s.j(o,2),q,A.bH(s.j(o,3))))}throw A.c(A.bs("Invalid envelope: "+A.h(o),p,p))},
pT(a){var s=B.bV.bs([a])
s.toString
return s},
lj(a,b,c){var s=B.bV.bs([a,c,b])
s.toString
return s},
LS(a,b){return this.lj(a,null,b)}}
A.a8u.prototype={
bs(a){var s
if(a==null)return null
s=A.aaz(64)
this.d8(0,s,a)
return s.jO()},
eb(a){var s,r
if(a==null)return null
s=new A.xy(a)
r=this.h2(0,s)
if(s.b<a.byteLength)throw A.c(B.aK)
return r},
d8(a,b,c){var s,r,q,p,o,n,m,l=this
if(c==null)b.dA(0,0)
else if(A.kF(c))b.dA(0,c?1:2)
else if(typeof c=="number"){b.dA(0,6)
b.hR(8)
s=$.cV()
b.d.setFloat64(0,c,B.aa===s)
b.a1F(b.e)}else if(A.oJ(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.dA(0,3)
s=$.cV()
r.setInt32(0,c,B.aa===s)
b.oZ(b.e,0,4)}else{b.dA(0,4)
s=$.cV()
B.h2.DO(r,0,c,s)}}else if(typeof c=="string"){b.dA(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=null
o=0
break}m=c.charCodeAt(n)
if(m<=127)q[n]=m
else{p=B.bY.dE(B.d.bX(c,n))
o=n
break}++n}if(p!=null){l.ep(b,o+p.length)
b.kK(A.aa8(q,0,o))
b.kK(p)}else{l.ep(b,s)
b.kK(q)}}else if(t.D.b(c)){b.dA(0,8)
l.ep(b,c.length)
b.kK(c)}else if(t.fO.b(c)){b.dA(0,9)
s=c.length
l.ep(b,s)
b.hR(4)
b.kK(A.d5(c.buffer,c.byteOffset,4*s))}else if(t.D4.b(c)){b.dA(0,14)
s=c.length
l.ep(b,s)
b.hR(4)
b.kK(A.d5(c.buffer,c.byteOffset,4*s))}else if(t.cE.b(c)){b.dA(0,11)
s=c.length
l.ep(b,s)
b.hR(8)
b.kK(A.d5(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.dA(0,12)
s=J.ay(c)
l.ep(b,s.gn(c))
for(s=s.gR(c);s.p();)l.d8(0,b,s.gD(s))}else if(t.f.b(c)){b.dA(0,13)
s=J.ay(c)
l.ep(b,s.gn(c))
s.U(c,new A.a8w(l,b))}else throw A.c(A.hr(c,null,null))},
h2(a,b){if(b.b>=b.a.byteLength)throw A.c(B.aK)
return this.j8(b.lQ(0),b)},
j8(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cV()
q=b.a.getInt32(s,B.aa===r)
b.b+=4
return q
case 4:return b.we(0)
case 6:b.hR(8)
s=b.b
r=$.cV()
q=b.a.getFloat64(s,B.aa===r)
b.b+=8
return q
case 5:case 7:p=k.dH(b)
return B.d2.dE(b.lR(p))
case 8:return b.lR(k.dH(b))
case 9:p=k.dH(b)
b.hR(4)
s=b.a
o=A.apI(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.wf(k.dH(b))
case 14:p=k.dH(b)
b.hR(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.UA(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.dH(b)
b.hR(8)
s=b.a
o=A.apG(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.dH(b)
n=A.ba(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.Y(B.aK)
b.b=r+1
n[m]=k.j8(s.getUint8(r),b)}return n
case 13:p=k.dH(b)
s=t.X
n=A.C(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.Y(B.aK)
b.b=r+1
r=k.j8(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.Y(B.aK)
b.b=l+1
n.m(0,r,k.j8(s.getUint8(l),b))}return n
default:throw A.c(B.aK)}},
ep(a,b){var s,r
if(b<254)a.dA(0,b)
else{s=a.d
if(b<=65535){a.dA(0,254)
r=$.cV()
s.setUint16(0,b,B.aa===r)
a.oZ(a.e,0,2)}else{a.dA(0,255)
r=$.cV()
s.setUint32(0,b,B.aa===r)
a.oZ(a.e,0,4)}}},
dH(a){var s,r,q=a.lQ(0)
switch(q){case 254:s=a.b
r=$.cV()
q=a.a.getUint16(s,B.aa===r)
a.b+=2
return q
case 255:s=a.b
r=$.cV()
q=a.a.getUint32(s,B.aa===r)
a.b+=4
return q
default:return q}}}
A.a8w.prototype={
$2(a,b){var s=this.a,r=this.b
s.d8(0,r,a)
s.d8(0,r,b)},
$S:45}
A.a8y.prototype={
hn(a){var s=A.aaz(64)
B.ab.d8(0,s,a.a)
B.ab.d8(0,s,a.b)
return s.jO()},
fN(a){var s,r,q
a.toString
s=new A.xy(a)
r=B.ab.h2(0,s)
q=B.ab.h2(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.iG(r,q)
else throw A.c(B.ml)},
pT(a){var s=A.aaz(64)
s.dA(0,0)
B.ab.d8(0,s,a)
return s.jO()},
lj(a,b,c){var s=A.aaz(64)
s.dA(0,1)
B.ab.d8(0,s,a)
B.ab.d8(0,s,c)
B.ab.d8(0,s,b)
return s.jO()},
LS(a,b){return this.lj(a,null,b)},
Ls(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.c(B.I7)
s=new A.xy(a)
if(s.lQ(0)===0)return B.ab.h2(0,s)
r=B.ab.h2(0,s)
q=B.ab.h2(0,s)
p=B.ab.h2(0,s)
o=s.b<a.byteLength?A.bH(B.ab.h2(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.c(A.a4b(r,p,A.bH(q),o))
else throw A.c(B.I8)}}
A.a2E.prototype={
a6n(a,b,c){var s,r,q,p
if(t.x.b(b)){this.b.v(0,a)
return}s=this.b
r=s.j(0,a)
q=A.aDE(c)
if(q==null)q=this.a
if(J.e(r==null?null:t.Ft.a(r.a),q))return
p=q.un(a)
s.m(0,a,p)
B.Wr.fV("activateSystemCursor",A.aQ(["device",p.b,"kind",t.Ft.a(p.a).a],t.N,t.z),t.H)}}
A.wJ.prototype={}
A.cu.prototype={
i(a){var s=this.gpH()
return s}}
A.NU.prototype={
un(a){throw A.c(A.co(null))},
gpH(){return"defer"}}
A.SB.prototype={}
A.j1.prototype={
gpH(){return"SystemMouseCursor("+this.a+")"},
un(a){return new A.SB(this,a)},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.t(this))return!1
return b instanceof A.j1&&b.a===this.a},
gt(a){return B.d.gt(this.a)}}
A.PL.prototype={}
A.kU.prototype={
gpt(){var s=$.hS.fb$
s===$&&A.b()
return s},
hb(a,b){return this.Q8(0,b,this.$ti.h("1?"))},
Q8(a,b,c){var s=0,r=A.M(c),q,p=this,o,n,m
var $async$hb=A.H(function(d,e){if(d===1)return A.J(e,r)
while(true)switch(s){case 0:o=p.b
n=p.gpt().rs(0,p.a,o.bs(b))
m=o
s=3
return A.E(t.C8.b(n)?n:A.fE(n,t.o),$async$hb)
case 3:q=m.eb(e)
s=1
break
case 1:return A.K(q,r)}})
return A.L($async$hb,r)},
wr(a){this.gpt().ws(this.a,new A.VS(this,a))}}
A.VS.prototype={
$1(a){return this.Pb(a)},
Pb(a){var s=0,r=A.M(t.o),q,p=this,o,n
var $async$$1=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.E(p.b.$1(o.eb(a)),$async$$1)
case 3:q=n.bs(c)
s=1
break
case 1:return A.K(q,r)}})
return A.L($async$$1,r)},
$S:77}
A.nw.prototype={
gpt(){var s,r=this.c
if(r==null){s=$.hS.fb$
s===$&&A.b()
r=s}return r},
kR(a,b,c,d){return this.ZE(a,b,c,d,d.h("0?"))},
ZE(a,b,c,d,e){var s=0,r=A.M(e),q,p=this,o,n,m,l,k
var $async$kR=A.H(function(f,g){if(f===1)return A.J(g,r)
while(true)switch(s){case 0:o=p.b
n=o.hn(new A.iG(a,b))
m=p.a
l=p.gpt().rs(0,m,n)
s=3
return A.E(t.C8.b(l)?l:A.fE(l,t.o),$async$kR)
case 3:k=g
if(k==null){if(c){q=null
s=1
break}throw A.c(A.aAL("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.Ls(k))
s=1
break
case 1:return A.K(q,r)}})
return A.L($async$kR,r)},
fV(a,b,c){return this.kR(a,b,!1,c)},
v8(a,b,c){return this.a81(a,b,c,b.h("@<0>").P(c).h("ap<1,2>?"))},
a81(a,b,c,d){var s=0,r=A.M(d),q,p=this,o
var $async$v8=A.H(function(e,f){if(e===1)return A.J(f,r)
while(true)switch(s){case 0:s=3
return A.E(p.fV(a,null,t.f),$async$v8)
case 3:o=f
q=o==null?null:J.anv(o,b,c)
s=1
break
case 1:return A.K(q,r)}})
return A.L($async$v8,r)},
lX(a){var s=this.gpt()
s.ws(this.a,new A.a2q(this,a))},
t8(a,b){return this.XP(a,b)},
XP(a,b){var s=0,r=A.M(t.o),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$t8=A.H(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.fN(a)
p=4
e=h
s=7
return A.E(b.$1(g),$async$t8)
case 7:k=e.pT(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.a7(f)
if(k instanceof A.xn){m=k
k=m.a
i=m.b
q=h.lj(k,m.c,i)
s=1
break}else if(k instanceof A.wH){q=null
s=1
break}else{l=k
h=h.LS("error",J.e7(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.K(q,r)
case 2:return A.J(o,r)}})
return A.L($async$t8,r)}}
A.a2q.prototype={
$1(a){return this.a.t8(a,this.b)},
$S:77}
A.jV.prototype={
fV(a,b,c){return this.a82(a,b,c,c.h("0?"))},
v9(a,b){return this.fV(a,null,b)},
a82(a,b,c,d){var s=0,r=A.M(d),q,p=this
var $async$fV=A.H(function(e,f){if(e===1)return A.J(f,r)
while(true)switch(s){case 0:q=p.Ru(a,b,!0,c)
s=1
break
case 1:return A.K(q,r)}})
return A.L($async$fV,r)}}
A.no.prototype={
F(){return"KeyboardSide."+this.b}}
A.fo.prototype={
F(){return"ModifierKey."+this.b}}
A.xw.prototype={
ga8T(){var s,r,q=A.C(t.yx,t.FE)
for(s=0;s<9;++s){r=B.ri[s]
if(this.a88(r))q.m(0,r,B.cC)}return q}}
A.ft.prototype={}
A.a4P.prototype={
$0(){var s,r,q,p=this.b,o=J.ay(p),n=A.bH(o.j(p,"key")),m=n==null
if(!m){s=n.length
s=s!==0&&s===1}else s=!1
if(s)this.a.a=n
s=A.bH(o.j(p,"code"))
if(s==null)s=""
m=m?"":n
r=A.CB(o.j(p,"location"))
if(r==null)r=0
q=A.CB(o.j(p,"metaState"))
if(q==null)q=0
p=A.CB(o.j(p,"keyCode"))
return new A.K7(s,m,r,q,p==null?0:p)},
$S:180}
A.iR.prototype={}
A.qw.prototype={}
A.a4U.prototype={
a6T(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.iR){p=a.c
i.d.m(0,p.ghz(),p.gqs())}else if(a instanceof A.qw)i.d.v(0,a.c.ghz())
i.a2b(a)
for(p=i.a,o=A.ad(p,!0,t.vc),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.b.u(p,s))s.$1(a)}catch(l){r=A.a7(l)
q=A.ar(l)
k=A.b7("while processing a raw key listener")
j=$.hp()
if(j!=null)j.$1(new A.bq(r,q,"services library",k,null,!1))}}return!1},
a2b(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga8T(),e=t.m,d=A.C(e,t.lT),c=A.aF(e),b=this.d,a=A.h2(new A.b0(b,A.n(b).h("b0<1>")),e),a0=a1 instanceof A.iR
if(a0)a.B(0,g.ghz())
for(s=g.a,r=null,q=0;q<9;++q){p=B.ri[q]
o=$.auT()
n=o.j(0,new A.cp(p,B.bs))
if(n==null)continue
m=B.yg.j(0,s)
if(n.u(0,m==null?new A.m(98784247808+B.d.gt(s)):m))r=p
if(f.j(0,p)===B.cC){c.K(0,n)
if(n.hi(0,a.giH(a)))continue}l=f.j(0,p)==null?A.aF(e):o.j(0,new A.cp(p,f.j(0,p)))
if(l==null)continue
for(o=A.n(l),m=new A.kr(l,l.r,o.h("kr<1>")),m.c=l.e,o=o.c;m.p();){k=m.d
if(k==null)k=o.a(k)
j=$.auS().j(0,k)
j.toString
d.m(0,k,j)}}i=b.j(0,B.cg)!=null&&!J.e(b.j(0,B.cg),B.dL)
for(e=$.an0(),e=A.iF(e,e.r,A.n(e).c);e.p();){a=e.d
h=i&&a.k(0,B.cg)
if(!c.u(0,a)&&!h)b.v(0,a)}b.v(0,B.dZ)
b.K(0,d)
if(a0&&r!=null&&!b.a1(0,g.ghz())){e=g.ghz().k(0,B.cU)
if(e)b.m(0,g.ghz(),g.gqs())}}}
A.cp.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.t(this))return!1
return b instanceof A.cp&&b.a===this.a&&b.b==this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.QU.prototype={}
A.QT.prototype={}
A.K7.prototype={
ghz(){var s=this.a,r=B.yg.j(0,s)
return r==null?new A.m(98784247808+B.d.gt(s)):r},
gqs(){var s,r=this.b,q=B.VA.j(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.U_.j(0,r)
if(s!=null)return s
if(r.length===1)return new A.f(r.toLowerCase().charCodeAt(0))
return new A.f(B.d.gt(this.a)+98784247808)},
a88(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.t(s))return!1
return b instanceof A.K7&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.y_.prototype={
ga9Z(){var s=this
if(s.c)return new A.by(s.a,t.m6)
if(s.b==null){s.b=new A.aY(new A.a5($.ab,t.jr),t.sV)
s.t7()}return s.b.a},
t7(){var s=0,r=A.M(t.H),q,p=this,o
var $async$t7=A.H(function(a,b){if(a===1)return A.J(b,r)
while(true)switch(s){case 0:s=3
return A.E(B.jp.v9("get",t.F),$async$t7)
case 3:o=b
if(p.b==null){s=1
break}p.HV(o)
case 1:return A.K(q,r)}})
return A.L($async$t7,r)},
HV(a){var s,r=a==null
if(!r){s=J.be(a,"enabled")
s.toString
A.mm(s)}else s=!1
this.a6V(r?null:t.Fx.a(J.be(a,"data")),s)},
a6V(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bE.rx$.push(new A.a6q(q))
s=q.a
if(b){p=q.Wm(a)
r=t.N
if(p==null){p=t.X
p=A.C(p,p)}r=new A.cI(p,q,null,"root",A.C(r,t.hp),A.C(r,t.Cm))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.cc(0,p)
q.b=null
if(q.a!=s){q.am()
if(s!=null)s.l()}},
yv(a){return this.a_f(a)},
a_f(a){var s=0,r=A.M(t.H),q=this,p
var $async$yv=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.HV(t.F.a(a.b))
break
default:throw A.c(A.co(p+" was invoked but isn't implemented by "+A.t(q).i(0)))}return A.K(null,r)}})
return A.L($async$yv,r)},
Wm(a){if(a==null)return null
return t.ym.a(B.ab.eb(A.iH(a.buffer,a.byteOffset,a.byteLength)))},
Q0(a){var s=this
s.r.B(0,a)
if(!s.f){s.f=!0
$.bE.rx$.push(new A.a6r(s))}},
G6(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.e3(s,s.r,A.n(s).c),q=r.$ti.c;r.p();){p=r.d;(p==null?q.a(p):p).w=!1}s.M(0)
o=B.ab.bs(n.a.a)
B.jp.fV("put",A.d5(o.buffer,o.byteOffset,o.byteLength),t.H)},
a6e(){if($.bE.to$)return
this.G6()}}
A.a6q.prototype={
$1(a){this.a.d=!1},
$S:4}
A.a6r.prototype={
$1(a){return this.a.G6()},
$S:4}
A.cI.prototype={
goU(){var s=J.D7(this.a,"c",new A.a6n())
s.toString
return t.F.a(s)},
gjz(){var s=J.D7(this.a,"v",new A.a6o())
s.toString
return t.F.a(s)},
a4g(a,b){var s,r,q,p,o=this,n=o.f
if(n.a1(0,a)||!J.mx(o.goU(),a)){n=t.N
s=new A.cI(A.C(n,t.X),null,null,a,A.C(n,t.hp),A.C(n,t.Cm))
o.jH(s)
return s}r=t.N
q=o.c
p=J.be(o.goU(),a)
p.toString
s=new A.cI(t.F.a(p),q,o,a,A.C(r,t.hp),A.C(r,t.Cm))
n.m(0,a,s)
return s},
jH(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.tC(a)
a.d=s
s.EN(a)
if(a.c!=s.c)s.I8(a)}},
a17(a){this.tC(a)
a.d=null
if(a.c!=null){a.yT(null)
a.K2(this.gI7())}},
ms(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.Q0(r)}},
I8(a){a.yT(this.c)
a.K2(this.gI7())},
yT(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.v(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.ms()}},
tC(a){var s,r,q,p=this
if(J.e(p.f.v(0,a.e),a)){J.my(p.goU(),a.e)
s=p.r
r=s.j(0,a.e)
if(r!=null){q=J.bR(r)
p.Gl(q.dI(r))
if(q.gS(r))s.v(0,a.e)}if(J.ic(p.goU()))J.my(p.a,"c")
p.ms()
return}s=p.r
q=s.j(0,a.e)
if(q!=null)J.my(q,a)
q=s.j(0,a.e)
q=q==null?null:J.ic(q)
if(q===!0)s.v(0,a.e)},
EN(a){var s=this
if(s.f.a1(0,a.e)){J.eJ(s.r.br(0,a.e,new A.a6m()),a)
s.ms()
return}s.Gl(a)
s.ms()},
Gl(a){this.f.m(0,a.e,a)
J.fL(this.goU(),a.e,a.a)},
K3(a,b){var s,r,q=this.f
q=q.gaF(q)
s=this.r
s=s.gaF(s)
r=q.AY(0,new A.fe(s,new A.a6p(),A.n(s).h("fe<k.E,cI>")))
J.tB(b?A.ad(r,!1,A.n(r).h("k.E")):r,a)},
K2(a){return this.K3(a,!1)},
a9N(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.tC(r)
r.e=a
s=r.d
if(s!=null)s.EN(r)},
l(){var s,r=this
r.K3(r.ga16(),!0)
r.f.M(0)
r.r.M(0)
s=r.d
if(s!=null)s.tC(r)
r.d=null
r.yT(null)
r.x=!0},
i(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a6n.prototype={
$0(){var s=t.X
return A.C(s,s)},
$S:80}
A.a6o.prototype={
$0(){var s=t.X
return A.C(s,s)},
$S:80}
A.a6m.prototype={
$0(){return A.a([],t.oy)},
$S:184}
A.a6p.prototype={
$1(a){return a},
$S:185}
A.z4.prototype={
i(a){var s,r,q=this,p=", isDirectional: "
if(!q.glu())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.i(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.z4))return!1
if(!r.glu())return!b.glu()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gt(a){var s,r=this
if(!r.glu())return A.S(-B.f.gt(1),-B.f.gt(1),A.eU(B.J),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.eU(r.e):A.eU(B.J)
return A.S(B.f.gt(r.c),B.f.gt(r.d),s,B.du.gt(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.LU.prototype={
gVq(){var s=this.c
s===$&&A.b()
return s},
ti(a){return this.a__(a)},
a__(a){var s=0,r=A.M(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$ti=A.H(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.E(n.yh(a),$async$ti)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
m=A.a7(i)
l=A.ar(i)
k=A.b7("during method call "+a.a)
A.cE(new A.bq(m,l,"services library",k,new A.a9A(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.K(q,r)
case 2:return A.J(o,r)}})
return A.L($async$ti,r)},
yh(a){return this.Zc(a)},
Zc(a){var s=0,r=A.M(t.z),q,p=this,o,n,m,l,k,j
var $async$yh=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.j(0,J.be(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.ib(t.j.a(a.b),t.fY)
n=A.n(o).h("ae<P.E,F>")
m=p.f
l=A.n(m).h("b0<1>")
k=l.h("eu<k.E,v<@>>")
q=A.ad(new A.eu(new A.b_(new A.b0(m,l),new A.a9x(p,A.ad(new A.ae(o,new A.a9y(),n),!0,n.h("ax.E"))),l.h("b_<k.E>")),new A.a9z(p),k),!0,k.h("k.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.K(q,r)}})
return A.L($async$yh,r)}}
A.a9A.prototype={
$0(){var s=null
return A.a([A.ip("call",this.a,!0,B.aU,s,!1,s,s,B.ar,s,!1,!0,!0,B.b8,s,t.fw)],t.p)},
$S:11}
A.a9y.prototype={
$1(a){return a},
$S:186}
A.a9x.prototype={
$1(a){this.a.f.j(0,a)
return!1},
$S:25}
A.a9z.prototype={
$1(a){var s=this.a.f.j(0,a),r=s.gzS(s)
s=[a]
B.b.K(s,[r.gff(r),r.gCY(r),r.gbT(r),r.gaS(r)])
return s},
$S:187}
A.z1.prototype={}
A.Qe.prototype={}
A.TW.prototype={}
A.ahs.prototype={
$1(a){this.a.sbO(a)
return!1},
$S:18}
A.Vc.prototype={
a7Z(a,b,c){if(a.te(b,c))return new A.fG(!0,a.oI(b,c))
return B.Xq}}
A.Ve.prototype={
$1(a){t.im.a(a.gah())
return!1},
$S:37}
A.Vi.prototype={
$1(a){var s=this,r=s.b,q=A.ajC(t.im.a(a.gah()),r,s.d),p=q!=null
if(p&&q.te(r,s.c)){A.anF(a)
s.a.a=q.oI(r,s.c)}return p},
$S:37}
A.ME.prototype={}
A.agC.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.ka(s)},
$S:190}
A.fD.prototype={
ux(){return A.c8(!1,t.y)},
pN(a){var s=a.gje(),r=s.gcm(s).length===0?"/":s.gcm(s),q=s.gj7()
q=q.gS(q)?null:s.gj7()
r=A.Tn(s.gfT().length===0?null:s.gfT(),r,q).gp8()
A.tf(r,0,r.length,B.a0,!1)
return A.c8(!1,t.y)},
uw(){},
Lz(){},
Ly(){},
Lx(a){},
Ao(a){},
Av(){var s=0,r=A.M(t.mH),q
var $async$Av=A.H(function(a,b){if(a===1)return A.J(b,r)
while(true)switch(s){case 0:q=B.kC
s=1
break
case 1:return A.K(q,r)}})
return A.L($async$Av,r)}}
A.zm.prototype={
uW(){var s=0,r=A.M(t.mH),q,p=this,o,n,m,l
var $async$uW=A.H(function(a,b){if(a===1)return A.J(b,r)
while(true)switch(s){case 0:o=A.ad(p.af$,!0,t.T),n=o.length,m=!1,l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.E(o[l].Av(),$async$uW)
case 6:if(b===B.kD)m=!0
case 4:++l
s=3
break
case 5:q=m?B.kD:B.kC
s=1
break
case 1:return A.K(q,r)}})
return A.L($async$uW,r)},
a6D(){this.a5E($.aP().a.f)},
a5E(a){var s,r,q
for(s=A.ad(this.af$,!0,t.T),r=s.length,q=0;q<r;++q)s[q].Lx(a)},
uU(){var s=0,r=A.M(t.H),q,p=this,o,n,m
var $async$uU=A.H(function(a,b){if(a===1)return A.J(b,r)
while(true)switch(s){case 0:o=A.ad(p.af$,!0,t.T),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.E(o[m].ux(),$async$uU)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.a8Y()
case 1:return A.K(q,r)}})
return A.L($async$uU,r)},
uV(a){return this.a6S(a)},
a6S(a){var s=0,r=A.M(t.H),q,p=this,o,n,m,l
var $async$uV=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)switch(s){case 0:l=new A.nU(A.ef(a,0,null),null)
o=A.ad(p.af$,!0,t.T),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.E(o[m].pN(l),$async$uV)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.K(q,r)}})
return A.L($async$uV,r)},
ta(a){return this.YY(a)},
YY(a){var s=0,r=A.M(t.H),q,p=this,o,n,m,l
var $async$ta=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)switch(s){case 0:m=J.ay(a)
l=new A.nU(A.ef(A.bc(m.j(a,"location")),0,null),m.j(a,"state"))
m=A.ad(p.af$,!0,t.T),o=m.length,n=0
case 3:if(!(n<o)){s=5
break}s=6
return A.E(m[n].pN(l),$async$ta)
case 6:if(c){s=1
break}case 4:++n
s=3
break
case 5:case 1:return A.K(q,r)}})
return A.L($async$ta,r)},
YE(a){switch(a.a){case"popRoute":return this.uU()
case"pushRoute":return this.uV(A.bc(a.b))
case"pushRouteInformation":return this.ta(t.f.a(a.b))}return A.c8(null,t.z)},
XU(){this.AL()},
PZ(a){A.cn(B.w,new A.aav(this,a))},
$iao:1,
$idN:1}
A.agB.prototype={
$1(a){var s,r,q=$.bE
q.toString
s=this.a
r=s.a
r.toString
q.Oi(r)
s.a=null
this.b.ba$.f6(0)},
$S:72}
A.aav.prototype={
$0(){var s,r=this.a,q=r.bZ$
r.bN$=!0
s=r.J$
s.toString
r.bZ$=new A.y3(this.b,"[root]",null).a3N(s,q)
if(q==null)$.bE.AL()},
$S:0}
A.y3.prototype={
bh(a){return new A.y1(this,B.O)},
a3N(a,b){var s,r={}
r.a=b
if(b==null){a.Nf(new A.a6w(r,this,a))
s=r.a
s.toString
a.pv(s,new A.a6x(r))}else{b.ay=this
b.fg()}r=r.a
r.toString
return r},
c7(){return this.c}}
A.a6w.prototype={
$0(){var s=new A.y1(this.b,B.O)
this.a.a=s
s.f=this.c},
$S:0}
A.a6x.prototype={
$0(){var s=this.a.a
s.toString
s.EH(null,null)
s.tA()
s.m7()},
$S:0}
A.y1.prototype={
aT(a){var s=this.ax
if(s!=null)a.$1(s)},
i7(a){this.ax=null
this.jm(a)},
cW(a,b){this.EH(a,b)
this.tA()
this.m7()},
b5(a,b){this.m8(0,b)
this.tA()},
h0(){var s=this,r=s.ay
if(r!=null){s.ay=null
s.m8(0,r)
s.tA()}s.m7()},
tA(){var s,r,q,p,o,n,m=this
try{p=m.ax
o=m.e
o.toString
m.ax=m.d7(p,t.zy.a(o).b,null)}catch(n){s=A.a7(n)
r=A.ar(n)
p=A.b7("attaching to the render tree")
q=new A.bq(s,r,"widgets library",p,null,!1)
A.cE(q)
m.ax=null}}}
A.Mz.prototype={$iao:1}
A.Bo.prototype={
cW(a,b){this.wG(a,b)}}
A.Cc.prototype={
eh(){this.QK()
$.fV=this
var s=$.aP()
s.as=this.gYL()
s.at=$.ab},
D1(){this.QM()
this.xW()}}
A.Cd.prototype={
eh(){this.TN()
$.bE=this},
lp(){this.QL()}}
A.Ce.prototype={
eh(){var s,r=this
r.TP()
$.hS=r
r.fb$!==$&&A.cq()
r.fb$=B.FS
s=new A.y_(A.aF(t.hp),$.aU())
B.jp.lX(s.ga_e())
r.fc$=s
r.Zo()
s=$.apk
if(s==null)s=$.apk=A.a([],t.e8)
s.push(r.gUN())
B.Ef.wr(new A.agC(r))
B.Ee.wr(r.gYB())
B.cO.lX(r.gYJ())
$.av6()
r.a9w()
r.v7()},
lp(){this.TQ()}}
A.Cf.prototype={
eh(){this.TR()
$.hI=this
var s=t.K
this.iN$=new A.a0v(A.C(s,t.BK),A.C(s,t.lM),A.C(s,t.s8))},
qc(){this.SC()
var s=this.iN$
s===$&&A.b()
s.M(0)},
ka(a){return this.a76(a)},
a76(a){var s=0,r=A.M(t.H),q,p=this
var $async$ka=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)switch(s){case 0:s=3
return A.E(p.SD(a),$async$ka)
case 3:switch(A.bc(J.be(t.a.a(a),"type"))){case"fontsChange":p.AN$.am()
break}s=1
break
case 1:return A.K(q,r)}})
return A.L($async$ka,r)}}
A.Cg.prototype={
eh(){var s,r,q=this
q.TU()
$.L9=q
s=$.aP()
q.cd$=s.a.a
s.p3=q.gZ8()
r=$.ab
s.p4=r
s.R8=q.gZ6()
s.RG=r
q.GX()}}
A.Ch.prototype={
eh(){var s,r,q,p,o=this
o.TV()
$.nS=o
s=t.C
o.cx$=new A.NR(null,A.aGv(),null,A.a([],s),A.a([],s),A.a([],s),A.aF(t.aP),A.aF(t.EQ))
s=$.aP()
s.r=o.ga6H()
r=s.w=$.ab
s.id=o.ga7f()
s.k1=r
s.k4=o.ga6N()
s.ok=r
o.RG$.push(o.gYH())
o.a7F()
o.rx$.push(o.gZh())
r=o.cx$
r===$&&A.b()
q=o.ax$
if(q===$){p=new A.N2(o,$.aU())
o.gtJ().a0(0,p.gek())
o.ax$!==$&&A.aK()
o.ax$=p
q=p}r.ag(q)},
lp(){this.TS()},
v2(a,b,c){var s,r=this.cy$.j(0,c)
if(r!=null){s=r.fr$
if(s!=null)s.c6(A.anW(a),b)
a.B(0,new A.fY(r,t.Cq))}this.Rb(a,b,c)}}
A.Ci.prototype={
eh(){var s,r,q,p,o,n,m,l=this
l.TW()
$.aL=l
s=t.W
r=A.cA(s)
q=A.a([],t.pX)
p=t.S
o=new A.OJ(new A.vC(A.lq(null,null,t.tP,p),t.b4))
n=A.ZQ(!0,"Root Focus Scope",!1)
m=new A.vq(o,n,A.aF(t.lc),A.a([],t.e6),$.aU())
n.w=m
n=$.hS.eK$
n===$&&A.b()
n.a=o.ga6z()
$.fV.bj$.b.m(0,o.ga6P(),null)
s=new A.Wg(new A.OW(r),q,m,A.C(t.uY,s))
l.J$=s
s.a=l.gXT()
s=$.aP()
s.fx=l.ga6C()
s.fy=$.ab
B.h5.lX(l.gYD())
s=new A.EK(A.C(p,t.lv),B.ys)
B.ys.lX(s.ga_c())
l.ad$=s},
B3(){var s,r,q
this.Sd()
for(s=A.ad(this.af$,!0,t.T),r=s.length,q=0;q<r;++q)s[q].uw()},
Ba(){var s,r,q
this.Sf()
for(s=A.ad(this.af$,!0,t.T),r=s.length,q=0;q<r;++q)s[q].Lz()},
B5(){var s,r,q
this.Se()
for(s=A.ad(this.af$,!0,t.T),r=s.length,q=0;q<r;++q)s[q].Ly()},
B_(a){var s,r,q
this.St(a)
for(s=A.ad(this.af$,!0,t.T),r=s.length,q=0;q<r;++q)s[q].Ao(a)},
qc(){var s,r
this.TT()
for(s=A.ad(this.af$,!0,t.T).length,r=0;r<s;++r);},
AE(){var s,r,q,p=this,o={}
o.a=null
if(p.ar$){s=new A.agB(o,p)
o.a=s
r=$.bE
q=r.k3$
q.push(s)
if(q.length===1){q=$.aP()
q.ch=r.gX0()
q.CW=$.ab}}try{r=p.bZ$
if(r!=null)p.J$.a4_(r)
p.Sc()
p.J$.a67()}finally{}r=p.ar$=!1
o=o.a
if(o!=null)r=!(p.dy$||p.dx$===0)
if(r){p.ar$=!0
r=$.bE
r.toString
o.toString
r.Oi(o)}}}
A.iE.prototype={
F(){return"KeyEventResult."+this.b}}
A.MY.prototype={}
A.ZN.prototype={
a9(a){var s,r=this.a
if(r.ax===this){if(!r.gkc()){s=r.w
s=s!=null&&s.e===r}else s=!0
if(s)r.D0(B.Dn)
s=r.w
if(s!=null){if(s.c===r)s.c=null
s.d.v(0,r)}s=r.Q
if(s!=null)s.a0R(0,r)
r.ax=null}},
CI(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.akr(s,!0,!0);(a==null?r.e.f.f.b:a).yO(r)}},
Ol(){return this.CI(null)}}
A.Mi.prototype={
F(){return"UnfocusDisposition."+this.b}}
A.c_.prototype={
geU(){var s,r,q
if(this.a)return!0
for(s=this.ghg(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
seU(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.tm()
s.d.B(0,r)}}},
gcq(){var s,r,q,p
if(!this.b)return!1
s=this.ged()
if(s!=null&&!s.gcq())return!1
for(r=this.ghg(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
scq(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gkb()&&!a)r.D0(B.Dn)
s=r.w
if(s!=null){s.tm()
s.d.B(0,r)}}},
smW(a){return},
smX(a){},
guu(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.i4)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.O)(o),++q){p=o[q]
B.b.K(s,p.guu())
s.push(p)}this.y=s
o=s}return o},
gqZ(){var s=this.guu()
return new A.b_(s,new A.ZP(),A.a6(s).h("b_<1>"))},
ghg(){var s,r,q=this.x
if(q==null){s=A.a([],t.i4)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gkb(){if(!this.gkc()){var s=this.w
if(s==null)s=null
else{s=s.c
s=s==null?null:B.b.u(s.ghg(),this)}s=s===!0}else s=!0
return s},
gkc(){var s=this.w
return(s==null?null:s.c)===this},
glx(){return this.ged()},
ged(){var s,r,q,p
for(s=this.ghg(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.jD)return p}return null},
gaw(a){var s,r=this.e.gY(),q=r.bz(0,null),p=r.gkF(),o=A.cH(q,new A.r(p.a,p.b))
p=r.bz(0,null)
q=r.gkF()
s=A.cH(p,new A.r(q.c,q.d))
return new A.D(o.a,o.b,s.a,s.b)},
D0(a){var s,r,q=this
if(!q.gkb()){s=q.w
s=s==null||s.e!==q}else s=!1
if(s)return
r=q.ged()
if(r==null)return
switch(a.a){case 0:if(r.gcq())B.b.M(r.fr)
for(;!r.gcq();){r=r.ged()
if(r==null){s=q.w
r=s==null?null:s.b}}r.js(!1)
break
case 1:if(r.gcq())B.b.v(r.fr,q)
for(;!r.gcq();){s=r.ged()
if(s!=null)B.b.v(s.fr,r)
r=r.ged()
if(r==null){s=q.w
r=s==null?null:s.b}}r.js(!0)
break}},
D_(){return this.D0(B.a3U)},
Ht(a){var s=this,r=s.w
if(r!=null){if(r.c===s)r.e=null
else{r.e=s
r.tm()}return}a.mC()
a.yC()
if(a!==s)s.yC()},
Ic(a,b,c){var s,r,q
if(c){s=b.ged()
if(s!=null)B.b.v(s.fr,b)}b.Q=null
B.b.v(this.as,b)
for(s=this.ghg(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
a0R(a,b){return this.Ic(a,b,!0)},
a2D(a){var s,r,q,p
this.w=a
for(s=this.guu(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
yO(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.ged()
r=a.gkb()
q=a.Q
if(q!=null)q.Ic(0,a,s!=n.glx())
n.as.push(a)
a.Q=n
a.x=null
a.a2D(n.w)
for(q=a.ghg(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.c
if(q!=null)q.mC()}}if(s!=null&&a.e!=null&&a.ged()!==s){q=a.e
q.toString
q=A.FE(q)
if(q!=null)q.zX(a,s)}if(a.ay){a.js(!0)
a.ay=!1}},
l(){var s=this.ax
if(s!=null)s.a9(0)
this.e2()},
yC(){var s=this
if(s.Q==null)return
if(s.gkc())s.mC()
s.am()},
CK(){this.js(!0)},
js(a){var s,r=this
if(!r.gcq())return
if(r.Q==null){r.ay=!0
return}r.mC()
if(r.gkc()){s=r.w.e
s=s==null||s===r}else s=!1
if(s)return
r.Ht(r)},
mC(){var s,r,q,p,o,n
for(s=B.b.gR(this.ghg()),r=new A.oo(s,t.oj),q=t.j5,p=this;r.p();p=o){o=q.a(s.gD(s))
n=o.fr
B.b.v(n,p)
n.push(p)}},
c7(){var s,r,q,p=this
p.gkb()
s=p.gkb()&&!p.gkc()?"[IN FOCUS PATH]":""
r=s+(p.gkc()?"[PRIMARY FOCUS]":"")
s=A.bd(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$iak:1}
A.ZP.prototype={
$1(a){return!a.geU()&&a.gcq()},
$S:10}
A.jD.prototype={
glx(){return this},
gqZ(){if(!this.gcq())return B.EW
return A.c_.prototype.gqZ.call(this)},
o4(a){if(a.Q==null)this.yO(a)
if(this.gkb())a.js(!0)
else a.mC()},
js(a){var s,r,q=this,p=q.fr
while(!0){if((p.length!==0?B.b.gO(p):null)!=null)s=!(p.length!==0?B.b.gO(p):null).gcq()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.b.gO(p):null
if(!a||r==null){if(q.gcq()){q.mC()
q.Ht(q)}return}r.js(!0)}}
A.l9.prototype={
F(){return"FocusHighlightMode."+this.b}}
A.ZO.prototype={
F(){return"FocusHighlightStrategy."+this.b}}
A.vq.prototype={
tm(){if(this.r)return
this.r=!0
A.da(this.ga3E())},
a3F(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.r=!1
s=h.c
for(r=h.f,q=r.length,p=h.b,o=0;o<r.length;r.length===q||(0,A.O)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.fr
m=(l.length!==0?B.b.gO(l):null)==null&&B.b.u(n.b.ghg(),m)
k=m}else k=!1
else k=!1
if(k)n.b.js(!0)}B.b.M(r)
r=h.c
if(r==null&&h.e==null)h.e=p
q=h.e
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.ghg()
r=A.wa(r,A.a6(r).c)
j=r}if(j==null)j=A.aF(t.lc)
r=h.e.ghg()
i=A.wa(r,A.a6(r).c)
r=h.d
r.K(0,i.lg(j))
r.K(0,j.lg(i))
r=h.c=h.e
h.e=null}if(s!=r){if(s!=null)h.d.B(0,s)
r=h.c
if(r!=null)h.d.B(0,r)}for(r=h.d,q=A.e3(r,r.r,A.n(r).c),p=q.$ti.c;q.p();){m=q.d;(m==null?p.a(m):m).yC()}r.M(0)
if(s!=h.c)h.am()},
$iak:1}
A.OJ.prototype={
am(){var s,r,q,p,o,n,m,l,k=this.d,j=k.a
if(j.a===0)return
p=A.ad(k,!0,t.tP)
for(k=p.length,o=0;o<k;++o){s=p[o]
try{if(j.a1(0,s)){n=this.b
if(n==null)n=A.OK()
s.$1(n)}}catch(m){r=A.a7(m)
q=A.ar(m)
n=A.b7("while dispatching notifications for "+A.t(this).i(0))
l=$.hp()
if(l!=null)l.$1(new A.bq(r,q,"widgets library",n,null,!1))}}},
B6(a){var s,r,q=this
switch(a.gcf(a).a){case 0:case 2:case 3:q.a=!0
s=B.iy
break
case 1:case 4:case 5:q.a=!1
s=B.eJ
break
default:s=null}r=q.b
if(s!==(r==null?A.OK():r))q.OV()},
a6A(a){var s,r,q,p,o,n,m,l,k,j
this.a=!1
this.OV()
s=$.aL.J$.f.c
if(s==null)return!1
s=A.a([s],t.i4)
B.b.K(s,$.aL.J$.f.c.ghg())
q=s.length
p=t.zj
o=a.b
n=o!=null
m=0
$label0$1:while(!0){if(!(m<s.length)){r=!1
break}c$1:c$label0$1:{l=s[m]
k=A.a([],p)
j=l.f
if(j!=null&&n)k.push(j.$2(l,o))
switch(A.aGJ(k).a){case 1:break c$label0$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break $label0$1}s.length===q||(0,A.O)(s);++m}return r},
OV(){var s,r,q,p=this
switch(0){case 0:s=p.a
if(s==null)return
r=s?B.iy:B.eJ
break}q=p.b
if(q==null)q=A.OK()
p.b=r
if((r==null?A.OK():r)!==q)p.am()}}
A.Ow.prototype={}
A.Ox.prototype={}
A.Oy.prototype={}
A.Oz.prototype={}
A.Mf.prototype={
F(){return"TraversalEdgeBehavior."+this.b}}
A.fW.prototype={
gbE(){var s,r=$.aL.J$.z.j(0,this)
if(r instanceof A.ec){s=r.gci(r)
if(A.n(this).c.b(s))return s}return null}}
A.j.prototype={
c7(){var s=this.a
return s==null?"Widget":"Widget-"+s.i(0)},
k(a,b){if(b==null)return!1
return this.El(0,b)},
gt(a){return A.z.prototype.gt.call(this,this)}}
A.ah.prototype={
bh(a){return new A.qX(this,B.O)}}
A.ai.prototype={
bh(a){return A.aCK(this)}}
A.ag2.prototype={
F(){return"_StateLifecycle."+this.b}}
A.au.prototype={
aC(){},
aE(a){},
ap(a){a.$0()
this.c.fg()},
dd(){},
bU(){},
l(){},
b_(){}}
A.aN.prototype={}
A.b3.prototype={
bh(a){return A.aA1(this)}}
A.aC.prototype={
aV(a,b){},
pO(a){}}
A.w8.prototype={
bh(a){return new A.Gu(this,B.O)}}
A.rs.prototype={
F(){return"_ElementLifecycle."+this.b}}
A.OW.prototype={
Jx(a){a.aT(new A.adx(this,a))
a.io()},
a2r(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.ad(r,!0,A.n(r).c)
B.b.ds(q,A.amq())
s=q
r.M(0)
try{r=s
new A.cJ(r,A.bg(r).h("cJ<1>")).U(0,p.ga2p())}finally{p.a=!1}}}
A.adx.prototype={
$1(a){this.a.Jx(a)},
$S:7}
A.Wg.prototype={
DB(a){var s=this
if(a.as){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.as=!0},
Nf(a){try{a.$0()}finally{}},
pv(a,b){var s,r,q,p,o,n,m,l,k=this,j={},i=b==null
if(i&&k.c.length===0)return
try{k.d=!0
if(!i){j.a=null
k.e=!1
try{b.$0()}finally{}}i=k.c
B.b.ds(i,A.amq())
k.e=!1
j.b=i.length
j.c=0
for(o=0;o<j.b;){s=i[o]
try{s.O6()}catch(n){r=A.a7(n)
q=A.ar(n)
o=A.b7("while rebuilding dirty elements")
m=$.hp()
if(m!=null)m.$1(new A.bq(r,q,"widgets library",o,new A.Wh(j,k,s),!1))}o=++j.c
if(j.b>=i.length){m=k.e
m.toString}else m=!0
if(m){B.b.ds(i,A.amq())
o=k.e=!1
j.b=i.length
while(!0){m=j.c
if(!(m>0?i[m-1].Q:o))break
j.c=m-1}o=m}}}finally{for(i=k.c,o=i.length,l=0;l<o;++l){p=i[l]
p.as=!1}B.b.M(i)
k.d=!1
k.e=null}},
a4_(a){return this.pv(a,null)},
a67(){var s,r,q
try{this.Nf(this.b.ga2q())}catch(q){s=A.a7(q)
r=A.ar(q)
A.ama(A.pC("while finalizing the widget tree"),s,r,null)}finally{}}}
A.Wh.prototype={
$0(){var s=null,r=A.a([],t.p),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.eJ(r,A.ip(n+" of "+q,this.c,!0,B.aU,s,!1,s,s,B.ar,s,!1,!0,!0,B.b8,s,t.W))
else J.eJ(r,A.Zi(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:11}
A.al.prototype={
k(a,b){if(b==null)return!1
return this===b},
gah(){var s=this.e
s.toString
return s},
gY(){for(var s=this;s!=null;)if(s.r===B.Dv)break
else if(s instanceof A.bi)return s.gY()
else s=s.gvY()
return null},
gvY(){var s={}
s.a=null
this.aT(new A.YG(s))
return s.a},
a5v(a){var s=null
return A.ip(a,this,!0,B.aU,s,!1,s,s,B.ar,s,!1,!0,!0,B.b8,s,t.W)},
aT(a){},
d7(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.uq(a)
return null}if(a!=null){s=a.gah().k(0,b)
if(s){if(!J.e(a.c,c))q.OZ(a,c)
s=a}else{s=a.gah()
if(A.t(s)===A.t(b)&&J.e(s.a,b.a)){if(!J.e(a.c,c))q.OZ(a,c)
a.b5(0,b)
s=a}else{q.uq(a)
r=q.v5(b,c)
s=r}}}else{r=q.v5(b,c)
s=r}return s},
aas(a1,a2,a3){var s,r,q,p,o,n,m,l,k=this,j=null,i=new A.YH(a3),h=new A.YI(j),g=a2.length,f=g-1,e=a1.length-1,d=t.W,c=A.ba(g,$.an4(),!1,d),b=j,a=0,a0=0
while(!0){if(!(a0<=e&&a<=f))break
s=i.$1(a1[a0])
r=a2[a]
if(s!=null){g=s.gah()
g=!(A.t(g)===A.t(r)&&J.e(g.a,r.a))}else g=!0
if(g)break
g=k.d7(s,r,h.$2(a,b))
g.toString
c[a]=g;++a;++a0
b=g}q=e
while(!0){p=a0<=q
if(!(p&&a<=f))break
s=i.$1(a1[q])
r=a2[f]
if(s!=null){g=s.gah()
g=!(A.t(g)===A.t(r)&&J.e(g.a,r.a))}else g=!0
if(g)break;--q;--f}if(p){o=A.C(t.qI,d)
for(;a0<=q;){s=i.$1(a1[a0])
if(s!=null)if(s.gah().a!=null){g=s.gah().a
g.toString
o.m(0,g,s)}else{s.a=null
s.mY()
g=k.f.b
if(s.r===B.cr){s.dd()
s.aT(A.aih())}g.b.B(0,s)}++a0}p=!0}else o=j
for(;a<=f;b=g){r=a2[a]
if(p){n=r.a
if(n!=null){s=o.j(0,n)
if(s!=null){g=s.gah()
if(A.t(g)===A.t(r)&&J.e(g.a,n))o.v(0,n)
else s=j}}else s=j}else s=j
g=k.d7(s,r,h.$2(a,b))
g.toString
c[a]=g;++a}f=a2.length-1
while(!0){if(!(a0<=e&&a<=f))break
g=k.d7(a1[a0],a2[a],h.$2(a,b))
g.toString
c[a]=g;++a;++a0
b=g}if(p&&o.a!==0)for(g=o.gaF(o),d=A.n(g),d=d.h("@<1>").P(d.z[1]),g=new A.bG(J.aj(g.a),g.b,d.h("bG<1,2>")),d=d.z[1];g.p();){m=g.a
if(m==null)m=d.a(m)
if(!a3.u(0,m)){m.a=null
m.mY()
l=k.f.b
if(m.r===B.cr){m.dd()
m.aT(A.aih())}l.b.B(0,m)}}return c},
cW(a,b){var s,r,q,p=this
p.a=a
p.c=b
p.r=B.cr
s=a!=null
if(s){r=a.d
r===$&&A.b();++r}else r=1
p.d=r
if(s)p.f=a.f
q=p.gah().a
if(q instanceof A.fW)p.f.z.m(0,q,p)
p.zi()
p.zK()},
b5(a,b){this.e=b},
OZ(a,b){new A.YJ(b).$1(a)},
r2(a){this.c=a},
JG(a){var s=a+1,r=this.d
r===$&&A.b()
if(r<s){this.d=s
this.aT(new A.YD(s))}},
mY(){this.aT(new A.YF())
this.c=null},
pr(a){this.aT(new A.YE(a))
this.c=a},
a19(a,b){var s,r,q=$.aL.J$.z.j(0,a)
if(q==null)return null
s=q.gah()
if(!(A.t(s)===A.t(b)&&J.e(s.a,b.a)))return null
r=q.a
if(r!=null){r.i7(q)
r.uq(q)}this.f.b.b.v(0,q)
return q},
v5(a,b){var s,r,q,p,o,n,m,l,k=this
try{s=a.a
if(s instanceof A.fW){r=k.a19(s,a)
if(r!=null){try{o=r
o.a=k
o.toString
n=k.d
n===$&&A.b()
o.JG(n)
o.bU()
o.aT(A.atN())
o.pr(b)}catch(m){try{k.uq(r)}catch(l){}throw m}q=k.d7(r,a,b)
o=q
o.toString
return o}}p=a.bh(0)
p.cW(k,b)
return p}finally{}},
uq(a){var s
a.a=null
a.mY()
s=this.f.b
if(a.r===B.cr){a.dd()
a.aT(A.aih())}s.b.B(0,a)},
i7(a){},
bU(){var s=this,r=s.y,q=r==null,p=!q&&r.a!==0||s.z
s.r=B.cr
if(!q)r.M(0)
s.z=!1
s.zi()
s.zK()
if(s.Q)s.f.DB(s)
if(p)s.b_()},
dd(){var s,r,q=this,p=q.y
if(p!=null&&p.a!==0)for(s=A.n(p),p=new A.fF(p,p.ow(),s.h("fF<1>")),s=s.c;p.p();){r=p.d;(r==null?s.a(r):r).y2.v(0,q)}q.x=null
q.r=B.a4y},
io(){var s=this,r=s.e,q=r==null?null:r.a
if(q instanceof A.fW){r=s.f.z
if(J.e(r.j(0,q),s))r.v(0,q)}s.y=s.e=null
s.r=B.Dv},
gA(a){var s=this.gY()
if(s instanceof A.G)return s.gA(s)
return null},
jM(a,b){var s=this.y;(s==null?this.y=A.cA(t.tx):s).B(0,a)
a.D5(this,b)
return t.sg.a(a.gah())},
Al(a){return this.jM(a,null)},
al(a){var s=this.x,r=s==null?null:s.j(0,A.bL(a))
if(r!=null)return a.a(this.jM(r,null))
this.z=!0
return null},
wd(a){var s=this.er(a)
s=s==null?null:s.gah()
return a.h("0?").a(s)},
er(a){var s=this.x
return s==null?null:s.j(0,A.bL(a))},
zK(){var s=this.a
this.b=s==null?null:s.b},
zi(){var s=this.a
this.x=s==null?null:s.x},
M6(a){var s,r=this.a
while(!0){s=r==null
if(!(!s&&A.t(r.gah())!==A.bL(a)))break
r=r.a}s=s?null:r.gah()
return a.h("0?").a(s)},
AU(a){var s,r=this.a
for(;s=r==null,!s;){if(r instanceof A.ec&&a.b(r.gci(r)))break
r=r.a}t.Ci.a(r)
s=s?null:r.gci(r)
return a.h("0?").a(s)},
AT(a){var s=this.a
for(;s!=null;){if(s instanceof A.bi&&a.b(s.gY()))return a.a(s.gY())
s=s.a}return null},
kx(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
b_(){this.fg()},
cI(a){var s=this.b
if(s!=null)s.cI(a)},
c7(){var s=this.e
s=s==null?null:s.c7()
return s==null?"<optimized out>#"+A.bd(this)+"(DEFUNCT)":s},
fg(){var s=this
if(s.r!==B.cr)return
if(s.Q)return
s.Q=!0
s.f.DB(s)},
vU(a){var s
if(this.r===B.cr)s=!this.Q&&!a
else s=!0
if(s)return
try{this.h0()}finally{}},
O6(){return this.vU(!1)},
h0(){this.Q=!1},
$iV:1}
A.YG.prototype={
$1(a){this.a.a=a},
$S:7}
A.YH.prototype={
$1(a){var s=this.a.u(0,a)
return s?null:a},
$S:194}
A.YI.prototype={
$2(a,b){return new A.ni(b,a,t.rL)},
$S:195}
A.YJ.prototype={
$1(a){var s
a.r2(this.a)
s=a.gvY()
if(s!=null)this.$1(s)},
$S:7}
A.YD.prototype={
$1(a){a.JG(this.a)},
$S:7}
A.YF.prototype={
$1(a){a.mY()},
$S:7}
A.YE.prototype={
$1(a){a.pr(this.a)},
$S:7}
A.Fj.prototype={
aG(a){var s=this.d,r=new A.xK(s,A.aE(t.CT))
r.aJ()
r.Uv(s)
return r}}
A.ut.prototype={
gvY(){return this.ax},
cW(a,b){this.wG(a,b)
this.xS()},
xS(){this.O6()},
h0(){var s,r,q,p,o,n,m=this,l=null
try{l=m.aO()
m.gah()}catch(o){s=A.a7(o)
r=A.ar(o)
m.ay=!1
n=A.vb(A.ama(A.b7("building "+m.i(0)),s,r,new A.Xk()))
l=n}finally{m.m7()}try{m.ax=m.d7(m.ax,l,m.c)}catch(o){q=A.a7(o)
p=A.ar(o)
n=A.vb(A.ama(A.b7("building "+m.i(0)),q,p,new A.Xl()))
l=n
m.ax=m.d7(null,l,m.c)}},
aT(a){var s=this.ax
if(s!=null)a.$1(s)},
i7(a){this.ax=null
this.jm(a)}}
A.Xk.prototype={
$0(){var s=A.a([],t.p)
return s},
$S:11}
A.Xl.prototype={
$0(){var s=A.a([],t.p)
return s},
$S:11}
A.qX.prototype={
aO(){return t.yA.a(this.gah()).G(this)},
b5(a,b){this.m8(0,b)
this.vU(!0)}}
A.ec.prototype={
aO(){return this.gci(this).G(this)},
gci(a){var s=this.k3
s.toString
return s},
xS(){var s=this
s.gci(s).aC()
s.gci(s).b_()
s.QT()},
h0(){var s=this
if(s.k4){s.gci(s).b_()
s.k4=!1}s.QU()},
b5(a,b){var s,r=this
r.m8(0,b)
s=r.gci(r).a
s.toString
r.gci(r).a=t.aw.a(r.gah())
r.gci(r).aE(s)
r.vU(!0)},
bU(){var s=this
s.rG()
s.gci(s).bU()
s.fg()},
dd(){this.gci(this).dd()
this.Eb()},
io(){var s=this
s.oe()
s.gci(s).l()
s.k3=s.gci(s).c=null},
jM(a,b){return this.od(a,b)},
Al(a){return this.jM(a,null)},
b_(){this.wF()
this.k4=!0}}
A.qt.prototype={
aO(){return t.kc.a(this.gah()).b},
b5(a,b){var s=this,r=t.kc.a(s.gah())
s.m8(0,b)
s.r3(r)
s.vU(!0)},
r3(a){this.kk(a)}}
A.dW.prototype={
zi(){var s=this,r=s.a,q=r==null?null:r.x
if(q==null)q=B.Wx
s.x=q.a9r(0,A.t(s.gah()),s)},
DJ(a,b){this.y2.m(0,a,b)},
D5(a,b){this.DJ(a,null)},
BQ(a,b){b.b_()},
r3(a){if(t.sg.a(this.gah()).bS(a))this.RT(a)},
kk(a){var s,r,q
for(s=this.y2,r=A.n(s),s=new A.oy(s,s.xz(),r.h("oy<1>")),r=r.c;s.p();){q=s.d
this.BQ(a,q==null?r.a(q):q)}}}
A.bi.prototype={
gY(){var s=this.ax
s.toString
return s},
gvY(){return null},
Xb(){var s,r=this.a,q=r
while(!0){s=q==null
if(!(!s&&!(q instanceof A.bi)))break
r=s?null:q.a
q=r}return t.gF.a(q)},
Xa(){var s=this.a,r=A.a([],t.Dr),q=t.ne,p=s
while(!0){if(!(p!=null&&!(p instanceof A.bi)))break
if(q.b(p))r.push(p)
s=p.a
p=s}return r},
cW(a,b){var s,r=this
r.wG(a,b)
s=r.e
s.toString
r.ax=t.xL.a(s).aG(r)
r.pr(b)
r.m7()},
b5(a,b){this.m8(0,b)
this.HY()},
h0(){this.HY()},
HY(){var s=this,r=s.e
r.toString
t.xL.a(r).aV(s,s.gY())
s.m7()},
dd(){this.Eb()},
io(){var s=this,r=s.e
r.toString
t.xL.a(r)
s.oe()
r.pO(s.gY())
s.ax.l()
s.ax=null},
r2(a){var s,r=this,q=r.c
r.R7(a)
s=r.ch
if(s!=null)s.j3(r.gY(),q,r.c)},
pr(a){var s,r,q,p,o,n=this
n.c=a
s=n.ch=n.Xb()
if(s!=null)s.iV(n.gY(),a)
r=n.Xa()
for(s=r.length,q=t.yL,p=0;p<r.length;r.length===s||(0,A.O)(r),++p){o=r[p].e
o.toString
q.a(o).pp(n.gY())}},
mY(){var s=this,r=s.ch
if(r!=null){r.kq(s.gY(),s.c)
s.ch=null}s.c=null}}
A.a6v.prototype={}
A.Gu.prototype={
i7(a){this.jm(a)},
iV(a,b){},
j3(a,b,c){},
kq(a,b){}}
A.Ky.prototype={
pr(a){this.c=a},
mY(){this.c=null},
r2(a){this.S7(a)}}
A.ni.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.t(this))return!1
return b instanceof A.ni&&this.b===b.b&&J.e(this.a,b.a)},
gt(a){return A.S(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.PY.prototype={}
A.PZ.prototype={
bh(a){return A.Y(A.co(null))}}
A.Sp.prototype={}
A.hD.prototype={
bh(a){return new A.vP(A.eO(null,null,null,t.W,t.X),this,B.O,A.n(this).h("vP<hD.T>"))}}
A.vP.prototype={
D5(a,b){var s=this.y2,r=this.$ti,q=r.h("bu<1>?").a(s.j(0,a)),p=q==null
if(!p&&q.gS(q))return
if(b==null)s.m(0,a,A.cA(r.c))
else{p=p?A.cA(r.c):q
p.B(0,r.c.a(b))
s.m(0,a,p)}},
BQ(a,b){var s,r=this.$ti,q=r.h("bu<1>?").a(this.y2.j(0,b))
if(q==null)return
if(!q.gS(q)){s=this.e
s.toString
s=r.h("hD<1>").a(s).OY(a,q)
r=s}else r=!0
if(r)b.b_()}}
A.Jd.prototype={
F(){return"Orientation."+this.b}}
A.dR.prototype={
F(){return"_MediaQueryAspect."+this.b}}
A.jR.prototype={
gdY(){return this.d},
gnF(a){var s=this.a
return s.a>s.b?B.jr:B.jq},
A6(a,b,c){var s,r,q,p=this,o=p.gdY()
o=o
s=a==null?p.r:a
r=c==null?p.w:c
q=b==null?p.f:b
return new A.jR(p.a,p.b,o,p.e,q,s,r,p.x,!1,p.z,p.Q,p.as,p.at,p.ax,p.ay,p.ch,p.CW,p.cx)},
A5(a){return this.A6(a,null,null)},
a56(a,b){return this.A6(null,a,b)},
a55(a,b){return this.A6(a,null,b)},
a9L(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.r
r=b?0:l
q=d?0:l
p=c?0:l
r=s.jL(a?0:l,r,p,q)
q=m.w
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.a55(r,q.jL(a?Math.max(0,q.d-s.d):l,p,n,o))},
a9M(a){var s=this,r=null,q=s.w,p=s.f,o=Math.max(0,q.d-p.d)
q=q.jL(o,r,r,r)
return s.a56(p.jL(0,r,r,r),q)},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.t(s))return!1
return b instanceof A.jR&&b.a.k(0,s.a)&&b.b===s.b&&b.gdY().a===s.gdY().a&&b.e===s.e&&b.r.k(0,s.r)&&b.w.k(0,s.w)&&b.f.k(0,s.f)&&b.x.k(0,s.x)&&b.as===s.as&&b.at===s.at&&b.ax===s.ax&&b.Q===s.Q&&b.z===s.z&&b.ay===s.ay&&b.ch===s.ch&&b.CW.k(0,s.CW)&&A.dG(b.cx,s.cx)},
gt(a){var s=this
return A.S(s.a,s.b,s.gdY().a,s.e,s.r,s.w,s.f,!1,s.as,s.at,s.ax,s.Q,s.z,s.ay,s.ch,s.CW,A.cg(s.cx),B.a,B.a,B.a)},
i(a){var s=this
return"MediaQueryData("+B.b.bd(A.a(["size: "+s.a.i(0),"devicePixelRatio: "+B.c.N(s.b,1),"textScaler: "+s.gdY().i(0),"platformBrightness: "+s.e.i(0),"padding: "+s.r.i(0),"viewPadding: "+s.w.i(0),"viewInsets: "+s.f.i(0),"systemGestureInsets: "+s.x.i(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.z,"highContrast: "+s.as,"onOffSwitchLabels: "+s.at,"disableAnimations: "+s.ax,"invertColors: "+s.Q,"boldText: "+s.ay,"navigationMode: "+s.ch.b,"gestureSettings: "+s.CW.i(0),"displayFeatures: "+A.h(s.cx)],t.s),", ")+")"}}
A.ls.prototype={
bS(a){return!this.w.k(0,a.w)},
OY(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
for(s=a9.gR(a9),r=this.w,q=a8.w,p=r.cx!==q.cx,o=r.CW,n=q.CW,m=r.ch!==q.ch,l=r.ay!==q.ay,k=r.ax!==q.ax,j=r.at!==q.at,i=r.as!==q.as,h=r.Q!==q.Q,g=r.z!==q.z,f=r.w,e=q.w,d=r.x,c=q.x,b=r.f,a=q.f,a0=r.r,a1=q.r,a2=r.e!==q.e,a3=r.b!==q.b,a4=r.a,a5=q.a,a6=a4.a,a4=a4.b;s.p();){a7=s.gD(s)
if(a7 instanceof A.dR)switch(a7.a){case 0:if(!(a5.a===a6&&a5.b===a4))return!0
break
case 1:a7=a6>a4?B.jr:B.jq
if(a7!==(a5.a>a5.b?B.jr:B.jq))return!0
break
case 2:if(a3)return!0
break
case 3:if(r.gdY().a!==q.gdY().a)return!0
break
case 4:if(!r.gdY().k(0,q.gdY()))return!0
break
case 5:if(a2)return!0
break
case 6:if(!a0.k(0,a1))return!0
break
case 7:if(!b.k(0,a))return!0
break
case 8:if(!d.k(0,c))return!0
break
case 9:if(!f.k(0,e))return!0
break
case 10:break
case 11:if(g)return!0
break
case 12:if(h)return!0
break
case 13:if(i)return!0
break
case 14:if(j)return!0
break
case 15:if(k)return!0
break
case 16:if(l)return!0
break
case 17:if(m)return!0
break
case 18:if(!o.k(0,n))return!0
break
case 19:if(p)return!0
break}}return!1}}
A.a3c.prototype={
F(){return"NavigationMode."+this.b}}
A.AJ.prototype={
ak(){return new A.Py(B.o)}}
A.Py.prototype={
aC(){this.aW()
$.aL.af$.push(this)},
b_(){this.cO()
this.a2I()
this.pa()},
aE(a){var s,r=this
r.b8(a)
s=r.a
s.toString
if(r.e==null||a.c!==s.c)r.pa()},
a2I(){var s,r=this
r.a.toString
s=r.c
s.toString
s=A.dK(s,null)
r.d=s
r.e=null},
pa(){var s=this,r=A.apC(s.a.c,s.d)
if(!r.k(0,s.e))s.ap(new A.aem(s,r))},
uw(){this.pa()},
Lz(){if(this.d==null)this.pa()},
Ly(){if(this.d==null)this.pa()},
l(){B.b.v($.aL.af$,this)
this.aN()},
G(a){var s=this.e
s.toString
return A.a28(this.a.e,s,null)}}
A.aem.prototype={
$0(){this.a.e=this.b},
$S:0}
A.TP.prototype={}
A.a4d.prototype={}
A.EK.prototype={
yu(a){return this.a_d(a)},
a_d(a){var s=0,r=A.M(t.H),q,p=this,o,n,m
var $async$yu=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)switch(s){case 0:n=A.dS(a.b)
m=p.a
if(!m.a1(0,n)){s=1
break}m=m.j(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.gabl().$0()
m.ga94()
o=$.aL.J$.f.c.e
o.toString
A.axt(o,m.ga94(),t.aU)}else if(o==="Menu.opened")m.gabj(m).$0()
else if(o==="Menu.closed")m.gabi(m).$0()
case 1:return A.K(q,r)}})
return A.L($async$yu,r)}}
A.nU.prototype={
gje(){return this.b}}
A.Mu.prototype={
G(a){var s=this,r=s.c,q=s.e,p=s.f
return new A.B6(r,new A.aao(s),q,p,new A.zR(r,q,p,t.gC))}}
A.aao.prototype={
$2(a,b){var s=this.a,r=s.c
return new A.oH(r,new A.B3(b,new A.AJ(r,s.d,null),null),null)},
$S:196}
A.B6.prototype={
bh(a){return new A.QW(this,B.O)},
aG(a){return this.f}}
A.QW.prototype={
gix(){var s=this.e
s.toString
t.x9.a(s)
return s.e},
gY(){return t.b.a(A.bi.prototype.gY.call(this))},
zf(){var s,r,q,p,o,n,m,l=this
try{n=l.e
n.toString
s=t.x9.a(n).d.$2(l,l.gix())
l.aB=l.d7(l.aB,s,null)}catch(m){r=A.a7(m)
q=A.ar(m)
n=A.b7("building "+l.i(0))
p=new A.bq(r,q,"widgets library",n,null,!1)
A.cE(p)
o=A.vb(p)
l.aB=l.d7(null,o,l.c)}},
cW(a,b){var s,r=this
r.rK(a,b)
s=t.b
r.gix().sCL(s.a(A.bi.prototype.gY.call(r)))
r.Fd()
r.zf()
s.a(A.bi.prototype.gY.call(r)).Ct()
if(r.gix().at!=null)s.a(A.bi.prototype.gY.call(r)).rr()},
Fe(a){var s,r,q=this
if(a==null)a=A.arj(q)
s=q.gix()
a.CW.B(0,s)
r=a.cx
if(r!=null)s.ag(r)
s=$.nS
s.toString
r=t.b.a(A.bi.prototype.gY.call(q))
s.cy$.m(0,r.go.a,r)
r.suf(s.a5f(r))
q.an=a},
Fd(){return this.Fe(null)},
FZ(){var s,r=this,q=r.an
if(q!=null){s=$.nS
s.toString
s.cy$.v(0,t.b.a(A.bi.prototype.gY.call(r)).go.a)
s=r.gix()
q.CW.v(0,s)
if(q.cx!=null)s.a9(0)
r.an=null}},
b_(){var s,r=this
r.wF()
if(r.an==null)return
s=A.arj(r)
if(s!==r.an){r.FZ()
r.Fe(s)}},
h0(){this.wP()
this.zf()},
bU(){var s=this
s.rG()
s.gix().sCL(t.b.a(A.bi.prototype.gY.call(s)))
s.Fd()},
dd(){this.FZ()
this.gix().sCL(null)
this.S6()},
b5(a,b){this.oj(0,b)
this.zf()},
aT(a){var s=this.aB
if(s!=null)a.$1(s)},
i7(a){this.aB=null
this.jm(a)},
iV(a,b){t.b.a(A.bi.prototype.gY.call(this)).saX(a)},
j3(a,b,c){},
kq(a,b){t.b.a(A.bi.prototype.gY.call(this)).saX(null)},
io(){var s=this,r=s.gix(),q=s.e
q.toString
if(r!==t.x9.a(q).e){r=s.gix()
q=r.at
if(q!=null)q.l()
r.at=null
B.b.M(r.r)
B.b.M(r.z)
B.b.M(r.Q)
r.ch.M(0)}s.EA()}}
A.oH.prototype={
bS(a){return this.f!==a.f}}
A.B3.prototype={
bS(a){return this.f!==a.f}}
A.zR.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.t(s))return!1
return s.$ti.b(b)&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"[_DeprecatedRawViewKey "+("<optimized out>#"+A.bd(this.a))+"]"}}
A.FA.prototype={
B2(a){return this.a6G(a)},
a6G(a){var s=0,r=A.M(t.z),q,p,o
var $async$B2=A.H(function(b,c){if(b===1)return A.J(c,r)
while(true)$async$outer:switch(s){case 0:o=a.a
switch(o){case"remove":try{self.removeSplashFromWeb()}catch(n){o=A.bN('Did you forget to run "dart run flutter_native_splash:create"? \n Could not run the JS command removeSplashFromWeb()')
throw A.c(o)}s=1
break $async$outer
default:throw A.c(A.a4b("Unimplemented","flutter_native_splash for web doesn't implement '"+o+"'",null,null))}case 1:return A.K(q,r)}})
return A.L($async$B2,r)}}
A.a3Q.prototype={
Dq(){var s,r,q=A.aow(self.window.location)
q.toString
s=A.aox(self.window.location)
s.toString
r=q+s
q=this.c
s=q.length
if(s!==0&&B.d.bf(r,q))return A.amp(B.d.bX(r,s))
return A.amp(r)},
Cs(a){if(a.length===0)a="/"
return this.c+a}}
A.Ka.prototype={
uT(a,b,c){return this.a6v(a,b,c)},
a6v(a,b,c){var s=0,r=A.M(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h,g
var $async$uT=A.H(function(d,e){if(d===1){p=e
s=q}while(true)switch(s){case 0:h=null
q=3
m=n.a.j(0,a)
s=m!=null?6:7
break
case 6:j=m.$1(b)
s=8
return A.E(t.C8.b(j)?j:A.fE(j,t.o),$async$uT)
case 8:h=e
case 7:o.push(5)
s=4
break
case 3:q=2
g=p
l=A.a7(g)
k=A.ar(g)
j=A.b7("during a framework-to-plugin message")
A.cE(new A.bq(l,k,"flutter web plugins",j,null,!1))
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
if(c!=null)c.$1(h)
s=o.pop()
break
case 5:return A.K(null,r)
case 1:return A.J(p,r)}})
return A.L($async$uT,r)},
rs(a,b,c){var s=new A.a5($.ab,t.sB)
$.D3().NT(b,c,new A.a5b(new A.aY(s,t.BB)))
return s},
ws(a,b){var s=this.a
if(b==null)s.v(0,a)
else s.m(0,a,b)}}
A.a5b.prototype={
$1(a){var s,r,q,p
try{this.a.cc(0,a)}catch(q){s=A.a7(q)
r=A.ar(q)
p=A.b7("during a plugin-to-framework message")
A.cE(new A.bq(s,r,"flutter web plugins",p,null,!1))}},
$S:13}
A.a4j.prototype={}
A.a4c.prototype={
Ut(a){$.ajm().m(0,this,a)}}
A.a2o.prototype={
qp(a,b,c,d,e,f,g,h){var s=t.y
return B.VO.kR("launch",A.aQ(["url",a,"useSafariVC",f,"useWebView",g,"enableJavaScript",!0,"enableDomStorage",!0,"universalLinksOnly",e,"headers",d],t.N,t.K),!1,s).aH(new A.a2p(),s)}}
A.a2p.prototype={
$1(a){return a===!0},
$S:198}
A.nK.prototype={
F(){return"PreferredLaunchMode."+this.b}}
A.Gb.prototype={}
A.Gq.prototype={}
A.aaf.prototype={
qp(a,b,c,d,e,f,g,h){throw A.c(A.co("launch() has not been implemented."))},
qq(a,b){var s,r,q=B.d.bf(a,"http:")||B.d.bf(a,"https:"),p=b.a
if(p!==B.C4)if(p!==B.C5){s=q&&p===B.jx
r=s}else r=!0
else r=!0
return this.qp(a,!0,!0,b.b.c,p===B.C6,r,r,b.d)}}
A.aag.prototype={
a99(a,b){var s,r=A.arb(a),q=r==null?null:r.gha()
if(B.Yx.u(0,q))return null
s=this.b&&B.YC.u(0,q)?"_top":""
return this.a.open(a,s,"noopener,noreferrer")},
qp(a,b,c,d,e,f,g,h){return this.a8n(a,!0,!0,d,e,f,g,h)},
a8n(a,b,c,d,e,f,g,h){var s=0,r=A.M(t.y),q,p=this
var $async$qp=A.H(function(i,j){if(i===1)return A.J(j,r)
while(true)switch(s){case 0:q=p.qq(a,new A.Gq(B.jx,B.IM,h))
s=1
break
case 1:return A.K(q,r)}})
return A.L($async$qp,r)},
qq(a,b){return this.a8o(a,b)},
a8o(a,b){var s=0,r=A.M(t.y),q,p=this
var $async$qq=A.H(function(c,d){if(c===1)return A.J(d,r)
while(true)switch(s){case 0:q=p.a99(a,b.d)!=null
s=1
break
case 1:return A.K(q,r)}})
return A.L($async$qq,r)}}
A.bw.prototype={
b6(a){var s=a.a,r=this.a
r[15]=s[15]
r[14]=s[14]
r[13]=s[13]
r[12]=s[12]
r[11]=s[11]
r[10]=s[10]
r[9]=s[9]
r[8]=s[8]
r[7]=s[7]
r[6]=s[6]
r[5]=s[5]
r[4]=s[4]
r[3]=s[3]
r[2]=s[2]
r[1]=s[1]
r[0]=s[0]},
i(a){var s=this
return"[0] "+s.rh(0).i(0)+"\n[1] "+s.rh(1).i(0)+"\n[2] "+s.rh(2).i(0)+"\n[3] "+s.rh(3).i(0)+"\n"},
j(a,b){return this.a[b]},
m(a,b,c){this.a[b]=c},
k(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.bw){s=this.a
r=s[0]
q=b.a
s=r===q[0]&&s[1]===q[1]&&s[2]===q[2]&&s[3]===q[3]&&s[4]===q[4]&&s[5]===q[5]&&s[6]===q[6]&&s[7]===q[7]&&s[8]===q[8]&&s[9]===q[9]&&s[10]===q[10]&&s[11]===q[11]&&s[12]===q[12]&&s[13]===q[13]&&s[14]===q[14]&&s[15]===q[15]}else s=!1
return s},
gt(a){return A.cg(this.a)},
wt(a,b){var s=b.a,r=this.a
r[a]=s[0]
r[4+a]=s[1]
r[8+a]=s[2]
r[12+a]=s[3]},
rh(a){var s=new Float64Array(4),r=this.a
s[0]=r[a]
s[1]=r[4+a]
s[2]=r[8+a]
s[3]=r[12+a]
return new A.j5(s)},
a4(a,b){var s=new A.bw(new Float64Array(16))
s.b6(this)
s.lV(0,b,null,null)
return s},
X(a,b){var s,r=new Float64Array(16),q=new A.bw(r)
q.b6(this)
s=b.a
r[0]=r[0]+s[0]
r[1]=r[1]+s[1]
r[2]=r[2]+s[2]
r[3]=r[3]+s[3]
r[4]=r[4]+s[4]
r[5]=r[5]+s[5]
r[6]=r[6]+s[6]
r[7]=r[7]+s[7]
r[8]=r[8]+s[8]
r[9]=r[9]+s[9]
r[10]=r[10]+s[10]
r[11]=r[11]+s[11]
r[12]=r[12]+s[12]
r[13]=r[13]+s[13]
r[14]=r[14]+s[14]
r[15]=r[15]+s[15]
return q},
a5(a,b){var s,r=new Float64Array(16),q=new A.bw(r)
q.b6(this)
s=b.a
r[0]=r[0]-s[0]
r[1]=r[1]-s[1]
r[2]=r[2]-s[2]
r[3]=r[3]-s[3]
r[4]=r[4]-s[4]
r[5]=r[5]-s[5]
r[6]=r[6]-s[6]
r[7]=r[7]-s[7]
r[8]=r[8]-s[8]
r[9]=r[9]-s[9]
r[10]=r[10]-s[10]
r[11]=r[11]-s[11]
r[12]=r[12]-s[12]
r[13]=r[13]-s[13]
r[14]=r[14]-s[14]
r[15]=r[15]-s[15]
return q},
aj(a,b,a0){var s=this.a,r=s[0],q=s[4],p=s[8],o=s[12],n=s[1],m=s[5],l=s[9],k=s[13],j=s[2],i=s[6],h=s[10],g=s[14],f=s[3],e=s[7],d=s[11],c=s[15]
s[12]=r*b+q*a0+p*0+o
s[13]=n*b+m*a0+l*0+k
s[14]=j*b+i*a0+h*0+g
s[15]=f*b+e*a0+d*0+c},
lV(a,b,c,d){var s=c==null?b:c,r=d==null?b:d,q=this.a
q[0]=q[0]*b
q[1]=q[1]*b
q[2]=q[2]*b
q[3]=q[3]*b
q[4]=q[4]*s
q[5]=q[5]*s
q[6]=q[6]*s
q[7]=q[7]*s
q[8]=q[8]*r
q[9]=q[9]*r
q[10]=q[10]*r
q[11]=q[11]*r
q[12]=q[12]
q[13]=q[13]
q[14]=q[14]
q[15]=q[15]},
e1(a,b,c){return this.lV(a,b,c,null)},
DS(){var s=this.a
s[0]=0
s[1]=0
s[2]=0
s[3]=0
s[4]=0
s[5]=0
s[6]=0
s[7]=0
s[8]=0
s[9]=0
s[10]=0
s[11]=0
s[12]=0
s[13]=0
s[14]=0
s[15]=0},
fm(){var s=this.a
s[0]=1
s[1]=0
s[2]=0
s[3]=0
s[4]=0
s[5]=1
s[6]=0
s[7]=0
s[8]=0
s[9]=0
s[10]=1
s[11]=0
s[12]=0
s[13]=0
s[14]=0
s[15]=1},
f8(b5){var s,r,q,p,o=b5.a,n=o[0],m=o[1],l=o[2],k=o[3],j=o[4],i=o[5],h=o[6],g=o[7],f=o[8],e=o[9],d=o[10],c=o[11],b=o[12],a=o[13],a0=o[14],a1=o[15],a2=n*i-m*j,a3=n*h-l*j,a4=n*g-k*j,a5=m*h-l*i,a6=m*g-k*i,a7=l*g-k*h,a8=f*a-e*b,a9=f*a0-d*b,b0=f*a1-c*b,b1=e*a0-d*a,b2=e*a1-c*a,b3=d*a1-c*a0,b4=a2*b3-a3*b2+a4*b1+a5*b0-a6*a9+a7*a8
if(b4===0){this.b6(b5)
return 0}s=1/b4
r=this.a
r[0]=(i*b3-h*b2+g*b1)*s
r[1]=(-m*b3+l*b2-k*b1)*s
r[2]=(a*a7-a0*a6+a1*a5)*s
r[3]=(-e*a7+d*a6-c*a5)*s
q=-j
r[4]=(q*b3+h*b0-g*a9)*s
r[5]=(n*b3-l*b0+k*a9)*s
p=-b
r[6]=(p*a7+a0*a4-a1*a3)*s
r[7]=(f*a7-d*a4+c*a3)*s
r[8]=(j*b2-i*b0+g*a8)*s
r[9]=(-n*b2+m*b0-k*a8)*s
r[10]=(b*a6-a*a4+a1*a2)*s
r[11]=(-f*a6+e*a4-c*a2)*s
r[12]=(q*b1+i*a9-h*a8)*s
r[13]=(n*b1-m*a9+l*a8)*s
r[14]=(p*a5+a*a3-a0*a2)*s
r[15]=(f*a5-e*a3+d*a2)*s
return b4},
cM(b5,b6){var s=this.a,r=s[0],q=s[4],p=s[8],o=s[12],n=s[1],m=s[5],l=s[9],k=s[13],j=s[2],i=s[6],h=s[10],g=s[14],f=s[3],e=s[7],d=s[11],c=s[15],b=b6.a,a=b[0],a0=b[4],a1=b[8],a2=b[12],a3=b[1],a4=b[5],a5=b[9],a6=b[13],a7=b[2],a8=b[6],a9=b[10],b0=b[14],b1=b[3],b2=b[7],b3=b[11],b4=b[15]
s[0]=r*a+q*a3+p*a7+o*b1
s[4]=r*a0+q*a4+p*a8+o*b2
s[8]=r*a1+q*a5+p*a9+o*b3
s[12]=r*a2+q*a6+p*b0+o*b4
s[1]=n*a+m*a3+l*a7+k*b1
s[5]=n*a0+m*a4+l*a8+k*b2
s[9]=n*a1+m*a5+l*a9+k*b3
s[13]=n*a2+m*a6+l*b0+k*b4
s[2]=j*a+i*a3+h*a7+g*b1
s[6]=j*a0+i*a4+h*a8+g*b2
s[10]=j*a1+i*a5+h*a9+g*b3
s[14]=j*a2+i*a6+h*b0+g*b4
s[3]=f*a+e*a3+d*a7+c*b1
s[7]=f*a0+e*a4+d*a8+c*b2
s[11]=f*a1+e*a5+d*a9+c*b3
s[15]=f*a2+e*a6+d*b0+c*b4},
vw(a){var s=new A.bw(new Float64Array(16))
s.b6(this)
s.cM(0,a)
return s},
aak(a){var s=a.a,r=this.a,q=r[0],p=s[0],o=r[4],n=s[1],m=r[8],l=s[2],k=r[12],j=r[1],i=r[5],h=r[9],g=r[13],f=r[2],e=r[6],d=r[10]
r=r[14]
s[0]=q*p+o*n+m*l+k
s[1]=j*p+i*n+h*l+g
s[2]=f*p+e*n+d*l+r
return a},
vI(a){var s=a.a,r=this.a,q=r[0],p=s[0],o=r[4],n=s[1],m=r[8],l=s[2],k=r[12],j=r[1],i=r[5],h=r[9],g=r[13],f=r[2],e=r[6],d=r[10],c=r[14],b=1/(r[3]*p+r[7]*n+r[11]*l+r[15])
s[0]=(q*p+o*n+m*l+k)*b
s[1]=(j*p+i*n+h*l+g)*b
s[2]=(f*p+e*n+d*l+c)*b
return a},
Na(){var s=this.a
return s[0]===0&&s[1]===0&&s[2]===0&&s[3]===0&&s[4]===0&&s[5]===0&&s[6]===0&&s[7]===0&&s[8]===0&&s[9]===0&&s[10]===0&&s[11]===0&&s[12]===0&&s[13]===0&&s[14]===0&&s[15]===0}}
A.fC.prototype={
lZ(a,b,c){var s=this.a
s[0]=a
s[1]=b
s[2]=c},
b6(a){var s=a.a,r=this.a
r[0]=s[0]
r[1]=s[1]
r[2]=s[2]},
i(a){var s=this.a
return"["+A.h(s[0])+","+A.h(s[1])+","+A.h(s[2])+"]"},
k(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.fC){s=this.a
r=s[0]
q=b.a
s=r===q[0]&&s[1]===q[1]&&s[2]===q[2]}else s=!1
return s},
gt(a){return A.cg(this.a)},
a5(a,b){var s,r=new Float64Array(3),q=new A.fC(r)
q.b6(this)
s=b.a
r[0]=r[0]-s[0]
r[1]=r[1]-s[1]
r[2]=r[2]-s[2]
return q},
X(a,b){var s,r=new Float64Array(3),q=new A.fC(r)
q.b6(this)
s=b.a
r[0]=r[0]+s[0]
r[1]=r[1]+s[1]
r[2]=r[2]+s[2]
return q},
a4(a,b){var s=new Float64Array(3),r=new A.fC(s)
r.b6(this)
s[2]=s[2]*b
s[1]=s[1]*b
s[0]=s[0]*b
return r},
j(a,b){return this.a[b]},
m(a,b,c){this.a[b]=c},
gn(a){var s=this.a,r=s[0],q=s[1]
s=s[2]
return Math.sqrt(r*r+q*q+s*s)},
LI(a){var s=a.a,r=this.a
return r[0]*s[0]+r[1]*s[1]+r[2]*s[2]},
PY(a){var s=new Float64Array(3),r=new A.fC(s)
r.b6(this)
s[2]=s[2]*a
s[1]=s[1]*a
s[0]=s[0]*a
return r}}
A.j5.prototype={
wu(a,b,c,d){var s=this.a
s[3]=d
s[2]=c
s[1]=b
s[0]=a},
b6(a){var s=a.a,r=this.a
r[3]=s[3]
r[2]=s[2]
r[1]=s[1]
r[0]=s[0]},
i(a){var s=this.a
return A.h(s[0])+","+A.h(s[1])+","+A.h(s[2])+","+A.h(s[3])},
k(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.j5){s=this.a
r=s[0]
q=b.a
s=r===q[0]&&s[1]===q[1]&&s[2]===q[2]&&s[3]===q[3]}else s=!1
return s},
gt(a){return A.cg(this.a)},
a5(a,b){var s,r=new Float64Array(4),q=new A.j5(r)
q.b6(this)
s=b.a
r[0]=r[0]-s[0]
r[1]=r[1]-s[1]
r[2]=r[2]-s[2]
r[3]=r[3]-s[3]
return q},
X(a,b){var s,r=new Float64Array(4),q=new A.j5(r)
q.b6(this)
s=b.a
r[0]=r[0]+s[0]
r[1]=r[1]+s[1]
r[2]=r[2]+s[2]
r[3]=r[3]+s[3]
return q},
a4(a,b){var s=new Float64Array(4),r=new A.j5(s)
r.b6(this)
s[0]=s[0]*b
s[1]=s[1]*b
s[2]=s[2]*b
s[3]=s[3]*b
return r},
j(a,b){return this.a[b]},
m(a,b,c){this.a[b]=c},
gn(a){var s=this.a,r=s[0],q=s[1],p=s[2]
s=s[3]
return Math.sqrt(r*r+q*q+p*p+s*s)}}
A.aiL.prototype={
$0(){return A.aiJ()},
$S:0}
A.aiK.prototype={
$0(){var s,r,q,p=$.awP()
new A.nw("flutter_native_splash",B.bX,p).lX(new A.FA().ga6F())
s=self
s=s.window
r=$.an1()
q=new A.aag(s)
$.ajm().m(0,q,r)
s=s.navigator
q.b=J.tz(s.userAgent,"Safari")&&!J.tz(s.userAgent,"Chrome")
A.aB7(q,r,!0)
$.aDh=q
$.awN()
$.ajn().CD("__url_launcher::link",A.aI1(),!1)
$.aud=p.ga6u()},
$S:0};(function aliases(){var s=A.Rz.prototype
s.Tq=s.M
s.Tw=s.c1
s.Tu=s.bu
s.Tz=s.aj
s.Tx=s.e1
s.Tv=s.kt
s.Ty=s.aa
s.Tt=s.jK
s.Ts=s.l8
s.Tr=s.fJ
s=A.pi.prototype
s.QV=s.j6
s=A.zS.prototype
s.EG=s.bh
s=A.cS.prototype
s.RQ=s.vZ
s.En=s.aO
s.wL=s.pk
s.Er=s.b5
s.Eq=s.ks
s.Eo=s.i_
s.Ep=s.qK
s=A.dt.prototype
s.RP=s.h3
s.kH=s.b5
s.rH=s.i_
s=A.JV.prototype
s.is=s.d6
s.oh=s.l
s=A.uH.prototype
s.wE=s.ns
s.R3=s.D7
s.R1=s.f9
s.R2=s.AJ
s=J.pY.prototype
s.Rj=s.i
s.Ri=s.E
s=J.ln.prototype
s.Rs=s.i
s=A.eb.prototype
s.Rk=s.MV
s.Rl=s.MX
s.Rn=s.MZ
s.Rm=s.MY
s=A.m5.prototype
s.ST=s.me
s=A.dQ.prototype
s.SU=s.fu
s.SV=s.eu
s=A.ko.prototype
s.SZ=s.mg
s.T_=s.Gs
s.T1=s.IN
s.T0=s.iA
s=A.P.prototype
s.Ei=s.b7
s=A.bU.prototype
s.QZ=s.a6j
s=A.t9.prototype
s.TL=s.ac
s=A.k.prototype
s.wH=s.ip
s=A.z.prototype
s.El=s.k
s.bw=s.i
s=A.I.prototype
s.QR=s.k
s.QS=s.i
s=A.xd.prototype
s.RO=s.aa
s=A.DF.prototype
s.QK=s.eh
s.QL=s.lp
s.QM=s.D1
s=A.en.prototype
s.aaW=s.a0
s.aaX=s.L
s.e2=s.l
s.E8=s.am
s=A.aa.prototype
s.R4=s.c7
s=A.hv.prototype
s.R5=s.c7
s=A.pO.prototype
s.Rb=s.v2
s.Ra=s.a5D
s=A.cD.prototype
s.Ea=s.B
s=A.Nd.prototype
s.EF=s.l
s=A.qC.prototype
s.Sd=s.B3
s.Sf=s.Ba
s.Se=s.B5
s.Sc=s.AE
s=A.aJ.prototype
s.QP=s.k
s=A.e9.prototype
s.rE=s.i
s=A.G.prototype
s.wM=s.fL
s.rI=s.a6
s.RZ=s.qG
s.it=s.c6
s=A.q4.prototype
s.Ro=s.oB
s.Eh=s.l
s.Rr=s.w5
s.Rp=s.ag
s.Rq=s.a9
s=A.pj.prototype
s.rF=s.dG
s=A.hH.prototype
s.RI=s.dG
s=A.bX.prototype
s.og=s.a9
s=A.A.prototype
s.hN=s.l
s.wN=s.jH
s.S0=s.n5
s.e3=s.ag
s.e4=s.a9
s.S3=s.a6
s.S2=s.cB
s.S_=s.cP
s.S4=s.rr
s.fs=s.dS
s.wO=s.l6
s.oi=s.fk
s.Ez=s.pq
s.S1=s.iU
s.S5=s.c7
s.rJ=s.eT
s=A.eF.prototype
s.T3=s.u2
s=A.nR.prototype
s.Sb=s.Ct
s=A.dN.prototype
s.St=s.B_
s=A.Dq.prototype
s.E6=s.j2
s=A.qN.prototype
s.SC=s.qc
s.SD=s.ka
s=A.nw.prototype
s.Ru=s.kR
s=A.fD.prototype
s.SR=s.uw
s.SQ=s.Ao
s=A.Bo.prototype
s.EH=s.cW
s=A.Cc.prototype
s.TN=s.eh
s.TO=s.D1
s=A.Cd.prototype
s.TP=s.eh
s.TQ=s.lp
s=A.Ce.prototype
s.TR=s.eh
s.TS=s.lp
s=A.Cf.prototype
s.TU=s.eh
s.TT=s.qc
s=A.Cg.prototype
s.TV=s.eh
s=A.Ch.prototype
s.TW=s.eh
s.TX=s.lp
s=A.au.prototype
s.aW=s.aC
s.b8=s.aE
s.rM=s.dd
s.dM=s.bU
s.aN=s.l
s.cO=s.b_
s=A.al.prototype
s.R6=s.d7
s.wG=s.cW
s.m8=s.b5
s.R7=s.r2
s.Ec=s.v5
s.jm=s.i7
s.rG=s.bU
s.Eb=s.dd
s.oe=s.io
s.od=s.jM
s.wF=s.b_
s.m7=s.h0
s=A.ut.prototype
s.oc=s.cW
s.QT=s.xS
s.QU=s.h0
s=A.qX.prototype
s.SI=s.aO
s=A.ec.prototype
s.SH=s.aO
s.SG=s.bU
s=A.qt.prototype
s.Et=s.aO
s.Eu=s.b5
s.RT=s.r3
s=A.dW.prototype
s.Rg=s.r3
s.Eg=s.kk
s=A.bi.prototype
s.rK=s.cW
s.oj=s.b5
s.wP=s.h0
s.S6=s.dd
s.EA=s.io
s.S7=s.r2})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers.installStaticTearOff,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_1i,m=hunkHelpers._static_0,l=hunkHelpers.installInstanceTearOff,k=hunkHelpers._instance_2u,j=hunkHelpers._instance_0i
s(A,"aFg","aGC",282)
r(A,"aFe","axE",1)
q(A,"asp",1,function(){return{params:null}},["$2$params","$1"],["asm",function(a){return A.asm(a,null)}],283,0)
r(A,"aFf","aG2",13)
r(A,"UE","aFb",19)
p(A.tC.prototype,"gz9","a2h",0)
var i
o(i=A.G1.prototype,"ga0O","a0P",33)
o(i,"gZs","Zt",33)
o(A.E5.prototype,"ga3c","a3d",233)
o(i=A.j_.prototype,"gW0","W1",1)
o(i,"gVZ","W_",1)
o(A.LN.prototype,"ga0S","a0T",127)
o(A.FB.prototype,"ga_g","a_h",114)
n(i=A.Fm.prototype,"gf3","B",159)
p(i,"gQA","m4",29)
o(A.Gp.prototype,"ga_P","a_Q",40)
n(A.wK.prototype,"gCc","Cd",6)
n(A.yB.prototype,"gCc","Cd",6)
o(A.FY.prototype,"ga_N","a_O",1)
p(i=A.Fe.prototype,"gpR","l",0)
o(i,"gJL","a2z",27)
o(A.JR.prototype,"gyF","a_S",120)
o(A.m_.prototype,"ga0w","a0x",150)
o(A.Ly.prototype,"ga8P","BI",154)
p(A.KM.prototype,"gpR","l",0)
o(i=A.El.prototype,"gY_","Y0",1)
o(i,"gY1","Y2",1)
o(i,"gXY","XZ",1)
o(i=A.uH.prototype,"gqa","Mr",1)
o(i,"guS","a6l",1)
o(i,"gqw","a8O",1)
o(A.Ey.prototype,"gV9","Va",181)
o(A.FL.prototype,"ga0_","a00",1)
s(J,"aFK","aA5",50)
n(J.iB.prototype,"ga5O","jR",25)
n(A.hZ.prototype,"giH","u",21)
m(A,"aFW","aBw",53)
n(A.f9.prototype,"giH","u",21)
n(A.dU.prototype,"giH","u",21)
r(A,"aGp","aDt",31)
r(A,"aGq","aDu",31)
r(A,"aGr","aDv",31)
m(A,"atc","aGc",0)
r(A,"aGs","aG3",19)
s(A,"aGt","aG5",28)
m(A,"atb","aG4",0)
p(i=A.ot.prototype,"gtv","jx",0)
p(i,"gtx","jy",0)
n(A.m5.prototype,"gf3","B",6)
l(A.rk.prototype,"ga4z",0,1,function(){return[null]},["$2","$1"],["fK","iG"],112,0,0)
l(A.aY.prototype,"ga4y",1,0,function(){return[null]},["$1","$0"],["cc","f6"],85,0,0)
k(A.a5.prototype,"gFC","ev",28)
n(i=A.oF.prototype,"gf3","B",6)
n(i,"gV6","fu",6)
k(i,"gUK","eu",28)
p(i,"gVN","jp",0)
p(i=A.m7.prototype,"gtv","jx",0)
p(i,"gtx","jy",0)
j(i=A.dQ.prototype,"gKN","aA",34)
p(i,"gtv","jx",0)
p(i,"gtx","jy",0)
j(i=A.zW.prototype,"gKN","aA",34)
p(i,"gHN","a_R",0)
o(i=A.i6.prototype,"ga_F","a_G",6)
k(i,"ga_J","a_K",28)
p(i,"ga_H","a_I",0)
p(i=A.ry.prototype,"gtv","jx",0)
p(i,"gtx","jy",0)
o(i,"gY3","Y4",6)
k(i,"gYl","Ym",94)
p(i,"gY7","Y8",0)
s(A,"ami","aF5",73)
r(A,"amj","aF6",67)
l(i=A.j7.prototype,"gyA",0,0,null,["$1$0","$0"],["oQ","yB"],102,0,0)
n(i,"giH","u",21)
l(i=A.f3.prototype,"gyA",0,0,null,["$1$0","$0"],["oQ","yB"],102,0,0)
n(i,"giH","u",21)
n(i,"gf3","B",21)
r(A,"aGV","aF8",41)
j(A.rJ.prototype,"gpA","ac",0)
r(A,"atr","aHK",67)
s(A,"atq","aHJ",73)
s(A,"ato","ayi",286)
r(A,"aGW","aDg",89)
m(A,"aGX","aEr",287)
s(A,"atp","aGg",288)
n(A.k.prototype,"giH","u",21)
l(A.bJ.prototype,"gaaJ",0,0,null,["$1","$0"],["P5","aaK"],85,0,0)
o(A.BR.prototype,"gN_","ei",13)
p(A.kk.prototype,"gG8","WK",0)
q(A,"aGo",1,null,["$2$forceReport","$1"],["aoU",function(a){return A.aoU(a,!1)}],289,0)
n(i=A.en.prototype,"gpi","a0",31)
n(i,"gOe","L",31)
p(i,"gek","am",0)
r(A,"aIw","aCI",290)
o(i=A.pO.prototype,"gYL","YM",132)
o(i,"gWu","Wv",133)
o(i,"ga46","a47",33)
p(i,"gXm","xW",0)
o(i,"gYP","GV",63)
p(i,"gZ0","Z1",0)
l(i=A.xb.prototype,"ga7P",0,1,null,["$4$allowUpscaling$cacheHeight$cacheWidth","$1"],["MT","a7Q"],139,0,0)
l(i,"ga7S",0,1,null,["$2$getTargetSize","$1"],["MU","a7T"],64,0,0)
r(A,"aGv","aDD",66)
o(i=A.qC.prototype,"gZh","Zi",4)
o(i,"gYH","YI",4)
o(i=A.G.prototype,"gbI","b3",23)
o(i,"gbC","b1",23)
o(i,"gbM","b2",23)
o(i,"gbH","b0",23)
p(i,"gvo","a6",0)
o(i=A.xK.prototype,"gbC","b1",23)
o(i,"gbH","b0",23)
r(A,"au5","aBY",24)
r(A,"au6","aBZ",24)
p(A.k_.prototype,"gJU","JV",0)
o(i=A.A.prototype,"gO9","qP",24)
p(i,"geO","aD",0)
p(i,"gNj","bb",0)
l(i,"gHu",0,1,null,["$2$isMergeUp","$1"],["tn","a_3"],156,0,0)
l(i,"gm_",0,0,null,["$4$curve$descendant$duration$rect","$0","$2$descendant$rect"],["eT","o7","m0"],157,0,0)
s(A,"aGx","aC6",291)
q(A,"aGy",0,null,["$2$priority$scheduler"],["aHa"],292,0)
o(i=A.dN.prototype,"gX0","X1",72)
p(i,"ga1h","a1i",0)
o(i,"gXR","XS",4)
p(i,"gYj","Yk",0)
p(i,"gWF","WG",0)
p(i=A.L8.prototype,"gWw","Wx",0)
p(i,"gZ8","GX",0)
o(i,"gZ6","Z7",161)
o(A.bP.prototype,"gI9","a0M",162)
o(A.h9.prototype,"ga3s","zB",169)
r(A,"aGw","aCp",293)
p(i=A.qN.prototype,"gUN","UO",173)
o(i,"gYB","yc",174)
o(i,"gYJ","t9",36)
o(i=A.Go.prototype,"ga6x","a6y",40)
o(i,"ga6U","B7",177)
o(i,"gW2","W3",178)
o(A.y_.prototype,"ga_e","yv",78)
o(i=A.cI.prototype,"ga16","a17",79)
o(i,"gI7","I8",79)
o(A.LU.prototype,"gZZ","ti",36)
p(i=A.zm.prototype,"ga6C","a6D",0)
o(i,"gYD","YE",36)
p(i,"gXT","XU",0)
p(i=A.Ci.prototype,"ga6H","B3",0)
p(i,"ga7f","Ba",0)
p(i,"ga6N","B5",0)
o(i,"ga6k","B_",199)
p(A.vq.prototype,"ga3E","a3F",0)
o(i=A.OJ.prototype,"ga6P","B6",63)
o(i,"ga6z","a6A",192)
r(A,"aih","aDM",7)
s(A,"amq","azf",294)
r(A,"atN","aze",7)
o(i=A.OW.prototype,"ga2p","Jx",7)
p(i,"ga2q","a2r",0)
o(A.EK.prototype,"ga_c","yu",78)
o(A.FA.prototype,"ga6F","B2",36)
l(A.Ka.prototype,"ga6u",0,3,null,["$3"],["uT"],296,0,0)
r(A,"aI1","aAh",295)
q(A,"amH",1,null,["$2$wrapWidth","$1"],["atA",function(a){return A.atA(a,null)}],197,0)
m(A,"aIl","asl",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.mixinHard,q=hunkHelpers.inherit,p=hunkHelpers.inheritMany
q(A.z,null)
p(A.z,[A.tC,A.Vm,A.jr,A.Og,A.Rz,A.Xs,A.f7,A.WF,A.GL,A.E1,A.G1,A.lw,A.hG,A.k,A.F7,A.j6,A.Ln,A.nP,A.m2,A.n7,A.a86,A.G6,A.pa,A.E3,A.E_,A.DQ,A.et,A.a4y,A.a3J,A.Gs,A.a1C,A.a1D,A.a_8,A.Xm,A.WV,A.E5,A.a3b,A.eB,A.Eo,A.pb,A.E8,A.E9,A.kZ,A.a4O,A.DU,A.Lj,A.yR,A.j_,A.Ea,A.LN,A.E7,A.ul,A.E6,A.E4,A.WY,A.bC,A.uo,A.X7,A.X8,A.Zj,A.Zk,A.ZG,A.Yc,A.a6X,A.G4,A.a0i,A.G3,A.vI,A.F0,A.uS,A.zT,A.zV,A.uR,A.FB,A.YR,A.KQ,A.nV,A.Ry,A.a6K,A.ZV,A.Tk,A.Fm,A.pK,A.n8,A.vv,A.tO,A.fg,A.Ep,A.rn,A.c7,A.a8N,A.zS,A.cS,A.a8V,A.a8U,A.r_,A.yS,A.fR,A.a4I,A.Xo,A.Nj,A.Xv,A.r0,A.a3P,A.ql,A.nE,A.k2,A.a85,A.a3R,A.lx,A.a5a,A.cm,A.aeL,A.a63,A.agx,A.a0b,A.r1,A.a8O,A.a3q,A.a7U,A.YU,A.l6,A.Fb,A.Lf,A.yv,A.o4,A.mg,A.a4z,A.vG,A.yC,A.G0,A.tE,A.jH,A.Gp,A.iw,A.a1p,A.Xr,A.a2D,A.Wb,A.jT,A.vj,A.Fd,A.Fc,A.FY,A.a4a,A.Mv,A.JN,A.a4e,A.a4g,A.a6I,A.JR,A.a4u,A.Ay,A.ab2,A.Tu,A.ja,A.ou,A.rU,A.a4k,A.al0,A.a4Q,A.FR,A.FQ,A.a3x,A.V6,A.JV,A.k4,A.oR,A.pz,A.YN,A.Le,A.Lc,A.o2,A.Z6,A.a7C,A.a7y,A.NT,A.P,A.h3,A.a19,A.a1b,A.a8t,A.a8x,A.aax,A.K8,A.a8S,A.DV,A.xc,A.qY,A.WH,A.a07,A.a9i,A.a9h,A.acL,A.acM,A.acK,A.m_,A.a1G,A.Ly,A.KM,A.a9B,A.iv,A.iK,A.v6,A.v7,A.oh,A.a96,A.r7,A.cc,A.kg,A.W8,A.El,A.YV,A.YW,A.z_,A.YO,A.Dy,A.r5,A.px,A.a10,A.a9k,A.a97,A.a0l,A.YC,A.YA,A.GJ,A.bD,A.Zq,A.XU,A.YL,A.pI,A.Mw,A.akE,J.pY,J.bM,A.uc,A.av,A.a7Q,A.bf,A.bG,A.eC,A.mX,A.yW,A.yD,A.yF,A.v4,A.vs,A.oo,A.vn,A.Mk,A.kb,A.i2,A.wm,A.ph,A.kq,A.ha,A.vY,A.aa4,A.J6,A.vc,A.BP,A.afl,A.a1H,A.jN,A.w_,A.AD,A.zp,A.yQ,A.St,A.abL,A.adA,A.h8,A.OE,A.C1,A.ag7,A.wi,A.SP,A.zs,A.fI,A.Ds,A.bx,A.dQ,A.m5,A.uJ,A.rk,A.hi,A.a5,A.MV,A.oF,A.Sz,A.zt,A.MH,A.NV,A.acj,A.mf,A.zW,A.i6,A.agD,A.oy,A.fF,A.adZ,A.kr,A.AB,A.Tm,A.zY,A.zZ,A.Ax,A.iZ,A.Ej,A.bU,A.N1,A.DS,A.N_,A.DZ,A.S0,A.adQ,A.abN,A.ag6,A.Tp,A.tg,A.kB,A.d0,A.aB,A.Je,A.yN,A.Oj,A.ix,A.bl,A.aH,A.Sw,A.iY,A.KN,A.bJ,A.C8,A.aaa,A.hk,A.pE,A.lS,A.Xu,A.aD,A.vo,A.J5,A.F8,A.abM,A.BR,A.kk,A.WO,A.Ja,A.D,A.aV,A.hL,A.eQ,A.I,A.wo,A.akB,A.iz,A.lb,A.fn,A.qM,A.iL,A.xo,A.cj,A.c6,A.a7O,A.er,A.og,A.e0,A.bK,A.d7,A.lz,A.FP,A.Vu,A.We,A.FW,A.a4h,A.FX,A.xd,A.de,A.Ou,A.DF,A.ak,A.en,A.aeH,A.aa,A.NX,A.hv,A.dX,A.h1,A.qm,A.agl,A.aay,A.xy,A.hT,A.by,A.FN,A.rB,A.a_m,A.afm,A.pO,A.Qp,A.d8,A.MD,A.Nl,A.Nv,A.Nq,A.No,A.Np,A.Nn,A.Nr,A.Nz,A.Nx,A.Ny,A.Nw,A.Nt,A.Nu,A.Ns,A.Nm,A.EP,A.fY,A.td,A.iy,A.a4q,A.a4t,A.xb,A.X0,A.cD,A.a0v,A.Nd,A.Qa,A.es,A.j8,A.qC,A.Qd,A.Rc,A.En,A.bX,A.Aq,A.Di,A.Pg,A.Gr,A.PM,A.TR,A.aT,A.afQ,A.RO,A.zj,A.rz,A.a3T,A.dN,A.L8,A.a7B,A.cy,A.RM,A.RP,A.kj,A.i4,A.kx,A.h9,A.Dq,A.VU,A.qN,A.P7,A.a_S,A.w4,A.Go,A.P8,A.iG,A.xn,A.wH,A.a8K,A.a1a,A.a1c,A.a8u,A.a8y,A.a2E,A.wJ,A.PL,A.kU,A.nw,A.QT,A.QU,A.a4U,A.cp,A.cI,A.LU,A.z1,A.TW,A.ME,A.fD,A.zm,A.MY,A.ZN,A.Oy,A.Ow,A.OJ,A.Sp,A.OW,A.Wg,A.a6v,A.ni,A.jR,A.a4d,A.nU,A.FA,A.a4c,A.Gb,A.Gq,A.bw,A.fC,A.j5])
p(A.jr,[A.up,A.Vp,A.Vn,A.agV,A.ahc,A.ahb,A.a0g,A.a0h,A.a0d,A.a0e,A.a0f,A.aib,A.aia,A.a8b,A.aiX,A.a0B,A.ahe,A.WX,A.uq,A.ahr,A.Xf,A.Xg,A.Xa,A.Xb,A.X9,A.Xd,A.Xe,A.Xc,A.Yj,A.Yl,A.ahS,A.aj3,A.aj2,A.ZW,A.ZX,A.ZY,A.ZZ,A.a__,A.a_0,A.a_3,A.a_1,A.aie,A.aif,A.aig,A.aid,A.a3r,A.a05,A.a06,A.a03,A.a04,A.aiu,A.ZH,A.ZF,A.aii,A.aij,A.ahu,A.ahv,A.ahw,A.ahx,A.ahy,A.ahz,A.ahA,A.ahB,A.a1k,A.a1l,A.a1m,A.a1o,A.a1v,A.a1z,A.aiT,A.a2O,A.a81,A.a82,A.Zo,A.Z3,A.Z_,A.Z0,A.Z1,A.Z2,A.YZ,A.YX,A.Z5,A.a6J,A.ab3,A.aeO,A.aeQ,A.aeR,A.aeS,A.aeT,A.aeU,A.aeV,A.agg,A.agh,A.agi,A.agj,A.agk,A.aex,A.aey,A.aez,A.aeA,A.aeB,A.aeC,A.a4R,A.a4S,A.a4W,A.V9,A.Va,A.a0W,A.a0X,A.a7h,A.a7i,A.a7H,A.Z8,A.XR,A.a2w,A.a94,A.a9a,A.a9b,A.a9c,A.a9d,A.a9f,A.WI,A.YP,A.YQ,A.XM,A.XN,A.XO,A.XP,A.a0r,A.a0s,A.a0p,A.Vk,A.Zx,A.Zy,A.a0m,A.YB,A.ai_,A.XA,A.XD,A.a_d,A.WK,A.LR,A.aiF,A.aiG,A.aiD,A.ahL,A.ahH,A.ahI,A.ahJ,A.ahK,A.a1g,A.a1f,A.aiq,A.ais,A.ag8,A.aaN,A.aaM,A.agQ,A.ag9,A.agb,A.aga,A.a_j,A.acV,A.ad1,A.a8D,A.a8J,A.a8H,A.a8G,A.afs,A.ad4,A.ac3,A.adY,A.a1V,A.adO,A.agt,A.ah6,A.ah7,A.aiA,A.aiU,A.aiV,A.ai8,A.a1j,A.ahY,A.a_X,A.a_V,A.ZK,A.ZL,A.ZM,A.ai9,A.a8r,A.a8W,A.ad2,A.a4m,A.a4n,A.X1,A.X2,A.X3,A.abK,A.a6b,A.a67,A.W5,A.a2I,A.a2H,A.a5H,A.a5I,A.a5D,A.a5E,A.a5F,A.a6S,A.a6R,A.a7F,A.a7D,A.afV,A.afU,A.afS,A.afT,A.agW,A.a7J,A.a7I,A.a7q,A.a7u,A.a7s,A.a7v,A.a7t,A.a7w,A.a7x,A.WC,A.a49,A.a7S,A.ac5,A.VS,A.a2q,A.a6q,A.a6r,A.a6p,A.a9y,A.a9x,A.a9z,A.ahs,A.Ve,A.Vi,A.agC,A.agB,A.ZP,A.adx,A.YG,A.YH,A.YJ,A.YD,A.YF,A.YE,A.a5b,A.a2p])
p(A.up,[A.Vo,A.a87,A.a88,A.a89,A.a8a,A.a_9,A.a_a,A.WG,A.WZ,A.a_2,A.Zp,A.a3V,A.a0c,A.a8Q,A.a8R,A.a_J,A.Wc,A.Wd,A.aiw,A.aix,A.ZI,A.agT,A.a1w,A.a1x,A.a1y,A.a1r,A.a1s,A.a1t,A.Z4,A.aiz,A.a4f,A.aeP,A.a4l,A.a4T,A.a4V,A.V7,A.a6y,A.V8,A.a7g,A.Z7,A.Za,A.Z9,A.a2x,A.a9e,A.a9g,A.a08,A.a09,A.a0a,A.a6H,A.a0q,A.Zw,A.a98,A.YS,A.YT,A.WM,A.aiR,A.a4E,A.aiE,A.ahM,A.aaO,A.aaP,A.age,A.a_i,A.a_g,A.acR,A.acY,A.acX,A.acU,A.acT,A.acS,A.ad0,A.ad_,A.acZ,A.a8I,A.a8F,A.ag4,A.ag3,A.aaB,A.abf,A.abe,A.aeM,A.agU,A.ahP,A.afr,A.aak,A.aaj,A.WP,A.WQ,A.a1i,A.ahZ,A.Wf,A.a_W,A.ahR,A.agS,A.ZJ,A.VV,A.WN,A.a_o,A.a_n,A.a_p,A.a_q,A.a4s,A.a0y,A.a0x,A.ae_,A.a69,A.a6a,A.a5f,A.a5h,A.a5g,A.a2L,A.a2K,A.a2J,A.a3M,A.a3L,A.a3K,A.a5G,A.a5J,A.a6U,A.a6V,A.a6W,A.WB,A.a7R,A.a4P,A.a6n,A.a6o,A.a6m,A.a9A,A.aav,A.a6w,A.a6x,A.Wh,A.Xk,A.Xl,A.aem,A.aiL,A.aiK])
p(A.Og,[A.u4,A.jU,A.nx,A.p8,A.vU,A.Xj,A.nF,A.mQ,A.tN,A.zD,A.hK,A.nT,A.Vb,A.n9,A.yu,A.v5,A.lp,A.pM,A.zF,A.Op,A.r4,A.ze,A.bk,A.cL,A.JQ,A.Ec,A.JD,A.w3,A.LL,A.LM,A.JA,A.kV,A.pd,A.W1,A.n4,A.ie,A.tM,A.XF,A.k0,A.iM,A.qn,A.pL,A.lA,A.hU,A.of,A.z0,A.LV,A.j2,A.yY,A.DK,A.W6,A.M4,A.DO,A.uN,A.jw,A.dy,A.FO,A.Dz,A.rI,A.Zz,A.qb,A.mP,A.nX,A.XH,A.q3,A.Gn,A.no,A.fo,A.iE,A.Mi,A.l9,A.ZO,A.Mf,A.ag2,A.rs,A.Jd,A.dR,A.a3c,A.nK])
q(A.WJ,A.Rz)
p(A.E1,[A.ui,A.uk,A.p9])
p(A.k,[A.wL,A.dC,A.km,A.hZ,A.X,A.eu,A.b_,A.fe,A.od,A.k7,A.yE,A.jE,A.eD,A.oz,A.MI,A.Ss,A.cC,A.uV,A.vC])
q(A.zE,A.E3)
q(A.uj,A.DQ)
p(A.et,[A.pi,A.JK])
p(A.pi,[A.KE,A.Ee,A.Ei,A.Eg,A.Jc,A.zd,A.G7])
q(A.Jb,A.zd)
q(A.E2,A.Lj)
p(A.uq,[A.a8T,A.ai6,A.ai4,A.a3U,A.aiv,A.aik,A.a1u,A.a1q,A.YY,A.a8v,A.a8l,A.ah1,A.aj0,A.a0n,A.XB,A.WL,A.Xp,A.a4D,A.a1e,A.air,A.agR,A.ahU,A.a_k,A.acW,A.a8E,A.aaC,A.afq,A.a1I,A.a1W,A.adR,A.a3o,A.aab,A.aac,A.aad,A.ags,A.agr,A.ah5,A.a2r,A.a2s,A.a2t,A.a2u,A.a6C,A.a6D,A.a8B,A.a8C,A.Vz,A.VA,A.a4r,A.a0z,A.a68,A.a2G,A.a4_,A.a3Z,A.a40,A.a41,A.a6T,A.afR,A.a7K,A.a7L,A.a7r,A.WD,A.ac6,A.a8w,A.YI,A.aao])
p(A.bC,[A.DT,A.dI,A.fk,A.kd,A.Gi,A.Mj,A.NJ,A.KO,A.EO,A.Oh,A.w1,A.mC,A.hq,A.J2,A.Ml,A.ol,A.hc,A.Em,A.Ov])
q(A.F9,A.Yc)
p(A.dI,[A.FG,A.vt,A.vu])
p(A.YR,[A.jl,A.O2])
p(A.cS,[A.dt,A.JG])
p(A.dt,[A.Qc,A.Qb,A.xe,A.xg,A.xh,A.xi,A.xj,A.xk])
q(A.xf,A.Qc)
q(A.JE,A.Qb)
q(A.Ye,A.O2)
q(A.JH,A.JG)
p(A.cm,[A.uX,A.xa,A.Jv,A.Jz,A.Jx,A.Jw,A.Jy])
p(A.uX,[A.Ji,A.Jh,A.Jg,A.Jm,A.Jo,A.Jr,A.Jt,A.Js,A.Jk,A.Jn,A.Jj,A.Jq,A.Ju,A.Jl,A.Jp])
q(A.vA,A.YU)
q(A.AH,A.l6)
p(A.Fb,[A.wI,A.a26])
q(A.G_,A.vG)
p(A.Wb,[A.wK,A.yB])
q(A.Fe,A.a4a)
p(A.ab2,[A.TX,A.agf,A.TQ])
q(A.aeN,A.TX)
q(A.aew,A.TQ)
p(A.JV,[A.WS,A.ER,A.a0N,A.a0V,A.a4i,A.a79,A.a_l,A.Wi,A.a99])
p(A.k4,[A.qF,A.pJ,A.w6,A.nt,A.yX])
p(A.a7y,[A.XQ,A.a2v])
q(A.uH,A.NT)
p(A.uH,[A.a7N,A.FT,A.KP])
p(A.P,[A.jd,A.om])
q(A.P0,A.jd)
q(A.Mg,A.P0)
p(A.qY,[A.DY,A.KG])
p(A.a9i,[A.a1E,A.Zl,A.aan])
p(A.a9h,[A.abO,A.lo,A.mD])
q(A.Ph,A.abO)
q(A.Pi,A.Ph)
q(A.Pj,A.Pi)
q(A.hE,A.Pj)
q(A.F6,A.hE)
p(A.YV,[A.a3n,A.Zb,A.Yn,A.a_G,A.a3m,A.a4A,A.a7k,A.a7P])
p(A.YW,[A.a3p,A.a9v,A.a3w,A.XI,A.a3X,A.YK,A.aae,A.IR])
p(A.FT,[A.a0o,A.Vj,A.Zv])
p(A.a9k,[A.a9p,A.a9w,A.a9r,A.a9u,A.a9q,A.a9t,A.a9j,A.a9m,A.a9s,A.a9o,A.a9n,A.a9l])
p(A.XU,[A.Ey,A.FL])
p(A.YL,[A.XC,A.a_c])
q(A.Lm,A.pI)
q(A.Fa,A.Lm)
p(J.pY,[J.vX,J.q1,J.d,J.nk,J.nl,J.lk,J.iB])
p(J.d,[J.ln,J.u,A.wM,A.wQ,A.a1,A.D9,A.tU,A.hu,A.bV,A.NC,A.eo,A.EB,A.EZ,A.O3,A.uU,A.O5,A.F1,A.Om,A.eN,A.FZ,A.ON,A.GH,A.ID,A.PE,A.PF,A.eS,A.PG,A.PV,A.eT,A.Qf,A.Rx,A.eW,A.Sk,A.eX,A.Sq,A.ed,A.SI,A.M5,A.f_,A.ST,A.M8,A.Mo,A.TC,A.TK,A.TS,A.Ub,A.Ud,A.fl,A.Pk,A.fr,A.Q2,A.JP,A.Su,A.fA,A.T_,A.Dt,A.MX])
p(J.ln,[J.JM,J.j4,J.iC])
q(J.a1d,J.u)
p(J.lk,[J.q0,J.vZ])
p(A.hZ,[A.mM,A.Cn,A.jq,A.jp])
q(A.A5,A.mM)
q(A.zC,A.Cn)
q(A.f6,A.zC)
p(A.av,[A.mN,A.eb,A.ko,A.P5])
q(A.l_,A.om)
p(A.X,[A.ax,A.jz,A.b0,A.ox,A.AA])
p(A.ax,[A.ez,A.ae,A.cJ,A.wd,A.P6])
q(A.mV,A.eu)
q(A.v2,A.od)
q(A.py,A.k7)
q(A.v1,A.jE)
p(A.i2,[A.QY,A.QZ,A.R_])
p(A.QY,[A.fG,A.rW,A.R0,A.R1])
p(A.QZ,[A.R2,A.R3,A.R4,A.B7])
q(A.B8,A.R_)
q(A.C7,A.wm)
q(A.on,A.C7)
q(A.mO,A.on)
p(A.ph,[A.U,A.cs])
p(A.ha,[A.uv,A.t3])
p(A.uv,[A.f9,A.dU])
q(A.wY,A.kd)
p(A.LR,[A.LD,A.p4])
p(A.eb,[A.w0,A.nm,A.Av])
p(A.wQ,[A.wN,A.qh])
p(A.qh,[A.AQ,A.AS])
q(A.AR,A.AQ)
q(A.lu,A.AR)
q(A.AT,A.AS)
q(A.fq,A.AT)
p(A.lu,[A.wO,A.IT])
p(A.fq,[A.IU,A.wP,A.IV,A.IW,A.IX,A.wR,A.ny])
q(A.C2,A.Oh)
p(A.bx,[A.t7,A.Ac])
q(A.cd,A.t7)
q(A.dB,A.cd)
p(A.dQ,[A.m7,A.ry])
q(A.ot,A.m7)
p(A.m5,[A.BW,A.hY])
q(A.aY,A.rk)
p(A.oF,[A.hg,A.mh])
q(A.BS,A.MH)
p(A.NV,[A.eE,A.rq])
q(A.AC,A.Ac)
q(A.afp,A.agD)
p(A.ko,[A.ma,A.zQ])
p(A.t3,[A.j7,A.f3])
p(A.zY,[A.zX,A.A_])
p(A.iZ,[A.t9,A.N0,A.BV])
q(A.rJ,A.t9)
p(A.Ej,[A.VN,A.YM,A.a1h])
p(A.bU,[A.DC,A.DB,A.Ad,A.Gl,A.Gk,A.Mr,A.Mq])
q(A.abc,A.N1)
p(A.DS,[A.ab1,A.Nb,A.Tr,A.agv])
p(A.ab1,[A.aaK,A.agu])
q(A.Gj,A.w1)
q(A.adN,A.DZ)
q(A.adP,A.adQ)
q(A.aai,A.YM)
q(A.Uw,A.Tp)
q(A.Tq,A.Uw)
p(A.hq,[A.qu,A.vN])
q(A.NL,A.C8)
p(A.a1,[A.b5,A.Fp,A.eV,A.BH,A.eZ,A.ee,A.BZ,A.Mt,A.Dv,A.kT])
p(A.b5,[A.an,A.il])
q(A.aq,A.an)
p(A.aq,[A.De,A.Dn,A.FI,A.L3])
q(A.Eq,A.hu)
q(A.pk,A.NC)
p(A.eo,[A.Er,A.Es])
q(A.O4,A.O3)
q(A.uT,A.O4)
q(A.O6,A.O5)
q(A.F_,A.O6)
q(A.eL,A.tU)
q(A.On,A.Om)
q(A.Fn,A.On)
q(A.OO,A.ON)
q(A.ne,A.OO)
q(A.IH,A.PE)
q(A.II,A.PF)
q(A.PH,A.PG)
q(A.IJ,A.PH)
q(A.PW,A.PV)
q(A.wW,A.PW)
q(A.Qg,A.Qf)
q(A.JO,A.Qg)
q(A.KL,A.Rx)
q(A.BI,A.BH)
q(A.Lx,A.BI)
q(A.Sl,A.Sk)
q(A.Lz,A.Sl)
q(A.LE,A.Sq)
q(A.SJ,A.SI)
q(A.M_,A.SJ)
q(A.C_,A.BZ)
q(A.M0,A.C_)
q(A.SU,A.ST)
q(A.M7,A.SU)
q(A.TD,A.TC)
q(A.NB,A.TD)
q(A.zU,A.uU)
q(A.TL,A.TK)
q(A.OF,A.TL)
q(A.TT,A.TS)
q(A.AP,A.TT)
q(A.Uc,A.Ub)
q(A.Sm,A.Uc)
q(A.Ue,A.Ud)
q(A.Sx,A.Ue)
q(A.Pl,A.Pk)
q(A.Gx,A.Pl)
q(A.Q3,A.Q2)
q(A.J8,A.Q3)
q(A.Sv,A.Su)
q(A.LJ,A.Sv)
q(A.T0,A.T_)
q(A.Mc,A.T0)
p(A.Ja,[A.r,A.W])
q(A.Du,A.MX)
q(A.J9,A.kT)
q(A.dT,A.xd)
p(A.dT,[A.ea,A.pG])
p(A.de,[A.fT,A.mR])
q(A.m8,A.fT)
p(A.m8,[A.pB,A.Fi,A.Fh])
q(A.bq,A.Ou)
q(A.n5,A.Ov)
p(A.mR,[A.Ot,A.EQ,A.RN])
p(A.en,[A.dP,A.N2,A.IM,A.Ld,A.y_])
q(A.uO,A.NX)
p(A.dX,[A.wh,A.fW])
q(A.zh,A.wh)
q(A.w9,A.h1)
p(A.agl,[A.OD,A.m6,A.Ah])
q(A.vp,A.bq)
q(A.aR,A.Qp)
q(A.Uj,A.MD)
q(A.Uk,A.Uj)
q(A.T5,A.Uk)
p(A.aR,[A.Qh,A.QC,A.Qs,A.Qn,A.Qq,A.Ql,A.Qu,A.QK,A.dZ,A.Qy,A.QA,A.Qw,A.Qj])
q(A.Qi,A.Qh)
q(A.nG,A.Qi)
p(A.T5,[A.Uf,A.Ur,A.Um,A.Ui,A.Ul,A.Uh,A.Un,A.Uv,A.Ut,A.Uu,A.Us,A.Up,A.Uq,A.Uo,A.Ug])
q(A.T1,A.Uf)
q(A.QD,A.QC)
q(A.nH,A.QD)
q(A.Tc,A.Ur)
q(A.Qt,A.Qs)
q(A.iP,A.Qt)
q(A.T7,A.Um)
q(A.Qo,A.Qn)
q(A.lC,A.Qo)
q(A.T4,A.Ui)
q(A.Qr,A.Qq)
q(A.iO,A.Qr)
q(A.T6,A.Ul)
q(A.Qm,A.Ql)
q(A.iN,A.Qm)
q(A.T3,A.Uh)
q(A.Qv,A.Qu)
q(A.lD,A.Qv)
q(A.T8,A.Un)
q(A.QL,A.QK)
q(A.lG,A.QL)
q(A.Tg,A.Uv)
p(A.dZ,[A.QG,A.QI,A.QE])
q(A.QH,A.QG)
q(A.nI,A.QH)
q(A.Te,A.Ut)
q(A.QJ,A.QI)
q(A.nJ,A.QJ)
q(A.Tf,A.Uu)
q(A.QF,A.QE)
q(A.JS,A.QF)
q(A.Td,A.Us)
q(A.Qz,A.Qy)
q(A.iQ,A.Qz)
q(A.Ta,A.Up)
q(A.QB,A.QA)
q(A.lF,A.QB)
q(A.Tb,A.Uq)
q(A.Qx,A.Qw)
q(A.lE,A.Qx)
q(A.T9,A.Uo)
q(A.Qk,A.Qj)
q(A.lB,A.Qk)
q(A.T2,A.Ug)
p(A.td,[A.AI,A.rR])
q(A.SA,A.ak)
p(A.cD,[A.aX,A.mb])
p(A.Nd,[A.zB,A.rL])
q(A.k_,A.Qd)
q(A.NR,A.k_)
q(A.A,A.Rc)
p(A.A,[A.Rn,A.G])
q(A.nR,A.Rn)
q(A.Rs,A.nR)
q(A.aJ,A.En)
q(A.jn,A.iy)
q(A.p5,A.fY)
q(A.e9,A.bX)
q(A.xK,A.G)
q(A.q4,A.Pg)
p(A.q4,[A.a3Y,A.pj])
p(A.pj,[A.hH,A.un,A.Eh,A.Ef])
p(A.hH,[A.rc,A.x3])
q(A.PN,A.TR)
q(A.ly,A.X0)
p(A.afQ,[A.Nk,A.eF])
p(A.eF,[A.Rv,A.Ak,A.oG])
q(A.La,A.RM)
q(A.bP,A.RP)
q(A.WA,A.Dq)
q(A.a48,A.WA)
p(A.VU,[A.ac4,A.Ka])
q(A.ll,A.P7)
p(A.ll,[A.nn,A.lm,A.w5])
q(A.a1A,A.P8)
p(A.a1A,[A.f,A.m])
q(A.cu,A.PL)
p(A.cu,[A.NU,A.j1])
q(A.SB,A.wJ)
q(A.jV,A.nw)
q(A.xw,A.QT)
q(A.ft,A.QU)
p(A.ft,[A.iR,A.qw])
q(A.K7,A.xw)
q(A.z4,A.d7)
q(A.Qe,A.TW)
q(A.Vc,A.ME)
p(A.uO,[A.j,A.al])
p(A.j,[A.y3,A.ah,A.ai,A.aN,A.aC,A.PZ])
p(A.al,[A.Bo,A.ut,A.bi,A.PY])
q(A.y1,A.Bo)
q(A.Cc,A.DF)
q(A.Cd,A.Cc)
q(A.Ce,A.Cd)
q(A.Cf,A.Ce)
q(A.Cg,A.Cf)
q(A.Ch,A.Cg)
q(A.Ci,A.Ch)
q(A.Mz,A.Ci)
q(A.Oz,A.Oy)
q(A.c_,A.Oz)
q(A.jD,A.c_)
q(A.Ox,A.Ow)
q(A.vq,A.Ox)
q(A.au,A.Sp)
q(A.b3,A.aN)
p(A.aC,[A.w8,A.B6])
q(A.Fj,A.w8)
p(A.ut,[A.qX,A.ec,A.qt])
q(A.dW,A.qt)
p(A.bi,[A.Gu,A.Ky])
p(A.b3,[A.hD,A.oH,A.B3])
q(A.vP,A.dW)
q(A.ls,A.hD)
q(A.AJ,A.ai)
q(A.TP,A.au)
q(A.Py,A.TP)
q(A.EK,A.a4d)
q(A.Mu,A.ah)
q(A.QW,A.Ky)
q(A.zR,A.fW)
q(A.a3Q,A.FW)
q(A.a4j,A.Ka)
q(A.aaf,A.a4c)
p(A.aaf,[A.a2o,A.aag])
s(A.NT,A.El)
s(A.O2,A.a6K)
s(A.Ph,A.acL)
s(A.Pi,A.acM)
s(A.Pj,A.acK)
r(A.Qb,A.zS)
r(A.Qc,A.zS)
s(A.TQ,A.Tu)
s(A.TX,A.Tu)
s(A.om,A.Mk)
s(A.Cn,A.P)
s(A.AQ,A.P)
s(A.AR,A.vn)
s(A.AS,A.P)
s(A.AT,A.vn)
s(A.hg,A.zt)
s(A.mh,A.Sz)
s(A.C7,A.Tm)
s(A.Uw,A.iZ)
s(A.NC,A.Xu)
s(A.O3,A.P)
s(A.O4,A.aD)
s(A.O5,A.P)
s(A.O6,A.aD)
s(A.Om,A.P)
s(A.On,A.aD)
s(A.ON,A.P)
s(A.OO,A.aD)
s(A.PE,A.av)
s(A.PF,A.av)
s(A.PG,A.P)
s(A.PH,A.aD)
s(A.PV,A.P)
s(A.PW,A.aD)
s(A.Qf,A.P)
s(A.Qg,A.aD)
s(A.Rx,A.av)
s(A.BH,A.P)
s(A.BI,A.aD)
s(A.Sk,A.P)
s(A.Sl,A.aD)
s(A.Sq,A.av)
s(A.SI,A.P)
s(A.SJ,A.aD)
s(A.BZ,A.P)
s(A.C_,A.aD)
s(A.ST,A.P)
s(A.SU,A.aD)
s(A.TC,A.P)
s(A.TD,A.aD)
s(A.TK,A.P)
s(A.TL,A.aD)
s(A.TS,A.P)
s(A.TT,A.aD)
s(A.Ub,A.P)
s(A.Uc,A.aD)
s(A.Ud,A.P)
s(A.Ue,A.aD)
s(A.Pk,A.P)
s(A.Pl,A.aD)
s(A.Q2,A.P)
s(A.Q3,A.aD)
s(A.Su,A.P)
s(A.Sv,A.aD)
s(A.T_,A.P)
s(A.T0,A.aD)
s(A.MX,A.av)
s(A.Ov,A.hv)
s(A.Ou,A.aa)
s(A.NX,A.aa)
s(A.Qh,A.d8)
s(A.Qi,A.Nl)
s(A.Qj,A.d8)
s(A.Qk,A.Nm)
s(A.Ql,A.d8)
s(A.Qm,A.Nn)
s(A.Qn,A.d8)
s(A.Qo,A.No)
s(A.Qp,A.aa)
s(A.Qq,A.d8)
s(A.Qr,A.Np)
s(A.Qs,A.d8)
s(A.Qt,A.Nq)
s(A.Qu,A.d8)
s(A.Qv,A.Nr)
s(A.Qw,A.d8)
s(A.Qx,A.Ns)
s(A.Qy,A.d8)
s(A.Qz,A.Nt)
s(A.QA,A.d8)
s(A.QB,A.Nu)
s(A.QC,A.d8)
s(A.QD,A.Nv)
s(A.QE,A.d8)
s(A.QF,A.Nw)
s(A.QG,A.d8)
s(A.QH,A.Nx)
s(A.QI,A.d8)
s(A.QJ,A.Ny)
s(A.QK,A.d8)
s(A.QL,A.Nz)
s(A.Uf,A.Nl)
s(A.Ug,A.Nm)
s(A.Uh,A.Nn)
s(A.Ui,A.No)
s(A.Uj,A.aa)
s(A.Uk,A.d8)
s(A.Ul,A.Np)
s(A.Um,A.Nq)
s(A.Un,A.Nr)
s(A.Uo,A.Ns)
s(A.Up,A.Nt)
s(A.Uq,A.Nu)
s(A.Ur,A.Nv)
s(A.Us,A.Nw)
s(A.Ut,A.Nx)
s(A.Uu,A.Ny)
s(A.Uv,A.Nz)
s(A.Pg,A.hv)
s(A.TR,A.aa)
s(A.Qd,A.hv)
s(A.Rc,A.hv)
r(A.Rn,A.aT)
s(A.RM,A.aa)
s(A.RP,A.hv)
s(A.P7,A.aa)
s(A.P8,A.aa)
s(A.PL,A.aa)
s(A.QU,A.aa)
s(A.QT,A.aa)
s(A.TW,A.z1)
s(A.ME,A.aa)
r(A.Bo,A.a6v)
r(A.Cc,A.pO)
r(A.Cd,A.dN)
r(A.Ce,A.qN)
r(A.Cf,A.xb)
r(A.Cg,A.L8)
r(A.Ch,A.qC)
r(A.Ci,A.zm)
s(A.Ow,A.hv)
s(A.Ox,A.en)
s(A.Oy,A.hv)
s(A.Oz,A.en)
s(A.Sp,A.aa)
s(A.TP,A.fD)})()
var v={deferredInitialized:Object.create(null),
isHunkLoaded:function(a){return!!$__dart_deferred_initializers__[a]},
isHunkInitialized:function(a){return!!v.deferredInitialized[a]},
eventLog:$__dart_deferred_initializers__.eventLog,
initializeLoadedHunk:function(a){var s=$__dart_deferred_initializers__[a]
if(s==null)throw"DeferredLoading state error: code with hash '"+a+"' was not loaded"
initializeDeferredHunk(s)
v.deferredInitialized[a]=true},
deferredLibraryParts:{app:[0]},
deferredPartUris:["main.dart.js_1.part.js"],
deferredPartHashes:["+8IAVtTZ8mAa/HhjeT0B+5k2olU="],
typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},
mangledGlobalNames:{i:"int",F:"double",bS:"num",l:"String",x:"bool",