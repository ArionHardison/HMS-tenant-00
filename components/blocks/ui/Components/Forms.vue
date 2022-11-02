<template>
    <div id="forms" class="spacer m-top-xl">
        <h3>Forms</h3>
        <p>Several form control styles, layout options, and custom components for creating a wide variety of forms.</p>

        <div id="form-examples">
            <h4>Examples</h4>

            <div id="form-primary">
                <h5>Form primary</h5>
                <p>No classes.</p>

                <div class="bd-example">
                    <form>
                        <p>
                            <input type="text" placeholder="Input text">
                        </p>

                        <p>
                            <textarea placeholder="Textarea"></textarea>
                        </p>

                        <p>
                            <select>
                                <option>Select</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </p>

                        <p class="form-crop-ba">
                            <input type="checkbox" id="checkbox-input">
                            <label for="checkbox-input">Checkbox</label>
                        </p>

                        <p class="form-crop-ba">
                            <input type="radio" id="radio-input">
                            <label for="radio-input">Radio</label>
                        </p>

                        <p class="form-check form-crop-ba">
                            <input type="checkbox" class="form-check-input" id="checkbox-input-2">
                            <label class="form-label-secondary" for="checkbox-input-2">Checkbox</label>
                        </p>

                        <p class="form-check form-crop-ba">
                            <input type="radio" class="form-check-input" id="radio-input-2">
                            <label class="form-label-secondary" for="radio-input-2">Radio</label>
                        </p>
                    </form>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;p&gt;
  &lt;input type=&quot;text&quot; placeholder=&quot;Input text&quot;&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;textarea placeholder=&quot;Textarea&quot;&gt;&lt;/textarea&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;select&gt;
    &lt;option&gt;Select&lt;/option&gt;
    &lt;option&gt;Option 1&lt;/option&gt;
    &lt;option&gt;Option 2&lt;/option&gt;
  &lt;/select&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-input&quot;&gt;
  &lt;label for=&quot;checkbox-input&quot;&gt;Checkbox&lt;/label&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;input type=&quot;radio&quot; id=&quot;radio-input&quot;&gt;
  &lt;label for=&quot;radio-input&quot;&gt;Radio&lt;/label&gt;
&lt;/p&gt;
&lt;p class=&quot;form-check form-crop-ba&quot;&gt;
  &lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;checkbox-input-2&quot;&gt;
  &lt;label class=&quot;form-label-secondary&quot; for=&quot;checkbox-input-2&quot;&gt;Checkbox&lt;/label&gt;
&lt;/p&gt;
&lt;p class=&quot;form-check form-crop-ba&quot;&gt;
  &lt;input type=&quot;radio&quot; class=&quot;form-check-input&quot; id=&quot;radio-input-2&quot;&gt;
  &lt;label class=&quot;form-label-secondary&quot; for=&quot;radio-input-2&quot;&gt;Radio&lt;/label&gt;
&lt;/p&gt;</code></pre>
                </figure>
            </div>

            <div id="form-secondary">
                <h5>Form secondary</h5>
                <p>With classes.</p>

                <div class="bd-example">
                    <form>
                        <p>
                            <input type="text" class="form-control" placeholder="Input text">
                        </p>

                        <p>
                            <textarea class="form-control" placeholder="Textarea"></textarea>
                        </p>

                        <p>
                            <select class="form-control">
                                <option>Select</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </p>

                        <p class="custom-control custom-checkbox form-crop-ba">
                            <input type="checkbox" class="custom-control-input" id="custom-checkbox-input">
                            <label for="custom-checkbox-input" class="custom-control-label">Checkbox</label>
                        </p>

                        <p class="custom-control custom-radio form-crop-ba">
                            <input type="radio" class="custom-control-input" id="custom-radio-input">
                            <label for="custom-radio-input" class="custom-control-label">Radio</label>
                        </p>
                    </form>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;p&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Input text&quot;&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;textarea class=&quot;form-control&quot; placeholder=&quot;Textarea&quot;&gt;&lt;/textarea&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;select class=&quot;form-control&quot;&gt;
    &lt;option&gt;Select&lt;/option&gt;
    &lt;option&gt;Option 1&lt;/option&gt;
    &lt;option&gt;Option 2&lt;/option&gt;
  &lt;/select&gt;
&lt;/p&gt;
&lt;p class=&quot;custom-control custom-checkbox form-crop-ba&quot;&gt;
  &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;custom-checkbox-input&quot;&gt;
  &lt;label for=&quot;custom-checkbox-input&quot; class=&quot;custom-control-label&quot;&gt;Checkbox&lt;/label&gt;
&lt;/p&gt;
&lt;p class=&quot;custom-control custom-radio form-crop-ba&quot;&gt;
  &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;custom-radio-input&quot;&gt;
  &lt;label for=&quot;custom-radio-input&quot; class=&quot;custom-control-label&quot;&gt;Radio&lt;/label&gt;
