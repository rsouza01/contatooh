// public/js/directives/meus-componentes/meus-componentes.js


angular.module('meusComponentes', []).
	directive('meuPainel', function() {

		var directive = {}

		directive.restrict = 'EA';

		directive.scope = {
		titulo: '@'
		};

		directive.transclude = true;

		//directive.templateUrl = 'js/directives/meus-componentes/meu-painel.html';

		directive.template =
		'<div class="panel panel-default">'
		+ '<div class="panel-heading">'
		+ '<h3 class="panel-title">{{titulo}}</h3>'
		+ '</div>'
		+ '<div ng-transclude class="panel-body">'
		+ '</div>'
		+ '</div>';

		return directive;


	}

);
