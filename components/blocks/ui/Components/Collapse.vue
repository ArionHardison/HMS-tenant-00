<template>
    <div id="collapse" class="spacer m-top-xl">
        <h3>Collapse</h3>
        <p>Toggle the visibility of content across your project with a few classes and our JavaScript plugins.</p>

        <div id="collapse-example">
            <h4>Example</h4>
            <p>Click the buttons below to show and hide another element via class changes:</p>

            <ul>
                <li>
                    <code>.collapse</code> hides content
                </li>
                <li>
                    <code>.collapsing</code> is applied during transitions
                </li>
                <li>
                    <code>.collapse.show</code> shows content
                </li>
            </ul>

            <p>You can use a link with the
                <code>href</code> attribute, or a button with the
                <code>data-target</code> attribute. In both cases, the
                <code>data-toggle="collapse"</code> is required.
            </p>

            <div class="bd-example">

                <b-link class="btn btn-primary" href="#" v-b-toggle.collapse-2> Link with href</b-link>
                <b-button variant="primary" v-b-toggle.collapse-2>Button with data-target</b-button>

                <b-collapse id="collapse-2">
                    <b-card>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</b-card>
                </b-collapse>

            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;b-link class=&#x22;btn btn-primary&#x22; href=&#x22;#&#x22; v-b-toggle.collapse-2&#x3E; Link with href&#x3C;/b-link&#x3E;
&#x3C;b-button variant=&#x22;primary&#x22; v-b-toggle.collapse-2&#x3E;Button with data-target&#x3C;/b-button&#x3E;

&#x3C;b-collapse id=&#x22;collapse-2&#x22;&#x3E;
    &#x3C;b-card&#x3E;Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.&#x3C;/b-card&#x3E;
&#x3C;/b-collapse&#x3E;</code></pre>
            </figure>
        </div>

        <div id="multiple-targets">
            <h4>Multiple targets</h4>
            <p>A
                <code>&lt;button&gt;</code> or
                <code>&lt;a&gt;</code> can show and hide multiple elements by referencing them with a JQuery selector in its
                <code>href</code> or
                <code>data-target</code> attribute. Multiple
                <code>&lt;button&gt;</code> or
                <code>&lt;a&gt;</code> can show and hide an element if they each reference it with their
                <code>href</code> or
                <code>data-target</code> attribute.
            </p>

            <div class="bd-example">

                <b-button variant="primary" v-b-toggle.collapse-a>Toggle first element</b-button>
                <b-button variant="primary" v-b-toggle.collapse-b>Toggle second element</b-button>
                <b-button variant="primary" v-b-toggle="['collapse-a', 'collapse-b']">Toggle both elements</b-button>

                <div class="row">
                    <div class="col">
                        <b-collapse id="collapse-a" class="multi-collapse" visible>
                            <b-card>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</b-card>
                        </b-collapse>
                    </div>
                    <div class="col">
                        <b-collapse id="collapse-b" class="multi-collapse">
                            <b-card>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;b-button variant=&#x22;primary&#x22; v-b-toggle.collapse-a&#x3E;Toggle first element&#x3C;/b-button&#x3E;
&#x3C;b-button variant=&#x22;primary&#x22; v-b-toggle.collapse-b&#x3E;Toggle second element&#x3C;/b-button&#x3E;
&#x3C;b-button variant=&#x22;primary&#x22; v-b-toggle=&#x22;[&#x27;collapse-a&#x27;, &#x27;collapse-b&#x27;]&#x22;&#x3E;Toggle both elements&#x3C;/b-button&#x3E;

