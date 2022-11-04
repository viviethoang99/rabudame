a
o=a.b
n.a.jO(p-q,o-q,p+q,o+q,r)
n.c.push(r)},
cr(a,b){this.a.cr(a,t.k.a(b))},
hq(a,b,c,d){var s,r,q=this.a
t.k.a(d)
s=q.d
d.b=q.e=s.a=s.c=!0
r=new A.IQ(a,b,c,d.a)
q.a.l5(c,r)
q.c.push(r)},
fc(a,b){this.a.fc(a,b)},
fM(a,b,c){var s,r,q,p=A.aEK(b)
if(B.f.d_(p.length,2)!==0)A.X(A.bT('"points" must have an even number of values.',null))
s=this.a
t.k.a(c)
c.b=s.e=s.d.c=!0
r=c.a
q=new A.IV(p,a,r)
r=r.c
s.TQ(p,r==null?0:r,c,q)
s.c.push(q)},
ht(a,b,c,d){var s,r,q=this.a
q.e=q.d.c=!0
s=A.aDt(a.dJ(0),c)
r=new A.IY(t.n.a(a),b,c,d)
q.a.l5(s,r)
q.c.push(r)}}
A.zx.prototype={
gf8(){return this.ei$},
bn(a){var s=this.rl("flt-clip"),r=A.b9(self.document,"flt-clip-interior")
this.ei$=r
A.r(r.style,"position","absolute")
r=this.ei$
r.toString
s.append(r)
return s},
Hf(a,b){var s
if(b!==B.Z){s=a.style
A.r(s,"overflow","hidden")
A.r(s,"z-index","0")}}}
A.wW.prototype={
h_(){var s=this
s.f=s.e.f
if(s.CW!==B.Z)s.w=s.cx
else s.w=null
s.r=null},
bn(a){var s=this.C7(0)
A.H(s,"setAttribute",["clip-type","rect"])
return s},
ez(){var s,r=this,q=r.d.style,p=r.cx,o=p.a
A.r(q,"left",A.h(o)+"px")
s=p.b
A.r(q,"top",A.h(s)+"px")
A.r(q,"width",A.h(p.c-o)+"px")
A.r(q,"height",A.h(p.d-s)+"px")
p=r.d
p.toString
r.Hf(p,r.CW)
p=r.ei$.style
A.r(p,"left",A.h(-o)+"px")
A.r(p,"top",A.h(-s)+"px")},
be(a,b){var s=this
s.lj(0,b)
if(!s.cx.k(0,b.cx)||s.CW!==b.CW){s.w=null
s.ez()}},
$iVx:1}
A.J8.prototype={
h_(){var s,r=this
r.f=r.e.f
if(r.cx!==B.Z){s=r.CW
r.w=new A.D(s.a,s.b,s.c,s.d)}else r.w=null
r.r=null},
bn(a){var s=this.C7(0)
A.H(s,"setAttribute",["clip-type","rrect"])
return s},
ez(){var s,r=this,q=r.d.style,p=r.CW,o=p.a
A.r(q,"left",A.h(o)+"px")
s=p.b
A.r(q,"top",A.h(s)+"px")
A.r(q,"width",A.h(p.c-o)+"px")
A.r(q,"height",A.h(p.d-s)+"px")
A.r(q,"border-top-left-radius",A.h(p.e)+"px")
A.r(q,"border-top-right-radius",A.h(p.r)+"px")
A.r(q,"border-bottom-right-radius",A.h(p.x)+"px")
A.r(q,"border-bottom-left-radius",A.h(p.z)+"px")
p=r.d
p.toString
r.Hf(p,r.cx)
p=r.ei$.style
A.r(p,"left",A.h(-o)+"px")
A.r(p,"top",A.h(-s)+"px")},
be(a,b){var s=this
s.lj(0,b)
if(!s.CW.k(0,b.CW)||s.cx!==b.cx){s.w=null
s.ez()}},
$iVw:1}
A.wV.prototype={
bn(a){return this.rl("flt-clippath")},
h_(){var s=this
s.Oi()
if(s.cx!==B.Z){if(s.w==null)s.w=s.CW.dJ(0)}else s.w=null},
ez(){var s=this,r=s.cy
if(r!=null)r.remove()
r=s.d
r.toString
r=A.arn(r,s.CW)
s.cy=r
s.d.append(r)},
be(a,b){var s,r=this
r.lj(0,b)
if(b.CW!==r.CW){r.w=null
s=b.cy
if(s!=null)s.remove()
r.ez()}else r.cy=b.cy
b.cy=null},
i9(){var s=this.cy
if(s!=null)s.remove()
this.cy=null
this.uE()},
$iVv:1}
A.a8K.prototype={
Bc(a,b){var s,r,q,p=self.document.createElementNS("http://www.w3.org/2000/svg","feColorMatrix"),o=p.type
o.toString
o.baseVal=1
o=p.result
o.toString
o.baseVal=b
o=p.values.baseVal
o.toString
for(s=this.b,r=0;r<20;++r){q=s.createSVGNumber()
q.value=a[r]
o.appendItem(q)}this.c.append(p)},
l7(a,b,c){var s,r="setAttribute",q=self.document.createElementNS("http://www.w3.org/2000/svg","feFlood")
A.H(q,r,["flood-color",a])
A.H(q,r,["flood-opacity",b])
s=q.result
s.toString
s.baseVal=c
this.c.append(q)},
Bb(a,b,c){var s=self.document.createElementNS("http://www.w3.org/2000/svg","feBlend"),r=s.in1
r.toString
r.baseVal=a
r=s.in2
r.toString
r.baseVal=b
r=s.mode
r.toString
r.baseVal=c
this.c.append(s)},
pJ(a,b,c,d,e,f,g,h){var s=self.document.createElementNS("http://www.w3.org/2000/svg","feComposite"),r=s.in1
r.toString
r.baseVal=a
r=s.in2
r.toString
r.baseVal=b
r=s.operator
r.toString
r.baseVal=g
if(c!=null){r=s.k1
r.toString
r.baseVal=c}if(d!=null){r=s.k2
r.toString
r.baseVal=d}if(e!=null){r=s.k3
r.toString
r.baseVal=e}if(f!=null){r=s.k4
r.toString
r.baseVal=f}r=s.result
r.toString
r.baseVal=h
this.c.append(s)},
ue(a,b,c,d){return this.pJ(a,b,null,null,null,null,c,d)},
aK(){var s=this.b
s.append(this.c)
return new A.a8J(this.a,s)}}
A.a8J.prototype={}
A.Wv.prototype={
kj(a,b){throw A.b(A.c6(null))},
ki(a){throw A.b(A.c6(null))},
f9(a,b){throw A.b(A.c6(null))},
hr(a,b,c){throw A.b(A.c6(null))},
hs(a){throw A.b(A.c6(null))},
c3(a,b){var s=this.oz$
s=s.length===0?this.a:B.b.gM(s)
s.append(A.C1(a,b,"draw-rect",this.ic$))},
c7(a,b){var s,r=A.C1(new A.D(a.a,a.b,a.c,a.d),b,"draw-rrect",this.ic$)
A.ar7(r.style,a)
s=this.oz$
s=s.length===0?this.a:B.b.gM(s)
s.append(r)},
dO(a,b,c){throw A.b(A.c6(null))},
cr(a,b){throw A.b(A.c6(null))},
ht(a,b,c,d){throw A.b(A.c6(null))},
hq(a,b,c,d){throw A.b(A.c6(null))},
fc(a,b){var s=A.art(a,b,this.ic$),r=this.oz$
r=r.length===0?this.a:B.b.gM(r)
r.append(s)},
fM(a,b,c){throw A.b(A.c6(null))},
mc(){}}
A.wX.prototype={
h_(){var s,r,q=this,p=q.e.f
q.f=p
s=q.CW
if(s!==0||q.cx!==0){p.toString
r=new A.bI(new Float32Array(16))
r.bf(p)
q.f=r
r.ag(0,s,q.cx)}q.r=null},
goP(){var s=this,r=s.cy
if(r==null){r=A.dL()
r.lb(-s.CW,-s.cx,0)
s.cy=r}return r},
bn(a){var s=A.b9(self.document,"flt-offset")
A.cX(s,"position","absolute")
A.cX(s,"transform-origin","0 0 0")
return s},
ez(){A.r(this.d.style,"transform","translate("+A.h(this.CW)+"px, "+A.h(this.cx)+"px)")},
be(a,b){var s=this
s.lj(0,b)
if(b.CW!==s.CW||b.cx!==s.cx)s.ez()},
$iIF:1}
A.wY.prototype={
h_(){var s,r,q,p=this,o=p.e.f
p.f=o
s=p.cx
r=s.a
q=s.b
if(r!==0||q!==0){o.toString
s=new A.bI(new Float32Array(16))
s.bf(o)
p.f=s
s.ag(0,r,q)}p.r=null},
goP(){var s,r=this.cy
if(r==null){r=this.cx
s=A.dL()
s.lb(-r.a,-r.b,0)
this.cy=s
r=s}return r},
bn(a){var s=A.b9(self.document,"flt-opacity")
A.cX(s,"position","absolute")
A.cX(s,"transform-origin","0 0 0")
return s},
ez(){var s,r=this.d
r.toString
A.cX(r,"opacity",A.h(this.CW/255))
s=this.cx
A.r(r.style,"transform","translate("+A.h(s.a)+"px, "+A.h(s.b)+"px)")},
be(a,b){var s=this
s.lj(0,b)
if(s.CW!==b.CW||!s.cx.k(0,b.cx))s.ez()},
$ia2c:1}
A.bf.prototype={
sHn(a){var s=this
if(s.b){s.a=s.a.cS(0)
s.b=!1}s.a.a=a},
gcc(a){var s=this.a.b
return s==null?B.az:s},
scc(a,b){var s=this
if(s.b){s.a=s.a.cS(0)
s.b=!1}s.a.b=b},
geQ(){var s=this.a.c
return s==null?0:s},
seQ(a){var s=this
if(s.b){s.a=s.a.cS(0)
s.b=!1}s.a.c=a},
skB(a){var s=this
if(s.b){s.a=s.a.cS(0)
s.b=!1}s.a.f=a},
gaf(a){var s=this.a.r
return s==null?B.m:s},
saf(a,b){var s,r=this
if(r.b){r.a=r.a.cS(0)
r.b=!1}s=r.a
s.r=A.A(b)===B.a2a?b:new A.a0(b.gp(b))},
st2(a){},
sBk(a){var s=this
if(s.b){s.a=s.a.cS(0)
s.b=!1}s.a.w=a},
sJR(a){var s=this
if(s.b){s.a=s.a.cS(0)
s.b=!1}s.a.x=a},
skx(a){var s=this
if(s.b){s.a=s.a.cS(0)
s.b=!1}s.a.y=a},
sHD(a){var s=this
if(s.b){s.a=s.a.cS(0)
s.b=!1}s.a.z=a},
i(a){var s,r,q=this,p=""+"Paint(",o=q.a.b,n=o==null
if((n?B.az:o)===B.U){p+=(n?B.az:o).i(0)
o=q.a
n=o.c
s=n==null
if((s?0:n)!==0)p+=" "+A.h(s?0:n)
else p+=" hairline"
o=o.d
n=o==null
if((n?B.cV:o)!==B.cV)p+=" "+(n?B.cV:o).i(0)
r="; "}else r=""
o=q.a
if(!o.f){p+=r+"antialias off"
r="; "}o=o.r
if(!(o==null?B.m:o).k(0,B.m)){o=q.a.r
p+=r+(o==null?B.m:o).i(0)}p+=")"
return p.charCodeAt(0)==0?p:p}}
A.bg.prototype={
cS(a){var s=this,r=new A.bg()
r.a=s.a
r.y=s.y
r.x=s.x
r.w=s.w
r.f=s.f
r.r=s.r
r.z=s.z
r.c=s.c
r.b=s.b
r.e=s.e
r.d=s.d
return r},
i(a){var s=this.bo(0)
return s}}
A.fD.prototype={
As(){var s,r,q,p,o,n,m,l,k,j=this,i=A.a([],t.kQ),h=j.Sf(0.25),g=B.f.YG(1,h)
i.push(new A.v(j.a,j.b))
if(h===5){s=new A.MB()
j.CS(s)
r=s.a
r.toString
q=s.b
q.toString
p=r.c
if(p===r.e&&r.d===r.f&&q.a===q.c&&q.b===q.d){o=new A.v(p,r.d)
i.push(o)
i.push(o)
i.push(o)
i.push(new A.v(q.e,q.f))
g=2
n=!0}else n=!1}else n=!1
if(!n)A.ajd(j,h,i)
m=2*g+1
k=0
while(!0){if(!(k<m)){l=!1
break}r=i[k]
if(isNaN(r.a)||isNaN(r.b)){l=!0
break}++k}if(l)for(r=m-1,q=j.c,p=j.d,k=1;k<r;++k)i[k]=new A.v(q,p)
return i},
CS(a){var s,r,q=this,p=q.r,o=1/(1+p),n=Math.sqrt(0.5+p*0.5),m=q.c,l=p*m,k=q.d,j=p*k,i=q.a,h=q.e,g=(i+2*l+h)*o*0.5,f=q.b,e=q.f,d=(f+2*j+e)*o*0.5,c=new A.v(g,d)
if(isNaN(g)||isNaN(d)){s=p*2
r=o*0.5
c=new A.v((i+s*m+h)*r,(f+s*k+e)*r)}p=c.a
m=c.b
a.a=new A.fD(i,f,(i+l)*o,(f+j)*o,p,m,n)
a.b=new A.fD(p,m,(h+l)*o,(e+j)*o,h,e,n)},
a_P(a){var s=this,r=s.Tq()
if(r==null){a.push(s)
return}if(!s.RZ(r,a,!0)){a.push(s)
return}},
Tq(){var s,r,q=this,p=q.f,o=q.b,n=p-o
p=q.r
s=p*(q.d-o)
r=new A.jL()
if(r.jk(p*n-n,n-2*s,s)===1)return r.a
return null},
RZ(a,a0,a1){var s,r,q,p=this,o=p.a,n=p.b,m=p.r,l=p.c*m,k=p.d*m,j=p.e,i=p.f,h=o+(l-o)*a,g=l+(j-l)*a,f=n+(k-n)*a,e=1+(m-1)*a,d=m+(1-m)*a,c=e+(d-e)*a,b=Math.sqrt(c)
if(Math.abs(b-0)<0.000244140625)return!1
if(Math.abs(e-0)<0.000244140625||Math.abs(c-0)<0.000244140625||Math.abs(d-0)<0.000244140625)return!1
s=(h+(g-h)*a)/c
r=(f+(k+(i-k)*a-f)*a)/c
m=p.b
q=p.f
a0.push(new A.fD(o,m,h/e,r,s,r,e/b))
a0.push(new A.fD(s,r,g/d,r,j,q,d/b))
return!0},
Sf(a){var s,r,q,p,o,n,m=this
if(a<0)return 0
s=m.r-1
r=s/(4*(2+s))
q=r*(m.a-2*m.c+m.e)
p=r*(m.b-2*m.d+m.f)
o=Math.sqrt(q*q+p*p)
for(n=0;n<5;++n){if(o<=a)break
o*=0.25}return n},
a1o(a){var s,r,q,p,o,n,m,l,k=this
if(!(a===0&&k.a===k.c&&k.b===k.d))s=a===1&&k.c===k.e&&k.d===k.f
else s=!0
if(s)return new A.v(k.e-k.a,k.f-k.b)
s=k.a
r=k.e-s
q=k.f
p=k.b
o=q-p
q=k.r
n=q*(k.c-s)
m=q*(k.d-p)
l=A.ap3(q*r-r,q*o-o,r-n-n,o-m-m,n,m)
return new A.v(l.IB(a),l.IC(a))}}
A.a3h.prototype={}
A.VL.prototype={}
A.MB.prototype={}
A.VS.prototype={}
A.qZ.prototype={
Fo(){var s=this
s.d=0
s.b=B.bq
s.f=s.e=-1},
Dd(a){var s=this
s.b=a.b
s.d=a.d
s.e=a.e
s.f=a.f},
sIG(a){this.b=a},
eL(a){if(this.a.w!==0){this.a=A.aow()
this.Fo()}},
hG(a,b,c){var s=this,r=s.a.h4(0,0)
s.d=r+1
s.a.ev(r,b,c)
s.f=s.e=-1},
Ei(){var s,r,q,p,o=this.d
if(o<=0){s=this.a
if(s.d===0){r=0
q=0}else{p=2*(-o-1)
o=s.f
r=o[p]
q=o[p+1]}this.hG(0,r,q)}},
d6(a,b,c){var s,r=this
if(r.d<=0)r.Ei()
s=r.a.h4(1,0)
r.a.ev(s,b,c)
r.f=r.e=-1},
fa(a,b,c,d,e){var s,r=this
r.Ei()
s=r.a.h4(3,e)
r.a.ev(s,a,b)
r.a.ev(s+1,c,d)
r.f=r.e=-1},
bg(a){var s=this,r=s.a,q=r.w
if(q!==0&&r.r[q-1]!==5)r.h4(5,0)
r=s.d
if(r>=0)s.d=-r
s.f=s.e=-1},
qW(a){this.qX(a,0,0)},
qj(){var s,r=this.a,q=r.w
for(r=r.r,s=0;s<q;++s)switch(r[s]){case 1:case 2:case 3:case 4:return!1}return!0},
qX(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.qj(),i=k.qj()?b:-1,h=k.a.h4(0,0)
k.d=h+1
s=k.a.h4(1,0)
r=k.a.h4(1,0)
q=k.a.h4(1,0)
k.a.h4(5,0)
p=k.a
o=a.a
n=a.b
m=a.c
l=a.d
if(b===0){p.ev(h,o,n)
k.a.ev(s,m,n)
k.a.ev(r,m,l)
k.a.ev(q,o,l)}else{p.ev(q,o,l)
k.a.ev(r,m,l)
k.a.ev(s,m,n)
k.a.ev(h,o,n)}p=k.a
p.ay=j
p.ch=b===1
p.CW=0
k.f=k.e=-1
k.f=i},
xn(a){this.Ck(a,0,0)},
Ck(a,b,c){var s,r=this,q=r.qj(),p=a.a,o=a.c,n=(p+o)/2,m=a.b,l=a.d,k=(m+l)/2
if(b===0){r.hG(0,o,k)
r.fa(o,l,n,l,0.707106781)
r.fa(p,l,p,k,0.707106781)
r.fa(p,m,n,m,0.707106781)
r.fa(o,m,o,k,0.707106781)}else{r.hG(0,o,k)
r.fa(o,m,n,m,0.707106781)
r.fa(p,m,p,k,0.707106781)
r.fa(p,l,n,l,0.707106781)
r.fa(o,l,o,k,0.707106781)}r.bg(0)
s=r.a
s.at=q
s.ch=b===1
s.CW=0
r.f=r.e=-1
if(q)r.f=b},
H3(a,b){var s,r,q,p,o,n=this,m=a.length
if(m<=0)return
s=n.a.h4(0,0)
n.d=s+1
r=n.a
q=a[0]
r.ev(s,q.a,q.b)
n.a.M3(1,m-1)
for(r=n.a.f,p=1;p<m;++p){q=a[p]
o=(s+p)*2
r[o]=q.a
r[o+1]=q.b}if(b)n.bg(0)
n.f=n.e=-1},
f2(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.qj(),e=a1.a,d=a1.b,c=a1.c,b=a1.d,a=new A.D(e,d,c,b),a0=a1.e
if(a0===0||a1.f===0)if(a1.r===0||a1.w===0)if(a1.z===0||a1.Q===0)s=a1.x===0||a1.y===0
else s=!1
else s=!1
else s=!1
if(s||e>=c||d>=b)g.qX(a,0,3)
else if(A.aEq(a1))g.Ck(a,0,3)
else{r=c-e
q=b-d
p=Math.max(0,a0)
o=Math.max(0,a1.r)
n=Math.max(0,a1.z)
m=Math.max(0,a1.x)
l=Math.max(0,a1.f)
k=Math.max(0,a1.w)
j=Math.max(0,a1.Q)
i=Math.max(0,a1.y)
h=A.aga(j,i,q,A.aga(l,k,q,A.aga(n,m,r,A.aga(p,o,r,1))))
a0=b-h*j
g.hG(0,e,a0)
g.d6(0,e,d+h*l)
g.fa(e,d,e+h*p,d,0.707106781)
g.d6(0,c-h*o,d)
g.fa(c,d,c,d+h*k,0.707106781)
g.d6(0,c,b-h*i)
g.fa(c,b,c-h*m,b,0.707106781)
g.d6(0,e+h*n,b)
g.fa(e,b,e,a0,0.707106781)
g.bg(0)
g.f=f?0:-1
e=g.a
e.ax=f
e.ch=!1
e.CW=6}},
v(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
if(a3.a.w===0)return!1
s=a3.dJ(0)
r=a5.a
q=a5.b
if(r<s.a||q<s.b||r>s.c||q>s.d)return!1
p=a3.a
o=new A.a2t(p,r,q,new Float32Array(18))
o.ZN()
n=B.fT===a3.b
m=o.d
if((n?m&1:m)!==0)return!0
l=o.e
if(l<=1)return B.dm.Qu(l!==0,!1)
p=l&1
if(p!==0||n)return p!==0
k=A.aov(a3.a,!0)
j=new Float32Array(18)
i=A.a([],t.kQ)
p=k.a
h=!1
do{g=i.length
switch(k.jx(0,j)){case 0:case 5:break
case 1:A.aF2(j,r,q,i)
break
case 2:A.aF3(j,r,q,i)
break
case 3:f=k.f
A.aF0(j,r,q,p.y[f],i)
break
case 4:A.aF1(j,r,q,i)
break
case 6:h=!0
break}f=i.length
if(f>g){e=f-1
d=i[e]
c=d.a
b=d.b
if(Math.abs(c*c+b*b-0)<0.000244140625)B.b.fo(i,e)
else for(a=0;a<e;++a){a0=i[a]
f=a0.a
a1=a0.b
if(Math.abs(f*b-a1*c-0)<0.000244140625){f=c*f
if(f<0)f=-1
else f=f>0?1:0
if(f<=0){f=b*a1
if(f<0)f=-1
else f=f>0?1:0
f=f<=0}else f=!1}else f=!1
if(f){a2=B.b.fo(i,e)
if(a!==i.length)i[a]=a2
break}}}}while(!h)
return i.length!==0||!1},
cO(a){var s,r=a.a,q=a.b,p=this.a,o=A.ayg(p,r,q),n=p.e,m=new Uint8Array(n)
B.E.mX(m,0,p.r)
o=new A.qf(o,m)
n=p.x
o.x=n
o.z=p.z
s=p.y
if(s!=null){n=new Float32Array(n)
o.y=n
B.iY.mX(n,0,s)}o.e=p.e
o.w=p.w
o.c=p.c
o.d=p.d
n=p.Q
o.Q=n
if(!n){o.a=p.a.ag(0,r,q)
n=p.b
o.b=n==null?null:n.ag(0,r,q)
o.as=p.as}o.cx=p.cx
o.at=p.at
o.ax=p.ax
o.ay=p.ay
o.ch=p.ch
o.CW=p.CW
r=new A.qZ(o,B.bq)
r.Dd(this)
return r},
dJ(e2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0=this,e1=e0.a
if((e1.ax?e1.CW:-1)===-1)s=(e1.at?e1.CW:-1)!==-1
else s=!0
if(s)return e1.dJ(0)
if(!e1.Q&&e1.b!=null){e1=e1.b
e1.toString
return e1}r=new A.nA(e1)
r.nf(e1)
q=e0.a.f
for(p=!1,o=0,n=0,m=0,l=0,k=0,j=0,i=0,h=0,g=null,f=null,e=null;d=r.a3Y(),d!==6;){c=r.e
switch(d){case 0:j=q[c]
h=q[c+1]
i=h
k=j
break
case 1:j=q[c+2]
h=q[c+3]
i=h
k=j
break
case 2:if(f==null)f=new A.a3h()
b=c+1
a=q[c]
a0=b+1
a1=q[b]
b=a0+1
a2=q[a0]
a0=b+1
a3=q[b]
a4=q[a0]
a5=q[a0+1]
s=f.a=Math.min(a,a4)
a6=f.b=Math.min(a1,a5)
a7=f.c=Math.max(a,a4)
a8=f.d=Math.max(a1,a5)
a9=a-2*a2+a4
if(Math.abs(a9)>0.000244140625){b0=(a-a2)/a9
if(b0>=0&&b0<=1){b1=1-b0
b2=b1*b1
b3=2*b0*b1
b0*=b0
b4=b2*a+b3*a2+b0*a4
b5=b2*a1+b3*a3+b0*a5
s=Math.min(s,b4)
f.a=s
a7=Math.max(a7,b4)
f.c=a7
a6=Math.min(a6,b5)
f.b=a6
a8=Math.max(a8,b5)
f.d=a8}}a9=a1-2*a3+a5
if(Math.abs(a9)>0.000244140625){b6=(a1-a3)/a9
if(b6>=0&&b6<=1){b7=1-b6
b2=b7*b7
b3=2*b6*b7
b6*=b6
b8=b2*a+b3*a2+b6*a4
b9=b2*a1+b3*a3+b6*a5
s=Math.min(s,b8)
f.a=s
a7=Math.max(a7,b8)
f.c=a7
a6=Math.min(a6,b9)
f.b=a6
a8=Math.max(a8,b9)
f.d=a8}h=a8
j=a7
i=a6
k=s}else{h=a8
j=a7
i=a6
k=s}break
case 3:if(e==null)e=new A.VL()
s=e1.y[r.b]
b=c+1
a=q[c]
a0=b+1
a1=q[b]
b=a0+1
a2=q[a0]
a0=b+1
a3=q[b]
a4=q[a0]
a5=q[a0+1]
e.a=Math.min(a,a4)
e.b=Math.min(a1,a5)
e.c=Math.max(a,a4)
e.d=Math.max(a1,a5)
c0=new A.jL()
c1=a4-a
c2=s*(a2-a)
if(c0.jk(s*c1-c1,c1-2*c2,c2)!==0){a6=c0.a
a6.toString
if(a6>=0&&a6<=1){c3=2*(s-1)
a9=(-c3*a6+c3)*a6+1
c4=a2*s
b4=(((a4-2*c4+a)*a6+2*(c4-a))*a6+a)/a9
c4=a3*s
b5=(((a5-2*c4+a1)*a6+2*(c4-a1))*a6+a1)/a9
e.a=Math.min(e.a,b4)
e.c=Math.max(e.c,b4)
e.b=Math.min(e.b,b5)
e.d=Math.max(e.d,b5)}}c5=a5-a1
c6=s*(a3-a1)
if(c0.jk(s*c5-c5,c5-2*c6,c6)!==0){a6=c0.a
a6.toString
if(a6>=0&&a6<=1){c3=2*(s-1)
a9=(-c3*a6+c3)*a6+1
c4=a2*s
b8=(((a4-2*c4+a)*a6+2*(c4-a))*a6+a)/a9
c4=a3*s
b9=(((a5-2*c4+a1)*a6+2*(c4-a1))*a6+a1)/a9
e.a=Math.min(e.a,b8)
e.c=Math.max(e.c,b8)
e.b=Math.min(e.b,b9)
e.d=Math.max(e.d,b9)}}k=e.a
i=e.b
j=e.c
h=e.d
break
case 4:if(g==null)g=new A.VS()
b=c+1
c7=q[c]
a0=b+1
c8=q[b]
b=a0+1
c9=q[a0]
a0=b+1
d0=q[b]
b=a0+1
d1=q[a0]
a0=b+1
d2=q[b]
d3=q[a0]
d4=q[a0+1]
s=Math.min(c7,d3)
g.a=s
g.c=Math.min(c8,d4)
a6=Math.max(c7,d3)
g.b=a6
g.d=Math.max(c8,d4)
if(!(c7<c9&&c9<d1&&d1<d3))a7=c7>c9&&c9>d1&&d1>d3
else a7=!0
if(!a7){a7=-c7
d5=a7+3*(c9-d1)+d3
d6=2*(c7-2*c9+d1)
d7=d6*d6-4*d5*(a7+c9)
if(d7>=0&&Math.abs(d5)>0.000244140625){a7=-d6
a8=2*d5
if(d7===0){d8=a7/a8
b1=1-d8
if(d8>=0&&d8<=1){a7=3*b1
b4=b1*b1*b1*c7+a7*b1*d8*c9+a7*d8*d8*d1+d8*d8*d8*d3
g.a=Math.min(b4,s)
g.b=Math.max(b4,a6)}}else{d7=Math.sqrt(d7)
d8=(a7-d7)/a8
b1=1-d8
if(d8>=0&&d8<=1){s=3*b1
b4=b1*b1*b1*c7+s*b1*d8*c9+s*d8*d8*d1+d8*d8*d8*d3
g.a=Math.min(b4,g.a)
g.b=Math.max(b4,g.b)}d8=(a7+d7)/a8
b1=1-d8
if(d8>=0&&d8<=1){s=3*b1
b4=b1*b1*b1*c7+s*b1*d8*c9+s*d8*d8*d1+d8*d8*d8*d3
g.a=Math.min(b4,g.a)
g.b=Math.max(b4,g.b)}}}}if(!(c8<d0&&d0<d2&&d2<d4))s=c8>d0&&d0>d2&&d2>d4
else s=!0
if(!s){s=-c8
d5=s+3*(d0-d2)+d4
d6=2*(c8-2*d0+d2)
d7=d6*d6-4*d5*(s+d0)
if(d7>=0&&Math.abs(d5)>0.000244140625){s=-d6
a6=2*d5
if(d7===0){d8=s/a6
b1=1-d8
if(d8>=0&&d8<=1){s=3*b1
b5=b1*b1*b1*c8+s*b1*d8*d0+s*d8*d8*d2+d8*d8*d8*d4
g.c=Math.min(b5,g.c)
g.d=Math.max(b5,g.d)}}else{d7=Math.sqrt(d7)
d8=(s-d7)/a6
b1=1-d8
if(d8>=0&&d8<=1){a7=3*b1
b5=b1*b1*b1*c8+a7*b1*d8*d0+a7*d8*d8*d2+d8*d8*d8*d4
g.c=Math.min(b5,g.c)
g.d=Math.max(b5,g.d)}s=(s+d7)/a6
b7=1-s
if(s>=0&&s<=1){a6=3*b7
b5=b7*b7*b7*c8+a6*b7*s*d0+a6*s*s*d2+s*s*s*d4
g.c=Math.min(b5,g.c)
g.d=Math.max(b5,g.d)}}}}k=g.a
i=g.c
j=g.b
h=g.d
break}if(!p){l=h
m=j
n=i
o=k
p=!0}else{o=Math.min(o,k)
m=Math.max(m,j)
n=Math.min(n,i)
l=Math.max(l,h)}}d9=p?new A.D(o,n,m,l):B.I
e0.a.dJ(0)
return e0.a.b=d9},
i(a){var s=this.bo(0)
return s}}
A.a2s.prototype={
v0(a){var s=this,r=s.r,q=s.x
if(r!==q||s.w!==s.y){if(isNaN(r)||isNaN(s.w)||isNaN(q)||isNaN(s.y))return 5
a[0]=r
a[1]=s.w
a[2]=q
r=s.y
a[3]=r
s.r=q
s.w=r
return 1}else{a[0]=q
a[1]=s.y
return 5}},
q3(){var s,r,q=this
if(q.e===1){q.e=2
return new A.v(q.x,q.y)}s=q.a.f
r=q.Q
return new A.v(s[r-2],s[r-1])},
jx(a,b){var s,r,q,p,o,n,m=this,l=m.z,k=m.a
if(l===k.w){if(m.d&&m.e===2){if(1===m.v0(b))return 1
m.d=!1
return 5}return 6}s=m.z=l+1
r=k.r[l]
switch(r){case 0:if(m.d){m.z=s-1
q=m.v0(b)
if(q===5)m.d=!1
return q}if(s===m.c)return 6
l=k.f
k=m.Q
s=m.Q=k+1
p=l[k]
m.Q=s+1
o=l[s]
m.x=p
m.y=o
b[0]=p
b[1]=o
m.e=1
m.r=p
m.w=o
m.d=!0
break
case 1:n=m.q3()
l=k.f
k=m.Q
s=m.Q=k+1
p=l[k]
m.Q=s+1
o=l[s]
b[0]=n.a
b[1]=n.b
b[2]=p
b[3]=o
m.r=p
m.w=o
break
case 3:++m.f
n=m.q3()
b[0]=n.a
b[1]=n.b
l=k.f
k=m.Q
s=m.Q=k+1
b[2]=l[k]
k=m.Q=s+1
b[3]=l[s]
s=m.Q=k+1
k=l[k]
b[4]=k
m.r=k
m.Q=s+1
s=l[s]
b[5]=s
m.w=s
break
case 2:n=m.q3()
b[0]=n.a
b[1]=n.b
l=k.f
k=m.Q
s=m.Q=k+1
b[2]=l[k]
k=m.Q=s+1
b[3]=l[s]
s=m.Q=k+1
k=l[k]
b[4]=k
m.r=k
m.Q=s+1
s=l[s]
b[5]=s
m.w=s
break
case 4:n=m.q3()
b[0]=n.a
b[1]=n.b
l=k.f
k=m.Q
s=m.Q=k+1
b[2]=l[k]
k=m.Q=s+1
b[3]=l[s]
s=m.Q=k+1
b[4]=l[k]
k=m.Q=s+1
b[5]=l[s]
s=m.Q=k+1
k=l[k]
b[6]=k
m.r=k
m.Q=s+1
s=l[s]
b[7]=s
m.w=s
break
case 5:r=m.v0(b)
if(r===1)--m.z
else{m.d=!1
m.e=0}m.r=m.x
m.w=m.y
break
case 6:break
default:throw A.b(A.bO("Unsupport Path verb "+r,null,null))}return r}}
A.qf.prototype={
ev(a,b,c){var s=a*2,r=this.f
r[s]=b
r[s+1]=c},
f5(a){var s=this.f,r=a*2
return new A.v(s[r],s[r+1])},
AT(){var s=this
if(s.ay)return new A.D(s.f5(0).a,s.f5(0).b,s.f5(1).a,s.f5(2).b)
else return s.w===4?s.SE():null},
dJ(a){var s
if(this.Q)this.vn()
s=this.a
s.toString
return s},
SE(){var s,r,q,p,o,n,m=this,l=null,k=m.f5(0).a,j=m.f5(0).b,i=m.f5(1).a,h=m.f5(1).b
if(m.r[1]!==1||h!==j)return l
s=i-k
r=m.f5(2).a
q=m.f5(2).b
if(m.r[2]!==1||r!==i)return l
p=q-h
o=m.f5(3)
n=m.f5(3).b
if(m.r[3]!==1||n!==q)return l
if(r-o.a!==s||n-j!==p)return l
return new A.D(k,j,k+s,j+p)},
M0(){var s,r,q,p,o
if(this.w===2){s=this.r
s=s[0]!==0||s[1]!==1}else s=!0
if(s)return null
s=this.f
r=s[0]
q=s[1]
p=s[2]
o=s[3]
if(q===o||r===p)return new A.D(r,q,p,o)
return null},
DQ(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.dJ(0),f=A.a([],t.c0),e=new A.nA(this)
e.nf(this)
s=new Float32Array(8)
e.jx(0,s)
for(r=0;q=e.jx(0,s),q!==6;)if(3===q){p=s[2]
o=s[3]
n=p-s[0]
m=o-s[1]
l=s[4]
k=s[5]
if(n!==0){j=Math.abs(n)
i=Math.abs(k-o)}else{i=Math.abs(m)
j=m!==0?Math.abs(l-p):Math.abs(n)}f.push(new A.bJ(j,i));++r}l=f[0]
k=f[1]
h=f[2]
return A.a3i(g,f[3],h,l,k)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.Z(b)!==A.A(this))return!1
return b instanceof A.qf&&this.a1m(b)},
gu(a){var s=this
return A.a_(s.cx,s.f,s.y,s.r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
a1m(a){var s,r,q,p,o,n,m,l=this
if(l.cx!==a.cx)return!1
s=l.d
if(s!==a.d)return!1
r=s*2
for(q=l.f,p=a.f,o=0;o<r;++o)if(q[o]!==p[o])return!1
q=l.y
if(q==null){if(a.y!=null)return!1}else{p=a.y
if(p==null)return!1
n=q.length
if(p.length!==n)return!1
for(o=0;o<n;++o)if(q[o]!==p[o])return!1}m=l.w
if(m!==a.w)return!1
for(q=l.r,p=a.r,o=0;o<m;++o)if(q[o]!==p[o])return!1
return!0},
Fq(a){var s,r,q=this
if(a>q.c){s=a+10
q.c=s
r=new Float32Array(s*2)
B.iY.mX(r,0,q.f)
q.f=r}q.d=a},
Fr(a){var s,r,q=this
if(a>q.e){s=a+8
q.e=s
r=new Uint8Array(s)
B.E.mX(r,0,q.r)
q.r=r}q.w=a},
Fp(a){var s,r,q=this
if(a>q.x){s=a+4
q.x=s
r=new Float32Array(s)
s=q.y
if(s!=null)B.iY.mX(r,0,s)
q.y=r}q.z=a},
vn(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.d
i.Q=!1
i.b=null
if(h===0){i.a=B.I
i.as=!0}else{s=i.f
r=s[0]
q=s[1]
p=0*r*q
o=2*h
for(n=q,m=r,l=2;l<o;l+=2){k=s[l]
j=s[l+1]
p=p*k*j
m=Math.min(m,k)
n=Math.min(n,j)
r=Math.max(r,k)
q=Math.max(q,j)}if(p*0===0){i.a=new A.D(m,n,r,q)
i.as=!0}else{i.a=B.I
i.as=!1}}},
h4(a,b){var s,r,q,p,o,n=this
switch(a){case 0:s=1
r=0
break
case 1:s=1
r=1
break
case 2:s=2
r=2
break
case 3:s=2
r=4
break
case 4:s=3
r=8
break
case 5:s=0
r=0
break
case 6:s=0
r=0
break
default:s=0
r=0
break}n.cx|=r
n.Q=!0
n.um()
q=n.w
n.Fr(q+1)
n.r[q]=a
if(3===a){p=n.z
n.Fp(p+1)
n.y[p]=b}o=n.d
n.Fq(o+s)
return o},
M3(a,b){var s,r,q,p,o,n,m=this
m.um()
switch(a){case 0:s=b
r=0
break
case 1:s=b
r=1
break
case 2:s=2*b
r=2
break
case 3:s=2*b
r=4
break
case 4:s=3*b
r=8
break
case 5:s=0
r=0
break
case 6:s=0
r=0
break
default:s=0
r=0
break}m.cx|=r
m.Q=!0
m.um()
if(3===a)m.Fp(m.z+b)
q=m.w
m.Fr(q+b)
for(p=m.r,o=0;o<b;++o)p[q+o]=a
n=m.d
m.Fq(n+s)
return n},
um(){var s=this
s.ay=s.ax=s.at=!1
s.b=null
s.Q=!0}}
A.nA.prototype={
nf(a){var s
this.d=0
s=this.a
if(s.Q)s.vn()
if(!s.as)this.c=s.w},
a3Y(){var s,r=this,q=r.c,p=r.a
if(q===p.w)return 6
p=p.r
r.c=q+1
s=p[q]
switch(s){case 0:q=r.d
r.e=q
r.d=q+2
break
case 1:q=r.d
r.e=q-2
r.d=q+2
break
case 3:++r.b
q=r.d
r.e=q-2
r.d=q+4
break
case 2:q=r.d
r.e=q-2
r.d=q+4
break
case 4:q=r.d
r.e=q-2
r.d=q+6
break
case 5:break
case 6:break
default:throw A.b(A.bO("Unsupport Path verb "+s,null,null))}return s},
jx(a,b){var s,r,q,p,o,n=this,m=n.c,l=n.a
if(m===l.w)return 6
s=l.r
n.c=m+1
r=s[m]
q=l.f
p=n.d
switch(r){case 0:o=p+1
b[0]=q[p]
p=o+1
b[1]=q[o]
break
case 1:b[0]=q[p-2]
b[1]=q[p-1]
o=p+1
b[2]=q[p]
p=o+1
b[3]=q[o]
break
case 3:++n.b
b[0]=q[p-2]
b[1]=q[p-1]
o=p+1
b[2]=q[p]
p=o+1
b[3]=q[o]
o=p+1
b[4]=q[p]
p=o+1
b[5]=q[o]
break
case 2:b[0]=q[p-2]
b[1]=q[p-1]
o=p+1
b[2]=q[p]
p=o+1
b[3]=q[o]
o=p+1
b[4]=q[p]
p=o+1
b[5]=q[o]
break
case 4:b[0]=q[p-2]
b[1]=q[p-1]
o=p+1
b[2]=q[p]
p=o+1
b[3]=q[o]
o=p+1
b[4]=q[p]
p=o+1
b[5]=q[o]
o=p+1
b[6]=q[p]
p=o+1
b[7]=q[o]
break
case 5:break
case 6:break
default:throw A.b(A.bO("Unsupport Path verb "+r,null,null))}n.d=p
return r}}
A.jL.prototype={
jk(a,b,c){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.Tk(-c,b)
l.a=s
return s==null?0:1}r=b*b-4*a*c
if(r<0)return 0
r=Math.sqrt(r)
if(!isFinite(r))return 0
q=b<0?-(b-r)/2:-(b+r)/2
p=A.Tk(q,a)
if(p!=null){l.a=p
o=1}else o=0
p=A.Tk(c,q)
if(p!=null){n=o+1
if(o===0)l.a=p
else l.b=p
o=n}if(o===2){s=l.a
s.toString
m=l.b
m.toString
if(s>m){l.a=m
l.b=s}else if(s===m)return 1}return o}}
A.a7s.prototype={
IB(a){return(this.a*a+this.c)*a+this.e},
IC(a){return(this.b*a+this.d)*a+this.f}}
A.a2t.prototype={
ZN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=A.aov(d,!0)
for(s=e.f,r=t.wd;q=c.jx(0,s),q!==6;)switch(q){case 0:case 5:break
case 1:e.Sd()
break
case 2:p=!A.aox(s)?A.ayh(s):0
o=e.D8(s[0],s[1],s[2],s[3],s[4],s[5])
e.d+=p>0?o+e.D8(s[4],s[5],s[6],s[7],s[8],s[9]):o
break
case 3:n=d.y[c.f]
m=s[0]
l=s[1]
k=s[2]
j=s[3]
i=s[4]
h=s[5]
g=A.aox(s)
f=A.a([],r)
new A.fD(m,l,k,j,i,h,n).a_P(f)
e.D7(f[0])
if(!g&&f.length===2)e.D7(f[1])
break
case 4:e.Sb()
break}},
Sd(){var s,r,q,p,o,n=this,m=n.f,l=m[0],k=m[1],j=m[2],i=m[3]
if(k>i){s=k
r=i
q=-1}else{s=i
r=k
q=1}m=n.c
if(m<r||m>s)return
p=n.b
if(A.a2u(p,m,l,k,j,i)){++n.e
return}if(m===s)return
o=(j-l)*(m-k)-(i-k)*(p-l)
if(o===0){if(p!==j||m!==i)++n.e
q=0}else if(A.azc(o)===q)q=0
n.d+=q},
D8(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this
if(b>f){s=b
r=f
q=-1}else{s=f
r=b
q=1}p=k.c
if(p<r||p>s)return 0
o=k.b
if(A.a2u(o,p,a,b,e,f)){++k.e
return 0}if(p===s)return 0
n=new A.jL()
if(0===n.jk(b-2*d+f,2*(d-b),b-p))m=q===1?a:e
else{l=n.a
l.toString
m=((e-2*c+a)*l+2*(c-a))*l+a}if(Math.abs(m-o)<0.000244140625)if(o!==e||p!==f){++k.e
return 0}return m<o?q:0},
D7(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.b,f=a.f
if(g>f){s=g
r=f
q=-1}else{s=f
r=g
q=1}p=h.c
if(p<r||p>s)return
o=h.b
n=a.a
m=a.e
if(A.a2u(o,p,n,g,m,f)){++h.e
return}if(p===s)return
l=a.r
k=a.d*l-p*l+p
j=new A.jL()
if(0===j.jk(f+(g-2*k),2*(k-g),g-p))n=q===1?n:m
else{i=j.a
i.toString
n=A.avZ(n,a.c,m,l,i)/A.avY(l,i)}if(Math.abs(n-o)<0.000244140625)if(o!==m||p!==a.f){++h.e
return}p=h.d
h.d=p+(n<o?q:0)},
Sb(){var s,r=this.f,q=A.arb(r,r)
for(s=0;s<=q;++s)this.ZO(s*3*2)},
ZO(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.f,e=a0+1,d=f[a0],c=e+1,b=f[e],a=f[c]
e=c+1+1
s=f[e]
e=e+1+1
r=f[e]
q=f[e+1]
if(b>q){p=b
o=q
n=-1}else{p=q
o=b
n=1}m=g.c
if(m<o||m>p)return
l=g.b
if(A.a2u(l,m,d,b,r,q)){++g.e
return}if(m===p)return
k=Math.min(d,Math.min(a,Math.min(s,r)))
j=Math.max(d,Math.max(a,Math.max(s,r)))
if(l<k)return
if(l>j){g.d+=n
return}i=A.arc(f,a0,m)
if(i==null)return
h=A.arx(d,a,s,r,i)
if(Math.abs(h-l)<0.000244140625)if(l!==r||m!==q){++g.e
return}f=g.d
g.d=f+(h<l?n:0)}}
A.lj.prototype={
a4e(){return this.b.$0()}}
A.Jb.prototype={
bn(a){var s=this.rl("flt-picture")
A.H(s,"setAttribute",["aria-hidden","true"])
return s},
p9(a){this.BQ(a)},
h_(){var s,r,q,p,o,n=this,m=n.e.f
n.f=m
s=n.CW
if(s!==0||n.cx!==0){m.toString
r=new A.bI(new Float32Array(16))
r.bf(m)
n.f=r
r.ag(0,s,n.cx)}m=n.db
q=m.c-m.a
p=m.d-m.b
o=q===0||p===0?1:A.aBF(n.f,q,p)
if(o!==n.dy){n.dy=o
n.fr=!0}n.Sc()},
Sc(){var s,r,q,p,o,n,m=this,l=m.e
if(l.r==null){s=A.dL()
for(r=null;l!=null;){q=l.w
if(q!=null)r=r==null?A.alR(s,q):r.dT(A.alR(s,q))
p=l.goP()
if(p!=null&&!p.oL(0))s.cY(0,p)
l=l.e}if(r!=null)o=r.c-r.a<=0||r.d-r.b<=0
else o=!1
if(o)r=B.I
o=m.e
o.r=r}else o=l
o=o.r
n=m.db
if(o==null){m.id=n
o=n}else o=m.id=n.dT(o)
if(o.c-o.a<=0||o.d-o.b<=0)m.go=m.id=B.I},
vp(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a==null||!a.cy.b.e){h.fy=h.id
h.fr=!0
return}s=a===h?h.fy:a.fy
if(J.f(h.id,B.I)){h.fy=B.I
if(!J.f(s,B.I))h.fr=!0
return}s.toString
r=h.id
r.toString
if(A.as6(s,r)){h.fy=s
return}q=r.a
p=r.b
o=r.c
r=r.d
n=o-q
m=A.a2x(s.a-q,n)
l=r-p
k=A.a2x(s.b-p,l)
n=A.a2x(o-s.c,n)
l=A.a2x(r-s.d,l)
j=h.db
j.toString
i=new A.D(q-m,p-k,o+n,r+l).dT(j)
h.fr=!J.f(h.fy,i)
h.fy=i},
q0(a){var s,r,q,p=this,o=a==null,n=o?null:a.ch
p.fr=!1
s=p.cy.b
if(s.e){r=p.fy
r=r.gO(r)}else r=!0
if(r){A.SZ(n)
if(!o)a.ch=null
o=p.d
if(o!=null)A.alJ(o)
o=p.ch
if(o!=null&&o!==n)A.SZ(o)
p.ch=null
return}if(s.d.c)p.Rj(n)
else{A.SZ(p.ch)
o=p.d
o.toString
q=p.ch=new A.Wv(o,A.a([],t.ea),A.a([],t.J),A.dL())
o=p.d
o.toString
A.alJ(o)
o=p.fy
o.toString
s.xv(q,o)
q.mc()}},
zm(a){var s,r,q,p,o=this,n=a.cy,m=o.cy
if(n===m)return 0
n=n.b
if(!n.e)return 1
s=n.d.c
r=m.b.d.c
if(s!==r)return 1
else if(!r)return 1
else{q=t.jz.a(a.ch)
if(q==null)return 1
else{n=o.id
n.toString
if(!q.In(n,o.dy))return 1
else{n=o.id
n=A.Ur(n.c-n.a)
m=o.id
m=A.Uq(m.d-m.b)
p=q.r*q.w
if(p===0)return 1
return 1-n*m/p}}}},
Rj(a){var s,r,q=this
if(a instanceof A.jd){s=q.fy
s.toString
s=a.In(s,q.dy)&&a.y===A.b_()}else s=!1
if(s){s=q.fy
s.toString
a.sxF(0,s)
q.ch=a
a.b=q.fx
a.L(0)
s=q.cy.b
s.toString
r=q.fy
r.toString
s.xv(a,r)
a.mc()}else{A.SZ(a)
s=q.ch
if(s instanceof A.jd)s.b=null
q.ch=null
s=$.aib
r=q.fy
s.push(new A.lj(new A.a1(r.c-r.a,r.d-r.b),new A.a2w(q)))}},
Tp(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.c-a0.a,a=a0.d-a0.b
for(s=b+1,r=a+1,q=b*a,p=q>1,o=null,n=1/0,m=0;m<$.kl.length;++m){l=$.kl[m]
k=self.window.devicePixelRatio
if(k===0)k=1
if(l.y!==k)continue
k=l.a
j=k.c-k.a
k=k.d-k.b
i=j*k
h=c.dy
g=self.window.devicePixelRatio
if(l.r>=B.d.dh(s*(g===0?1:g))+2){g=self.window.devicePixelRatio
f=l.w>=B.d.dh(r*(g===0?1:g))+2&&l.ay===h}else f=!1
e=i<n
if(f&&e)if(!(e&&p&&i/q>4)){if(j===b&&k===a){o=l
break}n=i
o=l}}if(o!=null){B.b.t($.kl,o)
o.sxF(0,a0)
o.b=c.fx
return o}d=A.avm(a0,c.cy.b.d,c.dy)
d.b=c.fx
return d},
CD(){A.r(this.d.style,"transform","translate("+A.h(this.CW)+"px, "+A.h(this.cx)+"px)")},
ez(){this.CD()
this.q0(null)},
aK(){this.vp(null)
this.fr=!0
this.BO()},
be(a,b){var s,r,q=this
q.BS(0,b)
q.fx=b.fx
if(b!==q)b.fx=null
if(q.CW!==b.CW||q.cx!==b.cx)q.CD()
q.vp(b)
if(q.cy===b.cy){s=q.ch
r=s instanceof A.jd&&q.dy!==s.ay
if(q.fr||r)q.q0(b)
else q.ch=b.ch}else q.q0(b)},
jG(){var s=this
s.BR()
s.vp(s)
if(s.fr)s.q0(s)},
i9(){A.SZ(this.ch)
this.ch=null
this.BP()}}
A.a2w.prototype={
$0(){var s,r=this.a,q=r.fy
q.toString
s=r.ch=r.Tp(q)
s.b=r.fx
q=r.d
q.toString
A.alJ(q)
r.d.append(s.c)
s.L(0)
q=r.cy.b
q.toString
r=r.fy
r.toString
q.xv(s,r)
s.mc()},
$S:0}
A.a3F.prototype={
xv(a,b){var s,r,q,p,o,n,m,l,k,j
try{m=this.b
m.toString
m=A.as6(b,m)
l=this.c
k=l.length
if(m){s=k
for(r=0;r<s;++r)l[r].aN(a)}else{q=k
for(p=0;p<q;++p){o=l[p]
if(o instanceof A.uR)if(o.a3h(b))continue
o.aN(a)}}}catch(j){n=A.ab(j)
if(!J.f(n.name,"NS_ERROR_FAILURE"))throw j}},
c3(a,b){var s,r,q=this,p=b.a
if(p.w!=null)q.d.c=!0
q.e=!0
s=A.th(b)
b.b=!0
r=new A.IX(a,p)
p=q.a
if(s!==0)p.l5(a.cf(s),r)
else p.l5(a,r)
q.c.push(r)},
c7(a,b){var s,r,q,p,o,n,m,l,k=this,j=b.a
if(j.w!=null||!a.as)k.d.c=!0
k.e=!0
s=A.th(b)
r=a.a
q=a.c
p=Math.min(r,q)
o=a.b
n=a.d
m=Math.min(o,n)
q=Math.max(r,q)
n=Math.max(o,n)
b.b=!0
l=new A.IW(a,j)
k.a.jO(p-s,m-s,q+s,n+s,l)
k.c.push(l)},
fb(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=new A.D(a4.a,a4.b,a4.c,a4.d),b=a3.a,a=a3.b,a0=a3.c,a1=a3.d,a2=new A.D(b,a,a0,a1)
if(a2.k(0,c)||!a2.dT(c).k(0,c))return
s=a3.pE()
r=a4.pE()
q=A.oE(s.e,s.f)
p=A.oE(s.r,s.w)
o=A.oE(s.z,s.Q)
n=A.oE(s.x,s.y)
m=A.oE(r.e,r.f)
l=A.oE(r.r,r.w)
k=A.oE(r.z,r.Q)
j=A.oE(r.x,r.y)
if(m>q||l>p||k>o||j>n)return
d.e=d.d.c=!0
i=A.th(a5)
a5.b=!0
h=new A.IP(a3,a4,a5.a)
g=A.eg()
g.sIG(B.fT)
g.f2(a3)
g.f2(a4)
g.bg(0)
h.x=g
f=Math.min(b,a0)
e=Math.max(b,a0)
d.a.jO(f-i,Math.min(a,a1)-i,e+i,Math.max(a,a1)+i,h)
d.c.push(h)},
cr(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b.a.w==null){t.n.a(a)
s=a.a.AT()
if(s!=null){j.c3(s,b)
return}r=a.a
q=r.ax?r.DQ():null
if(q!=null){j.c7(q,b)
return}}t.n.a(a)
if(a.a.w!==0){j.e=j.d.c=!0
p=a.dJ(0)
o=A.th(b)
if(o!==0)p=p.cf(o)
r=a.a
n=new A.qf(r.f,r.r)
n.e=r.e
n.w=r.w
n.c=r.c
n.d=r.d
n.x=r.x
n.z=r.z
n.y=r.y
m=r.Q
n.Q=m
if(!m){n.a=r.a
n.b=r.b
n.as=r.as}n.cx=r.cx
n.at=r.at
n.ax=r.ax
n.ay=r.ay
n.ch=r.ch
n.CW=r.CW
l=new A.qZ(n,B.bq)
l.Dd(a)
b.b=!0
k=new A.IU(l,b.a)
j.a.l5(p,k)
l.b=a.b
j.c.push(k)}},
fc(a,b){var s,r,q,p,o=this
t.sk.a(a)
if(!a.f)return
o.e=!0
s=o.d
s.c=!0
s.b=!0
r=new A.IT(a,b)
q=a.ged().Q
s=b.a
p=b.b
o.a.jO(s+q.a,p+q.b,s+q.c,p+q.d,r)
o.c.push(r)},
TQ(a,b,c,d){var s,r,q,p,o,n,m,l=a[0],k=a[1],j=a.length
for(s=k,r=l,q=2;q<j;q+=2){p=a[q]
o=a[q+1]
if(isNaN(p)||isNaN(o))return
r=Math.min(r,p)
l=Math.max(l,p)
s=Math.min(s,o)
k=Math.max(k,o)}n=b/2
m=A.th(c)
this.a.jO(r-n-m,s-n-m,l+n+m,k+n+m,d)}}
A.cu.prototype={}
A.uR.prototype={
a3h(a){var s=this
if(s.a)return!0
return s.e<a.b||s.c>a.d||s.d<a.a||s.b>a.c}}
A.wP.prototype={
aN(a){a.bv(0)},
i(a){var s=this.bo(0)
return s}}
A.IZ.prototype={
aN(a){a.bj(0)},
i(a){var s=this.bo(0)
return s}}
A.J2.prototype={
aN(a){a.ag(0,this.a,this.b)},
i(a){var s=this.bo(0)
return s}}
A.J0.prototype={
aN(a){a.cN(0,this.a,this.b)},
i(a){var s=this.bo(0)
return s}}
A.J_.prototype={
aN(a){a.fq(0,this.a)},
i(a){var s=this.bo(0)
return s}}
A.J1.prototype={
aN(a){a.a8(0,this.a)},
i(a){var s=this.bo(0)
return s}}
A.IN.prototype={
aN(a){a.kj(this.f,this.r)},
i(a){var s=this.bo(0)
return s}}
A.IM.prototype={
aN(a){a.ki(this.f)},
i(a){var s=this.bo(0)
return s}}
A.IL.prototype={
aN(a){a.f9(0,this.f)},
i(a){var s=this.bo(0)
return s}}
A.IR.prototype={
aN(a){a.hr(this.f,this.r,this.w)},
i(a){var s=this.bo(0)
return s}}
A.IS.prototype={
aN(a){a.hs(this.f)},
i(a){var s=this.bo(0)
return s}}
A.IV.prototype={
aN(a){a.fM(this.r,this.f,this.w)},
i(a){var s=this.bo(0)
return s}}
A.IX.prototype={
aN(a){a.c3(this.f,this.r)},
i(a){var s=this.bo(0)
return s}}
A.IW.prototype={
aN(a){a.c7(this.f,this.r)},
i(a){var s=this.bo(0)
return s}}
A.IP.prototype={
aN(a){var s=this.w
if(s.b==null)s.b=B.az
a.cr(this.x,s)},
i(a){var s=this.bo(0)
return s}}
A.IO.prototype={
aN(a){a.dO(this.f,this.r,this.w)},
i(a){var s=this.bo(0)
return s}}
A.IU.prototype={
aN(a){a.cr(this.f,this.r)},
i(a){var s=this.bo(0)
return s}}
A.IY.prototype={
aN(a){var s=this
a.ht(s.f,s.r,s.w,s.x)},
i(a){var s=this.bo(0)
return s}}
A.IQ.prototype={
aN(a){var s=this
a.hq(s.f,s.r,s.w,s.x)},
i(a){var s=this.bo(0)
return s}}
A.IT.prototype={
aN(a){a.fc(this.f,this.r)},
i(a){var s=this.bo(0)
return s}}
A.adZ.prototype={
kj(a,b){var s,r,q,p,o=this,n=a.a,m=a.b,l=a.c,k=a.d
if(!o.x){s=$.am4()
s[0]=n
s[1]=m
s[2]=l
s[3]=k
A.alQ(o.y,s)
n=s[0]
m=s[1]
l=s[2]
k=s[3]}if(!o.z){o.Q=n
o.as=m
o.at=l
o.ax=k
o.z=!0
r=k
q=l
p=m
s=n}else{s=o.Q
if(n>s){o.Q=n
s=n}p=o.as
if(m>p){o.as=m
p=m}q=o.at
if(l<q){o.at=l
q=l}r=o.ax
if(k<r){o.ax=k
r=k}}if(s>=q||p>=r)b.a=!0
else{b.b=s
b.c=p
b.d=q
b.e=r}},
l5(a,b){this.jO(a.a,a.b,a.c,a.d,b)},
jO(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this
if(a===c||b===d){e.a=!0
return}if(!j.x){s=$.am4()
s[0]=a
s[1]=b
s[2]=c
s[3]=d
A.alQ(j.y,s)
r=s[0]
q=s[1]
p=s[2]
o=s[3]}else{o=d
p=c
q=b
r=a}if(j.z){n=j.at
if(r>=n){e.a=!0
return}m=j.Q
if(p<=m){e.a=!0
return}l=j.ax
if(q>=l){e.a=!0
return}k=j.as
if(o<=k){e.a=!0
return}if(r<m)r=m
if(p>n)p=n
if(q<k)q=k
if(o>l)o=l}e.b=r
e.c=q
e.d=p
e.e=o
if(j.b){j.c=Math.min(Math.min(j.c,r),p)
j.e=Math.max(Math.max(j.e,r),p)
j.d=Math.min(Math.min(j.d,q),o)
j.f=Math.max(Math.max(j.f,q),o)}else{j.c=Math.min(r,p)
j.e=Math.max(r,p)
j.d=Math.min(q,o)
j.f=Math.max(q,o)}j.b=!0},
B_(){var s=this,r=s.y,q=new A.bI(new Float32Array(16))
q.bf(r)
s.r.push(q)
r=s.z?new A.D(s.Q,s.as,s.at,s.ax):null
s.w.push(r)},
a07(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.b)return B.I
s=i.a
r=s.a
if(isNaN(r))r=-1/0
q=s.c
if(isNaN(q))q=1/0
p=s.b
if(isNaN(p))p=-1/0
o=s.d
if(isNaN(o))o=1/0
s=i.c
n=i.e
m=Math.min(s,n)
l=Math.max(s,n)
n=i.d
s=i.f
k=Math.min(n,s)
j=Math.max(n,s)
if(l<r||j<p)return B.I
return new A.D(Math.max(m,r),Math.max(k,p),Math.min(l,q),Math.min(j,o))},
i(a){var s=this.bo(0)
return s}}
A.a4z.prototype={}
A.r_.prototype={
n(){}}
A.wZ.prototype={
h_(){var s,r=self.window.innerWidth
r.toString
s=self.window.innerHeight
s.toString
this.w=new A.D(0,0,r,s)
this.r=null},
goP(){var s=this.CW
return s==null?this.CW=A.dL():s},
bn(a){return this.rl("flt-scene")},
ez(){}}
A.a8D.prototype={
XH(a){var s,r=a.a.a
if(r!=null)r.c=B.Wb
r=this.a
s=B.b.gM(r)
s.x.push(a)
a.e=s
r.push(a)
return a},
lI(a){return this.XH(a,t.f6)},
A7(a,b,c){var s,r
t.BM.a(c)
s=A.a([],t.g)
r=c!=null&&c.c===B.ai?c:null
r=new A.fG(r,t.C)
$.j8.push(r)
return this.lI(new A.wX(a,b,s,r,B.bd))},
Kz(a,b){var s,r,q
if(this.a.length===1)s=A.dL().a
else s=A.Ti(a)
t.aR.a(b)
r=A.a([],t.g)
q=b!=null&&b.c===B.ai?b:null
q=new A.fG(q,t.C)
$.j8.push(q)
return this.lI(new A.x_(s,r,q,B.bd))},
Kx(a,b,c){var s,r
t.f0.a(c)
s=A.a([],t.g)
r=c!=null&&c.c===B.ai?c:null
r=new A.fG(r,t.C)
$.j8.push(r)
return this.lI(new A.wW(b,a,null,s,r,B.bd))},
Kw(a,b,c){var s,r
t.gx.a(c)
s=A.a([],t.g)
r=c!=null&&c.c===B.ai?c:null
r=new A.fG(r,t.C)
$.j8.push(r)
return this.lI(new A.J8(a,b,null,s,r,B.bd))},
Ku(a,b,c){var s,r
t.rk.a(c)
s=A.a([],t.g)
r=c!=null&&c.c===B.ai?c:null
r=new A.fG(r,t.C)
$.j8.push(r)
return this.lI(new A.wV(a,b,s,r,B.bd))},
Ky(a,b,c){var s,r
t.Fl.a(c)
s=A.a([],t.g)
r=c!=null&&c.c===B.ai?c:null
r=new A.fG(r,t.C)
$.j8.push(r)
return this.lI(new A.wY(a,b,s,r,B.bd))},
H4(a){var s
t.f6.a(a)
if(a.c===B.ai)a.c=B.cJ
else a.tK()
s=B.b.gM(this.a)
s.x.push(a)
a.e=s},
eK(){this.a.pop()},
H1(a,b){if(!$.apd){$.apd=!0
$.bX().$1("The performance overlay isn't supported on the web")}},
H2(a,b,c,d){var s,r
t.l9.a(b)
s=b.b.b
r=new A.fG(null,t.C)
$.j8.push(r)
r=new A.Jb(a.a,a.b,b,s,new A.DK(t.om),r,B.bd)
s=B.b.gM(this.a)
s.x.push(r)
r.e=s},
Bi(a){},
B8(a){},
B7(a){},
aK(){A.arC()
A.arD()
A.air("preroll_frame",new A.a8F(this))
return A.air("apply_frame",new A.a8G(this))}}
A.a8F.prototype={
$0(){for(var s=this.a.a;s.length>1;)s.pop()
t.kF.a(B.b.gH(s)).p9(new A.a37())},
$S:0}
A.a8G.prototype={
$0(){var s,r,q=t.kF,p=this.a.a
if($.a8E==null)q.a(B.b.gH(p)).aK()
else{s=q.a(B.b.gH(p))
r=$.a8E
r.toString
s.be(0,r)}A.aDp(q.a(B.b.gH(p)))
$.a8E=q.a(B.b.gH(p))
return new A.r_(q.a(B.b.gH(p)).d)},
$S:190}
A.ahp.prototype={
$2(a,b){var s,r=a.a,q=r.b*r.a
r=b.a
s=r.b*r.a
return J.Ce(s,q)},
$S:200}
A.lm.prototype={
i(a){return"PersistedSurfaceState."+this.b}}
A.d6.prototype={
tK(){this.c=B.bd},
gf8(){return this.d},
aK(){var s,r=this,q=r.bn(0)
r.d=q
s=$.c8()
if(s===B.M)A.r(q.style,"z-index","0")
r.ez()
r.c=B.ai},
r_(a){this.d=a.d
a.d=null
a.c=B.Ah},
be(a,b){this.r_(b)
this.c=B.ai},
jG(){if(this.c===B.cJ)$.alK.push(this)},
i9(){this.d.remove()
this.d=null
this.c=B.Ah},
n(){},
rl(a){var s=A.b9(self.document,a)
A.r(s.style,"position","absolute")
return s},
goP(){return null},
h_(){var s=this
s.f=s.e.f
s.r=s.w=null},
p9(a){this.h_()},
i(a){var s=this.bo(0)
return s}}
A.Ja.prototype={}
A.dM.prototype={
p9(a){var s,r,q
this.BQ(a)
s=this.x
r=s.length
for(q=0;q<r;++q)s[q].p9(a)},
h_(){var s=this
s.f=s.e.f
s.r=s.w=null},
aK(){var s,r,q,p,o,n
this.BO()
s=this.x
r=s.length
q=this.gf8()
for(p=0;p<r;++p){o=s[p]
if(o.c===B.cJ)o.jG()
else if(o instanceof A.dM&&o.a.a!=null){n=o.a.a
n.toString
o.be(0,n)}else o.aK()
q.toString
n=o.d
n.toString
q.append(n)
o.b=p}},
zm(a){return 1},
be(a,b){var s,r=this
r.BS(0,b)
if(b.x.length===0)r.ZH(b)
else{s=r.x.length
if(s===1)r.Zt(b)
else if(s===0)A.J9(b)
else r.Zs(b)}},
ZH(a){var s,r,q,p=this.gf8(),o=this.x,n=o.length
for(s=0;s<n;++s){r=o[s]
if(r.c===B.cJ)r.jG()
else if(r instanceof A.dM&&r.a.a!=null){q=r.a.a
q.toString
r.be(0,q)}else r.aK()
r.b=s
p.toString
q=r.d
q.toString
p.append(q)}},
Zt(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.x[0]
g.b=0
if(g.c===B.cJ){if(!J.f(g.d.parentElement,h.gf8())){s=h.gf8()
s.toString
r=g.d
r.toString
s.append(r)}g.jG()
A.J9(a)
return}if(g instanceof A.dM&&g.a.a!=null){q=g.a.a
if(!J.f(q.d.parentElement,h.gf8())){s=h.gf8()
s.toString
r=q.d
r.toString
s.append(r)}g.be(0,q)
A.J9(a)
return}for(s=a.x,p=null,o=2,n=0;n<s.length;++n){m=s[n]
if(m.c===B.ai){l=g instanceof A.ca?A.d9(g):null
r=A.bq(l==null?A.aZ(g):l)
l=m instanceof A.ca?A.d9(m):null
r=r===A.bq(l==null?A.aZ(m):l)}else r=!1
if(!r)continue
k=g.zm(m)
if(k<o){o=k
p=m}}if(p!=null){g.be(0,p)
if(!J.f(g.d.parentElement,h.gf8())){r=h.gf8()
r.toString
j=g.d
j.toString
r.append(j)}}else{g.aK()
r=h.gf8()
r.toString
j=g.d
j.toString
r.append(j)}for(n=0;n<s.length;++n){i=s[n]
if(i!==p&&i.c===B.ai)i.i9()}},
Zs(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.gf8(),e=g.Wa(a)
for(s=g.x,r=t.t,q=null,p=null,o=!1,n=0;n<s.length;++n){m=s[n]
if(m.c===B.cJ){l=!J.f(m.d.parentElement,f)
m.jG()
k=m}else if(m instanceof A.dM&&m.a.a!=null){j=m.a.a
l=!J.f(j.d.parentElement,f)
m.be(0,j)
k=j}else{k=e.j(0,m)
if(k!=null){l=!J.f(k.d.parentElement,f)
m.be(0,k)}else{m.aK()
l=!0}}i=k!=null&&!l?k.b:-1
if(!o&&i!==n){q=A.a([],r)
p=A.a([],r)
for(h=0;h<n;++h){q.push(h)
p.push(h)}o=!0}if(o&&i!==-1){q.push(n)
p.push(i)}m.b=n}if(o){p.toString
g.VK(q,p)}A.J9(a)},
VK(a,b){var s,r,q,p,o,n,m=A.arR(b)
for(s=m.length,r=0;r<s;++r)m[r]=a[m[r]]
q=this.gf8()
for(s=this.x,r=s.length-1,p=null;r>=0;--r,p=n){a.toString
o=B.b.ek(a,r)!==-1&&B.b.v(m,r)
n=s[r].d
n.toString
if(!o)if(p==null)q.append(n)
else q.insertBefore(n,p)}},
Wa(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.x,c=d.length,b=a1.x,a=b.length,a0=A.a([],t.g)
for(s=0;s<c;++s){r=d[s]
if(r.c===B.bd&&r.a.a==null)a0.push(r)}q=A.a([],t.rK)
for(s=0;s<a;++s){r=b[s]
if(r.c===B.ai)q.push(r)}p=a0.length
o=q.length
if(p===0||o===0)return B.Vx
n=A.a([],t.fi)
for(m=0;m<p;++m){l=a0[m]
for(k=0;k<o;++k){j=q[k]
if(j!=null){if(j.c===B.ai){i=l instanceof A.ca?A.d9(l):null
d=A.bq(i==null?A.aZ(l):i)
i=j instanceof A.ca?A.d9(j):null
d=d===A.bq(i==null?A.aZ(j):i)}else d=!1
d=!d}else d=!0
if(d)continue
n.push(new A.mc(l,k,l.zm(j)))}}B.b.ds(n,new A.a2v())
h=A.z(t.gx,t.nx)
for(s=0;s<n.length;++s){g=n[s]
d=g.b
f=q[d]
b=g.a
e=h.j(0,b)==null
if(f!=null&&e){q[d]=null
h.l(0,b,f)}}return h},
jG(){var s,r,q
this.BR()
s=this.x
r=s.length
for(q=0;q<r;++q)s[q].jG()},
tK(){var s,r,q
this.Oj()
s=this.x
r=s.length
for(q=0;q<r;++q)s[q].tK()},
i9(){this.BP()
A.J9(this)}}
A.a2v.prototype={
$2(a,b){return B.d.b4(a.c,b.c)},
$S:274}
A.mc.prototype={
i(a){var s=this.bo(0)
return s}}
A.a37.prototype={}
A.x_.prototype={
gJS(){var s=this.cx
return s==null?this.cx=new A.bI(this.CW):s},
h_(){var s=this,r=s.e.f
r.toString
s.f=r.tm(s.gJS())
s.r=null},
goP(){var s=this.cy
return s==null?this.cy=A.axV(this.gJS()):s},
bn(a){var s=A.b9(self.document,"flt-transform")
A.cX(s,"position","absolute")
A.cX(s,"transform-origin","0 0 0")
return s},
ez(){A.r(this.d.style,"transform",A.hb(this.CW))},
be(a,b){var s,r,q,p,o=this
o.lj(0,b)
s=b.CW
r=o.CW
if(s===r){o.cx=b.cx
o.cy=b.cy
return}p=0
while(!0){if(!(p<16)){q=!1
break}if(r[p]!==s[p]){q=!0
break}++p}if(q)A.r(o.d.style,"transform",A.hb(r))
else{o.cx=b.cx
o.cy=b.cy}},
$iLC:1}
A.vv.prototype={
gjm(){return 1},
gmK(){return 0},
h2(){var s=0,r=A.R(t.eT),q,p=this,o,n,m,l
var $async$h2=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:n=new A.a7($.a9,t.zc)
m=new A.aQ(n,t.AN)
l=p.b
if(l!=null)l.$2(0,100)
if($.aui()){o=A.b9(self.document,"img")
o.src=p.a
o.decoding="async"
A.fz(o.decode(),t.z).au(new A.ZX(p,o,m),t.P).i2(new A.ZY(p,m))}else p.Dl(m)
q=n
s=1
break
case 1:return A.P(q,r)}})
return A.Q($async$h2,r)},
Dl(a){var s,r={},q=A.b9(self.document,"img"),p=A.b8("errorListener")
r.a=null
p.b=A.ae(new A.ZV(r,q,p,a))
A.bN(q,"error",p.ap(),null)
s=A.ae(new A.ZW(r,this,q,p,a))
r.a=s
A.bN(q,"load",s,null)
q.src=this.a},
$idm:1}
A.ZX.prototype={
$1(a){var s,r,q,p=this.a.b
if(p!=null)p.$2(100,100)
p=this.b
s=p.naturalWidth
r=p.naturalHeight
if(s===0)if(r===0){q=$.c8()
if(q!==B.bQ)q=q===B.hH
else q=!0}else q=!1
else q=!1
if(q){s=300
r=300}this.c.bT(0,new A.yg(new A.vw(p,s,r)))},
$S:2}
A.ZY.prototype={
$1(a){this.a.Dl(this.b)},
$S:2}
A.ZV.prototype={
$1(a){var s=this,r=s.a.a
if(r!=null)A.eb(s.b,"load",r,null)
A.eb(s.b,"error",s.c.ap(),null)
s.d.hn(a)},
$S:1}
A.ZW.prototype={
$1(a){var s,r=this,q=r.b.b
if(q!=null)q.$2(100,100)
q=r.c
s=r.a.a
s.toString
A.eb(q,"load",s,null)
A.eb(q,"error",r.d.ap(),null)
r.e.bT(0,new A.yg(new A.vw(q,q.naturalWidth,q.naturalHeight)))},
$S:1}
A.vu.prototype={}
A.yg.prototype={
gjb(a){return B.v},
$ivn:1,
geF(a){return this.a}}
A.vw.prototype={
n(){},
cS(a){return this},
z5(a){return a===this},
a_V(){var s=this.a
if(this.b)return s.cloneNode(!0)
else{this.b=!0
A.r(s.style,"position","absolute")
return s}},
i(a){return"["+this.d+"\xd7"+this.e+"]"},
gao(a){return this.d},
gaW(a){return this.e}}
A.kL.prototype={
i(a){return"DebugEngineInitializationState."+this.b}}
A.ahQ.prototype={
$0(){A.arw()},
$S:0}
A.ahR.prototype={
$2(a,b){var s,r
for(s=$.j2.length,r=0;r<$.j2.length;$.j2.length===s||(0,A.K)($.j2),++r)$.j2[r].$0()
return A.bZ(A.azk("OK"),t.jx)},
$S:204}
A.ahS.prototype={
$0(){var s=this.a
if(!s.a){s.a=!0
A.H(self.window,"requestAnimationFrame",[A.ae(new A.ahP(s))])}},
$S:0}
A.ahP.prototype={
$1(a){var s,r,q,p
A.aE2()
this.a.a=!1
s=B.d.dZ(1000*a)
A.aE0()
r=$.aR()
q=r.w
if(q!=null){p=A.cg(s,0,0)
A.T8(q,r.x,p)}q=r.y
if(q!=null)A.mm(q,r.z)},
$S:83}
A.afX.prototype={
$1(a){var s=a==null?null:new A.VY(a)
$.oD=!0
$.SU=s},
$S:84}
A.afY.prototype={
$0(){self._flutter_web_set_location_strategy=null},
$S:0}
A.YC.prototype={}
A.a_E.prototype={}
A.YB.prototype={}
A.a5_.prototype={}
A.YA.prototype={}
A.jK.prototype={}
A.a06.prototype={
QE(a){var s=this
s.b=A.ae(new A.a07(s))
A.bN(self.window,"keydown",s.b,null)
s.c=A.ae(new A.a08(s))
A.bN(self.window,"keyup",s.c,null)
$.j2.push(new A.a09(s))},
n(){var s,r,q=this
A.eb(self.window,"keydown",q.b,null)
A.eb(self.window,"keyup",q.c,null)
for(s=q.a,r=A.jA(s,s.r,A.m(s).c);r.q();)s.j(0,r.d).aA(0)
s.L(0)
$.ajR=q.c=q.b=null},
E2(a){var s,r,q,p,o=this,n=self.window.KeyboardEvent
n.toString
if(!(a instanceof n))return
n=a.code
n.toString
s=a.key
s.toString
if(!(s==="Meta"||s==="Shift"||s==="Alt"||s==="Control")&&o.e){s=o.a
r=s.j(0,n)
if(r!=null)r.aA(0)
if(a.type==="keydown")r=a.ctrlKey||a.shiftKey||a.altKey||a.metaKey
else r=!1
if(r)s.l(0,n,A.cw(B.i6,new A.a0q(o,n,a)))
else s.t(0,n)}q=a.getModifierState("Shift")?1:0
if(a.getModifierState("Alt")||a.getModifierState("AltGraph"))q|=2
if(a.getModifierState("Control"))q|=4
if(a.getModifierState("Meta"))q|=8
o.d=q
if(a.type==="keydown")if(a.key==="CapsLock"){n=q|32
o.d=n}else if(a.code==="NumLock"){n=q|16
o.d=n}else if(a.key==="ScrollLock"){n=q|64
o.d=n}else n=q
else n=q
p=A.aV(["type",a.type,"keymap","web","code",a.code,"key",a.key,"location",a.location,"metaState",n,"keyCode",a.keyCode],t.N,t.z)
$.aR().fW("flutter/keyevent",B.X.bL(p),new A.a0r(a))}}
A.a07.prototype={
$1(a){this.a.E2(a)},
$S:1}
A.a08.prototype={
$1(a){this.a.E2(a)},
$S:1}
A.a09.prototype={
$0(){this.a.n()},
$S:0}
A.a0q.prototype={
$0(){var s,r,q=this.a
q.a.t(0,this.b)
s=this.c
r=A.aV(["type","keyup","keymap","web","code",s.code,"key",s.key,"location",s.location,"metaState",q.d,"keyCode",s.keyCode],t.N,t.z)
$.aR().fW("flutter/keyevent",B.X.bL(r),A.aC1())},
$S:0}
A.a0r.prototype={
$1(a){if(a==null)return
if(A.mf(J.aW(t.a.a(B.X.eA(a)),"handled")))this.a.preventDefault()},
$S:13}
A.agC.prototype={
$1(a){return a.a.altKey},
$S:16}
A.agD.prototype={
$1(a){return a.a.altKey},
$S:16}
A.agE.prototype={
$1(a){return a.a.ctrlKey},
$S:16}
A.agF.prototype={
$1(a){return a.a.ctrlKey},
$S:16}
A.agG.prototype={
$1(a){return a.a.shiftKey},
$S:16}
A.agH.prototype={
$1(a){return a.a.shiftKey},
$S:16}
A.agI.prototype={
$1(a){return a.a.metaKey},
$S:16}
A.agJ.prototype={
$1(a){return a.a.metaKey},
$S:16}
A.G0.prototype={
Cg(a,b,c){var s=A.ae(new A.a0a(c))
this.c.l(0,b,s)
A.bN(self.window,b,s,!0)},
WT(a){var s={}
s.a=null
$.aR().a3f(a,new A.a0b(s))
s=s.a
s.toString
return s},
YE(){var s,r,q=this
q.Cg(0,"keydown",A.ae(new A.a0c(q)))
q.Cg(0,"keyup",A.ae(new A.a0d(q)))
s=$.dS()
r=t.S
q.b=new A.a0e(q.gWS(),s===B.bp,A.z(r,r),A.z(r,t.Q))}}
A.a0a.prototype={
$1(a){var s=$.dU
if((s==null?$.dU=A.kP():s).KC(a))return this.a.$1(a)
return null},
$S:67}
A.a0b.prototype={
$1(a){this.a.a=a},
$S:21}
A.a0c.prototype={
$1(a){var s=this.a.b
s===$&&A.c()
return s.jn(new A.jq(a))},
$S:1}
A.a0d.prototype={
$1(a){var s=this.a.b
s===$&&A.c()
return s.jn(new A.jq(a))},
$S:1}
A.jq.prototype={}
A.a0e.prototype={
FA(a,b,c){var s,r={}
r.a=!1
s=t.H
A.ajB(a,s).au(new A.a0k(r,this,c,b),s)
return new A.a0l(r)},
YV(a,b,c){var s,r,q,p=this
if(!p.b)return
s=p.FA(B.i6,new A.a0m(c,a,b),new A.a0n(p,a))
r=p.f
q=r.t(0,a)
if(q!=null)q.$0()
r.l(0,a,s)},
Uw(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=a.a,e=f.timeStamp
e.toString
s=B.d.dZ(e)
r=A.cg(B.d.dZ((e-s)*1000),s,0)
e=f.key
e.toString
q=f.code
q.toString
p=B.Vl.j(0,q)
if(p==null)p=B.c.gu(q)+98784247808
q=B.c.a4(e,0)
if(!(q>=97&&q<=122))q=q>=65&&q<=90
else q=!0
o=!(q&&e.length>1)
if(o)n=e
else n=g
m=new A.a0g(a,n,e,p).$0()
if(f.type!=="keydown")if(h.b){e=f.code
e.toString
e=e==="CapsLock"
l=e}else l=!1
else l=!0
if(h.b){e=f.code
e.toString
e=e==="CapsLock"}else e=!1
if(e){h.FA(B.v,new A.a0h(r,p,m),new A.a0i(h,p))
k=B.ez}else if(l){e=h.e
if(e.j(0,p)!=null){q=f.repeat
if(q===!0)k=B.Jd
else{h.c.$1(new A.fL(r,B.cu,p,m,g,!0))
e.t(0,p)
k=B.ez}}else k=B.ez}else{if(h.e.j(0,p)==null){f.preventDefault()
return}k=B.cu}e=h.e
j=e.j(0,p)
switch(k.a){case 0:i=m
break
case 1:i=g
break
case 2:i=j
break
default:i=g}q=i==null
if(q)e.t(0,p)
else e.l(0,p,i)
$.atW().R(0,new A.a0j(h,m,a,r))
if(o)if(!q)h.YV(p,m,r)
else{e=h.f.t(0,p)
if(e!=null)e.$0()}e=j==null?m:j
q=k===B.cu?g:n
if(h.c.$1(new A.fL(r,k,p,e,q,!1)))f.preventDefault()},
jn(a){var s=this,r={}
r.a=!1
s.c=new A.a0o(r,s)
try{s.Uw(a)}finally{if(!r.a)s.c.$1(B.Jc)
s.c=null}}}
A.a0k.prototype={
$1(a){var s=this
if(!s.a.a&&!s.b.d){s.c.$0()
s.b.a.$1(s.d.$0())}},
$S:14}
A.a0l.prototype={
$0(){this.a.a=!0},
$S:0}
A.a0m.prototype={
$0(){return new A.fL(new A.aH(this.a.a+2e6),B.cu,this.b,this.c,null,!0)},
$S:70}
A.a0n.prototype={
$0(){this.a.e.t(0,this.b)},
$S:0}
A.a0g.prototype={
$0(){var s,r,q,p=this,o=p.a.a,n=o.key
n.toString
if(B.A_.V(0,n)){n=o.key
n.toString
n=B.A_.j(0,n)
s=n==null?null:n[o.location]
s.toString
return s}n=p.b
if(n!=null){s=B.c.a4(n,0)&65535
if(n.length===2)s+=B.c.a4(n,1)<<16>>>0
return s>=65&&s<=90?s+97-65:s}n=p.c
if(n==="Dead"){n=o.altKey
r=o.ctrlKey
q=o.shiftKey
o=o.metaKey
n=n?1073741824:0
r=r?268435456:0
q=q?536870912:0
o=o?2147483648:0
return p.d+(n+r+q+o)+98784247808}o=B.VD.j(0,n)
return o==null?B.c.gu(n)+98784247808:o},
$S:34}
A.a0h.prototype={
$0(){return new A.fL(this.a,B.cu,this.b,this.c,null,!0)},
$S:70}
A.a0i.prototype={
$0(){this.a.e.t(0,this.b)},
$S:0}
A.a0j.prototype={
$2(a,b){var s,r,q=this
if(q.b===a)return
s=q.a
r=s.e
if(r.a0b(0,a)&&!b.$1(q.c))r.Ah(r,new A.a0f(s,a,q.d))},
$S:221}
A.a0f.prototype={
$2(a,b){var s=this.b
if(b!==s)return!1
this.a.c.$1(new A.fL(this.c,B.cu,a,s,null,!0))
return!0},
$S:223}
A.a0o.prototype={
$1(a){this.a.a=!0
return this.b.a.$1(a)},
$S:57}
A.a1p.prototype={}
A.UF.prototype={
gZi(){var s=this.a
s===$&&A.c()
return s},
n(){var s=this
if(s.c||s.gjK()==null)return
s.c=!0
s.Zj()},
ot(){var s=0,r=A.R(t.H),q=this
var $async$ot=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:s=q.gjK()!=null?2:3
break
case 2:s=4
return A.G(q.hN(),$async$ot)
case 4:s=5
return A.G(q.gjK().jN(0,-1),$async$ot)
case 5:case 3:return A.P(null,r)}})
return A.Q($async$ot,r)},
gi7(){var s=this.gjK()
s=s==null?null:s.pA(0)
return s==null?"/":s},
gbD(){var s=this.gjK()
return s==null?null:s.mV(0)},
Zj(){return this.gZi().$0()}}
A.wv.prototype={
QF(a){var s,r=this,q=r.d
if(q==null)return
r.a=q.kc(0,r.gzS(r))
if(!r.wa(r.gbD())){s=t.z
q.hL(0,A.aV(["serialCount",0,"state",r.gbD()],s,s),"flutter",r.gi7())}r.e=r.gvx()},
gvx(){if(this.wa(this.gbD())){var s=this.gbD()
s.toString
return A.e4(J.aW(t.G.a(s),"serialCount"))}return 0},
wa(a){return t.G.b(a)&&J.aW(a,"serialCount")!=null},
pK(a,b,c){var s,r,q=this.d
if(q!=null){s=t.z
r=this.e
if(b){r===$&&A.c()
s=A.aV(["serialCount",r,"state",c],s,s)
a.toString
q.hL(0,s,"flutter",a)}else{r===$&&A.c();++r
this.e=r
s=A.aV(["serialCount",r,"state",c],s,s)
a.toString
q.pc(0,s,"flutter",a)}}},
Bj(a){return this.pK(a,!1,null)},
zT(a,b){var s,r,q,p,o=this
if(!o.wa(A.kn(b.state))){s=o.d
s.toString
r=A.kn(b.state)
q=o.e
q===$&&A.c()
p=t.z
s.hL(0,A.aV(["serialCount",q+1,"state",r],p,p),"flutter",o.gi7())}o.e=o.gvx()
s=$.aR()
r=o.gi7()
q=A.kn(b.state)
q=q==null?null:J.aW(q,"state")
p=t.z
s.fW("flutter/navigation",B.av.fQ(new A.fP("pushRouteInformation",A.aV(["location",r,"state",q],p,p))),new A.a1A())},
hN(){var s=0,r=A.R(t.H),q,p=this,o,n,m
var $async$hN=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:p.n()
if(p.b||p.d==null){s=1
break}p.b=!0
o=p.gvx()
s=o>0?3:4
break
case 3:s=5
return A.G(p.d.jN(0,-o),$async$hN)
case 5:case 4:n=p.gbD()
n.toString
t.G.a(n)
m=p.d
m.toString
m.hL(0,J.aW(n,"state"),"flutter",p.gi7())
case 1:return A.P(q,r)}})
return A.Q($async$hN,r)},
gjK(){return this.d}}
A.a1A.prototype={
$1(a){},
$S:13}
A.yf.prototype={
QO(a){var s,r=this,q=r.d
if(q==null)return
r.a=q.kc(0,r.gzS(r))
s=r.gi7()
if(!A.akj(A.kn(self.window.history.state))){q.hL(0,A.aV(["origin",!0,"state",r.gbD()],t.N,t.z),"origin","")
r.wK(q,s,!1)}},
pK(a,b,c){var s=this.d
if(s!=null)this.wK(s,a,!0)},
Bj(a){return this.pK(a,!1,null)},
zT(a,b){var s,r=this,q="flutter/navigation"
if(A.ap1(A.kn(b.state))){s=r.d
s.toString
r.YF(s)
$.aR().fW(q,B.av.fQ(B.VO),new A.a6x())}else if(A.akj(A.kn(b.state))){s=r.f
s.toString
r.f=null
$.aR().fW(q,B.av.fQ(new A.fP("pushRoute",s)),new A.a6y())}else{r.f=r.gi7()
r.d.jN(0,-1)}},
wK(a,b,c){var s
if(b==null)b=this.gi7()
s=this.e
if(c)a.hL(0,s,"flutter",b)
else a.pc(0,s,"flutter",b)},
YF(a){return this.wK(a,null,!1)},
hN(){var s=0,r=A.R(t.H),q,p=this,o,n
var $async$hN=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:p.n()
if(p.b||p.d==null){s=1
break}p.b=!0
o=p.d
s=3
return A.G(o.jN(0,-1),$async$hN)
case 3:n=p.gbD()
n.toString
o.hL(0,J.aW(t.G.a(n),"state"),"flutter",p.gi7())
case 1:return A.P(q,r)}})
return A.Q($async$hN,r)},
gjK(){return this.d}}
A.a6x.prototype={
$1(a){},
$S:13}
A.a6y.prototype={
$1(a){},
$S:13}
A.a02.prototype={}
A.a9F.prototype={}
A.ZK.prototype={
kc(a,b){var s=A.ae(b)
A.bN(self.window,"popstate",s,null)
return new A.ZO(this,s)},
pA(a){var s=self.window.location.hash
if(s.length===0||s==="#")return"/"
return B.c.bB(s,1)},
mV(a){return A.kn(self.window.history.state)},
kP(a,b){var s,r
if(b.length===0){s=self.window.location.pathname
s.toString
r=self.window.location.search
r.toString
r=s+r
s=r}else s="#"+b
return s},
pc(a,b,c,d){var s=this.kP(0,d),r=self.window.history,q=[]
q.push(A.tp(b))
q.push(c)
q.push(s)
A.H(r,"pushState",q)},
hL(a,b,c,d){var s=this.kP(0,d),r=self.window.history,q=[]
if(t.G.b(b)||t.tY.b(b))q.push(A.tp(b))
else q.push(b)
q.push(c)
q.push(s)
A.H(r,"replaceState",q)},
jN(a,b){self.window.history.go(b)
return this.QX()},
QX(){var s=new A.a7($.a9,t.D),r=A.b8("unsubscribe")
r.b=this.kc(0,new A.ZM(r,new A.aQ(s,t.h)))
return s}}
A.ZO.prototype={
$0(){A.eb(self.window,"popstate",this.b,null)
return null},
$S:0}
A.ZM.prototype={
$1(a){this.a.ap().$0()
this.b.di(0)},
$S:1}
A.VY.prototype={
kc(a,b){return A.H(this.a,"addPopStateListener",[A.ae(b)])},
pA(a){return this.a.getPath()},
mV(a){return this.a.getState()},
pc(a,b,c,d){return A.H(this.a,"pushState",[b,c,d])},
hL(a,b,c,d){return A.H(this.a,"replaceState",[b,c,d])},
jN(a,b){return this.a.go(b)}}
A.a2N.prototype={}
A.UG.prototype={}
A.EQ.prototype={
r4(a){var s
this.b=a
this.c=!0
s=A.a([],t.gO)
return this.a=new A.a3F(new A.adZ(a,A.a([],t.l6),A.a([],t.AQ),A.dL()),s,new A.a4z())},
gJB(){return this.c},
rC(){var s,r=this
if(!r.c)r.r4(B.lN)
r.c=!1
s=r.a
s.b=s.a.a07()
s.f=!0
s=r.a
r.b===$&&A.c()
return new A.EP(s)}}
A.EP.prototype={
n(){this.a=!0}}
A.FD.prototype={
gEQ(){var s,r=this,q=r.c
if(q===$){s=A.ae(r.gWQ())
r.c!==$&&A.bm()
r.c=s
q=s}return q},
WR(a){var s,r,q,p=a.matches
p.toString
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.K)(s),++q)s[q].$1(p)}}
A.ER.prototype={
n(){var s,r,q=this,p="removeListener"
A.H(q.id,p,[q.k1])
q.k1=null
s=q.fx
if(s!=null)s.disconnect()
q.fx=null
s=$.aiF()
r=s.a
B.b.t(r,q.gGD())
if(r.length===0)A.H(s.b,p,[s.gEQ()])},
z4(){var s=this.f
if(s!=null)A.mm(s,this.r)},
a3f(a,b){var s=this.at
if(s!=null)A.mm(new A.Y7(b,s,a),this.ax)
else b.$1(!1)},
fW(a,b,c){var s,r,q,p,o,n,m,l,k,j="Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (arguments must be a two-element list, channel name and new capacity)",i="Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (arguments must be a two-element list, channel name and flag state)"
if(a==="dev.flutter/channel-buffers")try{s=$.Cc()
r=A.cc(b.buffer,b.byteOffset,b.byteLength)
if(r[0]===7){q=r[1]
if(q>=254)A.X(A.bH("Unrecognized message sent to dev.flutter/channel-buffers (method name too long)"))
p=2+q
o=B.Y.d2(0,B.E.bw(r,2,p))
switch(o){case"resize":if(r[p]!==12)A.X(A.bH(j))
n=p+1
if(r[n]<2)A.X(A.bH(j));++n
if(r[n]!==7)A.X(A.bH("Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (first argument must be a string)"));++n
m=r[n]
if(m>=254)A.X(A.bH("Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (channel name must be less than 254 characters long)"));++n
p=n+m
l=B.Y.d2(0,B.E.bw(r,n,p))
if(r[p]!==3)A.X(A.bH("Invalid arguments for 'resize' method sent to dev.flutter/channel-buffers (second argument must be an integer in the range 0 to 2147483647)"))
s.KS(0,l,b.getUint32(p+1,B.a4===$.cZ()))
break
case"overflow":if(r[p]!==12)A.X(A.bH(i))
n=p+1
if(r[n]<2)A.X(A.bH(i));++n
if(r[n]!==7)A.X(A.bH("Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (first argument must be a string)"));++n
m=r[n]
if(m>=254)A.X(A.bH("Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (channel name must be less than 254 characters long)"));++n
s=n+m
B.Y.d2(0,B.E.bw(r,n,s))
s=r[s]
if(s!==1&&s!==2)A.X(A.bH("Invalid arguments for 'overflow' method sent to dev.flutter/channel-buffers (second argument must be a boolean)"))
break
default:A.X(A.bH("Unrecognized method '"+o+"' sent to dev.flutter/channel-buffers"))}}else{k=A.a(B.Y.d2(0,r).split("\r"),t.s)
if(k.length===3&&J.f(k[0],"resize"))s.KS(0,k[1],A.fy(k[2],null))
else A.X(A.bH("Unrecognized message "+A.h(k)+" sent to dev.flutter/channel-buffers."))}}finally{c.$1(null)}else $.Cc().Kt(a,b,c)},
Yw(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this
switch(a){case"flutter/skia":s=B.av.fK(b)
switch(s.a){case"Skia.setResourceCacheMaxBytes":if($.aS()){r=A.e4(s.b)
i.gtF().toString
q=A.lU().a
q.w=r
q.G7()}i.eo(c,B.X.bL([A.a([!0],t.sj)]))
break}return
case"flutter/assets":p=B.Y.d2(0,A.cc(b.buffer,0,null))
$.afZ.co(0,p).dH(new A.Y0(i,c),new A.Y1(i,c),t.P)
return
case"flutter/platform":s=B.av.fK(b)
switch(s.a){case"SystemNavigator.pop":i.d.j(0,0).gr5().ot().au(new A.Y2(i,c),t.P)
return
case"HapticFeedback.vibrate":q=i.TC(A.bE(s.b))
o=self.window.navigator
if("vibrate" in o)o.vibrate(q)
i.eo(c,B.X.bL([!0]))
return
case"SystemChrome.setApplicationSwitcherDescription":n=t.a.a(s.b)
q=J.at(n)
m=A.bE(q.j(n,"label"))
if(m==null)m=""
l=A.te(q.j(n,"primaryColor"))
if(l==null)l=4278190080
self.document.title=m
k=self.document.querySelector("#flutterweb-theme")
if(k==null){k=A.b9(self.document,"meta")
k.id="flutterweb-theme"
k.name="theme-color"
self.document.head.append(k)}q=A.cs(new A.a0(l>>>0))
q.toString
k.content=q
i.eo(c,B.X.bL([!0]))
return
case"SystemChrome.setPreferredOrientations":n=t.j.a(s.b)
$.i0.Ms(n).au(new A.Y3(i,c),t.P)
return
case"SystemSound.play":i.eo(c,B.X.bL([!0]))
return
case"Clipboard.setData":q=self.window.navigator.clipboard!=null?new A.DD():new A.EY()
new A.DE(q,A.aou()).Mo(s,c)
return
case"Clipboard.getData":q=self.window.navigator.clipboard!=null?new A.DD():new A.EY()
new A.DE(q,A.aou()).LE(c)
return}break
case"flutter/service_worker":q=self.window
o=self.document.createEvent("Event")
j=A.a(["flutter-first-frame"],t.f)
j.push(!0)
j.push(!0)
A.H(o,"initEvent",j)
q.dispatchEvent(o)
return
case"flutter/textinput":q=$.amm()
q.go1(q).a2B(b,c)
return
case"flutter/mousecursor":s=B.ch.fK(b)
n=t.G.a(s.b)
switch(s.a){case"activateSystemCursor":$.ajZ.toString
q=A.bE(J.aW(n,"kind"))
o=$.i0.y
o.toString
q=B.VA.j(0,q)
A.cX(o,"cursor",q==null?"default":q)
break}return
case"flutter/web_test_e2e":i.eo(c,B.X.bL([A.aCk(B.av,b)]))
return
case"flutter/platform_views":q=i.cy
if(q==null)q=i.cy=new A.a2S($.aiT(),new A.Y4())
c.toString
q.a2i(b,c)
return
case"flutter/accessibility":$.aup().a28(B.bA,b)
i.eo(c,B.bA.bL(!0))
return
case"flutter/navigation":i.d.j(0,0).yN(b).au(new A.Y5(i,c),t.P)
i.rx="/"
return}q=$.as3
if(q!=null){q.$3(a,b,c)
return}i.eo(c,null)},
TC(a){switch(a){case"HapticFeedbackType.lightImpact":return 10
case"HapticFeedbackType.mediumImpact":return 20
case"HapticFeedbackType.heavyImpact":return 30
case"HapticFeedbackType.selectionClick":return 10
default:return 50}},
hQ(){var s=$.as9
if(s==null)throw A.b(A.bH("scheduleFrameCallback must be initialized first."))
s.$0()},
a4R(a,b){if($.aS()){A.arC()
A.arD()
t.Dk.a(a)
this.gtF().a17(a.a)}else{t.q9.a(a)
$.i0.H6(a.a)}A.aE1()},
R3(){var s,r,q,p=t.f,o=A.C5("MutationObserver",A.a([A.ae(new A.Y_(this))],p))
o.toString
t.e.a(o)
this.fx=o
s=self.document.documentElement
s.toString
r=A.a(["style"],t.s)
q=A.z(t.N,t.z)
q.l(0,"attributes",!0)
q.l(0,"attributeFilter",r)
A.H(o,"observe",A.a([s,A.tp(q)],p))},
GH(a){var s=this,r=s.a
if(r.d!==a){s.a=r.a0l(a)
A.mm(null,null)
A.mm(s.k2,s.k3)}},
Zo(a){var s=this.a,r=s.a
if((r.a&32)!==0!==a){this.a=s.HU(r.a0i(a))
A.mm(null,null)}},
R_(){var s,r=this,q=r.id
r.GH(q.matches?B.aL:B.ao)
s=A.ae(new A.XZ(r))
r.k1=s
A.H(q,"addListener",[s])},
gy9(){var s=this.rx
return s==null?this.rx=this.d.j(0,0).gr5().gi7():s},
gtF(){var s=this.ry
if(s===$)s=this.ry=$.aS()?new A.a3l(new A.VJ(),A.a([],t.bZ)):null
return s},
eo(a,b){A.ajB(B.v,t.H).au(new A.Y8(a,b),t.P)}}
A.Y7.prototype={
$0(){return this.a.$1(this.b.$1(this.c))},
$S:0}
A.Y6.prototype={
$1(a){this.a.pk(this.b,a)},
$S:13}
A.Y0.prototype={
$1(a){this.a.eo(this.b,a)},
$S:228}
A.Y1.prototype={
$1(a){$.bX().$1("Error while trying to load an asset: "+A.h(a))
this.a.eo(this.b,null)},
$S:2}
A.Y2.prototype={
$1(a){this.a.eo(this.b,B.X.bL([!0]))},
$S:14}
A.Y3.prototype={
$1(a){this.a.eo(this.b,B.X.bL([a]))},
$S:58}
A.Y4.prototype={
$1(a){$.i0.y.append(a)},
$S:1}
A.Y5.prototype={
$1(a){var s=this.b
if(a)this.a.eo(s,B.X.bL([!0]))
else if(s!=null)s.$1(null)},
$S:58}
A.Y_.prototype={
$2(a,b){var s,r,q,p,o,n,m
for(s=J.ao(a),r=t.e,q=this.a;s.q();){p=r.a(s.gB(s))
if(p.type==="attributes"&&p.attributeName==="style"){o=self.document.documentElement
o.toString
n=A.aEL(o)
m=(n==null?16:n)/16
o=q.a
if(o.e!==m){q.a=o.a0n(m)
A.mm(null,null)
A.mm(q.fy,q.go)}}}},
$S:250}
A.XZ.prototype={
$1(a){var s=a.matches
s.toString
s=s?B.aL:B.ao
this.a.GH(s)},
$S:1}
A.Y8.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(this.b)},
$S:14}
A.ahU.prototype={
$0(){this.a.$2(this.b,this.c)},
$S:0}
A.ahV.prototype={
$0(){var s=this
s.a.$3(s.b,s.c,s.d)},
$S:0}
A.a2Q.prototype={
a4D(a,b,c){var s=this.a
if(s.V(0,a))return!1
s.l(0,a,b)
this.c.C(0,a)
return!0},
a4S(a,b,c){this.d.l(0,b,a)
return this.b.bm(0,b,new A.a2R(this,"flt-pv-slot-"+b,a,b,c))},
Yf(a){var s,r,q,p="setAttribute"
if(a==null)return
s=$.c8()
if(s!==B.M){a.remove()
return}r="tombstone-"+A.h(a.getAttribute("slot"))
q=A.b9(self.document,"slot")
A.r(q.style,"display","none")
A.H(q,p,["name",r])
$.i0.z.hj(0,q)
A.H(a,p,["slot",r])
a.remove()
q.remove()}}
A.a2R.prototype={
$0(){var s,r,q,p,o=this,n=A.b9(self.document,"flt-platform-view")
A.H(n,"setAttribute",["slot",o.b])
s=o.c
r=o.a.a.j(0,s)
r.toString
q=A.b8("content")
p=o.d
if(t.hX.b(r))q.b=r.$2$params(p,o.e)
else q.b=t.vk.a(r).$1(p)
r=q.ap()
if(r.style.getPropertyValue("height").length===0){$.bX().$1("Height of Platform View type: ["+s+"] may not be set. Defaulting to `height: 100%`.\nSet `style.height` to any appropriate value to stop this message.")
A.r(r.style,"height","100%")}if(r.style.getPropertyValue("width").length===0){$.bX().$1("Width of Platform View type: ["+s+"] may not be set. Defaulting to `width: 100%`.\nSet `style.width` to any appropriate value to stop this message.")
A.r(r.style,"width","100%")}n.append(q.ap())
return n},
$S:36}
A.a2S.prototype={
Sw(a,b){var s=t.G.a(a.b),r=J.at(s),q=A.e4(r.j(s,"id")),p=A.bh(r.j(s,"viewType"))
r=this.b
if(!r.a.V(0,p)){b.$1(B.ch.ks("unregistered_view_type","If you are the author of the PlatformView, make sure `registerViewFactory` is invoked.","A HtmlElementView widget is trying to create a platform view with an unregistered type: <"+p+">."))
return}if(r.b.V(0,q)){b.$1(B.ch.ks("recreating_view","view id: "+q,"trying to create an already created view"))
return}this.c.$1(r.a4S(p,q,s))
b.$1(B.ch.oo(null))},
a2i(a,b){var s,r=B.ch.fK(a)
switch(r.a){case"create":this.Sw(r,b)
return
case"dispose":s=this.b
s.Yf(s.b.t(0,A.e4(r.b)))
b.$1(B.ch.oo(null))
return}b.$1(null)}}
A.a5j.prototype={
a5O(){A.bN(self.document,"touchstart",A.ae(new A.a5k()),null)}}
A.a5k.prototype={
$1(a){},
$S:1}
A.Jm.prototype={
Sn(){var s,r=this
if("PointerEvent" in self.window){s=new A.ae0(A.z(t.S,t.DW),A.a([],t.xU),r.a,r.gws(),r.c)
s.mZ()
return s}if("TouchEvent" in self.window){s=new A.afq(A.aU(t.S),A.a([],t.xU),r.a,r.gws(),r.c)
s.mZ()
return s}if("MouseEvent" in self.window){s=new A.adK(new A.og(),A.a([],t.xU),r.a,r.gws(),r.c)
s.mZ()
return s}throw A.b(A.V("This browser does not support pointer, touch, or mouse events."))},
WU(a){var s=A.a(a.slice(0),A.ai(a)),r=$.aR()
A.T8(r.Q,r.as,new A.x4(s))}}
A.a34.prototype={
i(a){return"pointers:"+("PointerEvent" in self.window)+", touch:"+("TouchEvent" in self.window)+", mouse:"+("MouseEvent" in self.window)}}
A.A9.prototype={}
A.ad9.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.ad8.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.aam.prototype={
xj(a,b,c,d,e){this.a.push(A.aAI(e,c,new A.aan(d),b))},
qV(a,b,c,d){return this.xj(a,b,c,d,!0)}}
A.aan.prototype={
$1(a){var s=$.dU
if((s==null?$.dU=A.kP():s).KC(a))this.a.$1(a)},
$S:67}
A.RT.prototype={
Cp(a){this.a.push(A.aAJ("wheel",new A.afH(a),this.b))},
E7(a){var s,r,q,p,o,n,m,l,k,j=a.deltaX,i=a.deltaY
switch(a.deltaMode){case 1:s=$.aqi
if(s==null){r=A.b9(self.document,"div")
s=r.style
A.r(s,"font-size","initial")
A.r(s,"display","none")
self.document.body.append(r)
s=A.ajq(self.window,r).getPropertyValue("font-size")
if(B.c.v(s,"px"))q=A.aoD(A.Th(s,"px",""))
else q=null
r.remove()
s=$.aqi=q==null?16:q/4}j*=s
i*=s
break
case 2:s=$.c4()
j*=s.gis().a
i*=s.gis().b
break
case 0:default:break}p=A.a([],t.I)
s=a.timeStamp
s.toString
s=A.rl(s)
o=a.clientX
n=$.c4()
m=n.w
if(m==null)m=A.b_()
l=a.clientY
n=n.w
if(n==null)n=A.b_()
k=a.buttons
k.toString
this.d.a0d(p,k,B.cN,-1,B.c8,o*m,l*n,1,1,0,j,i,B.Wl,s)
this.c.$1(p)
if(a.getModifierState("Control")){s=$.dS()
if(s!==B.bp)s=s!==B.ay
else s=!1}else s=!1
if(s)return
a.preventDefault()}}
A.afH.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.iY.prototype={
i(a){return A.A(this).i(0)+"(change: "+this.a.i(0)+", buttons: "+this.b+")"}}
A.og.prototype={
AX(a,b){var s
if(this.a!==0)return this.u5(b)
s=(b===0&&a>-1?A.aDv(a):b)&1073741823
this.a=s
return new A.iY(B.BC,s)},
u5(a){var s=a&1073741823,r=this.a
if(r===0&&s!==0)return new A.iY(B.cN,r)
this.a=s
return new A.iY(s===0?B.cN:B.dS,s)},
pD(a){if(this.a!==0&&(a&1073741823)===0){this.a=0
return new A.iY(B.lM,0)}return null},
AY(a){if((a&1073741823)===0){this.a=0
return new A.iY(B.cN,0)}return null},
AZ(a){var s
if(this.a===0)return null
s=this.a=(a==null?0:a)&1073741823
if(s===0)return new A.iY(B.lM,s)
else return new A.iY(B.dS,s)}}
A.ae0.prototype={
vG(a){return this.e.bm(0,a,new A.ae2())},
Fl(a){if(a.pointerType==="touch")this.e.t(0,a.pointerId)},
Cm(a,b,c,d){this.xj(0,a,b,new A.ae1(c),d)},
pZ(a,b,c){return this.Cm(a,b,c,!0)},
mZ(){var s=this,r=s.b
s.pZ(r,"pointerdown",new A.ae3(s))
s.pZ(self.window,"pointermove",new A.ae4(s))
s.Cm(r,"pointerleave",new A.ae5(s),!1)
s.pZ(self.window,"pointerup",new A.ae6(s))
s.pZ(r,"pointercancel",new A.ae7(s))
s.Cp(new A.ae8(s))},
ea(a,b,c){var s,r,q,p,o,n,m,l,k=c.pointerType
k.toString
s=this.F5(k)
k=c.tiltX
k.toString
r=c.tiltY
r.toString
k=Math.abs(k)>Math.abs(r)?c.tiltX:c.tiltY
k.toString
r=c.timeStamp
r.toString
q=A.rl(r)
r=c.pressure
p=this.ly(c)
o=c.clientX
n=$.c4()
m=n.w
if(m==null)m=A.b_()
l=c.clientY
n=n.w
if(n==null)n=A.b_()
if(r==null)r=0
this.d.a0c(a,b.b,b.a,p,s,o*m,l*n,r,1,0,B.cO,k/180*3.141592653589793,q)},
T9(a){var s,r
if("getCoalescedEvents" in a){s=t.e
r=J.cE(a.getCoalescedEvents(),s).hl(0,s)
if(!r.gO(r))return r}return A.a([a],t.J)},
F5(a){switch(a){case"mouse":return B.c8
case"pen":return B.BD
case"touch":return B.dT
default:return B.BE}},
ly(a){var s=a.pointerType
s.toString
if(this.F5(s)===B.c8)s=-1
else{s=a.pointerId
s.toString}return s}}
A.ae2.prototype={
$0(){return new A.og()},
$S:260}
A.ae1.prototype={
$1(a){this.a.$1(a)},
$S:1}
A.ae3.prototype={
$1(a){var s,r,q=this.a,p=q.ly(a),o=A.a([],t.I),n=q.vG(p),m=a.buttons
m.toString
s=n.pD(m)
if(s!=null)q.ea(o,s,a)
m=a.button
r=a.buttons
r.toString
q.ea(o,n.AX(m,r),a)
q.c.$1(o)},
$S:5}
A.ae4.prototype={
$1(a){var s,r,q,p,o=this.a,n=o.vG(o.ly(a)),m=A.a([],t.I)
for(s=J.ao(o.T9(a));s.q();){r=s.gB(s)
q=r.buttons
q.toString
p=n.pD(q)
if(p!=null)o.ea(m,p,r)
q=r.buttons
q.toString
o.ea(m,n.u5(q),r)}o.c.$1(m)},
$S:5}
A.ae5.prototype={
$1(a){var s,r=this.a,q=r.vG(r.ly(a)),p=A.a([],t.I),o=a.buttons
o.toString
s=q.AY(o)
if(s!=null){r.ea(p,s,a)
r.c.$1(p)}},
$S:5}
A.ae6.prototype={
$1(a){var s,r,q=this.a,p=q.ly(a),o=q.e
if(o.V(0,p)){s=A.a([],t.I)
o=o.j(0,p)
o.toString
r=o.AZ(a.buttons)
q.Fl(a)
if(r!=null){q.ea(s,r,a)
q.c.$1(s)}}},
$S:5}
A.ae7.prototype={
$1(a){var s,r=this.a,q=r.ly(a),p=r.e
if(p.V(0,q)){s=A.a([],t.I)
p=p.j(0,q)
p.toString
p.a=0
r.Fl(a)
r.ea(s,new A.iY(B.lK,0),a)
r.c.$1(s)}},
$S:5}
A.ae8.prototype={
$1(a){this.a.E7(a)},
$S:1}
A.afq.prototype={
q_(a,b,c){this.qV(0,a,b,new A.afr(c))},
mZ(){var s=this,r=s.b
s.q_(r,"touchstart",new A.afs(s))
s.q_(r,"touchmove",new A.aft(s))
s.q_(r,"touchend",new A.afu(s))
s.q_(r,"touchcancel",new A.afv(s))},
q4(a,b,c,d,e){var s,r,q,p,o,n=e.identifier
n.toString
s=e.clientX
r=$.c4()
q=r.w
if(q==null)q=A.b_()
p=e.clientY
r=r.w
if(r==null)r=A.b_()
o=c?1:0
this.d.HR(b,o,a,n,B.dT,s*q,p*r,1,1,0,B.cO,d)}}
A.afr.prototype={
$1(a){this.a.$1(a)},
$S:1}
A.afs.prototype={
$1(a){var s,r,q,p,o,n,m,l=a.timeStamp
l.toString
s=A.rl(l)
r=A.a([],t.I)
for(l=A.kO(a).hl(0,t.e),q=A.m(l),l=new A.b1(l,l.gm(l),q.h("b1<E.E>")),p=this.a,o=p.e,q=q.h("E.E");l.q();){n=l.d
if(n==null)n=q.a(n)
m=n.identifier
m.toString
if(!o.v(0,m)){m=n.identifier
m.toString
o.C(0,m)
p.q4(B.BC,r,!0,s,n)}}p.c.$1(r)},
$S:5}
A.aft.prototype={
$1(a){var s,r,q,p,o,n,m,l
a.preventDefault()
s=a.timeStamp
s.toString
r=A.rl(s)
q=A.a([],t.I)
for(s=A.kO(a).hl(0,t.e),p=A.m(s),s=new A.b1(s,s.gm(s),p.h("b1<E.E>")),o=this.a,n=o.e,p=p.h("E.E");s.q();){m=s.d
if(m==null)m=p.a(m)
l=m.identifier
l.toString
if(n.v(0,l))o.q4(B.dS,q,!0,r,m)}o.c.$1(q)},
$S:5}
A.afu.prototype={
$1(a){var s,r,q,p,o,n,m,l
a.preventDefault()
s=a.timeStamp
s.toString
r=A.rl(s)
q=A.a([],t.I)
for(s=A.kO(a).hl(0,t.e),p=A.m(s),s=new A.b1(s,s.gm(s),p.h("b1<E.E>")),o=this.a,n=o.e,p=p.h("E.E");s.q();){m=s.d
if(m==null)m=p.a(m)
l=m.identifier
l.toString
if(n.v(0,l)){l=m.identifier
l.toString
n.t(0,l)
o.q4(B.lM,q,!1,r,m)}}o.c.$1(q)},
$S:5}
A.afv.prototype={
$1(a){var s,r,q,p,o,n,m,l=a.timeStamp
l.toString
s=A.rl(l)
r=A.a([],t.I)
for(l=A.kO(a).hl(0,t.e),q=A.m(l),l=new A.b1(l,l.gm(l),q.h("b1<E.E>")),p=this.a,o=p.e,q=q.h("E.E");l.q();){n=l.d
if(n==null)n=q.a(n)
m=n.identifier
m.toString
if(o.v(0,m)){m=n.identifier
m.toString
o.t(0,m)
p.q4(B.lK,r,!1,s,n)}}p.c.$1(r)},
$S:5}
A.adK.prototype={
Cj(a,b,c,d){this.xj(0,a,b,new A.adL(c),d)},
uV(a,b,c){return this.Cj(a,b,c,!0)},
mZ(){var s=this,r=s.b
s.uV(r,"mousedown",new A.adM(s))
s.uV(self.window,"mousemove",new A.adN(s))
s.Cj(r,"mouseleave",new A.adO(s),!1)
s.uV(self.window,"mouseup",new A.adP(s))
s.Cp(new A.adQ(s))},
ea(a,b,c){var s,r,q,p,o=c.timeStamp
o.toString
o=A.rl(o)
s=c.clientX
r=$.c4()
q=r.w
if(q==null)q=A.b_()
p=c.clientY
r=r.w
if(r==null)r=A.b_()
this.d.HR(a,b.b,b.a,-1,B.c8,s*q,p*r,1,1,0,B.cO,o)}}
A.adL.prototype={
$1(a){this.a.$1(a)},
$S:1}
A.adM.prototype={
$1(a){var s,r,q=A.a([],t.I),p=this.a,o=p.e,n=a.buttons
n.toString
s=o.pD(n)
if(s!=null)p.ea(q,s,a)
n=a.button
r=a.buttons
r.toString
p.ea(q,o.AX(n,r),a)
p.c.$1(q)},
$S:5}
A.adN.prototype={
$1(a){var s,r=A.a([],t.I),q=this.a,p=q.e,o=a.buttons
o.toString
s=p.pD(o)
if(s!=null)q.ea(r,s,a)
o=a.buttons
o.toString
q.ea(r,p.u5(o),a)
q.c.$1(r)},
$S:5}
A.adO.prototype={
$1(a){var s,r=A.a([],t.I),q=this.a,p=a.buttons
p.toString
s=q.e.AY(p)
if(s!=null){q.ea(r,s,a)
q.c.$1(r)}},
$S:5}
A.adP.prototype={
$1(a){var s=A.a([],t.I),r=this.a,q=r.e.AZ(a.buttons)
if(q!=null){r.ea(s,q,a)
r.c.$1(s)}},
$S:5}
A.adQ.prototype={
$1(a){this.a.E7(a)},
$S:1}
A.rW.prototype={}
A.a2V.prototype={
q9(a,b,c){return this.a.bm(0,a,new A.a2W(b,c))},
k0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q=this.a.j(0,c)
q.toString
s=q.b
r=q.c
q.b=i
q.c=j
q=q.a
if(q==null)q=0
return A.aoA(a,b,c,d,e,f,!1,h,i-s,j-r,i,j,k,q,l,m,n,o,p,a0,a1,a2,a3,a4,a5,!1,a6,a7)},
wj(a,b,c){var s=this.a.j(0,a)
s.toString
return s.b!==b||s.c!==c},
j0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3,a4,a5,a6){var s,r,q=this.a.j(0,c)
q.toString
s=q.b
r=q.c
q.b=i
q.c=j
q=q.a
if(q==null)q=0
return A.aoA(a,b,c,d,e,f,!1,h,i-s,j-r,i,j,k,q,l,m,n,o,p,a0,a1,a2,a3,B.cO,a4,!0,a5,a6)},
xS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var s,r,q,p=this
if(m===B.cO)switch(c.a){case 1:p.q9(d,f,g)
a.push(p.k0(b,c,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
break
case 3:s=p.a.V(0,d)
p.q9(d,f,g)
if(!s)a.push(p.j0(b,B.lL,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,0,n,o))
a.push(p.k0(b,c,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
p.b=b
break
case 4:s=p.a.V(0,d)
p.q9(d,f,g).a=$.apQ=$.apQ+1
if(!s)a.push(p.j0(b,B.lL,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,0,n,o))
if(p.wj(d,f,g))a.push(p.j0(0,B.cN,d,0,0,e,!1,0,f,g,0,0,i,j,0,0,0,0,k,l,0,n,o))
a.push(p.k0(b,c,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
p.b=b
break
case 5:a.push(p.k0(b,c,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
p.b=b
break
case 6:case 0:r=p.a
q=r.j(0,d)
q.toString
if(c===B.lK){f=q.b
g=q.c}if(p.wj(d,f,g))a.push(p.j0(p.b,B.dS,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,0,n,o))
a.push(p.k0(b,c,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
if(e===B.dT){a.push(p.j0(0,B.Wi,d,0,0,e,!1,0,f,g,0,0,i,j,0,0,0,0,k,l,0,n,o))
r.t(0,d)}break
case 2:r=p.a
q=r.j(0,d)
q.toString
a.push(p.k0(b,c,d,0,0,e,!1,0,q.b,q.c,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
r.t(0,d)
break
case 7:case 8:case 9:break}else switch(m.a){case 1:s=p.a.V(0,d)
p.q9(d,f,g)
if(!s)a.push(p.j0(b,B.lL,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,0,n,o))
if(p.wj(d,f,g))if(b!==0)a.push(p.j0(b,B.dS,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,0,n,o))
else a.push(p.j0(b,B.cN,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,0,n,o))
a.push(p.k0(b,c,d,0,0,e,!1,0,f,g,0,h,i,j,0,0,0,0,k,l,m,0,n,o))
break
case 0:break
case 2:break}},
a0d(a,b,c,d,e,f,g,h,i,j,k,l,m,n){return this.xS(a,b,c,d,e,f,g,h,i,j,k,l,m,0,n)},
HR(a,b,c,d,e,f,g,h,i,j,k,l){return this.xS(a,b,c,d,e,f,g,h,i,j,0,0,k,0,l)},
a0c(a,b,c,d,e,f,g,h,i,j,k,l,m){return this.xS(a,b,c,d,e,f,g,h,i,j,0,0,k,l,m)}}
A.a2W.prototype={
$0(){return new A.rW(this.a,this.b)},
$S:262}
A.ak8.prototype={}
A.a01.prototype={}
A.a_i.prototype={}
A.a_j.prototype={}
A.W0.prototype={}
A.W_.prototype={}
A.a9K.prototype={}
A.a_x.prototype={}
A.a_w.prototype={}
A.TE.prototype={
Qv(){$.j2.push(new A.TF(this))},
gvC(){var s,r=this.c
if(r==null){s=A.b9(self.document,"label")
A.H(s,"setAttribute",["id","accessibility-element"])
r=s.style
A.r(r,"position","fixed")
A.r(r,"overflow","hidden")
A.r(r,"transform","translate(-99999px, -99999px)")
A.r(r,"width","1px")
A.r(r,"height","1px")
this.c=s
r=s}return r},
a28(a,b){var s=this,r=t.G,q=A.bE(J.aW(r.a(J.aW(r.a(a.eA(b)),"data")),"message"))
if(q!=null&&q.length!==0){A.H(s.gvC(),"setAttribute",["aria-live","polite"])
s.gvC().textContent=q
r=self.document.body
r.toString
r.append(s.gvC())
s.a=A.cw(B.HN,new A.TG(s))}}}
A.TF.prototype={
$0(){var s=this.a.a
if(s!=null)s.aA(0)},
$S:0}
A.TG.prototype={
$0(){this.a.c.remove()},
$S:0}
A.rm.prototype={
i(a){return"_CheckableKind."+this.b}}
A.p2.prototype={
iA(a){var s,r,q="setAttribute",p=this.b
if((p.k3&1)!==0){switch(this.c.a){case 0:p.eO("checkbox",!0)
break
case 1:p.eO("radio",!0)
break
case 2:p.eO("switch",!0)
break}if(p.Iw()===B.i9){s=p.k2
A.H(s,q,["aria-disabled","true"])
A.H(s,q,["disabled","true"])}else this.Fh()
r=p.a
r=(r&2)!==0||(r&131072)!==0?"true":"false"
A.H(p.k2,q,["aria-checked",r])}},
n(){var s=this
switch(s.c.a){case 0:s.b.eO("checkbox",!1)
break
case 1:s.b.eO("radio",!1)
break
case 2:s.b.eO("switch",!1)
break}s.Fh()},
Fh(){var s=this.b.k2
s.removeAttribute("aria-disabled")
s.removeAttribute("disabled")}}
A.pG.prototype={
iA(a){var s,r,q=this,p=q.b
if(p.gJE()){s=p.dy
s=s!=null&&!B.dM.gO(s)}else s=!1
if(s){if(q.c==null){q.c=A.b9(self.document,"flt-semantics-img")
s=p.dy
if(s!=null&&!B.dM.gO(s)){s=q.c.style
A.r(s,"position","absolute")
A.r(s,"top","0")
A.r(s,"left","0")
r=p.y
A.r(s,"width",A.h(r.c-r.a)+"px")
r=p.y
A.r(s,"height",A.h(r.d-r.b)+"px")}A.r(q.c.style,"font-size","6px")
s=q.c
s.toString
p.k2.append(s)}p=q.c
p.toString
A.H(p,"setAttribute",["role","img"])
q.FP(q.c)}else if(p.gJE()){p.eO("img",!0)
q.FP(p.k2)
q.vd()}else{q.vd()
q.CV()}},
FP(a){var s=this.b.z
if(s!=null&&s.length!==0){a.toString
s.toString
A.H(a,"setAttribute",["aria-label",s])}},
vd(){var s=this.c
if(s!=null){s.remove()
this.c=null}},
CV(){var s=this.b
s.eO("img",!1)
s.k2.removeAttribute("aria-label")},
n(){this.vd()
this.CV()}}
A.pJ.prototype={
QC(a){var s=this,r=s.c
a.k2.append(r)
r.type="range"
A.H(r,"setAttribute",["role","slider"])
A.bN(r,"change",A.ae(new A.a_C(s,a)),null)
r=new A.a_D(s)
s.e=r
a.k1.Q.push(r)},
iA(a){var s=this
switch(s.b.k1.y.a){case 1:s.SU()
s.Zp()
break
case 0:s.Dp()
break}},
SU(){var s=this.c,r=s.disabled
r.toString
if(!r)return
s.disabled=!1},
Zp(){var s,r,q,p,o,n,m,l=this,k="setAttribute"
if(!l.f){s=l.b.k3
r=(s&4096)!==0||(s&8192)!==0||(s&16384)!==0}else r=!0
if(!r)return
l.f=!1
q=""+l.d
s=l.c
s.value=q
A.H(s,k,["aria-valuenow",q])
p=l.b
o=p.ax
o.toString
A.H(s,k,["aria-valuetext",o])
n=p.ch.length!==0?""+(l.d+1):q
s.max=n
A.H(s,k,["aria-valuemax",n])
m=p.cx.length!==0?""+(l.d-1):q
s.min=m
A.H(s,k,["aria-valuemin",m])},
Dp(){var s=this.c,r=s.disabled
r.toString
if(r)return
s.disabled=!0},
n(){var s=this
B.b.t(s.b.k1.Q,s.e)
s.e=null
s.Dp()
s.c.remove()}}
A.a_C.prototype={
$1(a){var s,r=this.a,q=r.c,p=q.disabled
p.toString
if(p)return
r.f=!0
q=q.value
q.toString
s=A.fy(q,null)
q=r.d
if(s>q){r.d=q+1
r=$.aR()
A.mn(r.p3,r.p4,this.b.id,B.C_,null)}else if(s<q){r.d=q-1
r=$.aR()
A.mn(r.p3,r.p4,this.b.id,B.BY,null)}},
$S:1}
A.a_D.prototype={
$1(a){this.a.iA(0)},
$S:72}
A.pX.prototype={
iA(a){var s,r,q=this,p=q.b,o=p.ax,n=o!=null&&o.length!==0,m=p.z,l=m!=null&&m.length!==0,k=p.fy,j=k!=null&&k.length!==0
if(n){s=p.b
s.toString
r=!((s&64)!==0||(s&128)!==0)}else r=!1
s=!l
if(s&&!r&&!j){q.CU()
return}if(j){k=""+A.h(k)
if(!s||r)k+="\n"}else k=""
if(l){m=k+A.h(m)
if(r)m+=" "}else m=k
o=r?m+A.h(o):m
m=p.k2
o=o.charCodeAt(0)==0?o:o
A.H(m,"setAttribute",["aria-label",o])
if((p.a&512)!==0)p.eO("heading",!0)
if(q.c==null){q.c=A.b9(self.document,"flt-semantics-value")
k=p.dy
if(k!=null&&!B.dM.gO(k)){k=q.c.style
A.r(k,"position","absolute")
A.r(k,"top","0")
A.r(k,"left","0")
s=p.y
A.r(k,"width",A.h(s.c-s.a)+"px")
p=p.y
A.r(k,"height",A.h(p.d-p.b)+"px")}p=q.c.style
k=$.e5
A.r(p,"font-size",(k==null?$.e5=new A.hr(self.window.flutterConfiguration):k).gI8()?"12px":"6px")
p=q.c
p.toString
m.append(p)}p=q.c
p.toString
p.textContent=o},
CU(){var s=this.c
if(s!=null){s.remove()
this.c=null}s=this.b
s.k2.removeAttribute("aria-label")
s.eO("heading",!1)},
n(){this.CU()}}
A.q0.prototype={
iA(a){var s=this.b,r=s.z
r=r!=null&&r.length!==0
s=s.k2
if(r)A.H(s,"setAttribute",["aria-live","polite"])
else s.removeAttribute("aria-live")},
n(){this.b.k2.removeAttribute("aria-live")}}
A.qC.prototype={
XL(){var s,r,q,p,o=this,n=null
if(o.gDw()!==o.e){s=o.b
if(!s.k1.Mz("scroll"))return
r=o.gDw()
q=o.e
o.EL()
s.KE()
p=s.id
if(r>q){s=s.b
s.toString
if((s&32)!==0||(s&16)!==0){s=$.aR()
A.mn(s.p3,s.p4,p,B.dY,n)}else{s=$.aR()
A.mn(s.p3,s.p4,p,B.e_,n)}}else{s=s.b
s.toString
if((s&32)!==0||(s&16)!==0){s=$.aR()
A.mn(s.p3,s.p4,p,B.dZ,n)}else{s=$.aR()
A.mn(s.p3,s.p4,p,B.e0,n)}}}},
iA(a){var s,r,q,p=this
if(p.d==null){s=p.b
r=s.k2
A.r(r.style,"touch-action","none")
p.DK()
s=s.k1
s.d.push(new A.a5U(p))
q=new A.a5V(p)
p.c=q
s.Q.push(q)
q=A.ae(new A.a5W(p))
p.d=q
A.bN(r,"scroll",q,null)}},
gDw(){var s=this.b,r=s.b
r.toString
r=(r&32)!==0||(r&16)!==0
s=s.k2
if(r)return J.TC(s.scrollTop)
else return J.TC(s.scrollLeft)},
EL(){var s=this.b,r=s.k2,q=s.b
q.toString
if((q&32)!==0||(q&16)!==0){r.scrollTop=10
s.p3=this.e=J.TC(r.scrollTop)
s.p4=0}else{r.scrollLeft=10
q=J.TC(r.scrollLeft)
this.e=q
s.p3=0
s.p4=q}},
DK(){var s="overflow-y",r="overflow-x",q=this.b,p=q.k2
switch(q.k1.y.a){case 1:q=q.b
q.toString
if((q&32)!==0||(q&16)!==0)A.r(p.style,s,"scroll")
else A.r(p.style,r,"scroll")
break
case 0:q=q.b
q.toString
if((q&32)!==0||(q&16)!==0)A.r(p.style,s,"hidden")
else A.r(p.style,r,"hidden")
break}},
n(){var s=this,r=s.b,q=r.k2,p=q.style
p.removeProperty("overflowY")
p.removeProperty("overflowX")
p.removeProperty("touch-action")
p=s.d
if(p!=null)A.eb(q,"scroll",p,null)
B.b.t(r.k1.Q,s.c)
s.c=null}}
A.a5U.prototype={
$0(){this.a.EL()},
$S:0}
A.a5V.prototype={
$1(a){this.a.DK()},
$S:72}
A.a5W.prototype={
$1(a){this.a.XL()},
$S:1}
A.pq.prototype={
i(a){var s=A.a([],t.s),r=this.a
if((r&1)!==0)s.push("accessibleNavigation")
if((r&2)!==0)s.push("invertColors")
if((r&4)!==0)s.push("disableAnimations")
if((r&8)!==0)s.push("boldText")
if((r&16)!==0)s.push("reduceMotion")
if((r&32)!==0)s.push("highContrast")
if((r&64)!==0)s.push("onOffSwitchLabels")
return"AccessibilityFeatures"+A.h(s)},
k(a,b){if(b==null)return!1
if(J.Z(b)!==A.A(this))return!1
return b instanceof A.pq&&b.a===this.a},
gu(a){return B.f.gu(this.a)},
HW(a,b){var s=(a==null?(this.a&1)!==0:a)?1:0,r=this.a
s=(r&2)!==0?s|2:s&4294967293
s=(r&4)!==0?s|4:s&4294967291
s=(r&8)!==0?s|8:s&4294967287
s=(r&16)!==0?s|16:s&4294967279
s=(b==null?(r&32)!==0:b)?s|32:s&4294967263
return new A.pq((r&64)!==0?s|64:s&4294967231)},
a0i(a){return this.HW(null,a)},
a0h(a){return this.HW(a,null)}}
A.XQ.prototype={
sa2K(a){var s=this.a
this.a=a?s|32:s&4294967263},
aK(){return new A.pq(this.a)}}
A.a6o.prototype={}
A.KG.prototype={}
A.fW.prototype={
i(a){return"Role."+this.b}}
A.ah_.prototype={
$1(a){return A.axg(a)},
$S:112}
A.ah0.prototype={
$1(a){return new A.qC(a)},
$S:118}
A.ah1.prototype={
$1(a){return new A.pX(a)},
$S:119}
A.ah2.prototype={
$1(a){return new A.r3(a)},
$S:120}
A.ah3.prototype={
$1(a){var s,r,q="setAttribute",p=new A.r7(a),o=(a.a&524288)!==0?A.b9(self.document,"textarea"):A.b9(self.document,"input")
p.c=o
o.spellcheck=!1
A.H(o,q,["autocorrect","off"])
A.H(o,q,["autocomplete","off"])
A.H(o,q,["data-semantics-role","text-field"])
s=o.style
A.r(s,"position","absolute")
A.r(s,"top","0")
A.r(s,"left","0")
r=a.y
A.r(s,"width",A.h(r.c-r.a)+"px")
r=a.y
A.r(s,"height",A.h(r.d-r.b)+"px")
a.k2.append(o)
o=$.c8()
switch(o.a){case 0:case 5:case 3:case 4:case 2:case 6:p.Eh()
break
case 1:p.VC()
break}return p},
$S:121}
A.ah4.prototype={
$1(a){return new A.p2(A.aBx(a),a)},
$S:125}
A.ah5.prototype={
$1(a){return new A.pG(a)},
$S:126}
A.ah6.prototype={
$1(a){return new A.q0(a)},
$S:127}
A.fo.prototype={}
A.cM.prototype={
AR(){var s,r=this
if(r.k4==null){s=A.b9(self.document,"flt-semantics-container")
r.k4=s
s=s.style
A.r(s,"position","absolute")
A.r(s,"pointer-events","none")
s=r.k4
s.toString
r.k2.append(s)}return r.k4},
gJE(){var s,r=this.a
if((r&16384)!==0){s=this.b
s.toString
r=(s&1)===0&&(r&8)===0}else r=!1
return r},
Iw(){var s=this.a
if((s&64)!==0)if((s&128)!==0)return B.I8
else return B.i9
else return B.I7},
a5A(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.fr
if(a3==null||a3.length===0){s=a2.p1
if(s==null||s.length===0){a2.p1=null
return}r=s.length
for(s=a2.k1,q=s.a,p=0;p<r;++p){o=q.j(0,a2.p1[p].id)
s.c.push(o)}a2.k4.remove()
a2.p1=a2.k4=null
return}s=a2.dy
s.toString
n=a3.length
m=a2.AR()
l=A.a([],t.b3)
for(q=a2.k1,k=q.a,p=0;p<n;++p){j=k.j(0,s[p])
j.toString
l.push(j)}if(n>1)for(p=0;p<n;++p){s=k.j(0,a3[p]).k2.style
s.setProperty("z-index",""+(n-p),"")}i=a2.p1
if(i==null||i.length===0){for(s=l.length,h=0;h<l.length;l.length===s||(0,A.K)(l),++h){g=l[h]
m.append(g.k2)
g.ok=a2
q.b.l(0,g.id,a2)}a2.p1=l
return}f=i.length
s=t.t
e=A.a([],s)
d=Math.min(f,n)
c=0
while(!0){if(!(c<d&&i[c]===l[c]))break
e.push(c);++c}if(f===l.length&&c===n)return
for(;c<n;){for(b=0;b<f;++b)if(i[b]===l[c]){e.push(b)
break}++c}a=A.arR(e)
a0=A.a([],s)
for(s=a.length,p=0;p<s;++p)a0.push(i[e[a[p]]].id)
for(p=0;p<f;++p)if(!B.b.v(e,p)){o=k.j(0,i[p].id)
q.c.push(o)}for(p=n-1,a1=null;p>=0;--p){g=l[p]
s=g.id
if(!B.b.v(a0,s)){k=g.k2
if(a1==null)m.append(k)
else m.insertBefore(k,a1)
g.ok=a2
q.b.l(0,s,a2)}a1=g.k2}a2.p1=l},
eO(a,b){var s
if(b)A.H(this.k2,"setAttribute",["role",a])
else{s=this.k2
if(s.getAttribute("role")===a)s.removeAttribute("role")}},
j2(a,b){var s=this.p2,r=s.j(0,a)
if(b){if(r==null){r=$.au4().j(0,a).$1(this)
s.l(0,a,r)}r.iA(0)}else if(r!=null){r.n()
s.t(0,a)}},
KE(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.k2,g=h.style,f=i.y
A.r(g,"width",A.h(f.c-f.a)+"px")
f=i.y
A.r(g,"height",A.h(f.d-f.b)+"px")
g=i.dy
s=g!=null&&!B.dM.gO(g)?i.AR():null
g=i.y
r=g.b===0&&g.a===0
q=i.dx
g=q==null
p=g||A.ait(q)===B.CL
if(r&&p&&i.p3===0&&i.p4===0){A.a6h(h)
if(s!=null)A.a6h(s)
return}o=A.b8("effectiveTransform")
if(!r)if(g){g=i.y
n=g.a
m=g.b
g=A.dL()
g.lb(n,m,0)
o.b=g
l=n===0&&m===0}else{g=new A.bI(new Float32Array(16))
g.bf(new A.bI(q))
f=i.y
g.Av(0,f.a,f.b,0)
o.b=g
l=J.auO(o.ap())}else if(!p){o.b=new A.bI(q)
l=!1}else l=!0
if(!l){h=h.style
A.r(h,"transform-origin","0 0 0")
A.r(h,"transform",A.hb(o.ap().a))}else A.a6h(h)
if(s!=null)if(!r||i.p3!==0||i.p4!==0){h=i.y
g=h.a
f=i.p4
h=h.b
k=i.p3
j=s.style
A.r(j,"top",A.h(-h+k)+"px")
A.r(j,"left",A.h(-g+f)+"px")}else A.a6h(s)},
i(a){var s=this.bo(0)
return s}}
A.Cl.prototype={
i(a){return"AccessibilityMode."+this.b}}
A.kW.prototype={
i(a){return"GestureMode."+this.b}}
A.Y9.prototype={
QA(){$.j2.push(new A.Ya(this))},
Tf(){var s,r,q,p,o,n,m,l=this
for(s=l.c,r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.K)(s),++p){o=s[p]
n=l.b
m=o.id
if(n.j(0,m)==null){q.t(0,m)
o.ok=null
o.k2.remove()}}l.c=A.a([],t.aZ)
l.b=A.z(t.lo,t.n_)
s=l.d
r=s.length
if(r!==0){for(p=0;p<s.length;s.length===r||(0,A.K)(s),++p)s[p].$0()
l.d=A.a([],t.bZ)}},
sua(a){var s,r,q
if(this.w)return
s=$.aR()
r=s.a
s.a=r.HU(r.a.a0h(!0))
this.w=!0
s=$.aR()
r=this.w
q=s.a
if(r!==q.c){s.a=q.a0m(r)
r=s.p1
if(r!=null)A.mm(r,s.p2)}},
TB(){var s=this,r=s.z
if(r==null){r=s.z=new A.tv(s.f)
r.d=new A.Yb(s)}return r},
KC(a){var s,r=this
if(B.b.v(B.P0,a.type)){s=r.TB()
s.toString
s.sy6(J.hd(r.f.$0(),B.en))
if(r.y!==B.oj){r.y=B.oj
r.EM()}}return r.r.a.MB(a)},
EM(){var s,r
for(s=this.Q,r=0;r<s.length;++r)s[r].$1(this.y)},
Mz(a){if(B.b.v(B.Pb,a))return this.y===B.cs
return!1},
a5D(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(!f.w){f.r.a.n()
f.sua(!0)}for(s=a.a,r=s.length,q=f.a,p=t.e,o=t.zB,n=t.Dw,m=t.f,l=0;k=s.length,l<k;s.length===r||(0,A.K)(s),++l){j=s[l]
k=j.a
i=q.j(0,k)
if(i==null){h=self.document
g=A.a(["flt-semantics"],m)
h=p.a(h.createElement.apply(h,g))
i=new A.cM(k,f,h,A.z(o,n))
g=h.style
g.setProperty("position","absolute","")
h.setAttribute.apply(h,["id","flt-semantic-node-"+k])
if(k===0){g=$.e5
g=(g==null?$.e5=new A.hr(self.window.flutterConfiguration):g).a
g=g==null?null:g.debugShowSemanticsNodes
g=g!==!0}else g=!1
if(g){g=h.style
g.setProperty("filter","opacity(0%)","")
g=h.style
g.setProperty("color","rgba(0,0,0,0)","")}g=$.e5
g=(g==null?$.e5=new A.hr(self.window.flutterConfiguration):g).a
g=g==null?null:g.debugShowSemanticsNodes
if(g===!0){h=h.style
h.setProperty("outline","1px solid green","")}q.l(0,k,i)}k=j.b
if(i.a!==k){i.a=k
i.k3=(i.k3|1)>>>0}k=j.cx
if(i.ax!==k){i.ax=k
i.k3=(i.k3|4096)>>>0}k=j.cy
if(i.ay!==k){i.ay=k
i.k3=(i.k3|4096)>>>0}k=j.ax
if(i.z!==k){i.z=k
i.k3=(i.k3|1024)>>>0}k=j.ay
if(i.Q!==k){i.Q=k
i.k3=(i.k3|1024)>>>0}k=j.at
if(!J.f(i.y,k)){i.y=k
i.k3=(i.k3|512)>>>0}k=j.go
if(i.dx!==k){i.dx=k
i.k3=(i.k3|65536)>>>0}k=j.z
if(i.r!==k){i.r=k
i.k3=(i.k3|64)>>>0}k=i.b
h=j.c
if(k!==h){i.b=h
i.k3=(i.k3|2)>>>0
k=h}h=j.f
if(i.c!==h){i.c=h
i.k3=(i.k3|4)>>>0}h=j.r
if(i.d!==h){i.d=h
i.k3=(i.k3|8)>>>0}h=j.x
if(i.e!==h){i.e=h
i.k3=(i.k3|16)>>>0}h=j.y
if(i.f!==h){i.f=h
i.k3=(i.k3|32)>>>0}h=j.Q
if(i.w!==h){i.w=h
i.k3=(i.k3|128)>>>0}h=j.as
if(i.x!==h){i.x=h
i.k3=(i.k3|256)>>>0}h=j.ch
if(i.as!==h){i.as=h
i.k3=(i.k3|2048)>>>0}h=j.CW
if(i.at!==h){i.at=h
i.k3=(i.k3|2048)>>>0}h=j.db
if(i.ch!==h){i.ch=h
i.k3=(i.k3|8192)>>>0}h=j.dx
if(i.CW!==h){i.CW=h
i.k3=(i.k3|8192)>>>0}h=j.dy
if(i.cx!==h){i.cx=h
i.k3=(i.k3|16384)>>>0}h=j.fr
if(i.cy!==h){i.cy=h
i.k3=(i.k3|16384)>>>0}h=i.fy
g=j.fx
if(h!==g){i.fy=g
i.k3=(i.k3|4194304)>>>0
h=g}g=j.fy
if(i.db!=g){i.db=g
i.k3=(i.k3|32768)>>>0}g=j.k1
if(i.fr!==g){i.fr=g
i.k3=(i.k3|1048576)>>>0}g=j.id
if(i.dy!==g){i.dy=g
i.k3=(i.k3|524288)>>>0}g=j.k2
if(i.fx!==g){i.fx=g
i.k3=(i.k3|2097152)>>>0}g=j.w
if(i.go!==g){i.go=g
i.k3=(i.k3|8388608)>>>0}g=i.z
if(!(g!=null&&g.length!==0)){g=i.ax
if(!(g!=null&&g.length!==0))h=h!=null&&h.length!==0
else h=!0}else h=!0
if(h){h=i.a
if((h&16)===0){if((h&16384)!==0){k.toString
k=(k&1)===0&&(h&8)===0}else k=!1
k=!k}else k=!1}else k=!1
i.j2(B.BL,k)
i.j2(B.BN,(i.a&16)!==0)
k=i.b
k.toString
i.j2(B.BM,((k&1)!==0||(i.a&8)!==0)&&(i.a&16)===0)
k=i.b
k.toString
i.j2(B.BJ,(k&64)!==0||(k&128)!==0)
k=i.b
k.toString
i.j2(B.BK,(k&32)!==0||(k&16)!==0||(k&4)!==0||(k&8)!==0)
k=i.a
i.j2(B.BO,(k&1)!==0||(k&65536)!==0)
k=i.a
if((k&16384)!==0){h=i.b
h.toString
k=(h&1)===0&&(k&8)===0}else k=!1
i.j2(B.BP,k)
k=i.a
i.j2(B.BQ,(k&32768)!==0&&(k&8192)===0)
k=i.k3
if((k&512)!==0||(k&65536)!==0||(k&64)!==0)i.KE()
k=i.dy
k=!(k!=null&&!B.dM.gO(k))&&i.go===-1
h=i.k2
if(k){k=h.style
k.setProperty("pointer-events","all","")}else{k=h.style
k.setProperty("pointer-events","none","")}}for(l=0;l<s.length;s.length===k||(0,A.K)(s),++l){i=q.j(0,s[l].a)
i.a5A()
i.k3=0}if(f.e==null){s=q.j(0,0).k2
f.e=s
$.i0.r.append(s)}f.Tf()}}
A.Ya.prototype={
$0(){var s=this.a.e
if(s!=null)s.remove()},
$S:0}
A.Yc.prototype={
$0(){return new A.cA(Date.now(),!1)},
$S:110}
A.Yb.prototype={
$0(){var s=this.a
if(s.y===B.cs)return
s.y=B.cs
s.EM()},
$S:0}
A.pp.prototype={
i(a){return"EnabledState."+this.b}}
A.a6c.prototype={}
A.a68.prototype={
MB(a){if(!this.gJF())return!0
else return this.tR(a)}}
A.W7.prototype={
gJF(){return this.a!=null},
tR(a){var s
if(this.a==null)return!0
s=$.dU
if((s==null?$.dU=A.kP():s).w)return!0
if(!J.e8(B.Xy.a,a.type))return!0
if(!J.f(a.target,this.a))return!0
s=$.dU;(s==null?$.dU=A.kP():s).sua(!0)
this.n()
return!1},
Kp(){var s,r="setAttribute",q=this.a=A.b9(self.document,"flt-semantics-placeholder")
A.bN(q,"click",A.ae(new A.W8(this)),!0)
A.H(q,r,["role","button"])
A.H(q,r,["aria-live","polite"])
A.H(q,r,["tabindex","0"])
A.H(q,r,["aria-label","Enable accessibility"])
s=q.style
A.r(s,"position","absolute")
A.r(s,"left","-1px")
A.r(s,"top","-1px")
A.r(s,"width","1px")
A.r(s,"height","1px")
return q},
n(){var s=this.a
if(s!=null)s.remove()
this.a=null}}
A.W8.prototype={
$1(a){this.a.tR(a)},
$S:1}
A.a1i.prototype={
gJF(){return this.b!=null},
tR(a){var s,r,q,p,o,n,m,l,k,j=this
if(j.b==null)return!0
if(j.d){s=$.c8()
if(s!==B.M||a.type==="touchend"||a.type==="pointerup"||a.type==="click")j.n()
return!0}s=$.dU
if((s==null?$.dU=A.kP():s).w)return!0
if(++j.c>=20)return j.d=!0
if(!J.e8(B.Xw.a,a.type))return!0
if(j.a!=null)return!1
r=A.b8("activationPoint")
switch(a.type){case"click":r.sca(new A.uM(a.offsetX,a.offsetY))
break
case"touchstart":case"touchend":s=A.kO(a)
s=s.gH(s)
r.sca(new A.uM(s.clientX,s.clientY))
break
case"pointerdown":case"pointerup":r.sca(new A.uM(a.clientX,a.clientY))
break
default:return!0}s=j.b.getBoundingClientRect()
q=s.left
p=s.right
o=s.left
n=s.top
m=s.bottom
s=s.top
l=r.ap().a-(q+(p-o)/2)
k=r.ap().b-(n+(m-s)/2)
if(l*l+k*k<1&&!0){j.d=!0
j.a=A.cw(B.cp,new A.a1k(j))
return!1}return!0},
Kp(){var s,r="setAttribute",q=this.b=A.b9(self.document,"flt-semantics-placeholder")
A.bN(q,"click",A.ae(new A.a1j(this)),!0)
A.H(q,r,["role","button"])
A.H(q,r,["aria-label","Enable accessibility"])
s=q.style
A.r(s,"position","absolute")
A.r(s,"left","0")
A.r(s,"top","0")
A.r(s,"right","0")
A.r(s,"bottom","0")
return q},
n(){var s=this.b
if(s!=null)s.remove()
this.a=this.b=null}}
A.a1k.prototype={
$0(){this.a.n()
var s=$.dU;(s==null?$.dU=A.kP():s).sua(!0)},
$S:0}
A.a1j.prototype={
$1(a){this.a.tR(a)},
$S:1}
A.r3.prototype={
iA(a){var s,r=this,q=r.b,p=q.k2
p.tabIndex=0
q.eO("button",(q.a&8)!==0)
if(q.Iw()===B.i9&&(q.a&8)!==0){A.H(p,"setAttribute",["aria-disabled","true"])
r.wQ()}else{p.removeAttribute("aria-disabled")
s=q.b
s.toString
if((s&1)!==0&&(q.a&16)===0){if(r.c==null){s=A.ae(new A.a8S(r))
r.c=s
A.bN(p,"click",s,null)}}else r.wQ()}if((q.k3&1)!==0&&(q.a&32)!==0)p.focus()},
wQ(){var s=this.c
if(s==null)return
A.eb(this.b.k2,"click",s,null)
this.c=null},
n(){this.wQ()
this.b.eO("button",!1)}}
A.a8S.prototype={
$1(a){var s,r=this.a.b
if(r.k1.y!==B.cs)return
s=$.aR()
A.mn(s.p3,s.p4,r.id,B.dX,null)},
$S:1}
A.a6n.prototype={
yu(a,b,c,d){this.CW=b
this.x=d
this.y=c},
ZR(a){var s,r,q=this,p=q.ch
if(p===a)return
else if(p!=null)q.hp(0)
q.ch=a
p=a.c
p===$&&A.c()
q.c=p
q.G8()
p=q.CW
p.toString
s=q.x
s.toString
r=q.y
r.toString
q.Ny(0,p,r,s)},
hp(a){var s,r,q,p,o,n=this
if(!n.b)return
n.b=!1
n.w=n.r=null
for(s=n.z,r=t.f,q=0;q<s.length;++q){p=s[q]
o=p.b
p=A.a([p.a,p.c],r)
o.removeEventListener.apply(o,p)}B.b.L(s)
n.e=null
s=n.c
if(s!=null)s.blur()
n.cx=n.ch=n.c=null},
nO(){var s,r,q=this,p=q.d
p===$&&A.c()
p=p.w
if(p!=null)B.b.I(q.z,p.nQ())
p=q.z
s=q.c
s.toString
r=q.goF()
p.push(A.cb(s,"input",A.ae(r)))
s=q.c
s.toString
p.push(A.cb(s,"keydown",A.ae(q.goT())))
p.push(A.cb(self.document,"selectionchange",A.ae(r)))
q.A6()},
ms(a,b,c){this.b=!0
this.d=a
this.xw(a)},
fZ(){this.d===$&&A.c()
this.c.focus()},
t1(){},
AD(a){},
AE(a){this.cx=a
this.G8()},
G8(){var s=this.cx
if(s==null||this.c==null)return
s.toString
this.Nz(s)}}
A.r7.prototype={
Eh(){var s=this.c
s===$&&A.c()
A.bN(s,"focus",A.ae(new A.a8W(this)),null)},
VC(){var s={},r=$.dS()
if(r===B.bp){this.Eh()
return}s.a=s.b=null
r=this.c
r===$&&A.c()
A.bN(r,"touchstart",A.ae(new A.a8X(s)),!0)
A.bN(r,"touchend",A.ae(new A.a8Y(s,this)),!0)},
iA(a){var s,r,q=this,p=q.b,o=p.z,n=o!=null&&o.length!==0,m=q.c
if(n){m===$&&A.c()
o.toString
A.H(m,"setAttribute",["aria-label",o])}else{m===$&&A.c()
m.removeAttribute("aria-label")}o=q.c
o===$&&A.c()
n=o.style
m=p.y
A.r(n,"width",A.h(m.c-m.a)+"px")
m=p.y
A.r(n,"height",A.h(m.d-m.b)+"px")
m=p.ax
s=A.EH(p.c,null,null,p.d,m)
if((p.a&32)!==0){if(!q.d){q.d=!0
$.y8.ZR(q)
r=!0}else r=!1
if(!J.f(self.document.activeElement,o))r=!0
$.y8.ud(s)}else{if(q.d){n=$.y8
if(n.ch===q)n.hp(0)
n=self.window.HTMLInputElement
n.toString
if(o instanceof n)o.value=s.a
else{n=self.window.HTMLTextAreaElement
n.toString
if(o instanceof n)o.value=s.a
else A.X(A.V("Unsupported DOM element type"))}if(q.d&&J.f(self.document.activeElement,o))o.blur()
q.d=!1}r=!1}if(r)p.k1.d.push(new A.a8Z(q))},
n(){var s=this.c
s===$&&A.c()
s.remove()
s=$.y8
if(s.ch===this)s.hp(0)}}
A.a8W.prototype={
$1(a){var s,r=this.a.b
if(r.k1.y!==B.cs)return
s=$.aR()
A.mn(s.p3,s.p4,r.id,B.dX,null)},
$S:1}
A.a8X.prototype={
$1(a){var s=A.kO(a),r=this.a
r.b=s.gM(s).clientX
s=A.kO(a)
r.a=s.gM(s).clientY},
$S:1}
A.a8Y.prototype={
$1(a){var s,r,q=this.a
if(q.b!=null){s=A.kO(a)
s=s.gM(s).clientX
r=A.kO(a)
r=r.gM(r).clientY
if(s*s+r*r<324){s=$.aR()
A.mn(s.p3,s.p4,this.b.b.id,B.dX,null)}}q.a=q.b=null},
$S:1}
A.a8Z.prototype={
$0(){var s=self.document.activeElement,r=this.a.c
r===$&&A.c()
if(!J.f(s,r))r.focus()},
$S:0}
A.j1.prototype={
gm(a){return this.b},
j(a,b){if(b>=this.b)throw A.b(A.c_(b,this,null,null,null))
return this.a[b]},
l(a,b,c){if(b>=this.b)throw A.b(A.c_(b,this,null,null,null))
this.a[b]=c},
sm(a,b){var s,r,q,p=this,o=p.b
if(b<o)for(s=p.a,r=b;r<o;++r)s[r]=0
else{o=p.a.length
if(b>o){if(o===0)q=new Uint8Array(b)
else q=p.vs(b)
B.E.c6(q,0,p.b,p.a)
p.a=q}}p.b=b},
d1(a,b){var s=this,r=s.b
if(r===s.a.length)s.Cd(r)
s.a[s.b++]=b},
C(a,b){var s=this,r=s.b
if(r===s.a.length)s.Cd(r)
s.a[s.b++]=b},
qT(a,b,c,d){A.dv(c,"start")
if(d!=null&&c>d)throw A.b(A.bC(d,c,null,"end",null))
this.QW(b,c,d)},
I(a,b){return this.qT(a,b,0,null)},
QW(a,b,c){var s,r,q,p=this
if(A.m(p).h("x<j1.E>").b(a))c=c==null?a.length:c
if(c!=null){p.VL(p.b,a,b,c)
return}for(s=J.ao(a),r=0;s.q();){q=s.gB(s)
if(r>=b)p.d1(0,q);++r}if(r<b)throw A.b(A.a6("Too few elements"))},
VL(a,b,c,d){var s,r,q,p=this,o=J.at(b)
if(c>o.gm(b)||d>o.gm(b))throw A.b(A.a6("Too few elements"))
s=d-c
r=p.b+s
p.T_(r)
o=p.a
q=a+s
B.E.aY(o,q,p.b+s,o,a)
B.E.aY(p.a,a,q,b,c)
p.b=r},
T_(a){var s,r=this
if(a<=r.a.length)return
s=r.vs(a)
B.E.c6(s,0,r.b,r.a)
r.a=s},
vs(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
Cd(a){var s=this.vs(null)
B.E.c6(s,0,a,this.a)
this.a=s},
aY(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.bC(c,0,s,null,null))
s=this.a
if(A.m(this).h("j1<j1.E>").b(d))B.E.aY(s,b,c,d.a,e)
else B.E.aY(s,b,c,d,e)},
c6(a,b,c,d){return this.aY(a,b,c,d,0)}}
A.O1.prototype={}
A.LG.prototype={}
A.fP.prototype={
i(a){return A.A(this).i(0)+"("+this.a+", "+A.h(this.b)+")"}}
A.a_R.prototype={
bL(a){return A.fi(B.cj.cT(B.b3.on(a)).buffer,0,null)},
eA(a){if(a==null)return a
return B.b3.d2(0,B.cY.cT(A.cc(a.buffer,0,null)))}}
A.a_T.prototype={
fQ(a){return B.X.bL(A.aV(["method",a.a,"args",a.b],t.N,t.z))},
fK(a){var s,r,q,p=null,o=B.X.eA(a)
if(!t.G.b(o))throw A.b(A.bO("Expected method call Map, got "+A.h(o),p,p))
s=J.at(o)
r=s.j(o,"method")
q=s.j(o,"args")
if(typeof r=="string")return new A.fP(r,q)
throw A.b(A.bO("Invalid method call: "+A.h(o),p,p))}}
A.a8j.prototype={
bL(a){var s=A.akz()
this.cZ(0,s,!0)
return s.ja()},
eA(a){var s,r
if(a==null)return null
s=new A.JE(a)
r=this.fn(0,s)
if(s.b<a.byteLength)throw A.b(B.aE)
return r},
cZ(a,b,c){var s,r,q,p,o=this
if(c==null)b.b.d1(0,0)
else if(A.j3(c)){s=c?1:2
b.b.d1(0,s)}else if(typeof c=="number"){s=b.b
s.d1(0,6)
b.iL(8)
b.c.setFloat64(0,c,B.a4===$.cZ())
s.I(0,b.d)}else if(A.kk(c)){s=-2147483648<=c&&c<=2147483647
r=b.b
q=b.c
if(s){r.d1(0,3)
q.setInt32(0,c,B.a4===$.cZ())
r.qT(0,b.d,0,4)}else{r.d1(0,4)
B.fQ.Bf(q,0,c,$.cZ())}}else if(typeof c=="string"){s=b.b
s.d1(0,7)
p=B.cj.cT(c)
o.e2(b,p.length)
s.I(0,p)}else if(t.r.b(c)){s=b.b
s.d1(0,8)
o.e2(b,c.length)
s.I(0,c)}else if(t.fO.b(c)){s=b.b
s.d1(0,9)
r=c.length
o.e2(b,r)
b.iL(4)
s.I(0,A.cc(c.buffer,c.byteOffset,4*r))}else if(t.cE.b(c)){s=b.b
s.d1(0,11)
r=c.length
o.e2(b,r)
b.iL(8)
s.I(0,A.cc(c.buffer,c.byteOffset,8*r))}else if(t.j.b(c)){b.b.d1(0,12)
s=J.at(c)
o.e2(b,s.gm(c))
for(s=s.gP(c);s.q();)o.cZ(0,b,s.gB(s))}else if(t.G.b(c)){b.b.d1(0,13)
s=J.at(c)
o.e2(b,s.gm(c))
s.R(c,new A.a8m(o,b))}else throw A.b(A.hg(c,null,null))},
fn(a,b){if(b.b>=b.a.byteLength)throw A.b(B.aE)
return this.it(b.l1(0),b)},
it(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:s=null
break
case 1:s=!0
break
case 2:s=!1
break
case 3:r=b.a.getInt32(b.b,B.a4===$.cZ())
b.b+=4
s=r
break
case 4:s=b.u1(0)
break
case 5:q=k.dn(b)
s=A.fy(B.cY.cT(b.l2(q)),16)
break
case 6:b.iL(8)
r=b.a.getFloat64(b.b,B.a4===$.cZ())
b.b+=8
s=r
break
case 7:q=k.dn(b)
s=B.cY.cT(b.l2(q))
break
case 8:s=b.l2(k.dn(b))
break
case 9:q=k.dn(b)
b.iL(4)
p=b.a
o=A.aoj(p.buffer,p.byteOffset+b.b,q)
b.b=b.b+4*q
s=o
break
case 10:s=b.u2(k.dn(b))
break
case 11:q=k.dn(b)
b.iL(8)
p=b.a
o=A.aoh(p.buffer,p.byteOffset+b.b,q)
b.b=b.b+8*q
s=o
break
case 12:q=k.dn(b)
s=[]
for(p=b.a,n=0;n<q;++n){m=b.b
if(m>=p.byteLength)A.X(B.aE)
b.b=m+1
s.push(k.it(p.getUint8(m),b))}break
case 13:q=k.dn(b)
p=t.z
s=A.z(p,p)
for(p=b.a,n=0;n<q;++n){m=b.b
if(m>=p.byteLength)A.X(B.aE)
b.b=m+1
m=k.it(p.getUint8(m),b)
l=b.b
if(l>=p.byteLength)A.X(B.aE)
b.b=l+1
s.l(0,m,k.it(p.getUint8(l),b))}break
default:throw A.b(B.aE)}return s},
e2(a,b){var s,r,q
if(b<254)a.b.d1(0,b)
else{s=a.b
r=a.c
q=a.d
if(b<=65535){s.d1(0,254)
r.setUint16(0,b,B.a4===$.cZ())
s.qT(0,q,0,2)}else{s.d1(0,255)
r.setUint32(0,b,B.a4===$.cZ())
s.qT(0,q,0,4)}}},
dn(a){var s=a.l1(0)
switch(s){case 254:s=a.a.getUint16(a.b,B.a4===$.cZ())
a.b+=2
return s
case 255:s=a.a.getUint32(a.b,B.a4===$.cZ())
a.b+=4
return s
default:return s}}}
A.a8m.prototype={
$2(a,b){var s=this.a,r=this.b
s.cZ(0,r,a)
s.cZ(0,r,b)},
$S:32}
A.a8n.prototype={
fK(a){var s,r,q
a.toString
s=new A.JE(a)
r=B.bA.fn(0,s)
q=B.bA.fn(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.fP(r,q)
else throw A.b(B.oh)},
oo(a){var s=A.akz()
s.b.d1(0,0)
B.bA.cZ(0,s,a)
return s.ja()},
ks(a,b,c){var s=A.akz()
s.b.d1(0,1)
B.bA.cZ(0,s,a)
B.bA.cZ(0,s,c)
B.bA.cZ(0,s,b)
return s.ja()}}
A.a9T.prototype={
iL(a){var s,r,q=this.b,p=B.f.d_(q.b,a)
if(p!==0)for(s=a-p,r=0;r<s;++r)q.d1(0,0)},
ja(){var s,r
this.a=!0
s=this.b
r=s.a
return A.fi(r.buffer,0,s.b*r.BYTES_PER_ELEMENT)}}
A.JE.prototype={
l1(a){return this.a.getUint8(this.b++)},
u1(a){B.fQ.AP(this.a,this.b,$.cZ())},
l2(a){var s=this.a,r=A.cc(s.buffer,s.byteOffset+this.b,a)
this.b+=a
return r},
u2(a){var s
this.iL(8)
s=this.a
B.Ac.Hh(s.buffer,s.byteOffset+this.b,a)},
iL(a){var s=this.b,r=B.f.d_(s,a)
if(r!==0)this.b=s+(a-r)}}
A.a8H.prototype={}
A.Kl.prototype={}
A.Kn.prototype={}
A.a5h.prototype={}
A.a55.prototype={}
A.a56.prototype={}
A.Km.prototype={}
A.a5g.prototype={}
A.a5c.prototype={}
A.a51.prototype={}
A.a5d.prototype={}
A.a50.prototype={}
A.a58.prototype={}
A.a5a.prototype={}
A.a57.prototype={}
A.a5b.prototype={}
A.a59.prototype={}
A.a54.prototype={}
A.a52.prototype={}
A.a53.prototype={}
A.a5f.prototype={}
A.a5e.prototype={}
A.CY.prototype={
gao(a){return this.ged().c},
gaW(a){return this.ged().d},
gfj(){var s=this.ged().e
s=s==null?null:s.a.f
return s==null?0:s},
gJZ(){return this.ged().f},
gzo(){return this.ged().r},
gj4(a){return this.ged().w},
gJc(a){return this.ged().x},
gIg(){this.ged()
return!1},
ged(){var s,r,q=this,p=q.w
if(p===$){s=A.mT(A.C4(null,null),"2d",null)
s.toString
t.e.a(s)
r=A.a([],t.dB)
q.w!==$&&A.bm()
p=q.w=new A.yI(q,s,r,B.I)}return p},
ik(a){var s=this
a=new A.ll(Math.floor(a.a))
if(a.k(0,s.r))return
A.b8("stopwatch")
s.ged().a4i(a)
s.f=!0
s.r=a
s.y=null},
a5m(){var s,r=this.y
if(r==null){s=this.y=this.Sp()
return s}return r.cloneNode(!0)},
Sp(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=A.b9(self.document,"flt-paragraph"),b5=b4.style
A.r(b5,"position","absolute")
A.r(b5,"white-space","pre")
b5=t.e
s=t.f
r=t.dB
q=b3
p=0
while(!0){o=b2.w
if(o===$){n=self.window.document
m=A.a(["canvas"],s)
l=b5.a(n.createElement.apply(n,m))
n=l.getContext.apply(l,["2d"])
n.toString
b5.a(n)
m=A.a([],r)
b2.w!==$&&A.bm()
k=b2.w=new A.yI(b2,n,m,B.I)
j=k
o=j}else j=o
if(!(p<o.z.length))break
if(j===$){n=self.window.document
m=A.a(["canvas"],s)
l=b5.a(n.createElement.apply(n,m))
n=l.getContext.apply(l,["2d"])
n.toString
b5.a(n)
m=A.a([],r)
b2.w!==$&&A.bm()
o=b2.w=new A.yI(b2,n,m,B.I)}else o=j
i=o.z[p]
h=i.r
g=new A.bS("")
for(n=""+"underline ",f=0;f<h.length;f=e){e=f+1
d=h[f]
if(d instanceof A.eZ){m=self.document
c=A.a(["flt-span"],s)
q=b5.a(m.createElement.apply(m,c))
m=d.w.a
c=q.style
b=m.cy
a=b==null
a0=a?b3:b.gaf(b)
if(a0==null)a0=m.a
if((a?b3:b.gcc(b))===B.U){c.setProperty("color","transparent","")
a1=a?b3:b.geQ()
if(a1!=null&&a1>0)a2=a1
else{b=$.c4().w
if(b==null){b=self.window.devicePixelRatio
if(b===0)b=1}a2=1/b}b=A.cs(a0)
c.setProperty("-webkit-text-stroke",A.h(a2)+"px "+A.h(b),"")}else if(a0!=null){b=A.cs(a0)
b.toString
c.setProperty("color",b,"")}b=m.cx
a3=b==null?b3:b.gaf(b)
if(a3!=null){b=A.cs(a3)
b.toString
c.setProperty("background-color",b,"")}a4=m.at
if(a4!=null){b=B.d.dE(a4)
c.setProperty("font-size",""+b+"px","")}b=m.f
if(b!=null){b=A.arA(b)
b.toString
c.setProperty("font-weight",b,"")}b=A.ahj(m.y)
b.toString
c.setProperty("font-family",b,"")
b=m.ax
if(b!=null)c.setProperty("letter-spacing",A.h(b)+"px","")
b=m.ay
if(b!=null)c.setProperty("word-spacing",A.h(b)+"px","")
b=m.b
a=b!=null
a5=a&&!0
a6=m.db
if(a6!=null){a7=A.aCO(a6)
c.setProperty("text-shadow",a7,"")}if(a5)if(a){a=m.d
b=b.a
a7=(b|1)===b?n:""
if((b|2)===b)a7+="overline "
b=(b|4)===b?a7+"line-through ":a7
if(a!=null)b+=A.h(A.aBO(a))
a8=b.length===0?b3:b.charCodeAt(0)==0?b:b
if(a8!=null){b=$.c8()
if(b===B.M){b=q.style
b.setProperty("-webkit-text-decoration",a8,"")}else c.setProperty("text-decoration",a8,"")
a9=m.c
if(a9!=null){m=A.cs(a9)
m.toString
c.setProperty("text-decoration-color",m,"")}}}m=d.a.a
c=d.b
b=d.z0(i,m,c.a,!0)
a=b.a
a7=b.b
b0=q.style
b0.setProperty("position","absolute","")
b0.setProperty("top",A.h(a7)+"px","")
b0.setProperty("left",A.h(a)+"px","")
b0.setProperty("width",A.h(b.c-a)+"px","")
b0.setProperty("line-height",A.h(b.d-a7)+"px","")
m=B.c.U(d.r.a.c,m,c.b)
q.append(self.document.createTextNode(m))
b4.append(q)
g.a+=m}else{if(!(d instanceof A.x0))throw A.b(A.c6("Unknown box type: "+A.A(d).i(0)))
q=b3}}b1=i.b
if(b1!=null){n=q==null?b4:q
n.append(self.document.createTextNode(b1))}++p}return b4},
px(){return this.ged().px()},
mS(a,b,c,d){return this.ged().Lz(a,b,c,d)},
tZ(a,b,c){return this.mS(a,b,c,B.ed)},
iE(a){return this.ged().iE(a)},
AV(a){var s=this.c,r=a.a
return new A.fr(A.apB(B.a3y,s,r+1),A.apB(B.a3x,s,r))}}
A.F7.prototype={$iaot:1}
A.qX.prototype={
a5_(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a
if(a==null){s=b.gvj(b)
r=b.gvy()
q=b.gvz()
p=b.gvA()
o=b.gvB()
n=b.gvU(b)
m=b.gvS(b)
l=b.gwT()
k=b.gvO(b)
j=b.gvP()
i=b.gvQ()
h=b.gvT()
g=b.gvR(b)
f=b.gwg(b)
e=b.gxg(b)
d=b.guT(b)
c=b.gwi()
e=b.a=A.anx(b.gv1(b),s,r,q,p,o,k,j,i,g,m,h,n,b.gqa(),d,f,c,b.gwL(),l,e)
return e}return a}}
A.D_.prototype={
gvj(a){var s=this.c.a
if(s==null)if(this.gqa()==null){s=this.b
s=s.gvj(s)}else s=null
return s},
gvy(){var s=this.c.b
return s==null?this.b.gvy():s},
gvz(){var s=this.c.c
return s==null?this.b.gvz():s},
gvA(){var s=this.c.d
return s==null?this.b.gvA():s},
gvB(){var s=this.c.e
return s==null?this.b.gvB():s},
gvU(a){var s=this.c.f
if(s==null){s=this.b
s=s.gvU(s)}return s},
gvS(a){var s=this.b
s=s.gvS(s)
return s},
gwT(){var s=this.c.w
return s==null?this.b.gwT():s},
gvP(){var s=this.c.z
return s==null?this.b.gvP():s},
gvQ(){var s=this.b.gvQ()
return s},
gvT(){var s=this.b.gvT()
return s},
gvR(a){var s=this.c.at
if(s==null){s=this.b
s=s.gvR(s)}return s},
gwg(a){var s=this.c.ax
if(s==null){s=this.b
s=s.gwg(s)}return s},
gxg(a){var s=this.c.ay
if(s==null){s=this.b
s=s.gxg(s)}return s},
guT(a){var s=this.c.ch
if(s==null){s=this.b
s=s.guT(s)}return s},
gwi(){var s=this.c.CW
return s==null?this.b.gwi():s},
gv1(a){var s=this.c.cx
if(s==null){s=this.b
s=s.gv1(s)}return s},
gqa(){var s=this.c.cy
return s==null?this.b.gqa():s},
gwL(){var s=this.c.db
return s==null?this.b.gwL():s},
gvO(a){var s=this.c
if(s.x)s=s.y
else{s=this.b
s=s.gvO(s)}return s}}
A.Kd.prototype={
gvy(){return null},
gvz(){return null},
gvA(){return null},
gvB(){return null},
gvU(a){return this.b.c},
gvS(a){return this.b.d},
gwT(){return null},
gvO(a){var s=this.b.f
return s==null?"sans-serif":s},
gvP(){return null},
gvQ(){return null},
gvT(){return null},
gvR(a){var s=this.b.r
return s==null?14:s},
gwg(a){return null},
gxg(a){return null},
guT(a){return this.b.w},
gwi(){return this.b.Q},
gv1(a){return null},
gqa(){return null},
gwL(){return null},
gvj(){return B.Hc}}
A.Va.prototype={
gDk(){var s=this.d,r=s.length
return r===0?this.e:s[r-1]},
gKl(){return this.r},
pd(a){this.d.push(new A.D_(this.gDk(),t.vK.a(a)))},
eK(){var s=this.d
if(s.length!==0)s.pop()},
lV(a){var s,r=this,q=r.gDk().a5_(),p=r.a,o=p.a,n=o+a
p.a=n
p=r.w
if(p){s=q.b
if(s!=null){p=s.a
p=B.e.a!==p}else p=!1
if(p){r.w=!1
p=!1}else p=!0}if(p)p=!0
p
r.c.push(new A.F7(q,o.length,n.length))},
aK(){var s=this,r=s.a.a
return new A.CY(s.c,s.b,r.charCodeAt(0)==0?r:r,s.w)}}
A.YR.prototype={
iu(a){return this.a4F(a)},
a4F(a6){var s=0,r=A.R(t.H),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$iu=A.L(function(a7,a8){if(a7===1){o=a8
s=p}while(true)switch(s){case 0:a4=null
p=4
s=7
return A.G(a6.co(0,"FontManifest.json"),$async$iu)
case 7:a4=a8
p=2
s=6
break
case 4:p=3
a5=o
k=A.ab(a5)
if(k instanceof A.oQ){m=k
if(m.b===404){$.bX().$1("Font manifest does not exist at `"+m.a+"` \u2013 ignoring.")
s=1
break}else throw a5}else throw a5
s=6
break
case 3:s=2
break
case 6:j=t.jS.a(B.b3.d2(0,B.Y.d2(0,A.cc(a4.buffer,0,null))))
if(j==null)throw A.b(A.kt(u.g))
if($.aml())n.a=A.ax7()
else n.a=new A.Pw(A.a([],t.iJ))
for(k=t.a,i=J.cE(j,k),h=A.m(i),i=new A.b1(i,i.gm(i),h.h("b1<E.E>")),g=t.N,f=t.j,h=h.h("E.E");i.q();){e=i.d
if(e==null)e=h.a(e)
d=J.at(e)
c=A.bE(d.j(e,"family"))
e=J.cE(f.a(d.j(e,"fonts")),k)
for(d=A.m(e),e=new A.b1(e,e.gm(e),d.h("b1<E.E>")),d=d.h("E.E");e.q();){b=e.d
if(b==null)b=d.a(b)
a=J.at(b)
a0=A.bh(a.j(b,"asset"))
a1=A.z(g,g)
for(a2=J.ao(a.gbh(b));a2.q();){a3=a2.gB(a2)
if(a3!=="asset")a1.l(0,a3,A.h(a.j(b,a3)))}b=n.a
b.toString
c.toString
b.KH(c,"url("+a6.tY(a0)+")",a1)}}case 1:return A.P(q,r)
case 2:return A.O(o,r)}})
return A.Q($async$iu,r)},
fd(){var s=0,r=A.R(t.H),q=this,p
var $async$fd=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:p=q.a
s=2
return A.G(p==null?null:A.kV(p.a,t.H),$async$fd)
case 2:p=q.b
s=3
return A.G(p==null?null:A.kV(p.a,t.H),$async$fd)
case 3:return A.P(null,r)}})
return A.Q($async$fd,r)}}
A.Fo.prototype={
KH(a,b,c){var s=$.asE().b
if(s.test(a)||$.asD().MP(a)!==a)this.Ew("'"+a+"'",b,c)
this.Ew(a,b,c)},
Ew(a,b,c){var s,r,q
try{s=A.ark(a,b,c)
this.a.push(A.fz(s.load(),t.e).dH(new A.Z0(s),new A.Z1(a),t.H))}catch(q){r=A.ab(q)
$.bX().$1('Error while loading font family "'+a+'":\n'+A.h(r))}},
W2(a,b){var s=A.ark(a,b,null)
return A.fz(s.load(),t.e).dH(new A.YZ(s),new A.Z_(),t.H)}}
A.Z0.prototype={
$1(a){self.document.fonts.add(this.a)},
$S:5}
A.Z1.prototype={
$1(a){$.bX().$1('Error while trying to load font family "'+this.a+'":\n'+A.h(a))},
$S:2}
A.YZ.prototype={
$1(a){self.document.fonts.add(this.a)
A.azE()},
$S:5}
A.Z_.prototype={
$1(a){throw A.b(A.bH(J.dT(a)))},
$S:141}
A.Pw.prototype={
KH(a,b,c){var s,r,q,p,o,n,m,l,k,j="style",i="font-family",h="font-style",g="weight",f="font-weight",e=A.b9(self.document,"p")
A.r(e.style,"position","absolute")
A.r(e.style,"visibility","hidden")
A.r(e.style,"font-size","72px")
s=$.c8()
r=s===B.hH?"Times New Roman":"sans-serif"
A.r(e.style,i,r)
if(c.j(0,j)!=null){s=e.style
q=c.j(0,j)
q.toString
A.r(s,h,q)}if(c.j(0,g)!=null){s=e.style
q=c.j(0,g)
q.toString
A.r(s,f,q)}e.textContent="giItT1WQy@!-/#"
self.document.body.append(e)
p=A.e4(e.offsetWidth)
s="'"+a
A.r(e.style,i,s+"', "+r)
q=new A.a7($.a9,t.D)
o=A.b8("_fontLoadStart")
n=t.N
m=A.z(n,t.dR)
m.l(0,i,s+"'")
m.l(0,"src",b)
if(c.j(0,j)!=null)m.l(0,h,c.j(0,j))
if(c.j(0,g)!=null)m.l(0,f,c.j(0,g))
s=m.$ti.h("aP<1>")
l=A.lc(new A.aP(m,s),new A.aea(m),s.h("o.E"),n).b0(0," ")
k=A.awt(null)
k.type="text/css"
k.innerHtml="@font-face { "+l+" }"
self.document.head.append(k)
if(B.c.v(a.toLowerCase(),"icon")){e.remove()
return}o.b=new A.cA(Date.now(),!1)
new A.ae9(e,p,new A.aQ(q,t.h),o,a).$0()
this.a.push(q)}}
A.ae9.prototype={
$0(){var s=this,r=s.a
if(A.e4(r.offsetWidth)!==s.b){r.remove()
s.c.di(0)}else if(A.cg(0,Date.now()-s.d.ap().a,0).a>2e6){s.c.di(0)
throw A.b(A.bH("Timed out trying to load font: "+s.e))}else A.cw(B.o8,s)},
$S:0}
A.aea.prototype={
$1(a){return a+": "+A.h(this.a.j(0,a))+";"},
$S:53}
A.yI.prototype={
a4i(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=a6.a,a8=a7.a,a9=a8.length,b0=a6.c=b1.a
a6.d=0
a6.e=null
a6.r=a6.f=0
a6.y=!1
s=a6.z
B.b.L(s)
if(a9===0)return
r=new A.a8a(a7,a6.b)
q=A.ajS(a7,r,0,0,b0,B.oq)
for(p=a7.b,o=p.e,n=p.z,m=n!=null,l=o==null,k=0;!0;){if(k===a9){if(q.a.length!==0||q.x.d!==B.bY){q.a1t()
s.push(q.aK())}break}j=a8[k]
r.sm4(j)
i=q.IL()
h=i.a
g=q.Ly(h)
if(q.y+g<=b0){q.ou(i)
if(h.d===B.dq){s.push(q.aK())
q=q.tp()}}else if((m&&l||s.length+1===o)&&m){q.IO(i,!0,n)
s.push(q.Hq(n))
break}else if(!q.at){q.a1S(i,!1)
s.push(q.aK())
q=q.tp()}else{q.a56()
f=B.b.gM(q.a).a
for(;j!==f;){--k
j=a8[k]}s.push(q.aK())
q=q.tp()}if(q.x.a>=j.c){q.xY();++k}if(s.length===o)break}for(o=s.length,e=1/0,d=-1/0,c=0;c<o;++c){b=s[c]
n=b.a
a6.d=a6.d+n.e
if(a6.w===-1){m=n.w
a6.w=m
a6.x=m*1.1662499904632568}m=a6.e
a=m==null?null:m.a.f
if(a==null)a=0
m=n.f
if(a<m)a6.e=b
a0=n.r
if(a0<e)e=a0
a1=a0+m
if(a1>d)d=a1}a6.Q=new A.D(e,0,d,a6.d)
if(o!==0){a2=B.b.gM(s)
a3=isFinite(a6.c)&&p.a===B.me
for(p=s.length,c=0;c<s.length;s.length===p||(0,A.K)(s),++c){b=s[c]
a6.Xw(b,a3&&!b.k(0,a2))}}q=A.ajS(a7,r,0,0,b0,B.oq)
for(k=0;k<a9;){j=a8[k]
r.sm4(j)
i=q.IL()
q.ou(i)
a4=i.a.d===B.dq&&!0
if(q.x.a>=j.c)++k
a5=B.b.gM(q.a).d
if(a6.f<a5)a6.f=a5
a7=a6.r
b0=q.z
if(a7<b0)a6.r=b0
if(a4)q=q.tp()}},
Xw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=b?this.RE(a):0
for(s=this.a.b.b,r=a.a.f,q=0,p=0;o=h.length,q<o;){n=h[q]
m=s==null
l=m?B.u:s
if(n.f===l){n.c!==$&&A.cY()
n.c=p
n.d!==$&&A.cY()
n.d=r
if(n instanceof A.eZ&&n.y&&!n.z)n.Q+=g
p+=n.gao(n);++q
continue}k=q+1
j=q
while(!0){if(k<o){l=h[k]
i=m?B.u:s
i=l.f!==i
l=i}else l=!1
if(!l)break
n=h[k]
j=n instanceof A.eZ&&n.y?j:k;++k}k=j+1
p+=this.Xx(a,q,j,g,p)
q=k}},
Xx(a,b,c,d,e){var s,r,q,p,o=a.r
for(s=a.a.f,r=c,q=0;r>=b;--r){p=o[r]
p.c!==$&&A.cY()
p.c=e+q
p.d!==$&&A.cY()
p.d=s
if(p instanceof A.eZ&&p.y&&!p.z)p.Q+=d
q+=p.gao(p)}return q},
RE(a){var s=this.c,r=a.w-a.x
if(r>0)return(s-a.a.f)/r
return 0},
px(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.a([],t.l)
for(s=this.z,r=s.length,q=0;q<s.length;s.length===r||(0,A.K)(s),++q){p=s[q]
for(o=p.r,n=o.length,m=p.a,l=m.w,k=l-m.b,j=m.r,m=m.e,i=k+m,h=0;h<o.length;o.length===n||(0,A.K)(o),++h){g=o[h]
if(g instanceof A.x0){f=g.e
e=f===B.u
d=g.c
if(e)d===$&&A.c()
else{c=g.d
c===$&&A.c()
d===$&&A.c()
d=c-(d+g.gao(g))}c=g.c
if(e){c===$&&A.c()
e=c+g.gao(g)}else{e=g.d
e===$&&A.c()
c===$&&A.c()
c=e-c
e=c}c=g.r
switch(c.gdf()){case B.fY:b=k
break
case B.h_:b=k+B.d.a9(m,c.gaW(c))/2
break
case B.fZ:b=B.d.a9(i,c.gaW(c))
break
case B.fW:b=B.d.a9(l,c.gaW(c))
break
case B.fX:b=l
break
case B.fV:b=B.d.a9(l,c.ga67())
break
default:b=null}a.push(new A.lV(j+d,b,j+e,B.d.X(b,c.gaW(c)),f))}}}return a},
Lz(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
if(a>=b||a<0||b<0)return A.a([],t.l)
s=this.a.c.length
if(a>s||b>s)return A.a([],t.l)
r=A.a([],t.l)
for(q=this.z,p=q.length,o=0;o<q.length;q.length===p||(0,A.K)(q),++o){n=q[o]
if(a<n.d&&n.c<b)for(m=n.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.K)(m),++k){j=m[k]
if(j instanceof A.eZ&&a<j.b.a&&j.a.a<b)r.push(j.z0(n,a,b,!1))}}return r},
iE(a){var s,r,q,p,o,n,m=this.To(a.b),l=a.a,k=m.a.r
if(l<=k)return new A.dg(m.c,B.a9)
if(l>=k+m.f)return new A.dg(m.e,B.bv)
s=l-k
for(l=m.r,k=l.length,r=0;r<l.length;l.length===k||(0,A.K)(l),++r){q=l[r]
p=q.e===B.u
o=q.c
if(p)o===$&&A.c()
else{n=q.d
n===$&&A.c()
o===$&&A.c()
o=n-(o+q.gao(q))}if(o<=s){o=q.c
if(p){o===$&&A.c()
p=o+q.gao(q)}else{p=q.d
p===$&&A.c()
o===$&&A.c()
o=p-o
p=o}p=s<=p}else p=!1
if(p)return q.LR(s)}return new A.dg(m.c,B.a9)},
To(a){var s,r,q,p,o
for(s=this.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.a.e
if(a<=o)return p
a-=o}return B.b.gM(s)}}
A.xd.prototype={
gjv(a){var s,r=this,q=r.c
if(r.e===B.u)q===$&&A.c()
else{s=r.d
s===$&&A.c()
q===$&&A.c()
q=s-(q+r.gao(r))}return q},
gtL(a){var s,r=this,q=r.c
if(r.e===B.u){q===$&&A.c()
q+=r.gao(r)}else{s=r.d
s===$&&A.c()
q===$&&A.c()
q=s-q}return q}}
A.x0.prototype={}
A.eZ.prototype={
gao(a){return this.Q},
z0(a,b,c,d){var s,r,q,p,o,n=this,m=a.a,l=m.w-n.at,k=n.a.a
if(b<=k)s=0
else{r=n.r
r.sm4(n.w)
s=r.iT(k,b)}k=n.b.b
if(c>=k)q=0
else{r=n.r
r.sm4(n.w)
q=r.iT(c,k)}k=n.x
if(k===B.u){p=n.gjv(n)+s
o=n.gtL(n)-q}else{p=n.gjv(n)+q
o=n.gtL(n)-s}if(d&&n.z)if(n.e===B.u)o=p
else p=o
m=m.r
return new A.lV(m+p,l,m+o,l+n.as,k)},
LR(a){var s,r,q,p,o=this,n=o.r
n.sm4(o.w)
a=o.x!==B.u?o.gtL(o)-a:a-o.gjv(o)
s=o.a.a
r=o.b.b
q=n.yI(s,r,!0,a)
if(q===r)return new A.dg(q,B.bv)
p=q+1
if(a-n.iT(s,q)<n.iT(s,p)-a)return new A.dg(q,B.a9)
else return new A.dg(p,B.bv)}}
A.Ga.prototype={}
A.a0u.prototype={
seC(a,b){if(b.d!==B.bE)this.at=!0
this.x=b},
ga_d(){var s=this.c-this.y,r=this.d.b
switch(r.a.a){case 2:return s/2
case 1:return s
case 4:r=r.b
return(r==null?B.u:r)===B.a2?s:0
case 5:r=r.b
return(r==null?B.u:r)===B.a2?0:s
default:return 0}},
Ly(a){var s=this,r=s.x.a,q=a.c
if(r===q)return 0
return s.z-s.y+s.e.iT(r,q)},
gVQ(){var s=this.b
if(s.length===0)return!1
return B.b.gM(s) instanceof A.x0},
gvw(){var s=this.ay
if(s===$){s=this.d.b.b
s=this.ay=s==null?B.u:s}return s},
gDj(){var s=this.ch
if(s===$){s=this.d.b.b
s=this.ch=s==null?B.u:s}return s},
ou(a){var s=this,r=s.Q,q=s.e,p=q.d
s.Q=Math.max(r,p.gj4(p))
p=s.as
r=q.d
r=r.gaW(r)
q=q.d
s.as=Math.max(p,r-q.gj4(q))
r=a.c
if(!r){q=a.b
q=s.gvw()!==q||s.gDj()!==q}else q=!0
if(q)s.xY()
q=a.b
p=q==null
s.ay=p?s.gvw():q
s.ch=p?B.u:q
s.Cn(s.vv(a.a))
if(r)s.HZ(!0)},
a1t(){var s,r,q,p,o=this
if(o.x.d===B.bY)return
s=o.d.c.length
r=new A.dq(s,s,s,B.bY)
s=o.e
if(s.e!=null){q=o.Q
p=s.d
o.Q=Math.max(q,p.gj4(p))
p=o.as
q=s.d
q=q.gaW(q)
s=s.d
o.as=Math.max(p,q-s.gj4(s))
o.Cn(o.vv(r))}else o.seC(0,r)},
vv(a){var s,r=this.x,q=this.e,p=q.e
p.toString
s=r.a
return new A.Ga(p,r,a,q.iT(s,a.c),q.iT(s,a.b))},
Cn(a){var s,r,q=this
q.a.push(a)
s=a.d
if(s!==0){r=q.y
q.y=r+(q.z-r+s)}q.z=q.z+a.e
q.seC(0,a.c)},
F6(){var s,r,q,p,o=this,n=o.a,m=n.pop()
if(n.length===0){o.z=o.y=0
o.seC(0,o.f)}else{o.z=o.z-m.e
o.seC(0,B.b.gM(n).c)
s=m.d
if(s!==0){o.y-=s
r=n.length-1
q=0
while(!0){s=r>=0
if(!(s&&n[r].d===0))break
q+=n[r].e;--r}if(s){n=n[r]
q+=n.e-n.d}o.y-=q}}if(o.gDi().a>m.b.a){p=o.b.pop()
o.CW=o.CW-p.gao(p)
if(p instanceof A.eZ&&p.y)--o.ax}return m},
IO(a,b,c){var s,r,q,p,o,n=this
if(c==null){s=n.z
r=a.a.c
q=n.e.yI(n.x.a,r,b,n.c-s)
if(q===r)n.ou(a)
else n.ou(new A.kM(new A.dq(q,q,q,B.bE),a.b,a.c))
return}s=n.e
p=n.c-A.alD(s.b,c,0,c.length,null)
o=n.vv(a.a)
r=n.a
while(!0){if(!(r.length!==0&&n.z>p))break
o=n.F6()}s.sm4(o.a)
q=s.yI(o.b.a,o.c.a,b,p-n.z)
s=n.b
while(!0){if(!(s.length!==0&&B.b.gM(s).b.a>q))break
s.pop()}n.CW=n.z
n.ou(new A.kM(new A.dq(q,q,q,B.bE),a.b,a.c))},
a1S(a,b){return this.IO(a,b,null)},
a56(){for(;this.x.d===B.bE;)this.F6()},
gDi(){var s=this.b
if(s.length===0)return this.f
return B.b.gM(s).b},
HZ(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.gDi(),h=j.x
if(i.a===h.a)return
s=j.e
r=j.z
q=j.CW
p=j.d.b.b
if(p==null)p=B.u
o=j.gvw()
n=j.gDj()
m=s.e
m.toString
l=s.d
l=l.gaW(l)
k=s.d
j.b.push(new A.eZ(s,m,n,a,r-q,l,k.gj4(k),i,h,p,o))
if(a)++j.ax
j.CW=j.z},
xY(){return this.HZ(!1)},
Hq(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.xY()
s=a==null?0:A.alD(i.e.b,a,0,a.length,null)
r=i.f.a
q=i.x
p=Math.max(r,q.b)
if(q.d!==B.bY&&i.gVQ())o=!1
else{q=i.x.d
o=q===B.dq||q===B.bY}i.XE()
q=i.x
n=i.y
m=i.z
l=i.ga_d()
k=i.Q
j=i.as
return new A.wS(new A.EO(o,k,j,k,k+j,n+s,l,i.w+k,i.r),a,r,q.a,p,m+s,i.b,i.ax,i.cx)},
aK(){return this.Hq(null)},
XE(){var s,r,q,p
this.cx=0
for(s=this.b,r=s.length-1,q=0;r>=0;--r){p=s[r]
if(!(p instanceof A.eZ&&p.y))break
p.z=!0;++q
this.cx=q}},
IL(){var s,r=this,q=r.cy,p=r.d.c
if(q==null||r.x.a>=q.a){s=r.e.e.c
q=r.cy=A.aEI(p,r.x.a,s)}return A.aE6(p,r.x,q)},
tp(){var s=this,r=s.x
return A.ajS(s.d,s.e,s.w+(s.Q+s.as),s.r+1,s.c,r)}}
A.a8a.prototype={
sm4(a){var s,r,q,p,o,n,m=this
if(a===m.e)return
m.e=a
s=a.a
r=s.dy
if(r===$){q=s.gIu()
p=s.at
if(p==null)p=14
s.dy!==$&&A.bm()
r=s.dy=new A.o4(q,p,s.ch,null,null)}o=$.a8b.j(0,r)
if(o==null){o=new A.r8(r,$.asX(),new A.a8T(A.b9(self.document,"flt-paragraph")))
$.a8b.l(0,r,o)}m.d=o
n=s.gI6()
if(m.c!==n){m.c=n
m.b.font=n}},
yI(a,b,c,d){var s,r,q,p
this.e.toString
if(d<=0)return c?a:a+1
s=b
r=a
do{q=B.f.br(r+s,2)
p=this.iT(a,q)
if(p<d)r=q
else{r=p>d?r:q
s=q}}while(s-r>1)
return r===a&&!c?r+1:r},
iT(a,b){return A.alD(this.b,this.a.c,a,b,this.e.a.ax)}}
A.a8c.prototype={
$2(a,b){b.gEa().remove()},
$S:145}
A.be.prototype={
i(a){return"LineCharProperty."+this.b}}
A.nk.prototype={
i(a){return"LineBreakType."+this.b}}
A.dq.prototype={
gu(a){var s=this
return A.a_(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Z(b)!==A.A(s))return!1
return b instanceof A.dq&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
i(a){var s=this.bo(0)
return s}}
A.Ki.prototype={
n(){this.a.remove()}}
A.a9h.prototype={
an(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this.a.ged().z,g=h.length
if(g===0)return
for(s=t.wE,r=0;r<h.length;h.length===g||(0,A.K)(h),++r){q=h[r]
p=q.r
if(p.length===0)continue
o=B.b.gM(p)
for(n=p.length,m=0;m<p.length;p.length===n||(0,A.K)(p),++m){l=p[m]
if(!(l===o&&l instanceof A.eZ&&l.y))if(l instanceof A.eZ){k=s.a(l.w.a.cx)
if(k!=null){j=l.z0(q,l.a.a,l.b.a,!0)
i=new A.D(j.a,j.b,j.c,j.d).cO(b)
k.b=!0
a.c3(i,k.a)}}this.X7(a,b,q,l)}}},
X7(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null
if(a3 instanceof A.eZ){s=a3.w.a
r=s.cy
q=r==null
if(!q){t.k.a(r)
p=r}else{o=$.aS()?A.br():new A.bf(new A.bg())
n=s.a
n.toString
o.saf(0,n)
t.k.a(o)
p=o}o=s.gI6()
if(o!==a0.e){n=a0.d
n.gaO(n).font=o
a0.e=o}o=p.b=!0
n=p.a
m=a0.d
m.gbY().iF(n,a)
n=a2.a
l=a1.a+n.r
k=l+a3.gjv(a3)
j=a1.b+n.w
if(!a3.y){i=B.c.U(this.a.c,a3.a.a,a3.b.b)
h=s.ax
if(h!=null?h===0:o){o=q?a:r.gcc(r)
a0.yr(i,k,j,s.db,o)}else{g=i.length
for(s=s.db,f=k,e=0;e<g;++e){d=i[e]
o=B.d.jH(f)
a0.yr(d,o,j,s,q?a:r.gcc(r))
c=m.d
if(c==null){m.vt()
o=m.d
o.toString
c=o}o=c.measureText(d).width
o.toString
f+=h+o}}}b=a2.b
if(b!=null&&a3===B.b.gM(a2.r)){s=a3.gtL(a3)
q=q?a:r.gcc(r)
a0.a18(b,l+s,j,q)}m.gbY().jI()}}}
A.EO.prototype={
gu(a){var s=this
return A.a_(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Z(b)!==A.A(s))return!1
return b instanceof A.EO&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x},
i(a){var s=this.bo(0)
return s}}
A.wS.prototype={
gu(a){var s=this
return A.a_(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,null,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Z(b)!==A.A(s))return!1
return b instanceof A.wS&&b.a.k(0,s.a)&&b.b==s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&!0}}
A.v_.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Z(b)!==A.A(s))return!1
return b instanceof A.v_&&b.a===s.a&&b.b==s.b&&b.c==s.c&&b.e==s.e&&b.f==s.f&&b.r==s.r&&b.w==s.w&&J.f(b.x,s.x)&&b.z==s.z&&J.f(b.Q,s.Q)},
gu(a){var s=this
return A.a_(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.z,s.Q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this.bo(0)
return s},
gfV(a){return this.c},
ghB(a){return this.d}}
A.v0.prototype={
gIu(){var s=this.y
if(s.length===0)return"sans-serif"
return s},
gI6(){var s,r,q,p=this,o=p.dx
if(o==null){o=p.f
s=p.at
r=p.gIu()
q=""+"normal "
o=(o!=null?q+A.h(A.arA(o)):q+"normal")+" "
o=s!=null?o+B.d.dE(s):o+"14"
r=o+"px "+A.h(A.ahj(r))
r=p.dx=r.charCodeAt(0)==0?r:r
o=r}return o},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Z(b)!==A.A(s))return!1
return b instanceof A.v0&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&b.d==s.d&&b.f==s.f&&b.w==s.w&&b.y===s.y&&b.at==s.at&&b.ax==s.ax&&b.ay==s.ay&&b.ch==s.ch&&J.f(b.CW,s.CW)&&b.cx==s.cx&&b.cy==s.cy&&A.Tc(b.db,s.db)&&A.Tc(b.z,s.z)},
gu(a){var s=this
return A.a_(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.y,s.z,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,s.cy,s.db,B.a,B.a)},
i(a){var s=this.bo(0)
return s},
gfV(a){return this.f},
ghB(a){return this.r}}
A.o4.prototype={
k(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.o4&&b.gu(b)===this.gu(this)},
gu(a){var s,r=this,q=r.f
if(q===$){s=A.a_(r.a,r.b,r.c,null,null,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
r.f!==$&&A.bm()
r.f=s
q=s}return q}}
A.a8T.prototype={}
A.r8.prototype={
gEa(){var s,r,q,p,o,n,m,l=this,k=l.d
if(k===$){s=A.b9(self.document,"div")
r=s.style
A.r(r,"visibility","hidden")
A.r(r,"position","absolute")
A.r(r,"top","0")
A.r(r,"left","0")
A.r(r,"display","flex")
A.r(r,"flex-direction","row")
A.r(r,"align-items","baseline")
A.r(r,"margin","0")
A.r(r,"border","0")
A.r(r,"padding","0")
r=l.e
q=l.a
p=r.a
o=p.style
A.r(o,"font-size",""+B.d.dE(q.b)+"px")
n=A.ahj(q.a)
n.toString
A.r(o,"font-family",n)
m=q.c
if(m!=null)A.r(o,"line-height",B.d.i(m))
r.b=null
A.r(p.style,"white-space","pre")
r.b=null
p.textContent=" "
s.append(p)
r.b=null
l.b.a.append(s)
l.d!==$&&A.bm()
l.d=s
k=s}return k},
gj4(a){var s,r=this,q=r.f
if(q===$){q=r.c
if(q===$){s=A.b9(self.document,"div")
r.gEa().append(s)
r.c!==$&&A.bm()
r.c=s
q=s}q=q.getBoundingClientRect().bottom
r.f!==$&&A.bm()
r.f=q}return q},
gaW(a){var s,r,q,p=this,o=p.r
if(o===$){s=p.e
r=s.b
s=r==null?s.b=s.a.getBoundingClientRect():r
q=s.height
s=$.c8()
if(s===B.bQ&&!0)++q
p.r!==$&&A.bm()
o=p.r=q}return o}}
A.kM.prototype={}
A.rn.prototype={
i(a){return"_ComparisonResult."+this.b}}
A.cd.prototype={
a03(a){if(a<this.a)return B.a3i
if(a>this.b)return B.a3h
return B.a3g}}
A.jX.prototype={
oB(a,b,c){var s=A.T6(b,c)
return s==null?this.b:this.oC(s)},
oC(a){var s,r,q,p,o=this
if(a==null)return o.b
s=o.c
r=s.j(0,a)
if(r!=null)return r
q=o.Rp(a)
p=q===-1?o.b:o.a[q].c
s.l(0,a,p)
return p},
Rp(a){var s,r,q=this.a,p=q.length
for(s=0;s<p;){r=s+B.f.de(p-s,1)
switch(q[r].a03(a).a){case 1:s=r+1
break
case 2:p=r
break
case 0:return r}}return-1}}
A.cD.prototype={
i(a){return"WordCharProperty."+this.b}}
A.Nw.prototype={}
A.UC.prototype={}
A.DH.prototype={
gD3(){var s,r=this,q=r.jf$
if(q===$){s=A.ae(r.gU9())
r.jf$!==$&&A.bm()
r.jf$=s
q=s}return q},
gD4(){var s,r=this,q=r.jg$
if(q===$){s=A.ae(r.gUb())
r.jg$!==$&&A.bm()
r.jg$=s
q=s}return q},
gD2(){var s,r=this,q=r.jh$
if(q===$){s=A.ae(r.gU7())
r.jh$!==$&&A.bm()
r.jh$=s
q=s}return q},
qU(a){A.bN(a,"compositionstart",this.gD3(),null)
A.bN(a,"compositionupdate",this.gD4(),null)
A.bN(a,"compositionend",this.gD2(),null)},
Ua(a){this.hw$=null},
Uc(a){var s=self.window.CompositionEvent
s.toString
if(a instanceof s)this.hw$=a.data},
U8(a){this.hw$=null},
a0W(a){var s,r,q
if(this.hw$==null||a.a==null)return a
s=a.b
r=this.hw$.length
q=s-r
if(q<0)return a
return A.EH(s,q,q+r,a.c,a.a)}}
A.XY.prototype={
xZ(){return A.b9(self.document,"input")},
HN(a){var s
if(this.ghC()==null)return
s=$.dS()
if(s!==B.ay)s=s===B.j0||this.ghC()==="none"
else s=!0
if(s){s=this.ghC()
s.toString
A.H(a,"setAttribute",["inputmode",s])}}}
A.a1Y.prototype={
ghC(){return"none"}}
A.a9b.prototype={
ghC(){return null}}
A.a29.prototype={
ghC(){return"numeric"}}
A.VZ.prototype={
ghC(){return"decimal"}}
A.a2y.prototype={
ghC(){return"tel"}}
A.XP.prototype={
ghC(){return"email"}}
A.a9C.prototype={
ghC(){return"url"}}
A.a1L.prototype={
ghC(){return null},
xZ(){return A.b9(self.document,"textarea")}}
A.o3.prototype={
i(a){return"TextCapitalization."+this.b}}
A.yG.prototype={
B6(a){var s,r,q="sentences",p="setAttribute"
switch(this.a.a){case 0:s=$.c8()
r=s===B.M?q:"words"
break
case 2:r="characters"
break
case 1:r=q
break
case 3:default:r="off"
break}s=self.window.HTMLInputElement
s.toString
if(a instanceof s)A.H(a,p,["autocapitalize",r])
else{s=self.window.HTMLTextAreaElement
s.toString
if(a instanceof s)A.H(a,p,["autocapitalize",r])}}}
A.XR.prototype={
nQ(){var s=this.b,r=A.a([],t.i)
new A.aP(s,A.m(s).h("aP<1>")).R(0,new A.XS(this,r))
return r}}
A.XU.prototype={
$1(a){a.preventDefault()},
$S:1}
A.XS.prototype={
$1(a){var s=this.a,r=s.b.j(0,a)
r.toString
this.b.push(A.cb(r,"input",A.ae(new A.XT(s,a,r))))},
$S:98}
A.XT.prototype={
$1(a){var s,r=this.a.c,q=this.b
if(r.j(0,q)==null)throw A.b(A.a6("AutofillInfo must have a valid uniqueIdentifier."))
else{r=r.j(0,q)
r.toString
s=A.anr(this.c)
$.aR().fW("flutter/textinput",B.av.fQ(new A.fP("TextInputClient.updateEditingStateWithTag",[0,A.aV([r.b,s.L5()],t.dR,t.z)])),A.SW())}},
$S:1}
A.CE.prototype={
Hg(a,b){var s=this.d,r=this.e,q=self.window.HTMLInputElement
q.toString
if(a instanceof q){if(r!=null)a.placeholder=r
q=s==null
if(!q){a.name=s
a.id=s
if(B.c.v(s,"password"))a.type="password"
else a.type="text"}q=q?"on":s
a.autocomplete=q}else{q=self.window.HTMLTextAreaElement
q.toString
if(a instanceof q){if(r!=null)a.placeholder=r
q=s==null
if(!q){a.name=s
a.id=s}A.H(a,"setAttribute",["autocomplete",q?"on":s])}}},
dB(a){return this.Hg(a,!1)}}
A.r6.prototype={}
A.pn.prototype={
L5(){var s=this
return A.aV(["text",s.a,"selectionBase",s.b,"selectionExtent",s.c,"composingBase",s.d,"composingExtent",s.e],t.N,t.z)},
gu(a){var s=this
return A.a_(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(A.A(s)!==J.Z(b))return!1
return b instanceof A.pn&&b.a==s.a&&b.b===s.b&&b.c===s.c&&b.d==s.d&&b.e==s.e},
i(a){var s=this.bo(0)
return s},
dB(a){var s=this,r="setSelectionRange",q=self.window.HTMLInputElement
q.toString
if(a instanceof q){a.toString
a.value=s.a
q=A.a([s.b,s.c],t.f)
A.H(a,r,q)}else{q=self.window.HTMLTextAreaElement
q.toString
if(a instanceof q){a.toString
a.value=s.a
q=A.a([s.b,s.c],t.f)
A.H(a,r,q)}else{q=a==null?null:A.awr(a)
throw A.b(A.V("Unsupported DOM element type: <"+A.h(q)+"> ("+J.Z(a).i(0)+")"))}}}}
A.a_H.prototype={}
A.Fx.prototype={
fZ(){var s,r=this,q=r.w
if(q!=null){s=r.c
s.toString
q.dB(s)}q=r.d
q===$&&A.c()
if(q.w!=null){r.p8()
q=r.e
if(q!=null)q.dB(r.c)
r.gIN().focus()
r.c.focus()}}}
A.a5i.prototype={
fZ(){var s,r=this,q=r.w
if(q!=null){s=r.c
s.toString
q.dB(s)}q=r.d
q===$&&A.c()
if(q.w!=null){r.p8()
r.gIN().focus()
r.c.focus()
q=r.e
if(q!=null){s=r.c
s.toString
q.dB(s)}}},
t1(){if(this.w!=null)this.fZ()
this.c.focus()}}
A.uD.prototype={
gfO(){var s=null,r=this.f
if(r==null){r=this.e.a
r.toString
r=this.f=new A.r6(r,"",-1,-1,s,s,s,s)}return r},
gIN(){var s=this.d
s===$&&A.c()
s=s.w
return s==null?null:s.a},
ms(a,b,c){var s,r,q,p=this,o="transparent",n="none"
p.c=a.a.xZ()
p.xw(a)
s=p.c
s.classList.add("flt-text-editing")
r=s.style
A.r(r,"white-space","pre-wrap")
A.r(r,"align-content","center")
A.r(r,"position","absolute")
A.r(r,"top","0")
A.r(r,"left","0")
A.r(r,"padding","0")
A.r(r,"opacity","1")
A.r(r,"color",o)
A.r(r,"background-color",o)
A.r(r,"background",o)
A.r(r,"outline",n)
A.r(r,"border",n)
A.r(r,"resize",n)
A.r(r,"text-shadow",o)
A.r(r,"overflow","hidden")
A.r(r,"transform-origin","0 0 0")
q=$.c8()
if(q!==B.bh)if(q!==B.cg)q=q===B.M
else q=!0
else q=!0
if(q)s.classList.add("transparentTextEditing")
A.r(r,"caret-color",o)
s=p.r
if(s!=null){r=p.c
r.toString
s.dB(r)}s=p.d
s===$&&A.c()
if(s.w==null){s=$.i0.z
s.toString
r=p.c
r.toString
s.hj(0,r)
p.Q=!1}p.t1()
p.b=!0
p.x=c
p.y=b},
xw(a){var s,r,q,p=this,o="setAttribute"
p.d=a
s=p.c
if(a.c){s.toString
A.H(s,o,["readonly","readonly"])}else s.removeAttribute("readonly")
if(a.d){s=p.c
s.toString
A.H(s,o,["type","password"])}if(a.a===B.nj){s=p.c
s.toString
A.H(s,o,["inputmode","none"])}r=a.r
s=p.c
if(r!=null){s.toString
r.Hg(s,!0)}else{s.toString
A.H(s,o,["autocomplete","off"])}q=a.e?"on":"off"
s=p.c
s.toString
A.H(s,o,["autocorrect",q])},
t1(){this.fZ()},
nO(){var s,r,q=this,p=q.d
p===$&&A.c()
p=p.w
if(p!=null)B.b.I(q.z,p.nQ())
p=q.z
s=q.c
s.toString
r=q.goF()
p.push(A.cb(s,"input",A.ae(r)))
s=q.c
s.toString
p.push(A.cb(s,"keydown",A.ae(q.goT())))
p.push(A.cb(self.document,"selectionchange",A.ae(r)))
r=q.c
r.toString
A.bN(r,"beforeinput",A.ae(q.grP()),null)
r=q.c
r.toString
q.qU(r)
r=q.c
r.toString
p.push(A.cb(r,"blur",A.ae(new A.W3(q))))
q.A6()},
AD(a){this.w=a
if(this.b)this.fZ()},
AE(a){var s
this.r=a
if(this.b){s=this.c
s.toString
a.dB(s)}},
hp(a){var s,r,q,p,o,n=this,m=null
n.b=!1
n.w=n.r=n.f=n.e=null
for(s=n.z,r=t.f,q=0;q<s.length;++q){p=s[q]
o=p.b
p=A.a([p.a,p.c],r)
o.removeEventListener.apply(o,p)}B.b.L(s)
s=n.c
s.toString
A.eb(s,"compositionstart",n.gD3(),m)
A.eb(s,"compositionupdate",n.gD4(),m)
A.eb(s,"compositionend",n.gD2(),m)
if(n.Q){s=n.d
s===$&&A.c()
s=s.w
s=(s==null?m:s.a)!=null}else s=!1
r=n.c
if(s){r.blur()
s=n.c
s.toString
A.SY(s,!0)
s=n.d
s===$&&A.c()
s=s.w
if(s!=null){r=s.d
s=s.a
$.C6.l(0,r,s)
A.SY(s,!0)}}else r.remove()
n.c=null},
ud(a){var s
this.e=a
if(this.b)s=!(a.b>=0&&a.c>=0)
else s=!0
if(s)return
a.dB(this.c)},
fZ(){this.c.focus()},
p8(){var s,r=this.d
r===$&&A.c()
r=r.w
r.toString
s=this.c
s.toString
r=r.a
r.append(s)
$.i0.z.hj(0,r)
this.Q=!0},
IV(a){var s,r,q=this,p=q.c
p.toString
s=q.a0W(A.anr(p))
p=q.d
p===$&&A.c()
if(p.f){q.gfO().r=s.d
q.gfO().w=s.e
r=A.azT(s,q.e,q.gfO())}else r=null
if(!s.k(0,q.e)){q.e=s
q.f=r
q.x.$2(s,r)
q.f=null}},
a1U(a){var s=this,r=A.bE(a.data),q=A.bE(a.inputType)
if(q!=null)if(B.c.v(q,"delete")){s.gfO().b=""
s.gfO().d=s.e.c}else if(q==="insertLineBreak"){s.gfO().b="\n"
s.gfO().c=s.e.c
s.gfO().d=s.e.c}else if(r!=null){s.gfO().b=r
s.gfO().c=s.e.c
s.gfO().d=s.e.c}},
a3T(a){var s,r=self.window.KeyboardEvent
r.toString
if(a instanceof r)if(a.keyCode===13){r=this.y
r.toString
s=this.d
s===$&&A.c()
r.$1(s.b)}},
yu(a,b,c,d){var s,r=this
r.ms(b,c,d)
r.nO()
s=r.e
if(s!=null)r.ud(s)
r.c.focus()},
A6(){var s=this,r=s.z,q=s.c
q.toString
r.push(A.cb(q,"mousedown",A.ae(new A.W4())))
q=s.c
q.toString
r.push(A.cb(q,"mouseup",A.ae(new A.W5())))
q=s.c
q.toString
r.push(A.cb(q,"mousemove",A.ae(new A.W6())))}}
A.W3.prototype={
$1(a){this.a.c.focus()},
$S:1}
A.W4.prototype={
$1(a){a.preventDefault()},
$S:1}
A.W5.prototype={
$1(a){a.preventDefault()},
$S:1}
A.W6.prototype={
$1(a){a.preventDefault()},
$S:1}
A.a_7.prototype={
ms(a,b,c){var s,r=this
r.uy(a,b,c)
s=r.c
s.toString
a.a.HN(s)
s=r.d
s===$&&A.c()
if(s.w!=null)r.p8()
s=r.c
s.toString
a.x.B6(s)},
t1(){A.r(this.c.style,"transform","translate(-9999px, -9999px)")
this.p1=!1},
nO(){var s,r,q,p=this,o=p.d
o===$&&A.c()
o=o.w
if(o!=null)B.b.I(p.z,o.nQ())
o=p.z
s=p.c
s.toString
r=p.goF()
o.push(A.cb(s,"input",A.ae(r)))
s=p.c
s.toString
o.push(A.cb(s,"keydown",A.ae(p.goT())))
o.push(A.cb(self.document,"selectionchange",A.ae(r)))
r=p.c
r.toString
A.bN(r,"beforeinput",A.ae(p.grP()),null)
r=p.c
r.toString
p.qU(r)
r=p.c
r.toString
o.push(A.cb(r,"focus",A.ae(new A.a_a(p))))
p.R9()
q=new A.ys()
$.To()
q.n3(0)
r=p.c
r.toString
o.push(A.cb(r,"blur",A.ae(new A.a_b(p,q))))},
AD(a){var s=this
s.w=a
if(s.b&&s.p1)s.fZ()},
hp(a){var s
this.Nx(0)
s=this.ok
if(s!=null)s.aA(0)
this.ok=null},
R9(){var s=this.c
s.toString
this.z.push(A.cb(s,"click",A.ae(new A.a_8(this))))},
FC(){var s=this.ok
if(s!=null)s.aA(0)
this.ok=A.cw(B.bi,new A.a_9(this))},
fZ(){var s,r
this.c.focus()
s=this.w
if(s!=null){r=this.c
r.toString
s.dB(r)}}}
A.a_a.prototype={
$1(a){this.a.FC()},
$S:1}
A.a_b.prototype={
$1(a){var s=A.cg(this.b.gIv(),0,0).a<2e5,r=self.document.hasFocus()&&s,q=this.a
if(r)q.c.focus()
else q.a.uc()},
$S:1}
A.a_8.prototype={
$1(a){var s=this.a
if(s.p1){A.r(s.c.style,"transform","translate(-9999px, -9999px)")
s.p1=!1
s.FC()}},
$S:1}
A.a_9.prototype={
$0(){var s=this.a
s.p1=!0
s.fZ()},
$S:0}
A.TM.prototype={
ms(a,b,c){var s,r,q=this
q.uy(a,b,c)
s=q.c
s.toString
a.a.HN(s)
s=q.d
s===$&&A.c()
if(s.w!=null)q.p8()
else{s=$.i0.z
s.toString
r=q.c
r.toString
s.hj(0,r)}s=q.c
s.toString
a.x.B6(s)},
nO(){var s,r,q=this,p=q.d
p===$&&A.c()
p=p.w
if(p!=null)B.b.I(q.z,p.nQ())
p=q.z
s=q.c
s.toString
r=q.goF()
p.push(A.cb(s,"input",A.ae(r)))
s=q.c
s.toString
p.push(A.cb(s,"keydown",A.ae(q.goT())))
p.push(A.cb(self.document,"selectionchange",A.ae(r)))
r=q.c
r.toString
A.bN(r,"beforeinput",A.ae(q.grP()),null)
r=q.c
r.toString
q.qU(r)
r=q.c
r.toString
p.push(A.cb(r,"blur",A.ae(new A.TN(q))))},
fZ(){var s,r
this.c.focus()
s=this.w
if(s!=null){r=this.c
r.toString
s.dB(r)}}}
A.TN.prototype={
$1(a){var s=this.a
if(self.document.hasFocus())s.c.focus()
else s.a.uc()},
$S:1}
A.Ys.prototype={
ms(a,b,c){var s
this.uy(a,b,c)
s=this.d
s===$&&A.c()
if(s.w!=null)this.p8()},
nO(){var s,r,q=this,p=q.d
p===$&&A.c()
p=p.w
if(p!=null)B.b.I(q.z,p.nQ())
p=q.z
s=q.c
s.toString
r=q.goF()
p.push(A.cb(s,"input",A.ae(r)))
s=q.c
s.toString
p.push(A.cb(s,"keydown",A.ae(q.goT())))
s=q.c
s.toString
A.bN(s,"beforeinput",A.ae(q.grP()),null)
s=q.c
s.toString
q.qU(s)
s=q.c
s.toString
p.push(A.cb(s,"keyup",A.ae(new A.Yu(q))))
s=q.c
s.toString
p.push(A.cb(s,"select",A.ae(r)))
r=q.c
r.toString
p.push(A.cb(r,"blur",A.ae(new A.Yv(q))))
q.A6()},
Xy(){A.cw(B.v,new A.Yt(this))},
fZ(){var s,r,q=this
q.c.focus()
s=q.w
if(s!=null){r=q.c
r.toString
s.dB(r)}s=q.e
if(s!=null){r=q.c
r.toString
s.dB(r)}}}
A.Yu.prototype={
$1(a){this.a.IV(a)},
$S:1}
A.Yv.prototype={
$1(a){this.a.Xy()},
$S:1}
A.Yt.prototype={
$0(){this.a.c.focus()},
$S:0}
A.a90.prototype={}
A.a95.prototype={
dY(a){var s=a.b
if(s!=null&&s!==this.a&&a.c){a.c=!1
a.ghS().hp(0)}a.b=this.a
a.d=this.b}}
A.a9c.prototype={
dY(a){var s=a.ghS(),r=a.d
r.toString
s.xw(r)}}
A.a97.prototype={
dY(a){a.ghS().ud(this.a)}}
A.a9a.prototype={
dY(a){if(!a.c)a.YU()}}
A.a96.prototype={
dY(a){a.ghS().AD(this.a)}}
A.a99.prototype={
dY(a){a.ghS().AE(this.a)}}
A.a9_.prototype={
dY(a){if(a.c){a.c=!1
a.ghS().hp(0)}}}
A.a92.prototype={
dY(a){if(a.c){a.c=!1
a.ghS().hp(0)}}}
A.a98.prototype={
dY(a){}}
A.a94.prototype={
dY(a){}}
A.a93.prototype={
dY(a){}}
A.a91.prototype={
dY(a){a.uc()
if(this.a)A.aER()
A.aDj()}}
A.aik.prototype={
$2(a,b){var s=J.cE(b.getElementsByClassName("submitBtn"),t.e)
s.gH(s).click()},
$S:153}
A.a8U.prototype={
a2B(a,b){var s,r,q,p,o,n,m,l,k=B.av.fK(a)
switch(k.a){case"TextInput.setClient":s=k.b
r=J.at(s)
q=new A.a95(A.e4(r.j(s,0)),A.anN(t.a.a(r.j(s,1))))
break
case"TextInput.updateConfig":this.a.d=A.anN(t.a.a(k.b))
q=B.EZ
break
case"TextInput.setEditingState":q=new A.a97(A.ans(t.a.a(k.b)))
break
case"TextInput.show":q=B.EX
break
case"TextInput.setEditableSizeAndTransform":s=t.a.a(k.b)
r=J.at(s)
p=A.fO(t.j.a(r.j(s,"transform")),!0,t.pR)
q=new A.a96(new A.XI(A.SQ(r.j(s,"width")),A.SQ(r.j(s,"height")),new Float32Array(A.ki(p))))
break
case"TextInput.setStyle":s=t.a.a(k.b)
r=J.at(s)
o=A.e4(r.j(s,"textAlignIndex"))
n=A.e4(r.j(s,"textDirectionIndex"))
m=A.te(r.j(s,"fontWeightIndex"))
l=m!=null?A.arz(m):"normal"
q=new A.a99(new A.XJ(A.aBo(r.j(s,"fontSize")),l,A.bE(r.j(s,"fontFamily")),B.Rb[o],B.rp[n]))
break
case"TextInput.clearClient":q=B.ES
break
case"TextInput.hide":q=B.ET
break
case"TextInput.requestAutofill":q=B.EU
break
case"TextInput.finishAutofillContext":q=new A.a91(A.mf(k.b))
break
case"TextInput.setMarkedTextRect":q=B.EW
break
case"TextInput.setCaretRect":q=B.EV
break
default:$.aR().eo(b,null)
return}q.dY(this.a)
new A.a8V(b).$0()}}
A.a8V.prototype={
$0(){$.aR().eo(this.a,B.X.bL([!0]))},
$S:0}
A.a_4.prototype={
go1(a){var s=this.a
if(s===$){s!==$&&A.bm()
s=this.a=new A.a8U(this)}return s},
ghS(){var s,r,q,p,o=this,n=null,m=o.f
if(m===$){s=$.dU
if((s==null?$.dU=A.kP():s).w){s=A.azj(o)
r=s}else{s=$.c8()
if(s===B.M){q=$.dS()
q=q===B.ay}else q=!1
if(q)p=new A.a_7(o,A.a([],t.i),$,$,$,n)
else if(s===B.M)p=new A.a5i(o,A.a([],t.i),$,$,$,n)
else{if(s===B.bh){q=$.dS()
q=q===B.j0}else q=!1
if(q)p=new A.TM(o,A.a([],t.i),$,$,$,n)
else p=s===B.bQ?new A.Ys(o,A.a([],t.i),$,$,$,n):A.axb(o)}r=p}o.f!==$&&A.bm()
m=o.f=r}return m},
YU(){var s,r,q=this
q.c=!0
s=q.ghS()
r=q.d
r.toString
s.yu(0,r,new A.a_5(q),new A.a_6(q))},
uc(){var s,r=this
if(r.c){r.c=!1
r.ghS().hp(0)
r.go1(r)
s=r.b
$.aR().fW("flutter/textinput",B.av.fQ(new A.fP("TextInputClient.onConnectionClosed",[s])),A.SW())}}}
A.a_6.prototype={
$2(a,b){var s,r,q="flutter/textinput",p=this.a
if(p.d.f){p.go1(p)
p=p.b
s=t.N
r=t.z
$.aR().fW(q,B.av.fQ(new A.fP("TextInputClient.updateEditingStateWithDeltas",[p,A.aV(["deltas",A.a([A.aV(["oldText",b.a,"deltaText",b.b,"deltaStart",b.c,"deltaEnd",b.d,"selectionBase",b.e,"selectionExtent",b.f,"composingBase",b.r,"composingExtent",b.w],s,r)],t.cs)],s,r)])),A.SW())}else{p.go1(p)
p=p.b
$.aR().fW(q,B.av.fQ(new A.fP("TextInputClient.updateEditingState",[p,a.L5()])),A.SW())}},
$S:155}
A.a_5.prototype={
$1(a){var s=this.a
s.go1(s)
s=s.b
$.aR().fW("flutter/textinput",B.av.fQ(new A.fP("TextInputClient.performAction",[s,a])),A.SW())},
$S:157}
A.XJ.prototype={
dB(a){var s=this,r=a.style,q=A.aF4(s.d,s.e)
q.toString
A.r(r,"text-align",q)
A.r(r,"font",s.b+" "+A.h(s.a)+"px "+A.h(A.ahj(s.c)))},
gfV(a){return this.b}}
A.XI.prototype={
dB(a){var s=A.hb(this.c),r=a.style
A.r(r,"width",A.h(this.a)+"px")
A.r(r,"height",A.h(this.b)+"px")
A.r(r,"transform",s)}}
A.re.prototype={
i(a){return"TransformKind."+this.b}}
A.ahi.prototype={
$1(a){return"0x"+B.c.kL(B.f.hO(a,16),2,"0")},
$S:92}
A.bI.prototype={
bf(a){var s=a.a,r=this.a
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
j(a,b){return this.a[b]},
l(a,b,c){this.a[b]=c},
Av(a,b,a0,a1){var s=this.a,r=s[0],q=s[4],p=s[8],o=s[12],n=s[1],m=s[5],l=s[9],k=s[13],j=s[2],i=s[6],h=s[10],g=s[14],f=s[3],e=s[7],d=s[11],c=s[15]
s[12]=r*b+q*a0+p*a1+o
s[13]=n*b+m*a0+l*a1+k
s[14]=j*b+i*a0+h*a1+g
s[15]=f*b+e*a0+d*a1+c},
ag(a,b,c){return this.Av(a,b,c,0)},
l6(a,b,c,d){var s=c==null?b:c,r=d==null?b:d,q=this.a
q[15]=q[15]
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
q[14]=q[14]},
b1(a,b){return this.l6(a,b,null,null)},
cN(a,b,c){return this.l6(a,b,c,null)},
ir(a){var s=a.a,r=this.a,q=r[0],p=s[0],o=r[4],n=s[1],m=r[8],l=s[2],k=r[12],j=r[1],i=r[5],h=r[9],g=r[13],f=r[2],e=r[6],d=r[10],c=r[14],b=1/(r[3]*p+r[7]*n+r[11]*l+r[15])
s[0]=(q*p+o*n+m*l+k)*b
s[1]=(j*p+i*n+h*l+g)*b
s[2]=(f*p+e*n+d*l+c)*b
return a},
oL(a){var s=this.a
return s[0]===1&&s[1]===0&&s[2]===0&&s[3]===0&&s[4]===0&&s[5]===1&&s[6]===0&&s[7]===0&&s[8]===0&&s[9]===0&&s[10]===1&&s[11]===0&&s[12]===0&&s[13]===0&&s[14]===0&&s[15]===1},
KX(b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=Math.sqrt(b2.ga3z()),c=b2.a,b=c[0]/d,a=c[1]/d,a0=c[2]/d,a1=Math.cos(b3),a2=Math.sin(b3),a3=1-a1,a4=b*b*a3+a1,a5=a0*a2,a6=b*a*a3-a5,a7=a*a2,a8=b*a0*a3+a7,a9=a*b*a3+a5,b0=a*a*a3+a1
a5=b*a2
s=a*a0*a3-a5
r=a0*b*a3-a7
q=a0*a*a3+a5
p=a0*a0*a3+a1
a5=this.a
a7=a5[0]
o=a5[4]
n=a5[8]
m=a5[1]
l=a5[5]
k=a5[9]
j=a5[2]
i=a5[6]
h=a5[10]
g=a5[3]
f=a5[7]
e=a5[11]
a5[0]=a7*a4+o*a9+n*r
a5[1]=m*a4+l*a9+k*r
a5[2]=j*a4+i*a9+h*r
a5[3]=g*a4+f*a9+e*r
a5[4]=a7*a6+o*b0+n*q
a5[5]=m*a6+l*b0+k*q
a5[6]=j*a6+i*b0+h*q
a5[7]=g*a6+f*b0+e*q
a5[8]=a7*a8+o*s+n*p
a5[9]=m*a8+l*s+k*p
a5[10]=j*a8+i*s+h*p
a5[11]=g*a8+f*s+e*p},
lb(a,b,c){var s=this.a
s[14]=c
s[13]=b
s[12]=a},
i4(b5){var s,r,q,p,o=b5.a,n=o[0],m=o[1],l=o[2],k=o[3],j=o[4],i=o[5],h=o[6],g=o[7],f=o[8],e=o[9],d=o[10],c=o[11],b=o[12],a=o[13],a0=o[14],a1=o[15],a2=n*i-m*j,a3=n*h-l*j,a4=n*g-k*j,a5=m*h-l*i,a6=m*g-k*i,a7=l*g-k*h,a8=f*a-e*b,a9=f*a0-d*b,b0=f*a1-c*b,b1=e*a0-d*a,b2=e*a1-c*a,b3=d*a1-c*a0,b4=a2*b3-a3*b2+a4*b1+a5*b0-a6*a9+a7*a8
if(b4===0){this.bf(b5)
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
cY(b5,b6){var s=this.a,r=s[15],q=s[0],p=s[4],o=s[8],n=s[12],m=s[1],l=s[5],k=s[9],j=s[13],i=s[2],h=s[6],g=s[10],f=s[14],e=s[3],d=s[7],c=s[11],b=b6.a,a=b[15],a0=b[0],a1=b[4],a2=b[8],a3=b[12],a4=b[1],a5=b[5],a6=b[9],a7=b[13],a8=b[2],a9=b[6],b0=b[10],b1=b[14],b2=b[3],b3=b[7],b4=b[11]
s[0]=q*a0+p*a4+o*a8+n*b2
s[4]=q*a1+p*a5+o*a9+n*b3
s[8]=q*a2+p*a6+o*b0+n*b4
s[12]=q*a3+p*a7+o*b1+n*a
s[1]=m*a0+l*a4+k*a8+j*b2
s[5]=m*a1+l*a5+k*a9+j*b3
s[9]=m*a2+l*a6+k*b0+j*b4
s[13]=m*a3+l*a7+k*b1+j*a
s[2]=i*a0+h*a4+g*a8+f*b2
s[6]=i*a1+h*a5+g*a9+f*b3
s[10]=i*a2+h*a6+g*b0+f*b4
s[14]=i*a3+h*a7+g*b1+f*a
s[3]=e*a0+d*a4+c*a8+r*b2
s[7]=e*a1+d*a5+c*a9+r*b3
s[11]=e*a2+d*a6+c*b0+r*b4
s[15]=e*a3+d*a7+c*b1+r*a},
tm(a){var s=new A.bI(new Float32Array(16))
s.bf(this)
s.cY(0,a)
return s},
L8(a){var s=a[0],r=a[1],q=this.a
a[0]=q[0]*s+q[4]*r+q[12]
a[1]=q[1]*s+q[5]*r+q[13]},
i(a){var s=this.bo(0)
return s}}
A.oa.prototype={
fw(a,b,c){var s=this.a
s[0]=a
s[1]=b
s[2]=c},
j(a,b){return this.a[b]},
l(a,b,c){this.a[b]=c},
gm(a){var s=this.a,r=s[0],q=s[1]
s=s[2]
return Math.sqrt(r*r+q*q+s*s)},
ga3z(){var s=this.a,r=s[0],q=s[1]
s=s[2]
return r*r+q*q+s*s}}
A.EN.prototype={
Qz(a,b){var s=this,r=s.b,q=s.a
r.d.l(0,q,s)
r.e.l(0,q,B.nq)
if($.oD)s.c=A.ahq($.SU)
$.j2.push(new A.XW(s))},
gr5(){var s,r=this.c
if(r==null){if($.oD)s=$.SU
else s=B.hS
$.oD=!0
r=this.c=A.ahq(s)}return r},
nL(){var s=0,r=A.R(t.H),q,p=this,o,n,m
var $async$nL=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:m=p.c
if(m==null){if($.oD)o=$.SU
else o=B.hS
$.oD=!0
m=p.c=A.ahq(o)}if(m instanceof A.yf){s=1
break}n=m.gjK()
m=p.c
s=3
return A.G(m==null?null:m.hN(),$async$nL)
case 3:p.c=A.ap0(n)
case 1:return A.P(q,r)}})
return A.Q($async$nL,r)},
qS(){var s=0,r=A.R(t.H),q,p=this,o,n,m
var $async$qS=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:m=p.c
if(m==null){if($.oD)o=$.SU
else o=B.hS
$.oD=!0
m=p.c=A.ahq(o)}if(m instanceof A.wv){s=1
break}n=m.gjK()
m=p.c
s=3
return A.G(m==null?null:m.hN(),$async$qS)
case 3:p.c=A.aoe(n)
case 1:return A.P(q,r)}})
return A.Q($async$qS,r)},
nM(a){return this.ZM(a)},
ZM(a){var s=0,r=A.R(t.y),q,p=2,o,n=[],m=this,l,k,j
var $async$nM=A.L(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:k=m.d
j=new A.aQ(new A.a7($.a9,t.D),t.h)
m.d=j.a
s=3
return A.G(k,$async$nM)
case 3:l=!1
p=4
s=7
return A.G(a.$0(),$async$nM)
case 7:l=c
n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
J.auF(j)
s=n.pop()
break
case 6:q=l
s=1
break
case 1:return A.P(q,r)
case 2:return A.O(o,r)}})
return A.Q($async$nM,r)},
yN(a){return this.a2g(a)},
a2g(a){var s=0,r=A.R(t.y),q,p=this
var $async$yN=A.L(function(b,c){if(b===1)return A.O(c,r)
while(true)switch(s){case 0:q=p.nM(new A.XX(p,a))
s=1
break
case 1:return A.P(q,r)}})
return A.Q($async$yN,r)},
gkZ(){var s=this.b.e.j(0,this.a)
return s==null?B.nq:s},
gis(){if(this.f==null)this.HK()
var s=this.f
s.toString
return s},
HK(){var s,r,q,p,o=this,n=self.window
n=n.visualViewport
if(n!=null){s=$.dS()
if(s===B.ay){n=self.document.documentElement.clientWidth
s=self.document.documentElement.clientHeight
r=o.w
q=n*(r==null?A.b_():r)
n=o.w
p=s*(n==null?A.b_():n)}else{s=n.width
s.toString
r=o.w
q=s*(r==null?A.b_():r)
n=n.height
n.toString
s=o.w
p=n*(s==null?A.b_():s)}}else{n=self.window.innerWidth
n.toString
s=o.w
q=n*(s==null?A.b_():s)
n=self.window.innerHeight
n.toString
s=o.w
p=n*(s==null?A.b_():s)}o.f=new A.a1(q,p)},
HJ(a){var s,r,q=this,p=self.window.visualViewport
if(p!=null){s=$.dS()
if(s===B.ay&&!a){p=self.document.documentElement.clientHeight
s=q.w
r=p*(s==null?A.b_():s)}else{p=p.height
p.toString
s=q.w
r=p*(s==null?A.b_():s)}}else{p=self.window.innerHeight
p.toString
s=q.w
r=p*(s==null?A.b_():s)}q.e=new A.LZ(0,0,0,q.f.b-r)},
a3m(){var s,r,q,p,o=this
if(self.window.visualViewport!=null){s=self.window.visualViewport.height
s.toString
r=o.w
q=s*(r==null?A.b_():r)
s=self.window.visualViewport.width
s.toString
r=o.w
p=s*(r==null?A.b_():r)}else{s=self.window.innerHeight
s.toString
r=o.w
q=s*(r==null?A.b_():r)
s=self.window.innerWidth
s.toString
r=o.w
p=s*(r==null?A.b_():r)}s=o.f
if(s!=null){r=s.b
if(r!==q&&s.a!==p){s=s.a
if(!(r>s&&q<p))s=s>r&&p<q
else s=!0
if(s)return!0}}return!1}}
A.XW.prototype={
$0(){var s=this.a.c
if(s!=null)s.n()},
$S:0}
A.XX.prototype={
$0(){var s=0,r=A.R(t.y),q,p=this,o,n,m,l,k,j
var $async$$0=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:k=B.av.fK(p.b)
j=t.nV.a(k.b)
case 3:switch(k.a){case"selectMultiEntryHistory":s=5
break
case"selectSingleEntryHistory":s=6
break
case"routeUpdated":s=7
break
case"routeInformationUpdated":s=8
break
default:s=4
break}break
case 5:s=9
return A.G(p.a.qS(),$async$$0)
case 9:q=!0
s=1
break
case 6:s=10
return A.G(p.a.nL(),$async$$0)
case 10:q=!0
s=1
break
case 7:o=p.a
s=11
return A.G(o.nL(),$async$$0)
case 11:o=o.gr5()
j.toString
o.Bj(A.bE(J.aW(j,"routeName")))
q=!0
s=1
break
case 8:o=p.a.gr5()
j.toString
n=J.at(j)
m=A.bE(n.j(j,"location"))
l=n.j(j,"state")
n=A.BW(n.j(j,"replace"))
o.pK(m,n===!0,l)
q=!0
s=1
break
case 4:q=!1
s=1
break
case 1:return A.P(q,r)}})
return A.Q($async$$0,r)},
$S:160}
A.ES.prototype={
gIc(a){var s=this.w
return s==null?A.b_():s}}
A.LZ.prototype={}
A.N4.prototype={}
A.Ne.prototype={}
A.P1.prototype={
r_(a){this.BN(a)
this.ei$=a.ei$
a.ei$=null},
i9(){this.uE()
this.ei$=null}}
A.P2.prototype={
r_(a){this.BN(a)
this.ei$=a.ei$
a.ei$=null},
i9(){this.uE()
this.ei$=null}}
A.Sb.prototype={}
A.Sh.prototype={}
A.ajO.prototype={}
J.pL.prototype={
k(a,b){return a===b},
gu(a){return A.hJ(a)},
i(a){return"Instance of '"+A.a3c(a)+"'"},
G(a,b){throw A.b(A.aol(a,b.gJW(),b.gKo(),b.gK1()))},
gcE(a){return A.A(a)}}
J.vN.prototype={
i(a){return String(a)},
u4(a,b){return b||a},
Qu(a,b){return a},
gu(a){return a?519018:218159},
gcE(a){return B.a2F},
$iw:1}
J.pQ.prototype={
k(a,b){return null==b},
i(a){return"null"},
gu(a){return 0},
gcE(a){return B.a2n},
G(a,b){return this.NM(a,b)},
$iaG:1}
J.d.prototype={}
J.p.prototype={
gu(a){return 0},
gcE(a){return B.a2k},
i(a){return String(a)},
$iajK:1,
$ilK:1,
$iiI:1,
$ilN:1,
$ilM:1,
$ilL:1,
$ilO:1,
$ilP:1,
$iqL:1,
$ijK:1,
grz(a){return a.displayWidth},
grw(a){return a.displayHeight},
gjb(a){return a.duration},
gr9(a){return a.close},
bg(a){return a.close()}}
J.Ji.prototype={}
J.iO.prototype={}
J.io.prototype={
i(a){var s=a[$.Tm()]
if(s==null)return this.NW(a)
return"JavaScript function for "+A.h(J.dT(s))},
$ijs:1}
J.t.prototype={
hl(a,b){return new A.ct(a,A.ai(a).h("@<1>").T(b).h("ct<1,2>"))},
C(a,b){if(!!a.fixed$length)A.X(A.V("add"))
a.push(b)},
fo(a,b){if(!!a.fixed$length)A.X(A.V("removeAt"))
if(b<0||b>=a.length)throw A.b(A.a3k(b,null))
return a.splice(b,1)[0]},
yZ(a,b,c){if(!!a.fixed$length)A.X(A.V("insert"))
if(b<0||b>a.length)throw A.b(A.a3k(b,null))
a.splice(b,0,c)},
Ji(a,b,c){var s,r
if(!!a.fixed$length)A.X(A.V("insertAll"))
A.aoI(b,0,a.length,"index")
if(!t.he.b(c))c=J.amx(c)
s=J.bw(c)
a.length=a.length+s
r=b+s
this.aY(a,r,a.length,a,b)
this.c6(a,b,r,c)},
fp(a){if(!!a.fixed$length)A.X(A.V("removeLast"))
if(a.length===0)throw A.b(A.oH(a,-1))
return a.pop()},
t(a,b){var s
if(!!a.fixed$length)A.X(A.V("remove"))
for(s=0;s<a.length;++s)if(J.f(a[s],b)){a.splice(s,1)
return!0}return!1},
qG(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.bu(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
I(a,b){var s
if(!!a.fixed$length)A.X(A.V("addAll"))
if(Array.isArray(b)){this.QZ(a,b)
return}for(s=J.ao(b);s.q();)a.push(s.gB(s))},
QZ(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.bu(a))
for(s=0;s<r;++s)a.push(b[s])},
L(a){if(!!a.fixed$length)A.X(A.V("clear"))
a.length=0},
R(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw A.b(A.bu(a))}},
io(a,b,c){return new A.aq(a,b,A.ai(a).h("@<1>").T(c).h("aq<1,2>"))},
b0(a,b){var s,r=A.bn(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.h(a[s])
return r.join(b)},
z9(a){return this.b0(a,"")},
hM(a,b){return A.eB(a,0,A.cP(b,"count",t.S),A.ai(a).c)},
fz(a,b){return A.eB(a,b,null,A.ai(a).c)},
yH(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.b(A.bu(a))}return s},
oD(a,b,c){return this.yH(a,b,c,t.z)},
ky(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.bu(a))}throw A.b(A.bs())},
jl(a,b){return this.ky(a,b,null)},
mz(a,b,c){var s,r,q=a.length
for(s=q-1;s>=0;--s){r=a[s]
if(b.$1(r))return r
if(q!==a.length)throw A.b(A.bu(a))}if(c!=null)return c.$0()
throw A.b(A.bs())},
a3w(a,b){return this.mz(a,b,null)},
aq(a,b){return a[b]},
bw(a,b,c){if(b<0||b>a.length)throw A.b(A.bC(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.bC(c,b,a.length,"end",null))
if(b===c)return A.a([],A.ai(a))
return A.a(a.slice(b,c),A.ai(a))},
d0(a,b){return this.bw(a,b,null)},
pB(a,b,c){A.dw(b,c,a.length)
return A.eB(a,b,c,A.ai(a).c)},
gH(a){if(a.length>0)return a[0]
throw A.b(A.bs())},
gM(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.bs())},
gbX(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.bs())
throw A.b(A.axk())},
aY(a,b,c,d,e){var s,r,q,p,o
if(!!a.immutable$list)A.X(A.V("setRange"))
A.dw(b,c,a.length)
s=c-b
if(s===0)return
A.dv(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.TD(d,e).cF(0,!1)
q=0}p=J.at(r)
if(q+s>p.gm(r))throw A.b(A.anP())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.j(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.j(r,q+o)},
c6(a,b,c,d){return this.aY(a,b,c,d,0)},
f4(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.bu(a))}return!1},
md(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.bu(a))}return!0},
ds(a,b){if(!!a.immutable$list)A.X(A.V("sort"))
A.azD(a,b==null?J.alc():b)},
fA(a){return this.ds(a,null)},
ek(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.f(a[s],b))return s
return-1},
ta(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q>=r
for(s=q;s>=0;--s)if(J.f(a[s],b))return s
return-1},
v(a,b){var s
for(s=0;s<a.length;++s)if(J.f(a[s],b))return!0
return!1},
gO(a){return a.length===0},
gbE(a){return a.length!==0},
i(a){return A.vK(a,"[","]")},
cF(a,b){var s=A.ai(a)
return b?A.a(a.slice(0),s):J.pO(a.slice(0),s.c)},
e_(a){return this.cF(a,!0)},
hP(a){return A.nl(a,A.ai(a).c)},
gP(a){return new J.f6(a,a.length,A.ai(a).h("f6<1>"))},
gu(a){return A.hJ(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.X(A.V("set length"))
if(b<0)throw A.b(A.bC(b,0,null,"newLength",null))
if(b>a.length)A.ai(a).c.a(null)
a.length=b},
j(a,b){if(!(b>=0&&b<a.length))throw A.b(A.oH(a,b))
return a[b]},
l(a,b,c){if(!!a.immutable$list)A.X(A.V("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.oH(a,b))
a[b]=c},
X(a,b){var s=A.as(a,!0,A.ai(a).c)
this.I(s,b)
return s},
a2Z(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
$ib2:1,
$iY:1,
$io:1,
$ix:1}
J.a_V.prototype={}
J.f6.prototype={
gB(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.K(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iaI:1}
J.l6.prototype={
b4(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gt5(b)
if(this.gt5(a)===s)return 0
if(this.gt5(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gt5(a){return a===0?1/a<0:a<0},
guk(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
dZ(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.V(""+a+".toInt()"))},
dh(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.V(""+a+".ceil()"))},
dE(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.V(""+a+".floor()"))},
bk(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.V(""+a+".round()"))},
jH(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
kg(a,b,c){if(this.b4(b,c)>0)throw A.b(A.mk(b))
if(this.b4(a,b)<0)return b
if(this.b4(a,c)>0)return c
return a},
J(a,b){var s
if(b>20)throw A.b(A.bC(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gt5(a))return"-"+s
return s},
hO(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.bC(b,2,36,"radix",null))
s=a.toString(b)
if(B.c.aE(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.X(A.V("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.c.a7("0",q)},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
X(a,b){return a+b},
a9(a,b){return a-b},
a7(a,b){return a*b},
d_(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
h8(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.Gb(a,b)},
br(a,b){return(a|0)===a?a/b|0:this.Gb(a,b)},
Gb(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.V("Result of truncating division is "+A.h(s)+": "+A.h(a)+" ~/ "+A.h(b)))},
My(a,b){if(b<0)throw A.b(A.mk(b))
return b>31?0:a<<b>>>0},
YG(a,b){return b>31?0:a<<b>>>0},
de(a,b){var s
if(a>0)s=this.FY(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
YL(a,b){if(0>b)throw A.b(A.mk(b))
return this.FY(a,b)},
FY(a,b){return b>31?0:a>>>b},
M4(a,b){return a<=b},
gcE(a){return B.a2I},
$ibL:1,
$iI:1,
$ibG:1}
J.pP.prototype={
guk(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
gcE(a){return B.a2H},
$ij:1}
J.vP.prototype={
gcE(a){return B.a2G}}
J.im.prototype={
aE(a,b){if(b<0)throw A.b(A.oH(a,b))
if(b>=a.length)A.X(A.oH(a,b))
return a.charCodeAt(b)},
a4(a,b){if(b>=a.length)throw A.b(A.oH(a,b))
return a.charCodeAt(b)},
xq(a,b,c){var s=b.length
if(c>s)throw A.b(A.bC(c,0,s,null,null))
return new A.QX(b,a,c)},
xp(a,b){return this.xq(a,b,0)},
X(a,b){return a+b},
jc(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.bB(a,r-s)},
Ai(a,b,c){A.aoI(0,0,a.length,"startIndex")
return A.aEZ(a,b,c,0)},
ML(a,b){if(typeof b=="string")return A.a(a.split(b),t.s)
else if(b instanceof A.pR&&b.gWw().exec("").length-2===0)return A.a(a.split(b.b),t.s)
else return this.SC(a,b)},
kS(a,b,c,d){var s=A.dw(b,c,a.length)
return A.asc(a,b,s,d)},
SC(a,b){var s,r,q,p,o,n,m=A.a([],t.s)
for(s=J.amp(b,a),s=s.gP(s),r=0,q=1;s.q();){p=s.gB(s)
o=p.gBs(p)
n=p.geC(p)
q=n-o
if(q===0&&r===o)continue
m.push(this.U(a,r,o))
r=n}if(r<a.length||q>0)m.push(this.bB(a,r))
return m},
c1(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.bC(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
bb(a,b){return this.c1(a,b,0)},
U(a,b,c){return a.substring(b,A.dw(b,c,a.length))},
bB(a,b){return this.U(a,b,null)},
a5n(a){return a.toLowerCase()},
mQ(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.a4(p,0)===133){s=J.ajL(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.aE(p,r)===133?J.ajM(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a5w(a){var s,r
if(typeof a.trimLeft!="undefined"){s=a.trimLeft()
if(s.length===0)return s
r=this.a4(s,0)===133?J.ajL(s,1):0}else{r=J.ajL(a,0)
s=a}if(r===0)return s
if(r===s.length)return""
return s.substring(r)},
Aw(a){var s,r,q
if(typeof a.trimRight!="undefined"){s=a.trimRight()
r=s.length
if(r===0)return s
q=r-1
if(this.aE(s,q)===133)r=J.ajM(s,q)}else{r=J.ajM(a,a.length)
s=a}if(r===s.length)return s
if(r===0)return""
return s.substring(0,r)},
a7(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.EJ)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
kL(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a7(c,s)+a},
jt(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.bC(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ek(a,b){return this.jt(a,b,0)},
JI(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.bC(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
ta(a,b){return this.JI(a,b,null)},
rb(a,b,c){var s=a.length
if(c>s)throw A.b(A.bC(c,0,s,null,null))
return A.aio(a,b,c)},
v(a,b){return this.rb(a,b,0)},
b4(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i(a){return a},
gu(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gcE(a){return B.mi},
gm(a){return a.length},
j(a,b){if(!(b>=0&&b<a.length))throw A.b(A.oH(a,b))
return a[b]},
$ib2:1,
$ibL:1,
$il:1}
A.k2.prototype={
gP(a){var s=A.m(this)
return new A.ua(J.ao(this.geY()),s.h("@<1>").T(s.z[1]).h("ua<1,2>"))},
gm(a){return J.bw(this.geY())},
gO(a){return J.i4(this.geY())},
gbE(a){return J.Cg(this.geY())},
fz(a,b){var s=A.m(this)
return A.hj(J.TD(this.geY(),b),s.c,s.z[1])},
hM(a,b){var s=A.m(this)
return A.hj(J.amw(this.geY(),b),s.c,s.z[1])},
aq(a,b){return A.m(this).z[1].a(J.Cf(this.geY(),b))},
gH(a){return A.m(this).z[1].a(J.TB(this.geY()))},
gM(a){return A.m(this).z[1].a(J.Ci(this.geY()))},
v(a,b){return J.aiV(this.geY(),b)},
i(a){return J.dT(this.geY())}}
A.ua.prototype={
q(){return this.a.q()},
gB(a){var s=this.a
return this.$ti.z[1].a(s.gB(s))},
$iaI:1}
A.mL.prototype={
geY(){return this.a}}
A.zH.prototype={$iY:1}
A.zm.prototype={
j(a,b){return this.$ti.z[1].a(J.aW(this.a,b))},
l(a,b,c){J.d_(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.av1(this.a,b)},
C(a,b){J.hd(this.a,this.$ti.c.a(b))},
t(a,b){return J.mu(this.a,b)},
fp(a){return this.$ti.z[1].a(J.auZ(this.a))},
pB(a,b,c){var s=this.$ti
return A.hj(J.auN(this.a,b,c),s.c,s.z[1])},
aY(a,b,c,d,e){var s=this.$ti
J.av2(this.a,b,c,A.hj(d,s.z[1],s.c),e)},
c6(a,b,c,d){return this.aY(a,b,c,d,0)},
$iY:1,
$ix:1}
A.ct.prototype={
hl(a,b){return new A.ct(this.a,this.$ti.h("@<1>").T(b).h("ct<1,2>"))},
geY(){return this.a}}
A.mM.prototype={
kf(a,b,c){var s=this.$ti
return new A.mM(this.a,s.h("@<1>").T(s.z[1]).T(b).T(c).h("mM<1,2,3,4>"))},
V(a,b){return J.e8(this.a,b)},
j(a,b){return this.$ti.h("4?").a(J.aW(this.a,b))},
l(a,b,c){var s=this.$ti
J.d_(this.a,s.c.a(b),s.z[1].a(c))},
bm(a,b,c){var s=this.$ti
return s.z[3].a(J.Cj(this.a,s.c.a(b),new A.Ve(this,c)))},
t(a,b){return this.$ti.h("4?").a(J.mu(this.a,b))},
R(a,b){J.oL(this.a,new A.Vd(this,b))},
gbh(a){var s=this.$ti
return A.hj(J.Ch(this.a),s.c,s.z[2])},
gaR(a){var s=this.$ti
return A.hj(J.amt(this.a),s.z[1],s.z[3])},
gm(a){return J.bw(this.a)},
gO(a){return J.i4(this.a)},
gbE(a){return J.Cg(this.a)},
gfR(a){var s=J.amr(this.a)
return s.io(s,new A.Vc(this),this.$ti.h("bP<3,4>"))}}
A.Ve.prototype={
$0(){return this.a.$ti.z[1].a(this.b.$0())},
$S(){return this.a.$ti.h("2()")}}
A.Vd.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.z[2].a(a),s.z[3].a(b))},
$S(){return this.a.$ti.h("~(1,2)")}}
A.Vc.prototype={
$1(a){var s=this.a.$ti,r=s.z[3]
return new A.bP(s.z[2].a(a.gdV(a)),r.a(a.gp(a)),s.h("@<3>").T(r).h("bP<1,2>"))},
$S(){return this.a.$ti.h("bP<3,4>(bP<1,2>)")}}
A.hA.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.mP.prototype={
gm(a){return this.a.length},
j(a,b){return B.c.aE(this.a,b)}}
A.aia.prototype={
$0(){return A.bZ(null,t.P)},
$S:42}
A.a6q.prototype={}
A.Y.prototype={}
A.aL.prototype={
gP(a){var s=this
return new A.b1(s,s.gm(s),A.m(s).h("b1<aL.E>"))},
R(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){b.$1(r.aq(0,s))
if(q!==r.gm(r))throw A.b(A.bu(r))}},
gO(a){return this.gm(this)===0},
gH(a){if(this.gm(this)===0)throw A.b(A.bs())
return this.aq(0,0)},
gM(a){var s=this
if(s.gm(s)===0)throw A.b(A.bs())
return s.aq(0,s.gm(s)-1)},
v(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.f(r.aq(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.bu(r))}return!1},
f4(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(b.$1(r.aq(0,s)))return!0
if(q!==r.gm(r))throw A.b(A.bu(r))}return!1},
jl(a,b){var s,r,q=this,p=q.gm(q)
for(s=0;s<p;++s){r=q.aq(0,s)
if(b.$1(r))return r
if(p!==q.gm(q))throw A.b(A.bu(q))}throw A.b(A.bs())},
b0(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.h(p.aq(0,0))
if(o!==p.gm(p))throw A.b(A.bu(p))
for(r=s,q=1;q<o;++q){r=r+b+A.h(p.aq(0,q))
if(o!==p.gm(p))throw A.b(A.bu(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.h(p.aq(0,q))
if(o!==p.gm(p))throw A.b(A.bu(p))}return r.charCodeAt(0)==0?r:r}},
tV(a,b){return this.uA(0,b)},
io(a,b,c){return new A.aq(this,b,A.m(this).h("@<aL.E>").T(c).h("aq<1,2>"))},
KG(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.bs())
s=q.aq(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.aq(0,r))
if(p!==q.gm(q))throw A.b(A.bu(q))}return s},
yH(a,b,c){var s,r,q=this,p=q.gm(q)
for(s=b,r=0;r<p;++r){s=c.$2(s,q.aq(0,r))
if(p!==q.gm(q))throw A.b(A.bu(q))}return s},
oD(a,b,c){return this.yH(a,b,c,t.z)},
fz(a,b){return A.eB(this,b,null,A.m(this).h("aL.E"))},
hM(a,b){return A.eB(this,0,A.cP(b,"count",t.S),A.m(this).h("aL.E"))},
cF(a,b){return A.as(this,b,A.m(this).h("aL.E"))},
e_(a){return this.cF(a,!0)},
hP(a){var s,r=this,q=A.lb(A.m(r).h("aL.E"))
for(s=0;s<r.gm(r);++s)q.C(0,r.aq(0,s))
return q}}
A.eA.prototype={
ng(a,b,c,d){var s,r=this.b
A.dv(r,"start")
s=this.c
if(s!=null){A.dv(s,"end")
if(r>s)throw A.b(A.bC(r,0,s,"start",null))}},
gSY(){var s=J.bw(this.a),r=this.c
if(r==null||r>s)return s
return r},
gYW(){var s=J.bw(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.bw(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
aq(a,b){var s=this,r=s.gYW()+b
if(b<0||r>=s.gSY())thr