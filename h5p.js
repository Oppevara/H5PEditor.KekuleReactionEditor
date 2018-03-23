
H5PEditor.widgets.kekule_reaction_editor = H5PEditor.KekuleReactionEditor = (function ($) {

  function C(parent, field, params, setValue) {
    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;
    this.applet = undefined;
    this.data = h5p_get_data_obj(this.params);
  }
   
  C.prototype.appendTo = function ($container) {
    var el = build("div", "kekule_reaction_editor");
    $container.append(el);
    var el_applet_container = build("div", undefined, el);
    el_applet_container.id = random_string();

    this.applet = new kekule_reaction_exercise(el_applet_container, "editor");
    var data = undefined;
    try { data = this.data.data; } catch(ex) {}
    this.applet.data = data;
  };

  C.prototype.save = function() {
    var data = {"data" : undefined};
    
    try { 
      data.data = this.applet.data;
    } catch(ex) {}

    this.params = h5p_get_data_str(data);
    this.setValue(this.field, this.params);
  };


  C.prototype.validate = function () { this.save(); return true; };
  C.prototype.remove = function () {};
 
 
  return C;
})(H5P.jQuery); 



