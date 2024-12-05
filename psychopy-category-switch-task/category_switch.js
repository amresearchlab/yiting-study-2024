/************************ 
 * Category_Switch Test *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'category_switch';  // from the Builder filename that created this script
let expInfo = {};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 0.4824), (- 0.4902), (- 0.4824)]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(living_prac_instrRoutineBegin());
flowScheduler.add(living_prac_instrRoutineEachFrame());
flowScheduler.add(living_prac_instrRoutineEnd());
const prac_trials_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_trials_1LoopBegin(prac_trials_1LoopScheduler));
flowScheduler.add(prac_trials_1LoopScheduler);
flowScheduler.add(prac_trials_1LoopEnd);
flowScheduler.add(living_block_feedbackRoutineBegin());
flowScheduler.add(living_block_feedbackRoutineEachFrame());
flowScheduler.add(living_block_feedbackRoutineEnd());
flowScheduler.add(end_practice_blockRoutineBegin());
flowScheduler.add(end_practice_blockRoutineEachFrame());
flowScheduler.add(end_practice_blockRoutineEnd());
flowScheduler.add(size_prac_instrRoutineBegin());
flowScheduler.add(size_prac_instrRoutineEachFrame());
flowScheduler.add(size_prac_instrRoutineEnd());
const prac_trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_trials_2LoopBegin(prac_trials_2LoopScheduler));
flowScheduler.add(prac_trials_2LoopScheduler);
flowScheduler.add(prac_trials_2LoopEnd);
flowScheduler.add(size_block_feedbackRoutineBegin());
flowScheduler.add(size_block_feedbackRoutineEachFrame());
flowScheduler.add(size_block_feedbackRoutineEnd());
flowScheduler.add(end_practice_blockRoutineBegin());
flowScheduler.add(end_practice_blockRoutineEachFrame());
flowScheduler.add(end_practice_blockRoutineEnd());
flowScheduler.add(joint_prac_instrRoutineBegin());
flowScheduler.add(joint_prac_instrRoutineEachFrame());
flowScheduler.add(joint_prac_instrRoutineEnd());
const prac_trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_trials_3LoopBegin(prac_trials_3LoopScheduler));
flowScheduler.add(prac_trials_3LoopScheduler);
flowScheduler.add(prac_trials_3LoopEnd);
flowScheduler.add(end_practice_blockRoutineBegin());
flowScheduler.add(end_practice_blockRoutineEachFrame());
flowScheduler.add(end_practice_blockRoutineEnd());
flowScheduler.add(main_instrRoutineBegin());
flowScheduler.add(main_instrRoutineEachFrame());
flowScheduler.add(main_instrRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(end_expRoutineBegin());
flowScheduler.add(end_expRoutineEachFrame());
flowScheduler.add(end_expRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'arrows.png', 'path': 'arrows.png'},
    {'name': 'trialtypes.xlsx', 'path': 'trialtypes.xlsx'},
    {'name': 'arrowcross.png', 'path': 'arrowcross.png'},
    {'name': 'stimuli_prac_3.xlsx', 'path': 'stimuli_prac_3.xlsx'},
    {'name': 'stimuli_prac_1.xlsx', 'path': 'stimuli_prac_1.xlsx'},
    {'name': 'stimuli.csv', 'path': 'stimuli.csv'},
    {'name': 'stimuli_prac_2.xlsx', 'path': 'stimuli_prac_2.xlsx'},
    {'name': 'whiteheart.png', 'path': 'whiteheart.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_2;
var task_intro;
var intro_space_text;
var proceed_key;
var setupClock;
var new_trial_alive;
var new_trial_stimuli;
var last_trial_alive;
var show_feedback;
var show_hint_on_first_n;
var feedback_symbol;
var heart;
var cross;
var practice_i;
var block_i;
var i;
var block_total;
var TEXT_STIMULI_OFFSET_SECONDS;
var SWITCH;
var NON_SWITCH;
var total_count_switch;
var total_count_non_switch;
var total_count_corr_switch;
var total_count_corr_non_switch;
var total_latency_switch;
var total_latency_non_switch;
var total_latency_corr_switch;
var total_latency_corr_non_switch;
var stim_living;
var stim_nonliving;
var stim_big;
var stim_small;
var target_stims;
var living_prac_instrClock;
var living_title;
var text_9_1;
var living_prac_space;
var key_resp_3_1;
var living_prac_cueClock;
var living_prac_trialClock;
var living_prac_mean_reaction_time;
var living_prac_num_of_errors;
var cue_5_1;
var text_10_1;
var reminder_nonliving;
var reminder_living;
var prac_1_key_resp;
var feed_sym_5;
var living_block_feedbackClock;
var feed_block_title;
var living_prac_err_and_timing_text;
var end_prac_text;
var space_text_2;
var next_key;
var end_practice_blockClock;
var size_prac_instrClock;
var size_task_title;
var text_26;
var size_prac_space;
var key_resp_4_1;
var size_prac_cueClock;
var size_prac_trialClock;
var size_prac_mean_reaction_time;
var size_prac_num_of_errors;
var cue_5;
var text_10;
var reminder_small;
var reminder_big;
var prac_2_key_resp;
var feed_sym_6;
var basketball_text;
var size_block_feedbackClock;
var title;
var size_prac_err_and_timing_text;
var end_prac_text_2;
var space_text_5;
var next_key_4;
var joint_prac_instrClock;
var comb_prac_title;
var comb_prac_instr_2;
var space_text_3;
var next_key_2;
var joint_prac_cueClock;
var joint_prac_trialClock;
var cue_6;
var text_15;
var prac_3_key_resp;
var feedback_text;
var left_reminder;
var right_reminder;
var basketball_text_2;
var main_instrClock;
var main_task_title;
var task_instr;
var space_text_4;
var next_key_3;
var main_setupClock;
var trial_setupClock;
var create_trial_listClock;
var cue_presentationClock;
var trialClock;
var cue_8;
var text;
var key_resp;
var trial_feedbackClock;
var cue;
var text_11;
var feed_sym_8;
var end_expClock;
var text_8;
var key_resp_8;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  // Run 'Begin Experiment' code from code_27
  document.body.style.cursor='none';
  
  console.log(expInfo['participant']);
  console.log(expInfo['session2']);
  welcome_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'welcome_2',
    text: 'Welcome to the Category Switch Task!\n\n',
    font: 'Arial',
    pos: [0, 0.3], letterHeight: 0.06,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.2,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  task_intro = new visual.TextBox({
    win: psychoJS.window,
    name: 'task_intro',
    text: 'You will be asked to perform two categorisation tasks. But before that you will practice the tasks in order to become familiar with them.',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.04,
    size: [1.3, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  intro_space_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_space_text',
    text: '<PRESS SPACEBAR TO PROCEED>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -3.0 
  });
  
  proceed_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  // Run 'Begin Experiment' code from code_15
  new_trial_alive = " ";
  new_trial_stimuli = " ";
  last_trial_alive = " ";
  
  show_feedback = false;
  show_hint_on_first_n = 8;
  feedback_symbol = "";
  heart = "whiteheart.png";
  cross = "arrowcross.png";
  practice_i = 0;
  block_i = 1;
  i = 0;
  block_total = 4; 
  
  TEXT_STIMULI_OFFSET_SECONDS = 0.7;
  SWITCH = "switch"
  NON_SWITCH = "non-switch"
  
  total_count_switch = 0;
  total_count_non_switch = 0;
  total_count_corr_switch = 0;
  total_count_corr_non_switch = 0;
  
  total_latency_switch = 0;
  total_latency_non_switch = 0;
  total_latency_corr_switch = 0;
  total_latency_corr_non_switch = 0;
  
  stim_living = ["shark", "lion", "oak", "alligator", "mushroom", "sparrow", "goldfish", "lizard"];
  stim_nonliving = ["table", "bicycle", "coat", "cloud", "pebble", "knob", "marble", "snowflake"];
  stim_big = ["table", "bicycle", "coat", "cloud", "shark", "lion", "oak", "alligator"];
  stim_small = ["pebble", "knob", "marble", "snowflake", "mushroom", "sparrow", "goldfish", "lizard"];
  practice_i = 0;
  
  for (i = 0; i < 8; i++) {
      stim_living[i] = [stim_living[i], "congruent", "alive"];
      stim_nonliving[i] = [stim_nonliving[i], "incongruent", "alive"];
      stim_big[i] = [stim_big[i], "congruent", "size"];
      stim_small[i] = [stim_small[i], "incongruent", "size"];
  }
  
  // create really big stimulus lists to avoid running out of index
  stim_living = stim_living.concat(stim_living)
  stim_living = stim_living.concat(stim_living)
  stim_living = stim_living.concat(stim_living)
  stim_nonliving = stim_living.concat(stim_nonliving)
  stim_nonliving = stim_living.concat(stim_nonliving)
  stim_nonliving = stim_living.concat(stim_nonliving)
  stim_big = stim_big.concat(stim_big)
  stim_big = stim_big.concat(stim_big)
  stim_big = stim_big.concat(stim_big)
  stim_small = stim_small.concat(stim_small)
  stim_small = stim_small.concat(stim_small)
  stim_small = stim_small.concat(stim_small)
  
  target_stims = stim_living.concat(stim_nonliving, stim_big, stim_small)
  // Initialize components for Routine "living_prac_instr"
  living_prac_instrClock = new util.Clock();
  living_title = new visual.TextBox({
    win: psychoJS.window,
    name: 'living_title',
    text: "'Living' Task:\nliving or non-living object?\n\n",
    font: 'Arial',
    pos: [0, 0.3], letterHeight: 0.06,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.2,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  text_9_1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'text_9_1',
    text: '',
    font: 'Arial',
    pos: [0, (- 0.08)], letterHeight: 0.035,
    size: [1.3, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  living_prac_space = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_prac_space',
    text: '<PRESS SPACEBAR TO START PRACTICING>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_3_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "living_prac_cue"
  living_prac_cueClock = new util.Clock();
  // Initialize components for Routine "living_prac_trial"
  living_prac_trialClock = new util.Clock();
  living_prac_mean_reaction_time = 0;
  living_prac_num_of_errors = 0;
  cue_5_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_5_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_10_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  reminder_nonliving = new visual.TextStim({
    win: psychoJS.window,
    name: 'reminder_nonliving',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -3.0 
  });
  
  reminder_living = new visual.TextStim({
    win: psychoJS.window,
    name: 'reminder_living',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -4.0 
  });
  
  prac_1_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  feed_sym_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'feed_sym_5',
    text: '',
    font: 'Arial',
    pos: [(- 0.05), (- 0.25)], letterHeight: 0.1,
    size: [null, null],  units: undefined, 
    color: [1.0, (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  // Initialize components for Routine "living_block_feedback"
  living_block_feedbackClock = new util.Clock();
  feed_block_title = new visual.TextBox({
    win: psychoJS.window,
    name: 'feed_block_title',
    text: 'Your performance in the Living Task\n',
    font: 'Arial',
    pos: [0, 0.3], letterHeight: 0.06,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.2,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  living_prac_err_and_timing_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'living_prac_err_and_timing_text',
    text: '',
    font: 'Arial',
    pos: [0, 0.1], letterHeight: 0.04,
    size: [1.3, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  end_prac_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'end_prac_text',
    text: 'Your aim is to minimise your time to answer while avoiding making errors.',
    font: 'Arial',
    pos: [0, (- 0.1)], letterHeight: 0.04,
    size: [1.3, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  space_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_text_2',
    text: '<PRESS SPACEBAR TO PROCEED>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -4.0 
  });
  
  next_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_practice_block"
  end_practice_blockClock = new util.Clock();
  // Initialize components for Routine "size_prac_instr"
  size_prac_instrClock = new util.Clock();
  size_task_title = new visual.TextBox({
    win: psychoJS.window,
    name: 'size_task_title',
    text: "'Size' Task:\nsmaller or bigger than a basketball?\n\n",
    font: 'Arial',
    pos: [0, 0.3], letterHeight: 0.06,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.2,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  text_26 = new visual.TextBox({
    win: psychoJS.window,
    name: 'text_26',
    text: '',
    font: 'Arial',
    pos: [0, (- 0.08)], letterHeight: 0.035,
    size: [1.3, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  size_prac_space = new visual.TextStim({
    win: psychoJS.window,
    name: 'size_prac_space',
    text: '<PRESS SPACEBAR TO START PRACTICING>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_4_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "size_prac_cue"
  size_prac_cueClock = new util.Clock();
  // Initialize components for Routine "size_prac_trial"
  size_prac_trialClock = new util.Clock();
  // Run 'Begin Experiment' code from code_5
  size_prac_mean_reaction_time = 0;
  size_prac_num_of_errors = 0;
  
  cue_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_5', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  reminder_small = new visual.TextStim({
    win: psychoJS.window,
    name: 'reminder_small',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -3.0 
  });
  
  reminder_big = new visual.TextStim({
    win: psychoJS.window,
    name: 'reminder_big',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -4.0 
  });
  
  prac_2_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  feed_sym_6 = new visual.TextBox({
    win: psychoJS.window,
    name: 'feed_sym_6',
    text: '',
    font: 'Arial',
    pos: [(- 0.05), (- 0.25)], letterHeight: 0.1,
    size: [null, null],  units: undefined, 
    color: [1.0, (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  basketball_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'basketball_text',
    text: 'than a basketball',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "size_block_feedback"
  size_block_feedbackClock = new util.Clock();
  title = new visual.TextBox({
    win: psychoJS.window,
    name: 'title',
    text: 'Block Feedback\n',
    font: 'Arial',
    pos: [0, 0.3], letterHeight: 0.06,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.2,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  size_prac_err_and_timing_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'size_prac_err_and_timing_text',
    text: '',
    font: 'Arial',
    pos: [0, 0.1], letterHeight: 0.04,
    size: [1.3, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  end_prac_text_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'end_prac_text_2',
    text: 'Your aim is to minimise your time to answer while avoiding making errors.',
    font: 'Arial',
    pos: [0, (- 0.1)], letterHeight: 0.04,
    size: [1.3, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  space_text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_text_5',
    text: '<PRESS SPACEBAR TO PROCEED>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -4.0 
  });
  
  next_key_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "joint_prac_instr"
  joint_prac_instrClock = new util.Clock();
  comb_prac_title = new visual.TextBox({
    win: psychoJS.window,
    name: 'comb_prac_title',
    text: 'Combined Task: ‘Living’ + ‘Size’ Task\n\n',
    font: 'Arial',
    pos: [0, 0.3], letterHeight: 0.06,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.2,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  comb_prac_instr_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'comb_prac_instr_2',
    text: "The actual task in this experiment is the combination of the previous two. A single word will appear in the middle of the screen with a heart or an arrowcross symbol above it. The symbol tells you which task to perform:\n\n- If the symbol is a heart: Do the LIVING Task (living or non-living object?)\n- If the symbol is an arrowcross: Do the SIZE Task (bigger or smaller than a basketball?)\n\nRespond as QUICKLY and ACCURATELY as you can. The computer will tell you if you make a mistake. Simply correct your response and move on.\n\nReady to practice? Put your index fingers on the 'E' (LIVING or BIGGER) and 'I' (NON_LIVING or SMALLER) keys on your keyboard.",
    font: 'Arial',
    pos: [0, (- 0.08)], letterHeight: 0.035,
    size: [1.3, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  space_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_text_3',
    text: '<PRESS SPACEBAR TO START PRACTICING>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -3.0 
  });
  
  next_key_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "joint_prac_cue"
  joint_prac_cueClock = new util.Clock();
  // Initialize components for Routine "joint_prac_trial"
  joint_prac_trialClock = new util.Clock();
  cue_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_6', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.1, 0.1],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  prac_3_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  feedback_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    pos: [0, (- 0.25)], letterHeight: 0.05,
    size: [null, null],  units: undefined, 
    color: [1.0, (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  left_reminder = new visual.TextBox({
    win: psychoJS.window,
    name: 'left_reminder',
    text: '',
    font: 'Arial',
    pos: [(- 0.4), (- 0.4)], letterHeight: 0.05,
    size: [null, null],  units: undefined, 
    color: [1.0, (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  right_reminder = new visual.TextBox({
    win: psychoJS.window,
    name: 'right_reminder',
    text: '',
    font: 'Arial',
    pos: [0.4, (- 0.4)], letterHeight: 0.05,
    size: [null, null],  units: undefined, 
    color: [1.0, (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  basketball_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'basketball_text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "main_instr"
  main_instrClock = new util.Clock();
  main_task_title = new visual.TextBox({
    win: psychoJS.window,
    name: 'main_task_title',
    text: 'Main Experiment\n\n',
    font: 'Arial',
    pos: [0, 0.3], letterHeight: 0.06,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.2,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  task_instr = new visual.TextBox({
    win: psychoJS.window,
    name: 'task_instr',
    text: "The practice phase is over and the actual task is about to start.\n\nREMEMBER: A single word will appear in the middle of the screen with a heart or an arrowcross symbol above it. The symbol tells you which task to perform.\n\n- If the symbol is a heart: Do the LIVING Task (living or non-living object?)\n- If the symbol is an arrowcross: Do the SIZE Task (bigger or smaller than a basketball?)\n\nAlso remember to respond as QUICKLY and ACCURATELY as you can.\n\nAre you ready? Put your index fingers on the 'E' (LIVING or BIGGER) and 'I' (NON_LIVING or SMALLER) keys on your keyboard.",
    font: 'Arial',
    pos: [0, (- 0.08)], letterHeight: 0.035,
    size: [1.3, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  space_text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_text_4',
    text: '<PRESS SPACEBAR TO START THE EXPERIMENT>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -3.0 
  });
  
  next_key_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "main_setup"
  main_setupClock = new util.Clock();
  // Initialize components for Routine "trial_setup"
  trial_setupClock = new util.Clock();
  // Initialize components for Routine "create_trial_list"
  create_trial_listClock = new util.Clock();
  // Initialize components for Routine "cue_presentation"
  cue_presentationClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  cue_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_8', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_feedback"
  trial_feedbackClock = new util.Clock();
  cue = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  feed_sym_8 = new visual.TextBox({
    win: psychoJS.window,
    name: 'feed_sym_8',
    text: '',
    font: 'Arial',
    pos: [0, (- 0.25)], letterHeight: 0.1,
    size: [null, null],  units: undefined, 
    color: [1.0, (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  // Initialize components for Routine "end_exp"
  end_expClock = new util.Clock();
  var ending_message = "";
  text_8 = new visual.TextBox({
    win: psychoJS.window,
    name: 'text_8',
    text: '',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.05,
    size: [1.2, 0.7],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.05,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _proceed_key_allKeys;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    proceed_key.keys = undefined;
    proceed_key.rt = undefined;
    _proceed_key_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_2);
    welcomeComponents.push(task_intro);
    welcomeComponents.push(intro_space_text);
    welcomeComponents.push(proceed_key);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_2* updates
    if (t >= 0.0 && welcome_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_2.tStart = t;  // (not accounting for frame time here)
      welcome_2.frameNStart = frameN;  // exact frame index
      
      welcome_2.setAutoDraw(true);
    }

    
    // *task_intro* updates
    if (t >= 0.0 && task_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_intro.tStart = t;  // (not accounting for frame time here)
      task_intro.frameNStart = frameN;  // exact frame index
      
      task_intro.setAutoDraw(true);
    }

    
    // *intro_space_text* updates
    if (t >= 0.0 && intro_space_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_space_text.tStart = t;  // (not accounting for frame time here)
      intro_space_text.frameNStart = frameN;  // exact frame index
      
      intro_space_text.setAutoDraw(true);
    }

    
    // *proceed_key* updates
    if (t >= 0.5 && proceed_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proceed_key.tStart = t;  // (not accounting for frame time here)
      proceed_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { proceed_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { proceed_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { proceed_key.clearEvents(); });
    }

    if (proceed_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = proceed_key.getKeys({keyList: ['space'], waitRelease: false});
      _proceed_key_allKeys = _proceed_key_allKeys.concat(theseKeys);
      if (_proceed_key_allKeys.length > 0) {
        proceed_key.keys = _proceed_key_allKeys[_proceed_key_allKeys.length - 1].name;  // just the last key pressed
        proceed_key.rt = _proceed_key_allKeys[_proceed_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(proceed_key.corr, level);
    }
    psychoJS.experiment.addData('proceed_key.keys', proceed_key.keys);
    if (typeof proceed_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('proceed_key.rt', proceed_key.rt);
        routineTimer.reset();
        }
    
    proceed_key.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var setupComponents;
function setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setup' ---
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setup' ---
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setup' ---
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var k;
var practice_text;
var _key_resp_3_1_allKeys;
var living_prac_instrComponents;
function living_prac_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'living_prac_instr' ---
    t = 0;
    living_prac_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_prac
    k = 0;
    if ((practice_i === 0)) {
        practice_text = "In this task you will be presented a word in the middle of the screen (e.g., dog, car) with a heart symbol directly above it. Your task is to decide as fast as possible whether the word represents a 'LIVING' object or a 'NON-LIVING' object. \n \n \n - Press the E button if the word is a LIVING object. \n - Press the I button if the letter is a NON-LIVING object.\n \n \n If you make a mistake, a red X appears. Simply correct your response and move on. \n \n \n Ready to practice? Put your index fingers on the 'E' (LIVING) and 'I' (NON-LIVING) keys on your keyboard.";
    } else {
        practice_text = "In this task you will be presented a word in the middle of the screen (e.g., dog, car) with an arrowcross symbol directly above it. Your task is to decide as fast as possible whether the word represents an object that is BIGGER or SMALLER than a basketball. \n \n \n - Press the E button if the object is BIGGER than a basketball. \n - Press the I button if the object is SMALLER than a basketball.\n \n \n If you make a mistake, a red X appears. Simply correct your response and move on. \n \n \n Ready to practice? Put your index fingers on the 'E' (BIGGER) and 'I' (SMALLER) keys on your keyboard..";
    }
    
    key_resp_3_1.keys = undefined;
    key_resp_3_1.rt = undefined;
    _key_resp_3_1_allKeys = [];
    // keep track of which components have finished
    living_prac_instrComponents = [];
    living_prac_instrComponents.push(living_title);
    living_prac_instrComponents.push(text_9_1);
    living_prac_instrComponents.push(living_prac_space);
    living_prac_instrComponents.push(key_resp_3_1);
    
    for (const thisComponent of living_prac_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function living_prac_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'living_prac_instr' ---
    // get current time
    t = living_prac_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *living_title* updates
    if (t >= 0.0 && living_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_title.tStart = t;  // (not accounting for frame time here)
      living_title.frameNStart = frameN;  // exact frame index
      
      living_title.setAutoDraw(true);
    }

    
    // *text_9_1* updates
    if (t >= 0.0 && text_9_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9_1.tStart = t;  // (not accounting for frame time here)
      text_9_1.frameNStart = frameN;  // exact frame index
      
      text_9_1.setAutoDraw(true);
    }

    
    if (text_9_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_9_1.setText(practice_text, false);
    }
    
    // *living_prac_space* updates
    if (t >= 0.0 && living_prac_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_prac_space.tStart = t;  // (not accounting for frame time here)
      living_prac_space.frameNStart = frameN;  // exact frame index
      
      living_prac_space.setAutoDraw(true);
    }

    
    // *key_resp_3_1* updates
    if (t >= 1.0 && key_resp_3_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3_1.tStart = t;  // (not accounting for frame time here)
      key_resp_3_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3_1.clearEvents(); });
    }

    if (key_resp_3_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3_1.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_1_allKeys = _key_resp_3_1_allKeys.concat(theseKeys);
      if (_key_resp_3_1_allKeys.length > 0) {
        key_resp_3_1.keys = _key_resp_3_1_allKeys[_key_resp_3_1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3_1.rt = _key_resp_3_1_allKeys[_key_resp_3_1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of living_prac_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function living_prac_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'living_prac_instr' ---
    for (const thisComponent of living_prac_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_3_1.stop();
    // the Routine "living_prac_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_trials_1;
function prac_trials_1LoopBegin(prac_trials_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trials_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli_prac_1.xlsx',
      seed: undefined, name: 'prac_trials_1'
    });
    psychoJS.experiment.addLoop(prac_trials_1); // add the loop to the experiment
    currentLoop = prac_trials_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrac_trial_1 of prac_trials_1) {
      snapshot = prac_trials_1.getSnapshot();
      prac_trials_1LoopScheduler.add(importConditions(snapshot));
      prac_trials_1LoopScheduler.add(living_prac_cueRoutineBegin(snapshot));
      prac_trials_1LoopScheduler.add(living_prac_cueRoutineEachFrame());
      prac_trials_1LoopScheduler.add(living_prac_cueRoutineEnd(snapshot));
      const prac_until_correct_1LoopScheduler = new Scheduler(psychoJS);
      prac_trials_1LoopScheduler.add(prac_until_correct_1LoopBegin(prac_until_correct_1LoopScheduler, snapshot));
      prac_trials_1LoopScheduler.add(prac_until_correct_1LoopScheduler);
      prac_trials_1LoopScheduler.add(prac_until_correct_1LoopEnd);
      prac_trials_1LoopScheduler.add(prac_trials_1LoopEndIteration(prac_trials_1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var prac_until_correct_1;
function prac_until_correct_1LoopBegin(prac_until_correct_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_until_correct_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'prac_until_correct_1'
    });
    psychoJS.experiment.addLoop(prac_until_correct_1); // add the loop to the experiment
    currentLoop = prac_until_correct_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrac_until_correct_1 of prac_until_correct_1) {
      snapshot = prac_until_correct_1.getSnapshot();
      prac_until_correct_1LoopScheduler.add(importConditions(snapshot));
      prac_until_correct_1LoopScheduler.add(living_prac_trialRoutineBegin(snapshot));
      prac_until_correct_1LoopScheduler.add(living_prac_trialRoutineEachFrame());
      prac_until_correct_1LoopScheduler.add(living_prac_trialRoutineEnd(snapshot));
      prac_until_correct_1LoopScheduler.add(prac_until_correct_1LoopEndIteration(prac_until_correct_1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_until_correct_1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_until_correct_1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_until_correct_1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function prac_trials_1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_trials_1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_trials_1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var prac_trials_2;
function prac_trials_2LoopBegin(prac_trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli_prac_2.xlsx',
      seed: undefined, name: 'prac_trials_2'
    });
    psychoJS.experiment.addLoop(prac_trials_2); // add the loop to the experiment
    currentLoop = prac_trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrac_trial_2 of prac_trials_2) {
      snapshot = prac_trials_2.getSnapshot();
      prac_trials_2LoopScheduler.add(importConditions(snapshot));
      prac_trials_2LoopScheduler.add(size_prac_cueRoutineBegin(snapshot));
      prac_trials_2LoopScheduler.add(size_prac_cueRoutineEachFrame());
      prac_trials_2LoopScheduler.add(size_prac_cueRoutineEnd(snapshot));
      const prac_until_correct_2LoopScheduler = new Scheduler(psychoJS);
      prac_trials_2LoopScheduler.add(prac_until_correct_2LoopBegin(prac_until_correct_2LoopScheduler, snapshot));
      prac_trials_2LoopScheduler.add(prac_until_correct_2LoopScheduler);
      prac_trials_2LoopScheduler.add(prac_until_correct_2LoopEnd);
      prac_trials_2LoopScheduler.add(prac_trials_2LoopEndIteration(prac_trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var prac_until_correct_2;
function prac_until_correct_2LoopBegin(prac_until_correct_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_until_correct_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'prac_until_correct_2'
    });
    psychoJS.experiment.addLoop(prac_until_correct_2); // add the loop to the experiment
    currentLoop = prac_until_correct_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrac_until_correct_2 of prac_until_correct_2) {
      snapshot = prac_until_correct_2.getSnapshot();
      prac_until_correct_2LoopScheduler.add(importConditions(snapshot));
      prac_until_correct_2LoopScheduler.add(size_prac_trialRoutineBegin(snapshot));
      prac_until_correct_2LoopScheduler.add(size_prac_trialRoutineEachFrame());
      prac_until_correct_2LoopScheduler.add(size_prac_trialRoutineEnd(snapshot));
      prac_until_correct_2LoopScheduler.add(prac_until_correct_2LoopEndIteration(prac_until_correct_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_until_correct_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_until_correct_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_until_correct_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function prac_trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var prac_trials_3;
function prac_trials_3LoopBegin(prac_trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli_prac_3.xlsx',
      seed: undefined, name: 'prac_trials_3'
    });
    psychoJS.experiment.addLoop(prac_trials_3); // add the loop to the experiment
    currentLoop = prac_trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrac_trial_3 of prac_trials_3) {
      snapshot = prac_trials_3.getSnapshot();
      prac_trials_3LoopScheduler.add(importConditions(snapshot));
      prac_trials_3LoopScheduler.add(joint_prac_cueRoutineBegin(snapshot));
      prac_trials_3LoopScheduler.add(joint_prac_cueRoutineEachFrame());
      prac_trials_3LoopScheduler.add(joint_prac_cueRoutineEnd(snapshot));
      const prac_until_correct_3LoopScheduler = new Scheduler(psychoJS);
      prac_trials_3LoopScheduler.add(prac_until_correct_3LoopBegin(prac_until_correct_3LoopScheduler, snapshot));
      prac_trials_3LoopScheduler.add(prac_until_correct_3LoopScheduler);
      prac_trials_3LoopScheduler.add(prac_until_correct_3LoopEnd);
      prac_trials_3LoopScheduler.add(prac_trials_3LoopEndIteration(prac_trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var prac_until_correct_3;
function prac_until_correct_3LoopBegin(prac_until_correct_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_until_correct_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'prac_until_correct_3'
    });
    psychoJS.experiment.addLoop(prac_until_correct_3); // add the loop to the experiment
    currentLoop = prac_until_correct_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrac_until_correct_3 of prac_until_correct_3) {
      snapshot = prac_until_correct_3.getSnapshot();
      prac_until_correct_3LoopScheduler.add(importConditions(snapshot));
      prac_until_correct_3LoopScheduler.add(joint_prac_trialRoutineBegin(snapshot));
      prac_until_correct_3LoopScheduler.add(joint_prac_trialRoutineEachFrame());
      prac_until_correct_3LoopScheduler.add(joint_prac_trialRoutineEnd(snapshot));
      prac_until_correct_3LoopScheduler.add(prac_until_correct_3LoopEndIteration(prac_until_correct_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_until_correct_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_until_correct_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_until_correct_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function prac_trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: block_total, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(main_setupRoutineBegin(snapshot));
      blocksLoopScheduler.add(main_setupRoutineEachFrame());
      blocksLoopScheduler.add(main_setupRoutineEnd(snapshot));
      const trials_setup_loopLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trials_setup_loopLoopBegin(trials_setup_loopLoopScheduler, snapshot));
      blocksLoopScheduler.add(trials_setup_loopLoopScheduler);
      blocksLoopScheduler.add(trials_setup_loopLoopEnd);
      blocksLoopScheduler.add(create_trial_listRoutineBegin(snapshot));
      blocksLoopScheduler.add(create_trial_listRoutineEachFrame());
      blocksLoopScheduler.add(create_trial_listRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_setup_loop;
function trials_setup_loopLoopBegin(trials_setup_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_setup_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli.csv',
      seed: undefined, name: 'trials_setup_loop'
    });
    psychoJS.experiment.addLoop(trials_setup_loop); // add the loop to the experiment
    currentLoop = trials_setup_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_setup_loop of trials_setup_loop) {
      snapshot = trials_setup_loop.getSnapshot();
      trials_setup_loopLoopScheduler.add(importConditions(snapshot));
      trials_setup_loopLoopScheduler.add(trial_setupRoutineBegin(snapshot));
      trials_setup_loopLoopScheduler.add(trial_setupRoutineEachFrame());
      trials_setup_loopLoopScheduler.add(trial_setupRoutineEnd(snapshot));
      trials_setup_loopLoopScheduler.add(trials_setup_loopLoopEndIteration(trials_setup_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_setup_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_setup_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_setup_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trial_reps, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(cue_presentationRoutineBegin(snapshot));
      trialsLoopScheduler.add(cue_presentationRoutineEachFrame());
      trialsLoopScheduler.add(cue_presentationRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trial_feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(trial_feedbackRoutineEachFrame());
      trialsLoopScheduler.add(trial_feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var show_hint;
var practice_cue;
var living_prac_cueComponents;
function living_prac_cueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'living_prac_cue' ---
    t = 0;
    living_prac_cueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    show_hint = (prac_trials_1.thisN < show_hint_on_first_n);
    if ((practice_i === 0)) {
        practice_cue = heart;
    } else {
        practice_cue = cross;
    }
    
    // keep track of which components have finished
    living_prac_cueComponents = [];
    
    for (const thisComponent of living_prac_cueComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function living_prac_cueRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'living_prac_cue' ---
    // get current time
    t = living_prac_cueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of living_prac_cueComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function living_prac_cueRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'living_prac_cue' ---
    for (const thisComponent of living_prac_cueComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "living_prac_cue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var corr_ans;
var timer;
var _prac_1_key_resp_allKeys;
var living_prac_trialComponents;
function living_prac_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'living_prac_trial' ---
    t = 0;
    living_prac_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5_1
    if ((congruency_stim === "congruent")) {
        corr_ans = "e";
    } else {
        corr_ans = "i";
    }
    
    // only start new timer if correct answer was given
    if (feedback_symbol === "") {
        timer = new util.Clock();
    }
    
    cue_5_1.setImage(practice_cue);
    text_10_1.setText(word);
    reminder_nonliving.setText('NON-LIVING (I)');
    reminder_living.setText('LIVING (E)');
    prac_1_key_resp.keys = undefined;
    prac_1_key_resp.rt = undefined;
    _prac_1_key_resp_allKeys = [];
    feed_sym_5.setText(feedback_symbol);
    // keep track of which components have finished
    living_prac_trialComponents = [];
    living_prac_trialComponents.push(cue_5_1);
    living_prac_trialComponents.push(text_10_1);
    living_prac_trialComponents.push(reminder_nonliving);
    living_prac_trialComponents.push(reminder_living);
    living_prac_trialComponents.push(prac_1_key_resp);
    living_prac_trialComponents.push(feed_sym_5);
    
    for (const thisComponent of living_prac_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function living_prac_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'living_prac_trial' ---
    // get current time
    t = living_prac_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_5_1* updates
    if (t >= 0.35 && cue_5_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_5_1.tStart = t;  // (not accounting for frame time here)
      cue_5_1.frameNStart = frameN;  // exact frame index
      
      cue_5_1.setAutoDraw(true);
    }

    
    // *text_10_1* updates
    if (t >= 0.7 && text_10_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10_1.tStart = t;  // (not accounting for frame time here)
      text_10_1.frameNStart = frameN;  // exact frame index
      
      text_10_1.setAutoDraw(true);
    }

    
    // *reminder_nonliving* updates
    if ((show_hint) && reminder_nonliving.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder_nonliving.tStart = t;  // (not accounting for frame time here)
      reminder_nonliving.frameNStart = frameN;  // exact frame index
      
      reminder_nonliving.setAutoDraw(true);
    }

    
    // *reminder_living* updates
    if ((show_hint) && reminder_living.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder_living.tStart = t;  // (not accounting for frame time here)
      reminder_living.frameNStart = frameN;  // exact frame index
      
      reminder_living.setAutoDraw(true);
    }

    
    // *prac_1_key_resp* updates
    if (t >= 0.7 && prac_1_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_1_key_resp.tStart = t;  // (not accounting for frame time here)
      prac_1_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_1_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_1_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_1_key_resp.clearEvents(); });
    }

    if (prac_1_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_1_key_resp.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _prac_1_key_resp_allKeys = _prac_1_key_resp_allKeys.concat(theseKeys);
      if (_prac_1_key_resp_allKeys.length > 0) {
        prac_1_key_resp.keys = _prac_1_key_resp_allKeys[_prac_1_key_resp_allKeys.length - 1].name;  // just the last key pressed
        prac_1_key_resp.rt = _prac_1_key_resp_allKeys[_prac_1_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (prac_1_key_resp.keys == corr_ans) {
            prac_1_key_resp.corr = 1;
        } else {
            prac_1_key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *feed_sym_5* updates
    if (t >= 0.0 && feed_sym_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feed_sym_5.tStart = t;  // (not accounting for frame time here)
      feed_sym_5.frameNStart = frameN;  // exact frame index
      
      feed_sym_5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of living_prac_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function living_prac_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'living_prac_trial' ---
    for (const thisComponent of living_prac_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_5_1
    if ((prac_1_key_resp.corr === 0)) {
        // only count errors once for each cue word
        if (feedback_symbol !== "X") {
            living_prac_num_of_errors += 1;
        }
        feedback_symbol = "X";
    } else {
        feedback_symbol = "";
        prac_until_correct_1.finished = true;
        
        // minus 0.1 because the stimuli only appears after 0.1s of when the
        // routine starts
        living_prac_mean_reaction_time += (timer.getTime() - TEXT_STIMULI_OFFSET_SECONDS);
    }
    // was no response the correct answer?!
    if (prac_1_key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans)) {
         prac_1_key_resp.corr = 1;  // correct non-response
      } else {
         prac_1_key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(prac_1_key_resp.corr, level);
    }
    psychoJS.experiment.addData('prac_1_key_resp.keys', prac_1_key_resp.keys);
    psychoJS.experiment.addData('prac_1_key_resp.corr', prac_1_key_resp.corr);
    if (typeof prac_1_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_1_key_resp.rt', prac_1_key_resp.rt);
        routineTimer.reset();
        }
    
    prac_1_key_resp.stop();
    // the Routine "living_prac_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var number_of_trials;
var error_and_timing_text;
var _next_key_allKeys;
var living_block_feedbackComponents;
function living_block_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'living_block_feedback' ---
    t = 0;
    living_block_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_7
    number_of_trials = (prac_trials_1.thisN + 1);
    living_prac_mean_reaction_time = (living_prac_mean_reaction_time / number_of_trials);
    console.log(`number_of_trials=${number_of_trials}
    living_prac_mean_reaction_time=${living_prac_mean_reaction_time}
    living_prac_num_of_errors=${living_prac_num_of_errors}`
    );
    error_and_timing_text = `Number of Errors: ${living_prac_num_of_errors}
    Average time taken: ${util.pad(Number.parseFloat(living_prac_mean_reaction_time).toFixed(1), 1)}s`
    ;
    
    next_key.keys = undefined;
    next_key.rt = undefined;
    _next_key_allKeys = [];
    // keep track of which components have finished
    living_block_feedbackComponents = [];
    living_block_feedbackComponents.push(feed_block_title);
    living_block_feedbackComponents.push(living_prac_err_and_timing_text);
    living_block_feedbackComponents.push(end_prac_text);
    living_block_feedbackComponents.push(space_text_2);
    living_block_feedbackComponents.push(next_key);
    
    for (const thisComponent of living_block_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function living_block_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'living_block_feedback' ---
    // get current time
    t = living_block_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feed_block_title* updates
    if (t >= 0.0 && feed_block_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feed_block_title.tStart = t;  // (not accounting for frame time here)
      feed_block_title.frameNStart = frameN;  // exact frame index
      
      feed_block_title.setAutoDraw(true);
    }

    
    // *living_prac_err_and_timing_text* updates
    if (t >= 0.0 && living_prac_err_and_timing_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_prac_err_and_timing_text.tStart = t;  // (not accounting for frame time here)
      living_prac_err_and_timing_text.frameNStart = frameN;  // exact frame index
      
      living_prac_err_and_timing_text.setAutoDraw(true);
    }

    
    if (living_prac_err_and_timing_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      living_prac_err_and_timing_text.setText(error_and_timing_text, false);
    }
    
    // *end_prac_text* updates
    if (t >= 0.0 && end_prac_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_prac_text.tStart = t;  // (not accounting for frame time here)
      end_prac_text.frameNStart = frameN;  // exact frame index
      
      end_prac_text.setAutoDraw(true);
    }

    
    // *space_text_2* updates
    if (t >= 0.0 && space_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_text_2.tStart = t;  // (not accounting for frame time here)
      space_text_2.frameNStart = frameN;  // exact frame index
      
      space_text_2.setAutoDraw(true);
    }

    
    // *next_key* updates
    if (t >= 0.0 && next_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_key.tStart = t;  // (not accounting for frame time here)
      next_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { next_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { next_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { next_key.clearEvents(); });
    }

    if (next_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = next_key.getKeys({keyList: ['space'], waitRelease: false});
      _next_key_allKeys = _next_key_allKeys.concat(theseKeys);
      if (_next_key_allKeys.length > 0) {
        next_key.keys = _next_key_allKeys[_next_key_allKeys.length - 1].name;  // just the last key pressed
        next_key.rt = _next_key_allKeys[_next_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of living_block_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function living_block_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'living_block_feedback' ---
    for (const thisComponent of living_block_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(next_key.corr, level);
    }
    psychoJS.experiment.addData('next_key.keys', next_key.keys);
    if (typeof next_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('next_key.rt', next_key.rt);
        routineTimer.reset();
        }
    
    next_key.stop();
    // the Routine "living_block_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_practice_blockComponents;
function end_practice_blockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_practice_block' ---
    t = 0;
    end_practice_blockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    end_practice_blockComponents = [];
    
    for (const thisComponent of end_practice_blockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_practice_blockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_practice_block' ---
    // get current time
    t = end_practice_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_practice_blockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var first_stims;
function end_practice_blockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_practice_block' ---
    for (const thisComponent of end_practice_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_8
    practice_i = (i + 1);
    util.shuffle(target_stims);
    first_stims = target_stims.slice(0, 4);
    
    // the Routine "end_practice_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_1_allKeys;
var size_prac_instrComponents;
function size_prac_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'size_prac_instr' ---
    t = 0;
    size_prac_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_prac_2
    k = 0;
    if ((practice_i === 0)) {
        practice_text = "In this task you will be presented a word, e.g. 'bug' or 'car' in the middle of the screen. A heart symbol will be located directly above the word. \n \n \n Your task is to decide as fast as possible whether the word, e.g. 'bug', represents a 'LIVING' object or a 'NON-LIVING' object.\n \n Press the E button if the word is a LIVING object. \n Press the I button if the letter is a NON-LIVING object.\n \n \n The computer will tell you if you make a mistake. \n \n \n Press the Spacebar to start practice.";
    } else {
        practice_text = "In this task you will be presented a word in the middle of the screen (e.g., dog, car) with an arrowcross symbol directly above it. Your task is to decide as fast as possible whether the word represents an object that is BIGGER or SMALLER than a basketball. \n \n \n - Press the E button if the object is BIGGER than a basketball. \n - Press the I button if the object is SMALLER than a basketball.\n \n \n If you make a mistake, a red X appears. Simply correct your response and move on. \n \n \n Ready to practice? Put your index fingers on the 'E' (BIGGER) and 'I' (SMALLER) keys on your keyboard..";
    }
    
    key_resp_4_1.keys = undefined;
    key_resp_4_1.rt = undefined;
    _key_resp_4_1_allKeys = [];
    // keep track of which components have finished
    size_prac_instrComponents = [];
    size_prac_instrComponents.push(size_task_title);
    size_prac_instrComponents.push(text_26);
    size_prac_instrComponents.push(size_prac_space);
    size_prac_instrComponents.push(key_resp_4_1);
    
    for (const thisComponent of size_prac_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function size_prac_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'size_prac_instr' ---
    // get current time
    t = size_prac_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *size_task_title* updates
    if (t >= 0.0 && size_task_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      size_task_title.tStart = t;  // (not accounting for frame time here)
      size_task_title.frameNStart = frameN;  // exact frame index
      
      size_task_title.setAutoDraw(true);
    }

    
    // *text_26* updates
    if (t >= 0.0 && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
    }

    
    if (text_26.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_26.setText(practice_text, false);
    }
    
    // *size_prac_space* updates
    if (t >= 0.0 && size_prac_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      size_prac_space.tStart = t;  // (not accounting for frame time here)
      size_prac_space.frameNStart = frameN;  // exact frame index
      
      size_prac_space.setAutoDraw(true);
    }

    
    // *key_resp_4_1* updates
    if (t >= 1.0 && key_resp_4_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4_1.tStart = t;  // (not accounting for frame time here)
      key_resp_4_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4_1.clearEvents(); });
    }

    if (key_resp_4_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4_1.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_1_allKeys = _key_resp_4_1_allKeys.concat(theseKeys);
      if (_key_resp_4_1_allKeys.length > 0) {
        key_resp_4_1.keys = _key_resp_4_1_allKeys[_key_resp_4_1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4_1.rt = _key_resp_4_1_allKeys[_key_resp_4_1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of size_prac_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function size_prac_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'size_prac_instr' ---
    for (const thisComponent of size_prac_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_4_1.stop();
    // the Routine "size_prac_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var size_prac_cueComponents;
function size_prac_cueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'size_prac_cue' ---
    t = 0;
    size_prac_cueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_24
    show_hint = (prac_trials_2.thisN < show_hint_on_first_n);
    if ((practice_i === 0)) {
        practice_cue = heart;
    } else {
        practice_cue = cross;
    }
    
    // keep track of which components have finished
    size_prac_cueComponents = [];
    
    for (const thisComponent of size_prac_cueComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function size_prac_cueRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'size_prac_cue' ---
    // get current time
    t = size_prac_cueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of size_prac_cueComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function size_prac_cueRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'size_prac_cue' ---
    for (const thisComponent of size_prac_cueComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "size_prac_cue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _prac_2_key_resp_allKeys;
var size_prac_trialComponents;
function size_prac_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'size_prac_trial' ---
    t = 0;
    size_prac_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    if ((congruency_stim === "congruent")) {
        corr_ans = "e";
    } else {
        corr_ans = "i";
    }
    
    // only start new timer if correct answer was given
    if (feedback_symbol === "") {
        timer = new util.Clock();
    }
    cue_5.setImage(practice_cue);
    text_10.setText(word);
    prac_2_key_resp.keys = undefined;
    prac_2_key_resp.rt = undefined;
    _prac_2_key_resp_allKeys = [];
    feed_sym_6.setText(feedback_symbol);
    // keep track of which components have finished
    size_prac_trialComponents = [];
    size_prac_trialComponents.push(cue_5);
    size_prac_trialComponents.push(text_10);
    size_prac_trialComponents.push(reminder_small);
    size_prac_trialComponents.push(reminder_big);
    size_prac_trialComponents.push(prac_2_key_resp);
    size_prac_trialComponents.push(feed_sym_6);
    size_prac_trialComponents.push(basketball_text);
    
    for (const thisComponent of size_prac_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function size_prac_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'size_prac_trial' ---
    // get current time
    t = size_prac_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_5* updates
    if (t >= 0.35 && cue_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_5.tStart = t;  // (not accounting for frame time here)
      cue_5.frameNStart = frameN;  // exact frame index
      
      cue_5.setAutoDraw(true);
    }

    
    // *text_10* updates
    if (t >= 0.7 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    
    // *reminder_small* updates
    if ((show_hint) && reminder_small.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder_small.tStart = t;  // (not accounting for frame time here)
      reminder_small.frameNStart = frameN;  // exact frame index
      
      reminder_small.setAutoDraw(true);
    }

    
    if (reminder_small.status === PsychoJS.Status.STARTED){ // only update if being drawn
      reminder_small.setText('SMALLER (I)', false);
    }
    
    // *reminder_big* updates
    if ((show_hint) && reminder_big.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder_big.tStart = t;  // (not accounting for frame time here)
      reminder_big.frameNStart = frameN;  // exact frame index
      
      reminder_big.setAutoDraw(true);
    }

    
    if (reminder_big.status === PsychoJS.Status.STARTED){ // only update if being drawn
      reminder_big.setText('BIGGER (E)', false);
    }
    
    // *prac_2_key_resp* updates
    if (t >= 0.7 && prac_2_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_2_key_resp.tStart = t;  // (not accounting for frame time here)
      prac_2_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_2_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_2_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_2_key_resp.clearEvents(); });
    }

    if (prac_2_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_2_key_resp.getKeys({keyList: ['i', 'e'], waitRelease: false});
      _prac_2_key_resp_allKeys = _prac_2_key_resp_allKeys.concat(theseKeys);
      if (_prac_2_key_resp_allKeys.length > 0) {
        prac_2_key_resp.keys = _prac_2_key_resp_allKeys[_prac_2_key_resp_allKeys.length - 1].name;  // just the last key pressed
        prac_2_key_resp.rt = _prac_2_key_resp_allKeys[_prac_2_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (prac_2_key_resp.keys == corr_ans) {
            prac_2_key_resp.corr = 1;
        } else {
            prac_2_key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *feed_sym_6* updates
    if (t >= 0.0 && feed_sym_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feed_sym_6.tStart = t;  // (not accounting for frame time here)
      feed_sym_6.frameNStart = frameN;  // exact frame index
      
      feed_sym_6.setAutoDraw(true);
    }

    
    // *basketball_text* updates
    if ((show_hint) && basketball_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      basketball_text.tStart = t;  // (not accounting for frame time here)
      basketball_text.frameNStart = frameN;  // exact frame index
      
      basketball_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of size_prac_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function size_prac_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'size_prac_trial' ---
    for (const thisComponent of size_prac_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_5
    if ((prac_2_key_resp.corr === 0)) {
        // only count errors once for each cue word
        if (feedback_symbol !== "X") {
            size_prac_num_of_errors += 1;
        }
        feedback_symbol = "X";
    } else {
        feedback_symbol = "";
        prac_until_correct_2.finished = true;
        
        // minus 0.1 because the stimuli only appears after 0.1s of when the
        // routine starts
        size_prac_mean_reaction_time += (timer.getTime() - TEXT_STIMULI_OFFSET_SECONDS);
    }
    // was no response the correct answer?!
    if (prac_2_key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans)) {
         prac_2_key_resp.corr = 1;  // correct non-response
      } else {
         prac_2_key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(prac_2_key_resp.corr, level);
    }
    psychoJS.experiment.addData('prac_2_key_resp.keys', prac_2_key_resp.keys);
    psychoJS.experiment.addData('prac_2_key_resp.corr', prac_2_key_resp.corr);
    if (typeof prac_2_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_2_key_resp.rt', prac_2_key_resp.rt);
        routineTimer.reset();
        }
    
    prac_2_key_resp.stop();
    // the Routine "size_prac_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _next_key_4_allKeys;
var size_block_feedbackComponents;
function size_block_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'size_block_feedback' ---
    t = 0;
    size_block_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_30
    number_of_trials = (prac_trials_2.thisN + 1);
    size_prac_mean_reaction_time = (size_prac_mean_reaction_time / number_of_trials);
    console.log(`number_of_trials=${number_of_trials}
    size_prac_mean_reaction_time=${size_prac_mean_reaction_time}
    size_prac_num_of_errors=${size_prac_num_of_errors}`
    );
    error_and_timing_text = `Number of Errors: ${size_prac_num_of_errors}
    Average time taken: ${util.pad(Number.parseFloat(size_prac_mean_reaction_time).toFixed(1), 1)}s`
    ;
    
    next_key_4.keys = undefined;
    next_key_4.rt = undefined;
    _next_key_4_allKeys = [];
    // keep track of which components have finished
    size_block_feedbackComponents = [];
    size_block_feedbackComponents.push(title);
    size_block_feedbackComponents.push(size_prac_err_and_timing_text);
    size_block_feedbackComponents.push(end_prac_text_2);
    size_block_feedbackComponents.push(space_text_5);
    size_block_feedbackComponents.push(next_key_4);
    
    for (const thisComponent of size_block_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function size_block_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'size_block_feedback' ---
    // get current time
    t = size_block_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *title* updates
    if (t >= 0.0 && title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      title.tStart = t;  // (not accounting for frame time here)
      title.frameNStart = frameN;  // exact frame index
      
      title.setAutoDraw(true);
    }

    
    // *size_prac_err_and_timing_text* updates
    if (t >= 0.0 && size_prac_err_and_timing_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      size_prac_err_and_timing_text.tStart = t;  // (not accounting for frame time here)
      size_prac_err_and_timing_text.frameNStart = frameN;  // exact frame index
      
      size_prac_err_and_timing_text.setAutoDraw(true);
    }

    
    if (size_prac_err_and_timing_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      size_prac_err_and_timing_text.setText(error_and_timing_text, false);
    }
    
    // *end_prac_text_2* updates
    if (t >= 0.0 && end_prac_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_prac_text_2.tStart = t;  // (not accounting for frame time here)
      end_prac_text_2.frameNStart = frameN;  // exact frame index
      
      end_prac_text_2.setAutoDraw(true);
    }

    
    // *space_text_5* updates
    if (t >= 0.0 && space_text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_text_5.tStart = t;  // (not accounting for frame time here)
      space_text_5.frameNStart = frameN;  // exact frame index
      
      space_text_5.setAutoDraw(true);
    }

    
    // *next_key_4* updates
    if (t >= 0.0 && next_key_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_key_4.tStart = t;  // (not accounting for frame time here)
      next_key_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { next_key_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { next_key_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { next_key_4.clearEvents(); });
    }

    if (next_key_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = next_key_4.getKeys({keyList: ['space'], waitRelease: false});
      _next_key_4_allKeys = _next_key_4_allKeys.concat(theseKeys);
      if (_next_key_4_allKeys.length > 0) {
        next_key_4.keys = _next_key_4_allKeys[_next_key_4_allKeys.length - 1].name;  // just the last key pressed
        next_key_4.rt = _next_key_4_allKeys[_next_key_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of size_block_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function size_block_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'size_block_feedback' ---
    for (const thisComponent of size_block_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(next_key_4.corr, level);
    }
    psychoJS.experiment.addData('next_key_4.keys', next_key_4.keys);
    if (typeof next_key_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('next_key_4.rt', next_key_4.rt);
        routineTimer.reset();
        }
    
    next_key_4.stop();
    // the Routine "size_block_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _next_key_2_allKeys;
var joint_prac_instrComponents;
function joint_prac_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'joint_prac_instr' ---
    t = 0;
    joint_prac_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_21
    k = 0;
    
    next_key_2.keys = undefined;
    next_key_2.rt = undefined;
    _next_key_2_allKeys = [];
    // keep track of which components have finished
    joint_prac_instrComponents = [];
    joint_prac_instrComponents.push(comb_prac_title);
    joint_prac_instrComponents.push(comb_prac_instr_2);
    joint_prac_instrComponents.push(space_text_3);
    joint_prac_instrComponents.push(next_key_2);
    
    for (const thisComponent of joint_prac_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function joint_prac_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'joint_prac_instr' ---
    // get current time
    t = joint_prac_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *comb_prac_title* updates
    if (t >= 0.0 && comb_prac_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      comb_prac_title.tStart = t;  // (not accounting for frame time here)
      comb_prac_title.frameNStart = frameN;  // exact frame index
      
      comb_prac_title.setAutoDraw(true);
    }

    
    // *comb_prac_instr_2* updates
    if (t >= 0.0 && comb_prac_instr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      comb_prac_instr_2.tStart = t;  // (not accounting for frame time here)
      comb_prac_instr_2.frameNStart = frameN;  // exact frame index
      
      comb_prac_instr_2.setAutoDraw(true);
    }

    
    // *space_text_3* updates
    if (t >= 0.0 && space_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_text_3.tStart = t;  // (not accounting for frame time here)
      space_text_3.frameNStart = frameN;  // exact frame index
      
      space_text_3.setAutoDraw(true);
    }

    
    // *next_key_2* updates
    if (t >= 1.0 && next_key_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_key_2.tStart = t;  // (not accounting for frame time here)
      next_key_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { next_key_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { next_key_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { next_key_2.clearEvents(); });
    }

    if (next_key_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = next_key_2.getKeys({keyList: ['space'], waitRelease: false});
      _next_key_2_allKeys = _next_key_2_allKeys.concat(theseKeys);
      if (_next_key_2_allKeys.length > 0) {
        next_key_2.keys = _next_key_2_allKeys[_next_key_2_allKeys.length - 1].name;  // just the last key pressed
        next_key_2.rt = _next_key_2_allKeys[_next_key_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of joint_prac_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function joint_prac_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'joint_prac_instr' ---
    for (const thisComponent of joint_prac_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(next_key_2.corr, level);
    }
    psychoJS.experiment.addData('next_key_2.keys', next_key_2.keys);
    if (typeof next_key_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('next_key_2.rt', next_key_2.rt);
        routineTimer.reset();
        }
    
    next_key_2.stop();
    // the Routine "joint_prac_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var task_reminder;
var left_reminder_text;
var right_reminder_text;
var joint_prac_cueComponents;
function joint_prac_cueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'joint_prac_cue' ---
    t = 0;
    joint_prac_cueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_11
    if ((characteristic === "living")) {
        practice_cue = heart;
        task_reminder = "LIVING TASK";
        left_reminder_text = "LIVING";
        right_reminder_text = "NON-LIVING";
    } else {
        practice_cue = cross;
        task_reminder = "SIZE TASK";
        left_reminder_text = "BIGGER";
        right_reminder_text = "SMALLER";
    }
    
    // keep track of which components have finished
    joint_prac_cueComponents = [];
    
    for (const thisComponent of joint_prac_cueComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function joint_prac_cueRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'joint_prac_cue' ---
    // get current time
    t = joint_prac_cueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of joint_prac_cueComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function joint_prac_cueRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'joint_prac_cue' ---
    for (const thisComponent of joint_prac_cueComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "joint_prac_cue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _prac_3_key_resp_allKeys;
var joint_prac_trialComponents;
function joint_prac_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'joint_prac_trial' ---
    t = 0;
    joint_prac_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_12
    if ((congruency_stim === "congruent")) {
        corr_ans = "e";
    } else {
        corr_ans = "i";
    }
    
    cue_6.setImage(practice_cue);
    text_15.setText(word);
    prac_3_key_resp.keys = undefined;
    prac_3_key_resp.rt = undefined;
    _prac_3_key_resp_allKeys = [];
    feedback_text.setText(task_reminder);
    left_reminder.setText(left_reminder_text);
    right_reminder.setText(right_reminder_text);
    basketball_text_2.setText('than a basketball');
    // keep track of which components have finished
    joint_prac_trialComponents = [];
    joint_prac_trialComponents.push(cue_6);
    joint_prac_trialComponents.push(text_15);
    joint_prac_trialComponents.push(prac_3_key_resp);
    joint_prac_trialComponents.push(feedback_text);
    joint_prac_trialComponents.push(left_reminder);
    joint_prac_trialComponents.push(right_reminder);
    joint_prac_trialComponents.push(basketball_text_2);
    
    for (const thisComponent of joint_prac_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function joint_prac_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'joint_prac_trial' ---
    // get current time
    t = joint_prac_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_6* updates
    if (t >= 0.35 && cue_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_6.tStart = t;  // (not accounting for frame time here)
      cue_6.frameNStart = frameN;  // exact frame index
      
      cue_6.setAutoDraw(true);
    }

    
    // *text_15* updates
    if (t >= 0.7 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }

    
    // *prac_3_key_resp* updates
    if (t >= 0.7 && prac_3_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_3_key_resp.tStart = t;  // (not accounting for frame time here)
      prac_3_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_3_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_3_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_3_key_resp.clearEvents(); });
    }

    if (prac_3_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_3_key_resp.getKeys({keyList: ['i', 'e'], waitRelease: false});
      _prac_3_key_resp_allKeys = _prac_3_key_resp_allKeys.concat(theseKeys);
      if (_prac_3_key_resp_allKeys.length > 0) {
        prac_3_key_resp.keys = _prac_3_key_resp_allKeys[_prac_3_key_resp_allKeys.length - 1].name;  // just the last key pressed
        prac_3_key_resp.rt = _prac_3_key_resp_allKeys[_prac_3_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (prac_3_key_resp.keys == corr_ans) {
            prac_3_key_resp.corr = 1;
        } else {
            prac_3_key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *feedback_text* updates
    if ((show_hint) && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    
    // *left_reminder* updates
    if ((show_hint) && left_reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_reminder.tStart = t;  // (not accounting for frame time here)
      left_reminder.frameNStart = frameN;  // exact frame index
      
      left_reminder.setAutoDraw(true);
    }

    
    // *right_reminder* updates
    if ((show_hint) && right_reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_reminder.tStart = t;  // (not accounting for frame time here)
      right_reminder.frameNStart = frameN;  // exact frame index
      
      right_reminder.setAutoDraw(true);
    }

    
    // *basketball_text_2* updates
    if ((show_hint && characteristic == "size") && basketball_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      basketball_text_2.tStart = t;  // (not accounting for frame time here)
      basketball_text_2.frameNStart = frameN;  // exact frame index
      
      basketball_text_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of joint_prac_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function joint_prac_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'joint_prac_trial' ---
    for (const thisComponent of joint_prac_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_12
    if ((prac_3_key_resp.corr === 0)) {
        show_hint = true;
    } else {
        show_hint = false;
        prac_until_correct_3.finished = true;
    }
    
    // was no response the correct answer?!
    if (prac_3_key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans)) {
         prac_3_key_resp.corr = 1;  // correct non-response
      } else {
         prac_3_key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(prac_3_key_resp.corr, level);
    }
    psychoJS.experiment.addData('prac_3_key_resp.keys', prac_3_key_resp.keys);
    psychoJS.experiment.addData('prac_3_key_resp.corr', prac_3_key_resp.corr);
    if (typeof prac_3_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_3_key_resp.rt', prac_3_key_resp.rt);
        routineTimer.reset();
        }
    
    prac_3_key_resp.stop();
    // the Routine "joint_prac_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var alive;
var new_trial_congruent;
var trial_switch_array;
var trial_congruent_array;
var trial_alive_array;
var _next_key_3_allKeys;
var main_instrComponents;
function main_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_instr' ---
    t = 0;
    main_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_23
    i = 0;
    k = 0;
    alive = first_stims[0][2];
    new_trial_congruent = first_stims[0][1];
    trial_switch_array = [];
    trial_congruent_array = [];
    trial_alive_array = [];
    
    next_key_3.keys = undefined;
    next_key_3.rt = undefined;
    _next_key_3_allKeys = [];
    // keep track of which components have finished
    main_instrComponents = [];
    main_instrComponents.push(main_task_title);
    main_instrComponents.push(task_instr);
    main_instrComponents.push(space_text_4);
    main_instrComponents.push(next_key_3);
    
    for (const thisComponent of main_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_instr' ---
    // get current time
    t = main_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *main_task_title* updates
    if (t >= 0.0 && main_task_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_task_title.tStart = t;  // (not accounting for frame time here)
      main_task_title.frameNStart = frameN;  // exact frame index
      
      main_task_title.setAutoDraw(true);
    }

    
    // *task_instr* updates
    if (t >= 0.0 && task_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_instr.tStart = t;  // (not accounting for frame time here)
      task_instr.frameNStart = frameN;  // exact frame index
      
      task_instr.setAutoDraw(true);
    }

    
    // *space_text_4* updates
    if (t >= 0.0 && space_text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_text_4.tStart = t;  // (not accounting for frame time here)
      space_text_4.frameNStart = frameN;  // exact frame index
      
      space_text_4.setAutoDraw(true);
    }

    
    // *next_key_3* updates
    if (t >= 0.2 && next_key_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_key_3.tStart = t;  // (not accounting for frame time here)
      next_key_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { next_key_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { next_key_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { next_key_3.clearEvents(); });
    }

    if (next_key_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = next_key_3.getKeys({keyList: ['space'], waitRelease: false});
      _next_key_3_allKeys = _next_key_3_allKeys.concat(theseKeys);
      if (_next_key_3_allKeys.length > 0) {
        next_key_3.keys = _next_key_3_allKeys[_next_key_3_allKeys.length - 1].name;  // just the last key pressed
        next_key_3.rt = _next_key_3_allKeys[_next_key_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_instr' ---
    for (const thisComponent of main_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    next_key_3.stop();
    // the Routine "main_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var is_last_block;
var living_stims;
var size_stims;
var main_setupComponents;
function main_setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_setup' ---
    t = 0;
    main_setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_26
    i = 0;
    k = 0;
    alive = first_stims[0][2];
    new_trial_congruent = first_stims[0][1];
    trial_switch_array = [];
    trial_congruent_array = [];
    trial_alive_array = [];
    is_last_block = ((block_total - 1) === blocks.thisRepN);
    living_stims = [];
    size_stims = [];
    
    // keep track of which components have finished
    main_setupComponents = [];
    
    for (const thisComponent of main_setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_setupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_setup' ---
    // get current time
    t = main_setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_setupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_setup' ---
    for (const thisComponent of main_setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "main_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_setupComponents;
function trial_setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_setup' ---
    t = 0;
    trial_setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_18
    if ((characteristic === "living")) {
        living_stims.push(["living", word, congruency, congruency_side, answer_key]);
    } else {
        if ((characteristic === "size")) {
            size_stims.push(["size", word, congruency, congruency_side, answer_key]);
        } else {
            throw new Error("Non-recognisable characteristic.");
        }
    }
    
    // keep track of which components have finished
    trial_setupComponents = [];
    
    for (const thisComponent of trial_setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_setupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_setup' ---
    // get current time
    t = trial_setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_setupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_setup' ---
    for (const thisComponent of trial_setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "trial_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var nonrandom;
var characteristic_list;
var randomised;
var idx;
var trial_list;
var randomised_living_stims;
var randomised_size_stims;
var switch_con_combi;
var tmp_trial_list;
var trial_reps;
var create_trial_listComponents;
function create_trial_listRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'create_trial_list' ---
    t = 0;
    create_trial_listClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_29
    nonrandom = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    characteristic_list = null;
    randomised = null;
    idx = 0;
    while (true) {
        characteristic_list = [];
        randomised = util.shuffle(nonrandom);
        idx = 0;
        while ((idx < randomised.length)) {
            if ((idx === 0)) {
                characteristic_list.push(true);
            } else {
                if ((! randomised[idx])) {
                    characteristic_list.push((! (! characteristic_list[(idx - 1)])));
                } else {
                    characteristic_list.push((! (! (! characteristic_list[(idx - 1)]))));
                }
            }
            idx += 1;
        }
        if ((util.count(characteristic_list, true) === util.count(characteristic_list, false))) {
            break;
        }
    }
    trial_list = null;
    randomised_living_stims = null;
    randomised_size_stims = null;
    switch_con_combi = null;
    while (true) {
        trial_list = [];
        randomised_living_stims = util.shuffle(living_stims.slice(0));
        randomised_size_stims = util.shuffle(size_stims.slice(0));
        idx = 0;
        while ((idx < characteristic_list.length)) {
            if (characteristic_list[idx]) {
                trial_list.push([randomised[idx]].concat(randomised_living_stims.pop()));
            } else {
                trial_list.push([randomised[idx]].concat(randomised_size_stims.pop()));
            }
            idx += 1;
        }
        switch_con_combi = [];
        for (var item, _pj_c = 0, _pj_a = trial_list, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            item = _pj_a[_pj_c];
            switch_con_combi.push((item[0].toString() + item[3]));
        }
        if ((((util.count(switch_con_combi, "0congruent") === util.count(switch_con_combi, "0incongruent")) && (util.count(switch_con_combi, "0incongruent") === util.count(switch_con_combi, "1congruent"))) && (util.count(switch_con_combi, "1congruent") === util.count(switch_con_combi, "1incongruent")))) {
            break;
        }
    }
    /*
    trial_list
    0 - switch / non-switch
    1 - living / size
    2 - word
    3 - congruency
    4 - congruency side
    5 - e / i (answer key)*/
    console.log(trial_list);
    if ((trial_list[0][1] === "living")) {
        tmp_trial_list = [[null, "living", "goldfish", null, null, "e"]];
    } else {
        tmp_trial_list = [[null, "size", "table", null, null, "e"]];
    }
    for (var item, _pj_c = 0, _pj_a = trial_list, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        item = _pj_a[_pj_c];
        tmp_trial_list.push(item);
    }
    trial_list = tmp_trial_list;
    trial_reps = trial_list.length;
    
    // keep track of which components have finished
    create_trial_listComponents = [];
    
    for (const thisComponent of create_trial_listComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function create_trial_listRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'create_trial_list' ---
    // get current time
    t = create_trial_listClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of create_trial_listComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function create_trial_listRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'create_trial_list' ---
    for (const thisComponent of create_trial_listComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "create_trial_list" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cue_stim;
var cue_word;
var trial_type;
var cue_presentationComponents;
function cue_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cue_presentation' ---
    t = 0;
    cue_presentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    if ((trial_list[k][1] === "living")) {
        cue_stim = heart;
    } else {
        cue_stim = cross;
    }
    cue_word = trial_list[k][2];
    psychoJS.experiment.addData("mt_char", trial_list[k][1]);
    psychoJS.experiment.addData("mt_word", cue_word);
    psychoJS.experiment.addData("mt_cong", trial_list[k][3]);
    psychoJS.experiment.addData("mt_ans", trial_list[k][5]);
    if ((k === 0)) {
        trial_type = "";
    } else {
        trial_type = (trial_list[k][0] ? SWITCH : NON_SWITCH);
    }
    psychoJS.experiment.addData("mt_type", trial_type);
    
    // keep track of which components have finished
    cue_presentationComponents = [];
    
    for (const thisComponent of cue_presentationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function cue_presentationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cue_presentation' ---
    // get current time
    t = cue_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cue_presentationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cue_presentationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cue_presentation' ---
    for (const thisComponent of cue_presentationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "cue_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    show_feedback = false;
    corr_ans = trial_list[k][5];
    
    cue_8.setImage(cue_stim);
    text.setText(cue_word);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(cue_8);
    trialComponents.push(text);
    trialComponents.push(key_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_8* updates
    if (t >= 0.35 && cue_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_8.tStart = t;  // (not accounting for frame time here)
      cue_8.frameNStart = frameN;  // exact frame index
      
      cue_8.setAutoDraw(true);
    }

    
    // *text* updates
    if (t >= 0.7 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.7 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == corr_ans) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var resp_milliseconds;
var qual_trial;
var count_switch;
var count_non_switch;
var count_corr_switch;
var count_corr_non_switch;
var latency_switch;
var latency_non_switch;
var latency_corr_switch;
var latency_corr_non_switch;
var prop_corr_switch;
var prop_corr_non_switch;
var total_num_of_trials;
var mean_rt_switch;
var mean_rt_non_switch;
var rt_switch_cost;
function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_2
    resp_milliseconds = (key_resp.rt * 1000);
    qual_trial = ((resp_milliseconds >= 100) ? 1 : 0);
    psychoJS.experiment.addData("resp_milli", resp_milliseconds);
    psychoJS.experiment.addData("mt_qualtrial", qual_trial);
    if ((k > 0)) {
        count_switch = (((trial_type === SWITCH) && qual_trial) ? 1 : 0);
        total_count_switch += count_switch;
        count_non_switch = (((trial_type === NON_SWITCH) && qual_trial) ? 1 : 0);
        total_count_non_switch += count_non_switch;
        count_corr_switch = ((count_switch && (key_resp.corr === 1)) ? 1 : 0);
        total_count_corr_switch += count_corr_switch;
        count_corr_non_switch = ((count_non_switch && (key_resp.corr === 1)) ? 1 : 0);
        total_count_corr_non_switch += count_corr_non_switch;
        psychoJS.experiment.addData("count_switch", count_switch);
        psychoJS.experiment.addData("count_non_switch", count_non_switch);
        psychoJS.experiment.addData("count_corr_switch", count_corr_switch);
        psychoJS.experiment.addData("count_corr_non_switch", count_corr_non_switch);
        latency_switch = (((trial_type === SWITCH) && qual_trial) ? resp_milliseconds : 0);
        total_latency_switch += latency_switch;
        latency_non_switch = (((trial_type === NON_SWITCH) && qual_trial) ? resp_milliseconds : 0);
        total_latency_non_switch += latency_non_switch;
        latency_corr_switch = ((key_resp.corr === 1) ? latency_switch : 0);
        total_latency_corr_switch += latency_corr_switch;
        latency_corr_non_switch = ((key_resp.corr === 1) ? latency_non_switch : 0);
        total_latency_corr_non_switch += latency_corr_non_switch;
        psychoJS.experiment.addData("latency_switch", latency_switch);
        psychoJS.experiment.addData("latency_non_switch", latency_non_switch);
        psychoJS.experiment.addData("latency_corr_switch", latency_corr_switch);
        psychoJS.experiment.addData("latency_corr_non_switch", latency_corr_non_switch);
    }
    if ((is_last_block && ((trials.nTotal - 1) === trials.thisRepN))) {
        psychoJS.experiment.addData("total_count_switch", total_count_switch);
        psychoJS.experiment.addData("total_count_non_switch", total_count_non_switch);
        psychoJS.experiment.addData("total_count_corr_switch", total_count_corr_switch);
        psychoJS.experiment.addData("total_count_corr_non_switch", total_count_corr_non_switch);
        prop_corr_switch = (total_count_corr_switch / total_count_switch);
        psychoJS.experiment.addData("prop_corr_switch", prop_corr_switch);
        prop_corr_non_switch = (total_count_corr_non_switch / total_count_non_switch);
        psychoJS.experiment.addData("prop_corr_non_switch", prop_corr_non_switch);
        psychoJS.experiment.addData("acc_switch_cost", (prop_corr_switch - prop_corr_non_switch));
        total_num_of_trials = ((trials.nTotal * blocks.nTotal) - blocks.nTotal);
        mean_rt_switch = (total_latency_corr_switch / total_num_of_trials);
        psychoJS.experiment.addData("mean_rt_switch", mean_rt_switch);
        mean_rt_non_switch = (total_latency_corr_non_switch / total_num_of_trials);
        psychoJS.experiment.addData("mean_rt_non_switch", mean_rt_non_switch);
        rt_switch_cost = (mean_rt_switch - mean_rt_non_switch);
        psychoJS.experiment.addData("rt_switch_cost", rt_switch_cost);
    }
    
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_feedbackComponents;
function trial_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_feedback' ---
    t = 0;
    trial_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_25
    console.log("trial_feedback");
    console.log(key_resp.corr);
    console.log(show_feedback);
    if ((key_resp.corr === 0)) {
        show_feedback = true;
    } else {
        continueRoutine = false;
    }
    
    cue.setImage(cue_stim);
    text_11.setText(cue_word);
    feed_sym_8.setText('X');
    // keep track of which components have finished
    trial_feedbackComponents = [];
    trial_feedbackComponents.push(cue);
    trial_feedbackComponents.push(text_11);
    trial_feedbackComponents.push(feed_sym_8);
    
    for (const thisComponent of trial_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_feedback' ---
    // get current time
    t = trial_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue* updates
    if ((show_feedback) && cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue.tStart = t;  // (not accounting for frame time here)
      cue.frameNStart = frameN;  // exact frame index
      
      cue.setAutoDraw(true);
    }

    if (cue.status === PsychoJS.Status.STARTED && t >= (cue.tStart + 0.5)) {
      cue.setAutoDraw(false);
    }
    
    // *text_11* updates
    if ((show_feedback) && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }

    if (text_11.status === PsychoJS.Status.STARTED && t >= (text_11.tStart + 0.5)) {
      text_11.setAutoDraw(false);
    }
    
    // *feed_sym_8* updates
    if ((show_feedback) && feed_sym_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feed_sym_8.tStart = t;  // (not accounting for frame time here)
      feed_sym_8.frameNStart = frameN;  // exact frame index
      
      feed_sym_8.setAutoDraw(true);
    }

    if (feed_sym_8.status === PsychoJS.Status.STARTED && t >= (feed_sym_8.tStart + 0.5)) {
      feed_sym_8.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_feedback' ---
    for (const thisComponent of trial_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_25
    k += 1;
    
    // the Routine "trial_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ending_message;
var _key_resp_8_allKeys;
var end_expComponents;
function end_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_exp' ---
    t = 0;
    end_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    document.body.style.cursor='auto';
    
    // This is the first task, so need to redirect to second task
    if ((!expInfo["session2"])) {
        ending_message = (
            "You have reached the end of this task.\n \n" +
            "Press Spacebar to continue to the final part of Session 2."
        );
        psychoJS.setRedirectUrls("https://run.pavlovia.org/Yiting93/reading-span-final/?participant="+expInfo["participant"]+"&session2=1", "");
    }
    // This is the last task, so redirect to exit survey
    else {
        ending_message = (
            "You have reached the end of the experiment, thank you for your participation.\n \n" +
            "The next page contains information about the prize draw.\n \n" +
            "Press Spacebar now to exit the experiment. Then, click 'Ok' to proceed."
        );
        psychoJS.setRedirectUrls("https://livpsych.eu.qualtrics.com/jfe/form/SV_ezLuna2MXYnMvUa", "");
    }
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    end_expComponents = [];
    end_expComponents.push(text_8);
    end_expComponents.push(key_resp_8);
    
    for (const thisComponent of end_expComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_expRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_exp' ---
    // get current time
    t = end_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    
    if (text_8.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_8.setText(ending_message, false);
    }
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_expComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_exp' ---
    for (const thisComponent of end_expComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_8.stop();
    // the Routine "end_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
