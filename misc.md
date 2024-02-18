const handleLogin = () => {
    // Assuming you want to navigate to /uas/login?fromSignIn=true&trk=cold_join_sign_in
    router.push({
      pathname: '/uas/login',
      query: { fromSignIn: true, trk: 'cold_join_sign_in' },
    });
  };