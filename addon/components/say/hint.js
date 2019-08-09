import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/say/hint';

export default Component.extend({
  layout,
  tagName: '',
	sizeClass: computed( 'size', function() {
    if( this.size == "small" ){
      return "vl-modal-dialog--small";
    }
  }),
	typeClass: computed( 'type', function() {
    if( this.type == "sectioned" ){
      return "vl-modal-dialog--sectioned";
    }
  })
});
