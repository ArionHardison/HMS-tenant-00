<template>
    <div id="spacing" class="spacer m-top-xl">
        <h3>Spacing</h3>
        <p>Wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>

        <h4>How it works</h4>
        <p>Assign responsive-friendly
            <code>margin</code> or
            <code>padding</code> values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from
            <code>.25rem</code> to
            <code>3rem</code>.
        </p>

        <h4>Notation</h4>
        <p>Spacing utilities that apply to all breakpoints, from
            <code>xs</code> to
            <code>xl</code>, have no breakpoint abbreviation in them. This is because those classes are applied from
            <code>min-width: 0</code> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.
        </p>
        <p>The classes are named using the format
            <code>{property}{sides}-{size}</code> for
            <code>xs</code> and
            <code>{property}{sides}-{breakpoint}-{size}</code> for
            <code>sm</code>,
            <code>md</code>,
            <code>lg</code>, and
            <code>xl</code>.
        </p>
        <p>Where
            <em>property</em> is one of:
        </p>

        <ul>
            <li>
                <code>m</code> - for classes that set
                <code>margin</code>
            </li>
            <li>
                <code>p</code> - for classes that set
                <code>padding</code>
            </li>
        </ul>

        <p>Where
            <em>sides</em> is one of:
        </p>

        <ul>
            <li>
                <code>t</code> - for classes that set
                <code>margin-top</code> or
                <code>padding-top</code>
            </li>
            <li>
                <code>b</code> - for classes that set
                <code>margin-bottom</code> or
                <code>padding-bottom</code>
            </li>
            <li>
                <code>l</code> - for classes that set
                <code>margin-left</code> or
                <code>padding-left</code>
            </li>
            <li>
                <code>r</code> - for classes that set
                <code>margin-right</code> or
                <code>padding-right</code>
            </li>
            <li>
                <code>x</code> - for classes that set both
                <code>*-left</code> and
                <code>*-right</code>
            </li>
            <li>
                <code>y</code> - for classes that set both
                <code>*-top</code> and
                <code>*-bottom</code>
            </li>
            <li>blank - for classes that set a
                <code>margin</code> or
                <code>padding</code> on all 4 sides of the element
            </li>
        </ul>

        <div id="horizontal-centering">
            <h4>Horizontal centering</h4>
            <p>Additionally, Bootstrap also includes an
                <code>.mx-auto</code> class for horizontally centering fixed-width block level content—that is, content that has
                <code>display: block</code> and a
                <code>width</code> set—by setting the horizontal margins to
                <code>auto</code>.
            </p>

            <div class="bd-example">
                <div class="mx-auto bd-highlight" style="width: 200px;">
                    Centered element
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;mx-auto&quot; style=&quot;width: 200px;&quot;&gt;
  Centered element
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #horizontal-centering -->

        <div id="negative-margin">
            <h4>Negative margin</h4>
            <p>In CSS,
                <code>margin</code> properties can utilize negative values (<code>padding</code> cannot). As of 4.2, we’ve added negative margin utilities for every non-zero integer size listed above (e.g.,
                <code>1</code>,
                <code>2</code>,
                <code>3</code>,
                <code>4</code>,
                <code>5</code>). These utilities are ideal for customizing grid column gutters across breakpoints.
            </p>
            <p>The syntax is nearly the same as the default, positive margin utilities, but with the addition of
                <code>n</code> before the requested size. Here’s an example class that’s the opposite of
                <code>.mt-1</code>:
            </p>

            <figure class="highlight">
                <pre><code class="language-html">.mt-n1 {
  margin-top: -0.25rem !important;
}</code></pre>
            </figure>

            <p>Here’s an example of customizing the Bootstrap grid at the medium (<code>md</code>) breakpoint and above. We’ve increased the
                <code>.col</code> padding with
                <code>.px-md-5</code> and then counteracted that with
                <code>.mx-md-n5</code> on the parent
                <code>.row</code>.
            </p>

            <div class="bd-example">
                <div class="row mx-md-n5">
                    <div class="col px-md-5">
                        <div class="p-3 border bg-light">Custom column padding</div>
                    </div>
                    <div class="col px-md-5">
                        <div class="p-3 border bg-light">Custom column padding</div>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;row mx-md-n5&quot;&gt;
  &lt;div class=&quot;col px-md-5&quot;&gt;&lt;div class=&quot;p-3 border bg-light&quot;&gt;Custom column padding&lt;/div&gt;&lt;/div&gt;
  &lt;div class=&quot;col px-md-5&quot;&gt;&lt;div class=&quot;p-3 border bg-light&quot;&gt;Custom column padding&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #negative-margin -->

        <div id="content-examples">
            <h4>Content examples</h4>

            <div id="no-style-default">
                <h5>No style default</h5>

                <div class="bd-example style-none">
                    <h1>H1 heading</h1>
                    <h2>H2 heading</h2>
                    <h3>H3 heading</h3>
                    <h4>H4 heading</h4>
                    <h5>H5 heading</h5>
                    <h6>H6 heading</h6>

                    <p>Paragraph 1</p>
                    <p>Paragraph 2</p>

                    <hr>

                    <blockquote>
                        <p>Stay hungry. Stay foolish.</p>
                    </blockquote>

                    <hr>

                    <h2>Tables</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Salary</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <a href="#">John Doe</a>
                                </th>
                                <td>$1</td>
                                <td>Because that’s all Steve Jobs needed for a salary.</td>
                            </tr>
                            <tr>
                                <th>
                                    <a href="#">Jane Doe</a>
                                </th>
                                <td>$100K</td>
                                <td>For all the blogging she does.</td>
                            </tr>
                            <tr>
                                <th>
                                    <a href="#">Fred Bloggs</a>
                                </th>
                                <td>$100M</td>
                                <td>Pictures are worth a thousand words, right? So Jane x 1,000.</td>
                            </tr>
                            <tr>
                                <th>
                                    <a href="#">Jane Bloggs</a>
                                </th>
                                <td>$100B</td>
                                <td>With hair like that?! Enough said…</td>
                            </tr>
                        </tbody>
                    </table>

                    <hr>

                    <h2>Unordered Lists (Nested)</h2>

                    <ul>
                        <li>List item one
                            <ul>
                                <li>List item one
                                    <ul>
                                        <li>List item one</li>
                                        <li>List item two</li>
                                        <li>List item three</li>
                                        <li>List item four</li>
                                    </ul>
                                </li>
                                <li>List item two</li>
                                <li>List item three</li>
                                <li>List item four</li>
                            </ul>
                        </li>
                        <li>List item two</li>
                        <li>List item three</li>
                        <li>List item four</li>
                    </ul>

                    <hr>

                    <h2>Ordered List (Nested)</h2>

                    <ol start="8">
                        <li>List item one - start at 8
                            <ol>
                                <li>List item one
                                    <ol reversed="reversed">
                                        <li>List item one -reversed attribute</li>
                                        <li>List item two</li>
                                        <li>List item three</li>
                                        <li>List item four</li>
                                    </ol>
                                </li>
                                <li>List item two</li>
                                <li>List item three</li>
                                <li>List item four</li>
                            </ol>
                        </li>
                        <li>List item two</li>
                        <li>List item three</li>
                        <li>List item four</li>
                    </ol>

                    <hr>

                    <h2>Block 1</h2>

                    <div class="theme-block-text">
                        <p>Block text</p>
                    </div>

                    <h2>Block 2</h2>

                    <div class="theme-block-text">
                        <p>Block text</p>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;&quot;&gt;
  ...
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #no-style-default -->

            <div id="style-default">
                <h5>Style default</h5>
                <p>Add to parent
                    <code>.style-default</code> class.
                </p>

                <div class="bd-example style-none style-default">
                    <h1>H1 heading</h1>
                    <h2>H2 heading</h2>
                    <h3>H3 heading</h3>
                    <h4>H4 heading</h4>
                    <h5>H5 heading</h5>
                    <h6>H6 heading</h6>

                    <p>Paragraph 1</p>
                    <p>Paragraph 2</p>

                    <hr>

                    <blockquote>
                        <p>Stay hungry. Stay foolish.</p>
                    </blockquote>

                    <hr>

                    <h2>Tables</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Salary</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <a href="#">John Doe</a>
                                </th>
                                <td>$1</td>
                                <td>Because that’s all Steve Jobs needed for a salary.</td>
                            </tr>
                            <tr>
                                <th>
                                    <a href="#">Jane Doe</a>
                                </th>
                                <td>$100K</td>
                                <td>For all the blogging she does.</td>
                            </tr>
                            <tr>
                                <th>
                                    <a href="#">Fred Bloggs</a>
                                </th>
                                <td>$100M</td>
                                <td>Pictures are worth a thousand words, right? So Jane x 1,000.</td>
                            </tr>
                            <tr>
                                <th>
                                    <a href="#">Jane Bloggs</a>
                                </th>
                                <td>$100B</td>
                                <td>With hair like that?! Enough said…</td>
                            </tr>
                        </tbody>
                    </table>

                    <hr>

                    <h2>Unordered Lists (Nested)</h2>

                    <ul>
                        <li>List item one
                            <ul>
                                <li>List item one
                                    <ul>
                                        <li>List item one</li>
                                        <li>List item two</li>
                                        <li>List item three</li>
                                        <li>List item four</li>
                                    </ul>
                                </li>
                                <li>List item two</li>
                                <li>List item three</li>
                                <li>List item four</li>
                            </ul>
                        </li>
                        <li>List item two</li>
                        <li>List item three</li>
                        <li>List item four</li>
                    </ul>

                    <hr>

                    <h2>Ordered List (Nested)</h2>

                    <ol start="8">
                        <li>List item one - start at 8
                            <ol>
                                <li>List item one
                                    <ol reversed="reversed">
                                        <li>List item one -reversed attribute</li>
                                        <li>List item two</li>
                                        <li>List item three</li>
                                        <li>List item four</li>
                                    </ol>
                                </li>
                                <li>List item two</li>
                                <li>List item three</li>
                                <li>List item four</li>
                            </ol>
                        </li>
                        <li>List item two</li>
                        <li>List item three</li>
                        <li>List item four</li>
                    </ol>

                    <hr>

                    <h2>Block 1</h2>

                    <div class="theme-block-text">
                        <p>Block text</p>
                    </div>

                    <h2>Block 2</h2>

                    <div class="theme-block-text">
                        <p>Block text</p>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;style-default&quot;&gt;
  ...
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #style-default -->
        </div><!-- #content-examples-->

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/spacing/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Spacing'
    }
</script>
