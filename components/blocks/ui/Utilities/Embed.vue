<template>
    <div id="embed" class="spacer m-top-xl">
        <h3>Embed</h3>
        <p>Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device.</p>

        <div id="embed-about">
            <h4>About</h4>
            <p>Rules are directly applied to
                <code>&lt;iframe&gt;</code>,
                <code>&lt;embed&gt;</code>,
                <code>&lt;video&gt;</code>, and
                <code>&lt;object&gt;</code> elements; optionally use an explicit descendant class
                <code>.embed-responsive-item</code> when you want to match the styling for other attributes.
            </p>
            <p>
                <strong>Pro-Tip!</strong> You don’t need to include
                <code>frameborder="0"</code> in your
                <code>&lt;iframe&gt;</code>s as we override that for you.
            </p>
        </div>

        <div id="embed-example" class="spacer m-top-lg">
            <h4>Example</h4>
            <p>Wrap any embed like an
                <code>&lt;iframe&gt;</code> in a parent element with
                <code>.embed-responsive</code> and an aspect ratio. The
                <code>.embed-responsive-item</code> isn’t strictly required, but we encourage it.
            </p>

            <div class="bd-example">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/lSNmfy_KOJg" allowfullscreen></iframe>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;embed-responsive embed-responsive-16by9&quot;&gt;
  &lt;iframe class=&quot;embed-responsive-item&quot; src=&quot;https://www.youtube.com/embed/lSNmfy_KOJg&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="aspect-ratios">
            <h4>Aspect ratios</h4>
            <p>Aspect ratios can be customized with modifier classes. By default the following ratio classes are provided:</p>

            <figure class="highlight">
                <pre><code class="language-html">&lt;!-- 21:9 aspect ratio --&gt;
&lt;div class=&quot;embed-responsive embed-responsive-21by9&quot;&gt;
  &lt;iframe class=&quot;embed-responsive-item&quot; src=&quot;...&quot;&gt;&lt;/iframe&gt;
&lt;/div&gt;

&lt;!-- 16:9 aspect ratio --&gt;
&lt;div class=&quot;embed-responsive embed-responsive-16by9&quot;&gt;
  &lt;iframe class=&quot;embed-responsive-item&quot; src=&quot;...&quot;&gt;&lt;/iframe&gt;
&lt;/div&gt;

&lt;!-- 4:3 aspect ratio --&gt;
&lt;div class=&quot;embed-responsive embed-responsive-4by3&quot;&gt;
  &lt;iframe class=&quot;embed-responsive-item&quot; src=&quot;...&quot;&gt;&lt;/iframe&gt;
&lt;/div&gt;

&lt;!-- 1:1 aspect ratio --&gt;
&lt;div class=&quot;embed-responsive embed-responsive-1by1&quot;&gt;
  &lt;iframe class=&quot;embed-responsive-item&quot; src=&quot;...&quot;&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/embed/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Embed'
    }
</script>
