<template>
    <div id="clearfix" class="spacer m-top-xl">
        <h3>Clearfix</h3>
        <p>Quickly and easily clear floated content within a container by adding a clearfix utility.</p>
        <p>Easily clear
            <code>float</code>s by adding
            <code>.clearfix</code>
            <strong>to the parent element</strong>. Can also be used as a mixin.
        </p>

        <figure class="highlight">
            <pre><code class="language-html">&lt;div class=&quot;clearfix&quot;&gt;...&lt;/div&gt;</code></pre>
        </figure>

        <p>The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout.</p>

        <div class="bd-example">
            <div class="bg-primary clearfix">
                <button type="button" class="btn btn-secondary float-left">Example Button floated left</button>
                <button type="button" class="btn btn-secondary float-right">Example Button floated right</button>
            </div>
        </div>

        <figure class="highlight">
            <pre><code class="language-html">&lt;div class=&quot;bg-primary clearfix&quot;&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn btn-secondary float-left&quot;&gt;Example Button floated left&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn btn-secondary float-right&quot;&gt;Example Button floated right&lt;/button&gt;
&lt;/div&gt;</code></pre>
        </figure>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/clearfix/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Clearfix'
    }
</script>
