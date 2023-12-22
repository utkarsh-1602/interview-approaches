# Using Async Await Function 
I'm building a social media platform.
Let's say, for example, you have a feature that allows users to post updates and also retrieve a list of their friends' recent posts to display on their timeline. In this scenario:

- When a user posts an update, you might need to perform asynchronous operations like uploading media files, updating the user's post data in the database, and notifying their friends about the new post.
- To display the user's timeline, you need to fetch recent posts from all their friends. This involves making asynchronous requests to the server to retrieve the data.

The async functions would handle the asynchronous operations, ensuring that each step waits for the previous one to complete before moving on.