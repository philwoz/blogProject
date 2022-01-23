

export const login = (user, setLogonUser) => {
    try {
        const response = fetch("http://localhost:5000/user/login", {
          method: "POST",
          body: user ,
        });
        const data =  response.json();
        setLogonUser(data)
      } catch (error) {
        console.log(error)
      }
}
