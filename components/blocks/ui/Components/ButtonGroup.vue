<template>
    <div id="button-group" class="spacer m-top-xl">
        <h3>Button group</h3>
        <p>Group a series of buttons together on a single line with the button group, and super-power them with JavaScript.</p>

        <div id="button-group-basic-example">
            <h4>Basic example</h4>
            <p>Wrap a series of buttons with
                <code>.btn</code> in
                <code>.btn-group</code>. Add on optional JavaScript radio and checkbox style behavior with
                <a class="scroll-to-id" href="#button-plugin">our buttons plugin</a>.
            </p>

            <div class="bd-example">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">Left</button>
                    <button type="button" class="btn btn-primary">Middle</button>
                    <button type="button" class="btn btn-primary">Right</button>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Left&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Middle&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Right&lt;/button&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-callout bd-callout-warning">
                <h5>Ensure correct
                    <code>role</code> and provide a label
                </h5>

                <p>In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate
                    <code>role</code> attribute needs to be provided. For button groups, this would be
                    <code>role="group"</code>, while toolbars should have a
                    <code>role="toolbar"</code>.
                </p>

                <p>In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use
                    <code>aria-label</code>, but alternatives such as
                    <code>aria-labelledby</code> can also be used.
                </p>
            </div>
        </div>

        <div id="button-group-button-toolbar">
            <h4>Button toolbar</h4>
            <p>Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.</p>

            <div class="bd-example">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-primary">1</button>
                        <button type="button" class="btn btn-primary">2</button>
                        <button type="button" class="btn btn-primary">3</button>
                        <button type="button" class="btn btn-primary">4</button>
                    </div>
                    <div class="btn-group mr-2" role="group" aria-label="Second group">
                        <button type="button" class="btn btn-primary">5</button>
                        <button type="button" class="btn btn-primary">6</button>
                        <button type="button" class="btn btn-primary">7</button>
                    </div>
                    <div class="btn-group" role="group" aria-label="Third group">
                        <button type="button" class="btn btn-primary">8</button>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;btn-toolbar&quot; role=&quot;toolbar&quot; aria-label=&quot;Toolbar with button groups&quot;&gt;
  &lt;div class=&quot;btn-group mr-2&quot; role=&quot;group&quot; aria-label=&quot;First group&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;1&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;2&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;3&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;4&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;btn-group mr-2&quot; role=&quot;group&quot; aria-label=&quot;Second group&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;5&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;6&lt;/button&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;7&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Third group&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;8&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="button-group-sizing">
            <h4>Sizing</h4>
            <p>Instead of applying button sizing classes to every button in a group, just add
                <code>.btn-group-*</code> to each
                <code>.btn-group</code>, including each one when nesting multiple groups.
            </p>

            <div class="bd-example">
                <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
                    <button type="button" class="btn btn-primary">Left</button>
                    <button type="button" class="btn btn-primary">Middle</button>
                    <button type="button" class="btn btn-primary">Right</button>
                </div>
                <br>
                <div class="btn-group" role="group" aria-label="Default button group">
                    <button type="button" class="btn btn-primary">Left</button>
                    <button type="button" class="btn btn-primary">Middle</button>
                    <button type="button" class="btn btn-primary">Right</button>
                </div>
                <br>
                <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                    <button type="button" class="btn btn-primary">Left</button>
                    <button type="button" class="btn btn-primary">Middle</button>
                    <button type="button" class="btn btn-primary">Right</button>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;btn-group btn-group-lg&quot; role=&quot;group&quot; aria-label=&quot;...&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;...&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;btn-group btn-group-sm&quot; role=&quot;group&quot; aria-label=&quot;...&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="button-group-nesting">
            <h4>Nesting</h4>
            <p>Place a
                <code>.btn-group</code> within another
                <code>.btn-group</code> when you want dropdown menus mixed with a series of buttons.
            </p>

            <div class="bd-example">

                <b-button-group>
                    <b-button variant="primary" >1</b-button>
                    <b-button variant="primary" >2</b-button>
                    <b-dropdown  variant="primary" text="Dropdown">
                        <b-dropdown-item>Dropdown link</b-dropdown-item>
                        <b-dropdown-item>Dropdown link</b-dropdown-item>
                    </b-dropdown>
                </b-button-group>

            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;b-button-group&#x3E;
    &#x3C;b-button variant=&#x22;primary&#x22; &#x3E;1&#x3C;/b-button&#x3E;
    &#x3C;b-button variant=&#x22;primary&#x22; &#x3E;2&#x3C;/b-button&#x3E;
    &#x3C;b-dropdown  variant=&#x22;primary&#x22; text=&#x22;Dropdown&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Dropdown link&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Dropdown link&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;</code></pre>
            </figure>
        </div>

        <div id="button-group-vertical-variation">
            <h4>Vertical variation</h4>
            <p>Make a set of buttons appear vertically stacked rather than horizontally.
                <strong>Split button dropdowns are not supported here.</strong>
            </p>

            <div class="bd-example">


                <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button type="button" class="btn btn-primary">Button</button>
                    <button type="button" class="btn btn-primary">Button</button>
                    <button type="button" class="btn btn-primary">Button</button>
                    <button type="button" class="btn btn-primary">Button</button>
                    <button type="button" class="btn btn-primary">Button</button>
                    <button type="button" class="btn btn-primary">Button</button>
                </div>
            </div>

            <div class="bd-example">

                <b-button-group vertical>
                    <b-button variant="primary" >Button</b-button>
                    <b-button variant="primary" >Button</b-button>
                    <b-dropdown  variant="primary" text="Dropdown">
                        <b-dropdown-item>Dropdown link</b-dropdown-item>
                        <b-dropdown-item>Dropdown link</b-dropdown-item>
                    </b-dropdown>
                    <b-button variant="primary" >Button</b-button>
                    <b-button variant="primary" >Button</b-button>
                    <b-dropdown  variant="primary" text="Dropdown">
                        <b-dropdown-item>Dropdown link</b-dropdown-item>
                        <b-dropdown-item>Dropdown link</b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown  variant="primary" text="Dropdown">
                        <b-dropdown-item>Dropdown link</b-dropdown-item>
                        <b-dropdown-item>Dropdown link</b-dropdown-item>
                    </b-dropdown>
                    <b-dropdown  variant="primary" text="Dropdown">
                        <b-dropdown-item>Dropdown link</b-dropdown-item>
                        <b-dropdown-item>Dropdown link</b-dropdown-item>
                    </b-dropdown>
                </b-button-group>

            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;b-button-group vertical&#x3E;
  ...
&#x3C;/b-button-group&#x3E;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/button-group/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ButtonGroup'
    }
</script>
