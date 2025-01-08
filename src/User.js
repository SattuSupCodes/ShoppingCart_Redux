// users.js
export const sampleUsers = [
    { userId: 'user1', username: 'User One' },
    { userId: 'user2', username: 'User Two' },
];

export const getUserById = (userId) => {
    return sampleUsers.find(user => user.userId === userId);
};
