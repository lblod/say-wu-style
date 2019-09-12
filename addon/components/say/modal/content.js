import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../../../templates/components/say/modal/content';

export default Component.extend({
  layout,
  tagName: '',
	paddingClass: computed( 'padded', function() {
    if( this.padded == "tiny" ){
      return "u-padding--round--tiny";
    }
    if( this.padded == "small" ){
      return "u-padding--round--small";
    }
    if( this.padded == "normal" ){
      return "u-padding--round";
    }
    if( this.padded == "large" ){
      return "u-padding--round--large";
    }
  })
});
