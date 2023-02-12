const el = document.getElementById("firstBtn")
console.log(el.classList)
console.log(el.className)
console.log("===========================")

function addLoading(event) {
  let button = event.currentTarget
  let text = button.textContent

  button.innerHTML = `<i class="ph-circle-notch"></i>${text}`
  button.classList.add("loading")
  console.log(el.classList)
  console.log(el.className)
  console.log("===========================")

  setTimeout(function () {
    button.innerHTML = `<i class="ph-check"></i>${text}`
    button.classList.remove("loading")
    console.log(el.classList)
    console.log(el.className)
    console.log("===========================")
  }, 2000)
}

// ============================================================

const button = document.getElementById("thirdBtn")
button.addEventListener("mouseover", function () {
  button.style.left = `${Math.ceil(Math.random() * 90)}%`
  button.style.top = `${Math.ceil(Math.random() * 90)}%`
})

// ============================================================

// const updateButton = (function (event) {
//   let first = true
//   return function () {
//     first ? addLoading() : removeLoading()
//     first = !first
//   }
// })()

// ============================================================

// button.innerHTML = `<i class="ph-circle-notch"></i>${text}`
// button.classList.add("loading")

// button.innerHTML = `<i class="ph-check"></i>${text}`
// button.classList.remove("loading")

// function hasClass(element, clsName) {
//   return (" " + element.className + " ").indexOf(" " + clsName + " ") > -1
// }
// const val1 = document.getElementById("firstBtn")
// console.log(hasClass(val1, "loading"))

// function updateButton(event) {
//   let button = event.currentTarget
//   let text = button.textContent
//   console.log(text)

//   if (button.classList.contains("loading")) {
//     button.innerHTML = `<i class="ph-circle-notch"></i>${text}`
//     button.classList.add("loading")

//     setTimeout(function () {
//       button.innerHTML = `<i class="ph-check"></i>${text}`
//       button.classList.remove("loading")
//     }, 2000)
//   } else {
//     button.innerHTML = `<i class="ph-circle-notch"></i>${text}`
//     button.classList.add("loading")

//     setTimeout(function () {
//       button.innerHTML = `<i class="ph-check"></i>${text}`
//       button.classList.remove("loading")
//     }, 2000)
//   }
// }
