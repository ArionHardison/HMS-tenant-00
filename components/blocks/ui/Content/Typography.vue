<template>
    <div id="typography" class="spacer m-top-xl">
        <h3>Typography</h3>
        <p>There are examples of typography, including global settings, headings, body text, lists and more.</p>

        <div id="headings">
            <h4>Headings</h4>
            <p>All HTML headings,
                <code>&lt;h1&gt;</code> through
                <code>&lt;h6&gt;</code>, are available.
            </p>

            <div class="bd-example">
                <h1 class="large">H1 large heading</h1>
                <h1>H1 heading</h1>
                <h2>H2 heading</h2>
                <h3>H3 heading</h3>
                <h4>H4 heading</h4>
                <h5>H5 heading</h5>
                <h6>H6 heading</h6>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;h1 class=&quot;large&quot;&gt;H1 large heading&lt;/h1&gt;
&lt;h1&gt;H1 heading&lt;/h1&gt;
&lt;h2&gt;H2 heading&lt;/h2&gt;
&lt;h3&gt;H3 heading&lt;/h3&gt;
&lt;h4&gt;H4 heading&lt;/h4&gt;
&lt;h5&gt;H5 heading&lt;/h5&gt;
&lt;h6&gt;H6 heading&lt;/h6&gt;</code></pre>
            </figure>

            <p>
                <code>.h1</code> through
                <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.
            </p>

            <div class="bd-example">
                <h1 class="h1 large">H1 large heading</h1>
                <h1 class="h1">H1 heading</h1>
                <h2 class="h2">H2 heading</h2>
                <h3 class="h3">H3 heading</h3>
                <h4 class="h4">H4 heading</h4>
                <h5 class="h5">H5 heading</h5>
                <h6 class="h6">H6 heading</h6>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;h1 class=&quot;h1 large&quot;&gt;H1 large heading&lt;/h1&gt;
&lt;h1 class=&quot;h1&quot;&gt;H1 heading&lt;/h1&gt;
&lt;h2 class=&quot;h2&quot;&gt;H2 heading&lt;/h2&gt;
&lt;h3 class=&quot;h3&quot;&gt;H3 heading&lt;/h3&gt;
&lt;h4 class=&quot;h4&quot;&gt;H4 heading&lt;/h4&gt;
&lt;h5 class=&quot;h5&quot;&gt;H5 heading&lt;/h5&gt;
&lt;h6 class=&quot;h6&quot;&gt;H6 heading&lt;/h6&gt;</code></pre>
            </figure>
        </div>

        <div id="inline-text-elements">
            <h4>Inline text elements</h4>

            <div class="bd-example">
                <p>You can use the mark tag to
                    <mark>highlight</mark>
                    text.
                </p>
                <p>
                    <del>This line of text is meant to be treated as deleted text.</del>
                </p>
                <p>
                    <s>This line of text is meant to be treated as no longer accurate.</s>
                </p>
                <p>
                    <ins>This line of text is meant to be treated as an addition to the document.</ins>
                </p>
                <p>
                    <u>This line of text will render as underlined</u>
                </p>
                <p>
                    <small>This line of text is meant to be treated as fine print.</small>
                </p>
                <p>
                    <strong>This line rendered as bold text.</strong>
                </p>
                <p>
                    <em>This line rendered as italicized text.</em>
                </p>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;p&gt;You can use the mark tag to &lt;mark&gt;highlight&lt;/mark&gt; text.&lt;/p&gt;
