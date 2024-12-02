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
  
  export { checkLogin };