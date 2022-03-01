const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
      return {
        env: {
          mongodb_username: 'huy1234',
          mongodb_password: 'huy123',
          mongodb_cluster: 'cluster0',
          mongodb_database: 'NextjsBlog',
          url: 'http://localhost:3000/'
        }
      }
  }
  return {
    env: {
      mongodb_username: 'huy1234',
      mongodb_password: 'huy123',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'NextjsBlog',
      url: 'https://current-project-tool-1xxkgwqg2-huy270800.vercel.app/'
    }
  }
  
 
}
