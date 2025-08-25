console.log('Start')
console.log('Start2')

const a = 'Alex'

window.setTimeout(function() {
    console.log('Inside timeout')
    console.log(a)
}, 5000)

function timeout2sec() {
    console.log(`timeout2sec`)
}

setTimeout(timeout2sec, 2000)

