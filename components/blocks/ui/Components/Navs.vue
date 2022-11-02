<template>
    <div id="navs" class="spacer m-top-xl">
        <h3>Navs</h3>
        <p>Examples for how to use included navigation components.</p>

        <div id="base-nav">
            <h4>Base nav</h4>
            <p>Navigation available in share general markup and styles, from the base
                <code>.nav</code> class to the active and disabled states. Swap modifier classes to switch between each style.
            </p>
            <p>The base
                <code>.nav</code> component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.
            </p>

            <div class="bd-callout bd-callout-info">
                <p>The base
                    <code>.nav</code> component does not include any
                    <code>.active</code> state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.
                </p>
            </div>

            <div class="bd-example">
                <ul class="nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Active</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;ul class=&quot;nav&quot;&gt;
  &lt;li class=&quot;nav-item active&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>

            <p>Classes are used throughout, so your markup can be super flexible. Use
                <code>&lt;ul&gt;</code>s like above,
                <code>&lt;ol&gt;</code> if the order of your items is important, or roll your own with a
                <code>&lt;nav&gt;</code> element. Because the
                <code>.nav</code> uses
                <code>display: flex</code>, the nav links behave the same as nav items would, but without the extra markup.
            </p>

            <div class="bd-example">
                <nav class="nav">
                    <a class="nav-link active" href="#">Active</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </nav>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;nav class=&quot;nav&quot;&gt;
  &lt;a class=&quot;nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
  &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
&lt;/nav&gt;</code></pre>
            </figure>
        </div>

        <div id="available-styles">
            <h4>Available styles</h4>
            <p>Change the style of
                <code>.nav</code>s component with modifiers and utilities. Mix and match as needed, or build your own.
            </p>

            <div id="horizontal-alignment">
                <h5>Horizontal alignment</h5>
                <p>Change the horizontal alignment of your nav with
                    <a class="scroll-to-id" href="#horizontal-alignment">flexbox utilities</a>. By default, navs are left-aligned, but you can easily change them to center or right aligned.
                </p>

                <p>Centered with
                    <code>.justify-content-center</code>:
                </p>

                <div class="bd-example">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;ul class=&quot;nav justify-content-center&quot;&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                </figure>

                <p>Right-aligned with
                    <code>.justify-content-end</code>:
                </p>

                <div class="bd-example">
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;ul class=&quot;nav justify-content-end&quot;&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                </figure>
            </div>

            <div id="vertical">
                <h5>Vertical</h5>
                <p>Stack your navigation by changing the flex item direction with the
                    <code>.flex-column</code> utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g.,
                    <code>.flex-sm-column</code>).
                </p>

                <div class="bd-example">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;ul class=&quot;nav flex-column&quot;&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                </figure>

                <p>As always, vertical navigation is possible without
                    <code>&lt;ul&gt;</code>s, too.
                </p>

                <div class="bd-example">
                    <nav class="nav flex-column">
                        <a class="nav-link active" href="#">Active</a>
                        <a class="nav-link" href="#">Link</a>
                        <a class="nav-link" href="#">Link</a>
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </nav>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;nav class=&quot;nav flex-column&quot;&gt;
  &lt;a class=&quot;nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
  &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
