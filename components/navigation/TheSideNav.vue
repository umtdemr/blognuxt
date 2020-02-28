<template>
    <div class="left-menu">
        <div class="left-menu__wrapper">
            <img class="left-menu--logo" src="~assets/images/logo-small.png" alt="mediumgoal logosu">

            <div class="left-menu__menu">
                <div class="menu__selection" id="menu__selection"></div>
                <nuxt-link 
                    to="/"
                    tag="a" 
                    class="menu__item" 
                    exact
                    active-class="active">
                        Blog
                </nuxt-link>
                <nuxt-link 
                    :to="{name:'about'}"
                    tag="a" 
                    class="menu__item" 
                    active-class="active">
                        Hakkımda
                </nuxt-link>
                <nuxt-link 
                    :to="{name:'contact'}"
                    tag="a" 
                    class="menu__item" 
                    active-class="active">
                        İletişim
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        selection_movement(index){
            let menu_selection = document.getElementById("menu__selection");
            var translateVal = (index) * 100;
            menu_selection.style.transform = "translateY("+translateVal+"%)";
            menu_selection.style.display = "block";
        }
    },
    created() {
        if(process.client){
            let menu_items = document.querySelectorAll(".left-menu__menu .menu__item");
            for (let index = 0; index < menu_items.length; index++) {
                var className = "active";
                if ( (" " + menu_items[index].className + " ").replace(/[\n\t]/g, " ").indexOf(" active ") > -1){
                    this.selection_movement(index)
                }
                let menu_item = menu_items[index];
                menu_item.addEventListener('click', () => {
                    this.selection_movement(index)  
                })
            }
        }
    }
}
</script>