<template>
    <div id="tables" class="spacer m-top-xl">
        <h2>Tables</h2>
        <p>Examples for opt-in styling of tables.</p>

        <div id="tables-examples">
            <h3>Examples</h3>
            <p>Due to the widespread use of tables across third-party widgets like calendars and date pickers, we’ve designed our tables to be
                <strong>opt-in</strong>. Just add the base class
                <code>.table</code> to any
                <code>&lt;table&gt;</code>, then extend with custom styles or our various included modifier classes.
            </p>
            <p>Using the most basic table markup, here’s how
                <code>.table</code>-based tables look in Bootstrap.
                <strong>All table styles are inherited in Bootstrap 4</strong>, meaning any nested tables will be styled in the same manner as the parent.
            </p>

            <div class="bd-example">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td&gt;Larry&lt;/td&gt;
      &lt;td&gt;the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>

            <p>You can also invert the colors—with light text on dark backgrounds—with
                <code>.table-dark</code>.
            </p>

            <div class="bd-example">
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table table-dark&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td&gt;Larry&lt;/td&gt;
      &lt;td&gt;the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>
        </div>

        <div id="table-head-options">
            <h3>Table head options</h3>
            <p>Similar to tables and dark tables, use the modifier classes
                <code>.thead-light</code> or
                <code>.thead-dark</code> to make
                <code>&lt;thead&gt;</code>s appear light or dark gray.
            </p>

            <div class="bd-example">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table&quot;&gt;
  &lt;thead class=&quot;thead-dark&quot;&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td&gt;Larry&lt;/td&gt;
      &lt;td&gt;the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;

&lt;table class=&quot;table&quot;&gt;
  &lt;thead class=&quot;thead-light&quot;&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td&gt;Larry&lt;/td&gt;
      &lt;td&gt;the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>
        </div>

        <div id="striped-rows">
            <h3>Striped rows</h3>
            <p>Use
                <code>.table-striped</code> to add zebra-striping to any table row within the
                <code>&lt;tbody&gt;</code>.
            </p>

            <div class="bd-example">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table table-striped&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td&gt;Larry&lt;/td&gt;
      &lt;td&gt;the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table table-striped table-dark&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td&gt;Larry&lt;/td&gt;
      &lt;td&gt;the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>
        </div>

        <div id="bordered-table">
            <h3>Bordered table</h3>
            <p>Add
                <code>.table-bordered</code> for borders on all sides of the table and cells.
            </p>

            <div class="bd-example">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table table-bordered&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <table class="table table-bordered table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table table-bordered table-dark&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>
        </div>

        <div id="borderless-table">
            <h3>Borderless table</h3>
            <p>Add
                <code>.table-borderless</code> for a table without borders.
            </p>

            <div class="bd-example">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table table-borderless&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>

            <p>
                <code>.table-borderless</code> can also be used on dark tables.
            </p>

            <div class="bd-example">
                <table class="table table-borderless table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table table-borderless table-dark&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>
        </div>

        <div id="hoverable-rows">
            <h3>Hoverable rows</h3>
            <p>Add
                <code>.table-hover</code> to enable a hover state on table rows within a
                <code>&lt;tbody&gt;</code>.
            </p>

            <div class="bd-example">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table table-hover&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table table-hover table-dark&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>
        </div>

        <div id="small-table">
            <h3>Small table</h3>
            <p>Add
                <code>.table-sm</code> to make tables more compact by cutting cell padding in half.
            </p>

            <div class="bd-example">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table table-sm&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>

            <div class="bd-example">
                <table class="table table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table table-sm table-dark&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>
        </div>

        <div id="contextual-classes">
            <h3>Contextual classes</h3>
            <p>Use contextual classes to color table rows or individual cells.</p>

            <div class="bd-example">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Class</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="table-active">
                            <th scope="row">Active</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr>
                            <th scope="row">Default</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr class="table-primary">
                            <th scope="row">Primary</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr class="table-secondary">
                            <th scope="row">Secondary</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr class="table-success">
                            <th scope="row">Success</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr class="table-danger">
                            <th scope="row">Danger</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr class="table-warning">
                            <th scope="row">Warning</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr class="table-info">
                            <th scope="row">Info</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr class="table-light">
                            <th scope="row">Light</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr class="table-dark">
                            <th scope="row">Dark</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;!-- On rows --&gt;
