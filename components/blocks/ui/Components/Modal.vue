<template>
    <div id="modal" class="spacer m-top-xl">
        <h3>Modal</h3>
        <p>Use JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>

        <div id="modal-examples">
            <h4>Examples</h4>

            <div id="modal-components">
                <h5>Modal components</h5>
                <p>Below is a
                    <em>static</em> modal example (meaning its
                    <code>position</code> and
                    <code>display</code> have been overridden). Included are the modal header, modal body (required for
                    <code>padding</code>), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.
                </p>

                <div class="bd-example bd-example-modal">
                    <div class="modal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;modal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot;&gt;
  &lt;div class=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
    &lt;div class=&quot;modal-content&quot;&gt;
      &lt;div class=&quot;modal-header&quot;&gt;
        &lt;h5 class=&quot;modal-title&quot;&gt;Modal title&lt;/h5&gt;
        &lt;button type=&quot;button&quot; class=&quot;close&quot; data-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;
          &lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;
        &lt;/button&gt;
      &lt;/div&gt;
      &lt;div class=&quot;modal-body&quot;&gt;
        &lt;p&gt;Modal body text goes here.&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class=&quot;modal-footer&quot;&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot; data-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Save changes&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #modal-components -->

            <div id="live-demo">
                <h5>Live demo</h5>
                <p>Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.</p>

                <div id="exampleModalLive" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" style="display: none;" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLiveLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Woohoo, you're reading this text in a modal!</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bd-example">
                    <b-button v-b-modal.example-modal variant="primary" >Launch demo modal</b-button>

                    <b-modal id="example-modal" title="Modal title">
                        <p>Modal body text goes here.</p>
                    </b-modal>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">
&#x3C;b-button v-b-modal.modal-1 variant=&#x22;primary&#x22; &#x3E;Launch demo modal&#x3C;/b-button&#x3E;

&#x3C;b-modal id=&#x22;exampleModal&#x22; title=&#x22;Modal title&#x22;&#x3E;
    &#x3C;p&#x3E;Modal body text goes here.&#x3C;/p&#x3E;
&#x3C;/b-modal&#x3E;
                    </code></pre>
                </figure>
            </div><!-- #live-demo -->

            <div id="static-backdrop">
                <h5>Static backdrop</h5>
                <p>When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.</p>

                <div class="bd-example">
                    <b-button v-b-modal.static-backdrop variant="primary" >Launch static backdrop modal</b-button>

                    <b-modal id="static-backdrop" title="Modal title" no-close-on-backdrop>
                        <p>Modal body text goes here.</p>
                    </b-modal>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&#x3C;b-button v-b-modal.static-backdrop variant=&#x22;primary&#x22; &#x3E;Launch static backdrop modal&#x3C;/b-button&#x3E;

&#x3C;b-modal id=&#x22;static-backdrop&#x22; title=&#x22;Modal title&#x22; no-close-on-backdrop&#x3E;
    &#x3C;p&#x3E;Modal body text goes here.&#x3C;/p&#x3E;
&#x3C;/b-modal&#x3E;</code></pre>
                </figure>
            </div><!-- #static-backdrop -->

            <div id="scrolling-long-content">
                <h5>Scrolling long content</h5>
                <p>When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>

                <div class="bd-example">
                    <b-button v-b-modal.modal-long variant="primary">Launch demo modal</b-button>

                    <b-modal id="modal-long" title="Scrolling long content">
                        <p class="my-4" v-for="i in 20" :key="i">
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                    </b-modal>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&#x3C;b-button v-b-modal.modal-long variant=&#x22;primary&#x22;&#x3E;Launch demo modal&#x3C;/b-button&#x3E;

&#x3C;b-modal id=&#x22;modal-long&#x22; title=&#x22;Scrolling long content&#x22;&#x3E;
    &#x3C;p class=&#x22;my-4&#x22; v-for=&#x22;i in 20&#x22; :key=&#x22;i&#x22;&#x3E;
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    &#x3C;/p&#x3E;
&#x3C;/b-modal&#x3E;</code></pre>
                </figure>

                <p>You can also create a scrollable modal that allows scroll the modal body by adding
                    <code>.modal-dialog-scrollable</code> to
                    <code>.modal-dialog</code>.
                </p>

                <div class="bd-example">
                    <b-button v-b-modal.modal-scrollable variant="primary">Launch demo modal</b-button>

                    <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
                        <p class="my-4" v-for="i in 20" :key="i">
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                    </b-modal>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&#x3C;b-modal id=&#x22;modal-scrollable&#x22; scrollable title=&#x22;Scrollable Content&#x22;&#x3E;
    &#x3C;p class=&#x22;my-4&#x22; v-for=&#x22;i in 20&#x22; :key=&#x22;i&#x22;&#x3E;
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    &#x3C;/p&#x3E;
&#x3C;/b-modal&#x3E;</code></pre>
                </figure>
            </div><!-- #scrolling-long-content -->

            <div id="vertically-centered">
                <h5>Vertically centered</h5>
                <p>Add
                    <code>.modal-dialog-centered</code> to
                    <code>.modal-dialog</code> to vertically center the modal.
                </p>

                <div class="bd-example">
                    <b-button v-b-modal.modal-center variant="primary">Vertically centered modal</b-button>

                    <b-modal id="modal-center" centered title="Vertically centered modal">
                        <p class="my-4">Vertically centered modal</p>
                    </b-modal>

                    <b-button v-b-modal.modal-center-scrollable variant="primary">Vertically centered scrollable modal</b-button>

                    <b-modal id="modal-center-scrollable" centered scrollable title="Vertically centered scrollable modal">
                        <p class="my-4">Vertically centered scrollable modal</p>
                    </b-modal>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&#x3C;b-button v-b-modal.modal-center variant=&#x22;primary&#x22;&#x3E;Vertically centered modal&#x3C;/b-button&#x3E;

