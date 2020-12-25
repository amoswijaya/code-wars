var Vector = function (components) {
    this.components = components;
  
    this.add = function( b ) {
      if ( this.components.length !== b.components.length ) {
        throw Error( 'Vectors are not same length.' );
      }
  
      var sums = [];
  
      for( var i = 0; i < this.components.length; i++ ) {
        sums.push( this.components[i] + b.components[i] );
      }
  
      return new Vector( sums );
    };
  
    this.subtract = function( b ) {
      if ( this.components.length !== b.components.length ) {
        throw Error( 'Vectors are not same length.' );
      }
  
      var differences = [];
  
      for( var i = 0, length = this.components.length; i < length; i++ ) {
        differences.push( this.components[i] - b.components[i] );
      }
  
      return new Vector( differences );
    };
  
    this.dot = function( b ) {
      if ( this.components.length !== b.components.length ) {
        throw Error( 'Vectors must be the same length.' );
      }
  
      var products = [];
  
      for( var i = 0, length = this.components.length; i < length; i++ ) {
        products.push( this.components[i] * b.components[i] );
      }
  
      return products.reduce(function(a,b){return a + b;});
    };
  
    this.norm = function() {
      return Math.sqrt( this.components.reduce( function(a,b){
        return a + Math.pow( b, 2 );
      }));
    };
  
    this.equals = function( b ) {
      if ( this.components.length !== b.components.length ) {
        return false;
      }
  
      for ( var i = 0 ; i < this.components.length; i++ ) {
        if ( this.components[ i ] !== b.components[ i ] ) {
          return false;
        }
      }
  
      return true;
    };
  
    this.toString = function(){
      return '(' + this.components.join(',') + ')';
    };
  }


var a = new Vector([1,2]);
var b = new Vector([3,4]);

console.log(a.add(b).equals(new Vector([4,6])));