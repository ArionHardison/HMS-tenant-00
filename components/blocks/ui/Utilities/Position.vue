<template>
    <div id="position" class="spacer m-top-xl">
        <h3>Position</h3>
        <p>Use these shorthand utilities for quickly configuring the position of an element.</p>

        <div id="common-values">
            <h4>Common values</h4>
            <p>Quick positioning classes are available, though they are not responsive.</p>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;position-static&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;position-relative&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;position-absolute&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;position-fixed&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;position-sticky&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="fixed-top">
            <h4>Fixed top</h4>
            <p>Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.</p>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;fixed-top&quot;&gt;...&lt;/div&gt;
</code></pre>
            </figure>
        </div>

        <div id="fixed-bottom">
            <h4>Fixed bottom</h4>
            <p>Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.</p>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;fixed-bottom&quot;&gt;...&lt;/div&gt;
</code></pre>
            </figure>
        </div>

        <div id="sticky-top">
            <h4>Sticky top</h4>
            <p>Position an element at the top of the viewport, from edge to edge, but only after you scroll past it. The
                <code>.sticky-top</code> utility uses CSS’s
                <code>position: sticky</code>, which isn’t fully supported in all browsers.
            </p>
            <p>
                <strong>IE11 and IE10 will render
                    <code>position: sticky</code> as
                    <code>position: relative</code>.</strong> As such, we wrap the styles in a
                <code>@supports</code> query, limiting the stickiness to only browsers that can render it properly.
            </p>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;sticky-top&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/position/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Position'
    }
</script>
