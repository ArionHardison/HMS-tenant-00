<template>
    <div id="flex" class="spacer m-top-xl">
        <h3>Flex</h3>
        <p>Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.</p>

        <div id="enable-flex-behaviors">
            <h4>Enable flex behaviors</h4>
            <p>Apply
                <code>display</code> utilities to create a flexbox container and transform
                <strong>direct children elements</strong> into flex items. Flex containers and items are able to be modified further with additional flex properties.
            </p>

            <div class="bd-example">
                <div class="d-flex p-2 bd-highlight">I'm a flexbox container!</div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex p-2 bd-highlight&quot;&gt;I'm a flexbox container!&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="d-inline-flex p-2 bd-highlight">I'm an inline flexbox container!</div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-inline-flex p-2 bd-highlight&quot;&gt;I'm an inline flexbox container!&lt;/div&gt;</code></pre>
            </figure>

            <p>Responsive variations also exist for
                <code>.d-flex</code> and
                <code>.d-inline-flex</code>.
            </p>

            <ul>
                <li>
                    <code>.d-flex</code>
                </li>
                <li>
                    <code>.d-inline-flex</code>
                </li>
                <li>
                    <code>.d-sm-flex</code>
                </li>
                <li>
                    <code>.d-sm-inline-flex</code>
                </li>
                <li>
                    <code>.d-md-flex</code>
                </li>
                <li>
                    <code>.d-md-inline-flex</code>
                </li>
                <li>
                    <code>.d-lg-flex</code>
                </li>
                <li>
                    <code>.d-lg-inline-flex</code>
                </li>
                <li>
                    <code>.d-xl-flex</code>
                </li>
                <li>
                    <code>.d-xl-inline-flex</code>
                </li>
            </ul>
        </div>

        <div id="direction" class="spacer m-top-lg">
            <h4>Direction</h4>
            <p>Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is
                <code>row</code>. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).
            </p>
            <p>Use
                <code>.flex-row</code> to set a horizontal direction (the browser default), or
                <code>.flex-row-reverse</code> to start the horizontal direction from the opposite side.
            </p>

            <div class="bd-example">
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Flex item 1</div>
                    <div class="p-2 bd-highlight">Flex item 2</div>
                    <div class="p-2 bd-highlight">Flex item 3</div>
                </div>
                <div class="d-flex flex-row-reverse bd-highlight">
                    <div class="p-2 bd-highlight">Flex item 1</div>
                    <div class="p-2 bd-highlight">Flex item 2</div>
                    <div class="p-2 bd-highlight">Flex item 3</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex flex-row bd-highlight mb-3&quot;&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item 1&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item 2&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;d-flex flex-row-reverse bd-highlight&quot;&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item 1&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item 2&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <p>Use
                <code>.flex-column</code> to set a vertical direction, or
                <code>.flex-column-reverse</code> to start the vertical direction from the opposite side.
            </p>

            <div class="bd-example">
                <div class="d-flex flex-column bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Flex item 1</div>
                    <div class="p-2 bd-highlight">Flex item 2</div>
                    <div class="p-2 bd-highlight">Flex item 3</div>
                </div>
                <div class="d-flex flex-column-reverse bd-highlight">
                    <div class="p-2 bd-highlight">Flex item 1</div>
                    <div class="p-2 bd-highlight">Flex item 2</div>
                    <div class="p-2 bd-highlight">Flex item 3</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex flex-column bd-highlight mb-3&quot;&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item 1&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item 2&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;d-flex flex-column-reverse bd-highlight&quot;&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item 1&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item 2&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <p>Responsive variations also exist for
                <code>flex-direction</code>.
            </p>

            <ul>
                <li>
                    <code>.flex-row</code>
                </li>
                <li>
                    <code>.flex-row-reverse</code>
                </li>
                <li>
                    <code>.flex-column</code>
                </li>
                <li>
                    <code>.flex-column-reverse</code>
                </li>
                <li>
                    <code>.flex-sm-row</code>
                </li>
                <li>
                    <code>.flex-sm-row-reverse</code>
                </li>
                <li>
                    <code>.flex-sm-column</code>
                </li>
                <li>
                    <code>.flex-sm-column-reverse</code>
                </li>
                <li>
                    <code>.flex-md-row</code>
                </li>
                <li>
                    <code>.flex-md-row-reverse</code>
                </li>
                <li>
                    <code>.flex-md-column</code>
                </li>
                <li>
                    <code>.flex-md-column-reverse</code>
                </li>
                <li>
                    <code>.flex-lg-row</code>
                </li>
                <li>
                    <code>.flex-lg-row-reverse</code>
                </li>
                <li>
                    <code>.flex-lg-column</code>
                </li>
                <li>
                    <code>.flex-lg-column-reverse</code>
                </li>
                <li>
                    <code>.flex-xl-row</code>
                </li>
                <li>
                    <code>.flex-xl-row-reverse</code>
                </li>
                <li>
                    <code>.flex-xl-column</code>
                </li>
                <li>
                    <code>.flex-xl-column-reverse</code>
                </li>
            </ul>
        </div>

        <div id="justify-content" class="spacer m-top-lg">
            <h4>Justify content</h4>
            <p>Use
                <code>justify-content</code> utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if
                <code>flex-direction: column</code>). Choose from
                <code>start</code> (browser default),
                <code>end</code>,
                <code>center</code>,
                <code>between</code>, or
                <code>around</code>.
            </p>

            <div class="bd-example">
                <div class="d-flex justify-content-start bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex justify-content-end bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex justify-content-center bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex justify-content-between bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex justify-content-around bd-highlight">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex justify-content-start&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;d-flex justify-content-end&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;d-flex justify-content-center&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;d-flex justify-content-between&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;d-flex justify-content-around&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>

            <p>Responsive variations also exist for
                <code>justify-content</code>.
            </p>

            <ul>
                <li>
                    <code>.justify-content-start</code>
                </li>
                <li>
                    <code>.justify-content-end</code>
                </li>
                <li>
                    <code>.justify-content-center</code>
                </li>
                <li>
                    <code>.justify-content-between</code>
                </li>
                <li>
                    <code>.justify-content-around</code>
                </li>
                <li>
                    <code>.justify-content-sm-start</code>
                </li>
                <li>
                    <code>.justify-content-sm-end</code>
                </li>
                <li>
                    <code>.justify-content-sm-center</code>
                </li>
                <li>
                    <code>.justify-content-sm-between</code>
                </li>
                <li>
                    <code>.justify-content-sm-around</code>
                </li>
                <li>
                    <code>.justify-content-md-start</code>
                </li>
                <li>
                    <code>.justify-content-md-end</code>
                </li>
                <li>
                    <code>.justify-content-md-center</code>
                </li>
                <li>
                    <code>.justify-content-md-between</code>
                </li>
                <li>
                    <code>.justify-content-md-around</code>
                </li>
                <li>
                    <code>.justify-content-lg-start</code>
                </li>
                <li>
                    <code>.justify-content-lg-end</code>
                </li>
                <li>
                    <code>.justify-content-lg-center</code>
                </li>
                <li>
                    <code>.justify-content-lg-between</code>
                </li>
                <li>
                    <code>.justify-content-lg-around</code>
                </li>
                <li>
                    <code>.justify-content-xl-start</code>
                </li>
                <li>
                    <code>.justify-content-xl-end</code>
                </li>
                <li>
                    <code>.justify-content-xl-center</code>
                </li>
                <li>
                    <code>.justify-content-xl-between</code>
                </li>
                <li>
                    <code>.justify-content-xl-around</code>
                </li>
            </ul>
        </div>

        <div id="align-items" class="spacer m-top-lg">
            <h4>Align items</h4>
            <p>Use
                <code>align-items</code> utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if
                <code>flex-direction: column</code>). Choose from
                <code>start</code>,
                <code>end</code>,
                <code>center</code>,
                <code>baseline</code>, or
                <code>stretch</code> (browser default).
            </p>

            <div class="bd-example">
                <div class="d-flex align-items-start bd-highlight mb-3" style="height: 100px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex align-items-end bd-highlight mb-3" style="height: 100px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex align-items-center bd-highlight mb-3" style="height: 100px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex align-items-baseline bd-highlight mb-3" style="height: 100px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex align-items-stretch bd-highlight" style="height: 100px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex align-items-start&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;d-flex align-items-end&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;d-flex align-items-center&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;d-flex align-items-baseline&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;d-flex align-items-stretch&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>

            <p>Responsive variations also exist for
                <code>align-items</code>.
            </p>

            <ul>
                <li>
                    <code>.align-items-start</code>
                </li>
                <li>
                    <code>.align-items-end</code>
                </li>
                <li>
                    <code>.align-items-center</code>
                </li>
                <li>
                    <code>.align-items-baseline</code>
                </li>
                <li>
                    <code>.align-items-stretch</code>
                </li>
                <li>
                    <code>.align-items-sm-start</code>
                </li>
                <li>
                    <code>.align-items-sm-end</code>
                </li>
                <li>
                    <code>.align-items-sm-center</code>
                </li>
                <li>
                    <code>.align-items-sm-baseline</code>
                </li>
                <li>
                    <code>.align-items-sm-stretch</code>
                </li>
                <li>
                    <code>.align-items-md-start</code>
                </li>
                <li>
                    <code>.align-items-md-end</code>
                </li>
                <li>
                    <code>.align-items-md-center</code>
                </li>
                <li>
                    <code>.align-items-md-baseline</code>
                </li>
                <li>
                    <code>.align-items-md-stretch</code>
                </li>
                <li>
                    <code>.align-items-lg-start</code>
                </li>
                <li>
                    <code>.align-items-lg-end</code>
                </li>
                <li>
                    <code>.align-items-lg-center</code>
                </li>
                <li>
                    <code>.align-items-lg-baseline</code>
                </li>
                <li>
                    <code>.align-items-lg-stretch</code>
                </li>
                <li>
                    <code>.align-items-xl-start</code>
                </li>
                <li>
                    <code>.align-items-xl-end</code>
                </li>
                <li>
                    <code>.align-items-xl-center</code>
                </li>
                <li>
                    <code>.align-items-xl-baseline</code>
                </li>
                <li>
                    <code>.align-items-xl-stretch</code>
                </li>
            </ul>
        </div>

        <div id="align-self" class="spacer m-top-lg">
            <h4>Align self</h4>
            <p>Use
                <code>align-self</code> utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if
                <code>flex-direction: column</code>). Choose from the same options as
                <code>align-items</code>:
                <code>start</code>,
                <code>end</code>,
                <code>center</code>,
                <code>baseline</code>, or
                <code>stretch</code> (browser default).
            </p>

            <div class="bd-example">
                <div class="d-flex bd-highlight mb-3" style="height: 100px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="align-self-start p-2 bd-highlight">Aligned flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex bd-highlight mb-3" style="height: 100px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="align-self-end p-2 bd-highlight">Aligned flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex bd-highlight mb-3" style="height: 100px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="align-self-center p-2 bd-highlight">Aligned flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex bd-highlight mb-3" style="height: 100px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="align-self-baseline p-2 bd-highlight">Aligned flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex bd-highlight" style="height: 100px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="align-self-stretch p-2 bd-highlight">Aligned flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;align-self-start&quot;&gt;Aligned flex item&lt;/div&gt;
