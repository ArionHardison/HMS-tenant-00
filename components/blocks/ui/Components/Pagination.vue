<template>
    <div id="pagination" class="spacer m-top-xl">
        <h3>Pagination</h3>
        <p>Examples for showing pagination to indicate a series of related content exists across multiple pages.</p>

        <div id="pagination-overview">
            <h4>Overview</h4>
            <p>We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping
                <code>&lt;nav&gt;</code> element to identify it as a navigation section to screen readers and other assistive technologies.
            </p>
            <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive
                <code>aria-label</code> for the
                <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be
                <code>aria-label="Search results pages"</code>.
            </p>

            <div class="bd-example">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#">Previous</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
  &lt;ul class=&quot;pagination&quot;&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Previous&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
            </figure>
        </div>

        <div id="working-with-icons">
            <h4>Working with icons</h4>
            <p>Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with
                <code>aria</code> attributes.
            </p>

            <div class="bd-example">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
  &lt;ul class=&quot;pagination&quot;&gt;
    &lt;li class=&quot;page-item&quot;&gt;
      &lt;a class=&quot;page-link&quot; href=&quot;#&quot; aria-label=&quot;Previous&quot;&gt;
        &lt;span aria-hidden=&quot;true&quot;&gt;&amp;laquo;&lt;/span&gt;
      &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
      &lt;a class=&quot;page-link&quot; href=&quot;#&quot; aria-label=&quot;Next&quot;&gt;
        &lt;span aria-hidden=&quot;true&quot;&gt;&amp;raquo;&lt;/span&gt;
      &lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
            </figure>
        </div>

        <div id="disabled-and-active-states">
            <h4>Disabled and active states</h4>
            <p>Pagination links are customizable for different circumstances. Use
                <code>.disabled</code> for links that appear un-clickable and
                <code>.active</code> to indicate the current page.
            </p>
            <p>While the
                <code>.disabled</code> class uses
                <code>pointer-events: none</code> to
                <em>try</em> to disable the link functionality of
                <code>&lt;a&gt;</code>s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add
                <code>tabindex="-1"</code> on disabled links and use custom JavaScript to fully disable their functionality.
            </p>

            <div class="bd-example">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item active" aria-current="page">
                            <a class="page-link" href="#">2
                                <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;nav aria-label=&quot;...&quot;&gt;
  &lt;ul class=&quot;pagination&quot;&gt;
    &lt;li class=&quot;page-item disabled&quot;&gt;
      &lt;a class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Previous&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item active&quot; aria-current=&quot;page&quot;&gt;
      &lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2 &lt;span class=&quot;sr-only&quot;&gt;(current)&lt;/span&gt;&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
      &lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
            </figure>

            <p>You can optionally swap out active or disabled anchors for
                <code>&lt;span&gt;</code>, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.
            </p>

            <div class="bd-example">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <span class="page-link">Previous</span>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item active" aria-current="page">
                            <span class="page-link">2 <span class="sr-only">(current)</span></span>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;nav aria-label=&quot;...&quot;&gt;
  &lt;ul class=&quot;pagination&quot;&gt;
    &lt;li class=&quot;page-item disabled&quot;&gt;
      &lt;span class=&quot;page-link&quot;&gt;Previous&lt;/span&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item active&quot; aria-current=&quot;page&quot;&gt;
      &lt;span class=&quot;page-link&quot;&gt;
        2
        &lt;span class=&quot;sr-only&quot;&gt;(current)&lt;/span&gt;
      &lt;/span&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
      &lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
            </figure>
        </div>

        <div id="pagination-sizing">
            <h4>Sizing</h4>
            <p>Fancy larger or smaller pagination? Add
                <code>.pagination-lg</code> or
                <code>.pagination-sm</code> for additional sizes.
            </p>

            <div class="bd-example">
                <nav aria-label="...">
                    <ul class="pagination pagination-lg">
                        <li class="page-item active" aria-current="page">
                            <span class="page-link">1<span class="sr-only">(current)</span></span>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;nav aria-label=&quot;...&quot;&gt;
  &lt;ul class=&quot;pagination pagination-lg&quot;&gt;
    &lt;li class=&quot;page-item active&quot; aria-current=&quot;page&quot;&gt;
      &lt;span class=&quot;page-link&quot;&gt;
        1
        &lt;span class=&quot;sr-only&quot;&gt;(current)&lt;/span&gt;
      &lt;/span&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <nav aria-label="...">
                    <ul class="pagination pagination-sm">
                        <li class="page-item active" aria-current="page">
                            <span class="page-link">1<span class="sr-only">(current)</span></span>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;nav aria-label=&quot;...&quot;&gt;
  &lt;ul class=&quot;pagination pagination-sm&quot;&gt;
    &lt;li class=&quot;page-item active&quot; aria-current=&quot;page&quot;&gt;
      &lt;span class=&quot;page-link&quot;&gt;
        1
        &lt;span class=&quot;sr-only&quot;&gt;(current)&lt;/span&gt;
      &lt;/span&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
            </figure>
        </div><!-- #pagination-sizing -->

        <div id="pagination-alignment">
            <h4>Alignment</h4>
            <p>Change the alignment of pagination components with
                <a class="scroll-to-id" href="#flex">flexbox utilities</a>.
            </p>

            <div class="bd-example">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
  &lt;ul class=&quot;pagination justify-content-center&quot;&gt;
    &lt;li class=&quot;page-item disabled&quot;&gt;
      &lt;a class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Previous&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
      &lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
  &lt;ul class=&quot;pagination justify-content-end&quot;&gt;
    &lt;li class=&quot;page-item disabled&quot;&gt;
      &lt;a class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Previous&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
      &lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
            </figure>
        </div><!-- #pagination-alignment -->

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/pagination/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pagination'
    }
</script>
