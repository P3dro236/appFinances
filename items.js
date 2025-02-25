// Hardcoding os gastos para simular uma API
export const transaction = [
    {id: 1,name: "Viagem de uber",value: 14,date: "2021-10-01",},
    {id: 2,name: "Mc donalds",value: 22,date: "2021-10-01"},
    {id: 3,name: "Coca",value: 14,date: "2021-10-01"},
    {id: 4,name: "Sorvete",value: 22,date: "2021-10-01"},
    {id: 5,name: "Camiseta",value: 134,date: "2021-10-01"},
    {id: 6,name: "Cinema",value: 43,date: "2021-10-01"},
    {id: 6,name: "Cinema",value: 43,date: "2021-10-01"},
]
// Função que adiciona uma transação no arquivo html
export function addTransaction(name, value){
    const addedTransaction = `
        <div class="col-6 mb-3">
            <span class="text-white pl-4 text-left roboto">${name}</span>
        </div>
        <div class="col-2 text-center roboto">
            <span class="text-white">R$${value}</span>
        </div>
        <div class="col-4 d-flex justify-content-center align-items-center">
            <span class="text-white d-flex align-items-start">
                <button type="button" class="btn correct btn p-0 mr-1" title="edit">
                    <i class="text-white bi bi-pencil-square"></i>
                </button>
                <button type="button" class="btn correct p-0 mr-1" title="details">
                    <i class="text-white bi bi-eye"></i>
                </button>
                <button class="btn correct p-0" title="delete">
                    <i class="bi bi-trash text-white"></i>
                </button>
            </span>
        </div>
    `;

    return addedTransaction
}

// Função que hardcode o saldo
export const amount = "1211"