&lt;/nav&gt;</code></pre>
                </figure>
            </div>

            <div id="tabs">
                <h5>Tabs</h5>
                <p>Takes the basic nav from above and adds the
                    <code>.nav-tabs</code> class to generate a tabbed interface.
                </p>
                <div class="bd-example">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;ul class=&quot;nav nav-tabs&quot;&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                </figure>
            </div>

            <div id="pills">
                <h5>Pills</h5>
                <p>Take that same HTML, but use
                    <code>.nav-pills</code> instead:
                </p>

                <div class="bd-example">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;ul class=&quot;nav nav-pills&quot;&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                </figure>
            </div>

            <div id="fill-and-justify">
                <h5>Fill and justify</h5>
                <p>Force your
                    <code>.nav</code>’s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your
                    <code>.nav-item</code>s, use
                    <code>.nav-fill</code>. Notice that all horizontal space is occupied, but not every nav item has the same width.
                </p>

                <div class="bd-example">
                    <ul class="nav nav-pills nav-fill">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Much longer nav link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;ul class=&quot;nav nav-pills nav-fill&quot;&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Much longer nav link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                </figure>

                <p>When using a
                    <code>&lt;nav&gt;</code>-based navigation, be sure to include
                    <code>.nav-item</code> on the anchors.
                </p>

                <div class="bd-example">
                    <nav class="nav nav-pills nav-fill">
                        <a class="nav-item nav-link active" href="#">Active</a>
                        <a class="nav-item nav-link" href="#">Much longer nav link</a>
                        <a class="nav-item nav-link" href="#">Link</a>
                        <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </nav>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;nav class=&quot;nav nav-pills nav-fill&quot;&gt;
  &lt;a class=&quot;nav-item nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
  &lt;a class=&quot;nav-item nav-link&quot; href=&quot;#&quot;&gt;Much longer nav link&lt;/a&gt;
  &lt;a class=&quot;nav-item nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;a class=&quot;nav-item nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
&lt;/nav&gt;</code></pre>
                </figure>

                <p>For equal-width elements, use
                    <code>.nav-justified</code>. All horizontal space will be occupied by nav links, but unlike the
                    <code>.nav-fill</code> above, every nav item will be the same width.
                </p>

                <div class="bd-example">
                    <ul class="nav nav-pills nav-justified">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Much longer nav link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;ul class=&quot;nav nav-pills nav-justified&quot;&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Much longer nav link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                </figure>

                <p>Similar to the
                    <code>.nav-fill</code> example using a
                    <code>&lt;nav&gt;</code>-based navigation, be sure to include
                    <code>.nav-item</code> on the anchors.
                </p>

                <div class="bd-example">
                    <nav class="nav nav-pills nav-justified">
                        <a class="nav-item nav-link active" href="#">Active</a>
                        <a class="nav-item nav-link" href="#">Much longer nav link</a>
                        <a class="nav-item nav-link" href="#">Link</a>
                        <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </nav>

                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;nav class=&quot;nav nav-pills nav-justified&quot;&gt;
  &lt;a class=&quot;nav-item nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
  &lt;a class=&quot;nav-item nav-link&quot; href=&quot;#&quot;&gt;Much longer nav link&lt;/a&gt;
  &lt;a class=&quot;nav-item nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;a class=&quot;nav-item nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
&lt;/nav&gt;</code></pre>
                </figure>
            </div>
        </div>

        <div id="working-with-flex-utilities">
            <h4>Working with flex utilities</h4>
            <p>If you need responsive nav variations, consider using a series of
                <a class="scroll-to-id" href="#flex">flexbox utilities</a>. While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, our nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint.
            </p>

            <div class="bd-example">
                <nav class="nav nav-pills flex-column flex-sm-row">
                    <a class="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>
                    <a class="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>
                    <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
                    <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </nav>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;nav class=&quot;nav nav-pills flex-column flex-sm-row&quot;&gt;
  &lt;a class=&quot;flex-sm-fill text-sm-center nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
  &lt;a class=&quot;flex-sm-fill text-sm-center nav-link&quot; href=&quot;#&quot;&gt;Longer nav link&lt;/a&gt;
  &lt;a class=&quot;flex-sm-fill text-sm-center nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
  &lt;a class=&quot;flex-sm-fill text-sm-center nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
