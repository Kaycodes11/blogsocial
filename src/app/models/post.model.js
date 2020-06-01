class Post {
  constructor(postObj) {
    postId: postObj.postId;
    postUUID: postObj.postUUID;
    postTitle: postObj.postTitle;
    postDesc: postObj.postDesc;
    postCreatedAt: postObj.postCreatedAt;
    postUpdatedAt: postObj.postUpdatedAt;
    postContent: postObj.postContent;
    postLabels: postObj.postLabels;
    postImagePath: postObj.postImagePath;
  }
}

export default Post;
