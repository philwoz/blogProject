export const fetchUsers = async (setUsers) => {
  try {
    const response = await fetch("http://localhost:5000/user", {
      method: "GET",
    });
    const data = await response.json();
    setUsers(data)
  } catch (error) {
    console.log(error)
  }
};


export const fetchPosts = async (setPosts) => {
  try {
    const response = await fetch("http://localhost:5000/posts", {
      method: "GET",
    });
    const data = await response.json();
    setPosts(data);
  } catch (error) {
    console.log(error)
  }
};