&lt;/nav&gt;</code></pre>
            </figure>
        </div>

        <div id="regarding-accessibility">
            <h4>Regarding accessibility</h4>
            <p>If you’re using navs to provide a navigation bar, be sure to add a
                <code>role="navigation"</code> to the most logical parent container of the
                <code>&lt;ul&gt;</code>, or wrap a
                <code>&lt;nav&gt;</code> element around the whole navigation. Do not add the role to the
                <code>&lt;ul&gt;</code> itself, as this would prevent it from being announced as an actual list by assistive technologies.
            </p>
            <p>Note that navigation bars, even if visually styled as tabs with the
                <code>.nav-tabs</code> class, should
                <strong>not</strong> be given
                <code>role="tablist"</code>,
                <code>role="tab"</code> or
                <code>role="tabpanel"</code> attributes. These are only appropriate for dynamic tabbed interfaces, as described in the
                <a href="https://www.w3.org/TR/wai-aria-practices/#tabpanel" target="_blank"><abbr title="Web Accessibility Initiative">WAI</abbr>
                    <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices</a>.
            </p>

            <div id="using-dropdowns">
                <h5>Using dropdowns</h5>
                <p>Add dropdown menus with a little extra HTML and the dropdowns JavaScript plugin.</p>

                <div id="tabs-with-dropdowns">
                    <h6>Tabs with dropdowns</h6>

                    <div class="bd-example">

                        <b-nav tabs>
                            <b-nav-item active>Active</b-nav-item>
                            <b-nav-item-dropdown
                                id="my-nav-dropdown"
                                text="Dropdown"
                                toggle-class="nav-link-custom"
                                right
                            >
                                <b-dropdown-item>One</b-dropdown-item>
                                <b-dropdown-item>Two</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>Three</b-dropdown-item>
                            </b-nav-item-dropdown>
                            <b-nav-item>Link</b-nav-item>
                            <b-nav-item disabled>Disabled</b-nav-item>
                        </b-nav>

                    </div>

                    <figure class="highlight">
                        <pre><code class="language-html">&#x3C;b-nav tabs&#x3E;
    &#x3C;b-nav-item active&#x3E;Active&#x3C;/b-nav-item&#x3E;
    &#x3C;b-nav-item-dropdown
        id=&#x22;my-nav-dropdown&#x22;
        text=&#x22;Dropdown&#x22;
        toggle-class=&#x22;nav-link-custom&#x22;
        right
    &#x3E;
        &#x3C;b-dropdown-item&#x3E;One&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Two&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item&#x3E;Three&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-nav-item-dropdown&#x3E;
    &#x3C;b-nav-item&#x3E;Link&#x3C;/b-nav-item&#x3E;
    &#x3C;b-nav-item disabled&#x3E;Disabled&#x3C;/b-nav-item&#x3E;
&#x3C;/b-nav&#x3E;</code></pre>
                    </figure>
                </div>

                <div id="pills-with-dropdowns">
                    <h6>Pills with dropdowns</h6>

                    <div class="bd-example">
                        <b-nav pills>
                            <b-nav-item active>Active</b-nav-item>
                            <b-nav-item-dropdown
                                id="my-nav-dropdown"
                                text="Dropdown"
                                toggle-class="nav-link-custom"
                                right
                            >
                                <b-dropdown-item>One</b-dropdown-item>
                                <b-dropdown-item>Two</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>Three</b-dropdown-item>
                            </b-nav-item-dropdown>
                            <b-nav-item>Link</b-nav-item>
                            <b-nav-item disabled>Disabled</b-nav-item>
                        </b-nav>
                    </div>

                    <figure class="highlight">
                        <pre><code class="language-html">&#x3C;b-nav pills&#x3E;
    &#x3C;b-nav-item active&#x3E;Active&#x3C;/b-nav-item&#x3E;
    &#x3C;b-nav-item-dropdown
        id=&#x22;my-nav-dropdown&#x22;
        text=&#x22;Dropdown&#x22;
        toggle-class=&#x22;nav-link-custom&#x22;
        right
    &#x3E;
        &#x3C;b-dropdown-item&#x3E;One&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Two&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item&#x3E;Three&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-nav-item-dropdown&#x3E;
    &#x3C;b-nav-item&#x3E;Link&#x3C;/b-nav-item&#x3E;
    &#x3C;b-nav-item disabled&#x3E;Disabled&#x3C;/b-nav-item&#x3E;
