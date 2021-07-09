function drop()
{

  //Add real page links for production!!!

  let drop = document.getElementById('blog-drop');
  switch (parseInt(drop.value))
  {
    case 0:
      window.open(blogPages[parseInt(drop.value)],'_self');
      break;
    case 1:
      window.open(blogPages[parseInt(drop.value)],'_self');
      break;
    case 2:
      window.open(blogPages[parseInt(drop.value)],'_self');
      break;
    case 3:
      window.open(blogPages[parseInt(drop.value)],'_self');
      break;
    case 4:
      window.open(blogPages[parseInt(drop.value)],'_self');
      break;
    case 5:
      window.open(blogPages[parseInt(drop.value)],'_self');
    break;
  }
}

let blogSelect = document.getElementsByClassName('blog__selection');
for(let i = 0; i < blogSelect.length; i++)
{
 blogSelect[i].addEventListener('click', (e) =>
 {
   window.open(blogPages[i],'_self');
 });
}
let blogPages =
[
  "https://digip.lv/blogs/visiraksti",
  "https://digip.lv/blogs/prasmes",
  "https://digip.lv/blogs/intervijas",
  "https://digip.lv/blogs/kopienas",
  "https://digip.lv/blogs/tehnologijas",
  "https://digip.lv/blogs/podkasti"
]
