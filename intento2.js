function checkCashRegister(price, cash, cid) {
    let object = {
        'status': "",
        'change': []
    };
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
    let moneda = [...valorMoneda]
    let cashInDrawer = 0
    cid.forEach((v)=>{
        cashInDrawer = cashInDrawer + v[1];
    })
    let Deuda = cash - price; 
    if(cashInDrawer < Deuda){

        for(let i = moneda.length - 1; i >= 0; i--){
            let montoReunido = 0;
            let index = 0;
            if(Deuda == moneda[i][1]){
                index = i;
                while(Deuda >= moneda[index][1] && montoReunido < cid[index][1]){
                    montoReunido =  moneda[index][1] + montoReunido;
                    Deuda =  parseFloat(Deuda).toFixed(2) - valorMoneda[index][1]; 
                    console.log('se le juntaron', moneda[index][1], montoReunido, Deuda )
                }
            };
        }
        if(Deuda > 0){
            object.status = 'INSUFFICIENT_FUNDS'
        }
        console.log(object)
        return object;
    }//if para saber si cash in drawer y la deuda son iguales en valor
    else if(cashInDrawer == Deuda){
            object.change = cid
            object.status = 'CLOSED'
        
        return object;
    }else{
        for(let i = moneda.length - 1; i >= 0; i--){
            let montoReunido = 0;
            let index = 0;
            if(Deuda > moneda[i][1]){
                index = i;
                while(Deuda >= moneda[index][1] && montoReunido < cid[index][1]){
                    montoReunido =  moneda[index][1] + montoReunido;
                    Deuda =  parseFloat(Deuda).toFixed(2) - valorMoneda[index][1]; 
                    console.log('se le juntaron', moneda[index][1], montoReunido,Deuda )
                }
                object.change.push([moneda[index][0], montoReunido])
            };
        }
        
        if(Deuda == 0){
            object.status = 'OPEN'
        }else if(Deuda>0){
            object.status = "INSUFFICIENT_FUNDS"
            object.change = []

        }
        console.log(object)
        return object;

    }
    //
    
    }
    
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])