import {
    Link,
    useParams,
  } from 'react-router-dom';

  const User = () => {
    const { userId } = useParams();
   console.log("coming to user");
    return (
      <>
        <h2>User: {userId}</h2>
  
        <Link to="/users">Back to Users</Link>
      </>
    );
  };

  export default User;