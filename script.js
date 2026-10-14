/* ===== ISI DI SINI ===== */
const CONFIG={
 name:"Zen", from:"Reva", pin:"100626", lang:"id", /* lang bawaan: "id" atau "en" */
 /* foto: isi src dengan path gambar, mis. "foto/1.jpg". Kosong = bisa diisi lewat tap */
 photos:[{src:"/foto/Roblox.jpg",cap:{id:"Bermain Roblox Bersama",en:"Playing Roblox Together"}},{src:"/foto/MLBB.jpg",cap:{id:"Bermain Ml bersama",en:"Playing Ml together"}},{src:"/foto/Roblox 1.jpg",cap:{id:"Sehari di Roblox",en:"A day at the Roblox"}}],
 /* lagu: isi src dengan file mp3, mis. "lagu/1.mp3" */
 songs:[{t:"Glue Songg",a:"beabadoobee",src:"/lagu/gluee songg.mp3"},{t:"Love",a:"Keyshia Cole",src:"/lagu/love.mp3"},{t:"Harvey",a:"Her's",src:"/lagu/harvey.mp3"}],
 content:{
  id:{date:"10 Juni",hint:"tanggal spesial kita",
   bouquet:["Kamu bikin hari biasa terasa seperti hari libur.","Tawamu adalah suara favoritku.","Terima kasih sudah baik ke semua orang.","Semoga setiap harapanmu terkabul.","Aku bangga dengan dirimu yang terus bertumbuh."],
   greet:"Untuk Seseorang yang Layak Dirayakan,",
   letter:["Selamat ulang tahun untukmu, cowok yang pantas mendapat sedikit lebih banyak kebahagiaan daripada yang kadang diberikan dunia ini. Semoga usia barumu membawamu lebih dekat pada hal-hal yang selama ini kamu harapkan, dan memberimu ribuan alasan untuk tersenyum, bahkan di hari-hari yang paling biasa.", "Semoga kamu selalu menemukan sesuatu yang indah di setiap bab hidupmu, bahkan di bab yang tidak berjalan sesuai rencana. Jangan pernah lupa bahwa kamu tidak harus sempurna untuk menjadi seseorang yang layak dihargai. Menjadi dirimu sendiri saja sudah sesuatu yang luar biasa, dan aku benar-benar bahagia bisa mengenalmu."],
   ps:"P.S. Kalau aku boleh mengajukan satu doa ulang tahun untukmu, semoga hidup memberimu kehangatan yang sama seperti yang tanpa sadar kamu bawa untuk orang-orang di sekitarmu. Semoga tahun ini lembut pada hatimu, dan semoga kamu selalu punya sesuatu untuk dinantikan.",
   sign:"— Aku selalu ada untukmu ;3",
   timeline:[{k:"Awal mula",h:"Pertama kali bertemu",p:"Hari ketika semuanya terasa sedikit lebih terang."},{k:"Momen kecil",h:"Obrolan pertama kita",p:"Beberapa kata yang berubah jadi berjam-jam."},{k:"Tetap favoritku",h:"Kebiasaan kecil kita",p:"Balasan yang telat, jalan kaki panjang, pesanan kafe yang itu-itu saja."}],
   jar:["Kebaikanmu tidak pernah berisik, tapi aku selalu menyadarinya.","Kamu mendengarkan seolah itu penting, karena bagimu memang begitu.","Kamu membuat hari yang berat jadi lebih ringan.","Pesanmu adalah bagian terbaik dari ponselku.","Kamu berani dengan cara yang tidak kamu sadari.","Berada di dekatmu rasanya seperti pulang."],
   close:"Semoga hidupmu selalu dipenuhi bunga",
   closeP:"Selamat ulang tahun. Semoga hari-harimu penuh cinta, tawa, dan semua hal yang membuatmu merasa pulang.",
   closeS:"dengan cinta yang tak pernah habis"},
  en:{date:"June 10",hint:"our special date",
   bouquet:["You make ordinary days feel like holidays.","Your laugh is my favourite sound.","Thank you for being kind to everyone.","May every wish you make come true.","I'm proud of who you are becoming."],
   greet:"To Someone Worth Celebrating,",
   letter:["Happy birthday to you, the boy who deserves a little more happiness than this world sometimes gives. I hope this new age brings you closer to the things you've been wishing for, and gives you countless reasons to smile, even on the most ordinary days.", "I hope you'll always find something beautiful in every chapter of your life, even the ones that don't go as planned. Never forget that you don't have to be perfect to be someone worth appreciating. Just being yourself is already something wonderful, and I'm genuinely happy that I got the chance to know you."],
   ps:"P.S. If I could make one birthday wish for you, it would be for life to give you the same warmth you unknowingly bring to the people around you. May this year be gentle with your heart, and may you always have something to look forward to.",
   sign:"— I'm always here for you ;3",
   timeline:[{k:"The very beginning",h:"First time we met",p:"The day everything felt a little brighter."},{k:"A small moment",h:"Our first conversation",p:"A few words that turned into hours."},{k:"Still my favourite",h:"Our little rituals",p:"Late replies, long walks, the same café order."}],
   jar:["Your kindness is never loud, but I always notice it.","You listen like it matters, because to you it does.","You make hard days easier to carry.","Your messages are the best part of my phone.","You're brave in ways you don't see.","Being around you feels like home."],
   close:"May your life always be filled with flowers",
   closeP:"Happy birthday. May your days be full of love, laughter, and everything that makes you feel at home.",
   closeS:"with love that never runs out"}}
};
/* ======================== */
const C=CONFIG,$=s=>document.querySelector(s),E=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h)e.innerHTML=h;return e};
const flower=(a='#8ec1ff',b='#e6f2ff')=>`<svg viewBox="-50 -50 100 100">${[...Array(8)].map((_,i)=>`<ellipse cy="-22" rx="9" ry="19" fill="${a}" opacity=".88" transform="rotate(${i*45})"/>`).join('')}<circle r="9" fill="${b}"/></svg>`;
let lang;try{lang=localStorage.getItem("lang")}catch(e){}lang=C.content[lang]?lang:C.lang;let X=C.content[lang];
document.querySelectorAll('[data-k]').forEach(e=>e.textContent=C[e.dataset.k]);
$('#ldf').innerHTML=flower();$('#pf').innerHTML=flower();

