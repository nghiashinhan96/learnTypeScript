var API_STATUS;
(function (API_STATUS) {
    API_STATUS["PENDDING"] = "PENDDING";
    API_STATUS["FULFILLED"] = "FULFILLED";
    API_STATUS["REJECTED"] = "REJECTED"; // API Status
})(API_STATUS || (API_STATUS = {}));
var status1 = API_STATUS.PENDDING;
var status2 = API_STATUS.FULFILLED;
console.log('There is status api: ' + status1 + ' and ' + status2);
