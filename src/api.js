// ############### mock api ###############

var usersList = [{ username: 'Nexus', email: 'nexus@me.com' }, { username: 'C3po', email: 'c3po@me.com' }, { username: 'johnny5', email: 'johnny5@me.com' }]

const api = {
  users: {

    getIndex(user) {
      var index = usersList.findIndex((obj => obj.username === user.username))
      return index
    },

    getlist() {
      return usersList
    },

    create(user) {
      usersList.push(user)
      // console.log("lista : "+ usersList[0].username)      
    },

    update(user) {
      usersList[this.getIndex(user)] = user;
    },

    remove(user) {
      usersList = usersList.filter(function (item) {
        return item.username !== user.username
      })
    },

  },
};

export default api;
