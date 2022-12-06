function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var tn3 = document.getElementById('txtn3')
    var tn4 = document.getElementById('txtn4')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number (tn3.value)
    var n4 = Number(tn4.value)
    var s1 = n1 / n2 * n3
    var s2 = n4 - s1
    res.innerHTML = (`Seu Ganho Liquido do dia é de $${s2.toFixed(2)} Reais`)
    res.style.background='green'
    


}