&lt;p&gt;&lt;del&gt;This line of text is meant to be treated as deleted text.&lt;/del&gt;&lt;/p&gt;
&lt;p&gt;&lt;s&gt;This line of text is meant to be treated as no longer accurate.&lt;/s&gt;&lt;/p&gt;
&lt;p&gt;&lt;ins&gt;This line of text is meant to be treated as an addition to the document.&lt;/ins&gt;&lt;/p&gt;
&lt;p&gt;&lt;u&gt;This line of text will render as underlined&lt;/u&gt;&lt;/p&gt;
&lt;p&gt;&lt;small&gt;This line of text is meant to be treated as fine print.&lt;/small&gt;&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;This line rendered as bold text.&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;&lt;em&gt;This line rendered as italicized text.&lt;/em&gt;&lt;/p&gt;</code></pre>
            </figure>

            <p>
                <code>.mark</code> and
                <code>.small</code> classes are also available to apply the same styles as
                <code>&lt;mark&gt;</code> and
                <code>&lt;small&gt;</code> while avoiding any unwanted semantic implications that the tags would bring.
            </p>

            <p>While not shown above, feel free to use
                <code>&lt;b&gt;</code> and
                <code>&lt;i&gt;</code> in HTML5.
                <code>&lt;b&gt;</code> is meant to highlight words or phrases without conveying additional importance while
                <code>&lt;i&gt;</code> is mostly for voice, technical terms, etc.
            </p>
        </div>

        <div id="text-utilities" class="spacer p-top-lg">
            <h4>Text utilities</h4>
            <p>Change text alignment, transform, style, weight, and color with our
                <a class="scroll-to-id" href="#text">text utilities</a> and
                <a class="scroll-to-id" href="#colors">color utilities</a>.
            </p>
        </div>

        <div id="abbreviations" class="spacer p-top-lg">
            <h4>Abbreviations</h4>
            <p>Stylized implementation of HTML’s
                <code>&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.
            </p>
            <p>Add
                <code>.initialism</code> to an abbreviation for a slightly smaller font-size.
            </p>

            <div class="bd-example">
                <p>
                    <abbr title="attribute">attr</abbr>
                </p>
                <p>
                    <abbr title="HyperText Markup Language" class="initialism">HTML</abbr>
                </p>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;p&gt;&lt;abbr title=&quot;attribute&quot;&gt;attr&lt;/abbr&gt;&lt;/p&gt;
&lt;p&gt;&lt;abbr title=&quot;HyperText Markup Language&quot; class=&quot;initialism&quot;&gt;HTML&lt;/abbr&gt;&lt;/p&gt;</code></pre>
            </figure>
        </div>

        <div id="blockquotes">
            <h4>Blockquotes</h4>
            <p>For quoting blocks of content from another source within your document. Wrap
                <code>&lt;blockquote class="blockquote"&gt;</code> around any
                <abbr title="HyperText Markup Language">HTML</abbr> as the quote.
            </p>

            <div class="bd-example">
                <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;blockquote&gt;
  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
&lt;/blockquote&gt;</code></pre>
            </figure>

            <div id="blockquotes-naming-a-source">
                <h5>Naming a source</h5>
                <p>Add a
                    <code>&lt;footer class="blockquote-footer"&gt;</code> for identifying the source. Wrap the name of the source work in
                    <code>&lt;cite&gt;</code>.
                </p>

                <div class="bd-example">
                    <blockquote class="blockquote">
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">Someone famous in
                            <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;blockquote class=&quot;blockquote&quot;&gt;
  &lt;p class=&quot;mb-0&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
  &lt;footer class=&quot;blockquote-footer&quot;&gt;Someone famous in &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;&lt;/footer&gt;
&lt;/blockquote&gt;</code></pre>
                </figure>
            </div>

            <div id="blockquotes-alignment">
                <h5>Alignment</h5>
                <p>Use text utilities as needed to change the alignment of your blockquote.</p>

                <div class="bd-example">
                    <blockquote class="blockquote text-center">
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">Someone famous in
                            <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;blockquote class=&quot;blockquote text-center&quot;&gt;
  &lt;p class=&quot;mb-0&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
  &lt;footer class=&quot;blockquote-footer&quot;&gt;Someone famous in &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;&lt;/footer&gt;
&lt;/blockquote&gt;</code></pre>
                </figure>

                <div class="bd-example">
                    <blockquote class="blockquote text-right">
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">Someone famous in
                            <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;blockquote class=&quot;blockquote text-right&quot;&gt;
  &lt;p class=&quot;mb-0&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
  &lt;footer class=&quot;blockquote-footer&quot;&gt;Someone famous in &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;&lt;/footer&gt;
&lt;/blockquote&gt;</code></pre>
                </figure>
            </div>
        </div>

        <div id="lists">
            <h4>Lists</h4>
            <p>Display a list of items inside your content, rendered with a number, a bullet, or none.</p>

            <div id="unordered-list">
                <h5>Unordered list</h5>

                <div class="bd-example">
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Phasellus iaculis</li>
                        <li>Nulla volutpat</li>
                    </ul>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;ul&gt;
  &lt;li&gt;Lorem ipsum&lt;/li&gt;
  &lt;li&gt;Phasellus iaculis&lt;/li&gt;
  &lt;li&gt;Nulla volutpat&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                </figure>
            </div>

            <div id="ordered-lists">
                <h5>Ordered list</h5>

                <div class="bd-example">
                    <ol>
                        <li>Lorem ipsum</li>
                        <li>Phasellus iaculis</li>
                        <li>Nulla volutpat</li>
                    </ol>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;ol&gt;
  &lt;li&gt;Lorem ipsum&lt;/li&gt;
  &lt;li&gt;Phasellus iaculis&lt;/li&gt;
  &lt;li&gt;Nulla volutpat&lt;/li&gt;
