const serverUrl = window.location.host.includes('localhost')
  ? 'http://localhost:3001'
  : 'example';

export default serverUrl;
