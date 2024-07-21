document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
    loadVideos();
  });
  
  function loadArticles() {
    fetch('/api/articles')
      .then(response => response.json())
      .then(articles => {
        const articlesDiv = document.getElementById('articles');
        articlesDiv.innerHTML = '';
        articles.forEach(article => {
          const articleDiv = document.createElement('div');
          articleDiv.className = 'article';
          articleDiv.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
            <button onclick="likeArticle('${article._id}')">Like <span id="article-likes-${article._id}">${article.likes}</span></button>
            <button onclick="shareArticle('${article._id}')">Share <span id="article-shares-${article._id}">${article.shares}</span></button>
            <div>
              <input type="text" id="article-comment-${article._id}" placeholder="Add a comment">
              <button onclick="commentArticle('${article._id}')">Comment</button>
            </div>
            <div id="article-comments-${article._id}">
              ${article.comments.map(comment => `<p>${comment.content}</p>`).join('')}
            </div>
          `;
          articlesDiv.appendChild(articleDiv);
        });
      });
  }
  
  function loadVideos() {
    fetch('/api/videos')
      .then(response => response.json())
      .then(videos => {
        const videosDiv = document.getElementById('videos');
        videosDiv.innerHTML = '';
        videos.forEach(video => {
          const videoDiv = document.createElement('div');
          videoDiv.className = 'video';
          videoDiv.innerHTML = `
            <h3>${video.title}</h3>
            <video src="${video.url}" controls></video>
            <button onclick="likeVideo('${video._id}')">Like <span id="video-likes-${video._id}">${video.likes}</span></button>
            <button onclick="shareVideo('${video._id}')">Share <span id="video-shares-${video._id}">${video.shares}</span></button>
            <div>
              <input type="text" id="video-comment-${video._id}" placeholder="Add a comment">
              <button onclick="commentVideo('${video._id}')">Comment</button>
            </div>
            <div id="video-comments-${video._id}">
              ${video.comments.map(comment => `<p>${comment.content}</p>`).join('')}
            </div>
          `;
          videosDiv.appendChild(videoDiv);
        });
      });
  }
  
  function likeArticle(id) {
    fetch(`/api/articles/${id}/like`, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        document.getElementById(`article-likes-${id}`).textContent = data.likes;
      });
  }
  
  function shareArticle(id) {
    fetch(`/api/articles/${id}/share`, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        document.getElementById(`article-shares-${id}`).textContent = data.shares;
      });
  }
  
  function commentArticle(id) {
    const commentInput = document.getElementById(`article-comment-${id}`);
    const commentText = commentInput.value;
    fetch(`/api/articles/${id}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: commentText })
    })
      .then(response => response.json())
      .then(comments => {
        const commentsDiv = document.getElementById(`article-comments-${id}`);
        commentsDiv.innerHTML = comments.map(comment => `<p>${comment.content}</p>`).join('');
        commentInput.value = '';
      });
  }
  
  function likeVideo(id) {
    fetch(`/api/videos/${id}/like`, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        document.getElementById(`video-likes-${id}`).textContent = data.likes;
      });
  }
  
  function shareVideo(id) {
    fetch(`/api/videos/${id}/share`, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        document.getElementById(`video-shares-${id}`).textContent = data.shares;
      });
  }
  
  function commentVideo(id) {
    const commentInput = document.getElementById(`video-comment-${id}`);
    const
  