<template>
    <div id="alerts" class="spacer m-top-xl">
        <h3>Alerts</h3>
        <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>

        <div id="alert-examples">
            <h4>Examples</h4>
            <p>Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight
                <strong>required</strong> contextual classes (e.g.,
                <code>.alert-success</code>).
            </p>

            <div class="bd-example">
                <div class="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>

                <div class="alert alert-secondary" role="alert">
                    A simple secondary alert—check it out!
                </div>

                <div class="alert alert-success" role="alert">
                    A simple success alert—check it out!
                </div>

                <div class="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                </div>

                <div class="alert alert-warning" role="alert">
                    A simple warning alert—check it out!
                </div>

                <div class="alert alert-info" role="alert">
                    A simple info alert—check it out!
                </div>

                <div class="alert alert-light" role="alert">
                    A simple light alert—check it out!
                </div>

                <div class="alert alert-dark" role="alert">
                    A simple dark alert—check it out!
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;alert alert-primary&quot; role=&quot;alert&quot;&gt;
  A simple primary alert&mdash;check it out!
&lt;/div&gt;
&lt;div class=&quot;alert alert-secondary&quot; role=&quot;alert&quot;&gt;
  A simple secondary alert&mdash;check it out!
&lt;/div&gt;
&lt;div class=&quot;alert alert-success&quot; role=&quot;alert&quot;&gt;
  A simple success alert&mdash;check it out!
&lt;/div&gt;
&lt;div class=&quot;alert alert-danger&quot; role=&quot;alert&quot;&gt;
  A simple danger alert&mdash;check it out!
&lt;/div&gt;
&lt;div class=&quot;alert alert-warning&quot; role=&quot;alert&quot;&gt;
  A simple warning alert&mdash;check it out!
&lt;/div&gt;
&lt;div class=&quot;alert alert-info&quot; role=&quot;alert&quot;&gt;
  A simple info alert&mdash;check it out!
&lt;/div&gt;
&lt;div class=&quot;alert alert-light&quot; role=&quot;alert&quot;&gt;
  A simple light alert&mdash;check it out!
&lt;/div&gt;
&lt;div class=&quot;alert alert-dark&quot; role=&quot;alert&quot;&gt;
  A simple dark alert&mdash;check it out!
&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="link-color">
            <h4>Link color</h4>
            <p>Use the
                <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.
            </p>

            <div class="bd-example">
                <div class="alert alert-primary" role="alert">
                    A simple primary alert with
                    <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div class="alert alert-secondary" role="alert">
                    A simple secondary alert with
                    <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div class="alert alert-success" role="alert">
                    A simple success alert with
                    <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div class="alert alert-danger" role="alert">
                    A simple danger alert with
                    <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div class="alert alert-warning" role="alert">
                    A simple warning alert with
                    <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div class="alert alert-info" role="alert">
                    A simple info alert with
                    <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div class="alert alert-light" role="alert">
                    A simple light alert with
                    <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div class="alert alert-dark" role="alert">
                    A simple dark alert with
                    <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;alert alert-primary&quot; role=&quot;alert&quot;&gt;
  A simple primary alert with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class=&quot;alert alert-secondary&quot; role=&quot;alert&quot;&gt;
  A simple secondary alert with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class=&quot;alert alert-success&quot; role=&quot;alert&quot;&gt;
  A simple success alert with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class=&quot;alert alert-danger&quot; role=&quot;alert&quot;&gt;
  A simple danger alert with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class=&quot;alert alert-warning&quot; role=&quot;alert&quot;&gt;
  A simple warning alert with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class=&quot;alert alert-info&quot; role=&quot;alert&quot;&gt;
  A simple info alert with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class=&quot;alert alert-light&quot; role=&quot;alert&quot;&gt;
  A simple light alert with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;
&lt;div class=&quot;alert alert-dark&quot; role=&quot;alert&quot;&gt;
  A simple dark alert with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="additional-content">
            <h4>Additional content</h4>
            <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>

            <div class="bd-example">
                <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Well done!</h4>
                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                    <hr>
                    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;alert alert-success&quot; role=&quot;alert&quot;&gt;
  &lt;h4 class=&quot;alert-heading&quot;&gt;Well done!&lt;/h4&gt;
  &lt;p&gt;Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.&lt;/p&gt;
  &lt;hr&gt;
  &lt;p class=&quot;mb-0&quot;&gt;Whenever you need to, be sure to use margin utilities to keep things nice and tidy.&lt;/p&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/alerts/Alerts.vue" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'alerts'
    }
</script>
