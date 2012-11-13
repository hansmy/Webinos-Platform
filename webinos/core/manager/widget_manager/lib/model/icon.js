/*******************************************************************************
*  Code contributed to the webinos project
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
* Copyright 2011-2012 Paddy Byers
*
******************************************************************************/

this.Icon = (function() {

  /* public constructor */
  function Icon(path) {    

    /* public instance variables */
    this.path = path;
    this.width = -1;
    this.height = -1;
  }

  Icon.serialize = {
    path: 'string',
    width: 'number',
    height: 'number'
  };

  return Icon;
})();