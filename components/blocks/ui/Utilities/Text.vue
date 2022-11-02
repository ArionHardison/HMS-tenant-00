<template>
    <div id="text" class="spacer m-top-xl">
        <h3>Text</h3>
        <p>Examples for common text utilities to control alignment, wrapping, weight, and more.</p>

        <div id="text-alignment">
            <h4>Text alignment</h4>
            <p>Easily realign text to components with text alignment classes.</p>

            <div class="bd-example">
                <p class="text-left">Left aligned text on all viewport sizes.</p>
                <p class="text-center">Center aligned text on all viewport sizes.</p>
                <p class="text-right">Right aligned text on all viewport sizes.</p>

                <p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;p class=&quot;text-left&quot;&gt;Left aligned text on all viewport sizes.&lt;/p&gt;
&lt;p class=&quot;text-center&quot;&gt;Center aligned text on all viewport sizes.&lt;/p&gt;
&lt;p class=&quot;text-right&quot;&gt;Right aligned text on all viewport sizes.&lt;/p&gt;

&lt;p class=&quot;text-justify&quot;&gt;Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.&lt;/p&gt;</code></pre>
            </figure>
        </div>

        <div id="text-wrapping-and-overflow">
            <h4>Text wrapping and overflow</h4>
            <p>Wrap text with a
                <code>.text-wrap</code> class.
            </p>

            <div class="bd-example">
                <div class="badge badge-primary text-wrap" style="width: 6rem;">
                    This text should wrap.
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;badge badge-primary text-wrap&quot; style=&quot;width: 6rem;&quot;&gt;
  This text should wrap.
&lt;/div&gt;</code></pre>
            </figure>

            <p>Prevent text from wrapping with a
                <code>.text-nowrap</code> class.
            </p>

            <div class="bd-example">
                <div class="text-nowrap" style="width: 8rem;">
                    This text should overflow the parent.
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;text-nowrap&quot; style=&quot;width: 8rem;&quot;&gt;
  This text should overflow the parent.
&lt;/div&gt;</code></pre>
            </figure>

            <p>For longer content, you can add a
                <code>.text-truncate</code> class to truncate the text with an ellipsis.
                <strong>Requires
                    <code>display: inline-block</code> or
                    <code>display: block</code>.</strong>
            </p>

            <div class="bd-example">

                <div class="row">
                    <div class="col-2 text-truncate">
                        Praeterea iter est quasdam res quas ex communi.
                    </div>
                </div>


                <span class="d-inline-block text-truncate" style="max-width: 150px;">
                    Praeterea iter est quasdam res quas ex communi.
                </span>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;!-- Block level --&gt;
&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col-2 text-truncate&quot;&gt;
    Praeterea iter est quasdam res quas ex communi.
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Inline level --&gt;
&lt;span class=&quot;d-inline-block text-truncate&quot; style=&quot;max-width: 150px;&quot;&gt;
  Praeterea iter est quasdam res quas ex communi.
&lt;/span&gt;</code></pre>
            </figure>
        </div>

        <div id="word-break">
            <h4>Word break</h4>
            <p>Prevent long strings of text from breaking your components’ layout by using
                <code>.text-break</code> to set
                <code>overflow-wrap: break-word</code> (and
                <code>word-break: break-word</code> for IE &amp; Edge compatibility).
            </p>

            <div class="bd-example">
                <p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;p class=&quot;text-break&quot;&gt;mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm&lt;/p&gt;
</code></pre>
            </figure>
        </div>

        <div id="text-transform">
            <h4>Text transform</h4>
            <p>Transform text in components with text capitalization classes.</p>

            <div class="bd-example">
                <p class="text-lowercase">Lowercased text.</p>
                <p class="text-uppercase">Uppercased text.</p>
                <p class="text-capitalize">CapiTaliZed text.</p>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;p class=&quot;text-lowercase&quot;&gt;Lowercased text.&lt;/p&gt;
&lt;p class=&quot;text-uppercase&quot;&gt;Uppercased text.&lt;/p&gt;
&lt;p class=&quot;text-capitalize&quot;&gt;CapiTaliZed text.&lt;/p&gt;</code></pre>
            </figure>

            <p>Note how
                <code>.text-capitalize</code> only changes the first letter of each word, leaving the case of any other letters unaffected.
            </p>
        </div>

        <div id="font-weight-and-italics" class="spacer p-top-lg">
            <h4>Font weight and italics</h4>
            <p>Quickly change the weight (boldness) of text or italicize text.</p>

            <div class="bd-example">
                <p class="font-weight-bold">Bold text.</p>
                <p class="font-weight-bolder">Bolder weight text (relative to the parent element).</p>
                <p class="font-weight-normal">Normal weight text.</p>
                <p class="font-weight-light">Light weight text.</p>
                <p class="font-weight-lighter">Lighter weight text (relative to the parent element).</p>
                <p class="font-italic">Italic text.</p>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;p class=&quot;font-weight-bold&quot;&gt;Bold text.&lt;/p&gt;
&lt;p class=&quot;font-weight-bolder&quot;&gt;Bolder weight text (relative to the parent element).&lt;/p&gt;
&lt;p class=&quot;font-weight-normal&quot;&gt;Normal weight text.&lt;/p&gt;
&lt;p class=&quot;font-weight-light&quot;&gt;Light weight text.&lt;/p&gt;
&lt;p class=&quot;font-weight-lighter&quot;&gt;Lighter weight text (relative to the parent element).&lt;/p&gt;
&lt;p class=&quot;font-italic&quot;&gt;Italic text.&lt;/p&gt;</code></pre>
            </figure>
        </div>

        <div id="monospace">
            <h4>Monospace</h4>
            <p>Change a selection to our monospace font stack with
                <code>.text-monospace</code>.
            </p>

            <div class="bd-example">
                <p class="text-monospace">This is in monospace</p>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;p class=&quot;text-monospace&quot;&gt;This is in monospace&lt;/p&gt;</code></pre>
            </figure>
        </div>

        <div id="reset-color">
            <h4>Reset color</h4>
            <p>Reset a text or link’s color with
                <code>.text-reset</code>, so that it inherits the color from its parent.
            </p>

            <div class="bd-example">
                <p class="text-muted">
                    Muted text with a
                    <a href="#" class="text-reset">reset link</a>.
                </p>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;p class=&quot;text-muted&quot;&gt;
  Muted text with a &lt;a href=&quot;#&quot; class=&quot;text-reset&quot;&gt;reset link&lt;/a&gt;.
&lt;/p&gt;</code></pre>
            </figure>
        </div>

        <div id="text-decoration">
            <h4>Text decoration</h4>
            <p>Remove a text decoration with a
                <code>.text-decoration-none</code> class.
            </p>

            <div class="bd-example">
                <a href="#" class="text-decoration-none">Non-underlined link</a>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;a href=&quot;#&quot; class=&quot;text-decoration-none&quot;&gt;Non-underlined link&lt;/a&gt;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/text/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TextUtility'
    }
</script>
