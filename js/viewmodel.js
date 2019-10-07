(function(jjApp) {
	'use strict';
	function ViewModel(data) {
		this.registros = data;
	}

	const viewModel = new ViewModel(jjApp.arreglo);
	ko.applyBindings(viewModel);
})(window.jjApp);
