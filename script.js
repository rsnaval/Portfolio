// Sample blog & YouTube data
const blogPosts = [
  { title:"Blog 1", snippet:"Short snippet...", content:"Full blog content here..." },
  { title:"Blog 2", snippet:"Short snippet...", content:"Full blog content here..." },
  { title:"Blog 3", snippet:"Short snippet...", content:"Full blog content here..." }
];

const youtubeVideos = [
  { title:"Video 1", thumbnail:"https://via.placeholder.com/300x200", description:"Short video description" },
  { title:"Video 2", thumbnail:"https://via.placeholder.com/300x200", description:"Short video description" }
];

// Load blogs dynamically
const blogContainer = document.getElementById("blog-container");
if(blogContainer){
  blogPosts.forEach(post=>{
    const card=document.createElement("div");
    card.classList.add("blog-card");
    card.innerHTML=`<h3>${post.title}</h3><p>${post.snippet}</p><button onclick="alert('${post.content}')">Read More</button>`;
    blogContainer.appendChild(card);
  });
}

// Load YouTube dynamically
const youtubeContainer = document.getElementById("youtube-container");
if(youtubeContainer){
  youtubeVideos.forEach(video=>{
    const card=document.createElement("div");
    card.classList.add("youtube-card");
    card.innerHTML=`<img src="${video.thumbnail}" alt="${video.title}"><h3>${video.title}</h3><p>${video.description}</p>`;
    youtubeContainer.appendChild(card);
  });
}

// Admin credentials
const adminCredentials = { username:"admin", password:"password123" };

// Show/Hide Login Modal
function openLogin(){ document.getElementById("login-modal").style.display="block"; }
function closeLogin(){ document.getElementById("login-modal").style.display="none"; }

// Login function
function login(){
  const user=document.getElementById("username").value;
  const pass=document.getElementById("password").value;
  if(user===adminCredentials.username && pass===adminCredentials.password){
    alert("Login Successful! Redirecting to Admin Panel...");
    window.location.href="admin.html";
  } else {
    document.getElementById("login-error").style.display="block";
  }
}