&lt;div class=&quot;align-self-end&quot;&gt;Aligned flex item&lt;/div&gt;
&lt;div class=&quot;align-self-center&quot;&gt;Aligned flex item&lt;/div&gt;
&lt;div class=&quot;align-self-baseline&quot;&gt;Aligned flex item&lt;/div&gt;
&lt;div class=&quot;align-self-stretch&quot;&gt;Aligned flex item&lt;/div&gt;</code></pre>
            </figure>

            <p>Responsive variations also exist for
                <code>align-self</code>.
            </p>

            <ul>
                <li>
                    <code>.align-self-start</code>
                </li>
                <li>
                    <code>.align-self-end</code>
                </li>
                <li>
                    <code>.align-self-center</code>
                </li>
                <li>
                    <code>.align-self-baseline</code>
                </li>
                <li>
                    <code>.align-self-stretch</code>
                </li>
                <li>
                    <code>.align-self-sm-start</code>
                </li>
                <li>
                    <code>.align-self-sm-end</code>
                </li>
                <li>
                    <code>.align-self-sm-center</code>
                </li>
                <li>
                    <code>.align-self-sm-baseline</code>
                </li>
                <li>
                    <code>.align-self-sm-stretch</code>
                </li>
                <li>
                    <code>.align-self-md-start</code>
                </li>
                <li>
                    <code>.align-self-md-end</code>
                </li>
                <li>
                    <code>.align-self-md-center</code>
                </li>
                <li>
                    <code>.align-self-md-baseline</code>
                </li>
                <li>
                    <code>.align-self-md-stretch</code>
                </li>
                <li>
                    <code>.align-self-lg-start</code>
                </li>
                <li>
                    <code>.align-self-lg-end</code>
                </li>
                <li>
                    <code>.align-self-lg-center</code>
                </li>
                <li>
                    <code>.align-self-lg-baseline</code>
                </li>
                <li>
                    <code>.align-self-lg-stretch</code>
                </li>
                <li>
                    <code>.align-self-xl-start</code>
                </li>
                <li>
                    <code>.align-self-xl-end</code>
                </li>
                <li>
                    <code>.align-self-xl-center</code>
                </li>
                <li>
                    <code>.align-self-xl-baseline</code>
                </li>
                <li>
                    <code>.align-self-xl-stretch</code>
                </li>
            </ul>
        </div>

        <div id="fill" class="spacer m-top-lg">
            <h4>Fill</h4>
            <p>Use the
                <code>.flex-fill</code> class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.
            </p>

            <div class="bd-example">
                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-fill bd-highlight">Flex item with a lot of content</div>
                    <div class="p-2 flex-fill bd-highlight">Flex item</div>
                    <div class="p-2 flex-fill bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex bd-highlight&quot;&gt;
  &lt;div class=&quot;p-2 flex-fill bd-highlight&quot;&gt;Flex item with a lot of content&lt;/div&gt;
  &lt;div class=&quot;p-2 flex-fill bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;p-2 flex-fill bd-highlight&quot;&gt;Flex item&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <p>Responsive variations also exist for
                <code>flex-fill</code>.
            </p>

            <ul>
                <li>
                    <code>.flex-fill</code>
                </li>
                <li>
                    <code>.flex-sm-fill</code>
                </li>
                <li>
                    <code>.flex-md-fill</code>
                </li>
                <li>
                    <code>.flex-lg-fill</code>
                </li>
                <li>
                    <code>.flex-xl-fill</code>
                </li>
            </ul>
        </div>

        <div id="grow-and-shrink" class="spacer m-top-lg">
            <h4>Grow and shrink</h4>
            <p>Use
                <code>.flex-grow-*</code> utilities to toggle a flex item’s ability to grow to fill available space. In the example below, the
                <code>.flex-grow-1</code> elements uses all available space it can, while allowing the remaining two flex items their necessary space.
            </p>

            <div class="bd-example">
                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-grow-1 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Third flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex bd-highlight&quot;&gt;
  &lt;div class=&quot;p-2 flex-grow-1 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Third flex item&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <p>Use
                <code>.flex-shrink-*</code> utilities to toggle a flex item’s ability to shrink if necessary. In the example below, the second flex item with
                <code>.flex-shrink-1</code> is forced to wrap it’s contents to a new line, “shrinking” to allow more space for the previous flex item with
                <code>.w-100</code>.
            </p>

            <div class="bd-example">
                <div class="d-flex bd-highlight">
                    <div class="p-2 w-100 bd-highlight">Flex item</div>
                    <div class="p-2 flex-shrink-1 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex bd-highlight&quot;&gt;
  &lt;div class=&quot;p-2 w-100 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;p-2 flex-shrink-1 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <p>Responsive variations also exist for
                <code>flex-grow</code> and
                <code>flex-shrink</code>.
            </p>

            <ul>
                <li>
                    <code>.flex-{grow|shrink}-0</code>
                </li>
                <li>
                    <code>.flex-{grow|shrink}-1</code>
                </li>
                <li>
                    <code>.flex-sm-{grow|shrink}-0</code>
                </li>
                <li>
                    <code>.flex-sm-{grow|shrink}-1</code>
                </li>
                <li>
                    <code>.flex-md-{grow|shrink}-0</code>
                </li>
                <li>
                    <code>.flex-md-{grow|shrink}-1</code>
                </li>
                <li>
                    <code>.flex-lg-{grow|shrink}-0</code>
                </li>
                <li>
                    <code>.flex-lg-{grow|shrink}-1</code>
                </li>
                <li>
                    <code>.flex-xl-{grow|shrink}-0</code>
                </li>
                <li>
                    <code>.flex-xl-{grow|shrink}-1</code>
                </li>
            </ul>
        </div>

        <div id="auto-margins" class="spacer m-top-lg">
            <h4>Auto margins</h4>
            <p>Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (<code>.mr-auto</code>), and pushing two items to the left (<code>.ml-auto</code>).</p>
            <p>
                <strong>Unfortunately, IE10 and IE11 do not properly support auto margins on flex items whose parent has a non-default
                    <code>justify-content</code> value.</strong>
                <a href="https://stackoverflow.com/a/37535548" target="_blank">See this StackOverflow answer</a> for more details.
            </p>

            <div class="bd-example">
                <div class="d-flex bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex bd-highlight mb-3">
                    <div class="mr-auto p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="ml-auto p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex bd-highlight mb-3&quot;&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;d-flex bd-highlight mb-3&quot;&gt;
  &lt;div class=&quot;mr-auto p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;d-flex bd-highlight mb-3&quot;&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;ml-auto p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="with-align-items" class="spacer m-top-lg">
            <h4>With align-items</h4>
            <p>Vertically move one flex item to the top or bottom of a container by mixing
                <code>align-items</code>,
                <code>flex-direction: column</code>, and
                <code>margin-top: auto</code> or
                <code>margin-bottom: auto</code>.
            </p>

            <div class="bd-example">
                <div class="d-flex align-items-start flex-column bd-highlight mb-3" style="height: 200px;">
                    <div class="mb-auto p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>

                <div class="d-flex align-items-end flex-column bd-highlight mb-3" style="height: 200px;">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="mt-auto p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex align-items-start flex-column bd-highlight mb-3&quot; style=&quot;height: 200px;&quot;&gt;
  &lt;div class=&quot;mb-auto p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;d-flex align-items-end flex-column bd-highlight mb-3&quot; style=&quot;height: 200px;&quot;&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
  &lt;div class=&quot;mt-auto p-2 bd-highlight&quot;&gt;Flex item&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="wrap" class="spacer m-top-lg">
            <h4>Wrap</h4>
            <p>Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with
                <code>.flex-nowrap</code>, wrapping with
                <code>.flex-wrap</code>, or reverse wrapping with
                <code>.flex-wrap-reverse</code>.
            </p>

            <div class="bd-example">
                <div class="d-flex flex-nowrap bd-highlight" style="width: 8rem;">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex flex-nowrap&quot;&gt;
  ...
