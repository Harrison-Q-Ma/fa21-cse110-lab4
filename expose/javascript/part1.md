1. The number 20 is printed by line 9. 
2. The number 20 is printed by line 13. 
3. The number 20 is printed by line 9. 
4. Line 20 produces an error 
   >"result is not defined"
   
   This is because ```let``` declares a variable in the scope of a block statement, in this case, the ```if``` condition. 
5. Line 9 does not return anything. Running the code got interrupted at line 5 with the error 
   >"Assignment to constant variable." 

   This is because a variable declared with the keyword ```const``` is a constant and cannot be changed through reassignment or redeclarement.  
6. 	Same as question 5. 

