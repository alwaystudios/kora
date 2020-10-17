export const CHANGE_TAB = 'CHANGE_TAB'

export const changeTab = (tab: string) => ({
  type: CHANGE_TAB,
  payload: {
    tab,
  },
})
