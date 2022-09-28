let count = document.querySelector(".count")
let dat = document.querySelector(".data")
let mon = document.querySelector(".mon")
function dating (){
const years = new Date();
let year = years.getFullYear()

let dates = new Date()
let date = dates.getDate()
var dayName =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = dayName[new Date().getDay()];
let months =["jaunery","febuary","martch","april","may","june","july","august","september","october","november","december"];
let month = months[new Date().getMonth()];
dat.textContent =`${month} ${date} , ${year}`
mon.textContent=day
}
dating()



let add = document.querySelector(".add")
let txt = document.querySelector(".text")
let form = document.querySelector("form")

add.addEventListener("click",addNote)
// txt.addEventListener("click",createElements)


getNotes().forEach(note=>{
const noteElement = createElements(note.id ,note.content)
txt.insertBefore(noteElement,add)
})


function getNotes (){
  return JSON.parse(localStorage.getItem("noteApp") || "[]")
}



function saveNotes (notes){
  return localStorage.setItem("noteApp" , JSON.stringify(notes))
}



function createElements(id,content){
  
let element = document.createElement("textarea")
element.classList.add("note")
element.value = content
element.placeholder = "Empty Sticky Note";
element.addEventListener("change",()=>{
updateNote(id ,element.value)
})

element.addEventListener('dblclick',()=>{
  const doDel = confirm("are you sure you want to delete")
  if(doDel){
    deleteNote(id,element)
  }
})

return element
}

function addNote (){
  const Notes = getNotes();
const noteObj ={
  id:Math.floor(Math.random()*100000),
  content : " ",
  
};
const noteElement = createElements(noteObj.id,noteObj.content)
txt.insertBefore(noteElement,add)
Notes.push(noteObj)
saveNotes(Notes)
}

function updateNote (id, newcontent){
let notes = getNotes()
let targetNote = notes.filter(note => note.id === id)[0]
targetNote.content =newcontent
saveNotes(notes)
}

function deleteNote(id,element){
const notes = getNotes().filter(note => note.id !== id)
saveNotes(notes)
txt.removeChild(element)
}


