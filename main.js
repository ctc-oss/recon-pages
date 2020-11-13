const updateContent = url => document.getElementById("content-frame").setAttribute("src", url)

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.getElementsByName('tab-group')
  tabs[0].checked = "checked"
})
