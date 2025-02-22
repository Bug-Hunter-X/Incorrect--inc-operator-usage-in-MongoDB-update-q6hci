# Incorrect $inc operator usage in MongoDB update
This example demonstrates an incorrect usage of the $inc operator in a MongoDB update operation.  The $inc operator is used to increment a numerical value.  Attempting to increment with a string value will result in an error.  The solution shows the correct implementation.

## Bug
The bug is caused by providing a string ('1') to the $inc operator instead of a numeric value (1). This will lead to an error because the $inc operator expects a numeric value for incrementing.

## Solution
The solution corrects the issue by providing a numeric value (1) to the $inc operator instead of a string value.