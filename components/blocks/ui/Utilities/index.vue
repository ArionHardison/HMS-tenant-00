<template>
    <div id="utilities" class="spacer m-top-xl">
        <h2>Utilities</h2>

        <borders-block />

        <clearfix-block />

        <colors-block />

        <display-block />

        <embed-block />

        <flex-block />

        <float-block />

        <overflow-block />

        <position-block />

        <shadows-block />

        <sizing-block />

        <spacing-block />

        <stretched-link-block />

        <text-utility-block />

        <vertical-alignment-block />

        <visibility-block />
    </div>
</template>

<script>
    import Borders from './Borders';
    import Clearfix from './Clearfix';
    import Colors from './Colors';
    import Display from './Display';
    import Embed from './Embed';
    import Flex from './Flex';
    import Float from './Float';
    import Overflow from './Overflow';
    import Position from './Position';
    import Shadows from './Shadows';
    import Sizing from './Sizing';
    import Spacing from './Spacing';
    import StretchedLink from './StretchedLink';
    import VerticalAlignment from './VerticalAlignment';
    import Visibility from './Visibility';
    import TextUtility from './Text';

    export default {
        name: 'index',
        components: {
            'borders-block': Borders,
            'clearfix-block': Clearfix,
            'colors-block': Colors,
            'display-block': Display,
            'embed-block': Embed,
            'flex-block': Flex,
            'float-block': Float,
            'overflow-block': Overflow,
            'position-block': Position,
            'shadows-block': Shadows,
            'sizing-block': Sizing,
            'spacing-block': Spacing,
            'stretched-link-block': StretchedLink,
            'text-utility-block': TextUtility,
            'vertical-alignment-block': VerticalAlignment,
            'visibility-block': Visibility
        }
    }
</script>
