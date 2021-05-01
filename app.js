const url =
  "https://script.google.com/macros/s/AKfycbxFlQXkvna9jYamLWhTQ1k3cJItWZDvCYoCmLTcN-CJcr7vZw/exec";
const val = { page: 1 };
// object to hold the contents
const page = {};
page.loaderMore = true;
page.message = document.createElement('div');
page.message.textContent = '----Scroll to add more content----';
page.container = document.createElement("div");
page.container.textContent = "Hello World!";
// this is were the main contects are dumped
page.main = document.querySelector("section");
page.main.append(page.container);
page.main.append(page.message);

firstLoad();
function firstLoad() {
  page.container.innerHTML = "";
  getCourses();
}
function getCourses() {
  const baseURL = url + "?p=" + val.page;
  page.message.textContent = 'loading....'
  fetch(baseURL)
    .then((rep) => rep.json())
    .then((json) => {
      if (json.data.pages.next != null) {
        page.loaderMore = true;
        page.message.textContent = '-Page '+val.page+' -loading...'
      }else{
        page.message.style.display = 'none';
      }
      console.log(page);
      console.log(json.data);
      renderPost(json.data.posts);
    });
}

window.onscroll = function (ev) {
  /*  console.log(ev);
  console.log(window.innerHeight);
  console.log(window.scrollY);
  console.log(page.main.offsetHeight);
  console.log(document.body.offsetHeight);*/
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
    //console.log('SCROLLING');
    if (page.loaderMore) {
      page.loaderMore = false;
      addNewPosts();
    }
  }
};

function addNewPosts() {
  val.page+=1;
  getCourses();
}

function renderPost(data) {
  data.forEach(function (post) {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${post[8]}</h3>
    <div>${post[5]} stars by ${post[6]} students</div>
    `;
    page.container.append(div);
  });
}
