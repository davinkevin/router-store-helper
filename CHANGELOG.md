<a name="1.2.0"></a>
# [1.2.0](https://github.com/davinkevin/router-store-helper/compare/v1.0.1...v1.2.0) (2019-01-04)


### Chores

* **ngrx:** upgrade ngrx/angular to v7 ([4424f17](https://github.com/davinkevin/router-store-helper/commit/4424f17))


### Features

* **dep:** support angular 7.X ([8c518dd](https://github.com/davinkevin/router-store-helper/commit/8c518dd))


### BREAKING CHANGES

* **ngrx:**   SimpleRouterStateSerializer should be set as default router store serializer in StoreRouterConnectingModule initialization :
    StoreRouterConnectingModule.forRoot({
      serializer: SimpleRouterStateSerializer,
    }),



<a name="1.0.1"></a>
## [1.0.1](https://github.com/davinkevin/router-store-helper/compare/v1.0.0...v1.0.1) (2018-05-27)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/davinkevin/router-store-helper/compare/v0.3.1...v1.0.0) (2018-05-27)


### Features

* **angular6:** move to angular 6 packaging system and compatibility (angular, rxjs) ([4a67c8c](https://github.com/davinkevin/router-store-helper/commit/4a67c8c))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/davinkevin/router-store-helper/compare/v0.3.0...v0.3.1) (2018-03-14)


### Bug Fixes

* **location:** add query as optional parameters ([34477c7](https://github.com/davinkevin/router-store-helper/commit/34477c7))
* **router:** extras as optional parameter ([e0e0dd1](https://github.com/davinkevin/router-store-helper/commit/e0e0dd1))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/davinkevin/router-store-helper/compare/v0.2.0...v0.3.0) (2018-03-04)


### Features

* **location:** change signature of location actions to provide a closer signature to the official location service ([51c8c54](https://github.com/davinkevin/router-store-helper/commit/51c8c54))
* **router:** change signature of router actions to provide a closer signature to the official router ([33df43b](https://github.com/davinkevin/router-store-helper/commit/33df43b))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/davinkevin/router-store-helper/compare/v0.1.1...v0.2.0) (2018-02-11)


### Bug Fixes

* **module:** exports effects ([5781fa6](https://github.com/davinkevin/router-store-helper/commit/5781fa6))
* remove indirection which causes problem when module is used ([4e42bac](https://github.com/davinkevin/router-store-helper/commit/4e42bac))


### Features

* **serializer:** add simple router state serializer ([7cd5456](https://github.com/davinkevin/router-store-helper/commit/7cd5456))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/davinkevin/router-store-helper/compare/f82d1eb...v0.1.1) (2018-02-10)


### Bug Fixes

* **npm:** modify exclusion to include *.js 😆 ([c95472c](https://github.com/davinkevin/router-store-helper/commit/c95472c))


### Features

* add router and location effects|actions|module ([f82d1eb](https://github.com/davinkevin/router-store-helper/commit/f82d1eb))



