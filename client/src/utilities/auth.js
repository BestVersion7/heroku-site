import jwt from 'jsonwebtoken'

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

export const auth = {
    getPayloadUsername() {
        const token = getCookie('jwt')
        const {username} = jwt.decode(token)
        return username
    },
    getPayloadId() {
        const token = getCookie('jwt')
        const {_id} = jwt.decode(token)
        return _id
    }
}
