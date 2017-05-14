/**
 * Created by Aviv on 10-May-17.
 */
























var err = 'data failed';
function getUsers() {
    return ['user7', 'user6', 'user5', 'user4']
}

// var getArray = new Promise(function (resolve, reject) {
//
//     resolve(
//         setTimeout(function () {
//             console.log(res);
//         }, 2000)
//     );
//     reject(err);
// });

function getArray() {
    $timeout(function () {
        return getUsers();
    }, 2000);
}

getArray()
// .then(function (res) {
// console.log('then',res)})
// .catch(function (res) {
//     console.log('catch',res);
// });


// var myPromise = new Promise (function (resolve,reject) {
//     resolve(function (){
//         var x = 2;
//         var y = 3;
//         return x+y;
//     }());
//     reject('rejected');
// })
//
// myPromise.then(function(res) {
//     console.log(res);
// })