const url = 'https://script.google.com/macros/s/AKfycbxFlQXkvna9jYamLWhTQ1k3cJItWZDvCYoCmLTcN-CJcr7vZw/exec';
const val = {page:1};
const page = {};
 
getCourses();
 
function getCourses(){
  const baseURL = url + '?p=' + val.page;
  fetch(baseURL).then((rep)=> rep.json())
  .then((json) => {
    console.log(json.data);
    // renderPost(json.data.posts)
  })
}

