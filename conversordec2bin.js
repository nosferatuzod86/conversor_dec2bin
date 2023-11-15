//coloca um vetor com 100 números todos com valor false. 
    function converte2Binario() {
        var txtnum = window.document.getElementById('txtnumero')
        var num =Number(txtnum.value)
        var res = window.document.getElementById('res')
    //var randomNumero = Math.floor((Math.random() * (num))+1);
    //-------------
    //Criando vetor para poder inserir os restos das divisões. 
        var vetor1 = []
        var d = num
        var b 
        while (d > 0){
            b = parseInt(d % 2)
                //console.log(b)
                vetor1.push(b)
            d = parseInt(d / 2)
                //console.log(d)
        }
        //console.log(vetor1)
        //invertendo o valor contido no vetor para apresentar na página web. 
        var valbinario = vetor1.reverse()
        var valorbinario = valbinario.join("")

        //console.log(typeof valorbinario) --estava verificando a saída do vetor. 

        //console.log(`o valor ${num} em binário é ${valorbinario}`)

        //Colocando valor na página dentro da div "res". 
       res.innerHTML = `<p>O valor ${num} em binário é ${valorbinario}.</p>`
      }
