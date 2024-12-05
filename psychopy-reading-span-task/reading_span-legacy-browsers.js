/********************* 
 * Reading_Span Test *
 *********************/


// store info about the experiment session:
let expName = 'reading_span';  // from the Builder filename that created this script
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
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(lett_prac_instr1RoutineBegin());
flowScheduler.add(lett_prac_instr1RoutineEachFrame());
flowScheduler.add(lett_prac_instr1RoutineEnd());
const practice_letters_blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_letters_blockLoopBegin(practice_letters_blockLoopScheduler));
flowScheduler.add(practice_letters_blockLoopScheduler);
flowScheduler.add(practice_letters_blockLoopEnd);
flowScheduler.add(check_scoreRoutineBegin());
flowScheduler.add(check_scoreRoutineEachFrame());
flowScheduler.add(check_scoreRoutineEnd());
flowScheduler.add(sent_prac_instr1RoutineBegin());
flowScheduler.add(sent_prac_instr1RoutineEachFrame());
flowScheduler.add(sent_prac_instr1RoutineEnd());
flowScheduler.add(init_sentence_practiceRoutineBegin());
flowScheduler.add(init_sentence_practiceRoutineEachFrame());
flowScheduler.add(init_sentence_practiceRoutineEnd());
const sentence_practice_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(sentence_practice_loopLoopBegin(sentence_practice_loopLoopScheduler));
flowScheduler.add(sentence_practice_loopLoopScheduler);
flowScheduler.add(sentence_practice_loopLoopEnd);
flowScheduler.add(check_sent_prac_scoreRoutineBegin());
flowScheduler.add(check_sent_prac_scoreRoutineEachFrame());
flowScheduler.add(check_sent_prac_scoreRoutineEnd());
flowScheduler.add(joint_prac_instr1RoutineBegin());
flowScheduler.add(joint_prac_instr1RoutineEachFrame());
flowScheduler.add(joint_prac_instr1RoutineEnd());
flowScheduler.add(joint_prac_instr2RoutineBegin());
flowScheduler.add(joint_prac_instr2RoutineEachFrame());
flowScheduler.add(joint_prac_instr2RoutineEnd());
const jp_or_main_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(jp_or_main_loopLoopBegin(jp_or_main_loopLoopScheduler));
flowScheduler.add(jp_or_main_loopLoopScheduler);
flowScheduler.add(jp_or_main_loopLoopEnd);
flowScheduler.add(end_instrRoutineBegin());
flowScheduler.add(end_instrRoutineEachFrame());
flowScheduler.add(end_instrRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'practice_letters/letters.csv', 'path': 'practice_letters/letters.csv'},
    {'name': 'practice_sentences/sentences.csv', 'path': 'practice_sentences/sentences.csv'},
    {'name': 'main_test/sentences.csv', 'path': 'main_test/sentences.csv'},
    {'name': 'practice_letters/block.csv', 'path': 'practice_letters/block.csv'}
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


