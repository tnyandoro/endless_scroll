const url = 'https://script.google.com/macros/s/AKfycbxFlQXkvna9jYamLWhTQ1k3cJItWZDvCYoCmLTcN-CJcr7vZw/exec';
const val = {page:1};
// object to hold the contents
const page = {};
page.container = document.createElement('div');
// this is were the main contects are dumped 
page.main = document.querySelector('section');
page.main.append(page.container);
getCourses();
 
function getCourses(){
  const baseURL = url + '?p=' + val.page;
  fetch(baseURL).then((rep)=> rep.json())
  .then((json) => {
    console.log(json.data);
    // renderPost(json.data.posts)
  })
}

