export const state = () => ({
    menu_opened: false
    
})

export const mutations = {
    openMenu(state) {
        state.menu_opened = true
    },
    closeMenu(state) {
        state.menu_opened = false
    },
    toggleMenu(state) {
        state.menu_opened = !state.menu_opened
    }
}

export const getters = {
    isOpenMenu: (state) => {
        return state.menu_opened
    }
}