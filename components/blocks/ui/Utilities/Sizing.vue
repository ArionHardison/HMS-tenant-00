<template>
    <div id="sizing" class="spacer m-top-xl">
        <h3>Sizing</h3>
        <p>Easily make an element as wide or as tall with our width and height utilities.</p>

        <div id="relative-to-the-parent">
            <h4>Relative to the parent</h4>
            <p>Includes support for
                <code>25%</code>,
                <code>50%</code>,
                <code>75%</code>,
                <code>100%</code>, and
                <code>auto</code> by default.
            </p>

            <div class="bd-example">
                <div class="w-25 p-3 bd-highlight">Width 25%</div>
                <div class="w-50 p-3 bd-highlight">Width 50%</div>
                <div class="w-75 p-3 bd-highlight">Width 75%</div>
                <div class="w-100 p-3 bd-highlight">Width 100%</div>
                <div class="w-auto p-3 bd-highlight">Width auto</div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;w-25 p-3 bd-highlight&quot;&gt;Width 25%&lt;/div&gt;
&lt;div class=&quot;w-50 p-3 bd-highlight&quot;&gt;Width 50%&lt;/div&gt;
&lt;div class=&quot;w-75 p-3 bd-highlight&quot;&gt;Width 75%&lt;/div&gt;
&lt;div class=&quot;w-100 p-3 bd-highlight&quot;&gt;Width 100%&lt;/div&gt;
&lt;div class=&quot;w-auto p-3 bd-highlight&quot;&gt;Width auto&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="bd-highlight" style="height: 100px;">
                    <div class="h-25 d-inline-block bd-highlight" style="width: 120px">Height 25%</div>
                    <div class="h-50 d-inline-block bd-highlight" style="width: 120px">Height 50%</div>
                    <div class="h-75 d-inline-block bd-highlight" style="width: 120px">Height 75%</div>
                    <div class="h-100 d-inline-block bd-highlight" style="width: 120px">Height 100%</div>
                    <div class="h-auto d-inline-block bd-highlight" style="width: 120px">Height auto</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;bd-highlight&quot; style=&quot;height: 100px;&quot;&gt;
    &lt;div class=&quot;h-25 d-inline-block bd-highlight&quot; style=&quot;width: 120px&quot;&gt;Height 25%&lt;/div&gt;
    &lt;div class=&quot;h-50 d-inline-block bd-highlight&quot; style=&quot;width: 120px&quot;&gt;Height 50%&lt;/div&gt;
    &lt;div class=&quot;h-75 d-inline-block bd-highlight&quot; style=&quot;width: 120px&quot;&gt;Height 75%&lt;/div&gt;
    &lt;div class=&quot;h-100 d-inline-block bd-highlight&quot; style=&quot;width: 120px&quot;&gt;Height 100%&lt;/div&gt;
    &lt;div class=&quot;h-auto d-inline-block bd-highlight&quot; style=&quot;width: 120px&quot;&gt;Height auto&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <p>You can also use
                <code>min-width: 100%; max-width: 100%;</code> and
                <code>max-height: 100%;</code> utilities as needed.
            </p>

            <svg class="bd-placeholder-img mw-100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Max-width 100%">
                <title>Placeholder</title>
                <rect width="100%" height="100%"></rect>
                <text x="50%" y="50%" fill="#ffffff" dy=".3em">Max-width 100%</text>
            </svg>

            <figure class="highlight">
                <pre><code class="language-html">&lt;img src=&quot;...&quot; class=&quot;mw-100&quot; alt=&quot;...&quot;&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="bd-highlight" style="height: 100px;">
                    <div class="mh-100 bd-highlight" style="width: 100px; height: 200px;">Max-height 100%</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;bd-highlight&quot; style=&quot;height: 100px;&quot;&gt;
    &lt;div class=&quot;mh-100 bd-highlight&quot; style=&quot;width: 100px; height: 200px;&quot;&gt;Max-height 100%&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="relative-to-the-viewport">
            <h4>Relative to the viewport</h4>
            <p>You can also use utilities to set the width and height relative to the viewport.</p>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;min-vw-100&quot;&gt;Min-width 100vw&lt;/div&gt;
&lt;div class=&quot;min-vh-100&quot;&gt;Min-height 100vh&lt;/div&gt;
&lt;div class=&quot;vw-100&quot;&gt;Width 100vw&lt;/div&gt;
&lt;div class=&quot;vh-100&quot;&gt;Height 100vh&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/sizing/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sizing'
    }
</script>