&lt;/p&gt;</code></pre>
                </figure>
            </div>
        </div>

        <div id="form-controls">
            <h4>Form controls</h4>
            <p>Textual form controls—like
                <code>&lt;input&gt;</code>s,
                <code>&lt;select&gt;</code>s, and
                <code>&lt;textarea&gt;</code>s—are styled with the
                <code>.form-control</code> class. Included are styles for general appearance, focus state, sizing, and more.
            </p>
            <p>Be sure to explore our custom forms to further style
                <code>&lt;select&gt;</code>s.
            </p>

            <div class="bd-example">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Example select</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect2">Example multiple select</label>
                        <select multiple="" class="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;exampleFormControlInput1&quot;&gt;Email address&lt;/label&gt;
    &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;exampleFormControlInput1&quot; placeholder=&quot;name@example.com&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;exampleFormControlSelect1&quot;&gt;Example select&lt;/label&gt;
    &lt;select class=&quot;form-control&quot; id=&quot;exampleFormControlSelect1&quot;&gt;
      &lt;option&gt;1&lt;/option&gt;
      &lt;option&gt;2&lt;/option&gt;
      &lt;option&gt;3&lt;/option&gt;
      &lt;option&gt;4&lt;/option&gt;
      &lt;option&gt;5&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;exampleFormControlSelect2&quot;&gt;Example multiple select&lt;/label&gt;
    &lt;select multiple class=&quot;form-control&quot; id=&quot;exampleFormControlSelect2&quot;&gt;
      &lt;option&gt;1&lt;/option&gt;
      &lt;option&gt;2&lt;/option&gt;
      &lt;option&gt;3&lt;/option&gt;
      &lt;option&gt;4&lt;/option&gt;
      &lt;option&gt;5&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;exampleFormControlTextarea1&quot;&gt;Example textarea&lt;/label&gt;
    &lt;textarea class=&quot;form-control&quot; id=&quot;exampleFormControlTextarea1&quot; rows=&quot;3&quot;&gt;&lt;/textarea&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
            </figure>

            <p>For file inputs, swap the
                <code>.form-control</code> for
                <code>.form-control-file</code>.
            </p>

            <div class="bd-example">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Example file input</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1">
                    </div>
                </form>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;exampleFormControlFile1&quot;&gt;Example file input&lt;/label&gt;
    &lt;input type=&quot;file&quot; class=&quot;form-control-file&quot; id=&quot;exampleFormControlFile1&quot;&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
            </figure>

            <div id="form-sizing">
                <h5>Sizing</h5>
                <p>Set heights using classes like
                    <code>.form-control-lg</code> and
                    <code>.form-control-sm</code>.
                </p>

                <div class="bd-example">
                    <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
                    <input class="form-control" type="text" placeholder="Default input">
                    <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;input class=&quot;form-control form-control-lg&quot; type=&quot;text&quot; placeholder=&quot;.form-control-lg&quot;&gt;
&lt;input class=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Default input&quot;&gt;
&lt;input class=&quot;form-control form-control-sm&quot; type=&quot;text&quot; placeholder=&quot;.form-control-sm&quot;&gt;</code></pre>
                </figure>

                <div class="bd-example">
                    <select class="form-control form-control-lg">
                        <option>Large select</option>
                    </select>
                    <select class="form-control">
                        <option>Default select</option>
                    </select>
                    <select class="form-control form-control-sm">
                        <option>Small select</option>
                    </select>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;select class=&quot;form-control form-control-lg&quot;&gt;
  &lt;option&gt;Large select&lt;/option&gt;
&lt;/select&gt;
&lt;select class=&quot;form-control&quot;&gt;
  &lt;option&gt;Default select&lt;/option&gt;
&lt;/select&gt;
&lt;select class=&quot;form-control form-control-sm&quot;&gt;
  &lt;option&gt;Small select&lt;/option&gt;
&lt;/select&gt;</code></pre>
                </figure>
            </div>

            <div id="readonly">
                <h5>Readonly</h5>
                <p>Add the
                    <code>readonly</code> boolean attribute on an input to prevent modification of the input’s value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.
                </p>

                <div class="bd-example">
                    <input class="form-control" type="text" placeholder="Readonly input here..." readonly="">
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;input class=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Readonly input here...&quot; readonly&gt;</code></pre>
                </figure>
            </div>

            <div id="readonly-plain-text">
                <h5>Readonly plain text</h5>
                <p>If you want to have
                    <code>&lt;input readonly&gt;</code> elements in your form styled as plain text, use the
                    <code>.form-control-plaintext</code> class to remove the default form field styling and preserve the correct margin and padding.
                </p>

                <div class="bd-example">
                    <form>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value="email@example.com">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword">
                            </div>
                        </div>
                    </form>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;form-group row&quot;&gt;
    &lt;label for=&quot;staticEmail&quot; class=&quot;col-sm-2 col-form-label&quot;&gt;Email&lt;/label&gt;
    &lt;div class=&quot;col-sm-10&quot;&gt;
      &lt;input type=&quot;text&quot; readonly class=&quot;form-control-plaintext&quot; id=&quot;staticEmail&quot; value=&quot;email@example.com&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group row&quot;&gt;
    &lt;label for=&quot;inputPassword&quot; class=&quot;col-sm-2 col-form-label&quot;&gt;Password&lt;/label&gt;
    &lt;div class=&quot;col-sm-10&quot;&gt;
      &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;inputPassword&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
                </figure>

                <div class="bd-example">
                    <form class="form-inline">
                        <div class="form-group mb-2">
                            <label for="staticEmail2" class="sr-only">Email</label>
                            <input type="text" readonly="" class="form-control-plaintext" id="staticEmail2" value="email@example.com">
                        </div>
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" class="sr-only">Password</label>
                            <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
                    </form>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;form class=&quot;form-inline&quot;&gt;
  &lt;div class=&quot;form-group mb-2&quot;&gt;
    &lt;label for=&quot;staticEmail2&quot; class=&quot;sr-only&quot;&gt;Email&lt;/label&gt;
    &lt;input type=&quot;text&quot; readonly class=&quot;form-control-plaintext&quot; id=&quot;staticEmail2&quot; value=&quot;email@example.com&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group mx-sm-3 mb-2&quot;&gt;
    &lt;label for=&quot;inputPassword2&quot; class=&quot;sr-only&quot;&gt;Password&lt;/label&gt;
    &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;inputPassword2&quot; placeholder=&quot;Password&quot;&gt;
  &lt;/div&gt;
  &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary mb-2&quot;&gt;Confirm identity&lt;/button&gt;
