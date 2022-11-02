<template>
    <div id="figures" class="spacer m-top-xl">
        <h3>Figures</h3>
        <p>Examples for displaying related images and text with the figure component.</p>
        <p>Anytime you need to display a piece of content—like an image with an optional caption, consider using a
            <code>&lt;figure&gt;</code>.
        </p>
        <p>Use the included
            <code>.figure</code> ,
            <code>.figure-img</code> and
            <code>.figure-caption</code> classes to provide some baseline styles for the HTML5
            <code>&lt;figure&gt;</code> and
            <code>&lt;figcaption&gt;</code> elements. Images in figures have no explicit size, so be sure to add the
            <code>.img-fluid</code> class to your
            <code>&lt;img&gt;</code> to make it responsive.
        </p>

        <div class="bd-example">
            <figure class="figure">
                <svg class="bd-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>400x300</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dy=".3em">400x300</text>
                </svg>
                <figcaption class="figure-caption">A caption for the above image.</figcaption>
            </figure>
        </div>

        <p class="spacer m-top-lg">Aligning the figure’s caption is easy with our
            <a href="#text-alignment" class="scroll-to-id">text utilities</a>.
        </p>

        <figure class="highlight">
            <pre><code class="language-html">&lt;figure class=&quot;figure&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;figure-img img-fluid rounded&quot; alt=&quot;...&quot;&gt;
  &lt;figcaption class=&quot;figure-caption&quot;&gt;A caption for the above image.&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
        </figure>

        <div class="bd-example">
            <figure class="figure">
                <svg class="bd-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>400x300</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dy=".3em">400x300</text>
                </svg>
                <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
            </figure>
        </div>

        <figure class="highlight">
            <pre><code class="language-html">&lt;figure class=&quot;figure&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;figure-img img-fluid rounded&quot; alt=&quot;...&quot;&gt;
  &lt;figcaption class=&quot;figure-caption text-right&quot;&gt;A caption for the above image.&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
        </figure>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/content/figures/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Figures'
    }
</script>
