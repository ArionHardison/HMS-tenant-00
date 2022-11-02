<template>
    <div id="dropdowns" class="spacer m-top-xl">
        <h3>Dropdowns</h3>
        <p>Toggle contextual overlays for displaying lists of links and more.</p>

        <div id="dropdowns-open-variations">
            <h4>Open variations</h4>

            <div class="bd-example">
                <b-button-group>
                    <b-dropdown variant="primary" text="Click default">
                        <b-dropdown-item>Action</b-dropdown-item>
                        <b-dropdown-item>Another action</b-dropdown-item>
                        <b-dropdown-item>Something else here</b-dropdown-item>
                    </b-dropdown>
                </b-button-group>

                <b-button-group class="dropdown-click-effect">
                    <b-dropdown variant="primary" text="Click effect">
                        <b-dropdown-item>Action</b-dropdown-item>
                        <b-dropdown-item>Another action</b-dropdown-item>
                        <b-dropdown-item>Something else here</b-dropdown-item>
                    </b-dropdown>
                </b-button-group>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown variant=&#x22;primary&#x22; text=&#x22;Click default&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;

&#x3C;b-button-group class=&#x22;dropdown-click-effect&#x22;&#x3E;
    &#x3C;b-dropdown variant=&#x22;primary&#x22; text=&#x22;Click effect&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;</code></pre>
            </figure>
        </div><!-- #dropdowns-open-variations -->

        <div id="dropdowns-examples" class="spacer m-top-lg">
            <h4>Default examples</h4>
            <p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within
                <code>.dropdown</code>, or another element that declares
                <code>position: relative;</code>. Dropdowns can be triggered from
                <code>&lt;a&gt;</code> or
                <code>&lt;button&gt;</code> elements to better fit your potential needs.
            </p>

            <div id="single-button">
                <h5>Single button</h5>
                <p>Any single
                    <code>.btn</code> can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either
                    <code>&lt;button&gt;</code> elements:
                </p>

                <div class="bd-example">
                    <b-dropdown variant="primary" text="Dropdown Button">
                        <b-dropdown-item>Action</b-dropdown-item>
                        <b-dropdown-item>Another action</b-dropdown-item>
                        <b-dropdown-item>Something else here</b-dropdown-item>
                    </b-dropdown>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&#x3C;b-dropdown variant=&#x22;primary&#x22; text=&#x22;Dropdown Button&#x22;&#x3E;
    &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
    &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
    &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
&#x3C;/b-dropdown&#x3E;</code></pre>
                </figure>

                <p>The best part is you can do this with any button variant, too:</p>

                <div class="bd-example">
                    <b-button-group>
                        <b-dropdown variant="primary" text="Primary">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                    <b-button-group>
                        <b-dropdown variant="secondary" text="Secondary">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                    <b-button-group>
                        <b-dropdown variant="success" text="Success">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                    <b-button-group>
                        <b-dropdown variant="info" text="Info">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                    <b-button-group>
                        <b-dropdown variant="warning" text="Warning">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                    <b-button-group>
                        <b-dropdown variant="danger" text="Danger">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;!-- Example single danger button --&gt;
&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown variant=&#x22;danger&#x22; text=&#x22;Danger&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;</code></pre>
                </figure>
            </div><!-- #single-button -->

            <div id="split-button">
                <h5>Split button</h5>
                <p>Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of
                    <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.
                </p>
                <p>We use this extra class to reduce the horizontal
                    <code>padding</code> on either side of the caret by 25% and remove the
                    <code>margin-left</code> that’s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.
                </p>

                <div class="bd-example">
                    <b-button-group>
                        <b-dropdown split variant="primary" text="Primary">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                    <b-button-group>
                        <b-dropdown split variant="secondary" text="Secondary">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                    <b-button-group>
                        <b-dropdown split variant="success" text="Success">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                    <b-button-group>
                        <b-dropdown split variant="info" text="Info">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                    <b-button-group>
                        <b-dropdown split variant="warning" text="Warning">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                    <b-button-group>
                        <b-dropdown split variant="danger" text="Danger">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;!-- Example split danger button --&gt;
