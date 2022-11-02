<template>
    <nav class="menu-secondary">
        <ul class="nav">
            <li class="nav-item">
                <template v-if="twitter">
                    <a :title="twitter" :href="twitter"><i class="fab fa-twitter"></i></a>
                </template>
            </li>
        </ul>
    </nav>
</template>

<script>

    export default {
        name: 'FooterMenuSecondary',
    };
</script>
