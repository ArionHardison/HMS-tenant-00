<template>
    <div id="input-group" class="spacer m-top-xl">
        <h3>Input group</h3>
        <p>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>

        <div id="input-group-primary">
            <h4>Primary</h4>

            <div class="bd-example">
                <p class="input-group gutter-width-30">
                    <span class="gutter-width">
                        <input type="text" placeholder="Input text">
                    </span>

                    <span class="gutter-width">
                        <input type="text" placeholder="Input text">
                    </span>
                </p>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;p class=&quot;input-group gutter-width-30&quot;&gt;
  &lt;span class=&quot;gutter-width&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input text&quot;&gt;
  &lt;/span&gt;

  &lt;span class=&quot;gutter-width&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input text&quot;&gt;
  &lt;/span&gt;
&lt;/p&gt;</code></pre>
            </figure>
        </div><!-- #input-group-primary -->

        <div id="input-group-secondary">
            <h4>Secondary</h4>

            <div class="bd-example">
                <p class="input-group gutter-width-30">
                    <span class="gutter-width">
                        <input class="form-control" type="text" placeholder="Input text">
                    </span>

                    <span class="gutter-width">
                        <input class="form-control" type="text" placeholder="Input text">
                    </span>
                </p>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;p class=&quot;input-group gutter-width-30&quot;&gt;
  &lt;span class=&quot;gutter-width&quot;&gt;
    &lt;input class=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Input text&quot;&gt;
  &lt;/span&gt;

  &lt;span class=&quot;gutter-width&quot;&gt;
    &lt;input class=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Input text&quot;&gt;
  &lt;/span&gt;
&lt;/p&gt;</code></pre>
            </figure>
        </div><!-- #input-group-secondary -->

        <div id="input-group-basic-examples">
            <h4>Basic examples</h4>
            <p>Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place
                <code>&lt;label&gt;</code>s outside the input group.
            </p>

            <div class="bd-example">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <span class="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                </div>

                <label for="basic-url">Your vanity URL</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    </div>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                    <div class="input-group-append">
                        <span class="input-group-text">.00</span>
                    </div>
                </div>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">With textarea</span>
                    </div>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;basic-addon1&quot;&gt;@&lt;/span&gt;
  &lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Username&quot; aria-label=&quot;Username&quot; aria-describedby=&quot;basic-addon1&quot;&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Recipient's username&quot; aria-label=&quot;Recipient's username&quot; aria-describedby=&quot;basic-addon2&quot;&gt;
  &lt;div class=&quot;input-group-append&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;basic-addon2&quot;&gt;@example.com&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;label for=&quot;basic-url&quot;&gt;Your vanity URL&lt;/label&gt;