&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="d-flex flex-wrap bd-highlight">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex flex-wrap&quot;&gt;
  ...
&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="d-flex flex-wrap-reverse bd-highlight">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex flex-wrap-reverse&quot;&gt;
  ...
&lt;/div&gt;</code></pre>
            </figure>

            <p>Responsive variations also exist for
                <code>flex-wrap</code>.
            </p>

            <ul>
                <li>
                    <code>.flex-nowrap</code>
                </li>
                <li>
                    <code>.flex-wrap</code>
                </li>
                <li>
                    <code>.flex-wrap-reverse</code>
                </li>
                <li>
                    <code>.flex-sm-nowrap</code>
                </li>
                <li>
                    <code>.flex-sm-wrap</code>
                </li>
                <li>
                    <code>.flex-sm-wrap-reverse</code>
                </li>
                <li>
                    <code>.flex-md-nowrap</code>
                </li>
                <li>
                    <code>.flex-md-wrap</code>
                </li>
                <li>
                    <code>.flex-md-wrap-reverse</code>
                </li>
                <li>
                    <code>.flex-lg-nowrap</code>
                </li>
                <li>
                    <code>.flex-lg-wrap</code>
                </li>
                <li>
                    <code>.flex-lg-wrap-reverse</code>
                </li>
                <li>
                    <code>.flex-xl-nowrap</code>
                </li>
                <li>
                    <code>.flex-xl-wrap</code>
                </li>
                <li>
                    <code>.flex-xl-wrap-reverse</code>
                </li>
            </ul>
        </div>

        <div id="order" class="spacer m-top-lg">
            <h4>Order</h4>
            <p>Change the
                <em>visual</em> order of specific flex items with a handful of
                <code>order</code> utilities. We only provide options for making an item first or last, as well as a reset to use the DOM order. As
                <code>order</code> takes any integer value (e.g.,
                <code>5</code>), add custom CSS for any additional values needed.
            </p>

            <div class="bd-example">
                <div class="d-flex flex-nowrap bd-highlight">
                    <div class="order-3 p-2 bd-highlight">First flex item</div>
                    <div class="order-2 p-2 bd-highlight">Second flex item</div>
                    <div class="order-1 p-2 bd-highlight">Third flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex flex-nowrap bd-highlight&quot;&gt;
  &lt;div class=&quot;order-3 p-2 bd-highlight&quot;&gt;First flex item&lt;/div&gt;
  &lt;div class=&quot;order-2 p-2 bd-highlight&quot;&gt;Second flex item&lt;/div&gt;
  &lt;div class=&quot;order-1 p-2 bd-highlight&quot;&gt;Third flex item&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <p>Responsive variations also exist for
                <code>order</code>.
            </p>

            <ul>
                <li>
                    <code>.order-0</code>
                </li>
                <li>
                    <code>.order-1</code>
                </li>
                <li>
                    <code>.order-2</code>
                </li>
                <li>
                    <code>.order-3</code>
                </li>
                <li>
                    <code>.order-4</code>
                </li>
                <li>
                    <code>.order-5</code>
                </li>
                <li>
                    <code>.order-6</code>
                </li>
                <li>
                    <code>.order-7</code>
                </li>
                <li>
                    <code>.order-8</code>
                </li>
                <li>
                    <code>.order-9</code>
                </li>
                <li>
                    <code>.order-10</code>
                </li>
                <li>
                    <code>.order-11</code>
                </li>
                <li>
                    <code>.order-12</code>
                </li>
                <li>
                    <code>.order-sm-0</code>
                </li>
                <li>
                    <code>.order-sm-1</code>
                </li>
                <li>
                    <code>.order-sm-2</code>
                </li>
                <li>
                    <code>.order-sm-3</code>
                </li>
                <li>
                    <code>.order-sm-4</code>
                </li>
                <li>
                    <code>.order-sm-5</code>
                </li>
                <li>
                    <code>.order-sm-6</code>
                </li>
                <li>
                    <code>.order-sm-7</code>
                </li>
                <li>
                    <code>.order-sm-8</code>
                </li>
                <li>
                    <code>.order-sm-9</code>
                </li>
                <li>
                    <code>.order-sm-10</code>
                </li>
                <li>
                    <code>.order-sm-11</code>
                </li>
                <li>
                    <code>.order-sm-12</code>
                </li>
                <li>
                    <code>.order-md-0</code>
                </li>
                <li>
                    <code>.order-md-1</code>
                </li>
                <li>
                    <code>.order-md-2</code>
                </li>
                <li>
                    <code>.order-md-3</code>
                </li>
                <li>
                    <code>.order-md-4</code>
                </li>
                <li>
                    <code>.order-md-5</code>
                </li>
                <li>
                    <code>.order-md-6</code>
                </li>
                <li>
                    <code>.order-md-7</code>
                </li>
                <li>
                    <code>.order-md-8</code>
                </li>
                <li>
                    <code>.order-md-9</code>
                </li>
                <li>
                    <code>.order-md-10</code>
                </li>
                <li>
                    <code>.order-md-11</code>
                </li>
                <li>
                    <code>.order-md-12</code>
                </li>
                <li>
                    <code>.order-lg-0</code>
                </li>
                <li>
                    <code>.order-lg-1</code>
                </li>
                <li>
                    <code>.order-lg-2</code>
                </li>
                <li>
                    <code>.order-lg-3</code>
                </li>
                <li>
                    <code>.order-lg-4</code>
                </li>
                <li>
                    <code>.order-lg-5</code>
                </li>
                <li>
                    <code>.order-lg-6</code>
                </li>
                <li>
                    <code>.order-lg-7</code>
                </li>
                <li>
                    <code>.order-lg-8</code>
                </li>
                <li>
                    <code>.order-lg-9</code>
                </li>
                <li>
                    <code>.order-lg-10</code>
                </li>
                <li>
                    <code>.order-lg-11</code>
                </li>
                <li>
                    <code>.order-lg-12</code>
                </li>
                <li>
                    <code>.order-xl-0</code>
                </li>
                <li>
                    <code>.order-xl-1</code>
                </li>
                <li>
                    <code>.order-xl-2</code>
                </li>
                <li>
                    <code>.order-xl-3</code>
                </li>
                <li>
                    <code>.order-xl-4</code>
                </li>
                <li>
                    <code>.order-xl-5</code>
                </li>
                <li>
                    <code>.order-xl-6</code>
                </li>
                <li>
                    <code>.order-xl-7</code>
                </li>
                <li>
                    <code>.order-xl-8</code>
                </li>
                <li>
                    <code>.order-xl-9</code>
                </li>
                <li>
                    <code>.order-xl-10</code>
                </li>
                <li>
                    <code>.order-xl-11</code>
                </li>
                <li>
                    <code>.order-xl-12</code>
                </li>
            </ul>
        </div>

        <div id="align-content" class="spacer m-top-lg">
            <h4>Align content</h4>
            <p>Use
                <code>align-content</code> utilities on flexbox containers to align flex items
                <em>together</em> on the cross axis. Choose from
                <code>start</code> (browser default),
                <code>end</code>,
                <code>center</code>,
                <code>between</code>,
                <code>around</code>, or
                <code>stretch</code>. To demonstrate these utilities, we’ve enforced
                <code>flex-wrap: wrap</code> and increased the number of flex items.
            </p>

            <p>
                <strong>Heads up!</strong> This property has no effect on single rows of flex items.
            </p>

            <div class="bd-example">
                <div class="d-flex align-content-start flex-wrap bd-highlight mb-3" style="height: 200px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex align-content-start flex-wrap&quot;&gt;
  ...