&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown split variant=&#x22;danger&#x22; text=&#x22;Danger&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;</code></pre>
                </figure>
            </div>

            <div id="dropdowns-button-sizing">
                <h5>Sizing</h5>
                <p>Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.</p>

                <div class="bd-example">


                    <div class="btn-toolbar" role="toolbar">
                        <b-button-group>
                            <b-dropdown size="lg" variant="primary" text="Large button">
                                <b-dropdown-item>Action</b-dropdown-item>
                                <b-dropdown-item>Another action</b-dropdown-item>
                                <b-dropdown-item>Something else here</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>Separated link</b-dropdown-item>
                            </b-dropdown>
                        </b-button-group>
                        <b-button-group class="ml-2">
                            <b-dropdown size="lg" split variant="primary" text="Large split button">
                                <b-dropdown-item>Action</b-dropdown-item>
                                <b-dropdown-item>Another action</b-dropdown-item>
                                <b-dropdown-item>Something else here</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>Separated link</b-dropdown-item>
                            </b-dropdown>
                        </b-button-group>
                    </div><!-- /btn-toolbar -->
                    <div class="btn-toolbar" role="toolbar">
                        <b-button-group>
                            <b-dropdown size="sm" variant="primary" text="Large button">
                                <b-dropdown-item>Action</b-dropdown-item>
                                <b-dropdown-item>Another action</b-dropdown-item>
                                <b-dropdown-item>Something else here</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>Separated link</b-dropdown-item>
                            </b-dropdown>
                        </b-button-group>
                        <b-button-group class="ml-2">
                            <b-dropdown size="sm" split variant="primary" text="Large split button">
                                <b-dropdown-item>Action</b-dropdown-item>
                                <b-dropdown-item>Another action</b-dropdown-item>
                                <b-dropdown-item>Something else here</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>Separated link</b-dropdown-item>
                            </b-dropdown>
                        </b-button-group>
                    </div><!-- /btn-toolbar -->
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;!-- Large button groups (default and split) --&gt;
&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown size=&#x22;lg&#x22; variant=&#x22;primary&#x22; text=&#x22;Large button&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;
&#x3C;b-button-group class=&#x22;ml-2&#x22;&#x3E;
    &#x3C;b-dropdown size=&#x22;lg&#x22; split variant=&#x22;primary&#x22; text=&#x22;Large split button&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;

&lt;!-- Small button groups (default and split) --&gt;
&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown size=&#x22;sm&#x22; variant=&#x22;primary&#x22; text=&#x22;Large button&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;
&#x3C;b-button-group class=&#x22;ml-2&#x22;&#x3E;
    &#x3C;b-dropdown size=&#x22;sm&#x22; split variant=&#x22;primary&#x22; text=&#x22;Large split button&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;</code></pre>
                </figure>
            </div><!-- #dropdowns-button-sizing -->
        </div><!-- #dropdowns-examples -->

        <div id="directions">
            <h4>Directions</h4>

            <div id="dropup">
                <h5>Dropup</h5>
                <p>Trigger dropdown menus above elements by adding
                    <code>.dropup</code> to the parent element.
                </p>

                <div class="bd-example">
                    <b-button-group>
                        <b-dropdown dropup variant="primary" text="Dropup">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated link</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>

                    <b-button-group>
                        <b-dropdown dropup split variant="primary" text="Split dropup">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated link</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;!-- Default dropup button --&gt;
&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown dropup variant=&#x22;primary&#x22; text=&#x22;Dropup&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;

&lt;!-- Split dropup button --&gt;
&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown dropup split variant=&#x22;primary&#x22; text=&#x22;Split dropup&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;</code></pre>
                </figure>
            </div><!-- #dropup -->

            <div id="dropright">
                <h5>Dropright</h5>
                <p>Trigger dropdown menus at the right of the elements by adding
                    <code>.dropright</code> to the parent element.
                </p>

                <div class="bd-example">
                    <b-button-group>
                        <b-dropdown dropright variant="primary" text="Drop right">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated link</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>

                    <b-button-group>
                        <b-dropdown dropright split variant="primary" text="Split drop right">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated link</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;!-- Default dropright button --&gt;
