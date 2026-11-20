const timelineData = [
  {year:"1905",title:"El nacimiento de Boca Juniors",text:"El 3 de abril de 1905, un grupo de jóvenes del barrio de La Boca fundó el Club Atlético Boca Juniors. Los primeros pasos del club estuvieron profundamente ligados a la vida del barrio."},
  {year:"1913",title:"El salto a Primera División",text:"Boca consiguió el ascenso a la máxima categoría del fútbol argentino. Desde entonces comenzó a construir su trayectoria entre los protagonistas del fútbol nacional."},
  {year:"1925",title:"La gira europea",text:"Boca realizó una histórica gira por Europa. El equipo obtuvo una gran repercusión y contribuyó a proyectar el nombre del club más allá de Argentina."},
  {year:"1940",title:"La inauguración de La Bombonera",text:"El estadio de Brandsen y Del Valle Iberlucea fue inaugurado el 25 de mayo de 1940. Con el tiempo se convirtió en uno de los grandes símbolos del club."},
  {year:"1977",title:"La primera Copa Libertadores",text:"Boca conquistó por primera vez la Copa Libertadores. La final ante Cruzeiro se definió en una serie de desempate disputada en Montevideo."},
  {year:"2000",title:"Una temporada inolvidable",text:"Boca ganó la Copa Libertadores y la Copa Intercontinental. La victoria ante Real Madrid en Japón quedó entre los partidos más recordados de su historia."},
  {year:"2007",title:"Otra Libertadores",text:"El equipo obtuvo su sexta Copa Libertadores tras una destacada campaña. La final fue ante Grêmio y Boca ganó ambos encuentros."}
];
const idols = [
  {id:"riquelme",name:"Juan Román Riquelme",role:"MEDIOCAMPISTA",years:"1996–2002 · 2007 · 2008–2014",text:"Referente por su visión de juego, técnica y personalidad. Fue protagonista de grandes conquistas internacionales.",initials:"JR"},
  {id:"palermo",name:"Martín Palermo",role:"DELANTERO",years:"1997–2000 · 2004–2011",text:"Goleador histórico del club y protagonista de noches decisivas. Su capacidad para aparecer en momentos importantes lo volvió ídolo.",initials:"MP"},
  {id:"maradona",name:"Diego Maradona",role:"DELANTERO / ENGANCHE",years:"1981–1982 · 1995–1997",text:"Una de las figuras más influyentes de la historia del fútbol. Su vínculo con Boca quedó marcado por su talento y su identificación con el club.",initials:"DM"},
  {id:"tevez",name:"Carlos Tévez",role:"DELANTERO",years:"2001–2004 · 2015–2016 · 2018–2021",text:"Surgido de las inferiores, regresó en distintas etapas y fue protagonista de títulos locales e internacionales.",initials:"CT"},
  {id:"guillermo",name:"Guillermo Barros Schelotto",role:"DELANTERO",years:"1997–2007",text:"Figura de una etapa muy exitosa. Se destacó por su habilidad, carácter competitivo y participación en clásicos y finales.",initials:"GB"}
];
const trophies = [
  {name:"Copa Libertadores",category:"internacional",detail:"Conquistas continentales",icon:"✦"},
  {name:"Copa Intercontinental",category:"internacional",detail:"Finales intercontinentales",icon:"★"},
  {name:"Copa Sudamericana",category:"internacional",detail:"Competición continental",icon:"✧"},
  {name:"Recopa Sudamericana",category:"internacional",detail:"Duelo entre campeones continentales",icon:"✦"},
  {name:"Campeonato de Primera División",category:"nacional",detail:"Torneos de liga del fútbol argentino",icon:"♛"},
  {name:"Copa Argentina",category:"nacional",detail:"Competición nacional de eliminación",icon:"★"},
  {name:"Copa de la Liga",category:"nacional",detail:"Competición oficial nacional",icon:"✧"},
  {name:"Supercopa Argentina",category:"otros",detail:"Final entre campeones nacionales",icon:"✦"},
  {name:"Copa Master de Supercopa",category:"otros",detail:"Competición internacional histórica",icon:"★"}
];
const demoPlayers = [
  {name:"Jugador de ejemplo 01",position:"Arquero",number:"1"},{name:"Jugador de ejemplo 02",position:"Defensor",number:"2"},
  {name:"Jugador de ejemplo 03",position:"Defensor",number:"3"},{name:"Jugador de ejemplo 04",position:"Defensor",number:"4"},
  {name:"Jugador de ejemplo 05",position:"Mediocampista",number:"5"},{name:"Jugador de ejemplo 06",position:"Mediocampista",number:"6"},
  {name:"Jugador de ejemplo 07",position:"Mediocampista",number:"7"},{name:"Jugador de ejemplo 08",position:"Delantero",number:"9"}
];
const questions = [
  {q:"¿En qué año se fundó el Club Atlético Boca Juniors?",a:["1905","1901","1910","1913"],correct:0,why:"Boca Juniors fue fundado el 3 de abril de 1905."},
  {q:"¿En qué barrio de Buenos Aires nació el club?",a:["Palermo","La Boca","Belgrano","San Telmo"],correct:1,why:"El club nació en el barrio porteño de La Boca."},
  {q:"¿Cómo se conoce popularmente al estadio de Boca?",a:["El Cilindro","El Monumental","La Bombonera","El Palacio"],correct:2,why:"El estadio Alberto J. Armando es conocido como La Bombonera."},
  {q:"¿Qué día se inauguró La Bombonera?",a:["3 de abril de 1905","25 de mayo de 1940","9 de julio de 1950","12 de octubre de 1935"],correct:1,why:"La Bombonera fue inaugurada el 25 de mayo de 1940."},
  {q:"¿Qué apodo identifica a los hinchas de Boca?",a:["Millonarios","Xeneizes","Cuervos","Canallas"],correct:1,why:"A los hinchas de Boca se los conoce como Xeneizes."},
  {q:"¿Contra qué equipo ganó Boca la final de la Intercontinental 2000?",a:["AC Milan","Real Madrid","Barcelona","Manchester United"],correct:1,why:"Boca venció 2-1 al Real Madrid en Tokio en diciembre de 2000."},
  {q:"¿Qué jugador es conocido como 'El Titán'?",a:["Carlos Tévez","Juan Román Riquelme","Martín Palermo","Guillermo Barros Schelotto"],correct:2,why:"Martín Palermo recibió el apodo de El Titán."},
  {q:"¿Cuál de estos jugadores se destacó por su visión y conducción del juego?",a:["Juan Román Riquelme","Roberto Abbondanzieri","Hugo Ibarra","Rolando Schiavi"],correct:0,why:"Riquelme fue reconocido por su pausa, técnica y visión de juego."},
  {q:"¿En qué año ganó Boca su primera Copa Libertadores?",a:["1969","1977","1981","2000"],correct:1,why:"Boca obtuvo su primera Copa Libertadores en 1977."},
  {q:"¿Qué colores identifican tradicionalmente a Boca Juniors?",a:["Rojo y blanco","Verde y negro","Azul y oro","Celeste y blanco"],correct:2,why:"Los colores tradicionales del club son azul y amarillo (oro)."}
];

