<template>
    <div id="vertical-alignment" class="spacer m-top-xl">
        <h3>Vertical alignment</h3>
        <p>Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.</p>

        <p>Change the alignment of elements with the
            <code>vertical-alignment</code> utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.
        </p>

        <p>Choose from
            <code>.align-baseline</code>,
            <code>.align-top</code>,
            <code>.align-middle</code>,
            <code>.align-bottom</code>,
            <code>.align-text-bottom</code>, and
            <code>.align-text-top</code> as needed.
        </p>

        <p>With inline elements:</p>

        <div class="bd-example">
            <span class="align-baseline">baseline</span>
            <span class="align-top">top</span>
            <span class="align-middle">middle</span>
            <span class="align-bottom">bottom</span>
            <span class="align-text-top">text-top</span>
            <span class="align-text-bottom">text-bottom</span>
        </div>

        <figure class="highlight">
            <pre><code class="language-html">&lt;span class=&quot;align-baseline&quot;&gt;baseline&lt;/span&gt;
&lt;span class=&quot;align-top&quot;&gt;top&lt;/span&gt;
&lt;span class=&quot;align-middle&quot;&gt;middle&lt;/span&gt;
&lt;span class=&quot;align-bottom&quot;&gt;bottom&lt;/span&gt;
&lt;span class=&quot;align-text-top&quot;&gt;text-top&lt;/span&gt;
&lt;span class=&quot;align-text-bottom&quot;&gt;text-bottom&lt;/span&gt;</code></pre>
        </figure>

        <p>With table cells:</p>

        <div class="bd-example">
            <table style="height: 100px;">
                <tbody>
                    <tr>
                        <td class="align-baseline">baseline</td>
                        <td class="align-top">top</td>
                        <td class="align-middle">middle</td>
                        <td class="align-bottom">bottom</td>
                        <td class="align-text-top">text-top</td>
                        <td class="align-text-bottom">text-bottom</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <figure class="highlight">
            <pre><code class="language-html">&lt;table style=&quot;height: 100px;&quot;&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td class=&quot;align-baseline&quot;&gt;baseline&lt;/td&gt;
      &lt;td class=&quot;align-top&quot;&gt;top&lt;/td&gt;
      &lt;td class=&quot;align-middle&quot;&gt;middle&lt;/td&gt;
      &lt;td class=&quot;align-bottom&quot;&gt;bottom&lt;/td&gt;
      &lt;td class=&quot;align-text-top&quot;&gt;text-top&lt;/td&gt;
      &lt;td class=&quot;align-text-bottom&quot;&gt;text-bottom&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
        </figure>

        <div class="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>For more examples and demo data, click
                <a href="https://getbootstrap.com/docs/4.4/utilities/vertical-align/" target="_blank">Bootstrap 4 documentation</a>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VerticalAlignment'
    }
</script>
