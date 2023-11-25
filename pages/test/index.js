import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

function Index() {
  const [int, setInt] = useState([]);
  const [cookies] = useCookies(['bearer_token']);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'alluser') {
        setInt(JSON.parse(event.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); 

  useEffect(() => {
    const personaldata = localStorage.getItem('alluser');
    if (personaldata) {
      setInt(JSON.parse(personaldata));
    }
  }, []); 

  const handleDelete = (userId) => {
    const updatedUsers = int.filter(user => user.ID !== userId);
    setInt(updatedUsers);
    // Update the localStorage with the new user list
    localStorage.setItem('alluser', JSON.stringify(updatedUsers));
  };

  const handleReload = () => {
    fetchAndUpdateData();
  };

  const fetchAndUpdateData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${cookies ? cookies.bearer_token : state.bearer_token}`);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_GET}/api/users`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result) {
          localStorage.setItem("alluser", JSON.stringify(result));
          setInt(result); // Update state with the new data
        } else {
          console.log('Error:', result.message);
        }
      })
      .catch(error => console.log('error', error));
  };

  // // Fetch data every 5 seconds (adjust the interval as needed)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetchAndUpdateData();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      {int.map((user) => (
        <div key={user.ID}>
          <p>{`ID: ${user.ID}`}</p>
          {/* Add a delete button for each user */}
          <button onClick={() => handleDelete(user.ID)}>Delete</button>
          <button onClick={() => handleReload()}>Reload</button>
        </div>
      ))}
    </div>
  );
}

export default Index;
