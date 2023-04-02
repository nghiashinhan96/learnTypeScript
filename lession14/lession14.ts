enum API_STATUS {
    PENDDING = 'PENDDING',
     FULFILLED = 'FULFILLED',
     REJECTED = 'REJECTED' // API Status
}

let status1 = API_STATUS.PENDDING;
let status2 = API_STATUS.FULFILLED;

console.log('There is status api: '+status1+' and '+status2);