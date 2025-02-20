const blogContainer = document.getElementById("blog-container");



const blogPosts = [
  {
    title: "KidMin Thanksgiving Ideas to Grow Thankful Hearts",
    image: "./images/blog_post_1.png",
    date: "6/11/2024",
    author: "Alysa Reutov",
    description: "As we prepare to celebrate Thanksgiving in a few weeks, it’s the perfect time to...",
    link: "https://blog.worshiphousekids.com/kidmin-thanksgiving-ideas-to-grow-thankful-hearts/"
  },
  {
    title: "Creative Ways to Engage Kids in Worship",
    image: "./images/blog_post_2.png",
    date: "10/11/2024",
    author: "John Doe",
    description: "Discover engaging ways to involve children in worship sessions effectively...",
    link: "https://blog.example.com/creative-ways-to-engage-kids-in-worship"
  },
  {
    title: "Fun Christmas Activities for Sunday School",
    image: "./images/blog_post_2.png",
    date: "15/11/2024",
    author: "Jane Smith",
    description: "Plan exciting and meaningful Christmas activities for kids in Sunday school...",
    link: "https://blog.example.com/fun-christmas-activities-for-sunday-school"
  },
  {
    title: "Fun Christmas Activities for Sunday School",
    image: "./images/blog_post_1.png",
    date: "15/11/2024",
    author: "Jane Smith",
    description: "Plan exciting and meaningful Christmas activities for kids in Sunday school...",
    link: "https://blog.example.com/fun-christmas-activities-for-sunday-school"
  }
];


blogPosts.forEach(post => {
  const blogHTML = `
    <div class="blog_post ">
        <div class="blog_content flex">
            <img src="${post.image}" alt="blog image" class="blog_post_image" />
            <div class="post_content">
                <div class="blog-post-meta">
                    <span class="blog-date">${post.date}</span> | <span>By ${post.author}</span>
                </div>
                <h5>${post.title}</h5>
                <p class="blog_description white">${post.description}</p>
                <a class="read-more white"" href="${post.link}" target="_blank">
                    Read More 
               <svg fill="#ffffff" width="14px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="rotate(45)">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M11.293,1.293a1,1,0,0,1,1.414,0l5,5a1,1,0,0,1-1.414,1.414L13,4.414V22a1,1,0,0,1-2,0V4.414L7.707,7.707A1,1,0,0,1,6.293,6.293Z"/>

</g>

</svg>
                </a>
            </div>
        </div>
    </div>
  `;

  blogContainer.innerHTML += blogHTML;
});
