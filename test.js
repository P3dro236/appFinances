const items = [
    {id: 1, name: "Viagem de uber", value: 14, date: "2021-10-01"},
    {id: 2, name: "Mc donalds", value: 22, date: "2021-10-01"},
    {id: 3, name: "Coca", value: 14, date: "2021-10-01"},
    {id: 4, name: "Sorvete", value: 22, date: "2021-10-01"},
    {id: 5, name: "Camiseta", value: 134, date: "2021-10-01"},
    {id: 6, name: "Cinema", value: 43, date: "2021-10-01"},
    {id: 7, name: "Cinema", value: 43, date: "2021-10-01"}
];
items.forEach(item => {
    item.getName = function() {
        return this.name;
    };
    item.getValue = function(){
        return this.value
    }
});
console.log(items[0].getValue())