&#x3C;/b-nav&#x3E;</code></pre>
                    </figure>
                </div>
            </div>
        </div>

        <div id="javascript-behavior">
            <h4>JavaScript behavior</h4>

            <div class="bd-example bd-example-tabs">
                <b-tabs content-class="mt-3">
                    <b-tab title="Home" active><p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p></b-tab>
                    <b-tab title="Profile"><p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p></b-tab>
                    <b-tab title="Contact" ><p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p></b-tab>
                </b-tabs>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;b-tabs content-class=&#x22;mt-3&#x22;&#x3E;
    &#x3C;b-tab title=&#x22;Home&#x22; active&#x3E;&#x3C;p&#x3E;Raw denim you probably haven&#x27;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.&#x3C;/p&#x3E;&#x3C;/b-tab&#x3E;
    &#x3C;b-tab title=&#x22;Profile&#x22;&#x3E;&#x3C;p&#x3E;Food truck fixie locavore, accusamus mcsweeney&#x27;s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.&#x3C;/p&#x3E;&#x3C;/b-tab&#x3E;
    &#x3C;b-tab title=&#x22;Contact&#x22; &#x3E;&#x3C;p&#x3E;Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney&#x27;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven&#x27;t heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.&#x3C;/p&#x3E;&#x3C;/b-tab&#x3E;
&#x3C;/b-tabs&#x3E;</code></pre>
            </figure>

            <p>The tabs plugin also works with pills.</p>

            <div class="bd-example bd-example-tabs">
                <b-tabs pills content-class="mt-3">
                    <b-tab title="Home" ><p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p></b-tab>
                    <b-tab title="Profile" active><p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p></b-tab>
                    <b-tab title="Contact" ><p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p></b-tab>
                </b-tabs>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;b-tabs content-class=&#x22;mt-3&#x22;&#x3E;
    &#x3C;b-tab title=&#x22;Home&#x22; active&#x3E;&#x3C;p&#x3E;Raw denim you probably haven&#x27;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.&#x3C;/p&#x3E;&#x3C;/b-tab&#x3E;
    &#x3C;b-tab title=&#x22;Profile&#x22;&#x3E;&#x3C;p&#x3E;Food truck fixie locavore, accusamus mcsweeney&#x27;s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.&#x3C;/p&#x3E;&#x3C;/b-tab&#x3E;
    &#x3C;b-tab title=&#x22;Contact&#x22; &#x3E;&#x3C;p&#x3E;Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney&#x27;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven&#x27;t heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.&#x3C;/p&#x3E;&#x3C;/b-tab&#x3E;
&#x3C;/b-tabs&#x3E;</code></pre>
            </figure>

            <p>And with vertical pills.</p>

            <div class="bd-example bd-example-tabs">

<b-tabs vertical pills content-class="col-9" nav-wrapper-class="col-3  flex-column">
    <b-tab title="Home" ><p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p></b-tab>
    <b-tab title="Profile" active><p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p></b-tab>
    <b-tab title="Contact" ><p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p></b-tab>
</b-tabs>

            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;b-tabs vertical pills content-class=&#x22;col-9&#x22; nav-wrapper-class=&#x22;col-3  flex-column&#x22;&#x3E;
    &#x3C;b-tab title=&#x22;Home&#x22; &#x3E;&#x3C;p&#x3E;Raw denim you probably haven&#x27;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.&#x3C;/p&#x3E;&#x3C;/b-tab&#x3E;
    &#x3C;b-tab title=&#x22;Profile&#x22; active&#x3E;&#x3C;p&#x3E;Food truck fixie locavore, accusamus mcsweeney&#x27;s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.&#x3C;/p&#x3E;&#x3C;/b-tab&#x3E;
    &#x3C;b-tab title=&#x22;Contact&#x22; &#x3E;&#x3C;p&#x3E;Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney&#x27;s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven&#x27;t heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.&#x3C;/p&#x3E;&#x3C;/b-tab&#x3E;
&#x3C;/b-tabs&#x3E;</code></pre>
            </figure>
        </div><!-- #javascript-behavior -->

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/navs/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navs'
    }
</script>
