<template>
    <div class="widget widget_recent_entries">
        <h6 class="widget-title">Recent posts</h6>

        <ul class="list-unstyled items">
            <li v-for="recentItem in recentItems" :key="recentItem.id" class="item">
                <div class="row gutter-width-xs">
                    <div class="col-3">
                        <nuxt-link :to="recentItem.link">
                            <div class="img object-fit overflow-hidden">
                                <div class="object-fit-cover transform-scale-h">
                                    <img :src="recentItem.imgSrc" :alt="recentItem.title">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>

                    <div class="col-9 align-self-center">
                        <p class="item-t-head">
                            <nuxt-link :title="recentItem.title" :to="recentItem.link">{{ recentItem.title }}</nuxt-link>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>


    export default {
        name: 'RecentEntries',
        data() {
            return {
                recentItems: []
            }
        }
    };
</script>