&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown dropright split variant=&#x22;primary&#x22; text=&#x22;Split dropup&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;

&lt;!-- Split dropright button --&gt;
&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown dropright split variant=&#x22;primary&#x22; text=&#x22;Split drop right&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;</code></pre>
                </figure>
            </div><!-- #dropright -->

            <div id="dropleft">
                <h5>Dropleft</h5>
                <p>Trigger dropdown menus at the left of the elements by adding
                    <code>.dropleft</code> to the parent element.
                </p>

                <div class="bd-example">
                    <b-button-group>
                        <b-dropdown dropleft variant="primary" text="Drop left">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated link</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>

                    <b-button-group>
                        <b-dropdown dropleft split variant="primary" text="Split drop left">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated link</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;!-- Default dropleft button --&gt;
&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown dropleft variant=&#x22;primary&#x22; text=&#x22;Split dropup&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;

&lt;!-- Split dropleft button --&gt;
&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown dropleft split variant=&#x22;primary&#x22; text=&#x22;Split dropup&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
        &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;</code></pre>
                </figure>
            </div><!-- #dropleft -->
        </div><!-- #directions -->

        <div id="menu-items">
            <h4>Menu items</h4>
            <p>Historically dropdown menu contents
                <em>had</em> to be links, but that’s no longer the case with v4. Now you can optionally use
                <code>&lt;button&gt;</code> elements in your dropdowns instead of just
                <code>&lt;a&gt;</code>s.
            </p>

            <div class="bd-example">
                <b-button-group>
                    <b-dropdown variant="primary" text="Dropdown">
                        <b-dropdown-item>Action</b-dropdown-item>
                        <b-dropdown-item>Another action</b-dropdown-item>
                        <b-dropdown-item>Something else here</b-dropdown-item>
                    </b-dropdown>
                </b-button-group>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown variant=&#x22;primary&#x22; text=&#x22;Dropdown&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;</code></pre>
            </figure>

            <p>You can also create non-interactive dropdown items with
                <code>.dropdown-item-text</code>. Feel free to style further with custom CSS or text utilities.
            </p>

            <div class="bd-example">
                <div class="dropdown-menu">
                    <span class="dropdown-item-text">Dropdown item text</span>
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;dropdown-menu&quot;&gt;
  &lt;span class=&quot;dropdown-item-text&quot;&gt;Dropdown item text&lt;/span&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <h5>Active</h5>
            <p>Add
                <code>.active</code> to items in the dropdown to
                <strong>style them as active</strong>.
            </p>

            <div class="bd-example">
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Regular link</a>
                    <a class="dropdown-item active" href="#">Active link</a>
                    <a class="dropdown-item" href="#">Another link</a>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;dropdown-menu&quot;&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Regular link&lt;/a&gt;
  &lt;a class=&quot;dropdown-item active&quot; href=&quot;#&quot;&gt;Active link&lt;/a&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another link&lt;/a&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <h5>Disabled</h5>
            <p>Add
                <code>.disabled</code> to items in the dropdown to
                <strong>style them as disabled</strong>.
            </p>

            <div class="bd-example">
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Regular link</a>
                    <a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Disabled link</a>
                    <a class="dropdown-item" href="#">Another link</a>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;dropdown-menu&quot;&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Regular link&lt;/a&gt;
  &lt;a class=&quot;dropdown-item disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled link&lt;/a&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another link&lt;/a&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #menu-items -->

        <div id="menu-alignment">
            <h4>Menu alignment</h4>
            <p>By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add
                <code>.dropdown-menu-right</code> to a
                <code>.dropdown-menu</code> to right align the dropdown menu.
            </p>

            <div class="bd-example">
                <b-button-group>
                    <b-dropdown right variant="primary" text="Right-aligned menu">
                        <b-dropdown-item>Action</b-dropdown-item>
                        <b-dropdown-item>Another action</b-dropdown-item>
                        <b-dropdown-item>Something else here</b-dropdown-item>
                    </b-dropdown>
                </b-button-group>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown right variant=&#x22;primary&#x22; text=&#x22;Right-aligned menu&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;</code></pre>
            </figure>

            <div id="responsive-alignment">
                <h5>Responsive alignment</h5>
                <p>If you want to use responsive alignment, disable dynamic positioning by adding the
                    <code>data-display="static"</code> attribute and use the responsive variation classes.
                </p>
                <p>To align
                    <strong>right</strong> the dropdown menu with the given breakpoint or larger, add
                    <code>.dropdown-menu{-sm|-md|-lg|-xl}-right</code>.
                </p>

                <div class="bd-example">
                    <b-button-group>
                        <b-dropdown class="dropdown-menu-lg-right" left variant="primary" text="Left-aligned but right aligned when large screen" data-display="static">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown class=&#x22;dropdown-menu-lg-right&#x22; left variant=&#x22;primary&#x22; text=&#x22;Left-aligned but right aligned when large screen&#x22; data-display=&#x22;static&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;</code></pre>
                </figure>

                <p>To align
                    <strong>left</strong> the dropdown menu with the given breakpoint or larger, add
                    <code>.dropdown-menu-right</code> and
                    <code>.dropdown-menu{-sm|-md|-lg|-xl}-left</code>.
                </p>

                <div class="bd-example">
                    <b-button-group>
                        <b-dropdown class="dropdown-menu-lg-left" right variant="primary" text="Right-aligned but left aligned when large screen" data-display="static">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&#x3C;b-button-group&#x3E;
    &#x3C;b-dropdown class=&#x22;dropdown-menu-lg-left&#x22; right variant=&#x22;primary&#x22; text=&#x22;Right-aligned but left aligned when large screen&#x22; data-display=&#x22;static&#x22;&#x3E;
        &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
        &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
    &#x3C;/b-dropdown&#x3E;
