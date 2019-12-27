import ApiComm from '../ApiComm'

export default {
  getList: () => {
    return ApiComm.$http.get('/oauth/app')
  },
  create: (appInfo) => {
    return ApiComm.$http.put('/oauth/app', appInfo)
  },
  delete: (appIds) => {
    return ApiComm.$http.delete('/oauth/app', {
      data: appIds
    })
  },
  update: (appInfo) => {
    return ApiComm.$http.patch('/oauth/app', appInfo)
  },
  getNewSecret: (appId) => {
    return ApiComm.$http.get('/oauth/app/update-secret/' + appId)
  },
  query: (query) => {
    return ApiComm.$http.post('/oauth/app', query)
  }
}
