// Task 1: DOM Archaeologist :

let lastTagName = document.body.lastElementChild.tagName;
console.log(lastTagName);

let numElementNodes = document.body.children.length;
console.log("Number of element children:", numElementNodes);

let childNodesCount = document.body.childNodes.length;
let childrenCount = document.body.children.length;
console.log("ChildNodes:", childNodesCount); //length is 6 (get all node like (space,text,comment,element)=> NodeList)
console.log("Children:", childrenCount); //length is 3 (get just element in body => HTMLCollection)
console.log("Difference:", childNodesCount - childrenCount);

let firstNode = document.body.childNodes[0];
console.log(`First nodeType: ${firstNode.nodeType}`);
// nodeType return integer which specifies the type of the node
// in firstNode nodeType is 3 becouse it is #text
console.log(firstNode.nodeName);
// in firstNode nodeName is #text

let firstP = document.querySelector("p");
let siblingP = firstP.nextElementSibling;
console.log(
  "Are they siblings?",
  firstP.parentElement === siblingP.parentElement
);

document.body.childNodes.forEach((node) => {
  if (node.nodeType === 3) {
    // it looks like serach for #text (space)
    console.log("Unexpected Text Node:", node);
  }
});

// Task 2: Synthetic DOM Injection
/*
<div class="card" data-role="admin">
  <h2>Access Panel</h2>
  <p>Authenticated</p>
</div>
*/
let divParent = document.createElement("div");
let h2Child = document.createElement("h2");
let pChild = document.createElement("p");

divParent.classList.add("card");
// or divParent.className = "card";
divParent.dataset.role = "admin";

h2Child.textContent = "Access Panel";
pChild.textContent = "Authenticated";

divParent.append(h2Child, pChild);
document.body.append(divParent);

// console.log(divParent);
// console.log(h2Child);
// console.log(pChild);

console.log(divParent.dataset.role);
pChild.textContent = "Welcome back, Admin";

divParent.classList.add("authenticated", "highlight");

if (divParent.classList.contains("card")) {
  divParent.classList.remove("card");
}
console.log(divParent.className);
