import { createContext } from "react";

export const PostDataContext = createContext();

const PostContext = ({ children }) => {
  const posts = [
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
      age: 24,
      city: "Pune",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@example.com",
      age: 22,
      city: "Ahmedabad",
    },
    {
      id: 3,
      name: "Rahul Verma",
      email: "rahul.verma@example.com",
      age: 26,
      city: "Delhi",
    },
    {
      id: 4,
      name: "Sneha Iyer",
      email: "sneha.iyer@example.com",
      age: 23,
      city: "Bangalore",
    },
    {
      id: 5,
      name: "Arjun Mehta",
      email: "arjun.mehta@example.com",
      age: 25,
      city: "Mumbai",
    },
  ];
  return (
    <div>
      <PostDataContext.Provider value={posts}>
        {children}
      </PostDataContext.Provider>
    </div>
  );
};

export default PostContext;
