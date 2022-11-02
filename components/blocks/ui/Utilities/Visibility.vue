<template>
    <div id="visibility" class="spacer m-top-xl">
        <h3>Visibility</h3>
        <p>Control the visibility, without modifying the display, of elements with visibility utilities.</p>

        <p>Set the
            <code>visibility</code> of elements with our visibility utilities. These utility classes do not modify the
            <code>display</code> value at all and do not affect layout –
            <code>.invisible</code> elements still take up space in the page. Content will be hidden both visually and for assistive technology/screen reader users.
        </p>

        <p>Apply
            <code>.visible</code> or
            <code>.invisible</code> as needed.
        </p>

        <figure class="highlight">
            <pre><code class="language-html">&lt;div class=&quot;visible&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;invisible&quot;&gt;...&lt;/div&gt;</code></pre>
        </figure>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/visibility/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Visibility'
    }
</script>
