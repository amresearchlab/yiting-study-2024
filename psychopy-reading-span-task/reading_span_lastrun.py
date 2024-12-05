#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.4),
    on January 20, 2023, at 14:23
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
psychopyVersion = '2022.2.4'
expName = 'reading_span'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\yiting\\Desktop\\Meh\\Liverpool\\Academic\\Experiment\\02. Principle\\reading_span-master-sw-FINAL\\reading_span_lastrun.py',
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
    size=[1536, 864], fullscr=True, screen=2, 
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

# --- Initialize components for Routine "lett_prac_instr1" ---
lett_instr_1 = visual.TextBox2(
     win, text='In this task you will try to memorise letters you see on the screen while you also read sentences.\n\nIn the next few minutes, you will have some practice to get you familiar with how the task works.\n\nWe will begin by practicing the letter part of the task.\n\n\n--press SPACEBAR to begin--', font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.3, 1.0), borderWidth=7.0,
     color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
     opacity=1.0,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=[-1.0000, -1.0000, -1.0000], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='lett_instr_1',
     autoLog=False,
)
lett_space_1 = keyboard.Keyboard()

# --- Initialize components for Routine "lett_prac_instr2" ---
lett_instr_2 = visual.TextBox2(
     win, text='For this practice set, letters will appear on the screen one at a time. Try to remember each letter in the order presented.\n\nAfter 2-3 letters have been presented, you will see a screen listing 12 possible letters.\n\nYour job is to select each letter in the order presented.\nTo do this, use the mouse to select each letter.\n\nThe letters you select will appear at the bottom of the screen.\n\n\n--press SPACEBAR to continue--', font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.3, 1.0), borderWidth=7.0,
     color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
     opacity=1.0,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=[-1.0000, -1.0000, -1.0000], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='lett_instr_2',
     autoLog=False,
)
lett_space_2 = keyboard.Keyboard()

# --- Initialize components for Routine "lett_prac_instr3" ---
lett_instr_3 = visual.TextBox2(
     win, text="When you have selected all the letters, and they are in the correct order, click the NEXT button at the bottom right of the screen.\n\nIf you make a mistake, click CLEAR to start over.\n\nIf you forget one of the letters, click BLANK to mark the spot for the missing letter.\n\nRemember, is it very important to get the letters in the same order as you saw them.\n\nIf you forget one, use the BLANK box to mark the position.\n\n\n--when you're ready, press SPACEBAR to start the letter practice--", font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.3, 1.0), borderWidth=7.0,
     color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
     opacity=1.0,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=[-1.0000, -1.0000, -1.0000], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='lett_instr_3',
     autoLog=False,
)
lett_space_3 = keyboard.Keyboard()

