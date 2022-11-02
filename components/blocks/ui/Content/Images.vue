<template>
    <div id="images" class="spacer m-top-xl">
        <h3>Images</h3>
        <p>Information for opting your images into responsive behaviour (images never become larger than their parent elements). All of the image styles are added via classes.</p>

        <div id="responsive-images">
            <h4>Responsive images</h4>
            <p>Images in Bootstrap are made responsive with
                <code>.img-fluid</code>.
                <code>max-width: 100%;</code> and
                <code>height: auto;</code> are applied to the image so that it scales with the parent element.
            </p>

            <div class="bd-example">
                <svg class="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>Responsive image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dy=".3em">Responsive image</text>
                </svg>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;img src=&quot;...&quot; class=&quot;img-fluid&quot; alt=&quot;Responsive image&quot;&gt;</code></pre>
            </figure>
        </div>

        <div id="image-thumbnails">
            <h4>Image thumbnails</h4>
            <p>In addition to our
                <a class="scroll-to-id" href="#borders">border-radius utilities</a>, you can use
                <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.
            </p>

            <div class="bd-example bd-example-images">
                <svg class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>200x200</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dy=".3em">200x200</text>
                </svg>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;img src=&quot;...&quot; alt=&quot;...&quot; class=&quot;img-thumbnail&quot;&gt;</code></pre>
            </figure>
        </div>

        <div id="aligning-images">
            <h4>Aligning images</h4>
            <p>Align images with the
                <a class="scroll-to-id" href="#float">helper float classes</a> or
                <a class="scroll-to-id" href="#text-alignment">text alignment classes</a>.
                <code>block</code>-level images can be centered using
                <a class="scroll-to-id" href="#horizontal-centering">the
                    <code>.mx-auto</code> margin utility class</a>.
            </p>

            <div class="bd-example bd-example-images clearfix">
                <svg class="bd-placeholder-img rounded float-left" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>200x200</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dy=".3em">200x200</text>
                </svg>

                <svg class="bd-placeholder-img rounded float-right" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>200x200</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dy=".3em">200x200</text>
                </svg>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;img src=&quot;...&quot; class=&quot;rounded float-left&quot; alt=&quot;...&quot;&gt;
&lt;img src=&quot;...&quot; class=&quot;rounded float-right&quot; alt=&quot;...&quot;&gt;</code></pre>
            </figure>

            <div class="bd-example bd-example-images">
                <svg class="bd-placeholder-img rounded mx-auto d-block" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dy=".3em">200x200</text>
                </svg>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;img src=&quot;...&quot; class=&quot;rounded mx-auto d-block&quot; alt=&quot;...&quot;&gt;</code></pre>
            </figure>

            <div class="bd-example bd-example-images">
                <div class="text-center">
                    <svg class="bd-placeholder-img rounded" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">200x200</text>
                    </svg>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;text-center&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;rounded&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div>

        <div id="picture">
            <h4>Picture</h4>
            <p>If you are using the
                <code>&lt;picture&gt;</code> element to specify multiple
                <code>&lt;source&gt;</code> elements for a specific
                <code>&lt;img&gt;</code>, make sure to add the
                <code>.img-*</code> classes to the
                <code>&lt;img&gt;</code> and not to the
                <code>&lt;picture&gt;</code> tag.
            </p>

            <figure class="highlight">
                <pre><code class="language-html">&lt;picture&gt;
  &lt;source srcset=&quot;...&quot; type=&quot;image/svg+xml&quot;&gt;
  &lt;img src=&quot;...&quot; class=&quot;img-fluid img-thumbnail&quot; alt=&quot;...&quot;&gt;
&lt;/picture&gt;</code></pre>
            </figure>
        </div>

        <div id="object-fit-size">
            <h4>Object fit size</h4>

            <div class="bd-example">
                <div class="row pb-3">
                    <div class="col-4">
                        <div class="img object-fit size-5">
                            <div class="object-fit-cover">
                                <svg class="bd-placeholder-img float-right" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder image</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Placeholder image</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="img object-fit">
                            <div class="object-fit-cover">
                                <svg class="bd-placeholder-img float-right" width="100%" height="600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder image</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Placeholder image</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="img object-fit size-4">
                            <div class="object-fit-cover">
                                <svg class="bd-placeholder-img float-right" width="100%" height="600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder image</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Placeholder image</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row pt-3">
                    <div class="col-4">
                        <div class="img object-fit size-3">
                            <div class="object-fit-cover">
                                <svg class="bd-placeholder-img float-right" width="100%" height="600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder image</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Placeholder image</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="img object-fit size-2">
                            <div class="object-fit-cover">
                                <svg class="bd-placeholder-img float-right" width="100%" height="600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder image</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Placeholder image</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="img object-fit size-1">
                            <div class="object-fit-cover">
                                <svg class="bd-placeholder-img float-right" width="100%" height="600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder image</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Placeholder image</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;img object-fit size-5&quot;&gt;
  &lt;div class=&quot;object-fit-cover&quot;&gt;
    &lt;img src=&quot;...&quot; alt=&quot;Objet fit image&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;&lt;!-- Height: 112% --&gt;

&lt;div class=&quot;img object-fit&quot;&gt;
  &lt;div class=&quot;object-fit-cover&quot;&gt;
    &lt;img src=&quot;...&quot; alt=&quot;Objet fit image&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;&lt;!-- Height: 100% --&gt;

&lt;div class=&quot;img object-fit size-4&quot;&gt;
  &lt;div class=&quot;object-fit-cover&quot;&gt;
      &lt;img src=&quot;...&quot; alt=&quot;Objet fit image&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;&lt;!-- Height: 88% --&gt;

&lt;div class=&quot;img object-fit size-3&quot;&gt;
  &lt;div class=&quot;object-fit-cover&quot;&gt;
    &lt;img src=&quot;...&quot; alt=&quot;Objet fit image&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;&lt;!-- Height: 76% --&gt;

&lt;div class=&quot;img object-fit size-2&quot;&gt;
  &lt;div class=&quot;object-fit-cover&quot;&gt;
    &lt;img src=&quot;...&quot; alt=&quot;Objet fit image&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;&lt;!-- Height: 64% --&gt;

&lt;div class=&quot;img object-fit size-1&quot;&gt;
  &lt;div class=&quot;object-fit-cover&quot;&gt;
    &lt;img src=&quot;...&quot; alt=&quot;Objet fit image&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;&lt;!-- Height: 52% --&gt;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/content/images/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Images'
    }
</script>
