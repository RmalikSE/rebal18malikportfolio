// TYPING EFFECT
const text=["Software Developer","Computer Science Student","Future AI Engineer"];
let count=0,index=0,currentText="",letter="";
function type(){
  if(count===text.length){count=0;}
  currentText=text[count];
  letter=currentText.slice(0,++index);
  document.querySelector(".typing").textContent=letter;
  if(letter.length===currentText.length){
    setTimeout(()=>{index=0;count++;type();},3000);
    return;
  }
  setTimeout(type,120);
}
type();

// CUSTOM CURSOR (Only on non-mobile)
if(window.innerWidth > 768){
  const dot=document.querySelector(".cursor-dot");
  const ring=document.querySelector(".cursor-ring");
  document.addEventListener("mousemove",(e)=>{
    dot.style.top=e.clientY+"px";
    dot.style.left=e.clientX+"px";
    ring.style.top=(e.clientY-15)+"px";
    ring.style.left=(e.clientX-15)+"px";
  });
}

// MATRIX BACKGROUND
const canvas=document.getElementById("matrix-bg");
const ctx=canvas.getContext("2d");
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
const letters="01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize=16;
const columns=canvas.width/fontSize;
const drops=[];
for(let x=0;x<columns;x++){drops[x]=1;}
function drawMatrix(){
  ctx.fillStyle="rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#ff0000";
  ctx.font=fontSize+"px monospace";
  for(let i=0;i<drops.length;i++){
    const text=letters.charAt(Math.floor(Math.random()*letters.length));
    ctx.fillText(text,i*fontSize,drops[i]*fontSize);
    if(drops[i]*fontSize>canvas.height && Math.random()>0.975){drops[i]=0;}
    drops[i]++;
  }
}
setInterval(drawMatrix,33);

// Resize canvas on window resize
window.addEventListener("resize",()=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
});