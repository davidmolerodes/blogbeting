const div = document.createElement('div');
div.innerHTML = '<custom-style><style include="lumo-color lumo-typography"></style></custom-style>';
document.head.insertBefore(div.firstElementChild, document.head.firstChild);

function addCssBlock(block) {
 const tpl = document.createElement('template');
 tpl.innerHTML = block;
 document.head.appendChild(tpl.content);
}
import $css_0 from 'Frontend/styles/shared-styles.css';
addCssBlock(`<custom-style><style>${$css_0}</style></custom-style>`);
import $css_1 from 'Frontend/styles/style.css';
addCssBlock(`<custom-style><style>${$css_1}</style></custom-style>`);
import $css_2 from 'Frontend/styles/grid.css';
addCssBlock(`<dom-module id="flow_css_mod_2" theme-for="vaadin-grid"><template><style>${$css_2}</style></template></dom-module>`);
import $css_3 from 'Frontend/styles/vaadin-text-field-styles.css';
addCssBlock(`<dom-module id="flow_css_mod_3" theme-for="vaadin-text-field"><template><style>${$css_3}</style></template></dom-module>`);

import '@vaadin/flow-frontend/contextMenuConnector-es6.js';
import '@vaadin/flow-frontend/dndConnector-es6.js';
import '@vaadin/flow-frontend/flow-component-renderer.js';
import '@vaadin/flow-frontend/gridConnector-es6.js';
import '@vaadin/flow-frontend/menubarConnector.js';
import '@vaadin/flow-frontend/vaadin-grid-flow-selection-column.js';
import '@vaadin/vaadin-button/theme/lumo/vaadin-button.js';
import '@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox.js';
import '@vaadin/vaadin-context-menu/theme/lumo/vaadin-context-menu.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-column-group.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-column.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-sorter.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/icons.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-menu-bar/theme/lumo/vaadin-menu-bar.js';
import '@vaadin/vaadin-notification/theme/lumo/vaadin-notification.js';
import '@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.js';
import '@vaadin/vaadin-select/theme/lumo/vaadin-select.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-number-field.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js';
import '@vaadin/flow-frontend/contextMenuConnector.js';
import '@vaadin/flow-frontend/dndConnector.js';
import '@vaadin/flow-frontend/gridConnector.js';
import '@vaadin/flow-frontend/selectConnector.js';
var scripts = document.getElementsByTagName('script');
var thisScript;
var elements = document.getElementsByTagName('script');
for (var i = 0; i < elements.length; i++) {
    var script = elements[i];
    if (script.getAttribute('type')=='module' && script.getAttribute('data-app-id') && !script['vaadin-bundle']) {
        thisScript = script;break;
     }
}
if (!thisScript) {
    throw new Error('Could not find the bundle script to identify the application id');
}
thisScript['vaadin-bundle'] = true;
if (!window.Vaadin.Flow.fallbacks) { window.Vaadin.Flow.fallbacks={}; }
var fallbacks = window.Vaadin.Flow.fallbacks;
fallbacks[thisScript.getAttribute('data-app-id')] = {}
fallbacks[thisScript.getAttribute('data-app-id')].loadFallback = function loadFallback(){
   return import('./generated-flow-imports-fallback.js');
}