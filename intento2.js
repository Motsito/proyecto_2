function checkCashRegister(price, cash, cid) {
    let object = {}
    const valorMoneda = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER",0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
        ];
    let grande = [];
    let cambio = [];
    let indice = 0;
    
        //funcion que cuenta cuanto CID tengo 
        let cashInDrawer = 0
    
    cid.forEach((v)=>{
        cashInDrawer = cashInDrawer + v[1];
    })
        //
    
    // if para saber si cash in drawer es menor a el cambio a deber
    let Deuda = cash - price;
    
    if(cashInDrawer < Deuda){
        object= {
            'status': 'INSUFFICIENT_FUNDS',
            'change': []
        }
        console.log(object)
    }//if para saber si cash in drawer y la deuda son iguales en valor
    else if(cashInDrawer == Deuda){
        object= {
            'status': "CLOSED",
            'change': cid
        };
        console.log(object);
    }// devolver el cambio  en monedas y billetes 
    else{
        //revision de cuanto falta a pagar
    
        //
            //revisar cual es el billete mas grande
            do{
                valorMoneda.forEach((v,index)=>{    
                    if(v[1] < Deuda && cid[index][1] > 0){
                        indice = index;
                    }
                })
            //
            //ya sabemos cual es el mas grande aqui, el cual esta en 'grande' y indice es el indice de el valor mas grande
            //ahora necesito descontar billete por billete
            
            Deuda = Deuda - valorMoneda[indice][1];
            cid[indice][1] =  (cid[indice][1] - valorMoneda[indice][1]);

                let existance = 'no';
                let nE = 0;
                
                for(let i = 0; i< cambio.length;i++){
                    for (let k = 0; k < cambio[i].length;k++){
                        if(valorMoneda[indice][0]==cambio[i][k]){
                            existance = 'si';
                            nE = i;
                            
                        }
                    }
                }
                


                if(existance === 'si'){
                    cambio[nE][1] = (cambio[nE][1]) + (valorMoneda[indice][1]);
                    console.log('se sumo', valorMoneda[indice][1])
                }else if(existance === 'no'){
                    cambio.push(valorMoneda[indice]);
                    console.log('se incorporo', valorMoneda[indice][1])
                }


                
                
            //  
    //        console.log(Deuda,cambio)
}while(Deuda>0)
      
    console.log(cambio)
    }

    console.log(cid)


    console.log(valorMoneda)
    //
    
    }
    
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
    //                            ["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER",0.25],  ["ONE", 1],  ["FIVE", 5],  ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]
    
    // respuesta Esperada {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}