<template>
    <div class="widget widget_recent_comments">
        <h6 class="widget-title">Recent Comments</h6>

        <ul id="recentcomments">
            <li v-for="recentItem in recentItems" :key="recentItem.id" class="recentcomments">
                <span class="comment-author-link">{{ recentItem.author }}</span> on
                <nuxt-link :title="recentItem.author" :to="recentItem.link">{{ recentItem.comment }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>


    export default {
        name: 'RecentComments',
        data() {
            return {
                recentItems: []
            }
        }
    };
</script>
