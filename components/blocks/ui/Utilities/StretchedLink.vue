<template>
    <div id="stretched-link" class="spacer m-top-xl">
        <h3>Stretched link</h3>
        <p>Make any HTML element or Bootstrap component clickable by “stretching” a nested link via CSS.</p>

        <p>Add
            <code>.stretched-link</code> to a link to make its
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block" target="_blank">containing block</a> clickable via a
            <code>::after</code> pseudo element. In most cases, this means that an element with
            <code>position: relative;</code> that contains a link with the
            <code>.stretched-link</code> class is clickable.
        </p>
        <p>Cards have
            <code>position: relative</code> by default in Bootstrap, so in this case you can safely add the
            <code>.stretched-link</code> class to a link in the card without any other HTML changes.
        </p>
        <p>Multiple links and tap targets are not recommended with stretched links. However, some
            <code>position</code> and
            <code>z-index</code> styles can help should this be required.
        </p>

        <div class="bd-example">
            <div class="card" style="width: 18rem;">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>Card image cap</title>
                    <rect width="100%" height="100%"></rect>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Card with stretched link</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
                </div>
            </div>
        </div>

        <figure class="highlight">
            <pre><code class="language-html">&lt;div class=&quot;card&quot; style=&quot;width: 18rem;&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Card with stretched link&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;btn btn-primary stretched-link&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </figure>

        <p>Media objects do not have
            <code>position: relative</code> by default, so we need to add the
            <code>.position-relative</code> here to prevent the link from stretching outside the media object.
        </p>

        <div class="bd-example">
            <div class="media position-relative">
                <svg class="bd-placeholder-img mr-3" width="144" height="144" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>Generic placeholder image</title>
                    <rect width="100%" height="100%"></rect>
                </svg>
                <div class="media-body">
                    <h5 class="mt-0">Media with stretched link</h5>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    <a href="#" class="stretched-link">Go somewhere</a>
                </div>
            </div>
        </div>

        <figure class="highlight">
            <pre><code class="language-html">&lt;div class=&quot;media position-relative&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;mr-3&quot; alt=&quot;...&quot;&gt;
  &lt;div class=&quot;media-body&quot;&gt;
    &lt;h5 class=&quot;mt-0&quot;&gt;Media with stretched link&lt;/h5&gt;
    &lt;p&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;stretched-link&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </figure>

        <p>Columns are
            <code>position: relative</code> by default, so clickable columns only require the
            <code>.stretched-link</code> class on a link. However, stretching a link over an entire
            <code>.row</code> requires
            <code>.position-static</code> on the column and
            <code>.position-relative</code> on the row.
        </p>

        <div class="bd-example">
            <div class="row no-gutters bg-light position-relative">
                <div class="col-md-6 mb-md-0 p-md-4">
                    <svg class="bd-placeholder-img w-100" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>Generic placeholder image</title>
                        <rect width="100%" height="100%"></rect>
                    </svg>
                </div>
                <div class="col-md-6 position-static p-4 pl-md-0">
                    <h5 class="mt-0">Columns with stretched link</h5>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    <a href="#" class="stretched-link">Go somewhere</a>
                </div>
            </div>
        </div>

        <figure class="highlight">
            <pre><code class="language-html">&lt;div class=&quot;row no-gutters bg-light position-relative&quot;&gt;
  &lt;div class=&quot;col-md-6 mb-md-0 p-md-4&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;w-100&quot; alt=&quot;...&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;col-md-6 position-static p-4 pl-md-0&quot;&gt;
    &lt;h5 class=&quot;mt-0&quot;&gt;Columns with stretched link&lt;/h5&gt;
    &lt;p&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
    &lt;a href=&quot;#&quot; class=&quot;stretched-link&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </figure>

        <div id="identifying-the-containing-block">
            <h4>Identifying the containing block</h4>
            <p>If the stretched link doesn’t seem to work, the
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block" target="_blank">containing block</a> will probably be the cause. The following CSS properties will make an element the containing block:
            </p>

            <ul>
                <li>A
                    <code>position</code> value other than
                    <code>static</code>
                </li>
                <li>A
                    <code>transform</code> or
                    <code>perspective</code> value other than
                    <code>none</code>
                </li>
                <li>A
                    <code>will-change</code> value of
                    <code>transform</code> or
                    <code>perspective</code>
                </li>
                <li>A
                    <code>filter</code> value other than
                    <code>none</code> or a
                    <code>will-change</code> value of
                    <code>filter</code> (only works on Firefox)
                </li>
            </ul>

            <div class="bd-example">
                <div class="card" style="width: 18rem;">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>Card image cap</title>
                        <rect width="100%" height="100%"></rect>
                    </svg>
                    <div class="card-body">
                        <h5 class="card-title">Card with stretched links</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p class="card-text">
                            <a href="#" class="stretched-link text-danger" style="position: relative;">Stretched link will not work here, because
                                <code>position: relative</code> is added to the link</a>
                        </p>
                        <p class="card-text bg-light" style="transform: rotate(0);">
                            This
                            <a href="#" class="text-warning stretched-link">stretched link</a> will only be spread over the
                            <code>p</code>-tag, because a transform is applied to it.
                        </p>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;card&quot; style=&quot;width: 18rem;&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;...&quot;&gt;
  &lt;div class=&quot;card-body&quot;&gt;
    &lt;h5 class=&quot;card-title&quot;&gt;Card with stretched links&lt;/h5&gt;
    &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
    &lt;p class=&quot;card-text&quot;&gt;
      &lt;a href=&quot;#&quot; class=&quot;stretched-link text-danger&quot; style=&quot;position: relative;&quot;&gt;Stretched link will not work here, because &lt;code&gt;position: relative&lt;/code&gt; is added to the link&lt;/a&gt;
    &lt;/p&gt;
    &lt;p class=&quot;card-text bg-light&quot; style=&quot;transform: rotate(0);&quot;&gt;
      This &lt;a href=&quot;#&quot; class=&quot;text-warning stretched-link&quot;&gt;stretched link&lt;/a&gt; will only be spread over the &lt;code&gt;p&lt;/code&gt;-tag, because a transform is applied to it.
    &lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/stretched-link/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StretchedLink'
    }
</script>