&lt;/form&gt;</code></pre>
                </figure>
            </div>

            <div id="range-input">
                <h5>Range input</h5>
                <p>Set horizontally scrollable range inputs using
                    <code>.form-control-range</code>.
                </p>

                <div class="bd-example">
                    <form>
                        <div class="form-group">
                            <label for="formControlRange">Example Range input</label>
                            <input type="range" class="form-control-range" id="formControlRange">
                        </div>
                    </form>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;formControlRange&quot;&gt;Example Range input&lt;/label&gt;
    &lt;input type=&quot;range&quot; class=&quot;form-control-range&quot; id=&quot;formControlRange&quot;&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
                </figure>
            </div>
        </div><!-- #form-controls -->

        <div id="checkboxes-and-radios">
            <h4>Checkboxes and radios</h4>
            <p>Default checkboxes and radios are improved upon with the help of
                <code>.form-check</code>,
                <strong>a single class for both input types that improves the layout and behavior of their HTML elements</strong>. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.
            </p>
            <p>Disabled checkboxes and radios are supported. The
                <code>disabled</code> attribute will apply a lighter color to help indicate the input’s state.
            </p>
            <p>Checkboxes and radio buttons support HTML-based form validation and provide concise, accessible labels. As such, our
                <code>&lt;input&gt;</code>s and
                <code>&lt;label&gt;</code>s are sibling elements as opposed to an
                <code>&lt;input&gt;</code> within a
                <code>&lt;label&gt;</code>. This is slightly more verbose as you must specify
                <code>id</code> and
                <code>for</code> attributes to relate the
                <code>&lt;input&gt;</code> and
                <code>&lt;label&gt;</code>.
            </p>

            <div id="checkboxes-and-radios-default-stacked">
                <h5>Default (stacked)</h5>
                <p>By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with
                    <code>.form-check</code>.
                </p>

                <div class="bd-example">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            Default checkbox
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled="">
                        <label class="form-check-label" for="defaultCheck2">
                            Disabled checkbox
                        </label>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;form-check&quot;&gt;
  &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;defaultCheck1&quot;&gt;
  &lt;label class=&quot;form-check-label&quot; for=&quot;defaultCheck1&quot;&gt;
    Default checkbox
  &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;form-check&quot;&gt;
  &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;defaultCheck2&quot; disabled&gt;
  &lt;label class=&quot;form-check-label&quot; for=&quot;defaultCheck2&quot;&gt;
    Disabled checkbox
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
                </figure>

                <div class="bd-example">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="">
                        <label class="form-check-label" for="exampleRadios1">
                            Default radio
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                        <label class="form-check-label" for="exampleRadios2">
                            Second default radio
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled="">
                        <label class="form-check-label" for="exampleRadios3">
                            Disabled radio
                        </label>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;form-check&quot;&gt;
  &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;exampleRadios&quot; id=&quot;exampleRadios1&quot; value=&quot;option1&quot; checked&gt;
  &lt;label class=&quot;form-check-label&quot; for=&quot;exampleRadios1&quot;&gt;
    Default radio
  &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;form-check&quot;&gt;
  &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;exampleRadios&quot; id=&quot;exampleRadios2&quot; value=&quot;option2&quot;&gt;
  &lt;label class=&quot;form-check-label&quot; for=&quot;exampleRadios2&quot;&gt;
    Second default radio
  &lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;form-check&quot;&gt;
  &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;exampleRadios&quot; id=&quot;exampleRadios3&quot; value=&quot;option3&quot; disabled&gt;
  &lt;label class=&quot;form-check-label&quot; for=&quot;exampleRadios3&quot;&gt;
    Disabled radio
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #checkboxes-and-radios-default-stacked -->

            <div id="checkboxes-and-radios-inline">
                <h5>Inline</h5>
                <p>Group checkboxes or radios on the same horizontal row by adding
                    <code>.form-check-inline</code> to any
                    <code>.form-check</code>.
                </p>

                <div class="bd-example">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled="">
                        <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;form-check form-check-inline&quot;&gt;
  &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox1&quot; value=&quot;option1&quot;&gt;
  &lt;label class=&quot;form-check-label&quot; for=&quot;inlineCheckbox1&quot;&gt;1&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;form-check form-check-inline&quot;&gt;
  &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox2&quot; value=&quot;option2&quot;&gt;
  &lt;label class=&quot;form-check-label&quot; for=&quot;inlineCheckbox2&quot;&gt;2&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;form-check form-check-inline&quot;&gt;
  &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox3&quot; value=&quot;option3&quot; disabled&gt;
  &lt;label class=&quot;form-check-label&quot; for=&quot;inlineCheckbox3&quot;&gt;3 (disabled)&lt;/label&gt;
