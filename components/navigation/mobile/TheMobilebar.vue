<template>
    <div class="mobile_menu">
        <div class="mobile_menu__items">
            <div class="mobile_menu__item">
                <a @click="openMenu" class="menu__togle">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <div class="mobile_menu__item">
                <img class="mobile-menu--logo" src="~assets/images/logo-small.png" alt="mediumgoal logosu">
            </div>
        </div>
        <div class="mobile_menu__right">
            <span class="mobile_menu__search_closer"><i class="fa fa-times"></i></span>
            <input type="search" name="" id="mobile_menu__search" placeholder="Blog durumlarında ara...">
            <span class="mobile_menu__search_opener"><i class="fa fa-search"></i></span>
        </div>
        <div class="mobile_menu__results">
            <h3 class="result__title">Arama sonuçları: </h3>
            <div class="results__wrapper">
                <a href="#" class="result__item">
                    <div class="result__image">
                        <img src="https://www.breakthroughcollaborative.org/wp-content/uploads/400x400.png" alt="400x400">
                    </div>
                    <div class="result__summary">
                        <h3>Vue js nedir ne değildir</h3>
                        <p class="result__preview">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit recusandae autem officiis deserunt sapiente exercitationem, soluta, aperiam incidunt, minus repellat animi unde quia modi. Repellendus sapiente praesentium similique autem.
                        </p>
                    </div>
                </a>
                <a href="#" class="result__item">
                    <div class="result__image">
                        <img src="https://www.breakthroughcollaborative.org/wp-content/uploads/400x400.png" alt="400x400">
                    </div>
                    <div class="result__summary">
                        <h3>Vue js nedir ne değildir</h3>
                        <p class="result__preview">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit recusandae autem officiis deserunt sapiente exercitationem, soluta, aperiam incidunt, minus repellat animi unde quia modi. Repellendus sapiente praesentium similique autem.
                        </p>
                    </div>
                </a>
                <a href="#" class="result__item">
                    <div class="result__image">
                        <img src="https://www.breakthroughcollaborative.org/wp-content/uploads/400x400.png" alt="400x400">
                    </div>
                    <div class="result__summary">
                        <h3>Vue js nedir ne değildir</h3>
                        <p class="result__preview">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit recusandae autem officiis deserunt sapiente exercitationem, soluta, aperiam incidunt, minus repellat animi unde quia modi. Repellendus sapiente praesentium similique autem.
                        </p>
                    </div>
                </a>
                <a href="#" class="result__item">
                    <div class="result__image">
                        <img src="https://www.breakthroughcollaborative.org/wp-content/uploads/400x400.png" alt="400x400">
                    </div>
                    <div class="result__summary">
                        <h3>Vue js nedir ne değildir</h3>
                        <p class="result__preview">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit recusandae autem officiis deserunt sapiente exercitationem, soluta, aperiam incidunt, minus repellat animi unde quia modi. Repellendus sapiente praesentium similique autem.
                        </p>
                    </div>
                </a>
                <a href="#" class="result__more">Tümünü görüntüle <i class="fa fa-chevron-right"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        openMenu() {
            this.$store.commit("navigation/openMenu")
        }
    }
}
</script>