import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/wu/input';

export default Component.extend({
  layout,
  tagName: "",
	sizeClass: computed( 'size', function() {
    if( this.size == "tiny" ){
      return "vl-input-field--tiny";
    }
    if( this.size == "small" ){
      return "vl-input-field--small";
    }
    if( this.size == "large" ){
      return "vl-input-field--large";
    }
  }),
	styleClass: computed( 'style', function() {
    if( this.style == "disabled" ){
      return "vl-input-field--disabled";
    }
  }),
	widthClass: computed( 'width', function() {
    if( this.width == "block" ){
      return "vl-input-field--block";
    }
  }),
  actions: {
  	update(event) {
  		console.log("testje voor update");
  		if (this.onChange) {
  			this.onChange(event.value);
  		}
  		return true;
  	}
  }
});
