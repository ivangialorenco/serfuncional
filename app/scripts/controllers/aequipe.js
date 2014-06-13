'use strict';

angular.module('serfuncionalApp')
	.controller('AEquipeCtrl', function ($scope) {
		$scope.selectedPerson = 1;

		$scope.selectPerson = function(id) {
			$scope.selectedPerson = id;
		}

		$scope.team = [
			{
				id : 1,
				name : "Bárbara C. Oltramari Borghesan",
				crefito10 : "150757-F",
				picture : "images/pictures/SerFuncional-068.jpg",
				backgroundPos: "-65px 0px",
				degree : [
					{
						description : "Fisioterapeuta graduada pela Universidade do Estado de Santa Catarina - UDESC"
					},
					{
						description : "Formação em Pilates pela Metacorpus"
					},
					{
						description : "Curso de Kinesiotape Neuro Muscular pela Faculdade Inspirar"
					}
				]
			},
			{
				id : 2,
				name : "Cíntia de Godoi da Rocha",
				crefito10 : "190038-F",
				picture : "images/pictures/SerFuncional-063.jpg",
				backgroundPos: "-80px -10px",
				degree : [
					{
						description : "Fisioterapeuta Graduada pela Universidade do Extremo Sul Catarinense - UNESC"
					},
					{
						description : "Pós Graduação em Terapia Manual pela Universidade do Extremo Sul Catarinense - UNESC"
					},
					{
						description : "Pós Graduação em Fisioterapia Traumato ortopédica e Esportiva pela Universidade do Extremo Sul Catarinese - UNESC"
					},
					{
						description : "Formação em Pilates Completo pela Equipe Ivana Henn"
					}
				]
			},
			{	id : 3,
				name : "Fabiane Salvador Sagaz Leal",
				crefito10 : "136910-F",
				picture : "images/pictures/SerFuncional-059.jpg",
				backgroundPos: "-93px -10px",
				degree : [
					{
						description : "Fisioterapeuta graduada pela Universidade do Estado de Santa Catarina - UDESC"
					},
					{
						description : "Formação em RPG/RPM pelo Instituto Barreiros"
					},
					{
						description : "Formação Completa no Método Pilates Clássico e Moderno: Solo, Acessórios, Aparelhos e Suspension Training pelo Instituto Top Physio."
					}
				]
			},
			{
				id : 4,
				name : "Caroline Faé",
				crn10: "2405",
				picture : "images/pictures/SerFuncional-032.jpg",
				backgroundPos: "-80px -15px",
				degree : [
					{
						description : "Nutricionista graduada pela Universidade do Sul Catarinense - UNISUL"
					},
					{
						description : "Especialista em Nutrição Clínica pela Universidade Gama Filho."
					}
				]
			}
		];
	});