/* kelopak */
function petal(){if(document.querySelectorAll('.petal').length>16)return;const p=E('i','petal');p.style.cssText=`left:${Math.random()*100}vw;--dx:${Math.random()*120-60}px;--r:${Math.random()*540}deg;animation-duration:${8+Math.random()*7}s;--s:${.6+Math.random()*.7}`;$('#fx').append(p);setTimeout(()=>p.remove(),15500)}
setInterval(()=>!document.hidden&&petal(),1100);
function burst(x,y){for(let i=0;i<30;i++){const p=E('i','petal bp'),a=Math.random()*6.28,d=90+Math.random()*190;p.style.cssText=`--x:${x}px;--y:${y}px;--dx:${Math.cos(a)*d}px;--dy:${Math.sin(a)*d+60}px;--r:${Math.random()*720}deg`;$('#fx').append(p);setTimeout(()=>p.remove(),1500)}}

/* alur layar */
setTimeout(()=>{$('#ld').classList.add('off');const p=$('#pin');p.classList.remove('off');p.classList.add('show')},1800);

/* PIN */
let buf='',busy=false;const n=C.pin.length;
$('#dots').innerHTML=[...Array(n)].map((_,i)=>`<i class="dot" style="--i:${i};--n:${n}"></i>`).join('');
const keys=['1','2','3','4','5','6','7','8','9','x','0','ok'],lab={x:'✕',ok:'↩'};
keys.forEach((k,i)=>{const b=E('button','k',lab[k]||k);b.style.setProperty('--i',i);b.onpointerdown=e=>{const r=E('span','rip'),q=b.getBoundingClientRect();r.style.left=e.clientX-q.left+'px';r.style.top=e.clientY-q.top+'px';b.append(r);setTimeout(()=>r.remove(),600);press(k)};b.onclick=e=>{if(!e.detail)press(k)};$('#pad').append(b)});
addEventListener('keydown',e=>{if($('#pin').classList.contains('hide')||$('#pin').classList.contains('off'))return;if(/^\d$/.test(e.key))press(e.key);else if(e.key==='Backspace')press('x');else if(e.key==='Enter')press('ok')});
function draw(){document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('on',i<buf.length))}
function press(k){if(busy)return;if(k==='x')buf=buf.slice(0,-1);else if(k==='ok'){if(buf.length)return submit()}else if(buf.length<n){buf+=k;if(buf.length===n){draw();return setTimeout(submit,260)}}draw()}
function submit(){busy=true;const c=$('#pc');
 if(buf===C.pin){c.classList.add('ok');const r=c.getBoundingClientRect();setTimeout(()=>burst(r.left+r.width/2,r.top+r.height/2),n*90+450);
  setTimeout(()=>{$('#pin').classList.add('off');$('#gift').classList.remove('off')},1800)}
 else{c.classList.add('bad');navigator.vibrate&&navigator.vibrate(60);setTimeout(()=>{c.classList.add('rst');buf='';draw()},450);setTimeout(()=>{c.classList.remove('bad','rst');busy=false},900)}}

