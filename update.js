import { transaction, addTransaction} from './items.js'

export function updateTable(local){
    for(let i = 0; i < transaction.length; i++){
        local.append(addTransaction(transaction[i].name, transaction[i].value))
    }
}