// src/data/initialData.js
export const usersData = [
  { id: "1", name: "Adil" },
  { id: "2", name: "John" },
  { id: "3", name: "Jane" }
];

export const initialPosts = [
  {
    id: "101",
    title: "First Post",
    userId: "1",
    content: "Hello World",
    reactions: { like: 0, love: 0, wow: 0, haha: 0, noop: 0 }
  },
  {
    id: "102",
    title: "Second Post",
    userId: "2",
    content: "Hello Again",
    reactions: { like: 0, love: 0, wow: 0, haha: 0, noop: 0 }
  }
];