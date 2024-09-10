function onDrag(e) {
  const container = document.querySelector("#container")
  let oddstyle = window.getComputedStyle(container)
  let left = parseFloat(oddstyle.left)
  let top = parseFloat(oddstyle.top)
  container.style.left = ` ${left + e.movementX}px`
  container.style.top = ` ${top + e.movementY}px`
}
const dragElement = document.querySelector("#drag-bar")
dragElement.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", onDrag)
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onDrag)

  })
})