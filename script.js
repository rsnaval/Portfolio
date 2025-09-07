// ---------- DATA ARRAYS ----------
let blogPosts = [
    {
        title: "First Blog Post",
        snippet: "This is a short snippet of the first blog.",
        full: "This is the full content of the first blog post. You can write long description here..."
    },
    {
        title: "Second Blog Post",
        snippet: "Short snippet for second blog.",
        full: "Full content of the second blog post goes here."
    }
];

let youtubeVideos = [
    {
        title: "First Video",
        thumbnail: "https://via.placeholder.com/300x200",
        description: "Short description for first video."
    },
    {
        title: "Second Video",
        thumbnail: "https://via.placeholder.com/300x200",
        description: "Short description for second video."
    }
];

// ---------- ADMIN LOGIN ----------
const adminCredentials = {
    username: "admin",
    password: "password123"
};

function loginAdmin(){
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    const error = document.getElementById('login-error');

    if(username === adminCredentials.username && password === adminCredentials.password){
        document.getElementById('admin-login-modal').style.display = 'none';
        document.getElementById('admin').style.display = 'block';
    } else {
        error.style.display = 'block';
    }
}

// Hide admin panel initially
document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('admin')){
        document.getElementById('admin').style.display = 'none';
    }
});

// ---------- DYNAMIC BLOG / YOUTUBE CARDS ----------
function loadHomeCards(){
    const blogContainer = document.getElementById('blog-container');
    if(blogContainer){
        blogPosts.forEach(post => {
            const card = document.createElement('div');
            card.classList.add('blog-card');
            card.innerHTML = `<h3>${post.title}</h3>
                              <p>${post.snippet}</p>
                              <button onclick="alert('${post.full}')">Read More</button>`;
            blogContainer.appendChild(card);
        });
    }

    const youtubeContainer = document.getElementById('youtube-container');
    if(youtubeContainer){
        youtubeVideos.forEach(video => {
            const card = document.createElement('div');
            card.classList.add('youtube-card');
            card.innerHTML = `<img src="${video.thumbnail}" alt="${video.title}">
                              <h3>${video.title}</h3>
                              <p>${video.description}</p>`;
            youtubeContainer.appendChild(card);
        });
    }
}

// Call on homepage
loadHomeCards();

// ---------- ADMIN FUNCTIONS ----------
function addBlogPost(){
    const title = document.getElementById('blog-title').value;
    const snippet = document.getElementById('blog-snippet').value;
    const full = document.getElementById('blog-full').value;

    if(title && snippet && full){
        const newPost = { title, snippet, full };
        blogPosts.push(newPost);

        // Add to homepage cards
        if(document.getElementById('blog-container')){
            const card = document.createElement('div');
            card.classList.add('blog-card');
            card.innerHTML = `<h3>${newPost.title}</h3>
                              <p>${newPost.snippet}</p>
                              <button onclick="alert('${newPost.full}')">Read More</button>`;
            document.getElementById('blog-container').appendChild(card);
        }

        // Clear inputs
        document.getElementById('blog-title').value = '';
        document.getElementById('blog-snippet').value = '';
        document.getElementById('blog-full').value = '';

        alert('Blog post added successfully!');
    } else {
        alert('Please fill all fields!');
    }
}

function addYouTubeVideo(){
    const title = document.getElementById('video-title').value;
    const thumbnail = document.getElementById('video-thumbnail').value;
    const description = document.getElementById('video-description').value;

    if(title && thumbnail && description){
        const newVideo = { title, thumbnail, description };
        youtubeVideos.push(newVideo);

        // Add to homepage cards
        if(document.getElementById('youtube-container')){
            const card = document.createElement('div');
            card.classList.add('youtube-card');
            card.innerHTML = `<img src="${thumbnail}" alt="${title}">
                              <h3>${title}</h3>
                              <p>${description}</p>`;
            document.getElementById('youtube-container').appendChild(card);
        }

        // Clear inputs
        document.getElementById('video-title').value = '';
        document.getElementById('video-thumbnail').value = '';
        document.getElementById('video-description').value = '';

        alert('YouTube video added successfully!');
    } else {
        alert('Please fill all fields!');
    }
}

// ---------- HAMBURGER MENU ----------
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
if(burger){
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
