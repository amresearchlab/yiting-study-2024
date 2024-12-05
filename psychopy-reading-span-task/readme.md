Properties of this experiment is based on:
* Oswald, F. L., McAbee, S. T., S. Redick, T., & Hambrick, D. Z. (2015). The development of a short domain-general measure of working memory capacity. Behavior Research Methods, 47, 1343–1355. https://doi.org/10.3758/s13428-014-0543-2 
  (Experiment 2)

Additional guidelines in relation to test administration, scoring, validity and reliability:
* Conway, A. R. A., Kane, M. J., Bunting, M. F., Hambrick, D. Z., Wilhelm, O., & Engle, R. W. (2005). Working memory span tasks: A methodological review and user’s guide. Psychonomic Bulletin & Review, 12, pages769–786. https://doi.org/10.3758/BF03196772 	


# Changing settings

## Letter Practice

- To modify, update `practice_letters/block.csv`
  - each line represents a set, and `no_of_letters` is the number of letters to appear in the set.
- To skip over this part, change the nReps of the loop `practice_until_perfect` to `0`
  - To restore it, just set the nReps back to a large number like `100000`

## Sentence Practice

- To skip over this part, change the nReps of the loop `sentence_practice_until_perfect` to `0`.
  - To restore it, just set the nReps back to a large number like `100000`

## Joint Practice and Main Test

- All of the settings for these two parts are in the routine `pre_big_loop_init`'s `code_20`'s "Begin Routine"
- `MIN_SET_SIZE` and `MAX_SET_SIZE` - the min and max number of sentence-letter pairs to appear in each set (e.g. for main test they would be `3` and `7` respectively)
- `LOOP_SIZE` - the number of sets in each "big loop" (e.g. for main test this would be `3`)
- `BIG_LOOP_REPS` - the number of "small loops" (e.g. for main test this would be `2`)
- If you have skipped the sentence practice part, and want to hardcode the average read duration (in seconds), then you can set `avg_read_duration` in here too. Currently it is just commented out
  - If you have skipped the sentence practice, and not set `avg_read_duration`, then the sentence prompt will not auto skip.

# Output CSV

- `avg_read_duration` - the recorded average duration in seconds the participant has used to go through sentence prompts in the sentence practice part
- The below are recorded per big loop, hence they appear on multiple rows in the csv file. The last one will be the final values for the participant.
  - `rspan_score_absolute` (absolute scoring)
  - `rspan_score_pcu` (partial credit unit scoring)
  - `total_correct_letters`
  - `sent_speed_errors`
  - `sent_acc_errors`
  - `sent_total_error`

## Reminder

- After changing settings, save the experiment and also "Compile to JS Script" before testing it on local browser