&lt;/div&gt;</code></pre>
                </figure>

                <div class="bd-example">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                        <label class="form-check-label" for="inlineRadio1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled="">
                        <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;form-check form-check-inline&quot;&gt;
  &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions&quot; id=&quot;inlineRadio1&quot; value=&quot;option1&quot;&gt;
  &lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio1&quot;&gt;1&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;form-check form-check-inline&quot;&gt;
  &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions&quot; id=&quot;inlineRadio2&quot; value=&quot;option2&quot;&gt;
  &lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio2&quot;&gt;2&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;form-check form-check-inline&quot;&gt;
  &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions&quot; id=&quot;inlineRadio3&quot; value=&quot;option3&quot; disabled&gt;
  &lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio3&quot;&gt;3 (disabled)&lt;/label&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #checkboxes-and-radios-inline -->

            <div id="checkboxes-and-radios-without-labels">
                <h6>Without labels</h6>
                <p>Add
                    <code>.position-static</code> to inputs within
                    <code>.form-check</code> that don’t have any label text. Remember to still provide some form of label for assistive technologies (for instance, using
                    <code>aria-label</code>).
                </p>

                <div class="bd-example">
                    <div class="form-check">
                        <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                    </div>
                    <div class="form-check">
                        <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="...">
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;form-check&quot;&gt;
  &lt;input class=&quot;form-check-input position-static&quot; type=&quot;checkbox&quot; id=&quot;blankCheckbox&quot; value=&quot;option1&quot; aria-label=&quot;...&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;form-check&quot;&gt;
  &lt;input class=&quot;form-check-input position-static&quot; type=&quot;radio&quot; name=&quot;blankRadio&quot; id=&quot;blankRadio1&quot; value=&quot;option1&quot; aria-label=&quot;...&quot;&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #checkboxes-and-radios-without-labels -->
        </div><!-- #checkboxes-and-radios -->

        <div id="form-layout">
            <h4>Layout</h4>
            <p>Since Bootstrap applies
                <code>display: block</code> and
                <code>width: 100%</code> to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.
            </p>

            <div id="form-groups">
                <h5>Form groups</h5>
                <p>The
                    <code>.form-group</code> class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies
                    <code>margin-bottom</code>, but it picks up additional styles in
                    <code>.form-inline</code> as needed. Use it with
                    <code>&lt;fieldset&gt;</code>s,
                    <code>&lt;div&gt;</code>s, or nearly any other element.
                </p>

                <div class="bd-example">
                    <form>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Example label</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Another label</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
                        </div>
                    </form>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;formGroupExampleInput&quot;&gt;Example label&lt;/label&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;formGroupExampleInput&quot; placeholder=&quot;Example input placeholder&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;formGroupExampleInput2&quot;&gt;Another label&lt;/label&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;formGroupExampleInput2&quot; placeholder=&quot;Another input placeholder&quot;&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
                </figure>
            </div><!-- #form-groups -->

            <div id="form-grid">
                <h5>Form grid</h5>
                <p>More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>

                <div class="bd-example">
                    <form>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name">
                            </div>
                        </div>
                    </form>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;col&quot;&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;First name&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Last name&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
                </figure>

                <div id="form-row">
                    <h6>Form row</h6>
                    <p>You may also swap
                        <code>.row</code> for
                        <code>.form-row</code>, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.
                    </p>

                    <div class="bd-example">
                        <form>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name">
                                </div>
                            </div>
                        </form>
                    </div>

                    <figure class="highlight">
                        <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;form-row&quot;&gt;
    &lt;div class=&quot;col&quot;&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;First name&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Last name&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
                    </figure>

                    <p>More complex layouts can also be created with the grid system.</p>

                    <div class="bd-example">
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4">Password</label>
                                    <input type="password" class="form-control" id="inputPassword4">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" id="inputCity">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputState">State</label>
                                    <select id="inputState" class="form-control">
                                        <option selected="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" class="form-control" id="inputZip">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                    <label class="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>
                    </div>

                    <figure class="highlight">
                        <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;form-row&quot;&gt;
    &lt;div class=&quot;form-group col-md-6&quot;&gt;
      &lt;label for=&quot;inputEmail4&quot;&gt;Email&lt;/label&gt;
      &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;inputEmail4&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group col-md-6&quot;&gt;
      &lt;label for=&quot;inputPassword4&quot;&gt;Password&lt;/label&gt;
      &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;inputPassword4&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;inputAddress&quot;&gt;Address&lt;/label&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputAddress&quot; placeholder=&quot;1234 Main St&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;inputAddress2&quot;&gt;Address 2&lt;/label&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputAddress2&quot; placeholder=&quot;Apartment, studio, or floor&quot;&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-row&quot;&gt;
    &lt;div class=&quot;form-group col-md-6&quot;&gt;
      &lt;label for=&quot;inputCity&quot;&gt;City&lt;/label&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputCity&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group col-md-4&quot;&gt;
      &lt;label for=&quot;inputState&quot;&gt;State&lt;/label&gt;
      &lt;select id=&quot;inputState&quot; class=&quot;form-control&quot;&gt;
        &lt;option selected&gt;Choose...&lt;/option&gt;
        &lt;option&gt;...&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group col-md-2&quot;&gt;
      &lt;label for=&quot;inputZip&quot;&gt;Zip&lt;/label&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputZip&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;div class=&quot;form-check&quot;&gt;
      &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;gridCheck&quot;&gt;
      &lt;label class=&quot;form-check-label&quot; for=&quot;gridCheck&quot;&gt;
        Check me out
      &lt;/label&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Sign in&lt;/button&gt;
