<template>
    <div id="borders" class="spacer m-top-xl">
        <h3>Borders</h3>
        <p>Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.</p>

        <div id="border">
            <h4>Border</h4>
            <p>Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.</p>

            <h5>Additive</h5>

            <div class="bd-example-border-utils">
                <div class="bd-example">
                    <span class="border"></span>
                    <span class="border-top"></span>
                    <span class="border-right"></span>
                    <span class="border-bottom"></span>
                    <span class="border-left"></span>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;span class=&quot;border&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border-top&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border-right&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border-bottom&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border-left&quot;&gt;&lt;/span&gt;</code></pre>
            </figure>

            <h5>Subtractive</h5>

            <div class="bd-example-border-utils bd-example-border-utils-0">
                <div class="bd-example">
                    <span class="border-0"></span>
                    <span class="border-top-0"></span>
                    <span class="border-right-0"></span>
                    <span class="border-bottom-0"></span>
                    <span class="border-left-0"></span>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;span class=&quot;border-0&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border-top-0&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border-right-0&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border-bottom-0&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border-left-0&quot;&gt;&lt;/span&gt;</code></pre>
            </figure>
        </div>

        <div id="border-color">
            <h4>Border color</h4>
            <p>Change the border color using utilities built on our theme colors.</p>

            <div class="bd-example-border-utils">
                <div class="bd-example">
                    <span class="border border-primary"></span>
                    <span class="border border-secondary"></span>
                    <span class="border border-success"></span>
                    <span class="border border-danger"></span>
                    <span class="border border-warning"></span>
                    <span class="border border-info"></span>
                    <span class="border border-light"></span>
                    <span class="border border-dark"></span>
                    <span class="border border-white"></span>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;span class=&quot;border border-primary&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border border-secondary&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border border-success&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border border-danger&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border border-warning&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border border-info&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border border-light&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border border-dark&quot;&gt;&lt;/span&gt;
&lt;span class=&quot;border border-white&quot;&gt;&lt;/span&gt;</code></pre>
            </figure>
        </div>

        <div id="border-radius">
            <h4>Border-radius</h4>
            <p>Add classes to an element to easily round its corners.</p>

            <div class="bd-example">
                <svg class="bd-placeholder-img rounded" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example rounded image: 75x75">
                    <title>Example rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">75x75</text>
                </svg>
                <svg class="bd-placeholder-img rounded-top" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example top rounded image: 75x75">
                    <title>Example top rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">75x75</text>
                </svg>
                <svg class="bd-placeholder-img rounded-right" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example right rounded image: 75x75">
                    <title>Example right rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">75x75</text>
                </svg>
                <svg class="bd-placeholder-img rounded-bottom" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example bottom rounded image: 75x75">
                    <title>Example bottom rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">75x75</text>
                </svg>
                <svg class="bd-placeholder-img rounded-left" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example left rounded image: 75x75">
                    <title>Example left rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">75x75</text>
                </svg>
                <svg class="bd-placeholder-img rounded-circle" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Completely round image: 75x75">
                    <title>Completely round image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">75x75</text>
                </svg>
                <svg class="bd-placeholder-img rounded-pill" width="150" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Rounded pill image: 150x75">
                    <title>Rounded pill image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">150x75</text>
                </svg>
                <svg class="bd-placeholder-img rounded-0" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example non-rounded image (overrides rounding applied elsewhere): 75x75">
                    <title>Example non-rounded image (overrides rounding applied elsewhere)</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">75x75</text>
                </svg>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;img src=&quot;...&quot; alt=&quot;...&quot; class=&quot;rounded&quot;&gt;
&lt;img src=&quot;...&quot; alt=&quot;...&quot; class=&quot;rounded-top&quot;&gt;
&lt;img src=&quot;...&quot; alt=&quot;...&quot; class=&quot;rounded-right&quot;&gt;
&lt;img src=&quot;...&quot; alt=&quot;...&quot; class=&quot;rounded-bottom&quot;&gt;
&lt;img src=&quot;...&quot; alt=&quot;...&quot; class=&quot;rounded-left&quot;&gt;
&lt;img src=&quot;...&quot; alt=&quot;...&quot; class=&quot;rounded-circle&quot;&gt;
&lt;img src=&quot;...&quot; alt=&quot;...&quot; class=&quot;rounded-pill&quot;&gt;
&lt;img src=&quot;...&quot; alt=&quot;...&quot; class=&quot;rounded-0&quot;&gt;</code></pre>
            </figure>
        </div>

        <div id="border-radius-size">
            <h4>Border-radius size</h4>
            <p>Use
                <code>.rounded-lg</code> or
                <code>.rounded-sm</code> for larger or smaller border-radius.
            </p>

            <div class="bd-example">
                <svg class="bd-placeholder-img rounded-sm" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example small rounded image: 75x75">
                    <title>Example small rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">75x75</text>
                </svg>
                <svg class="bd-placeholder-img rounded-lg" width="75" height="75" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Example large rounded image: 75x75">
                    <title>Example large rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">75x75</text>
                </svg>
            </div>
        </div><!-- #border-radius-size -->

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/borders/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Borders'
    }
</script>