# --- Initialize components for Routine "intro_2" ---
intro_text = visual.TextStim(win=win, name='intro_text',
    text='This is a practice trial',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "letter_practice_init" ---
# Run 'Begin Experiment' code from init
perfect_scores = []
trial_scores = []

# --- Initialize components for Routine "practice_letter_display_2" ---
display_letter_jp = visual.TextStim(win=win, name='display_letter_jp',
    text='',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "practice_letters_response" ---
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()
remind_text = visual.TextStim(win=win, name='remind_text',
    text='Select the letters in the order presented. Use the BLANK button to fill in forgotten letters.',
    font='Arial',
    pos=(0, 0.40), height=0.035, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
prac_letter_S = visual.TextStim(win=win, name='prac_letter_S',
    text='S',
    font='Arial',
    pos=(-0.3, -0.12), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
prac_letter_P = visual.TextStim(win=win, name='prac_letter_P',
    text='P',
    font='Arial',
    pos=(-0.3, 0.01), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
prac_letter_K = visual.TextStim(win=win, name='prac_letter_K',
    text='K',
    font='Arial',
    pos=(-0.3, 0.13), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
prac_letter_F = visual.TextStim(win=win, name='prac_letter_F',
    text='F',
    font='Arial',
    pos=(-0.3, 0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
prac_letter_T = visual.TextStim(win=win, name='prac_letter_T',
    text='T',
    font='Arial',
    pos=(0, -0.12), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
prac_letter_Q = visual.TextStim(win=win, name='prac_letter_Q',
    text='Q',
    font='Arial',
    pos=(0, 0.01), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
prac_letter_L = visual.TextStim(win=win, name='prac_letter_L',
    text='L',
    font='Arial',
    pos=(0, 0.13), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
prac_letter_H = visual.TextStim(win=win, name='prac_letter_H',
    text='H',
    font='Arial',
    pos=(0, 0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
prac_letter_Y = visual.TextStim(win=win, name='prac_letter_Y',
    text='Y',
    font='Arial',
    pos=(0.3, -0.12), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-11.0);
prac_letter_R = visual.TextStim(win=win, name='prac_letter_R',
    text='R',
    font='Arial',
    pos=(0.3, 0.01), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-12.0);
prac_letter_N = visual.TextStim(win=win, name='prac_letter_N',
    text='N',
    font='Arial',
    pos=(0.3, 0.13), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-13.0);
prac_letter_J = visual.TextStim(win=win, name='prac_letter_J',
    text='J',
    font='Arial',
    pos=(0.3, 0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-14.0);
blank_letter_BG = visual.Rect(
    win=win, name='blank_letter_BG',
    width=(0.16, 0.065)[0], height=(0.16, 0.065)[1],
    ori=0.0, pos=(0, -0.25), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-15.0, interpolate=True)
clear_letters_BG = visual.Rect(
    win=win, name='clear_letters_BG',
    width=(0.16, 0.065)[0], height=(0.16, 0.065)[1],
    ori=0.0, pos=(-0.5, -0.40), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-16.0, interpolate=True)
next_practice_BG = visual.Rect(
    win=win, name='next_practice_BG',
    width=(0.16, 0.065)[0], height=(0.16, 0.065)[1],
    ori=0.0, pos=(0.5, -0.40), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-17.0, interpolate=True)
blank_letter = visual.TextStim(win=win, name='blank_letter',
    text='BLANK',
    font='Arial',
    pos=(0, -0.25), height=0.04, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-18.0);
display_letters_clicked = visual.TextStim(win=win, name='display_letters_clicked',
    text=None,
    font='Arial',
    pos=(0, -0.35), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-19.0);
clear_letters = visual.TextStim(win=win, name='clear_letters',
    text='CLEAR',
    font='Arial',
    pos=(-0.5, -0.40), height=0.04, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-20.0);
next_practice = visual.TextStim(win=win, name='next_practice',
    text='NEXT',
    font='Arial',
    pos=(0.5, -0.40), height=0.04, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-21.0);

# --- Initialize components for Routine "check_score" ---

# --- Initialize components for Routine "sent_prac_instr1" ---
sent_instru_1 = visual.TextBox2(
     win, text='Now you will practice doing the sentence reading part of the experiment.\n\nA sentence will appear on the screen like this:\n\n"I like to run in the park."\n\nAs soon as you see the sentence, you should read it and determine if it makes sense or not. The above sentence makes sense.\n\nAn example of a sentence that does not make sense would be:\n\n"I like to run in the sky."\n\nWhen you have read the sentence and determined whether it makes sense or not, click the mouse button.\n\n\n--press SPACEBAR to continue--', font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.3, 1.0), borderWidth=7.0,
     color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
     opacity=1.0,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=[-1.0000, -1.0000, -1.0000], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='sent_instru_1',
     autoLog=False,
)
sent_space_1 = keyboard.Keyboard()

# --- Initialize components for Routine "sent_prac_instr2" ---
sent_instr_2 = visual.TextBox2(
     win, text='You will then see "This sentence makes sense." displayed on the next screen, along with a box marked TRUE and a box marked FALSE.\n\nIf the sentence on the previous screen made sense, click on the TRUE box. If the sentence did not make sense, click on the FALSE box.\n\nAfter you click one of the boxes, the computer will tell you if you made the right choice.\n\n\n--press SPACEBAR to continue--', font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.3, 1.0), borderWidth=7.0,
     color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
     opacity=1.0,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=[-1.0000, -1.0000, -1.0000], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='sent_instr_2',
     autoLog=False,
)
sent_space_2 = keyboard.Keyboard()

# --- Initialize components for Routine "sent_prac_instr3" ---
sent_instr_3 = visual.TextBox2(
     win, text="It is VERY important that you answer the sentence problems correctly. It is also important that you try and read the sentences as quickly as you can.\n\n\n--when you're ready, press SPACEBAR to try some practice problems--", font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.3, 1.0), borderWidth=7.0,
     color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
     opacity=1.0,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=[-1.0000, -1.0000, -1.0000], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='sent_instr_3',
     autoLog=False,
)
sent_space_3 = keyboard.Keyboard()

# --- Initialize components for Routine "init_sentence_practice" ---

# --- Initialize components for Routine "practice_sentence_display" ---
sentence_text = visual.TextStim(win=win, name='sentence_text',
    text='',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
sentence_help_text = visual.TextStim(win=win, name='sentence_help_text',
    text='When you have read the sentence,\nclick here to continue.',
    font='Arial',
    pos=(0, -0.25), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
sentence_next = event.Mouse(win=win)
x, y = [None, None]
sentence_next.mouseClock = core.Clock()

# --- Initialize components for Routine "sentence_practice_response" ---
answer_click = event.Mouse(win=win)
x, y = [None, None]
answer_click.mouseClock = core.Clock()
answer_help_text = visual.TextStim(win=win, name='answer_help_text',
    text='This sentence makes sense.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
prac_TRUE_BG = visual.Rect(
    win=win, name='prac_TRUE_BG',
    width=(0.16, 0.065)[0], height=(0.16, 0.065)[1],
    ori=0.0, pos=(-0.5, -0.20), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-3.0, interpolate=True)
prac_FALSE_BG = visual.Rect(
    win=win, name='prac_FALSE_BG',
    width=(0.16, 0.065)[0], height=(0.16, 0.065)[1],
    ori=0.0, pos=(0.5, -0.20), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-4.0, interpolate=True)
prac_TRUE = visual.TextStim(win=win, name='prac_TRUE',
    text='TRUE',
    font='Arial',
    pos=(-0.5, -0.20), height=0.04, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
prac_FALSE = visual.TextStim(win=win, name='prac_FALSE',
    text='FALSE',
    font='Arial',
    pos=(0.5, -0.20), height=0.04, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
result_text = visual.TextStim(win=win, name='result_text',
    text=None,
    font='Arial',
    pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);

# --- Initialize components for Routine "check_sent_prac_score" ---
sentence_practice_final_result = visual.TextStim(win=win, name='sentence_practice_final_result',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "joint_prac_instr1" ---
joint_instr_1 = visual.TextBox2(
     win, text='Now you will practice doing both parts of the task at the same time.\n\nIn the next practice set, you will be given one sentence to read. Once you make your decision about the sentence, a letter will appear on the screen. Try and remember the letter.\n\nIn the previous section where you only read the sentences, the computer computed your average time to read the sentences.\n\nIf you take longer than your average time, the computer will automatically move you onto the next letter part, thus skipping the True or False part and it will count that problem as a sentence error.\n\nTherefore it is VERY important to read the sentences as quickly and as accurately as possible.\n\n\n--press SPACEBAR to continue--', font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.3, 1.0), borderWidth=7.0,
     color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
     opacity=1.0,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=[-1.0000, -1.0000, -1.0000], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='joint_instr_1',
     autoLog=True,
)
joint_space_1 = keyboard.Keyboard()

# --- Initialize components for Routine "joint_prac_instr2" ---
joint_instr_2 = visual.TextBox2(
     win, text='After the letter goes away, another sentence will appear, and then another letter.\n\nAt the end of each set of letters and sentences, a recall screen will appear. Use the mouse to select the letters you just saw. Try your best to get the letters in the correct order.\n\nIt is important to work QUICKLY and ACCURATELY on the sentences. Make sure you know whether the sentence makes sense or not before clicking to the next screen.\n\nYou will not be told if your answer regarding the sentence is correct.\n\nAfter the recall screen, you will be given feedback about your performance regarding both the number of letters recalled and the percent correct on the sentence problems.\n\n\n--press SPACEBAR to continue--', font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.3, 1.0), borderWidth=7.0,
     color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
     opacity=1.0,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=[-1.0000, -1.0000, -1.0000], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='joint_instr_2',
     autoLog=True,
)
joint_space_2 = keyboard.Keyboard()

# --- Initialize components for Routine "joint_prac_instr3" ---
joint_instr_3 = visual.TextBox2(
     win, text='During the feedback, you will see a number in red in the top right of the screen. This indicates your percent correct for the sentence problems for the entire task.\n\nTo make sure you understand the task instructions, you can only proceed to the main experiment by achieving 100% accuracy on the sentences.\n\n\n--press SPACEBAR to try some practice problems--', font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.3, 1.0), borderWidth=7.0,
     color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
     opacity=1.0,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=[-1.0000, -1.0000, -1.0000], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='joint_instr_3',
     autoLog=True,
)
joint_space_3 = keyboard.Keyboard()

# --- Initialize components for Routine "pre_big_loop_init" ---
# Run 'Begin Experiment' code from code_20
SIZE_OF_SETS = []
SET_SIZE = 0
LOOP_SIZE = 0

# scores for all of main test, not just per loop
rspan_score = 0
total_correct_letters = 0
sent_acc_error = 0
sent_speed_error = 0
sent_total_error = 0

# --- Initialize components for Routine "main_test_instr1" ---
main_instr_1 = visual.TextBox2(
     win, text="That is the end of the practice.\n\nThe real trials will look like the practice trials you just completed.\nFirst you will get a sentence to read, then a letter to remember.\n\nWhen you see the recall screen, select the letters in the order presented. If you forget a letter, click the BLANK box to mark where it should go.\n\nSome sets will have more sentences and letters than others.\n\nIt is important that you do your best on both the sentence problems and the letter recall parts of this experiment.\n\nRemember for the sentences you must work as QUICKLY and ACCURATELY as possible.\n\n\n--if you're ready, press SPACEBAR to begin the experiment--", font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.3, 1.0), borderWidth=7.0,
     color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
     opacity=1.0,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center-left',
     anchor='center',
     fillColor=[-1.0000, -1.0000, -1.0000], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='main_instr_1',
     autoLog=False,
)
main_space_1 = keyboard.Keyboard()

# --- Initialize components for Routine "big_loop_init" ---

# --- Initialize components for Routine "sent_loader" ---

# --- Initialize components for Routine "letters_loader" ---

# --- Initialize components for Routine "pre_loop_init" ---

# --- Initialize components for Routine "loop_init" ---

# --- Initialize components for Routine "set_init" ---

# --- Initialize components for Routine "sentence_display" ---
sentence_text_2 = visual.TextStim(win=win, name='sentence_text_2',
    text='',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
sentence_help_text_2 = visual.TextStim(win=win, name='sentence_help_text_2',
    text='Click the left mouse button to continue.',
    font='Arial',
    pos=(0, -0.25), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()

# --- Initialize components for Routine "respond_to_sentence" ---
answer_click_2 = event.Mouse(win=win)
x, y = [None, None]
answer_click_2.mouseClock = core.Clock()
answer_help_text_2 = visual.TextStim(win=win, name='answer_help_text_2',
    text='This sentence makes sense.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
TRUE_BG = visual.Rect(
    win=win, name='TRUE_BG',
    width=(0.16, 0.065)[0], height=(0.16, 0.065)[1],
    ori=0.0, pos=(-0.5, -0.20), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-3.0, interpolate=True)
FALSE_BG = visual.Rect(
    win=win, name='FALSE_BG',
    width=(0.16, 0.065)[0], height=(0.16, 0.065)[1],
    ori=0.0, pos=(0.5, -0.20), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-4.0, interpolate=True)
TRUE = visual.TextStim(win=win, name='TRUE',
    text='TRUE',
    font='Arial',
    pos=(-0.5, -0.20), height=0.04, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
FALSE = visual.TextStim(win=win, name='FALSE',
    text='FALSE',
    font='Arial',
    pos=(0.5, -0.20), height=0.04, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);

# --- Initialize components for Routine "letter_display" ---
text = visual.TextStim(win=win, name='text',
    text='',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "recall_letters" ---
mouse_jp = event.Mouse(win=win)
x, y = [None, None]
mouse_jp.mouseClock = core.Clock()
remind_text_jp = visual.TextStim(win=win, name='remind_text_jp',
    text='Select the letters in the order presented. Use the BLANK button to fill in forgotten letters.',
    font='Arial',
    pos=(0, 0.40), height=0.035, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
letter_S = visual.TextStim(win=win, name='letter_S',
    text='S',
    font='Arial',
    pos=(-0.3, -0.12), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
letter_P = visual.TextStim(win=win, name='letter_P',
    text='P',
    font='Arial',
    pos=(-0.3, 0.01), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
letter_K = visual.TextStim(win=win, name='letter_K',
    text='K',
    font='Arial',
    pos=(-0.3, 0.13), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
letter_F = visual.TextStim(win=win, name='letter_F',
    text='F',
    font='Arial',
    pos=(-0.3, 0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
letter_T = visual.TextStim(win=win, name='letter_T',
    text='T',
    font='Arial',
    pos=(0, -0.12), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
letter_Q = visual.TextStim(win=win, name='letter_Q',
    text='Q',
    font='Arial',
    pos=(0, 0.01), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
letter_L = visual.TextStim(win=win, name='letter_L',
    text='L',
    font='Arial',
    pos=(0, 0.13), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
letter_H = visual.TextStim(win=win, name='letter_H',
    text='H',
    font='Arial',
    pos=(0, 0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
letter_Y = visual.TextStim(win=win, name='letter_Y',
    text='Y',
    font='Arial',
    pos=(0.3, -0.12), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-11.0);
letter_R = visual.TextStim(win=win, name='letter_R',
    text='R',
    font='Arial',
    pos=(0.3, 0.01), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-12.0);
letter_N = visual.TextStim(win=win, name='letter_N',
    text='N',
    font='Arial',
    pos=(0.3, 0.13), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-13.0);
letter_J = visual.TextStim(win=win, name='letter_J',
    text='J',
    font='Arial',
    pos=(0.3, 0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-14.0);
blank_letter_BG_jp = visual.Rect(
    win=win, name='blank_letter_BG_jp',
    width=(0.16, 0.065)[0], height=(0.16, 0.065)[1],
    ori=0.0, pos=(0, -0.25), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-15.0, interpolate=True)
clear_letters_BG_jp = visual.Rect(
    win=win, name='clear_letters_BG_jp',
    width=(0.16, 0.065)[0], height=(0.16, 0.065)[1],
    ori=0.0, pos=(-0.5, -0.40), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-16.0, interpolate=True)
next_practice_BG_jp = visual.Rect(
    win=win, name='next_practice_BG_jp',
    width=(0.16, 0.065)[0], height=(0.16, 0.065)[1],
    ori=0.0, pos=(0.5, -0.40), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-17.0, interpolate=True)
blank_letter_jp = visual.TextStim(win=win, name='blank_letter_jp',
    text='BLANK',
    font='Arial',
    pos=(0, -0.25), height=0.04, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-18.0);
display_letters_clicked_jp = visual.TextStim(win=win, name='display_letters_clicked_jp',
    text=None,
    font='Arial',
    pos=(0, -0.35), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-19.0);
clear_letters_jp = visual.TextStim(win=win, name='clear_letters_jp',
    text='CLEAR',
    font='Arial',
    pos=(-0.5, -0.40), height=0.04, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-20.0);
next_practice_jp = visual.TextStim(win=win, name='next_practice_jp',
    text='NEXT',
    font='Arial',
    pos=(0.5, -0.40), height=0.04, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-21.0);

# --- Initialize components for Routine "feedback_display" ---
sentences_percent = visual.TextStim(win=win, name='sentences_percent',
    text='',
    font='Arial',
    pos=(0.6, 0.35), height=0.05, wrapWidth=None, ori=0.0, 
    color=[1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
letters_feedback = visual.TextStim(win=win, name='letters_feedback',
    text='',
    font='Arial',
    pos=(0, 0.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
sentences_feedback = visual.TextStim(win=win, name='sentences_feedback',
    text='',
    font='Arial',
    pos=(0, -0.05), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# --- Initialize components for Routine "process_scores" ---

# --- Initialize components for Routine "end_instr" ---
thankyou = visual.TextBox2(
     win, text='Thank you!\n\n\nPress SPACEBAR to exit this experiment.', font='Arial',
     pos=(0, 0),     letterHeight=0.04,
     size=(1.3, 1.0), borderWidth=7.0,
     color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
     opacity=1.0,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=[-1.0000, -1.0000, -1.0000], borderColor=[-1.0000, -1.0000, -1.0000],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='thankyou',
     autoLog=True,
)
space_11 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "lett_prac_instr1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
lett_instr_1.reset()
lett_space_1.keys = []
lett_space_1.rt = []
_lett_space_1_allKeys = []
# keep track of which components have finished
lett_prac_instr1Components = [lett_instr_1, lett_space_1]
for thisComponent in lett_prac_instr1Components:
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

# --- Run Routine "lett_prac_instr1" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *lett_instr_1* updates
    if lett_instr_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        lett_instr_1.frameNStart = frameN  # exact frame index
        lett_instr_1.tStart = t  # local t and not account for scr refresh
        lett_instr_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(lett_instr_1, 'tStartRefresh')  # time at next scr refresh
        lett_instr_1.setAutoDraw(True)
    
    # *lett_space_1* updates
    waitOnFlip = False
    if lett_space_1.status == NOT_STARTED and tThisFlip >= 0.8-frameTolerance:
        # keep track of start time/frame for later
        lett_space_1.frameNStart = frameN  # exact frame index
        lett_space_1.tStart = t  # local t and not account for scr refresh
        lett_space_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(lett_space_1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'lett_space_1.started')
        lett_space_1.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(lett_space_1.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(lett_space_1.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if lett_space_1.status == STARTED and not waitOnFlip:
        theseKeys = lett_space_1.getKeys(keyList=['space'], waitRelease=False)
        _lett_space_1_allKeys.extend(theseKeys)
        if len(_lett_space_1_allKeys):
            lett_space_1.keys = _lett_space_1_allKeys[-1].name  # just the last key pressed
            lett_space_1.rt = _lett_space_1_allKeys[-1].rt
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
    for thisComponent in lett_prac_instr1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "lett_prac_instr1" ---
for thisComponent in lett_prac_instr1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if lett_space_1.keys in ['', [], None]:  # No response was made
    lett_space_1.keys = None
thisExp.addData('lett_space_1.keys',lett_space_1.keys)
if lett_space_1.keys != None:  # we had a response
    thisExp.addData('lett_space_1.rt', lett_space_1.rt)
thisExp.nextEntry()
# the Routine "lett_prac_instr1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "lett_prac_instr2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
lett_instr_2.reset()
lett_space_2.keys = []
lett_space_2.rt = []
_lett_space_2_allKeys = []
# keep track of which components have finished
lett_prac_instr2Components = [lett_instr_2, lett_space_2]
for thisComponent in lett_prac_instr2Components:
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

# --- Run Routine "lett_prac_instr2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *lett_instr_2* updates
    if lett_instr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        lett_instr_2.frameNStart = frameN  # exact frame index
        lett_instr_2.tStart = t  # local t and not account for scr refresh
        lett_instr_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(lett_instr_2, 'tStartRefresh')  # time at next scr refresh
        lett_instr_2.setAutoDraw(True)
    
    # *lett_space_2* updates
    waitOnFlip = False
    if lett_space_2.status == NOT_STARTED and tThisFlip >= 0.8-frameTolerance:
        # keep track of start time/frame for later
        lett_space_2.frameNStart = frameN  # exact frame index
        lett_space_2.tStart = t  # local t and not account for scr refresh
        lett_space_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(lett_space_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'lett_space_2.started')
        lett_space_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(lett_space_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(lett_space_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if lett_space_2.status == STARTED and not waitOnFlip:
        theseKeys = lett_space_2.getKeys(keyList=['space'], waitRelease=False)
        _lett_space_2_allKeys.extend(theseKeys)
        if len(_lett_space_2_allKeys):
            lett_space_2.keys = _lett_space_2_allKeys[-1].name  # just the last key pressed
            lett_space_2.rt = _lett_space_2_allKeys[-1].rt
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
    for thisComponent in lett_prac_instr2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "lett_prac_instr2" ---
for thisComponent in lett_prac_instr2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if lett_space_2.keys in ['', [], None]:  # No response was made
    lett_space_2.keys = None
thisExp.addData('lett_space_2.keys',lett_space_2.keys)
if lett_space_2.keys != None:  # we had a response
    thisExp.addData('lett_space_2.rt', lett_space_2.rt)
thisExp.nextEntry()
# the Routine "lett_prac_instr2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "lett_prac_instr3" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
lett_instr_3.reset()
lett_space_3.keys = []
lett_space_3.rt = []
_lett_space_3_allKeys = []
# keep track of which components have finished
lett_prac_instr3Components = [lett_instr_3, lett_space_3]
for thisComponent in lett_prac_instr3Components:
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

# --- Run Routine "lett_prac_instr3" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *lett_instr_3* updates
    if lett_instr_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        lett_instr_3.frameNStart = frameN  # exact frame index
        lett_instr_3.tStart = t  # local t and not account for scr refresh
        lett_instr_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(lett_instr_3, 'tStartRefresh')  # time at next scr refresh
        lett_instr_3.setAutoDraw(True)
    
    # *lett_space_3* updates
    waitOnFlip = False
    if lett_space_3.status == NOT_STARTED and tThisFlip >= 0.8-frameTolerance:
        # keep track of start time/frame for later
        lett_space_3.frameNStart = frameN  # exact frame index
        lett_space_3.tStart = t  # local t and not account for scr refresh
        lett_space_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(lett_space_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'lett_space_3.started')
        lett_space_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(lett_space_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(lett_space_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if lett_space_3.status == STARTED and not waitOnFlip:
        theseKeys = lett_space_3.getKeys(keyList=['space'], waitRelease=False)
        _lett_space_3_allKeys.extend(theseKeys)
        if len(_lett_space_3_allKeys):
            lett_space_3.keys = _lett_space_3_allKeys[-1].name  # just the last key pressed
            lett_space_3.rt = _lett_space_3_allKeys[-1].rt
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
    for thisComponent in lett_prac_instr3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "lett_prac_instr3" ---
for thisComponent in lett_prac_instr3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if lett_space_3.keys in ['', [], None]:  # No response was made
    lett_space_3.keys = None
thisExp.addData('lett_space_3.keys',lett_space_3.keys)
if lett_space_3.keys != None:  # we had a response
    thisExp.addData('lett_space_3.rt', lett_space_3.rt)
thisExp.nextEntry()
# the Routine "lett_prac_instr3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice_until_perfect = data.TrialHandler(nReps=100000.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='practice_until_perfect')
thisExp.addLoop(practice_until_perfect)  # add the loop to the experiment
thisPractice_until_perfect = practice_until_perfect.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_until_perfect.rgb)
if thisPractice_until_perfect != None:
    for paramName in thisPractice_until_perfect:
        exec('{} = thisPractice_until_perfect[paramName]'.format(paramName))

for thisPractice_until_perfect in practice_until_perfect:
    currentLoop = practice_until_perfect
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_until_perfect.rgb)
    if thisPractice_until_perfect != None:
        for paramName in thisPractice_until_perfect:
            exec('{} = thisPractice_until_perfect[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "intro_2" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    intro_2Components = [intro_text]
    for thisComponent in intro_2Components:
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
    
    # --- Run Routine "intro_2" ---
    while continueRoutine and routineTimer.getTime() < 3.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *intro_text* updates
        if intro_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            intro_text.frameNStart = frameN  # exact frame index
            intro_text.tStart = t  # local t and not account for scr refresh
            intro_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(intro_text, 'tStartRefresh')  # time at next scr refresh
            intro_text.setAutoDraw(True)
        if intro_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > intro_text.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                intro_text.tStop = t  # not accounting for scr refresh
                intro_text.frameNStop = frameN  # exact frame index
                intro_text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in intro_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "intro_2" ---
    for thisComponent in intro_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-3.000000)
    
    # set up handler to look after randomisation of conditions etc
    practice_letters_block = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('practice_letters/block.csv'),
        seed=None, name='practice_letters_block')
    thisExp.addLoop(practice_letters_block)  # add the loop to the experiment
    thisPractice_letters_block = practice_letters_block.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_letters_block.rgb)
    if thisPractice_letters_block != None:
        for paramName in thisPractice_letters_block:
            exec('{} = thisPractice_letters_block[paramName]'.format(paramName))
    
    for thisPractice_letters_block in practice_letters_block:
        currentLoop = practice_letters_block
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_letters_block.rgb)
        if thisPractice_letters_block != None:
            for paramName in thisPractice_letters_block:
                exec('{} = thisPractice_letters_block[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "letter_practice_init" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from init
        perfect_scores.append(no_of_letters)
        
        rows = []
        
        random_int = 0
        while True:
            random_int = randint(0, 12)
            if random_int in rows:
                continue
            rows.append(random_int)
            if len(rows) == no_of_letters:
                break
            elif len(rows) > no_of_letters:
                raise Exception
        
        # print(f'rows: {rows}')
        # keep track of which components have finished
        letter_practice_initComponents = []
        for thisComponent in letter_practice_initComponents:
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
        
        # --- Run Routine "letter_practice_init" ---
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
            for thisComponent in letter_practice_initComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "letter_practice_init" ---
        for thisComponent in letter_practice_initComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "letter_practice_init" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        practice_letters_loop = data.TrialHandler(nReps=1.0, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(letters_file, selection=rows),
            seed=None, name='practice_letters_loop')
        thisExp.addLoop(practice_letters_loop)  # add the loop to the experiment
        thisPractice_letters_loop = practice_letters_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_letters_loop.rgb)
        if thisPractice_letters_loop != None:
            for paramName in thisPractice_letters_loop:
                exec('{} = thisPractice_letters_loop[paramName]'.format(paramName))
        
        for thisPractice_letters_loop in practice_letters_loop:
            currentLoop = practice_letters_loop
            # abbreviate parameter names if possible (e.g. rgb = thisPractice_letters_loop.rgb)
            if thisPractice_letters_loop != None:
                for paramName in thisPractice_letters_loop:
                    exec('{} = thisPractice_letters_loop[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "practice_letter_display_2" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from code_24
            win.mouseVisible = False
            display_letter_jp.setText(letter)
            # keep track of which components have finished
            practice_letter_display_2Components = [display_letter_jp]
            for thisComponent in practice_letter_display_2Components:
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
            
            # --- Run Routine "practice_letter_display_2" ---
            while continueRoutine and routineTimer.getTime() < 1.2:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *display_letter_jp* updates
                if display_letter_jp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    display_letter_jp.frameNStart = frameN  # exact frame index
                    display_letter_jp.tStart = t  # local t and not account for scr refresh
                    display_letter_jp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(display_letter_jp, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'display_letter_jp.started')
                    display_letter_jp.setAutoDraw(True)
                if display_letter_jp.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > display_letter_jp.tStartRefresh + 1.2-frameTolerance:
                        # keep track of stop time/frame for later
                        display_letter_jp.tStop = t  # not accounting for scr refresh
                        display_letter_jp.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'display_letter_jp.stopped')
                        display_letter_jp.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in practice_letter_display_2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "practice_letter_display_2" ---
            for thisComponent in practice_letter_display_2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.200000)
        # completed 1.0 repeats of 'practice_letters_loop'
        
        
        # --- Prepare to start Routine "practice_letters_response" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code
        win.mouseVisible = True
        
        LEFT_CLICK = 0
        BLANK_LETTER = '_'
        LETTERS = [
            prac_letter_S, prac_letter_P, prac_letter_K, prac_letter_F,
            prac_letter_T, prac_letter_Q, prac_letter_L, prac_letter_H,
            prac_letter_Y, prac_letter_R, prac_letter_N, prac_letter_J
        ]
        
        # start with True and let one frame finish
        # so that it can then set mouse_clicked to be False
        # This is to guard against mouse button being held down
        # from previous routine and then "overflowing" to this routine
        mouse_clicked = True
        letter_clicked = None
        letters_clicked = []
        display_letters_clicked.text = ""
        
        expected_letters = []
        for item in practice_letters_loop.trialList:
            print(item)
            
        for item in practice_letters_loop.trialList:
            expected_letters.append(item['letter'])
        
        #print(f'''
        #mouse_clicked: {mouse_clicked}
        #letter_clicked: {letter_clicked}
        #letters_clicked: {letters_clicked}
        #expected_letters: {expected_letters}
        #''')
        # setup some python lists for storing info about the mouse
        mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        practice_letters_responseComponents = [mouse, remind_text, prac_letter_S, prac_letter_P, prac_letter_K, prac_letter_F, prac_letter_T, prac_letter_Q, prac_letter_L, prac_letter_H, prac_letter_Y, prac_letter_R, prac_letter_N, prac_letter_J, blank_letter_BG, clear_letters_BG, next_practice_BG, blank_letter, display_letters_clicked, clear_letters, next_practice]
        for thisComponent in practice_letters_responseComponents:
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
        
        # --- Run Routine "practice_letters_response" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # Run 'Each Frame' code from code
            # mouse was last recorded as "not clicked"
            if not mouse_clicked and 1 in mouse.getPressed():
                mouse_clicked = True
                
                # if letter is pressed
                for _letter in LETTERS:
                    if mouse.isPressedIn(_letter, buttons=[LEFT_CLICK]):
                        letters_clicked.append(_letter.text)
                    
                # if BLANK is pressed
                if mouse.isPressedIn(blank_letter, buttons=[LEFT_CLICK]):
                    letters_clicked.append(BLANK_LETTER)
                        
                # if CLEAR is pressed
                if mouse.isPressedIn(clear_letters, buttons=[LEFT_CLICK]):
                    letters_clicked = []
                    
                # if NEXT is pressed
                if mouse.isPressedIn(next_practice, buttons=[LEFT_CLICK]):
                    continueRoutine = False
                    
                display_letters_clicked.text = str(letters_clicked)
            else:
                if not 1 in mouse.getPressed():
                    mouse_clicked = False
            # *mouse* updates
            if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse.frameNStart = frameN  # exact frame index
                mouse.tStart = t  # local t and not account for scr refresh
                mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('mouse.started', t)
                mouse.status = STARTED
                mouse.mouseClock.reset()
                prevButtonState = [0, 0, 0]  # if now button is down we will treat as 'new' click
            
            # *remind_text* updates
            if remind_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                remind_text.frameNStart = frameN  # exact frame index
                remind_text.tStart = t  # local t and not account for scr refresh
                remind_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(remind_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'remind_text.started')
                remind_text.setAutoDraw(True)
            
            # *prac_letter_S* updates
            if prac_letter_S.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_letter_S.frameNStart = frameN  # exact frame index
                prac_letter_S.tStart = t  # local t and not account for scr refresh
                prac_letter_S.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_letter_S, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_letter_S.started')
                prac_letter_S.setAutoDraw(True)
            
            # *prac_letter_P* updates
            if prac_letter_P.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_letter_P.frameNStart = frameN  # exact frame index
                prac_letter_P.tStart = t  # local t and not account for scr refresh
                prac_letter_P.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_letter_P, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_letter_P.started')
                prac_letter_P.setAutoDraw(True)
            
            # *prac_letter_K* updates
            if prac_letter_K.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_letter_K.frameNStart = frameN  # exact frame index
                prac_letter_K.tStart = t  # local t and not account for scr refresh
                prac_letter_K.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_letter_K, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_letter_K.started')
                prac_letter_K.setAutoDraw(True)
            
            # *prac_letter_F* updates
            if prac_letter_F.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_letter_F.frameNStart = frameN  # exact frame index
                prac_letter_F.tStart = t  # local t and not account for scr refresh
                prac_letter_F.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_letter_F, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_letter_F.started')
                prac_letter_F.setAutoDraw(True)
            
            # *prac_letter_T* updates
            if prac_letter_T.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_letter_T.frameNStart = frameN  # exact frame index
                prac_letter_T.tStart = t  # local t and not account for scr refresh
                prac_letter_T.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_letter_T, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_letter_T.started')
                prac_letter_T.setAutoDraw(True)
            
            # *prac_letter_Q* updates
            if prac_letter_Q.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_letter_Q.frameNStart = frameN  # exact frame index
                prac_letter_Q.tStart = t  # local t and not account for scr refresh
                prac_letter_Q.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_letter_Q, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_letter_Q.started')
                prac_letter_Q.setAutoDraw(True)
            
            # *prac_letter_L* updates
            if prac_letter_L.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_letter_L.frameNStart = frameN  # exact frame index
                prac_letter_L.tStart = t  # local t and not account for scr refresh
                prac_letter_L.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_letter_L, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_letter_L.started')
                prac_letter_L.setAutoDraw(True)
            
            # *prac_letter_H* updates
            if prac_letter_H.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_letter_H.frameNStart = frameN  # exact frame index
                prac_letter_H.tStart = t  # local t and not account for scr refresh
                prac_letter_H.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_letter_H, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_letter_H.started')
                prac_letter_H.setAutoDraw(True)
            
            # *prac_letter_Y* updates
            if prac_letter_Y.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_letter_Y.frameNStart = frameN  # exact frame index
                prac_letter_Y.tStart = t  # local t and not account for scr refresh
                prac_letter_Y.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_letter_Y, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_letter_Y.started')
                prac_letter_Y.setAutoDraw(True)
            
            # *prac_letter_R* updates
            if prac_letter_R.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_letter_R.frameNStart = frameN  # exact frame index
                prac_letter_R.tStart = t  # local t and not account for scr refresh
                prac_letter_R.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_letter_R, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_letter_R.started')
                prac_letter_R.setAutoDraw(True)
            
            # *prac_letter_N* updates
            if prac_letter_N.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_letter_N.frameNStart = frameN  # exact frame index
                prac_letter_N.tStart = t  # local t and not account for scr refresh
                prac_letter_N.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_letter_N, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_letter_N.started')
                prac_letter_N.setAutoDraw(True)
            
            # *prac_letter_J* updates
            if prac_letter_J.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_letter_J.frameNStart = frameN  # exact frame index
                prac_letter_J.tStart = t  # local t and not account for scr refresh
                prac_letter_J.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_letter_J, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_letter_J.started')
                prac_letter_J.setAutoDraw(True)
            
            # *blank_letter_BG* updates
            if blank_letter_BG.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                blank_letter_BG.frameNStart = frameN  # exact frame index
                blank_letter_BG.tStart = t  # local t and not account for scr refresh
                blank_letter_BG.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(blank_letter_BG, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'blank_letter_BG.started')
                blank_letter_BG.setAutoDraw(True)
            
            # *clear_letters_BG* updates
            if clear_letters_BG.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                clear_letters_BG.frameNStart = frameN  # exact frame index
                clear_letters_BG.tStart = t  # local t and not account for scr refresh
                clear_letters_BG.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clear_letters_BG, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'clear_letters_BG.started')
                clear_letters_BG.setAutoDraw(True)
            
            # *next_practice_BG* updates
            if next_practice_BG.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                next_practice_BG.frameNStart = frameN  # exact frame index
                next_practice_BG.tStart = t  # local t and not account for scr refresh
                next_practice_BG.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(next_practice_BG, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'next_practice_BG.started')
                next_practice_BG.setAutoDraw(True)
            
            # *blank_letter* updates
            if blank_letter.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                blank_letter.frameNStart = frameN  # exact frame index
                blank_letter.tStart = t  # local t and not account for scr refresh
                blank_letter.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(blank_letter, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'blank_letter.started')
                blank_letter.setAutoDraw(True)
            
            # *display_letters_clicked* updates
            if display_letters_clicked.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                display_letters_clicked.frameNStart = frameN  # exact frame index
                display_letters_clicked.tStart = t  # local t and not account for scr refresh
                display_letters_clicked.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(display_letters_clicked, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'display_letters_clicked.started')
                display_letters_clicked.setAutoDraw(True)
            
            # *clear_letters* updates
            if clear_letters.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                clear_letters.frameNStart = frameN  # exact frame index
                clear_letters.tStart = t  # local t and not account for scr refresh
                clear_letters.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clear_letters, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'clear_letters.started')
                clear_letters.setAutoDraw(True)
            
            # *next_practice* updates
            if next_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                next_practice.frameNStart = frameN  # exact frame index
                next_practice.tStart = t  # local t and not account for scr refresh
                next_practice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(next_practice, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'next_practice.started')
                next_practice.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_letters_responseComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "practice_letters_response" ---
        for thisComponent in practice_letters_responseComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code
        print(f'''
        expected_letters: {expected_letters}
        letters_clicked: {letters_clicked}
        ''')
        
        no_of_expected_letters = len(expected_letters)
        no_of_letters_clicked = len(letters_clicked)
        no_of_correct = 0
        
        score = 0
        
        for idx in range(no_of_expected_letters):
            if idx + 1 > no_of_letters_clicked:
                break
            if expected_letters[idx] == letters_clicked[idx]:
                no_of_correct += 1
        
        # perfect score
        if str(letters_clicked) == str(expected_letters):
            score = no_of_expected_letters
        
        print(f'''
        no_of_correct: {no_of_correct}
        score: {score}
        ''')
        
        # track current trial's score
        trial_scores.append(score)
        
        # store data for practice_letters_block (TrialHandler)
        # the Routine "practice_letters_response" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
    # completed 1.0 repeats of 'practice_letters_block'
    
    
    # --- Prepare to start Routine "check_score" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    check_scoreComponents = []
    for thisComponent in check_scoreComponents:
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
    
    # --- Run Routine "check_score" ---
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
        for thisComponent in check_scoreComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "check_score" ---
    for thisComponent in check_scoreComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_2
    print(f'''
    perfect_scores: {perfect_scores}
    trial_scores: {trial_scores}
    ''')
    
    if str(perfect_scores) == str(trial_scores):
        practice_until_perfect.finished = True
    else:
        print('Restarting letter practice')
        perfect_scores = []
        trial_scores = []
    # the Routine "check_score" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 100000.0 repeats of 'practice_until_perfect'


# --- Prepare to start Routine "sent_prac_instr1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
sent_instru_1.reset()
sent_space_1.keys = []
sent_space_1.rt = []
_sent_space_1_allKeys = []
# keep track of which components have finished
sent_prac_instr1Components = [sent_instru_1, sent_space_1]
for thisComponent in sent_prac_instr1Components:
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

# --- Run Routine "sent_prac_instr1" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *sent_instru_1* updates
    if sent_instru_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sent_instru_1.frameNStart = frameN  # exact frame index
        sent_instru_1.tStart = t  # local t and not account for scr refresh
        sent_instru_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(sent_instru_1, 'tStartRefresh')  # time at next scr refresh
        sent_instru_1.setAutoDraw(True)
    
    # *sent_space_1* updates
    waitOnFlip = False
    if sent_space_1.status == NOT_STARTED and tThisFlip >= 0.8-frameTolerance:
        # keep track of start time/frame for later
        sent_space_1.frameNStart = frameN  # exact frame index
        sent_space_1.tStart = t  # local t and not account for scr refresh
        sent_space_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(sent_space_1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'sent_space_1.started')
        sent_space_1.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(sent_space_1.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(sent_space_1.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if sent_space_1.status == STARTED and not waitOnFlip:
        theseKeys = sent_space_1.getKeys(keyList=['space'], waitRelease=False)
        _sent_space_1_allKeys.extend(theseKeys)
        if len(_sent_space_1_allKeys):
            sent_space_1.keys = _sent_space_1_allKeys[-1].name  # just the last key pressed
            sent_space_1.rt = _sent_space_1_allKeys[-1].rt
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
    for thisComponent in sent_prac_instr1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "sent_prac_instr1" ---
for thisComponent in sent_prac_instr1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if sent_space_1.keys in ['', [], None]:  # No response was made
    sent_space_1.keys = None
thisExp.addData('sent_space_1.keys',sent_space_1.keys)
if sent_space_1.keys != None:  # we had a response
    thisExp.addData('sent_space_1.rt', sent_space_1.rt)
thisExp.nextEntry()
# the Routine "sent_prac_instr1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "sent_prac_instr2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
sent_instr_2.reset()
sent_space_2.keys = []
sent_space_2.rt = []
_sent_space_2_allKeys = []
# keep track of which components have finished
sent_prac_instr2Components = [sent_instr_2, sent_space_2]
for thisComponent in sent_prac_instr2Components:
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

# --- Run Routine "sent_prac_instr2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *sent_instr_2* updates
    if sent_instr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sent_instr_2.frameNStart = frameN  # exact frame index
        sent_instr_2.tStart = t  # local t and not account for scr refresh
        sent_instr_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(sent_instr_2, 'tStartRefresh')  # time at next scr refresh
        sent_instr_2.setAutoDraw(True)
    
    # *sent_space_2* updates
    waitOnFlip = False
    if sent_space_2.status == NOT_STARTED and tThisFlip >= 0.8-frameTolerance:
        # keep track of start time/frame for later
        sent_space_2.frameNStart = frameN  # exact frame index
        sent_space_2.tStart = t  # local t and not account for scr refresh
        sent_space_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(sent_space_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'sent_space_2.started')
        sent_space_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(sent_space_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(sent_space_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if sent_space_2.status == STARTED and not waitOnFlip:
        theseKeys = sent_space_2.getKeys(keyList=['space'], waitRelease=False)
        _sent_space_2_allKeys.extend(theseKeys)
        if len(_sent_space_2_allKeys):
            sent_space_2.keys = _sent_space_2_allKeys[-1].name  # just the last key pressed
            sent_space_2.rt = _sent_space_2_allKeys[-1].rt
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
    for thisComponent in sent_prac_instr2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "sent_prac_instr2" ---
for thisComponent in sent_prac_instr2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if sent_space_2.keys in ['', [], None]:  # No response was made
    sent_space_2.keys = None
thisExp.addData('sent_space_2.keys',sent_space_2.keys)
if sent_space_2.keys != None:  # we had a response
    thisExp.addData('sent_space_2.rt', sent_space_2.rt)
thisExp.nextEntry()
# the Routine "sent_prac_instr2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "sent_prac_instr3" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
sent_instr_3.reset()
sent_space_3.keys = []
sent_space_3.rt = []
_sent_space_3_allKeys = []
# keep track of which components have finished
sent_prac_instr3Components = [sent_instr_3, sent_space_3]
for thisComponent in sent_prac_instr3Components:
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

# --- Run Routine "sent_prac_instr3" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *sent_instr_3* updates
    if sent_instr_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sent_instr_3.frameNStart = frameN  # exact frame index
        sent_instr_3.tStart = t  # local t and not account for scr refresh
        sent_instr_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(sent_instr_3, 'tStartRefresh')  # time at next scr refresh
        sent_instr_3.setAutoDraw(True)
    
    # *sent_space_3* updates
    waitOnFlip = False
    if sent_space_3.status == NOT_STARTED and tThisFlip >= 0.8-frameTolerance:
        # keep track of start time/frame for later
        sent_space_3.frameNStart = frameN  # exact frame index
        sent_space_3.tStart = t  # local t and not account for scr refresh
        sent_space_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(sent_space_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'sent_space_3.started')
        sent_space_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(sent_space_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(sent_space_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if sent_space_3.status == STARTED and not waitOnFlip:
        theseKeys = sent_space_3.getKeys(keyList=['space'], waitRelease=False)
        _sent_space_3_allKeys.extend(theseKeys)
        if len(_sent_space_3_allKeys):
            sent_space_3.keys = _sent_space_3_allKeys[-1].name  # just the last key pressed
            sent_space_3.rt = _sent_space_3_allKeys[-1].rt
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
    for thisComponent in sent_prac_instr3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "sent_prac_instr3" ---
for thisComponent in sent_prac_instr3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if sent_space_3.keys in ['', [], None]:  # No response was made
    sent_space_3.keys = None
thisExp.addData('sent_space_3.keys',sent_space_3.keys)
if sent_space_3.keys != None:  # we had a response
    thisExp.addData('sent_space_3.rt', sent_space_3.rt)
thisExp.nextEntry()
# the Routine "sent_prac_instr3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
sentence_practice_until_perfect = data.TrialHandler(nReps=100000.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='sentence_practice_until_perfect')
thisExp.addLoop(sentence_practice_until_perfect)  # add the loop to the experiment
thisSentence_practice_until_perfect = sentence_practice_until_perfect.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisSentence_practice_until_perfect.rgb)
if thisSentence_practice_until_perfect != None:
    for paramName in thisSentence_practice_until_perfect:
        exec('{} = thisSentence_practice_until_perfect[paramName]'.format(paramName))

for thisSentence_practice_until_perfect in sentence_practice_until_perfect:
    currentLoop = sentence_practice_until_perfect
    # abbreviate parameter names if possible (e.g. rgb = thisSentence_practice_until_perfect.rgb)
    if thisSentence_practice_until_perfect != None:
        for paramName in thisSentence_practice_until_perfect:
            exec('{} = thisSentence_practice_until_perfect[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "init_sentence_practice" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_4
    no_of_practice_sentences = 0
    no_of_correct_responses = 0
    
    avg_read_duration = 0
    total_read_duration = 0
    # keep track of which components have finished
    init_sentence_practiceComponents = []
    for thisComponent in init_sentence_practiceComponents:
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
    
    # --- Run Routine "init_sentence_practice" ---
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
        for thisComponent in init_sentence_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "init_sentence_practice" ---
    for thisComponent in init_sentence_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "init_sentence_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    sentence_practice_loop = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('practice_sentences/sentences.csv'),
        seed=None, name='sentence_practice_loop')
    thisExp.addLoop(sentence_practice_loop)  # add the loop to the experiment
    thisSentence_practice_loop = sentence_practice_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisSentence_practice_loop.rgb)
    if thisSentence_practice_loop != None:
        for paramName in thisSentence_practice_loop:
            exec('{} = thisSentence_practice_loop[paramName]'.format(paramName))
    
    for thisSentence_practice_loop in sentence_practice_loop:
        currentLoop = sentence_practice_loop
        # abbreviate parameter names if possible (e.g. rgb = thisSentence_practice_loop.rgb)
        if thisSentence_practice_loop != None:
            for paramName in thisSentence_practice_loop:
                exec('{} = thisSentence_practice_loop[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "practice_sentence_display" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_6
        timer = core.Clock()
        sentence_text.setText(sentence)
        # setup some python lists for storing info about the sentence_next
        sentence_next.clicked_name = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        practice_sentence_displayComponents = [sentence_text, sentence_help_text, sentence_next]
        for thisComponent in practice_sentence_displayComponents:
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
        
        # --- Run Routine "practice_sentence_display" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *sentence_text* updates
            if sentence_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sentence_text.frameNStart = frameN  # exact frame index
                sentence_text.tStart = t  # local t and not account for scr refresh
                sentence_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(sentence_text, 'tStartRefresh')  # time at next scr refresh
                sentence_text.setAutoDraw(True)
            
            # *sentence_help_text* updates
            if sentence_help_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sentence_help_text.frameNStart = frameN  # exact frame index
                sentence_help_text.tStart = t  # local t and not account for scr refresh
                sentence_help_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(sentence_help_text, 'tStartRefresh')  # time at next scr refresh
                sentence_help_text.setAutoDraw(True)
            # *sentence_next* updates
            if sentence_next.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sentence_next.frameNStart = frameN  # exact frame index
                sentence_next.tStart = t  # local t and not account for scr refresh
                sentence_next.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(sentence_next, 'tStartRefresh')  # time at next scr refresh
                sentence_next.status = STARTED
                sentence_next.mouseClock.reset()
                prevButtonState = sentence_next.getPressed()  # if button is down already this ISN'T a new click
            if sentence_next.status == STARTED:  # only update if started and not finished!
                buttons = sentence_next.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        try:
                            iter(sentence_help_text)
                            clickableList = sentence_help_text
                        except:
                            clickableList = [sentence_help_text]
                        for obj in clickableList:
                            if obj.contains(sentence_next):
                                gotValidClick = True
                                sentence_next.clicked_name.append(obj.name)
                        if gotValidClick:  
                            continueRoutine = False  # abort routine on response
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_sentence_displayComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "practice_sentence_display" ---
        for thisComponent in practice_sentence_displayComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_6
        seconds_to_read = timer.getTime()
        total_read_duration += seconds_to_read
        # store data for sentence_practice_loop (TrialHandler)
        # the Routine "practice_sentence_display" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "sentence_practice_response" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_3
        no_of_practice_sentences += 1
        
        # start with True and let one frame finish
        # so that it can then set mouse_clicked to be False
        # This is to guard against mouse button being held down
        # from previous routine and then "overflowing" to this routine
        mouse_clicked = True
        result_text.text = ""
        show_result = False
        
        ANSWER_BOXES = [prac_TRUE, prac_FALSE]
        # setup some python lists for storing info about the answer_click
        answer_click.x = []
        answer_click.y = []
        answer_click.leftButton = []
        answer_click.midButton = []
        answer_click.rightButton = []
        answer_click.time = []
        answer_click.clicked_name = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        sentence_practice_responseComponents = [answer_click, answer_help_text, prac_TRUE_BG, prac_FALSE_BG, prac_TRUE, prac_FALSE, result_text]
        for thisComponent in sentence_practice_responseComponents:
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
        
        # --- Run Routine "sentence_practice_response" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # Run 'Each Frame' code from code_3
            # mouse was last recorded as "not clicked"
            if not mouse_clicked and 1 in answer_click.getPressed():
                mouse_clicked = True
                
                # if answer_box is pressed
                for answer_box in ANSWER_BOXES:
                    if answer_click.isPressedIn(answer_box, buttons=[LEFT_CLICK]):
                        if (
                            (answer_box.text == "TRUE" and answer) or
                            (answer_box.text == "FALSE" and not answer)
                        ):
                            result_text.text = "Correct"
                            no_of_correct_responses += 1
                        else:
                            result_text.text = "Incorrect"
                        show_result = True
            else:
                if not 1 in answer_click.getPressed():
                    mouse_clicked = False
            # *answer_click* updates
            if answer_click.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                answer_click.frameNStart = frameN  # exact frame index
                answer_click.tStart = t  # local t and not account for scr refresh
                answer_click.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(answer_click, 'tStartRefresh')  # time at next scr refresh
                answer_click.status = STARTED
                answer_click.mouseClock.reset()
                prevButtonState = answer_click.getPressed()  # if button is down already this ISN'T a new click
            if answer_click.status == STARTED:
                if bool(show_result):
                    # keep track of stop time/frame for later
                    answer_click.tStop = t  # not accounting for scr refresh
                    answer_click.frameNStop = frameN  # exact frame index
                    answer_click.status = FINISHED
            if answer_click.status == STARTED:  # only update if started and not finished!
                buttons = answer_click.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        try:
                            iter([prac_TRUE, prac_FALSE])
                            clickableList = [prac_TRUE, prac_FALSE]
                        except:
                            clickableList = [[prac_TRUE, prac_FALSE]]
                        for obj in clickableList:
                            if obj.contains(answer_click):
                                gotValidClick = True
                                answer_click.clicked_name.append(obj.name)
                        if gotValidClick:
                            x, y = answer_click.getPos()
                            answer_click.x.append(x)
                            answer_click.y.append(y)
                            buttons = answer_click.getPressed()
                            answer_click.leftButton.append(buttons[0])
                            answer_click.midButton.append(buttons[1])
                            answer_click.rightButton.append(buttons[2])
                            answer_click.time.append(answer_click.mouseClock.getTime())
            
            # *answer_help_text* updates
            if answer_help_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                answer_help_text.frameNStart = frameN  # exact frame index
                answer_help_text.tStart = t  # local t and not account for scr refresh
                answer_help_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(answer_help_text, 'tStartRefresh')  # time at next scr refresh
                answer_help_text.setAutoDraw(True)
            if answer_help_text.status == STARTED:
                if bool(show_result):
                    # keep track of stop time/frame for later
                    answer_help_text.tStop = t  # not accounting for scr refresh
                    answer_help_text.frameNStop = frameN  # exact frame index
                    answer_help_text.setAutoDraw(False)
            
            # *prac_TRUE_BG* updates
            if prac_TRUE_BG.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_TRUE_BG.frameNStart = frameN  # exact frame index
                prac_TRUE_BG.tStart = t  # local t and not account for scr refresh
                prac_TRUE_BG.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_TRUE_BG, 'tStartRefresh')  # time at next scr refresh
                prac_TRUE_BG.setAutoDraw(True)
            if prac_TRUE_BG.status == STARTED:
                if bool(show_result):
                    # keep track of stop time/frame for later
                    prac_TRUE_BG.tStop = t  # not accounting for scr refresh
                    prac_TRUE_BG.frameNStop = frameN  # exact frame index
                    prac_TRUE_BG.setAutoDraw(False)
            
            # *prac_FALSE_BG* updates
            if prac_FALSE_BG.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_FALSE_BG.frameNStart = frameN  # exact frame index
                prac_FALSE_BG.tStart = t  # local t and not account for scr refresh
                prac_FALSE_BG.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_FALSE_BG, 'tStartRefresh')  # time at next scr refresh
                prac_FALSE_BG.setAutoDraw(True)
            if prac_FALSE_BG.status == STARTED:
                if bool(show_result):
                    # keep track of stop time/frame for later
                    prac_FALSE_BG.tStop = t  # not accounting for scr refresh
                    prac_FALSE_BG.frameNStop = frameN  # exact frame index
                    prac_FALSE_BG.setAutoDraw(False)
            
            # *prac_TRUE* updates
            if prac_TRUE.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_TRUE.frameNStart = frameN  # exact frame index
                prac_TRUE.tStart = t  # local t and not account for scr refresh
                prac_TRUE.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_TRUE, 'tStartRefresh')  # time at next scr refresh
                prac_TRUE.setAutoDraw(True)
            if prac_TRUE.status == STARTED:
                if bool(show_result):
                    # keep track of stop time/frame for later
                    prac_TRUE.tStop = t  # not accounting for scr refresh
                    prac_TRUE.frameNStop = frameN  # exact frame index
                    prac_TRUE.setAutoDraw(False)
            
            # *prac_FALSE* updates
            if prac_FALSE.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_FALSE.frameNStart = frameN  # exact frame index
                prac_FALSE.tStart = t  # local t and not account for scr refresh
                prac_FALSE.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_FALSE, 'tStartRefresh')  # time at next scr refresh
                prac_FALSE.setAutoDraw(True)
            if prac_FALSE.status == STARTED:
                if bool(show_result):
                    # keep track of stop time/frame for later
                    prac_FALSE.tStop = t  # not accounting for scr refresh
                    prac_FALSE.frameNStop = frameN  # exact frame index
                    prac_FALSE.setAutoDraw(False)
            
            # *result_text* updates
            if result_text.status == NOT_STARTED and show_result:
                # keep track of start time/frame for later
                result_text.frameNStart = frameN  # exact frame index
                result_text.tStart = t  # local t and not account for scr refresh
                result_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(result_text, 'tStartRefresh')  # time at next scr refresh
                result_text.setAutoDraw(True)
            if result_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > result_text.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    result_text.tStop = t  # not accounting for scr refresh
                    result_text.frameNStop = frameN  # exact frame index
                    result_text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in sentence_practice_responseComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "sentence_practice_response" ---
        for thisComponent in sentence_practice_responseComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for sentence_practice_loop (TrialHandler)
        sentence_practice_loop.addData('answer_click.x', answer_click.x)
        sentence_practice_loop.addData('answer_click.y', answer_click.y)
        sentence_practice_loop.addData('answer_click.leftButton', answer_click.leftButton)
        sentence_practice_loop.addData('answer_click.midButton', answer_click.midButton)
        sentence_practice_loop.addData('answer_click.rightButton', answer_click.rightButton)
        sentence_practice_loop.addData('answer_click.time', answer_click.time)
        sentence_practice_loop.addData('answer_click.clicked_name', answer_click.clicked_name)
        # the Routine "sentence_practice_response" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'sentence_practice_loop'
    
    
    # --- Prepare to start Routine "check_sent_prac_score" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_5
    percent_correct = int(
        no_of_correct_responses/no_of_practice_sentences * 100
    )
    
    avg_read_duration = total_read_duration/no_of_practice_sentences
    print(f'''
    total_read_duration: {total_read_duration}
    avg_read_duration: {avg_read_duration}
    ''')
    
    sentence_practice_final_result.text = (
        f"You were correct on {no_of_correct_responses} of "
        f"{no_of_practice_sentences} trials.\n"
        f"That is {percent_correct} percent correct."
    )
    # keep track of which components have finished
    check_sent_prac_scoreComponents = [sentence_practice_final_result]
    for thisComponent in check_sent_prac_scoreComponents:
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
    
    # --- Run Routine "check_sent_prac_score" ---
    while continueRoutine and routineTimer.getTime() < 4.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *sentence_practice_final_result* updates
        if sentence_practice_final_result.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sentence_practice_final_result.frameNStart = frameN  # exact frame index
            sentence_practice_final_result.tStart = t  # local t and not account for scr refresh
            sentence_practice_final_result.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(sentence_practice_final_result, 'tStartRefresh')  # time at next scr refresh
            sentence_practice_final_result.setAutoDraw(True)
        if sentence_practice_final_result.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sentence_practice_final_result.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                sentence_practice_final_result.tStop = t  # not accounting for scr refresh
                sentence_practice_final_result.frameNStop = frameN  # exact frame index
                sentence_practice_final_result.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in check_sent_prac_scoreComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "check_sent_prac_score" ---
    for thisComponent in check_sent_prac_scoreComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_5
    if percent_correct == 100:
        sentence_practice_until_perfect.finished = True
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-4.000000)
# completed 100000.0 repeats of 'sentence_practice_until_perfect'


# --- Prepare to start Routine "joint_prac_instr1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
joint_instr_1.reset()
joint_space_1.keys = []
joint_space_1.rt = []
_joint_space_1_allKeys = []
# keep track of which components have finished
joint_prac_instr1Components = [joint_instr_1, joint_space_1]
for thisComponent in joint_prac_instr1Components:
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

# --- Run Routine "joint_prac_instr1" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *joint_instr_1* updates
    if joint_instr_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        joint_instr_1.frameNStart = frameN  # exact frame index
        joint_instr_1.tStart = t  # local t and not account for scr refresh
        joint_instr_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(joint_instr_1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'joint_instr_1.started')
        joint_instr_1.setAutoDraw(True)
    
    # *joint_space_1* updates
    waitOnFlip = False
    if joint_space_1.status == NOT_STARTED and tThisFlip >= 0.8-frameTolerance:
        # keep track of start time/frame for later
        joint_space_1.frameNStart = frameN  # exact frame index
        joint_space_1.tStart = t  # local t and not account for scr refresh
        joint_space_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(joint_space_1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'joint_space_1.started')
        joint_space_1.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(joint_space_1.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(joint_space_1.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if joint_space_1.status == STARTED and not waitOnFlip:
        theseKeys = joint_space_1.getKeys(keyList=['space'], waitRelease=False)
        _joint_space_1_allKeys.extend(theseKeys)
        if len(_joint_space_1_allKeys):
            joint_space_1.keys = _joint_space_1_allKeys[-1].name  # just the last key pressed
            joint_space_1.rt = _joint_space_1_allKeys[-1].rt
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
    for thisComponent in joint_prac_instr1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "joint_prac_instr1" ---
for thisComponent in joint_prac_instr1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if joint_space_1.keys in ['', [], None]:  # No response was made
    joint_space_1.keys = None
thisExp.addData('joint_space_1.keys',joint_space_1.keys)
if joint_space_1.keys != None:  # we had a response
    thisExp.addData('joint_space_1.rt', joint_space_1.rt)
thisExp.nextEntry()
# the Routine "joint_prac_instr1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "joint_prac_instr2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
joint_instr_2.reset()
joint_space_2.keys = []
joint_space_2.rt = []
_joint_space_2_allKeys = []
# keep track of which components have finished
joint_prac_instr2Components = [joint_instr_2, joint_space_2]
for thisComponent in joint_prac_instr2Components:
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

# --- Run Routine "joint_prac_instr2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *joint_instr_2* updates
    if joint_instr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        joint_instr_2.frameNStart = frameN  # exact frame index
        joint_instr_2.tStart = t  # local t and not account for scr refresh
        joint_instr_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(joint_instr_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'joint_instr_2.started')
        joint_instr_2.setAutoDraw(True)
    
    # *joint_space_2* updates
    waitOnFlip = False
    if joint_space_2.status == NOT_STARTED and tThisFlip >= 0.8-frameTolerance:
        # keep track of start time/frame for later
        joint_space_2.frameNStart = frameN  # exact frame index
        joint_space_2.tStart = t  # local t and not account for scr refresh
        joint_space_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(joint_space_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'joint_space_2.started')
        joint_space_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(joint_space_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(joint_space_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if joint_space_2.status == STARTED and not waitOnFlip:
        theseKeys = joint_space_2.getKeys(keyList=['space'], waitRelease=False)
        _joint_space_2_allKeys.extend(theseKeys)
        if len(_joint_space_2_allKeys):
            joint_space_2.keys = _joint_space_2_allKeys[-1].name  # just the last key pressed
            joint_space_2.rt = _joint_space_2_allKeys[-1].rt
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
    for thisComponent in joint_prac_instr2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "joint_prac_instr2" ---
for thisComponent in joint_prac_instr2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if joint_space_2.keys in ['', [], None]:  # No response was made
    joint_space_2.keys = None
thisExp.addData('joint_space_2.keys',joint_space_2.keys)
if joint_space_2.keys != None:  # we had a response
    thisExp.addData('joint_space_2.rt', joint_space_2.rt)
thisExp.nextEntry()
# the Routine "joint_prac_instr2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "joint_prac_instr3" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
joint_instr_3.reset()
joint_space_3.keys = []
joint_space_3.rt = []
_joint_space_3_allKeys = []
# keep track of which components have finished
joint_prac_instr3Components = [joint_instr_3, joint_space_3]
for thisComponent in joint_prac_instr3Components:
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

# --- Run Routine "joint_prac_instr3" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *joint_instr_3* updates
    if joint_instr_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        joint_instr_3.frameNStart = frameN  # exact frame index
        joint_instr_3.tStart = t  # local t and not account for scr refresh
        joint_instr_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(joint_instr_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'joint_instr_3.started')
        joint_instr_3.setAutoDraw(True)
    
    # *joint_space_3* updates
    waitOnFlip = False
    if joint_space_3.status == NOT_STARTED and tThisFlip >= 0.8-frameTolerance:
        # keep track of start time/frame for later
        joint_space_3.frameNStart = frameN  # exact frame index
        joint_space_3.tStart = t  # local t and not account for scr refresh
        joint_space_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(joint_space_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'joint_space_3.started')
        joint_space_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(joint_space_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(joint_space_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if joint_space_3.status == STARTED and not waitOnFlip:
        theseKeys = joint_space_3.getKeys(keyList=['space'], waitRelease=False)
        _joint_space_3_allKeys.extend(theseKeys)
        if len(_joint_space_3_allKeys):
            joint_space_3.keys = _joint_space_3_allKeys[-1].name  # just the last key pressed
            joint_space_3.rt = _joint_space_3_allKeys[-1].rt
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
    for thisComponent in joint_prac_instr3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "joint_prac_instr3" ---
for thisComponent in joint_prac_instr3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if joint_space_3.keys in ['', [], None]:  # No response was made
    joint_space_3.keys = None
thisExp.addData('joint_space_3.keys',joint_space_3.keys)
if joint_space_3.keys != None:  # we had a response
    thisExp.addData('joint_space_3.rt', joint_space_3.rt)
thisExp.nextEntry()
# the Routine "joint_prac_instr3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
jp_or_main_loop = data.TrialHandler(nReps=2.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='jp_or_main_loop')
thisExp.addLoop(jp_or_main_loop)  # add the loop to the experiment
thisJp_or_main_loop = jp_or_main_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisJp_or_main_loop.rgb)
if thisJp_or_main_loop != None:
    for paramName in thisJp_or_main_loop:
        exec('{} = thisJp_or_main_loop[paramName]'.format(paramName))

for thisJp_or_main_loop in jp_or_main_loop:
    currentLoop = jp_or_main_loop
    # abbreviate parameter names if possible (e.g. rgb = thisJp_or_main_loop.rgb)
    if thisJp_or_main_loop != None:
        for paramName in thisJp_or_main_loop:
            exec('{} = thisJp_or_main_loop[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "pre_big_loop_init" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_20
    BIG_LOOP_REPS = 0
    is_main_test = False
    
    # joint practice settings
    if jp_or_main_loop.thisRepN == 0:    
        is_main_test = False
        sentence_file = 'practice_sentences/sentences.csv'
        BIG_LOOP_REPS = 100000 # "infinite"
        LOOP_SIZE = 3
        MIN_SET_SIZE = 2
        MAX_SET_SIZE = 2
    # main test settings
    elif jp_or_main_loop.thisRepN == 1:
        is_main_test = True
        sentence_file = 'main_test/sentences.csv'
        BIG_LOOP_REPS = 3
        LOOP_SIZE = 5
        rspan_score = 0
        sent_acc_error = 0
        sent_speed_error = 0
        sent_total_error = 0
        MIN_SET_SIZE = 1
        MAX_SET_SIZE = 2
        
    # Hard coding the average read duration (in seconds) for testing purposes
    # otherwise the value is calculated in check_sent_prac_score routine's code_5
    # avg_read_duration = 2
    # keep track of which components have finished
    pre_big_loop_initComponents = []
    for thisComponent in pre_big_loop_initComponents:
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
    
    # --- Run Routine "pre_big_loop_init" ---
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
        for thisComponent in pre_big_loop_initComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "pre_big_loop_init" ---
    for thisComponent in pre_big_loop_initComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code_20
    if jp_or_main_loop.thisRepN == 0:
        thisExp.addData("avg_read_duration", avg_read_duration)
    # the Routine "pre_big_loop_init" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "main_test_instr1" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    main_instr_1.reset()
    main_space_1.keys = []
    main_space_1.rt = []
    _main_space_1_allKeys = []
    # Run 'Begin Routine' code from code_23
    # only show main test instructions
    # when it is main test
    if not is_main_test:
        continueRoutine = False
    # keep track of which components have finished
    main_test_instr1Components = [main_instr_1, main_space_1]
    for thisComponent in main_test_instr1Components:
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
    
    # --- Run Routine "main_test_instr1" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *main_instr_1* updates
        if main_instr_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            main_instr_1.frameNStart = frameN  # exact frame index
            main_instr_1.tStart = t  # local t and not account for scr refresh
            main_instr_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(main_instr_1, 'tStartRefresh')  # time at next scr refresh
            main_instr_1.setAutoDraw(True)
        
        # *main_space_1* updates
        waitOnFlip = False
        if main_space_1.status == NOT_STARTED and tThisFlip >= 0.8-frameTolerance:
            # keep track of start time/frame for later
            main_space_1.frameNStart = frameN  # exact frame index
            main_space_1.tStart = t  # local t and not account for scr refresh
            main_space_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(main_space_1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'main_space_1.started')
            main_space_1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(main_space_1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(main_space_1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if main_space_1.status == STARTED and not waitOnFlip:
            theseKeys = main_space_1.getKeys(keyList=['space'], waitRelease=False)
            _main_space_1_allKeys.extend(theseKeys)
            if len(_main_space_1_allKeys):
                main_space_1.keys = _main_space_1_allKeys[-1].name  # just the last key pressed
                main_space_1.rt = _main_space_1_allKeys[-1].rt
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
        for thisComponent in main_test_instr1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "main_test_instr1" ---
    for thisComponent in main_test_instr1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if main_space_1.keys in ['', [], None]:  # No response was made
        main_space_1.keys = None
    jp_or_main_loop.addData('main_space_1.keys',main_space_1.keys)
    if main_space_1.keys != None:  # we had a response
        jp_or_main_loop.addData('main_space_1.rt', main_space_1.rt)
    # the Routine "main_test_instr1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    big_loop = data.TrialHandler(nReps=BIG_LOOP_REPS, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='big_loop')
    thisExp.addLoop(big_loop)  # add the loop to the experiment
    thisBig_loop = big_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisBig_loop.rgb)
    if thisBig_loop != None:
        for paramName in thisBig_loop:
            exec('{} = thisBig_loop[paramName]'.format(paramName))
    
    for thisBig_loop in big_loop:
        currentLoop = big_loop
        # abbreviate parameter names if possible (e.g. rgb = thisBig_loop.rgb)
        if thisBig_loop != None:
            for paramName in thisBig_loop:
                exec('{} = thisBig_loop[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "big_loop_init" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_11
        print(f"""
        big_loop.thisRepN={big_loop.thisRepN}
        """)
        
        if jp_or_main_loop.thisRepN == 0:
            # reset these for joint practice
            # as participants will be in this loop until they get no sentence errors
            sent_acc_error = 0
            sent_speed_error = 0
            sent_total_error = 0
        
        SIZE_OF_SETS = [randint(MIN_SET_SIZE, MAX_SET_SIZE + 1) for i in range(LOOP_SIZE)]
            
        TOTAL_SETS = sum(SIZE_OF_SETS)
        
        # reset
        sentences = []
        letters = []
        # keep track of which components have finished
        big_loop_initComponents = []
        for thisComponent in big_loop_initComponents:
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
        
        # --- Run Routine "big_loop_init" ---
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
            for thisComponent in big_loop_initComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "big_loop_init" ---
        for thisComponent in big_loop_initComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "big_loop_init" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        loader_loop = data.TrialHandler(nReps=LOOP_SIZE, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='loader_loop')
        thisExp.addLoop(loader_loop)  # add the loop to the experiment
        thisLoader_loop = loader_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisLoader_loop.rgb)
        if thisLoader_loop != None:
            for paramName in thisLoader_loop:
                exec('{} = thisLoader_loop[paramName]'.format(paramName))
        
        for thisLoader_loop in loader_loop:
            currentLoop = loader_loop
            # abbreviate parameter names if possible (e.g. rgb = thisLoader_loop.rgb)
            if thisLoader_loop != None:
                for paramName in thisLoader_loop:
                    exec('{} = thisLoader_loop[paramName]'.format(paramName))
            
            # set up handler to look after randomisation of conditions etc
            sent_loader_loop = data.TrialHandler(nReps=TOTAL_SETS, method='random', 
                extraInfo=expInfo, originPath=-1,
                trialList=data.importConditions(sentence_file),
                seed=None, name='sent_loader_loop')
            thisExp.addLoop(sent_loader_loop)  # add the loop to the experiment
            thisSent_loader_loop = sent_loader_loop.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisSent_loader_loop.rgb)
            if thisSent_loader_loop != None:
                for paramName in thisSent_loader_loop:
                    exec('{} = thisSent_loader_loop[paramName]'.format(paramName))
            
            for thisSent_loader_loop in sent_loader_loop:
                currentLoop = sent_loader_loop
                # abbreviate parameter names if possible (e.g. rgb = thisSent_loader_loop.rgb)
                if thisSent_loader_loop != None:
                    for paramName in thisSent_loader_loop:
                        exec('{} = thisSent_loader_loop[paramName]'.format(paramName))
                
                # --- Prepare to start Routine "sent_loader" ---
                continueRoutine = True
                routineForceEnded = False
                # update component parameters for each repeat
                # keep track of which components have finished
                sent_loaderComponents = []
                for thisComponent in sent_loaderComponents:
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
                
                # --- Run Routine "sent_loader" ---
                while continueRoutine:
                    # get current time
                    t = routineTimer.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    # Run 'Each Frame' code from code_9
                    sentences.append([sentence, answer])
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        routineForceEnded = True
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in sent_loaderComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "sent_loader" ---
                for thisComponent in sent_loaderComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # the Routine "sent_loader" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
            # completed TOTAL_SETS repeats of 'sent_loader_loop'
            
            
            # set up handler to look after randomisation of conditions etc
            letters_loader_loop = data.TrialHandler(nReps=TOTAL_SETS, method='random', 
                extraInfo=expInfo, originPath=-1,
                trialList=data.importConditions('practice_letters/letters.csv'),
                seed=None, name='letters_loader_loop')
            thisExp.addLoop(letters_loader_loop)  # add the loop to the experiment
            thisLetters_loader_loop = letters_loader_loop.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisLetters_loader_loop.rgb)
            if thisLetters_loader_loop != None:
                for paramName in thisLetters_loader_loop:
                    exec('{} = thisLetters_loader_loop[paramName]'.format(paramName))
            
            for thisLetters_loader_loop in letters_loader_loop:
                currentLoop = letters_loader_loop
                # abbreviate parameter names if possible (e.g. rgb = thisLetters_loader_loop.rgb)
                if thisLetters_loader_loop != None:
                    for paramName in thisLetters_loader_loop:
                        exec('{} = thisLetters_loader_loop[paramName]'.format(paramName))
                
                # --- Prepare to start Routine "letters_loader" ---
                continueRoutine = True
                routineForceEnded = False
                # update component parameters for each repeat
                # keep track of which components have finished
                letters_loaderComponents = []
                for thisComponent in letters_loaderComponents:
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
                
                # --- Run Routine "letters_loader" ---
                while continueRoutine:
                    # get current time
                    t = routineTimer.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    # Run 'Each Frame' code from code_12
                    letters.append(letter)
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        routineForceEnded = True
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in letters_loaderComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "letters_loader" ---
                for thisComponent in letters_loaderComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # the Routine "letters_loader" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
            # completed TOTAL_SETS repeats of 'letters_loader_loop'
            
        # completed LOOP_SIZE repeats of 'loader_loop'
        
        
        # --- Prepare to start Routine "pre_loop_init" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_17
        # limit to only the sentences and letters we are using
        curr_loop_sentences = sentences[:TOTAL_SETS]
        curr_loop_letters = letters[:TOTAL_SETS]
        
        # the expected answers for sentences
        curr_loop_sentence_answers = [
            s[1] for s in curr_loop_sentences
        ]
        
        # initialise the responses from the user to the same length
        # but all None i.e. not responded (yet)
        sentence_responses = [None for a in range(TOTAL_SETS)]
        
        # initialise user letter reponses, used for calculating rspan_score
        letter_responses = []
        # used for calculating total_correct_letters
        actual_letter_responses = []
        # keep track of which components have finished
        pre_loop_initComponents = []
        for thisComponent in pre_loop_initComponents:
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
        
        # --- Run Routine "pre_loop_init" ---
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
            for thisComponent in pre_loop_initComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "pre_loop_init" ---
        for thisComponent in pre_loop_initComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "pre_loop_init" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        small_loop = data.TrialHandler(nReps=LOOP_SIZE, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='small_loop')
        thisExp.addLoop(small_loop)  # add the loop to the experiment
        thisSmall_loop = small_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisSmall_loop.rgb)
        if thisSmall_loop != None:
            for paramName in thisSmall_loop:
                exec('{} = thisSmall_loop[paramName]'.format(paramName))
        
        for thisSmall_loop in small_loop:
            currentLoop = small_loop
            # abbreviate parameter names if possible (e.g. rgb = thisSmall_loop.rgb)
            if thisSmall_loop != None:
                for paramName in thisSmall_loop:
                    exec('{} = thisSmall_loop[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "loop_init" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from code_22
            SET_SIZE = SIZE_OF_SETS[small_loop.thisRepN]
            
            print(f"""
            small_loop.thisRepN={small_loop.thisRepN}
            SIZE_OF_SETS={SIZE_OF_SETS}
            SET_SIZE={SET_SIZE}
            """)
            # keep track of which components have finished
            loop_initComponents = []
            for thisComponent in loop_initComponents:
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
            
            # --- Run Routine "loop_init" ---
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
                for thisComponent in loop_initComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "loop_init" ---
            for thisComponent in loop_initComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "loop_init" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # set up handler to look after randomisation of conditions etc
            sentences_letters_set = data.TrialHandler(nReps=SET_SIZE, method='random', 
                extraInfo=expInfo, originPath=-1,
                trialList=[None],
                seed=None, name='sentences_letters_set')
            thisExp.addLoop(sentences_letters_set)  # add the loop to the experiment
            thisSentences_letters_set = sentences_letters_set.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisSentences_letters_set.rgb)
            if thisSentences_letters_set != None:
                for paramName in thisSentences_letters_set:
                    exec('{} = thisSentences_letters_set[paramName]'.format(paramName))
            
            for thisSentences_letters_set in sentences_letters_set:
                currentLoop = sentences_letters_set
                # abbreviate parameter names if possible (e.g. rgb = thisSentences_letters_set.rgb)
                if thisSentences_letters_set != None:
                    for paramName in thisSentences_letters_set:
                        exec('{} = thisSentences_letters_set[paramName]'.format(paramName))
                
                # --- Prepare to start Routine "set_init" ---
                continueRoutine = True
                routineForceEnded = False
                # update component parameters for each repeat
                # Run 'Begin Routine' code from code_15
                # pick the next sentence and letter to show
                index_to_skip = 0
                for i in range(small_loop.thisRepN):
                    index_to_skip += SIZE_OF_SETS[i]
                    
                current_index = (
                    index_to_skip + sentences_letters_set.thisRepN
                )
                
                curr_sentence = curr_loop_sentences[current_index][0]
                curr_letter = curr_loop_letters[current_index]
                
                # reset
                clicked_to_continue = False
                
                print(f"""
                sentences_letters_set.thisRepN={sentences_letters_set.thisRepN}
                current_index={current_index}
                curr_sentence={curr_sentence}
                curr_letter={curr_letter}
                """)
                # keep track of which components have finished
                set_initComponents = []
                for thisComponent in set_initComponents:
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
                
                # --- Run Routine "set_init" ---
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
                    for thisComponent in set_initComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "set_init" ---
                for thisComponent in set_initComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # the Routine "set_init" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                
                # --- Prepare to start Routine "sentence_display" ---
                continueRoutine = True
                routineForceEnded = False
                # update component parameters for each repeat
                sentence_text_2.setText(curr_sentence)
                # setup some python lists for storing info about the mouse_2
                mouse_2.x = []
                mouse_2.y = []
                mouse_2.leftButton = []
                mouse_2.midButton = []
                mouse_2.rightButton = []
                mouse_2.time = []
                gotValidClick = False  # until a click is received
                # Run 'Begin Routine' code from code_16
                LEFT_CLICK = 0
                
                # start with True and let one frame finish
                # so that it can then set mouse_clicked to be False
                # This is to guard against mouse button being held down
                # from previous routine and then "overflowing" to this routine
                mouse_clicked = True
                # keep track of which components have finished
                sentence_displayComponents = [sentence_text_2, sentence_help_text_2, mouse_2]
                for thisComponent in sentence_displayComponents:
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
                
                # --- Run Routine "sentence_display" ---
                while continueRoutine:
                    # get current time
                    t = routineTimer.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    
                    # *sentence_text_2* updates
                    if sentence_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        sentence_text_2.frameNStart = frameN  # exact frame index
                        sentence_text_2.tStart = t  # local t and not account for scr refresh
                        sentence_text_2.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(sentence_text_2, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'sentence_text_2.started')
                        sentence_text_2.setAutoDraw(True)
                    if sentence_text_2.status == STARTED:
                        # is it time to stop? (based on global clock, using actual start)
                        if tThisFlipGlobal > sentence_text_2.tStartRefresh + avg_read_duration-frameTolerance:
                            # keep track of stop time/frame for later
                            sentence_text_2.tStop = t  # not accounting for scr refresh
                            sentence_text_2.frameNStop = frameN  # exact frame index
                            # add timestamp to datafile
                            thisExp.timestampOnFlip(win, 'sentence_text_2.stopped')
                            sentence_text_2.setAutoDraw(False)
                    
                    # *sentence_help_text_2* updates
                    if sentence_help_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        sentence_help_text_2.frameNStart = frameN  # exact frame index
                        sentence_help_text_2.tStart = t  # local t and not account for scr refresh
                        sentence_help_text_2.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(sentence_help_text_2, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'sentence_help_text_2.started')
                        sentence_help_text_2.setAutoDraw(True)
                    if sentence_help_text_2.status == STARTED:
                        # is it time to stop? (based on global clock, using actual start)
                        if tThisFlipGlobal > sentence_help_text_2.tStartRefresh + avg_read_duration-frameTolerance:
                            # keep track of stop time/frame for later
                            sentence_help_text_2.tStop = t  # not accounting for scr refresh
                            sentence_help_text_2.frameNStop = frameN  # exact frame index
                            # add timestamp to datafile
                            thisExp.timestampOnFlip(win, 'sentence_help_text_2.stopped')
                            sentence_help_text_2.setAutoDraw(False)
                    # *mouse_2* updates
                    if mouse_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        mouse_2.frameNStart = frameN  # exact frame index
                        mouse_2.tStart = t  # local t and not account for scr refresh
                        mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.addData('mouse_2.started', t)
                        mouse_2.status = STARTED
                        mouse_2.mouseClock.reset()
                        prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
                    if mouse_2.status == STARTED:
                        # is it time to stop? (based on global clock, using actual start)
                        if tThisFlipGlobal > mouse_2.tStartRefresh + avg_read_duration-frameTolerance:
                            # keep track of stop time/frame for later
                            mouse_2.tStop = t  # not accounting for scr refresh
                            mouse_2.frameNStop = frameN  # exact frame index
                            # add timestamp to datafile
                            thisExp.addData('mouse_2.stopped', t)
                            mouse_2.status = FINISHED
                    if mouse_2.status == STARTED:  # only update if started and not finished!
                        buttons = mouse_2.getPressed()
                        if buttons != prevButtonState:  # button state changed?
                            prevButtonState = buttons
                            if sum(buttons) > 0:  # state changed to a new click
                                
                                continueRoutine = False  # abort routine on response
                    # Run 'Each Frame' code from code_16
                    # mouse was last recorded as "not clicked"
                    if not mouse_clicked and mouse_2.getPressed()[LEFT_CLICK]:
                        mouse_clicked = True
                        clicked_to_continue = True
                        print("clicked to continue")
                    else:
                        if not mouse_2.getPressed()[LEFT_CLICK]:
                            mouse_clicked = False
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        routineForceEnded = True
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in sentence_displayComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "sentence_display" ---
                for thisComponent in sentence_displayComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # store data for sentences_letters_set (TrialHandler)
                sentences_letters_set.addData('mouse_2.x', mouse_2.x)
                sentences_letters_set.addData('mouse_2.y', mouse_2.y)
                sentences_letters_set.addData('mouse_2.leftButton', mouse_2.leftButton)
                sentences_letters_set.addData('mouse_2.midButton', mouse_2.midButton)
                sentences_letters_set.addData('mouse_2.rightButton', mouse_2.rightButton)
                sentences_letters_set.addData('mouse_2.time', mouse_2.time)
                # the Routine "sentence_display" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                
                # --- Prepare to start Routine "respond_to_sentence" ---
                continueRoutine = True
                routineForceEnded = False
                # update component parameters for each repeat
                # Run 'Begin Routine' code from code_14
                mouse_clicked = False
                
                ANSWER_BOXES = [TRUE, FALSE]
                # setup some python lists for storing info about the answer_click_2
                answer_click_2.x = []
                answer_click_2.y = []
                answer_click_2.leftButton = []
                answer_click_2.midButton = []
                answer_click_2.rightButton = []
                answer_click_2.time = []
                answer_click_2.clicked_name = []
                gotValidClick = False  # until a click is received
                # keep track of which components have finished
                respond_to_sentenceComponents = [answer_click_2, answer_help_text_2, TRUE_BG, FALSE_BG, TRUE, FALSE]
                for thisComponent in respond_to_sentenceComponents:
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
                
                # --- Run Routine "respond_to_sentence" ---
                while continueRoutine:
                    # get current time
                    t = routineTimer.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    # Run 'Each Frame' code from code_14
                    if not clicked_to_continue:
                        continueRoutine = False
                        print("Did not click, skipped")
                        
                    
                    # mouse was last recorded as "not clicked"
                    if not mouse_clicked and 1 in answer_click_2.getPressed():
                        mouse_clicked = True
                        
                        # if answer_box is pressed
                        for answer_box in ANSWER_BOXES:
                            if answer_click.isPressedIn(answer_box, buttons=[LEFT_CLICK]):
                                sentence_responses[current_index] = (
                                    True if answer_box.text == 'TRUE' else False
                                )
                                print(f"current_index={current_index}")
                                print(f"sentence_reponses={sentence_responses}")
                                print(f"sentence response {answer_box.text}")
                    else:
                        if not 1 in answer_click.getPressed():
                            mouse_clicked = False
                    # *answer_click_2* updates
                    if answer_click_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        answer_click_2.frameNStart = frameN  # exact frame index
                        answer_click_2.tStart = t  # local t and not account for scr refresh
                        answer_click_2.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(answer_click_2, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.addData('answer_click_2.started', t)
                        answer_click_2.status = STARTED
                        answer_click_2.mouseClock.reset()
                        prevButtonState = answer_click_2.getPressed()  # if button is down already this ISN'T a new click
                    if answer_click_2.status == STARTED:  # only update if started and not finished!
                        buttons = answer_click_2.getPressed()
                        if buttons != prevButtonState:  # button state changed?
                            prevButtonState = buttons
                            if sum(buttons) > 0:  # state changed to a new click
                                # check if the mouse was inside our 'clickable' objects
                                gotValidClick = False
                                try:
                                    iter([TRUE, FALSE])
                                    clickableList = [TRUE, FALSE]
                                except:
                                    clickableList = [[TRUE, FALSE]]
                                for obj in clickableList:
                                    if obj.contains(answer_click_2):
                                        gotValidClick = True
                                        answer_click_2.clicked_name.append(obj.name)
                                x, y = answer_click_2.getPos()
                                answer_click_2.x.append(x)
                                answer_click_2.y.append(y)
                                buttons = answer_click_2.getPressed()
                                answer_click_2.leftButton.append(buttons[0])
                                answer_click_2.midButton.append(buttons[1])
                                answer_click_2.rightButton.append(buttons[2])
                                answer_click_2.time.append(answer_click_2.mouseClock.getTime())
                                if gotValidClick:
                                    continueRoutine = False  # abort routine on response
                    
                    # *answer_help_text_2* updates
                    if answer_help_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        answer_help_text_2.frameNStart = frameN  # exact frame index
                        answer_help_text_2.tStart = t  # local t and not account for scr refresh
                        answer_help_text_2.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(answer_help_text_2, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'answer_help_text_2.started')
                        answer_help_text_2.setAutoDraw(True)
                    
                    # *TRUE_BG* updates
                    if TRUE_BG.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        TRUE_BG.frameNStart = frameN  # exact frame index
                        TRUE_BG.tStart = t  # local t and not account for scr refresh
                        TRUE_BG.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(TRUE_BG, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'TRUE_BG.started')
                        TRUE_BG.setAutoDraw(True)
                    
                    # *FALSE_BG* updates
                    if FALSE_BG.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        FALSE_BG.frameNStart = frameN  # exact frame index
                        FALSE_BG.tStart = t  # local t and not account for scr refresh
                        FALSE_BG.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(FALSE_BG, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'FALSE_BG.started')
                        FALSE_BG.setAutoDraw(True)
                    
                    # *TRUE* updates
                    if TRUE.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        TRUE.frameNStart = frameN  # exact frame index
                        TRUE.tStart = t  # local t and not account for scr refresh
                        TRUE.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(TRUE, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'TRUE.started')
                        TRUE.setAutoDraw(True)
                    
                    # *FALSE* updates
                    if FALSE.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        FALSE.frameNStart = frameN  # exact frame index
                        FALSE.tStart = t  # local t and not account for scr refresh
                        FALSE.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(FALSE, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'FALSE.started')
                        FALSE.setAutoDraw(True)
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        routineForceEnded = True
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in respond_to_sentenceComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "respond_to_sentence" ---
                for thisComponent in respond_to_sentenceComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # store data for sentences_letters_set (TrialHandler)
                sentences_letters_set.addData('answer_click_2.x', answer_click_2.x)
                sentences_letters_set.addData('answer_click_2.y', answer_click_2.y)
                sentences_letters_set.addData('answer_click_2.leftButton', answer_click_2.leftButton)
                sentences_letters_set.addData('answer_click_2.midButton', answer_click_2.midButton)
                sentences_letters_set.addData('answer_click_2.rightButton', answer_click_2.rightButton)
                sentences_letters_set.addData('answer_click_2.time', answer_click_2.time)
                sentences_letters_set.addData('answer_click_2.clicked_name', answer_click_2.clicked_name)
                # the Routine "respond_to_sentence" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                
                # --- Prepare to start Routine "letter_display" ---
                continueRoutine = True
                routineForceEnded = False
                # update component parameters for each repeat
                # Run 'Begin Routine' code from code_25
                win.mouseVisible = False
                text.setText(curr_letter)
                # keep track of which components have finished
                letter_displayComponents = [text]
                for thisComponent in letter_displayComponents:
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
                
                # --- Run Routine "letter_display" ---
                while continueRoutine and routineTimer.getTime() < 1.2:
                    # get current time
                    t = routineTimer.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    
                    # *text* updates
                    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        text.frameNStart = frameN  # exact frame index
                        text.tStart = t  # local t and not account for scr refresh
                        text.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text.started')
                        text.setAutoDraw(True)
                    if text.status == STARTED:
                        # is it time to stop? (based on global clock, using actual start)
                        if tThisFlipGlobal > text.tStartRefresh + 1.2-frameTolerance:
                            # keep track of stop time/frame for later
                            text.tStop = t  # not accounting for scr refresh
                            text.frameNStop = frameN  # exact frame index
                            # add timestamp to datafile
                            thisExp.timestampOnFlip(win, 'text.stopped')
                            text.setAutoDraw(False)
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        routineForceEnded = True
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in letter_displayComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "letter_display" ---
                for thisComponent in letter_displayComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # Run 'End Routine' code from code_25
                win.mouseVisible = True
                # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
                if routineForceEnded:
                    routineTimer.reset()
                else:
                    routineTimer.addTime(-1.200000)
                thisExp.nextEntry()
                
            # completed SET_SIZE repeats of 'sentences_letters_set'
            
            
            # --- Prepare to start Routine "recall_letters" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from code_jp
            LEFT_CLICK = 0
            BLANK_LETTER = '_'
            LETTERS = [
                letter_S, letter_P, letter_K, letter_F,
                letter_T, letter_Q, letter_L, letter_H,
                letter_Y, letter_R, letter_N, letter_J
            ]
            
            # start with True and let one frame finish
            # so that it can then set mouse_clicked to be False
            # This is to guard against mouse button being held down
            # from previous routine and then "overflowing" to this routine
            mouse_clicked = True
            letter_clicked = None
            letters_clicked = []
            display_letters_clicked_jp.text = ""
            # setup some python lists for storing info about the mouse_jp
            mouse_jp.x = []
            mouse_jp.y = []
            mouse_jp.leftButton = []
            mouse_jp.midButton = []
            mouse_jp.rightButton = []
            mouse_jp.time = []
            mouse_jp.clicked_name = []
            gotValidClick = False  # until a click is received
            # keep track of which components have finished
            recall_lettersComponents = [mouse_jp, remind_text_jp, letter_S, letter_P, letter_K, letter_F, letter_T, letter_Q, letter_L, letter_H, letter_Y, letter_R, letter_N, letter_J, blank_letter_BG_jp, clear_letters_BG_jp, next_practice_BG_jp, blank_letter_jp, display_letters_clicked_jp, clear_letters_jp, next_practice_jp]
            for thisComponent in recall_lettersComponents:
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
            
            # --- Run Routine "recall_letters" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                # Run 'Each Frame' code from code_jp
                # mouse was last recorded as "not clicked"
                if not mouse_clicked and 1 in mouse_jp.getPressed():
                    mouse_clicked = True
                    
                    # if letter is pressed
                    for _letter in LETTERS:
                        if mouse_jp.isPressedIn(_letter, buttons=[LEFT_CLICK]):
                            letters_clicked.append(_letter.text)
                        
                    # if BLANK is pressed
                    if mouse_jp.isPressedIn(blank_letter_jp, buttons=[LEFT_CLICK]):
                        letters_clicked.append(BLANK_LETTER)
                            
                    # if CLEAR is pressed
                    if mouse_jp.isPressedIn(clear_letters_jp, buttons=[LEFT_CLICK]):
                        letters_clicked = []
                        
                    # if NEXT is pressed
                    if mouse_jp.isPressedIn(next_practice_jp, buttons=[LEFT_CLICK]):
                        continueRoutine = False
                        
                    display_letters_clicked_jp.text = str(letters_clicked)
                else:
                    if not 1 in mouse_jp.getPressed():
                        mouse_clicked = False
                # *mouse_jp* updates
                if mouse_jp.status == NOT_STARTED and t >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    mouse_jp.frameNStart = frameN  # exact frame index
                    mouse_jp.tStart = t  # local t and not account for scr refresh
                    mouse_jp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(mouse_jp, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.addData('mouse_jp.started', t)
                    mouse_jp.status = STARTED
                    mouse_jp.mouseClock.reset()
                    prevButtonState = [0, 0, 0]  # if now button is down we will treat as 'new' click
                if mouse_jp.status == STARTED:  # only update if started and not finished!
                    buttons = mouse_jp.getPressed()
                    if buttons != prevButtonState:  # button state changed?
                        prevButtonState = buttons
                        if sum(buttons) > 0:  # state changed to a new click
                            # check if the mouse was inside our 'clickable' objects
                            gotValidClick = False
                            try:
                                iter([clear_letters, blank_letter, next_practice, letter_S, letter_P, letter_K, letter_F, letter_T, letter_Q, letter_L, letter_H, letter_Y, letter_R, letter_N, letter_J])
                                clickableList = [clear_letters, blank_letter, next_practice, letter_S, letter_P, letter_K, letter_F, letter_T, letter_Q, letter_L, letter_H, letter_Y, letter_R, letter_N, letter_J]
                            except:
                                clickableList = [[clear_letters, blank_letter, next_practice, letter_S, letter_P, letter_K, letter_F, letter_T, letter_Q, letter_L, letter_H, letter_Y, letter_R, letter_N, letter_J]]
                            for obj in clickableList:
                                if obj.contains(mouse_jp):
                                    gotValidClick = True
                                    mouse_jp.clicked_name.append(obj.name)
                            if gotValidClick:
                                x, y = mouse_jp.getPos()
                                mouse_jp.x.append(x)
                                mouse_jp.y.append(y)
                                buttons = mouse_jp.getPressed()
                                mouse_jp.leftButton.append(buttons[0])
                                mouse_jp.midButton.append(buttons[1])
                                mouse_jp.rightButton.append(buttons[2])
                                mouse_jp.time.append(mouse_jp.mouseClock.getTime())
                
                # *remind_text_jp* updates
                if remind_text_jp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    remind_text_jp.frameNStart = frameN  # exact frame index
                    remind_text_jp.tStart = t  # local t and not account for scr refresh
                    remind_text_jp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(remind_text_jp, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'remind_text_jp.started')
                    remind_text_jp.setAutoDraw(True)
                
                # *letter_S* updates
                if letter_S.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    letter_S.frameNStart = frameN  # exact frame index
                    letter_S.tStart = t  # local t and not account for scr refresh
                    letter_S.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(letter_S, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'letter_S.started')
                    letter_S.setAutoDraw(True)
                
                # *letter_P* updates
                if letter_P.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    letter_P.frameNStart = frameN  # exact frame index
                    letter_P.tStart = t  # local t and not account for scr refresh
                    letter_P.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(letter_P, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'letter_P.started')
                    letter_P.setAutoDraw(True)
                
                # *letter_K* updates
                if letter_K.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    letter_K.frameNStart = frameN  # exact frame index
                    letter_K.tStart = t  # local t and not account for scr refresh
                    letter_K.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(letter_K, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'letter_K.started')
                    letter_K.setAutoDraw(True)
                
                # *letter_F* updates
                if letter_F.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    letter_F.frameNStart = frameN  # exact frame index
                    letter_F.tStart = t  # local t and not account for scr refresh
                    letter_F.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(letter_F, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'letter_F.started')
                    letter_F.setAutoDraw(True)
                
                # *letter_T* updates
                if letter_T.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    letter_T.frameNStart = frameN  # exact frame index
                    letter_T.tStart = t  # local t and not account for scr refresh
                    letter_T.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(letter_T, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'letter_T.started')
                    letter_T.setAutoDraw(True)
                
                # *letter_Q* updates
                if letter_Q.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    letter_Q.frameNStart = frameN  # exact frame index
                    letter_Q.tStart = t  # local t and not account for scr refresh
                    letter_Q.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(letter_Q, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'letter_Q.started')
                    letter_Q.setAutoDraw(True)
                
                # *letter_L* updates
                if letter_L.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    letter_L.frameNStart = frameN  # exact frame index
                    letter_L.tStart = t  # local t and not account for scr refresh
                    letter_L.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(letter_L, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'letter_L.started')
                    letter_L.setAutoDraw(True)
                
                # *letter_H* updates
                if letter_H.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    letter_H.frameNStart = frameN  # exact frame index
                    letter_H.tStart = t  # local t and not account for scr refresh
                    letter_H.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(letter_H, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'letter_H.started')
                    letter_H.setAutoDraw(True)
                
                # *letter_Y* updates
                if letter_Y.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    letter_Y.frameNStart = frameN  # exact frame index
                    letter_Y.tStart = t  # local t and not account for scr refresh
                    letter_Y.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(letter_Y, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'letter_Y.started')
                    letter_Y.setAutoDraw(True)
                
                # *letter_R* updates
                if letter_R.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    letter_R.frameNStart = frameN  # exact frame index
                    letter_R.tStart = t  # local t and not account for scr refresh
                    letter_R.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(letter_R, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'letter_R.started')
                    letter_R.setAutoDraw(True)
                
                # *letter_N* updates
                if letter_N.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    letter_N.frameNStart = frameN  # exact frame index
                    letter_N.tStart = t  # local t and not account for scr refresh
                    letter_N.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(letter_N, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'letter_N.started')
                    letter_N.setAutoDraw(True)
                
                # *letter_J* updates
                if letter_J.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    letter_J.frameNStart = frameN  # exact frame index
                    letter_J.tStart = t  # local t and not account for scr refresh
                    letter_J.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(letter_J, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'letter_J.started')
                    letter_J.setAutoDraw(True)
                
                # *blank_letter_BG_jp* updates
                if blank_letter_BG_jp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    blank_letter_BG_jp.frameNStart = frameN  # exact frame index
                    blank_letter_BG_jp.tStart = t  # local t and not account for scr refresh
                    blank_letter_BG_jp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(blank_letter_BG_jp, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'blank_letter_BG_jp.started')
                    blank_letter_BG_jp.setAutoDraw(True)
                
                # *clear_letters_BG_jp* updates
                if clear_letters_BG_jp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    clear_letters_BG_jp.frameNStart = frameN  # exact frame index
                    clear_letters_BG_jp.tStart = t  # local t and not account for scr refresh
                    clear_letters_BG_jp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(clear_letters_BG_jp, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'clear_letters_BG_jp.started')
                    clear_letters_BG_jp.setAutoDraw(True)
                
                # *next_practice_BG_jp* updates
                if next_practice_BG_jp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    next_practice_BG_jp.frameNStart = frameN  # exact frame index
                    next_practice_BG_jp.tStart = t  # local t and not account for scr refresh
                    next_practice_BG_jp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(next_practice_BG_jp, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'next_practice_BG_jp.started')
                    next_practice_BG_jp.setAutoDraw(True)
                
                # *blank_letter_jp* updates
                if blank_letter_jp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    blank_letter_jp.frameNStart = frameN  # exact frame index
                    blank_letter_jp.tStart = t  # local t and not account for scr refresh
                    blank_letter_jp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(blank_letter_jp, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'blank_letter_jp.started')
                    blank_letter_jp.setAutoDraw(True)
                
                # *display_letters_clicked_jp* updates
                if display_letters_clicked_jp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    display_letters_clicked_jp.frameNStart = frameN  # exact frame index
                    display_letters_clicked_jp.tStart = t  # local t and not account for scr refresh
                    display_letters_clicked_jp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(display_letters_clicked_jp, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'display_letters_clicked_jp.started')
                    display_letters_clicked_jp.setAutoDraw(True)
                
                # *clear_letters_jp* updates
                if clear_letters_jp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    clear_letters_jp.frameNStart = frameN  # exact frame index
                    clear_letters_jp.tStart = t  # local t and not account for scr refresh
                    clear_letters_jp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(clear_letters_jp, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'clear_letters_jp.started')
                    clear_letters_jp.setAutoDraw(True)
                
                # *next_practice_jp* updates
                if next_practice_jp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    next_practice_jp.frameNStart = frameN  # exact frame index
                    next_practice_jp.tStart = t  # local t and not account for scr refresh
                    next_practice_jp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(next_practice_jp, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'next_practice_jp.started')
                    next_practice_jp.setAutoDraw(True)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in recall_lettersComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "recall_letters" ---
            for thisComponent in recall_lettersComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # Run 'End Routine' code from code_jp
            num_letters_clicked = len(letters_clicked)
            difference = SET_SIZE - num_letters_clicked
            
            #----- This is to keep track of actual_letter_responses
            # if the user recalled fewer letters, then we record as None
            if difference > 0:
                for _letter in letters_clicked:
                    actual_letter_responses.append(_letter)
                for a in range(difference):
                    actual_letter_responses.append(None)
            # if the user recalled the correct number of letters or recalled more letters
            # then we record only the correct number of letters
            for _letter in letters_clicked[:SET_SIZE]:
                actual_letter_responses.append(_letter)
            
            #----- This is to keep track of rspan_score
            # if there's any difference in length, then
            # rspan_score for this set will be zero
            # so we make this intentionally wrong but in the correct length
            if difference:
                letters_clicked = [None for a in range(SET_SIZE)]
            
            # cannot use list.extend() because that transpiles to JS array.concat()
            # in which it returns a new array and does not modify the existing array
            for _letter in letters_clicked:
                letter_responses.append(_letter)
                
            print(f"""
            letter_responses={letter_responses}
            actual_letter_responses={actual_letter_responses}
            """)
            # store data for small_loop (TrialHandler)
            small_loop.addData('mouse_jp.x', mouse_jp.x)
            small_loop.addData('mouse_jp.y', mouse_jp.y)
            small_loop.addData('mouse_jp.leftButton', mouse_jp.leftButton)
            small_loop.addData('mouse_jp.midButton', mouse_jp.midButton)
            small_loop.addData('mouse_jp.rightButton', mouse_jp.rightButton)
            small_loop.addData('mouse_jp.time', mouse_jp.time)
            small_loop.addData('mouse_jp.clicked_name', mouse_jp.clicked_name)
            # the Routine "recall_letters" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "feedback_display" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from code_18
            #--- Percentage of correct sentences in the loop
            total_num_correct_sentences = 0
            for i in range(len(curr_loop_sentence_answers)):
                if sentence_responses[i] == curr_loop_sentence_answers[i]:
                    total_num_correct_sentences += 1
            
            percent_text = ""
            if not is_main_test:    
                percent = int(
                    total_num_correct_sentences / len(curr_loop_sentence_answers) * 100
                )
                percent_text = f"{percent}%"
            sent_percent_correct = percent_text
            
            
            #--- Number of sentence corrects/errors in this set
            curr_set_num_sentence_errors = 0
            curr_set_num_sentences = SIZE_OF_SETS[small_loop.thisRepN]
            num_sentences_to_skip = 0
            for i in range(small_loop.thisRepN):
                num_sentences_to_skip += SIZE_OF_SETS[i]
                
            curr_set_sentence_answers = curr_loop_sentence_answers[
                num_sentences_to_skip:num_sentences_to_skip + curr_set_num_sentences
            ]
            curr_set_sentence_responses = sentence_responses[
                num_sentences_to_skip:num_sentences_to_skip + curr_set_num_sentences
            ]
            
            for i in range(curr_set_num_sentences):
                if (
                    curr_set_sentence_answers[i] !=
                    curr_set_sentence_responses[i]
                ):
                    curr_set_num_sentence_errors += 1
            
            sentences_feedback_text = (
                f"You have made a total of {curr_set_num_sentence_errors} "
                f"sentence errors during this set of trials."
            )
            
            print(f"""
            num_sentences_to_skip={num_sentences_to_skip}
            curr_set_num_sentences={curr_set_num_sentences}
            
            curr_set_sentence_responses={curr_set_sentence_responses}
            curr_set_sentence_answers={curr_set_sentence_answers}
            curr_set_num_sentence_errors={curr_set_num_sentence_errors}
            """)
            
            
            #--- Number of correct letters recalled in this set
            num_letters = SIZE_OF_SETS[small_loop.thisRepN]
            num_letters_to_skip = 0
            for i in range(small_loop.thisRepN):
                num_letters_to_skip += SIZE_OF_SETS[i]
                
            curr_set_letters = curr_loop_letters[
                num_letters_to_skip:num_letters_to_skip + num_letters
            ]
            curr_set_letter_responses = actual_letter_responses[
                num_letters_to_skip:num_letters_to_skip + num_letters
            ]
                
            num_correct_letters = 0
            for i in range(len(curr_set_letters)):
                if curr_set_letter_responses[i] == curr_set_letters[i]:
                    num_correct_letters += 1
            # but what if participant recalls extra? ignore those?
            
            letters_feedback_text = (
                f"You recalled {num_correct_letters} out of "
                f"{num_letters} letters correctly."
            )
                
            print(f"""
            letter_responses={letter_responses}
            curr_set_letter_responses={curr_set_letter_responses}
            curr_set_letters={curr_set_letters}
            """)
            # keep track of which components have finished
            feedback_displayComponents = [sentences_percent, letters_feedback, sentences_feedback]
            for thisComponent in feedback_displayComponents:
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
            
            # --- Run Routine "feedback_display" ---
            while continueRoutine and routineTimer.getTime() < 4.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *sentences_percent* updates
                if sentences_percent.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    sentences_percent.frameNStart = frameN  # exact frame index
                    sentences_percent.tStart = t  # local t and not account for scr refresh
                    sentences_percent.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(sentences_percent, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sentences_percent.started')
                    sentences_percent.setAutoDraw(True)
                if sentences_percent.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > sentences_percent.tStartRefresh + 4-frameTolerance:
                        # keep track of stop time/frame for later
                        sentences_percent.tStop = t  # not accounting for scr refresh
                        sentences_percent.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'sentences_percent.stopped')
                        sentences_percent.setAutoDraw(False)
                if sentences_percent.status == STARTED:  # only update if drawing
                    sentences_percent.setText(sent_percent_correct, log=False)
                
                # *letters_feedback* updates
                if letters_feedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    letters_feedback.frameNStart = frameN  # exact frame index
                    letters_feedback.tStart = t  # local t and not account for scr refresh
                    letters_feedback.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(letters_feedback, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'letters_feedback.started')
                    letters_feedback.setAutoDraw(True)
                if letters_feedback.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > letters_feedback.tStartRefresh + 4-frameTolerance:
                        # keep track of stop time/frame for later
                        letters_feedback.tStop = t  # not accounting for scr refresh
                        letters_feedback.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'letters_feedback.stopped')
                        letters_feedback.setAutoDraw(False)
                if letters_feedback.status == STARTED:  # only update if drawing
                    letters_feedback.setText(letters_feedback_text, log=False)
                
                # *sentences_feedback* updates
                if sentences_feedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    sentences_feedback.frameNStart = frameN  # exact frame index
                    sentences_feedback.tStart = t  # local t and not account for scr refresh
                    sentences_feedback.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(sentences_feedback, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sentences_feedback.started')
                    sentences_feedback.setAutoDraw(True)
                if sentences_feedback.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > sentences_feedback.tStartRefresh + 4.0-frameTolerance:
                        # keep track of stop time/frame for later
                        sentences_feedback.tStop = t  # not accounting for scr refresh
                        sentences_feedback.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'sentences_feedback.stopped')
                        sentences_feedback.setAutoDraw(False)
                if sentences_feedback.status == STARTED:  # only update if drawing
                    sentences_feedback.setText(sentences_feedback_text, log=False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in feedback_displayComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "feedback_display" ---
            for thisComponent in feedback_displayComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-4.000000)
            thisExp.nextEntry()
            
        # completed LOOP_SIZE repeats of 'small_loop'
        
        
        # --- Prepare to start Routine "process_scores" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_19
        for i in range(len(curr_loop_sentence_answers)):
            if sentence_responses[i] == None:
                sent_speed_error += 1
                continue
            if sentence_responses[i] != curr_loop_sentence_answers[i]:
                sent_acc_error += 1
                
        sent_total_error = sent_speed_error + sent_acc_error
        
        print(f"""
        Score so far:
        sent_speed_error={sent_speed_error}
        sent_acc_error={sent_acc_error}
        sent_total_error={sent_total_error}
        """)
        
        if is_main_test:
            index = 0
            for num_letters in SIZE_OF_SETS:
        #        print(f"""
        #        index={index}
        #        num_letters={num_letters}
        #        lr:{str(letter_responses[index:index + num_letters])}
        #        cll:{str(curr_loop_letters[index:index + num_letters])}
        #        eq:{str(letter_responses[index:index + num_letters]) == str(curr_loop_letters[index:index + num_letters])}
        #        """)
                if (
                    str(letter_responses[index:index + num_letters]) ==
                    str(curr_loop_letters[index:index + num_letters])
                ):
                    rspan_score += num_letters
                index += num_letters
                
            for i in range(len(curr_loop_letters)):
                if actual_letter_responses[i] == curr_loop_letters[i]:
                    total_correct_letters += 1
                    
            print(f"""
            rspan_score={rspan_score}
            total_correct_letters={total_correct_letters}
            """)
            thisExp.addData("rspan_score", rspan_score)
            thisExp.addData("total_correct_letters", total_correct_letters)
            thisExp.addData("sent_speed_error", sent_speed_error)
            thisExp.addData("sent_acc_error", sent_acc_error)
            thisExp.addData("sent_total_error", sent_speed_error + sent_acc_error)
        # keep track of which components have finished
        process_scoresComponents = []
        for thisComponent in process_scoresComponents:
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
        
        # --- Run Routine "process_scores" ---
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
            for thisComponent in process_scoresComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "process_scores" ---
        for thisComponent in process_scoresComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_19
        # only end joint practice when 100% on sentences
        # but don't end early for main test
        if (
            not is_main_test # and sent_total_error == 0
        ):
            big_loop.finished = True
            
        # DISABLE INFINITE PRACTICE FOR TESTING ONLY
        # the Routine "process_scores" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
    # completed BIG_LOOP_REPS repeats of 'big_loop'
    
# completed 2.0 repeats of 'jp_or_main_loop'


# --- Prepare to start Routine "end_instr" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
thankyou.reset()
space_11.keys = []
space_11.rt = []
_space_11_allKeys = []
# keep track of which components have finished
end_instrComponents = [thankyou, space_11]
for thisComponent in end_instrComponents:
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

# --- Run Routine "end_instr" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *thankyou* updates
    if thankyou.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thankyou.frameNStart = frameN  # exact frame index
        thankyou.tStart = t  # local t and not account for scr refresh
        thankyou.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thankyou, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'thankyou.started')
        thankyou.setAutoDraw(True)
    
    # *space_11* updates
    waitOnFlip = False
    if space_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        space_11.frameNStart = frameN  # exact frame index
        space_11.tStart = t  # local t and not account for scr refresh
        space_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(space_11, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'space_11.started')
        space_11.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(space_11.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(space_11.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if space_11.status == STARTED and not waitOnFlip:
        theseKeys = space_11.getKeys(keyList=['space'], waitRelease=False)
        _space_11_allKeys.extend(theseKeys)
        if len(_space_11_allKeys):
            space_11.keys = _space_11_allKeys[-1].name  # just the last key pressed
            space_11.rt = _space_11_allKeys[-1].rt
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
    for thisComponent in end_instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "end_instr" ---
for thisComponent in end_instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if space_11.keys in ['', [], None]:  # No response was made
    space_11.keys = None
thisExp.addData('space_11.keys',space_11.keys)
if space_11.keys != None:  # we had a response
    thisExp.addData('space_11.rt', space_11.rt)
thisExp.nextEntry()
# the Routine "end_instr" was not non-slip safe, so reset the non-slip timer
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
