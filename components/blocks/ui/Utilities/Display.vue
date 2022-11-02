<template>
    <div id="display" class="spacer m-top-xl">
        <h3>Display</h3>
        <p>Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.</p>

        <div id="display-notation">
            <h4>Notation</h4>
            <p>Display utility classes that apply to all breakpoints, from
                <code>xs</code> to
                <code>xl</code>, have no breakpoint abbreviation in them. This is because those classes are applied from
                <code>min-width: 0;</code> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.
            </p>
            <p>As such, the classes are named using the format:</p>

            <ul>
                <li>
                    <code>.d-{value}</code> for
                    <code>xs</code>
                </li>
                <li>
                    <code>.d-{breakpoint}-{value}</code> for
                    <code>sm</code>,
                    <code>md</code>,
                    <code>lg</code>, and
                    <code>xl</code>.
                </li>
            </ul>

            <p>Where value is one of:</p>

            <ul>
                <li>
                    <code>none</code>
                </li>
                <li>
                    <code>inline</code>
                </li>
                <li>
                    <code>inline-block</code>
                </li>
                <li>
                    <code>block</code>
                </li>
                <li>
                    <code>table</code>
                </li>
                <li>
                    <code>table-cell</code>
                </li>
                <li>
                    <code>table-row</code>
                </li>
                <li>
                    <code>flex</code>
                </li>
                <li>
                    <code>inline-flex</code>
                </li>
            </ul>

            <p>The display values can be altered by changing the
                <code>$displays</code> variable and recompiling the SCSS.
            </p>

            <p>The media queries effect screen widths with the given breakpoint
                <em>or larger</em>. For example,
                <code>.d-lg-none</code> sets
                <code>display: none;</code> on both
                <code>lg</code> and
                <code>xl</code> screens.
            </p>
        </div>

        <div id="display-examples" class="spacer m-top-lg">
            <h4>Examples</h4>

            <div class="bd-example">
                <div class="d-inline p-2 bg-primary text-white">d-inline</div>
                <div class="d-inline p-2 bg-secondary text-white">d-inline</div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-inline p-2 bg-primary text-white&quot;&gt;d-inline&lt;/div&gt;
&lt;div class=&quot;d-inline p-2 bg-secondary text-white&quot;&gt;d-inline&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <span class="d-block p-2 bg-primary text-white">d-block</span>
                <span class="d-block p-2 bg-secondary text-white">d-block</span>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;span class=&quot;d-block p-2 bg-primary text-white&quot;&gt;d-block&lt;/span&gt;
&lt;span class=&quot;d-block p-2 bg-secondary text-white&quot;&gt;d-block&lt;/span&gt;</code></pre>
            </figure>
        </div>

        <div id="hidding-elements">
            <h4>Hiding elements</h4>
            <p>For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.</p>
            <p>To hide elements simply use the
                <code>.d-none</code> class or one of the
                <code>.d-{sm,md,lg,xl}-none</code> classes for any responsive screen variation.
            </p>
            <p>To show an element only on a given interval of screen sizes you can combine one
                <code>.d-*-none</code> class with a
                <code>.d-*-*</code> class, for example
                <code>.d-none .d-md-block .d-xl-none</code> will hide the element for all screen sizes except on medium and large devices.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Screen Size</th>
                        <th>Class</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Hidden on all</td>
                        <td>
                            <code>.d-none</code>
                        </td>
                    </tr>

                    <tr>
                        <td>Hidden only on xs</td>
                        <td>
                            <code>.d-none .d-sm-block</code>
                        </td>
                    </tr>

                    <tr>
                        <td>Hidden only on sm</td>
                        <td>
                            <code>.d-sm-none .d-md-block</code>
                        </td>
                    </tr>

                    <tr>
                        <td>Hidden only on md</td>
                        <td>
                            <code>.d-md-none .d-lg-block</code>
                        </td>
                    </tr>

                    <tr>
                        <td>Hidden only on lg</td>
                        <td>
                            <code>.d-lg-none .d-xl-block</code>
                        </td>
                    </tr>

                    <tr>
                        <td>Hidden only on xl</td>
                        <td>
                            <code>.d-xl-none</code>
                        </td>
                    </tr>

                    <tr>
                        <td>Visible on all</td>
                        <td>
                            <code>.d-block</code>
                        </td>
                    </tr>

                    <tr>
                        <td>Visible only on xs</td>
                        <td>
                            <code>.d-block .d-sm-none</code>
                        </td>
                    </tr>

                    <tr>
                        <td>Visible only on sm</td>
                        <td>
                            <code>.d-none .d-sm-block .d-md-none</code>
                        </td>
                    </tr>

                    <tr>
                        <td>Visible only on md</td>
                        <td>
                            <code>.d-none .d-md-block .d-lg-none</code>
                        </td>
                    </tr>

                    <tr>
                        <td>Visible only on lg</td>
                        <td>
                            <code>.d-none .d-lg-block .d-xl-none</code>
                        </td>
                    </tr>

                    <tr>
                        <td>Visible only on xl</td>
                        <td>
                            <code>.d-none .d-xl-block</code>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="bd-example">
                <div class="d-lg-none">hide on lg and wider screens</div>
                <div class="d-none d-lg-block">hide on screens smaller than lg</div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-lg-none&quot;&gt;hide on lg and wider screens&lt;/div&gt;
&lt;div class=&quot;d-none d-lg-block&quot;&gt;hide on screens smaller than lg&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="display-in-print">
            <h4>Display in print</h4>
            <p>Change the
                <code>display</code> value of elements when printing with our print display utility classes. Includes support for the same
                <code>display</code> values as our responsive
                <code>.d-*</code> utilities.
            </p>

            <ul>
                <li>
                    <code>.d-print-none</code>
                </li>
                <li>
                    <code>.d-print-inline</code>
                </li>
                <li>
                    <code>.d-print-inline-block</code>
                </li>
                <li>
                    <code>.d-print-block</code>
                </li>
                <li>
                    <code>.d-print-table</code>
                </li>
                <li>
                    <code>.d-print-table-row</code>
                </li>
                <li>
                    <code>.d-print-table-cell</code>
                </li>
                <li>
                    <code>.d-print-flex</code>
                </li>
                <li>
                    <code>.d-print-inline-flex</code>
                </li>
            </ul>

            <p>The print and display classes can be combined.</p>

            <div class="bd-example">
                <div class="d-print-none">Screen Only (Hide on print only)</div>
                <div class="d-none d-print-block">Print Only (Hide on screen only)</div>
                <div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;d-print-none&quot;&gt;Screen Only (Hide on print only)&lt;/div&gt;
&lt;div class=&quot;d-none d-print-block&quot;&gt;Print Only (Hide on screen only)&lt;/div&gt;
&lt;div class=&quot;d-none d-lg-block d-print-block&quot;&gt;Hide up to large on screen, but always show on print&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/display/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Display'
    }
</script>