&lt;tr class=&quot;table-active&quot;&gt;...&lt;/tr&gt;

&lt;tr class=&quot;table-primary&quot;&gt;...&lt;/tr&gt;
&lt;tr class=&quot;table-secondary&quot;&gt;...&lt;/tr&gt;
&lt;tr class=&quot;table-success&quot;&gt;...&lt;/tr&gt;
&lt;tr class=&quot;table-danger&quot;&gt;...&lt;/tr&gt;
&lt;tr class=&quot;table-warning&quot;&gt;...&lt;/tr&gt;
&lt;tr class=&quot;table-info&quot;&gt;...&lt;/tr&gt;
&lt;tr class=&quot;table-light&quot;&gt;...&lt;/tr&gt;
&lt;tr class=&quot;table-dark&quot;&gt;...&lt;/tr&gt;

&lt;!-- On cells (`td` or `th`) --&gt;
&lt;tr&gt;
  &lt;td class=&quot;table-active&quot;&gt;...&lt;/td&gt;

  &lt;td class=&quot;table-primary&quot;&gt;...&lt;/td&gt;
  &lt;td class=&quot;table-secondary&quot;&gt;...&lt;/td&gt;
  &lt;td class=&quot;table-success&quot;&gt;...&lt;/td&gt;
  &lt;td class=&quot;table-danger&quot;&gt;...&lt;/td&gt;
  &lt;td class=&quot;table-warning&quot;&gt;...&lt;/td&gt;
  &lt;td class=&quot;table-info&quot;&gt;...&lt;/td&gt;
  &lt;td class=&quot;table-light&quot;&gt;...&lt;/td&gt;
  &lt;td class=&quot;table-dark&quot;&gt;...&lt;/td&gt;
&lt;/tr&gt;</code></pre>
            </figure>

            <p>Regular table background variants are not available with the dark table, however, you may use
                <a class="scroll-to-id" href="#text-color">text or background utilities</a> to achieve similar styles.
            </p>

            <div class="bd-example">
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="bg-primary">
                            <th scope="row">1</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr class="bg-success">
                            <th scope="row">3</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr>
                            <th scope="row">4</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr class="bg-info">
                            <th scope="row">5</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr>
                            <th scope="row">6</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr class="bg-warning">
                            <th scope="row">7</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr>
                            <th scope="row">8</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr class="bg-danger">
                            <th scope="row">9</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;!-- On rows --&gt;
&lt;tr class=&quot;bg-primary&quot;&gt;...&lt;/tr&gt;
&lt;tr class=&quot;bg-success&quot;&gt;...&lt;/tr&gt;
&lt;tr class=&quot;bg-warning&quot;&gt;...&lt;/tr&gt;
&lt;tr class=&quot;bg-danger&quot;&gt;...&lt;/tr&gt;
&lt;tr class=&quot;bg-info&quot;&gt;...&lt;/tr&gt;

&lt;!-- On cells (`td` or `th`) --&gt;
&lt;tr&gt;
  &lt;td class=&quot;bg-primary&quot;&gt;...&lt;/td&gt;
  &lt;td class=&quot;bg-success&quot;&gt;...&lt;/td&gt;
  &lt;td class=&quot;bg-warning&quot;&gt;...&lt;/td&gt;
  &lt;td class=&quot;bg-danger&quot;&gt;...&lt;/td&gt;
  &lt;td class=&quot;bg-info&quot;&gt;...&lt;/td&gt;
