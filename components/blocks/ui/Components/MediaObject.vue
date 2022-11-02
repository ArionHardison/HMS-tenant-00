<template>
    <div id="media-object" class="spacer m-top-xl">
        <h3>Media object</h3>
        <p>Object to construct highly repetitive components like blog comments, tweets, and the like.</p>

        <div id="media-object-example">
            <h4>Example</h4>
            <p>The media object helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.</p>
            <p>Below is an example of a single media object. Only two classes are required—the wrapping
                <code>.media</code> and the
                <code>.media-body</code> around your content. Optional padding and margin can be controlled through
                <a class="scroll-to-id" href="#spacing">spacing utilities</a>.
            </p>

            <div class="bd-example">
                <div class="media">
                    <svg class="bd-placeholder-img mr-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>64x64</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">64x64</text>
                    </svg>
                    <div class="media-body">
                        <h5>Media heading</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;media&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;mr-3&quot; alt=&quot;...&quot;&gt;
  &lt;div class=&quot;media-body&quot;&gt;
    &lt;h5&gt;Media heading&lt;/h5&gt;
    &lt;p&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="media-object-nesting">
            <h4>Nesting</h4>
            <p>Media objects can be infinitely nested, though we suggest you stop at some point. Place nested
                <code>.media</code> within the
                <code>.media-body</code> of a parent media object.
            </p>

            <div class="bd-example">
                <div class="media">
                    <svg class="bd-placeholder-img mr-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>64x64</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">64x64</text>
                    </svg>
                    <div class="media-body">
                        <h5>Media heading</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

                        <div class="media">
                            <a class="mr-3" href="#">
                                <svg class="bd-placeholder-img" width="64" height="64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>64x64</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">64x64</text>
                                </svg>
                            </a>
                            <div class="media-body">
                                <h5>Media heading</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;media&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;mr-3&quot; alt=&quot;...&quot;&gt;
  &lt;div class=&quot;media-body&quot;&gt;
    &lt;h5&gt;Media heading&lt;/h5&gt;
    &lt;p&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;

    &lt;div class=&quot;media&quot;&gt;
      &lt;a class=&quot;mr-3&quot; href=&quot;#&quot;&gt;
        &lt;img src=&quot;...&quot; class=&quot;mr-3&quot; alt=&quot;...&quot;&gt;
      &lt;/a&gt;
      &lt;div class=&quot;media-body&quot;&gt;
        &lt;h5&gt;Media heading&lt;/h5&gt;
        &lt;p&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #media-object-nesting -->

        <div id="media-object-alignment">
            <h4>Alignment</h4>
            <p>Media in a media object can be aligned with flexbox utilities to the top (default), middle, or end of your
                <code>.media-body</code> content.
            </p>

            <div class="bd-example">
                <div class="media">
                    <svg class="bd-placeholder-img align-self-start mr-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>64x64</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">64x64</text>
                    </svg>
                    <div class="media-body">
                        <h5>Top-aligned media</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;media&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;align-self-start mr-3&quot; alt=&quot;...&quot;&gt;
  &lt;div class=&quot;media-body&quot;&gt;
    &lt;h5&gt;Top-aligned media&lt;/h5&gt;
    &lt;p&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
    &lt;p&gt;Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="media">
                    <svg class="bd-placeholder-img align-self-center mr-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>64x64</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">64x64</text>
                    </svg>
                    <div class="media-body">
                        <h5>Center-aligned media</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;media&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;align-self-center mr-3&quot; alt=&quot;...&quot;&gt;
  &lt;div class=&quot;media-body&quot;&gt;
    &lt;h5&gt;Center-aligned media&lt;/h5&gt;
    &lt;p&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
    &lt;p&gt;Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <div class="media">
                    <svg class="bd-placeholder-img align-self-end mr-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>64x64</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">64x64</text>
                    </svg>
                    <div class="media-body">
                        <h5>Bottom-aligned media</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;media&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;align-self-end mr-3&quot; alt=&quot;...&quot;&gt;
  &lt;div class=&quot;media-body&quot;&gt;
    &lt;h5&gt;Bottom-aligned media&lt;/h5&gt;
    &lt;p&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
    &lt;p&gt;Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #media-object-alignment -->

        <div id="media-object-order">
            <h4>Order</h4>
            <p>Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the
                <code>order</code> property (to an integer of your choosing).
            </p>

            <div class="bd-example">
                <div class="media">
                    <div class="media-body">
                        <h5>Media object</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                    <svg class="bd-placeholder-img ml-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>64x64</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">64x64</text>
                    </svg>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;media&quot;&gt;
  &lt;div class=&quot;media-body&quot;&gt;
    &lt;h5&gt;Media object&lt;/h5&gt;
    &lt;p&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
  &lt;/div&gt;
  &lt;img src=&quot;...&quot; class=&quot;ml-3&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #media-object-order -->

        <div id="media-list">
            <h4>Media list</h4>
            <p>Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your
                <code>&lt;ul&gt;</code> or
                <code>&lt;ol&gt;</code>, add the
                <code>.list-unstyled</code> to remove any browser default list styles, and then apply
                <code>.media</code> to your
                <code>&lt;li&gt;</code>s. As always, use spacing utilities wherever needed to fine tune.
            </p>

            <div class="bd-example">
                <ul class="list-unstyled">
                    <li class="media">
                        <svg class="bd-placeholder-img mr-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                            <title>64x64</title>
                            <rect width="100%" height="100%"></rect>
                            <text x="50%" y="50%" dy=".3em">64x64</text>
                        </svg>
                        <div class="media-body">
                            <h5>List-based media object</h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                    </li>
                    <li class="media">
                        <svg class="bd-placeholder-img mr-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                            <title>64x64</title>
                            <rect width="100%" height="100%"></rect>
                            <text x="50%" y="50%" dy=".3em">64x64</text>
                        </svg>
                        <div class="media-body">
                            <h5>List-based media object</h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                    </li>
                    <li class="media">
                        <svg class="bd-placeholder-img mr-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                            <title>64x64</title>
                            <rect width="100%" height="100%"></rect>
                            <text x="50%" y="50%" dy=".3em">64x64</text>
                        </svg>
                        <div class="media-body">
                            <h5>List-based media object</h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                    </li>
                </ul>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;ul class=&quot;list-unstyled&quot;&gt;
  &lt;li class=&quot;media&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;mr-3&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;media-body&quot;&gt;
      &lt;h5&gt;List-based media object&lt;/h5&gt;
      &lt;p&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  &lt;li class=&quot;media&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;mr-3&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;media-body&quot;&gt;
      &lt;h5&gt;List-based media object&lt;/h5&gt;
      &lt;p&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  &lt;li class=&quot;media&quot;&gt;
    &lt;img src=&quot;...&quot; class=&quot;mr-3&quot; alt=&quot;...&quot;&gt;
    &lt;div class=&quot;media-body&quot;&gt;
      &lt;h5&gt;List-based media object&lt;/h5&gt;
      &lt;p&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>
        </div><!-- #media-list -->

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/media-object/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MediaObject'
    }
</script>
