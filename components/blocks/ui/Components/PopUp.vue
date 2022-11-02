<template>
    <div id="pop-up" class="spacer m-top-xl">
        <h3>Pop-up</h3>
        <p>A touchable Vue JS lightbox.</p>

        <div id="swipebox">
            <h4>Swipebox</h4>
            <p>Swipebox is a Vue JS "lightbox" plugin for desktop, mobile and tablet.</p>

            <div class="bd-example bd-example-images">
                <button @click="toggler = !toggler" class="btn btn-primary swipebox" href="#example-image">Open image</button>
                <FsLightbox :toggler="toggler" :sources="['img/ui/500x550.jpg']"></FsLightbox>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;button @click=&#x22;toggler = !toggler&#x22; class=&#x22;btn btn-primary swipebox&#x22; href=&#x22;#example-image&#x22;&#x3E;Open image&#x3C;/button&#x3E;
&#x3C;FsLightbox
    :toggler=&#x22;toggler&#x22;
    :sources=&#x22;[
&#x27;img/ui/500x550.jpg&#x27;
]&#x22;
&#x3E;
&#x3C;/FsLightbox&#x3E;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://fslightbox.com/" target="_blank">Swipebox documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    import FsLightbox from 'fslightbox-vue';

    export default {
        name: 'PopUp',
        components: { FsLightbox },
        data() {
            return {
                toggler: false
            }
        }
    }
</script>
