<template>
    <div id="content" class="spacer m-top-xl">
        <h2>Content</h2>

        <typography-block />

        <icons-block />

        <images-block />

        <tables-block />

        <figures-block />
    </div>
</template>

<script>
    import Typography from './Typography';
    import Icons from './Icons';
    import Images from './Images';
    import Tables from './Tables';
    import Figures from './Figures';

    export default {
        name: 'index',
        components: {
            'typography-block': Typography,
            'icons-block': Icons,
            'images-block': Images,
            'tables-block': Tables,
            'figures-block': Figures
        }
    }
</script>
