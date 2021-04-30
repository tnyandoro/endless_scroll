const url = 'https://script.google.com/macros/s/AKfycbxFlQXkvna9jYamLWhTQ1k3cJItWZDvCYoCmLTcN-CJcr7vZw/exec';
const val = {page:1};
// object to hold the contents
const page = {};
page.loaderMore = true;
page.container = document.createElement('div');
page.container.textContent = 'Hello World!'
// this is were the main contects are dumped 
page.main = document.querySelector('section');
page.main.append(page.container);

firstLoad();
function firstLoad (){
  page.container.innerHTML = '';
  getCourses();
}

// listening to the windows scroll event
window.onscroll = function(e) {
  // console.log(e);
  // console.log(window.innerHeight);
  // console.log(window.scrollY);
  // console.log(page.main.offsetHeight);
  // console.log(document.body.offsetHeight);
  if((window.innerHeight+window.scrollY)>=(document.body.offsetHeight-300))
  console.log('SCROLLING');
  // check to see if they are more pages to load 
  if(page.loaderMore){
    page.loaderMore = false;
    addNewPosts();
  }
}
function addNewPosts(){
  val.page+=1;
}

function renderPost(data) {
  data.forEach(function(post) {
    const div = document.createElement('div');
    div.innerHTML =`${post[8]}`;
    page.container.appendChild(div);
  })
}

function getCourses(){
  const baseURL = url + '?p=' + val.page;
  fetch(baseURL).then((rep)=> rep.json())
  .then((json) => {
    console.log(json.data);
    renderPost(json.data.posts)
  })
}

