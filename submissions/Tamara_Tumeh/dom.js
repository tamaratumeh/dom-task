// T1
// 1.
console.log(document.body.lastElementChild.previousElementSibling.tagName)
// 2.
console.log(document.body.children.length)
// 3.
console.log(document.body.childNodes.length - document.body.children.length)
// he difference is that childNodes returns the elements along with the whitespace. We have 3 elements and whitespace after each, so the total becomes 6 On the other hand, children only returns the elements without the whitespace.
// 4.
console.log(document.body.childNodes[0].nodeType)
console.log(document.body.childNodes[0].nodeName)
// 5.
// The two paragraphs are siblings because they are inside the same parent element. One is not inside the other each one is independent but they share the same parent
// 6.
// Yes, I found unexpected text nodes in the DOM for example document.body.previousSibling returns a #text node this comes from whitespace or line breaks in the HTML code between elements, like between <head> and <body>.
// I also used document.documentElement.childNodes to inspect all top level nodes inside <html>
console.log(document.documentElement.childNodes)
console.log(document.body.previousSibling)
////////////////////////////////////////////////////////////
// 1.
const divItem = document.createElement("div")
divItem.classList.add('card')
divItem.dataset.role = 'admin'
const h2Item = document.createElement("h2")
h2Item.textContent = 'Access Panel'
const pItem = document.createElement("p")
pItem.textContent = 'Authenticated'
divItem.append(h2Item)
divItem.append(pItem)
document.body.append(divItem)
// 2.
console.log(divItem.dataset.role)
// 3.
pItem.textContent = 'Welcome back, Admin'
// 4.
divItem.classList.add('authenticated', 'highlight')
console.log(divItem.classList.value)
// 5.
if (divItem.classList.contains('card')) {
    divItem.classList.remove('card')
    console.log(divItem.classList.value)
}
