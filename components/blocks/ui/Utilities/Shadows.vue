<template>
    <div id="shadows" class="spacer m-top-xl">
        <h3>Shadows</h3>
        <p>Add or remove shadows to elements with box-shadow utilities.</p>

        <div id="shadows-examples">
            <h4>Examples</h4>
            <p>While shadows on components are disabled by default in Bootstrap and can be enabled via
                <code>$enable-shadows</code>, you can also quickly add or remove a shadow with our
                <code>box-shadow</code> utility classes. Includes support for
                <code>.shadow-none</code> and three default sizes (which have associated variables to match).
            </p>

            <div class="bd-example">
                <div class="shadow-none p-3 mb-4 bg-light rounded">No shadow</div>
                <div class="shadow-sm p-3 mb-4 bg-white rounded">Small shadow</div>
                <div class="shadow p-3 mb-4 bg-white rounded">Regular shadow</div>
                <div class="shadow-lg p-3 bg-white rounded">Larger shadow</div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;shadow-none p-3 mb-4 bg-light rounded&quot;&gt;No shadow&lt;/div&gt;
&lt;div class=&quot;shadow-sm p-3 mb-4 bg-white rounded&quot;&gt;Small shadow&lt;/div&gt;
&lt;div class=&quot;shadow p-3 mb-4 bg-white rounded&quot;&gt;Regular shadow&lt;/div&gt;
&lt;div class=&quot;shadow-lg p-3 bg-white rounded&quot;&gt;Larger shadow&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/shadows/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Shadows'
    }
</script>
