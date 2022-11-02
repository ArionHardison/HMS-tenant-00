<template>
    <header id="header" class="site-header">
        <div class="wrapper">
            <div class="header-content d-flex justify-content-between">
                <div class="header-left align-self-center">
                    <div class="links">
                        <div class="links-items">
                            <div class="links-item">
                                <nuxt-link class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto" to="/services">Services</nuxt-link>
                            </div>
                            <div class="links-item">
                                <nuxt-link class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto" to="/programs-list">All Programs</nuxt-link>
                            </div>
                        </div>
                    </div>

                    <SearchModalButton />
                </div>

                <div class="header-center align-self-center">
                    <HeaderLogo :logoColor="logoColor"/>
                </div>

                <div class="header-right d-flex justify-content-end">
                    <div class="d-flex align-items-center">
                        <SearchModalButton />
                        <MenuModalButton />
                    </div>

                    <Actions />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import HeaderLogo from './HeaderLogo';
    import SearchModalButton from '~/components/Button/SearchModalButton';
    import MenuModalButton from '~/components/Button/MenuModalButton';
    import Actions from '../General/Actions';

    export default {
        name: 'Header',
        props: [ 'logoColor' ],
        components: {
            HeaderLogo,
            SearchModalButton,
            MenuModalButton,
            Actions
        }
    };
</script>
<style scoped>
    .site-header {
        z-index: 998;
    }
</style>