&#x3C;/b-button-group&#x3E;</code></pre>
                </figure>f

                <p>Note that you don’t need to add a
                    <code>data-display="static"</code> attribute to dropdown buttons in navbars, since Popper.js isn’t used in navbars.
                </p>
            </div><!-- #responsive-alignment -->
        </div><!-- #menu-alignment -->

        <div id="menu-content" class="spacer m-top-lg">
            <h4>Menu content</h4>

            <div id="headers">
                <h5>Headers</h5>
                <p>Add a header to label sections of actions in any dropdown menu.</p>

                <div class="bd-example">
                    <div class="dropdown-menu">
                        <h6 class="dropdown-header">Dropdown header</h6>
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;dropdown-menu&quot;&gt;
  &lt;h6 class=&quot;dropdown-header&quot;&gt;Dropdown header&lt;/h6&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #headers -->

            <div id="dividers">
                <h5>Dividers</h5>
                <p>Separate groups of related menu items with a divider.</p>

                <div class="bd-example">
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;dropdown-menu&quot;&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
  &lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #dividers -->

            <div id="menu-text">
                <h5>Text</h5>
                <p>Place any freeform text within a dropdown menu with text and use
                    <a href="#spacing">spacing utilities</a>. Note that you’ll likely need additional sizing styles to constrain the menu width.
                </p>

                <div class="bd-example">
                    <div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
                        <p>
                            Some example text that's free-flowing within the dropdown menu.
                        </p>
                        <p class="mb-0">
                            And this is more example text.
                        </p>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;dropdown-menu p-4 text-muted&quot; style=&quot;max-width: 200px;&quot;&gt;
  &lt;p&gt;
    Some example text that's free-flowing within the dropdown menu.
  &lt;/p&gt;
  &lt;p class=&quot;mb-0&quot;&gt;
    And this is more example text.
  &lt;/p&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #menu-text -->

            <div id="menu-forms">
                <h5>Forms</h5>
                <p>Put a form within a dropdown menu, or make it into a dropdown menu, and use
                    <a class="scroll-to-id" href="#spacing">margin or padding utilities</a> to give it the negative space you require.
                </p>

                <div class="bd-example">
                    <div class="dropdown-menu">
                        <form class="px-3 py-3">
                            <div class="form-group">
                                <label for="exampleDropdownFormEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
                            </div>
                            <div class="form-group">
                                <label for="exampleDropdownFormPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="dropdownCheck">
                                    <label class="form-check-label" for="dropdownCheck">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">New around here? Sign up</a>
                        <a class="dropdown-item" href="#">Forgot password?</a>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;dropdown-menu&quot;&gt;
  &lt;form class=&quot;px-3 py-3&quot;&gt;
    &lt;div class=&quot;form-group&quot;&gt;
      &lt;label for=&quot;exampleDropdownFormEmail1&quot;&gt;Email address&lt;/label&gt;
      &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormEmail1&quot; placeholder=&quot;email@example.com&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
      &lt;label for=&quot;exampleDropdownFormPassword1&quot;&gt;Password&lt;/label&gt;
      &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormPassword1&quot; placeholder=&quot;Password&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
      &lt;div class=&quot;form-check&quot;&gt;
        &lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;dropdownCheck&quot;&gt;
        &lt;label class=&quot;form-check-label&quot; for=&quot;dropdownCheck&quot;&gt;
          Remember me
        &lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Sign in&lt;/button&gt;
  &lt;/form&gt;
  &lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;New around here? Sign up&lt;/a&gt;
  &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Forgot password?&lt;/a&gt;
