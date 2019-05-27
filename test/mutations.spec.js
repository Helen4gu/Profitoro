import mutations from '~/store/mutations'

describe('mutations', () => {
  describe('setWorkingPomodoro', () => {
    it('should set workingPomodoro property to 30', () => {
      let state = {config: {workingPomodoro: 1}}
      mutations.setWorkingPomodoro(state, 30)
      expect(state.config).toEqual({workingPomodoro: 30})
    })
  })
  describe('setShortBreak', () => {
    it('should set shortBreak property to 5', () => {
      let state = {config: {shortBreak: 1}}
      mutations.setShortBreak(state, 5)
      expect(state.config).toEqual({shortBreak: 5})
    })
  })
  describe('setLongBreak', () => {
    it('should set longBreak property to 15', () => {
      let state = {config: {longBreak: 1}}
      mutations.setLongBreak(state, 15)
      expect(state.config).toEqual({longBreak: 15})
    })
  })
  describe('setUser', () => {
    it('should set user property to Elena', () => {
      let state = {user: ''}
      mutations.setUser(state, 'Elena')
      expect(state.user).toEqual('Elena')
    })
  })
  describe('setConfigRef', () => {
    it('should set configRef property to 1', () => {
      let state = {configRef: ''}
      mutations.setConfigRef(state, '1')
      expect(state.configRef).toEqual('1')
    })
  })
  /* describe('setStatisticsRef', () => {
    it('should set statistiscRef property to 1', () => {
      let state = {statistiscRef: ''}
      mutations.setStatisticsRef(state, '1')
      expect(state.statistiscRef).toEqual('1')
    })
  }) */
  describe('setWorkoutsRef', () => {
    it('should set workoutsRef property to 1', () => {
      let state = {workoutsRef: ''}
      mutations.setWorkoutsRef(state, '1')
      expect(state.workoutsRef).toEqual('1')
    })
  })
  describe('setDisplayName', () => {
    it('should set displayName property to 1', () => {
      let state = {displayName: ''}
      mutations.setDisplayName(state, '1')
      expect(state.displayName).toEqual('1')
    })
  })
})
