<template>
    <div id="badge" class="spacer m-top-xl">
        <h3>Badges</h3>
        <p>Examples for badges, our small count and labeling component.</p>

        <div id="badge-example">
            <h4>Example</h4>
            <p>Badges scale to match the size of the immediate parent element by using relative font sizing and
                <code>em</code> units.
            </p>

            <div class="bd-example">
                <h1>Heading
                    <span class="badge badge-secondary">New</span>
                </h1>
                <h2>Heading
                    <span class="badge badge-secondary">New</span>
                </h2>
                <h3>Heading
                    <span class="badge badge-secondary">New</span>
                </h3>
                <h4>Heading
                    <span class="badge badge-secondary">New</span>
                </h4>
                <h5>Heading
                    <span class="badge badge-secondary">New</span>
                </h5>
                <h6>Heading
                    <span class="badge badge-secondary">New</span>
                </h6>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;h1&gt;Heading &lt;span class=&quot;badge badge-secondary&quot;&gt;New&lt;/span&gt;&lt;/h1&gt;
&lt;h2&gt;Heading &lt;span class=&quot;badge badge-secondary&quot;&gt;New&lt;/span&gt;&lt;/h2&gt;
&lt;h3&gt;Heading &lt;span class=&quot;badge badge-secondary&quot;&gt;New&lt;/span&gt;&lt;/h3&gt;
&lt;h4&gt;Heading &lt;span class=&quot;badge badge-secondary&quot;&gt;New&lt;/span&gt;&lt;/h4&gt;
&lt;h5&gt;Heading &lt;span class=&quot;badge badge-secondary&quot;&gt;New&lt;/span&gt;&lt;/h5&gt;
&lt;h6&gt;Heading &lt;span class=&quot;badge badge-secondary&quot;&gt;New&lt;/span&gt;&lt;/h6&gt;</code></pre>
            </figure>

            <p>Badges can be used as part of links or buttons to provide a counter.</p>

            <div class="bd-example">
                <button type="button" class="btn btn-primary">
                    Notifications
                    <span class="badge badge-light">4</span>
                </button>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;
  Notifications &lt;span class=&quot;badge badge-light&quot;&gt;4&lt;/span&gt;
&lt;/button&gt;</code></pre>
            </figure>

            <p>Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.</p>

            <p>Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text.</p>

            <div class="bd-example">
                <button type="button" class="btn btn-primary">
                    Profile
                    <span class="badge badge-light">9</span>
                    <span class="sr-only">unread messages</span>
                </button>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;
  Profile &lt;span class=&quot;badge badge-light&quot;&gt;9&lt;/span&gt;
  &lt;span class=&quot;sr-only&quot;&gt;unread messages&lt;/span&gt;
&lt;/button&gt;</code></pre>
            </figure>
        </div>

        <div id="contextual-variations">
            <h4>Contextual variations</h4>
            <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>

            <div class="bd-example">
                <span class="badge badge-primary">Primary</span>
                <span class="badge badge-secondary">Secondary</span>
                <span class="badge badge-success">Success</span>
                <span class="badge badge-danger">Danger</span>
                <span class="badge badge-warning">Warning</span>
                <span class="badge badge-info">Info</span>
                <span class="badge badge-light">Light</span>
                <span class="badge badge-dark">Dark</span>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;span class=&quot;badge badge-primary&quot;&gt;Primary&lt;/span&gt;
&lt;span class=&quot;badge badge-secondary&quot;&gt;Secondary&lt;/span&gt;
&lt;span class=&quot;badge badge-success&quot;&gt;Success&lt;/span&gt;
&lt;span class=&quot;badge badge-danger&quot;&gt;Danger&lt;/span&gt;
&lt;span class=&quot;badge badge-warning&quot;&gt;Warning&lt;/span&gt;
&lt;span class=&quot;badge badge-info&quot;&gt;Info&lt;/span&gt;
&lt;span class=&quot;badge badge-light&quot;&gt;Light&lt;/span&gt;
&lt;span class=&quot;badge badge-dark&quot;&gt;Dark&lt;/span&gt;</code></pre>
            </figure>

            <div class="bd-callout bd-callout-warning">
                <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>

                <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the
                    <code>.sr-only</code> class.
                </p>
            </div>
        </div>

        <div id="pill-badges">
            <h4>Pill badges</h4>
            <p>Use the
                <code>.badge-pill</code> modifier class to make badges more rounded (with a larger
                <code>border-radius</code> and additional horizontal
                <code>padding</code>).
            </p>

            <div class="bd-example">
                <span class="badge badge-pill badge-primary">Primary</span>
                <span class="badge badge-pill badge-secondary">Secondary</span>
                <span class="badge badge-pill badge-success">Success</span>
                <span class="badge badge-pill badge-danger">Danger</span>
                <span class="badge badge-pill badge-warning">Warning</span>
                <span class="badge badge-pill badge-info">Info</span>
                <span class="badge badge-pill badge-light">Light</span>
                <span class="badge badge-pill badge-dark">Dark</span>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;span class=&quot;badge badge-pill badge-primary&quot;&gt;Primary&lt;/span&gt;
&lt;span class=&quot;badge badge-pill badge-secondary&quot;&gt;Secondary&lt;/span&gt;
&lt;span class=&quot;badge badge-pill badge-success&quot;&gt;Success&lt;/span&gt;
&lt;span class=&quot;badge badge-pill badge-danger&quot;&gt;Danger&lt;/span&gt;
&lt;span class=&quot;badge badge-pill badge-warning&quot;&gt;Warning&lt;/span&gt;
&lt;span class=&quot;badge badge-pill badge-info&quot;&gt;Info&lt;/span&gt;
&lt;span class=&quot;badge badge-pill badge-light&quot;&gt;Light&lt;/span&gt;
&lt;span class=&quot;badge badge-pill badge-dark&quot;&gt;Dark&lt;/span&gt;</code></pre>
            </figure>
        </div>

        <div id="links-badges">
            <h4>Links</h4>
            <p>Using the contextual
                <code>.badge-*</code> classes on an
                <code>&lt;a&gt;</code> element quickly provide
                <em>actionable</em> badges with hover and focus states.
            </p>

            <div class="bd-example">
                <a href="#" class="badge badge-primary">Primary</a>
                <a href="#" class="badge badge-secondary">Secondary</a>
                <a href="#" class="badge badge-success">Success</a>
                <a href="#" class="badge badge-danger">Danger</a>
                <a href="#" class="badge badge-warning">Warning</a>
                <a href="#" class="badge badge-info">Info</a>
                <a href="#" class="badge badge-light">Light</a>
                <a href="#" class="badge badge-dark">Dark</a>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;a href=&quot;#&quot; class=&quot;badge badge-primary&quot;&gt;Primary&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;badge badge-secondary&quot;&gt;Secondary&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;badge badge-success&quot;&gt;Success&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;badge badge-danger&quot;&gt;Danger&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;badge badge-warning&quot;&gt;Warning&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;badge badge-info&quot;&gt;Info&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;badge badge-light&quot;&gt;Light&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;badge badge-dark&quot;&gt;Dark&lt;/a&gt;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/badge/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Badge'
    }
</script>
