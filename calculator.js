function equals(){
    var z = document.getElementById('screen').value;
    var a = z.split(/[+\-]/);
    var b = [];
    for(i=0; i<z.length;i++){
        if(z[i]=="+"){ b.push("+");}
        if(z[i]=="-"){ b.push("-");}    
    }
    let e =[];
    let g =[];
    for(let d = 0; d<a.length;d++){
        let h =[];
        let f =a[d].split(/[*\/]/);
        if(f.length>1){
            e.push(f);
            // a[d]=f;
            for(let j=0; j<a[d].length;j++){            
                if(a[d][j]=="*"){h.push("*");}
                if(a[d][j]=="/"){h.push("/");}
            }
            g.push(h)
        }
    }
    //document.write(e);
    let o =[];
    for(let k=0;k<e.length;k++){
        let l = e[k];
        //document.write(l + "<br>")
        let m = l[0];
        for(let n=0;n<g[k].length;n++){
            if(g[k][n]=="*"){
                m = parseFloat(m)*parseFloat(e[k][n+1]);
            }
            if(g[k][n]=="/"){
                m = parseFloat(m)/parseFloat(e[k][n+1]);
            }        
        }
        o.push(m);        
    }    
    //document.write(o);
    //document.write(a);
    for(let p=0;p<a.length;p++){
            let q = a[p].split(/[*\/]/);
            if(q.length>1){
                a[p]=o[0];
                o.shift();
            }
    }
    //document.write(a);    
    var c = a[0];
    for(j=1;j<a.length;j++){
            if(b[j-1]=="-"){
                c = parseFloat(c) - parseFloat(a[j]);
            }
            if(b[j-1]=="+"){
                c = parseFloat(c) + parseFloat(a[j]);
            }
    }
    document.getElementById('screen').value = (c);
    

}
function div0(){
    document.getElementById('screen').value = document.getElementById('screen').value + 0;
}
function div1(){
    document.getElementById('screen').value =document.getElementById('screen').value +  1;
}
function div2(){
    document.getElementById('screen').value =document.getElementById('screen').value +  2;
}
function div3(){
    document.getElementById('screen').value = document.getElementById('screen').value + 3;
}
function div4(){
    document.getElementById('screen').value = document.getElementById('screen').value + 4;
}
function div5(){
    document.getElementById('screen').value = document.getElementById('screen').value + 5;
}
function div6(){
    document.getElementById('screen').value = document.getElementById('screen').value + 6;
}
function div7(){
    document.getElementById('screen').value = document.getElementById('screen').value + 7;
}
function div8(){
    document.getElementById('screen').value = document.getElementById('screen').value + 8;
}
function div9(){
    document.getElementById('screen').value = document.getElementById('screen').value + 9;
}
function divD(){
    document.getElementById('screen').value = document.getElementById('screen').value + "/";
}
function divA(){
    document.getElementById('screen').value = document.getElementById('screen').value + "+";
}
function divM(){
    document.getElementById('screen').value = document.getElementById('screen').value + "-";
}
function divMul(){
    document.getElementById('screen').value = document.getElementById('screen').value + "*";
}
function divP(){
    document.getElementById('screen').value = document.getElementById('screen').value + ".";
}
function divAC(){
    document.getElementById('screen').value = null;
}