&lt;/div&gt;</code></pre>
                </figure>

                <div class="bd-example">
                    <form class="dropdown-menu p-4">
                        <div class="form-group">
                            <label for="exampleDropdownFormEmail2">Email address</label>
                            <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
                        </div>
                        <div class="form-group">
                            <label for="exampleDropdownFormPassword2">Password</label>
                            <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                                <label class="form-check-label" for="dropdownCheck2">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;form class=&quot;dropdown-menu p-4&quot;&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;exampleDropdownFormEmail2&quot;&gt;Email address&lt;/label&gt;
    &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormEmail2&quot; placeholder=&quot;email@example.com&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;exampleDropdownFormPassword2&quot;&gt;Password&lt;/label&gt;
    &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormPassword2&quot; placeholder=&quot;Password&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;div class=&quot;form-check&quot;&gt;
      &lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;dropdownCheck2&quot;&gt;
      &lt;label class=&quot;form-check-label&quot; for=&quot;dropdownCheck2&quot;&gt;
        Remember me
      &lt;/label&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Sign in&lt;/button&gt;
&lt;/form&gt;</code></pre>
                </figure>
            </div><!-- #menu-forms -->
        </div><!-- #menu-content -->

        <div id="dropdown-options">
            <h4>Dropdown options</h4>
            <p>Use
                <code>data-offset</code> or
                <code>data-reference</code> to change the location of the dropdown.
            </p>

            <div class="bd-example">
                <div class="d-flex">
<b-dropdown id="dropdown-offset" offset="20" text="Offset Dropdown" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">
 &#x3C;b-dropdown id=&#x22;dropdown-offset&#x22; offset=&#x22;20&#x22; text=&#x22;Offset Dropdown&#x22; class=&#x22;m-2&#x22;&#x3E;
    &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
    &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
    &#x3C;b-dropdown-item href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
&#x3C;/b-dropdown&#x3E;
                </code></pre>
            </figure>
        </div><!-- #dropdown-options -->

        <div id="dropdown-usage">
            <h4>Usage</h4>
            <p>Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the
                <code>.show</code> class on the parent list item. The
                <code>data-toggle="dropdown"</code> attribute is relied on for closing dropdown menus at an application level, so it’s a good idea to always use it.
            </p>

            <h5>Via data attributes</h5>
            <p>Add
                <code>data-toggle="dropdown"</code> to a link or button to toggle a dropdown.
            </p>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;dropdown&quot;&gt;
  &lt;button id=&quot;dLabel&quot; type=&quot;button&quot; data-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
    Dropdown trigger
  &lt;/button&gt;
  &lt;div class=&quot;dropdown-menu&quot; aria-labelledby=&quot;dLabel&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #dropdown-usage -->

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/dropdowns/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dropdowns'
    }
</script>
