import $ from "jquery";

import { SETTINGS_WINDOW_CLOSED } from './messages.ts';
import { ModalWindow } from './modalWindow.js';
import { MiscUtils } from './miscUtils.js';
import { Simulation } from './simulation.js';

var speedsubmit = function(e) {
  e.preventDefault();

  var actions = [];

  var speed = $('.speedSetting:checked').val() - 0;
  actions.push({action: SettingsWindow.SPEED, data: speed});

  this.close(actions);
}
