#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on February 19, 2023, at 20:22
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.5'
expName = 'category_switch'  # from the Builder filename that created this script
expInfo = {
    '': '',
}
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\yiting\\Desktop\\Meh\\Liverpool\\Academic\\Experiment\\02. Principle\\Part 1 Experiment_Route A\\category_switch-copy-FINAL-ROUTE-A-1\\category_switch_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1536, 864], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "welcome" ---
# Run 'Begin Experiment' code from code_27
win.mouseVisible = False
welcome_2 = visual.TextBox2(
     win, text='Welcome to the Category Switch Task!\n\n', font='Arial',
     pos=(0, 0.3),     letterHeight=0.06,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=True, italic=False,
     lineSpacing=1.0,
     padding=0.2, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='welcome_2',
     autoLog=True,
)
task_intro = visual.TextBox2(
     win, text='In this task you will be asked to perform two simple categorisation tasks.\n\n\nPress the Spacebar to get instructions for your first task.', font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='task_intro',
     autoLog=True,
)
proceed_key = keyboard.Keyboard()

# --- Initialize components for Routine "setup" ---
# Run 'Begin Experiment' code from code_15
#import random
#from random import randint

show_hint_on_first_n = 8
feedback_symbol = ""
heart = "heart.png"
cross = "cross.png"

practice_i = 0
block_i = 1
i = 0
block_total = 4

stim_living = ["shark", "lion", "oak", "alligator", "mushroom", "sparrow", "goldfish", "lizard"]
stim_nonliving = ["table", "bicycle", "coat", "cloud", "pebble", "knob", "marble", "snowflake"]
stim_big = ["table", "bicycle", "coat", "cloud", "shark", "lion", "oak", "alligator"]
stim_small = ["pebble", "knob", "marble", "snowflake", "mushroom", "sparrow", "goldfish", "lizard"]

for i in range(8):
    # first boolean is congruent/incongruent, second is alive/size
    stim_living[i] = [stim_living[i], True, True]
    stim_nonliving[i] = [stim_nonliving[i], False, True] 
    stim_big[i] = [stim_big[i], True, False] 
    stim_small[i] = [stim_small[i], False, False] 


# --- Initialize components for Routine "living_prac_instr" ---
living_title = visual.TextBox2(
     win, text="'Living' Task:\nliving or non-living object?\n\n", font='Arial',
     pos=(0, 0.3),     letterHeight=0.06,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=True, italic=False,
     lineSpacing=1.0,
     padding=0.2, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='living_title',
     autoLog=True,
)
text_9_1 = visual.TextBox2(
     win, text='', font='Arial',
     pos=(0, -0.08),     letterHeight=0.035,
     size=(1.3, 0.6), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='text_9_1',
     autoLog=True,
)
key_resp_3_1 = keyboard.Keyboard()

