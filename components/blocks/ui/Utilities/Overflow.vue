<template>
    <div id="overflow" class="spacer m-top-xl">
        <h3>Overflow</h3>
        <p>Use these shorthand utilities for quickly configuring how content overflows an element.</p>
        <p>Barebones
            <code>overflow</code> functionality is provided for two values by default, and they are not responsive.
        </p>

        <div class="bd-example d-md-flex">
            <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3 bg-light" style="max-width: 260px; max-height: 100px;">
                This is an example of using
                <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll.
            </div>
            <div class="overflow-hidden p-3 bg-light" style="max-width: 260px; max-height: 100px;">
                This is an example of using
                <code>.overflow-hidden</code> on an element with set width and height dimensions.
            </div>
        </div>

        <figure class="highlight">
            <pre><code class="language-html">&lt;div class=&quot;overflow-auto&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;overflow-hidden&quot;&gt;...&lt;/div&gt;</code></pre>
        </figure>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/overflow/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Overflow'
    }
</script>
