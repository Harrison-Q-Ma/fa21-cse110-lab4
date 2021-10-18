1. Line 12 will print the number 3. 
2. Line 13 will print the number 150.
3. Line 14 will print ```NaN```. 
4. The function returns a list ```[ NaN, NaN, NaN ]```. This is because __INSERT_EXPLAINATION_HERE__
5. Line 12 will cause an error 
   > `i is not defined`

   This is because ```i``` is declared within the scope of the for loop and cannot be accessed outside of it. 
6. Line 13 will cause an error
   > `discountedPrice is not defined`

   This is because ```discountedPrice``` is declared within the scope of the for loop and cannot be accessed outside of it. 
7. Line 14 will print ```150```.
8. The function returns a list ```[ 50, 100, 150 ]```. This is because we are only pushing to `discounted` which is allowed. 
9. Line 11 will cause an error 
   > `i is not defined`

   This is because ```i``` is declared within the scope of the for loop and cannot be accessed outside of it. 
10. Line 12 will print the number 3. 
11. This function will return a list `[ 50, 100, 150 ]`. This is because we are not trying to change values of any `const` variables, which means we don't trigger any errors and everything works smoothly. We are pushing to the `const` array which means we are not re-assigning it, just manipulation, which is allowed. 
12. 
    1. `student.name` 
    2. `student['Grad Year']`
    3. `student.greeting()` 
    4. `student['Favorite Teacher'].name` 
    5. `student.courseLoad[0]`
13. 1. `32`
    1. `1`
    2. `3` 
    3. `3null`
    4. `4`
    5. `0`
    6. `3undefined` 
    7. `NaN` 
14. 1. `true`
    1. `false`
    2. `true` 
    3. `true`
    4. `false`
    5. `true` 
15. `==` checks for value equality and does type coercion. `===` checks for value equality without doing type coercion. 
16. See [`part2-question16.js`](part2-question16.js)
17. The printed result will be `[ 2, 4, 6 ]`. In each iteration of the for loop, we are pushing to `newArr` the result of applying `doSomething()` to the current element of the original array, which multiplies it by 2. 
18. See [`part2-question18.js`](part2-question18.js)
19. 1 <br /> 4 <br /> 3<br /> 2