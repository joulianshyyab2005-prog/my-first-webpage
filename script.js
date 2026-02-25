function fetchUserProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Alex Smith", email: "alex@example.com" });
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ postId: 1, title: 'Hello World', content: 'First post!' }]);
    }, 1500);
  });
}

function fetchPostComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) return reject(new Error("Failed to load comments")); // Task F
      resolve([{ commentId: 10, username: 'coder1', comment: 'Nice!' }]);
    }, 2000);
  });
}document.getElementById('sequentialBtn').addEventListener('click', async () => {
  const data = await fetchDataSequentially(1);
  if (data) displayResults(data);
});

document.getElementById('parallelBtn').addEventListener('click', async () => {
  const data = await fetchDataInParallel(1);
  if (data) displayResults(data);
});// --- PART 1: Data Fetching Functions (The "Server") ---
function fetchUserProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Alex Smith", email: "alex@example.com" });
    }, 1000); // 1 second delay
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ postId: 1, title: 'Hello World', content: 'First post!' }]);
    }, 1500); // 1.5 second delay
  });
}

function fetchPostComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Task F: 30% chance of failure
      if (Math.random() < 0.3) return reject(new Error("Failed to load comments")); 
      resolve([{ commentId: 10, username: 'coder1', comment: 'Nice!' }]);
    }, 2000); // 2 second delay
  });
}

// --- PART 2: The Logic (Sequential vs Parallel) ---

// Task D: Sequential Fetching
async function fetchDataSequentially(userId) {
  const startTime = Date.now();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = "Fetching sequentially...";

  try {
    const user = await fetchUserProfile(userId);
    const posts = await fetchUserPosts(userId);
    
    for (const post of posts) {
      try {
        post.comments = await fetchPostComments(post.postId);
      } catch (err) {
        post.comments = []; // Handle error gracefully
      }
    }

    const duration = Date.now() - startTime;
    return { user, posts, duration };
  } catch (error) {
    resultsDiv.innerHTML = "Error: " + error.message;
  }
}

// Task E: Parallel Fetching
async function fetchDataInParallel(userId) {
  const startTime = Date.now();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = "Fetching in parallel...";

  try {
    // Start user and posts at the same time using Promise.all
    const [user, posts] = await Promise.all([
      fetchUserProfile(userId),
      fetchUserPosts(userId)
    ]);

    // Fetch comments for all posts in parallel
    await Promise.all(posts.map(async (post) => {
      try {
        post.comments = await fetchPostComments(post.postId);
      } catch (err) {
        post.comments = [];
      }
    }));

    const duration = Date.now() - startTime;
    return { user, posts, duration };
  } catch (error) {
    resultsDiv.innerHTML = "Error: " + error.message;
  }
}

// --- PART 3: Display and Connection ---

// Task J: Helper function to show data on the screen
function displayResults(data) {
  const resultsDiv = document.getElementById('results');
  let html = `<h2>${data.user.name}'s Profile</h2>`;
  html += `<p>Fetched in: <strong>${data.duration}ms</strong></p>`;

  data.posts.forEach(post => {
    html += `
      <div class="post">
        <strong>${post.title}</strong>
        <p>${post.content}</p>
        <ul>
          ${post.comments.length > 0 
            ? post.comments.map(c => `<li>${c.username}: ${c.comment}</li>`).join('')
            : '<li>No comments loaded</li>'}
        </ul>
      </div>`;
  });
  resultsDiv.innerHTML = html;
}

// Task I: Connect Buttons to Functions
document.getElementById('sequentialBtn').addEventListener('click', async () => {
  const data = await fetchDataSequentially(1);
  if (data) displayResults(data);
});

document.getElementById('parallelBtn').addEventListener('click', async () => {
  const data = await fetchDataInParallel(1);
  if (data) displayResults(data);
});