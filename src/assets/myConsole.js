function myAlert (val) {
  let yes = true
  const time = function () {
    if (document.getElementById('myalert')) {
      document.getElementById('myalert').parentNode.removeChild(document.getElementById('myalert'))
      yes = false
    }
  }
  time()
  var a = document.querySelector('body')
  var b = document.createElement('span')
  b.id = 'myalert'
  b.innerHTML = val
  a.appendChild(b)
  Object.assign(b.style, {
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '20%',
    padding: '20px',
    borderRadius: '20%',
    backgroundColor: ' rgb(150, 115, 214)'
  })
  if (yes) {
    setTimeout(time, 2000)
  }
}
function myGameOver (val) {
  var a = document.querySelector('body')
  a.innerHTML = val
}
export { myAlert, myGameOver }
