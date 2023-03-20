function calcular(){
    const minima = Number(document.getElementById('minima').value);
    const mat = Number(document.getElementById('mat').value);
    const port = Number(document.getElementById('port').value);
    const his = Number(document.getElementById('his').value);
    const geo = Number(document.getElementById('geo').value);
    const bio = Number(document.getElementById('bio').value);
    const qui = Number(document.getElementById('qui').value);
    const fis = Number(document.getElementById('fis').value);
    const ing = Number(document.getElementById('ing').value);
    const soc = Number(document.getElementById('soc').value);
    const fil = Number(document.getElementById('fil').value);
    const edf = Number(document.getElementById('edf').value);
    const art = Number(document.getElementById('art').value);
    const media = (mat + port + his + geo + bio + qui + fis + ing + soc + fil + edf + art)/ 12;
    const mediaArredonda = media.toFixed(1)   
    
    if( media < minima){
        document.querySelector('.resposta').innerHTML = `Reprovado, sua média final foi de ${mediaArredonda}`;
    }
    else if( media == 0){
        document.querySelector('.resposta').innerHTML = `Reprovado, sua média final foi de ${mediaArredonda}`;
    }
    else{
        document.querySelector('.resposta').innerHTML = `Aprovado, sua média final foi de ${mediaArredonda}`;
    }
}