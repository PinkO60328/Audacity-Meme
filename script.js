const C=window.CONFIG;
document.querySelectorAll('[data-k]').forEach(e=>e.textContent=C[e.dataset.k]);
document.querySelectorAll('[data-href]').forEach(e=>e.href=C[e.dataset.href]);
document.getElementById('ca').textContent=C.CA;
document.getElementById('copy').onclick=()=>{navigator.clipboard.writeText(C.CA).then(()=>{const t=document.getElementById('toast');t.classList.add('on');setTimeout(()=>t.classList.remove('on'),1400)})};
const g=document.getElementById('grid');for(let i=1;i<=10;i++){g.insertAdjacentHTML('beforeend',`<figure><img loading="lazy" src="img/g${i}.jpg" alt="Audacity ${i}"></figure>`)}
