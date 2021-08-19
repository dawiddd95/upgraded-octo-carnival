export const routes = {
    users: process.env.PUBLIC_URL,
    userDetails: `${process.env.PUBLIC_URL}/user/:userId`,
    userPost: '/user/:userId/post/:postId',
};