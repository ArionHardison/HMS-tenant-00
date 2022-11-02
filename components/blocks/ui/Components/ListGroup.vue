<template>
    <div id="list-group" class="spacer m-top-xl">
        <h3>List group</h3>
        <p>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>

        <div id="basic-examples">
            <h4>Basic examples</h4>
            <p>The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.</p>

            <div class="bd-example">
                <ul class="list-group">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;ul class=&quot;list-group&quot;&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Porta ac consectetur ac&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Vestibulum at eros&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>
        </div>

        <div id="active-items">
            <h4>Active items</h4>
            <p>Add
                <code>.active</code> to a
                <code>.list-group-item</code> to indicate the current active selection.
            </p>

            <div class="bd-example">
                <ul class="list-group">
                    <li class="list-group-item active">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;ul class=&quot;list-group&quot;&gt;
  &lt;li class=&quot;list-group-item active&quot;&gt;Cras justo odio&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Porta ac consectetur ac&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Vestibulum at eros&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>
        </div>

        <div id="disabled-items">
            <h4>Disabled items</h4>
            <p>Add
                <code>.disabled</code> to a
                <code>.list-group-item</code> to make it
                <em>appear</em> disabled. Note that some elements with
                <code>.disabled</code> will also require custom JavaScript to fully disable their click events (e.g., links).
            </p>

            <div class="bd-example">
                <ul class="list-group">
                    <li class="list-group-item disabled" aria-disabled="true">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;ul class=&quot;list-group&quot;&gt;
  &lt;li class=&quot;list-group-item disabled&quot; aria-disabled=&quot;true&quot;&gt;Cras justo odio&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Porta ac consectetur ac&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Vestibulum at eros&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>
        </div>

        <div id="links-and-buttons">
            <h4>Links and buttons</h4>
            <p>Use
                <code>&lt;a&gt;</code>s or
                <code>&lt;button&gt;</code>s to create
                <em>actionable</em> list group items with hover, disabled, and active states by adding
                <code>.list-group-item-action</code>. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like
                <code>&lt;li&gt;</code>s or
                <code>&lt;div&gt;</code>s) don’t provide a click or tap affordance.
            </p>
            <p>Be sure to
                <strong>not use the standard
                    <code>.btn</code> classes here</strong>.
            </p>

            <div class="bd-example">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">
                        Cras justo odio
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                    <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
                    <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                    <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;list-group&quot;&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action active&quot;&gt;
    Cras justo odio
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;Dapibus ac facilisis in&lt;/a&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;Morbi leo risus&lt;/a&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;Porta ac consectetur ac&lt;/a&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action disabled&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Vestibulum at eros&lt;/a&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <p>With
                <code>&lt;button&gt;</code>s, you can also make use of the
                <code>disabled</code> attribute instead of the
                <code>.disabled</code> class. Sadly,
                <code>&lt;a&gt;</code>s don’t support the disabled attribute.
            </p>

            <div class="bd-example">
                <div class="list-group">
                    <button type="button" class="list-group-item list-group-item-action active">
                        Cras justo odio
                    </button>
                    <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
                    <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
                    <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
                    <button type="button" class="list-group-item list-group-item-action" disabled="">Vestibulum at eros</button>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;list-group&quot;&gt;
  &lt;button type=&quot;button&quot; class=&quot;list-group-item list-group-item-action active&quot;&gt;
    Cras justo odio
  &lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;Dapibus ac facilisis in&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;Morbi leo risus&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;Porta ac consectetur ac&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;list-group-item list-group-item-action&quot; disabled&gt;Vestibulum at eros&lt;/button&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="flush">
            <h4>Flush</h4>
            <p>Add
                <code>.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).
            </p>

            <div class="bd-example">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;ul class=&quot;list-group list-group-flush&quot;&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Porta ac consectetur ac&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Vestibulum at eros&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>
        </div><!-- #flush -->

        <div id="horizontal">
            <h4>Horizontal</h4>
            <p>Add
                <code>.list-group-horizontal</code> to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant
                <code>.list-group-horizontal-{sm|md|lg|xl}</code> to make a list group horizontal starting at that breakpoint’s
                <code>min-width</code>. Currently
                <strong>horizontal list groups cannot be combined with flush list groups.</strong>
            </p>
            <p>
                <strong>ProTip:</strong> Want equal-width list group items when horizontal? Add
                <code>.flex-fill</code> to each list group item.
            </p>

            <div class="bd-example">
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                </ul>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;ul class=&quot;list-group list-group-horizontal&quot;&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <ul class="list-group list-group-horizontal-sm">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                </ul>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;ul class=&quot;list-group list-group-horizontal-sm&quot;&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <ul class="list-group list-group-horizontal-md">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                </ul>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;ul class=&quot;list-group list-group-horizontal-md&quot;&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <ul class="list-group list-group-horizontal-lg">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                </ul>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;ul class=&quot;list-group list-group-horizontal-lg&quot;&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <ul class="list-group list-group-horizontal-xl">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                </ul>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;ul class=&quot;list-group list-group-horizontal-xl&quot;&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>
        </div><!-- #horizontal -->

        <div id="list-group-contextual-classes">
            <h4>Contextual classes</h4>
            <p>Use contextual classes to style list items with a stateful background and color.</p>

            <div class="bd-example">
                <ul class="list-group">
                    <li class="list-group-item">Dapibus ac facilisis in</li>

                    <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
                    <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
                    <li class="list-group-item list-group-item-success">A simple success list group item</li>
                    <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
                    <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
                    <li class="list-group-item list-group-item-info">A simple info list group item</li>
                    <li class="list-group-item list-group-item-light">A simple light list group item</li>
                    <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
                </ul>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;ul class=&quot;list-group&quot;&gt;
  &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;


  &lt;li class=&quot;list-group-item list-group-item-primary&quot;&gt;A simple primary list group item&lt;/li&gt;
  &lt;li class=&quot;list-group-item list-group-item-secondary&quot;&gt;A simple secondary list group item&lt;/li&gt;
  &lt;li class=&quot;list-group-item list-group-item-success&quot;&gt;A simple success list group item&lt;/li&gt;
  &lt;li class=&quot;list-group-item list-group-item-danger&quot;&gt;A simple danger list group item&lt;/li&gt;
  &lt;li class=&quot;list-group-item list-group-item-warning&quot;&gt;A simple warning list group item&lt;/li&gt;
  &lt;li class=&quot;list-group-item list-group-item-info&quot;&gt;A simple info list group item&lt;/li&gt;
  &lt;li class=&quot;list-group-item list-group-item-light&quot;&gt;A simple light list group item&lt;/li&gt;
  &lt;li class=&quot;list-group-item list-group-item-dark&quot;&gt;A simple dark list group item&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>

            <p>Contextual classes also work with
                <code>.list-group-item-action</code>. Note the addition of the hover styles here not present in the previous example. Also supported is the
                <code>.active</code> state; apply it to indicate an active selection on a contextual list group item.
            </p>

            <div class="bd-example">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>

                    <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;list-group&quot;&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;Dapibus ac facilisis in&lt;/a&gt;


  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-primary&quot;&gt;A simple primary list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-secondary&quot;&gt;A simple secondary list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-success&quot;&gt;A simple success list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-danger&quot;&gt;A simple danger list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-warning&quot;&gt;A simple warning list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-info&quot;&gt;A simple info list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-light&quot;&gt;A simple light list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-dark&quot;&gt;A simple dark list group item&lt;/a&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-callout bd-callout-warning">
                <h5>Conveying meaning to assistive technologies</h5>

                <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the
                    <code>.sr-only</code> class.
                </p>
            </div>
        </div><!-- #list-group-contextual-classes -->

        <div id="list-group-with-badges">
            <h4>With badges</h4>
            <p>Add badges to any list group item to show unread counts, activity, and more with the help of some
                <a class="scroll-to-id" href="#flex">utilities</a>.
            </p>

            <div class="bd-example">
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Cras justo odio
                        <span class="badge badge-primary badge-pill">14</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Dapibus ac facilisis in
                        <span class="badge badge-primary badge-pill">2</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Morbi leo risus
                        <span class="badge badge-primary badge-pill">1</span>
                    </li>
                </ul>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;ul class=&quot;list-group&quot;&gt;
  &lt;li class=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt;
    Cras justo odio
    &lt;span class=&quot;badge badge-primary badge-pill&quot;&gt;14&lt;/span&gt;
  &lt;/li&gt;
  &lt;li class=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt;
    Dapibus ac facilisis in
    &lt;span class=&quot;badge badge-primary badge-pill&quot;&gt;2&lt;/span&gt;
  &lt;/li&gt;
  &lt;li class=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt;
    Morbi leo risus
    &lt;span class=&quot;badge badge-primary badge-pill&quot;&gt;1&lt;/span&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>
        </div><!-- #list-group-with-badges -->

        <div id="list-group-custom-content">
            <h4>Custom content</h4>
            <p>Add nearly any HTML within, even for linked list groups like the one below, with the help of
                <a class="scroll-to-id" href="#flex">flexbox utilities</a>.
            </p>

            <div class="bd-example">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">
                        <div class="d-flex w-100 justify-content-between">
                            <h5>List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small>Donec id elit non mi porta.</small>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                            <h5>List group item heading</h5>
                            <small class="text-muted">3 days ago</small>
                        </div>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small class="text-muted">Donec id elit non mi porta.</small>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                            <h5>List group item heading</h5>
                            <small class="text-muted">3 days ago</small>
                        </div>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small class="text-muted">Donec id elit non mi porta.</small>
                    </a>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;list-group&quot;&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action active&quot;&gt;
    &lt;div class=&quot;d-flex w-100 justify-content-between&quot;&gt;
      &lt;h5&gt;List group item heading&lt;/h5&gt;
      &lt;small&gt;3 days ago&lt;/small&gt;
    &lt;/div&gt;
    &lt;p&gt;Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.&lt;/p&gt;
    &lt;small&gt;Donec id elit non mi porta.&lt;/small&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;
    &lt;div class=&quot;d-flex w-100 justify-content-between&quot;&gt;
      &lt;h5&gt;List group item heading&lt;/h5&gt;
      &lt;small class=&quot;text-muted&quot;&gt;3 days ago&lt;/small&gt;
    &lt;/div&gt;
    &lt;p&gt;Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.&lt;/p&gt;
    &lt;small class=&quot;text-muted&quot;&gt;Donec id elit non mi porta.&lt;/small&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action&quot;&gt;
    &lt;div class=&quot;d-flex w-100 justify-content-between&quot;&gt;
      &lt;h5&gt;List group item heading&lt;/h5&gt;
      &lt;small class=&quot;text-muted&quot;&gt;3 days ago&lt;/small&gt;
    &lt;/div&gt;
    &lt;p&gt;Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.&lt;/p&gt;
    &lt;small class=&quot;text-muted&quot;&gt;Donec id elit non mi porta.&lt;/small&gt;
  &lt;/a&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #list-group-custom-content -->

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/list-group/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListGroup'
    }
</script>