&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;basic-addon3&quot;&gt;https://example.com/users/&lt;/span&gt;
  &lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;basic-url&quot; aria-describedby=&quot;basic-addon3&quot;&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;$&lt;/span&gt;
  &lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Amount (to the nearest dollar)&quot;&gt;
  &lt;div class=&quot;input-group-append&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;.00&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;With textarea&lt;/span&gt;
  &lt;/div&gt;
  &lt;textarea class=&quot;form-control&quot; aria-label=&quot;With textarea&quot;&gt;&lt;/textarea&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #input-group-basic-examples -->

        <div id="input-group-wrapping">
            <h4>Wrapping</h4>
            <p>Input groups wrap by default via
                <code>flex-wrap: wrap</code> in order to accommodate custom form field validation within an input group. You may disable this with
                <code>.flex-nowrap</code>.
            </p>

            <div class="bd-example">
                <div class="input-group flex-nowrap">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="addon-wrapping">@</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;input-group flex-nowrap&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;addon-wrapping&quot;&gt;@&lt;/span&gt;
  &lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Username&quot; aria-label=&quot;Username&quot; aria-describedby=&quot;addon-wrapping&quot;&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #input-group-wrapping -->

        <div id="input-group-sizing">
            <h4>Sizing</h4>
            <p>Add the relative form sizing classes to the
                <code>.input-group</code> itself and contents within will automatically resize—no need for repeating the form control size classes on each element.
            </p>
            <p>
                <strong>Sizing on the individual input group elements isn’t supported.</strong>
            </p>

            <div class="bd-example">
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>

                <div class="input-group input-group-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;input-group input-group-sm mb-3&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;inputGroup-sizing-sm&quot;&gt;Small&lt;/span&gt;
  &lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Sizing example input&quot; aria-describedby=&quot;inputGroup-sizing-sm&quot;&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;inputGroup-sizing-default&quot;&gt;Default&lt;/span&gt;
  &lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Sizing example input&quot; aria-describedby=&quot;inputGroup-sizing-default&quot;&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group input-group-lg&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;inputGroup-sizing-lg&quot;&gt;Large&lt;/span&gt;
  &lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Sizing example input&quot; aria-describedby=&quot;inputGroup-sizing-lg&quot;&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #input-group-sizing -->

        <div id="input-group-checkboxes-and-radios">
            <h4>Checkboxes and radios</h4>
            <p>Place any checkbox or radio option within an input group’s addon instead of text.</p>

            <div class="bd-example">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input">
                        </div>
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with checkbox">
                </div>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" aria-label="Radio button for following text input">
                        </div>
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with radio button">
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;div class=&quot;input-group-text&quot;&gt;
      &lt;input type=&quot;checkbox&quot; aria-label=&quot;Checkbox for following text input&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Text input with checkbox&quot;&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;div class=&quot;input-group-text&quot;&gt;
      &lt;input type=&quot;radio&quot; aria-label=&quot;Radio button for following text input&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Text input with radio button&quot;&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #input-group-checkboxes-and-radios -->

        <div id="multiple-inputs">
            <h4>Multiple inputs</h4>
            <p>While multiple
                <code>&lt;input&gt;</code>s are supported visually, validation styles are only available for input groups with a single
                <code>&lt;input&gt;</code>.
            </p>

            <div class="bd-example">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">First and last name</span>
                    </div>
                    <input type="text" aria-label="First name" class="form-control">
                    <input type="text" aria-label="Last name" class="form-control">
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;input-group&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;First and last name&lt;/span&gt;
  &lt;/div&gt;
  &lt;input type=&quot;text&quot; aria-label=&quot;First name&quot; class=&quot;form-control&quot;&gt;
  &lt;input type=&quot;text&quot; aria-label=&quot;Last name&quot; class=&quot;form-control&quot;&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #multiple-inputs -->

        <div id="multiple-addons">
            <h4>Multiple addons</h4>
            <p>Multiple add-ons are supported and can be mixed with checkbox and radio input versions.</p>

            <div class="bd-example">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                        <span class="input-group-text">0.00</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                </div>

                <div class="input-group">
                    <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                    <div class="input-group-append">
                        <span class="input-group-text">$</span>
                        <span class="input-group-text">0.00</span>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;$&lt;/span&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;0.00&lt;/span&gt;
  &lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Dollar amount (with dot and two decimal places)&quot;&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group&quot;&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Dollar amount (with dot and two decimal places)&quot;&gt;
  &lt;div class=&quot;input-group-append&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;$&lt;/span&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;0.00&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #multiple-addons -->

        <div id="button-addons">
            <h4>Button addons</h4>

            <div class="bd-example">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-primary" type="button" id="button-addon1">Button</button>
                    </div>
                    <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                </div>

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Button</button>
                    </div>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend" id="button-addon3">
                        <button class="btn btn-outline-primary" type="button">Button</button>
                        <button class="btn btn-outline-primary" type="button">Button</button>
                    </div>
                    <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3">
                </div>

                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">
                    <div class="input-group-append" id="button-addon4">
                        <button class="btn btn-outline-primary" type="button">Button</button>
                        <button class="btn btn-outline-primary" type="button">Button</button>
                    </div>
                </div>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary&quot; type=&quot;button&quot; id=&quot;button-addon1&quot;&gt;Button&lt;/button&gt;
  &lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;&quot; aria-label=&quot;Example text with button addon&quot; aria-describedby=&quot;button-addon1&quot;&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Recipient's username&quot; aria-label=&quot;Recipient's username&quot; aria-describedby=&quot;button-addon2&quot;&gt;
  &lt;div class=&quot;input-group-append&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary&quot; type=&quot;button&quot; id=&quot;button-addon2&quot;&gt;Button&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot; id=&quot;button-addon3&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
    &lt;button class=&quot;btn btn-outline-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
  &lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;&quot; aria-label=&quot;Example text with two button addons&quot; aria-describedby=&quot;button-addon3&quot;&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group&quot;&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Recipient's username&quot; aria-label=&quot;Recipient's username with two button addons&quot; aria-describedby=&quot;button-addon4&quot;&gt;
  &lt;div class=&quot;input-group-append&quot; id=&quot;button-addon4&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
    &lt;button class=&quot;btn btn-outline-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </figure>
        </div><!-- #button-addons -->

        <div id="buttons-with-dropdowns">
            <h4>Buttons with dropdowns</h4>

            <div class="bd-example">
                <b-input-group class="mb-3">
                    <template #prepend>
                        <b-dropdown text="Dropdown" variant="outline-primary">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated link</b-dropdown-item>
                        </b-dropdown>
                    </template>
                    <b-form-input></b-form-input>
                </b-input-group>
                <b-input-group>
                    <template #append>
                        <b-dropdown text="Dropdown" variant="outline-primary">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated link</b-dropdown-item>
                        </b-dropdown>
                    </template>
                    <b-form-input></b-form-input>
                </b-input-group>

            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;b-input-group class=&#x22;mb-3&#x22;&#x3E;
    &#x3C;template #prepend&#x3E;
        &#x3C;b-dropdown text=&#x22;Dropdown&#x22; variant=&#x22;outline-primary&#x22;&#x3E;
            &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
            &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
            &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
            &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
            &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
        &#x3C;/b-dropdown&#x3E;
    &#x3C;/template&#x3E;
    &#x3C;b-form-input&#x3E;&#x3C;/b-form-input&#x3E;
