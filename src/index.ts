/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-route';

import { GramMain } from './components/gram-main.component';
import { GramHeader } from './components/gram-header.component';
import { GramAccueil } from './components/gram-accueil.component';
import { GramPlaces } from './components/gram-places.component';
import { GramSources } from './components/gram-sources.component';

import { PlacesService } from './services/places.service';
import { SourcesService } from './services/sources.service';

import routesConfig from './routes';

import './css/index.css';
import './js/angular.treeview.js';

const URL_REST_SERVER: string = 'http://localhost:3000/api';

angular
	.module('grammi', ['ngRoute', 'angularTreeview'])
	.service('placesService', PlacesService)
	.service('sourcesService', SourcesService)
	.component('gramMain', GramMain)
	.component('gramHeader', GramHeader)
	.component('gramAccueil', GramAccueil)
	.component('gramPlaces', GramPlaces)
	.component('gramSources', GramSources)
	.config(routesConfig);
