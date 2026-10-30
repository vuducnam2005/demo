const s = "mot hai mot hai ba bon"
const a = s.split(' ')
const kq = {};
for (let i = 0; i < a.length; i++) {
    if(kq[a[i]]===undefined){
        kq[a[i]]=1;
    }
    else{
        kq[a[i]]++;
    }
    console.log(kq)
}