&#x3C;/b-input-group&#x3E;
&#x3C;b-input-group&#x3E;
    &#x3C;template #append&#x3E;
        &#x3C;b-dropdown text=&#x22;Dropdown&#x22; variant=&#x22;outline-primary&#x22;&#x3E;
            &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
            &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
            &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
            &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
            &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
        &#x3C;/b-dropdown&#x3E;
    &#x3C;/template&#x3E;
    &#x3C;b-form-input&#x3E;&#x3C;/b-form-input&#x3E;
&#x3C;/b-input-group&#x3E;</code></pre>
            </figure>
        </div><!-- #buttons-with-dropdowns -->

        <div id="segmented-buttons">
            <h4>Segmented buttons</h4>

            <div class="bd-example">
                <b-input-group class="mb-3">
                    <template #prepend>
                        <b-dropdown text="Action" split split-variant="outline-primary" variant="outline-primary">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated link</b-dropdown-item>
                        </b-dropdown>
                    </template>
                    <b-form-input></b-form-input>
                </b-input-group>
                <b-input-group>
                    <template #append>
                        <b-dropdown text="Action" split split-variant="outline-primary" variant="outline-primary">
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Separated link</b-dropdown-item>
                        </b-dropdown>
                    </template>
                    <b-form-input></b-form-input>
                </b-input-group>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&#x3C;b-input-group class=&#x22;mb-3&#x22;&#x3E;
    &#x3C;template #prepend&#x3E;
        &#x3C;b-dropdown text=&#x22;Action&#x22; split split-variant=&#x22;outline-primary&#x22; variant=&#x22;outline-primary&#x22;&#x3E;
            &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
            &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
            &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
            &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
            &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
        &#x3C;/b-dropdown&#x3E;
    &#x3C;/template&#x3E;
    &#x3C;b-form-input&#x3E;&#x3C;/b-form-input&#x3E;
&#x3C;/b-input-group&#x3E;
&#x3C;b-input-group&#x3E;
    &#x3C;template #append&#x3E;
        &#x3C;b-dropdown text=&#x22;Action&#x22; split split-variant=&#x22;outline-primary&#x22; variant=&#x22;outline-primary&#x22;&#x3E;
            &#x3C;b-dropdown-item&#x3E;Action&#x3C;/b-dropdown-item&#x3E;
            &#x3C;b-dropdown-item&#x3E;Another action&#x3C;/b-dropdown-item&#x3E;
            &#x3C;b-dropdown-item&#x3E;Something else here&#x3C;/b-dropdown-item&#x3E;
            &#x3C;b-dropdown-divider&#x3E;&#x3C;/b-dropdown-divider&#x3E;
            &#x3C;b-dropdown-item&#x3E;Separated link&#x3C;/b-dropdown-item&#x3E;
        &#x3C;/b-dropdown&#x3E;
    &#x3C;/template&#x3E;
    &#x3C;b-form-input&#x3E;&#x3C;/b-form-input&#x3E;