var introClock;
var intro_3;
var space_text;
var intro_resp;
var lett_prac_instr1Clock;
var lett_prac_title;
var lett_instr_1;
var space_text_2;
var lett_instr_space;
var letter_practice_initClock;
var perfect_scores;
var trial_scores;
var practice_letter_display_2Clock;
var display_letter_jp;
var practice_letters_responseClock;
var mouse;
var remind_text;
var prac_letter_S;
var prac_letter_P;
var prac_letter_K;
var prac_letter_F;
var prac_letter_T;
var prac_letter_Q;
var prac_letter_L;
var prac_letter_H;
var prac_letter_Y;
var prac_letter_R;
var prac_letter_N;
var prac_letter_J;
var blank_letter_BG;
var clear_letters_BG;
var next_practice_BG;
var blank_letter;
var display_letters_clicked;
var clear_letters;
var next_practice;
var check_scoreClock;
var sent_prac_instr1Clock;
var sent_prac_title;
var sent_instru_1;
var space_text_3;
var sent_instr_space;
var init_sentence_practiceClock;
var practice_sentence_displayClock;
var sentence_text;
var sentence_help_text;
var sent_resp;
var sentence_practice_responseClock;
var answer_click;
var answer_help_text;
var prac_TRUE_BG;
var prac_FALSE_BG;
var prac_TRUE;
var prac_FALSE;
var result_text;
var check_sent_prac_scoreClock;
var sentence_practice_final_result;
var proceed_text;
var proceed_space;
var joint_prac_instr1Clock;
var joint_prac_title;
var joint_instr_1;
var space_text_4;
var joint_instr_space;
var joint_prac_instr2Clock;
var joint_prac_title_2;
var joint_instr_2;
var space_text_5;
var joint_instr_space_2;
var pre_big_loop_initClock;
var SIZE_OF_SETS;
var SET_SIZE;
var LOOP_SIZE;
var rspan_score;
var total_correct_letters;
var sent_acc_error;
var sent_speed_error;
var sent_total_error;
var accumulated_num_of_sentences;
var accumulated_correct_sentences;
var sent_loaderClock;
var letters_loaderClock;
var main_test_instr1Clock;
var main_title;
var main_instr_1;
var main_space_text;
var main_space;
var big_loop_initClock;
var pre_loop_initClock;
var loop_initClock;
var set_initClock;
var sentence_displayClock;
var sentence_text_2;
var sentence_help_text_3;
var mouse_2;
var respond_to_sentenceClock;
var answer_click_2;
var answer_help_text_2;
var TRUE_BG;
var FALSE_BG;
var TRUE;
var FALSE;
var letter_displayClock;
var text;
var recall_lettersClock;
var mouse_jp;
var remind_text_jp;
var letter_S;
var letter_P;
var letter_K;
var letter_F;
var letter_T;
var letter_Q;
var letter_L;
var letter_H;
var letter_Y;
var letter_R;
var letter_N;
var letter_J;
var blank_letter_BG_jp;
var clear_letters_BG_jp;
var next_practice_BG_jp;
var blank_letter_jp;
var display_letters_clicked_jp;
var clear_letters_jp;
var next_practice_jp;
var feedback_displayClock;
var performance_text;
var letters_feedback;
var sentences_feedback;
var accum_text;
var sentences_percent;
var reminder_text;
var proceed_text_2;
var proceed_space_2;
var process_scoresClock;
var end_instrClock;
var thankyou;
var exit_key;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  intro_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'intro_3',
    text: 'This experiment involves memorising a sequence of letters that are shown in between sentences that you will have to judge as realistic or not.\n\nIn order to help you get familiar with the experiment, you will first engage with several practice trials that will provide a step-by-step introduction to the main task.\n\nBy the end of these practice stages you should be comfortable with the experiment. If not, please talk to the researcher in the room.',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.04,
    size: [1.3, 1.0],  units: undefined, 
    color: [1.0, 1.0, 1.0], colorSpace: 'rgb',
    fillColor: [(- 0.4824), (- 0.4902), (- 0.4824)], borderColor: [(- 0.4824), (- 0.4902), (- 0.4824)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 1.0,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  space_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_text',
    text: '<PRESS SPACEBAR TO PROCEED>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -1.0 
  });
  
  intro_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "lett_prac_instr1"
  lett_prac_instr1Clock = new util.Clock();
  lett_prac_title = new visual.TextBox({
    win: psychoJS.window,
    name: 'lett_prac_title',
    text: 'Practice Stage 1 (letters)\n\n',
    font: 'Arial',
    pos: [0, 0.38], letterHeight: 0.06,
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
    depth: 0.0 
  });
  
  lett_instr_1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'lett_instr_1',
    text: 'In this practice, a sequence of letters will appear on the screen (one at a time). Your task is to memorise this sequence of letters in the order presented (sequences can vary in length). Once the full sequence has been presented, you will be asked to indicate the letters you saw and in the right sequence.  \n\nNote that:\n- If you forget any of the letters, click BLANK to mark the position of the forgotten letter.\n- If you make a mistake, click CLEAR to start over.\n- Once you are satisfied with your response, click the NEXT button at the bottom right of the screen to proceed. \n\nLet’s practice to help you understand the task and become familiar with the interface.',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.04,
    size: [1.3, 1.0],  units: undefined, 
    color: [1.0, 1.0, 1.0], colorSpace: 'rgb',
    fillColor: [(- 0.4824), (- 0.4902), (- 0.4824)], borderColor: [(- 0.4824), (- 0.4902), (- 0.4824)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 1.0,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  space_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_text_2',
    text: '<PRESS SPACEBAR TO START PRACTICING>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -2.0 
  });
  
  lett_instr_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "letter_practice_init"
  letter_practice_initClock = new util.Clock();
  // Run 'Begin Experiment' code from init
  perfect_scores = [];
  trial_scores = [];
  
  // Initialize components for Routine "practice_letter_display_2"
  practice_letter_display_2Clock = new util.Clock();
  display_letter_jp = new visual.TextStim({
    win: psychoJS.window,
    name: 'display_letter_jp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "practice_letters_response"
  practice_letters_responseClock = new util.Clock();
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  remind_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'remind_text',
    text: 'Select the letters in the order presented. Use the BLANK button to fill in forgotten items.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  prac_letter_S = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_letter_S',
    text: 'S',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.12)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  prac_letter_P = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_letter_P',
    text: 'P',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0.01], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  prac_letter_K = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_letter_K',
    text: 'K',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0.13], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  prac_letter_F = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_letter_F',
    text: 'F',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  prac_letter_T = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_letter_T',
    text: 'T',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.12)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  prac_letter_Q = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_letter_Q',
    text: 'Q',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.01], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  prac_letter_L = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_letter_L',
    text: 'L',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.13], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  prac_letter_H = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_letter_H',
    text: 'H',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  prac_letter_Y = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_letter_Y',
    text: 'Y',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.12)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  prac_letter_R = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_letter_R',
    text: 'R',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.01], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  prac_letter_N = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_letter_N',
    text: 'N',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.13], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -13.0 
  });
  
  prac_letter_J = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_letter_J',
    text: 'J',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  blank_letter_BG = new visual.Rect ({
    win: psychoJS.window, name: 'blank_letter_BG', 
    width: [0.16, 0.065][0], height: [0.16, 0.065][1],
    ori: 0.0, pos: [0, (- 0.25)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -15, interpolate: true,
  });
  
  clear_letters_BG = new visual.Rect ({
    win: psychoJS.window, name: 'clear_letters_BG', 
    width: [0.16, 0.065][0], height: [0.16, 0.065][1],
    ori: 0.0, pos: [(- 0.5), (- 0.4)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -16, interpolate: true,
  });
  
  next_practice_BG = new visual.Rect ({
    win: psychoJS.window, name: 'next_practice_BG', 
    width: [0.16, 0.065][0], height: [0.16, 0.065][1],
    ori: 0.0, pos: [0.5, (- 0.4)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -17, interpolate: true,
  });
  
  blank_letter = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank_letter',
    text: 'BLANK',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -18.0 
  });
  
  display_letters_clicked = new visual.TextStim({
    win: psychoJS.window,
    name: 'display_letters_clicked',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -19.0 
  });
  
  clear_letters = new visual.TextStim({
    win: psychoJS.window,
    name: 'clear_letters',
    text: 'CLEAR',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.4)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -20.0 
  });
  
  next_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'next_practice',
    text: 'NEXT',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.4)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -21.0 
  });
  
  // Initialize components for Routine "check_score"
  check_scoreClock = new util.Clock();
  // Initialize components for Routine "sent_prac_instr1"
  sent_prac_instr1Clock = new util.Clock();
  sent_prac_title = new visual.TextBox({
    win: psychoJS.window,
    name: 'sent_prac_title',
    text: 'Practice Stage 2 (sentences)\n\n',
    font: 'Arial',
    pos: [0, 0.38], letterHeight: 0.06,
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
    depth: 0.0 
  });
  
  sent_instru_1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'sent_instru_1',
    text: 'In this practice, a series of sentences will appear on your screen (one at a time).\n\nAs soon as you see each sentence, as fast as possible, you should determine if it makes sense (TRUE) or not (FALSE). Once you determined this, click your left mouse button as quickly as possible. You’ll then be taken to another screen where you can insert the answer.\n\nExample 1: "I like to run in the park." \n- This sentence makes sense, so you should click TRUE.\n\nExample 2: "I like to run in the sky." \n- This sentence does not make sense, so you should click FALSE.\n\nIt is VERY important that you determine whether the sentences make sense or not as quickly as you can, as the time you take to make these decisions are part of the task.\n\nLet’s practice to help you understand the task and become familiar with the interface.',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.035,
    size: [1.3, 1.0],  units: undefined, 
    color: [1.0, 1.0, 1.0], colorSpace: 'rgb',
    fillColor: [(- 0.4824), (- 0.4902), (- 0.4824)], borderColor: [(- 0.4824), (- 0.4902), (- 0.4824)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 1.0,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
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
    depth: -2.0 
  });
  
  sent_instr_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "init_sentence_practice"
  init_sentence_practiceClock = new util.Clock();
  // Initialize components for Routine "practice_sentence_display"
  practice_sentence_displayClock = new util.Clock();
  sentence_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'sentence_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  sentence_help_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'sentence_help_text',
    text: 'Click the left mouse button\nas soon as you know if the sentence is TRUE or FALSE.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  sent_resp = new core.Mouse({
    win: psychoJS.window,
  });
  sent_resp.mouseClock = new util.Clock();
  // Initialize components for Routine "sentence_practice_response"
  sentence_practice_responseClock = new util.Clock();
  answer_click = new core.Mouse({
    win: psychoJS.window,
  });
  answer_click.mouseClock = new util.Clock();
  answer_help_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'answer_help_text',
    text: 'This sentence makes sense.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  prac_TRUE_BG = new visual.Rect ({
    win: psychoJS.window, name: 'prac_TRUE_BG', 
    width: [0.16, 0.065][0], height: [0.16, 0.065][1],
    ori: 0.0, pos: [(- 0.5), (- 0.2)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  prac_FALSE_BG = new visual.Rect ({
    win: psychoJS.window, name: 'prac_FALSE_BG', 
    width: [0.16, 0.065][0], height: [0.16, 0.065][1],
    ori: 0.0, pos: [0.5, (- 0.2)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  prac_TRUE = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_TRUE',
    text: 'TRUE',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  prac_FALSE = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_FALSE',
    text: 'FALSE',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  result_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'result_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "check_sent_prac_score"
  check_sent_prac_scoreClock = new util.Clock();
  sentence_practice_final_result = new visual.TextStim({
    win: psychoJS.window,
    name: 'sentence_practice_final_result',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  proceed_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'proceed_text',
    text: '<PRESS SPACEBAR TO PROCEED>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -2.0 
  });
  
  proceed_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "joint_prac_instr1"
  joint_prac_instr1Clock = new util.Clock();
  joint_prac_title = new visual.TextBox({
    win: psychoJS.window,
    name: 'joint_prac_title',
    text: 'Practice Stage 3 (sentences and letters)\n\n',
    font: 'Arial',
    pos: [0, 0.38], letterHeight: 0.06,
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
    depth: 0.0 
  });
  
  joint_instr_1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'joint_instr_1',
    text: 'In the final practice stage, we are putting together letter sequences and sentences so that you can practice the complete task.\n\nLike in the previous stage, we will ask you to, as fast as possible, judge whether sentences make sense (TRUE) or not (FALSE). Once you determine that, click your left mouse button as quickly as possible. You’ll then be taken to another screen where you can insert the answer.\n\nBe aware that, this time, your answer is time-sensitive: if you take too long to click on the mouse, you will not be able to insert your answer and the computer will consider that you answered incorrectly. Therefore, it is important to work QUICKLY and ACCURATELY.\n\nImmediately after determining whether a sentence is TRUE or FALSE (or when it is skipped), you will see a letter on the screen, then a sentence again, then a letter, and so on.\n\nLike in the first practice stage, you have to memorise the sequence of letters in the order presented. At the end of each set of sentences and letters, you will be asked to recall the sequence of the letters you saw.',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.035,
    size: [1.3, 1.0],  units: undefined, 
    color: [1.0, 1.0, 1.0], colorSpace: 'rgb',
    fillColor: [(- 0.4824), (- 0.4902), (- 0.4824)], borderColor: [(- 0.4824), (- 0.4902), (- 0.4824)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 1.0,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  space_text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_text_4',
    text: '<PRESS SPACEBAR TO PROCEED>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -2.0 
  });
  
  joint_instr_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "joint_prac_instr2"
  joint_prac_instr2Clock = new util.Clock();
  joint_prac_title_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'joint_prac_title_2',
    text: 'Practice Stage 3 (sentences and letters)\n\n',
    font: 'Arial',
    pos: [0, 0.38], letterHeight: 0.06,
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
    depth: 0.0 
  });
  
  joint_instr_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'joint_instr_2',
    text: 'One final note about performance. Once you insert the sequence of letters, you will receive feedback about your performance.\n\nYou will see a highlighted number in bold at the bottom of the screen. This is the percentage of sentences that you correctly identified as making sense or not. It is VERY important that you keep your score as high as possible (usually higher than 85%).\n\nThat’s it. Are you ready to start the final practice stage?',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.035,
    size: [1.3, 1.0],  units: undefined, 
    color: [1.0, 1.0, 1.0], colorSpace: 'rgb',
    fillColor: [(- 0.4824), (- 0.4902), (- 0.4824)], borderColor: [(- 0.4824), (- 0.4902), (- 0.4824)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 1.0,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  space_text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_text_5',
    text: '<PRESS SPACEBAR TO START PRACTICING>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -2.0 
  });
  
  joint_instr_space_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pre_big_loop_init"
  pre_big_loop_initClock = new util.Clock();
  // Run 'Begin Experiment' code from code_20
  SIZE_OF_SETS = [];
  SET_SIZE = 0;
  LOOP_SIZE = 0;
  rspan_score = 0;
  total_correct_letters = 0;
  sent_acc_error = 0;
  sent_speed_error = 0;
  sent_total_error = 0;
  accumulated_num_of_sentences = 0;
  accumulated_correct_sentences = 0;
  
  // Initialize components for Routine "sent_loader"
  sent_loaderClock = new util.Clock();
  // Initialize components for Routine "letters_loader"
  letters_loaderClock = new util.Clock();
  // Initialize components for Routine "main_test_instr1"
  main_test_instr1Clock = new util.Clock();
  main_title = new visual.TextBox({
    win: psychoJS.window,
    name: 'main_title',
    text: 'Main Experiment\n\n',
    font: 'Arial',
    pos: [0, 0.38], letterHeight: 0.06,
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
  
  main_instr_1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'main_instr_1',
    text: 'That is the end of the practice.\n\nThe actual experiment will look like the last practice stage you just completed. First you will get a sentence to read and determine whether it makes sense or not, then a letter to remember, and so on. Note that some of the sequences will have more sentences and letters than others (between 4 and 6).\n\nREMEMBER: \n- It is VERY important that you are QUICK at determining whether the sentences make sense or not. \n- Remember that if you take too long on a sentence, it will be skipped and that sentence will be considered incorrect. \n- Try to be as ACCURATE as possible (ideally over 85%)\n- Whilst doing this, make sure that you get as many letter sequences right as possible.\n\nIf you have any questions, raise your hand now and the experimenter in the room will help you. ',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.035,
    size: [1.3, 1.0],  units: undefined, 
    color: [1.0, 1.0, 1.0], colorSpace: 'rgb',
    fillColor: [(- 0.4824), (- 0.4902), (- 0.4824)], borderColor: [(- 0.4824), (- 0.4902), (- 0.4824)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 1.0,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  main_space_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'main_space_text',
    text: '<PRESS SPACEBAR TO START THE EXPERIMENT>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -3.0 
  });
  
  main_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "big_loop_init"
  big_loop_initClock = new util.Clock();
  // Initialize components for Routine "pre_loop_init"
  pre_loop_initClock = new util.Clock();
  // Initialize components for Routine "loop_init"
  loop_initClock = new util.Clock();
  // Initialize components for Routine "set_init"
  set_initClock = new util.Clock();
  // Initialize components for Routine "sentence_display"
  sentence_displayClock = new util.Clock();
  sentence_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sentence_text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  sentence_help_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'sentence_help_text_3',
    text: 'Click the left mouse button\nas soon as you know if the sentence is TRUE or FALSE.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "respond_to_sentence"
  respond_to_sentenceClock = new util.Clock();
  answer_click_2 = new core.Mouse({
    win: psychoJS.window,
  });
  answer_click_2.mouseClock = new util.Clock();
  answer_help_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'answer_help_text_2',
    text: 'This sentence makes sense.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  TRUE_BG = new visual.Rect ({
    win: psychoJS.window, name: 'TRUE_BG', 
    width: [0.16, 0.065][0], height: [0.16, 0.065][1],
    ori: 0.0, pos: [(- 0.5), (- 0.2)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  FALSE_BG = new visual.Rect ({
    win: psychoJS.window, name: 'FALSE_BG', 
    width: [0.16, 0.065][0], height: [0.16, 0.065][1],
    ori: 0.0, pos: [0.5, (- 0.2)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  TRUE = new visual.TextStim({
    win: psychoJS.window,
    name: 'TRUE',
    text: 'TRUE',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  FALSE = new visual.TextStim({
    win: psychoJS.window,
    name: 'FALSE',
    text: 'FALSE',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "letter_display"
  letter_displayClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "recall_letters"
  recall_lettersClock = new util.Clock();
  mouse_jp = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_jp.mouseClock = new util.Clock();
  remind_text_jp = new visual.TextStim({
    win: psychoJS.window,
    name: 'remind_text_jp',
    text: 'Select the letters in the order presented. Use the BLANK button to fill in forgotten letters.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  letter_S = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_S',
    text: 'S',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.12)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  letter_P = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_P',
    text: 'P',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0.01], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  letter_K = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_K',
    text: 'K',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0.13], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  letter_F = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_F',
    text: 'F',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  letter_T = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_T',
    text: 'T',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.12)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  letter_Q = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_Q',
    text: 'Q',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.01], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  letter_L = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_L',
    text: 'L',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.13], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  letter_H = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_H',
    text: 'H',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  letter_Y = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_Y',
    text: 'Y',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.12)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  letter_R = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_R',
    text: 'R',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.01], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  letter_N = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_N',
    text: 'N',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.13], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -13.0 
  });
  
  letter_J = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_J',
    text: 'J',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  blank_letter_BG_jp = new visual.Rect ({
    win: psychoJS.window, name: 'blank_letter_BG_jp', 
    width: [0.16, 0.065][0], height: [0.16, 0.065][1],
    ori: 0.0, pos: [0, (- 0.25)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -15, interpolate: true,
  });
  
  clear_letters_BG_jp = new visual.Rect ({
    win: psychoJS.window, name: 'clear_letters_BG_jp', 
    width: [0.16, 0.065][0], height: [0.16, 0.065][1],
    ori: 0.0, pos: [(- 0.5), (- 0.4)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -16, interpolate: true,
  });
  
  next_practice_BG_jp = new visual.Rect ({
    win: psychoJS.window, name: 'next_practice_BG_jp', 
    width: [0.16, 0.065][0], height: [0.16, 0.065][1],
    ori: 0.0, pos: [0.5, (- 0.4)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -17, interpolate: true,
  });
  
  blank_letter_jp = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank_letter_jp',
    text: 'BLANK',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -18.0 
  });
  
  display_letters_clicked_jp = new visual.TextStim({
    win: psychoJS.window,
    name: 'display_letters_clicked_jp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -19.0 
  });
  
  clear_letters_jp = new visual.TextStim({
    win: psychoJS.window,
    name: 'clear_letters_jp',
    text: 'CLEAR',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.4)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -20.0 
  });
  
  next_practice_jp = new visual.TextStim({
    win: psychoJS.window,
    name: 'next_practice_jp',
    text: 'NEXT',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.4)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -21.0 
  });
  
  // Initialize components for Routine "feedback_display"
  feedback_displayClock = new util.Clock();
  performance_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'performance_text',
    text: '',
    font: 'Arial',
    pos: [0, 0.25], letterHeight: 0.05,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  letters_feedback = new visual.TextBox({
    win: psychoJS.window,
    name: 'letters_feedback',
    text: '',
    font: 'Arial',
    pos: [0, 0.17], letterHeight: 0.04,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  sentences_feedback = new visual.TextBox({
    win: psychoJS.window,
    name: 'sentences_feedback',
    text: '',
    font: 'Arial',
    pos: [0, 0.12], letterHeight: 0.04,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  accum_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'accum_text',
    text: '',
    font: 'Arial',
    pos: [0, (- 0.05)], letterHeight: 0.05,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
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
  
  sentences_percent = new visual.TextBox({
    win: psychoJS.window,
    name: 'sentences_percent',
    text: '',
    font: 'Arial',
    pos: [0, (- 0.15)], letterHeight: 0.045,
    size: [0.55, 0.07],  units: undefined, 
    color: [(- 0.4824), (- 0.4902), (- 0.4824)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [1.0, 1.0, 1.0],
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  reminder_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'reminder_text',
    text: '',
    font: 'Arial',
    pos: [0, (- 0.25)], letterHeight: 0.03,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
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
  
  proceed_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'proceed_text_2',
    text: '<PRESS SPACEBAR TO PROCEED>',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.6549, 0.6549, 0.6549]),  opacity: undefined,
    depth: -7.0 
  });
  
  proceed_space_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "process_scores"
  process_scoresClock = new util.Clock();
  // Initialize components for Routine "end_instr"
  end_instrClock = new util.Clock();
  thankyou = new visual.TextBox({
    win: psychoJS.window,
    name: 'thankyou',
    text: '',
    font: 'Arial',
    pos: [0, 0.05], letterHeight: 0.045,
    size: [1.1, 0.8],  units: undefined, 
    color: [1.0, 1.0, 1.0], colorSpace: 'rgb',
    fillColor: [(- 0.4824), (- 0.4902), (- 0.4824)], borderColor: [(- 0.4824), (- 0.4902), (- 0.4824)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 1.0,
    padding: 0.0,
    alignment: 'center-left',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  exit_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  var ending_message = "";
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _intro_resp_allKeys;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    intro_resp.keys = undefined;
    intro_resp.rt = undefined;
    _intro_resp_allKeys = [];
    // Run 'Begin Routine' code from code_26
    console.log(expInfo["participant"]);
    console.log(expInfo["session2"]);
    
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(intro_3);
    introComponents.push(space_text);
    introComponents.push(intro_resp);
    
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_3* updates
    if (t >= 0.0 && intro_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_3.tStart = t;  // (not accounting for frame time here)
      intro_3.frameNStart = frameN;  // exact frame index
      
      intro_3.setAutoDraw(true);
    }

    
    // *space_text* updates
    if (t >= 0.0 && space_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_text.tStart = t;  // (not accounting for frame time here)
      space_text.frameNStart = frameN;  // exact frame index
      
      space_text.setAutoDraw(true);
    }

    
    // *intro_resp* updates
    if (t >= 0.0 && intro_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_resp.tStart = t;  // (not accounting for frame time here)
      intro_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { intro_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { intro_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { intro_resp.clearEvents(); });
    }

    if (intro_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = intro_resp.getKeys({keyList: ['space'], waitRelease: false});
      _intro_resp_allKeys = _intro_resp_allKeys.concat(theseKeys);
      if (_intro_resp_allKeys.length > 0) {
        intro_resp.keys = _intro_resp_allKeys[_intro_resp_allKeys.length - 1].name;  // just the last key pressed
        intro_resp.rt = _intro_resp_allKeys[_intro_resp_allKeys.length - 1].rt;
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
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(intro_resp.corr, level);
    }
    psychoJS.experiment.addData('intro_resp.keys', intro_resp.keys);
    if (typeof intro_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('intro_resp.rt', intro_resp.rt);
        routineTimer.reset();
        }
    
    intro_resp.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _lett_instr_space_allKeys;
var lett_prac_instr1Components;
function lett_prac_instr1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'lett_prac_instr1' ---
    t = 0;
    lett_prac_instr1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    lett_instr_space.keys = undefined;
    lett_instr_space.rt = undefined;
    _lett_instr_space_allKeys = [];
    // keep track of which components have finished
    lett_prac_instr1Components = [];
    lett_prac_instr1Components.push(lett_prac_title);
    lett_prac_instr1Components.push(lett_instr_1);
    lett_prac_instr1Components.push(space_text_2);
    lett_prac_instr1Components.push(lett_instr_space);
    
    lett_prac_instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function lett_prac_instr1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'lett_prac_instr1' ---
    // get current time
    t = lett_prac_instr1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *lett_prac_title* updates
    if (t >= 0.0 && lett_prac_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lett_prac_title.tStart = t;  // (not accounting for frame time here)
      lett_prac_title.frameNStart = frameN;  // exact frame index
      
      lett_prac_title.setAutoDraw(true);
    }

    
    // *lett_instr_1* updates
    if (t >= 0.0 && lett_instr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lett_instr_1.tStart = t;  // (not accounting for frame time here)
      lett_instr_1.frameNStart = frameN;  // exact frame index
      
      lett_instr_1.setAutoDraw(true);
    }

    
    // *space_text_2* updates
    if (t >= 0.0 && space_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_text_2.tStart = t;  // (not accounting for frame time here)
      space_text_2.frameNStart = frameN;  // exact frame index
      
      space_text_2.setAutoDraw(true);
    }

    
    // *lett_instr_space* updates
    if (t >= 1.0 && lett_instr_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lett_instr_space.tStart = t;  // (not accounting for frame time here)
      lett_instr_space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      lett_instr_space.clock.reset();
      lett_instr_space.start();
    }

    if (lett_instr_space.status === PsychoJS.Status.STARTED) {
      let theseKeys = lett_instr_space.getKeys({keyList: ['space'], waitRelease: false});
      _lett_instr_space_allKeys = _lett_instr_space_allKeys.concat(theseKeys);
      if (_lett_instr_space_allKeys.length > 0) {
        lett_instr_space.keys = _lett_instr_space_allKeys[_lett_instr_space_allKeys.length - 1].name;  // just the last key pressed
        lett_instr_space.rt = _lett_instr_space_allKeys[_lett_instr_space_allKeys.length - 1].rt;
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
    lett_prac_instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function lett_prac_instr1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'lett_prac_instr1' ---
    lett_prac_instr1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    lett_instr_space.stop();
    // the Routine "lett_prac_instr1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_letters_block;
function practice_letters_blockLoopBegin(practice_letters_blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_letters_block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_letters/block.csv',
      seed: undefined, name: 'practice_letters_block'
    });
    psychoJS.experiment.addLoop(practice_letters_block); // add the loop to the experiment
    currentLoop = practice_letters_block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_letters_block.forEach(function() {
      snapshot = practice_letters_block.getSnapshot();
    
      practice_letters_blockLoopScheduler.add(importConditions(snapshot));
      practice_letters_blockLoopScheduler.add(letter_practice_initRoutineBegin(snapshot));
      practice_letters_blockLoopScheduler.add(letter_practice_initRoutineEachFrame());
      practice_letters_blockLoopScheduler.add(letter_practice_initRoutineEnd(snapshot));
      const practice_letters_loopLoopScheduler = new Scheduler(psychoJS);
      practice_letters_blockLoopScheduler.add(practice_letters_loopLoopBegin(practice_letters_loopLoopScheduler, snapshot));
      practice_letters_blockLoopScheduler.add(practice_letters_loopLoopScheduler);
      practice_letters_blockLoopScheduler.add(practice_letters_loopLoopEnd);
      practice_letters_blockLoopScheduler.add(practice_letters_responseRoutineBegin(snapshot));
      practice_letters_blockLoopScheduler.add(practice_letters_responseRoutineEachFrame());
      practice_letters_blockLoopScheduler.add(practice_letters_responseRoutineEnd(snapshot));
      practice_letters_blockLoopScheduler.add(practice_letters_blockLoopEndIteration(practice_letters_blockLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var practice_letters_loop;
function practice_letters_loopLoopBegin(practice_letters_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_letters_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, letters_file, rows),
      seed: undefined, name: 'practice_letters_loop'
    });
    psychoJS.experiment.addLoop(practice_letters_loop); // add the loop to the experiment
    currentLoop = practice_letters_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_letters_loop.forEach(function() {
      snapshot = practice_letters_loop.getSnapshot();
    
      practice_letters_loopLoopScheduler.add(importConditions(snapshot));
      practice_letters_loopLoopScheduler.add(practice_letter_display_2RoutineBegin(snapshot));
      practice_letters_loopLoopScheduler.add(practice_letter_display_2RoutineEachFrame());
      practice_letters_loopLoopScheduler.add(practice_letter_display_2RoutineEnd(snapshot));
      practice_letters_loopLoopScheduler.add(practice_letters_loopLoopEndIteration(practice_letters_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_letters_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_letters_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_letters_loopLoopEndIteration(scheduler, snapshot) {
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


async function practice_letters_blockLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_letters_block);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_letters_blockLoopEndIteration(scheduler, snapshot) {
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


var sentence_practice_loop;
function sentence_practice_loopLoopBegin(sentence_practice_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    sentence_practice_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_sentences/sentences.csv',
      seed: undefined, name: 'sentence_practice_loop'
    });
    psychoJS.experiment.addLoop(sentence_practice_loop); // add the loop to the experiment
    currentLoop = sentence_practice_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    sentence_practice_loop.forEach(function() {
      snapshot = sentence_practice_loop.getSnapshot();
    
      sentence_practice_loopLoopScheduler.add(importConditions(snapshot));
      sentence_practice_loopLoopScheduler.add(practice_sentence_displayRoutineBegin(snapshot));
      sentence_practice_loopLoopScheduler.add(practice_sentence_displayRoutineEachFrame());
      sentence_practice_loopLoopScheduler.add(practice_sentence_displayRoutineEnd(snapshot));
      sentence_practice_loopLoopScheduler.add(sentence_practice_responseRoutineBegin(snapshot));
      sentence_practice_loopLoopScheduler.add(sentence_practice_responseRoutineEachFrame());
      sentence_practice_loopLoopScheduler.add(sentence_practice_responseRoutineEnd(snapshot));
      sentence_practice_loopLoopScheduler.add(sentence_practice_loopLoopEndIteration(sentence_practice_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function sentence_practice_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(sentence_practice_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function sentence_practice_loopLoopEndIteration(scheduler, snapshot) {
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


var jp_or_main_loop;
function jp_or_main_loopLoopBegin(jp_or_main_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    jp_or_main_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'jp_or_main_loop'
    });
    psychoJS.experiment.addLoop(jp_or_main_loop); // add the loop to the experiment
    currentLoop = jp_or_main_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    jp_or_main_loop.forEach(function() {
      snapshot = jp_or_main_loop.getSnapshot();
    
      jp_or_main_loopLoopScheduler.add(importConditions(snapshot));
      jp_or_main_loopLoopScheduler.add(pre_big_loop_initRoutineBegin(snapshot));
      jp_or_main_loopLoopScheduler.add(pre_big_loop_initRoutineEachFrame());
      jp_or_main_loopLoopScheduler.add(pre_big_loop_initRoutineEnd(snapshot));
      const sent_loader_loopLoopScheduler = new Scheduler(psychoJS);
      jp_or_main_loopLoopScheduler.add(sent_loader_loopLoopBegin(sent_loader_loopLoopScheduler, snapshot));
      jp_or_main_loopLoopScheduler.add(sent_loader_loopLoopScheduler);
      jp_or_main_loopLoopScheduler.add(sent_loader_loopLoopEnd);
      const letters_loader_loopLoopScheduler = new Scheduler(psychoJS);
      jp_or_main_loopLoopScheduler.add(letters_loader_loopLoopBegin(letters_loader_loopLoopScheduler, snapshot));
      jp_or_main_loopLoopScheduler.add(letters_loader_loopLoopScheduler);
      jp_or_main_loopLoopScheduler.add(letters_loader_loopLoopEnd);
      jp_or_main_loopLoopScheduler.add(main_test_instr1RoutineBegin(snapshot));
      jp_or_main_loopLoopScheduler.add(main_test_instr1RoutineEachFrame());
      jp_or_main_loopLoopScheduler.add(main_test_instr1RoutineEnd(snapshot));
      const big_loopLoopScheduler = new Scheduler(psychoJS);
      jp_or_main_loopLoopScheduler.add(big_loopLoopBegin(big_loopLoopScheduler, snapshot));
      jp_or_main_loopLoopScheduler.add(big_loopLoopScheduler);
      jp_or_main_loopLoopScheduler.add(big_loopLoopEnd);
      jp_or_main_loopLoopScheduler.add(jp_or_main_loopLoopEndIteration(jp_or_main_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var sent_loader_loop;
function sent_loader_loopLoopBegin(sent_loader_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    sent_loader_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: sentence_file,
      seed: undefined, name: 'sent_loader_loop'
    });
    psychoJS.experiment.addLoop(sent_loader_loop); // add the loop to the experiment
    currentLoop = sent_loader_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    sent_loader_loop.forEach(function() {
      snapshot = sent_loader_loop.getSnapshot();
    
      sent_loader_loopLoopScheduler.add(importConditions(snapshot));
      sent_loader_loopLoopScheduler.add(sent_loaderRoutineBegin(snapshot));
      sent_loader_loopLoopScheduler.add(sent_loaderRoutineEachFrame());
      sent_loader_loopLoopScheduler.add(sent_loaderRoutineEnd(snapshot));
      sent_loader_loopLoopScheduler.add(sent_loader_loopLoopEndIteration(sent_loader_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function sent_loader_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(sent_loader_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function sent_loader_loopLoopEndIteration(scheduler, snapshot) {
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


var letters_loader_loop;
function letters_loader_loopLoopBegin(letters_loader_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    letters_loader_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: LOOP_SIZE, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_letters/letters.csv',
      seed: undefined, name: 'letters_loader_loop'
    });
    psychoJS.experiment.addLoop(letters_loader_loop); // add the loop to the experiment
    currentLoop = letters_loader_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    letters_loader_loop.forEach(function() {
      snapshot = letters_loader_loop.getSnapshot();
    
      letters_loader_loopLoopScheduler.add(importConditions(snapshot));
      letters_loader_loopLoopScheduler.add(letters_loaderRoutineBegin(snapshot));
      letters_loader_loopLoopScheduler.add(letters_loaderRoutineEachFrame());
      letters_loader_loopLoopScheduler.add(letters_loaderRoutineEnd(snapshot));
      letters_loader_loopLoopScheduler.add(letters_loader_loopLoopEndIteration(letters_loader_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function letters_loader_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(letters_loader_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function letters_loader_loopLoopEndIteration(scheduler, snapshot) {
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


var big_loop;
function big_loopLoopBegin(big_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    big_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: BIG_LOOP_REPS, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'big_loop'
    });
    psychoJS.experiment.addLoop(big_loop); // add the loop to the experiment
    currentLoop = big_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    big_loop.forEach(function() {
      snapshot = big_loop.getSnapshot();
    
      big_loopLoopScheduler.add(importConditions(snapshot));
      big_loopLoopScheduler.add(big_loop_initRoutineBegin(snapshot));
      big_loopLoopScheduler.add(big_loop_initRoutineEachFrame());
      big_loopLoopScheduler.add(big_loop_initRoutineEnd(snapshot));
      big_loopLoopScheduler.add(pre_loop_initRoutineBegin(snapshot));
      big_loopLoopScheduler.add(pre_loop_initRoutineEachFrame());
      big_loopLoopScheduler.add(pre_loop_initRoutineEnd(snapshot));
      const small_loopLoopScheduler = new Scheduler(psychoJS);
      big_loopLoopScheduler.add(small_loopLoopBegin(small_loopLoopScheduler, snapshot));
      big_loopLoopScheduler.add(small_loopLoopScheduler);
      big_loopLoopScheduler.add(small_loopLoopEnd);
      big_loopLoopScheduler.add(process_scoresRoutineBegin(snapshot));
      big_loopLoopScheduler.add(process_scoresRoutineEachFrame());
      big_loopLoopScheduler.add(process_scoresRoutineEnd(snapshot));
      big_loopLoopScheduler.add(big_loopLoopEndIteration(big_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var small_loop;
function small_loopLoopBegin(small_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    small_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: LOOP_SIZE, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'small_loop'
    });
    psychoJS.experiment.addLoop(small_loop); // add the loop to the experiment
    currentLoop = small_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    small_loop.forEach(function() {
      snapshot = small_loop.getSnapshot();
    
      small_loopLoopScheduler.add(importConditions(snapshot));
      small_loopLoopScheduler.add(loop_initRoutineBegin(snapshot));
      small_loopLoopScheduler.add(loop_initRoutineEachFrame());
      small_loopLoopScheduler.add(loop_initRoutineEnd(snapshot));
      const sentences_letters_setLoopScheduler = new Scheduler(psychoJS);
      small_loopLoopScheduler.add(sentences_letters_setLoopBegin(sentences_letters_setLoopScheduler, snapshot));
      small_loopLoopScheduler.add(sentences_letters_setLoopScheduler);
      small_loopLoopScheduler.add(sentences_letters_setLoopEnd);
      small_loopLoopScheduler.add(recall_lettersRoutineBegin(snapshot));
      small_loopLoopScheduler.add(recall_lettersRoutineEachFrame());
      small_loopLoopScheduler.add(recall_lettersRoutineEnd(snapshot));
      small_loopLoopScheduler.add(feedback_displayRoutineBegin(snapshot));
      small_loopLoopScheduler.add(feedback_displayRoutineEachFrame());
      small_loopLoopScheduler.add(feedback_displayRoutineEnd(snapshot));
      small_loopLoopScheduler.add(small_loopLoopEndIteration(small_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var sentences_letters_set;
function sentences_letters_setLoopBegin(sentences_letters_setLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    sentences_letters_set = new TrialHandler({
      psychoJS: psychoJS,
      nReps: SET_SIZE, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'sentences_letters_set'
    });
    psychoJS.experiment.addLoop(sentences_letters_set); // add the loop to the experiment
    currentLoop = sentences_letters_set;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    sentences_letters_set.forEach(function() {
      snapshot = sentences_letters_set.getSnapshot();
    
      sentences_letters_setLoopScheduler.add(importConditions(snapshot));
      sentences_letters_setLoopScheduler.add(set_initRoutineBegin(snapshot));
      sentences_letters_setLoopScheduler.add(set_initRoutineEachFrame());
      sentences_letters_setLoopScheduler.add(set_initRoutineEnd(snapshot));
      sentences_letters_setLoopScheduler.add(sentence_displayRoutineBegin(snapshot));
      sentences_letters_setLoopScheduler.add(sentence_displayRoutineEachFrame());
      sentences_letters_setLoopScheduler.add(sentence_displayRoutineEnd(snapshot));
      sentences_letters_setLoopScheduler.add(respond_to_sentenceRoutineBegin(snapshot));
      sentences_letters_setLoopScheduler.add(respond_to_sentenceRoutineEachFrame());
      sentences_letters_setLoopScheduler.add(respond_to_sentenceRoutineEnd(snapshot));
      sentences_letters_setLoopScheduler.add(letter_displayRoutineBegin(snapshot));
      sentences_letters_setLoopScheduler.add(letter_displayRoutineEachFrame());
      sentences_letters_setLoopScheduler.add(letter_displayRoutineEnd(snapshot));
      sentences_letters_setLoopScheduler.add(sentences_letters_setLoopEndIteration(sentences_letters_setLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function sentences_letters_setLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(sentences_letters_set);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function sentences_letters_setLoopEndIteration(scheduler, snapshot) {
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


async function small_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(small_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function small_loopLoopEndIteration(scheduler, snapshot) {
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


async function big_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(big_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function big_loopLoopEndIteration(scheduler, snapshot) {
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


async function jp_or_main_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(jp_or_main_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function jp_or_main_loopLoopEndIteration(scheduler, snapshot) {
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


var _pj;
var rows;
var random_int;
var letter_practice_initComponents;
function letter_practice_initRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter_practice_init' ---
    t = 0;
    letter_practice_initClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from init
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    perfect_scores.push(no_of_letters);
    rows = [];
    random_int = 0;
    while (true) {
        random_int = util.randint(0, 12);
        if (_pj.in_es6(random_int, rows)) {
            continue;
        }
        rows.push(random_int);
        if ((rows.length === no_of_letters)) {
            break;
        } else {
            if ((rows.length > no_of_letters)) {
                throw Exception;
            }
        }
    }
    
    // keep track of which components have finished
    letter_practice_initComponents = [];
    
    letter_practice_initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function letter_practice_initRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter_practice_init' ---
    // get current time
    t = letter_practice_initClock.getTime();
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
    letter_practice_initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letter_practice_initRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter_practice_init' ---
    letter_practice_initComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "letter_practice_init" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_letter_display_2Components;
function practice_letter_display_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_letter_display_2' ---
    t = 0;
    practice_letter_display_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_24
    document.body.style.cursor='none';
    display_letter_jp.setText(letter);
    // keep track of which components have finished
    practice_letter_display_2Components = [];
    practice_letter_display_2Components.push(display_letter_jp);
    
    practice_letter_display_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function practice_letter_display_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_letter_display_2' ---
    // get current time
    t = practice_letter_display_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *display_letter_jp* updates
    if (t >= 0 && display_letter_jp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      display_letter_jp.tStart = t;  // (not accounting for frame time here)
      display_letter_jp.frameNStart = frameN;  // exact frame index
      
      display_letter_jp.setAutoDraw(true);
    }

    frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (display_letter_jp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      display_letter_jp.setAutoDraw(false);
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
    practice_letter_display_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_letter_display_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_letter_display_2' ---
    practice_letter_display_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var LEFT_CLICK;
var BLANK_LETTER;
var LETTERS;
var mouse_clicked;
var letter_clicked;
var letters_clicked;
var expected_letters;
var gotValidClick;
var practice_letters_responseComponents;
function practice_letters_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_letters_response' ---
    t = 0;
    practice_letters_responseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    document.body.style.cursor='auto';
    
    LEFT_CLICK = 0;
    BLANK_LETTER = "_";
    LETTERS = [prac_letter_S, prac_letter_P, prac_letter_K, prac_letter_F, prac_letter_T, prac_letter_Q, prac_letter_L, prac_letter_H, prac_letter_Y, prac_letter_R, prac_letter_N, prac_letter_J];
    mouse_clicked = true;
    letter_clicked = null;
    letters_clicked = [];
    display_letters_clicked.text = "";
    expected_letters = [];
    for (var item, _pj_c = 0, _pj_a = practice_letters_loop.trialList, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        item = _pj_a[_pj_c];
        console.log(item);
    }
    for (var item, _pj_c = 0, _pj_a = practice_letters_loop.trialList, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        item = _pj_a[_pj_c];
        expected_letters.push(item["letter"]);
    }
    
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    practice_letters_responseComponents = [];
    practice_letters_responseComponents.push(mouse);
    practice_letters_responseComponents.push(remind_text);
    practice_letters_responseComponents.push(prac_letter_S);
    practice_letters_responseComponents.push(prac_letter_P);
    practice_letters_responseComponents.push(prac_letter_K);
    practice_letters_responseComponents.push(prac_letter_F);
    practice_letters_responseComponents.push(prac_letter_T);
    practice_letters_responseComponents.push(prac_letter_Q);
    practice_letters_responseComponents.push(prac_letter_L);
    practice_letters_responseComponents.push(prac_letter_H);
    practice_letters_responseComponents.push(prac_letter_Y);
    practice_letters_responseComponents.push(prac_letter_R);
    practice_letters_responseComponents.push(prac_letter_N);
    practice_letters_responseComponents.push(prac_letter_J);
    practice_letters_responseComponents.push(blank_letter_BG);
    practice_letters_responseComponents.push(clear_letters_BG);
    practice_letters_responseComponents.push(next_practice_BG);
    practice_letters_responseComponents.push(blank_letter);
    practice_letters_responseComponents.push(display_letters_clicked);
    practice_letters_responseComponents.push(clear_letters);
    practice_letters_responseComponents.push(next_practice);
    
    practice_letters_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_letters_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_letters_response' ---
    // get current time
    t = practice_letters_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (((! mouse_clicked) && _pj.in_es6(1, mouse.getPressed()))) {
        mouse_clicked = true;
        for (var _letter, _pj_c = 0, _pj_a = LETTERS, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            _letter = _pj_a[_pj_c];
            if (mouse.isPressedIn(_letter, {"buttons": [LEFT_CLICK]})) {
                letters_clicked.push(_letter.text);
            }
        }
        if (mouse.isPressedIn(blank_letter, {"buttons": [LEFT_CLICK]})) {
            letters_clicked.push(BLANK_LETTER);
        }
        if (mouse.isPressedIn(clear_letters, {"buttons": [LEFT_CLICK]})) {
            letters_clicked = [];
        }
        if (mouse.isPressedIn(next_practice, {"buttons": [LEFT_CLICK]})) {
            continueRoutine = false;
        }
        display_letters_clicked.text = letters_clicked.toString();
    } else {
        if ((! _pj.in_es6(1, mouse.getPressed()))) {
            mouse_clicked = false;
        }
    }
    
    
    // *remind_text* updates
    if (t >= 0.0 && remind_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      remind_text.tStart = t;  // (not accounting for frame time here)
      remind_text.frameNStart = frameN;  // exact frame index
      
      remind_text.setAutoDraw(true);
    }

    
    // *prac_letter_S* updates
    if (t >= 0.0 && prac_letter_S.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_letter_S.tStart = t;  // (not accounting for frame time here)
      prac_letter_S.frameNStart = frameN;  // exact frame index
      
      prac_letter_S.setAutoDraw(true);
    }

    
    // *prac_letter_P* updates
    if (t >= 0.0 && prac_letter_P.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_letter_P.tStart = t;  // (not accounting for frame time here)
      prac_letter_P.frameNStart = frameN;  // exact frame index
      
      prac_letter_P.setAutoDraw(true);
    }

    
    // *prac_letter_K* updates
    if (t >= 0.0 && prac_letter_K.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_letter_K.tStart = t;  // (not accounting for frame time here)
      prac_letter_K.frameNStart = frameN;  // exact frame index
      
      prac_letter_K.setAutoDraw(true);
    }

    
    // *prac_letter_F* updates
    if (t >= 0.0 && prac_letter_F.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_letter_F.tStart = t;  // (not accounting for frame time here)
      prac_letter_F.frameNStart = frameN;  // exact frame index
      
      prac_letter_F.setAutoDraw(true);
    }

    
    // *prac_letter_T* updates
    if (t >= 0.0 && prac_letter_T.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_letter_T.tStart = t;  // (not accounting for frame time here)
      prac_letter_T.frameNStart = frameN;  // exact frame index
      
      prac_letter_T.setAutoDraw(true);
    }

    
    // *prac_letter_Q* updates
    if (t >= 0.0 && prac_letter_Q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_letter_Q.tStart = t;  // (not accounting for frame time here)
      prac_letter_Q.frameNStart = frameN;  // exact frame index
      
      prac_letter_Q.setAutoDraw(true);
    }

    
    // *prac_letter_L* updates
    if (t >= 0.0 && prac_letter_L.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_letter_L.tStart = t;  // (not accounting for frame time here)
      prac_letter_L.frameNStart = frameN;  // exact frame index
      
      prac_letter_L.setAutoDraw(true);
    }

    
    // *prac_letter_H* updates
    if (t >= 0.0 && prac_letter_H.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_letter_H.tStart = t;  // (not accounting for frame time here)
      prac_letter_H.frameNStart = frameN;  // exact frame index
      
      prac_letter_H.setAutoDraw(true);
    }

    
    // *prac_letter_Y* updates
    if (t >= 0.0 && prac_letter_Y.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_letter_Y.tStart = t;  // (not accounting for frame time here)
      prac_letter_Y.frameNStart = frameN;  // exact frame index
      
      prac_letter_Y.setAutoDraw(true);
    }

    
    // *prac_letter_R* updates
    if (t >= 0.0 && prac_letter_R.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_letter_R.tStart = t;  // (not accounting for frame time here)
      prac_letter_R.frameNStart = frameN;  // exact frame index
      
      prac_letter_R.setAutoDraw(true);
    }

    
    // *prac_letter_N* updates
    if (t >= 0.0 && prac_letter_N.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_letter_N.tStart = t;  // (not accounting for frame time here)
      prac_letter_N.frameNStart = frameN;  // exact frame index
      
      prac_letter_N.setAutoDraw(true);
    }

    
    // *prac_letter_J* updates
    if (t >= 0.0 && prac_letter_J.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_letter_J.tStart = t;  // (not accounting for frame time here)
      prac_letter_J.frameNStart = frameN;  // exact frame index
      
      prac_letter_J.setAutoDraw(true);
    }

    
    // *blank_letter_BG* updates
    if (t >= 0.0 && blank_letter_BG.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_letter_BG.tStart = t;  // (not accounting for frame time here)
      blank_letter_BG.frameNStart = frameN;  // exact frame index
      
      blank_letter_BG.setAutoDraw(true);
    }

    
    // *clear_letters_BG* updates
    if (t >= 0.0 && clear_letters_BG.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clear_letters_BG.tStart = t;  // (not accounting for frame time here)
      clear_letters_BG.frameNStart = frameN;  // exact frame index
      
      clear_letters_BG.setAutoDraw(true);
    }

    
    // *next_practice_BG* updates
    if (t >= 0.0 && next_practice_BG.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_practice_BG.tStart = t;  // (not accounting for frame time here)
      next_practice_BG.frameNStart = frameN;  // exact frame index
      
      next_practice_BG.setAutoDraw(true);
    }

    
    // *blank_letter* updates
    if (t >= 0.0 && blank_letter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_letter.tStart = t;  // (not accounting for frame time here)
      blank_letter.frameNStart = frameN;  // exact frame index
      
      blank_letter.setAutoDraw(true);
    }

    
    // *display_letters_clicked* updates
    if (t >= 0.0 && display_letters_clicked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      display_letters_clicked.tStart = t;  // (not accounting for frame time here)
      display_letters_clicked.frameNStart = frameN;  // exact frame index
      
      display_letters_clicked.setAutoDraw(true);
    }

    
    // *clear_letters* updates
    if (t >= 0.0 && clear_letters.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clear_letters.tStart = t;  // (not accounting for frame time here)
      clear_letters.frameNStart = frameN;  // exact frame index
      
      clear_letters.setAutoDraw(true);
    }

    
    // *next_practice* updates
    if (t >= 0.0 && next_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_practice.tStart = t;  // (not accounting for frame time here)
      next_practice.frameNStart = frameN;  // exact frame index
      
      next_practice.setAutoDraw(true);
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
    practice_letters_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var no_of_expected_letters;
var no_of_letters_clicked;
var no_of_correct;
var score;
function practice_letters_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_letters_response' ---
    practice_letters_responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code
    console.log(`
    expected_letters: ${expected_letters}
    letters_clicked: ${letters_clicked}`
    );
    no_of_expected_letters = expected_letters.length;
    no_of_letters_clicked = letters_clicked.length;
    no_of_correct = 0;
    score = 0;
    for (var idx, _pj_c = 0, _pj_a = util.range(no_of_expected_letters), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        idx = _pj_a[_pj_c];
        if (((idx + 1) > no_of_letters_clicked)) {
            break;
        }
        if ((expected_letters[idx] === letters_clicked[idx])) {
            no_of_correct += 1;
        }
    }
    if ((letters_clicked.toString() === expected_letters.toString())) {
        score = no_of_expected_letters;
    }
    console.log(`
    no_of_correct: ${no_of_correct}
    score: ${score}`
    );
    trial_scores.push(score);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "practice_letters_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var check_scoreComponents;
function check_scoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'check_score' ---
    t = 0;
    check_scoreClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    check_scoreComponents = [];
    
    check_scoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function check_scoreRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'check_score' ---
    // get current time
    t = check_scoreClock.getTime();
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
    check_scoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function check_scoreRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'check_score' ---
    check_scoreComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_2
    console.log(`
    perfect_scores: ${perfect_scores}
    trial_scores: ${trial_scores}`
    );
    
    // the Routine "check_score" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _sent_instr_space_allKeys;
var sent_prac_instr1Components;
function sent_prac_instr1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sent_prac_instr1' ---
    t = 0;
    sent_prac_instr1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sent_instr_space.keys = undefined;
    sent_instr_space.rt = undefined;
    _sent_instr_space_allKeys = [];
    // keep track of which components have finished
    sent_prac_instr1Components = [];
    sent_prac_instr1Components.push(sent_prac_title);
    sent_prac_instr1Components.push(sent_instru_1);
    sent_prac_instr1Components.push(space_text_3);
    sent_prac_instr1Components.push(sent_instr_space);
    
    sent_prac_instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function sent_prac_instr1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sent_prac_instr1' ---
    // get current time
    t = sent_prac_instr1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sent_prac_title* updates
    if (t >= 0.0 && sent_prac_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sent_prac_title.tStart = t;  // (not accounting for frame time here)
      sent_prac_title.frameNStart = frameN;  // exact frame index
      
      sent_prac_title.setAutoDraw(true);
    }

    
    // *sent_instru_1* updates
    if (t >= 0.0 && sent_instru_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sent_instru_1.tStart = t;  // (not accounting for frame time here)
      sent_instru_1.frameNStart = frameN;  // exact frame index
      
      sent_instru_1.setAutoDraw(true);
    }

    
    // *space_text_3* updates
    if (t >= 0.0 && space_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_text_3.tStart = t;  // (not accounting for frame time here)
      space_text_3.frameNStart = frameN;  // exact frame index
      
      space_text_3.setAutoDraw(true);
    }

    
    // *sent_instr_space* updates
    if (t >= 1.0 && sent_instr_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sent_instr_space.tStart = t;  // (not accounting for frame time here)
      sent_instr_space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      sent_instr_space.clock.reset();
      sent_instr_space.start();
    }

    if (sent_instr_space.status === PsychoJS.Status.STARTED) {
      let theseKeys = sent_instr_space.getKeys({keyList: ['space'], waitRelease: false});
      _sent_instr_space_allKeys = _sent_instr_space_allKeys.concat(theseKeys);
      if (_sent_instr_space_allKeys.length > 0) {
        sent_instr_space.keys = _sent_instr_space_allKeys[_sent_instr_space_allKeys.length - 1].name;  // just the last key pressed
        sent_instr_space.rt = _sent_instr_space_allKeys[_sent_instr_space_allKeys.length - 1].rt;
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
    sent_prac_instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sent_prac_instr1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sent_prac_instr1' ---
    sent_prac_instr1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sent_instr_space.stop();
    // the Routine "sent_prac_instr1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var no_of_practice_sentences;
var no_of_correct_responses;
var avg_read_duration;
var total_read_duration;
var init_sentence_practiceComponents;
function init_sentence_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'init_sentence_practice' ---
    t = 0;
    init_sentence_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    no_of_practice_sentences = 0;
    no_of_correct_responses = 0;
    avg_read_duration = 0;
    total_read_duration = 0;
    
    // keep track of which components have finished
    init_sentence_practiceComponents = [];
    
    init_sentence_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function init_sentence_practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'init_sentence_practice' ---
    // get current time
    t = init_sentence_practiceClock.getTime();
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
    init_sentence_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function init_sentence_practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'init_sentence_practice' ---
    init_sentence_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "init_sentence_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var timer;
var practice_sentence_displayComponents;
function practice_sentence_displayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_sentence_display' ---
    t = 0;
    practice_sentence_displayClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    timer = new util.Clock();
    
    sentence_text.setText(sentence);
    // setup some python lists for storing info about the sent_resp
    // current position of the mouse:
    sent_resp.x = [];
    sent_resp.y = [];
    sent_resp.leftButton = [];
    sent_resp.midButton = [];
    sent_resp.rightButton = [];
    sent_resp.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    practice_sentence_displayComponents = [];
    practice_sentence_displayComponents.push(sentence_text);
    practice_sentence_displayComponents.push(sentence_help_text);
    practice_sentence_displayComponents.push(sent_resp);
    
    practice_sentence_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function practice_sentence_displayRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_sentence_display' ---
    // get current time
    t = practice_sentence_displayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sentence_text* updates
    if (t >= 0.0 && sentence_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sentence_text.tStart = t;  // (not accounting for frame time here)
      sentence_text.frameNStart = frameN;  // exact frame index
      
      sentence_text.setAutoDraw(true);
    }

    
    // *sentence_help_text* updates
    if (t >= 0.0 && sentence_help_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sentence_help_text.tStart = t;  // (not accounting for frame time here)
      sentence_help_text.frameNStart = frameN;  // exact frame index
      
      sentence_help_text.setAutoDraw(true);
    }

    // *sent_resp* updates
    if (t >= 0.0 && sent_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sent_resp.tStart = t;  // (not accounting for frame time here)
      sent_resp.frameNStart = frameN;  // exact frame index
      
      sent_resp.status = PsychoJS.Status.STARTED;
      sent_resp.mouseClock.reset();
      prevButtonState = sent_resp.getPressed();  // if button is down already this ISN'T a new click
      }
    if (sent_resp.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = sent_resp.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = sent_resp.getPos();
          sent_resp.x.push(_mouseXYs[0]);
          sent_resp.y.push(_mouseXYs[1]);
          sent_resp.leftButton.push(_mouseButtons[0]);
          sent_resp.midButton.push(_mouseButtons[1]);
          sent_resp.rightButton.push(_mouseButtons[2]);
          sent_resp.time.push(sent_resp.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
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
    practice_sentence_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var seconds_to_read;
function practice_sentence_displayRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_sentence_display' ---
    practice_sentence_displayComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_6
    seconds_to_read = timer.getTime();
    total_read_duration += seconds_to_read
    // store data for psychoJS.experiment (ExperimentHandler)
    if (sent_resp.x) {  psychoJS.experiment.addData('sent_resp.x', sent_resp.x[0])};
    if (sent_resp.y) {  psychoJS.experiment.addData('sent_resp.y', sent_resp.y[0])};
    if (sent_resp.leftButton) {  psychoJS.experiment.addData('sent_resp.leftButton', sent_resp.leftButton[0])};
    if (sent_resp.midButton) {  psychoJS.experiment.addData('sent_resp.midButton', sent_resp.midButton[0])};
    if (sent_resp.rightButton) {  psychoJS.experiment.addData('sent_resp.rightButton', sent_resp.rightButton[0])};
    if (sent_resp.time) {  psychoJS.experiment.addData('sent_resp.time', sent_resp.time[0])};
    
    // the Routine "practice_sentence_display" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var show_result;
var ANSWER_BOXES;
var sentence_practice_responseComponents;
function sentence_practice_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sentence_practice_response' ---
    t = 0;
    sentence_practice_responseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    no_of_practice_sentences += 1;
    mouse_clicked = true;
    result_text.text = "";
    show_result = false;
    ANSWER_BOXES = [prac_TRUE, prac_FALSE];
    
    // setup some python lists for storing info about the answer_click
    // current position of the mouse:
    answer_click.x = [];
    answer_click.y = [];
    answer_click.leftButton = [];
    answer_click.midButton = [];
    answer_click.rightButton = [];
    answer_click.time = [];
    answer_click.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    sentence_practice_responseComponents = [];
    sentence_practice_responseComponents.push(answer_click);
    sentence_practice_responseComponents.push(answer_help_text);
    sentence_practice_responseComponents.push(prac_TRUE_BG);
    sentence_practice_responseComponents.push(prac_FALSE_BG);
    sentence_practice_responseComponents.push(prac_TRUE);
    sentence_practice_responseComponents.push(prac_FALSE);
    sentence_practice_responseComponents.push(result_text);
    
    sentence_practice_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function sentence_practice_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sentence_practice_response' ---
    // get current time
    t = sentence_practice_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_3
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((((! mouse_clicked) && _pj.in_es6(1, answer_click.getPressed())) && (! show_result))) {
        mouse_clicked = true;
        for (var answer_box, _pj_c = 0, _pj_a = ANSWER_BOXES, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            answer_box = _pj_a[_pj_c];
            if (answer_click.isPressedIn(answer_box, {"buttons": [LEFT_CLICK]})) {
                if ((((answer_box.text === "TRUE") && answer) || ((answer_box.text === "FALSE") && (! answer)))) {
                    result_text.text = "Correct";
                    no_of_correct_responses += 1;
                } else {
                    result_text.text = "Incorrect";
                }
                show_result = true;
            }
        }
    } else {
        if ((! _pj.in_es6(1, answer_click.getPressed()))) {
            mouse_clicked = false;
        }
    }
    
    // *answer_click* updates
    if (t >= 0.0 && answer_click.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_click.tStart = t;  // (not accounting for frame time here)
      answer_click.frameNStart = frameN;  // exact frame index
      
      answer_click.status = PsychoJS.Status.STARTED;
      answer_click.mouseClock.reset();
      prevButtonState = answer_click.getPressed();  // if button is down already this ISN'T a new click
      }
    if (answer_click.status === PsychoJS.Status.STARTED && Boolean(show_result)) {
      answer_click.status = PsychoJS.Status.FINISHED;
  }
    if (answer_click.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = answer_click.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [prac_TRUE, prac_FALSE]) {
            if (obj.contains(answer_click)) {
              gotValidClick = true;
              answer_click.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = answer_click.getPos();
            answer_click.x.push(_mouseXYs[0]);
            answer_click.y.push(_mouseXYs[1]);
            answer_click.leftButton.push(_mouseButtons[0]);
            answer_click.midButton.push(_mouseButtons[1]);
            answer_click.rightButton.push(_mouseButtons[2]);
            answer_click.time.push(answer_click.mouseClock.getTime());
          }
        }
      }
    }
    
    // *answer_help_text* updates
    if (t >= 0.0 && answer_help_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_help_text.tStart = t;  // (not accounting for frame time here)
      answer_help_text.frameNStart = frameN;  // exact frame index
      
      answer_help_text.setAutoDraw(true);
    }

    if (answer_help_text.status === PsychoJS.Status.STARTED && Boolean(show_result)) {
      answer_help_text.setAutoDraw(false);
    }
    
    // *prac_TRUE_BG* updates
    if (t >= 0.0 && prac_TRUE_BG.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_TRUE_BG.tStart = t;  // (not accounting for frame time here)
      prac_TRUE_BG.frameNStart = frameN;  // exact frame index
      
      prac_TRUE_BG.setAutoDraw(true);
    }

    if (prac_TRUE_BG.status === PsychoJS.Status.STARTED && Boolean(show_result)) {
      prac_TRUE_BG.setAutoDraw(false);
    }
    
    // *prac_FALSE_BG* updates
    if (t >= 0.0 && prac_FALSE_BG.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_FALSE_BG.tStart = t;  // (not accounting for frame time here)
      prac_FALSE_BG.frameNStart = frameN;  // exact frame index
      
      prac_FALSE_BG.setAutoDraw(true);
    }

    if (prac_FALSE_BG.status === PsychoJS.Status.STARTED && Boolean(show_result)) {
      prac_FALSE_BG.setAutoDraw(false);
    }
    
    // *prac_TRUE* updates
    if (t >= 0.0 && prac_TRUE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_TRUE.tStart = t;  // (not accounting for frame time here)
      prac_TRUE.frameNStart = frameN;  // exact frame index
      
      prac_TRUE.setAutoDraw(true);
    }

    if (prac_TRUE.status === PsychoJS.Status.STARTED && Boolean(show_result)) {
      prac_TRUE.setAutoDraw(false);
    }
    
    // *prac_FALSE* updates
    if (t >= 0.0 && prac_FALSE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_FALSE.tStart = t;  // (not accounting for frame time here)
      prac_FALSE.frameNStart = frameN;  // exact frame index
      
      prac_FALSE.setAutoDraw(true);
    }

    if (prac_FALSE.status === PsychoJS.Status.STARTED && Boolean(show_result)) {
      prac_FALSE.setAutoDraw(false);
    }
    
    // *result_text* updates
    if ((show_result) && result_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      result_text.tStart = t;  // (not accounting for frame time here)
      result_text.frameNStart = frameN;  // exact frame index
      
      result_text.setAutoDraw(true);
    }

    if (result_text.status === PsychoJS.Status.STARTED && t >= (result_text.tStart + 1.5)) {
      result_text.setAutoDraw(false);
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
    sentence_practice_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sentence_practice_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sentence_practice_response' ---
    sentence_practice_responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('answer_click.x', answer_click.x);
    psychoJS.experiment.addData('answer_click.y', answer_click.y);
    psychoJS.experiment.addData('answer_click.leftButton', answer_click.leftButton);
    psychoJS.experiment.addData('answer_click.midButton', answer_click.midButton);
    psychoJS.experiment.addData('answer_click.rightButton', answer_click.rightButton);
    psychoJS.experiment.addData('answer_click.time', answer_click.time);
    psychoJS.experiment.addData('answer_click.clicked_name', answer_click.clicked_name);
    
    // the Routine "sentence_practice_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var percent_correct;
var _proceed_space_allKeys;
var check_sent_prac_scoreComponents;
function check_sent_prac_scoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'check_sent_prac_score' ---
    t = 0;
    check_sent_prac_scoreClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    percent_correct = Number.parseInt(((no_of_correct_responses / no_of_practice_sentences) * 100));
    avg_read_duration = (total_read_duration / no_of_practice_sentences);
    console.log(`
    total_read_duration: ${total_read_duration}
    avg_read_duration: ${avg_read_duration}`
    );
    sentence_practice_final_result.text = `You were correct on ${no_of_correct_responses} of ${no_of_practice_sentences} trials.
    That is ${percent_correct} percent correct.`
    ;
    
    proceed_space.keys = undefined;
    proceed_space.rt = undefined;
    _proceed_space_allKeys = [];
    // keep track of which components have finished
    check_sent_prac_scoreComponents = [];
    check_sent_prac_scoreComponents.push(sentence_practice_final_result);
    check_sent_prac_scoreComponents.push(proceed_text);
    check_sent_prac_scoreComponents.push(proceed_space);
    
    check_sent_prac_scoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function check_sent_prac_scoreRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'check_sent_prac_score' ---
    // get current time
    t = check_sent_prac_scoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sentence_practice_final_result* updates
    if (t >= 0.0 && sentence_practice_final_result.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sentence_practice_final_result.tStart = t;  // (not accounting for frame time here)
      sentence_practice_final_result.frameNStart = frameN;  // exact frame index
      
      sentence_practice_final_result.setAutoDraw(true);
    }

    
    // *proceed_text* updates
    if (t >= 0 && proceed_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proceed_text.tStart = t;  // (not accounting for frame time here)
      proceed_text.frameNStart = frameN;  // exact frame index
      
      proceed_text.setAutoDraw(true);
    }

    
    // *proceed_space* updates
    if (t >= 1.0 && proceed_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proceed_space.tStart = t;  // (not accounting for frame time here)
      proceed_space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      proceed_space.clock.reset();
      proceed_space.start();
    }

    if (proceed_space.status === PsychoJS.Status.STARTED) {
      let theseKeys = proceed_space.getKeys({keyList: ['space'], waitRelease: false});
      _proceed_space_allKeys = _proceed_space_allKeys.concat(theseKeys);
      if (_proceed_space_allKeys.length > 0) {
        proceed_space.keys = _proceed_space_allKeys[_proceed_space_allKeys.length - 1].name;  // just the last key pressed
        proceed_space.rt = _proceed_space_allKeys[_proceed_space_allKeys.length - 1].rt;
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
    check_sent_prac_scoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function check_sent_prac_scoreRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'check_sent_prac_score' ---
    check_sent_prac_scoreComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_5
    /* Syntax Error: Fix Python code */
    proceed_space.stop();
    // the Routine "check_sent_prac_score" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _joint_instr_space_allKeys;
var joint_prac_instr1Components;
function joint_prac_instr1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'joint_prac_instr1' ---
    t = 0;
    joint_prac_instr1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    joint_instr_space.keys = undefined;
    joint_instr_space.rt = undefined;
    _joint_instr_space_allKeys = [];
    // keep track of which components have finished
    joint_prac_instr1Components = [];
    joint_prac_instr1Components.push(joint_prac_title);
    joint_prac_instr1Components.push(joint_instr_1);
    joint_prac_instr1Components.push(space_text_4);
    joint_prac_instr1Components.push(joint_instr_space);
    
    joint_prac_instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function joint_prac_instr1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'joint_prac_instr1' ---
    // get current time
    t = joint_prac_instr1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *joint_prac_title* updates
    if (t >= 0.0 && joint_prac_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      joint_prac_title.tStart = t;  // (not accounting for frame time here)
      joint_prac_title.frameNStart = frameN;  // exact frame index
      
      joint_prac_title.setAutoDraw(true);
    }

    
    // *joint_instr_1* updates
    if (t >= 0.0 && joint_instr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      joint_instr_1.tStart = t;  // (not accounting for frame time here)
      joint_instr_1.frameNStart = frameN;  // exact frame index
      
      joint_instr_1.setAutoDraw(true);
    }

    
    // *space_text_4* updates
    if (t >= 0.0 && space_text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_text_4.tStart = t;  // (not accounting for frame time here)
      space_text_4.frameNStart = frameN;  // exact frame index
      
      space_text_4.setAutoDraw(true);
    }

    
    // *joint_instr_space* updates
    if (t >= 1.0 && joint_instr_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      joint_instr_space.tStart = t;  // (not accounting for frame time here)
      joint_instr_space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      joint_instr_space.clock.reset();
      joint_instr_space.start();
    }

    if (joint_instr_space.status === PsychoJS.Status.STARTED) {
      let theseKeys = joint_instr_space.getKeys({keyList: ['space'], waitRelease: false});
      _joint_instr_space_allKeys = _joint_instr_space_allKeys.concat(theseKeys);
      if (_joint_instr_space_allKeys.length > 0) {
        joint_instr_space.keys = _joint_instr_space_allKeys[_joint_instr_space_allKeys.length - 1].name;  // just the last key pressed
        joint_instr_space.rt = _joint_instr_space_allKeys[_joint_instr_space_allKeys.length - 1].rt;
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
    joint_prac_instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function joint_prac_instr1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'joint_prac_instr1' ---
    joint_prac_instr1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    joint_instr_space.stop();
    // the Routine "joint_prac_instr1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _joint_instr_space_2_allKeys;
var joint_prac_instr2Components;
function joint_prac_instr2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'joint_prac_instr2' ---
    t = 0;
    joint_prac_instr2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    joint_instr_space_2.keys = undefined;
    joint_instr_space_2.rt = undefined;
    _joint_instr_space_2_allKeys = [];
    // keep track of which components have finished
    joint_prac_instr2Components = [];
    joint_prac_instr2Components.push(joint_prac_title_2);
    joint_prac_instr2Components.push(joint_instr_2);
    joint_prac_instr2Components.push(space_text_5);
    joint_prac_instr2Components.push(joint_instr_space_2);
    
    joint_prac_instr2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function joint_prac_instr2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'joint_prac_instr2' ---
    // get current time
    t = joint_prac_instr2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *joint_prac_title_2* updates
    if (t >= 0.0 && joint_prac_title_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      joint_prac_title_2.tStart = t;  // (not accounting for frame time here)
      joint_prac_title_2.frameNStart = frameN;  // exact frame index
      
      joint_prac_title_2.setAutoDraw(true);
    }

    
    // *joint_instr_2* updates
    if (t >= 0.0 && joint_instr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      joint_instr_2.tStart = t;  // (not accounting for frame time here)
      joint_instr_2.frameNStart = frameN;  // exact frame index
      
      joint_instr_2.setAutoDraw(true);
    }

    
    // *space_text_5* updates
    if (t >= 0.0 && space_text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_text_5.tStart = t;  // (not accounting for frame time here)
      space_text_5.frameNStart = frameN;  // exact frame index
      
      space_text_5.setAutoDraw(true);
    }

    
    // *joint_instr_space_2* updates
    if (t >= 1.0 && joint_instr_space_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      joint_instr_space_2.tStart = t;  // (not accounting for frame time here)
      joint_instr_space_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      joint_instr_space_2.clock.reset();
      joint_instr_space_2.start();
    }

    if (joint_instr_space_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = joint_instr_space_2.getKeys({keyList: ['space'], waitRelease: false});
      _joint_instr_space_2_allKeys = _joint_instr_space_2_allKeys.concat(theseKeys);
      if (_joint_instr_space_2_allKeys.length > 0) {
        joint_instr_space_2.keys = _joint_instr_space_2_allKeys[_joint_instr_space_2_allKeys.length - 1].name;  // just the last key pressed
        joint_instr_space_2.rt = _joint_instr_space_2_allKeys[_joint_instr_space_2_allKeys.length - 1].rt;
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
    joint_prac_instr2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function joint_prac_instr2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'joint_prac_instr2' ---
    joint_prac_instr2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    joint_instr_space_2.stop();
    // the Routine "joint_prac_instr2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BIG_LOOP_REPS;
var is_main_test;
var sentence_file;
var POSSIBLE_SET_SIZES;
var TOTAL_SETS;
var rspan_pcu;
var sentences;
var letters;
var pre_big_loop_initComponents;
function pre_big_loop_initRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre_big_loop_init' ---
    t = 0;
    pre_big_loop_initClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_20
    BIG_LOOP_REPS = 0;
    is_main_test = false;
    if ((jp_or_main_loop.thisRepN === 0)) {
        is_main_test = false;
        sentence_file = "practice_sentences/sentences.csv";
        BIG_LOOP_REPS = 100000;
        POSSIBLE_SET_SIZES = [2, 2, 2];
        accumulated_num_of_sentences = 0;
        accumulated_correct_sentences = 0;
    } else {
        if ((jp_or_main_loop.thisRepN === 1)) {
            is_main_test = true;
            sentence_file = "main_test/sentences.csv";
            BIG_LOOP_REPS = 2;
            POSSIBLE_SET_SIZES = [4, 5, 6];
            rspan_score = 0;
            sent_acc_error = 0;
            sent_speed_error = 0;
            sent_total_error = 0;
            accumulated_num_of_sentences = 0;
            accumulated_correct_sentences = 0;
        }
    }
    LOOP_SIZE = POSSIBLE_SET_SIZES.length;
    TOTAL_SETS = util.sum(POSSIBLE_SET_SIZES);
    rspan_pcu = 0;
    sentences = [];
    letters = [];
    
    // keep track of which components have finished
    pre_big_loop_initComponents = [];
    
    pre_big_loop_initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function pre_big_loop_initRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre_big_loop_init' ---
    // get current time
    t = pre_big_loop_initClock.getTime();
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
    pre_big_loop_initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pre_big_loop_initRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre_big_loop_init' ---
    pre_big_loop_initComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_20
    if ((jp_or_main_loop.thisRepN === 0)) {
        psychoJS.experiment.addData("avg_read_duration", avg_read_duration);
    }
    
    // the Routine "pre_big_loop_init" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sent_loaderComponents;
function sent_loaderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sent_loader' ---
    t = 0;
    sent_loaderClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    sent_loaderComponents = [];
    
    sent_loaderComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function sent_loaderRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sent_loader' ---
    // get current time
    t = sent_loaderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_9
    sentences.push([sentence, answer]);
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    sent_loaderComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sent_loaderRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sent_loader' ---
    sent_loaderComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "sent_loader" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letters_loaderComponents;
function letters_loaderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letters_loader' ---
    t = 0;
    letters_loaderClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    letters_loaderComponents = [];
    
    letters_loaderComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function letters_loaderRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letters_loader' ---
    // get current time
    t = letters_loaderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_12
    letters.push(letter);
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    letters_loaderComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letters_loaderRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letters_loader' ---
    letters_loaderComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "letters_loader" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _main_space_allKeys;
var main_test_instr1Components;
function main_test_instr1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_test_instr1' ---
    t = 0;
    main_test_instr1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_23
    if ((! is_main_test)) {
        continueRoutine = false;
    }
    
    main_space.keys = undefined;
    main_space.rt = undefined;
    _main_space_allKeys = [];
    // keep track of which components have finished
    main_test_instr1Components = [];
    main_test_instr1Components.push(main_title);
    main_test_instr1Components.push(main_instr_1);
    main_test_instr1Components.push(main_space_text);
    main_test_instr1Components.push(main_space);
    
    main_test_instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function main_test_instr1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_test_instr1' ---
    // get current time
    t = main_test_instr1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *main_title* updates
    if (t >= 0.0 && main_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_title.tStart = t;  // (not accounting for frame time here)
      main_title.frameNStart = frameN;  // exact frame index
      
      main_title.setAutoDraw(true);
    }

    
    // *main_instr_1* updates
    if (t >= 0.0 && main_instr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_instr_1.tStart = t;  // (not accounting for frame time here)
      main_instr_1.frameNStart = frameN;  // exact frame index
      
      main_instr_1.setAutoDraw(true);
    }

    
    // *main_space_text* updates
    if (t >= 0.0 && main_space_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_space_text.tStart = t;  // (not accounting for frame time here)
      main_space_text.frameNStart = frameN;  // exact frame index
      
      main_space_text.setAutoDraw(true);
    }

    
    // *main_space* updates
    if (t >= 1.0 && main_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_space.tStart = t;  // (not accounting for frame time here)
      main_space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      main_space.clock.reset();
      main_space.start();
    }

    if (main_space.status === PsychoJS.Status.STARTED) {
      let theseKeys = main_space.getKeys({keyList: ['space'], waitRelease: false});
      _main_space_allKeys = _main_space_allKeys.concat(theseKeys);
      if (_main_space_allKeys.length > 0) {
        main_space.keys = _main_space_allKeys[_main_space_allKeys.length - 1].name;  // just the last key pressed
        main_space.rt = _main_space_allKeys[_main_space_allKeys.length - 1].rt;
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
    main_test_instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_test_instr1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_test_instr1' ---
    main_test_instr1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    main_space.stop();
    // the Routine "main_test_instr1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var big_loop_initComponents;
function big_loop_initRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'big_loop_init' ---
    t = 0;
    big_loop_initClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_11
    console.log(`
    big_loop.thisRepN=${big_loop.thisRepN}`
    );
    if ((! is_main_test)) {
        sent_acc_error = 0;
        sent_speed_error = 0;
        sent_total_error = 0;
        accumulated_num_of_sentences = 0;
        accumulated_correct_sentences = 0;
    }
    SIZE_OF_SETS = util.shuffle(POSSIBLE_SET_SIZES);
    
    // keep track of which components have finished
    big_loop_initComponents = [];
    
    big_loop_initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function big_loop_initRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'big_loop_init' ---
    // get current time
    t = big_loop_initClock.getTime();
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
    big_loop_initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function big_loop_initRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'big_loop_init' ---
    big_loop_initComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "big_loop_init" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var curr_loop_sentences;
var curr_loop_letters;
var curr_loop_sentence_answers;
var sentence_responses;
var letter_responses;
var actual_letter_responses;
var pre_loop_initComponents;
function pre_loop_initRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre_loop_init' ---
    t = 0;
    pre_loop_initClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_17
    curr_loop_sentences = sentences.slice(0, TOTAL_SETS);
    sentences = sentences.slice(TOTAL_SETS);
    curr_loop_letters = letters.slice(0, TOTAL_SETS);
    letters = letters.slice(TOTAL_SETS);
    curr_loop_sentence_answers = function () {
        var _pj_a = [], _pj_b = curr_loop_sentences;
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var s = _pj_b[_pj_c];
            _pj_a.push(s[1]);
        }
        return _pj_a;
    }
    .call(this);
    sentence_responses = function () {
        var _pj_a = [], _pj_b = util.range(TOTAL_SETS);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var a = _pj_b[_pj_c];
            _pj_a.push(null);
        }
        return _pj_a;
    }
    .call(this);
    letter_responses = [];
    actual_letter_responses = [];
    
    // keep track of which components have finished
    pre_loop_initComponents = [];
    
    pre_loop_initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function pre_loop_initRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre_loop_init' ---
    // get current time
    t = pre_loop_initClock.getTime();
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
    pre_loop_initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pre_loop_initRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre_loop_init' ---
    pre_loop_initComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "pre_loop_init" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var loop_initComponents;
function loop_initRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'loop_init' ---
    t = 0;
    loop_initClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_22
    SET_SIZE = SIZE_OF_SETS[small_loop.thisRepN];
    console.log(`
    small_loop.thisRepN=${small_loop.thisRepN}
    SIZE_OF_SETS=${SIZE_OF_SETS}
    SET_SIZE=${SET_SIZE}`
    );
    
    // keep track of which components have finished
    loop_initComponents = [];
    
    loop_initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function loop_initRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'loop_init' ---
    // get current time
    t = loop_initClock.getTime();
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
    loop_initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function loop_initRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'loop_init' ---
    loop_initComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "loop_init" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var index_to_skip;
var current_index;
var curr_sentence;
var curr_sentence_answer;
var curr_letter;
var clicked_to_continue;
var set_initComponents;
function set_initRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'set_init' ---
    t = 0;
    set_initClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_15
    index_to_skip = 0;
    for (var i, _pj_c = 0, _pj_a = util.range(small_loop.thisRepN), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        index_to_skip += SIZE_OF_SETS[i];
    }
    current_index = (index_to_skip + sentences_letters_set.thisRepN);
    curr_sentence = curr_loop_sentences[current_index][0];
    curr_sentence_answer = curr_loop_sentences[current_index][1];
    curr_letter = curr_loop_letters[current_index];
    psychoJS.experiment.addData("sentence", curr_sentence);
    psychoJS.experiment.addData("sentence_answer", curr_sentence_answer);
    clicked_to_continue = false;
    console.log(`
    sentences_letters_set.thisRepN=${sentences_letters_set.thisRepN}
    current_index=${current_index}
    curr_sentence=${curr_sentence}
    curr_letter=${curr_letter}`
    );
    
    // keep track of which components have finished
    set_initComponents = [];
    
    set_initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function set_initRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'set_init' ---
    // get current time
    t = set_initClock.getTime();
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
    set_initComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function set_initRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'set_init' ---
    set_initComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "set_init" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sentence_displayComponents;
function sentence_displayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sentence_display' ---
    t = 0;
    sentence_displayClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_16
    LEFT_CLICK = 0;
    mouse_clicked = true;
    
    sentence_text_2.setText(curr_sentence);
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    sentence_displayComponents = [];
    sentence_displayComponents.push(sentence_text_2);
    sentence_displayComponents.push(sentence_help_text_3);
    sentence_displayComponents.push(mouse_2);
    
    sentence_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function sentence_displayRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sentence_display' ---
    // get current time
    t = sentence_displayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_16
    if (((! mouse_clicked) && mouse_2.getPressed()[LEFT_CLICK])) {
        mouse_clicked = true;
        clicked_to_continue = true;
        console.log("clicked to continue");
    } else {
        if ((! mouse_2.getPressed()[LEFT_CLICK])) {
            mouse_clicked = false;
        }
    }
    
    
    // *sentence_text_2* updates
    if (t >= 0.0 && sentence_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sentence_text_2.tStart = t;  // (not accounting for frame time here)
      sentence_text_2.frameNStart = frameN;  // exact frame index
      
      sentence_text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + avg_read_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sentence_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      sentence_text_2.setAutoDraw(false);
    }
    
    // *sentence_help_text_3* updates
    if (t >= 0.0 && sentence_help_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sentence_help_text_3.tStart = t;  // (not accounting for frame time here)
      sentence_help_text_3.frameNStart = frameN;  // exact frame index
      
      sentence_help_text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + avg_read_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sentence_help_text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      sentence_help_text_3.setAutoDraw(false);
    }
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + avg_read_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_2.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
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
    sentence_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sentence_displayRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sentence_display' ---
    sentence_displayComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "sentence_display" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var respond_to_sentenceComponents;
function respond_to_sentenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'respond_to_sentence' ---
    t = 0;
    respond_to_sentenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_14
    mouse_clicked = false;
    ANSWER_BOXES = [TRUE, FALSE];
    
    // setup some python lists for storing info about the answer_click_2
    answer_click_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    respond_to_sentenceComponents = [];
    respond_to_sentenceComponents.push(answer_click_2);
    respond_to_sentenceComponents.push(answer_help_text_2);
    respond_to_sentenceComponents.push(TRUE_BG);
    respond_to_sentenceComponents.push(FALSE_BG);
    respond_to_sentenceComponents.push(TRUE);
    respond_to_sentenceComponents.push(FALSE);
    
    respond_to_sentenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function respond_to_sentenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'respond_to_sentence' ---
    // get current time
    t = respond_to_sentenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_14
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! clicked_to_continue)) {
        continueRoutine = false;
        psychoJS.experiment.addData("sentence_response", "");
        console.log("Did not click, skipped");
    }
    if (((! mouse_clicked) && _pj.in_es6(1, answer_click_2.getPressed()))) {
        mouse_clicked = true;
        for (var answer_box, _pj_c = 0, _pj_a = ANSWER_BOXES, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            answer_box = _pj_a[_pj_c];
            if (answer_click.isPressedIn(answer_box, {"buttons": [LEFT_CLICK]})) {
                sentence_responses[current_index] = ((answer_box.text === "TRUE") ? true : false);
                psychoJS.experiment.addData("sentence_response", answer_box.text);
                console.log(`current_index=${current_index}`);
                console.log(`sentence_reponses=${sentence_responses}`);
                console.log(`sentence response ${answer_box.text}`);
            }
        }
    } else {
        if ((! _pj.in_es6(1, answer_click.getPressed()))) {
            mouse_clicked = false;
        }
    }
    
    // *answer_click_2* updates
    if (t >= 0.0 && answer_click_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_click_2.tStart = t;  // (not accounting for frame time here)
      answer_click_2.frameNStart = frameN;  // exact frame index
      
      answer_click_2.status = PsychoJS.Status.STARTED;
      answer_click_2.mouseClock.reset();
      prevButtonState = answer_click_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (answer_click_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = answer_click_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [TRUE, FALSE]) {
            if (obj.contains(answer_click_2)) {
              gotValidClick = true;
              answer_click_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *answer_help_text_2* updates
    if (t >= 0.0 && answer_help_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_help_text_2.tStart = t;  // (not accounting for frame time here)
      answer_help_text_2.frameNStart = frameN;  // exact frame index
      
      answer_help_text_2.setAutoDraw(true);
    }

    
    // *TRUE_BG* updates
    if (t >= 0.0 && TRUE_BG.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TRUE_BG.tStart = t;  // (not accounting for frame time here)
      TRUE_BG.frameNStart = frameN;  // exact frame index
      
      TRUE_BG.setAutoDraw(true);
    }

    
    // *FALSE_BG* updates
    if (t >= 0.0 && FALSE_BG.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FALSE_BG.tStart = t;  // (not accounting for frame time here)
      FALSE_BG.frameNStart = frameN;  // exact frame index
      
      FALSE_BG.setAutoDraw(true);
    }

    
    // *TRUE* updates
    if (t >= 0.0 && TRUE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TRUE.tStart = t;  // (not accounting for frame time here)
      TRUE.frameNStart = frameN;  // exact frame index
      
      TRUE.setAutoDraw(true);
    }

    
    // *FALSE* updates
    if (t >= 0.0 && FALSE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FALSE.tStart = t;  // (not accounting for frame time here)
      FALSE.frameNStart = frameN;  // exact frame index
      
      FALSE.setAutoDraw(true);
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
    respond_to_sentenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function respond_to_sentenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'respond_to_sentence' ---
    respond_to_sentenceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "respond_to_sentence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letter_displayComponents;
function letter_displayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter_display' ---
    t = 0;
    letter_displayClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_25
    document.body.style.cursor='none';
    text.setText(curr_letter);
    // keep track of which components have finished
    letter_displayComponents = [];
    letter_displayComponents.push(text);
    
    letter_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function letter_displayRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter_display' ---
    // get current time
    t = letter_displayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
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
    letter_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letter_displayRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter_display' ---
    letter_displayComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_25
    document.body.style.cursor='auto';
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letters_clicked_to_record;
var recall_lettersComponents;
function recall_lettersRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall_letters' ---
    t = 0;
    recall_lettersClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_jp
    LEFT_CLICK = 0;
    BLANK_LETTER = "_";
    LETTERS = [letter_S, letter_P, letter_K, letter_F, letter_T, letter_Q, letter_L, letter_H, letter_Y, letter_R, letter_N, letter_J];
    mouse_clicked = true;
    letter_clicked = null;
    letters_clicked = [];
    letters_clicked_to_record = [];
    display_letters_clicked_jp.text = "";
    
    // setup some python lists for storing info about the mouse_jp
    // current position of the mouse:
    mouse_jp.x = [];
    mouse_jp.y = [];
    mouse_jp.leftButton = [];
    mouse_jp.midButton = [];
    mouse_jp.rightButton = [];
    mouse_jp.time = [];
    mouse_jp.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    recall_lettersComponents = [];
    recall_lettersComponents.push(mouse_jp);
    recall_lettersComponents.push(remind_text_jp);
    recall_lettersComponents.push(letter_S);
    recall_lettersComponents.push(letter_P);
    recall_lettersComponents.push(letter_K);
    recall_lettersComponents.push(letter_F);
    recall_lettersComponents.push(letter_T);
    recall_lettersComponents.push(letter_Q);
    recall_lettersComponents.push(letter_L);
    recall_lettersComponents.push(letter_H);
    recall_lettersComponents.push(letter_Y);
    recall_lettersComponents.push(letter_R);
    recall_lettersComponents.push(letter_N);
    recall_lettersComponents.push(letter_J);
    recall_lettersComponents.push(blank_letter_BG_jp);
    recall_lettersComponents.push(clear_letters_BG_jp);
    recall_lettersComponents.push(next_practice_BG_jp);
    recall_lettersComponents.push(blank_letter_jp);
    recall_lettersComponents.push(display_letters_clicked_jp);
    recall_lettersComponents.push(clear_letters_jp);
    recall_lettersComponents.push(next_practice_jp);
    
    recall_lettersComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function recall_lettersRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall_letters' ---
    // get current time
    t = recall_lettersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_jp
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (((! mouse_clicked) && _pj.in_es6(1, mouse_jp.getPressed()))) {
        mouse_clicked = true;
        for (var _letter, _pj_c = 0, _pj_a = LETTERS, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            _letter = _pj_a[_pj_c];
            if (mouse_jp.isPressedIn(_letter, {"buttons": [LEFT_CLICK]})) {
                letters_clicked.push(_letter.text);
            }
        }
        if (mouse_jp.isPressedIn(blank_letter_jp, {"buttons": [LEFT_CLICK]})) {
            letters_clicked.push(BLANK_LETTER);
        }
        if (mouse_jp.isPressedIn(clear_letters_jp, {"buttons": [LEFT_CLICK]})) {
            letters_clicked = [];
        }
        if (mouse_jp.isPressedIn(next_practice_jp, {"buttons": [LEFT_CLICK]})) {
            continueRoutine = false;
        }
        display_letters_clicked_jp.text = letters_clicked.toString();
    } else {
        if ((! _pj.in_es6(1, mouse_jp.getPressed()))) {
            mouse_clicked = false;
        }
    }
    
    // *mouse_jp* updates
    if (t >= 0.0 && mouse_jp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_jp.tStart = t;  // (not accounting for frame time here)
      mouse_jp.frameNStart = frameN;  // exact frame index
      
      mouse_jp.status = PsychoJS.Status.STARTED;
      mouse_jp.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_jp.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_jp.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [clear_letters, blank_letter, next_practice, letter_S, letter_P, letter_K, letter_F, letter_T, letter_Q, letter_L, letter_H, letter_Y, letter_R, letter_N, letter_J]) {
            if (obj.contains(mouse_jp)) {
              gotValidClick = true;
              mouse_jp.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse_jp.getPos();
            mouse_jp.x.push(_mouseXYs[0]);
            mouse_jp.y.push(_mouseXYs[1]);
            mouse_jp.leftButton.push(_mouseButtons[0]);
            mouse_jp.midButton.push(_mouseButtons[1]);
            mouse_jp.rightButton.push(_mouseButtons[2]);
            mouse_jp.time.push(mouse_jp.mouseClock.getTime());
          }
        }
      }
    }
    
    // *remind_text_jp* updates
    if (t >= 0.0 && remind_text_jp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      remind_text_jp.tStart = t;  // (not accounting for frame time here)
      remind_text_jp.frameNStart = frameN;  // exact frame index
      
      remind_text_jp.setAutoDraw(true);
    }

    
    // *letter_S* updates
    if (t >= 0.0 && letter_S.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_S.tStart = t;  // (not accounting for frame time here)
      letter_S.frameNStart = frameN;  // exact frame index
      
      letter_S.setAutoDraw(true);
    }

    
    // *letter_P* updates
    if (t >= 0.0 && letter_P.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_P.tStart = t;  // (not accounting for frame time here)
      letter_P.frameNStart = frameN;  // exact frame index
      
      letter_P.setAutoDraw(true);
    }

    
    // *letter_K* updates
    if (t >= 0.0 && letter_K.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_K.tStart = t;  // (not accounting for frame time here)
      letter_K.frameNStart = frameN;  // exact frame index
      
      letter_K.setAutoDraw(true);
    }

    
    // *letter_F* updates
    if (t >= 0.0 && letter_F.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_F.tStart = t;  // (not accounting for frame time here)
      letter_F.frameNStart = frameN;  // exact frame index
      
      letter_F.setAutoDraw(true);
    }

    
    // *letter_T* updates
    if (t >= 0.0 && letter_T.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_T.tStart = t;  // (not accounting for frame time here)
      letter_T.frameNStart = frameN;  // exact frame index
      
      letter_T.setAutoDraw(true);
    }

    
    // *letter_Q* updates
    if (t >= 0.0 && letter_Q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_Q.tStart = t;  // (not accounting for frame time here)
      letter_Q.frameNStart = frameN;  // exact frame index
      
      letter_Q.setAutoDraw(true);
    }

    
    // *letter_L* updates
    if (t >= 0.0 && letter_L.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_L.tStart = t;  // (not accounting for frame time here)
      letter_L.frameNStart = frameN;  // exact frame index
      
      letter_L.setAutoDraw(true);
    }

    
    // *letter_H* updates
    if (t >= 0.0 && letter_H.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_H.tStart = t;  // (not accounting for frame time here)
      letter_H.frameNStart = frameN;  // exact frame index
      
      letter_H.setAutoDraw(true);
    }

    
    // *letter_Y* updates
    if (t >= 0.0 && letter_Y.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_Y.tStart = t;  // (not accounting for frame time here)
      letter_Y.frameNStart = frameN;  // exact frame index
      
      letter_Y.setAutoDraw(true);
    }

    
    // *letter_R* updates
    if (t >= 0.0 && letter_R.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_R.tStart = t;  // (not accounting for frame time here)
      letter_R.frameNStart = frameN;  // exact frame index
      
      letter_R.setAutoDraw(true);
    }

    
    // *letter_N* updates
    if (t >= 0.0 && letter_N.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_N.tStart = t;  // (not accounting for frame time here)
      letter_N.frameNStart = frameN;  // exact frame index
      
      letter_N.setAutoDraw(true);
    }

    
    // *letter_J* updates
    if (t >= 0.0 && letter_J.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_J.tStart = t;  // (not accounting for frame time here)
      letter_J.frameNStart = frameN;  // exact frame index
      
      letter_J.setAutoDraw(true);
    }

    
    // *blank_letter_BG_jp* updates
    if (t >= 0.0 && blank_letter_BG_jp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_letter_BG_jp.tStart = t;  // (not accounting for frame time here)
      blank_letter_BG_jp.frameNStart = frameN;  // exact frame index
      
      blank_letter_BG_jp.setAutoDraw(true);
    }

    
    // *clear_letters_BG_jp* updates
    if (t >= 0.0 && clear_letters_BG_jp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clear_letters_BG_jp.tStart = t;  // (not accounting for frame time here)
      clear_letters_BG_jp.frameNStart = frameN;  // exact frame index
      
      clear_letters_BG_jp.setAutoDraw(true);
    }

    
    // *next_practice_BG_jp* updates
    if (t >= 0.0 && next_practice_BG_jp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_practice_BG_jp.tStart = t;  // (not accounting for frame time here)
      next_practice_BG_jp.frameNStart = frameN;  // exact frame index
      
      next_practice_BG_jp.setAutoDraw(true);
    }

    
    // *blank_letter_jp* updates
    if (t >= 0.0 && blank_letter_jp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_letter_jp.tStart = t;  // (not accounting for frame time here)
      blank_letter_jp.frameNStart = frameN;  // exact frame index
      
      blank_letter_jp.setAutoDraw(true);
    }

    
    // *display_letters_clicked_jp* updates
    if (t >= 0.0 && display_letters_clicked_jp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      display_letters_clicked_jp.tStart = t;  // (not accounting for frame time here)
      display_letters_clicked_jp.frameNStart = frameN;  // exact frame index
      
      display_letters_clicked_jp.setAutoDraw(true);
    }

    
    // *clear_letters_jp* updates
    if (t >= 0.0 && clear_letters_jp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clear_letters_jp.tStart = t;  // (not accounting for frame time here)
      clear_letters_jp.frameNStart = frameN;  // exact frame index
      
      clear_letters_jp.setAutoDraw(true);
    }

    
    // *next_practice_jp* updates
    if (t >= 0.0 && next_practice_jp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_practice_jp.tStart = t;  // (not accounting for frame time here)
      next_practice_jp.frameNStart = frameN;  // exact frame index
      
      next_practice_jp.setAutoDraw(true);
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
    recall_lettersComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var num_letters_clicked;
var difference;
function recall_lettersRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall_letters' ---
    recall_lettersComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_jp
    num_letters_clicked = letters_clicked.length;
    difference = (SET_SIZE - num_letters_clicked);
    if ((difference > 0)) {
        for (var _letter, _pj_c = 0, _pj_a = letters_clicked, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            _letter = _pj_a[_pj_c];
            actual_letter_responses.push(_letter);
        }
        for (var a, _pj_c = 0, _pj_a = util.range(difference), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            a = _pj_a[_pj_c];
            actual_letter_responses.push(null);
        }
    } else {
        for (var _letter, _pj_c = 0, _pj_a = letters_clicked.slice(0, SET_SIZE), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            _letter = _pj_a[_pj_c];
            actual_letter_responses.push(_letter);
        }
    }
    letters_clicked_to_record = letters_clicked.slice(0);
    if (difference) {
        letters_clicked = function () {
        var _pj_a = [], _pj_b = util.range(SET_SIZE);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var a = _pj_b[_pj_c];
            _pj_a.push(null);
        }
        return _pj_a;
    }
    .call(this);
    }
    for (var _letter, _pj_c = 0, _pj_a = letters_clicked, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        _letter = _pj_a[_pj_c];
        letter_responses.push(_letter);
    }
    console.log(`
    letter_responses=${letter_responses}
    actual_letter_responses=${actual_letter_responses}`
    );
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_jp.x', mouse_jp.x);
    psychoJS.experiment.addData('mouse_jp.y', mouse_jp.y);
    psychoJS.experiment.addData('mouse_jp.leftButton', mouse_jp.leftButton);
    psychoJS.experiment.addData('mouse_jp.midButton', mouse_jp.midButton);
    psychoJS.experiment.addData('mouse_jp.rightButton', mouse_jp.rightButton);
    psychoJS.experiment.addData('mouse_jp.time', mouse_jp.time);
    psychoJS.experiment.addData('mouse_jp.clicked_name', mouse_jp.clicked_name);
    
    // the Routine "recall_letters" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var curr_set_num_sentence_correct;
var curr_set_num_sentences;
var num_sentences_to_skip;
var curr_set_sentence_answers;
var curr_set_sentence_responses;
var sentences_feedback_text;
var percent;
var percent_text;
var sent_percent_correct;
var num_letters_to_skip;
var curr_set_letters;
var curr_set_letter_responses;
var num_correct_letters;
var letters_feedback_text;
var curr_set_rspan_pcu;
var _proceed_space_2_allKeys;
var feedback_displayComponents;
function feedback_displayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_display' ---
    t = 0;
    feedback_displayClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_18
    curr_set_num_sentence_correct = 0;
    curr_set_num_sentences = SIZE_OF_SETS[small_loop.thisRepN];
    num_sentences_to_skip = 0;
    for (var i, _pj_c = 0, _pj_a = util.range(small_loop.thisRepN), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        num_sentences_to_skip += SIZE_OF_SETS[i];
    }
    curr_set_sentence_answers = curr_loop_sentence_answers.slice(num_sentences_to_skip, (num_sentences_to_skip + curr_set_num_sentences));
    curr_set_sentence_responses = sentence_responses.slice(num_sentences_to_skip, (num_sentences_to_skip + curr_set_num_sentences));
    for (var i, _pj_c = 0, _pj_a = util.range(curr_set_num_sentences), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((curr_set_sentence_answers[i] === curr_set_sentence_responses[i])) {
            curr_set_num_sentence_correct += 1;
            accumulated_correct_sentences += 1;
        }
    }
    sentences_feedback_text = `- Correct sentences: ${curr_set_num_sentence_correct} out of ${curr_set_num_sentences}`;
    console.log(`
    num_sentences_to_skip=${num_sentences_to_skip}
    curr_set_num_sentences=${curr_set_num_sentences}
    
    curr_set_sentence_responses=${curr_set_sentence_responses}
    curr_set_sentence_answers=${curr_set_sentence_answers}
    curr_set_num_sentence_correct=${curr_set_num_sentence_correct}`
    );
    accumulated_num_of_sentences += SIZE_OF_SETS[small_loop.thisRepN];
    console.log(`
    accu_cs=${accumulated_correct_sentences}
    accu_ns=${accumulated_num_of_sentences}`
    );
    percent = Number.parseInt(((accumulated_correct_sentences / accumulated_num_of_sentences) * 100));
    percent_text = `${percent}% sentences correct`;
    sent_percent_correct = percent_text;
    num_letters_to_skip = 0;
    for (var i, _pj_c = 0, _pj_a = util.range(small_loop.thisRepN), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        num_letters_to_skip += SIZE_OF_SETS[i];
    }
    curr_set_letters = curr_loop_letters.slice(num_letters_to_skip, (num_letters_to_skip + SET_SIZE));
    curr_set_letter_responses = actual_letter_responses.slice(num_letters_to_skip, (num_letters_to_skip + SET_SIZE));
    num_correct_letters = 0;
    for (var i, _pj_c = 0, _pj_a = util.range(curr_set_letters.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((curr_set_letter_responses[i] === curr_set_letters[i])) {
            num_correct_letters += 1;
        }
    }
    psychoJS.experiment.addData("letter_answers", curr_set_letters);
    psychoJS.experiment.addData("letter_responses", letters_clicked_to_record);
    letters_feedback_text = `- Correct letters: ${num_correct_letters} out of ${SET_SIZE}`;
    curr_set_rspan_pcu = (num_correct_letters / SET_SIZE);
    rspan_pcu += curr_set_rspan_pcu;
    psychoJS.experiment.addData("curr_set_rspan_pcu", curr_set_rspan_pcu);
    console.log(`
    letter_responses=${letter_responses}
    curr_set_letter_responses=${curr_set_letter_responses}
    curr_set_letters=${curr_set_letters}`
    );
    
    proceed_space_2.keys = undefined;
    proceed_space_2.rt = undefined;
    _proceed_space_2_allKeys = [];
    // keep track of which components have finished
    feedback_displayComponents = [];
    feedback_displayComponents.push(performance_text);
    feedback_displayComponents.push(letters_feedback);
    feedback_displayComponents.push(sentences_feedback);
    feedback_displayComponents.push(accum_text);
    feedback_displayComponents.push(sentences_percent);
    feedback_displayComponents.push(reminder_text);
    feedback_displayComponents.push(proceed_text_2);
    feedback_displayComponents.push(proceed_space_2);
    
    feedback_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_displayRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_display' ---
    // get current time
    t = feedback_displayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *performance_text* updates
    if (t >= 0.0 && performance_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      performance_text.tStart = t;  // (not accounting for frame time here)
      performance_text.frameNStart = frameN;  // exact frame index
      
      performance_text.setAutoDraw(true);
    }

    
    if (performance_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      performance_text.setText('Your performance in the last sequence:', false);
    }
    
    // *letters_feedback* updates
    if (t >= 0.0 && letters_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letters_feedback.tStart = t;  // (not accounting for frame time here)
      letters_feedback.frameNStart = frameN;  // exact frame index
      
      letters_feedback.setAutoDraw(true);
    }

    
    if (letters_feedback.status === PsychoJS.Status.STARTED){ // only update if being drawn
      letters_feedback.setText(letters_feedback_text, false);
    }
    
    // *sentences_feedback* updates
    if (t >= 0.0 && sentences_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sentences_feedback.tStart = t;  // (not accounting for frame time here)
      sentences_feedback.frameNStart = frameN;  // exact frame index
      
      sentences_feedback.setAutoDraw(true);
    }

    
    if (sentences_feedback.status === PsychoJS.Status.STARTED){ // only update if being drawn
      sentences_feedback.setText(sentences_feedback_text, false);
    }
    
    // *accum_text* updates
    if (t >= 0.0 && accum_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      accum_text.tStart = t;  // (not accounting for frame time here)
      accum_text.frameNStart = frameN;  // exact frame index
      
      accum_text.setAutoDraw(true);
    }

    
    if (accum_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      accum_text.setText('Your accumulated performance on the sentences is:', false);
    }
    
    // *sentences_percent* updates
    if (t >= 0.0 && sentences_percent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sentences_percent.tStart = t;  // (not accounting for frame time here)
      sentences_percent.frameNStart = frameN;  // exact frame index
      
      sentences_percent.setAutoDraw(true);
    }

    
    if (sentences_percent.status === PsychoJS.Status.STARTED){ // only update if being drawn
      sentences_percent.setText(sent_percent_correct, false);
    }
    
    // *reminder_text* updates
    if (t >= 0.0 && reminder_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder_text.tStart = t;  // (not accounting for frame time here)
      reminder_text.frameNStart = frameN;  // exact frame index
      
      reminder_text.setAutoDraw(true);
    }

    
    if (reminder_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      reminder_text.setText('(remember to keep your score as high as possible, ideally above 85%)', false);
    }
    
    // *proceed_text_2* updates
    if (t >= 0 && proceed_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proceed_text_2.tStart = t;  // (not accounting for frame time here)
      proceed_text_2.frameNStart = frameN;  // exact frame index
      
      proceed_text_2.setAutoDraw(true);
    }

    
    // *proceed_space_2* updates
    if (t >= 0.0 && proceed_space_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proceed_space_2.tStart = t;  // (not accounting for frame time here)
      proceed_space_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      proceed_space_2.clock.reset();
      proceed_space_2.start();
    }

    if (proceed_space_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = proceed_space_2.getKeys({keyList: ['space'], waitRelease: false});
      _proceed_space_2_allKeys = _proceed_space_2_allKeys.concat(theseKeys);
      if (_proceed_space_2_allKeys.length > 0) {
        proceed_space_2.keys = _proceed_space_2_allKeys[_proceed_space_2_allKeys.length - 1].name;  // just the last key pressed
        proceed_space_2.rt = _proceed_space_2_allKeys[_proceed_space_2_allKeys.length - 1].rt;
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
    feedback_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_displayRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_display' ---
    feedback_displayComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    proceed_space_2.stop();
    // the Routine "feedback_display" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var index;
var process_scoresComponents;
function process_scoresRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'process_scores' ---
    t = 0;
    process_scoresClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_19
    for (var i, _pj_c = 0, _pj_a = util.range(curr_loop_sentence_answers.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((sentence_responses[i] === null)) {
            sent_speed_error += 1;
            continue;
        }
        if ((sentence_responses[i] !== curr_loop_sentence_answers[i])) {
            sent_acc_error += 1;
        }
    }
    sent_total_error = (sent_speed_error + sent_acc_error);
    console.log(`
    Score so far:
    sent_speed_error=${sent_speed_error}
    sent_acc_error=${sent_acc_error}
    sent_total_error=${sent_total_error}`
    );
    if (is_main_test) {
        index = 0;
        for (var num_letters, _pj_c = 0, _pj_a = SIZE_OF_SETS, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            num_letters = _pj_a[_pj_c];
            if ((letter_responses.slice(index, (index + num_letters)).toString() === curr_loop_letters.slice(index, (index + num_letters)).toString())) {
                rspan_score += num_letters;
            }
            index += num_letters;
        }
        for (var i, _pj_c = 0, _pj_a = util.range(curr_loop_letters.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            if ((actual_letter_responses[i] === curr_loop_letters[i])) {
                total_correct_letters += 1;
            }
        }
        console.log(`
    rspan_score=${rspan_score}
    total_correct_letters=${total_correct_letters}
    `
    );
        psychoJS.experiment.addData("rspan_score", rspan_score);
        psychoJS.experiment.addData("total_correct_letters", total_correct_letters);
        psychoJS.experiment.addData("sent_speed_error", sent_speed_error);
        psychoJS.experiment.addData("sent_acc_error", sent_acc_error);
        psychoJS.experiment.addData("sent_total_error", (sent_speed_error + sent_acc_error));
        psychoJS.experiment.addData("total_number_of_sentences", accumulated_num_of_sentences);
        psychoJS.experiment.addData("sent_percent_correct", percent);
        if ((big_loop.thisRepN === (BIG_LOOP_REPS - 1))) {
            rspan_pcu /= (BIG_LOOP_REPS * LOOP_SIZE);
            psychoJS.experiment.addData("rspan_pcu", rspan_pcu);
        }
    }
    
    // keep track of which components have finished
    process_scoresComponents = [];
    
    process_scoresComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function process_scoresRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'process_scores' ---
    // get current time
    t = process_scoresClock.getTime();
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
    process_scoresComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function process_scoresRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'process_scores' ---
    process_scoresComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_19
    if ((! is_main_test)) {
        big_loop.finished = true;
    }
    
    // the Routine "process_scores" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _exit_key_allKeys;
var ending_message;
var end_instrComponents;
function end_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_instr' ---
    t = 0;
    end_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    exit_key.keys = undefined;
    exit_key.rt = undefined;
    _exit_key_allKeys = [];
    // This is the first task, so need to redirect to second task
    if ((!expInfo["session2"])) {
        ending_message = (
            "You have reached the end of this task.\n \n" +
            "Press Spacebar to proceed, and click 'Ok' until you reach the next task."
        );
        psychoJS.setRedirectUrls("https://run.pavlovia.org/Yiting_liverpool/category_switch_copy/?participant="+expInfo["participant"]+"&session2=1", "");
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
    // keep track of which components have finished
    end_instrComponents = [];
    end_instrComponents.push(thankyou);
    end_instrComponents.push(exit_key);
    
    end_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_instr' ---
    // get current time
    t = end_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thankyou* updates
    if (t >= 0.0 && thankyou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thankyou.tStart = t;  // (not accounting for frame time here)
      thankyou.frameNStart = frameN;  // exact frame index
      
      thankyou.setAutoDraw(true);
    }

    
    if (thankyou.status === PsychoJS.Status.STARTED){ // only update if being drawn
      thankyou.setText(ending_message, false);
    }
    
    // *exit_key* updates
    if (t >= 0.0 && exit_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exit_key.tStart = t;  // (not accounting for frame time here)
      exit_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exit_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exit_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { exit_key.clearEvents(); });
    }

    if (exit_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = exit_key.getKeys({keyList: ['space'], waitRelease: false});
      _exit_key_allKeys = _exit_key_allKeys.concat(theseKeys);
      if (_exit_key_allKeys.length > 0) {
        exit_key.keys = _exit_key_allKeys[_exit_key_allKeys.length - 1].name;  // just the last key pressed
        exit_key.rt = _exit_key_allKeys[_exit_key_allKeys.length - 1].rt;
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
    end_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_instr' ---
    end_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(exit_key.corr, level);
    }
    psychoJS.experiment.addData('exit_key.keys', exit_key.keys);
    if (typeof exit_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exit_key.rt', exit_key.rt);
        routineTimer.reset();
        }
    
    exit_key.stop();
    // the Routine "end_instr" was not non-slip safe, so reset the non-slip timer
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