&#x3C;b-modal id=&#x22;modal-center&#x22; centered title=&#x22;Vertically centered modal&#x22;&#x3E;
    &#x3C;p class=&#x22;my-4&#x22;&#x3E;Vertically centered modal&#x3C;/p&#x3E;
&#x3C;/b-modal&#x3E;

&#x3C;b-button v-b-modal.modal-center-scrollable variant=&#x22;primary&#x22;&#x3E;Vertically centered scrollable modal&#x3C;/b-button&#x3E;

&#x3C;b-modal id=&#x22;modal-center-scrollable&#x22; centered scrollable title=&#x22;Vertically centered scrollable modal&#x22;&#x3E;
    &#x3C;p class=&#x22;my-4&#x22;&#x3E;Vertically centered scrollable modal&#x3C;/p&#x3E;
&#x3C;/b-modal&#x3E;</code></pre>
                </figure>
            </div><!-- #vertically-centered -->

            <div id="optional-size">
                <h5>Optional size</h5>
                <p>Modals have three optional sizes, available via modifier classes to be placed on a
                    <code>.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
                </p>

                <div class="bd-example">
                    <b-button v-b-modal.modal-full variant="primary">Full modal</b-button>
                    <b-button v-b-modal.modal-xl variant="primary">Extra large modal</b-button>
                    <b-button v-b-modal.modal-lg variant="primary">Large modal</b-button>
                    <b-button v-b-modal.modal-sm variant="primary">Small modal</b-button>

                    <b-modal id="modal-full" dialog-class="modal-full" title="Full Modal">Hello Full Modal!</b-modal>
                    <b-modal id="modal-xl" size="xl" title="Extra Large Modal">Hello Extra Large Modal!</b-modal>
                    <b-modal id="modal-lg" size="lg" title="Large Modal">Hello Large Modal!</b-modal>
                    <b-modal id="modal-sm" size="sm" title="Small Modal">Hello Small Modal!</b-modal>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&#x3C;b-button v-b-modal.modal-full variant=&#x22;primary&#x22;&#x3E;Full modal&#x3C;/b-button&#x3E;
&#x3C;b-button v-b-modal.modal-xl variant=&#x22;primary&#x22;&#x3E;Extra large modal&#x3C;/b-button&#x3E;
&#x3C;b-button v-b-modal.modal-lg variant=&#x22;primary&#x22;&#x3E;Large modal&#x3C;/b-button&#x3E;
&#x3C;b-button v-b-modal.modal-sm variant=&#x22;primary&#x22;&#x3E;Small modal&#x3C;/b-button&#x3E;

&#x3C;b-modal id=&#x22;modal-full&#x22; dialog-class=&#x22;modal-full&#x22; title=&#x22;Full Modal&#x22;&#x3E;Hello Full Modal!&#x3C;/b-modal&#x3E;
&#x3C;b-modal id=&#x22;modal-xl&#x22; size=&#x22;xl&#x22; title=&#x22;Extra Large Modal&#x22;&#x3E;Hello Extra Large Modal!&#x3C;/b-modal&#x3E;
&#x3C;b-modal id=&#x22;modal-lg&#x22; size=&#x22;lg&#x22; title=&#x22;Large Modal&#x22;&#x3E;Hello Large Modal!&#x3C;/b-modal&#x3E;
&#x3C;b-modal id=&#x22;modal-sm&#x22; size=&#x22;sm&#x22; title=&#x22;Small Modal&#x22;&#x3E;Hello Small Modal!&#x3C;/b-modal&#x3E;</code></pre>
                </figure>
            </div><!-- #optional-size -->
        </div><!-- #modal-examples -->

        <div id="modal-custom">
            <h4>Custom</h4>
            <p>You also need adding
                <code>.modal-full</code> to .modal-dialog,
                <code>.modal-header-top</code> to .modal-header and
                <code>.modal-body-centered</code> to .modal-body.
            </p>

            <div class="bd-example">
                <b-button v-b-modal.modal-custom variant="primary">Demo modal</b-button>

                <b-modal id="modal-custom" dialog-class="modal-full" header-class="modal-header-top" body-class="modal-body-centered"  title="Custom Modal">
                    <p class="my-4">Demo Modal</p>
                </b-modal>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;b-button v-b-modal.modal-custom variant=&#x22;primary&#x22;&#x3E;Demo modal&#x3C;/b-button&#x3E;

&#x3C;b-modal id=&#x22;modal-custom&#x22; dialog-class=&#x22;modal-full&#x22; header-class=&#x22;modal-header-top&#x22; body-class=&#x22;modal-body-centered&#x22;  title=&#x22;Custom Modal&#x22;&#x3E;
    &#x3C;p class=&#x22;my-4&#x22;&#x3E;Demo Modal&#x3C;/p&#x3E;
&#x3C;/b-modal&#x3E;</code></pre>
            </figure>
        </div><!-- #modal-custom -->

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/modal/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal'
    }
</script>
