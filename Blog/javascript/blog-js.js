//functions to link to blog posts
function openBlog1() {
  window.open("/Blog/posts/blog-3-12-17", "_self");
}
function openBlog2() {
  window.open("/Blog/posts/blog-3-19-17", "_self");
}
function openBlog3() {
  window.open("/Blog/posts/blog-3-26-17", "_self");
}
function openBlog4() {
  window.open("/Blog/posts/blog-4-19-17", "_self");
}

//open Website
function openIndex() {
  window.open("../index.html", "_self");
}

//functionality for nav bar
function blogNavBarSelect(el, page) {
  let buttons = el.parentElement.children
  let pages = document.getElementsByClassName("page")

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "rgba(255, 255, 255, 1)"
    buttons[i].children[0].style.display = "none"
  }

  el.children[0].style.display = "flex"
  el.style.backgroundColor = "rgba(200, 200, 200, 1)";

//opening correct page for blog-content
  for(let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none"
  }

  if(page == "welcome"){
    pages[0].style.display = "block";
  }
  if(page == "posts"){
    pages[1].style.display = "block";
  }
  if(page == "cool"){
    pages[2].style.display = "block";
  }
}

//starting page with welcome open
blogNavBarSelect(document.getElementsByClassName("blog-nav-bar-button")[0], "welcome")
