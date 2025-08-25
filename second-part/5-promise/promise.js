// console.log(`Request data...`)

// setTimeout(() => {
//     console.log(`Preparimg data...`)

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log(`Data received`, backendData)
//     }, 2000)
// }, 2000)

// const p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log(`Preparing data..`)
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000);
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
//     // p.then(clientData => {
//     //     console.log(`Data received`, clientData)
//     // })
// })
//     .then(clientData => {
//         // console.log(`Data received`, clientData)
//         clientData.fromPromise = true
//         return clientData
//     }).then(data => {
//         console.log(`Modified`, data)
//     })
//     .catch(err => console.error(`Error: `, err))
//     .finally(() => console.log(`Finally`))


// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// }

// sleep(2000).then(() => console.log(`After 2sec`))
// sleep(3000).then(() => console.log(`After 3sec`))

// Promise.all(([sleep(2000), sleep(5000)]))
//     .then(() => {
//         console.log(`All promises`)
//     })

// Promise.race(([sleep(2000), sleep(5000)]))
//     .then(() => {
//         console.log(`Race promises`)
//     })


new Promise(
    (resolve, reject) => {
        setTimeout(() => resolve(`Salam alekum`), 1000)
    }
)
.then((value) => {
    console.log(value)
    console.log(`Ya alekum assalam`)
})
.catch((err) => console.log(err))
.finally(() => console.log(`finish`))

new Promise(
    (resolve, reject) => {
        setTimeout(() => reject(new Error(`Error`)), 1000)
    }
)
.then((value) => {
    console.log(value)
    console.log(`Ya alekum assalam`)
})
.catch((err) => console.log(err))
.finally(() => console.log(`finish`))