/* kado */
$('#gb').onclick=()=>{const g=$('#gift');if(g.classList.contains('go'))return;g.classList.add('go');
 const r=$('#gb').getBoundingClientRect();setTimeout(()=>{burst(r.left+75,r.top+40);bloom(r.left+75,r.top+30)},450);
 setTimeout(()=>{$('#main').classList.remove('hide');$('#fab').classList.remove('hide');document.body.classList.remove('lock');g.classList.add('off')},2100)};

/* buket */
const cols=[['#8ec1ff','#e6f2ff'],['#ffd36e','#8a4b1f'],['#b9a8ff','#f1edff'],['#fff','#ffcf6a'],['#6fd0e8','#e6fbff']];
$('#bq').innerHTML=X.bouquet.map((m,i)=>`<button class="fl" data-i="${i}" style="--h:${130+(i%3)*34}px;--a:${(i-(X.bouquet.length-1)/2)*7}deg" aria-label="Flower ${i+1}">${flower(...cols[i%5])}</button>`).join('');
$('#bq').onclick=e=>{const f=e.target.closest('.fl');if(!f)return;f.classList.add('on');const m=$('#bm');m.style.opacity=0;setTimeout(()=>{m.textContent=X.bouquet[f.dataset.i];m.style.opacity=1},180)};
$('#bm').style.transition='opacity .25s';

/* surat */


/* foto */
let tgt;
$('#ph').innerHTML=C.photos.map((p,i)=>`<figure class="pol" style="--r:${[-3,2.5,-1.5,3][i%4]}deg"><div class="pic ${p.src?'':'empty'}" data-i="${i}">${p.src?`<img src="${p.src}" alt="" loading="lazy">`:'<span>+ add photo</span>'}</div><span class="cap"></span></figure>`).join('');
$('#ph').onclick=e=>{const p=e.target.closest('.pic');if(!p)return;if(p.classList.contains('empty')){tgt=p;$('#fi').click()}else{$('#lbi').src=p.querySelector('img').src;$('#lb').classList.remove('hide')}};
$('#fi').onchange=e=>{const f=e.target.files[0];if(!f||!tgt)return;tgt.classList.remove('empty');tgt.innerHTML=`<img src="${URL.createObjectURL(f)}" alt="">`;e.target.value=''};
$('#lb').onclick=()=>$('#lb').classList.add('hide');

/* timeline */
$('#tl').innerHTML=X.timeline.map(()=>'<div class="ti"><small></small><h3></h3><p></p></div>').join('');

/* musik */
const au=new Audio(),pl=$('#pl');let si=0;
const fm=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');
$('#sl').innerHTML=C.songs.map((s,i)=>`<button data-i="${i}"><span>${s.t}</span><small>${s.a}</small></button>`).join('');
function pick(i,go){si=(i+C.songs.length)%C.songs.length;const s=C.songs[si];$('#st').textContent=s.t;$('#sa').textContent=s.a;au.src=s.src||'';document.querySelectorAll('#sl button').forEach((b,j)=>b.classList.toggle('on',j===si));$('#bi').style.width='0';$('#t0').textContent='0:00';$('#t1').textContent='0:00';if(go)play()}
function play(){if(!C.songs[si].src)return toast(T[lang].toast);if(au.paused)au.play();else au.pause()}
function toast(t){const e=E('div','toast',t);document.body.append(e);setTimeout(()=>e.style.opacity=0,1800);setTimeout(()=>e.remove(),2300)}
au.onplay=au.onpause=()=>{const p=!au.paused;pl.classList.toggle('play',p);$('#fab').classList.toggle('play',p);$('#pp').textContent=p?'❚❚':'▶'};
au.ontimeupdate=()=>{$('#bi').style.width=(au.currentTime/au.duration*100||0)+'%';$('#t0').textContent=fm(au.currentTime)};
au.onloadedmetadata=()=>$('#t1').textContent=fm(au.duration);
au.onended=()=>pick(si+1,true);
$('#pp').onclick=$('#fab').onclick=play;$('#pv').onclick=()=>pick(si-1,true);$('#nx').onclick=()=>pick(si+1,true);
$('#sl').onclick=e=>{const b=e.target.closest('button');if(b)pick(+b.dataset.i,true)};
$('#bar').onclick=e=>{if(au.duration)au.currentTime=au.duration*(e.offsetX/e.currentTarget.offsetWidth)};
pick(0);

/* toples */
$('#jar').innerHTML=[...Array(9)].map((_,i)=>`<i style="left:${8+(i%3)*30}px;bottom:${6+Math.floor(i/3)*28}px;transform:rotate(${(i*47)%50-25}deg)"></i>`).join('');
let ji=0;$('#shake').onclick=()=>{const j=$('#jar');j.classList.remove('sh');void j.offsetWidth;j.classList.add('sh');setTimeout(()=>{$('#nt').innerHTML=`<div class="note"><small>#${ji%X.jar.length+1}</small>${X.jar[ji%X.jar.length]}</div>`;ji++},520)};

