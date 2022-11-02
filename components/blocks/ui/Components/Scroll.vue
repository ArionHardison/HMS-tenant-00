<template>
    <div id="scroll" class="spacer m-top-xl">
        <h3>Scroll</h3>
        <p>Visitors can access a specific section of the page by clicking a link. You need to add an ID attribute to your target element. Then, use that ID in value of href attribute of your
            <code>&lt;a&gt;</code> tag and add a
            <code>.scroll-to-id</code> class.
        </p>

        <div class="bd-example">
            <a class="btn btn-primary scroll-to-id" href="#content">Scroll to content</a>
        </div>

        <figure class="highlight">
            <pre><code class="language-html">&lt;a class=&quot;btn btn-primary scroll-to-id&quot; href=&quot;#content&quot;&gt;Scroll to content&lt;/a&gt;</code></pre>
        </figure>
    </div>
</template>

<script>
    export default {
        name: 'Scroll'
    }
</script>
