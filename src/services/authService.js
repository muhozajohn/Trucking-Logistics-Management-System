 const checkLogin = async (email, password) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        return {
          success: true,
          user: data
        };
      } else {
        return {
          success: false,
          message: data.error || 'Login failed'
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'Login error occurred'
      };
    }
  };
  
   const googleLogin = async (googleUser) => {
    try {
      const response = await fetch('/api/users/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(googleUser)
      });
      
      const data = await response.json();
      
      return response.ok 
        ? { success: true, user: data }
        : { success: false, message: data.error || 'Google login failed' };
    } catch (error) {
      return { success: false, message: 'Google login error' };
    }
  };
  
  export { checkLogin, googleLogin };