&#x3C;div class=&#x22;row&#x22;&#x3E;
    &#x3C;div class=&#x22;col&#x22;&#x3E;
        &#x3C;b-collapse id=&#x22;collapse-a&#x22; class=&#x22;multi-collapse&#x22; visible&#x3E;
            &#x3C;b-card&#x3E;Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.&#x3C;/b-card&#x3E;
        &#x3C;/b-collapse&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;col&#x22;&#x3E;
        &#x3C;b-collapse id=&#x22;collapse-b&#x22; class=&#x22;multi-collapse&#x22;&#x3E;
            &#x3C;b-card&#x3E;Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.&#x3C;/b-card&#x3E;
        &#x3C;/b-collapse&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;</code></pre>
            </figure>
        </div>

        <div id="accordion-example">
            <h4>Accordion example</h4>
            <p>Using the
                <a class="scroll-to-id" href="#card">card</a> component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use
                <code>.accordion</code> as a wrapper.
            </p>

            <div class="bd-example">
                <div class="accordion" id="accordioExample">
                    <b-card>
                        <b-card-header header-tag="div" class="p-1" role="tab">
                            <b-button v-b-toggle.accordion-1 variant="link">Collapsible Group Item #1</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card>
                        <b-card-header header-tag="div" class="p-1" role="tab">
                            <b-button v-b-toggle.accordion-2 variant="link">Collapsible Group Item #2</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel" visible >
                            <b-card-body>
                                <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card>
                        <b-card-header header-tag="div" class="p-1" role="tab">
                            <b-button v-b-toggle.accordion-3 variant="link">Collapsible Group Item #3</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>{{ text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;div class=&#x22;accordion&#x22; id=&#x22;accordioExample&#x22;&#x3E;
    &#x3C;b-card&#x3E;
        &#x3C;b-card-header header-tag=&#x22;div&#x22; class=&#x22;p-1&#x22; role=&#x22;tab&#x22;&#x3E;
            &#x3C;b-button v-b-toggle.accordion-1 variant=&#x22;link&#x22;&#x3E;Collapsible Group Item #1&#x3C;/b-button&#x3E;
        &#x3C;/b-card-header&#x3E;
        &#x3C;b-collapse id=&#x22;accordion-1&#x22; accordion=&#x22;my-accordion&#x22; role=&#x22;tabpanel&#x22;&#x3E;
            &#x3C;b-card-body&#x3E;
                &#x3C;b-card-text&#x3E;{{ text }}&#x3C;/b-card-text&#x3E;
            &#x3C;/b-card-body&#x3E;
        &#x3C;/b-collapse&#x3E;
    &#x3C;/b-card&#x3E;
    &#x3C;b-card&#x3E;
        &#x3C;b-card-header header-tag=&#x22;div&#x22; class=&#x22;p-1&#x22; role=&#x22;tab&#x22;&#x3E;
            &#x3C;b-button v-b-toggle.accordion-2 variant=&#x22;link&#x22;&#x3E;Collapsible Group Item #2&#x3C;/b-button&#x3E;
        &#x3C;/b-card-header&#x3E;
        &#x3C;b-collapse id=&#x22;accordion-2&#x22; accordion=&#x22;my-accordion&#x22; role=&#x22;tabpanel&#x22; visible &#x3E;
            &#x3C;b-card-body&#x3E;
                &#x3C;b-card-text&#x3E;{{ text }}&#x3C;/b-card-text&#x3E;
            &#x3C;/b-card-body&#x3E;
        &#x3C;/b-collapse&#x3E;
    &#x3C;/b-card&#x3E;
    &#x3C;b-card&#x3E;
        &#x3C;b-card-header header-tag=&#x22;div&#x22; class=&#x22;p-1&#x22; role=&#x22;tab&#x22;&#x3E;
            &#x3C;b-button v-b-toggle.accordion-3 variant=&#x22;link&#x22;&#x3E;Collapsible Group Item #3&#x3C;/b-button&#x3E;
        &#x3C;/b-card-header&#x3E;
        &#x3C;b-collapse id=&#x22;accordion-3&#x22; accordion=&#x22;my-accordion&#x22; role=&#x22;tabpanel&#x22;&#x3E;
            &#x3C;b-card-body&#x3E;
                &#x3C;b-card-text&#x3E;{{ text }}&#x3C;/b-card-text&#x3E;
            &#x3C;/b-card-body&#x3E;
        &#x3C;/b-collapse&#x3E;
    &#x3C;/b-card&#x3E;
&#x3C;/div&#x3E;</code></pre>
            </figure>
        </div>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/collapse/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Collapse',
        data() {
            return {
                text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
            }
        }
    }
</script>
