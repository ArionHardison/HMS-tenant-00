<template>
    <div id="comments" class="comments-area spacer m-top-xl">
        <div class="block spacer m-top-xl">
            <div id="respond" class="comment-respond">
                <h3 id="reply-title" class="comment-reply-title">Leave a reply <nuxt-link rel="nofollow" id="cancel-comment-reply-link" class="btn btn-link border-0 p-0 min-w-auto link-no-space" to="/blog-single-post" style="display:none;">Cancel reply</nuxt-link></h3>

                <CommentForm />
            </div>
        </div>
    </div>
</template>

<script>
    import CommentForm from '~/components/Forms/CommentForm';

    export default {
        name: 'Comments',
        components: {
            CommentForm
        }
    };
</script>
