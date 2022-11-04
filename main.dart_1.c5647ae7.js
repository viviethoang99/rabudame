l+2&&B.c.c1(a3,"/..",k-3)
else g=!0
if(g){h=a2
i=!1}else{if(o===a4+4)if(B.c.c1(a3,"file",a4)){if(n<=a4){if(!B.c.c1(a3,"/",l)){f="file:///"
r=3}else{f="file://"
r=2}a3=f+B.c.U(a3,l,a5)
o-=a4
s=r-a4
k+=s
j+=s
a5=a3.length
a4=0
n=7
m=7
l=7}else if(l===k)if(a4===0&&!0){a3=B.c.kS(a3,l,k,"/");++k;++j;++a5}else{a3=B.c.U(a3,a4,l)+"/"+B.c.U(a3,k,a5)
o-=a4
n-=a4
m-=a4
l-=a4
s=1-a4
k+=s
j+=s
a5=a3.length
a4=0}h="file"}else if(B.c.c1(a3,"http",a4)){if(p&&m+3===l&&B.c.c1(a3,"80",m+1))if(a4===0&&!0){a3=B.c.kS(a3,m,l,"")
l-=3
k-=3
j-=3
a5-=3}else{a3=B.c.U(a3,a4,m)+B.c.U(a3,l,a5)
o-=a4
n-=a4
m-=a4
s=3+a4
l-=s
k-=s
j-=s
a5=a3.length
a4=0}h="http"}else h=a2
else if(o===s&&B.c.c1(a3,"https",a4)){if(p&&m+4===l&&B.c.c1(a3,"443",m+1))if(a4===0&&!0){a3=B.c.kS(a3,m,l,"")
l-=4
k-=4
j-=4
a5-=3}else{a3=B.c.U(a3,a4,m)+B.c.U(a3,l,a5)
o-=a4
n-=a4
m-=a4
s=4+a4
l-=s
k-=s
j-=s
a5=a3.length
a4=0}h="https"}else h=a2
i=!0}}}}else h=a2
if(i){if(a4>0||a5<a3.length){a3=B.c.U(a3,a4,a5)
o-=a4
n-=a4
m-=a4
l-=a4
k-=a4
j-=a4}return new A.h8(a3,o,n,m,l,k,j,h)}if(h==null)if(o>a4)h=A.aBf(a3,a4,o)
else{if(o===a4)A.tb(a3,a4,"Invalid empty scheme")
h=""}if(n>a4){e=o+3
d=e<n?A.aqc(a3,e,n-1):""
c=A.aq9(a3,n,m,!1)
s=m+1
if(s<l){b=A.ak7(B.c.U(a3,s,l),a2)
a=A.akU(b==null?A.X(A.bO("Invalid port",a3,s)):b,h)}else a=a2}else{a=a2
c=a
d=""}a0=A.aqa(a3,l,k,a2,h,c!=null)
a1=k<j?A.aqb(a3,k+1,j,a2):a2
return A.afA(h,d,c,a,a0,a1,j<a5?A.aq8(a3,j+1,a5):a2)},
apu(a){var s,r,q=0,p=null
try{s=A.jZ(a,q,p)
return s}catch(r){if(t.Bj.b(A.ab(r)))return null
else throw r}},
aAe(a){return A.aBj(a,0,a.length,B.Y,!1)},
aAd(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new A.a9z(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=B.c.aE(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=A.fy(B.c.U(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=A.fy(B.c.U(a,r,c),null)
if(o>255)k.$2(l,r)
j[q]=o
return j},
apt(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=new A.a9A(a),c=new A.a9B(d,a)
if(a.length<2)d.$2("address is too short",e)
s=A.a([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=B.c.aE(a,r)
if(n===58){if(r===b){++r
if(B.c.aE(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$2("too few parts",e)
m=q===a0
l=B.b.gM(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=A.aAd(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$2("an address with a wildcard must have less than 7 parts",e)}else if(s.length!==8)d.$2("an address without a wildcard must contain exactly 8 parts",e)
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){j[h]=0
j[h+1]=0
h+=2}else{j[h]=B.f.de(g,8)
j[h+1]=g&255
h+=2}}return j},
afA(a,b,c,d,e,f,g){return new A.Bz(a,b,c,d,e,f,g)},
aq3(a){var s,r,q=null,p=A.aqc(q,0,0),o=A.aq9(q,0,0,!1),n=A.aqb(q,0,0,q),m=A.aq8(q,0,0),l=A.akU(q,"")
if(o==null)s=p.length!==0||l!=null||!1
else s=!1
if(s)o=""
s=o==null
r=!s
a=A.aqa(a,0,a.length,q,"",r)
if(s&&!B.c.bb(a,"/"))a=A.akW(a,r)
else a=A.ke(a)
return A.afA("",p,s&&B.c.bb(a,"//")?"":o,l,a,n,m)},
aq5(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
tb(a,b,c){throw A.b(A.bO(c,a,b))},
aBb(a,b){var s,r,q,p,o
for(s=a.length,r=0;r<s;++r){q=a[r]
p=J.at(q)
o=p.gm(q)
if(0>o)A.X(A.bC(0,0,p.gm(q),null,null))
if(A.aio(q,"/",0)){s=A.V("Illegal path character "+A.h(q))
throw A.b(s)}}},
aq4(a,b,c){var s,r,q,p,o
for(s=A.eB(a,c,null,A.ai(a).c),r=s.$ti,s=new A.b1(s,s.gm(s),r.h("b1<aL.E>")),r=r.h("aL.E");s.q();){q=s.d
if(q==null)q=r.a(q)
p=A.de('["*/:<>?\\\\|]',!0)
o=q.length
if(A.aio(q,p,0)){s=A.V("Illegal character in path: "+q)
throw A.b(s)}}},
aBc(a,b){var s
if(!(65<=a&&a<=90))s=97<=a&&a<=122
else s=!0
if(s)return
s=A.V("Illegal drive letter "+A.apb(a))
throw A.b(s)},
akU(a,b){if(a!=null&&a===A.aq5(b))return null
return a},
aq9(a,b,c,d){var s,r,q,p,o,n
if(a==null)return null
if(b===c)return""
if(B.c.aE(a,b)===91){s=c-1
if(B.c.aE(a,s)!==93)A.tb(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=A.aBd(a,r,s)
if(q<s){p=q+1
o=A.aqf(a,B.c.c1(a,"25",p)?q+3:p,s,"%25")}else o=""
A.apt(a,r,q)
return B.c.U(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(B.c.aE(a,n)===58){q=B.c.jt(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=A.aqf(a,B.c.c1(a,"25",p)?q+3:p,c,"%25")}else o=""
A.apt(a,b,q)
return"["+B.c.U(a,b,q)+o+"]"}return A.aBh(a,b,c)},
aBd(a,b,c){var s=B.c.jt(a,"%",b)
return s>=b&&s<c?s:c},
aqf(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.bS(d):null
for(s=b,r=s,q=!0;s<c;){p=B.c.aE(a,s)
if(p===37){o=A.akV(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.bS("")
m=i.a+=B.c.U(a,r,s)
if(n)o=B.c.U(a,s,s+3)
else if(o==="%")A.tb(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(B.fo[p>>>4]&1<<(p&15))!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.bS("")
if(r<s){i.a+=B.c.U(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=B.c.aE(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=B.c.U(a,r,s)
if(i==null){i=new A.bS("")
n=i}else n=i
n.a+=j
n.a+=A.akT(p)
s+=k
r=s}}if(i==null)return B.c.U(a,b,c)
if(r<c)i.a+=B.c.U(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
aBh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=B.c.aE(a,s)
if(o===37){n=A.akV(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.bS("")
l=B.c.U(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=B.c.U(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(B.QY[o>>>4]&1<<(o&15))!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.bS("")
if(r<s){q.a+=B.c.U(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(B.oK[o>>>4]&1<<(o&15))!==0)A.tb(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=B.c.aE(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=B.c.U(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.bS("")
m=q}else m=q
m.a+=l
m.a+=A.akT(o)
s+=j
r=s}}if(q==null)return B.c.U(a,b,c)
if(r<c){l=B.c.U(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
aBf(a,b,c){var s,r,q
if(b===c)return""
if(!A.aq7(B.c.a4(a,b)))A.tb(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=B.c.a4(a,s)
if(!(q<128&&(B.qv[q>>>4]&1<<(q&15))!==0))A.tb(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.c.U(a,b,c)
return A.aBa(r?a.toLowerCase():a)},
aBa(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
aqc(a,b,c){if(a==null)return""
return A.BA(a,b,c,B.PM,!1,!1)},
aqa(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.BA(a,b,c,B.ut,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.c.bb(s,"/"))s="/"+s
return A.aBg(s,e,f)},
aBg(a,b,c){var s=b.length===0
if(s&&!c&&!B.c.bb(a,"/")&&!B.c.bb(a,"\\"))return A.akW(a,!s||c)
return A.ke(a)},
aqb(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw A.b(A.bT("Both query and queryParameters specified",null))
return A.BA(a,b,c,B.f1,!0,!1)}if(d==null)return null
s=new A.bS("")
r.a=""
d.R(0,new A.afB(new A.afC(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
aq8(a,b,c){if(a==null)return null
return A.BA(a,b,c,B.f1,!0,!1)},
akV(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=B.c.aE(a,b+1)
r=B.c.aE(a,n)
q=A.ahJ(s)
p=A.ahJ(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(B.fo[B.f.de(o,4)]&1<<(o&15))!==0)return A.fU(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.c.U(a,b,b+3).toUpperCase()
return null},
akT(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=B.c.a4(n,a>>>4)
s[2]=B.c.a4(n,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.f.YL(a,6*q)&63|r
s[p]=37
s[p+1]=B.c.a4(n,o>>>4)
s[p+2]=B.c.a4(n,o&15)
p+=3}}return A.yw(s,0,null)},
BA(a,b,c,d,e,f){var s=A.aqe(a,b,c,d,e,f)
return s==null?B.c.U(a,b,c):s},
aqe(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null
for(s=!e,r=b,q=r,p=i;r<c;){o=B.c.aE(a,r)
if(o<127&&(d[o>>>4]&1<<(o&15))!==0)++r
else{if(o===37){n=A.akV(a,r,!1)
if(n==null){r+=3
continue}if("%"===n){n="%25"
m=1}else m=3}else if(o===92&&f){n="/"
m=1}else if(s&&o<=93&&(B.oK[o>>>4]&1<<(o&15))!==0){A.tb(a,r,"Invalid character")
m=i
n=m}else{if((o&64512)===55296){l=r+1
if(l<c){k=B.c.aE(a,l)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
m=2}else m=1}else m=1}else m=1
n=A.akT(o)}if(p==null){p=new A.bS("")
l=p}else l=p
j=l.a+=B.c.U(a,q,r)
l.a=j+A.h(n)
r+=m
q=r}}if(p==null)return i
if(q<c)p.a+=B.c.U(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
aqd(a){if(B.c.bb(a,"."))return!0
return B.c.ek(a,"/.")!==-1},
ke(a){var s,r,q,p,o,n
if(!A.aqd(a))return a
s=A.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.f(n,"..")){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return B.b.b0(s,"/")},
akW(a,b){var s,r,q,p,o,n
if(!A.aqd(a))return!b?A.aq6(a):a
s=A.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&B.b.gM(s)!==".."){s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)r=r===1&&s[0].length===0
else r=!0
if(r)return"./"
if(p||B.b.gM(s)==="..")s.push("")
if(!b)s[0]=A.aq6(s[0])
return B.b.b0(s,"/")},
aq6(a){var s,r,q=a.length
if(q>=2&&A.aq7(B.c.a4(a,0)))for(s=1;s<q;++s){r=B.c.a4(a,s)
if(r===58)return B.c.U(a,0,s)+"%3A"+B.c.bB(a,s+1)
if(r>127||(B.qv[r>>>4]&1<<(r&15))===0)break}return a},
aBi(a,b){if(a.a3n("package")&&a.c==null)return A.ar_(b,0,b.length)
return-1},
aqg(a){var s,r,q,p=a.gjB(),o=p.length
if(o>0&&J.bw(p[0])===2&&J.amq(p[0],1)===58){A.aBc(J.amq(p[0],0),!1)
A.aq4(p,!1,1)
s=!0}else{A.aq4(p,!1,0)
s=!1}r=a.grX()&&!s?""+"\\":""
if(a.goJ()){q=a.gjs(a)
if(q.length!==0)r=r+"\\"+q+"\\"}r=A.Le(r,p,"\\")
o=s&&o===1?r+"\\":r
return o.charCodeAt(0)==0?o:o},
aBe(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=B.c.a4(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.bT("Invalid URL encoding",null))}}return s},
aBj(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=B.c.a4(a,o)
if(r<=127)if(r!==37)q=!1
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(B.Y!==d)q=!1
else q=!0
if(q)return B.c.U(a,b,c)
else p=new A.mP(B.c.U(a,b,c))}else{p=A.a([],t.t)
for(q=a.length,o=b;o<c;++o){r=B.c.a4(a,o)
if(r>127)throw A.b(A.bT("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.bT("Truncated URI",null))
p.push(A.aBe(a,o+1))
o+=2}else p.push(r)}}return d.d2(0,p)},
aq7(a){var s=a|32
return 97<=s&&s<=122},
aps(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.a([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=B.c.a4(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.bO(k,a,r))}}if(q<0&&r>b)throw A.b(A.bO(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=B.c.a4(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.gM(j)
if(p!==44||r!==n+7||!B.c.c1(a,"base64",n+1))throw A.b(A.bO("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.E5.a3Z(0,a,m,s)
else{l=A.aqe(a,m,s,B.f1,!0,!1)
if(l!=null)a=B.c.kS(a,m,s,l)}return new A.a9y(a,j,c)},
aBM(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="\\",i="?",h="#",g="/\\",f=J.l5(22,t.r)
for(s=0;s<22;++s)f[s]=new Uint8Array(96)
r=new A.agg(f)
q=new A.agh()
p=new A.agi()
o=r.$2(0,225)
q.$3(o,n,1)
q.$3(o,m,14)
q.$3(o,l,34)
q.$3(o,k,3)
q.$3(o,j,227)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(14,225)
q.$3(o,n,1)
q.$3(o,m,15)
q.$3(o,l,34)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(15,225)
q.$3(o,n,1)
q.$3(o,"%",225)
q.$3(o,l,34)
q.$3(o,k,9)
q.$3(o,j,233)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(1,225)
q.$3(o,n,1)
q.$3(o,l,34)
q.$3(o,k,10)
q.$3(o,j,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(2,235)
q.$3(o,n,139)
q.$3(o,k,131)
q.$3(o,j,131)
q.$3(o,m,146)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(3,235)
q.$3(o,n,11)
q.$3(o,k,68)
q.$3(o,j,68)
q.$3(o,m,18)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(4,229)
q.$3(o,n,5)
p.$3(o,"AZ",229)
q.$3(o,l,102)
q.$3(o,"@",68)
q.$3(o,"[",232)
q.$3(o,k,138)
q.$3(o,j,138)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(5,229)
q.$3(o,n,5)
p.$3(o,"AZ",229)
q.$3(o,l,102)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,138)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(6,231)
p.$3(o,"19",7)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,138)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(7,231)
p.$3(o,"09",7)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,138)
q.$3(o,i,172)
q.$3(o,h,205)
q.$3(r.$2(8,8),"]",5)
o=r.$2(9,235)
q.$3(o,n,11)
q.$3(o,m,16)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(16,235)
q.$3(o,n,11)
q.$3(o,m,17)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(17,235)
q.$3(o,n,11)
q.$3(o,k,9)
q.$3(o,j,233)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(10,235)
q.$3(o,n,11)
q.$3(o,m,18)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(18,235)
q.$3(o,n,11)
q.$3(o,m,19)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(19,235)
q.$3(o,n,11)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(11,235)
q.$3(o,n,11)
q.$3(o,k,10)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(12,236)
q.$3(o,n,12)
q.$3(o,i,12)
q.$3(o,h,205)
o=r.$2(13,237)
q.$3(o,n,13)
q.$3(o,i,13)
p.$3(r.$2(20,245),"az",21)
o=r.$2(21,245)
p.$3(o,"az",21)
p.$3(o,"09",21)
q.$3(o,"+-.",21)
return f},
aqX(a,b,c,d,e){var s,r,q,p,o=$.au5()
for(s=b;s<c;++s){r=o[d]
q=B.c.a4(a,s)^96
p=r[q>95?31:q]
d=p&31
e[p>>>5]=s}return d},
apW(a){if(a.b===7&&B.c.bb(a.a,"package")&&a.c<=0)return A.ar_(a.a,a.e,a.f)
return-1},
ar_(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=B.c.aE(a,s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
aBv(a,b,c){var s,r,q,p,o,n,m
for(s=a.length,r=0,q=0;q<s;++q){p=B.c.a4(a,q)
o=B.c.a4(b,c+q)
n=p^o
if(n!==0){if(n===32){m=o|n
if(97<=m&&m<=122){r=32
continue}}return-1}}return r},
ah9:function ah9(a){this.a=a},
a1X:function a1X(a,b){this.a=a
this.b=b},
bL:function bL(){},
cA:function cA(a,b){this.a=a
this.b=b},
aH:function aH(a){this.a=a},
zK:function zK(){},
by:function by(){},
mB:function mB(a){this.a=a},
lZ:function lZ(){},
Iy:function Iy(){},
hf:function hf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qn:function qn(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
FN:function FN(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
It:function It(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
LL:function LL(a){this.a=a},
rg:function rg(a){this.a=a},
fZ:function fZ(a){this.a=a},
DI:function DI(a){this.a=a},
IJ:function IJ(){},
yr:function yr(){},
DU:function DU(a){this.a=a},
zL:function zL(a){this.a=a},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
aI:function aI(){},
bP:function bP(a,b,c){this.a=a
this.b=b
this.$ti=c},
aG:function aG(){},
B:function B(){},
R0:function R0(){},
ys:function ys(){this.b=this.a=0},
Kj:function Kj(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
bS:function bS(a){this.a=a},
a9z:function a9z(a){this.a=a},
a9A:function a9A(a){this.a=a},
a9B:function a9B(a,b){this.a=a
this.b=b},
Bz:function Bz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
afC:function afC(a,b){this.a=a
this.b=b},
afB:function afB(a){this.a=a},
a9y:function a9y(a,b,c){this.a=a
this.b=b
this.c=c},
agg:function agg(a){this.a=a},
agh:function agh(){},
agi:function agi(){},
h8:function h8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
N_:function N_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
pt:function pt(a,b){this.a=a
this.$ti=b},
azk(a){A.cP(a,"result",t.N)
return new A.nS()},
aEQ(a,b){A.cP(a,"method",t.N)
if(!B.c.bb(a,"ext."))throw A.b(A.hg(a,"method","Must begin with ext."))
if($.aqw.j(0,a)!=null)throw A.b(A.bT("Extension already registered: "+a,null))
A.cP(b,"handler",t.DT)
$.aqw.l(0,a,b)},
aEO(a,b){return},
akv(a,b,c){A.oP(a,"name")
$.akt.push(null)
return},
aku(){var s,r
if($.akt.length===0)throw A.b(A.a6("Uneven calls to startSync and finishSync"))
s=$.akt.pop()
if(s==null)return
s.ga64()
r=s.d
if(r!=null){A.h(r.b)
A.aqk(null)}},
aqk(a){if(a==null||a.a===0)return"{}"
return B.b3.on(a)},
nS:function nS(){},
Ly:function Ly(a,b,c){this.a=a
this.c=b
this.d=c},
arr(){return document},
aAy(a,b,c,d,e){var s=c==null?null:A.ar4(new A.abJ(c),t.j3)
s=new A.Nr(a,b,s,!1,e.h("Nr<0>"))
s.wZ()
return s},
aBL(a){if(t.ik.b(a))return a
return new A.M2([],[]).HS(a,!0)},
aAw(a){if(a===window)return a
else return new A.MY(a)},
ar4(a,b){var s=$.a9
if(s===B.a5)return a
return s.Hm(a,b)},
ap:function ap(){},
Cm:function Cm(){},
Cp:function Cp(){},
Cw:function Cw(){},
ky:function ky(){},
i9:function i9(){},
DL:function DL(){},
bM:function bM(){},
pb:function pb(){},
VR:function VR(){},
et:function et(){},
hm:function hm(){},
DM:function DM(){},
DN:function DN(){},
DV:function DV(){},
jl:function jl(){},
Er:function Er(){},
uN:function uN(){},
uO:function uO(){},
Ey:function Ey(){},
EB:function EB(){},
al:function al(){},
ad:function ad(){},
a3:function a3(){},
eu:function eu(){},
pu:function pu(){},
F3:function F3(){},
Fq:function Fq(){},
eO:function eO(){},
FE:function FE(){},
n9:function n9(){},
kX:function kX(){},
na:function na(){},
pF:function pF(){},
Gj:function Gj(){},
I8:function I8(){},
q6:function q6(){},
Ia:function Ia(){},
a1e:function a1e(a){this.a=a},
a1f:function a1f(a){this.a=a},
Ib:function Ib(){},
a1g:function a1g(a){this.a=a},
a1h:function a1h(a){this.a=a},
eT:function eT(){},
Ic:function Ic(){},
b4:function b4(){},
wE:function wE(){},
eV:function eV(){},
Jk:function Jk(){},
iA:function iA(){},
Kh:function Kh(){},
a4Y:function a4Y(a){this.a=a},
a4Z:function a4Z(a){this.a=a},
Kz:function Kz(){},
eY:function eY(){},
L6:function L6(){},
f_:function f_(){},
L7:function L7(){},
f0:function f0(){},
Lc:function Lc(){},
a8r:function a8r(a){this.a=a},
a8s:function a8s(a){this.a=a},
ei:function ei(){},
f2:function f2(){},
ej:function ej(){},
Ls:function Ls(){},
Lt:function Lt(){},
Lx:function Lx(){},
f3:function f3(){},
LA:function LA(){},
LB:function LB(){},
LO:function LO(){},
LT:function LT(){},
m_:function m_(){},
iT:function iT(){},
MR:function MR(){},
zz:function zz(){},
NK:function NK(){},
Ap:function Ap(){},
QR:function QR(){},
R2:function R2(){},
ajt:function ajt(a,b){this.a=a
this.$ti=b},
rw:function rw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
Nr:function Nr(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
abJ:function abJ(a){this.a=a},
abK:function abK(a){this.a=a},
aB:function aB(){},
ve:function ve(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
MY:function MY(a){this.a=a},
MS:function MS(){},
Nf:function Nf(){},
Ng:function Ng(){},
Nh:function Nh(){},
Ni:function Ni(){},
Nu:function Nu(){},
Nv:function Nv(){},
NP:function NP(){},
NQ:function NQ(){},
Ow:function Ow(){},
Ox:function Ox(){},
Oy:function Oy(){},
Oz:function Oz(){},
OM:function OM(){},
ON:function ON(){},
P3:function P3(){},
P4:function P4(){},
Q9:function Q9(){},
B8:function B8(){},
B9:function B9(){},
QP:function QP(){},
QQ:function QQ(){},
QW:function QW(){},
Rd:function Rd(){},
Re:function Re(){},
Bp:function Bp(){},
Bq:function Bq(){},
Ro:function Ro(){},
Rp:function Rp(){},
RZ:function RZ(){},
S_:function S_(){},
S6:function S6(){},
S7:function S7(){},
Sd:function Sd(){},
Se:function Se(){},
Su:function Su(){},
Sv:function Sv(){},
Sw:function Sw(){},
Sx:function Sx(){},
aqp(a){var s,r
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.j3(a))return a
if(A.arP(a))return A.ha(a)
if(Array.isArray(a)){s=[]
for(r=0;r<a.length;++r)s.push(A.aqp(a[r]))
return s}return a},
ha(a){var s,r,q,p,o
if(a==null)return null
s=A.z(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.K)(r),++p){o=r[p]
s.l(0,o,A.aqp(a[o]))}return s},
arP(a){var s=Object.getPrototypeOf(a)
return s===Object.prototype||s===null},
ajn(){return window.navigator.userAgent},
afi:function afi(){},
afj:function afj(a,b){this.a=a
this.b=b},
afk:function afk(a,b){this.a=a
this.b=b},
a9V:function a9V(){},
a9W:function a9W(a,b){this.a=a
this.b=b},
R1:function R1(a,b){this.a=a
this.b=b},
M2:function M2(a,b){this.a=a
this.b=b
this.c=!1},
pV:function pV(){},
aBr(a,b,c,d){var s,r
if(b){s=[c]
B.b.I(s,d)
d=s}r=t.z
return A.ST(A.anE(a,A.fO(J.ja(d,A.aEs(),r),!0,r),null))},
anT(a){var s=A.ahd(new (A.ST(a))())
return s},
ajQ(a){return A.ahd(A.axo(a))},
axo(a){return new A.a00(new A.k8(t.lp)).$1(a)},
axn(a,b,c){var s=null
if(a>c)throw A.b(A.bC(a,0,c,s,s))
if(b<a||b>c)throw A.b(A.bC(b,a,c,s,s))},
aBw(a){return a},
al4(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
aqC(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
ST(a){if(a==null||typeof a=="string"||typeof a=="number"||A.j3(a))return a
if(a instanceof A.jy)return a.a
if(A.arO(a))return a
if(t.yn.b(a))return a
if(a instanceof A.cA)return A.eW(a)
if(t.BO.b(a))return A.aqB(a,"$dart_jsFunction",new A.age())
return A.aqB(a,"_$dart_jsObject",new A.agf($.am7()))},
aqB(a,b,c){var s=A.aqC(a,b)
if(s==null){s=c.$1(a)
A.al4(a,b,s)}return s},
al1(a){if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.arO(a))return a
else if(a instanceof Object&&t.yn.b(a))return a
else if(a instanceof Date)return A.DW(a.getTime(),!1)
else if(a.constructor===$.am7())return a.o
else return A.ahd(a)},
ahd(a){if(typeof a=="function")return A.al8(a,$.Tm(),new A.ahe())
if(a instanceof Array)return A.al8(a,$.am2(),new A.ahf())
return A.al8(a,$.am2(),new A.ahg())},
al8(a,b,c){var s=A.aqC(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.al4(a,b,s)}return s},
aBJ(a){var s,r=a.$dart_jsFunction
if(r!=null)return r
s=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.aBs,a)
s[$.Tm()]=a
a.$dart_jsFunction=s
return s},
aBs(a,b){return A.anE(a,b,null)},
ae(a){if(typeof a=="function")return a
else return A.aBJ(a)},
a00:function a00(a){this.a=a},
age:function age(){},
agf:function agf(a){this.a=a},
ahe:function ahe(){},
ahf:function ahf(){},
ahg:function ahg(){},
jy:function jy(a){this.a=a},
pS:function pS(a){this.a=a},
ng:function ng(a,b){this.a=a
this.$ti=b},
rJ:function rJ(){},
tp(a){if(!t.G.b(a)&&!t.tY.b(a))throw A.b(A.bT("object must be a Map or Iterable",null))
return A.aBK(a)},
aBK(a){var s=new A.agc(new A.k8(t.lp)).$1(a)
s.toString
return s},
alv(a,b){return b in a},
ag(a,b){return a[b]},
H(a,b,c){return a[b].apply(a,c)},
aBt(a,b){return a[b]()},
aDg(a,b){var s,r
if(b instanceof Array)switch(b.length){case 0:return new a()
case 1:return new a(b[0])
case 2:return new a(b[0],b[1])
case 3:return new a(b[0],b[1],b[2])
case 4:return new a(b[0],b[1],b[2],b[3])}s=[null]
B.b.I(s,b)
r=a.bind.apply(a,s)
String(r)
return new r()},
fz(a,b){var s=new A.a7($.a9,b.h("a7<0>")),r=new A.aQ(s,b.h("aQ<0>"))
a.then(A.i2(new A.aig(r),1),A.i2(new A.aih(r),1))
return s},
kn(a){return new A.ahr(new A.k8(t.lp),a).$0()},
agc:function agc(a){this.a=a},
aig:function aig(a){this.a=a},
aih:function aih(a){this.a=a},
ahr:function ahr(a,b){this.a=a
this.b=b},
Ix:function Ix(a){this.a=a},
fM:function fM(){},
G8:function G8(){},
fR:function fR(){},
IB:function IB(){},
Jl:function Jl(){},
Lg:function Lg(){},
h1:function h1(){},
LD:function LD(){},
Oh:function Oh(){},
Oi:function Oi(){},
OU:function OU(){},
OV:function OV(){},
QZ:function QZ(){},
R_:function R_(){},
Ru:function Ru(){},
Rv:function Rv(){},
avA(a){return A.fi(a,0,null)},
EM:function EM(){},
ayj(){if($.aS())return new A.mN()
else return new A.EQ()},
avC(a,b){var s='"recorder" must not already be associated with another Canvas.'
if($.aS()){if(a.gJB())A.X(A.bT(s,null))
if(b==null)b=B.lN
return new A.V4(t.bW.a(a).r4(b))}else{t.pO.a(a)
if(a.c)A.X(A.bT(s,null))
return new A.a8C(a.r4(b==null?B.lN:b))}},
aze(){var s,r,q
if($.aS()){s=new A.Kb(A.a([],t._),B.I)
r=new A.a0s(s)
r.b=s
return r}else{s=A.a([],t.kS)
r=$.a8E
q=A.a([],t.g)
r=r!=null&&r.c===B.ai?r:null
r=new A.fG(r,t.C)
$.j8.push(r)
r=new A.wZ(q,r,B.bd)
r.f=A.dL()
s.push(r)
return new A.a8D(s)}},
xh(a,b){var s=a.a,r=b*2/2,q=a.b
return new A.D(s-r,q-r,s+r,q+r)},
az3(a,b,c){var s=a.a,r=c/2,q=a.b,p=b/2
return new A.D(s-r,q-p,s+r,q+p)},
akc(a,b){var s=a.a,r=b.a,q=a.b,p=b.b
return new A.D(Math.min(s,r),Math.min(q,p),Math.max(s,r),Math.max(q,p))},
a3i(a,b,c,d,e){var s=d.a,r=d.b,q=e.a,p=e.b,o=b.a,n=b.b,m=c.a,l=c.b,k=s===r&&s===q&&s===p&&s===o&&s===n&&s===m&&s===l
return new A.iB(a.a,a.b,a.c,a.d,s,r,q,p,m,l,o,n,k)},
aiv(a,b){var s=0,r=A.R(t.H),q,p,o,n
var $async$aiv=A.L(function(c,d){if(c===1)return A.O(d,r)
while(true)switch(s){case 0:o=new A.TP(new A.aiw(),new A.aix(a,b))
n=!0
try{n=self._flutter.loader.didCreateEngineInitializer==null}catch(m){n=!0}s=n?2:4
break
case 2:A.mp("Flutter Web Bootstrap: Auto")
s=5
return A.G(o.lW(),$async$aiv)
case 5:s=3
break
case 4:A.mp("Flutter Web Bootstrap: Programmatic")
p=self._flutter.loader.didCreateEngineInitializer
p.toString
p.$1(o.a4l())
case 3:return A.P(null,r)}})
return A.Q($async$aiv,r)},
axq(a){switch(a.a){case 1:return"up"
case 0:return"down"
case 2:return"repeat"}},
aE(a,b,c,d){return new A.a0(((a&255)<<24|(b&255)<<16|(c&255)<<8|d&255)>>>0)},
ajc(a){if(a<=0.03928)return a/12.92
return Math.pow((a+0.055)/1.055,2.4)},
aye(){return $.aS()?A.br():new A.bf(new A.bg())},
alz(a,b,c,d){var s=0,r=A.R(t.gP),q,p
var $async$alz=A.L(function(e,f){if(e===1)return A.O(f,r)
while(true)switch(s){case 0:if($.aS()){q=A.asb(a,d,c)
s=1
break}else{p=A.C5("Blob",A.a([[a.buffer]],t.f))
p.toString
t.e.a(p)
q=new A.vu(A.H(self.window.URL,"createObjectURL",[p]),null)
s=1
break}case 1:return A.P(q,r)}})
return A.Q($async$alz,r)},
alA(a,b,c,d){var s=0,r=A.R(t.gP),q,p,o
var $async$alA=A.L(function(e,f){if(e===1)return A.O(f,r)
while(true)switch(s){case 0:p=$.aS()
o=a.a
if(p){o.toString
q=A.asb(o,d,c)
s=1
break}else{p=A.C5("Blob",A.a([[o.buffer]],t.f))
p.toString
t.e.a(p)
q=new A.vu(A.H(self.window.URL,"createObjectURL",[p]),null)
s=1
break}case 1:return A.P(q,r)}})
return A.Q($async$alA,r)},
a_y(a){var s=0,r=A.R(t.gG),q,p
var $async$a_y=A.L(function(b,c){if(b===1)return A.O(c,r)
while(true)switch(s){case 0:p=new A.pH(a.length)
p.a=a
q=p
s=1
break
case 1:return A.P(q,r)}})
return A.Q($async$a_y,r)},
eg(){if($.aS()){var s=new A.p4(B.bq)
s.iK(null,t.gV)
return s}else return A.ako()},
ayl(a,b,c,d,e,f,g,h){return new A.Jj(a,!1,f,e,h,d,c,g)},
aoA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){return new A.iv(a8,b,f,a4,c,n,k,l,i,j,a,!1,a6,o,q,p,d,e,a5,r,a1,a0,s,h,a7,m,a2,a3)},
aph(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,a0,a1,a2){var s
if($.aS()){s=t.yQ
return A.aja(s.a(a),b,c,d,e,f,g,h,i,j,k,m,s.a(n),o,p,q,r,a0,a1,a2)}else return A.anx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,q,r,a0,a1,a2)},
ak5(a,b,c,d,e,f,g,h,i,j,k,a0){var s,r,q,p,o,n,m,l=null
if($.aS()){s=A.azw(l)
r=$.auc()[j.a]
s.textAlign=r
if(k!=null)s.textDirection=$.auf()[k.a]
if(h!=null)s.maxLines=h
r=f!=null
if(r)s.heightMultiplier=f
q=a0==null
if(!q)s.textHeightBehavior=$.aug()[0]
if(a!=null)s.ellipsis=a
if(i!=null){t.m2.a(i)
p=A.azx(l)
p.fontFamilies=A.al9(i.a,i.b)
p.heightMultiplier=i.d
o=i.x
o=q?l:a0.c
switch(o){case null:break
case B.t:p.halfLeading=!0
break
case B.CF:p.halfLeading=!1
break}p.leading=i.e
n=A.alP(i.f,i.r)
p.fontStyle=n
p.forceStrutHeight=i.w
p.strutEnabled=!0
s.strutStyle=p}m=A.ap4(l)
if(e!=null||!1)m.fontStyle=A.alP(e,d)
if(c!=null)m.fontSize=c
if(r)m.heightMultiplier=f
m.fontFamilies=A.al9(b,l)
s.textStyle=m
r=$.ba.az().ParagraphStyle(s)
return new A.Dp(r,b,c,f,e,d,q?l:a0.c)}else{t.qa.a(i)
return new A.v_(j,k,e,d,h,b,c,f,a0,a,g)}},
ak4(a){if($.aS())return A.an1(a)
t.m1.a(a)
return new A.Va(new A.bS(""),a,A.a([],t.pi),A.a([],t.s5),new A.Kd(a),A.a([],t.u))},
x3:function x3(a,b){this.a=a
this.b=b},
um:function um(a,b){this.a=a
this.b=b},
wU:function wU(a,b){this.a=a
this.b=b},
ab2:function ab2(a,b){this.a=a
this.b=b},
Bi:function Bi(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b){var _=this
_.a=a
_.b=!0
_.c=b
_.d=!1
_.e=null},
Vg:function Vg(a){this.a=a},
Vh:function Vh(){},
Vi:function Vi(){},
ID:function ID(){},
v:function v(a,b){this.a=a
this.b=b},
a1:function a1(a,b){this.a=a
this.b=b},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b){this.a=a
this.b=b},
iB:function iB(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m},
aiw:function aiw(){},
aix:function aix(a,b){this.a=a
this.b=b},
a2T:function a2T(){},
pU:function pU(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a04:function a04(a){this.a=a},
a05:function a05(){},
a0:function a0(a){this.a=a},
yy:function yy(a,b){this.a=a
this.b=b},
yz:function yz(a,b){this.a=a
this.b=b},
wR:function wR(a,b){this.a=a
this.b=b},
kx:function kx(a,b){this.a=a
this.b=b},
mO:function mO(a,b){this.a=a
this.b=b},
CM:function CM(a,b){this.a=a
this.b=b},
wa:function wa(a,b){this.a=a
this.b=b},
n1:function n1(a,b){this.a=a
this.b=b},
vy:function vy(a,b){this.a=a
this.b=b},
pH:function pH(a){this.a=null
this.b=a},
a2K:function a2K(){},
Jj:function Jj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
LV:function LV(){},
kU:function kU(a){this.a=a},
mz:function mz(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.c=b},
iu:function iu(a,b){this.a=a
this.b=b},
fT:function fT(a,b){this.a=a
this.b=b},
qg:function qg(a,b){this.a=a
this.b=b},
iv:function iv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o
_.ch=p
_.CW=q
_.cx=r
_.cy=s
_.db=a0
_.dx=a1
_.dy=a2
_.fr=a3
_.fx=a4
_.fy=a5
_.go=a6
_.id=a7
_.k1=a8},
x4:function x4(a){this.a=a},
cn:function cn(a){this.a=a},
co:function co(a){this.a=a},
a6p:function a6p(a){this.a=a},
vl:function vl(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.b=b},
fc:function fc(a){this.a=a},
iL:function iL(a,b){this.a=a
this.b=b},
r5:function r5(a,b){this.a=a
this.b=b},
yH:function yH(a){this.a=a},
Ll:function Ll(a,b){this.a=a
this.b=b},
yJ:function yJ(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
lV:function lV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r4:function r4(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
ll:function ll(a){this.a=a},
u0:function u0(a,b){this.a=a
this.b=b},
CR:function CR(a,b){this.a=a
this.b=b},
YI:function YI(){},
n2:function n2(){},
KN:function KN(){},
u1:function u1(a,b){this.a=a
this.b=b},
Ft:function Ft(){},
CB:function CB(){},
CC:function CC(){},
U5:function U5(a){this.a=a},
U6:function U6(a){this.a=a},
CD:function CD(){},
kv:function kv(){},
IC:function IC(){},
Mk:function Mk(){},
FC:function FC(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.$ti=c},
wT:function wT(){},
eM:function eM(){},
eL:function eL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vf:function vf(a){this.a=a},
ml(){var s=$.aul()
return s==null?$.atF():s},
aha:function aha(){},
ag3:function ag3(){},
bd(a){var s=null,r=A.a([a],t.f)
return new A.pr(s,!1,!0,s,s,s,!1,r,s,B.ar,s,!1,!1,s,B.i4)},
v4(a){var s=null,r=A.a([a],t.f)
return new A.EW(s,!1,!0,s,s,s,!1,r,s,B.Hw,s,!1,!1,s,B.i4)},
Yj(a){var s=null,r=A.a([a],t.f)
return new A.EV(s,!1,!0,s,s,s,!1,r,s,B.Hv,s,!1,!1,s,B.i4)},
vh(a){var s=A.a(a.split("\n"),t.s),r=A.a([A.v4(B.b.gH(s))],t.p),q=A.eB(s,1,null,t.N)
B.b.I(r,new A.aq(q,new A.YF(),q.$ti.h("aq<aL.E,db>")))
return new A.kS(r)},
YD(a){return new A.kS(a)},
ax0(a){return a},
anA(a,b){if(a.r&&!0)return
if($.ajx===0||!1)A.aDD(J.dT(a.a),100,a.b)
else A.alH().$1("Another exception was thrown: "+a.gMS().i(0))
$.ajx=$.ajx+1},
ax1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.aV(["dart:async-patch",0,"dart:async",0,"package:stack_trace",0,"class _AssertionError",0,"class _FakeAsync",0,"class _FrameCallbackEntry",0,"class _Timer",0,"class _RawReceivePortImpl",0],t.N,t.S),d=A.azH(J.amu(a,"\n"))
for(s=0,r=0;q=d.length,r<q;++r){p=d[r]
o="class "+p.w
n=p.c+":"+p.d
if(e.V(0,o)){++s
e.e0(e,o,new A.YG())
B.b.fo(d,r);--r}else if(e.V(0,n)){++s
e.e0(e,n,new A.YH())
B.b.fo(d,r);--r}}m=A.bn(q,null,!1,t.dR)
for(l=$.Fe.length,k=0;k<$.Fe.length;$.Fe.length===l||(0,A.K)($.Fe),++k)$.Fe[k].a6d(0,d,m)
l=t.s
j=A.a([],l)
for(--q,r=0;r<d.length;r=i+1){i=r
while(!0){if(i<q){h=m[i]
h=h!=null&&J.f(m[i+1],h)}else h=!1
if(!h)break;++i}h=m[i]
g=h==null
if(!g)f=i!==r?" ("+(i-r+2)+" frames)":" (1 frame)"
else f=""
j.push(A.h(g?d[i].a:h)+f)}q=A.a([],l)
for(l=e.gfR(e),l=l.gP(l);l.q();){h=l.gB(l)
if(h.gp(h)>0)q.push(h.gdV(h))}B.b.fA(q)
if(s===1)j.push("(elided one frame from "+B.b.gbX(q)+")")
else if(s>1){l=q.length
if(l>1)q[l-1]="and "+B.b.gM(q)
l="(elided "+s
if(q.length>2)j.push(l+" frames from "+B.b.b0(q,", ")+")")
else j.push(l+" frames from "+B.b.b0(q," ")+")")}return j},
dp(a){var s=$.hc()
if(s!=null)s.$1(a)},
aDD(a,b,c){var s,r
if(a!=null)A.alH().$1(a)
s=A.a(B.c.Aw(J.dT(c==null?A.akn():A.ax0(c))).split("\n"),t.s)
r=s.length
s=J.amw(r!==0?new A.yk(s,new A.ahs(),t.C7):s,b)
A.alH().$1(B.b.b0(A.ax1(s),"\n"))},
aAA(a,b,c){return new A.Nz(c,a,!0,!0,null,b)},
m3:function m3(){},
pr:function pr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.f=a
_.r=b
_.w=c
_.y=d
_.z=e
_.Q=f
_.as=g
_.at=h
_.ax=!0
_.ay=null
_.ch=i
_.CW=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=o},
EW:function EW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.f=a
_.r=b
_.w=c
_.y=d
_.z=e
_.Q=f
_.as=g
_.at=h
_.ax=!0
_.ay=null
_.ch=i
_.CW=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=o},
EV:function EV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.f=a
_.r=b
_.w=c
_.y=d
_.z=e
_.Q=f
_.as=g
_.at=h
_.ax=!0
_.ay=null
_.ch=i
_.CW=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=o},
bx:function bx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
YE:function YE(a){this.a=a},
kS:function kS(a){this.a=a},
YF:function YF(){},
YG:function YG(){},
YH:function YH(){},
ahs:function ahs(){},
Nz:function Nz(a,b,c,d,e,f){var _=this
_.f=a
_.r=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f},
NB:function NB(){},
NA:function NA(){},
CK:function CK(){},
Up:function Up(a,b){this.a=a
this.b=b},
av:function av(){},
eJ:function eJ(){},
Vf:function Vf(a){this.a=a},
awf(a,b,c){var s=null
return A.ic("",s,b,B.aM,a,!1,s,s,B.ar,s,!1,!1,!0,c,s,t.H)},
ic(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s
if(h==null)s=k?"MISSING":null
else s=h
return new A.hn(e,!1,c,s,g,o,k,b,d,i,a,m,l,j,n,p.h("hn<0>"))},
ajo(a,b,c){return new A.Ed(c,a,!0,!0,null,b)},
bW(a){return B.c.kL(B.f.hO(J.q(a)&1048575,16),5,"0")},
aDH(a){var s
if(t.Ct.b(a))return a.b
s=J.dT(a)
return B.c.bB(s,B.c.ek(s,".")+1)},
pi:function pi(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
adV:function adV(){},
db:function db(){},
hn:function hn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.f=a
_.r=b
_.w=c
_.y=d
_.z=e
_.Q=f
_.as=g
_.at=h
_.ax=!0
_.ay=null
_.ch=i
_.CW=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=o
_.$ti=p},
mS:function mS(){},
Ed:function Ed(a,b,c,d,e,f){var _=this
_.f=a
_.r=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f},
aj:function aj(){},
uJ:function uJ(){},
ib:function ib(){},
N8:function N8(){},
ef:function ef(){},
w3:function w3(){},
z_:function z_(){},
fN:function fN(){},
vX:function vX(){},
S:function S(){},
vr:function vr(a,b){this.a=a
this.$ti=b},
d7:function d7(a,b){this.a=a
this.b=b},
a9U(a){var s=new DataView(new ArrayBuffer(8)),r=A.cc(s.buffer,0,null)
return new A.a9S(new Uint8Array(a),s,r)},
a9S:function a9S(a,b,c){var _=this
_.a=a
_.b=0
_.c=!1
_.d=b
_.e=c},
xg:function xg(a){this.a=a
this.b=0},
azH(a){var s=t.jp
return A.as(new A.fw(new A.dW(new A.aN(A.a(B.c.mQ(a).split("\n"),t.s),new A.a8h(),t.vY),A.aEV(),t.ku),s),!0,s.h("o.E"))},
azF(a){var s=A.azG(a)
return s},
azG(a){var s,r,q="<unknown>",p=$.asY().rL(a)
if(p==null)return null
s=A.a(p.b[1].split("."),t.s)
r=s.length>1?B.b.gH(s):q
return new A.hQ(a,-1,q,q,q,-1,-1,r,s.length>1?A.eB(s,1,null,t.N).b0(0,"."):B.b.gbX(s))},
azI(a){var s,r,q,p,o,n,m,l,k,j,i=null,h="<unknown>"
if(a==="<asynchronous suspension>")return B.Y8
else if(a==="...")return B.Y7
if(!B.c.bb(a,"#"))return A.azF(a)
s=A.de("^#(\\d+) +(.+) \\((.+?):?(\\d+){0,1}:?(\\d+){0,1}\\)$",!0).rL(a).b
r=s[2]
r.toString
q=A.Th(r,".<anonymous closure>","")
if(B.c.bb(q,"new")){p=q.split(" ").length>1?q.split(" ")[1]:h
if(B.c.v(p,".")){o=p.split(".")
p=o[0]
q=o[1]}else q=""}else if(B.c.v(q,".")){o=q.split(".")
p=o[0]
q=o[1]}else p=""
r=s[3]
r.toString
n=A.jZ(r,0,i)
m=n.gdX(n)
if(n.gfv()==="dart"||n.gfv()==="package"){l=n.gjB()[0]
m=B.c.Ai(n.gdX(n),A.h(n.gjB()[0])+"/","")}else l=h
r=s[1]
r.toString
r=A.fy(r,i)
k=n.gfv()
j=s[4]
if(j==null)j=-1
else{j=j
j.toString
j=A.fy(j,i)}s=s[5]
if(s==null)s=-1
else{s=s
s.toString
s=A.fy(s,i)}return new A.hQ(a,r,k,l,m,j,s,p,q)},
hQ:function hQ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
a8h:function a8h(){},
bt:function bt(a,b){this.a=a
this.$ti=b},
a8L:function a8L(a){this.a=a},
vo:function vo(a,b){this.a=a
this.b=b},
Fs:function Fs(a,b,c){this.a=a
this.b=b
this.c=c},
rD:function rD(a){var _=this
_.a=a
_.b=!0
_.d=_.c=!1
_.e=null},
acd:function acd(a){this.a=a},
Zc:function Zc(a){this.a=a},
Ze:function Ze(a,b){this.a=a
this.b=b},
Zd:function Zd(a,b,c){this.a=a
this.b=b
this.c=c},
ax_(a,b,c,d,e,f,g){return new A.vg(c,g,f,a,e,!1)},
aez:function aez(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=!1
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=null},
px:function px(){},
Zf:function Zf(a){this.a=a},
Zg:function Zg(a,b){this.a=a
this.b=b},
vg:function vg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
ar1(a,b){switch(b.a){case 1:case 4:return a
case 0:case 2:case 3:return a===0?1:a
case 5:return a===0?1:a}},
ays(a,b){var s=A.ai(a)
return new A.dW(new A.aN(a,new A.a2X(),s.h("aN<1>")),new A.a2Y(b),s.h("dW<1,b3>"))},
a2X:function a2X(){},
a2Y:function a2Y(a){this.a=a},
a3_(a,b){var s,r
if(a==null)return b
s=new A.fu(new Float64Array(3))
s.fw(b.a,b.b,0)
r=a.ir(s).a
return new A.v(r[0],r[1])},
a2Z(a,b,c,d){if(a==null)return c
if(b==null)b=A.a3_(a,d)
return b.a9(0,A.a3_(a,d.a9(0,c)))},
ak6(a){var s,r,q=new Float64Array(4),p=new A.iP(q)
p.ui(0,0,1,0)
s=new Float64Array(16)
r=new A.bv(s)
r.bf(a)
s[11]=q[3]
s[10]=q[2]
s[9]=q[1]
s[8]=q[0]
r.uh(2,p)
return r},
ayp(a,b,c,d,e,f,g,h,i,j,k,l,m,n){return new A.nB(d,n,0,e,a,h,B.k,0,!1,!1,0,j,i,b,c,0,0,0,l,k,g,m,0,!1,null,null)},
ayz(a,b,c,d,e,f,g,h,i,j,k){return new A.nC(c,k,0,d,a,f,B.k,0,!1,!1,0,h,g,0,b,0,0,0,j,i,0,0,0,!1,null,null)},
ayu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){return new A.iy(f,a0,0,g,c,j,b,a,!1,!1,0,l,k,d,e,q,m,p,o,n,i,s,0,r,null,null)},
ayr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){return new A.lo(g,a2,k,h,c,l,b,a,f,!1,0,n,m,d,e,s,o,r,q,p,j,a1,0,a0,null,null)},
ayt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){return new A.ix(g,a2,k,h,c,l,b,a,f,!1,0,n,m,d,e,s,o,r,q,p,j,a1,0,a0,null,null)},
ayq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return new A.iw(d,s,h,e,b,i,B.k,a,!0,!1,j,l,k,0,c,q,m,p,o,n,g,r,0,!1,null,null)},
ayv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){return new A.lp(e,a2,j,f,c,k,b,a,!0,!1,l,n,m,0,d,s,o,r,q,p,h,a1,i,a0,null,null)},
ayB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){return new A.ls(e,a0,i,f,b,j,B.k,a,!1,!1,k,m,l,c,d,r,n,q,p,o,h,s,0,!1,null,null)},
ayA(a,b,c,d,e,f){return new A.nD(e,b,f,0,c,a,d,B.k,0,!1,!1,1,1,1,0,0,0,0,0,0,0,0,0,0,!1,null,null)},
ayx(a,b,c,d,e,f,g){return new A.iz(b,g,d,c,a,e,B.k,0,!1,!1,1,1,1,0,0,0,0,0,0,0,0,0,0,f,null,null)},
ayy(a,b,c,d,e,f,g,h,i,j,k){return new A.lr(d,e,i,h,b,k,f,c,a,g,B.k,0,!1,!1,1,1,1,0,0,0,0,0,0,0,0,0,0,j,null,null)},
ayw(a,b,c,d,e,f,g){return new A.lq(b,g,d,c,a,e,B.k,0,!1,!1,1,1,1,0,0,0,0,0,0,0,0,0,0,f,null,null)},
aoz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return new A.ln(e,s,i,f,b,j,B.k,a,!1,!1,0,l,k,c,d,q,m,p,o,n,h,r,0,!1,null,null)},
b3:function b3(){},
dD:function dD(){},
M1:function M1(){},
RA:function RA(){},
MD:function MD(){},
nB:function nB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6},
Rw:function Rw(a,b){var _=this
_.c=a
_.d=b
_.b=_.a=$},
MN:function MN(){},
nC:function nC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6},
RH:function RH(a,b){var _=this
_.c=a
_.d=b
_.b=_.a=$},
MI:function MI(){},
iy:function iy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6},
RC:function RC(a,b){var _=this
_.c=a
_.d=b
_.b=_.a=$},
MG:function MG(){},
lo:function lo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6},
Rz:function Rz(a,b){var _=this
_.c=a
_.d=b
_.b=_.a=$},
MH:function MH(){},
ix:function ix(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6},
RB:function RB(a,b){var _=this
_.c=a
_.d=b
_.b=_.a=$},
MF:function MF(){},
iw:function iw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6},
Ry:function Ry(a,b){var _=this
_.c=a
_.d=b
_.b=_.a=$},
MJ:function MJ(){},
lp:function lp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6},
RD:function RD(a,b){var _=this
_.c=a
_.d=b
_.b=_.a=$},
MP:function MP(){},
ls:function ls(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6},
RJ:function RJ(a,b){var _=this
_.c=a
_.d=b
_.b=_.a=$},
hI:function hI(){},
MO:function MO(){},
nD:function nD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.aG=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.ay=q
_.ch=r
_.CW=s
_.cx=a0
_.cy=a1
_.db=a2
_.dx=a3
_.dy=a4
_.fr=a5
_.fx=a6
_.fy=a7},
RI:function RI(a,b){var _=this
_.c=a
_.d=b
_.b=_.a=$},
ML:function ML(){},
iz:function iz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6},
RF:function RF(a,b){var _=this
_.c=a
_.d=b
_.b=_.a=$},
MM:function MM(){},
lr:function lr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.go=a
_.id=b
_.k1=c
_.k2=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q
_.at=r
_.ax=s
_.ay=a0
_.ch=a1
_.CW=a2
_.cx=a3
_.cy=a4
_.db=a5
_.dx=a6
_.dy=a7
_.fr=a8
_.fx=a9
_.fy=b0},
RG:function RG(a,b){var _=this
_.d=_.c=$
_.e=a
_.f=b
_.b=_.a=$},
MK:function MK(){},
lq:function lq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6},
RE:function RE(a,b){var _=this
_.c=a
_.d=b
_.b=_.a=$},
ME:function ME(){},
ln:function ln(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6},
Rx:function Rx(a,b){var _=this
_.c=a
_.d=b
_.b=_.a=$},
P5:function P5(){},
P6:function P6(){},
P7:function P7(){},
P8:function P8(){},
P9:function P9(){},
Pa:function Pa(){},
Pb:function Pb(){},
Pc:function Pc(){},
Pd:function Pd(){},
Pe:function Pe(){},
Pf:function Pf(){},
Pg:function Pg(){},
Ph:function Ph(){},
Pi:function Pi(){},
Pj:function Pj(){},
Pk:function Pk(){},
Pl:function Pl(){},
Pm:function Pm(){},
Pn:function Pn(){},
Po:function Po(){},
Pp:function Pp(){},
Pq:function Pq(){},
Pr:function Pr(){},
Ps:function Ps(){},
Pt:function Pt(){},
Pu:function Pu(){},
Pv:function Pv(){},
Sy:function Sy(){},
Sz:function Sz(){},
SA:function SA(){},
SB:function SB(){},
SC:function SC(){},
SD:function SD(){},
SE:function SE(){},
SF:function SF(){},
SG:function SG(){},
SH:function SH(){},
SI:function SI(){},
SJ:function SJ(){},
SK:function SK(){},
SL:function SL(){},
SM:function SM(){},
anI(){var s=A.a([],t.f1),r=new A.bv(new Float64Array(16))
r.e5()
return new A.fJ(s,A.a([r],t.hZ),A.a([],t.pw))},
fI:function fI(a,b){this.a=a
this.b=null
this.$ti=b},
t9:function t9(){},
Ai:function Ai(a){this.a=a},
rS:function rS(a){this.a=a},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
a30:function a30(a,b){this.a=a
this.b=b},
a32:function a32(){},
a31:function a31(a,b,c){this.a=a
this.b=b
this.c=c},
a33:function a33(){this.b=this.a=null},
tN:function tN(a,b){this.a=a
this.b=b},
wQ:function wQ(){},
R6:function R6(a){this.a=a},
Vr:function Vr(){},
Vs:function Vs(a,b){this.a=a
this.b=b},
Vt:function Vt(a,b){this.a=a
this.b=b},
Vu:function Vu(a,b){this.a=a
this.b=b},
cF:function cF(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m7:function m7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aAK(a,b){var s=new A.rM(a,null,a.zc())
s.QS(a,b,null)
return s},
a_d:function a_d(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=0},
a_g:function a_g(a,b,c){this.a=a
this.b=b
this.c=c},
a_f:function a_f(a,b){this.a=a
this.b=b},
a_h:function a_h(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Mv:function Mv(){},
ab_:function ab_(a){this.a=a},
zl:function zl(a,b,c){this.a=a
this.b=b
this.c=c},
rM:function rM(a,b,c){var _=this
_.d=$
_.a=a
_.b=b
_.c=c},
ada:function ada(a,b){this.a=a
this.b=b},
P0:function P0(a,b){this.a=a
this.b=b},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
qv:function qv(){},
a4D:function a4D(a){this.a=a},
tZ(a){var s=a.a,r=a.b
return new A.aF(s,s,r,r)},
avv(){var s=A.a([],t.f1),r=new A.bv(new Float64Array(16))
r.e5()
return new A.hi(s,A.a([r],t.hZ),A.a([],t.pw))},
amQ(a){return new A.hi(a.a,a.b,a.c)},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
UB:function UB(){},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
p_:function p_(a,b){this.c=a
this.a=b
this.b=null},
es:function es(a){this.a=a},
os:function os(a,b){this.a=a
this.b=b},
A_:function A_(a,b){this.a=a
this.b=b},
F:function F(){},
a3K:function a3K(a,b){this.a=a
this.b=b},
a3M:function a3M(a,b){this.a=a
this.b=b},
a3L:function a3L(a,b){this.a=a
this.b=b},
xq:function xq(a,b){var _=this
_.F=a
_.ak=$
_.k1=_.id=null
_.k2=!1
_.k4=_.k3=null
_.ok=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=b
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
aM(a){return new A.G2(a.h("G2<0>"))},
ayi(a){return new A.Jf(a,A.z(t.S,t.Q),A.aM(t.V))},
ayb(a){return new A.hF(a,A.z(t.S,t.Q),A.aM(t.V))},
apn(a){return new A.yW(a,B.k,A.z(t.S,t.Q),A.aM(t.V))},
Cr:function Cr(a,b){this.a=a
this.$ti=b},
la:function la(){},
G2:function G2(a){this.a=null
this.$ti=a},
Jf:function Jf(a,b,c){var _=this
_.CW=a
_.cx=null
_.db=_.cy=!1
_.d=b
_.e=0
_.r=!1
_.w=c
_.x=0
_.y=!0
_.at=_.as=_.Q=_.z=null
_.a=0
_.c=_.b=null},
eK:function eK(){},
hF:function hF(a,b,c){var _=this
_.p1=a
_.cx=_.CW=null
_.d=b
_.e=0
_.r=!1
_.w=c
_.x=0
_.y=!0
_.at=_.as=_.Q=_.z=null
_.a=0
_.c=_.b=null},
p7:function p7(a,b,c){var _=this
_.p1=null
_.p2=a
_.cx=_.CW=null
_.d=b
_.e=0
_.r=!1
_.w=c
_.x=0
_.y=!0
_.at=_.as=_.Q=_.z=null
_.a=0
_.c=_.b=null},
uo:function uo(a,b,c){var _=this
_.p1=null
_.p2=a
_.cx=_.CW=null
_.d=b
_.e=0
_.r=!1
_.w=c
_.x=0
_.y=!0
_.at=_.as=_.Q=_.z=null
_.a=0
_.c=_.b=null},
un:function un(a,b,c){var _=this
_.p1=null
_.p2=a
_.cx=_.CW=null
_.d=b
_.e=0
_.r=!1
_.w=c
_.x=0
_.y=!0
_.at=_.as=_.Q=_.z=null
_.a=0
_.c=_.b=null},
yW:function yW(a,b,c,d){var _=this
_.aV=a
_.aG=_.bs=null
_.bI=!0
_.p1=b
_.cx=_.CW=null
_.d=c
_.e=0
_.r=!1
_.w=d
_.x=0
_.y=!0
_.at=_.as=_.Q=_.z=null
_.a=0
_.c=_.b=null},
Og:function Og(){},
axZ(a,b){var s
if(a==null)return!0
s=a.b
if(t.zs.b(b))return!1
return t.ye.b(s)||t.x.b(b)||!s.gbz(s).k(0,b.gbz(b))},
axY(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=a4.d
if(a3==null)a3=a4.c
s=a4.a
r=a4.b
q=a3.gh0(a3)
p=a3.gbQ()
o=a3.gcg(a3)
n=a3.gi8(a3)
m=a3.gbz(a3)
l=a3.goc()
k=a3.gcJ(a3)
a3.goZ()
j=a3.gtB()
i=a3.gpa()
h=a3.gcK()
g=a3.gym()
f=a3.gdr(a3)
e=a3.gA8()
d=a3.gAb()
c=a3.gAa()
b=a3.gA9()
a=a3.gmD(a3)
a0=a3.gAp()
s.R(0,new A.a1s(r,A.ayt(k,l,n,h,g,a3.grB(),0,o,!1,a,p,m,i,j,e,b,c,d,f,a3.gne(),a0,q).aX(a3.gbA(a3)),s))
q=A.m(r).h("aP<1>")
a0=q.h("aN<o.E>")
a1=A.as(new A.aN(new A.aP(r,q),new A.a1t(s),a0),!0,a0.h("o.E"))
a0=a3.gh0(a3)
q=a3.gbQ()
f=a3.gcg(a3)
d=a3.gi8(a3)
c=a3.gbz(a3)
b=a3.goc()
e=a3.gcJ(a3)
a3.goZ()
j=a3.gtB()
i=a3.gpa()
m=a3.gcK()
p=a3.gym()
a=a3.gdr(a3)
o=a3.gA8()
g=a3.gAb()
h=a3.gAa()
n=a3.gA9()
l=a3.gmD(a3)
k=a3.gAp()
a2=A.ayr(e,b,d,m,p,a3.grB(),0,f,!1,l,q,c,i,j,o,n,h,g,a,a3.gne(),k,a0).aX(a3.gbA(a3))
for(q=A.ai(a1).h("cm<1>"),p=new A.cm(a1,q),p=new A.b1(p,p.gm(p),q.h("b1<aL.E>")),q=q.h("aL.E");p.q();){o=p.d
if(o==null)o=q.a(o)
if(o.gAH()&&o.gzG(o)!=null){n=o.gzG(o)
n.toString
n.$1(a2.aX(r.j(0,o)))}}},
OE:function OE(a,b){this.a=a
this.b=b},
OF:function OF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ie:function Ie(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.x1$=0
_.x2$=c
_.y1$=_.xr$=0
_.y2$=!1},
a1u:function a1u(){},
a1x:function a1x(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
a1w:function a1w(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
a1v:function a1v(a,b){this.a=a
this.b=b},
a1s:function a1s(a,b,c){this.a=a
this.b=b
this.c=c},
a1t:function a1t(a){this.a=a},
Sc:function Sc(){},
aos(a,b,c){var s,r,q=a.ch,p=t.qJ.a(q.a)
if(p==null){s=a.pp(null)
q.sbF(0,s)
q=s}else{p.Af()
a.pp(p)
q=p}a.db=!1
r=a.giq()
b=new A.lk(q,r)
a.wt(b,B.k)
b.n5()},
ayf(a){var s=a.ch.a
s.toString
a.pp(t.cY.a(s))
a.db=!1},
az6(a){a.CT()},
az7(a){a.XF()},
apV(a,b){if(a==null)return null
if(a.gO(a)||b.JH())return B.I
return A.aoc(b,a)},
aAW(a,b,c,d){var s,r,q,p=b.c
p.toString
s=t.F
s.a(p)
for(r=p;r!==a;r=p,b=q){r.dg(b,c)
p=r.c
p.toString
s.a(p)
q=b.c
q.toString
s.a(q)}a.dg(b,c)
a.dg(b,d)},
apU(a,b){if(a==null)return b
if(b==null)return a
return a.dT(b)},
ck:function ck(){},
lk:function lk(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
a2p:function a2p(a,b,c){this.a=a
this.b=b
this.c=c},
a2o:function a2o(a,b,c){this.a=a
this.b=b
this.c=c},
a2n:function a2n(a,b,c){this.a=a
this.b=b
this.c=c},
DJ:function DJ(){},
a6b:function a6b(a,b){this.a=a
this.b=b},
Jg:function Jg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=!1
_.f=d
_.w=_.r=!1
_.x=e
_.y=f
_.z=!1
_.Q=null
_.as=0
_.at=!1
_.ax=g},
a2A:function a2A(){},
a2z:function a2z(){},
a2B:function a2B(){},
a2C:function a2C(){},
y:function y(){},
a49:function a49(a){this.a=a},
a4d:function a4d(a,b,c){this.a=a
this.b=b
this.c=c},
a4b:function a4b(a){this.a=a},
a4c:function a4c(){},
a4a:function a4a(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aY:function aY(){},
af0:function af0(){},
ab9:function ab9(a,b){this.b=a
this.a=b},
or:function or(){},
Q7:function Q7(a,b,c){var _=this
_.e=a
_.b=b
_.c=null
_.a=c},
R4:function R4(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=!1
_.w=c
_.x=!1
_.b=d
_.c=null
_.a=e},
af1:function af1(){var _=this
_.b=_.a=null
_.d=_.c=$
_.e=!1},
PR:function PR(){},
LU:function LU(a,b){this.a=a
this.b=b},
xE:function xE(a,b,c,d,e){var _=this
_.id=a
_.k1=b
_.k2=c
_.k4=null
_.D$=d
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=e
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
Q0:function Q0(){},
azf(a,b){return-B.f.b4(a.b,b.b)},
aDE(a,b){if(b.z$.a>0)return a>=1e5
return!0},
iZ:function iZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e
_.$ti=f},
rB:function rB(a){this.a=a
this.b=null},
lz:function lz(a,b){this.a=a
this.b=b},
dO:function dO(){},
a5u:function a5u(a){this.a=a},
a5w:function a5w(a){this.a=a},
a5x:function a5x(a,b){this.a=a
this.b=b},
a5y:function a5y(a,b){this.a=a
this.b=b},
a5t:function a5t(a){this.a=a},
a5v:function a5v(a){this.a=a},
Js:function Js(a){this.a=a},
a6_:function a6_(){},
an9(a){var s=$.an7.j(0,a)
if(s==null){s=$.an8
$.an8=s+1
$.an7.l(0,a,s)
$.an6.l(0,s,a)}return s},
azi(a,b){var s
if(a.length!==b.length)return!1
for(s=0;s<a.length;++s)if(!J.f(a[s],b[s]))return!1
return!0},
a6d(a,b){var s,r=$.aiK(),q=r.p2,p=r.e,o=r.p3,n=r.f,m=r.bs,l=r.p4,k=r.R8,j=r.RG,i=r.rx,h=r.ry,g=r.to,f=r.x2,e=r.xr
r=r.y1
s=($.a6f+1)%65535
$.a6f=s
return new A.bQ(a,s,b,B.I,q,p,o,n,m,l,k,j,i,h,g,f,e,r)},
oF(a,b){var s,r
if(a.r==null)return b
s=new Float64Array(3)
r=new A.fu(s)
r.fw(b.a,b.b,0)
a.r.a5u(r)
return new A.v(s[0],s[1])},
aBy(a,b){var s,r,q,p,o,n,m,l,k=A.a([],t.iV)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.K)(a),++r){q=a[r]
p=q.w
k.push(new A.k1(!0,A.oF(q,new A.v(p.a- -0.1,p.b- -0.1)).b,q))
k.push(new A.k1(!1,A.oF(q,new A.v(p.c+-0.1,p.d+-0.1)).b,q))}B.b.fA(k)
o=A.a([],t.dK)
for(s=k.length,p=t.R,n=null,m=0,r=0;r<k.length;k.length===s||(0,A.K)(k),++r){l=k[r]
if(l.a){++m
if(n==null)n=new A.hX(l.b,b,A.a([],p))
n.c.push(l.c)}else --m
if(m===0){n.toString
o.push(n)
n=null}}B.b.fA(o)
s=t.yC
return A.as(new A.f8(o,new A.ag5(),s),!0,s.h("o.E"))},
qG(){return new A.a60(A.z(t.nS,t.BT),A.z(t.zN,t.Q),new A.cR("",B.ah),new A.cR("",B.ah),new A.cR("",B.ah),new A.cR("",B.ah),new A.cR("",B.ah))},
agb(a,b,c,d){if(a.a.length===0)return c
if(d!=b&&b!=null)switch(b.a){case 0:a=new A.cR("\u202b",B.ah).X(0,a).X(0,new A.cR("\u202c",B.ah))
break
case 1:a=new A.cR("\u202a",B.ah).X(0,a).X(0,new A.cR("\u202c",B.ah))
break}if(c.a.length===0)return a
return c.X(0,new A.cR("\n",B.ah)).X(0,a)},
cR:function cR(a,b){this.a=a
this.b=b},
KF:function KF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4},
Ql:function Ql(a,b,c,d,e,f,g){var _=this
_.as=a
_.f=b
_.r=null
_.a=c
_.b=d
_.c=e
_.d=f
_.e=g},
bQ:function bQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.w=d
_.Q=_.z=_.y=_.x=null
_.as=!1
_.at=e
_.ax=null
_.ay=$
_.CW=_.ch=!1
_.cx=f
_.cy=g
_.db=h
_.dx=null
_.dy=i
_.fr=j
_.fx=k
_.fy=l
_.go=m
_.id=n
_.k1=o
_.k2=p
_.k3=q
_.k4=null
_.ok=r
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p2=_.p1=null
_.a=0
_.c=_.b=null},
a6g:function a6g(a,b,c){this.a=a
this.b=b
this.c=c},
a6e:function a6e(){},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
af6:function af6(){},
af2:function af2(){},
af5:function af5(a,b,c){this.a=a
this.b=b
this.c=c},
af3:function af3(){},
af4:function af4(a){this.a=a},
ag5:function ag5(){},
kd:function kd(a,b,c){this.a=a
this.b=b
this.c=c},
y6:function y6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.x1$=0
_.x2$=d
_.y1$=_.xr$=0
_.y2$=!1},
a6j:function a6j(a){this.a=a},
a6k:function a6k(){},
a6l:function a6l(){},
a6i:function a6i(a,b){this.a=a
this.b=b},
a60:function a60(a,b,c,d,e,f,g){var _=this
_.d=_.c=_.b=_.a=!1
_.e=a
_.f=0
_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=_.id=null
_.p2=!1
_.p3=b
_.p4=c
_.R8=d
_.RG=e
_.rx=f
_.ry=g
_.to=""
_.x1=null
_.xr=_.x2=0
_.aV=_.bM=_.bt=_.by=_.y2=_.y1=null
_.bs=0},
a61:function a61(a){this.a=a},
a64:function a64(a){this.a=a},
a62:function a62(a){this.a=a},
a65:function a65(a){this.a=a},
a63:function a63(a){this.a=a},
a66:function a66(a){this.a=a},
a67:function a67(a){this.a=a},
DZ:function DZ(a,b){this.a=a
this.b=b},
Qk:function Qk(){},
Qm:function Qm(){},
avh(a){return B.Y.d2(0,A.cc(a.buffer,0,null))},
Cy:function Cy(){},
V_:function V_(){},
V0:function V0(a,b){this.a=a
this.b=b},
V1:function V1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2J:function a2J(a,b){this.a=a
this.b=b},
Uo:function Uo(){},
azl(a){var s,r,q,p,o=B.c.a7("-",80),n=A.a([],t.mp),m=a.split("\n"+o+"\n")
for(o=m.length,s=0;s<o;++s){r=m[s]
q=J.at(r)
p=q.ek(r,"\n\n")
if(p>=0){q.U(r,0,p).split("\n")
q.bB(r,p+2)
n.push(new A.vX())}else n.push(new A.vX())}return n},
ap_(a){switch(a){case"AppLifecycleState.paused":return B.Dm
case"AppLifecycleState.resumed":return B.Dk
case"AppLifecycleState.inactive":return B.Dl
case"AppLifecycleState.detached":return B.Dn}return null},
qH:function qH(){},
a6r:function a6r(a){this.a=a},
abm:function abm(){},
abn:function abn(a){this.a=a},
abo:function abo(a){this.a=a},
axr(a){var s,r,q=a.c,p=B.Vo.j(0,q)
if(p==null)p=new A.k(q)
q=a.d
s=B.VC.j(0,q)
if(s==null)s=new A.e(q)
r=a.a
switch(a.b.a){case 0:return new A.nh(p,s,a.e,r,a.f)
case 1:return new A.l8(p,s,null,r,a.f)
case 2:return new A.vU(p,s,a.e,r,!1)}},
pW:function pW(a){this.a=a},
l7:function l7(){},
nh:function nh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
l8:function l8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vU:function vU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ZH:function ZH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null},
vS:function vS(a,b){this.a=a
this.b=b},
vT:function vT(a,b){this.a=a
this.b=b},
G_:function G_(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=null
_.e=c
_.f=d},
O7:function O7(){},
a0p:function a0p(){},
e:function e(a){this.a=a},
k:function k(a){this.a=a},
O8:function O8(){},
a2L(a,b,c,d){return new A.x2(a,c,b,d)},
axX(a){return new A.ws(a)},
ir:function ir(a,b){this.a=a
this.b=b},
x2:function x2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ws:function ws(a){this.a=a},
a8A:function a8A(){},
a_S:function a_S(){},
a_U:function a_U(){},
a8k:function a8k(){},
a8l:function a8l(a,b){this.a=a
this.b=b},
a8o:function a8o(){},
aAx(a){var s,r,q
for(s=A.m(a),s=s.h("@<1>").T(s.z[1]),r=new A.c5(J.ao(a.a),a.b,s.h("c5<1,2>")),s=s.z[1];r.q();){q=r.a
if(q==null)q=s.a(q)
if(!q.k(0,B.d7))return q}return null},
a1q:function a1q(a,b){this.a=a
this.b=b},
wu:function wu(){},
cJ:function cJ(){},
N5:function N5(){},
R7:function R7(a,b){this.a=a
this.b=b},
iK:function iK(a){this.a=a},
OD:function OD(){},
kw:function kw(a,b,c){this.a=a
this.b=b
this.$ti=c},
Um:function Um(a,b){this.a=a
this.b=b},
nr:function nr(a,b,c){this.a=a
this.b=b
this.c=c},
a1d:function a1d(a,b){this.a=a
this.b=b},
li:function li(a,b,c){this.a=a
this.b=b
this.c=c},
az_(a){var s,r,q,p,o={}
o.a=null
s=new A.a3p(o,a).$0()
r=$.aiJ().d
q=A.m(r).h("aP<1>")
p=A.jC(new A.aP(r,q),q.h("o.E")).v(0,s.gen())
q=J.aW(a,"type")
q.toString
A.bh(q)
switch(q){case"keydown":return new A.iC(o.a,p,s)
case"keyup":return new A.qp(null,!1,s)
default:throw A.b(A.vh("Unknown key event type: "+q))}},
l9:function l9(a,b){this.a=a
this.b=b},
eU:function eU(a,b){this.a=a
this.b=b},
xe:function xe(){},
fl:function fl(){},
a3p:function a3p(a,b){this.a=a
this.b=b},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
qp:function qp(a,b,c){this.a=a
this.b=b
this.c=c},
a3q:function a3q(a,b){this.a=a
this.d=b},
a3r:function a3r(a){this.a=a},
cr:function cr(a,b){this.a=a
this.b=b},
PF:function PF(){},
PE:function PE(){},
a3m:function a3m(){},
a3n:function a3n(){},
a3o:function a3o(){},
JD:function JD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xI:function xI(a,b){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=!1
_.r=a
_.x1$=0
_.x2$=b
_.y1$=_.xr$=0
_.y2$=!1},
a4L:function a4L(a){this.a=a},
a4M:function a4M(a){this.a=a},
cK:function cK(a,b,c,d,e,f){var _=this
_.a=a
_.b=null
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=_.w=!1},
a4I:function a4I(){},
a4J:function a4J(){},
a4H:function a4H(){},
a4K:function a4K(){},
akq(a,b,c,d){var s=b<c,r=s?b:c
return new A.Lq(b,c,a,d,r,s?c:b)},
Lq:function Lq(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.a=e
_.b=f},
Ln:function Ln(a){var _=this
_.a=$
_.b=null
_.c=$
_.d=a},
a9g:function a9g(a){this.a=a},
a9e:function a9e(){},
a9d:function a9d(a,b){this.a=a
this.b=b},
a9f:function a9f(a){this.a=a},
aCi(a){var s=A.b8("parent")
a.l_(new A.agA(s))
return s.ap()},
aiX(a,b){var s,r=t.ke,q=a.e4(r)
for(;s=q!=null,s;){if(J.f(b.$1(q),!0))break
q=A.aCi(q).e4(r)}return s},
amA(a){var s={}
s.a=null
A.aiX(a,new A.TJ(s))
return B.E2},
amz(a,b,c){var s=A.A(b),r=a.r.j(0,s)
if(c.h("cQ<0>?").b(r))return r
else return null},
avd(a,b,c){var s={}
s.a=null
A.aiX(a,new A.TL(s,b,a,c))
return s.a},
agA:function agA(a){this.a=a},
TH:function TH(){},
TJ:function TJ(a){this.a=a},
TL:function TL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M3:function M3(){},
apA(){var s=$.aw
s.toString
return s},
az5(a,b){return new A.lx(a,B.N,b.h("lx<0>"))},
LY(){var s=null,r=A.a([],t.kf),q=$.a9,p=A.a([],t.kC),o=A.bn(7,s,!1,t.tI),n=t.S,m=A.cI(n),l=t.u3,k=A.a([],l)
l=A.a([],l)
r=new A.LX(s,$,r,!0,new A.aQ(new A.a7(q,t.D),t.h),!1,s,!1,!1,s,$,s,!1,0,!1,$,$,new A.R6(A.aU(t.Q)),$,$,$,$,s,p,s,A.aDb(),new A.FC(A.aDa(),o,t.f7),!1,0,A.z(n,t.b1),m,k,l,s,!1,B.cQ,!0,!1,s,B.v,B.v,s,0,s,!1,s,A.jD(s,t.cL),new A.a30(A.z(n,t.p6),A.z(t.yd,t.rY)),new A.Zc(A.z(n,t.eK)),new A.a33(),A.z(n,t.ln),$,!1,B.HO)
r.Qw()
return r},
afM:function afM(a,b,c){this.a=a
this.b=b
this.c=c},
afN:function afN(a){this.a=a},
z5:function z5(){},
afL:function afL(a,b){this.a=a
this.b=b},
a9R:function a9R(a,b){this.a=a
this.b=b},
nJ:function nJ(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.$ti=e},
a47:function a47(a,b,c){this.a=a
this.b=b
this.c=c},
a48:function a48(a){this.a=a},
lx:function lx(a,b,c){var _=this
_.ch=_.ad=_.D=null
_.CW=!1
_.d=_.c=_.b=_.a=_.cx=null
_.e=$
_.f=a
_.r=null
_.w=b
_.z=_.y=null
_.Q=!1
_.as=!0
_.ay=_.ax=_.at=!1
_.$ti=c},
LX:function LX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4){var _=this
_.ad$=a
_.dl$=b
_.F$=c
_.ak$=d
_.ah$=e
_.ar$=f
_.av$=g
_.aw$=h
_.p3$=i
_.p4$=j
_.R8$=k
_.RG$=l
_.rx$=m
_.ry$=n
_.to$=o
_.rF$=p
_.fS$=q
_.yy$=r
_.by$=s
_.bt$=a0
_.bM$=a1
_.aV$=a2
_.bs$=a3
_.e$=a4
_.f$=a5
_.r$=a6
_.w$=a7
_.x$=a8
_.y$=a9
_.z$=b0
_.Q$=b1
_.as$=b2
_.at$=b3
_.ax$=b4
_.ay$=b5
_.ch$=b6
_.CW$=b7
_.cx$=b8
_.cy$=b9
_.db$=c0
_.dx$=c1
_.dy$=c2
_.fr$=c3
_.fx$=c4
_.fy$=c5
_.go$=c6
_.id$=c7
_.k1$=c8
_.k2$=c9
_.k3$=d0
_.k4$=d1
_.ok$=d2
_.p1$=d3
_.p2$=d4
_.a=!1
_.b=0},
BD:function BD(){},
BE:function BE(){},
BF:function BF(){},
BG:function BG(){},
BH:function BH(){},
BI:function BI(){},
BJ:function BJ(){},
aDn(a){var s,r,q
for(s=a.length,r=!1,q=0;q<s;++q)switch(a[q].a){case 0:return B.ie
case 2:r=!0
break
case 1:break}return r?B.op:B.dn},
anB(a,b,c,d,e,f,g){return new A.ch(g,a,!0,!0,e,f,A.a([],t.E),$.bi())},
Fk(a,b,c){var s=t.E
return new A.kT(A.a([],s),c,a,!0,!0,null,null,A.a([],s),$.bi())},
Fi(){switch(A.ml().a){case 0:case 1:case 2:if($.aw.p4$.b.a!==0)return B.et
return B.ib
case 3:case 4:case 5:return B.et}},
hz:function hz(a,b){this.a=a
this.b=b},
Ml:function Ml(a,b){this.a=a
this.b=b},
YN:function YN(a){this.a=a},
yZ:function yZ(a,b){this.a=a
this.b=b},
ch:function ch(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f
_.Q=_.y=_.x=_.w=null
_.as=g
_.ax=_.at=null
_.ay=!1
_.x1$=0
_.x2$=h
_.y1$=_.xr$=0
_.y2$=!1},
YO:function YO(){},
kT:function kT(a,b,c,d,e,f,g,h,i){var _=this
_.dx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=null
_.f=f
_.r=g
_.Q=_.y=_.x=_.w=null
_.as=h
_.ax=_.at=null
_.ay=!1
_.x1$=0
_.x2$=i
_.y1$=_.xr$=0
_.y2$=!1},
jr:function jr(a,b){this.a=a
this.b=b},
Fh:function Fh(a,b){this.a=a
this.b=b},
vi:function vi(a,b,c,d,e){var _=this
_.c=_.b=null
_.d=a
_.e=b
_.f=null
_.r=c
_.w=null
_.x=d
_.y=!1
_.x1$=0
_.x2$=e
_.y1$=_.xr$=0
_.y2$=!1},
NC:function NC(){},
ND:function ND(){},
NE:function NE(){},
NF:function NF(){},
aAE(a){a.dC()
a.aM(A.ahG())},
awE(a,b){var s,r,q,p=a.e
p===$&&A.c()
s=b.e
s===$&&A.c()
r=p-s
if(r!==0)return r
q=b.as
if(a.as!==q)return q?-1:1
return 0},
awD(a){a.bP()
a.aM(A.arE())},
v5(a){var s=a.a,r=s instanceof A.kS?s:null
return new A.EX("",r,new A.z_())},
al3(a,b,c,d){var s=new A.bx(b,c,"widgets library",a,d,!1)
A.dp(s)
return s},
hu:function hu(){},
ju:function ju(a,b){this.a=a
this.$ti=b},
i:function i(){},
aC:function aC(){},
vW:function vW(){},
ok:function ok(a,b){this.a=a
this.b=b},
NX:function NX(a){this.a=!1
this.b=a},
acJ:function acJ(a,b){this.a=a
this.b=b},
UI:function UI(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=!1
_.e=null
_.f=c
_.r=0
_.w=!1
_.y=_.x=null
_.z=d},
UJ:function UJ(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function ak(){},
XN:function XN(a){this.a=a},
XO:function XO(a){this.a=a},
XK:function XK(a){this.a=a},
XM:function XM(){},
XL:function XL(a){this.a=a},
EX:function EX(a,b,c){this.d=a
this.e=b
this.a=c},
bA:function bA(){},
a45:function a45(a){this.a=a},
a46:function a46(a){this.a=a},
xK:function xK(){},
G5:function G5(a,b){var _=this
_.ch=null
_.CW=!1
_.d=_.c=_.b=_.a=_.cx=null
_.e=$
_.f=a
_.r=null
_.w=b
_.z=_.y=null
_.Q=!1
_.as=!0
_.ay=_.ax=_.at=!1},
ne:function ne(a,b,c){this.a=a
this.b=b
this.$ti=c},
OP:function OP(a,b){var _=this
_.d=_.c=_.b=_.a=null
_.e=$
_.f=a
_.r=null
_.w=b
_.z=_.y=null
_.Q=!1
_.as=!0
_.ay=_.ax=_.at=!1},
OQ:function OQ(a){this.a=a},
a2P:function a2P(){},
E7:function E7(a,b){this.a=a
this.d=b},
qx:function qx(a,b){this.a=a
this.b=b},
Ff:function Ff(){},
a03:function a03(){},
FB:function FB(){},
ZN:function ZN(a,b){this.a=a
this.b=b},
ZL:function ZL(a,b){this.a=a
this.b=b},
J5:function J5(a,b){this.b=a
this.a=b},
UH:function UH(){},
a9G:function a9G(){},
a2O:function a2O(){},
JI:function JI(){},
a3G:function a3G(a){this.a=a},
a2U:function a2U(a){this.a=a},
aym(a,b,c){var s,r=$.aiI()
A.F_(a)
s=r.a.get(a)===B.ee
if(s)throw A.b(A.kt("`const Object()` cannot be used as the token."))
A.F_(a)
if(b!==r.a.get(a))throw A.b(A.kt("Platform interfaces must not be implemented with `implements`"))},
a2M:function a2M(){},
a1b:function a1b(){},
a1c:function a1c(){},
nF:function nF(a,b){this.a=a
this.b=b},
a9D:function a9D(){},
a9E:function a9E(a){this.a=a
this.b=!1},
I7(a){var s=new A.bv(new Float64Array(16))
if(s.i4(a)===0)return null
return s},
axT(){return new A.bv(new Float64Array(16))},
axU(){var s=new A.bv(new Float64Array(16))
s.e5()
return s},
I6(a,b,c){var s=new Float64Array(16),r=new A.bv(s)
r.e5()
s[14]=c
s[13]=b
s[12]=a
return r},
wn(a,b,c){var s=new Float64Array(16)
s[15]=1
s[10]=c
s[5]=b
s[0]=a
return new A.bv(s)},
bv:function bv(a){this.a=a},
fu:function fu(a){this.a=a},
iP:function iP(a){this.a=a},
ai2(){var s=0,r=A.R(t.H)
var $async$ai2=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:s=2
return A.G(A.aiv(new A.ai3(),new A.ai4()),$async$ai2)
case 2:return A.P(null,r)}})
return A.Q($async$ai2,r)},
ai4:function ai4(){},
ai3:function ai3(){},
ax5(a,b){var s=a.a0(t.aT),r=s==null?null:s.f
if(r==null)return null
return r},
axx(a){return $.axw.j(0,a).ga63()},
arO(a){return t.mE.b(a)||t.j3.b(a)||t.bk.b(a)||t.y2.b(a)||t.mA.b(a)||t.fW.b(a)||t.aL.b(a)},
as4(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
T2(a,b,c,d,e){return A.aDq(a,b,c,d,e,e)},
aDq(a,b,c,d,e,f){var s=0,r=A.R(f),q
var $async$T2=A.L(function(g,h){if(g===1)return A.O(h,r)
while(true)switch(s){case 0:s=3
return A.G(null,$async$T2)
case 3:q=a.$1(b)
s=1
break
case 1:return A.P(q,r)}})
return A.Q($async$T2,r)},
alM(a,b){var s,r,q
if(a==null)return b==null
if(b==null||a.a!==b.a)return!1
if(a===b)return!0
for(s=A.h6(a,a.r,A.m(a).c),r=s.$ti.c;s.q();){q=s.d
if(!b.v(0,q==null?r.a(q):q))return!1}return!0},
dR(a,b){var s
if(a==null)return b==null
if(b==null||a.length!==b.length)return!1
if(a===b)return!0
for(s=0;s<a.length;++s)if(!J.f(a[s],b[s]))return!1
return!0},
j7(a){if(a==null)return"null"
return B.d.J(a,1)},
J(a,b,c){if(a<b)return b
if(a>c)return c
if(isNaN(a))return c
return a},
arp(a,b){var s=t.s,r=A.a(a.split("\n"),s)
$.Ts().I(0,r)
if(!$.al2)A.aqs()},
aqs(){var s,r=$.al2=!1,q=$.am8()
if(A.cg(q.gIv(),0,0).a>1e6){if(q.b==null)q.b=$.Jq.$0()
q.eL(0)
$.SV=0}while(!0){if($.SV<12288){q=$.Ts()
q=!q.gO(q)}else q=r
if(!q)break
s=$.Ts().mJ()
$.SV=$.SV+s.length
A.as4(s)}r=$.Ts()
if(!r.gO(r)){$.al2=!0
$.SV=0
A.cw(B.dg,A.aEP())
if($.agk==null)$.agk=new A.aQ(new A.a7($.a9,t.D),t.h)}else{$.am8().n3(0)
r=$.agk
if(r!=null)r.di(0)
$.agk=null}},
ajX(a){var s=a.a
if(s[0]===1&&s[1]===0&&s[2]===0&&s[3]===0&&s[4]===0&&s[5]===1&&s[6]===0&&s[7]===0&&s[8]===0&&s[9]===0&&s[10]===1&&s[11]===0&&s[14]===0&&s[15]===1)return new A.v(s[12],s[13])
return null},
axW(a,b){var s,r
if(a===b)return!0
if(a==null)return A.ajY(b)
s=a.a
r=b.a
return s[0]===r[0]&&s[1]===r[1]&&s[2]===r[2]&&s[3]===r[3]&&s[4]===r[4]&&s[5]===r[5]&&s[6]===r[6]&&s[7]===r[7]&&s[8]===r[8]&&s[9]===r[9]&&s[10]===r[10]&&s[11]===r[11]&&s[12]===r[12]&&s[13]===r[13]&&s[14]===r[14]&&s[15]===r[15]},
ajY(a){var s=a.a
return s[0]===1&&s[1]===0&&s[2]===0&&s[3]===0&&s[4]===0&&s[5]===1&&s[6]===0&&s[7]===0&&s[8]===0&&s[9]===0&&s[10]===1&&s[11]===0&&s[12]===0&&s[13]===0&&s[14]===0&&s[15]===1},
dc(a,b){var s=a.a,r=b.a,q=b.b,p=s[0]*r+s[4]*q+s[12],o=s[1]*r+s[5]*q+s[13],n=s[3]*r+s[7]*q+s[15]
if(n===1)return new A.v(p,o)
else return new A.v(p/n,o/n)},
a0W(a,b,c,d,e){var s,r=e?1:1/(a[3]*b+a[7]*c+a[15]),q=(a[0]*b+a[4]*c+a[12])*r,p=(a[1]*b+a[5]*c+a[13])*r
if(d){s=$.aiH()
s[2]=q
s[0]=q
s[3]=p
s[1]=p}else{s=$.aiH()
if(q<s[0])s[0]=q
if(p<s[1])s[1]=p
if(q>s[2])s[2]=q
if(p>s[3])s[3]=p}},
iq(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=b1.a,a5=b2.a,a6=b2.b,a7=b2.c,a8=a7-a5,a9=b2.d,b0=a9-a6
if(!isFinite(a8)||!isFinite(b0)){s=a4[3]===0&&a4[7]===0&&a4[15]===1
A.a0W(a4,a5,a6,!0,s)
A.a0W(a4,a7,a6,!1,s)
A.a0W(a4,a5,a9,!1,s)
A.a0W(a4,a7,a9,!1,s)
a7=$.aiH()
return new A.D(a7[0],a7[1],a7[2],a7[3])}a7=a4[0]
r=a7*a8
a9=a4[4]
q=a9*b0
p=a7*a5+a9*a6+a4[12]
a9=a4[1]
o=a9*a8
a7=a4[5]
n=a7*b0
m=a9*a5+a7*a6+a4[13]
a7=a4[3]
if(a7===0&&a4[7]===0&&a4[15]===1){l=p+r
if(r<0)k=p
else{k=l
l=p}if(q<0)l+=q
else k+=q
j=m+o
if(o<0)i=m
else{i=j
j=m}if(n<0)j+=n
else i+=n
return new A.D(l,j,k,i)}else{a9=a4[7]
h=a9*b0
g=a7*a5+a9*a6+a4[15]
f=p/g
e=m/g
a9=p+r
a7=g+a7*a8
d=a9/a7
c=m+o
b=c/a7
a=g+h
a0=(p+q)/a
a1=(m+n)/a
a7+=h
a2=(a9+q)/a7
a3=(c+n)/a7
return new A.D(A.aoa(f,d,a0,a2),A.aoa(e,b,a1,a3),A.ao9(f,d,a0,a2),A.ao9(e,b,a1,a3))}},
aoa(a,b,c,d){var s=a<b?a:b,r=c<d?c:d
return s<r?s:r},
ao9(a,b,c,d){var s=a>b?a:b,r=c>d?c:d
return s>r?s:r},
aoc(a,b){var s
if(A.ajY(a))return b
s=new A.bv(new Float64Array(16))
s.bf(a)
s.i4(s)
return A.iq(s,b)},
a8O(){var s=0,r=A.R(t.H)
var $async$a8O=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:s=2
return A.G(B.dN.hD("SystemNavigator.pop",null,t.H),$async$a8O)
case 2:return A.P(null,r)}})
return A.Q($async$a8O,r)},
arv(a){if(!B.c.bb(a,"/"))return"/"+a
return a},
aF_(a){if(B.c.jc(a,"/"))return B.c.U(a,0,a.length-1)
return a},
Td(){var s=0,r=A.R(t.z),q,p,o,n
var $async$Td=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:n=$.atE()
n=n==null?null:n.getAttribute("href")
if(n==null)A.X(A.bH("Please add a <base> element to your index.html"))
if(!J.auG(n,"/"))A.X(A.bH('The base href has to end with a "/" to work correctly'))
q=$.auo()
q.href=n
p=q.pathname
if(p==null)p=""
n=new A.J5(A.aF_(p.length===0||p[0]==="/"?p:"/"+p),B.E7)
o={getPath:A.ae(n.gLQ(n)),getState:A.ae(n.gM_(n)),addPopStateListener:A.ae(n.ga_4(n)),prepareExternalUrl:A.ae(n.ga4m(n)),pushState:A.ae(n.ga4r(n)),replaceState:A.ae(n.ga4W(n)),go:A.ae(n.gM1(n))}
o=o
self._flutter_web_set_location_strategy.$1(o)
s=2
return A.G(A.aEy("app"),$async$Td)
case 2:A.aDh("app")
n=C.avg()
if($.aw==null)A.LY()
q=$.aw
q.M7(n)
q.B1()
return A.P(null,r)}})
return A.Q($async$Td,r)}},J={
alC(a,b,c,d){return{i:a,p:b,e:c,x:d}},
T7(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.alw==null){A.aEh()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.c6("Return interceptor for "+A.h(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.acW
if(o==null)o=$.acW=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.aEB(a)
if(p!=null)return p
if(typeof a=="function")return B.J6
s=Object.getPrototypeOf(a)
if(s==null)return B.BB
if(s===Object.prototype)return B.BB
if(typeof q=="function"){o=$.acW
if(o==null)o=$.acW=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.ml,enumerable:false,writable:true,configurable:true})
return B.ml}return B.ml},
ajJ(a,b){if(a<0||a>4294967295)throw A.b(A.bC(a,0,4294967295,"length",null))
return J.pO(new Array(a),b)},
pN(a,b){if(a<0)throw A.b(A.bT("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.h("t<0>"))},
l5(a,b){if(a<0)throw A.b(A.bT("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.h("t<0>"))},
pO(a,b){return J.a_Q(A.a(a,b.h("t<0>")))},
a_Q(a){a.fixed$length=Array
return a},
anR(a){a.fixed$length=Array
a.immutable$list=Array
return a},
axm(a,b){return J.Ce(a,b)},
anS(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ajL(a,b){var s,r
for(s=a.length;b<s;){r=B.c.a4(a,b)
if(r!==32&&r!==13&&!J.anS(r))break;++b}return b},
ajM(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.c.aE(a,s)
if(r!==32&&r!==13&&!J.anS(r))break}return b},
j9(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.pP.prototype
return J.vP.prototype}if(typeof a=="string")return J.im.prototype
if(a==null)return J.pQ.prototype
if(typeof a=="boolean")return J.vN.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.io.prototype
return a}if(a instanceof A.B)return a
return J.T7(a)},
aE7(a){if(typeof a=="number")return J.l6.prototype
if(typeof a=="string")return J.im.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.io.prototype
return a}if(a instanceof A.B)return a
return J.T7(a)},
at(a){if(typeof a=="string")return J.im.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.io.prototype
return a}if(a instanceof A.B)return a
return J.T7(a)},
bV(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.io.prototype
return a}if(a instanceof A.B)return a
return J.T7(a)},
aE8(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.pP.prototype
return J.vP.prototype}if(a==null)return a
if(!(a instanceof A.B))return J.iO.prototype
return a},
als(a){if(typeof a=="number")return J.l6.prototype
if(a==null)return a
if(!(a instanceof A.B))return J.iO.prototype
return a},
arF(a){if(typeof a=="number")return J.l6.prototype
if(typeof a=="string")return J.im.prototype
if(a==null)return a
if(!(a instanceof A.B))return J.iO.prototype
return a},
tn(a){if(typeof a=="string")return J.im.prototype
if(a==null)return a
if(!(a instanceof A.B))return J.iO.prototype
return a},
cp(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.io.prototype
return a}if(a instanceof A.B)return a
return J.T7(a)},
i3(a){if(a==null)return a
if(!(a instanceof A.B))return J.iO.prototype
return a},
auA(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.aE7(a).X(a,b)},
f(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.j9(a).k(a,b)},
auB(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.arF(a).a7(a,b)},
auC(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.als(a).a9(a,b)},
aW(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.arQ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.at(a).j(a,b)},
d_(a,b,c){if(typeof b==="number")if((a.constructor==Array||A.arQ(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.bV(a).l(a,b,c)},
hd(a,b){return J.bV(a).C(a,b)},
auD(a,b,c,d){return J.cp(a).qV(a,b,c,d)},
amp(a,b){return J.tn(a).xp(a,b)},
cE(a,b){return J.bV(a).hl(a,b)},
auE(a,b,c){return J.bV(a).kf(a,b,c)},
aiU(a){return J.cp(a).bg(a)},
amq(a,b){return J.tn(a).aE(a,b)},
Ce(a,b){return J.arF(a).b4(a,b)},
auF(a){return J.i3(a).di(a)},
aiV(a,b){return J.at(a).v(a,b)},
e8(a,b){return J.cp(a).V(a,b)},
Cf(a,b){return J.bV(a).aq(a,b)},
auG(a,b){return J.tn(a).jc(a,b)},
auH(a,b){return J.bV(a).jl(a,b)},
auI(a,b,c){return J.bV(a).oD(a,b,c)},
oL(a,b){return J.bV(a).R(a,b)},
auJ(a){return J.bV(a).gex(a)},
amr(a){return J.cp(a).gfR(a)},
TB(a){return J.bV(a).gH(a)},
q(a){return J.j9(a).gu(a)},
i4(a){return J.at(a).gO(a)},
Cg(a){return J.at(a).gbE(a)},
ao(a){return J.bV(a).gP(a)},
Ch(a){return J.cp(a).gbh(a)},
Ci(a){return J.bV(a).gM(a)},
bw(a){return J.at(a).gm(a)},
auK(a){return J.cp(a).gzH(a)},
Z(a){return J.j9(a).gcE(a)},
auL(a){return J.cp(a).gMt(a)},
f4(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.aE8(a).guk(a)},
ams(a){return J.cp(a).gdr(a)},
auM(a){return J.cp(a).glf(a)},
kq(a){return J.i3(a).gp(a)},
amt(a){return J.cp(a).gaR(a)},
auN(a,b,c){return J.bV(a).pB(a,b,c)},
aiW(a,b){return J.i3(a).bS(a,b)},
auO(a){return J.i3(a).oL(a)},
auP(a){return J.bV(a).z9(a)},
amu(a,b){return J.bV(a).b0(a,b)},
auQ(a,b){return J.i3(a).a6g(a,b)},
ja(a,b,c){return J.bV(a).io(a,b,c)},
auR(a,b,c,d){return J.bV(a).oQ(a,b,c,d)},
auS(a,b){return J.j9(a).G(a,b)},
auT(a){return J.i3(a).zx(a)},
auU(a){return J.i3(a).Kb(a)},
auV(a){return J.i3(a).Kd(a)},
auW(a,b,c,d){return J.cp(a).a4a(a,b,c,d)},
Cj(a,b,c){return J.cp(a).bm(a,b,c)},
auX(a){return J.bV(a).kR(a)},
mu(a,b){return J.bV(a).t(a,b)},
auY(a,b,c,d){return J.cp(a).KK(a,b,c,d)},
auZ(a){return J.bV(a).fp(a)},
av_(a,b){return J.cp(a).N(a,b)},
TC(a){return J.als(a).bk(a)},
amv(a,b){return J.i3(a).b1(a,b)},
av0(a,b){return J.cp(a).eu(a,b)},
av1(a,b){return J.at(a).sm(a,b)},
av2(a,b,c,d,e){return J.bV(a).aY(a,b,c,d,e)},
TD(a,b){return J.bV(a).fz(a,b)},
av3(a,b){return J.bV(a).ds(a,b)},
av4(a,b){return J.tn(a).ML(a,b)},
av5(a){return J.i3(a).Bv(a)},
amw(a,b){return J.bV(a).hM(a,b)},
amx(a){return J.bV(a).e_(a)},
av6(a,b){return J.als(a).hO(a,b)},
av7(a){return J.bV(a).hP(a)},
dT(a){return J.j9(a).i(a)},
av8(a){return J.tn(a).mQ(a)},
av9(a){return J.tn(a).a5w(a)},
ava(a){return J.tn(a).Aw(a)},
avb(a,b){return J.i3(a).a5F(a,b)},
pL:function pL(){},
vN:function vN(){},
pQ:function pQ(){},
d:function d(){},
p:function p(){},
Ji:function Ji(){},
iO:function iO(){},
io:function io(){},
t:function t(a){this.$ti=a},
a_V:function a_V(a){this.$ti=a},
f6:function f6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
l6:function l6(){},
pP:function pP(){},
vP:function vP(){},
im:function im(){}},B={},C={},D={}
var w=[A,J,B,C,D]
var $={}
A.tv.prototype={
sy6(a){var s,r,q,p=this
if(J.f(a,p.c))return
if(a==null){p.v7()
p.c=null
return}s=p.a.$0()
r=a.a
q=s.a
if(r<q){p.v7()
p.c=a
return}if(p.b==null)p.b=A.cw(A.cg(0,r-q,0),p.gwX())
else if(p.c.a>r){p.v7()
p.b=A.cw(A.cg(0,r-q,0),p.gwX())}p.c=a},
v7(){var s=this.b
if(s!=null)s.aA(0)
this.b=null},
Z7(){var s=this,r=s.a.$0(),q=s.c,p=r.a
q=q.a
if(p>=q){s.b=null
q=s.d
if(q!=null)q.$0()}else s.b=A.cw(A.cg(0,q-p,0),s.gwX())}}
A.TP.prototype={
lW(){var s=0,r=A.R(t.H),q=this
var $async$lW=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:s=2
return A.G(q.a.$0(),$async$lW)
case 2:s=3
return A.G(q.b.$0(),$async$lW)
case 3:return A.P(null,r)}})
return A.Q($async$lW,r)},
a4l(){var s=A.ae(new A.TU(this))
return t.e.a({initializeEngine:A.ae(new A.TV(this)),autoStart:s})},
XB(){return t.e.a({runApp:A.ae(new A.TR(this))})}}
A.TU.prototype={
$0(){return new self.Promise(A.ae(new A.TT(this.a)),t.e)},
$S:144}
A.TT.prototype={
$2(a,b){var s=0,r=A.R(t.H),q=this
var $async$$2=A.L(function(c,d){if(c===1)return A.O(d,r)
while(true)switch(s){case 0:s=2
return A.G(q.a.lW(),$async$$2)
case 2:a.$1(t.e.a({}))
return A.P(null,r)}})
return A.Q($async$$2,r)},
$S:48}
A.TV.prototype={
$1(a){return new self.Promise(A.ae(new A.TS(this.a)),t.e)},
$0(){return this.$1(null)},
$C:"$1",
$R:0,
$D(){return[null]},
$S:99}
A.TS.prototype={
$2(a,b){var s=0,r=A.R(t.H),q=this,p
var $async$$2=A.L(function(c,d){if(c===1)return A.O(d,r)
while(true)switch(s){case 0:p=q.a
s=2
return A.G(p.a.$0(),$async$$2)
case 2:a.$1(p.XB())
return A.P(null,r)}})
return A.Q($async$$2,r)},
$S:48}
A.TR.prototype={
$1(a){return new self.Promise(A.ae(new A.TQ(this.a)),t.e)},
$0(){return this.$1(null)},
$C:"$1",
$R:0,
$D(){return[null]},
$S:99}
A.TQ.prototype={
$2(a,b){var s=0,r=A.R(t.H),q=this
var $async$$2=A.L(function(c,d){if(c===1)return A.O(d,r)
while(true)switch(s){case 0:s=2
return A.G(q.a.b.$0(),$async$$2)
case 2:a.$1(t.e.a({}))
return A.P(null,r)}})
return A.Q($async$$2,r)},
$S:48}
A.U_.prototype={
gRo(){var s,r=t.sM
r=A.hj(new A.m2(self.window.document.querySelectorAll("meta"),r),r.h("o.E"),t.e)
s=A.m(r)
s=A.awW(new A.dW(new A.aN(r,new A.U0(),s.h("aN<o.E>")),new A.U1(),s.h("dW<o.E,d>")),new A.U2())
return s==null?null:s.content},
tY(a){var s
if(A.jZ(a,0,null).gJ5())return A.RQ(B.iz,a,B.Y,!1)
s=this.gRo()
if(s==null)s=""
return A.RQ(B.iz,s+("assets/"+a),B.Y,!1)},
co(a,b){return this.a3D(0,b)},
a3D(a,b){var s=0,r=A.R(t.yp),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$co=A.L(function(a0,a1){if(a0===1){o=a1
s=p}while(true)switch(s){case 0:d=n.tY(b)
p=4
s=7
return A.G(A.aDO(d,"arraybuffer"),$async$co)
case 7:m=a1
l=t.B.a(m.response)
f=A.fi(l,0,null)
q=f
s=1
break
p=2
s=6
break
case 4:p=3
c=o
k=A.ab(c)
f=self.window.ProgressEvent
f.toString
if(!(k instanceof f))throw c
j=t.e.a(k)
i=j.target
f=self.window.XMLHttpRequest
f.toString
if(i instanceof f){f=i
f.toString
h=f
if(h.status===404&&b==="AssetManifest.json"){$.bX().$1("Asset manifest does not exist at `"+A.h(d)+"` \u2013 ignoring.")
q=A.fi(new Uint8Array(A.ki(B.Y.gop().cT("{}"))).buffer,0,null)
s=1
break}f=A.awy(h)
f.toString
throw A.b(new A.oQ(d,f))}g=i==null?"null":A.aDN(i)
$.bX().$1("Caught ProgressEvent with unknown target: "+A.h(g))
throw c
s=6
break
case 3:s=2
break
case 6:case 1:return A.P(q,r)
case 2:return A.O(o,r)}})
return A.Q($async$co,r)}}
A.U0.prototype={
$1(a){var s=self.window.HTMLMetaElement
s.toString
return a instanceof s},
$S:85}
A.U1.prototype={
$1(a){return a},
$S:56}
A.U2.prototype={
$1(a){return a.name==="assetBase"},
$S:85}
A.oQ.prototype={
i(a){return'Failed to load asset at "'+this.a+'" ('+this.b+")"},
$ibB:1}
A.i6.prototype={
i(a){return"BrowserEngine."+this.b}}
A.hG.prototype={
i(a){return"OperatingSystem."+this.b}}
A.Vb.prototype={
gaO(a){var s,r=this.d
if(r==null){this.vt()
s=this.d
s.toString
r=s}return r},
gbY(){if(this.y==null)this.vt()
var s=this.e
s.toString
return s},
vt(){var s,r,q,p,o,n,m,l,k=this,j=!1,i=null,h=k.y
if(h!=null){h.width=0
h=k.y
h.toString
h.height=0
k.y=null}h=k.x
if(h!=null&&h.length!==0){h.toString
s=B.b.fo(h,0)
k.y=s
i=s
j=!0
r=!0}else{h=k.f
q=A.b_()
p=k.r
o=A.b_()
i=k.Cw(h,p)
n=i
k.y=n
if(n==null){A.as7()
i=k.Cw(h,p)}n=i.style
A.r(n,"position","absolute")
A.r(n,"width",A.h(h/q)+"px")
A.r(n,"height",A.h(p/o)+"px")
r=!1}if(!J.f(k.z.lastChild,i))k.z.append(i)
try{if(j)i.style.removeProperty("z-index")
h=A.mT(i,"2d",null)
h.toString
k.d=t.e.a(h)}catch(m){}h=k.d
if(h==null){A.as7()
h=A.mT(i,"2d",null)
h.toString
h=k.d=t.e.a(h)}q=k.as
k.e=new A.VP(h,k,q,B.ec,B.cV,B.mb)
l=k.gaO(k)
l.save();++k.Q
A.H(l,"setTransform",[1,0,0,1,0,0])
if(r)l.clearRect(0,0,k.f*q,k.r*q)
l.scale(A.b_()*q,A.b_()*q)
k.XZ()},
Cw(a,b){var s=this.as
return A.aFd(B.d.dh(a*s),B.d.dh(b*s))},
L(a){var s,r,q,p,o,n=this
n.PN(0)
if(n.y!=null){s=n.d
if(s!=null)try{s.font=""}catch(q){r=A.ab(q)
if(!J.f(r.name,"NS_ERROR_FAILURE"))throw q}}if(n.y!=null){n.wF()
n.e.eL(0)
p=n.w
if(p==null)p=n.w=A.a([],t.J)
o=n.y
o.toString
p.push(o)
n.e=n.d=null}n.x=n.w
n.e=n.d=n.y=n.w=null},
Fm(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.gaO(i)
if(d!=null)for(s=d.length,r=i.as,q=t.n;a<s;++a){p=d[a]
o=p.d
n=o.a
m=b.a
if(n[0]!==m[0]||n[1]!==m[1]||n[4]!==m[4]||n[5]!==m[5]||n[12]!==m[12]||n[13]!==m[13]){m=self.window.devicePixelRatio
l=(m===0?1:m)*r
h.setTransform.apply(h,[l,0,0,l,0,0])
h.transform.apply(h,[n[0],n[1],n[4],n[5],n[12],n[13]])
b=o}n=p.a
if(n!=null){h.beginPath()
m=n.a
k=n.b
h.rect(m,k,n.c-m,n.d-k)
h.clip.apply(h,[])}else{n=p.b
if(n!=null){j=A.eg()
j.f2(n)
i.lK(h,q.a(j))
h.clip.apply(h,[])}else{n=p.c
if(n!=null){i.lK(h,n)
if(n.b===B.bq)h.clip.apply(h,[])
else{n=[]
n.push("evenodd")
h.clip.apply(h,n)}}}}}r=c.a
q=b.a
if(r[0]!==q[0]||r[1]!==q[1]||r[4]!==q[4]||r[5]!==q[5]||r[12]!==q[12]||r[13]!==q[13]){l=A.b_()*i.as
A.H(h,"setTransform",[l,0,0,l,0,0])
A.H(h,"transform",[r[0],r[1],r[4],r[5],r[12],r[13]])}return a},
XZ(){var s,r,q,p,o=this,n=o.gaO(o),m=A.dL(),l=o.a,k=l.length
for(s=0,r=0;r<k;++r,m=p){q=l[r]
p=q.a
s=o.Fm(s,m,p,q.b)
n.save();++o.Q}o.Fm(s,m,o.c,o.b)},
mc(){var s,r,q,p,o=this.x
if(o!=null){for(s=o.length,r=0;r<o.length;o.length===s||(0,A.K)(o),++r){q=o[r]
p=$.c8()
if(p===B.M){q.height=0
q.width=0}q.remove()}this.x=null}this.wF()},
wF(){for(;this.Q!==0;){this.d.restore();--this.Q}},
ag(a,b,c){var s=this
s.PW(0,b,c)
if(s.y!=null)s.gaO(s).translate(b,c)},
S4(a,b){var s,r
a.beginPath()
s=b.a
r=b.b
a.rect(s,r,b.c-s,b.d-r)
A.WB(a,null)},
S3(a,b){var s=A.eg()
s.f2(b)
this.lK(a,t.n.a(s))
A.WB(a,null)},
f9(a,b){var s,r=this
r.PO(0,b)
if(r.y!=null){s=r.gaO(r)
r.lK(s,b)
if(b.b===B.bq)A.WB(s,null)
else A.WB(s,"evenodd")}},
fM(a,b,c){var s,r,q,p=this.gaO(this),o=b.length,n=this.gbY().Q,m=n==null,l=m?0:-n.a,k=m?0:-n.b
switch(a.a){case 0:for(m=t.f,s=0;s<o;s+=2){r=b[s]
q=b[s+1]
p.beginPath()
p.arc.apply(p,A.a([r+l,q+k,c,0,6.283185307179586,!1],m))
p.fill.apply(p,[])}break
case 1:p.beginPath()
for(m=o-2,s=0;s<m;s+=4){p.moveTo(b[s]+l,b[s+1]+k)
p.lineTo(b[s+2]+l,b[s+3]+k)
p.stroke()}break
case 2:p.beginPath()
p.moveTo(b[0]+l,b[1]+k)
for(s=2;s<o;s+=2)p.lineTo(b[s]+l,b[s+1]+k)
p.stroke()
break}},
lK(a,b){var s,r,q,p,o,n,m,l,k,j
a.beginPath()
s=$.alU()
r=b.a
q=new A.nA(r)
q.nf(r)
for(;p=q.jx(0,s),p!==6;)switch(p){case 0:a.moveTo(s[0],s[1])
break
case 1:a.lineTo(s[2],s[3])
break
case 4:a.bezierCurveTo.apply(a,[s[2],s[3],s[4],s[5],s[6],s[7]])
break
case 2:a.quadraticCurveTo(s[2],s[3],s[4],s[5])
break
case 3:o=r.y[q.b]
n=new A.fD(s[0],s[1],s[2],s[3],s[4],s[5],o).As()
m=n.length
for(l=1;l<m;l+=2){k=n[l]
j=n[l+1]
a.quadraticCurveTo(k.a,k.b,j.a,j.b)}break
case 5:a.closePath()
break
default:throw A.b(A.c6("Unknown path verb "+p))}},
Yb(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
a.beginPath()
s=$.alU()
r=b.a
q=new A.nA(r)
q.nf(r)
for(;p=q.jx(0,s),p!==6;)switch(p){case 0:a.moveTo(s[0]+c,s[1]+d)
break
case 1:a.lineTo(s[2]+c,s[3]+d)
break
case 4:a.bezierCurveTo.apply(a,[s[2]+c,s[3]+d,s[4]+c,s[5]+d,s[6]+c,s[7]+d])
break
case 2:a.quadraticCurveTo(s[2]+c,s[3]+d,s[4]+c,s[5]+d)
break
case 3:o=r.y[q.b]
n=new A.fD(s[0],s[1],s[2],s[3],s[4],s[5],o).As()
m=n.length
for(l=1;l<m;l+=2){k=n[l]
j=n[l+1]
a.quadraticCurveTo(k.a+c,k.b+d,j.a+c,j.b+d)}break
case 5:a.closePath()
break
default:throw A.b(A.c6("Unknown path verb "+p))}},
cr(a,b){var s,r=this,q=r.gbY().Q,p=t.n
if(q==null)r.lK(r.gaO(r),p.a(a))
else r.Yb(r.gaO(r),p.a(a),-q.a,-q.b)
p=r.gbY()
s=a.b
if(b===B.U)p.a.stroke()
else{p=p.a
if(s===B.bq)A.WC(p,null)
else A.WC(p,"evenodd")}},
n(){var s=$.c8()
if(s===B.M&&this.y!=null){s=this.y
s.toString
s.height=0
s.width=0}this.S1()},
S1(){var s,r,q,p,o=this.w
if(o!=null)for(s=o.length,r=0;r<o.length;o.length===s||(0,A.K)(o),++r){q=o[r]
p=$.c8()
if(p===B.M){q.height=0
q.width=0}q.remove()}this.w=null}}
A.VP.prototype={
syD(a,b){var s=this.r
if(b==null?s!=null:b!==s){this.r=b
this.a.fillStyle=b}},
sur(a,b){var s=this.w
if(b==null?s!=null:b!==s){this.w=b
this.a.strokeStyle=b}},
iF(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
i.z=a
s=a.c
if(s==null)s=1
if(s!==i.x){i.x=s
i.a.lineWidth=s}s=a.a
if(s!=i.d){i.d=s
s=A.ahh(s)
if(s==null)s="source-over"
i.a.globalCompositeOperation=s}r=a.d
if(r==null)r=B.cV
if(r!==i.e){i.e=r
s=A.aEW(r)
s.toString
i.a.lineCap=s}q=a.e
if(q==null)q=B.mb
if(q!==i.f){i.f=q
i.a.lineJoin=A.aEX(q)}s=a.w
if(s!=null){if(t.bl.b(s)){p=i.b
o=s.a0F(p.gaO(p),b,i.c)
i.syD(0,o)
i.sur(0,o)
i.Q=b
i.a.translate(b.a,b.b)}}else{s=a.r
if(s!=null){n=A.cs(s)
i.syD(0,n)
i.sur(0,n)}else{i.syD(0,"#000000")
i.sur(0,"#000000")}}m=a.x
s=$.c8()
if(!(s===B.M||!1)){if(!J.f(i.y,m)){i.y=m
i.a.filter=A.arU(m)}}else if(m!=null){s=i.a
s.save()
s.shadowBlur=m.b*2
p=a.r
if(p!=null){p=A.cs(A.aE(255,p.gp(p)>>>16&255,p.gp(p)>>>8&255,p.gp(p)&255))
p.toString
s.shadowColor=p}else{p=A.cs(B.m)
p.toString
s.shadowColor=p}s.translate(-5e4,0)
l=new Float32Array(2)
p=$.c4().w
l[0]=5e4*(p==null?A.b_():p)
p=i.b
p.c.L8(l)
k=l[0]
j=l[1]
l[1]=0
l[0]=0
p.c.L8(l)
s.shadowOffsetX=k-l[0]
s.shadowOffsetY=j-l[1]}},
jI(){var s=this,r=s.z
if((r==null?null:r.x)!=null){r=$.c8()
r=r===B.M||!1}else r=!1
if(r)s.a.restore()
r=s.Q
if(r!=null){s.a.translate(-r.a,-r.b)
s.Q=null}},
fY(a){var s=this.a
if(a===B.U)s.stroke()
else A.WC(s,null)},
eL(a){var s=this,r=s.a
r.fillStyle=""
s.r=r.fillStyle
r.strokeStyle=""
s.w=r.strokeStyle
r.shadowBlur=0
r.shadowColor="none"
r.shadowOffsetX=0
r.shadowOffsetY=0
r.globalCompositeOperation="source-over"
s.d=B.ec
r.lineWidth=1
s.x=1
r.lineCap="butt"
s.e=B.cV
r.lineJoin="miter"
s.f=B.mb
s.Q=null}}
A.Qb.prototype={
L(a){B.b.L(this.a)
this.b=null
this.c=A.dL()},
bv(a){var s=this.c,r=new A.bI(new Float32Array(16))
r.bf(s)
s=this.b
s=s==null?null:A.fO(s,!0,t.yv)
this.a.push(new A.Ko(r,s))},
bj(a){var s,r=this.a
if(r.length===0)return
s=r.pop()
this.c=s.a
this.b=s.b},
ag(a,b,c){this.c.ag(0,b,c)},
cN(a,b,c){this.c.cN(0,b,c)},
fq(a,b){this.c.KX(0,$.atq(),b)},
a8(a,b){this.c.cY(0,new A.bI(b))},
j6(a){var s,r,q=this.b
if(q==null)q=this.b=A.a([],t.xK)
s=this.c
r=new A.bI(new Float32Array(16))
r.bf(s)
q.push(new A.nM(a,null,null,r))},
ki(a){var s,r,q=this.b
if(q==null)q=this.b=A.a([],t.xK)
s=this.c
r=new A.bI(new Float32Array(16))
r.bf(s)
q.push(new A.nM(null,a,null,r))},
f9(a,b){var s,r,q=this.b
if(q==null)q=this.b=A.a([],t.xK)
s=this.c
r=new A.bI(new Float32Array(16))
r.bf(s)
q.push(new A.nM(null,null,b,r))}}
A.ea.prototype={
o2(a,b){this.a.clear(A.alh($.aiQ(),b))},
m0(a,b,c){this.a.clipPath(b.ga3(),$.Tr(),c)},
m1(a,b){this.a.clipRRect(A.mr(a),$.Tr(),b)},
m2(a,b,c){this.a.clipRect(A.e6(a),$.amb()[b.a],c)},
dO(a,b,c){this.a.drawCircle(a.a,a.b,b,c.ga3())},
fb(a,b,c){this.a.drawDRRect(A.mr(a),A.mr(b),c.ga3())},
hq(a,b,c,d){var s,r,q,p,o=d.at,n=this.a,m=a.b
if(o===B.di){m===$&&A.c()
A.H(n,"drawImageRectCubic",[m.ga3(),A.e6(b),A.e6(c),0.3333333333333333,0.3333333333333333,d.ga3()])}else{m===$&&A.c()
m=m.ga3()
s=A.e6(b)
r=A.e6(c)
q=o===B.ia?$.ba.az().FilterMode.Nearest:$.ba.az().FilterMode.Linear
p=o===B.es?$.ba.az().MipmapMode.Linear:$.ba.az().MipmapMode.None
A.H(n,"drawImageRectOptions",[m,s,r,q,p,d.ga3()])}},
hr(a,b,c){A.H(this.a,"drawLine",[a.a,a.b,b.a,b.b,c.ga3()])},
hs(a){this.a.drawPaint(a.ga3())},
fc(a,b){var s=a.d
s.toString
this.a.drawParagraph(a.lt(s),b.a,b.b)
if(!$.tt().zl(a))$.tt().C(0,a)},
cr(a,b){this.a.drawPath(a.ga3(),b.ga3())},
yq(a){this.a.drawPicture(a.ga3())},
fM(a,b,c){this.a.drawPoints($.amd()[b.a],c,a.ga3())},
c7(a,b){this.a.drawRRect(A.mr(a),b.ga3())},
c3(a,b){this.a.drawRect(A.e6(a),b.ga3())},
ht(a,b,c,d){var s=$.c4().w
if(s==null)s=A.b_()
A.aru(this.a,a,b,c,d,s)},
bj(a){this.a.restore()},
fq(a,b){this.a.rotate(b*180/3.141592653589793,0,0)},
bv(a){return this.a.save()},
er(a,b){var s=b==null?null:b.ga3()
this.a.saveLayer(s,A.e6(a),null,null)},
cN(a,b,c){this.a.scale(b,c)},
a8(a,b){this.a.concat(A.asf(b))},
ag(a,b,c){this.a.translate(b,c)},
gKk(){return null}}
A.JG.prototype={
o2(a,b){this.N0(0,b)
this.b.b.push(new A.D3(b))},
m0(a,b,c){this.N1(0,b,c)
this.b.b.push(new A.D4(b,c))},
m1(a,b){this.N2(a,b)
this.b.b.push(new A.D5(a,b))},
m2(a,b,c){this.N3(a,b,c)
this.b.b.push(new A.D6(a,b,c))},
dO(a,b,c){this.N4(a,b,c)
this.b.b.push(new A.D8(a,b,c))},
fb(a,b,c){this.N5(a,b,c)
this.b.b.push(new A.D9(a,b,c))},
hq(a,b,c,d){var s
this.N6(a,b,c,d)
s=a.b
s===$&&A.c()
this.b.b.push(new A.Da(A.avK(s),b,c,d))},
hr(a,b,c){this.N7(a,b,c)
this.b.b.push(new A.Db(a,b,c))},
hs(a){this.N8(a)
this.b.b.push(new A.Dc(a))},
fc(a,b){this.N9(a,b)
this.b.b.push(new A.Dd(a,b))},
cr(a,b){this.Na(a,b)
this.b.b.push(new A.De(a,b))},
yq(a){this.Nb(a)
this.b.b.push(new A.Df(a))},
fM(a,b,c){this.Nc(a,b,c)
this.b.b.push(new A.Dg(c,b,a))},
c7(a,b){this.Nd(a,b)
this.b.b.push(new A.Dh(a,b))},
c3(a,b){this.Ne(a,b)
this.b.b.push(new A.Di(a,b))},
ht(a,b,c,d){this.Nf(a,b,c,d)
this.b.b.push(new A.Dj(a,b,c,d))},
bj(a){this.Ng(0)
this.b.b.push(B.E8)},
fq(a,b){this.Nh(0,b)
this.b.b.push(new A.Dr(b))},
bv(a){this.b.b.push(B.E9)
return this.Ni(0)},
er(a,b){this.Nj(a,b)
this.b.b.push(new A.Dt(a,b))},
cN(a,b,c){this.Nk(0,b,c)
this.b.b.push(new A.Du(b,c))},
a8(a,b){this.Nl(0,b)
this.b.b.push(new A.Dv(b))},
ag(a,b,c){this.Nm(0,b,c)
this.b.b.push(new A.Dw(b,c))},
gKk(){return this.b}}
A.Vo.prototype={
a5p(){var s,r,q,p=t.e.a(new self.window.flutterCanvasKit.PictureRecorder()),o=p.beginRecording(A.e6(this.a))
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.K)(s),++q)s[q].aN(o)
o=p.finishRecordingAsPicture()
p.delete()
return o},
n(){var s,r,q
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.K)(s),++q)s[q].n()}}
A.cf.prototype={
n(){}}
A.D3.prototype={
aN(a){a.clear(A.alh($.aiQ(),this.a))}}
A.Ds.prototype={
aN(a){a.save()}}
A.Dq.prototype={
aN(a){a.restore()}}
A.Dw.prototype={
aN(a){a.translate(this.a,this.b)}}
A.Du.prototype={
aN(a){a.scale(this.a,this.b)}}
A.Dr.prototype={
aN(a){a.rotate(this.a*180/3.141592653589793,0,0)}}
A.Dv.prototype={
aN(a){a.concat(A.asf(this.a))}}
A.D6.prototype={
aN(a){a.clipRect(A.e6(this.a),$.amb()[this.b.a],this.c)}}
A.D5.prototype={
aN(a){a.clipRRect(A.mr(this.a),$.Tr(),this.b)}}
A.D4.prototype={
aN(a){a.clipPath(this.a.ga3(),$.Tr(),this.b)}}
A.Db.prototype={
aN(a){var s=this.a,r=this.b
A.H(a,"drawLine",[s.a,s.b,r.a,r.b,this.c.ga3()])}}
A.Dc.prototype={
aN(a){a.drawPaint(this.a.ga3())}}
A.Dg.prototype={
aN(a){a.drawPoints($.amd()[this.b.a],this.a,this.c.ga3())}}
A.Di.prototype={
aN(a){a.drawRect(A.e6(this.a),this.b.ga3())}}
A.Dh.prototype={
aN(a){a.drawRRect(A.mr(this.a),this.b.ga3())}}
A.D9.prototype={
aN(a){a.drawDRRect(A.mr(this.a),A.mr(this.b),this.c.ga3())}}
A.D8.prototype={
aN(a){var s=this.a
a.drawCircle(s.a,s.b,this.b,this.c.ga3())}}
A.De.prototype={
aN(a){a.drawPath(this.a.ga3(),this.b.ga3())}}
A.Dj.prototype={
aN(a){var s=this,r=$.c4().w
if(r==null)r=A.b_()
A.aru(a,s.a,s.b,s.c,s.d,r)}}
A.Da.prototype={
aN(a){var s,r,q=this,p=q.d,o=p.at,n=q.b,m=q.c,l=q.a.b
if(o===B.di){l===$&&A.c()
A.H(a,"drawImageRectCubic",[l.ga3(),A.e6(n),A.e6(m),0.3333333333333333,0.3333333333333333,p.ga3()])}else{l===$&&A.c()
l=l.ga3()
n=A.e6(n)
m=A.e6(m)
s=o===B.ia?$.ba.az().FilterMode.Nearest:$.ba.az().FilterMode.Linear
r=o===B.es?$.ba.az().MipmapMode.Linear:$.ba.az().MipmapMode.None
A.H(a,"drawImageRectOptions",[l,n,m,s,r,p.ga3()])}},
n(){var s,r=this.a
r.d=!0
s=r.b
s===$&&A.c()
s.a5x(r)}}
A.Dd.prototype={
aN(a){var s,r=this.a,q=r.d
q.toString
s=this.b
a.drawParagraph(r.lt(q),s.a,s.b)
if(!$.tt().zl(r))$.tt().C(0,r)}}
A.Df.prototype={
aN(a){a.drawPicture(this.a.ga3())}}
A.Dt.prototype={
aN(a){var s=this.b
s=s==null?null:s.ga3()
a.saveLayer(s,A.e6(this.a),null,null)}}
A.ZG.prototype={}
A.V3.prototype={}
A.V8.prototype={}
A.V9.prototype={}
A.VG.prototype={}
A.a7Y.prototype={}
A.a7C.prototype={}
A.a74.prototype={}
A.a71.prototype={}
A.a70.prototype={}
A.a73.prototype={}
A.a72.prototype={}
A.a6C.prototype={}
A.a6B.prototype={}
A.a7K.prototype={}
A.a7J.prototype={}
A.a7E.prototype={}
A.a7D.prototype={}
A.a7M.prototype={}
A.a7L.prototype={}
A.a7u.prototype={}
A.a7t.prototype={}
A.a7w.prototype={}
A.a7v.prototype={}
A.a7W.prototype={}
A.a7V.prototype={}
A.a7r.prototype={}
A.a7q.prototype={}
A.a6L.prototype={}
A.a6K.prototype={}
A.a6U.prototype={}
A.a6T.prototype={}
A.a7m.prototype={}
A.a7l.prototype={}
A.a6I.prototype={}
A.a6H.prototype={}
A.a7z.prototype={}
A.a7y.prototype={}
A.a7f.prototype={}
A.a7e.prototype={}
A.a6G.prototype={}
A.a6F.prototype={}
A.a7B.prototype={}
A.a7A.prototype={}
A.a7R.prototype={}
A.a7Q.prototype={}
A.a6W.prototype={}
A.a6V.prototype={}
A.a7c.prototype={}
A.a7b.prototype={}
A.a6E.prototype={}
A.a6D.prototype={}
A.a6O.prototype={}
A.a6N.prototype={}
A.lK.prototype={}
A.a75.prototype={}
A.a7x.prototype={}
A.iI.prototype={}
A.a7a.prototype={}
A.lN.prototype={}
A.Dk.prototype={}
A.ab3.prototype={}
A.ab4.prototype={}
A.lM.prototype={}
A.a6M.prototype={}
A.lL.prototype={}
A.a77.prototype={}
A.a76.prototype={}
A.a7k.prototype={}
A.adS.prototype={}
A.a6X.prototype={}
A.lO.prototype={}
A.a6Q.prototype={}
A.a6P.prototype={}
A.a7n.prototype={}
A.a6J.prototype={}
A.lP.prototype={}
A.a7h.prototype={}
A.a7g.prototype={}
A.a7i.prototype={}
A.KR.prototype={}
A.a7P.prototype={}
A.a7I.prototype={}
A.a7H.prototype={}
A.a7G.prototype={}
A.a7F.prototype={}
A.a7p.prototype={}
A.a7o.prototype={}
A.KU.prototype={}
A.KS.prototype={}
A.KQ.prototype={}
A.KT.prototype={}
A.a6Z.prototype={}
A.a7T.prototype={}
A.a6Y.prototype={}
A.KP.prototype={}
A.a9v.prototype={}
A.a79.prototype={}
A.qL.prototype={}
A.a7N.prototype={}
A.a7O.prototype={}
A.a7X.prototype={}
A.a7S.prototype={}
A.a7_.prototype={}
A.a9w.prototype={}
A.a7U.prototype={}
A.a3e.prototype={
QL(){var s=t.e.a(new self.window.FinalizationRegistry(A.ae(new A.a3f(this))))
this.a!==$&&A.cY()
this.a=s},
tG(a,b,c){var s=this.a
s===$&&A.c()
A.H(s,"register",[b,c])},
xN(a){var s=this
s.b.push(a)
if(s.c==null)s.c=A.cw(B.v,new A.a3g(s))},
a_Z(){var s,r,q,p,o,n,m,l
self.window.performance.mark("SkObject collection-start")
n=this.b.length
s=null
r=null
for(m=0;m<n;++m){q=this.b[m]
if(q.isDeleted())continue
try{q.delete()}catch(l){p=A.ab(l)
o=A.au(l)
if(s==null){s=p
r=o}}}this.b=A.a([],t.J)
self.window.performance.mark("SkObject collection-end")
self.window.performance.measure("SkObject collection","SkObject collection-start","SkObject collection-end")
if(s!=null)throw A.b(new A.KX(s,r))}}
A.a3f.prototype={
$1(a){if(!a.isDeleted())this.a.xN(a)},
$S:5}
A.a3g.prototype={
$0(){var s=this.a
s.c=null
s.a_Z()},
$S:0}
A.KX.prototype={
i(a){return"SkiaObjectCollectionError: "+A.h(this.a)+"\n"+A.h(this.b)},
$iby:1,
gn2(){return this.b}}
A.a6S.prototype={}
A.a_W.prototype={}
A.a7d.prototype={}
A.a6R.prototype={}
A.a78.prototype={}
A.a7j.prototype={}
A.aic.prototype={
$0(){if(J.f(self.document.currentScript,this.a))return A.anT(this.b)
else return $.Ca().j(0,"_flutterWebCachedExports")},
$S:28}
A.aid.prototype={
$1(a){$.Ca().l(0,"_flutterWebCachedExports",a)},
$S:2}
A.aie.prototype={
$0(){if(J.f(self.document.currentScript,this.a))return A.anT(this.b)
else return $.Ca().j(0,"_flutterWebCachedModule")},
$S:28}
A.aif.prototype={
$1(a){$.Ca().l(0,"_flutterWebCachedModule",a)},
$S:2}
A.V4.prototype={
bv(a){this.a.bv(0)},
er(a,b){this.a.er(a,t.A.a(b))},
bj(a){this.a.bj(0)},
ag(a,b,c){this.a.ag(0,b,c)},
cN(a,b,c){var s=c==null?b:c
this.a.cN(0,b,s)
return null},
fq(a,b){this.a.fq(0,b)},
a8(a,b){this.a.a8(0,A.Ti(b))},
o3(a,b,c){this.a.m2(a,b,c)},
HC(a,b){return this.o3(a,B.cl,b)},
j6(a){return this.o3(a,B.cl,!0)},
r8(a,b){this.a.m1(a,b)},
ki(a){return this.r8(a,!0)},
r7(a,b,c){this.a.m0(0,t.lk.a(b),c)},
f9(a,b){return this.r7(a,b,!0)},
hr(a,b,c){this.a.hr(a,b,t.A.a(c))},
hs(a){this.a.hs(t.A.a(a))},
c3(a,b){this.a.c3(a,t.A.a(b))},
c7(a,b){this.a.c7(a,t.A.a(b))},
fb(a,b,c){this.a.fb(a,b,t.A.a(c))},
dO(a,b,c){this.a.dO(a,b,t.A.a(c))},
cr(a,b){this.a.cr(t.lk.a(a),t.A.a(b))},
hq(a,b,c,d){this.a.hq(t.mD.a(a),b,c,t.A.a(d))},
fc(a,b){this.a.fc(t.cl.a(a),b)},
fM(a,b,c){var s=A.ase(b)
this.a.fM(t.A.a(c),a,s.toTypedArray())
self.window.flutterCanvasKit.Free(s)},
ht(a,b,c,d){this.a.ht(t.lk.a(a),b,c,d)}}
A.w7.prototype={
i5(){return this.b.qk()},
kU(){return this.b.qk()},
d3(a){var s=this.a
if(s!=null)s.delete()},
gu(a){var s=this.b
return s.gu(s)},
k(a,b){if(b==null)return!1
if(A.A(this)!==J.Z(b))return!1
return b instanceof A.w7&&b.b.k(0,this.b)},
i(a){return this.b.i(0)}}
A.D7.prototype={}
A.Dn.prototype={
gWB(){var s,r,q=new Float32Array(20)
for(s=this.a,r=0;r<20;++r)if(B.b.v(B.Kq,r))q[r]=s[r]/255
else q[r]=s[r]
return q},
qk(){return $.ba.az().ColorFilter.MakeMatrix(this.gWB())},
gu(a){return A.dY(this.a)},
k(a,b){if(b==null)return!1
return A.A(this)===J.Z(b)&&b instanceof A.Dn&&A.Tc(this.a,b.a)},
i(a){return"ColorFilter.matrix("+A.h(this.a)+")"}}
A.ug.prototype={
qk(){var s=$.ba.az().ColorFilter,r=this.a
r=r==null?null:r.ga3()
return s.MakeCompose(r,this.b.ga3())},
k(a,b){if(b==null)return!1
if(!(b instanceof A.ug))return!1
return J.f(b.a,this.a)&&b.b.k(0,this.b)},
gu(a){return A.a_(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"ColorFilter.compose("+A.h(this.a)+", "+this.b.i(0)+")"}}
A.FF.prototype={
LO(){var s=this.b.c
return new A.aq(s,new A.a_1(),A.ai(s).h("aq<1,ea>"))},
S0(a){var s,r,q,p,o,n,m=this.Q
if(m.V(0,a)){s=null.querySelector("#sk_path_defs")
s.toString
r=A.a([],t.J)
q=m.j(0,a)
q.toString
for(p=t.sM,p=A.hj(new A.m2(s.children,p),p.h("o.E"),t.e),s=J.ao(p.a),p=A.m(p),p=p.h("@<1>").T(p.z[1]).z[1];s.q();){o=p.a(s.gB(s))
if(q.v(0,o.id))r.push(o)}for(s=r.length,n=0;n<r.length;r.length===s||(0,A.K)(r),++n)r[n].remove()
m.j(0,a).L(0)}},
MR(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.w,a2=a1.length===0||a0.r.length===0?null:A.aDM(a1,a0.r)
a0.Zv(a2)
for(s=a0.r,r=a0.e,q=0,p=0;p<s.length;++p){o=s[p]
if(r.j(0,o)!=null){n=r.j(0,o).GZ(a0.x)
m=n.a.a.getCanvas()
l=a0.b.d[q].rC()
k=l.a
l=k==null?l.a62():k
m.drawPicture(l);++q
n.Bv(0)}}for(m=a0.b.c,j=0;!1;++j){i=m[j]
if(i.b!=null)i.rC()}m=t.Fs
a0.b=new A.EK(A.a([],m),A.a([],m))
if(A.Tc(s,a1)){B.b.L(s)
return}h=A.nl(a1,t.S)
B.b.L(a1)
if(a2!=null){m=a2.a
l=A.ai(m).h("aN<1>")
a0.Im(A.jC(new A.aN(m,new A.a_2(a2),l),l.h("o.E")))
B.b.I(a1,s)
h.KI(s)
a1=a2.c
if(a1){m=a2.d
m.toString
m=a0.d.j(0,m)
g=m.gkV(m)}else g=null
for(m=a2.b,l=m.length,k=a0.d,j=0;j<m.length;m.length===l||(0,A.K)(m),++j){o=m[j]
if(a1){f=k.j(0,o)
e=f.gkV(f)
$.kp.insertBefore(e,g)
d=r.j(0,o)
if(d!=null)$.kp.insertBefore(d.x,g)}else{f=k.j(0,o)
e=f.gkV(f)
$.kp.append(e)
d=r.j(0,o)
if(d!=null)$.kp.append(d.x)}}for(p=0;p<s.length;++p){c=s[p]
if(r.j(0,c)!=null){b=r.j(0,c).x
a1=b.isConnected
a1.toString
if(!a1)if(p===s.length-1)$.kp.append(b)
else{a1=k.j(0,s[p+1])
a=a1.gkV(a1)
$.kp.insertBefore(b,a)}}}}else{m=A.lU()
B.b.R(m.d,m.gXT())
for(m=a0.d,p=0;p<s.length;++p){o=s[p]
l=m.j(0,o)
e=l.gkV(l)
d=r.j(0,o)
$.kp.append(e)
if(d!=null)$.kp.append(d.x)
a1.push(o)
h.t(0,o)}}B.b.L(s)
a0.Im(h)},
Im(a){var s,r,q,p,o,n,m,l=this
for(s=A.h6(a,a.r,A.m(a).c),r=l.c,q=l.f,p=l.Q,o=l.d,n=s.$ti.c;s.q();){m=s.d
if(m==null)m=n.a(m)
o.t(0,m)
r.t(0,m)
q.t(0,m)
l.S0(m)
p.t(0,m)}},
XO(a){var s,r,q=this.e
if(q.j(0,a)!=null){s=q.j(0,a)
s.toString
r=A.lU()
s.x.remove()
B.b.t(r.c,s)
r.d.push(s)
q.t(0,a)}},
Zv(a){var s,r,q,p,o,n,m=this,l=a==null
if(!l&&a.b.length===0&&a.a.length===0)return
s=m.LP(m.r)
r=new A.aq(s,new A.ZZ(),A.ai(s).h("aq<1,j>"))
q=m.gVE()
p=m.e
if(l){l=A.lU()
o=l.c
B.b.I(l.d,o)
B.b.L(o)
p.L(0)
r.R(0,q)}else{l=A.m(p).h("aP<1>")
n=A.as(new A.aP(p,l),!0,l.h("o.E"))
new A.aN(n,new A.a__(r),A.ai(n).h("aN<1>")).R(0,m.gXN())
r.uA(0,new A.a_0(m)).R(0,q)}},
LP(a){var s,r,q,p,o,n,m,l,k,j=A.lU().b-1
if(j===0)return B.Pk
s=A.a([],t.uw)
r=t.t
q=A.a([],r)
for(p=j-1,o=!1,n=0;m=n<a.length,m;++n){if(s.length===p)break
l=a[n]
m=$.aiT()
k=m.d.j(0,l)
if(k!=null&&m.c.v(0,k))q.push(l)
else if(o){s.push(q)
q=A.a([l],r)}else{q.push(l)
o=!0}}if(m)B.b.I(q,B.b.d0(a,n))
if(q.length!==0)s.push(q)
return s},
VF(a){var s=A.lU().LN()
s.I1(this.x)
this.e.l(0,a,s)}}
A.a_1.prototype={
$1(a){var s=a.c
s.toString
return s},
$S:132}
A.a_2.prototype={
$1(a){return!B.b.v(this.a.b,a)},
$S:38}
A.ZZ.prototype={
$1(a){return J.Ci(a)},
$S:177}
A.a__.prototype={
$1(a){return!this.a.v(0,a)},
$S:38}
A.a_0.prototype={
$1(a){return!this.a.e.V(0,a)},
$S:38}
A.lf.prototype={
i(a){return"MutatorType."+this.b}}
A.hD.prototype={
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.hD))return!1
s=r.a
if(s!==b.a)return!1
switch(s.a){case 0:return J.f(r.b,b.b)
case 1:return J.f(r.c,b.c)
case 2:return r.d==b.d
case 3:return r.e==b.e
case 4:return r.f==b.f
default:return!1}},
gu(a){var s=this
return A.a_(s.a,s.b,s.c,s.d,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.ww.prototype={
k(a,b){if(b==null)return!1
if(b===this)return!0
return b instanceof A.ww&&A.Tc(b.a,this.a)},
gu(a){return A.dY(this.a)},
gP(a){var s=this.a,r=A.ai(s).h("cm<1>")
s=new A.cm(s,r)
return new A.b1(s,s.gm(s),r.h("b1<aL.E>"))}}
A.EK.prototype={}
A.iS.prototype={}
A.ahu.prototype={
$1(a){var s,r,q,p,o=null
for(s=this.a,r=this.b,q=0;p=q+a,p<s.length;++q){if(!J.f(s[p],r[q]))return o
if(q===r.length-1)if(a===0)return new A.iS(B.b.d0(s,q+1),B.fh,!1,o)
else if(p===s.length-1)return new A.iS(B.b.bw(s,0,a),B.fh,!1,o)
else return o}return new A.iS(B.b.bw(s,0,a),B.b.d0(r,s.length-a),!1,o)},
$S:95}
A.aht.prototype={
$1(a){var s,r,q,p,o=null
for(s=this.b,r=this.a,q=0;p=a-q,p>=0;++q){if(!J.f(r[p],s[s.length-1-q]))return o
if(q===s.length-1){s=r.length
if(a===s-1)return new A.iS(B.b.bw(r,0,s-q-1),B.fh,!1,o)
else if(a===q)return new A.iS(B.b.d0(r,a+1),B.fh,!1,o)
else return o}}return new A.iS(B.b.d0(r,a+1),B.b.bw(s,0,s.length-1-a),!0,B.b.gH(r))},
$S:95}
A.Fn.prototype={
a1g(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.length,a=0
while(!0){if(!(a<b)){s=!0
break}if(B.c.a4(a0,a)>=160){s=!1
break}++a}if(s)return
r=A.aU(t.S)
for(b=new A.Kj(a0),q=c.c,p=c.b;b.q();){o=b.d
if(!(o<160||q.v(0,o)||p.v(0,o)))r.C(0,o)}if(r.a===0)return
n=A.as(r,!0,r.$ti.c)
m=A.a([],t.J)
for(b=a1.length,l=0;l<a1.length;a1.length===b||(0,A.K)(a1),++l){k=a1[l]
j=$.mj.d.j(0,k)
if(j!=null)B.b.I(m,j)}b=n.length
i=A.bn(b,!1,!1,t.y)
h=A.yw(n,0,null)
for(q=m.length,l=0;l<m.length;m.length===q||(0,A.K)(m),++l){p=m[l].getGlyphIDs(h)
for(g=p.length,a=0;a<g;++a){f=i[a]
if(p[a]===0){e=n[a]
if(!(e<32))e=e>127&&e<160
else e=!0}else e=!0
i[a]=B.dm.u4(f,e)}}if(B.b.f4(i,new A.YT())){d=A.a([],t.t)
for(a=0;a<b;++a)if(!i[a])d.push(n[a])
c.w.I(0,d)
if(!c.x){c.x=!0
$.aR().gtF().b.push(c.gT0())}}},
T1(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a.x=!1
s=a.w
r=A.as(s,!0,A.m(s).c)
s.L(0)
s=r.length
q=A.bn(s,!1,!1,t.y)
p=A.yw(r,0,null)
for(o=a.f,n=o.length,m=a.c,l=0;l<o.length;o.length===n||(0,A.K)(o),++l){k=o[l]
j=$.mj.d.j(0,k)
if(j==null){$.bX().$1("A fallback font was registered but we cannot retrieve the typeface for it.")
continue}for(i=J.ao(j);i.q();){h=i.gB(i).getGlyphIDs(p)
for(g=h.length,f=0;f<g;++f){e=h[f]===0
if(!e)m.C(0,r[f])
d=q[f]
if(e){e=r[f]
if(!(e<32))e=e>127&&e<160
else e=!0}else e=!0
q[f]=B.dm.u4(d,e)}}b=0
while(!0){if(!(b<s)){c=!1
break}if(!q[b]){c=!0
break}++b}if(!c)return}for(f=r.length-1;f>=0;--f)if(q[f])B.b.fo(r,f)
A.T4(r)},
a4E(a,b){var s,r,q,p,o=this,n=$.ba.az().Typeface.MakeFreeTypeFaceFromData(b.buffer)
if(n==null){$.bX().$1("Failed to parse fallback font "+a+" as a font.")
return}s=o.r
s.bm(0,a,new A.YU())
r=s.j(0,a)
r.toString
q=s.j(0,a)
q.toString
s.l(0,a,q+1)
p=a+" "+A.h(r)
o.e.push(A.akd(b,p,n))
if(a==="Noto Color Emoji Compat"){n=o.f
if(B.b.gH(n)==="Roboto")B.b.yZ(n,1,p)
else B.b.yZ(n,0,p)}else o.f.push(p)}}
A.YS.prototype={
$0(){return A.a([],t.Y)},
$S:101}
A.YT.prototype={
$1(a){return!a},
$S:159}
A.YU.prototype={
$0(){return 0},
$S:34}
A.agW.prototype={
$0(){return A.a([],t.Y)},
$S:101}
A.agZ.prototype={
$1(a){var s,r,q
for(s=A.ajT(a),s=new A.h9(s.a(),s.$ti.h("h9<1>"));s.q();){r=s.gB(s)
if(B.c.bb(r,"  src:")){q=B.c.ek(r,"url(")
if(q===-1){$.bX().$1("Unable to resolve Noto font URL: "+r)
return null}return B.c.U(r,q+4,B.c.ek(r,")"))}}$.bX().$1("Unable to determine URL for Noto font")
return null},
$S:201}
A.ahD.prototype={
$1(a){return B.b.v($.atG(),a)},
$S:205}
A.ahE.prototype={
$1(a){return this.a.a.d.c.a.rd(a)},
$S:38}
A.nw.prototype={
or(){var s=0,r=A.R(t.H),q=this,p,o,n
var $async$or=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:s=q.d==null?2:3
break
case 2:p=q.c
s=p==null?4:6
break
case 4:q.c=new A.aQ(new A.a7($.a9,t.D),t.h)
p=$.oK().a
o=q.a
n=A
s=7
return A.G(p.yn("https://fonts.googleapis.com/css2?family="+A.Th(o," ","+")),$async$or)
case 7:q.d=n.aCD(b,o)
q.c.di(0)
s=5
break
case 6:s=8
return A.G(p.a,$async$or)
case 8:case 5:case 3:return A.P(null,r)}})
return A.Q($async$or,r)}}
A.a2.prototype={
k(a,b){if(b==null)return!1
if(!(b instanceof A.a2))return!1
return b.a===this.a&&b.b===this.b},
gu(a){return A.a_(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"["+this.a+", "+this.b+"]"}}
A.aeA.prototype={}
A.ka.prototype={
i(a){return"_ResolvedNotoSubset("+this.b+", "+this.a+")"}}
A.F1.prototype={
C(a,b){var s,r,q=this
if(q.b.v(0,b)||q.c.V(0,b.a))return
s=q.c
r=s.a
s.l(0,b.a,b)
if(r===0)A.cw(B.v,q.gMO())},
jS(){var s=0,r=A.R(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$jS=A.L(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:f=t.N
e=A.z(f,t.pz)
d=A.z(f,t.r)
for(f=n.c,m=f.gaR(f),l=A.m(m),l=l.h("@<1>").T(l.z[1]),m=new A.c5(J.ao(m.a),m.b,l.h("c5<1,2>")),k=t.H,l=l.z[1];m.q();){j=m.a
if(j==null)j=l.a(j)
e.l(0,j.a,A.ax8(new A.Yo(n,j,d),k))}s=2
return A.G(A.kV(e.gaR(e),k),$async$jS)
case 2:m=d.$ti.h("aP<1>")
m=A.as(new A.aP(d,m),!0,m.h("o.E"))
B.b.fA(m)
l=A.ai(m).h("cm<1>")
i=A.as(new A.cm(m,l),!0,l.h("aL.E"))
m=i.length,h=0
case 3:if(!(h<m)){s=5
break}g=i[h]
l=f.t(0,g)
l.toString
k=d.j(0,g)
k.toString
$.tu().a4E(l.b,k)
s=f.a===0?6:7
break
case 6:l=$.mj.fd()
n.d=l
q=8
s=11
return A.G(l,$async$jS)
case 11:o.push(10)
s=9
break
case 8:o=[1]
case 9:q=1
n.d=null
s=o.pop()
break
case 10:A.Tg()
case 7:case 4:++h
s=3
break
case 5:s=f.a!==0?12:13
break
case 12:s=14
return A.G(n.jS(),$async$jS)
case 14:case 13:return A.P(null,r)
case 1:return A.O(p,r)}})
return A.Q($async$jS,r)}}
A.Yo.prototype={
$0(){var s=0,r=A.R(t.H),q,p=2,o,n=this,m,l,k,j,i,h
var $async$$0=A.L(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:i=null
p=4
l=n.b
s=7
return A.G(n.a.a.a16(l.a,l.b),$async$$0)
case 7:i=b
p=2
s=6
break
case 4:p=3
h=o
m=A.ab(h)
l=n.b
j=l.a
n.a.c.t(0,j)
$.bX().$1("Failed to load font "+l.b+" at "+j)
$.bX().$1(J.dT(m))
s=1
break
s=6
break
case 3:s=2
break
case 6:l=n.b
n.a.b.C(0,l)
n.c.l(0,l.a,A.cc(i,0,null))
case 1:return A.P(q,r)
case 2:return A.O(o,r)}})
return A.Q($async$$0,r)},
$S:37}
A.a20.prototype={
a16(a,b){var s=A.C7(a).au(new A.a22(),t.B)
return s},
yn(a){var s=A.C7(a).au(new A.a24(),t.N)
return s}}
A.a22.prototype={
$1(a){return A.fz(a.arrayBuffer(),t.z).au(new A.a21(),t.B)},
$S:82}
A.a21.prototype={
$1(a){return t.B.a(a)},
$S:109}
A.a24.prototype={
$1(a){var s=t.N
return A.fz(a.text(),s).au(new A.a23(),s)},
$S:166}
A.a23.prototype={
$1(a){return A.bh(a)},
$S:170}
A.KV.prototype={
fd(){var s=0,r=A.R(t.H),q=this,p,o,n,m,l,k,j
var $async$fd=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:s=2
return A.G(q.qn(),$async$fd)
case 2:p=q.f
if(p!=null){p.delete()
q.f=null}q.f=$.ba.az().TypefaceFontProvider.Make()
p=q.d
p.L(0)
for(o=q.c,n=o.length,m=t.e,l=0;l<o.length;o.length===n||(0,A.K)(o),++l){k=o[l]
j=k.a
q.f.registerFont(k.b,j)
J.hd(p.bm(0,j,new A.a80()),m.a(new self.window.flutterCanvasKit.Font(k.c)))}for(o=$.tu().e,n=o.length,l=0;l<o.length;o.length===n||(0,A.K)(o),++l){k=o[l]
j=k.a
q.f.registerFont(k.b,j)
J.hd(p.bm(0,j,new A.a81()),m.a(new self.window.flutterCanvasKit.Font(k.c)))}return A.P(null,r)}})
return A.Q($async$fd,r)},
qn(){var s=0,r=A.R(t.H),q,p=this,o,n,m,l,k
var $async$qn=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:l=p.b
if(l.length===0){s=1
break}k=J
s=3
return A.G(A.kV(l,t.sS),$async$qn)
case 3:o=k.ao(b),n=p.c
case 4:if(!o.q()){s=5
break}m=o.gB(o)
if(m!=null)n.push(m)
s=4
break
case 5:B.b.L(l)
case 1:return A.P(q,r)}})
return A.Q($async$qn,r)},
te(a,b){return this.a3H(a,b)},
a3H(a,b){var s=0,r=A.R(t.H),q,p=this,o
var $async$te=A.L(function(c,d){if(c===1)return A.O(d,r)
while(true)switch(s){case 0:o=$.ba.az().Typeface.MakeFreeTypeFaceFromData(a.buffer)
s=o!=null?3:5
break
case 3:p.c.push(A.akd(a,b,o))
s=6
return A.G(p.fd(),$async$te)
case 6:s=4
break
case 5:$.bX().$1('Failed to parse font family "'+b+'"')
s=1
break
case 4:case 1:return A.P(q,r)}})
return A.Q($async$te,r)},
iu(a){return this.a4G(a)},
a4G(a){var s=0,r=A.R(t.H),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e,d,c,b
var $async$iu=A.L(function(a0,a1){if(a0===1){o=a1
s=p}while(true)switch(s){case 0:c=null
p=4
s=7
return A.G(a.co(0,"FontManifest.json"),$async$iu)
case 7:c=a1
p=2
s=6
break
case 4:p=3
b=o
k=A.ab(b)
if(k instanceof A.oQ){m=k
if(m.b===404){$.bX().$1("Font manifest does not exist at `"+m.a+"` \u2013 ignoring.")
s=1
break}else throw b}else throw b
s=6
break
case 3:s=2
break
case 6:j=t.jS.a(B.b3.d2(0,B.Y.d2(0,A.cc(c.buffer,0,null))))
if(j==null)throw A.b(A.kt(u.g))
for(k=t.a,i=J.cE(j,k),h=A.m(i),i=new A.b1(i,i.gm(i),h.h("b1<E.E>")),g=t.j,h=h.h("E.E");i.q();){f=i.d
if(f==null)f=h.a(f)
e=J.at(f)
d=A.bh(e.j(f,"family"))
for(f=J.ao(g.a(e.j(f,"fonts")));f.q();)n.Ff(a.tY(A.bh(J.aW(k.a(f.gB(f)),"asset"))),d)}if(!n.a.v(0,"Roboto"))n.Ff("https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf","Roboto")
case 1:return A.P(q,r)
case 2:return A.O(o,r)}})
return A.Q($async$iu,r)},
Ff(a,b){this.a.C(0,b)
this.b.push(new A.a8_(this,a,b).$0())},
Tz(a){return A.fz(a.arrayBuffer(),t.z).au(new A.a7Z(),t.B)}}
A.a80.prototype={
$0(){return A.a([],t.J)},
$S:75}
A.a81.prototype={
$0(){return A.a([],t.J)},
$S:75}
A.a8_.prototype={
$0(){var s=0,r=A.R(t.sS),q,p=2,o,n=this,m,l,k,j,i,h,g
var $async$$0=A.L(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:h=null
p=4
s=7
return A.G(A.C7(n.b).au(n.a.gTy(),t.B),$async$$0)
case 7:h=b
p=2
s=6
break
case 4:p=3
g=o
m=A.ab(g)
$.bX().$1("Failed to load font "+n.c+" at "+n.b)
$.bX().$1(J.dT(m))
q=null
s=1
break
s=6
break
case 3:s=2
break
case 6:k=A.cc(h,0,null)
j=$.ba.az().Typeface.MakeFreeTypeFaceFromData(k.buffer)
i=n.c
if(j!=null){q=A.akd(k,i,j)
s=1
break}else{j=n.b
$.bX().$1("Failed to load font "+i+" at "+j)
$.bX().$1("Verify that "+j+" contains a valid font.")
q=null
s=1
break}case 1:return A.P(q,r)
case 2:return A.O(o,r)}})
return A.Q($async$$0,r)},
$S:184}
A.a7Z.prototype={
$1(a){return t.B.a(a)},
$S:109}
A.lw.prototype={}
A.pE.prototype={
i(a){return"ImageCodecException: "+this.a},
$ibB:1}
A.kD.prototype={
Qy(a,b){var s,r,q,p,o=this
if($.Cb()){s=new A.qM(A.aU(t.mD),null,t.c9)
s.Eg(o,a)
r=$.Tl()
q=s.d
q.toString
r.tG(0,s,q)
o.b!==$&&A.cY()
o.b=s}else{s=$.ba.az().AlphaType.Premul
r=$.ba.az().ColorType.RGBA_8888
p=A.avL(s,self.window.flutterCanvasKit.ColorSpace.SRGB,r,B.on,a)
if(p==null){$.bX().$1("Unable to encode image to bytes. We will not be able to resurrect it once it has been garbage collected.")
return}s=new A.qM(A.aU(t.mD),new A.Vm(a.width(),a.height(),p),t.c9)
s.Eg(o,a)
A.qN()
$.Tn().C(0,s)
o.b!==$&&A.cY()
o.b=s}},
n(){var s,r
this.d=!0
s=this.b
s===$&&A.c()
if(--s.a===0){r=s.d
if(r!=null)if($.Cb())$.Tl().xN(r)
else{s.d3(0)
s.ko()}s.e=s.d=s.c=null
s.f=!0}},
cS(a){var s=this.b
s===$&&A.c();++s.a
return new A.kD(s,null)},
z5(a){var s,r
if(a instanceof A.kD){s=a.b
s===$&&A.c()
s=s.ga3()
r=this.b
r===$&&A.c()
r=s.isAliasOf(r.ga3())
s=r}else s=!1
return s},
gao(a){var s=this.b
s===$&&A.c()
return s.ga3().width()},
gaW(a){var s=this.b
s===$&&A.c()
return s.ga3().height()},
i(a){var s=this.b
s===$&&A.c()
return"["+A.h(s.ga3().width())+"\xd7"+A.h(this.b.ga3().height())+"]"}}
A.Vm.prototype={
$0(){var s=$.ba.az(),r=$.ba.az().AlphaType.Premul,q=this.a
q=s.MakeImage(t.e.a({width:q,height:this.b,colorType:$.ba.az().ColorType.RGBA_8888,alphaType:r,colorSpace:self.window.flutterCanvasKit.ColorSpace.SRGB}),A.cc(this.c.buffer,0,null),4*q)
if(q==null)throw A.b(A.vz("Failed to resurrect image from pixels."))
return q},
$S:36}
A.ty.prototype={
gjb(a){return this.a},
geF(a){return this.b},
$ivn:1}
A.D1.prototype={
i5(){var s,r=this,q=$.ba.az().MakeAnimatedImageFromEncoded(r.c)
if(q==null)throw A.b(A.vz("Failed to decode image data.\nImage source: "+r.b))
r.d=q.getFrameCount()
r.e=q.getRepetitionCount()
for(s=0;s<r.f;++s)q.decodeNextFrame()
return q},
kU(){return this.i5()},
goM(){return!0},
d3(a){var s=this.a
if(s!=null)s.delete()},
gjm(){return this.d},
gmK(){return this.e},
h2(){var s=this,r=s.ga3(),q=A.cg(0,r.currentFrameDuration(),0),p=A.an0(r.makeImageAtCurrentFrame(),null)
r.decodeNextFrame()
s.f=B.f.d_(s.f+1,s.d)
return A.bZ(new A.ty(q,p),t.eT)},
$idm:1}
A.uf.prototype={
gjm(){var s=this.f
s===$&&A.c()
return s},
gmK(){var s=this.r
s===$&&A.c()
return s},
lx(){var s=0,r=A.R(t.e),q,p=2,o,n=this,m,l,k,j,i,h
var $async$lx=A.L(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:if(n.y!=null){n.z.sy6(new A.cA(Date.now(),!1).C(0,$.aqH))
k=n.y
k.toString
q=k
s=1
break}k=n.z
k.d=null
p=4
j=t.e
m=j.a(new self.window.ImageDecoder(j.a({type:n.a,data:n.d,premultiplyAlpha:"premultiply",desiredWidth:n.b,desiredHeight:n.c,colorSpaceConversion:"default",preferAnimation:!0})))
j=t.H
s=7
return A.G(A.fz(m.tracks.ready,j),$async$lx)
case 7:s=8
return A.G(A.fz(m.completed,j),$async$lx)
case 8:n.f=m.tracks.selectedTrack.frameCount
n.r=m.tracks.selectedTrack.repetitionCount
n.y=m
k.d=new A.Vl(n)
k.sy6(new A.cA(Date.now(),!1).C(0,$.aqH))
q=m
s=1
break
p=2
s=6
break
case 4:p=3
h=o
l=A.ab(h)
k=self.window.DOMException
k.toString
if(l instanceof k)if(t.e.a(l).name==="NotSupportedError")throw A.b(A.vz("Image file format ("+n.a+") is not supported by this browser's ImageDecoder API.\nImage source: "+n.e))
throw A.b(A.vz("Failed to decode image using the browser's ImageDecoder API.\nImage source: "+n.e+"\nOriginal browser error: "+A.h(l)))
s=6
break
case 3:s=2
break
case 6:case 1:return A.P(q,r)
case 2:return A.O(o,r)}})
return A.Q($async$lx,r)},
h2(){var s=0,r=A.R(t.eT),q,p=this,o,n,m,l,k,j,i,h,g
var $async$h2=A.L(function(a,b){if(a===1)return A.O(b,r)
while(true)switch(s){case 0:k=t.e
g=A
s=4
return A.G(p.lx(),$async$h2)
case 4:s=3
return A.G(g.fz(b.decode(k.a({frameIndex:p.x})),k),$async$h2)
case 3:j=b.image
i=p.x
h=p.f
h===$&&A.c()
p.x=B.f.d_(i+1,h)
h=$.ba.az()
i=$.ba.az().AlphaType.Premul
o=$.ba.az().ColorType.RGBA_8888
n=self.window.flutterCanvasKit.ColorSpace.SRGB
m=J.cp(j)
n=A.H(h,"MakeLazyImageFromTextureSource",[j,k.a({width:m.grz(j),height:m.grw(j),colorType:o,alphaType:i,colorSpace:n})])
m=m.gjb(j)
l=A.cg(m==null?0:m,0,0)
if(n==null)throw A.b(A.vz("Failed to create image from pixel data decoded using the browser's ImageDecoder."))
q=A.bZ(new A.ty(l,A.an0(n,j)),t.eT)
s=1
break
case 1:return A.P(q,r)}})
return A.Q($async$h2,r)},
$idm:1}
A.Vk.prototype={
$0(){return new A.cA(Date.now(),!1)},
$S:110}
A.Vl.prototype={
$0(){var s=this.a,r=s.y
if(r!=null)r.close()
s.y=null
s.z.d=null},
$S:0}
A.jw.prototype={}
A.ahy.prototype={
$2(a,b){var s=this.a,r=$.e5
s=(r==null?$.e5=new A.hr(self.window.flutterConfiguration):r).gHw()
return s+a},
$S:207}
A.ahz.prototype={
$1(a){this.a.bT(0,a)},
$S:1}
A.agl.prototype={
$1(a){this.a.di(0)
A.eb(this.b,"load",this.c.ap(),null)},
$S:1}
A.FS.prototype={}
A.a_L.prototype={
$2(a,b){var s,r,q,p,o
for(s=J.ao(b),r=this.a,q=this.b.h("il<0>");s.q();){p=s.gB(s)
o=p.a
p=p.b
r.push(new A.il(a,o,p,p,q))}},
$S(){return this.b.h("~(0,x<a2>)")}}
A.a_M.prototype={
$2(a,b){return a.b-b.b},
$S(){return this.a.h("j(il<0>,il<0>)")}}
A.a_K.prototype={
$1(a){var s,r,q=a.length
if(q===0)return null
if(q===1)return B.b.gbX(a)
s=q/2|0
r=a[s]
r.e=this.$1(B.b.bw(a,0,s))
r.f=this.$1(B.b.d0(a,s+1))
return r},
$S(){return this.a.h("il<0>?(x<il<0>>)")}}
A.a_J.prototype={
$1(a){var s,r=this,q=a.e,p=q==null
if(p&&a.f==null)a.d=a.c
else if(p){q=a.f
q.toString
r.$1(q)
a.d=Math.max(a.c,a.f.d)}else{p=a.f
s=a.c
if(p==null){r.$1(q)
a.d=Math.max(s,a.e.d)}else{r.$1(p)
q=a.e
q.toString
r.$1(q)
a.d=Math.max(s,Math.max(a.e.d,a.f.d))}}},
$S(){return this.a.h("~(il<0>)")}}
A.il.prototype={
HQ(a){return this.b<=a&&a<=this.c},
rd(a){var s,r=this
if(a>r.d)return!1
if(r.HQ(a))return!0
s=r.e
if((s==null?null:s.rd(a))===!0)return!0
if(a<r.b)return!1
s=r.f
return(s==null?null:s.rd(a))===!0},
pH(a,b){var s,r=this
if(a>r.d)return
s=r.e
if(s!=null)s.pH(a,b)
if(r.HQ(a))b.push(r.a)
if(a<r.b)return
s=r.f
if(s!=null)s.pH(a,b)}}
A.eQ.prototype={
n(){}}
A.a36.prototype={}
A.a2m.prototype={}
A.pa.prototype={
jC(a,b){this.b=this.mF(a,b)},
mF(a,b){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=B.I,p=0;p<s.length;s.length===r||(0,A.K)(s),++p){o=s[p]
o.jC(a,b)
if(q.a>=q.c||q.b>=q.d)q=o.b
else{n=o.b
if(!(n.a>=n.c||n.b>=n.d))q=q.me(n)}}return q},
kM(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.K)(s),++q){p=s[q]
o=p.b
if(!(o.a>=o.c||o.b>=o.d))p.fY(a)}}}
A.Kb.prototype={
fY(a){this.kM(a)}}
A.DA.prototype={
jC(a,b){var s,r,q=null,p=this.f,o=a.c.a
o.push(new A.hD(B.VU,q,q,p,q,q))
s=this.mF(a,b)
r=A.aE3(p.ga3().getBounds())
if(s.zY(r))this.b=s.dT(r)
o.pop()},
fY(a){var s,r=this,q=a.a
q.bv(0)
s=r.r
q.m0(0,r.f,s!==B.aN)
s=s===B.cm
if(s)q.er(r.b,null)
r.kM(a)
if(s)q.bj(0)
q.bj(0)},
$iVv:1}
A.DC.prototype={
jC(a,b){var s,r=null,q=this.f,p=a.c.a
p.push(new A.hD(B.VS,q,r,r,r,r))
s=this.mF(a,b)
if(s.zY(q))this.b=s.dT(q)
p.pop()},
fY(a){var s,r,q=a.a
q.bv(0)
s=this.f
r=this.r
q.m2(s,B.cl,r!==B.aN)
r=r===B.cm
if(r)q.er(s,null)
this.kM(a)
if(r)q.bj(0)
q.bj(0)},
$iVx:1}
A.DB.prototype={
jC(a,b){var s,r,q,p,o=null,n=this.f,m=a.c.a
m.push(new A.hD(B.VT,o,n,o,o,o))
s=this.mF(a,b)
r=n.a
q=n.b
p=n.c
n=n.d
if(s.zY(new A.D(r,q,p,n)))this.b=s.dT(new A.D(r,q,p,n))
m.pop()},
fY(a){var s,r=this,q=a.a
q.bv(0)
s=r.r
q.m1(r.f,s!==B.aN)
s=s===B.cm
if(s)q.er(r.b,null)
r.kM(a)
if(s)q.bj(0)
q.bj(0)},
$iVw:1}
A.IH.prototype={
jC(a,b){var s,r,q,p,o=this,n=null,m=new A.bI(new Float32Array(16))
m.bf(b)
s=o.r
r=s.a
s=s.b
m.ag(0,r,s)
q=A.dL()
q.lb(r,s,0)
p=a.c.a
p.push(A.aog(q))
p.push(new A.hD(B.VW,n,n,n,n,o.f))
o.Nr(a,m)
p.pop()
p.pop()
o.b=o.b.ag(0,r,s)},
fY(a){var s,r,q,p=this,o=A.br()
o.saf(0,A.aE(p.f,0,0,0))
s=a.a
s.bv(0)
r=p.r
q=r.a
r=r.b
s.ag(0,q,r)
s.er(p.b.cO(new A.v(-q,-r)),o)
p.kM(a)
s.bj(0)
s.bj(0)},
$ia2c:1}
A.yV.prototype={
jC(a,b){var s=this.f,r=b.tm(s),q=a.c.a
q.push(A.aog(s))
this.b=A.alR(s,this.mF(a,r))
q.pop()},
fY(a){var s=a.a
s.bv(0)
s.a8(0,this.f.a)
this.kM(a)
s.bj(0)},
$iLC:1}
A.IE.prototype={$iIF:1}
A.Je.prototype={
jC(a,b){this.b=this.c.b.cO(this.d)},
fY(a){var s,r=a.b
r.bv(0)
s=this.d
r.ag(0,s.a,s.b)
r.yq(this.c)
r.bj(0)}}
A.G3.prototype={
n(){}}
A.a0s.prototype={
H1(a,b){throw A.b(A.c6(null))},
H2(a,b,c,d){var s,r=this.b
r===$&&A.c()
s=new A.Je(t.mn.a(b),a,B.I)
s.a=r
r.c.push(s)},
H4(a){var s=this.b
s===$&&A.c()
t.vt.a(a)
a.a=s
s.c.push(a)},
aK(){return new A.G3(new A.a0t(this.a,$.c4().gis()))},
eK(){var s=this.b
s===$&&A.c()
if(s===this.a)return
s=s.a
s.toString
this.b=s},
Ku(a,b,c){return this.mG(new A.DA(t.lk.a(a),b,A.a([],t._),B.I))},
Kw(a,b,c){return this.mG(new A.DB(a,b,A.a([],t._),B.I))},
Kx(a,b,c){return this.mG(new A.DC(a,b,A.a([],t._),B.I))},
A7(a,b,c){var s=A.dL()
s.lb(a,b,0)
return this.mG(new A.IE(s,A.a([],t._),B.I))},
Ky(a,b,c){return this.mG(new A.IH(a,b,A.a([],t._),B.I))},
Kz(a,b){return this.mG(new A.yV(new A.bI(A.Ti(a)),A.a([],t._),B.I))},
B7(a){},
B8(a){},
Bi(a){},
a4q(a){var s=this.b
s===$&&A.c()
a.a=s
s.c.push(a)
return this.b=a},
mG(a){return this.a4q(a,t.CI)}}
A.a0t.prototype={}
A.Z2.prototype={
a4u(a,b){A.air("preroll_frame",new A.Z3(this,a,!0))
A.air("apply_frame",new A.Z4(this,a,!0))
return!0}}
A.Z3.prototype={
$0(){var s=this.b.a
s.b=s.mF(new A.a36(new A.ww(A.a([],t.oE))),A.dL())},
$S:0}
A.Z4.prototype={
$0(){var s=this.a,r=A.a([],t.fB),q=new A.Do(r),p=s.a
r.push(p)
s.c.LO().R(0,q.gZT())
q.o2(0,B.aq)
s=this.b.a
r=s.b
if(!r.gO(r))s.kM(new A.a2m(q,p))},
$S:0}
A.VJ.prototype={}
A.Dm.prototype={
i5(){return this.Ef()},
kU(){return this.Ef()},
Ef(){var s=$.ba.az().MaskFilter.MakeBlur($.au6()[this.b.a],this.c,!0)
s.toString
return s},
d3(a){var s=this.a
if(s!=null)s.delete()}}
A.Do.prototype={
ZU(a){this.a.push(a)},
bv(a){var s,r,q
for(s=this.a,r=0,q=0;q<s.length;++q)r=s[q].bv(0)
return r},
er(a,b){var s,r
for(s=this.a,r=0;r<s.length;++r)s[r].er(a,b)},
bj(a){var s,r
for(s=this.a,r=0;r<s.length;++r)s[r].bj(0)},
ag(a,b,c){var s,r
for(s=this.a,r=0;r<s.length;++r)s[r].ag(0,b,c)},
a8(a,b){var s,r
for(s=this.a,r=0;r<s.length;++r)s[r].a8(0,b)},
o2(a,b){var s,r
for(s=this.a,r=0;r<s.length;++r)s[r].o2(0,b)},
m0(a,b,c){var s,r
for(s=this.a,r=0;r<s.length;++r)s[r].m0(0,b,c)},
m2(a,b,c){var s,r
for(s=this.a,r=0;r<s.length;++r)s[r].m2(a,b,c)},
m1(a,b){var s,r
for(s=this.a,r=0;r<s.length;++r)s[r].m1(a,b)}}
A.p3.prototype={
sHn(a){if(this.b===a)return
this.b=a
this.ga3().setBlendMode($.aiR()[a.a])},
gcc(a){return this.c},
scc(a,b){if(this.c===b)return
this.c=b
this.ga3().setStyle($.amc()[b.a])},
geQ(){return this.d},
seQ(a){if(this.d===a)return
this.d=a
this.ga3().setStrokeWidth(a)},
skB(a){if(this.r===a)return
this.r=a
this.ga3().setAntiAlias(a)},
gaf(a){return this.w},
saf(a,b){if(this.w.k(0,b))return
this.w=b
this.ga3().setColorInt(b.gp(b))},
st2(a){var s,r,q=this
if(a===q.x)return
if(!a){q.ax=q.y
q.y=null}else{s=q.y=q.ax
if(s==null)q.ax=$.aiO()
else q.ax=A.a0J(new A.ug($.aiO(),s))}s=q.ga3()
r=q.ax
r=r==null?null:r.ga3()
s.setColorFilter(r)
q.x=a},
sBk(a){var s,r,q=this
if(q.z==a)return
q.z=t.hg.a(a)
s=q.ga3()
r=q.z
r=r==null?null:r.AI(q.at)
s.setShader(r)},
sJR(a){var s,r,q=this
if(a.k(0,q.Q))return
q.Q=a
s=a.b
if(!(isFinite(s)&&s>0))q.as=null
else{s=new A.Dm(a.a,s)
s.iK(null,t.CE)
q.as=s}s=q.ga3()
r=q.as
r=r==null?null:r.ga3()
s.setMaskFilter(r)},
skx(a){var s,r,q=this
if(q.at===a)return
q.at=a
s=q.ga3()
r=q.z
r=r==null?null:r.AI(a)
s.setShader(r)},
sHD(a){var s,r=this,q=r.ax
if(J.f(q==null?null:q.b,a))return
r.y=null
q=r.ax=A.a0J(a)
if(r.x){r.y=q
r.ax=A.a0J(new A.ug($.aiO(),q))}q=r.ga3()
s=r.ax
s=s==null?null:s.ga3()
q.setColorFilter(s)},
i5(){var s,r=t.e.a(new self.window.flutterCanvasKit.Paint())
r.setAntiAlias(this.r)
s=this.w
r.setColorInt(s.gp(s))
return r},
kU(){var s=this,r=null,q=t.e.a(new self.window.flutterCanvasKit.Paint()),p=s.b
q.setBlendMode($.aiR()[p.a])
p=s.c
q.setStyle($.amc()[p.a])
q.setStrokeWidth(s.d)
q.setAntiAlias(s.r)
p=s.w
q.setColorInt(p.gp(p))
p=s.z
p=p==null?r:p.AI(s.at)
q.setShader(p)
p=s.as
p=p==null?r:p.ga3()
q.setMaskFilter(p)
p=s.ax
p=p==null?r:p.ga3()
q.setColorFilter(p)
p=s.CW
p=p==null?r:p.ga3()
q.setImageFilter(p)
q.setStrokeCap($.aua()[0])
q.setStrokeJoin($.aub()[0])
q.setStrokeMiter(0)
return q},
d3(a){var s=this.a
if(s!=null)s.delete()}}
A.p4.prototype={
sIG(a){if(this.b===a)return
this.b=a
this.ga3().setFillType($.Ty()[a.a])},
xn(a){this.ga3().addOval(A.e6(a),!1,1)},
H3(a,b){var s=A.ase(a)
this.ga3().addPoly(s.toTypedArray(),b)
self.window.flutterCanvasKit.Free(s)},
f2(a){this.ga3().addRRect(A.mr(a),!1)},
qW(a){this.ga3().addRect(A.e6(a))},
bg(a){this.ga3().close()},
v(a,b){return this.ga3().contains(b.a,b.b)},
dJ(a){var s=this.ga3().getBounds()
return new A.D(s[0],s[1],s[2],s[3])},
d6(a,b,c){this.ga3().lineTo(b,c)},
hG(a,b,c){this.ga3().moveTo(b,c)},
eL(a){this.b=B.bq
this.ga3().reset()},
cO(a){var s=this.ga3().copy()
A.H(s,"transform",[1,0,a.a,0,1,a.b,0,0,1])
return A.avM(s,this.b)},
goM(){return!0},
i5(){var s=t.e.a(new self.window.flutterCanvasKit.Path()),r=this.b
s.setFillType($.Ty()[r.a])
return s},
d3(a){var s
this.c=this.ga3().toCmds()
s=this.a
if(s!=null)s.delete()},
kU(){var s=$.ba.az().Path,r=this.c
r.toString
r=s.MakeFromCmds(r)
s=this.b
r.setFillType($.Ty()[s.a])
return r}}
A.ui.prototype={
n(){var s,r=this
r.d=!0
s=r.c
if(s!=null)s.n()
s=r.a
if(s!=null)s.delete()
r.a=null},
goM(){return!0},
i5(){throw A.b(A.a6("Unreachable code"))},
kU(){return this.c.a5p()},
d3(a){var s
if(!this.d){s=this.a
if(s!=null)s.delete()}}}
A.mN.prototype={
r4(a){var s,r
this.a=a
s=t.e.a(new self.window.flutterCanvasKit.PictureRecorder())
this.b=s
r=s.beginRecording(A.e6(a))
return this.c=$.Cb()?new A.ea(r):new A.JG(new A.Vo(a,A.a([],t.i7)),r)},
rC(){var s,r,q=this,p=q.b
if(p==null)throw A.b(A.a6("PictureRecorder is not recording"))
s=p.finishRecordingAsPicture()
p.delete()
q.b=null
r=new A.ui(q.a,q.c.gKk())
r.iK(s,t.Ec)
return r},
gJB(){return this.b!=null}}
A.a3l.prototype={
a17(a){var s,r,q,p
try{p=a.b
if(p.gO(p))return
s=A.lU().a.GZ(p)
$.aiG().x=p
r=new A.ea(s.a.a.getCanvas())
q=new A.Z2(r,null,$.aiG())
q.a4u(a,!0)
p=A.lU().a
if(!p.as)$.kp.prepend(p.x)
p.as=!0
J.av5(s)
$.aiG().MR(0)}finally{this.Yc()}},
Yc(){var s,r
for(s=this.b,r=0;r<s.length;++r)s[r].$0()
for(s=$.j8,r=0;r<s.length;++r)s[r].a=null
B.b.L(s)}}
A.KW.prototype={
gm(a){return this.b.b},
C(a,b){var s,r=this,q=r.b
q.nP(b)
s=q.a.b.nk()
s.toString
r.c.l(0,b,s)
if(q.b>r.a)A.azz(r)},
a4Z(a){var s,r,q,p,o,n=this.a/2|0
for(s=this.b,r=s.a,q=this.c,p=0;p<n;++p){o=r.a.wx(0);--s.b
q.t(0,o)
o.d3(0)
o.ko()}}}
A.a8M.prototype={
gm(a){return this.b.b},
C(a,b){var s=this.b
s.nP(b)
s=s.a.b.nk()
s.toString
this.c.l(0,b,s)
this.SZ()},
zl(a){var s,r=this.c,q=r.j(0,a)
if(q==null)return!1
s=q.c
if(s!=null)--s.b
q.c=null
q.Ze()
s=this.b
s.nP(a)
s=s.a.b.nk()
s.toString
r.l(0,a,s)
return!0},
SZ(){var s,r,q,p,o
for(s=this.b,r=this.a,q=s.a,p=this.c;s.b>r;){o=q.a.wx(0);--s.b
p.t(0,o)
o.d3(0)
o.ko()}}}
A.dP.prototype={}
A.eS.prototype={
iK(a,b){var s=this,r=a==null?s.i5():a
s.a=r
if($.Cb())$.Tl().tG(0,s,r)
else if(s.goM()){A.qN()
$.Tn().C(0,s)}else{A.qN()
$.yi.push(s)}},
ga3(){var s,r=this,q=r.a
if(q==null){s=r.kU()
r.a=s
if(r.goM()){A.qN()
$.Tn().C(0,r)}else{A.qN()
$.yi.push(r)}q=s}return q},
ko(){if(this.a==null)return
this.a=null},
goM(){return!1}}
A.qM.prototype={
Eg(a,b){this.d=this.c=b},
ga3(){var s=this,r=s.c
if(r==null){r=s.e.$0()
s.c=r
s.d=t.qC.a(r)
A.qN()
$.Tn().C(0,s)
r=s.ga3()}return r},
d3(a){var s=this.d
if(s!=null)s.delete()},
ko(){this.d=this.c=null},
a5x(a){var s,r=this
if(--r.a===0){s=r.d
if(s!=null)if($.Cb())$.Tl().xN(s)
else{r.d3(0)
r.ko()}r.e=r.d=r.c=null
r.f=!0}}}
A.yA.prototype={
Bv(a){return this.b.$2(this,new A.ea(this.a.a.getCanvas()))}}
A.jT.prototype={
G7(){var s,r=this.w
if(r!=null){s=this.f
if(s!=null)s.setResourceCacheLimitBytes(r)}},
GZ(a){return new A.yA(this.I1(a),new A.a8I(this))},
I1(a){var s,r,q,p,o,n,m,l=this,k="webglcontextrestored",j="webglcontextlost"
if($.amo()){s=l.a
return s==null?l.a=new A.uj($.ba.az().getH5vccSkSurface(),null):s}if(a.gO(a))throw A.b(A.amU("Cannot create surfaces of empty size."))
r=l.ax
s=!l.b
if(s&&r!=null&&a.a===r.a&&a.b===r.b){s=$.c4().w
if(s==null)s=A.b_()
if(s!==l.ay)l.x6()
s=l.a
s.toString
return s}q=l.at
if(!s||q==null||a.a>q.a||a.b>q.b){p=q==null?a:a.a7(0,1.4)
s=l.a
if(s!=null)s.n()
l.a=null
l.as=!1
s=l.f
if(s!=null)s.releaseResourcesAndAbandonContext()
s=l.f
if(s!=null)s.delete()
l.f=null
s=l.y
if(s!=null){A.eb(s,k,l.e,!1)
s=l.y
s.toString
A.eb(s,j,l.d,!1)
l.y.remove()
l.d=l.e=null}l.z=B.d.dh(p.a)
s=B.d.dh(p.b)
l.Q=s
o=l.y=A.C4(s,l.z)
A.H(o,"setAttribute",["aria-hidden","true"])
A.r(o.style,"position","absolute")
l.x6()
l.e=A.ae(l.gSj())
s=A.ae(l.gSh())
l.d=s
A.bN(o,j,s,!1)
A.bN(o,k,l.e,!1)
l.c=l.b=!1
s=$.i_
if((s==null?$.i_=A.BX():s)!==-1){s=$.e5
s=!(s==null?$.e5=new A.hr(self.window.flutterConfiguration):s).gHx()}else s=!1
if(s){s=$.ba.az()
n=$.i_
if(n==null)n=$.i_=A.BX()
n=l.r=s.GetWebGLContext(o,t.e.a({antialias:0,majorVersion:n}))
if(n!==0){l.f=$.ba.az().MakeGrContext(n)
l.G7()}}l.x.append(o)
l.at=p}else{s=$.c4().w
if(s==null)s=A.b_()
if(s!==l.ay)l.x6()}s=$.c4()
n=s.w
l.ay=n==null?A.b_():n
l.ax=a
m=B.d.dh(a.b)
n=l.Q
s=s.w
if(s==null)s=A.b_()
A.r(l.y.style,"transform","translate(0, -"+A.h((n-m)/s)+"px)")
return l.a=l.Su(a)},
x6(){var s,r,q=this.z,p=$.c4(),o=p.w
if(o==null)o=A.b_()
s=this.Q
p=p.w
if(p==null)p=A.b_()
r=this.y.style
A.r(r,"width",A.h(q/o)+"px")
A.r(r,"height",A.h(s/p)+"px")},
Sk(a){this.c=!1
$.aR().z4()
a.stopPropagation()
a.preventDefault()},
Si(a){var s=this,r=A.lU()
s.c=!0
if(r.a3i(s)){s.b=!0
a.preventDefault()}else s.n()},
Su(a){var s,r=this,q=$.i_
if((q==null?$.i_=A.BX():q)===-1){q=r.y
q.toString
return r.qp(q,"WebGL support not detected")}else{q=$.e5
if((q==null?$.e5=new A.hr(self.window.flutterConfiguration):q).gHx()){q=r.y
q.toString
return r.qp(q,"CPU rendering forced by application")}else if(r.r===0){q=r.y
q.toString
return r.qp(q,"Failed to initialize WebGL context")}else{q=$.ba.az()
s=r.f
s.toString
s=q.MakeOnScreenGLSurface(s,B.d.dh(a.a),B.d.dh(a.b),self.window.flutterCanvasKit.ColorSpace.SRGB)
if(s==null){q=r.y
q.toString
return r.qp(q,"Failed to initialize WebGL surface")}return new A.uj(s,r.r)}}},
qp(a,b){if(!$.ape){$.bX().$1("WARNING: Falling back to CPU-only rendering. "+b+".")
$.ape=!0}return new A.uj($.ba.az().MakeSWCanvasSurface(a),null)},
n(){var s=this,r=s.y
if(r!=null)A.eb(r,"webglcontextlost",s.d,!1)
r=s.y
if(r!=null)A.eb(r,"webglcontextrestored",s.e,!1)
s.e=s.d=null
s.x.remove()
r=s.a
if(r!=null)r.n()}}
A.a8I.prototype={
$2(a,b){this.a.a.a.flush()
return!0},
$S:220}
A.uj.prototype={
n(){if(this.c)return
this.a.dispose()
this.c=!0}}
A.Lh.prototype={
LN(){var s,r=this,q=r.d,p=q.length
if(p!==0){s=q.pop()
r.c.push(s)
return s}else{q=r.c
if(q.length+p+1<r.b){s=new A.jT(A.b9(self.document,"flt-canvas-container"))
q.push(s)
return s}else return null}},
XU(a){a.x.remove()},
a3i(a){if(a===this.a||B.b.v(this.c,a))return!0
return!1}}
A.Dp.prototype={}
A.uk.prototype={
gBq(){var s,r=this,q=r.dx
if(q===$){s=new A.Vp(r).$0()
r.dx!==$&&A.bm()
r.dx=s
q=s}return q},
gfV(a){return this.f},
ghB(a){return this.r}}
A.Vp.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.a,h=j.b,g=j.c,f=j.d,e=j.e,d=j.f,c=j.w,b=j.z,a=j.Q,a0=j.as,a1=j.at,a2=j.ch,a3=j.CW,a4=j.cx,a5=A.ap4(null)
if(a2!=null)a5.backgroundColor=A.ts(a2.w)
if(i!=null)a5.color=A.ts(i)
if(h!=null){s=$.ba.az().NoDecoration
r=h.a
if((r|1)===r)s=(s|$.ba.az().UnderlineDecoration)>>>0
if((r|2)===r)s=(s|$.ba.az().OverlineDecoration)>>>0
if((r|4)===r)s=(s|$.ba.az().LineThroughDecoration)>>>0
a5.decoration=s}if(e!=null)a5.decorationThickness=e
if(g!=null)a5.decorationColor=A.ts(g)
if(f!=null)a5.decorationStyle=$.aue()[f.a]
if(c!=null)a5.textBaseline=$.aud()[c.a]
if(b!=null)a5.fontSize=b
if(a!=null)a5.letterSpacing=a
if(a0!=null)a5.wordSpacing=a0
if(a1!=null)a5.heightMultiplier=a1
switch(j.ax){case null:break
case B.t:a5.halfLeading=!0
break
case B.CF:a5.halfLeading=!1
break}q=j.db
if(q===$){p=A.al9(j.x,j.y)
j.db!==$&&A.bm()
j.db=p
q=p}a5.fontFamilies=q
if(d!=null||!1)a5.fontStyle=A.alP(d,j.r)
if(a3!=null)a5.foregroundColor=A.ts(a3.w)
if(a4!=null){o=A.a([],t.J)
for(j=a4.length,n=0;n<a4.length;a4.length===j||(0,A.K)(a4),++n){m=a4[n]
l=A.azy(null)
l.color=A.ts(m.a)
r=m.b
k=new Float32Array(2)
k[0]=r.a
k[1]=r.b
l.offset=k
l.blurRadius=m.c
o.push(l)}a5.shadows=o}return $.ba.az().TextStyle(a5)},
$S:36}
A.uh.prototype={
lt(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a
if(f==null){r=A.an1(g.b)
for(q=g.c,p=q.length,o=r.c,n=r.a,m=0;m<q.length;q.length===p||(0,A.K)(q),++m){l=q[m]
switch(l.a.a){case 0:k=l.b
k.toString
r.lV(k)
break
case 1:r.eK()
break
case 2:k=l.c
k.toString
r.pd(k)
break
case 3:k=l.d
k.toString
o.push(new A.ou(B.a4b,null,null,k))
n.addPlaceholder.apply(n,[k.gao(k),k.gaW(k),k.gdf(),k.gnX(),k.gp0(k)])
break}}f=r.CI()
g.a=f
j=!0}else j=!1
i=!J.f(g.d,a)
if(j||i){g.d=a
try{f.layout(a.a)
g.e=f.getAlphabeticBaseline()
g.f=f.didExceedMaxLines()
g.r=f.getHeight()
g.w=f.getIdeographicBaseline()
g.x=f.getLongestLine()
g.y=f.getMaxIntrinsicWidth()
g.z=f.getMinIntrinsicWidth()
g.Q=f.getMaxWidth()
g.as=g.Bp(J.cE(f.getRectsForPlaceholders(),t.D4))}catch(h){s=A.ab(h)
$.bX().$1('CanvasKit threw an exception while laying out the paragraph. The font was "'+A.h(g.b.b)+'". Exception:\n'+A.h(s))
throw h}}return f},
d3(a){this.a.delete()},
ko(){this.a=null},
gj4(a){return this.e},
gIg(){return this.f},
gaW(a){return this.r},
gJc(a){return this.w},
gfj(){return this.x},
gzo(){return this.y},
gJZ(){return this.z},
gao(a){return this.Q},
px(){var s=this.as
s.toString
return s},
mS(a,b,c,d){var s,r,q,p
if(a<0||b<0)return B.Pq
s=this.d
s.toString
r=this.lt(s)
s=$.au8()[c.a]
q=d.a
p=$.au9()
return this.Bp(J.cE(r.getRectsForRange(a,b,s,p[q<2?q:0]),t.D4))},
tZ(a,b,c){return this.mS(a,b,c,B.ed)},
Bp(a){var s,r,q,p=A.a([],t.l)
for(s=0;s<a.gm(a);++s){r=a.j(0,s)
q=r.direction.value
p.push(new A.lV(r[0],r[1],r[2],r[3],B.rp[q]))}return p},
iE(a){var s,r=this.d
r.toString
r=this.lt(r).getGlyphPositionAtCoordinate(a.a,a.b)
s=B.NS[r.affinity.value]
return new A.dg(r.pos,s)},
AV(a){var s=this.d
s.toString
s=this.lt(s).getWordBoundary(a.a)
return new A.fr(s.start,s.end)},
ik(a){var s=this
if(J.f(s.d,a))return
s.lt(a)
if(!$.tt().zl(s))$.tt().C(0,s)}}
A.Vn.prototype={
lV(a){var s=A.a([],t.s),r=B.b.gM(this.f),q=r.x
if(q!=null)s.push(q)
q=r.y
if(q!=null)B.b.I(s,q)
$.tu().a1g(a,s)
this.c.push(new A.ou(B.a48,a,null,null))
this.a.addText(a)},
aK(){return new A.uh(this.CI(),this.b,this.c)},
CI(){var s=this.a,r=s.build()
s.delete()
return r},
gKl(){return this.e},
eK(){var s=this.f
if(s.length<=1)return
this.c.push(B.a4c)
s.pop()
this.a.pop()},
pd(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null,a3=a1.f,a4=B.b.gM(a3)
t.dv.a(a5)
s=a5.a
if(s==null)s=a4.a
r=a5.b
if(r==null)r=a4.b
q=a5.c
if(q==null)q=a4.c
p=a5.d
if(p==null)p=a4.d
o=a5.e
if(o==null)o=a4.e
n=a5.f
if(n==null)n=a4.f
m=a5.w
if(m==null)m=a4.w
l=a5.x
if(l==null)l=a4.x
k=a5.y
if(k==null)k=a4.y
j=a5.z
if(j==null)j=a4.z
i=a5.Q
if(i==null)i=a4.Q
h=a5.as
if(h==null)h=a4.as
g=a5.at
if(g==null)g=a4.at
f=a5.ax
if(f==null)f=a4.ax
e=a5.ch
if(e==null)e=a4.ch
d=a5.CW
if(d==null)d=a4.CW
c=a5.cx
if(c==null)c=a4.cx
b=A.aja(e,s,r,q,p,o,l,k,a4.cy,j,a4.r,n,d,g,f,i,a4.ay,c,m,h)
a3.push(b)
a1.c.push(new A.ou(B.a4a,a2,a5,a2))
a3=b.CW
s=a3==null
if(!s||b.ch!=null){a=s?a2:a3.ga3()
if(a==null){a=$.asq()
a3=b.a
a3=a3==null?a2:a3.gp(a3)
if(a3==null)a3=4278190080
a.setColorInt(a3)}a3=b.ch
a0=a3==null?a2:a3.ga3()
if(a0==null)a0=$.asp()
a1.a.pushPaintStyle(b.gBq(),a,a0)}else a1.a.pushStyle(b.gBq())}}
A.ou.prototype={}
A.ov.prototype={
i(a){return"_ParagraphCommandType."+this.b}}
A.agy.prototype={
$1(a){return this.a===a},
$S:20}
A.CW.prototype={
i(a){return"CanvasKitError: "+this.a}}
A.DE.prototype={
Mo(a,b){var s={}
s.a=!1
this.a.mY(0,A.bE(J.aW(a.b,"text"))).au(new A.VC(s,b),t.P).i2(new A.VD(s,b))},
LE(a){this.b.e3(0).au(new A.VA(a),t.P).i2(new A.VB(this,a))}}
A.VC.prototype={
$1(a){var s=this.b
if(a){s.toString
s.$1(B.X.bL([!0]))}else{s.toString
s.$1(B.X.bL(["copy_fail","Clipboard.setData failed",null]))
this.a.a=!0}},
$S:58}
A.VD.prototype={
$1(a){var s
if(!this.a.a){s=this.b
s.toString
s.$1(B.X.bL(["copy_fail","Clipboard.setData failed",null]))}},
$S:2}
A.VA.prototype={
$1(a){var s=A.aV(["text",a],t.N,t.z),r=this.a
r.toString
r.$1(B.X.bL([s]))},
$S:151}
A.VB.prototype={
$1(a){var s
if(a instanceof A.rg){A.ajB(B.v,t.H).au(new A.Vz(this.b),t.P)
return}s=this.b
A.mp("Could not get text from clipboard: "+A.h(a))
s.toString
s.$1(B.X.bL(["paste_fail","Clipboard.getData failed",null]))},
$S:2}
A.Vz.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(null)},
$S:14}
A.DD.prototype={
mY(a,b){return this.Mn(0,b)},
Mn(a,b){var s=0,r=A.R(t.y),q,p=2,o,n,m,l,k
var $async$mY=A.L(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:p=4
m=self.window.navigator.clipboard
m.toString
b.toString
s=7
return A.G(A.fz(m.writeText(b),t.z),$async$mY)
case 7:p=2
s=6
break
case 4:p=3
k=o
n=A.ab(k)
A.mp("copy is not successful "+A.h(n))
m=A.bZ(!1,t.y)
q=m
s=1
break
s=6
break
case 3:s=2
break
case 6:q=A.bZ(!0,t.y)
s=1
break
case 1:return A.P(q,r)
case 2:return A.O(o,r)}})
return A.Q($async$mY,r)}}
A.Vy.prototype={
e3(a){var s=0,r=A.R(t.N),q
var $async$e3=A.L(function(b,c){if(b===1)return A.O(c,r)
while(true)switch(s){case 0:q=A.fz(self.window.navigator.clipboard.readText(),t.N)
s=1
break
case 1:return A.P(q,r)}})
return A.Q($async$e3,r)}}
A.EY.prototype={
mY(a,b){return A.bZ(this.Yy(b),t.y)},
Yy(a){var s,r,q,p,o="-99999px",n="transparent",m=A.b9(self.document,"textarea"),l=m.style
A.r(l,"position","absolute")
A.r(l,"top",o)
A.r(l,"left",o)
A.r(l,"opacity","0")
A.r(l,"color",n)
A.r(l,"background-color",n)
A.r(l,"background",n)
self.document.body.append(m)
s=m
s.value=a
s.focus()
s.select()
r=!1
try{r=self.document.execCommand("copy")
if(!r)A.mp("copy is not successful")}catch(p){q=A.ab(p)
A.mp("copy is not successful "+A.h(q))}finally{s.remove()}return r}}
A.Yk.prototype={
e3(a){return A.ajC(new A.rg("Paste is not implemented for this browser."),null,t.N)}}
A.hr.prototype={
gHw(){var s=this.a
s=s==null?null:s.canvasKitBaseUrl
return s==null?"https://unpkg.com/canvaskit-wasm@0.35.0/bin/":s},
gHx(){var s=this.a
s=s==null?null:s.canvasKitForceCpuOnly
return s===!0},
gI8(){var s=this.a
s=s==null?null:s.debugShowSemanticsNodes
return s===!0}}
A.a_X.prototype={}
A.Xw.prototype={}
A.WF.prototype={}
A.WG.prototype={
$1(a){return A.H(this.a,"warn",[a])},
$S:8}
A.Xa.prototype={}
A.Em.prototype={}
A.WO.prototype={}
A.Eq.prototype={}
A.Ep.prototype={}
A.Xh.prototype={}
A.Ev.prototype={}
A.Eo.prototype={}
A.Wt.prototype={}
A.Es.prototype={}
A.WV.prototype={}
A.WQ.prototype={}
A.WL.prototype={}
A.WS.prototype={}
A.WX.prototype={}
A.WN.prototype={}
A.WY.prototype={}
A.WM.prototype={}
A.WW.prototype={}
A.Et.prototype={}
A.Xd.prototype={}
A.Ew.prototype={}
A.Xe.prototype={}
A.Ww.prototype={}
A.Wy.prototype={}
A.WA.prototype={}
A.X0.prototype={}
A.Wz.prototype={}
A.Wx.prototype={}
A.ED.prototype={}
A.Xx.prototype={}
A.ahw.prototype={
$1(a){var s,r,q,p=this.a,o=p.status
o.toString
s=o>=200&&o<300
r=o>307&&o<400
o=s||o===0||o===304||r
q=this.b
if(o)q.bT(0,p)
else q.hn(a)},
$S:1}
A.Xj.prototype={}
A.El.prototype={}
A.Xn.prototype={}
A.Xo.prototype={}
A.WH.prototype={}
A.Ex.prototype={}
A.Xi.prototype={}
A.WJ.prototype={}
A.WK.prototype={}
A.Xt.prototype={}
A.WZ.prototype={}
A.WD.prototype={}
A.EC.prototype={}
A.X1.prototype={}
A.X_.prototype={}
A.X2.prototype={}
A.Xg.prototype={}
A.Xs.prototype={}
A.Wr.prototype={}
A.X8.prototype={}
A.X9.prototype={}
A.X3.prototype={}
A.X4.prototype={}
A.Xc.prototype={}
A.Eu.prototype={}
A.Xf.prototype={}
A.Xv.prototype={}
A.Xr.prototype={}
A.Xq.prototype={}
A.WE.prototype={}
A.WT.prototype={}
A.Xp.prototype={}
A.WP.prototype={}
A.WU.prototype={}
A.Xb.prototype={}
A.WI.prototype={}
A.En.prototype={}
A.Xm.prototype={}
A.Ez.prototype={}
A.Wu.prototype={}
A.Ws.prototype={}
A.Xk.prototype={}
A.Xl.prototype={}
A.EA.prototype={}
A.uM.prototype={}
A.Xu.prototype={}
A.X6.prototype={}
A.WR.prototype={}
A.X7.prototype={}
A.X5.prototype={}
A.abA.prototype={}
A.zy.prototype={
q(){var s=++this.b,r=this.a
if(s>r.length)throw A.b("Iterator out of bounds")
return s<r.length},
gB(a){return this.$ti.c.a(this.a.item(this.b))}}
A.m2.prototype={
gP(a){return new A.zy(this.a,this.$ti.h("zy<1>"))},
gm(a){return this.a.length}}
A.Fg.prototype={
H6(a){var s,r=this
if(!J.f(a,r.w)){s=r.w
if(s!=null)s.remove()
r.w=a
s=r.e
s.toString
a.toString
s.append(a)}},
eL(a){var s,r,q,p,o,n,m=this,l="setAttribute",k="position",j="0",i="none",h="absolute",g={},f=$.c8(),e=f===B.M,d=m.c
if(d!=null)d.remove()
m.c=A.b9(self.document,"style")
m.f=null
d=self.document.head
d.toString
s=m.c
s.toString
d.append(s)
s=m.c.sheet
s.toString
if(f!==B.bh)if(f!==B.cg)d=e
else d=!0
else d=!0
A.ar6(s,f,d)
d=self.document.body
d.toString
A.H(d,l,["flt-renderer",($.aS()?"canvaskit":"html")+" (auto-selected)"])
A.H(d,l,["flt-build-mode","release"])
A.cX(d,k,"fixed")
A.cX(d,"top",j)
A.cX(d,"right",j)
A.cX(d,"bottom",j)
A.cX(d,"left",j)
A.cX(d,"overflow","hidden")
A.cX(d,"padding",j)
A.cX(d,"margin",j)
A.cX(d,"user-select",i)
A.cX(d,"-webkit-user-select",i)
A.cX(d,"-ms-user-select",i)
A.cX(d,"-moz-user-select",i)
A.cX(d,"touch-action",i)
A.cX(d,"font","normal normal 14px sans-serif")
A.cX(d,"color","red")
d.spellcheck=!1
for(f=t.sM,f=A.hj(new A.m2(self.document.head.querySelectorAll('meta[name="viewport"]'),f),f.h("o.E"),t.e),s=J.ao(f.a),f=A.m(f),f=f.h("@<1>").T(f.z[1]).z[1];s.q();){r=f.a(s.gB(s))
r.remove()}f=m.d
if(f!=null)f.remove()
f=A.b9(self.document,"meta")
A.H(f,l,["flt-viewport",""])
f.name="viewport"
f.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
m.d=f
f=self.document.head
f.toString
s=m.d
s.toString
f.append(s)
s=m.y
if(s!=null)s.remove()
q=m.y=A.b9(self.document,"flt-glass-pane")
f=q.style
A.r(f,k,h)
A.r(f,"top",j)
A.r(f,"right",j)
A.r(f,"bottom",j)
A.r(f,"left",j)
d.append(q)
p=m.Sr(q)
m.z=p
d=A.b9(self.document,"flt-scene-host")
A.r(d.style,"pointer-events",i)
m.e=d
if($.aS()){f=A.b9(self.document,"flt-scene")
$.kp=f
m.H6(f)}o=A.b9(self.document,"flt-semantics-host")
f=o.style
A.r(f,k,h)
A.r(f,"transform-origin","0 0 0")
m.r=o
m.Lf()
f=$.dU
n=(f==null?$.dU=A.kP():f).r.a.Kp()
f=m.e
f.toString
p.He(A.a([n,f,o],t.J))
f=$.e5
if((f==null?$.e5=new A.hr(self.window.flutterConfiguration):f).gI8())A.r(m.e.style,"opacity","0.3")
if($.aoy==null){f=new A.Jm(q,new A.a2V(A.z(t.S,t.lm)))
d=$.c8()
if(d===B.M){d=$.dS()
d=d===B.ay}else d=!1
if(d)$.asQ().a5O()
f.d=f.Sn()
$.aoy=f}if($.anV==null){f=new A.G0(A.z(t.N,t.DH))
f.YE()
$.anV=f}if(self.window.visualViewport==null&&e){f=self.window.innerWidth
f.toString
g.a=0
A.azZ(B.bi,new A.YJ(g,m,f))}f=m.gWl()
if(self.window.visualViewport!=null){d=self.window.visualViewport
d.toString
m.a=A.cb(d,"resize",A.ae(f))}else m.a=A.cb(self.window,"resize",A.ae(f))
m.b=A.cb(self.window,"languagechange",A.ae(m.gVR()))
f=$.aR()
f.a=f.a.HV(A.ajs())},
Sr(a){var s,r,q,p,o
if(a.attachShadow!=null){s=new A.KI()
r=t.e.a(a.attachShadow(A.tp(A.aV(["mode","open","delegatesFocus",!1],t.N,t.z))))
s.a=r
q=A.b9(self.document,"style")
r.appendChild(q)
r=q.sheet
r.toString
p=$.c8()
if(p!==B.bh)if(p!==B.cg)o=p===B.M
else o=!0
else o=!0
A.ar6(r,p,o)
return s}else{s=new A.EI()
r=A.b9(self.document,"flt-element-host-node")
s.a=r
a.appendChild(r)
return s}},
Lf(){A.r(this.r.style,"transform","scale("+A.h(1/self.window.devicePixelRatio)+")")},
EE(a){var s
this.Lf()
s=$.dS()
if(!J.e8(B.lW.a,s)&&!$.c4().a3m()&&$.amm().c){$.c4().HJ(!0)
$.aR().z4()}else{s=$.c4()
s.HK()
s.HJ(!1)
$.aR().z4()}},
VS(a){var s=$.aR()
s.a=s.a.HV(A.ajs())
s=$.c4().b.dy
if(s!=null)s.$0()},
Ms(a){var s,r,q,p=self.window.screen,o=p.orientation
if(o!=null){p=J.at(a)
if(p.gO(a)){o.unlock()
return A.bZ(!0,t.y)}else{s=A.ax4(A.bE(p.gH(a)))
if(s!=null){r=new A.aQ(new A.a7($.a9,t.aO),t.wY)
try{A.fz(o.lock(s),t.z).au(new A.YK(r),t.P).i2(new A.YL(r))}catch(q){p=A.bZ(!1,t.y)
return p}return r.a}}}return A.bZ(!1,t.y)}}
A.YJ.prototype={
$1(a){var s=this.a;++s.a
if(this.c!==self.window.innerWidth){a.aA(0)
this.b.EE(null)}else if(s.a>5)a.aA(0)},
$S:173}
A.YK.prototype={
$1(a){this.a.bT(0,!0)},
$S:2}
A.YL.prototype={
$1(a){this.a.bT(0,!1)},
$S:2}
A.XV.prototype={}
A.Ko.prototype={}
A.nM.prototype={}
A.Qa.prototype={}
A.a5l.prototype={
bv(a){var s,r,q=this,p=q.oz$
p=p.length===0?q.a:B.b.gM(p)
s=q.ic$
r=new A.bI(new Float32Array(16))
r.bf(s)
q.IF$.push(new A.Qa(p,r))},
bj(a){var s,r,q,p=this,o=p.IF$
if(o.length===0)return
s=o.pop()
p.ic$=s.b
o=p.oz$
r=s.a
q=p.a
while(!0){if(!!J.f(o.length===0?q:B.b.gM(o),r))break
o.pop()}},
ag(a,b,c){this.ic$.ag(0,b,c)},
cN(a,b,c){this.ic$.cN(0,b,c)},
fq(a,b){this.ic$.KX(0,$.asR(),b)},
a8(a,b){this.ic$.cY(0,new A.bI(b))}}
A.aim.prototype={
$1(a){$.al5=!1
$.aR().fW("flutter/system",$.atK(),new A.ail())},
$S:83}
A.ail.prototype={
$1(a){},
$S:13}
A.fG.prototype={}
A.DK.prototype={
a02(){var s,r,q,p=this,o=p.b
if(o!=null)for(o=o.gaR(o),s=A.m(o),s=s.h("@<1>").T(s.z[1]),o=new A.c5(J.ao(o.a),o.b,s.h("c5<1,2>")),s=s.z[1];o.q();){r=o.a
for(r=J.ao(r==null?s.a(r):r);r.q();){q=r.gB(r)
q.b.$1(q.a)}}p.b=p.a
p.a=null},
Co(a,b){var s,r=this,q=r.a
if(q==null)q=r.a=A.z(t.N,r.$ti.h("x<rp<1>>"))
s=q.j(0,a)
if(s==null){s=A.a([],r.$ti.h("t<rp<1>>"))
q.l(0,a,s)
q=s}else q=s
q.push(b)},
a53(a){var s,r,q=this.b
if(q==null)return null
s=q.j(0,a)
if(s==null||s.length===0)return null
r=(s&&B.b).fo(s,0)
this.Co(a,r)
return r.a}}
A.rp.prototype={}
A.KI.prototype={
hj(a,b){var s=this.a
s===$&&A.c()
return s.appendChild(b)},
gK4(){var s=this.a
s===$&&A.c()
return s},
He(a){return B.b.R(a,this.gxt(this))}}
A.EI.prototype={
hj(a,b){var s=this.a
s===$&&A.c()
return s.appendChild(b)},
gK4(){var s=this.a
s===$&&A.c()
return s},
He(a){return B.b.R(a,this.gxt(this))}}
A.jd.prototype={
sxF(a,b){var s,r,q=this
q.a=b
s=B.d.dE(b.a)-1
r=B.d.dE(q.a.b)-1
if(q.z!==s||q.Q!==r){q.z=s
q.Q=r
q.GJ()}},
GJ(){A.r(this.c.style,"transform","translate("+this.z+"px, "+this.Q+"px)")},
FU(){var s=this,r=s.a,q=r.a
r=r.b
s.d.ag(0,-q+(q-1-s.z)+1,-r+(r-1-s.Q)+1)},
In(a,b){return this.r>=A.Ur(a.c-a.a)&&this.w>=A.Uq(a.d-a.b)&&this.ay===b},
L(a){var s,r,q,p,o,n=this
n.at=!1
n.d.L(0)
s=n.f
r=s.length
for(q=n.c,p=0;p<r;++p){o=s[p]
if(J.f(o.parentNode,q))o.remove()}B.b.L(s)
n.as=!1
n.e=null
n.FU()},
bv(a){var s=this.d
s.PT(0)
if(s.y!=null){s.gaO(s).save();++s.Q}return this.x++},
bj(a){var s=this.d
s.PR(0)
if(s.y!=null){s.gaO(s).restore()
s.gbY().eL(0);--s.Q}--this.x
this.e=null},
ag(a,b,c){this.d.ag(0,b,c)},
cN(a,b,c){var s=this.d
s.PU(0,b,c)
if(s.y!=null)s.gaO(s).scale(b,c)},
fq(a,b){var s=this.d
s.PS(0,b)
if(s.y!=null)s.gaO(s).rotate(b)},
a8(a,b){var s
if(A.ait(b)===B.hj)this.at=!0
s=this.d
s.PV(0,b)
if(s.y!=null)A.H(s.gaO(s),"transform",[b[0],b[1],b[4],b[5],b[12],b[13]])},
kj(a,b){var s,r,q=this.d
if(b===B.Fm){s=A.ako()
s.b=B.fT
r=this.a
s.qX(new A.D(0,0,0+(r.c-r.a),0+(r.d-r.b)),0,0)
s.qX(a,0,0)
q.f9(0,s)}else{q.PQ(a)
if(q.y!=null)q.S4(q.gaO(q),a)}},
ki(a){var s=this.d
s.PP(a)
if(s.y!=null)s.S3(s.gaO(s),a)},
f9(a,b){this.d.f9(0,b)},
xb(a){var s,r=this
if(!r.ch.d)if(!(!r.ax&&r.at))s=r.as&&r.d.y==null&&a.x==null&&a.w==null&&a.b!==B.U
else s=!0
else s=!0
return s},
xc(a){var s=this,r=s.ch
if(!r.d)if(!(!s.ax&&s.at))r=(s.as||r.a||r.b)&&s.d.y==null&&a.x==null&&a.w==null
else r=!0
else r=!0
return r},
hr(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(this.xb(c)){s=A.ako()
s.hG(0,a.a,a.b)
s.d6(0,b.a,b.b)
this.cr(s,c)}else{r=c.w!=null?A.akc(a,b):null
q=this.d
q.gbY().iF(c,r)
p=q.gaO(q)
p.beginPath()
r=q.gbY().Q
o=a.a
n=a.b
m=b.a
l=b.b
if(r==null){p.moveTo(o,n)
p.lineTo(m,l)}else{k=r.a
j=r.b
p.moveTo(o-k,n-j)
p.lineTo(m-k,l-j)}p.stroke()
q.gbY().jI()}},
hs(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this
if(a0.xb(a1)){s=a0.d.c
r=new A.bI(new Float32Array(16))
r.bf(s)
r.i4(r)
s=$.c4()
q=s.w
if(q==null)q=A.b_()
p=s.gis().a*q
o=s.gis().b*q
s=new A.oa(new Float32Array(3))
s.fw(0,0,0)
n=r.ir(s)
s=new A.oa(new Float32Array(3))
s.fw(p,0,0)
m=r.ir(s)
s=new A.oa(new Float32Array(3))
s.fw(p,o,0)
l=r.ir(s)
s=new A.oa(new Float32Array(3))
s.fw(0,o,0)
k=r.ir(s)
s=n.a
j=s[0]
i=m.a
h=i[0]
g=l.a
f=g[0]
e=k.a
d=e[0]
c=Math.min(j,Math.min(h,Math.min(f,d)))
s=s[1]
i=i[1]
g=g[1]
e=e[1]
a0.c3(new A.D(c,Math.min(s,Math.min(i,Math.min(g,e))),Math.max(j,Math.max(h,Math.max(f,d))),Math.max(s,Math.max(i,Math.max(g,e)))),a1)}else{if(a1.w!=null){s=a0.a
b=new A.D(0,0,s.c-s.a,s.d-s.b)}else b=null
s=a0.d
s.gbY().iF(a1,b)
a=s.gaO(s)
a.beginPath()
a.fillRect(-1e4,-1e4,2e4,2e4)
s.gbY().jI()}},
c3(a,b){var s,r,q,p,o,n,m=this.d
if(this.xc(b))this.np(A.C1(a,b,"draw-rect",m.c),new A.v(Math.min(a.a,a.c),Math.min(a.b,a.d)),b)
else{m.gbY().iF(b,a)
s=b.b
m.gaO(m).beginPath()
r=m.gbY().Q
q=a.a
p=a.b
o=a.c-q
n=a.d-p
if(r==null)m.gaO(m).rect(q,p,o,n)
else m.gaO(m).rect(q-r.a,p-r.b,o,n)
m.gbY().fY(s)
m.gbY().jI()}},
np(a,b,c){var s,r,q,p,o,n=this,m=n.d,l=m.b
if(l!=null){s=A.akZ(l,a,B.k,A.Tj(m.c,b))
for(m=s.length,l=n.c,r=n.f,q=0;q<s.length;s.length===m||(0,A.K)(s),++q){p=s[q]
l.append(p)
r.push(p)}}else{n.c.append(a)
n.f.push(a)}o=c.a
if(o!=null){m=a.style
l=A.ahh(o)
A.r(m,"mix-blend-mode",l==null?"":l)}n.vg()},
c7(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a1.b,b=a1.c,a=a1.d,a0=this.d
if(this.xc(a2)){s=A.C1(new A.D(d,c,b,a),a2,"draw-rrect",a0.c)
A.ar7(s.style,a1)
this.np(s,new A.v(Math.min(d,b),Math.min(c,a)),a2)}else{a0.gbY().iF(a2,new A.D(d,c,b,a))
d=a2.b
r=a0.gbY().Q
c=a0.gaO(a0)
a1=(r==null?a1:a1.cO(new A.v(-r.a,-r.b))).pE()
q=a1.a
p=a1.c
o=a1.b
n=a1.d
if(q>p){m=p
p=q
q=m}if(o>n){m=n
n=o
o=m}l=Math.abs(a1.r)
k=Math.abs(a1.e)
j=Math.abs(a1.w)
i=Math.abs(a1.f)
h=Math.abs(a1.z)
g=Math.abs(a1.x)
f=Math.abs(a1.Q)
e=Math.abs(a1.y)
c.beginPath()
c.moveTo(q+l,o)
b=p-l
c.lineTo(b,o)
A.T3(c,b,o+j,l,j,0,4.71238898038469,6.283185307179586,!1)
b=n-e
c.lineTo(p,b)
A.T3(c,p-g,b,g,e,0,0,1.5707963267948966,!1)
b=q+h
c.lineTo(b,n)
A.T3(c,b,n-f,h,f,0,1.5707963267948966,3.141592653589793,!1)
b=o+i
c.lineTo(q,b)
A.T3(c,q+k,b,k,i,0,3.141592653589793,4.71238898038469,!1)
a0.gbY().fY(d)
a0.gbY().jI()}},
dO(a,b,c){var s,r,q,p,o,n,m,l=this,k=A.xh(a,b)
if(l.xc(c)){s=A.C1(k,c,"draw-circle",l.d.c)
l.np(s,new A.v(Math.min(k.a,k.c),Math.min(k.b,k.d)),c)
A.r(s.style,"border-radius","50%")}else{r=c.w!=null?A.xh(a,b):null
q=l.d
q.gbY().iF(c,r)
r=c.b
q.gaO(q).beginPath()
p=q.gbY().Q
o=p==null
n=a.a
n=o?n:n-p.a
m=a.b
m=o?m:m-p.b
A.T3(q.gaO(q),n,m,b,b,0,0,6.283185307179586,!1)
q.gbY().fY(r)
q.gbY().jI()}},
cr(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="setAttribute"
if(e.xb(b)){s=e.d
r=s.c
t.n.a(a)
q=a.a.M0()
if(q!=null){p=q.b
o=q.d
n=q.a
m=p===o?new A.D(n,p,n+(q.c-n),p+1):new A.D(n,p,n+1,p+(o-p))
e.np(A.C1(m,b,"draw-rect",s.c),new A.v(Math.min(m.a,m.c),Math.min(m.b,m.d)),b)
return}l=a.a.AT()
if(l!=null){e.c3(l,b)
return}p=a.a
k=p.ax?p.DQ():null
if(k!=null){e.c7(k,b)
return}j=a.dJ(0)
p=A.h(j.c)
o=A.h(j.d)
i=A.arl()
A.H(i,d,["width",p+"px"])
A.H(i,d,["height",o+"px"])
A.H(i,d,["viewBox","0 0 "+p+" "+o])
o=self.document.createElementNS("http://www.w3.org/2000/svg","path")
i.append(o)
h=b.r
p=h==null
if(p)h=B.m
n=b.b
if(n!==B.U)if(n!==B.az){n=b.c
n=n!==0&&n!=null}else n=!1
else n=!0
if(n){p=A.cs(h)
p.toString
A.H(o,d,["stroke",p])
p=b.c
A.H(o,d,["stroke-width",A.h(p==null?1:p)])
A.H(o,d,["fill","none"])}else if(!p){p=A.cs(h)
p.toString
A.H(o,d,["fill",p])}else A.H(o,d,["fill","#000000"])
if(a.b===B.fT)A.H(o,d,["fill-rule","evenodd"])
A.H(o,d,["d",A.as2(a.a,0,0)])
if(s.b==null){s=i.style
A.r(s,"position","absolute")
if(!r.oL(0)){A.r(s,"transform",A.hb(r.a))
A.r(s,"transform-origin","0 0 0")}}if(b.x!=null){s=b.b
p=b.r
if(p==null)g="#000000"
else{p=A.cs(p)
p.toString
g=p}f=b.x.b
p=$.c8()
if(p===B.M&&s!==B.U)A.r(i.style,"box-shadow","0px 0px "+A.h(f*2)+"px "+g)
else A.r(i.style,"filter","blur("+A.h(f)+"px)")}e.np(i,B.k,b)}else{s=b.w!=null?a.dJ(0):null
p=e.d
p.gbY().iF(b,s)
s=b.b
if(s==null&&b.c!=null)p.cr(a,B.U)
else p.cr(a,s)
p.gbY().jI()}},
ht(a,b,c,d){var s,r,q,p,o,n=this.d,m=A.aDu(a.dJ(0),c)
if(m!=null){s=(B.d.bk(0.3*(b.gp(b)>>>24&255))&255)<<24|b.gp(b)&16777215
r=A.aDm(s>>>16&255,s>>>8&255,s&255,255)
n.gaO(n).save()
n.gaO(n).globalAlpha=(s>>>24&255)/255
if(d){s=$.c8()
s=s!==B.M}else s=!1
q=m.b
p=m.a
o=q.a
q=q.b
if(s){n.gaO(n).translate(o,q)
n.gaO(n).filter=A.arU(new A.wa(B.mP,p))
n.gaO(n).strokeStyle=""
n.gaO(n).fillStyle=r}else{n.gaO(n).filter="none"
n.gaO(n).strokeStyle=""
n.gaO(n).fillStyle=r
n.gaO(n).shadowBlur=p
n.gaO(n).shadowColor=r
n.gaO(n).shadowOffsetX=o
n.gaO(n).shadowOffsetY=q}n.lK(n.gaO(n),a)
A.WC(n.gaO(n),null)
n.gaO(n).restore()}},
Fv(a){var s,r,q,p=a.a.src
p.toString
s=this.b
if(s!=null){r=s.a53(p)
if(r!=null)return r}q=a.a_V()
s=this.b
if(s!=null)s.Co(p,new A.rp(q,A.aC_(),s.$ti.h("rp<1>")))
return q},
Dy(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this
t.ac.a(a)
s=c.a
r=c.z
if(t.Ed.b(r))q=i.Ss(a,r.a,r.b,c)
else q=i.Fv(a)
p=q.style
o=A.ahh(s)
A.r(p,"mix-blend-mode",o==null?"":o)
p=i.d
if(p.b!=null){o=q.style
o.removeProperty("width")
o.removeProperty("height")
o=p.b
o.toString
n=A.akZ(o,q,b,p.c)
for(p=n.length,o=i.c,m=i.f,l=0;l<n.length;n.length===p||(0,A.K)(n),++l){k=n[l]
o.append(k)
m.push(k)}}else{j=A.hb(A.Tj(p.c,b).a)
p=q.style
A.r(p,"transform-origin","0 0 0")
A.r(p,"transform",j)
p.removeProperty("width")
p.removeProperty("height")
i.c.append(q)
i.f.push(q)}return q},
Ss(a,b,c,d){var s,r,q,p,o="destalpha",n="flood",m="comp",l="SourceGraphic",k="background-color",j="absolute",i="position",h="background-image",g=c.a
switch(g){case 19:case 18:case 25:case 13:case 15:case 12:case 5:case 9:case 7:case 26:case 27:case 28:case 11:case 10:switch(g){case 5:case 9:s=A.r0()
A.H(s.c,"setAttribute",["color-interpolation-filters","sRGB"])
s.Bc(B.Pj,o)
g=A.cs(b)
s.l7(g==null?"":g,"1",n)
s.pJ(n,o,1,0,0,0,6,m)
r=s.aK()
break
case 7:s=A.r0()
g=A.cs(b)
s.l7(g==null?"":g,"1",n)
s.ue(n,l,3,m)
r=s.aK()
break
case 10:s=A.r0()
g=A.cs(b)
s.l7(g==null?"":g,"1",n)
s.ue(l,n,4,m)
r=s.aK()
break
case 11:s=A.r0()
g=A.cs(b)
s.l7(g==null?"":g,"1",n)
s.ue(n,l,5,m)
r=s.aK()
break
case 12:s=A.r0()
g=A.cs(b)
s.l7(g==null?"":g,"1",n)
s.pJ(n,l,0,1,1,0,6,m)
r=s.aK()
break
case 13:g=b.a
s=A.r0()
s.Bc(A.a([0,0,0,0,(g>>>16&255)/255,0,0,0,0,(g>>>8&255)/255,0,0,0,0,(g&255)/255,0,0,0,1,0],t.u),"recolor")
s.pJ("recolor",l,1,0,0,0,6,m)
r=s.aK()
break
case 15:g=A.ara(B.DD)
g.toString
r=A.aqm(b,g,!0)
break
case 26:case 18:case 19:case 25:case 27:case 28:case 24:case 14:case 16:case 17:case 20:case 21:case 22:case 23:g=A.ara(c)
g.toString
r=A.aqm(b,g,!1)
break
case 1:case 2:case 6:case 8:case 4:case 0:case 3:A.X(A.c6("Blend mode not supported in HTML renderer: "+c.i(0)))
r=null
break
default:r=null}g=r.b
this.c.append(g)
this.f.push(g)
q=this.Fv(a)
A.r(q.style,"filter","url(#"+r.a+")")
if(c===B.DE){g=q.style
p=A.cs(b)
p.toString
A.r(g,k,p)}return q
default:q=A.b9(self.document,"div")
p=q.style
switch(g){case 0:case 8:A.r(p,i,j)
break
case 1:case 3:A.r(p,i,j)
g=A.cs(b)
g.toString
A.r(p,k,g)
break
case 2:case 6:A.r(p,i,j)
A.r(p,h,"url('"+A.h(a.a.src)+"')")
break
default:A.r(p,i,j)
A.r(p,h,"url('"+A.h(a.a.src)+"')")
g=A.ahh(c)
A.r(p,"background-blend-mode",g==null?"":g)
g=A.cs(b)
g.toString
A.r(p,k,g)
break}return q}},
hq(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=b.a
if(g===0){s=b.b
r=s!==0||b.c-g!==a.gao(a)||b.d-s!==a.gaW(a)}else r=!0
q=c.a
p=c.c-q
if(p===a.gao(a)&&c.d-c.b===a.gaW(a)&&!r&&d.z==null)h.Dy(a,new A.v(q,c.b),d)
else{if(r){h.bv(0)
h.kj(c,B.cl)}o=c.b
if(r){s=b.c-g
if(s!==a.gao(a))q+=-g*(p/s)
s=b.b
n=b.d-s
m=n!==a.gaW(a)?o+-s*((c.d-o)/n):o}else m=o
l=h.Dy(a,new A.v(q,m),d)
k=c.d-o
if(r){p*=a.gao(a)/(b.c-g)
k*=a.gaW(a)/(b.d-b.b)}g=l.style
j=B.d.J(p,2)+"px"
i=B.d.J(k,2)+"px"
A.r(g,"left","0px")
A.r(g,"top","0px")
A.r(g,"width",j)
A.r(g,"height",i)
g=self.window.HTMLImageElement
g.toString
if(!(l instanceof g))A.r(l.style,"background-size",j+" "+i)
if(r)h.bj(0)}h.vg()},
vg(){var s,r,q=this.d
if(q.y!=null){q.wF()
q.e.eL(0)
s=q.w
if(s==null)s=q.w=A.a([],t.J)
r=q.y
r.toString
s.push(r)
q.e=q.d=q.y=null}this.as=!0
this.e=null},
yr(a,b,c,d,e){var s,r,q,p,o,n=this.d,m=n.gaO(n)
if(d!=null){m.save()
for(n=d.length,s=t.f,r=e===B.U,q=0;q<d.length;d.length===n||(0,A.K)(d),++q){p=d[q]
o=A.cs(p.a)
o.toString
m.shadowColor=o
m.shadowBlur=p.c
o=p.b
m.shadowOffsetX=o.a
m.shadowOffsetY=o.b
if(r)m.strokeText(a,b,c)
else{o=A.a([a,b,c],s)
m.fillText.apply(m,o)}}m.restore()}if(e===B.U)m.strokeText(a,b,c)
else A.awp(m,a,b,c)},
a18(a,b,c,d){return this.yr(a,b,c,null,d)},
fc(a,b){var s,r,q,p,o,n,m,l,k=this
if(a.e&&k.d.y!=null&&!k.as&&!k.ch.d){s=a.x
if(s===$){s!==$&&A.bm()
s=a.x=new A.a9h(a)}s.an(k,b)
return}r=A.art(a,b,null)
q=k.d
p=q.b
q=q.c
if(p!=null){o=A.akZ(p,r,b,q)
for(q=o.length,p=k.c,n=k.f,m=0;m<o.length;o.length===q||(0,A.K)(o),++m){l=o[m]
p.append(l)
n.push(l)}}else{A.alL(r,A.Tj(q,b).a)
k.c.append(r)}k.f.push(r)
q=r.style
A.r(q,"left","0px")
A.r(q,"top","0px")
k.vg()},
fM(a,b,c){var s,r,q,p
if(a===B.Wg){s=$.aiB()
s.b=B.U}else{s=$.aiB()
s.b=B.az}r=c.r
s.r=r==null?B.m:r
s.x=c.x
q=$.c4().w
if(q==null)q=A.b_()
p=c.c
if(p==null)p=1/q
s=$.aiB()
s.c=p
r=this.d
r.gbY().iF(s,null)
r.fM(a,b,p/2)
r.gbY().jI()},
mc(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.d.mc()
s=h.b
if(s!=null)s.a02()
if(h.at){s=$.c8()
s=s===B.M}else s=!1
if(s){s=h.c
r=t.e
q=t.sM
q=A.hj(new A.m2(s.children,q),q.h("o.E"),r)
p=A.as(q,!0,A.m(q).h("o.E"))
for(q=p.length,o=h.f,n=t.f,m=0;m<q;++m){l=p[m]
k=self.document
j=A.a(["div"],n)
i=r.a(k.createElement.apply(k,j))
k=i.style
k.setProperty("transform","translate3d(0,0,0)","")
i.append(l)
s.append(i)
o.push(i)}}s=h.c.firstChild
if(s!=null){r=self.window.HTMLElement
r.toString
if(s instanceof r)if(s.tagName.toLowerCase()==="canvas")A.r(s.style,"z-index","-1")}}}
A.c3.prototype={}
A.a8C.prototype={
bv(a){var s=this.a
s.a.B_()
s.c.push(B.nk);++s.r},
er(a,b){var s=this.a
t.k.a(b)
s.d.c=!0
s.c.push(B.nk)
s.a.B_();++s.r},
bj(a){var s,r,q=this.a
if(!q.f&&q.r>1){s=q.a
s.y=s.r.pop()
r=s.w.pop()
if(r!=null){s.Q=r.a
s.as=r.b
s.at=r.c
s.ax=r.d
s.z=!0}else if(s.z)s.z=!1}s=q.c
if(s.length!==0&&B.b.gM(s) instanceof A.wP)s.pop()
else s.push(B.EL);--q.r},
ag(a,b,c){var s=this.a,r=s.a
if(b!==0||c!==0)r.x=!1
r.y.ag(0,b,c)
s.c.push(new A.J2(b,c))},
cN(a,b,c){var s=c==null?b:c,r=this.a,q=r.a
if(b!==1||s!==1)q.x=!1
q.y.l6(0,b,s,1)
r.c.push(new A.J0(b,s))
return null},
fq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h.a
if(b!==0)g.x=!1
g=g.y
s=Math.cos(b)
r=Math.sin(b)
g=g.a
q=g[0]
p=g[4]
o=g[1]
n=g[5]
m=g[2]
l=g[6]
k=g[3]
j=g[7]
i=-r
g[0]=q*s+p*r
g[1]=o*s+n*r
g[2]=m*s+l*r
g[3]=k*s+j*r
g[4]=q*i+p*s
g[5]=o*i+n*s
g[6]=m*i+l*s
g[7]=k*i+j*s
h.c.push(new A.J_(b))},
a8(a,b){var s=A.Ti(b),r=this.a,q=r.a
q.y.cY(0,new A.bI(s))
q.x=q.y.oL(0)
r.c.push(new A.J1(s))},
o3(a,b,c){var s=this.a,r=new A.IN(a,b)
switch(b.a){case 1:s.a.kj(a,r)
break
case 0:break}s.d.c=!0
s.c.push(r)},
HC(a,b){return this.o3(a,B.cl,b)},
j6(a){return this.o3(a,B.cl,!0)},
r8(a,b){var s=this.a,r=new A.IM(a)
s.a.kj(new A.D(a.a,a.b,a.c,a.d),r)
s.d.c=!0
s.c.push(r)},
ki(a){return this.r8(a,!0)},
r7(a,b,c){var s,r=this.a
t.n.a(b)
s=new A.IL(b)
r.a.kj(b.dJ(0),s)
r.d.c=!0
r.c.push(s)},
f9(a,b){return this.r7(a,b,!0)},
hr(a,b,c){var s,r,q,p,o,n,m=this.a
t.k.a(c)
s=Math.max(A.th(c),1)
c.b=!0
r=new A.IR(a,b,c.a)
q=a.a
p=b.a
o=a.b
n=b.b
m.a.jO(Math.min(q,p)-s,Math.min(o,n)-s,Math.max(q,p)+s,Math.max(o,n)+s,r)
m.e=m.d.c=!0
m.c.push(r)},
hs(a){var s,r,q=this.a
t.k.a(a)
a.b=q.e=q.d.c=!0
s=new A.IS(a.a)
r=q.a
r.l5(r.a,s)
q.c.push(s)},
c3(a,b){this.a.c3(a,t.k.a(b))},
c7(a,b){this.a.c7(a,t.k.a(b))},
fb(a,b,c){this.a.fb(a,b,t.k.a(c))},
dO(a,b,c){var s,r,q,p,o,n=this.a
t.k.a(c)
n.e=n.d.c=!0
s=A.th(c)
c.b=!0
r=new A.IO(a,b,c.a)
q=b+s
p=a.