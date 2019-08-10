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
    return "";
  }),
	styleClass: computed( 'style', function() {
    if( this.style == "disabled" ){
      return "vl-input-field--disabled";
    }
    return "";
  }),
  inputType: computed( 'type', function() {
    if( this.type === "number" && this.allowLeadingZeroInValue ) {
      return "text";
    } else {
      return this.type;
    }
  }),
  inputPattern: computed( 'pattern', 'allowLeadingZeroInValue', function(){
    if( !this.pattern && this.allowLeadingZeroInValue )
      return '[0-9]*';
    else
      return undefined;
  }),
  actions: {
  	update(event) {
  		if (this.onChange) {
        let value;
        if( this.type === "number" )
          value = event.target.valueAsNumber || parseFloat( event.target.value );
        else if( this.type === "date" || this.type === "datetime" )
          value = event.target.valueAsDate;
        else
          value = event.target.value;

  			this.onChange(value);
  		}
  	}
  }
});