&lt;/form&gt;</code></pre>
                    </figure>
                </div><!-- #form-row -->

                <div id="horizontal-form">
                    <h6>Horizontal form</h6>
                    <p>Create horizontal forms with the grid by adding the
                        <code>.row</code> class to form groups and using the
                        <code>.col-*-*</code> classes to specify the width of your labels and controls. Be sure to add
                        <code>.col-form-label</code> to your
                        <code>&lt;label&gt;</code>s as well so they’re vertically centered with their associated form controls.
                    </p>
                    <p>At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we’ve removed the
                        <code>padding-top</code> on our stacked radio inputs label to better align the text baseline.
                    </p>

                    <div class="bd-example">
                        <form>
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputEmail3">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword3">
                                </div>
                            </div>
                            <fieldset class="form-group">
                                <div class="row">
                                    <label class="col-form-label col-sm-2 pt-0">Radios</label>
                                    <div class="col-sm-10">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked="">
                                            <label class="form-check-label" for="gridRadios1">
                                                First radio
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                                            <label class="form-check-label" for="gridRadios2">
                                                Second radio
                                            </label>
                                        </div>
                                        <div class="form-check disabled">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled="">
                                            <label class="form-check-label" for="gridRadios3">
                                                Third disabled radio
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div class="form-group row">
                                <div class="col-sm-2">Checkbox</div>
                                <div class="col-sm-10">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck1">
                                        <label class="form-check-label" for="gridCheck1">
                                            Example checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-10">
                                    <button type="submit" class="btn btn-primary">Sign in</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <figure class="highlight">
                        <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;form-group row&quot;&gt;
    &lt;label for=&quot;inputEmail3&quot; class=&quot;col-sm-2 col-form-label&quot;&gt;Email&lt;/label&gt;
    &lt;div class=&quot;col-sm-10&quot;&gt;
      &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;inputEmail3&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group row&quot;&gt;
    &lt;label for=&quot;inputPassword3&quot; class=&quot;col-sm-2 col-form-label&quot;&gt;Password&lt;/label&gt;
    &lt;div class=&quot;col-sm-10&quot;&gt;
      &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;inputPassword3&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;fieldset class=&quot;form-group&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
      &lt;legend class=&quot;col-form-label col-sm-2 pt-0&quot;&gt;Radios&lt;/legend&gt;
      &lt;div class=&quot;col-sm-10&quot;&gt;
        &lt;div class=&quot;form-check&quot;&gt;
          &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;gridRadios&quot; id=&quot;gridRadios1&quot; value=&quot;option1&quot; checked&gt;
          &lt;label class=&quot;form-check-label&quot; for=&quot;gridRadios1&quot;&gt;
            First radio
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-check&quot;&gt;
          &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;gridRadios&quot; id=&quot;gridRadios2&quot; value=&quot;option2&quot;&gt;
          &lt;label class=&quot;form-check-label&quot; for=&quot;gridRadios2&quot;&gt;
            Second radio
          &lt;/label&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-check disabled&quot;&gt;
          &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;gridRadios&quot; id=&quot;gridRadios3&quot; value=&quot;option3&quot; disabled&gt;
          &lt;label class=&quot;form-check-label&quot; for=&quot;gridRadios3&quot;&gt;
            Third disabled radio
          &lt;/label&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/fieldset&gt;
  &lt;div class=&quot;form-group row&quot;&gt;
    &lt;div class=&quot;col-sm-2&quot;&gt;Checkbox&lt;/div&gt;
    &lt;div class=&quot;col-sm-10&quot;&gt;
      &lt;div class=&quot;form-check&quot;&gt;
        &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;gridCheck1&quot;&gt;
        &lt;label class=&quot;form-check-label&quot; for=&quot;gridCheck1&quot;&gt;
          Example checkbox
        &lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group row&quot;&gt;
    &lt;div class=&quot;col-sm-10&quot;&gt;
      &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Sign in&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
                    </figure>

                    <div id="horizontal-form-label-sizing">
                        <h6>Horizontal form label sizing</h6>
                        <p>Be sure to use
                            <code>.col-form-label-sm</code> or
                            <code>.col-form-label-lg</code> to your
                            <code>&lt;label&gt;</code>s or
                            <code>&lt;legend&gt;</code>s to correctly follow the size of
                            <code>.form-control-lg</code> and
                            <code>.form-control-sm</code>.
                        </p>

                        <div class="bd-example">
                            <form>
                                <div class="form-group row">
                                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
                                    </div>
                                </div>
                            </form>
                        </div>

                        <figure class="highlight">
                            <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;form-group row&quot;&gt;
    &lt;label for=&quot;colFormLabelSm&quot; class=&quot;col-sm-2 col-form-label col-form-label-sm&quot;&gt;Email&lt;/label&gt;
    &lt;div class=&quot;col-sm-10&quot;&gt;
      &lt;input type=&quot;email&quot; class=&quot;form-control form-control-sm&quot; id=&quot;colFormLabelSm&quot; placeholder=&quot;col-form-label-sm&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group row&quot;&gt;
    &lt;label for=&quot;colFormLabel&quot; class=&quot;col-sm-2 col-form-label&quot;&gt;Email&lt;/label&gt;
    &lt;div class=&quot;col-sm-10&quot;&gt;
      &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;colFormLabel&quot; placeholder=&quot;col-form-label&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group row&quot;&gt;
    &lt;label for=&quot;colFormLabelLg&quot; class=&quot;col-sm-2 col-form-label col-form-label-lg&quot;&gt;Email&lt;/label&gt;
    &lt;div class=&quot;col-sm-10&quot;&gt;
      &lt;input type=&quot;email&quot; class=&quot;form-control form-control-lg&quot; id=&quot;colFormLabelLg&quot; placeholder=&quot;col-form-label-lg&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
                        </figure>
                    </div><!-- #horizontal-form-label-sizing -->
                </div><!-- #horizontal-form -->

                <div id="column-sizing">
                    <h6>Column sizing</h6>
                    <p>As shown in the previous examples, our grid system allows you to place any number of
                        <code>.col</code>s within a
                        <code>.row</code> or
                        <code>.form-row</code>. They’ll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining
                        <code>.col</code>s equally split the rest, with specific column classes like
                        <code>.col-7</code>.
                    </p>

                    <div class="bd-example">
                        <form>
                            <div class="form-row">
                                <div class="col-7">
                                    <input type="text" class="form-control" placeholder="City">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="State">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Zip">
                                </div>
                            </div>
                        </form>
                    </div>

                    <figure class="highlight">
                        <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;form-row&quot;&gt;
    &lt;div class=&quot;col-7&quot;&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;City&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;State&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col&quot;&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Zip&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
                    </figure>
                </div><!-- #column-sizing -->

                <div id="auto-sizing">
                    <h6>Auto-sizing</h6>
                    <p>The example below uses a flexbox utility to vertically center the contents and changes
                        <code>.col</code> to
                        <code>.col-auto</code> so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.
                    </p>

                    <div class="bd-example">
                        <form>
                            <div class="form-row align-items-center">
                                <div class="col-auto">
                                    <label class="sr-only" for="inlineFormInput">Name</label>
                                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">
                                </div>
                                <div class="col-auto">
                                    <label class="sr-only" for="inlineFormInputGroup">Username</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">@</div>
                                        </div>
                                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="autoSizingCheck">
                                        <label class="form-check-label" for="autoSizingCheck">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <figure class="highlight">
                        <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;form-row align-items-center&quot;&gt;
    &lt;div class=&quot;col-auto&quot;&gt;
      &lt;label class=&quot;sr-only&quot; for=&quot;inlineFormInput&quot;&gt;Name&lt;/label&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control mb-2&quot; id=&quot;inlineFormInput&quot; placeholder=&quot;Jane Doe&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-auto&quot;&gt;
      &lt;label class=&quot;sr-only&quot; for=&quot;inlineFormInputGroup&quot;&gt;Username&lt;/label&gt;
      &lt;div class=&quot;input-group mb-2&quot;&gt;
        &lt;div class=&quot;input-group-prepend&quot;&gt;
          &lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
        &lt;/div&gt;
        &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inlineFormInputGroup&quot; placeholder=&quot;Username&quot;&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-auto&quot;&gt;
      &lt;div class=&quot;form-check mb-2&quot;&gt;
        &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;autoSizingCheck&quot;&gt;
        &lt;label class=&quot;form-check-label&quot; for=&quot;autoSizingCheck&quot;&gt;
          Remember me
        &lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-auto&quot;&gt;
      &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary mb-2&quot;&gt;Submit&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
                    </figure>

                    <p>You can then remix that once again with size-specific column classes.</p>

                    <div class="bd-example">
                        <form>
                            <div class="form-row align-items-center">
                                <div class="col-sm-3 my-1">
                                    <label class="sr-only" for="inlineFormInputName">Name</label>
                                    <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe">
                                </div>
                                <div class="col-sm-3 my-1">
                                    <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">@</div>
                                        </div>
                                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
                                    </div>
                                </div>
                                <div class="col-auto my-1">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
                                        <label class="form-check-label" for="autoSizingCheck2">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div class="col-auto my-1">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <figure class="highlight">
                        <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;form-row align-items-center&quot;&gt;
    &lt;div class=&quot;col-sm-3 my-1&quot;&gt;
      &lt;label class=&quot;sr-only&quot; for=&quot;inlineFormInputName&quot;&gt;Name&lt;/label&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inlineFormInputName&quot; placeholder=&quot;Jane Doe&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-sm-3 my-1&quot;&gt;
      &lt;label class=&quot;sr-only&quot; for=&quot;inlineFormInputGroupUsername&quot;&gt;Username&lt;/label&gt;
      &lt;div class=&quot;input-group&quot;&gt;
        &lt;div class=&quot;input-group-prepend&quot;&gt;
          &lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
        &lt;/div&gt;
        &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inlineFormInputGroupUsername&quot; placeholder=&quot;Username&quot;&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-auto my-1&quot;&gt;
      &lt;div class=&quot;form-check&quot;&gt;
        &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;autoSizingCheck2&quot;&gt;
        &lt;label class=&quot;form-check-label&quot; for=&quot;autoSizingCheck2&quot;&gt;
          Remember me
        &lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-auto my-1&quot;&gt;
      &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
                    </figure>

                    <p>And of course
                        <a>custom form controls</a> are supported.
                    </p>

                    <div class="bd-example">
                        <form>
                            <div class="form-row align-items-center">
                                <div class="col-auto my-1">
                                    <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                        <option selected="">Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="col-auto my-1">
                                    <div class="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" class="custom-control-input" id="customControlAutosizing">
                                        <label class="custom-control-label" for="customControlAutosizing">Remember my preference</label>
                                    </div>
                                </div>
                                <div class="col-auto my-1">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <figure class="highlight">
                        <pre><code class="language-html">&lt;form&gt;
  &lt;div class=&quot;form-row align-items-center&quot;&gt;
    &lt;div class=&quot;col-auto my-1&quot;&gt;
      &lt;label class=&quot;mr-sm-2 sr-only&quot; for=&quot;inlineFormCustomSelect&quot;&gt;Preference&lt;/label&gt;
      &lt;select class=&quot;custom-select mr-sm-2&quot; id=&quot;inlineFormCustomSelect&quot;&gt;
        &lt;option selected&gt;Choose...&lt;/option&gt;
        &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
        &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
        &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-auto my-1&quot;&gt;
      &lt;div class=&quot;custom-control custom-checkbox mr-sm-2&quot;&gt;
        &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;customControlAutosizing&quot;&gt;
        &lt;label class=&quot;custom-control-label&quot; for=&quot;customControlAutosizing&quot;&gt;Remember my preference&lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-auto my-1&quot;&gt;
      &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
                    </figure>
                </div><!-- #auto-sizing -->
            </div><!-- #form-grid -->

            <div id="inline-forms">
                <h5>Inline forms</h5>
                <p>Use the
                    <code>.form-inline</code> class to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states.
                </p>

                <ul>
                    <li>Controls are
                        <code>display: flex</code>, collapsing any HTML white space and allowing you to provide alignment control with
                        <a class="scroll-to-id" href="#spacing">spacing</a> and
                        <a class="scroll-to-id" href="#flex">flexbox</a> utilities.
                    </li>
                    <li>Controls and input groups receive
                        <code>width: auto</code> to override the Bootstrap default
                        <code>width: 100%</code>.
                    </li>
                    <li>Controls
                        <strong>only appear inline in viewports that are at least 576px wide</strong> to account for narrow viewports on mobile devices.
                    </li>
                </ul>

                <p>You may need to manually address the width and alignment of individual form controls with
                    <a class="scroll-to-id" href="#spacing">spacing utilities</a> (as shown below). Lastly, be sure to always include a
                    <code>&lt;label&gt;</code> with each form control, even if you need to hide it from non-screenreader visitors with
                    <code>.sr-only</code>.
                </p>

                <div class="bd-example">
                    <form class="form-inline">
                        <label class="sr-only" for="inlineFormInputName2">Name</label>
                        <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">

                        <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">@</div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
                        </div>

                        <div class="form-check mb-2 mr-sm-2">
                            <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                            <label class="form-check-label" for="inlineFormCheck">
                                Remember me
                            </label>
                        </div>

                        <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </form>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;form class=&quot;form-inline&quot;&gt;
  &lt;label class=&quot;sr-only&quot; for=&quot;inlineFormInputName2&quot;&gt;Name&lt;/label&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-control mb-2 mr-sm-2&quot; id=&quot;inlineFormInputName2&quot; placeholder=&quot;Jane Doe&quot;&gt;

  &lt;label class=&quot;sr-only&quot; for=&quot;inlineFormInputGroupUsername2&quot;&gt;Username&lt;/label&gt;
  &lt;div class=&quot;input-group mb-2 mr-sm-2&quot;&gt;
    &lt;div class=&quot;input-group-prepend&quot;&gt;
      &lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
    &lt;/div&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inlineFormInputGroupUsername2&quot; placeholder=&quot;Username&quot;&gt;
  &lt;/div&gt;

  &lt;div class=&quot;form-check mb-2 mr-sm-2&quot;&gt;
    &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineFormCheck&quot;&gt;
    &lt;label class=&quot;form-check-label&quot; for=&quot;inlineFormCheck&quot;&gt;
      Remember me
    &lt;/label&gt;
  &lt;/div&gt;

  &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary mb-2&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
                </figure>

                <p>Custom form controls and selects are also supported.</p>

                <div class="bd-example">
                    <form class="form-inline">
                        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected="">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <div class="custom-control custom-checkbox my-1 mr-sm-2">
                            <input type="checkbox" class="custom-control-input" id="customControlInline">
                            <label class="custom-control-label" for="customControlInline">Remember my preference</label>
                        </div>

                        <button type="submit" class="btn btn-primary my-1">Submit</button>
                    </form>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;form class=&quot;form-inline&quot;&gt;
  &lt;label class=&quot;my-1 mr-2&quot; for=&quot;inlineFormCustomSelectPref&quot;&gt;Preference&lt;/label&gt;
  &lt;select class=&quot;custom-select my-1 mr-sm-2&quot; id=&quot;inlineFormCustomSelectPref&quot;&gt;
    &lt;option selected&gt;Choose...&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
  &lt;/select&gt;

  &lt;div class=&quot;custom-control custom-checkbox my-1 mr-sm-2&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;customControlInline&quot;&gt;
    &lt;label class=&quot;custom-control-label&quot; for=&quot;customControlInline&quot;&gt;Remember my preference&lt;/label&gt;
  &lt;/div&gt;

  &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary my-1&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
                </figure>

                <div class="bd-callout bd-callout-warning">
                    <h5>Alternatives to hidden labels</h5>
                    <p>Assistive technologies such as screen readers will have trouble with your forms if you don’t include a label for every input. For these inline forms, you can hide the labels using the
                        <code>.sr-only</code> class. There are further alternative methods of providing a label for assistive technologies, such as the
                        <code>aria-label</code>,
                        <code>aria-labelledby</code> or
                        <code>title</code> attribute. If none of these are present, assistive technologies may resort to using the
                        <code>placeholder</code> attribute, if present, but note that use of
                        <code>placeholder</code> as a replacement for other labelling methods is not advised.
                    </p>
                </div>
            </div><!-- #inline-forms -->
        </div><!-- #form-layout -->

        <div id="help-text">
            <h4>Help text</h4>
            <p>Block-level help text in forms can be created using
                <code>.form-text</code> (previously known as
                <code>.help-block</code> in v3). Inline help text can be flexibly implemented using any inline HTML element and utility classes like
                <code>.text-muted</code>.
            </p>

            <div class="bd-callout bd-callout-warning">
                <h5>Associating help text with form controls</h5>

                <p>Help text should be explicitly associated with the form control it relates to using the
                    <code>aria-describedby</code> attribute. This will ensure that assistive technologies—such as screen readers—will announce this help text when the user focuses or enters the control.
                </p>
            </div>

            <p>Help text below inputs can be styled with
                <code>.form-text</code>. This class includes
                <code>display: block</code> and adds some top margin for easy spacing from the inputs above.
            </p>

            <div class="bd-example">
                <label for="inputPassword5">Password</label>
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
                <small id="passwordHelpBlock" class="form-text text-muted">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </small>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;label for=&quot;inputPassword5&quot;&gt;Password&lt;/label&gt;
