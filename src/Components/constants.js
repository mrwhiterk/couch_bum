const serverUrl = window.location.host.includes('localhost')
  ? 'http://localhost:3001'
  : 'https://couch-bum-1234.herokuapp.com';

export default serverUrl;
