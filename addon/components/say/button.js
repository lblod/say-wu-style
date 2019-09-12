import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/say/button';

export default Component.extend({
  layout,
  tagName: '',
	sizeClass: computed( 'size', function() {
    if( this.size == "tiny" ){
      return "vl-button--tiny";
    }
    if( this.size == "small" ){
      return "vl-button--small";
    }
    if( this.size == "large" ){
      return "vl-button--large";
    }
  }),
	widthClass: computed( 'width', function() {
    if( this.width == "narrow" ){
      return "vl-button--narrow";
    }
    if( this.width == "block" ){
      return "vl-button--block";
    }
  }),
	styleClass: computed( 'style', function() {
    if( this.style == "secondary" ){
      return "vl-button--secondary";
    }
    if( this.style == "alt" ){
      return "vl-button--alt";
    }
    if( this.style == "blue" ){
      return "vl-button--alt vl-button--alt--blue";
    }
    if( this.style == "dark" ){
      return "vl-button--dark";
    }
  }),
	disabledClass: computed( 'disabled', function() {
    if( this.disabled ){
      return "vl-button--disabled";
    }
  })
});
