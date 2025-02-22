const Register = () => {
    return (
      <div className="container mt-5">
        <h2 className="text-center text-danger">Register</h2>
        <form className="w-50 mx-auto mt-4">
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter a strong password" />
          </div>
          <button type="submit" className="btn btn-danger w-100">Register</button>
        </form>
      </div>
    );
  };
  
  export default Register;

  
  