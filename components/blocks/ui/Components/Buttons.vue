<template>
    <div id="buttons" class="spacer m-top-xl">
        <h3>Buttons</h3>
        <p>Includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. </p>

        <div id="buttons-examples">
            <h4>Examples</h4>

            <div class="bd-example">
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-danger">Danger</button>
                <button type="button" class="btn btn-warning">Warning</button>
                <button type="button" class="btn btn-info">Info</button>
                <button type="button" class="btn btn-light">Light</button>
                <button type="button" class="btn btn-dark">Dark</button>
                <button type="button" class="btn btn-link">Link</button>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Primary&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot;&gt;Secondary&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success&quot;&gt;Success&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger&quot;&gt;Danger&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning&quot;&gt;Warning&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot;&gt;Info&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;Light&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;Dark&lt;/button&gt;

&lt;button type=&quot;button&quot; class=&quot;btn btn-link&quot;&gt;Link&lt;/button&gt;</code></pre>
            </figure>
        </div>

        <div id="outline-buttons">
            <h4>Outline buttons</h4>

            <div class="bd-example">
                <button type="button" class="btn btn-outline-primary">Primary</button>
                <button type="button" class="btn btn-outline-secondary">Secondary</button>
                <button type="button" class="btn btn-outline-success">Success</button>
                <button type="button" class="btn btn-outline-danger">Danger</button>
                <button type="button" class="btn btn-outline-warning">Warning</button>
                <button type="button" class="btn btn-outline-info">Info</button>
                <button type="button" class="btn btn-outline-light">Light</button>
                <button type="button" class="btn btn-outline-dark">Dark</button>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary&quot;&gt;Primary&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary&quot;&gt;Secondary&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-success&quot;&gt;Success&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-danger&quot;&gt;Danger&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-warning&quot;&gt;Warning&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-info&quot;&gt;Info&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-light&quot;&gt;Light&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-dark&quot;&gt;Dark&lt;/button&gt;</code></pre>
            </figure>
        </div>

        <div id="button-tags">
            <h4>Button tags</h4>
            <p>The
                <code>.btn</code> classes are designed to be used with the
                <code>&lt;button&gt;</code> element. However, you can also use these classes on
                <code>&lt;a&gt;</code> or
                <code>&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).
            </p>
            <p>When using button classes on
                <code>&lt;a&gt;</code> elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a
                <code>role="button"</code> to appropriately convey their purpose to assistive technologies such as screen readers.
            </p>

            <div class="bd-example">
                <a class="btn btn-primary" href="#" role="button">Link</a>
                <button class="btn btn-primary" type="submit">Button</button>
                <input class="btn btn-primary" type="button" value="Input">
                <input class="btn btn-primary" type="submit" value="Submit">
                <input class="btn btn-primary" type="reset" value="Reset">
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;a class=&quot;btn btn-primary&quot; href=&quot;#&quot; role=&quot;button&quot;&gt;Link&lt;/a&gt;
&lt;button class=&quot;btn btn-primary&quot; type=&quot;submit&quot;&gt;Button&lt;/button&gt;
&lt;input class=&quot;btn btn-primary&quot; type=&quot;button&quot; value=&quot;Input&quot;&gt;
&lt;input class=&quot;btn btn-primary&quot; type=&quot;submit&quot; value=&quot;Submit&quot;&gt;
&lt;input class=&quot;btn btn-primary&quot; type=&quot;reset&quot; value=&quot;Reset&quot;&gt;</code></pre>
            </figure>
        </div>

        <div id="button-sizes">
            <h4>Sizes</h4>
            <p>Fancy larger or smaller buttons? Add
                <code>.btn-lg</code> or
                <code>.btn-sm</code> for additional sizes.
            </p>

            <div class="bd-example">
                <button type="button" class="btn btn-primary btn-sm">Small</button>
                <button type="button" class="btn btn-primary">Default</button>
                <button type="button" class="btn btn-primary btn-lg">Large</button>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-sm&quot;&gt;Small&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Default&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-lg&quot;&gt;Large&lt;/button&gt;</code></pre>
            </figure>

            <p>Create block level buttons—those that span the full width of a parent—by adding
                <code>.btn-block</code>.
            </p>

            <div class="bd-example">
                <button type="button" class="btn btn-primary btn-block">Block level button</button>
                <button type="button" class="btn btn-secondary btn-block">Block level button</button>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-block&quot;&gt;Block level button&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary btn-block&quot;&gt;Block level button&lt;/button&gt;</code></pre>
            </figure>
        </div>

        <div id="button-hover">
            <h4>Button hover</h4>

            <h5>Default</h5>

            <div class="bd-example">
                <button type="button" class="btn btn-primary">Hover</button>
                <button type="button" class="btn btn-outline-primary">Hover</button>
                <button type="button" class="btn btn-link">Hover</button>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Hover&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary&quot;&gt;Hover&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-link&quot;&gt;Hover&lt;/button&gt;</code></pre>
            </figure>

            <h5>With transform scale</h5>
            <p>Add
                <code>.transform-scale-h</code> to an element.
            </p>

            <div class="bd-example">
                <button type="button" class="btn btn-primary transform-scale-h">Hover</button>
                <button type="button" class="btn btn-outline-primary transform-scale-h">Hover</button>
                <button type="button" class="btn btn-link transform-scale-h">Hover</button>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-primary transform-scale-h&quot;&gt;Hover&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary transform-scale-h&quot;&gt;Hover&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-link transform-scale-h&quot;&gt;Hover&lt;/button&gt;</code></pre>
            </figure>
        </div>

        <div id="button-active">
            <h4>Button active</h4>
            <p>Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active.
                <strong>There’s no need to add a class to
                    <code>&lt;button&gt;</code>s as they use a pseudo-class</strong>. However, you can still force the same active appearance with
                <code>.active</code> (and include the
                <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.
            </p>

            <div class="bd-example">
                <a href="#" class="btn btn-primary active" role="button" aria-pressed="true">Primary link</a>
                <a href="#" class="btn btn-secondary active" role="button" aria-pressed="true">Link</a>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;a href=&quot;#&quot; class=&quot;btn btn-primary active&quot; role=&quot;button&quot; aria-pressed=&quot;true&quot;&gt;Primary link&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;btn btn-secondary active&quot; role=&quot;button&quot; aria-pressed=&quot;true&quot;&gt;Link&lt;/a&gt;</code></pre>
            </figure>
        </div>

        <div id="button-disabled">
            <h4>Button disabled</h4>
            <p>Make buttons look inactive by adding the
                <code>disabled</code> boolean attribute to any
                <code>&lt;button&gt;</code> element.
            </p>

            <div class="bd-example">
                <button type="button" class="btn btn-primary" disabled="">Primary button</button>
                <button type="button" class="btn btn-secondary" disabled="">Button</button>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; disabled&gt;Primary button&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot; disabled&gt;Button&lt;/button&gt;</code></pre>
            </figure>

            <p>Disabled buttons using the
                <code>&lt;a&gt;</code> element behave a bit different:
            </p>

            <ul>
                <li>
                    <code>&lt;a&gt;</code>s don’t support the
                    <code>disabled</code> attribute, so you must add the
                    <code>.disabled</code> class to make it visually appear disabled.
                </li>
                <li>Some future-friendly styles are included to disable all
                    <code>pointer-events</code> on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all.
                </li>
                <li>Disabled buttons should include the
                    <code>aria-disabled="true"</code> attribute to indicate the state of the element to assistive technologies.
                </li>
            </ul>

            <div class="bd-example">
                <a href="#" class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
                <a href="#" class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;a href=&quot;#&quot; class=&quot;btn btn-primary disabled&quot; tabindex=&quot;-1&quot; role=&quot;button&quot; aria-disabled=&quot;true&quot;&gt;Primary link&lt;/a&gt;
&lt;a href=&quot;#&quot; class=&quot;btn btn-secondary disabled&quot; tabindex=&quot;-1&quot; role=&quot;button&quot; aria-disabled=&quot;true&quot;&gt;Link&lt;/a&gt;</code></pre>
            </figure>

            <div class="bd-callout bd-callout-warning">
                <h5>Link functionality caveat</h5>

                <p>The
                    <code>.disabled</code> class uses
                    <code>pointer-events: none</code> to try to disable the link functionality of
                    <code>&lt;a&gt;</code>s, but that CSS property is not yet standardized. In addition, even in browsers that do support
                    <code>pointer-events: none</code>, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a
                    <code>tabindex="-1"</code> attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.
                </p>
            </div>
        </div>

        <div id="button-plugin">
            <h4>Button plugin</h4>
            <p>Do more with buttons. Control button states or create groups of buttons for more components like toolbars.</p>

            <div id="toggle-states">
                <h5>Toggle states</h5>
                <p>Add
                    <code>data-toggle="button"</code> to toggle a button’s
                    <code>active</code> state. If you’re pre-toggling a button, you must manually add the
                    <code>.active</code> class
                    <strong>and</strong>
                    <code>aria-pressed="true"</code> to the
                    <code>&lt;button&gt;</code>.
                </p>

                <div class="bd-example">
                    <button type="button" class="btn btn-primary active" data-toggle="button" aria-pressed="true">
                        Single toggle
                    </button>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; data-toggle=&quot;button&quot; aria-pressed=&quot;false&quot;&gt;
  Single toggle
&lt;/button&gt;</code></pre>
                </figure>
            </div>

            <div id="checkbox-and-radio-buttons">
                <h5>Checkbox and radio buttons</h5>
                <p>Bootstrap’s
                    <code>.button</code> styles can be applied to other elements, such as
                    <code>&lt;label&gt;</code>s, to provide checkbox or radio style button toggling. Add
                    <code>data-toggle="buttons"</code> to a
                    <code>.btn-group</code> containing those modified buttons to enable their toggling behavior via JavaScript and add
                    <code>.btn-group-toggle</code> to style the
                    <code>&lt;input&gt;</code>s within your buttons.
                    <strong>Note that you can create single input-powered buttons or groups of them.</strong>
                </p>
                <p>The checked state for these buttons is
                    <strong>only updated via
                        <code>click</code> event</strong> on the button. If you use another method to update the input—e.g., with
                    <code>&lt;input type="reset"&gt;</code> or by manually applying the input’s
                    <code>checked</code> property—you’ll need to toggle
                    <code>.active</code> on the
                    <code>&lt;label&gt;</code> manually.
                </p>
                <p>Note that pre-checked buttons require you to manually add the
                    <code>.active</code> class to the input’s
                    <code>&lt;label&gt;</code>.
                </p>

                <div class="bd-example">
                    <div class="btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-primary active">
                            <input type="checkbox" checked=""> Checked
                        </label>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;btn-group-toggle&quot; data-toggle=&quot;buttons&quot;&gt;
  &lt;label class=&quot;btn btn-primary active&quot;&gt;
    &lt;input type=&quot;checkbox&quot; checked&gt; Checked
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
                </figure>

                <div class="bd-example">
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-primary">
                            <input type="radio" name="options" id="option1" checked=""> Active
                        </label>
                        <label class="btn btn-primary">
                            <input type="radio" name="options" id="option2"> Radio
                        </label>
                        <label class="btn btn-primary active">
                            <input type="radio" name="options" id="option3"> Radio
                        </label>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;btn-group btn-group-toggle&quot; data-toggle=&quot;buttons&quot;&gt;
  &lt;label class=&quot;btn btn-primary active&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;options&quot; id=&quot;option1&quot; checked&gt; Active
  &lt;/label&gt;
  &lt;label class=&quot;btn btn-primary&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;options&quot; id=&quot;option2&quot;&gt; Radio
  &lt;/label&gt;
  &lt;label class=&quot;btn btn-primary&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;options&quot; id=&quot;option3&quot;&gt; Radio
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/buttons/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Buttons'
    }
</script>
