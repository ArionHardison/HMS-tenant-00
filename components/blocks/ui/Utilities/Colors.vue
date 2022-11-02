<template>
    <div id="colors" class="spacer m-top-xl">
        <h3>Colors</h3>
        <p>Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.</p>

        <div id="text-color">
            <h4>Text color</h4>

            <div class="bd-example">
                <p class="text-primary">.text-primary</p>
                <p class="text-secondary">.text-secondary</p>
                <p class="text-success">.text-success</p>
                <p class="text-danger">.text-danger</p>
                <p class="text-warning">.text-warning</p>
                <p class="text-info">.text-info</p>
                <p class="text-light bg-dark">.text-light</p>
                <p class="text-dark">.text-dark</p>
                <p class="text-body">.text-body</p>
                <p class="text-muted">.text-muted</p>
                <p class="text-white bg-dark">.text-white</p>
                <p class="text-black-50">.text-black-50</p>
                <p class="text-white-50 bg-dark">.text-white-50</p>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;p class=&quot;text-primary&quot;&gt;.text-primary&lt;/p&gt;
&lt;p class=&quot;text-secondary&quot;&gt;.text-secondary&lt;/p&gt;
&lt;p class=&quot;text-success&quot;&gt;.text-success&lt;/p&gt;
&lt;p class=&quot;text-danger&quot;&gt;.text-danger&lt;/p&gt;
&lt;p class=&quot;text-warning&quot;&gt;.text-warning&lt;/p&gt;
&lt;p class=&quot;text-info&quot;&gt;.text-info&lt;/p&gt;
&lt;p class=&quot;text-light bg-dark&quot;&gt;.text-light&lt;/p&gt;
&lt;p class=&quot;text-dark&quot;&gt;.text-dark&lt;/p&gt;
&lt;p class=&quot;text-body&quot;&gt;.text-body&lt;/p&gt;
&lt;p class=&quot;text-muted&quot;&gt;.text-muted&lt;/p&gt;
&lt;p class=&quot;text-white bg-dark&quot;&gt;.text-white&lt;/p&gt;
&lt;p class=&quot;text-black-50&quot;&gt;.text-black-50&lt;/p&gt;
&lt;p class=&quot;text-white-50 bg-dark&quot;&gt;.text-white-50&lt;/p&gt;</code></pre>
            </figure>

            <p>Contextual text classes also work well on anchors with the provided hover and focus states.
                <strong>Note that the
                    <code>.text-white</code> and
                    <code>.text-muted</code> class has no additional link styling beyond underline.</strong>
            </p>

            <div class="bd-example">
                <p>
                    <a href="#" class="text-primary">Primary link</a>
                </p>
                <p>
                    <a href="#" class="text-secondary">Secondary link</a>
                </p>
                <p>
                    <a href="#" class="text-success">Success link</a>
                </p>
                <p>
                    <a href="#" class="text-danger">Danger link</a>
                </p>
                <p>
                    <a href="#" class="text-warning">Warning link</a>
                </p>
                <p>
                    <a href="#" class="text-info">Info link</a>
                </p>
                <p>
                    <a href="#" class="text-light bg-dark">Light link</a>
                </p>
                <p>
                    <a href="#" class="text-dark">Dark link</a>
                </p>
                <p>
                    <a href="#" class="text-muted">Muted link</a>
                </p>
                <p>
                    <a href="#" class="text-white bg-dark">White link</a>
                </p>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-primary&quot;&gt;Primary link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-secondary&quot;&gt;Secondary link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-success&quot;&gt;Success link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-danger&quot;&gt;Danger link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-warning&quot;&gt;Warning link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-info&quot;&gt;Info link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-light bg-dark&quot;&gt;Light link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-dark&quot;&gt;Dark link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-muted&quot;&gt;Muted link&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;text-white bg-dark&quot;&gt;White link&lt;/a&gt;&lt;/p&gt;</code></pre>
            </figure>
        </div>

        <div id="background-color">
            <h4>Background color</h4>
            <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities
                <strong>do not set
                    <code>color</code></strong>, so in some cases you’ll want to use
                <code>.text-*</code> utilities.
            </p>

            <div class="bd-example">
                <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
                <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
                <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
                <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
                <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
                <div class="p-3 mb-2 bg-info text-white">.bg-info</div>
                <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
                <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
                <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
                <div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;p-3 mb-2 bg-primary text-white&quot;&gt;.bg-primary&lt;/div&gt;
&lt;div class=&quot;p-3 mb-2 bg-secondary text-white&quot;&gt;.bg-secondary&lt;/div&gt;
&lt;div class=&quot;p-3 mb-2 bg-success text-white&quot;&gt;.bg-success&lt;/div&gt;
&lt;div class=&quot;p-3 mb-2 bg-danger text-white&quot;&gt;.bg-danger&lt;/div&gt;
&lt;div class=&quot;p-3 mb-2 bg-warning text-dark&quot;&gt;.bg-warning&lt;/div&gt;
&lt;div class=&quot;p-3 mb-2 bg-info text-white&quot;&gt;.bg-info&lt;/div&gt;
&lt;div class=&quot;p-3 mb-2 bg-light text-dark&quot;&gt;.bg-light&lt;/div&gt;
&lt;div class=&quot;p-3 mb-2 bg-dark text-white&quot;&gt;.bg-dark&lt;/div&gt;
&lt;div class=&quot;p-3 mb-2 bg-white text-dark&quot;&gt;.bg-white&lt;/div&gt;
&lt;div class=&quot;p-3 mb-2 bg-transparent text-dark&quot;&gt;.bg-transparent&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/colors/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Colors'
    }
</script>
