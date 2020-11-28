//ES6
class Currency{

    constructor(firstCurrency,secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }

   async exchange() {
       let promise = new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency)
                .then(response => response.json())
                .then(data => {
                    const parity = data['rates'][this.secondCurrency];
                    const amount2 = Number(this.amount);
                    let total = parity * amount2;
                resolve(total);

                })
                .catch(err => console.error(err))
        })

     return await promise;
    }

    changeAmount(amount){

        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency){

        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency){

        this.secondCurrency = newSecondCurrency;
    }
}