&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="d-flex align-content-end flex-wrap bd-highlight mb-3" style="height: 200px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex align-content-end flex-wrap&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="d-flex align-content-center flex-wrap bd-highlight mb-3" style="height: 200px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex align-content-center flex-wrap&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="d-flex align-content-between flex-wrap bd-highlight mb-3" style="height: 200px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex align-content-between flex-wrap&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="d-flex align-content-around flex-wrap bd-highlight mb-3" style="height: 200px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex align-content-around flex-wrap&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="d-flex align-content-stretch flex-wrap bd-highlight mb-3" style="height: 200px">
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                    <div class="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-flex align-content-stretch flex-wrap&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>

            <p>Responsive variations also exist for
                <code>align-content</code>.
            </p>

            <ul>
                <li>
                    <code>.align-content-start</code>
                </li>
                <li>
                    <code>.align-content-end</code>
                </li>
                <li>
                    <code>.align-content-center</code>
                </li>
                <li>
                    <code>.align-content-around</code>
                </li>
                <li>
                    <code>.align-content-stretch</code>
                </li>
                <li>
                    <code>.align-content-sm-start</code>
                </li>
                <li>
                    <code>.align-content-sm-end</code>
                </li>
                <li>
                    <code>.align-content-sm-center</code>
                </li>
                <li>
                    <code>.align-content-sm-around</code>
                </li>
                <li>
                    <code>.align-content-sm-stretch</code>
                </li>
                <li>
                    <code>.align-content-md-start</code>
                </li>
                <li>
                    <code>.align-content-md-end</code>
                </li>
                <li>
                    <code>.align-content-md-center</code>
                </li>
                <li>
                    <code>.align-content-md-around</code>
                </li>
                <li>
                    <code>.align-content-md-stretch</code>
                </li>
                <li>
                    <code>.align-content-lg-start</code>
                </li>
                <li>
                    <code>.align-content-lg-end</code>
                </li>
                <li>
                    <code>.align-content-lg-center</code>
                </li>
                <li>
                    <code>.align-content-lg-around</code>
                </li>
                <li>
                    <code>.align-content-lg-stretch</code>
                </li>
                <li>
                    <code>.align-content-xl-start</code>
                </li>
                <li>
                    <code>.align-content-xl-end</code>
                </li>
                <li>
                    <code>.align-content-xl-center</code>
                </li>
                <li>
                    <code>.align-content-xl-around</code>
                </li>
                <li>
                    <code>.align-content-xl-stretch</code>
                </li>
            </ul>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/flex/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Flex'
    }
</script>
