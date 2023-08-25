<template>
    <section id="page-title" class="block with-img" :style="(background ? (background.length>11 ? {backgroundImage: `url(${background})`} : '') : '')">
        <template v-if="background.length===11">
            <div class="video-container">
                <iframe :src="`https://www.youtube.com/embed/${background}?autoplay=1&mute=1&loop=1&&rel=0controls=0&showinfo=0&playlist=${background}`"></iframe>
            </div>
        </template>
        <div class="wrapper text-center d-flex" :class="background.length===11 ? 'absolute-position' : ''">
            <div class="align-self-center w-100">
                <div class="title">
                    <h1 class="large">{{title}}</h1>
                </div>

                <div class="description spacer p-top-lg">
                    <p>{{desc}}</p>
                </div>

                <div data-v-7a396f28="" class="spacer p-top-lg no-space"><a  href="#about-us" class="btn btn-primary">Learn More</a></div>

            </div>
        </div>

        <div class="page-title-bg-color"></div>
    </section>
</template>

<script>
import LanguageSelector from '../General/LanguageSelector';

export default {
    name: 'PageTitle',
    props: ['title', 'desc', 'background'],
    components: {
        LanguageSelector
    }
};
</script>
<style scoped>
#page-title {
  overflow: hidden;
}
.video-container{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
iframe {
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
}

@media (min-aspect-ratio: 16/9) {
    .video-container iframe {
        height: 56.25vw;
    }
}

@media (max-aspect-ratio: 16/9) {
    .video-container iframe {
        width: 177.78vh;
    }
}
</style>
<style>
    .absolute-position{
        position: absolute !important;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10000 !important;
    }
</style>
