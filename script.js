let audio = document.getElementById('audiosource');
let audioplayer = document.getElementById('audio');
let recitations = document.getElementById('recitations');
let qaris = document.getElementById('qaris');
let fontchanger = document.getElementById('fontchanger')
let H1 = document.getElementById('H1')
let bookmarkadder = document.getElementById('bookmarkadder')
let bookmarkadderbutton = document.getElementById('bookmarkadderbutton')
let bookmarkclearerbutton = document.getElementById('bookmarkclearerbutton')




recitations.addEventListener('change', ()=>{
  audio.src = recitations.value;
  audioplayer.load()
});

qaris.addEventListener('change', ()=>{
  let qariArray = recitations.value.split('/');
  qariArray[4] = qaris.value;
  let stringqariarray = qariArray.toString()
  let fixedstringqariarray = stringqariarray.replaceAll(",", "/")
  audio.src = fixedstringqariarray
  audioplayer.load();
});

fontchanger.addEventListener('change', ()=>{
  H1.style.fontFamily = fontchanger.value;
});


bookmarkadderbutton.addEventListener('click', ()=>{
  let tobookmark = bookmarkadder.value
  

  if(bookmarkadder!==""){
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.push(tobookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }
  window.location.replace('')
});



bookmarkclearerbutton.addEventListener('click', ()=>{
  localStorage.clear()
  window.location.replace('')
});


function displaybookmarks() {
  const bookmarklist = document.getElementById("bookmarkList");
  bookmarklist.innerHTML = "";


  let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

  

  bookmarks.forEach((bookmark, index) => {
    let li = document.createElement('li')
    li.value = bookmarkadder.value
    let test = bookmark.split('/')
    let chaptername = test[6].toString()
    chaptername = chaptername.split('.mp3')
    bookmark = "Chapter " + chaptername[0]
    li.textContent = bookmark;
    bookmarklist.appendChild(li);    
  });
}



displaybookmarks()


