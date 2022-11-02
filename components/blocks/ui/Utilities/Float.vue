<template>
    <div id="float" class="spacer m-top-xl">
        <h3>Float</h3>
        <p>Toggle floats on any element, across any breakpoint, using our responsive float utilities.</p>

        <div id="float-classes">
            <h4>Classes</h4>
            <p>Toggle a float with a class:</p>

            <div class="bd-example">
                <div class="float-left">Float left on all viewport sizes</div>
                <br>
                <div class="float-right">Float right on all viewport sizes</div>
                <br>
                <div class="float-none">Don't float on all viewport sizes</div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;float-left&quot;&gt;Float left on all viewport sizes&lt;/div&gt;&lt;br&gt;
&lt;div class=&quot;float-right&quot;&gt;Float right on all viewport sizes&lt;/div&gt;&lt;br&gt;
&lt;div class=&quot;float-none&quot;&gt;Don't float on all viewport sizes&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="float-responsive">
            <h4>Responsive</h4>
            <p>Responsive variations also exist for each
                <code>float</code> value.
            </p>

            <div class="bd-example">
                <div class="float-sm-left">Float left on viewports sized SM (small) or wider</div>
                <br>
                <div class="float-md-left">Float left on viewports sized MD (medium) or wider</div>
                <br>
                <div class="float-lg-left">Float left on viewports sized LG (large) or wider</div>
                <br>
                <div class="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div>
                <br>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;float-sm-left&quot;&gt;Float left on viewports sized SM (small) or wider&lt;/div&gt;&lt;br&gt;
&lt;div class=&quot;float-md-left&quot;&gt;Float left on viewports sized MD (medium) or wider&lt;/div&gt;&lt;br&gt;
&lt;div class=&quot;float-lg-left&quot;&gt;Float left on viewports sized LG (large) or wider&lt;/div&gt;&lt;br&gt;
&lt;div class=&quot;float-xl-left&quot;&gt;Float left on viewports sized XL (extra-large) or wider&lt;/div&gt;&lt;br&gt;</code></pre>
            </figure>

            <p>Here are all the support classes;</p>

            <ul>
                <li>
                    <code>.float-left</code>
                </li>
                <li>
                    <code>.float-right</code>
                </li>
                <li>
                    <code>.float-none</code>
                </li>
                <li>
                    <code>.float-sm-left</code>
                </li>
                <li>
                    <code>.float-sm-right</code>
                </li>
                <li>
                    <code>.float-sm-none</code>
                </li>
                <li>
                    <code>.float-md-left</code>
                </li>
                <li>
                    <code>.float-md-right</code>
                </li>
                <li>
                    <code>.float-md-none</code>
                </li>
                <li>
                    <code>.float-lg-left</code>
                </li>
                <li>
                    <code>.float-lg-right</code>
                </li>
                <li>
                    <code>.float-lg-none</code>
                </li>
                <li>
                    <code>.float-xl-left</code>
                </li>
                <li>
                    <code>.float-xl-right</code>
                </li>
                <li>
                    <code>.float-xl-none</code>
                </li>
            </ul>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/float/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Float'
    }
</script>