/* penutup */

$('#pc2').onclick=()=>$('#pop').classList.add('hide');
let shown=false;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');if(e.target.id==='end'&&!shown){shown=true;setTimeout(()=>$('#pop').classList.remove('hide'),900)}}),{threshold:.35});
document.querySelectorAll('.pol,.ti,#end').forEach(e=>io.observe(e));
const ID={"Preparing something special for you…": "Menyiapkan sesuatu yang spesial untukmu…", "For You, My Love": "Untukmu, Sayang", "Enter our secret code": "Masukkan kode rahasia kita", "Hint:": "Petunjuk:", "Wrong code, try again.": "Kodenya salah, coba lagi ya.", "Tap the gift box to open it": "Ketuk kotak kado untuk membukanya", "Your special day": "Hari spesialmu", "Happy": "Selamat", "Birthday": "Ulang Tahun", "Scroll": "Gulir", "My first gift": "Hadiah pertamaku", "A Digital Bouquet": "Buket Digital", "Each flower holds a little message for you": "Setiap bunga menyimpan pesan kecil untukmu", "Touch each flower to read its message.": "Sentuh tiap bunga untuk membaca pesannya.", "From my heart": "Dari hatiku", "A Letter For You": "Sepucuk Surat Untukmu", "My dearest": "Untuk", "With all my love,": "Dengan segenap cinta,", "A collection of memories": "Kumpulan kenangan", "Our Photo Memories": "Foto Kenangan Kita", "Tap an empty frame to add a photo": "Ketuk bingkai kosong untuk menambah foto", "Our journey": "Perjalanan kita", "Memories We've Written Together": "Kenangan yang Kita Tulis Bersama", "Our songs": "Lagu-lagu kita", "Special Playlist": "Playlist Spesial", "From my heart to yours": "Dari hatiku untukmu", "Reasons I'm Grateful to Know You": "Alasan Aku Bersyukur Mengenalmu", "Shake the jar": "Kocok toplesnya", "With all my heart": "Dengan sepenuh hati", "Happy Birthday!": "Selamat Ulang Tahun!", "The most special": "Yang paling istimewa,", "Close ✕": "Tutup ✕"}
,T={id:{add:"+ tambah foto",toast:"Tambahkan path mp3 di CONFIG.songs",dt:" · Hari paling istimewa"},en:{add:"+ add photo",toast:"Add an mp3 path in CONFIG.songs",dt:" · The most special day"}},tn=[];
{const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){const t=n.nodeValue.trim();if(ID[t])tn.push([n,t,n.nodeValue.replace(t,'@@')])}}
function applyLang(l){lang=l;X=C.content[l];try{localStorage.setItem('lang',l)}catch(e){}
 document.documentElement.lang=l;document.title=(l==='id'?'Selamat Ulang Tahun, ':'Happy Birthday, ')+C.name;
 tn.forEach(([n,t,f])=>n.nodeValue=f.replace('@@',l==='id'?ID[t]:t));
 $('#dt').textContent=X.date+T[l].dt;$('#hint').textContent=X.hint;
 $('#lt').innerHTML=X.letter.map(p=>`<p>${p}</p>`).join('');$('#ps').textContent=X.ps;$('#gr').textContent=X.greet;$('#sg').textContent=X.sign;
 document.querySelectorAll('.ti').forEach((e,i)=>{const t=X.timeline[i];e.children[0].textContent=t.k;e.children[1].textContent=t.h;e.children[2].textContent=t.p});
 document.querySelectorAll('.cap').forEach((e,i)=>e.textContent=C.photos[i].cap[l]);
 document.querySelectorAll('.pic.empty span').forEach(e=>e.textContent=T[l].add);
 $('#cl').textContent=X.close;$('#cp').textContent=X.closeP;$('#cs').textContent="— "+X.closeS+" —";
 document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===l))}
$('.lang').onclick=e=>{const b=e.target.closest('button');if(b)applyLang(b.dataset.l)};
applyLang(lang);
function bloom(x,y){for(let i=0;i<16;i++){const s=34+Math.random()*34,a=(Math.random()-.5)*2.4,d=110+Math.random()*innerHeight*.3,m=innerWidth/2-s/2-8,dx=Math.max(-m,Math.min(m,Math.sin(a)*d)),f=E('div','bf',flower(...cols[i%5]));f.style.cssText=`--x:${x}px;--y:${y}px;--s:${s}px;--dx:${dx}px;--dy:${-Math.cos(a)*d}px;--r:${Math.random()*80-40}deg;--dl:${i*55}ms;--sp:${14+Math.random()*10}s`;$('#fx').append(f);setTimeout(()=>f.remove(),5200)}}
