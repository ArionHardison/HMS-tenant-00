<template>
    <div id="card" class="spacer m-top-xl">
        <h3>Card</h3>
        <p>Cards provide a flexible and extensible content container. It supports a wide variety of content, including images, text, links, and more.</p>

        <div id="card-example">
            <h4>Example</h4>
            <p>Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no
                <code>margin</code> by default, so use
                <a class="scroll-to-id" href="#spacing">spacing utilities</a> as needed.
            </p>
            <p>Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various
                <a class="scroll-to-id" href="#card-sizing">sizing options</a>.
            </p>

            <div class="bd-example">
                <div class="card" style="width: 18rem;">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>Image cap</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">Image cap</text>
                    </svg>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card&quot; style=&quot;width: 18rem;&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #card-example -->

        <div id="card-content-type">
            <h4>Content type</h4>
            <p>Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.</p>

            <h5>Body</h5>
            <p>The building block of a card is the
                <code>.card-body</code>. Use it whenever you need a padded section within a card.
            </p>

            <div class="bd-example">
                <div class="card">
                    <div class="card-body">
                        This is some text within a card body.
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    This is some text within a card body.
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <h5>Titles, text, and links</h5>
            <p>Card titles are used by adding
                <code>.card-title</code> to a
                <code>&lt;h*&gt;</code> tag. In the same way, links are added and placed next to each other by adding
                <code>.card-link</code> to an
                <code>&lt;a&gt;</code> tag.
            </p>
            <p>Subtitles are used by adding a
                <code>.card-subtitle</code> to a
                <code>&lt;h*&gt;</code> tag. If the
                <code>.card-title</code> and the
                <code>.card-subtitle</code> items are placed in a
                <code>.card-body</code> item, the card title and subtitle are aligned nicely.
            </p>

            <div class="bd-example">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card&quot; style=&quot;width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
    &lt;h6 class=&quot;card-subtitle mb-2 text-muted&quot;&gt;Card subtitle&lt;/h6&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;card-link&quot;&gt;Card link&lt;/a&gt;
    &lt;a href=&quot;#&quot; class=&quot;card-link&quot;&gt;Another link&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <h5>Images</h5>
            <p>
                <code>.card-img-top</code> places an image to the top of the card. With
                <code>.card-text</code>, text can be added to the card. Text within
                <code>.card-text</code> can also be styled with the standard HTML tags.
            </p>

            <div class="bd-example">
                <div class="card" style="width: 18rem;">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">Image cap</text>
                    </svg>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card&quot; style=&quot;width: 18rem;&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <h5>List groups</h5>
            <div class="bd-example">
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card&quot; style=&quot;width: 18rem;&quot;&gt;
  &lt;ul class=&quot;list-group list-group-flush&quot;&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Vestibulum at eros&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        Featured
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card&quot; style=&quot;width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;
    Featured
  &lt;/div&gt;
  &lt;ul class=&quot;list-group list-group-flush&quot;&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Vestibulum at eros&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <h5>Kitchen sink</h5>
            <p>Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.</p>

            <div class="bd-example">
                <div class="card" style="width: 18rem;">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">Image cap</text>
                    </svg>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card&quot; style=&quot;width: 18rem;&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
  &lt;ul class=&quot;list-group list-group-flush&quot;&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Vestibulum at eros&lt;/li&gt;
  &lt;/ul&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;a href=&quot;#&quot; class=&quot;card-link&quot;&gt;Card link&lt;/a&gt;
    &lt;a href=&quot;#&quot; class=&quot;card-link&quot;&gt;Another link&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <h5>Header and footer</h5>
            <p>Add an optional header and/or footer within a card.</p>

            <div class="bd-example">
                <div class="card">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;
    Featured
  &lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Special title treatment&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <p>Card headers can be styled by adding
                <code>.card-header</code> to
                <code>&lt;h*&gt;</code> elements.
            </p>

            <div class="bd-example">
                <div class="card">
                    <h5 class="card-header">Featured</h5>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card&quot;&gt;
  &lt;h5 class=&quot;card-header&quot;&gt;Featured&lt;/h5&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Special title treatment&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="card">
                    <div class="card-header">
                        Quote
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer class="blockquote-footer">Someone famous in
                                <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;
    Quote
  &lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;blockquote class=&quot;blockquote mb-0&quot;&gt;
      &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
      &lt;footer class=&quot;blockquote-footer&quot;&gt;Someone famous in &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;&lt;/footer&gt;
    &lt;/blockquote&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="card text-center">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card text-center&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;
    Featured
  &lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Special title treatment&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card-footer text-muted&quot;&gt;
    2 days ago
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

        </div><!-- #card-content-type -->

        <div id="card-sizing">
            <h4>Sizing</h4>
            <p>Cards assume no specific
                <code>width</code> to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.
            </p>

            <h5>Using grid markup</h5>
            <p>Using the grid, wrap cards in columns and rows as needed.</p>

            <div class="bd-example">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col-sm-6&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;Special title treatment&lt;/h5&gt;
        &lt;p class=&quot;card-text&quot;&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
        &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;col-sm-6&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;Special title treatment&lt;/h5&gt;
        &lt;p class=&quot;card-text&quot;&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
        &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <h5>Using utilities</h5>
            <p>Use our handful of
                <a class="scroll-to-id" href="#sizing">available sizing utilities</a> to quickly set a card’s width.
            </p>

            <div class="bd-example">
                <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>

                <div class="card w-50">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card w-75&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Button&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;card w-50&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Button&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <h5>Using custom CSS</h5>
            <p>Use custom CSS in your stylesheets or as inline styles to set a width.</p>

            <div class="bd-example">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card&quot; style=&quot;width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Special title treatment&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <h5>Text alignment</h5>
            <p>You can quickly change the text alignment of any card—in its entirety or specific parts—with our
                <a href="#text-alignment">text align classes</a>.
            </p>

            <div class="bd-example">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card text-center" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card text-right" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card&quot; style=&quot;width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Special title treatment&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;card text-center&quot; style=&quot;width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Special title treatment&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;card text-right&quot; style=&quot;width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Special title treatment&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #card-sizing -->

        <div id="card-navigation">
            <h4>Navigation</h4>
            <p>Add some navigation to a card’s header (or block) with
                <a class="scroll-to-id" href="#navs">nav components</a>.
            </p>

            <div class="bd-example">
                <div class="card text-center">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card text-center&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;
    &lt;ul class=&quot;nav nav-tabs card-header-tabs&quot;&gt;
      &lt;li class=&quot;nav-item&quot;&gt;
        &lt;a class=&quot;nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item&quot;&gt;
        &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item&quot;&gt;
        &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Special title treatment&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="card text-center">
                    <div class="card-header">
                        <ul class="nav nav-pills card-header-pills">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card text-center&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;
    &lt;ul class=&quot;nav nav-pills card-header-pills&quot;&gt;
      &lt;li class=&quot;nav-item&quot;&gt;
        &lt;a class=&quot;nav-link active&quot; href=&quot;#&quot;&gt;Active&lt;/a&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item&quot;&gt;
        &lt;a class=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item&quot;&gt;
        &lt;a class=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Special title treatment&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #card-navigation -->

        <div id="card-images">
            <h4>Card images</h4>
            <p>Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card.</p>

            <div id="image-caps">
                <h5>Image caps</h5>
                <p>Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.</p>

                <div class="bd-example">
                    <div class="card mb-3">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%"></rect>
                            <text x="50%" y="50%" dy=".3em">Image cap</text>
                        </svg>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                        <svg class="bd-placeholder-img card-img-bottom" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%"></rect>
                            <text x="50%" y="50%" dy=".3em">Image cap</text>
                        </svg>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;card mb-3&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
    &lt;p class=&quot;card-text&quot;&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
    &lt;p class=&quot;card-text&quot;&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/p&gt;
  &lt;/div&gt;
  &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #image-caps -->

            <div id="image-overlays">
                <h5>Image overlays</h5>
                <p>Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.</p>

                <div class="bd-example">
                    <div class="card bg-dark text-white">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg card-img" width="100%" height="270" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%"></rect>
                            <text x="50%" y="50%" dy=".3em">Card image</text>
                        </svg>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;card bg-dark text-white&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;card-img&quot; alt=&quot;...&quot;&gt;
  &lt;div class=&quot;card-img-overlay&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
    &lt;p class=&quot;card-text&quot;&gt;Last updated 3 mins ago&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #image-overlays -->

            <div id="image-horizontal">
                <h5>Horizontal</h5>
                <p>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with
                    <code>.no-gutters</code> and use
                    <code>.col-md-*</code> classes to make the card horizontal at the
                    <code>md</code> breakpoint. Further adjustments may be needed depending on your card content.
                </p>

                <div class="bd-example">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Image</text>
                                </svg>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;card mb-3&quot; style=&quot;max-width: 540px;&quot;&gt;
  &lt;div class=&quot;row no-gutters&quot;&gt;
    &lt;div class=&quot;col-md-4&quot;&gt;
      &lt;img src=&quot;...&quot; class=&quot;card-img&quot; alt=&quot;...&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-md-8&quot;&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
        &lt;p class=&quot;card-text&quot;&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
        &lt;p class=&quot;card-text&quot;&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #image-horizontal -->
        </div><!-- #card-images -->

        <div id="card-style">
            <h4>Card style</h4>
            <p>Cards include various options for customizing their backgrounds, borders, and color.</p>

            <div id="background-and-color">
                <h5>Background and color</h5>
                <p>Use
                    <a href="#colors">text and background utilities</a> to change the appearance of a card.
                </p>

                <div class="bd-example">
                    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Primary card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Secondary card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Success card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Danger card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Warning card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Info card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Dark card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;card text-white bg-primary mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Primary card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card text-white bg-secondary mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Secondary card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card text-white bg-success mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Success card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card text-white bg-danger mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Danger card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card text-white bg-warning mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Warning card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card text-white bg-info mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Info card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card bg-light mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Light card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card text-white bg-dark mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Dark card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #background-and-color -->

            <div id="card-border">
                <h5>Border</h5>
                <p>Use
                    <a class="scroll-to-id" href="#borders">border utilities</a> to change just the
                    <code>border-color</code> of a card. Note that you can put
                    <code>.text-{color}</code> classes on the parent
                    <code>.card</code> or a subset of the card’s contents as shown below.
                </p>

                <div class="bd-example">
                    <div class="card border-primary mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body text-primary">
                            <h5 class="card-title">Primary card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card border-secondary mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body text-secondary">
                            <h5 class="card-title">Secondary card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card border-success mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body text-success">
                            <h5 class="card-title">Success card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card border-danger mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body text-danger">
                            <h5 class="card-title">Danger card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card border-warning mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body text-warning">
                            <h5 class="card-title">Warning card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card border-info mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body text-info">
                            <h5 class="card-title">Info card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card border-light mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card border-dark mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body text-dark">
                            <h5 class="card-title">Dark card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;card border-primary mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body text-primary&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Primary card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card border-secondary mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body text-secondary&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Secondary card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card border-success mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body text-success&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Success card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card border-danger mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body text-danger&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Danger card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card border-warning mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body text-warning&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Warning card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card border-info mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body text-info&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Info card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card border-light mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Light card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;card border-dark mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body text-dark&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Dark card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #card-border -->

            <div id="card-mixins-utilities">
                <h5>Mixins utilities</h5>
                <p>You can also change the borders on the card header and footer as needed, and even remove their
                    <code>background-color</code> with
                    <code>.bg-transparent</code>.
                </p>

                <div class="bd-example">
                    <div class="card border-success mb-3" style="max-width: 18rem;">
                        <div class="card-header bg-transparent border-success">Header</div>
                        <div class="card-body text-success">
                            <h5 class="card-title">Success card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div class="card-footer bg-transparent border-success">Footer</div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;card border-success mb-3&quot; style=&quot;max-width: 18rem;&quot;&gt;
  &lt;div class=&quot;card-header bg-transparent border-success&quot;&gt;Header&lt;/div&gt;
  &lt;div class=&quot;card-body text-success&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Success card title&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card-footer bg-transparent border-success&quot;&gt;Footer&lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #card-mixins-utilities -->
        </div><!-- #card-style -->

        <div id="card-layout">
            <h4>Card layout</h4>
            <p>In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being,
                <strong>these layout options are not yet responsive</strong>.
            </p>

            <div id="card-groups">
                <h5>Card groups</h5>
                <p>Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use
                    <code>display: flex;</code> to achieve their uniform sizing.
                </p>

                <div class="bd-example">
                    <div class="card-group">
                        <div class="card">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;card-group&quot;&gt;
  &lt;div class=&quot;card&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
      &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
      &lt;p class=&quot;card-text&quot;&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
      &lt;p class=&quot;card-text&quot;&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
      &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
      &lt;p class=&quot;card-text&quot;&gt;This card has supporting text below as a natural lead-in to additional content.&lt;/p&gt;
      &lt;p class=&quot;card-text&quot;&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>

                <p>When using card groups with footers, their content will automatically line up.</p>

                <div class="bd-example">
                    <div class="card-group">
                        <div class="card">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div class="card">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;card-group&quot;&gt;
  &lt;div class=&quot;card&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
      &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
      &lt;p class=&quot;card-text&quot;&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;card-footer&quot;&gt;
      &lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
      &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
      &lt;p class=&quot;card-text&quot;&gt;This card has supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;card-footer&quot;&gt;
      &lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #card-groups -->

            <div id="card-decks">
                <h5>Card decks</h5>
                <p>Need a set of equal width and height cards that aren’t attached to one another? Use card decks.</p>

                <div class="bd-example">
                    <div class="card-deck">
                        <div class="card">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;card-deck&quot;&gt;
  &lt;div class=&quot;card&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
      &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
      &lt;p class=&quot;card-text&quot;&gt;This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
      &lt;p class=&quot;card-text&quot;&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
      &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
      &lt;p class=&quot;card-text&quot;&gt;This card has supporting text below as a natural lead-in to additional content.&lt;/p&gt;
      &lt;p class=&quot;card-text&quot;&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>

                <p>Just like with card groups, card footers in decks will automatically line up.</p>

                <div class="bd-example">
                    <div class="card-deck">
                        <div class="card">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div class="card">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;card-deck&quot;&gt;
  &lt;div class=&quot;card&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
      &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
      &lt;p class=&quot;card-text&quot;&gt;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;card-footer&quot;&gt;
      &lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
      &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
      &lt;p class=&quot;card-text&quot;&gt;This card has supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;card-footer&quot;&gt;
      &lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #card-decks -->

            <div id="grid-cards">
                <h5>Grid cards</h5>
                <p>Use the Bootstrap grid system and its
                    <code>.row-cols</code> classes to control how many grid columns (wrapped around your cards) you show per row. For example, here’s
                    <code>.row-cols-1</code> laying out the cards on one column, and
                    <code>.row-cols-md-2</code> splitting four cards to equal width across multiple rows, from the medium breakpoint up.
                </p>

                <div class="bd-example">
                    <div class="row row-cols-1 row-cols-md-2">
                        <div class="col mb-4">
                            <div class="card">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Image cap</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                </svg>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Image cap</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                </svg>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;row row-cols-1 row-cols-md-2&quot;&gt;
  &lt;div class=&quot;col mb-4&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;
      &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
        &lt;p class=&quot;card-text&quot;&gt;This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;col mb-4&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;
      &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
        &lt;p class=&quot;card-text&quot;&gt;This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>

                <p>Change it to
                    <code>.row-cols-3</code> and you’ll see the fourth card wrap.
                </p>

                <div class="bd-example">
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col mb-4">
                            <div class="card">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Image cap</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                </svg>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Image cap</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                </svg>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;row row-cols-1 row-cols-md-3&quot;&gt;
  &lt;div class=&quot;col mb-4&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;
      &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
        &lt;p class=&quot;card-text&quot;&gt;This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;col mb-4&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;
      &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
        &lt;p class=&quot;card-text&quot;&gt;This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>

                <p>When you need equal height, add
                    <code>.h-100</code> to the cards. If you want equal heights by default, you can set
                    <code>$card-height: 100%</code> in Sass.
                </p>

                <div class="bd-example">
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col mb-4">
                            <div class="card h-100">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Image cap</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                </svg>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card h-100">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                </svg>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a short card.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;row row-cols-1 row-cols-md-3&quot;&gt;
  &lt;div class=&quot;col mb-4&quot;&gt;
    &lt;div class=&quot;card h-100&quot;&gt;
      &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
        &lt;p class=&quot;card-text&quot;&gt;This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;col mb-4&quot;&gt;
    &lt;div class=&quot;card h-100&quot;&gt;
      &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
        &lt;p class=&quot;card-text&quot;&gt;This is a short card.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #grid-cards -->

            <div id="card-columns">
                <h5>Card columns</h5>
                <p>Cards can be organized into Masonry-like columns with just CSS by wrapping them in
                    <code>.card-columns</code>. Cards are built with CSS
                    <code>column</code> properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right.
                </p>

                <p>
                    <strong>Heads up!</strong> Your mileage with card columns may vary. To prevent cards breaking across columns, we must set them to
                    <code>display: inline-block</code> as
                    <code>column-break-inside: avoid</code> isn’t a bulletproof solution yet.
                </p>

                <div class="bd-example">
                    <div class="card-columns">
                        <div class="card">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div class="card-body">
                                <h5 class="card-title">Card title that wraps to a new line</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div class="card p-3">
                            <blockquote class="blockquote mb-0 card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer class="blockquote-footer">
                                    <small class="text-muted">
                                        Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div class="card">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div class="card bg-primary text-white text-center p-3">
                            <blockquote class="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                <footer class="blockquote-footer text-white">
                                    <small>
                                        Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <svg class="bd-placeholder-img card-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Card image</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Card image</text>
                            </svg>
                        </div>
                        <div class="card p-3 text-right">
                            <blockquote class="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer class="blockquote-footer">
                                    <small class="text-muted">
                                        Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;card-columns&quot;&gt;
  &lt;div class=&quot;card&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
      &lt;h5 class=&quot;card-title&quot;&gt;Card title that wraps to a new line&lt;/h5&gt;
      &lt;p class=&quot;card-text&quot;&gt;This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card p-3&quot;&gt;
    &lt;blockquote class=&quot;blockquote mb-0 card-body&quot;&gt;
      &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
      &lt;footer class=&quot;blockquote-footer&quot;&gt;
        &lt;small class=&quot;text-muted&quot;&gt;
          Someone famous in &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;
        &lt;/small&gt;
      &lt;/footer&gt;
    &lt;/blockquote&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
      &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
      &lt;p class=&quot;card-text&quot;&gt;This card has supporting text below as a natural lead-in to additional content.&lt;/p&gt;
      &lt;p class=&quot;card-text&quot;&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card bg-primary text-white text-center p-3&quot;&gt;
    &lt;blockquote class=&quot;blockquote mb-0&quot;&gt;
      &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.&lt;/p&gt;
      &lt;footer class=&quot;blockquote-footer text-white&quot;&gt;
        &lt;small&gt;
          Someone famous in &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;
        &lt;/small&gt;
      &lt;/footer&gt;
    &lt;/blockquote&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card text-center&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
      &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
      &lt;p class=&quot;card-text&quot;&gt;This card has a regular title and short paragraphy of text below it.&lt;/p&gt;
      &lt;p class=&quot;card-text&quot;&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card p-3 text-right&quot;&gt;
    &lt;blockquote class=&quot;blockquote mb-0&quot;&gt;
      &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
      &lt;footer class=&quot;blockquote-footer&quot;&gt;
        &lt;small class=&quot;text-muted&quot;&gt;
          Someone famous in &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;
        &lt;/small&gt;
      &lt;/footer&gt;
    &lt;/blockquote&gt;
  &lt;/div&gt;
  &lt;div class=&quot;card&quot;&gt;
    &lt;div class=&quot;card-body&quot;&gt;
      &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
      &lt;p class=&quot;card-text&quot;&gt;This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.&lt;/p&gt;
      &lt;p class=&quot;card-text&quot;&gt;&lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #card-columns -->
        </div><!-- #card-layout -->

        <div id="card-post">
            <h4>Card post</h4>

            <div class="card-post-example">
                <h5>Example</h5>

                <div class="bd-example">
                    <div class="row">
                        <div class="col-6">
                            <div class="card card-post">
                                <div class="card-top position-relative">
                                    <a title="Post name" href="#">
                                        <div class="img object-fit overflow-hidden">
                                            <div class="object-fit-cover transform-scale-h">
                                                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                                    <title>Image cap</title>
                                                    <rect width="100%" height="100%"></rect>
                                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                                </svg>
                                                <div class="img-bg-color"></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="card-category">
                                        <a title="Category" class="btn btn-sm transform-scale-h border-0 regular" href="#">Category</a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a title="Neque porro quisquam est qui dolorem ipsum quia" href="#">Neque porro quisquam est qui dolorem ipsum quia</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card card-post">
                                <div class="card-top position-relative">
                                    <a title="Post name" href="#">
                                        <div class="img object-fit overflow-hidden">
                                            <div class="object-fit-cover transform-scale-h">
                                                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                                    <title>Image cap</title>
                                                    <rect width="100%" height="100%"></rect>
                                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                                </svg>
                                                <div class="img-bg-color"></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="card-category">
                                        <a title="Category" class="btn btn-sm transform-scale-h border-0 regular" href="#">Category</a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a title="Neque porro quisquam est qui dolorem ipsum quia" href="#">Neque porro quisquam est qui dolorem ipsum quia</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col-6&quot;&gt;
    &lt;div class=&quot;card card-post&quot;&gt;
      &lt;div class=&quot;card-top position-relative&quot;&gt;
        &lt;a title=&quot;Post name&quot; href=&quot;#&quot;&gt;
          &lt;div class=&quot;img object-fit overflow-hidden&quot;&gt;
            &lt;div class=&quot;object-fit-cover transform-scale-h&quot;&gt;
              &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
              &lt;div class=&quot;img-bg-color&quot;&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/a&gt;
        &lt;div class=&quot;card-category&quot;&gt;
          &lt;a title=&quot;Category&quot; class=&quot;btn btn-sm transform-scale-h border-0 regular&quot; href=&quot;#&quot;&gt;Category&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;
          &lt;a title=&quot;Neque porro quisquam est qui dolorem ipsum quia&quot; href=&quot;#&quot;&gt;Neque porro quisquam est qui dolorem ipsum quia&lt;/a&gt;
        &lt;/h5&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;col-6&quot;&gt;
    &lt;div class=&quot;card card-post&quot;&gt;
      &lt;div class=&quot;card-top position-relative&quot;&gt;
        &lt;a title=&quot;Post name&quot; href=&quot;#&quot;&gt;
          &lt;div class=&quot;img object-fit overflow-hidden&quot;&gt;
            &lt;div class=&quot;object-fit-cover transform-scale-h&quot;&gt;
              &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
              &lt;div class=&quot;img-bg-color&quot;&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/a&gt;
        &lt;div class=&quot;card-category&quot;&gt;
          &lt;a title=&quot;Category&quot; class=&quot;btn btn-sm transform-scale-h border-0 regular&quot; href=&quot;#&quot;&gt;Category&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;
          &lt;a title=&quot;Neque porro quisquam est qui dolorem ipsum quia&quot; href=&quot;#&quot;&gt;Neque porro quisquam est qui dolorem ipsum quia&lt;/a&gt;
        &lt;/h5&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #card-post-example -->

            <div class="card-post-sticky">
                <h5>Sticky</h5>
                <p>Add class
                    <code>.sticky</code> to .card-post.
                </p>

                <div class="bd-example">
                    <div class="row">
                        <div class="col-6">
                            <div class="card card-post sticky">
                                <div class="card-top position-relative">
                                    <a title="Post name" href="#">
                                        <div class="img object-fit overflow-hidden">
                                            <div class="object-fit-cover transform-scale-h">
                                                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                                    <title>Image cap</title>
                                                    <rect width="100%" height="100%"></rect>
                                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                                </svg>

                                                <div class="img-bg-color"></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="card-category">
                                        <a title="Category" class="btn btn-sm transform-scale-h border-0 regular" href="#">Category</a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a title="Neque porro quisquam est qui dolorem ipsum quia" href="#">Neque porro quisquam est qui dolorem ipsum quia</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card card-post sticky">
                                <div class="card-top position-relative">
                                    <a title="Post name" href="#">
                                        <div class="img object-fit overflow-hidden">
                                            <div class="object-fit-cover transform-scale-h">
                                                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                                    <title>Image cap</title>
                                                    <rect width="100%" height="100%"></rect>
                                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                                </svg>
                                                <div class="img-bg-color"></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="card-category">
                                        <a title="Category" class="btn btn-sm transform-scale-h border-0 regular" href="#">Category</a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a title="Neque porro quisquam est qui dolorem ipsum quia" href="#">Neque porro quisquam est qui dolorem ipsum quia</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col-6&quot;&gt;
    &lt;div class=&quot;card card-post sticky&quot;&gt;
      &lt;div class=&quot;card-top position-relative&quot;&gt;
        &lt;a title=&quot;Post name&quot; href=&quot;#&quot;&gt;
          &lt;div class=&quot;img object-fit overflow-hidden&quot;&gt;
            &lt;div class=&quot;object-fit-cover transform-scale-h&quot;&gt;
              &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
              &lt;div class=&quot;img-bg-color&quot;&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/a&gt;
        &lt;div class=&quot;card-category&quot;&gt;
          &lt;a title=&quot;Category&quot; class=&quot;btn btn-sm transform-scale-h border-0 regular&quot; href=&quot;#&quot;&gt;Category&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;
          &lt;a title=&quot;Neque porro quisquam est qui dolorem ipsum quia&quot; href=&quot;#&quot;&gt;Neque porro quisquam est qui dolorem ipsum quia&lt;/a&gt;
        &lt;/h5&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;col-6&quot;&gt;
    &lt;div class=&quot;card card-post sticky&quot;&gt;
      &lt;div class=&quot;card-top position-relative&quot;&gt;
        &lt;a title=&quot;Post name&quot; href=&quot;#&quot;&gt;
          &lt;div class=&quot;img object-fit overflow-hidden&quot;&gt;
            &lt;div class=&quot;object-fit-cover transform-scale-h&quot;&gt;
              &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
              &lt;div class=&quot;img-bg-color&quot;&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/a&gt;
        &lt;div class=&quot;card-category&quot;&gt;
          &lt;a title=&quot;Category&quot; class=&quot;btn btn-sm transform-scale-h border-0 regular&quot; href=&quot;#&quot;&gt;Category&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;
          &lt;a title=&quot;Neque porro quisquam est qui dolorem ipsum quia&quot; href=&quot;#&quot;&gt;Neque porro quisquam est qui dolorem ipsum quia&lt;/a&gt;
        &lt;/h5&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #card-post-sticky -->

            <div class="card-post-no-thumbnail">
                <h5>No thumbnail</h5>
                <p>Add class
                    <code>.no-thumbnail</code> to .card-post.
                </p>

                <div class="bd-example">
                    <div class="row">
                        <div class="col-6">
                            <div class="card card-post no-thumbnail">
                                <div class="card-top position-relative">
                                    <div class="card-category">
                                        <a title="Category" class="btn btn-sm transform-scale-h border-0 regular" href="#">Category</a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a title="Neque porro quisquam est qui dolorem ipsum quia" href="#">Neque porro quisquam est qui dolorem ipsum quia</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card card-post no-thumbnail">
                                <div class="card-top position-relative">
                                    <div class="card-category">
                                        <a title="Category" class="btn btn-sm transform-scale-h border-0 regular" href="#">Category</a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a title="Neque porro quisquam est qui dolorem ipsum quia" href="#">Neque porro quisquam est qui dolorem ipsum quia</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;row&quot;&gt;
  &lt;div class=&quot;col-6&quot;&gt;
    &lt;div class=&quot;card card-post no-thumbnail&quot;&gt;
      &lt;div class=&quot;card-top position-relative&quot;&gt;
        &lt;div class=&quot;card-category&quot;&gt;
          &lt;a title=&quot;Category&quot; class=&quot;btn btn-sm transform-scale-h border-0 regular&quot; href=&quot;#&quot;&gt;Category&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;
          &lt;a title=&quot;Neque porro quisquam est qui dolorem ipsum quia&quot; href=&quot;#&quot;&gt;Neque porro quisquam est qui dolorem ipsum quia&lt;/a&gt;
        &lt;/h5&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;col-6&quot;&gt;
    &lt;div class=&quot;card card-post no-thumbnail&quot;&gt;
      &lt;div class=&quot;card-top position-relative&quot;&gt;
        &lt;div class=&quot;card-category&quot;&gt;
          &lt;a title=&quot;Category&quot; class=&quot;btn btn-sm transform-scale-h border-0 regular&quot; href=&quot;#&quot;&gt;Category&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;card-body&quot;&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;
          &lt;a title=&quot;Neque porro quisquam est qui dolorem ipsum quia&quot; href=&quot;#&quot;&gt;Neque porro quisquam est qui dolorem ipsum quia&lt;/a&gt;
        &lt;/h5&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #card-post-no-thumbnail -->
        </div><!-- #card-post -->

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/card/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card'
    }
</script>
