import './App.css';
import '@patternfly/pfe-card'
import '@patternfly/pfe-tabs'
import '@patternfly/pfe-styles'
import '@patternfly/pfe-accordion'

function App() {
  return (
    <div className="App">
<pfe-accordion>
  <pfe-accordion-header>
    <h3>Laboris sunt qui dolor consectetur excepteur in aliqua ipsum?</h3>
  </pfe-accordion-header>
  <pfe-accordion-panel>
    <p>Culpa adipisicing sunt dolor ullamco dolor duis in ad commodo.</p>
    <a href="#">Call to action</a>
  </pfe-accordion-panel>
  <pfe-accordion-header>
    <h3>Anim est tempor fugiat pariatur laborum deserunt ex mollit aliquip?</h3>
  </pfe-accordion-header>
  <pfe-accordion-panel>
    <p><a href="#">Ullamco ullamco sint</a> ex id magna elit deserunt dolore nostrud eu et dolore est Lorem. Esse laborum do ut consectetur occaecat proident et nostrud ut nostrud veniam officia Lorem.</p>
  </pfe-accordion-panel>
  <pfe-accordion-header>
    <h3>Nostrud ad sit commodo nostrud?</h3>
  </pfe-accordion-header>
  <pfe-accordion-panel>
    <p>Nisi veniam tempor reprehenderit laboris amet laborum et do ut. Veniam eiusmod aliquip ullamco quis esse laborum Lorem exercitation consequat.</p>
  </pfe-accordion-panel>
  <pfe-accordion-header>
    <h3>Reprehenderit cupidatat labore?</h3>
  </pfe-accordion-header>
  <pfe-accordion-panel>
    <p>Magna incididunt aliquip consectetur dolor adipisicing amet cillum officia nostrud. Elit exercitation voluptate aute nostrud.</p>
    <a href="#">Call to action</a>
  </pfe-accordion-panel>
</pfe-accordion>
      <div class="pfe-l-grid pfe-m-gutters pfe-m-all-4-col">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
  <div><pfe-card>
          <h2 slot="header">Card header</h2>
          <p>This is the pfe-card body.</p>
          <p slot="footer">This is the footer</p>
        </pfe-card></div>
</div>



        <pfe-tabs>
  <pfe-tab role="heading" slot="tab">
    <h1>Tab 1</h1>
  </pfe-tab>
  <pfe-tab-panel role="region" slot="panel">
    <h2>Content 1</h2>
    <p>Tab 1 panel content.</p>
  </pfe-tab-panel>
  <pfe-tab role="heading" slot="tab">
    <h1>Tab 2</h1>
  </pfe-tab>
  <pfe-tab-panel role="region" slot="panel">
    <h2>Content 2</h2>
    <p>Tab 2 panel content.</p>
  </pfe-tab-panel>
</pfe-tabs>
    </div>
  );
}

export default App;