&lt;input type=&quot;password&quot; id=&quot;inputPassword5&quot; class=&quot;form-control&quot; aria-describedby=&quot;passwordHelpBlock&quot;&gt;
&lt;small id=&quot;passwordHelpBlock&quot; class=&quot;form-text text-muted&quot;&gt;
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
&lt;/small&gt;</code></pre>
            </figure>

            <p>Inline text can use any typical inline HTML element (be it a
                <code>&lt;small&gt;</code>,
                <code>&lt;span&gt;</code>, or something else) with nothing more than a utility class.
            </p>

            <div class="bd-example">
                <form class="form-inline">
                    <div class="form-group">
                        <label for="inputPassword6">Password</label>
                        <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
                        <small id="passwordHelpInline" class="text-muted">
                            Must be 8-20 characters long.
                        </small>
                    </div>
                </form>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;form class=&quot;form-inline&quot;&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;label for=&quot;inputPassword6&quot;&gt;Password&lt;/label&gt;
    &lt;input type=&quot;password&quot; id=&quot;inputPassword6&quot; class=&quot;form-control mx-sm-3&quot; aria-describedby=&quot;passwordHelpInline&quot;&gt;
    &lt;small id=&quot;passwordHelpInline&quot; class=&quot;text-muted&quot;&gt;
      Must be 8-20 characters long.
    &lt;/small&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
            </figure>
        </div><!-- #help-text -->

        <div id="disabled-forms">
            <h4>Disabled forms</h4>
            <p>Add the
                <code>disabled</code> boolean attribute on an input to prevent user interactions and make it appear lighter.
            </p>

            <figure class="highlight">
                <pre><code class="language-html">&lt;input class=&quot;form-control&quot; id=&quot;disabledInput&quot; type=&quot;text&quot; placeholder=&quot;Disabled input here...&quot; disabled&gt;</code></pre>
            </figure>

            <p>Add the
                <code>disabled</code> attribute to a
                <code>&lt;fieldset&gt;</code> to disable all the controls within.
            </p>

            <div class="bd-example">
                <form>
                    <fieldset disabled="">
                        <div class="form-group">
                            <label for="disabledTextInput">Disabled input</label>
                            <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
                        </div>
                        <div class="form-group">
                            <label for="disabledSelect">Disabled select menu</label>
                            <select id="disabledSelect" class="form-control">
                                <option>Disabled select</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled="">
                                <label class="form-check-label" for="disabledFieldsetCheck">
                                    Can't check this
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;form&gt;
  &lt;fieldset disabled&gt;
    &lt;div class=&quot;form-group&quot;&gt;
      &lt;label for=&quot;disabledTextInput&quot;&gt;Disabled input&lt;/label&gt;
      &lt;input type=&quot;text&quot; id=&quot;disabledTextInput&quot; class=&quot;form-control&quot; placeholder=&quot;Disabled input&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
      &lt;label for=&quot;disabledSelect&quot;&gt;Disabled select menu&lt;/label&gt;
      &lt;select id=&quot;disabledSelect&quot; class=&quot;form-control&quot;&gt;
        &lt;option&gt;Disabled select&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-group&quot;&gt;
      &lt;div class=&quot;form-check&quot;&gt;
        &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;disabledFieldsetCheck&quot; disabled&gt;
        &lt;label class=&quot;form-check-label&quot; for=&quot;disabledFieldsetCheck&quot;&gt;
          Can't check this
        &lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</code></pre>
            </figure>
        </div><!-- #disabled-forms -->

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/components/forms/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Forms'
    }
</script>