const $ = (s,root=document) => root.querySelector(s);
const $$ = (s,root=document) => [...root.querySelectorAll(s)];
let currentQuestion=0,score=0,answered=false,quizOrder=[];
const STORAGE_KEY="mundoBocaFavorites";
function getFavorites(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]")}catch{return []}}
function setFavorites(items){localStorage.setItem(STORAGE_KEY,JSON.stringify(items))}
function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2200)}

function renderTimeline(){
  $("#timelineYears").innerHTML=timelineData.map((item,i)=>`<button class="year-btn ${i===0?"selected":""}" role="tab" aria-selected="${i===0}" data-index="${i}">${item.year}</button>`).join("");
  showTimeline(0);
}
function showTimeline(index){
  const item=timelineData[index];$("#timelineDetail").innerHTML=`<small>HITO HISTÓRICO · ${item.year}</small><h3>${item.title}</h3><p>${item.text}</p>`;
  $$(".year-btn").forEach((b,i)=>{b.classList.toggle("selected",i===index);b.setAttribute("aria-selected",String(i===index))});
}
function renderIdols(){
  const favs=getFavorites();
  $("#idolGrid").innerHTML=idols.map(x=>`<article class="idol-card"><div class="idol-photo"><span>${x.initials}</span></div><div class="idol-info"><small>${x.role}</small><h3>${x.name}</h3><p>${x.text}</p><small>${x.years}</small><button class="favorite-btn ${favs.includes(x.id)?"saved":""}" data-fav="${x.id}">${favs.includes(x.id)?"★ GUARDADO":"☆ AGREGAR A FAVORITOS"}</button></div></article>`).join("");
}
function renderTrophies(filter="todos"){
  const items=trophies.filter(x=>filter==="todos"||x.category===filter);
  $("#trophyGrid").innerHTML=items.map(x=>`<article class="trophy-card"><span class="trophy-symbol">${x.icon}</span><div><small>${x.category==="internacional"?"INTERNACIONAL":x.category==="nacional"?"NACIONAL":"OTRAS COMPETICIONES"}</small><h3>${x.name}</h3><p class="fine-print light-text">${x.detail}</p></div></article>`).join("");
}
function renderPlayers(){
  const query=$("#playerSearch").value.trim().toLowerCase(),position=$("#positionFilter").value;
  const filtered=demoPlayers.filter(p=>(position==="todos"||p.position===position)&&p.name.toLowerCase().includes(query));
  $("#playerGrid").innerHTML=filtered.map(p=>`<article class="player-card"><span class="player-avatar">${p.number}</span><div><h3>${p.name}</h3><small>${p.position.toUpperCase()} · DATO DEMOSTRATIVO</small></div></article>`).join("");
  $("#playerEmpty").hidden=filtered.length>0;
}
function renderFavorites(){
  const favs=getFavorites(),items=idols.filter(x=>favs.includes(x.id));
  $("#favoriteCount").textContent=`${items.length} GUARDADO${items.length===1?"":"S"}`;
  $("#favoritesGrid").innerHTML=items.length?items.map(x=>`<div class="favorite-mini"><strong>${x.name}</strong><button data-remove="${x.id}" aria-label="Quitar ${x.name} de favoritos">★ QUITAR</button></div>`).join(""):`<div class="empty-favorites">Todavía no guardaste favoritos. Entrá a Ídolos y tocá la estrella de una ficha.</div>`;
}
function toggleFavorite(id){
  let favs=getFavorites();
  if(favs.includes(id)){favs=favs.filter(x=>x!==id);toast("Se quitó de favoritos")}
  else{favs.push(id);toast("Guardado en tus favoritos")}
  setFavorites(favs);renderIdols();renderFavorites();
}
function startQuiz(){
  currentQuestion=0;score=0;answered=false;quizOrder=[...questions.keys()].sort(()=>Math.random()-.5);
  $("#quizStart").hidden=true;$("#quizResult").hidden=true;$("#quizPlay").hidden=false;showQuestion();
}
function showQuestion(){
  answered=false;const q=questions[quizOrder[currentQuestion]];
  $("#questionCount").textContent=`PREGUNTA ${currentQuestion+1} / ${questions.length}`;
  $("#questionScore").textContent=`${score} PTS`;
  $("#progressBar").style.width=`${(currentQuestion/questions.length)*100}%`;
  $("#questionText").textContent=q.q;$("#quizFeedback").textContent="";$("#nextQuestion").hidden=true;
  $("#answerList").innerHTML=q.a.map((a,i)=>`<button class="answer-btn" data-answer="${i}"><b>${String.fromCharCode(65+i)}.</b> ${a}</button>`).join("");
}
function answerQuestion(index){
  if(answered)return;answered=true;const q=questions[quizOrder[currentQuestion]];
  if(index===q.correct){score++;$("#quizFeedback").textContent="¡Correcto! "+q.why}
  else{$("#quizFeedback").textContent="No es esa. "+q.why}
  $$(".answer-btn").forEach((b,i)=>{b.disabled=true;if(i===q.correct)b.classList.add("correct");else if(i===index)b.classList.add("wrong")});
  $("#questionScore").textContent=`${score} PTS`;$("#progressBar").style.width=`${((currentQuestion+1)/questions.length)*100}%`;
  $("#nextQuestion").hidden=false;$("#nextQuestion").textContent=currentQuestion===questions.length-1?"VER RESULTADO →":"SIGUIENTE →";
}
function finishQuiz(){
  $("#quizPlay").hidden=true;$("#quizResult").hidden=false;$("#finalScore").textContent=`${score}/10`;
  const title=score>=9?"¡CONOCEDOR XENEIZE!":score>=6?"¡BUEN DESEMPEÑO!":score>=4?"VAS POR BUEN CAMINO":"HORA DE REPASAR LA HISTORIA";
  $("#resultTitle").textContent=title;$("#resultText").textContent=`Acertaste ${score} de ${questions.length} preguntas. ${score>=8?"Tenés muy presentes los grandes momentos del club.":"Podés volver a intentarlo y mejorar tu resultado."}`;
  const best=Number(localStorage.getItem("mundoBocaBest")||0);if(score>best)localStorage.setItem("mundoBocaBest",String(score));$("#bestScore").textContent=`${Math.max(score,best)}/10`;
}
function setupGallery(){
  $$(".gallery-item").forEach(btn=>btn.addEventListener("click",()=>{$("#modalImage").src=btn.dataset.image;$("#modalImage").alt=btn.querySelector("img").alt;$("#modalCaption").textContent=btn.dataset.caption;$("#imageModal").classList.add("open");$("#imageModal").setAttribute("aria-hidden","false")}));
}
function closeModal(){$("#imageModal").classList.remove("open");$("#imageModal").setAttribute("aria-hidden","true");$("#modalImage").src=""}
function setupNav(){
  const nav=$("#mainNav"),toggle=$("#menuToggle");
  toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open))});
  $$("#mainNav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));
  const sections=$$("main section[id]");
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){const id=entry.target.id;$$(".main-nav a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===`#${id}`))}}),{rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(s=>observer.observe(s));
}
document.addEventListener("DOMContentLoaded",()=>{
  renderTimeline();renderIdols();renderTrophies();renderPlayers();renderFavorites();setupGallery();setupNav();
  $("#bestScore").textContent=`${localStorage.getItem("mundoBocaBest")||"—"}/10`;
  $("#timelineYears").addEventListener("click",e=>{const b=e.target.closest("[data-index]");if(b)showTimeline(Number(b.dataset.index))});
  $("#idolGrid").addEventListener("click",e=>{const b=e.target.closest("[data-fav]");if(b)toggleFavorite(b.dataset.fav)});
  $("#favoritesGrid").addEventListener("click",e=>{const b=e.target.closest("[data-remove]");if(b)toggleFavorite(b.dataset.remove)});
  $("#trophyFilters").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;$$(".filter-btn").forEach(x=>x.classList.toggle("selected",x===b));renderTrophies(b.dataset.filter)});
  $("#playerSearch").addEventListener("input",renderPlayers);$("#positionFilter").addEventListener("change",renderPlayers);
  $("#startQuiz").addEventListener("click",startQuiz);$("#retryQuiz").addEventListener("click",startQuiz);
  $("#answerList").addEventListener("click",e=>{const b=e.target.closest("[data-answer]");if(b)answerQuestion(Number(b.dataset.answer))});
  $("#nextQuestion").addEventListener("click",()=>{if(currentQuestion<questions.length-1){currentQuestion++;showQuestion()}else finishQuiz()});
  $("#modalClose").addEventListener("click",closeModal);$("#imageModal").addEventListener("click",e=>{if(e.target.id==="imageModal")closeModal()});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
});