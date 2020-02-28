export const state = () => ({
    menu_opened: false
    
})

export const mutations = {
    openMenu(state) {
        state.menu_opened = true
    }
}

export const getters = {
    isOpenMenu: (state) => {
        return state.menu_opened
    }
}