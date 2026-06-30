const photos = [
"IMG-20260630-WA0005.jpg",
"IMG-20260630-WA0006.jpg",
"IMG-20260630-WA0010.jpg",
"IMG-20260630-WA0015.jpg",
"IMG-20260630-WA0016.jpg",
"IMG-20260630-WA0053.jpg"
];

let i = 0;

function openGift(){

document.getElementById("msg").style.display="block";

setInterval(()=>{
i=(i+1)%photos.length;
document.getElementById("photo").src=photos[i];
},2000);

confetti();
}

function confetti(){

for(let j=0;j<120;j++){

let c=document.createElement("div");

c.innerHTML=["🎉","🎊","💖","✨","🎈"][Math.floor(Math.random()*5)];

c.style.position="fixed";
c.style.left=Math.random()*100+"vw";
c.style.top="-20px";
c.style.fontSize=(20+Math.random()*20)+"px";
c.style.animation="fall "+(3+Math.random()*3)+"s linear forwards";

document.body.appendChild(c);

setTimeout(()=>c.remove(),6000);

}

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{
0%{
transform:translateY(-20px) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(720deg);
opacity:0;
}
}
`;

document.head.appendChild(style);

</script>

</body>
</html>
