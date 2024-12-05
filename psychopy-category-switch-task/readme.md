# Category Switching Task
#### Experiment created in PsychoPy to be run online 
##### Created by Kelly Cotton 03/30/2022
###### Modified by Yiting Cheah and Seck-Wei Lim


### This task is implemented based on the Category Switch Task outlined by:
* Friedman, N. P., Miyake, A., Altamirano, L. J., Corley, R. P., Young, S. E., Rhea, S. A., & Hewitt, J. K. (2016). Stability and change in executive function abilities from late adolescence to early adulthood: A longitudinal twin study. Developmental Psychology, 52(2), 326–340. https://doi.org/10.1037/dev0000075 
* Friedman, N. P., Miyake, A., Young, S. E., DeFries, J. C., Corley, R. P., & Hewitt, J. K. (2008). Individual differences in executive functions are almost entirely genetic in origin. Journal of Experimental Psychology: General, 137(2), 201-225. https://doi.org/10.1037/0096-3445.137.2.201 
	which were adapted from:
		* Mayr, U., & Kliegl, R. (2000). Task-set switching and long-term memory retrieval. Journal of Experimental Psychology: Learning, Memory, and Cognition, 26(5), 1124-1140. https://doi.org/10 1037//0278-7393.26.5.1124 	


### Basic experimental design:
* Category switching task with two categories (living/nonliving and big/small)
	* For the living/nonliving category: Right arrow = "living" and Left arrow = "nonliving"
	* For the big/small category: Right arrow = "big" and Left arrow = "small"
* Participants are presented with a cue (heart for living/nonliving, cross for big small) for 350 ms before seeing a word. They are instructed to judge the word depending on the category prompted by the cue.
* Each trial is separated by a 350ms response-to-cue interval.
* There are four trial types: congruent/switch, congruent/nonswitch, incongruent/switch, incogruent/nonswitch.
	* Category congruency: living/big = congruent, nonliving/small = incongruent
	* Switch trial type: switch = different category from last trial, nonswitch = same category as last trial
	* This information is given to the experiment via the trialtypes.xlsx file. 

### Experimental Flow
1. Instructions and practice
	* Participants practice each category judgment task separately and then together. During the practice, participants are given feedback.
	* Note: If a mistake is made, participants have to correct their answer to proceed to the next cue.
	* At the end of the living and size task (but not the combined practice), participants are given a block feedback (number of errors, mean reaction time in seconds (corrected to 1 decimal place)).
	* In all practice 
	* To increase the number of:
		* living/nonliving practice trials, change the number of loops in "prac_trials_1" (1 loop = 16 practice trials) 
		* big/small practice trials, change the number of loops in "prac_trials_2" (1 loop = 16 practice trials)
		* both category practice, change the number of loops in "prac_trials_3" (1 loop = 16 practice trials)
		* You can also adjust the number of trials by editing the stimuli_prac files.
	* The instruction text can be changed in "code_prac_1"
2. Experimental trials
	* Currently set at 132 total trials: 4 blocks (can be changed by changing "block_total" in setup) * 33 trial (32 + 1) loops (can be changed by editing trialtypes.xlsx).
	* Note: the first trial is separate from the other trials because it must be a nonswitch trial.
	* Participants are reminded of the key mappings before each block.

### Resources needed
* trialtypes.xlsx 
* stimuli_prac1.xlsx
* stimuli_prac2.xlsx
* stimuli_prac3.xlsx
* heart.png
* cross.png