# --- Initialize components for Routine "get_ready" ---
text_53 = visual.TextBox2(
     win, text="Get ready:\n\nput your index fingers on the 'E' and 'I' keys on your keyboard.", font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.2, 0.7), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.05, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='text_53',
     autoLog=True,
)
space_text = visual.TextStim(win=win, name='space_text',
    text='<SPACEBAR>',
    font='Arial',
    pos=(0, -0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_9 = keyboard.Keyboard()

# --- Initialize components for Routine "living_prac_cue" ---

# --- Initialize components for Routine "living_prac_trial" ---
cue_5_1 = visual.ImageStim(
    win=win,
    name='cue_5_1', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.15), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_10_1 = visual.TextStim(win=win, name='text_10_1',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
reminder_nonliving = visual.TextStim(win=win, name='reminder_nonliving',
    text='',
    font='Arial',
    pos=(0.2, -0.4), height=0.03, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
reminder_living = visual.TextStim(win=win, name='reminder_living',
    text='',
    font='Arial',
    pos=(-0.2, -0.4), height=0.03, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
prac_1_key_resp = keyboard.Keyboard()
feed_sym_5 = visual.TextBox2(
     win, text='', font='Arial',
     pos=(-0.05, -0.25),     letterHeight=0.1,
     size=(None, None), borderWidth=2.0,
     color=[1.0000, -1.0000, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=True, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='feed_sym_5',
     autoLog=False,
)

# --- Initialize components for Routine "living_block_feedback" ---
feed_block_title = visual.TextBox2(
     win, text='Block Feedback\n', font='Arial',
     pos=(0, 0.3),     letterHeight=0.06,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=True, italic=False,
     lineSpacing=1.0,
     padding=0.2, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='feed_block_title',
     autoLog=True,
)
space_text_2 = visual.TextStim(win=win, name='space_text_2',
    text='<SPACEBAR>',
    font='Arial',
    pos=(0, -0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
end_prac_text = visual.TextBox2(
     win, text='You have reached the end of the living task practice. For the next practice, remember, try to minimise your reaction time while avoid making errors.\n\n\nContinue when you are ready.', font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.3, 0.6), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='end_prac_text',
     autoLog=True,
)
next_key = keyboard.Keyboard()

# --- Initialize components for Routine "end_practice_block" ---

# --- Initialize components for Routine "size_prac_instr" ---
size_task_title = visual.TextBox2(
     win, text="'Size' Task:\nsmaller or bigger than a basketball?\n\n", font='Arial',
     pos=(0, 0.3),     letterHeight=0.06,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=True, italic=False,
     lineSpacing=1.0,
     padding=0.2, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='size_task_title',
     autoLog=True,
)
text_26 = visual.TextBox2(
     win, text='', font='Arial',
     pos=(0, -0.08),     letterHeight=0.035,
     size=(1.3, 0.6), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='text_26',
     autoLog=True,
)
key_resp_4_1 = keyboard.Keyboard()

# --- Initialize components for Routine "get_ready" ---
text_53 = visual.TextBox2(
     win, text="Get ready:\n\nput your index fingers on the 'E' and 'I' keys on your keyboard.", font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.2, 0.7), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.05, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='text_53',
     autoLog=True,
)
space_text = visual.TextStim(win=win, name='space_text',
    text='<SPACEBAR>',
    font='Arial',
    pos=(0, -0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_9 = keyboard.Keyboard()

# --- Initialize components for Routine "size_prac_cue" ---

# --- Initialize components for Routine "size_prac_trial" ---
cue_5 = visual.ImageStim(
    win=win,
    name='cue_5', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.15), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_10 = visual.TextStim(win=win, name='text_10',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
reminder_small = visual.TextStim(win=win, name='reminder_small',
    text='',
    font='Arial',
    pos=(0.2, -0.4), height=0.03, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
reminder_big = visual.TextStim(win=win, name='reminder_big',
    text='',
    font='Arial',
    pos=(-0.2, -0.4), height=0.03, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
prac_2_key_resp = keyboard.Keyboard()
feed_sym_6 = visual.TextBox2(
     win, text='', font='Arial',
     pos=(-0.05, -0.25),     letterHeight=0.1,
     size=(None, None), borderWidth=2.0,
     color=[1.0000, -1.0000, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=True, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='feed_sym_6',
     autoLog=False,
)
basketball_text = visual.TextStim(win=win, name='basketball_text',
    text='than a basketball',
    font='Arial',
    pos=(0, -0.45), height=0.02, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);

# --- Initialize components for Routine "size_block_feedback" ---
title = visual.TextBox2(
     win, text='Block Feedback\n', font='Arial',
     pos=(0, 0.3),     letterHeight=0.06,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=True, italic=False,
     lineSpacing=1.0,
     padding=0.2, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='title',
     autoLog=True,
)
end_prac_text_2 = visual.TextBox2(
     win, text='You have reached the end of the size task practice. For the next practice, remember, try to minimise your reaction time while avoid making errors.\n\n\nContinue when you are ready.', font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.3, 0.6), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='end_prac_text_2',
     autoLog=True,
)
space_text_5 = visual.TextStim(win=win, name='space_text_5',
    text='<SPACEBAR>',
    font='Arial',
    pos=(0, -0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
next_key_4 = keyboard.Keyboard()

# --- Initialize components for Routine "end_practice_block" ---

# --- Initialize components for Routine "joint_prac_instr" ---
comb_prac_title = visual.TextBox2(
     win, text='Combined Task: Overview\n\n', font='Arial',
     pos=(0, 0.3),     letterHeight=0.06,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=True, italic=False,
     lineSpacing=1.0,
     padding=0.2, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='comb_prac_title',
     autoLog=True,
)
comb_prac_instr_2 = visual.TextBox2(
     win, text='We now combine the two tasks into one:\nJust like before, a single word appears in the middle of the screen and a heart or an arrowcross symbol is situated just above the word.\n\n\nPay attention to the symbol. The symbol tells you which task to perform.\n\nIf the symbol is a heart: Do the LIVING Task (living or non-living object?)\nIf the symbol is an arrowcross: Do the SIZE Task (bigger or smaller than a basketball?)\n\nRespond as quickly and accurately as you can. If you make a mistake, you will get the chance to correct your mistake during practice.\n\nStart practice the combined task when you are ready.', font='Arial',
     pos=(0, -0.08),     letterHeight=0.035,
     size=(1.3, 0.6), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='comb_prac_instr_2',
     autoLog=True,
)
space_text_3 = visual.TextStim(win=win, name='space_text_3',
    text='<SPACEBAR>',
    font='Arial',
    pos=(0, -0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
next_key_2 = keyboard.Keyboard()

# --- Initialize components for Routine "get_ready" ---
text_53 = visual.TextBox2(
     win, text="Get ready:\n\nput your index fingers on the 'E' and 'I' keys on your keyboard.", font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.2, 0.7), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.05, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='text_53',
     autoLog=True,
)
space_text = visual.TextStim(win=win, name='space_text',
    text='<SPACEBAR>',
    font='Arial',
    pos=(0, -0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_9 = keyboard.Keyboard()

# --- Initialize components for Routine "joint_prac_cue" ---

# --- Initialize components for Routine "joint_prac_trial" ---
cue_6 = visual.ImageStim(
    win=win,
    name='cue_6', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.15), size=(0.1, 0.1),
    color=[1.0000, 1.0000, 1.0000], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_15 = visual.TextStim(win=win, name='text_15',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
prac_3_key_resp = keyboard.Keyboard()
feedback_text = visual.TextBox2(
     win, text='', font='Arial',
     pos=(0, -0.25),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color=[1.0000, -1.0000, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='feedback_text',
     autoLog=False,
)
left_reminder = visual.TextBox2(
     win, text='', font='Arial',
     pos=(-0.4, -0.4),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color=[1.0000, -1.0000, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='left_reminder',
     autoLog=False,
)
right_reminder = visual.TextBox2(
     win, text='', font='Arial',
     pos=(0.4, -0.4),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color=[1.0000, -1.0000, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='right_reminder',
     autoLog=False,
)
basketball_text_2 = visual.TextStim(win=win, name='basketball_text_2',
    text='',
    font='Arial',
    pos=(0, -0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color=[1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);

# --- Initialize components for Routine "end_practice_block" ---

# --- Initialize components for Routine "main_instr" ---
main_task_title = visual.TextBox2(
     win, text='Combined Task: Test Start\n\n', font='Arial',
     pos=(0, 0.3),     letterHeight=0.06,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=True, italic=False,
     lineSpacing=1.0,
     padding=0.2, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='main_task_title',
     autoLog=True,
)
task_instr = visual.TextBox2(
     win, text='Practice is over and the actual task is about to start.\n\nPay attention to the symbol: The symbol tells you which task to perform.\n\nIf the symbol is a heart: Do the LIVING Task (living or non-living object?)\nIf the symbol is an arrowcross: Do the SIZE Task (bigger or smaller than a basketball?)', font='Arial',
     pos=(0, -0.08),     letterHeight=0.035,
     size=(1.3, 0.6), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='task_instr',
     autoLog=True,
)
space_text_4 = visual.TextStim(win=win, name='space_text_4',
    text='<SPACEBAR>',
    font='Arial',
    pos=(0, -0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
next_key_3 = keyboard.Keyboard()

# --- Initialize components for Routine "get_ready" ---
text_53 = visual.TextBox2(
     win, text="Get ready:\n\nput your index fingers on the 'E' and 'I' keys on your keyboard.", font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.2, 0.7), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.05, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='text_53',
     autoLog=True,
)
space_text = visual.TextStim(win=win, name='space_text',
    text='<SPACEBAR>',
    font='Arial',
    pos=(0, -0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_9 = keyboard.Keyboard()

# --- Initialize components for Routine "main_setup" ---

# --- Initialize components for Routine "first_cue" ---

# --- Initialize components for Routine "first_trial" ---
cue_7 = visual.ImageStim(
    win=win,
    name='cue_7', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.15), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_2 = visual.TextStim(win=win, name='text_2',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_4 = keyboard.Keyboard()

# --- Initialize components for Routine "trial_setup" ---

# --- Initialize components for Routine "create_trial_list" ---

# --- Initialize components for Routine "cue_presentation" ---

# --- Initialize components for Routine "trial" ---
cue_8 = visual.ImageStim(
    win=win,
    name='cue_8', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.15), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text = visual.TextStim(win=win, name='text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp = keyboard.Keyboard()

# --- Initialize components for Routine "trial_feedback" ---
cue = visual.ImageStim(
    win=win,
    name='cue', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.15), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_11 = visual.TextStim(win=win, name='text_11',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
feed_sym_8 = visual.TextBox2(
     win, text='', font='Arial',
     pos=(0, -0.25),     letterHeight=0.1,
     size=(None, None), borderWidth=2.0,
     color=[1.0000, -1.0000, -1.0000], colorSpace='rgb',
     opacity=None,
     bold=True, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='feed_sym_8',
     autoLog=False,
)

# --- Initialize components for Routine "end_exp" ---
text_8 = visual.TextBox2(
     win, text='You have reached the end of the experiment.', font='Arial',
     pos=(0, 0),     letterHeight=0.05,
     size=(1.2, 0.7), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.05, alignment='center-left',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='text_8',
     autoLog=True,
)
exit_key = visual.TextStim(win=win, name='exit_key',
    text='<press spacebar to exit>',
    font='Arial',
    pos=(0, -0.4), height=0.04, wrapWidth=None, ori=0.0, 
    color=[0.6549, 0.6549, 0.6549], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_8 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "welcome" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
welcome_2.reset()
task_intro.reset()
proceed_key.keys = []
proceed_key.rt = []
_proceed_key_allKeys = []
# keep track of which components have finished
welcomeComponents = [welcome_2, task_intro, proceed_key]
for thisComponent in welcomeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "welcome" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *welcome_2* updates
    if welcome_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_2.frameNStart = frameN  # exact frame index
        welcome_2.tStart = t  # local t and not account for scr refresh
        welcome_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'welcome_2.started')
        welcome_2.setAutoDraw(True)
    
    # *task_intro* updates
    if task_intro.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        task_intro.frameNStart = frameN  # exact frame index
        task_intro.tStart = t  # local t and not account for scr refresh
        task_intro.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(task_intro, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'task_intro.started')
        task_intro.setAutoDraw(True)
    
    # *proceed_key* updates
    waitOnFlip = False
    if proceed_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        proceed_key.frameNStart = frameN  # exact frame index
        proceed_key.tStart = t  # local t and not account for scr refresh
        proceed_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(proceed_key, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'proceed_key.started')
        proceed_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(proceed_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(proceed_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if proceed_key.status == STARTED and not waitOnFlip:
        theseKeys = proceed_key.getKeys(keyList=['space'], waitRelease=False)
        _proceed_key_allKeys.extend(theseKeys)
        if len(_proceed_key_allKeys):
            proceed_key.keys = _proceed_key_allKeys[-1].name  # just the last key pressed
            proceed_key.rt = _proceed_key_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in welcomeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "welcome" ---
for thisComponent in welcomeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if proceed_key.keys in ['', [], None]:  # No response was made
    proceed_key.keys = None
thisExp.addData('proceed_key.keys',proceed_key.keys)
if proceed_key.keys != None:  # we had a response
    thisExp.addData('proceed_key.rt', proceed_key.rt)
thisExp.nextEntry()
# the Routine "welcome" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "setup" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# keep track of which components have finished
setupComponents = []
for thisComponent in setupComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "setup" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in setupComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "setup" ---
for thisComponent in setupComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "setup" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "living_prac_instr" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_prac
k = 0

if practice_i == 0:
    practice_text = "In this task you will be presented a word, e.g. 'bug' or 'car' in the middle of the screen. A heart symbol will be located directly above the word. \n \n \n Your task is to decide as fast as possible whether the word, e.g. 'bug', represents a 'LIVING' object or a 'NON-LIVING' object.\n \n \n Press the E button if the word is a LIVING object. \n Press the I button if the letter is a NON-LIVING object.\n \n \n The computer will tell you if you make a mistake. \n \n \n Press the Spacebar to start practice." 
else:
    practice_text = "In this task you will be presented a word, e.g. 'bug' or 'car' in the middle of the screen. An arrowcross symbol will be located directly above the word. \n \n \n Your task is to decide as fast as possible whether the word represents an object that is BIGGER or SMALLER than a basketball.\n \n \n Press the E button if the object is BIGGER than a basketball. \n Press the I button if the object is SMALLER than a basketball.\n \n \n The computer will tell you if you make a mistake. \n \n \n Press the Spacebar to start practice." 
living_title.reset()
text_9_1.reset()
key_resp_3_1.keys = []
key_resp_3_1.rt = []
_key_resp_3_1_allKeys = []
# keep track of which components have finished
living_prac_instrComponents = [living_title, text_9_1, key_resp_3_1]
for thisComponent in living_prac_instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "living_prac_instr" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *living_title* updates
    if living_title.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        living_title.frameNStart = frameN  # exact frame index
        living_title.tStart = t  # local t and not account for scr refresh
        living_title.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(living_title, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'living_title.started')
        living_title.setAutoDraw(True)
    
    # *text_9_1* updates
    if text_9_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_9_1.frameNStart = frameN  # exact frame index
        text_9_1.tStart = t  # local t and not account for scr refresh
        text_9_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_9_1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_9_1.started')
        text_9_1.setAutoDraw(True)
    if text_9_1.status == STARTED:  # only update if drawing
        text_9_1.setText(practice_text, log=False)
    
    # *key_resp_3_1* updates
    waitOnFlip = False
    if key_resp_3_1.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3_1.frameNStart = frameN  # exact frame index
        key_resp_3_1.tStart = t  # local t and not account for scr refresh
        key_resp_3_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3_1, 'tStartRefresh')  # time at next scr refresh
        key_resp_3_1.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3_1.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3_1.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3_1.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3_1.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_3_1_allKeys.extend(theseKeys)
        if len(_key_resp_3_1_allKeys):
            key_resp_3_1.keys = _key_resp_3_1_allKeys[-1].name  # just the last key pressed
            key_resp_3_1.rt = _key_resp_3_1_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in living_prac_instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "living_prac_instr" ---
for thisComponent in living_prac_instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "living_prac_instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "get_ready" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
text_53.reset()
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
# keep track of which components have finished
get_readyComponents = [text_53, space_text, key_resp_9]
for thisComponent in get_readyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "get_ready" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_53* updates
    if text_53.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        text_53.frameNStart = frameN  # exact frame index
        text_53.tStart = t  # local t and not account for scr refresh
        text_53.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_53, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_53.started')
        text_53.setAutoDraw(True)
    
    # *space_text* updates
    if space_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        space_text.frameNStart = frameN  # exact frame index
        space_text.tStart = t  # local t and not account for scr refresh
        space_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_text, 'tStartRefresh')  # time at next scr refresh
        space_text.setAutoDraw(True)
    
    # *key_resp_9* updates
    waitOnFlip = False
    if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
        # keep track of start time/frame for later
        key_resp_9.frameNStart = frameN  # exact frame index
        key_resp_9.tStart = t  # local t and not account for scr refresh
        key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
        key_resp_9.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_9.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_9.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_9_allKeys.extend(theseKeys)
        if len(_key_resp_9_allKeys):
            key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
            key_resp_9.rt = _key_resp_9_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in get_readyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "get_ready" ---
for thisComponent in get_readyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "get_ready" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
prac_trials_1 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('stimuli_prac_1.xlsx'),
    seed=None, name='prac_trials_1')
thisExp.addLoop(prac_trials_1)  # add the loop to the experiment
thisPrac_trial_1 = prac_trials_1.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPrac_trial_1.rgb)
if thisPrac_trial_1 != None:
    for paramName in thisPrac_trial_1:
        exec('{} = thisPrac_trial_1[paramName]'.format(paramName))

for thisPrac_trial_1 in prac_trials_1:
    currentLoop = prac_trials_1
    # abbreviate parameter names if possible (e.g. rgb = thisPrac_trial_1.rgb)
    if thisPrac_trial_1 != None:
        for paramName in thisPrac_trial_1:
            exec('{} = thisPrac_trial_1[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "living_prac_cue" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_6
    show_hint = prac_trials_1.thisN < show_hint_on_first_n
    
    if practice_i == 0:
        practice_cue = heart
        #cue_text = "Does the word describe a living thing?"
    else:
        practice_cue = cross
        #cue_text = "Does the word describe a something bigger than a basketball?"
    # keep track of which components have finished
    living_prac_cueComponents = []
    for thisComponent in living_prac_cueComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "living_prac_cue" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in living_prac_cueComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "living_prac_cue" ---
    for thisComponent in living_prac_cueComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "living_prac_cue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    prac_until_correct_1 = data.TrialHandler(nReps=1000.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='prac_until_correct_1')
    thisExp.addLoop(prac_until_correct_1)  # add the loop to the experiment
    thisPrac_until_correct_1 = prac_until_correct_1.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPrac_until_correct_1.rgb)
    if thisPrac_until_correct_1 != None:
        for paramName in thisPrac_until_correct_1:
            exec('{} = thisPrac_until_correct_1[paramName]'.format(paramName))
    
    for thisPrac_until_correct_1 in prac_until_correct_1:
        currentLoop = prac_until_correct_1
        # abbreviate parameter names if possible (e.g. rgb = thisPrac_until_correct_1.rgb)
        if thisPrac_until_correct_1 != None:
            for paramName in thisPrac_until_correct_1:
                exec('{} = thisPrac_until_correct_1[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "living_prac_trial" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_5_1
        if congruency_stim == "congruent":
            corr_ans = "e"
        else:
            corr_ans = "i"
        cue_5_1.setImage(practice_cue)
        text_10_1.setText(word)
        reminder_nonliving.setText('NON-LIVING')
        reminder_living.setText('LIVING')
        prac_1_key_resp.keys = []
        prac_1_key_resp.rt = []
        _prac_1_key_resp_allKeys = []
        feed_sym_5.reset()
        feed_sym_5.setText(feedback_symbol)
        # keep track of which components have finished
        living_prac_trialComponents = [cue_5_1, text_10_1, reminder_nonliving, reminder_living, prac_1_key_resp, feed_sym_5]
        for thisComponent in living_prac_trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "living_prac_trial" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *cue_5_1* updates
            if cue_5_1.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                # keep track of start time/frame for later
                cue_5_1.frameNStart = frameN  # exact frame index
                cue_5_1.tStart = t  # local t and not account for scr refresh
                cue_5_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cue_5_1, 'tStartRefresh')  # time at next scr refresh
                cue_5_1.setAutoDraw(True)
            
            # *text_10_1* updates
            if text_10_1.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                # keep track of start time/frame for later
                text_10_1.frameNStart = frameN  # exact frame index
                text_10_1.tStart = t  # local t and not account for scr refresh
                text_10_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_10_1, 'tStartRefresh')  # time at next scr refresh
                text_10_1.setAutoDraw(True)
            
            # *reminder_nonliving* updates
            if reminder_nonliving.status == NOT_STARTED and show_hint:
                # keep track of start time/frame for later
                reminder_nonliving.frameNStart = frameN  # exact frame index
                reminder_nonliving.tStart = t  # local t and not account for scr refresh
                reminder_nonliving.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(reminder_nonliving, 'tStartRefresh')  # time at next scr refresh
                reminder_nonliving.setAutoDraw(True)
            
            # *reminder_living* updates
            if reminder_living.status == NOT_STARTED and show_hint:
                # keep track of start time/frame for later
                reminder_living.frameNStart = frameN  # exact frame index
                reminder_living.tStart = t  # local t and not account for scr refresh
                reminder_living.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(reminder_living, 'tStartRefresh')  # time at next scr refresh
                reminder_living.setAutoDraw(True)
            
            # *prac_1_key_resp* updates
            waitOnFlip = False
            if prac_1_key_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                prac_1_key_resp.frameNStart = frameN  # exact frame index
                prac_1_key_resp.tStart = t  # local t and not account for scr refresh
                prac_1_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_1_key_resp, 'tStartRefresh')  # time at next scr refresh
                prac_1_key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(prac_1_key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(prac_1_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if prac_1_key_resp.status == STARTED and not waitOnFlip:
                theseKeys = prac_1_key_resp.getKeys(keyList=["e", "i"], waitRelease=False)
                _prac_1_key_resp_allKeys.extend(theseKeys)
                if len(_prac_1_key_resp_allKeys):
                    prac_1_key_resp.keys = _prac_1_key_resp_allKeys[-1].name  # just the last key pressed
                    prac_1_key_resp.rt = _prac_1_key_resp_allKeys[-1].rt
                    # was this correct?
                    if (prac_1_key_resp.keys == str(corr_ans)) or (prac_1_key_resp.keys == corr_ans):
                        prac_1_key_resp.corr = 1
                    else:
                        prac_1_key_resp.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *feed_sym_5* updates
            if feed_sym_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                feed_sym_5.frameNStart = frameN  # exact frame index
                feed_sym_5.tStart = t  # local t and not account for scr refresh
                feed_sym_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feed_sym_5, 'tStartRefresh')  # time at next scr refresh
                feed_sym_5.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in living_prac_trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "living_prac_trial" ---
        for thisComponent in living_prac_trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_5_1
        # incorrect answer
        if prac_1_key_resp.corr == 0:
            feedback_symbol = "X"
        # correct answer
        else:
            feedback_symbol = ""
            # proceed to next cue
            prac_until_correct_1.finished = True
        # check responses
        if prac_1_key_resp.keys in ['', [], None]:  # No response was made
            prac_1_key_resp.keys = None
            # was no response the correct answer?!
            if str(corr_ans).lower() == 'none':
               prac_1_key_resp.corr = 1;  # correct non-response
            else:
               prac_1_key_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for prac_until_correct_1 (TrialHandler)
        prac_until_correct_1.addData('prac_1_key_resp.keys',prac_1_key_resp.keys)
        prac_until_correct_1.addData('prac_1_key_resp.corr', prac_1_key_resp.corr)
        if prac_1_key_resp.keys != None:  # we had a response
            prac_until_correct_1.addData('prac_1_key_resp.rt', prac_1_key_resp.rt)
        # the Routine "living_prac_trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1000.0 repeats of 'prac_until_correct_1'
    
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'prac_trials_1'


# --- Prepare to start Routine "living_block_feedback" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
feed_block_title.reset()
end_prac_text.reset()
next_key.keys = []
next_key.rt = []
_next_key_allKeys = []
# keep track of which components have finished
living_block_feedbackComponents = [feed_block_title, space_text_2, end_prac_text, next_key]
for thisComponent in living_block_feedbackComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "living_block_feedback" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *feed_block_title* updates
    if feed_block_title.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        feed_block_title.frameNStart = frameN  # exact frame index
        feed_block_title.tStart = t  # local t and not account for scr refresh
        feed_block_title.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(feed_block_title, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'feed_block_title.started')
        feed_block_title.setAutoDraw(True)
    
    # *space_text_2* updates
    if space_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        space_text_2.frameNStart = frameN  # exact frame index
        space_text_2.tStart = t  # local t and not account for scr refresh
        space_text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_text_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'space_text_2.started')
        space_text_2.setAutoDraw(True)
    
    # *end_prac_text* updates
    if end_prac_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_prac_text.frameNStart = frameN  # exact frame index
        end_prac_text.tStart = t  # local t and not account for scr refresh
        end_prac_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_prac_text, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'end_prac_text.started')
        end_prac_text.setAutoDraw(True)
    
    # *next_key* updates
    waitOnFlip = False
    if next_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        next_key.frameNStart = frameN  # exact frame index
        next_key.tStart = t  # local t and not account for scr refresh
        next_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_key, 'tStartRefresh')  # time at next scr refresh
        next_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(next_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(next_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if next_key.status == STARTED and not waitOnFlip:
        theseKeys = next_key.getKeys(keyList=['space'], waitRelease=False)
        _next_key_allKeys.extend(theseKeys)
        if len(_next_key_allKeys):
            next_key.keys = _next_key_allKeys[-1].name  # just the last key pressed
            next_key.rt = _next_key_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in living_block_feedbackComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "living_block_feedback" ---
for thisComponent in living_block_feedbackComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if next_key.keys in ['', [], None]:  # No response was made
    next_key.keys = None
thisExp.addData('next_key.keys',next_key.keys)
if next_key.keys != None:  # we had a response
    thisExp.addData('next_key.rt', next_key.rt)
thisExp.nextEntry()
# the Routine "living_block_feedback" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "end_practice_block" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# keep track of which components have finished
end_practice_blockComponents = []
for thisComponent in end_practice_blockComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "end_practice_block" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_practice_blockComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "end_practice_block" ---
for thisComponent in end_practice_blockComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from code_8
practice_i = i + 1

shuffle(target_stims)
first_stims = target_stims[0:4]
# the Routine "end_practice_block" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "size_prac_instr" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_prac_2
k = 0

if practice_i == 0:
    practice_text = "In this task you will be presented a word, e.g. 'bug' or 'car' in the middle of the screen. A heart symbol will be located directly above the word. \n \n \n Your task is to decide as fast as possible whether the word, e.g. 'bug', represents a 'LIVING' object or a 'NON-LIVING' object.\n \n Press the E button if the word is a LIVING object. \n Press the I button if the letter is a NON-LIVING object.\n \n \n The computer will tell you if you make a mistake. \n \n \n Press the Spacebar to start practice." 
else:
    practice_text = "In this task you will be presented a word, e.g. 'bug' or 'car' in the middle of the screen. An arrowcross symbol will be located directly above the word. \n \n \n Your task is to decide as fast as possible whether the word represents an object that is BIGGER or SMALLER than a basketball.\n \n Press the E button if the object is BIGGER than a basketball. \n Press the I button if the object is SMALLER than a basketball.\n \n \n The computer will tell you if you make a mistake. \n \n \n Press the Spacebar to start practice." 
size_task_title.reset()
text_26.reset()
key_resp_4_1.keys = []
key_resp_4_1.rt = []
_key_resp_4_1_allKeys = []
# keep track of which components have finished
size_prac_instrComponents = [size_task_title, text_26, key_resp_4_1]
for thisComponent in size_prac_instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "size_prac_instr" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *size_task_title* updates
    if size_task_title.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        size_task_title.frameNStart = frameN  # exact frame index
        size_task_title.tStart = t  # local t and not account for scr refresh
        size_task_title.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(size_task_title, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'size_task_title.started')
        size_task_title.setAutoDraw(True)
    
    # *text_26* updates
    if text_26.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_26.frameNStart = frameN  # exact frame index
        text_26.tStart = t  # local t and not account for scr refresh
        text_26.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_26, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_26.started')
        text_26.setAutoDraw(True)
    if text_26.status == STARTED:  # only update if drawing
        text_26.setText(practice_text, log=False)
    
    # *key_resp_4_1* updates
    waitOnFlip = False
    if key_resp_4_1.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4_1.frameNStart = frameN  # exact frame index
        key_resp_4_1.tStart = t  # local t and not account for scr refresh
        key_resp_4_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4_1, 'tStartRefresh')  # time at next scr refresh
        key_resp_4_1.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4_1.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4_1.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4_1.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4_1.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_4_1_allKeys.extend(theseKeys)
        if len(_key_resp_4_1_allKeys):
            key_resp_4_1.keys = _key_resp_4_1_allKeys[-1].name  # just the last key pressed
            key_resp_4_1.rt = _key_resp_4_1_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in size_prac_instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "size_prac_instr" ---
for thisComponent in size_prac_instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "size_prac_instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "get_ready" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
text_53.reset()
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
# keep track of which components have finished
get_readyComponents = [text_53, space_text, key_resp_9]
for thisComponent in get_readyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "get_ready" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_53* updates
    if text_53.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        text_53.frameNStart = frameN  # exact frame index
        text_53.tStart = t  # local t and not account for scr refresh
        text_53.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_53, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_53.started')
        text_53.setAutoDraw(True)
    
    # *space_text* updates
    if space_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        space_text.frameNStart = frameN  # exact frame index
        space_text.tStart = t  # local t and not account for scr refresh
        space_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_text, 'tStartRefresh')  # time at next scr refresh
        space_text.setAutoDraw(True)
    
    # *key_resp_9* updates
    waitOnFlip = False
    if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
        # keep track of start time/frame for later
        key_resp_9.frameNStart = frameN  # exact frame index
        key_resp_9.tStart = t  # local t and not account for scr refresh
        key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
        key_resp_9.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_9.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_9.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_9_allKeys.extend(theseKeys)
        if len(_key_resp_9_allKeys):
            key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
            key_resp_9.rt = _key_resp_9_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in get_readyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "get_ready" ---
for thisComponent in get_readyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "get_ready" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
prac_trials_2 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('stimuli_prac_2.xlsx'),
    seed=None, name='prac_trials_2')
thisExp.addLoop(prac_trials_2)  # add the loop to the experiment
thisPrac_trial_2 = prac_trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPrac_trial_2.rgb)
if thisPrac_trial_2 != None:
    for paramName in thisPrac_trial_2:
        exec('{} = thisPrac_trial_2[paramName]'.format(paramName))

for thisPrac_trial_2 in prac_trials_2:
    currentLoop = prac_trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisPrac_trial_2.rgb)
    if thisPrac_trial_2 != None:
        for paramName in thisPrac_trial_2:
            exec('{} = thisPrac_trial_2[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "size_prac_cue" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_24
    show_hint = prac_trials_2.thisN < show_hint_on_first_n
    
    if practice_i == 0:
        practice_cue = heart
        #cue_text = "Does the word describe a living thing?"
    else:
        practice_cue = cross
        #cue_text = "Does the word describe a something bigger than a basketball?"
    # keep track of which components have finished
    size_prac_cueComponents = []
    for thisComponent in size_prac_cueComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "size_prac_cue" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in size_prac_cueComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "size_prac_cue" ---
    for thisComponent in size_prac_cueComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "size_prac_cue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    prac_until_correct_2 = data.TrialHandler(nReps=1000.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='prac_until_correct_2')
    thisExp.addLoop(prac_until_correct_2)  # add the loop to the experiment
    thisPrac_until_correct_2 = prac_until_correct_2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPrac_until_correct_2.rgb)
    if thisPrac_until_correct_2 != None:
        for paramName in thisPrac_until_correct_2:
            exec('{} = thisPrac_until_correct_2[paramName]'.format(paramName))
    
    for thisPrac_until_correct_2 in prac_until_correct_2:
        currentLoop = prac_until_correct_2
        # abbreviate parameter names if possible (e.g. rgb = thisPrac_until_correct_2.rgb)
        if thisPrac_until_correct_2 != None:
            for paramName in thisPrac_until_correct_2:
                exec('{} = thisPrac_until_correct_2[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "size_prac_trial" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_5
        if congruency_stim == "congruent":
            corr_ans = "e"
        else:
            corr_ans = "i"
        cue_5.setImage(practice_cue)
        text_10.setText(word)
        prac_2_key_resp.keys = []
        prac_2_key_resp.rt = []
        _prac_2_key_resp_allKeys = []
        feed_sym_6.reset()
        feed_sym_6.setText(feedback_symbol)
        # keep track of which components have finished
        size_prac_trialComponents = [cue_5, text_10, reminder_small, reminder_big, prac_2_key_resp, feed_sym_6, basketball_text]
        for thisComponent in size_prac_trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "size_prac_trial" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *cue_5* updates
            if cue_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cue_5.frameNStart = frameN  # exact frame index
                cue_5.tStart = t  # local t and not account for scr refresh
                cue_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cue_5, 'tStartRefresh')  # time at next scr refresh
                cue_5.setAutoDraw(True)
            
            # *text_10* updates
            if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_10.frameNStart = frameN  # exact frame index
                text_10.tStart = t  # local t and not account for scr refresh
                text_10.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
                text_10.setAutoDraw(True)
            
            # *reminder_small* updates
            if reminder_small.status == NOT_STARTED and show_hint:
                # keep track of start time/frame for later
                reminder_small.frameNStart = frameN  # exact frame index
                reminder_small.tStart = t  # local t and not account for scr refresh
                reminder_small.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(reminder_small, 'tStartRefresh')  # time at next scr refresh
                reminder_small.setAutoDraw(True)
            if reminder_small.status == STARTED:  # only update if drawing
                reminder_small.setText('SMALLER', log=False)
            
            # *reminder_big* updates
            if reminder_big.status == NOT_STARTED and show_hint:
                # keep track of start time/frame for later
                reminder_big.frameNStart = frameN  # exact frame index
                reminder_big.tStart = t  # local t and not account for scr refresh
                reminder_big.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(reminder_big, 'tStartRefresh')  # time at next scr refresh
                reminder_big.setAutoDraw(True)
            if reminder_big.status == STARTED:  # only update if drawing
                reminder_big.setText('BIGGER', log=False)
            
            # *prac_2_key_resp* updates
            waitOnFlip = False
            if prac_2_key_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                prac_2_key_resp.frameNStart = frameN  # exact frame index
                prac_2_key_resp.tStart = t  # local t and not account for scr refresh
                prac_2_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_2_key_resp, 'tStartRefresh')  # time at next scr refresh
                prac_2_key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(prac_2_key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(prac_2_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if prac_2_key_resp.status == STARTED and not waitOnFlip:
                theseKeys = prac_2_key_resp.getKeys(keyList=['i', 'e'], waitRelease=False)
                _prac_2_key_resp_allKeys.extend(theseKeys)
                if len(_prac_2_key_resp_allKeys):
                    prac_2_key_resp.keys = _prac_2_key_resp_allKeys[-1].name  # just the last key pressed
                    prac_2_key_resp.rt = _prac_2_key_resp_allKeys[-1].rt
                    # was this correct?
                    if (prac_2_key_resp.keys == str(corr_ans)) or (prac_2_key_resp.keys == corr_ans):
                        prac_2_key_resp.corr = 1
                    else:
                        prac_2_key_resp.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *feed_sym_6* updates
            if feed_sym_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                feed_sym_6.frameNStart = frameN  # exact frame index
                feed_sym_6.tStart = t  # local t and not account for scr refresh
                feed_sym_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feed_sym_6, 'tStartRefresh')  # time at next scr refresh
                feed_sym_6.setAutoDraw(True)
            
            # *basketball_text* updates
            if basketball_text.status == NOT_STARTED and show_hint:
                # keep track of start time/frame for later
                basketball_text.frameNStart = frameN  # exact frame index
                basketball_text.tStart = t  # local t and not account for scr refresh
                basketball_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(basketball_text, 'tStartRefresh')  # time at next scr refresh
                basketball_text.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in size_prac_trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "size_prac_trial" ---
        for thisComponent in size_prac_trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_5
        # incorrect answer
        if prac_2_key_resp.corr == 0:
            feedback_symbol = "X"
        # correct answer
        else:
            feedback_symbol = ""
            # proceed to next cue
            prac_until_correct_2.finished = True
        # check responses
        if prac_2_key_resp.keys in ['', [], None]:  # No response was made
            prac_2_key_resp.keys = None
            # was no response the correct answer?!
            if str(corr_ans).lower() == 'none':
               prac_2_key_resp.corr = 1;  # correct non-response
            else:
               prac_2_key_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for prac_until_correct_2 (TrialHandler)
        prac_until_correct_2.addData('prac_2_key_resp.keys',prac_2_key_resp.keys)
        prac_until_correct_2.addData('prac_2_key_resp.corr', prac_2_key_resp.corr)
        if prac_2_key_resp.keys != None:  # we had a response
            prac_until_correct_2.addData('prac_2_key_resp.rt', prac_2_key_resp.rt)
        # the Routine "size_prac_trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1000.0 repeats of 'prac_until_correct_2'
    
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'prac_trials_2'


# --- Prepare to start Routine "size_block_feedback" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
title.reset()
end_prac_text_2.reset()
next_key_4.keys = []
next_key_4.rt = []
_next_key_4_allKeys = []
# keep track of which components have finished
size_block_feedbackComponents = [title, end_prac_text_2, space_text_5, next_key_4]
for thisComponent in size_block_feedbackComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "size_block_feedback" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *title* updates
    if title.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        title.frameNStart = frameN  # exact frame index
        title.tStart = t  # local t and not account for scr refresh
        title.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(title, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'title.started')
        title.setAutoDraw(True)
    
    # *end_prac_text_2* updates
    if end_prac_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_prac_text_2.frameNStart = frameN  # exact frame index
        end_prac_text_2.tStart = t  # local t and not account for scr refresh
        end_prac_text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_prac_text_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'end_prac_text_2.started')
        end_prac_text_2.setAutoDraw(True)
    
    # *space_text_5* updates
    if space_text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        space_text_5.frameNStart = frameN  # exact frame index
        space_text_5.tStart = t  # local t and not account for scr refresh
        space_text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_text_5, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'space_text_5.started')
        space_text_5.setAutoDraw(True)
    
    # *next_key_4* updates
    waitOnFlip = False
    if next_key_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        next_key_4.frameNStart = frameN  # exact frame index
        next_key_4.tStart = t  # local t and not account for scr refresh
        next_key_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_key_4, 'tStartRefresh')  # time at next scr refresh
        next_key_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(next_key_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(next_key_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if next_key_4.status == STARTED and not waitOnFlip:
        theseKeys = next_key_4.getKeys(keyList=['space'], waitRelease=False)
        _next_key_4_allKeys.extend(theseKeys)
        if len(_next_key_4_allKeys):
            next_key_4.keys = _next_key_4_allKeys[-1].name  # just the last key pressed
            next_key_4.rt = _next_key_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in size_block_feedbackComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "size_block_feedback" ---
for thisComponent in size_block_feedbackComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if next_key_4.keys in ['', [], None]:  # No response was made
    next_key_4.keys = None
thisExp.addData('next_key_4.keys',next_key_4.keys)
if next_key_4.keys != None:  # we had a response
    thisExp.addData('next_key_4.rt', next_key_4.rt)
thisExp.nextEntry()
# the Routine "size_block_feedback" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "end_practice_block" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# keep track of which components have finished
end_practice_blockComponents = []
for thisComponent in end_practice_blockComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "end_practice_block" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_practice_blockComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "end_practice_block" ---
for thisComponent in end_practice_blockComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from code_8
practice_i = i + 1

shuffle(target_stims)
first_stims = target_stims[0:4]
# the Routine "end_practice_block" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "joint_prac_instr" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_21
k = 0

comb_prac_title.reset()
comb_prac_instr_2.reset()
next_key_2.keys = []
next_key_2.rt = []
_next_key_2_allKeys = []
# keep track of which components have finished
joint_prac_instrComponents = [comb_prac_title, comb_prac_instr_2, space_text_3, next_key_2]
for thisComponent in joint_prac_instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "joint_prac_instr" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *comb_prac_title* updates
    if comb_prac_title.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        comb_prac_title.frameNStart = frameN  # exact frame index
        comb_prac_title.tStart = t  # local t and not account for scr refresh
        comb_prac_title.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(comb_prac_title, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'comb_prac_title.started')
        comb_prac_title.setAutoDraw(True)
    
    # *comb_prac_instr_2* updates
    if comb_prac_instr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        comb_prac_instr_2.frameNStart = frameN  # exact frame index
        comb_prac_instr_2.tStart = t  # local t and not account for scr refresh
        comb_prac_instr_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(comb_prac_instr_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'comb_prac_instr_2.started')
        comb_prac_instr_2.setAutoDraw(True)
    
    # *space_text_3* updates
    if space_text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        space_text_3.frameNStart = frameN  # exact frame index
        space_text_3.tStart = t  # local t and not account for scr refresh
        space_text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_text_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'space_text_3.started')
        space_text_3.setAutoDraw(True)
    
    # *next_key_2* updates
    waitOnFlip = False
    if next_key_2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
        # keep track of start time/frame for later
        next_key_2.frameNStart = frameN  # exact frame index
        next_key_2.tStart = t  # local t and not account for scr refresh
        next_key_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_key_2, 'tStartRefresh')  # time at next scr refresh
        next_key_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(next_key_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(next_key_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if next_key_2.status == STARTED and not waitOnFlip:
        theseKeys = next_key_2.getKeys(keyList=['space'], waitRelease=False)
        _next_key_2_allKeys.extend(theseKeys)
        if len(_next_key_2_allKeys):
            next_key_2.keys = _next_key_2_allKeys[-1].name  # just the last key pressed
            next_key_2.rt = _next_key_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in joint_prac_instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "joint_prac_instr" ---
for thisComponent in joint_prac_instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if next_key_2.keys in ['', [], None]:  # No response was made
    next_key_2.keys = None
thisExp.addData('next_key_2.keys',next_key_2.keys)
if next_key_2.keys != None:  # we had a response
    thisExp.addData('next_key_2.rt', next_key_2.rt)
thisExp.nextEntry()
# the Routine "joint_prac_instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "get_ready" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
text_53.reset()
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
# keep track of which components have finished
get_readyComponents = [text_53, space_text, key_resp_9]
for thisComponent in get_readyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "get_ready" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_53* updates
    if text_53.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        text_53.frameNStart = frameN  # exact frame index
        text_53.tStart = t  # local t and not account for scr refresh
        text_53.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_53, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_53.started')
        text_53.setAutoDraw(True)
    
    # *space_text* updates
    if space_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        space_text.frameNStart = frameN  # exact frame index
        space_text.tStart = t  # local t and not account for scr refresh
        space_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_text, 'tStartRefresh')  # time at next scr refresh
        space_text.setAutoDraw(True)
    
    # *key_resp_9* updates
    waitOnFlip = False
    if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
        # keep track of start time/frame for later
        key_resp_9.frameNStart = frameN  # exact frame index
        key_resp_9.tStart = t  # local t and not account for scr refresh
        key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
        key_resp_9.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_9.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_9.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_9_allKeys.extend(theseKeys)
        if len(_key_resp_9_allKeys):
            key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
            key_resp_9.rt = _key_resp_9_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in get_readyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "get_ready" ---
for thisComponent in get_readyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "get_ready" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
prac_trials_3 = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('stimuli_prac_3.xlsx'),
    seed=None, name='prac_trials_3')
thisExp.addLoop(prac_trials_3)  # add the loop to the experiment
thisPrac_trial_3 = prac_trials_3.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPrac_trial_3.rgb)
if thisPrac_trial_3 != None:
    for paramName in thisPrac_trial_3:
        exec('{} = thisPrac_trial_3[paramName]'.format(paramName))

for thisPrac_trial_3 in prac_trials_3:
    currentLoop = prac_trials_3
    # abbreviate parameter names if possible (e.g. rgb = thisPrac_trial_3.rgb)
    if thisPrac_trial_3 != None:
        for paramName in thisPrac_trial_3:
            exec('{} = thisPrac_trial_3[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "joint_prac_cue" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_11
    if characteristic == "living":
        practice_cue = heart
        task_reminder = "LIVING TASK"
        left_reminder_text = "LIVING"
        right_reminder_text = "NON-LIVING"
    else:
        practice_cue = cross
        task_reminder = "SIZE TASK"
        left_reminder_text = "BIGGER"
        right_reminder_text = "SMALLER"
    # keep track of which components have finished
    joint_prac_cueComponents = []
    for thisComponent in joint_prac_cueComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "joint_prac_cue" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in joint_prac_cueComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "joint_prac_cue" ---
    for thisComponent in joint_prac_cueComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "joint_prac_cue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    prac_until_correct_3 = data.TrialHandler(nReps=1000.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='prac_until_correct_3')
    thisExp.addLoop(prac_until_correct_3)  # add the loop to the experiment
    thisPrac_until_correct_3 = prac_until_correct_3.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPrac_until_correct_3.rgb)
    if thisPrac_until_correct_3 != None:
        for paramName in thisPrac_until_correct_3:
            exec('{} = thisPrac_until_correct_3[paramName]'.format(paramName))
    
    for thisPrac_until_correct_3 in prac_until_correct_3:
        currentLoop = prac_until_correct_3
        # abbreviate parameter names if possible (e.g. rgb = thisPrac_until_correct_3.rgb)
        if thisPrac_until_correct_3 != None:
            for paramName in thisPrac_until_correct_3:
                exec('{} = thisPrac_until_correct_3[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "joint_prac_trial" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_12
        if congruency_stim == "congruent":
            corr_ans = "e"
        else:
            corr_ans = "i"
        cue_6.setImage(practice_cue)
        text_15.setText(word)
        prac_3_key_resp.keys = []
        prac_3_key_resp.rt = []
        _prac_3_key_resp_allKeys = []
        feedback_text.reset()
        feedback_text.setText(task_reminder)
        left_reminder.reset()
        left_reminder.setText(left_reminder_text)
        right_reminder.reset()
        right_reminder.setText(right_reminder_text)
        basketball_text_2.setText('than a basketball')
        # keep track of which components have finished
        joint_prac_trialComponents = [cue_6, text_15, prac_3_key_resp, feedback_text, left_reminder, right_reminder, basketball_text_2]
        for thisComponent in joint_prac_trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "joint_prac_trial" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *cue_6* updates
            if cue_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cue_6.frameNStart = frameN  # exact frame index
                cue_6.tStart = t  # local t and not account for scr refresh
                cue_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cue_6, 'tStartRefresh')  # time at next scr refresh
                cue_6.setAutoDraw(True)
            
            # *text_15* updates
            if text_15.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                text_15.frameNStart = frameN  # exact frame index
                text_15.tStart = t  # local t and not account for scr refresh
                text_15.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_15, 'tStartRefresh')  # time at next scr refresh
                text_15.setAutoDraw(True)
            
            # *prac_3_key_resp* updates
            waitOnFlip = False
            if prac_3_key_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                prac_3_key_resp.frameNStart = frameN  # exact frame index
                prac_3_key_resp.tStart = t  # local t and not account for scr refresh
                prac_3_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_3_key_resp, 'tStartRefresh')  # time at next scr refresh
                prac_3_key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(prac_3_key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(prac_3_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if prac_3_key_resp.status == STARTED and not waitOnFlip:
                theseKeys = prac_3_key_resp.getKeys(keyList=['i','e'], waitRelease=False)
                _prac_3_key_resp_allKeys.extend(theseKeys)
                if len(_prac_3_key_resp_allKeys):
                    prac_3_key_resp.keys = _prac_3_key_resp_allKeys[-1].name  # just the last key pressed
                    prac_3_key_resp.rt = _prac_3_key_resp_allKeys[-1].rt
                    # was this correct?
                    if (prac_3_key_resp.keys == str(corr_ans)) or (prac_3_key_resp.keys == corr_ans):
                        prac_3_key_resp.corr = 1
                    else:
                        prac_3_key_resp.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *feedback_text* updates
            if feedback_text.status == NOT_STARTED and show_hint:
                # keep track of start time/frame for later
                feedback_text.frameNStart = frameN  # exact frame index
                feedback_text.tStart = t  # local t and not account for scr refresh
                feedback_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feedback_text, 'tStartRefresh')  # time at next scr refresh
                feedback_text.setAutoDraw(True)
            
            # *left_reminder* updates
            if left_reminder.status == NOT_STARTED and show_hint:
                # keep track of start time/frame for later
                left_reminder.frameNStart = frameN  # exact frame index
                left_reminder.tStart = t  # local t and not account for scr refresh
                left_reminder.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(left_reminder, 'tStartRefresh')  # time at next scr refresh
                left_reminder.setAutoDraw(True)
            
            # *right_reminder* updates
            if right_reminder.status == NOT_STARTED and show_hint:
                # keep track of start time/frame for later
                right_reminder.frameNStart = frameN  # exact frame index
                right_reminder.tStart = t  # local t and not account for scr refresh
                right_reminder.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(right_reminder, 'tStartRefresh')  # time at next scr refresh
                right_reminder.setAutoDraw(True)
            
            # *basketball_text_2* updates
            if basketball_text_2.status == NOT_STARTED and show_hint && characteristic == "size":
                # keep track of start time/frame for later
                basketball_text_2.frameNStart = frameN  # exact frame index
                basketball_text_2.tStart = t  # local t and not account for scr refresh
                basketball_text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(basketball_text_2, 'tStartRefresh')  # time at next scr refresh
                basketball_text_2.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in joint_prac_trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "joint_prac_trial" ---
        for thisComponent in joint_prac_trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_12
        # incorrect answer
        if prac_3_key_resp.corr == 0:
            show_hint = True
        # correct answer
        else:
            show_hint = False
            # proceed to next cue
            prac_until_correct_3.finished = True
        # check responses
        if prac_3_key_resp.keys in ['', [], None]:  # No response was made
            prac_3_key_resp.keys = None
            # was no response the correct answer?!
            if str(corr_ans).lower() == 'none':
               prac_3_key_resp.corr = 1;  # correct non-response
            else:
               prac_3_key_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for prac_until_correct_3 (TrialHandler)
        prac_until_correct_3.addData('prac_3_key_resp.keys',prac_3_key_resp.keys)
        prac_until_correct_3.addData('prac_3_key_resp.corr', prac_3_key_resp.corr)
        if prac_3_key_resp.keys != None:  # we had a response
            prac_until_correct_3.addData('prac_3_key_resp.rt', prac_3_key_resp.rt)
        # the Routine "joint_prac_trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1000.0 repeats of 'prac_until_correct_3'
    
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'prac_trials_3'


# --- Prepare to start Routine "end_practice_block" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# keep track of which components have finished
end_practice_blockComponents = []
for thisComponent in end_practice_blockComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "end_practice_block" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_practice_blockComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "end_practice_block" ---
for thisComponent in end_practice_blockComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from code_8
practice_i = i + 1

shuffle(target_stims)
first_stims = target_stims[0:4]
# the Routine "end_practice_block" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "main_instr" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# Run 'Begin Routine' code from code_23
i = 0
k = 0



alive = first_stims[0][2]
new_trial_congruent = first_stims[0][1]


trial_switch_array = []
trial_congruent_array = []
trial_alive_array = []
main_task_title.reset()
task_instr.reset()
next_key_3.keys = []
next_key_3.rt = []
_next_key_3_allKeys = []
# keep track of which components have finished
main_instrComponents = [main_task_title, task_instr, space_text_4, next_key_3]
for thisComponent in main_instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "main_instr" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *main_task_title* updates
    if main_task_title.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        main_task_title.frameNStart = frameN  # exact frame index
        main_task_title.tStart = t  # local t and not account for scr refresh
        main_task_title.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(main_task_title, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'main_task_title.started')
        main_task_title.setAutoDraw(True)
    
    # *task_instr* updates
    if task_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        task_instr.frameNStart = frameN  # exact frame index
        task_instr.tStart = t  # local t and not account for scr refresh
        task_instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(task_instr, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'task_instr.started')
        task_instr.setAutoDraw(True)
    
    # *space_text_4* updates
    if space_text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        space_text_4.frameNStart = frameN  # exact frame index
        space_text_4.tStart = t  # local t and not account for scr refresh
        space_text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_text_4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'space_text_4.started')
        space_text_4.setAutoDraw(True)
    
    # *next_key_3* updates
    waitOnFlip = False
    if next_key_3.status == NOT_STARTED and tThisFlip >= 0.2-frameTolerance:
        # keep track of start time/frame for later
        next_key_3.frameNStart = frameN  # exact frame index
        next_key_3.tStart = t  # local t and not account for scr refresh
        next_key_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_key_3, 'tStartRefresh')  # time at next scr refresh
        next_key_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(next_key_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(next_key_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if next_key_3.status == STARTED and not waitOnFlip:
        theseKeys = next_key_3.getKeys(keyList=['space'], waitRelease=False)
        _next_key_3_allKeys.extend(theseKeys)
        if len(_next_key_3_allKeys):
            next_key_3.keys = _next_key_3_allKeys[-1].name  # just the last key pressed
            next_key_3.rt = _next_key_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in main_instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "main_instr" ---
for thisComponent in main_instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "main_instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "get_ready" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
text_53.reset()
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
# keep track of which components have finished
get_readyComponents = [text_53, space_text, key_resp_9]
for thisComponent in get_readyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "get_ready" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_53* updates
    if text_53.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        text_53.frameNStart = frameN  # exact frame index
        text_53.tStart = t  # local t and not account for scr refresh
        text_53.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_53, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_53.started')
        text_53.setAutoDraw(True)
    
    # *space_text* updates
    if space_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        space_text.frameNStart = frameN  # exact frame index
        space_text.tStart = t  # local t and not account for scr refresh
        space_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_text, 'tStartRefresh')  # time at next scr refresh
        space_text.setAutoDraw(True)
    
    # *key_resp_9* updates
    waitOnFlip = False
    if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
        # keep track of start time/frame for later
        key_resp_9.frameNStart = frameN  # exact frame index
        key_resp_9.tStart = t  # local t and not account for scr refresh
        key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
        key_resp_9.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_9.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_9.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_9_allKeys.extend(theseKeys)
        if len(_key_resp_9_allKeys):
            key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
            key_resp_9.rt = _key_resp_9_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in get_readyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "get_ready" ---
for thisComponent in get_readyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "get_ready" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
blocks = data.TrialHandler(nReps=block_total, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='blocks')
thisExp.addLoop(blocks)  # add the loop to the experiment
thisBlock = blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in blocks:
    currentLoop = blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "main_setup" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_26
    i = 0
    k = 0
    
    
    
    alive = first_stims[0][2]
    new_trial_congruent = first_stims[0][1]
    
    
    trial_switch_array = []
    trial_congruent_array = []
    trial_alive_array = []
    
    # new method
    living_stims = []
    size_stims = []
    # keep track of which components have finished
    main_setupComponents = []
    for thisComponent in main_setupComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "main_setup" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in main_setupComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "main_setup" ---
    for thisComponent in main_setupComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "main_setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "first_cue" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_17
    if alive == "alive":
        cue_stim = heart
    else:
        cue_stim = cross
    # keep track of which components have finished
    first_cueComponents = []
    for thisComponent in first_cueComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "first_cue" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in first_cueComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "first_cue" ---
    for thisComponent in first_cueComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "first_cue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "first_trial" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_16
    if new_trial_congruent == "congruent":
        corr_ans = "e"
    else:
        corr_ans = "i"
    cue_7.setImage(cue_stim)
    text_2.setText(first_stims[k][0])
    key_resp_4.keys = []
    key_resp_4.rt = []
    _key_resp_4_allKeys = []
    # keep track of which components have finished
    first_trialComponents = [cue_7, text_2, key_resp_4]
    for thisComponent in first_trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "first_trial" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *cue_7* updates
        if cue_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cue_7.frameNStart = frameN  # exact frame index
            cue_7.tStart = t  # local t and not account for scr refresh
            cue_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cue_7, 'tStartRefresh')  # time at next scr refresh
            cue_7.setAutoDraw(True)
        
        # *text_2* updates
        if text_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            text_2.setAutoDraw(True)
        
        # *key_resp_4* updates
        waitOnFlip = False
        if key_resp_4.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_4.frameNStart = frameN  # exact frame index
            key_resp_4.tStart = t  # local t and not account for scr refresh
            key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
            key_resp_4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_4.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_4.getKeys(keyList=['e','i'], waitRelease=False)
            _key_resp_4_allKeys.extend(theseKeys)
            if len(_key_resp_4_allKeys):
                key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
                key_resp_4.rt = _key_resp_4_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in first_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "first_trial" ---
    for thisComponent in first_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_4.keys in ['', [], None]:  # No response was made
        key_resp_4.keys = None
    blocks.addData('key_resp_4.keys',key_resp_4.keys)
    if key_resp_4.keys != None:  # we had a response
        blocks.addData('key_resp_4.rt', key_resp_4.rt)
    # the Routine "first_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials_setup_loop = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('stimuli.csv'),
        seed=None, name='trials_setup_loop')
    thisExp.addLoop(trials_setup_loop)  # add the loop to the experiment
    thisTrials_setup_loop = trials_setup_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_setup_loop.rgb)
    if thisTrials_setup_loop != None:
        for paramName in thisTrials_setup_loop:
            exec('{} = thisTrials_setup_loop[paramName]'.format(paramName))
    
    for thisTrials_setup_loop in trials_setup_loop:
        currentLoop = trials_setup_loop
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_setup_loop.rgb)
        if thisTrials_setup_loop != None:
            for paramName in thisTrials_setup_loop:
                exec('{} = thisTrials_setup_loop[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "trial_setup" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_18
        if characteristic == "living":
            living_stims.append(
                ["living", word, congruency, congruency_side, answer_key]
            )
        elif characteristic == "size":
            size_stims.append(
                ["size", word, congruency, congruency_side, answer_key]
            )
        else:
            raise Exception("Non-recognisable characteristic.");
        # keep track of which components have finished
        trial_setupComponents = []
        for thisComponent in trial_setupComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "trial_setup" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trial_setupComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "trial_setup" ---
        for thisComponent in trial_setupComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "trial_setup" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
    # completed 1.0 repeats of 'trials_setup_loop'
    
    
    # --- Prepare to start Routine "create_trial_list" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_29
    nonrandom = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    
    characteristic_list = None
    randomised = None
    idx = 0
    
    while True:
        characteristic_list = []
        randomised = util.shuffle(nonrandom)
        idx = 0
        while idx < len(randomised):
            if idx == 0:
                characteristic_list.append(True)
            # 0 means no switch, so we keep the same characteristic
            elif not randomised[idx]:
                # this is to force the value to be a boolean in Javascript
                characteristic_list.append(not not characteristic_list[idx-1])
            # 1 mean switch, so we flip the characteristic
            else:
                characteristic_list.append(not not not characteristic_list[idx-1])
            idx += 1
        if characteristic_list.count(True) == characteristic_list.count(False):
            break
     
    # at this point we have a balanced list of living and size stims in a
    # 16 switch and 16 non-switch list
    
    # now to create the final balanced switch/nonswitch vs congruent/incongruent list
    trial_list = None
    randomised_living_stims = None
    randomised_size_stims = None
    switch_con_combi = None
    while True:
        trial_list = []
        
        # [:] is to create a copy of the list, else the original would be modified
        # by the .pop() later on
        randomised_living_stims = util.shuffle(living_stims[:])
        randomised_size_stims = util.shuffle(size_stims[:])
    
        idx = 0
        while idx < len(characteristic_list):
            if characteristic_list[idx]:
                trial_list.append([randomised[idx]].extend(randomised_living_stims.pop()))
            else:
                trial_list.append([randomised[idx]].extend(randomised_size_stims.pop()))
            idx += 1
            
        switch_con_combi = []
        for item in trial_list:
            # create a list of [0congruent, 0incongruent, 1congruent, 1incongruent, ...]
            switch_con_combi.append(str(item[0]) + item[3])
            
        # make sure they are balanced, if not then retry
        if (
            switch_con_combi.count("0congruent") == 
            switch_con_combi.count("0incongruent") ==
            switch_con_combi.count("1congruent") == 
            switch_con_combi.count("1incongruent")
        ):
            break
        
    # at this point we have the list, ready to be used in the main trial
    print(trial_list)
    # keep track of which components have finished
    create_trial_listComponents = []
    for thisComponent in create_trial_listComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "create_trial_list" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in create_trial_listComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "create_trial_list" ---
    for thisComponent in create_trial_listComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "create_trial_list" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=32.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "cue_presentation" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_3
        if trial_list[k][1] == "living":
            cue_stim = heart
        else:
            cue_stim = cross
            
        cue_word = trial_list[k][2]
        # keep track of which components have finished
        cue_presentationComponents = []
        for thisComponent in cue_presentationComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "cue_presentation" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in cue_presentationComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "cue_presentation" ---
        for thisComponent in cue_presentationComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "cue_presentation" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "trial" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_2
        show_feedback = False
        
        corr_ans = trial_list[k][5]
        cue_8.setImage(cue_stim)
        text.setText(cue_word)
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        # keep track of which components have finished
        trialComponents = [cue_8, text, key_resp]
        for thisComponent in trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "trial" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *cue_8* updates
            if cue_8.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                cue_8.frameNStart = frameN  # exact frame index
                cue_8.tStart = t  # local t and not account for scr refresh
                cue_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cue_8, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'cue_8.started')
                cue_8.setAutoDraw(True)
            
            # *text* updates
            if text.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                text.frameNStart = frameN  # exact frame index
                text.tStart = t  # local t and not account for scr refresh
                text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text.started')
                text.setAutoDraw(True)
            
            # *key_resp* updates
            waitOnFlip = False
            if key_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                key_resp.frameNStart = frameN  # exact frame index
                key_resp.tStart = t  # local t and not account for scr refresh
                key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp.started')
                key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['e','i'], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                    key_resp.rt = _key_resp_allKeys[-1].rt
                    # was this correct?
                    if (key_resp.keys == str(corr_ans)) or (key_resp.keys == corr_ans):
                        key_resp.corr = 1
                    else:
                        key_resp.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "trial" ---
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
            # was no response the correct answer?!
            if str(corr_ans).lower() == 'none':
               key_resp.corr = 1;  # correct non-response
            else:
               key_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for trials (TrialHandler)
        trials.addData('key_resp.keys',key_resp.keys)
        trials.addData('key_resp.corr', key_resp.corr)
        if key_resp.keys != None:  # we had a response
            trials.addData('key_resp.rt', key_resp.rt)
        # the Routine "trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "trial_feedback" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_25
        print("trial_feedback")
        print(key_resp.corr)
        print(show_feedback)
        # incorrect answer
        if key_resp.corr == 0:
            show_feedback = True
        # correct answer
        else:
            continueRoutine = False
        cue.setImage(cue_stim)
        text_11.setText(cue_word)
        feed_sym_8.reset()
        feed_sym_8.setText('X')
        # keep track of which components have finished
        trial_feedbackComponents = [cue, text_11, feed_sym_8]
        for thisComponent in trial_feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "trial_feedback" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *cue* updates
            if cue.status == NOT_STARTED and show_feedback:
                # keep track of start time/frame for later
                cue.frameNStart = frameN  # exact frame index
                cue.tStart = t  # local t and not account for scr refresh
                cue.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cue, 'tStartRefresh')  # time at next scr refresh
                cue.setAutoDraw(True)
            if cue.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cue.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    cue.tStop = t  # not accounting for scr refresh
                    cue.frameNStop = frameN  # exact frame index
                    cue.setAutoDraw(False)
            
            # *text_11* updates
            if text_11.status == NOT_STARTED and show_feedback:
                # keep track of start time/frame for later
                text_11.frameNStart = frameN  # exact frame index
                text_11.tStart = t  # local t and not account for scr refresh
                text_11.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
                text_11.setAutoDraw(True)
            if text_11.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_11.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    text_11.tStop = t  # not accounting for scr refresh
                    text_11.frameNStop = frameN  # exact frame index
                    text_11.setAutoDraw(False)
            
            # *feed_sym_8* updates
            if feed_sym_8.status == NOT_STARTED and show_feedback:
                # keep track of start time/frame for later
                feed_sym_8.frameNStart = frameN  # exact frame index
                feed_sym_8.tStart = t  # local t and not account for scr refresh
                feed_sym_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feed_sym_8, 'tStartRefresh')  # time at next scr refresh
                feed_sym_8.setAutoDraw(True)
            if feed_sym_8.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > feed_sym_8.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    feed_sym_8.tStop = t  # not accounting for scr refresh
                    feed_sym_8.frameNStop = frameN  # exact frame index
                    feed_sym_8.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trial_feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "trial_feedback" ---
        for thisComponent in trial_feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_25
        k += 1
        # the Routine "trial_feedback" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 32.0 repeats of 'trials'
    
# completed block_total repeats of 'blocks'


# --- Prepare to start Routine "end_exp" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
text_8.reset()
key_resp_8.keys = []
key_resp_8.rt = []
_key_resp_8_allKeys = []
# keep track of which components have finished
end_expComponents = [text_8, exit_key, key_resp_8]
for thisComponent in end_expComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "end_exp" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_8* updates
    if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_8.frameNStart = frameN  # exact frame index
        text_8.tStart = t  # local t and not account for scr refresh
        text_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_8.started')
        text_8.setAutoDraw(True)
    
    # *exit_key* updates
    if exit_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        exit_key.frameNStart = frameN  # exact frame index
        exit_key.tStart = t  # local t and not account for scr refresh
        exit_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(exit_key, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'exit_key.started')
        exit_key.setAutoDraw(True)
    
    # *key_resp_8* updates
    waitOnFlip = False
    if key_resp_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_8.frameNStart = frameN  # exact frame index
        key_resp_8.tStart = t  # local t and not account for scr refresh
        key_resp_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_8, 'tStartRefresh')  # time at next scr refresh
        key_resp_8.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_8.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_8.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_8.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_8.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_8_allKeys.extend(theseKeys)
        if len(_key_resp_8_allKeys):
            key_resp_8.keys = _key_resp_8_allKeys[-1].name  # just the last key pressed
            key_resp_8.rt = _key_resp_8_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_expComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "end_exp" ---
for thisComponent in end_expComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from code_28
win.mouseVisible = True
# the Routine "end_exp" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
