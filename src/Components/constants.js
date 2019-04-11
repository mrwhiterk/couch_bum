const serverUrl = window.location.host.includes('localhost')
  ? 'http://localhost:3001'
  : 'http://couch-bum-1234.herokuapp.com';

export default serverUrl;
