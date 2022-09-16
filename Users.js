let Users = [
    { id : 1, usernname : "ben", password : "benfain1234" , admin: true ,products:[] },
    { id : 2, usernname : "almog", password : "almog12345", admin: true,products:[]},
    { id : 3, usernname : "maor", password : "maor12345", admin: false ,products:[]},
    { id : 4, usernname : "chen", password : "chen12345", admin: false ,products:[]}
  ];

exports.FindUser = (Username, Password) => {
    const result = Users.find(item => item.usernname === Username);
    if(result!=null){
        if(result.password == Password){
            return result;
        }else {
            return null;
        }

    }
}

exports.GetUsers = () => {
    return Users;
}

exports.GetUserById=(id) =>{
    const result = Users.find(item => item.id === id);
    if(result){
        return result;
    }else {
        console.log("cant find user by this id");
    }
}



