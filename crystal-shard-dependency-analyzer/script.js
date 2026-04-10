const res=document.getElementById('res');
function run(){
let txt=(document.getElementById('input').value||'').toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('type')) out+='- Type inference context detected\n';
if(txt.includes('memory')) out+='- Memory usage considerations\n';
if(txt.includes('concurrency')||txt.includes('fiber')) out+='- Concurrency model (fibers)\n';
if(txt.includes('shard')||txt.includes('dependency')) out+='- Dependency graph context\n';
if(txt.includes('build')) out+='- Build/compile step detected\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Analyze performance, types, and dependencies\n';

res.innerText=out;
}