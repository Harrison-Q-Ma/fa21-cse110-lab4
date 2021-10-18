1. Line 12 will print the number 3. 
2. Line 13 will print the number 150.
3. Line 14 will print ```NaN``` due to the variable b eing out of scope. 
4. The function returns a list ```[ 50, 100, 150 ]```. This is because `var` is able to be changed anywhere in the scope. 
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
13. 1. `32`. The number `2` got converted to a string because because the `+` is intepreted as string concatenation. 
    1. `1`. The operation `-` is unambiguous and the string `"3"` is converted into type `int`. 
    2. `3`. `null` is intepreted as `0` and was added to `3`. 
    3. `3null`. Same logic as #1, `null` is intepreted as a string because the first argument is a string. 
    4. `4`. `true` is intepreted as a integer with value `1` and added to `3`. 
    5. `0`. `false` and `null` are both intepreted as the number `0`. 
    6. `3undefined`. `undefined` is intepreted as a string and appended to 3. 
    7. `NaN`. `-` is ambiguous and the compiler don't know what to do. 
14. 1. `true`. Forced `2` to convert to numerical value. 
    2. `false`. Comparison of ASCII values give us `"2" > "12"`. 
    3. `true`. `"2"` is converted to `int` and compared to `2`.
    4. `false`. `"2"` is not converted to `int` because `===` does not force type coercion.
    5. `false`. `true` is converted to `1`. 
    6. `true`. The boolean value of `2` is `true`. 
15. `==` checks for value equality and does type coercion. `===` checks for value equality without doing type coercion. 
16. See [`part2-question16.js`](part2-question16.js)
17. The printed result will be `[ 2, 4, 6 ]`. In each iteration of the for loop, we are pushing to `newArr` the result of applying `doSomething()` to the current element of the original array, which multiplies it by 2. 
18. See [`part2-question18.js`](part2-question18.js)
19. 1 <br /> 4 <br /> 3<br /> 2