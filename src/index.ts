/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-route';

import { GramMain } from './components/gram-main.component';
import { GramHeader } from './components/gram-header.component';
import { GramAccueil } from './components/gram-accueil.component';

import { PlacesService } from './services/places.service';

import routesConfig from './routes';

import './index.css';

const URL_REST_SERVER: string = 'http://localhost:3000/api';

angular
	.module('grammi', ['ngRoute'])
	.service('placesService', PlacesService)
	.component('gramMain', GramMain)
	.component('gramHeader', GramHeader)
	.component('gramAccueil', GramAccueil)
	.config(routesConfig);
