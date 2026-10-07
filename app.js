const WA='918291054645';
const insta='https://www.instagram.com/swagat.bakers/';

const categories=[
  {name:'Khari',img:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1600&q=90',desc:'Light, flaky and made for tea-time cravings.',items:['Maska Khari','Wheat Khari','Jeera Khari','Methi Khari','Palak Khari']},
  {name:'Toast',img:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=90',desc:'Classic, crunchy and masala toast favourites.',items:['Regular Toast','Wheat Toast','Rava Toast','Baby Toast','Milk Toast','Multigrain Toast','Cashew Toast','Black Pepper Toast','Red Chilli Toast','Peri Peri Garlic Toast']},
  {name:'Butter',img:'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1600&q=90',desc:'Crunchy bakery bites with buttery, savoury flavours.',items:['Crispy Butter','Jeera Butter','Maska Butter','Sada Butter','Pizza Triangle','Cheese Sticks','Lavash Bread Sticks']},
  {name:'Sandwich Bread',img:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=90',desc:'Fresh sandwich loaves in small and large sizes.',items:['SD Normal Bread — Small','SD Wheat Bread — Small','SD Multigrain Bread — Small','SD Normal Bread — Large','SD Wheat Bread — Large','SD Multigrain Bread — Large']},
  {name:'Loaf',img:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=90',desc:'Everyday loaves from plain to multigrain and garlic.',items:['Plain Loaf','Garlic Loaf','Wheat Loaf','Wheat Garlic Loaf','Multigrain Loaf']},
  {name:'Pizza Bases',img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1600&q=90',desc:'Ready-to-top pizza bases for quick meals and parties.',items:['Pizza Base (6”)','Wheat Pizza Base (6”)','Pizza Base (8”)','Italian Base (8”)','Square Pizza Base (8”)','Mini Pizza Base','Coin Pizza']},
  {name:'Bread Specialties',img:'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1600&q=90',desc:'Kulcha and focaccia-style bakery favourites.',items:['Kulcha','Jain Kulcha','Garlic Kulcha','Chole Kulcha (6”)','Focaccia Bread']},
  {name:'Pav',img:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=90',desc:'Soft pav for everyday meals, snacks and gatherings.',items:['Regular Pav','Wheat Pav','Multigrain Pav — available on order']},
  {name:'Snacks',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=90',desc:'Savoury favourites for quick bites and evening cravings.',items:['Veg Puff','Burger','Sandwich','Paneer Roll','Manchurian Roll','Makhani Roll','Korean Bun','Patties']},
  {name:'Desserts',img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1600&q=90',desc:'Chocolatey, soft and indulgent sweet treats.',items:['Vanilla Muffins','Chocolate Muffins','Red Velvet Muffins','Chocolate Brownie','Brownie Cookies','Lava Cake','Chocolate Donut']},
  {name:'Cakes',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=90',desc:'Celebration flavours made for birthdays and special moments.',items:['Belgian Chocolate Truffle','Red Velvet Cream Cheese','Royal Rasmalai Fusion','Fresh Exotic Fruit','Butterscotch Crunch','Black Forest Royale','Pineapple Fresh Cream']}
];

const catWrap=document.querySelector('#categoryCards');
const menuItems=document.querySelector('#menuItems');
const categoryImage=document.querySelector('#categoryImage');
const categoryTitle=document.querySelector('#categoryTitle');
const categoryHeroTitle=document.querySelector('#categoryHeroTitle');
const categoryHeroText=document.querySelector('#categoryHeroText');
const itemCount=document.querySelector('#itemCount');

function askLink(item){return `https://wa.me/${WA}?text=${encodeURIComponent("Hi Swagat Baker's, I want to inquire about "+item+'.')}`}

function renderCategoryCards(active=0){
  catWrap.innerHTML=categories.map((c,i)=>`<button class="category-card ${i===active?'active':''}" data-index="${i}" aria-label="Open ${c.name} menu"><img src="${c.img}" alt=""><span class="cat-copy"><b>${c.name}</b><small>${c.items.length} choices</small></span></button>`).join('');
  catWrap.querySelectorAll('.category-card').forEach(btn=>btn.addEventListener('click',()=>selectCategory(Number(btn.dataset.index),true)));
}
function selectCategory(i,scroll=false){
  const c=categories[i];
  renderCategoryCards(i);
  categoryImage.style.opacity='0';
  setTimeout(()=>{categoryImage.src=c.img;categoryImage.alt=c.name+' at Swagat Baker\'s';categoryImage.style.opacity='1'},160);
  categoryTitle.textContent=c.name;categoryHeroTitle.textContent=c.name;categoryHeroText.textContent=c.desc;itemCount.textContent=`${c.items.length} ${c.items.length===1?'item':'items'}`;
  menuItems.innerHTML=c.items.map(item=>`<div class="menu-item"><span>${item}</span><a href="${askLink(item)}" target="_blank" rel="noopener" aria-label="Inquire about ${item}">→</a></div>`).join('');
  if(scroll) document.querySelector('.menu-explorer').scrollIntoView({behavior:'smooth',block:'center'});
}
renderCategoryCards(0);selectCategory(0);

const cakes=['Belgian Chocolate Truffle','Red Velvet Cream Cheese','Royal Rasmalai Fusion','Fresh Exotic Fruit','Butterscotch Crunch','Black Forest Royale','Pineapple Fresh Cream'];
const cakeImgs=["https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=1200&q=90"];
document.querySelector('#cakeGallery').innerHTML=cakes.slice(0,8).map((name,i)=>`<a class="cake-card" href="${askLink(name)}" target="_blank" rel="noopener"><img src="${cakeImgs[i%cakeImgs.length]}" alt="${name}"><div><b>${name}</b><span>Customise on WhatsApp →</span></div></a>`).join('');

const feedback=[
 {title:'Celebration Cakes',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=88',video:'',url:insta},
 {title:'Freshly Baked Desserts',img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=88',video:'',url:insta},
 {title:'Savory Favourites',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=88',video:'',url:insta},
 {title:'Chocolate Lovers',img:'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=88',video:'',url:insta},
 {title:'Custom Cake Designs',img:'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=88',video:'',url:insta},
 {title:'Pizza & Party Bakes',img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=88',video:'',url:insta},
 {title:'Fresh Bread Day',img:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=88',video:'',url:insta},
 {title:'Tea-Time Favourites',img:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=88',video:'',url:insta}
];
const track=document.querySelector('#feedbackTrack');
const reels=[...feedback,...feedback];
track.innerHTML=reels.map(r=>`<a class="reel-card" href="${r.url}" target="_blank" rel="noopener">${r.video?`<video muted loop playsinline preload="metadata" poster="${r.img}" src="${r.video}"></video>`:`<img src="${r.img}" alt="${r.title}">`}<span class="play">▶</span><span class="reel-caption"><b>${r.title}</b><small>Watch on Instagram ↗</small></span></a>`).join('');
document.querySelectorAll('.reel-card video').forEach(v=>{const card=v.closest('.reel-card');card.addEventListener('mouseenter',()=>v.play().catch(()=>{}));card.addEventListener('mouseleave',()=>{v.pause();v.currentTime=0})});

const toggle=document.querySelector('#menuToggle'),nav=document.querySelector('#mainNav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);toggle.textContent=open?'✕':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
