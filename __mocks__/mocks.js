// require('./react-native-async-storage-mock')
require('./react-native-safe-area-context')
require('./responsive-react-native')
require('./flashlist')

global.beforeEach(() => {
  jest.resetAllMocks()
})