&#x3C;/b-input-group&#x3E;</code></pre>
            </figure>
        </div><!-- #segmented-buttons -->

        <div id="custom-forms">
            <h4>Custom forms</h4>
            <p>Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.</p>

            <div id="custom-select">
                <h5>Custom select</h5>

                <div class="bd-example">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Options</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <select class="custom-select" id="inputGroupSelect02">
                            <option selected="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div class="input-group-append">
                            <label class="input-group-text" for="inputGroupSelect02">Options</label>
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-primary" type="button">Button</button>
                        </div>
                        <select class="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                            <option selected="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div class="input-group">
                        <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                            <option selected="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div class="input-group-append">
                            <button class="btn btn-outline-primary" type="button">Button</button>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;label class=&quot;input-group-text&quot; for=&quot;inputGroupSelect01&quot;&gt;Options&lt;/label&gt;
  &lt;/div&gt;
  &lt;select class=&quot;custom-select&quot; id=&quot;inputGroupSelect01&quot;&gt;
    &lt;option selected&gt;Choose...&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;select class=&quot;custom-select&quot; id=&quot;inputGroupSelect02&quot;&gt;
    &lt;option selected&gt;Choose...&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
  &lt;/select&gt;
  &lt;div class=&quot;input-group-append&quot;&gt;
    &lt;label class=&quot;input-group-text&quot; for=&quot;inputGroupSelect02&quot;&gt;Options&lt;/label&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
  &lt;/div&gt;
  &lt;select class=&quot;custom-select&quot; id=&quot;inputGroupSelect03&quot; aria-label=&quot;Example select with button addon&quot;&gt;
    &lt;option selected&gt;Choose...&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group&quot;&gt;
  &lt;select class=&quot;custom-select&quot; id=&quot;inputGroupSelect04&quot; aria-label=&quot;Example select with button addon&quot;&gt;
    &lt;option selected&gt;Choose...&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
  &lt;/select&gt;
  &lt;div class=&quot;input-group-append&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #custom-select -->

            <div id="custom-file-input">
                <h5>Custom file input</h5>

                <div class="bd-example">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile02">
                            <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                        </div>
                        <div class="input-group-append">
                            <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-primary" type="button" id="inputGroupFileAddon03">Button</button>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03">
                            <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
                            <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                        </div>
                        <div class="input-group-append">
                            <button class="btn btn-outline-primary" type="button" id="inputGroupFileAddon04">Button</button>
                        </div>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;inputGroupFileAddon01&quot;&gt;Upload&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class=&quot;custom-file&quot;&gt;
    &lt;input type=&quot;file&quot; class=&quot;custom-file-input&quot; id=&quot;inputGroupFile01&quot; aria-describedby=&quot;inputGroupFileAddon01&quot;&gt;
    &lt;label class=&quot;custom-file-label&quot; for=&quot;inputGroupFile01&quot;&gt;Choose file&lt;/label&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;div class=&quot;custom-file&quot;&gt;
    &lt;input type=&quot;file&quot; class=&quot;custom-file-input&quot; id=&quot;inputGroupFile02&quot;&gt;
    &lt;label class=&quot;custom-file-label&quot; for=&quot;inputGroupFile02&quot; aria-describedby=&quot;inputGroupFileAddon02&quot;&gt;Choose file&lt;/label&gt;
  &lt;/div&gt;
  &lt;div class=&quot;input-group-append&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;inputGroupFileAddon02&quot;&gt;Upload&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group mb-3&quot;&gt;
  &lt;div class=&quot;input-group-prepend&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary&quot; type=&quot;button&quot; id=&quot;inputGroupFileAddon03&quot;&gt;Button&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;custom-file&quot;&gt;
    &lt;input type=&quot;file&quot; class=&quot;custom-file-input&quot; id=&quot;inputGroupFile03&quot; aria-describedby=&quot;inputGroupFileAddon03&quot;&gt;
    &lt;label class=&quot;custom-file-label&quot; for=&quot;inputGroupFile03&quot;&gt;Choose file&lt;/label&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;input-group&quot;&gt;
  &lt;div class=&quot;custom-file&quot;&gt;
    &lt;input type=&quot;file&quot; class=&quot;custom-file-input&quot; id=&quot;inputGroupFile04&quot; aria-describedby=&quot;inputGroupFileAddon04&quot;&gt;
    &lt;label class=&quot;custom-file-label&quot; for=&quot;inputGroupFile04&quot;&gt;Choose file&lt;/label&gt;
  &lt;/div&gt;
  &lt;div class=&quot;input-group-append&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary&quot; type=&quot;button&quot; id=&quot;inputGroupFileAddon04&quot;&gt;Button&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #custom-file-input -->
        </div><!-- #custom-forms -->

        <div id="input-group-accessibilit">
            <h4>Accessibility</h4>
            <p>Screen readers will have trouble with your forms if you don’t include a label for every input. For these input groups, ensure that any additional label or functionality is conveyed to assistive technologies.</p>
            <p>The exact technique to be used (<code>&lt;label&gt;</code> elements hidden using the
                <code>.sr-only</code> class, or use of the
                <code>aria-label</code> and
                <code>aria-labelledby</code> attributes, possibly in combination with
                <code>aria-describedby</code>) and what additional information will need to be conveyed will vary depending on the exact type of interface widget you’re implementing. The examples in this section provide a few suggested, case-specific approaches.
            </p>
        </div><!-- #input-group-accessibilit -->

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/input-group/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InputGroup'
    }
</script>