&lt;/ol&gt;</code></pre>
                </figure>
            </div>

            <div id="unstyled-lists">
                <h5>Unstyled list</h5>

                <div class="bd-example">
                    <ul class="list-unstyled">
                        <li>Lorem ipsum</li>
                        <li>Phasellus iaculis</li>
                        <li>Nulla volutpat</li>
                    </ul>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;ul class=&quot;list-unstyled&quot;&gt;
  &lt;li&gt;Lorem ipsum&lt;/li&gt;
  &lt;li&gt;Phasellus iaculis&lt;/li&gt;
  &lt;li&gt;Nulla volutpat&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                </figure>
            </div>

            <div id="inline-lists">
                <h5>Inline list</h5>
                <p>Remove a list’s bullets and apply some light
                    <code>margin</code> with a combination of two classes,
                    <code>.list-inline</code> and
                    <code>.list-inline-item</code>.
                </p>

                <div class="bd-example">
                    <ul class="list-inline">
                        <li class="list-inline-item">Lorem ipsum</li>
                        <li class="list-inline-item">Phasellus iaculis</li>
                        <li class="list-inline-item">Nulla volutpat</li>
                    </ul>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;ul class=&quot;list-inline&quot;&gt;
  &lt;li class=&quot;list-inline-item&quot;&gt;Lorem ipsum&lt;/li&gt;
  &lt;li class=&quot;list-inline-item&quot;&gt;Phasellus iaculis&lt;/li&gt;
  &lt;li class=&quot;list-inline-item&quot;&gt;Nulla volutpat&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                </figure>
            </div>

            <div id="description-list-alignment">
                <h5>Description list alignment</h5>
                <p>Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a
                    <code>.text-truncate</code> class to truncate the text with an ellipsis.
                </p>

                <div class="bd-example">
                    <dl class="row">
                        <dt class="col-sm-3">Description lists</dt>
                        <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

                        <dt class="col-sm-3">Euismod</dt>
                        <dd class="col-sm-9">
                            <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                            <p>Donec id elit non mi porta gravida at eget metus.</p>
                        </dd>

                        <dt class="col-sm-3">Malesuada porta</dt>
                        <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                        <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
                        <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                        <dt class="col-sm-3">Nesting</dt>
                        <dd class="col-sm-9">
                            <dl class="row">
                                <dt class="col-sm-4">Nested definition list</dt>
                                <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                            </dl>
                        </dd>
                    </dl>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;dl class=&quot;row&quot;&gt;
  &lt;dt class=&quot;col-sm-3&quot;&gt;Description lists&lt;/dt&gt;
  &lt;dd class=&quot;col-sm-9&quot;&gt;A description list is perfect for defining terms.&lt;/dd&gt;

  &lt;dt class=&quot;col-sm-3&quot;&gt;Euismod&lt;/dt&gt;
  &lt;dd class=&quot;col-sm-9&quot;&gt;
    &lt;p&gt;Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.&lt;/p&gt;
    &lt;p&gt;Donec id elit non mi porta gravida at eget metus.&lt;/p&gt;
  &lt;/dd&gt;

  &lt;dt class=&quot;col-sm-3&quot;&gt;Malesuada porta&lt;/dt&gt;
  &lt;dd class=&quot;col-sm-9&quot;&gt;Etiam porta sem malesuada magna mollis euismod.&lt;/dd&gt;

  &lt;dt class=&quot;col-sm-3 text-truncate&quot;&gt;Truncated term is truncated&lt;/dt&gt;
  &lt;dd class=&quot;col-sm-9&quot;&gt;Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.&lt;/dd&gt;

  &lt;dt class=&quot;col-sm-3&quot;&gt;Nesting&lt;/dt&gt;
  &lt;dd class=&quot;col-sm-9&quot;&gt;
    &lt;dl class=&quot;row&quot;&gt;
      &lt;dt class=&quot;col-sm-4&quot;&gt;Nested definition list&lt;/dt&gt;
      &lt;dd class=&quot;col-sm-8&quot;&gt;Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.&lt;/dd&gt;
    &lt;/dl&gt;
  &lt;/dd&gt;
&lt;/dl&gt;</code></pre>
                </figure>
            </div>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/content/typography/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Typography'
    }
</script>