&lt;/tr&gt;</code></pre>
            </figure>

            <p>Create responsive tables by wrapping any
                <code>.table</code> with
                <code>.table-responsive{-sm|-md|-lg|-xl}</code>, making the table scroll horizontally at each
                <code>max-width</code> breakpoint of up to (but not including) 576px, 768px, 992px, and 1120px, respectively.
            </p>
        </div>

        <div id="captions" class="spacer p-top-lg">
            <h3>Captions</h3>
            <p>A
                <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.
            </p>

            <div class="bd-example">
                <table class="table">
                    <caption>List of users</caption>

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <figure class="highlight">
                <pre><code class="language-html">&lt;table class=&quot;table&quot;&gt;
  &lt;caption&gt;List of users&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
      &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
      &lt;td&gt;Larry&lt;/td&gt;
      &lt;td&gt;the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </figure>
        </div>

        <div id="responsive-tables">
            <h3>Responsive tables</h3>
            <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a
                <code>.table</code> with
                <code>.table-responsive</code>. Or, pick a maximum breakpoint with which to have a responsive table up to by using
                <code>.table-responsive{-sm|-md|-lg|-xl}</code>.
            </p>

            <div class="bd-callout bd-callout-warning">
                <h5 id="vertical-clippingtruncation">Vertical clipping/truncation</h5>

                <p>Responsive tables make use of
                    <code>overflow-y: hidden</code>, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.
                </p>
            </div>

            <div id="always-responsive">
                <h4>Always responsive</h4>
                <p>Across every breakpoint, use
                    <code>.table-responsive</code> for horizontally scrolling tables.
                </p>

                <div class="bd-example">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>

                                <tr>
                                    <th scope="row">2</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>

                                <tr>
                                    <th scope="row">3</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;table-responsive&quot;&gt;
  &lt;table class=&quot;table&quot;&gt;
    ...
  &lt;/table&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div>

            <div id="breakpoint-specific">
                <h4>Breakpoint specific</h4>
                <p>Use
                    <code>.table-responsive{-sm|-md|-lg|-xl}</code> as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.
                </p>
                <p>
                    <strong>These tables may appear broken until their responsive styles apply at specific viewport widths.</strong>
                </p>

                <div class="bd-example">
                    <div class="table-responsive-sm">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>

                                <tr>
                                    <th scope="row">2</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>

                                <tr>
                                    <th scope="row">3</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;table-responsive-sm&quot;&gt;
  &lt;table class=&quot;table&quot;&gt;
    ...
  &lt;/table&gt;
&lt;/div&gt;</code></pre>
                </figure>

                <div class="bd-example">
                    <div class="table-responsive-md">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>

                                <tr>
                                    <th scope="row">2</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>

                                <tr>
                                    <th scope="row">3</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;table-responsive-md&quot;&gt;
  &lt;table class=&quot;table&quot;&gt;
    ...
  &lt;/table&gt;
&lt;/div&gt;</code></pre>
                </figure>

                <div class="bd-example">
                    <div class="table-responsive-lg">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>

                                <tr>
                                    <th scope="row">2</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>

                                <tr>
                                    <th scope="row">3</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;table-responsive-lg&quot;&gt;
  &lt;table class=&quot;table&quot;&gt;
    ...
  &lt;/table&gt;
&lt;/div&gt;</code></pre>
                </figure>

                <div class="bd-example">
                    <div class="table-responsive-xl">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>

                                <tr>
                                    <th scope="row">2</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>

                                <tr>
                                    <th scope="row">3</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <figure class="highlight">
                    <pre><code class="language-html">&lt;div class=&quot;table-responsive-xl&quot;&gt;
  &lt;table class=&quot;table&quot;&gt;
    ...
  &lt;/table&gt;
&lt;/div&gt;</code></pre>
                </figure>
            </div><!-- #breakpoint-specific -->
        </div><!-- #responsive-tables -->

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/content/tables/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tables'
    }
</script>
