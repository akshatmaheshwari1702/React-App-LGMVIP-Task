import React from 'react'
const Users = ({loading,users}) => {
    let i = 0;
    return loading ? (
          <div id="main">
            
          </div>
          
        ) :
        (
          <div className='row' id="main">  
          {users.map(user =>
                      // <div className="col-sm-12 col-md-6 col-lg-4 test">
                        <div className="profile" key={i++}>
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <p>User ID: {user.id}</p>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <h4 className="email">{user.email}</h4>
                        </div>
                      // </div>
            )
          }
          </div>
        )
}

export default Users